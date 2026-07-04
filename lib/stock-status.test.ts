import { describe, expect, test } from "bun:test";

import { stockStatusFromSpecifications } from "@/lib/stock-status";

describe("stockStatusFromSpecifications", () => {
  test("uses explicit source status labels", () => {
    expect(stockStatusFromSpecifications({ status: "In Stock" })).toBe(
      "in-stock",
    );
    expect(stockStatusFromSpecifications({ status: "Sold Out" })).toBe(
      "out-of-stock",
    );
  });

  test("uses NKON schema availability labels", () => {
    expect(stockStatusFromSpecifications({ availability: "InStock" })).toBe(
      "in-stock",
    );
    expect(stockStatusFromSpecifications({ availability: "OutOfStock" })).toBe(
      "out-of-stock",
    );
  });

  test("uses preorder availability labels", () => {
    expect(
      stockStatusFromSpecifications({ availability: "Available for preorder" }),
    ).toBe("preorder");
    expect(stockStatusFromSpecifications({ status: "PreOrder" })).toBe(
      "preorder",
    );
  });

  test("uses storefront availability booleans", () => {
    expect(stockStatusFromSpecifications({ availableForSale: true })).toBe(
      "in-stock",
    );
    expect(stockStatusFromSpecifications({ availableForSale: false })).toBe(
      "out-of-stock",
    );
  });

  test("treats any available variant as in stock", () => {
    expect(
      stockStatusFromSpecifications({
        variants: [
          { availableForSale: false, quantityAvailable: 0 },
          { availableForSale: true, quantityAvailable: 4 },
        ],
      }),
    ).toBe("in-stock");
  });

  test("falls back to out of stock without source availability", () => {
    expect(stockStatusFromSpecifications({ ratedEnergyWh: 37 })).toBe(
      "out-of-stock",
    );
  });
});
