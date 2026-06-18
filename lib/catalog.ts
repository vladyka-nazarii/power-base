import {
  and,
  asc,
  count,
  desc,
  eq,
  gte,
  ilike,
  inArray,
  or,
  type SQL,
} from "drizzle-orm";
import { createHash } from "node:crypto";

import { ensureRedisConnected } from "@/lib/cache/redis";
import { db } from "@/lib/db";
import { equipment, equipmentCategories, manufacturers } from "@/lib/db/schema";
import type { Locale } from "@/lib/i18n";
import {
  normalizePowerBankSpecifications,
  type PowerBankSpecifications,
} from "@/lib/power-bank-specs";

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
  capacityWh?: number;
  capacityWhRanges: string[];
  batteryChemistries: string[];
  supportedOutputProtocols: string[];
  maxInputPower?: number;
  maxInputPowerRanges: string[];
  maxOutputPower?: number;
  maxOutputPowerRanges: string[];
  passthroughCharging?: boolean;
  gravimetricDensity?: number;
  gravimetricDensityRanges: string[];
  dimensionLength?: number;
  dimensionLengthRanges: string[];
  dimensionWidth?: number;
  dimensionWidthRanges: string[];
  dimensionThickness?: number;
  dimensionThicknessRanges: string[];
  weight?: number;
  weightRanges: string[];
  displayTypes: string[];
  price?: number;
  priceRanges: string[];
  builtInCables: string[];
  wirelessChargingMaxPower?: number;
  wirelessChargingMaxPowerRanges: string[];
  sort: CatalogSort;
  page: number;
};

export type CatalogProductSpecifications = Record<string, unknown>;

export const catalogPageSize = 12;
const catalogPageCacheTtlSeconds = Number(
  process.env.CATALOG_PAGE_CACHE_TTL_SECONDS ?? 300,
);

export type CatalogPagination = {
  page: number;
  pageSize: number;
  totalPages: number;
  totalProducts: number;
  shownFrom: number;
  shownTo: number;
};

export type NumberRangeFilterOption = {
  id: string;
  label: string;
  min?: number;
  max?: number;
  includeMissingAsZero?: boolean;
};

export const powerBankNumberFilterGroups = {
  capacityWh: {
    title: "Capacity",
    param: "capacityWhRange",
    options: [
      { id: "lt-20", label: "< 20 Wh", max: 20 },
      { id: "20-50", label: "20-50 Wh", min: 20, max: 50 },
      { id: "gt-50", label: "> 50 Wh", min: 50 },
    ],
  },
  maxInputPower: {
    title: "Input power",
    param: "maxInputPowerRange",
    options: [
      { id: "lt-20", label: "< 20 W", max: 20 },
      { id: "20-45", label: "20-45 W", min: 20, max: 45 },
      { id: "gt-45", label: "> 45 W", min: 45 },
    ],
  },
  maxOutputPower: {
    title: "Output power",
    param: "maxOutputPowerRange",
    options: [
      { id: "lt-20", label: "< 20 W", max: 20 },
      { id: "20-65", label: "20-65 W", min: 20, max: 65 },
      { id: "gt-65", label: "> 65 W", min: 65 },
    ],
  },
  gravimetricDensity: {
    title: "Density",
    param: "gravimetricDensityRange",
    options: [
      { id: "lt-150", label: "< 150 Wh/kg", max: 150 },
      { id: "150-200", label: "150-200 Wh/kg", min: 150, max: 200 },
      { id: "gt-200", label: "> 200 Wh/kg", min: 200 },
    ],
  },
  weight: {
    title: "Weight",
    param: "weightRange",
    options: [
      { id: "lt-200", label: "< 200 g", max: 200 },
      { id: "200-400", label: "200-400 g", min: 200, max: 400 },
      { id: "gt-400", label: "> 400 g", min: 400 },
    ],
  },
  price: {
    title: "Price",
    param: "priceRange",
    options: [
      { id: "lt-30", label: "< $30", max: 30 },
      { id: "30-70", label: "$30-$70", min: 30, max: 70 },
      { id: "gt-70", label: "> $70", min: 70 },
    ],
  },
  wirelessChargingMaxPower: {
    title: "Wireless charging",
    param: "wirelessChargingMaxPowerRange",
    options: [
      { id: "none", label: "None", max: 0, includeMissingAsZero: true },
      { id: "lt-10", label: "< 10 W", min: 0, max: 10 },
      { id: "10-15", label: "10-15 W", min: 10, max: 15 },
      { id: "gt-15", label: "> 15 W", min: 15 },
    ],
  },
  dimensionLength: {
    title: "Length",
    param: "lengthRange",
    options: [
      { id: "lt-100", label: "< 100 mm", max: 100 },
      { id: "100-150", label: "100-150 mm", min: 100, max: 150 },
      { id: "gt-150", label: "> 150 mm", min: 150 },
    ],
  },
  dimensionWidth: {
    title: "Width",
    param: "widthRange",
    options: [
      { id: "lt-65", label: "< 65 mm", max: 65 },
      { id: "65-80", label: "65-80 mm", min: 65, max: 80 },
      { id: "gt-80", label: "> 80 mm", min: 80 },
    ],
  },
  dimensionThickness: {
    title: "Thickness",
    param: "thicknessRange",
    options: [
      { id: "lt-15", label: "< 15 mm", max: 15 },
      { id: "15-25", label: "15-25 mm", min: 15, max: 25 },
      { id: "gt-25", label: "> 25 mm", min: 25 },
    ],
  },
} as const;

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
      title: "Павербанки",
      description:
        "Компактні акумулятори для телефонів, ноутбуків, польових комплектів і щоденного носіння.",
      emptyTitle: "Павербанки за цими фільтрами не знайдено",
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
    maxInputPower: string;
    maxOutputPower: string;
    passthroughCharging: string;
    minGravimetricDensity: string;
    maxDimensions: string;
    length: string;
    width: string;
    thickness: string;
    maxWeight: string;
    displayType: string;
    maxPrice: string;
    outputProtocols: string;
    builtInCable: string;
    minWirelessChargingPower: string;
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
    maxInputPower: "Min input power (W)",
    maxOutputPower: "Min output power (W)",
    passthroughCharging: "Passthrough charging",
    minGravimetricDensity: "Min density (Wh/kg)",
    maxDimensions: "Max dimensions (mm)",
    length: "Length",
    width: "Width",
    thickness: "Thickness",
    maxWeight: "Max weight (g)",
    displayType: "Display type",
    maxPrice: "Max price (USD)",
    outputProtocols: "Output protocols",
    builtInCable: "Built-in cable",
    minWirelessChargingPower: "Min wireless power (W)",
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
    maxInputPower: "Min input power (W)",
    maxOutputPower: "Min output power (W)",
    passthroughCharging: "Passthrough charging",
    minGravimetricDensity: "Min density (Wh/kg)",
    maxDimensions: "Max dimensions (mm)",
    length: "Length",
    width: "Width",
    thickness: "Thickness",
    maxWeight: "Max weight (g)",
    displayType: "Display type",
    maxPrice: "Max price (USD)",
    outputProtocols: "Output protocols",
    builtInCable: "Built-in cable",
    minWirelessChargingPower: "Min wireless power (W)",
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

export const productDetailCopy: Record<
  Locale,
  {
    backToCatalog: string;
    databaseUnavailable: string;
    offlineDescription: string;
    overview: string;
    electrical: string;
    physical: string;
    lifecycle: string;
    source: string;
    additionalSpecifications: string;
    manufacturer: string;
    category: string;
    model: string;
    productCode: string;
    price: string;
    nominalVoltage: string;
    capacity: string;
    continuousPower: string;
    peakPower: string;
    maxPvVoltage: string;
    maxChargeCurrent: string;
    chemistry: string;
    communicationProtocols: string;
    weight: string;
    warranty: string;
    lifecycleCycles: string;
    updatedAt: string;
    notAvailable: string;
    yearShort: string;
    cycles: string;
  }
> = {
  en: {
    backToCatalog: "Back to catalog",
    databaseUnavailable: "Catalog database is unavailable",
    offlineDescription:
      "Start local Postgres, run the migration and seed commands, then refresh this page.",
    overview: "Overview",
    electrical: "Electrical",
    physical: "Physical",
    lifecycle: "Lifecycle",
    source: "Source",
    additionalSpecifications: "Additional specifications",
    manufacturer: "Manufacturer",
    category: "Category",
    model: "Model",
    productCode: "Product code",
    price: "Price",
    nominalVoltage: "Nominal voltage",
    capacity: "Capacity",
    continuousPower: "Continuous power",
    peakPower: "Peak power",
    maxPvVoltage: "Max PV voltage",
    maxChargeCurrent: "Max charge current",
    chemistry: "Chemistry",
    communicationProtocols: "Communication",
    weight: "Weight",
    warranty: "Warranty",
    lifecycleCycles: "Lifecycle",
    updatedAt: "Updated",
    notAvailable: "n/a",
    yearShort: "yr",
    cycles: "cycles",
  },
  uk: {
    backToCatalog: "Назад до каталогу",
    databaseUnavailable: "База каталогу недоступна",
    offlineDescription:
      "Запустіть локальний Postgres, виконайте міграцію та seed-команду, а потім оновіть сторінку.",
    overview: "Огляд",
    electrical: "Електричні параметри",
    physical: "Фізичні параметри",
    lifecycle: "Ресурс",
    source: "Джерело",
    additionalSpecifications: "Додаткові характеристики",
    manufacturer: "Виробник",
    category: "Категорія",
    model: "Модель",
    productCode: "Код продукту",
    price: "Ціна",
    nominalVoltage: "Номінальна напруга",
    capacity: "Ємність",
    continuousPower: "Постійна потужність",
    peakPower: "Пікова потужність",
    maxPvVoltage: "Макс. напруга PV",
    maxChargeCurrent: "Макс. струм заряду",
    chemistry: "Хімія",
    communicationProtocols: "Комунікація",
    weight: "Вага",
    warranty: "Гарантія",
    lifecycleCycles: "Життєвий цикл",
    updatedAt: "Оновлено",
    notAvailable: "н/д",
    yearShort: "р.",
    cycles: "циклів",
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
    default:
      return asc(equipment.id);
  }
}

function paginationFor(totalProducts: number, requestedPage: number) {
  const totalPages = Math.max(1, Math.ceil(totalProducts / catalogPageSize));
  const page = Math.min(Math.max(requestedPage, 1), totalPages);
  const shownFrom = totalProducts === 0 ? 0 : (page - 1) * catalogPageSize + 1;
  const shownTo =
    totalProducts === 0 ? 0 : Math.min(page * catalogPageSize, totalProducts);

  return {
    page,
    pageSize: catalogPageSize,
    totalPages,
    totalProducts,
    shownFrom,
    shownTo,
  };
}

function paginatedRows<T>(rows: T[], pagination: CatalogPagination) {
  const offset = (pagination.page - 1) * pagination.pageSize;

  return rows.slice(offset, offset + pagination.pageSize);
}

function compactConditions(conditions: Array<SQL | undefined>) {
  return conditions.filter(Boolean) as SQL[];
}

function matchesNumberRangeOption(
  rawValue: number | undefined,
  option: NumberRangeFilterOption,
) {
  const value =
    rawValue === undefined && option.includeMissingAsZero ? 0 : rawValue;

  if (value === undefined) {
    return false;
  }

  return (
    (option.min === undefined || value >= option.min) &&
    (option.max === undefined || value < option.max)
  );
}

function matchesNumberRangeFilter(
  value: number | undefined,
  selectedIds: string[],
  options: readonly NumberRangeFilterOption[],
) {
  if (selectedIds.length === 0) {
    return true;
  }

  return options.some(
    (option) =>
      selectedIds.includes(option.id) &&
      matchesNumberRangeOption(value, option),
  );
}

type CatalogProductRow = {
  model: string;
  manufacturer: string;
  capacityWh: number | null;
  chemistry: string | null;
  communicationProtocols: string | null;
  continuousPowerW: number | null;
  weightGrams: number | null;
  priceCents: number | null;
  summary: string | null;
  specifications: unknown;
};

type CountedFacet = {
  value: string;
  count: number;
};

type CountedNumberRangeFacet = CountedFacet & {
  label: string;
};

const powerBankSpecsCache = new WeakMap<
  CatalogProductRow,
  PowerBankSpecifications
>();

function powerBankSpecs(product: CatalogProductRow): PowerBankSpecifications {
  const cachedSpecifications = powerBankSpecsCache.get(product);

  if (cachedSpecifications) {
    return cachedSpecifications;
  }

  const specifications =
    product.specifications &&
    typeof product.specifications === "object" &&
    !Array.isArray(product.specifications)
      ? (product.specifications as Record<string, unknown>)
      : null;

  const normalizedSpecifications = {
    ...(specifications ?? {}),
    ...normalizePowerBankSpecifications({
      ...product,
      specifications,
    }),
  } as PowerBankSpecifications;

  powerBankSpecsCache.set(product, normalizedSpecifications);

  return normalizedSpecifications;
}

function matchesPowerBankFilters(
  product: CatalogProductRow,
  filters: CatalogFilters,
  exclude: string | null = null,
) {
  const specifications = powerBankSpecs(product);
  const dimensions = specifications.dimensions;

  return [
    exclude === "manufacturer" ||
      filters.manufacturers.length === 0 ||
      filters.manufacturers.includes(product.manufacturer),
    exclude === "capacityWhRange" ||
      matchesNumberRangeFilter(
        specifications.capacityWh,
        filters.capacityWhRanges,
        powerBankNumberFilterGroups.capacityWh.options,
      ),
    filters.capacityWh === undefined ||
      (specifications.capacityWh ?? 0) >= filters.capacityWh,
    exclude === "batteryChemistry" ||
      filters.batteryChemistries.length === 0 ||
      (specifications.batteryChemistry !== undefined &&
        filters.batteryChemistries.includes(specifications.batteryChemistry)),
    exclude === "supportedOutputProtocols" ||
      filters.supportedOutputProtocols.length === 0 ||
      filters.supportedOutputProtocols.some((protocol) =>
        specifications.supportedOutputProtocols?.includes(protocol as never),
      ),
    exclude === "maxInputPowerRange" ||
      matchesNumberRangeFilter(
        specifications.maxInputPower,
        filters.maxInputPowerRanges,
        powerBankNumberFilterGroups.maxInputPower.options,
      ),
    filters.maxInputPower === undefined ||
      (specifications.maxInputPower ?? 0) >= filters.maxInputPower,
    exclude === "maxOutputPowerRange" ||
      matchesNumberRangeFilter(
        specifications.maxOutputPower,
        filters.maxOutputPowerRanges,
        powerBankNumberFilterGroups.maxOutputPower.options,
      ),
    filters.maxOutputPower === undefined ||
      (specifications.maxOutputPower ?? 0) >= filters.maxOutputPower,
    filters.passthroughCharging !== true ||
      specifications.passthroughCharging === true,
    exclude === "gravimetricDensityRange" ||
      matchesNumberRangeFilter(
        specifications.gravimetricDensity,
        filters.gravimetricDensityRanges,
        powerBankNumberFilterGroups.gravimetricDensity.options,
      ),
    filters.gravimetricDensity === undefined ||
      (specifications.gravimetricDensity ?? 0) >= filters.gravimetricDensity,
    exclude === "lengthRange" ||
      matchesNumberRangeFilter(
        dimensions?.length,
        filters.dimensionLengthRanges,
        powerBankNumberFilterGroups.dimensionLength.options,
      ),
    filters.dimensionLength === undefined ||
      (dimensions?.length ?? Number.POSITIVE_INFINITY) <=
        filters.dimensionLength,
    exclude === "widthRange" ||
      matchesNumberRangeFilter(
        dimensions?.width,
        filters.dimensionWidthRanges,
        powerBankNumberFilterGroups.dimensionWidth.options,
      ),
    filters.dimensionWidth === undefined ||
      (dimensions?.width ?? Number.POSITIVE_INFINITY) <= filters.dimensionWidth,
    exclude === "thicknessRange" ||
      matchesNumberRangeFilter(
        dimensions?.thickness,
        filters.dimensionThicknessRanges,
        powerBankNumberFilterGroups.dimensionThickness.options,
      ),
    filters.dimensionThickness === undefined ||
      (dimensions?.thickness ?? Number.POSITIVE_INFINITY) <=
        filters.dimensionThickness,
    exclude === "weightRange" ||
      matchesNumberRangeFilter(
        specifications.weight,
        filters.weightRanges,
        powerBankNumberFilterGroups.weight.options,
      ),
    filters.weight === undefined ||
      (specifications.weight ?? Number.POSITIVE_INFINITY) <= filters.weight,
    exclude === "displayType" ||
      filters.displayTypes.length === 0 ||
      (specifications.displayType !== undefined &&
        filters.displayTypes.includes(specifications.displayType)),
    exclude === "priceRange" ||
      matchesNumberRangeFilter(
        specifications.price,
        filters.priceRanges,
        powerBankNumberFilterGroups.price.options,
      ),
    filters.price === undefined ||
      (specifications.price ?? Number.POSITIVE_INFINITY) <= filters.price,
    exclude === "builtInCable" ||
      filters.builtInCables.length === 0 ||
      (specifications.builtInCable !== undefined &&
        filters.builtInCables.includes(specifications.builtInCable)),
    exclude === "wirelessChargingMaxPowerRange" ||
      matchesNumberRangeFilter(
        specifications.wirelessChargingMaxPower,
        filters.wirelessChargingMaxPowerRanges,
        powerBankNumberFilterGroups.wirelessChargingMaxPower.options,
      ),
    filters.wirelessChargingMaxPower === undefined ||
      (specifications.wirelessChargingMaxPower ?? 0) >=
        filters.wirelessChargingMaxPower,
  ].every(Boolean);
}

function uniqueDefined<T>(values: Array<T | undefined>) {
  return [
    ...new Set(values.filter((value): value is T => value !== undefined)),
  ];
}

function countByOption<T extends string>(
  options: T[],
  rows: CatalogProductRow[],
  matches: (row: CatalogProductRow, option: T) => boolean,
): CountedFacet[] {
  return options.map((option) => ({
    value: option,
    count: rows.filter((row) => matches(row, option)).length,
  }));
}

function countByNumberRangeOption(
  options: readonly NumberRangeFilterOption[],
  rows: CatalogProductRow[],
  valueForRow: (row: CatalogProductRow) => number | undefined,
  matches: (row: CatalogProductRow) => boolean,
): CountedNumberRangeFacet[] {
  return options.map((option) => ({
    value: option.id,
    label: option.label,
    count: rows.filter(
      (row) =>
        matchesNumberRangeOption(valueForRow(row), option) && matches(row),
    ).length,
  }));
}

function filterRowsForSearch(
  rows: CatalogProductRow[],
  filters: CatalogFilters,
) {
  if (!filters.q) {
    return rows;
  }

  const query = filters.q.toLowerCase();

  return rows.filter(
    (row) =>
      row.model.toLowerCase().includes(query) ||
      (row.summary?.toLowerCase().includes(query) ?? false),
  );
}

export async function getCatalogPageData(
  categorySlug: CatalogCategorySlug,
  filters: CatalogFilters,
  locale: Locale,
) {
  const cacheKey = catalogPageCacheKey(categorySlug, filters, locale);

  if (catalogPageCacheTtlSeconds > 0) {
    try {
      const redis = await ensureRedisConnected();
      const cachedData = await redis.get(cacheKey);

      if (cachedData) {
        return JSON.parse(cachedData) as Awaited<
          ReturnType<typeof getUncachedCatalogPageData>
        >;
      }
    } catch (error) {
      console.warn("Catalog Redis cache read failed", error);
    }
  }

  const data = await getUncachedCatalogPageData(categorySlug, filters, locale);

  if (catalogPageCacheTtlSeconds > 0 && !data.unavailable) {
    try {
      const redis = await ensureRedisConnected();
      await redis.set(
        cacheKey,
        JSON.stringify(data),
        "EX",
        catalogPageCacheTtlSeconds,
      );
    } catch (error) {
      console.warn("Catalog Redis cache write failed", error);
    }
  }

  return data;
}

function catalogPageCacheKey(
  categorySlug: CatalogCategorySlug,
  filters: CatalogFilters,
  locale: Locale,
) {
  const digest = createHash("sha256")
    .update(JSON.stringify(stableCacheValue({ filters, locale })))
    .digest("hex");

  return `powerbase:catalog:v1:${categorySlug}:${locale}:${digest}`;
}

function stableCacheValue(value: unknown): unknown {
  if (Array.isArray(value)) {
    return value.map(stableCacheValue);
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value)
        .sort(([left], [right]) => left.localeCompare(right))
        .map(([key, nestedValue]) => [key, stableCacheValue(nestedValue)]),
    );
  }

  return value;
}

async function getUncachedCatalogPageData(
  categorySlug: CatalogCategorySlug,
  filters: CatalogFilters,
  locale: Locale,
) {
  const localizedSummary =
    locale === "uk" ? equipment.summaryUk : equipment.summary;
  const localizedSourceLabel =
    locale === "uk" ? equipment.sourceLabelUk : equipment.sourceLabel;
  const localizedChemistry = equipment.chemistry;
  const localizedCategoryName =
    locale === "uk" ? equipmentCategories.nameUk : equipmentCategories.name;
  const catalogSelection = {
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
  };

  try {
    const baseRows = await db
      .select(catalogSelection)
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
            ilike(
              locale === "uk" ? equipment.summaryUk : equipment.summary,
              `%${filters.q}%`,
            ),
          )
        : undefined,
      filters.manufacturers.length > 0
        ? inArray(manufacturers.name, filters.manufacturers)
        : undefined,
      categorySlug !== "power-banks" && filters.voltages.length > 0
        ? inArray(equipment.nominalVoltageV, filters.voltages)
        : undefined,
      categorySlug !== "power-banks" && filters.chemistries.length > 0
        ? inArray(equipment.chemistry, filters.chemistries)
        : undefined,
      categorySlug !== "power-banks" && filters.minCapacityWh
        ? gte(equipment.capacityWh, filters.minCapacityWh)
        : undefined,
      categorySlug !== "power-banks" && filters.minPowerW
        ? gte(equipment.continuousPowerW, filters.minPowerW)
        : undefined,
    ]);
    const filteredProducts =
      categorySlug === "power-banks"
        ? (
            await db
              .select(catalogSelection)
              .from(equipment)
              .innerJoin(
                equipmentCategories,
                eq(equipment.categoryId, equipmentCategories.id),
              )
              .innerJoin(
                manufacturers,
                eq(equipment.manufacturerId, manufacturers.id),
              )
              .where(and(...conditions))
              .orderBy(sortExpression(filters.sort), asc(equipment.id))
          ).filter((product) => matchesPowerBankFilters(product, filters))
        : null;
    const [{ totalProducts }] =
      categorySlug === "power-banks"
        ? [{ totalProducts: filteredProducts?.length ?? 0 }]
        : await db
            .select({ totalProducts: count() })
            .from(equipment)
            .innerJoin(
              equipmentCategories,
              eq(equipment.categoryId, equipmentCategories.id),
            )
            .innerJoin(
              manufacturers,
              eq(equipment.manufacturerId, manufacturers.id),
            )
            .where(and(...conditions));
    const pagination = paginationFor(totalProducts, filters.page);
    const products =
      categorySlug === "power-banks"
        ? paginatedRows(filteredProducts ?? [], pagination)
        : await db
            .select(catalogSelection)
            .from(equipment)
            .innerJoin(
              equipmentCategories,
              eq(equipment.categoryId, equipmentCategories.id),
            )
            .innerJoin(
              manufacturers,
              eq(equipment.manufacturerId, manufacturers.id),
            )
            .where(and(...conditions))
            .orderBy(sortExpression(filters.sort), asc(equipment.id))
            .limit(pagination.pageSize)
            .offset((pagination.page - 1) * pagination.pageSize);
    const powerBankBaseSpecs =
      categorySlug === "power-banks" ? baseRows.map(powerBankSpecs) : [];
    const searchableBaseRows = filterRowsForSearch(baseRows, filters);
    const manufacturerOptions = [
      ...new Set(baseRows.map((product) => product.manufacturer)),
    ];
    const manufacturerFacets =
      categorySlug === "power-banks"
        ? countByOption(
            manufacturerOptions,
            searchableBaseRows,
            (row, option) =>
              row.manufacturer === option &&
              matchesPowerBankFilters(row, filters, "manufacturer"),
          )
        : countByOption(
            manufacturerOptions,
            searchableBaseRows,
            (row, option) => row.manufacturer === option,
          );
    const powerBankChemistryOptions = uniqueDefined(
      powerBankBaseSpecs.map((spec) => spec.batteryChemistry),
    );
    const powerBankProtocolOptions = uniqueDefined(
      powerBankBaseSpecs.flatMap((spec) => spec.supportedOutputProtocols ?? []),
    );
    const powerBankDisplayOptions = uniqueDefined(
      powerBankBaseSpecs.map((spec) => spec.displayType),
    );
    const powerBankBuiltInCableOptions = uniqueDefined(
      powerBankBaseSpecs.map((spec) => spec.builtInCable),
    );
    const powerBankNumberRangeFacets =
      categorySlug === "power-banks"
        ? {
            capacityWh: countByNumberRangeOption(
              powerBankNumberFilterGroups.capacityWh.options,
              searchableBaseRows,
              (row) => powerBankSpecs(row).capacityWh,
              (row) => matchesPowerBankFilters(row, filters, "capacityWhRange"),
            ),
            maxInputPower: countByNumberRangeOption(
              powerBankNumberFilterGroups.maxInputPower.options,
              searchableBaseRows,
              (row) => powerBankSpecs(row).maxInputPower,
              (row) =>
                matchesPowerBankFilters(row, filters, "maxInputPowerRange"),
            ),
            maxOutputPower: countByNumberRangeOption(
              powerBankNumberFilterGroups.maxOutputPower.options,
              searchableBaseRows,
              (row) => powerBankSpecs(row).maxOutputPower,
              (row) =>
                matchesPowerBankFilters(row, filters, "maxOutputPowerRange"),
            ),
            gravimetricDensity: countByNumberRangeOption(
              powerBankNumberFilterGroups.gravimetricDensity.options,
              searchableBaseRows,
              (row) => powerBankSpecs(row).gravimetricDensity,
              (row) =>
                matchesPowerBankFilters(
                  row,
                  filters,
                  "gravimetricDensityRange",
                ),
            ),
            weight: countByNumberRangeOption(
              powerBankNumberFilterGroups.weight.options,
              searchableBaseRows,
              (row) => powerBankSpecs(row).weight,
              (row) => matchesPowerBankFilters(row, filters, "weightRange"),
            ),
            price: countByNumberRangeOption(
              powerBankNumberFilterGroups.price.options,
              searchableBaseRows,
              (row) => powerBankSpecs(row).price,
              (row) => matchesPowerBankFilters(row, filters, "priceRange"),
            ),
            wirelessChargingMaxPower: countByNumberRangeOption(
              powerBankNumberFilterGroups.wirelessChargingMaxPower.options,
              searchableBaseRows,
              (row) => powerBankSpecs(row).wirelessChargingMaxPower,
              (row) =>
                matchesPowerBankFilters(
                  row,
                  filters,
                  "wirelessChargingMaxPowerRange",
                ),
            ),
            dimensionLength: countByNumberRangeOption(
              powerBankNumberFilterGroups.dimensionLength.options,
              searchableBaseRows,
              (row) => powerBankSpecs(row).dimensions?.length,
              (row) => matchesPowerBankFilters(row, filters, "lengthRange"),
            ),
            dimensionWidth: countByNumberRangeOption(
              powerBankNumberFilterGroups.dimensionWidth.options,
              searchableBaseRows,
              (row) => powerBankSpecs(row).dimensions?.width,
              (row) => matchesPowerBankFilters(row, filters, "widthRange"),
            ),
            dimensionThickness: countByNumberRangeOption(
              powerBankNumberFilterGroups.dimensionThickness.options,
              searchableBaseRows,
              (row) => powerBankSpecs(row).dimensions?.thickness,
              (row) => matchesPowerBankFilters(row, filters, "thicknessRange"),
            ),
          }
        : null;
    const capacities = baseRows
      .map((product) => product.capacityWh)
      .filter((value): value is number => value !== null);
    const powers = baseRows
      .map((product) => product.continuousPowerW)
      .filter((value): value is number => value !== null);

    return {
      products,
      totalProducts,
      pagination,
      unavailable: false,
      facets: {
        manufacturers: manufacturerFacets,
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
        powerBanks: {
          batteryChemistries: countByOption(
            powerBankChemistryOptions,
            searchableBaseRows,
            (row, option) =>
              powerBankSpecs(row).batteryChemistry === option &&
              matchesPowerBankFilters(row, filters, "batteryChemistry"),
          ),
          supportedOutputProtocols: countByOption(
            powerBankProtocolOptions,
            searchableBaseRows,
            (row, option) =>
              (powerBankSpecs(row).supportedOutputProtocols?.includes(option) ??
                false) &&
              matchesPowerBankFilters(row, filters, "supportedOutputProtocols"),
          ),
          displayTypes: countByOption(
            powerBankDisplayOptions,
            searchableBaseRows,
            (row, option) =>
              powerBankSpecs(row).displayType === option &&
              matchesPowerBankFilters(row, filters, "displayType"),
          ),
          builtInCables: countByOption(
            powerBankBuiltInCableOptions,
            searchableBaseRows,
            (row, option) =>
              powerBankSpecs(row).builtInCable === option &&
              matchesPowerBankFilters(row, filters, "builtInCable"),
          ),
          numberRanges: powerBankNumberRangeFacets,
        },
      },
    };
  } catch (error) {
    console.error("Catalog database read failed", error);

    return {
      products: [],
      totalProducts: 0,
      pagination: paginationFor(0, 1),
      unavailable: true,
      facets: {
        manufacturers: [],
        voltages: [],
        chemistries: [],
        maxCapacityWh: null,
        maxPowerW: null,
        powerBanks: {
          batteryChemistries: [],
          supportedOutputProtocols: [],
          displayTypes: [],
          builtInCables: [],
          numberRanges: null,
        },
      },
    };
  }
}

export async function getProductDetailData({
  categorySlug,
  locale,
  productSlug,
}: {
  categorySlug: CatalogCategorySlug;
  locale: Locale;
  productSlug: string;
}) {
  const localizedSummary =
    locale === "uk" ? equipment.summaryUk : equipment.summary;
  const localizedSourceLabel =
    locale === "uk" ? equipment.sourceLabelUk : equipment.sourceLabel;
  const localizedChemistry = equipment.chemistry;
  const localizedCategoryName =
    locale === "uk" ? equipmentCategories.nameUk : equipmentCategories.name;

  try {
    const [product] = await db
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
        updatedAt: equipment.updatedAt,
        manufacturer: manufacturers.name,
        categoryName: localizedCategoryName,
        categorySlug: equipmentCategories.slug,
      })
      .from(equipment)
      .innerJoin(
        equipmentCategories,
        eq(equipment.categoryId, equipmentCategories.id),
      )
      .innerJoin(manufacturers, eq(equipment.manufacturerId, manufacturers.id))
      .where(
        and(
          eq(equipmentCategories.slug, categorySlug),
          eq(equipment.slug, productSlug),
        ),
      )
      .limit(1);

    return {
      product: product ?? null,
      unavailable: false,
    };
  } catch (error) {
    console.error("Product detail database read failed", error);

    return {
      product: null,
      unavailable: true,
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
      .map((value) => Number.parseFloat(value))
      .filter((value) => Number.isFinite(value));
  const numberValue = (key: string) => {
    const [value] = numberValues(key);
    return value;
  };
  const [q] = values("q");
  const [sortValue] = values("sort");
  const parsedPage = Math.floor(numberValue("page") ?? 1);
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
    capacityWh: numberValue("capacityWh") ?? numberValue("minCapacityWh"),
    capacityWhRanges: values("capacityWhRange"),
    batteryChemistries: values("batteryChemistry"),
    supportedOutputProtocols: values("supportedOutputProtocols"),
    maxInputPower: numberValue("maxInputPower"),
    maxInputPowerRanges: values("maxInputPowerRange"),
    maxOutputPower: numberValue("maxOutputPower") ?? numberValue("minPowerW"),
    maxOutputPowerRanges: values("maxOutputPowerRange"),
    passthroughCharging: values("passthroughCharging").includes("true"),
    gravimetricDensity: numberValue("gravimetricDensity"),
    gravimetricDensityRanges: values("gravimetricDensityRange"),
    dimensionLength: numberValue("length"),
    dimensionLengthRanges: values("lengthRange"),
    dimensionWidth: numberValue("width"),
    dimensionWidthRanges: values("widthRange"),
    dimensionThickness: numberValue("thickness"),
    dimensionThicknessRanges: values("thicknessRange"),
    weight: numberValue("weight"),
    weightRanges: values("weightRange"),
    displayTypes: values("displayType"),
    price: numberValue("price"),
    priceRanges: values("priceRange"),
    builtInCables: values("builtInCable"),
    wirelessChargingMaxPower: numberValue("wirelessChargingMaxPower"),
    wirelessChargingMaxPowerRanges: values("wirelessChargingMaxPowerRange"),
    sort: sorts.includes(sortValue as CatalogSort)
      ? (sortValue as CatalogSort)
      : "recommended",
    page: parsedPage > 0 ? parsedPage : 1,
  };
}

export function formatPrice(priceCents: number | null, locale: Locale = "en") {
  if (priceCents === null) {
    return locale === "uk" ? "РЅ/Рґ" : "n/a";
  }

  return new Intl.NumberFormat(locale === "uk" ? "uk-UA" : "en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(priceCents / 100);
}

export function formatWeight(
  weightGrams: number | null,
  locale: Locale = "en",
) {
  if (!weightGrams) {
    return locale === "uk" ? "н/д" : "n/a";
  }

  return weightGrams >= 1000
    ? `${(weightGrams / 1000).toLocaleString(
        locale === "uk" ? "uk-UA" : "en-US",
        {
          maximumFractionDigits: 1,
        },
      )} ${locale === "uk" ? "кг" : "kg"}`
    : `${weightGrams} ${locale === "uk" ? "г" : "g"}`;
}
