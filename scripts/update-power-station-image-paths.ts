import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

type ManifestEntry = {
  sourceUrl: string;
  path: string;
  status: "downloaded" | "failed";
};

const manifestPath = path.join(
  process.cwd(),
  "downloads",
  "power-stations",
  "manifest.json",
);
const manifest = JSON.parse(
  await readFile(manifestPath, "utf8"),
) as ManifestEntry[];
const mediaUrls = new Map(
  manifest
    .filter((entry) => entry.status === "downloaded")
    .map((entry) => [
      entry.sourceUrl,
      entry.path.replace(
        /^downloads\/power-stations\//,
        "https://media.vladyka.dev/power-station/",
      ),
    ]),
);

const directImagePathPattern =
  /(["']?imagePath["']?\s*:\s*["'])(https?:\/\/[^"']+)(["'])/gi;
const imageReferencePattern =
  /(["']?imagePath["']?\s*:\s*)([A-Za-z_$][\w$]*)\[(\d+)\]/g;
const imageArrayPattern =
  /const\s+([A-Za-z_$][\w$]*)\s*=\s*\[([\s\S]*?)\]\s+as\s+const/g;
const urlPattern = /["'](https?:\/\/[^"']+)["']/g;

function imageArraysFor(source: string) {
  const imageArrays = new Map<string, string[]>();

  for (const match of source.matchAll(imageArrayPattern)) {
    imageArrays.set(
      match[1],
      [...match[2].matchAll(urlPattern)].map((urlMatch) => urlMatch[1]),
    );
  }

  return imageArrays;
}

let total = 0;

for (const manufacturer of ["anker", "bluetti", "ecoflow"]) {
  const seedPath = path.join(
    process.cwd(),
    "lib",
    "db",
    `${manufacturer}-power-station-seed.ts`,
  );
  let source = await readFile(seedPath, "utf8");
  const imageArrays = imageArraysFor(source);
  let updated = 0;

  source = source.replace(
    directImagePathPattern,
    (match, prefix: string, sourceUrl: string, suffix: string) => {
      const mediaUrl = mediaUrls.get(sourceUrl);

      if (!mediaUrl) {
        if (sourceUrl.startsWith("https://media.vladyka.dev/power-station/")) {
          return match;
        }

        throw new Error(`Missing manifest mapping for ${sourceUrl}`);
      }

      updated += 1;
      return `${prefix}${mediaUrl}${suffix}`;
    },
  );

  source = source.replace(
    imageReferencePattern,
    (match, prefix: string, arrayName: string, index: string) => {
      const sourceUrl = imageArrays.get(arrayName)?.[Number(index)];
      const mediaUrl = sourceUrl ? mediaUrls.get(sourceUrl) : undefined;

      if (!mediaUrl) {
        throw new Error(`Missing manifest mapping for ${match}`);
      }

      updated += 1;
      return `${prefix}"${mediaUrl}"`;
    },
  );

  await writeFile(seedPath, source);
  console.log(`${manufacturer}: ${updated}`);
  total += updated;
}

console.log(`Updated ${total} primary image paths.`);
