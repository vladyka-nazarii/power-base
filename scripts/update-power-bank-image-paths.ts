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
  "power-bank",
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
      `https://media.vladyka.dev/${entry.path.replace(/^downloads\//, "")}`,
    ]),
);
const primaryImagePattern =
  /(["']?imagePath["']?\s*:\s*["'])(https?:\/\/[^"']+)(["'])/gi;

let total = 0;

for (const manufacturer of ["anker", "baseus", "ugreen", "xiaomi"]) {
  const seedPath = path.join(
    process.cwd(),
    "lib",
    "db",
    `${manufacturer}-power-bank-seed.ts`,
  );
  let source = await readFile(seedPath, "utf8");
  let updated = 0;

  source = source.replace(
    primaryImagePattern,
    (match, prefix: string, sourceUrl: string, suffix: string) => {
      const mediaUrl = mediaUrls.get(sourceUrl);

      if (!mediaUrl) {
        if (sourceUrl.startsWith("https://media.vladyka.dev/power-bank/")) {
          return match;
        }

        throw new Error(`Missing manifest mapping for ${sourceUrl}`);
      }

      updated += 1;
      return `${prefix}${mediaUrl}${suffix}`;
    },
  );

  await writeFile(seedPath, source);
  console.log(`${manufacturer}: ${updated}`);
  total += updated;
}

console.log(`Updated ${total} primary image paths.`);
