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
  batteryChemistries: string[];
  supportedOutputProtocols: string[];
  maxInputPower?: number;
  maxOutputPower?: number;
  passthroughCharging?: boolean;
  gravimetricDensity?: number;
  dimensionLength?: number;
  dimensionWidth?: number;
  dimensionThickness?: number;
  weight?: number;
  displayTypes: string[];
  price?: number;
  builtInCables: string[];
  wirelessChargingMaxPower?: number;
  sort: CatalogSort;
};

export type CatalogProductSpecifications = Record<string, unknown>;

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
    case "recommended":
    default:
      return asc(equipment.id);
  }
}

function compactConditions(conditions: Array<SQL | undefined>) {
  return conditions.filter(Boolean) as SQL[];
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

function powerBankSpecs(product: CatalogProductRow): PowerBankSpecifications {
  const specifications =
    product.specifications &&
    typeof product.specifications === "object" &&
    !Array.isArray(product.specifications)
      ? (product.specifications as Record<string, unknown>)
      : null;

  return {
    ...(specifications ?? {}),
    ...normalizePowerBankSpecifications({
      ...product,
      specifications,
    }),
  } as PowerBankSpecifications;
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
    filters.capacityWh === undefined ||
      (specifications.capacityWh ?? 0) >= filters.capacityWh,
    exclude === "batteryChemistry" ||
      filters.batteryChemistries.length === 0 ||
      (specifications.batteryChemistry !== undefined &&
        filters.batteryChemistries.includes(specifications.batteryChemistry)),
    exclude === "supportedOutputProtocols" ||
      filters.supportedOutputProtocols.length === 0 ||
      filters.supportedOutputProtocols.some((protocol) =>
        specifications.supportedOutputProtocols?.includes(
          protocol as never,
        ),
      ),
    filters.maxInputPower === undefined ||
      (specifications.maxInputPower ?? 0) >= filters.maxInputPower,
    filters.maxOutputPower === undefined ||
      (specifications.maxOutputPower ?? 0) >= filters.maxOutputPower,
    filters.passthroughCharging !== true ||
      specifications.passthroughCharging === true,
    filters.gravimetricDensity === undefined ||
      (specifications.gravimetricDensity ?? 0) >= filters.gravimetricDensity,
    filters.dimensionLength === undefined ||
      (dimensions?.length ?? Number.POSITIVE_INFINITY) <=
        filters.dimensionLength,
    filters.dimensionWidth === undefined ||
      (dimensions?.width ?? Number.POSITIVE_INFINITY) <= filters.dimensionWidth,
    filters.dimensionThickness === undefined ||
      (dimensions?.thickness ?? Number.POSITIVE_INFINITY) <=
        filters.dimensionThickness,
    filters.weight === undefined ||
      (specifications.weight ?? Number.POSITIVE_INFINITY) <= filters.weight,
    exclude === "displayType" ||
      filters.displayTypes.length === 0 ||
      (specifications.displayType !== undefined &&
        filters.displayTypes.includes(specifications.displayType)),
    filters.price === undefined ||
      (specifications.price ?? Number.POSITIVE_INFINITY) <= filters.price,
    exclude === "builtInCable" ||
      filters.builtInCables.length === 0 ||
      (specifications.builtInCable !== undefined &&
        filters.builtInCables.includes(specifications.builtInCable)),
    filters.wirelessChargingMaxPower === undefined ||
      (specifications.wirelessChargingMaxPower ?? 0) >=
        filters.wirelessChargingMaxPower,
  ].every(Boolean);
}

function uniqueDefined<T>(values: Array<T | undefined>) {
  return [...new Set(values.filter((value): value is T => value !== undefined))];
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

function filterRowsForSearch(rows: CatalogProductRow[], filters: CatalogFilters) {
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
  const localizedSummary =
    locale === "uk" ? equipment.summaryUk : equipment.summary;
  const localizedSourceLabel =
    locale === "uk" ? equipment.sourceLabelUk : equipment.sourceLabel;
  const localizedChemistry = equipment.chemistry;
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
      .from(equipment)
      .innerJoin(
        equipmentCategories,
        eq(equipment.categoryId, equipmentCategories.id),
      )
      .innerJoin(manufacturers, eq(equipment.manufacturerId, manufacturers.id))
      .where(and(...conditions))
      .orderBy(sortExpression(filters.sort), asc(equipment.id));

    const filteredProducts =
      categorySlug === "power-banks"
        ? products.filter((product) => matchesPowerBankFilters(product, filters))
        : products;
    const powerBankBaseSpecs =
      categorySlug === "power-banks" ? baseRows.map(powerBankSpecs) : [];
    const searchableBaseRows = filterRowsForSearch(baseRows, filters);
    const manufacturerOptions = [
      ...new Set(baseRows.map((product) => product.manufacturer)),
    ];
    const manufacturerFacets =
      categorySlug === "power-banks"
        ? countByOption(manufacturerOptions, searchableBaseRows, (row, option) =>
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
    const capacities = baseRows
      .map((product) => product.capacityWh)
      .filter((value): value is number => value !== null);
    const powers = baseRows
      .map((product) => product.continuousPowerW)
      .filter((value): value is number => value !== null);

    return {
      products: filteredProducts,
      totalProducts: baseRows.length,
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
              (powerBankSpecs(row).supportedOutputProtocols?.includes(
                option,
              ) ??
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
        },
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
        powerBanks: {
          batteryChemistries: [],
          supportedOutputProtocols: [],
          displayTypes: [],
          builtInCables: [],
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
    batteryChemistries: values("batteryChemistry"),
    supportedOutputProtocols: values("supportedOutputProtocols"),
    maxInputPower: numberValue("maxInputPower"),
    maxOutputPower: numberValue("maxOutputPower") ?? numberValue("minPowerW"),
    passthroughCharging: values("passthroughCharging").includes("true"),
    gravimetricDensity: numberValue("gravimetricDensity"),
    dimensionLength: numberValue("length"),
    dimensionWidth: numberValue("width"),
    dimensionThickness: numberValue("thickness"),
    weight: numberValue("weight"),
    displayTypes: values("displayType"),
    price: numberValue("price"),
    builtInCables: values("builtInCable"),
    wirelessChargingMaxPower: numberValue("wirelessChargingMaxPower"),
    sort: sorts.includes(sortValue as CatalogSort)
      ? (sortValue as CatalogSort)
      : "recommended",
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
