import {
  and,
  asc,
  desc,
  eq,
  gte,
  ilike,
  inArray,
  or,
  type SQL,
} from "drizzle-orm";

import { db } from "@/lib/db";
import {
  equipment,
  equipmentCategories,
  manufacturers,
} from "@/lib/db/schema";
import type { Locale } from "@/lib/i18n";

export const catalogCategorySlugs = [
  "power-banks",
  "power-stations",
  "batteries",
  "inverters",
] as const;

export type CatalogCategorySlug = (typeof catalogCategorySlugs)[number];

export type CatalogSort =
  | "recommended"
  | "price-asc"
  | "price-desc"
  | "capacity-desc"
  | "power-desc"
  | "weight-asc";

export type CatalogFilters = {
  q?: string;
  manufacturers: string[];
  voltages: number[];
  chemistries: string[];
  minCapacityWh?: number;
  minPowerW?: number;
  sort: CatalogSort;
};

export const catalogPageCopy: Record<
  Locale,
  Record<
    CatalogCategorySlug,
    {
      eyebrow: string;
      title: string;
      description: string;
      emptyTitle: string;
    }
  >
> = {
  en: {
    "power-banks": {
      eyebrow: "Portable DC power",
      title: "Power Banks",
      description:
        "Compact packs for phones, laptops, field kits, and everyday carry.",
      emptyTitle: "No power banks match these filters",
    },
    "power-stations": {
      eyebrow: "Portable AC backup",
      title: "Power Stations",
      description:
        "All-in-one battery stations for outages, mobile work, and camping.",
      emptyTitle: "No power stations match these filters",
    },
    batteries: {
      eyebrow: "Energy storage",
      title: "Batteries",
      description:
        "Standalone modules for expandable backup, off-grid, and hybrid systems.",
      emptyTitle: "No batteries match these filters",
    },
    inverters: {
      eyebrow: "Power conversion",
      title: "Inverters",
      description:
        "Pure sine, inverter-charger, and hybrid models for real system design.",
      emptyTitle: "No inverters match these filters",
    },
  },
  uk: {
    "power-banks": {
      eyebrow: "Портативне DC живлення",
      title: "Повербанки",
      description:
        "Компактні акумулятори для телефонів, ноутбуків, польових комплектів і щоденного носіння.",
      emptyTitle: "Повербанки за цими фільтрами не знайдено",
    },
    "power-stations": {
      eyebrow: "Портативний AC резерв",
      title: "Портативні електростанції",
      description:
        "Готові батарейні станції для відключень, мобільної роботи та кемпінгу.",
      emptyTitle: "Портативні електростанції за цими фільтрами не знайдено",
    },
    batteries: {
      eyebrow: "Накопичення енергії",
      title: "Акумулятори",
      description:
        "Окремі модулі для розширюваних резервних, автономних і гібридних систем.",
      emptyTitle: "Акумулятори за цими фільтрами не знайдено",
    },
    inverters: {
      eyebrow: "Перетворення енергії",
      title: "Інвертори",
      description:
        "Моделі з чистою синусоїдою, інвертори-зарядні пристрої та гібридні рішення.",
      emptyTitle: "Інвертори за цими фільтрами не знайдено",
    },
  },
};

export const catalogUiCopy: Record<
  Locale,
  {
    filters: string;
    reset: string;
    search: string;
    searchPlaceholder: string;
    manufacturer: string;
    nominalVoltage: string;
    chemistry: string;
    minCapacity: string;
    minPower: string;
    matchingProducts: (count: number) => string;
    productCount: (shown: number, total: number) => string;
    sortOptions: Record<CatalogSort, string>;
    databaseUnavailable: string;
    catalogOffline: string;
    offlineDescription: string;
    emptyDescription: string;
    weight: string;
    warranty: string;
    yearShort: string;
    notAvailable: string;
  }
> = {
  en: {
    filters: "Filters",
    reset: "Reset",
    search: "Search",
    searchPlaceholder: "Model name",
    manufacturer: "Manufacturer",
    nominalVoltage: "Nominal voltage",
    chemistry: "Chemistry",
    minCapacity: "Min capacity (Wh)",
    minPower: "Min power (W)",
    matchingProducts: (count) => `${count} matching products`,
    productCount: (shown, total) => `${shown} of ${total} products`,
    sortOptions: {
      recommended: "Recommended",
      "price-asc": "Price: low to high",
      "price-desc": "Price: high to low",
      "capacity-desc": "Highest capacity",
      "power-desc": "Highest power",
      "weight-asc": "Lightest",
    },
    databaseUnavailable: "Database is unavailable",
    catalogOffline: "Catalog database is offline",
    offlineDescription:
      "Start local Postgres, run the migration and seed commands, then refresh this page.",
    emptyDescription:
      "Try a broader capacity, voltage, chemistry, or manufacturer selection.",
    weight: "Weight",
    warranty: "Warranty",
    yearShort: "yr",
    notAvailable: "n/a",
  },
  uk: {
    filters: "Фільтри",
    reset: "Скинути",
    search: "Пошук",
    searchPlaceholder: "Назва моделі",
    manufacturer: "Виробник",
    nominalVoltage: "Номінальна напруга",
    chemistry: "Хімія",
    minCapacity: "Мін. ємність (Wh)",
    minPower: "Мін. потужність (W)",
    matchingProducts: (count) => `${count} товарів знайдено`,
    productCount: (shown, total) => `${shown} з ${total} товарів`,
    sortOptions: {
      recommended: "Рекомендовані",
      "price-asc": "Ціна: від нижчої",
      "price-desc": "Ціна: від вищої",
      "capacity-desc": "Найбільша ємність",
      "power-desc": "Найбільша потужність",
      "weight-asc": "Найлегші",
    },
    databaseUnavailable: "База даних недоступна",
    catalogOffline: "База каталогу офлайн",
    offlineDescription:
      "Запустіть локальний Postgres, виконайте міграцію й seed-команду, а потім оновіть сторінку.",
    emptyDescription:
      "Спробуйте ширший діапазон ємності, напруги, хімії або виробників.",
    weight: "Вага",
    warranty: "Гарантія",
    yearShort: "р.",
    notAvailable: "н/д",
  },
};

function sortExpression(sort: CatalogSort) {
  switch (sort) {
    case "price-asc":
      return asc(equipment.priceCents);
    case "price-desc":
      return desc(equipment.priceCents);
    case "capacity-desc":
      return desc(equipment.capacityWh);
    case "power-desc":
      return desc(equipment.continuousPowerW);
    case "weight-asc":
      return asc(equipment.weightGrams);
    case "recommended":
    default:
      return asc(equipment.id);
  }
}

function compactConditions(conditions: Array<SQL | undefined>) {
  return conditions.filter(Boolean) as SQL[];
}

export async function getCatalogPageData(
  categorySlug: CatalogCategorySlug,
  filters: CatalogFilters,
  locale: Locale,
) {
  const localizedSummary =
    locale === "uk" ? equipment.summaryUk : equipment.summary;
  const localizedSourceLabel =
    locale === "uk" ? equipment.sourceLabelUk : equipment.sourceLabel;
  const localizedChemistry =
    locale === "uk" ? equipment.chemistryUk : equipment.chemistry;
  const localizedCategoryName =
    locale === "uk" ? equipmentCategories.nameUk : equipmentCategories.name;

  try {
    const baseRows = await db
      .select({
        id: equipment.id,
        model: equipment.model,
        slug: equipment.slug,
        summary: localizedSummary,
        imagePath: equipment.imagePath,
        priceCents: equipment.priceCents,
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
        manufacturer: manufacturers.name,
        categoryName: localizedCategoryName,
      })
      .from(equipment)
      .innerJoin(
        equipmentCategories,
        eq(equipment.categoryId, equipmentCategories.id),
      )
      .innerJoin(manufacturers, eq(equipment.manufacturerId, manufacturers.id))
      .where(eq(equipmentCategories.slug, categorySlug))
      .orderBy(asc(equipment.id));

    const conditions = compactConditions([
      eq(equipmentCategories.slug, categorySlug),
      filters.q
        ? or(
            ilike(equipment.model, `%${filters.q}%`),
            ilike(locale === "uk" ? equipment.summaryUk : equipment.summary, `%${filters.q}%`),
          )
        : undefined,
      filters.manufacturers.length > 0
        ? inArray(manufacturers.name, filters.manufacturers)
        : undefined,
      filters.voltages.length > 0
        ? inArray(equipment.nominalVoltageV, filters.voltages)
        : undefined,
      filters.chemistries.length > 0
        ? inArray(equipment.chemistry, filters.chemistries)
        : undefined,
      filters.minCapacityWh
        ? gte(equipment.capacityWh, filters.minCapacityWh)
        : undefined,
      filters.minPowerW
        ? gte(equipment.continuousPowerW, filters.minPowerW)
        : undefined,
    ]);

    const products = await db
      .select({
        id: equipment.id,
        model: equipment.model,
        slug: equipment.slug,
        summary: localizedSummary,
        imagePath: equipment.imagePath,
        priceCents: equipment.priceCents,
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
        manufacturer: manufacturers.name,
        categoryName: localizedCategoryName,
      })
      .from(equipment)
      .innerJoin(
        equipmentCategories,
        eq(equipment.categoryId, equipmentCategories.id),
      )
      .innerJoin(manufacturers, eq(equipment.manufacturerId, manufacturers.id))
      .where(and(...conditions))
      .orderBy(sortExpression(filters.sort), asc(equipment.id));

    const capacities = baseRows
      .map((product) => product.capacityWh)
      .filter((value): value is number => value !== null);
    const powers = baseRows
      .map((product) => product.continuousPowerW)
      .filter((value): value is number => value !== null);

    return {
      products,
      totalProducts: baseRows.length,
      unavailable: false,
      facets: {
        manufacturers: [...new Set(baseRows.map((product) => product.manufacturer))],
        voltages: [
          ...new Set(
            baseRows
              .map((product) => product.nominalVoltageV)
              .filter((value): value is number => value !== null),
          ),
        ].sort((a, b) => a - b),
        chemistries: [
          ...new Set(
            baseRows
              .map((product) =>
                product.chemistry
                  ? {
                      value: product.chemistry,
                      label: product.chemistryLabel ?? product.chemistry,
                    }
                  : null,
              )
              .filter(
                (value): value is { value: string; label: string } =>
                  value !== null,
              )
              .map((value) => JSON.stringify(value)),
          ),
        ].map((value) => JSON.parse(value) as { value: string; label: string }),
        maxCapacityWh: capacities.length > 0 ? Math.max(...capacities) : null,
        maxPowerW: powers.length > 0 ? Math.max(...powers) : null,
      },
    };
  } catch (error) {
    console.error("Catalog database read failed", error);

    return {
      products: [],
      totalProducts: 0,
      unavailable: true,
      facets: {
        manufacturers: [],
        voltages: [],
        chemistries: [],
        maxCapacityWh: null,
        maxPowerW: null,
      },
    };
  }
}

export function parseCatalogFilters(
  searchParams: Record<string, string | string[] | undefined>,
): CatalogFilters {
  const values = (key: string) => {
    const value = searchParams[key];
    return Array.isArray(value) ? value : value ? [value] : [];
  };
  const numberValues = (key: string) =>
    values(key)
      .map((value) => Number.parseInt(value, 10))
      .filter((value) => Number.isFinite(value));
  const numberValue = (key: string) => {
    const [value] = numberValues(key);
    return value;
  };
  const [q] = values("q");
  const [sortValue] = values("sort");
  const sorts: CatalogSort[] = [
    "recommended",
    "price-asc",
    "price-desc",
    "capacity-desc",
    "power-desc",
    "weight-asc",
  ];

  return {
    q,
    manufacturers: values("manufacturer"),
    voltages: numberValues("voltage"),
    chemistries: values("chemistry"),
    minCapacityWh: numberValue("minCapacityWh"),
    minPowerW: numberValue("minPowerW"),
    sort: sorts.includes(sortValue as CatalogSort)
      ? (sortValue as CatalogSort)
      : "recommended",
  };
}

export function formatPrice(priceCents: number, locale: Locale = "en") {
  return new Intl.NumberFormat(locale === "uk" ? "uk-UA" : "en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(priceCents / 100);
}

export function formatWeight(weightGrams: number | null, locale: Locale = "en") {
  if (!weightGrams) {
    return locale === "uk" ? "н/д" : "n/a";
  }

  return weightGrams >= 1000
    ? `${(weightGrams / 1000).toLocaleString(locale === "uk" ? "uk-UA" : "en-US", {
        maximumFractionDigits: 1,
      })} ${locale === "uk" ? "кг" : "kg"}`
    : `${weightGrams} ${locale === "uk" ? "г" : "g"}`;
}
