import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const seedFiles = ["anker", "bluetti", "ecoflow"].map((manufacturer) => ({
  manufacturer,
  path: path.join(
    process.cwd(),
    "lib",
    "db",
    `${manufacturer}-power-station-seed.ts`,
  ),
}));

const outputRoot = path.join(process.cwd(), "downloads", "power-stations");
const directImagePathPattern =
  /["']?imagePath["']?\s*:\s*["'](https?:\/\/[^"']+)["']/gi;
const imageReferencePattern =
  /["']?imagePath["']?\s*:\s*([A-Za-z_$][\w$]*)\[(\d+)\]/g;
const imageArrayPattern =
  /const\s+([A-Za-z_$][\w$]*)\s*=\s*\[([\s\S]*?)\]\s+as\s+const/g;
const urlPattern = /["'](https?:\/\/[^"']+)["']/g;

type DownloadEntry = {
  manufacturer: string;
  sourceUrl: string;
  path: string;
  status: "downloaded" | "failed";
  width?: number;
  height?: number;
  bytes?: number;
  error?: string;
};

function filenameFor(sourceUrl: string) {
  return `${createHash("md5").update(sourceUrl).digest("hex")}.webp`;
}

function primaryImageUrls(source: string) {
  const imageArrays = new Map<string, string[]>();

  for (const match of source.matchAll(imageArrayPattern)) {
    imageArrays.set(
      match[1],
      [...match[2].matchAll(urlPattern)].map((urlMatch) => urlMatch[1]),
    );
  }

  const sourceUrls = new Set<string>();

  for (const match of source.matchAll(directImagePathPattern)) {
    sourceUrls.add(match[1]);
  }

  for (const match of source.matchAll(imageReferencePattern)) {
    const imageArray = imageArrays.get(match[1]);
    const sourceUrl = imageArray?.[Number(match[2])];

    if (!sourceUrl) {
      throw new Error(`Unable to resolve primary image reference ${match[0]}`);
    }

    sourceUrls.add(sourceUrl);
  }

  return [...sourceUrls];
}

async function fetchWithRetries(sourceUrl: string) {
  let lastError: unknown;

  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      const response = await fetch(sourceUrl, {
        headers: { "user-agent": "PowerBase image archiver/1.0" },
        signal: AbortSignal.timeout(45_000),
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status} ${response.statusText}`);
      }

      return Buffer.from(await response.arrayBuffer());
    } catch (error) {
      lastError = error;
      await Bun.sleep(attempt * 500);
    }
  }

  throw lastError;
}

const jobs: Array<{
  manufacturer: string;
  sourceUrl: string;
  destination: string;
}> = [];

for (const seedFile of seedFiles) {
  const source = await readFile(seedFile.path, "utf8");
  const sourceUrls = primaryImageUrls(source);
  const manufacturerDir = path.join(outputRoot, seedFile.manufacturer);
  await mkdir(manufacturerDir, { recursive: true });

  for (const sourceUrl of sourceUrls) {
    jobs.push({
      manufacturer: seedFile.manufacturer,
      sourceUrl,
      destination: path.join(manufacturerDir, filenameFor(sourceUrl)),
    });
  }
}

const entries: DownloadEntry[] = [];
let nextJob = 0;
let completed = 0;

async function worker() {
  while (nextJob < jobs.length) {
    const job = jobs[nextJob];
    nextJob += 1;

    try {
      const input = await fetchWithRetries(job.sourceUrl);
      const image = await sharp(input)
        .rotate()
        .resize({
          width: 1040,
          height: 780,
          fit: "inside",
          withoutEnlargement: true,
        })
        .webp({ quality: 82, effort: 5 })
        .toFile(job.destination);
      entries.push({
        manufacturer: job.manufacturer,
        sourceUrl: job.sourceUrl,
        path: path
          .relative(process.cwd(), job.destination)
          .replaceAll("\\", "/"),
        status: "downloaded",
        width: image.width,
        height: image.height,
        bytes: image.size,
      });
    } catch (error) {
      entries.push({
        manufacturer: job.manufacturer,
        sourceUrl: job.sourceUrl,
        path: path
          .relative(process.cwd(), job.destination)
          .replaceAll("\\", "/"),
        status: "failed",
        error: error instanceof Error ? error.message : String(error),
      });
    }

    completed += 1;
    if (completed % 25 === 0 || completed === jobs.length) {
      console.log(`Processed ${completed}/${jobs.length}`);
    }
  }
}

await Promise.all(Array.from({ length: 8 }, () => worker()));

entries.sort(
  (left, right) =>
    left.manufacturer.localeCompare(right.manufacturer) ||
    left.sourceUrl.localeCompare(right.sourceUrl),
);
await writeFile(
  path.join(outputRoot, "manifest.json"),
  `${JSON.stringify(entries, null, 2)}\n`,
);

const failed = entries.filter((entry) => entry.status === "failed");
console.log(
  `Downloaded ${entries.length - failed.length}/${entries.length} images.`,
);
if (failed.length > 0) {
  console.error(`${failed.length} downloads failed; see manifest.json.`);
  process.exitCode = 1;
}
