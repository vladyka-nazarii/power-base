import { desc, eq, inArray, sql } from "drizzle-orm";
import { headers } from "next/headers";

import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import {
  equipment,
  equipmentCategories,
  manufacturers,
  userFavorites,
} from "@/lib/db/schema";
import type { Locale } from "@/lib/i18n";

export async function getCurrentSession() {
  try {
    return await auth.api.getSession({
      headers: await headers(),
    });
  } catch {
    return null;
  }
}

export async function getFavoriteEquipmentIds(userId: string | undefined) {
  if (!userId) {
    return new Set<number>();
  }

  const rows = await db
    .select({ equipmentId: userFavorites.equipmentId })
    .from(userFavorites)
    .where(eq(userFavorites.userId, userId))
    .catch(() => []);

  return new Set(rows.map((row) => row.equipmentId));
}

export async function getFavoriteProducts(userId: string | undefined) {
  if (!userId) {
    return [];
  }

  const favoriteIds = await getFavoriteEquipmentIds(userId);

  if (favoriteIds.size === 0) {
    return [];
  }

  return db
    .select()
    .from(equipment)
    .where(inArray(equipment.id, [...favoriteIds]));
}

export async function getFavoriteCatalogProducts({
  locale,
  userId,
}: {
  locale: Locale;
  userId: string | undefined;
}) {
  if (!userId) {
    return {
      products: [],
      unavailable: false,
    };
  }

  const localizedSummary =
    locale === "uk"
      ? sql<string>`coalesce(${equipment.summaryUk}, ${equipment.summary})`
      : equipment.summary;
  const localizedSourceLabel =
    locale === "uk"
      ? sql<string>`coalesce(${equipment.sourceLabelUk}, ${equipment.sourceLabel})`
      : equipment.sourceLabel;
  const localizedChemistry = equipment.chemistry;
  const localizedCategoryName =
    locale === "uk"
      ? sql<string>`coalesce(${equipmentCategories.nameUk}, ${equipmentCategories.name})`
      : equipmentCategories.name;

  try {
    const products = await db
      .select({
        id: equipment.id,
        model: equipment.model,
        slug: equipment.slug,
        summary: localizedSummary,
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
        chemistryLabel: localizedChemistry,
        communicationProtocols: equipment.communicationProtocols,
        weightGrams: equipment.weightGrams,
        warrantyYears: equipment.warrantyYears,
        lifecycleCycles: equipment.lifecycleCycles,
        sourceLabel: localizedSourceLabel,
        sourceUrl: equipment.sourceUrl,
        specifications: equipment.specifications,
        manufacturer: manufacturers.name,
        categoryName: localizedCategoryName,
        categorySlug: equipmentCategories.slug,
      })
      .from(userFavorites)
      .innerJoin(equipment, eq(userFavorites.equipmentId, equipment.id))
      .innerJoin(
        equipmentCategories,
        eq(equipment.categoryId, equipmentCategories.id),
      )
      .innerJoin(manufacturers, eq(equipment.manufacturerId, manufacturers.id))
      .where(eq(userFavorites.userId, userId))
      .orderBy(desc(userFavorites.createdAt));

    return {
      products,
      unavailable: false,
    };
  } catch (error) {
    console.error("Favorite products database read failed", error);

    return {
      products: [],
      unavailable: true,
    };
  }
}
