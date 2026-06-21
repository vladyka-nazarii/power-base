import { describe, expect, test } from "bun:test";

import { formatPrice, usdToUahRate } from "@/lib/price-format";

describe("formatPrice", () => {
  test("formats English prices in whole USD", () => {
    expect(formatPrice(1_099_900, "en")).toBe("$10,999");
  });

  test("converts Ukrainian prices to whole UAH", () => {
    const usdCents = Math.round((10_999 / usdToUahRate) * 100);
    expect(formatPrice(usdCents, "uk")).toBe("10 999 ₴");
  });

  test("formats missing prices for each locale", () => {
    expect(formatPrice(null, "en")).toBe("n/a");
    expect(formatPrice(null, "uk")).toBe("н/д");
  });
});
