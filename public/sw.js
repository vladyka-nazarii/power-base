const STATIC_CACHE = "powerbase-static-v2";
const OFFLINE_SHELL_CACHE = "powerbase-offline-shell";
const OFFLINE_IMAGE_CACHE = "powerbase-offline-images";
const OFFLINE_URL = "/offline.html";
const OFFLINE_READER_URL = "/offline";
const STATIC_ASSETS = [
  OFFLINE_URL,
  "/favicon.ico",
  "/icons/powerbase-icon-192.png",
  "/icons/powerbase-icon-512.png",
  "/icons/powerbase-maskable-icon-512.png",
  "/icons/powerbase-icon.svg",
  "/icons/powerbase-maskable-icon.svg",
  "/catalog/power-bank.svg",
  "/catalog/power-station.svg",
  "/catalog/battery.svg",
  "/catalog/inverter.svg",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(STATIC_CACHE)
      .then((cache) => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  const currentCaches = new Set([
    STATIC_CACHE,
    OFFLINE_SHELL_CACHE,
    OFFLINE_IMAGE_CACHE,
  ]);
  event.waitUntil(
    caches
      .keys()
      .then((names) =>
        Promise.all(
          names
            .filter(
              (name) =>
                name.startsWith("powerbase-static-") &&
                !currentCaches.has(name),
            )
            .map((name) => caches.delete(name)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

function isSupportedOfflinePath(pathname) {
  return /^\/(en|uk)(?:\/(power-banks|power-stations|batteries|inverters)(?:\/[^/]+)?)?\/?$/.test(
    pathname,
  );
}

async function cacheOfflineShell(port) {
  const cache = await caches.open(OFFLINE_SHELL_CACHE);
  const response = await fetch(OFFLINE_READER_URL, { cache: "reload" });
  if (!response.ok)
    throw new Error("The offline reader could not be downloaded.");
  const html = await response.clone().text();
  await cache.put(OFFLINE_READER_URL, response);

  const assetUrls = [...html.matchAll(/(?:src|href)=["']([^"']+)["']/g)]
    .map((match) => match[1])
    .filter((value) => value.startsWith("/") && !value.startsWith("//"));
  const uniqueAssets = [...new Set(assetUrls)];
  await Promise.all(
    uniqueAssets.map(async (url) => {
      try {
        const assetResponse = await fetch(url, { cache: "reload" });
        if (assetResponse.ok) await cache.put(url, assetResponse);
      } catch {
        // The reader can still use the previous cached asset version.
      }
    }),
  );
  port.postMessage({
    type: "OFFLINE_CATALOG_PROGRESS",
    progress: { phase: "shell", completed: 1, total: 1 },
  });
}

async function cacheOfflineImages(imagePaths, port) {
  const cache = await caches.open(OFFLINE_IMAGE_CACHE);
  const failedImages = [];
  let completed = 0;

  for (const imagePath of imagePaths) {
    try {
      const request = new Request(imagePath, { mode: "no-cors" });
      const response = await fetch(request);
      if (!response.ok && response.type !== "opaque")
        throw new Error("Image failed");
      await cache.put(request, response);
    } catch {
      failedImages.push(imagePath);
    }
    completed += 1;
    port.postMessage({
      type: "OFFLINE_CATALOG_PROGRESS",
      progress: { phase: "images", completed, total: imagePaths.length },
    });
  }

  return failedImages;
}

async function updateOfflineCatalog(message, port) {
  await cacheOfflineShell(port);
  const failedImages = await cacheOfflineImages(message.imagePaths ?? [], port);
  const imageCache = await caches.open(OFFLINE_IMAGE_CACHE);
  await Promise.all(
    (message.obsoleteImagePaths ?? []).map((path) =>
      imageCache.delete(new Request(path, { mode: "no-cors" })),
    ),
  );
  return { failedImages };
}

self.addEventListener("message", (event) => {
  const message = event.data;
  const port = event.ports[0];
  if (!port || !message?.type) return;

  if (
    message.type === "DOWNLOAD_OFFLINE_CATALOG" ||
    message.type === "SYNC_OFFLINE_CATALOG"
  ) {
    event.waitUntil(
      updateOfflineCatalog(message, port)
        .then((result) =>
          port.postMessage({ type: "OFFLINE_CATALOG_COMPLETE", result }),
        )
        .catch((error) =>
          port.postMessage({
            type: "OFFLINE_CATALOG_ERROR",
            error: error instanceof Error ? error.message : String(error),
          }),
        ),
    );
    return;
  }

  if (message.type === "REMOVE_OFFLINE_CATALOG") {
    event.waitUntil(
      Promise.all([
        caches.delete(OFFLINE_SHELL_CACHE),
        caches.delete(OFFLINE_IMAGE_CACHE),
      ])
        .then(() => port.postMessage({ type: "OFFLINE_CATALOG_COMPLETE" }))
        .catch((error) =>
          port.postMessage({
            type: "OFFLINE_CATALOG_ERROR",
            error: error instanceof Error ? error.message : String(error),
          }),
        ),
    );
  }
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;
  const requestUrl = new URL(request.url);

  if (requestUrl.pathname.startsWith("/api/")) return;

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request).catch(async () => {
        if (requestUrl.pathname === OFFLINE_READER_URL) {
          const reader = await caches.match(OFFLINE_READER_URL, {
            ignoreSearch: true,
          });
          if (reader) return reader;
        }

        if (isSupportedOfflinePath(requestUrl.pathname)) {
          const redirectUrl = new URL(OFFLINE_READER_URL, self.location.origin);
          redirectUrl.searchParams.set(
            "path",
            `${requestUrl.pathname}${requestUrl.search}`,
          );
          return Response.redirect(redirectUrl.href, 302);
        }

        return caches.match(OFFLINE_URL, { ignoreSearch: true });
      }),
    );
    return;
  }

  if (requestUrl.origin !== self.location.origin) {
    event.respondWith(
      caches
        .open(OFFLINE_IMAGE_CACHE)
        .then((cache) =>
          cache.match(request).then((stored) => stored ?? fetch(request)),
        ),
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => cached ?? fetch(request)),
  );
});
