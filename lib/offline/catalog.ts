import type { CatalogCategorySlug } from "@/lib/catalog";
import type { Locale } from "@/lib/i18n";

export const offlineCatalogSchemaVersion = 1;
export const offlineCatalogEstimatedBytes = 15 * 1024 * 1024;
export const offlineCatalogPageSize = 12;
export const offlineCatalogCategorySlugs = [
  "power-banks",
  "power-stations",
  "batteries",
  "inverters",
] as const satisfies readonly CatalogCategorySlug[];

export type OfflineLocalizedText = {
  en: string;
  uk: string;
};

export type OfflineCatalogProduct = {
  id: number;
  categorySlug: CatalogCategorySlug;
  categoryName: OfflineLocalizedText;
  manufacturer: string;
  slug: string;
  model: string;
  summary: OfflineLocalizedText;
  imagePath: string;
  priceCents: number | null;
  productCode: string | null;
  nominalVoltageV: number | null;
  capacityWh: number | null;
  continuousPowerW: number | null;
  peakPowerW: number | null;
  maxPvVoltageV: number | null;
  maxChargeCurrentA: number | null;
  chemistry: string | null;
  communicationProtocols: string | null;
  weightGrams: number | null;
  warrantyYears: number | null;
  lifecycleCycles: number | null;
  sourceLabel: OfflineLocalizedText;
  sourceUrl: string | null;
  specifications: Record<string, unknown> | null;
  updatedAt: string;
};

export type OfflineCatalogManifestProduct = Pick<
  OfflineCatalogProduct,
  "id" | "categorySlug" | "imagePath" | "slug" | "updatedAt"
>;

export type OfflineCatalogManifest = {
  schemaVersion: number;
  version: string;
  generatedAt: string;
  estimatedBytes: number;
  categories: Record<CatalogCategorySlug, number[]>;
  products: OfflineCatalogManifestProduct[];
};

export type OfflineCatalogSnapshot = {
  manifest: OfflineCatalogManifest;
  products: OfflineCatalogProduct[];
  favoriteIds: number[];
  updatedAt: string;
};

export type OfflineCatalogDiff = {
  changedIds: number[];
  deletedIds: number[];
  obsoleteImagePaths: string[];
};

export type OfflineRoute =
  | { kind: "home"; locale: Locale }
  | { kind: "category"; locale: Locale; category: CatalogCategorySlug }
  | {
      kind: "product";
      locale: Locale;
      category: CatalogCategorySlug;
      productSlug: string;
    }
  | { kind: "unsupported"; locale: Locale };

const categories = new Set<CatalogCategorySlug>(offlineCatalogCategorySlugs);

export function parseOfflineRoute(path: string): OfflineRoute {
  const [localePart, categoryPart, productSlug, ...rest] = path
    .split("?")[0]
    .split("/")
    .filter(Boolean);
  const locale: Locale = localePart === "uk" ? "uk" : "en";

  if (!localePart || (localePart !== "en" && localePart !== "uk")) {
    return { kind: "unsupported", locale };
  }

  if (!categoryPart) {
    return { kind: "home", locale };
  }

  if (!categories.has(categoryPart as CatalogCategorySlug) || rest.length > 0) {
    return { kind: "unsupported", locale };
  }

  const category = categoryPart as CatalogCategorySlug;

  return productSlug
    ? { kind: "product", locale, category, productSlug }
    : { kind: "category", locale, category };
}

export function diffOfflineCatalog(
  current: OfflineCatalogManifest | null,
  next: OfflineCatalogManifest,
): OfflineCatalogDiff {
  const currentById = new Map(
    (current?.products ?? []).map((product) => [product.id, product]),
  );
  const nextIds = new Set(next.products.map((product) => product.id));
  const changedIds = next.products
    .filter((product) => {
      const stored = currentById.get(product.id);
      return (
        !stored ||
        stored.updatedAt !== product.updatedAt ||
        stored.imagePath !== product.imagePath
      );
    })
    .map((product) => product.id);
  const removed = [...currentById.values()].filter(
    (product) => !nextIds.has(product.id),
  );
  const changedImagePaths = next.products.flatMap((product) => {
    const stored = currentById.get(product.id);
    return stored && stored.imagePath !== product.imagePath
      ? [stored.imagePath]
      : [];
  });

  return {
    changedIds,
    deletedIds: removed.map((product) => product.id),
    obsoleteImagePaths: [
      ...new Set([
        ...removed.map((product) => product.imagePath),
        ...changedImagePaths,
      ]),
    ],
  };
}

export function localizeOfflineText(
  value: OfflineLocalizedText,
  locale: Locale,
) {
  return value[locale] || value.en;
}

export type OfflineSort =
  | "recommended"
  | "price-asc"
  | "price-desc"
  | "capacity-desc"
  | "power-desc"
  | "weight-asc";

export function filterAndSortOfflineProducts(
  products: OfflineCatalogProduct[],
  options: {
    locale: Locale;
    query: string;
    manufacturers: string[];
    sort: OfflineSort;
  },
) {
  const query = options.query.trim().toLocaleLowerCase();
  const filtered = products.filter((product) => {
    const matchesQuery =
      !query ||
      product.model.toLocaleLowerCase().includes(query) ||
      localizeOfflineText(product.summary, options.locale)
        .toLocaleLowerCase()
        .includes(query);
    const matchesManufacturer =
      options.manufacturers.length === 0 ||
      options.manufacturers.includes(product.manufacturer);
    return matchesQuery && matchesManufacturer;
  });

  return filtered.sort((left, right) => {
    const nullable = (value: number | null, fallback: number) =>
      value ?? fallback;
    switch (options.sort) {
      case "price-asc":
        return (
          nullable(left.priceCents, Infinity) -
          nullable(right.priceCents, Infinity)
        );
      case "price-desc":
        return (
          nullable(right.priceCents, -Infinity) -
          nullable(left.priceCents, -Infinity)
        );
      case "capacity-desc":
        return (
          nullable(right.capacityWh, -Infinity) -
          nullable(left.capacityWh, -Infinity)
        );
      case "power-desc":
        return (
          nullable(right.continuousPowerW, -Infinity) -
          nullable(left.continuousPowerW, -Infinity)
        );
      case "weight-asc":
        return (
          nullable(left.weightGrams, Infinity) -
          nullable(right.weightGrams, Infinity)
        );
      default:
        return left.id - right.id;
    }
  });
}
