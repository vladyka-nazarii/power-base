"use client";

import {
  diffOfflineCatalog,
  type OfflineCatalogManifest,
  type OfflineCatalogProduct,
  type OfflineCatalogSnapshot,
} from "@/lib/offline/catalog";

const databaseName = "powerbase-offline";
const databaseVersion = 1;
const productsStore = "products";
const metadataStore = "metadata";

type MetadataRecord = { key: string; value: unknown };

export type OfflineProgress = {
  phase: "shell" | "images";
  completed: number;
  total: number;
};

function requestResult<T>(request: IDBRequest<T>) {
  return new Promise<T>((resolve, reject) => {
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

function transactionDone(transaction: IDBTransaction) {
  return new Promise<void>((resolve, reject) => {
    transaction.oncomplete = () => resolve();
    transaction.onerror = () => reject(transaction.error);
    transaction.onabort = () => reject(transaction.error);
  });
}

function openDatabase() {
  return new Promise<IDBDatabase>((resolve, reject) => {
    const request = indexedDB.open(databaseName, databaseVersion);
    request.onupgradeneeded = () => {
      const database = request.result;
      if (!database.objectStoreNames.contains(productsStore)) {
        const products = database.createObjectStore(productsStore, {
          keyPath: "id",
        });
        products.createIndex("categorySlug", "categorySlug");
        products.createIndex("slug", "slug", { unique: true });
      }
      if (!database.objectStoreNames.contains(metadataStore)) {
        database.createObjectStore(metadataStore, { keyPath: "key" });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function readOfflineSnapshot(): Promise<OfflineCatalogSnapshot | null> {
  const database = await openDatabase();
  try {
    const transaction = database.transaction(
      [productsStore, metadataStore],
      "readonly",
    );
    const done = transactionDone(transaction);
    const productsRequest = transaction.objectStore(productsStore).getAll();
    const metadata = transaction.objectStore(metadataStore);
    const manifestRequest = metadata.get("manifest");
    const favoritesRequest = metadata.get("favoriteIds");
    const updatedAtRequest = metadata.get("updatedAt");
    const [products, manifestRecord, favoritesRecord, updatedAtRecord] =
      await Promise.all([
        requestResult(productsRequest),
        requestResult(manifestRequest),
        requestResult(favoritesRequest),
        requestResult(updatedAtRequest),
      ]);
    await done;
    const manifest = (manifestRecord as MetadataRecord | undefined)?.value as
      | OfflineCatalogManifest
      | undefined;

    if (!manifest) {
      return null;
    }

    return {
      manifest,
      products: products as OfflineCatalogProduct[],
      favoriteIds:
        ((favoritesRecord as MetadataRecord | undefined)?.value as number[]) ??
        [],
      updatedAt:
        ((updatedAtRecord as MetadataRecord | undefined)?.value as string) ??
        manifest.generatedAt,
    };
  } finally {
    database.close();
  }
}

async function sendServiceWorkerCommand(
  type:
    | "DOWNLOAD_OFFLINE_CATALOG"
    | "SYNC_OFFLINE_CATALOG"
    | "REMOVE_OFFLINE_CATALOG",
  payload: Record<string, unknown>,
  onProgress?: (progress: OfflineProgress) => void,
) {
  if (!("serviceWorker" in navigator)) {
    throw new Error("Service workers are not supported in this browser.");
  }

  const registration = await navigator.serviceWorker.ready;
  const worker = registration.active;
  if (!worker) {
    throw new Error("The offline worker is not active yet.");
  }

  return new Promise<{ failedImages?: string[] }>((resolve, reject) => {
    const channel = new MessageChannel();
    channel.port1.onmessage = (event) => {
      if (event.data?.type === "OFFLINE_CATALOG_PROGRESS") {
        onProgress?.(event.data.progress as OfflineProgress);
        return;
      }
      channel.port1.close();
      if (event.data?.type === "OFFLINE_CATALOG_ERROR") {
        reject(new Error(event.data.error));
      } else {
        resolve(event.data?.result ?? {});
      }
    };
    worker.postMessage({ type, ...payload }, [channel.port2]);
  });
}

async function readFavoriteIds() {
  try {
    const response = await fetch("/api/offline/catalog/favorites", {
      cache: "no-store",
    });
    if (!response.ok) return [];
    return ((await response.json()) as { ids: number[] }).ids;
  } catch {
    return [];
  }
}

let syncInFlight: Promise<OfflineCatalogSnapshot> | null = null;

export function synchronizeOfflineCatalog(
  options: {
    initial?: boolean;
    onProgress?: (progress: OfflineProgress) => void;
  } = {},
) {
  if (syncInFlight) return syncInFlight;
  syncInFlight = performSynchronization(options).finally(() => {
    syncInFlight = null;
  });
  return syncInFlight;
}

async function performSynchronization({
  initial = false,
  onProgress,
}: {
  initial?: boolean;
  onProgress?: (progress: OfflineProgress) => void;
}) {
  const current = await readOfflineSnapshot();
  const manifestResponse = await fetch("/api/offline/catalog/manifest", {
    cache: "no-store",
  });
  if (!manifestResponse.ok) {
    throw new Error("The offline catalog manifest is unavailable.");
  }
  const manifest = (await manifestResponse.json()) as OfflineCatalogManifest;
  const diff = diffOfflineCatalog(current?.manifest ?? null, manifest);
  const favoriteIds = await readFavoriteIds();

  if (current?.manifest.version === manifest.version && !initial) {
    await sendServiceWorkerCommand(
      "SYNC_OFFLINE_CATALOG",
      { imagePaths: [], obsoleteImagePaths: [] },
      onProgress,
    );
    await updateFavoriteMetadata(favoriteIds);
    return { ...current, favoriteIds };
  }

  let changedProducts: OfflineCatalogProduct[] = [];
  if (diff.changedIds.length > 0) {
    const response = await fetch(
      `/api/offline/catalog/products?ids=${diff.changedIds.join(",")}`,
      { cache: "no-store" },
    );
    if (!response.ok) throw new Error("Offline product download failed.");
    changedProducts = (
      (await response.json()) as { products: OfflineCatalogProduct[] }
    ).products;
    if (changedProducts.length !== diff.changedIds.length) {
      throw new Error("The offline product snapshot is incomplete.");
    }
  }

  await navigator.storage?.persist?.().catch(() => false);
  await sendServiceWorkerCommand(
    initial ? "DOWNLOAD_OFFLINE_CATALOG" : "SYNC_OFFLINE_CATALOG",
    {
      imagePaths: changedProducts.map((product) => product.imagePath),
      obsoleteImagePaths: diff.obsoleteImagePaths,
    },
    onProgress,
  );

  const database = await openDatabase();
  try {
    const transaction = database.transaction(
      [productsStore, metadataStore],
      "readwrite",
    );
    const done = transactionDone(transaction);
    const productStore = transaction.objectStore(productsStore);
    for (const id of diff.deletedIds) productStore.delete(id);
    for (const product of changedProducts) productStore.put(product);
    const metadata = transaction.objectStore(metadataStore);
    metadata.put({ key: "manifest", value: manifest });
    metadata.put({ key: "favoriteIds", value: favoriteIds });
    metadata.put({ key: "updatedAt", value: new Date().toISOString() });
    await done;
  } finally {
    database.close();
  }

  const snapshot = await readOfflineSnapshot();
  if (!snapshot) throw new Error("The offline snapshot could not be saved.");
  window.dispatchEvent(new Event("powerbase-offline-catalog-changed"));
  return snapshot;
}

async function updateFavoriteMetadata(favoriteIds: number[]) {
  const database = await openDatabase();
  try {
    const transaction = database.transaction(metadataStore, "readwrite");
    const done = transactionDone(transaction);
    transaction.objectStore(metadataStore).put({
      key: "favoriteIds",
      value: favoriteIds,
    });
    await done;
  } finally {
    database.close();
  }
}

export async function removeOfflineCatalog() {
  await sendServiceWorkerCommand("REMOVE_OFFLINE_CATALOG", {});
  await new Promise<void>((resolve, reject) => {
    const request = indexedDB.deleteDatabase(databaseName);
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
    request.onblocked = () =>
      reject(new Error("Close other PowerBase tabs first."));
  });
  window.dispatchEvent(new Event("powerbase-offline-catalog-changed"));
}
