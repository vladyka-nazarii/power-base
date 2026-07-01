import { describe, expect, test } from "bun:test";

import {
  diffOfflineCatalog,
  filterAndSortOfflineProducts,
  type OfflineCatalogManifest,
  type OfflineCatalogProduct,
  parseOfflineRoute,
} from "@/lib/offline/catalog";
import {
  createOfflineCatalogFilters,
  filterOfflineCatalogProducts,
} from "@/lib/offline/catalog-filters";

const product = (overrides: Partial<OfflineCatalogProduct> = {}) => ({
  id: 1,
  categorySlug: "batteries" as const,
  categoryName: { en: "Batteries", uk: "Акумулятори" },
  manufacturer: "Acme",
  slug: "battery-one",
  model: "Battery One",
  summary: { en: "Backup battery", uk: "Резервний акумулятор" },
  imagePath: "https://example.com/one.png",
  priceCents: 10000,
  productCode: null,
  nominalVoltageV: 48,
  capacityWh: 1000,
  continuousPowerW: 500,
  peakPowerW: null,
  maxPvVoltageV: null,
  maxChargeCurrentA: null,
  chemistry: "LiFePO4",
  communicationProtocols: null,
  weightGrams: 10000,
  warrantyYears: 5,
  lifecycleCycles: null,
  sourceLabel: { en: "Source", uk: "Джерело" },
  sourceUrl: null,
  specifications: null,
  updatedAt: "2026-01-01T00:00:00.000Z",
  ...overrides,
});

const manifest = (
  products: OfflineCatalogManifest["products"],
): OfflineCatalogManifest => ({
  schemaVersion: 1,
  version: "test",
  generatedAt: "2026-01-01T00:00:00.000Z",
  estimatedBytes: 1,
  categories: {
    "power-banks": [],
    "power-stations": [],
    batteries: products.map((item) => item.id),
    inverters: [],
  },
  products,
});

describe("parseOfflineRoute", () => {
  test("parses home, category, and product routes", () => {
    expect(parseOfflineRoute("/en")).toEqual({ kind: "home", locale: "en" });
    expect(parseOfflineRoute("/uk/batteries")).toEqual({
      kind: "category",
      locale: "uk",
      category: "batteries",
    });
    expect(parseOfflineRoute("/en/batteries/battery-one")).toEqual({
      kind: "product",
      locale: "en",
      category: "batteries",
      productSlug: "battery-one",
    });
  });
});

describe("diffOfflineCatalog", () => {
  test("finds changed, deleted, and obsolete image records", () => {
    const first = product();
    const removed = product({ id: 2, slug: "removed", imagePath: "old.png" });
    const current = manifest([first, removed]);
    const nextProduct = product({
      updatedAt: "2026-02-01T00:00:00.000Z",
      imagePath: "new.png",
    });
    const diff = diffOfflineCatalog(current, manifest([nextProduct]));

    expect(diff.changedIds).toEqual([1]);
    expect(diff.deletedIds).toEqual([2]);
    expect(diff.obsoleteImagePaths).toEqual([
      "old.png",
      "https://example.com/one.png",
    ]);
  });
});

describe("filterAndSortOfflineProducts", () => {
  test("filters localized text and sorts nullable prices last", () => {
    const products = [
      product(),
      product({
        id: 2,
        model: "Другий",
        manufacturer: "Other",
        priceCents: null,
        summary: { en: "Second", uk: "Польова батарея" },
      }),
    ];
    expect(
      filterAndSortOfflineProducts(products, {
        locale: "uk",
        query: "польова",
        manufacturers: [],
        sort: "price-asc",
      }).map((item) => item.id),
    ).toEqual([2]);
    expect(
      filterAndSortOfflineProducts(products, {
        locale: "en",
        query: "",
        manufacturers: [],
        sort: "price-asc",
      }).map((item) => item.id),
    ).toEqual([1, 2]);
  });
});

describe("filterOfflineCatalogProducts", () => {
  test("applies the online general catalog filters", () => {
    const filters = createOfflineCatalogFilters();
    filters.manufacturers = ["Acme"];
    filters.voltages = [48];
    filters.chemistries = ["LiFePO4"];
    filters.minCapacityWh = "900";
    filters.minPowerW = "400";

    expect(
      filterOfflineCatalogProducts(
        [product(), product({ id: 2, manufacturer: "Other" })],
        filters,
        "en",
        false,
      ).map((item) => item.id),
    ).toEqual([1]);
  });

  test("applies power-bank protocol and range filters", () => {
    const powerBank = product({
      categorySlug: "power-banks",
      capacityWh: 30,
      chemistry: "Li-ion",
      communicationProtocols: "USB-C PD 3.0",
      continuousPowerW: 45,
      weightGrams: 180,
      specifications: {
        maxInputW: 30,
        maxOutputW: 45,
        dimensionsMm: "120 x 70 x 20 mm",
      },
    });
    const filters = createOfflineCatalogFilters();
    filters.supportedOutputProtocols = ["PD 3.0"];
    filters.ranges.capacityWh = ["20-50"];
    filters.ranges.weight = ["lt-200"];

    expect(
      filterOfflineCatalogProducts([powerBank], filters, "en", true),
    ).toHaveLength(1);
    filters.ranges.capacityWh = ["gt-50"];
    expect(
      filterOfflineCatalogProducts([powerBank], filters, "en", true),
    ).toHaveLength(0);
  });
});
