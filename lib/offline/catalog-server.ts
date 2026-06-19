import { createHash } from "node:crypto";
import { asc, eq } from "drizzle-orm";

import type { CatalogCategorySlug } from "@/lib/catalog";
import { db } from "@/lib/db";
import { equipment, equipmentCategories, manufacturers } from "@/lib/db/schema";
import {
  type OfflineCatalogManifest,
  type OfflineCatalogProduct,
  offlineCatalogCategorySlugs,
  offlineCatalogEstimatedBytes,
  offlineCatalogPageSize,
  offlineCatalogSchemaVersion,
} from "@/lib/offline/catalog";

const selection = {
  id: equipment.id,
  categorySlug: equipmentCategories.slug,
  categoryName: equipmentCategories.name,
  categoryNameUk: equipmentCategories.nameUk,
  manufacturer: manufacturers.name,
  slug: equipment.slug,
  model: equipment.model,
  summary: equipment.summary,
  summaryUk: equipment.summaryUk,
  imagePath: equipment.imagePath,
  priceCents: equipment.priceCents,
  productCode: equipment.productCode,
  nominalVoltageV: equipment.nominalVoltageV,
  capacityWh: equipment.capacityWh,
  continuousPowerW: equipment.continuousPowerW,
  peakPowerW: equipment.peakPowerW,
  maxPvVoltageV: equipment.maxPvVoltageV,
  maxChargeCurrentA: equipment.maxChargeCurrentA,
  chemistry: equipment.chemistry,
  communicationProtocols: equipment.communicationProtocols,
  weightGrams: equipment.weightGrams,
  warrantyYears: equipment.warrantyYears,
  lifecycleCycles: equipment.lifecycleCycles,
  sourceLabel: equipment.sourceLabel,
  sourceLabelUk: equipment.sourceLabelUk,
  sourceUrl: equipment.sourceUrl,
  specifications: equipment.specifications,
  updatedAt: equipment.updatedAt,
};

type OfflineRow = Awaited<ReturnType<typeof readOfflineCatalogRows>>[number];

function normalizeRow(row: OfflineRow): OfflineCatalogProduct {
  return {
    id: row.id,
    categorySlug: row.categorySlug as CatalogCategorySlug,
    categoryName: {
      en: row.categoryName,
      uk: row.categoryNameUk ?? row.categoryName,
    },
    manufacturer: row.manufacturer,
    slug: row.slug,
    model: row.model,
    summary: { en: row.summary, uk: row.summaryUk ?? row.summary },
    imagePath: row.imagePath,
    priceCents: row.priceCents,
    productCode: row.productCode,
    nominalVoltageV: row.nominalVoltageV,
    capacityWh: row.capacityWh,
    continuousPowerW: row.continuousPowerW,
    peakPowerW: row.peakPowerW,
    maxPvVoltageV: row.maxPvVoltageV,
    maxChargeCurrentA: row.maxChargeCurrentA,
    chemistry: row.chemistry,
    communicationProtocols: row.communicationProtocols,
    weightGrams: row.weightGrams,
    warrantyYears: row.warrantyYears,
    lifecycleCycles: row.lifecycleCycles,
    sourceLabel: {
      en: row.sourceLabel,
      uk: row.sourceLabelUk ?? row.sourceLabel,
    },
    sourceUrl: row.sourceUrl,
    specifications: row.specifications as Record<string, unknown> | null,
    updatedAt: row.updatedAt.toISOString(),
  };
}

async function readOfflineCatalogRows() {
  const groups = await Promise.all(
    offlineCatalogCategorySlugs.map((category) =>
      db
        .select(selection)
        .from(equipment)
        .innerJoin(
          equipmentCategories,
          eq(equipment.categoryId, equipmentCategories.id),
        )
        .innerJoin(
          manufacturers,
          eq(equipment.manufacturerId, manufacturers.id),
        )
        .where(eq(equipmentCategories.slug, category))
        .orderBy(asc(equipment.id))
        .limit(offlineCatalogPageSize),
    ),
  );

  return groups.flat();
}

export async function getOfflineCatalogProducts() {
  return (await readOfflineCatalogRows()).map(normalizeRow);
}

export async function getOfflineCatalogManifest(): Promise<OfflineCatalogManifest> {
  const products = await getOfflineCatalogProducts();
  const manifestProducts = products.map(
    ({ id, categorySlug, imagePath, slug, updatedAt }) => ({
      id,
      categorySlug,
      imagePath,
      slug,
      updatedAt,
    }),
  );
  const categories = Object.fromEntries(
    offlineCatalogCategorySlugs.map((category) => [
      category,
      products
        .filter((product) => product.categorySlug === category)
        .map((product) => product.id),
    ]),
  ) as OfflineCatalogManifest["categories"];
  const version = createHash("sha256")
    .update(JSON.stringify({ categories, products: manifestProducts }))
    .digest("hex")
    .slice(0, 16);

  return {
    schemaVersion: offlineCatalogSchemaVersion,
    version,
    generatedAt: new Date().toISOString(),
    estimatedBytes: offlineCatalogEstimatedBytes,
    categories,
    products: manifestProducts,
  };
}
