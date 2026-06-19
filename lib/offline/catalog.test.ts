import { describe, expect, test } from "bun:test";

import {
  diffOfflineCatalog,
  filterAndSortOfflineProducts,
  type OfflineCatalogManifest,
  type OfflineCatalogProduct,
  parseOfflineRoute,
} from "@/lib/offline/catalog";

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
  chemistry: "LFP",
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
