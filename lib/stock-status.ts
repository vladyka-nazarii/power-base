export type StockStatus = "in-stock" | "out-of-stock" | "preorder";

type SourceRecord = Record<string, unknown>;

const inStockLabels = new Set(["available", "in stock", "instock", "on stock"]);

const preorderLabels = new Set([
  "available for preorder",
  "available for pre order",
  "backorder",
  "pre order",
  "preorder",
  "pre-order",
]);

const outOfStockLabels = new Set([
  "coming soon",
  "out of stock",
  "outofstock",
  "sold out",
  "soldout",
  "unavailable",
]);

function asSourceRecord(value: unknown): SourceRecord | null {
  return value && typeof value === "object" && !Array.isArray(value)
    ? (value as SourceRecord)
    : null;
}

function normalizeStatusLabel(value: unknown): StockStatus | null {
  if (typeof value !== "string") {
    return null;
  }

  const normalized = value.trim().toLowerCase().replace(/[_-]+/g, " ");

  if (inStockLabels.has(normalized)) {
    return "in-stock";
  }

  if (preorderLabels.has(normalized)) {
    return "preorder";
  }

  if (outOfStockLabels.has(normalized)) {
    return "out-of-stock";
  }

  return null;
}

function normalizeAvailabilityFlag(value: unknown): StockStatus | null {
  return typeof value === "boolean"
    ? value
      ? "in-stock"
      : "out-of-stock"
    : null;
}

function quantityStatus(value: unknown): StockStatus | null {
  return typeof value === "number" && Number.isFinite(value)
    ? value > 0
      ? "in-stock"
      : "out-of-stock"
    : null;
}

function variantStatus(value: unknown): StockStatus | null {
  if (!Array.isArray(value) || value.length === 0) {
    return null;
  }

  const variantStatuses = value
    .map((variant) => {
      const record = asSourceRecord(variant);

      if (!record) {
        return null;
      }

      return (
        normalizeAvailabilityFlag(record.availableForSale) ??
        normalizeAvailabilityFlag(record.available) ??
        quantityStatus(record.quantityAvailable) ??
        quantityStatus(record.inventory_quantity)
      );
    })
    .filter((status): status is StockStatus => status !== null);

  if (variantStatuses.includes("in-stock")) {
    return "in-stock";
  }

  return variantStatuses.length > 0 ? "out-of-stock" : null;
}

export function stockStatusFromSpecifications(
  specifications: unknown,
): StockStatus {
  const record = asSourceRecord(specifications);

  if (!record) {
    return "out-of-stock";
  }

  return (
    normalizeStatusLabel(record.stockStatus) ??
    normalizeStatusLabel(record.status) ??
    normalizeStatusLabel(record.availability) ??
    normalizeAvailabilityFlag(record.inStock) ??
    normalizeAvailabilityFlag(record.availableForSale) ??
    normalizeAvailabilityFlag(record.available) ??
    quantityStatus(record.quantityAvailable) ??
    quantityStatus(record.inventory_quantity) ??
    variantStatus(record.variants) ??
    "out-of-stock"
  );
}
