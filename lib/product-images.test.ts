import { describe, expect, test } from "bun:test";

import { getProductImages } from "./product-images";

describe("getProductImages", () => {
  test("normalizes and deduplicates string galleries", () => {
    expect(
      getProductImages("/primary.webp", {
        allImages: ["/primary.webp", "/second.webp"],
      }),
    ).toEqual(["/primary.webp", "/second.webp"]);
  });

  test("reads object galleries and ignores malformed entries", () => {
    expect(
      getProductImages("/primary.webp", {
        productImages: [{ src: "/second.webp" }, {}, null],
      }),
    ).toEqual(["/primary.webp", "/second.webp"]);
  });

  test("reads additional images from seed specifications", () => {
    expect(
      getProductImages("/primary.webp", {
        additionalImages: ["/second.webp", "/third.webp"],
      }),
    ).toEqual(["/primary.webp", "/second.webp", "/third.webp"]);
  });

  test("falls back to the primary image", () => {
    expect(getProductImages("/primary.webp", null)).toEqual(["/primary.webp"]);
  });
});
