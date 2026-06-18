"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, GitCompareArrows, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { CatalogCategorySlug } from "@/lib/catalog";
import type { Locale } from "@/lib/i18n";
import type { CatalogProduct } from "./catalog-page";

const compareToggleEvent = "powerbase:compare-toggle";
const compareStateEvent = "powerbase:compare-state";

type CompareProduct = CatalogProduct;
type StoredCompare = {
  category: CatalogCategorySlug;
  products: CompareProduct[];
  slugs: string[];
};
type ToggleEvent = CustomEvent<{
  category: CatalogCategorySlug;
  product: CompareProduct;
  selected: boolean;
}>;
type StateEvent = CustomEvent<{
  category: CatalogCategorySlug;
  slugs: string[];
}>;
type ProductSpecifications = {
  dimensions?: { length?: number; width?: number; thickness?: number };
  dimensionsMm?: string;
  maxInputPower?: number;
  maxInputW?: number;
  maxOutputPower?: number;
  maxOutputW?: number;
  ratedCapacityMah?: number;
  ratedEnergyWh?: number;
  supportedOutputProtocols?: string[];
};

function storageKey(category: CatalogCategorySlug) {
  return `powerbase:compare:${category}:v1`;
}

function readStoredCompare(category: CatalogCategorySlug): StoredCompare | null {
  try {
    const rawValue = window.localStorage.getItem(storageKey(category));

    if (!rawValue) {
      return null;
    }

    const parsedValue = JSON.parse(rawValue) as StoredCompare;

    return parsedValue.category === category ? parsedValue : null;
  } catch {
    return null;
  }
}

function writeStoredCompare(
  category: CatalogCategorySlug,
  products: CompareProduct[],
  slugs: string[],
) {
  window.localStorage.setItem(
    storageKey(category),
    JSON.stringify({ category, products, slugs } satisfies StoredCompare),
  );
}

function syncUrl(slugs: string[]) {
  const url = new URL(window.location.href);

  url.searchParams.delete("compare");
  slugs.forEach((slug) => url.searchParams.append("compare", slug));
  window.history.replaceState(null, "", url);
}

function specificationsFor(product: CompareProduct) {
  return product.specifications &&
    typeof product.specifications === "object" &&
    !Array.isArray(product.specifications)
    ? (product.specifications as ProductSpecifications)
    : {};
}

function formatPrice(priceCents: number | null, locale: Locale) {
  if (priceCents === null) {
    return "n/a";
  }

  return new Intl.NumberFormat(locale === "uk" ? "uk-UA" : "en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(priceCents / 100);
}

function formatWeight(weightGrams: number | null) {
  if (!weightGrams) {
    return "n/a";
  }

  return weightGrams >= 1000
    ? `${(weightGrams / 1000).toLocaleString(undefined, {
        maximumFractionDigits: 1,
      })} kg`
    : `${weightGrams} g`;
}

function formatNumber(value: number | null | undefined, unit: string) {
  return value ? `${value.toLocaleString()} ${unit}` : "n/a";
}

function formatDimensions(product: CompareProduct) {
  const specifications = specificationsFor(product);

  if (specifications.dimensionsMm) {
    return specifications.dimensionsMm;
  }

  const dimensions = specifications.dimensions;

  if (!dimensions?.length || !dimensions.width || !dimensions.thickness) {
    return "n/a";
  }

  return `${dimensions.length} x ${dimensions.width} x ${dimensions.thickness} mm`;
}

function productHref(locale: Locale, product: CompareProduct) {
  return `/${locale}/${product.categorySlug}/${product.slug}`;
}

function mergeProducts(
  firstProducts: CompareProduct[],
  secondProducts: CompareProduct[],
) {
  return [...firstProducts, ...secondProducts].reduce<CompareProduct[]>(
    (products, product) => {
      if (!products.some((item) => item.slug === product.slug)) {
        products.push(product);
      }

      return products;
    },
    [],
  );
}

export function CompareCheckbox({
  category,
  initialSelected,
  locale,
  product,
}: {
  category: CatalogCategorySlug;
  initialSelected: boolean;
  locale: Locale;
  product: CompareProduct;
}) {
  const [selected, setSelected] = useState(initialSelected);
  const label = locale === "uk" ? "Порівняти" : "Compare";
  const selectedLabel =
    locale === "uk" ? "Прибрати з порівняння" : "Remove from comparison";
  const unselectedLabel =
    locale === "uk" ? "Додати до порівняння" : "Add to comparison";

  useEffect(() => {
    const storedCompare = readStoredCompare(category);
    const url = new URL(window.location.href);
    const urlSlugs = url.searchParams.getAll("compare");
    const selectedSlugs = urlSlugs.length > 0 ? urlSlugs : storedCompare?.slugs;

    if (selectedSlugs) {
      setSelected(selectedSlugs.includes(product.slug));
    }

    const onState = (event: Event) => {
      const { category: eventCategory, slugs } = (event as StateEvent).detail;

      if (eventCategory === category) {
        setSelected(slugs.includes(product.slug));
      }
    };

    window.addEventListener(compareStateEvent, onState);

    return () => window.removeEventListener(compareStateEvent, onState);
  }, [category, product.slug]);

  return (
    <label
      className={cn(
        "absolute top-3 left-3 z-10 inline-flex h-8 cursor-pointer items-center justify-center gap-1.5 rounded-md border bg-white px-2.5 text-xs font-medium shadow-sm transition dark:bg-black",
        selected
          ? "border-black text-black dark:border-white dark:text-white"
          : "border-black/10 text-zinc-500 hover:border-black/25 dark:border-white/10 dark:hover:border-white/25",
      )}
      title={selected ? selectedLabel : unselectedLabel}
    >
      <input
        type="checkbox"
        checked={selected}
        onChange={(event) => {
          const nextSelected = event.currentTarget.checked;

          setSelected(nextSelected);
          window.dispatchEvent(
            new CustomEvent(compareToggleEvent, {
              detail: {
                category,
                product,
                selected: nextSelected,
              },
            }),
          );
        }}
        className="sr-only"
      />
      <Check className={cn("size-4", !selected && "opacity-0")} />
      <span>{label}</span>
      <span className="sr-only">{selected ? selectedLabel : unselectedLabel}</span>
    </label>
  );
}

export function CatalogCompareTray({
  category,
  initialCompareSlugs,
  initialProducts,
  locale,
}: {
  category: CatalogCategorySlug;
  initialCompareSlugs: string[];
  initialProducts: CompareProduct[];
  locale: Locale;
}) {
  const [products, setProducts] = useState(initialProducts);
  const [selectedSlugs, setSelectedSlugs] = useState(initialCompareSlugs);
  const [isOpen, setIsOpen] = useState(false);
  const selectedProducts = useMemo(
    () =>
      selectedSlugs
        .map((slug) => products.find((product) => product.slug === slug))
        .filter((product): product is CompareProduct => Boolean(product)),
    [products, selectedSlugs],
  );

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    const storedCompare = readStoredCompare(category);

    if (!storedCompare) {
      return;
    }

    setProducts((currentProducts) =>
      mergeProducts(storedCompare.products, currentProducts),
    );

    if (initialCompareSlugs.length === 0) {
      setSelectedSlugs(storedCompare.slugs);
    }
  }, [category, initialCompareSlugs.length]);

  useEffect(() => {
    const onToggle = (event: Event) => {
      const { category: eventCategory, product, selected } = (
        event as ToggleEvent
      ).detail;

      if (eventCategory !== category) {
        return;
      }

      setProducts((currentProducts) => mergeProducts(currentProducts, [product]));
      setSelectedSlugs((currentSlugs) =>
        selected
          ? currentSlugs.includes(product.slug)
            ? currentSlugs
            : [...currentSlugs, product.slug]
          : currentSlugs.filter((slug) => slug !== product.slug),
      );
    };

    window.addEventListener(compareToggleEvent, onToggle);

    return () => window.removeEventListener(compareToggleEvent, onToggle);
  }, [category]);

  useEffect(() => {
    const comparedProducts = selectedSlugs
      .map((slug) => products.find((product) => product.slug === slug))
      .filter((product): product is CompareProduct => Boolean(product));

    writeStoredCompare(category, comparedProducts, selectedSlugs);
    syncUrl(selectedSlugs);
    window.dispatchEvent(
      new CustomEvent(compareStateEvent, {
        detail: { category, slugs: selectedSlugs },
      }),
    );
  }, [category, products, selectedSlugs]);

  if (selectedSlugs.length === 0) {
    return null;
  }

  const rows = [
    {
      label: "Price",
      value: (product: CompareProduct) => formatPrice(product.priceCents, locale),
    },
    {
      label: "Capacity",
      value: (product: CompareProduct) =>
        formatNumber(
          specificationsFor(product).ratedEnergyWh ?? product.capacityWh,
          "Wh",
        ),
    },
    {
      label: "Rated capacity",
      value: (product: CompareProduct) =>
        formatNumber(specificationsFor(product).ratedCapacityMah, "mAh"),
    },
    {
      label: "Max output",
      value: (product: CompareProduct) =>
        formatNumber(
          specificationsFor(product).maxOutputPower ??
            specificationsFor(product).maxOutputW ??
            product.continuousPowerW,
          "W",
        ),
    },
    {
      label: "Max input",
      value: (product: CompareProduct) =>
        formatNumber(
          specificationsFor(product).maxInputPower ??
            specificationsFor(product).maxInputW,
          "W",
        ),
    },
    {
      label: "Weight",
      value: (product: CompareProduct) => formatWeight(product.weightGrams),
    },
    {
      label: "Dimensions",
      value: formatDimensions,
    },
    {
      label: "Warranty",
      value: (product: CompareProduct) =>
        product.warrantyYears ? `${product.warrantyYears} yr` : "n/a",
    },
  ];

  return (
    <>
      <div className="fixed right-4 bottom-4 left-4 z-40 mx-auto max-w-5xl rounded-lg border border-black/10 bg-white p-3 shadow-2xl shadow-black/10 dark:border-white/10 dark:bg-black dark:shadow-white/5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <p className="text-sm font-semibold text-black dark:text-white">
              {selectedSlugs.length} selected for comparison
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {selectedProducts.slice(0, 4).map((product) => (
                <span
                  key={product.slug}
                  className="inline-flex max-w-56 items-center gap-2 rounded-md border border-black/10 px-2 py-1 text-xs text-zinc-600 dark:border-white/10 dark:text-zinc-300"
                >
                  <span className="truncate">
                    {product.manufacturer} {product.model}
                  </span>
                  <button
                    type="button"
                    className="text-zinc-400 transition hover:text-black dark:hover:text-white"
                    onClick={() =>
                      setSelectedSlugs((currentSlugs) =>
                        currentSlugs.filter((slug) => slug !== product.slug),
                      )
                    }
                  >
                    <X className="size-3" aria-hidden="true" />
                    <span className="sr-only">Remove</span>
                  </button>
                </span>
              ))}
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => setSelectedSlugs([])}
            >
              Clear
            </Button>
            <Button type="button" onClick={() => setIsOpen(true)}>
              <GitCompareArrows aria-hidden="true" />
              Compare
            </Button>
          </div>
        </div>
      </div>

      {isOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
          <div className="flex max-h-[calc(100vh-2rem)] w-full max-w-6xl flex-col overflow-hidden rounded-lg border border-black/10 bg-white shadow-2xl dark:border-white/10 dark:bg-black">
            <div className="flex items-center justify-between gap-4 border-b border-black/10 p-4 dark:border-white/10">
              <div>
                <h2 className="text-lg font-semibold text-black dark:text-white">
                  Product comparison
                </h2>
                <p className="text-sm text-zinc-500">
                  Comparing products from this category only.
                </p>
              </div>
              <Button
                type="button"
                variant="outline"
                size="icon-sm"
                onClick={() => setIsOpen(false)}
              >
                <X aria-hidden="true" />
                <span className="sr-only">Close comparison</span>
              </Button>
            </div>

            <div className="overflow-auto p-4">
              <table className="w-full min-w-[720px] border-separate border-spacing-0 text-left text-sm">
                <thead>
                  <tr>
                    <th className="sticky left-0 z-10 w-44 border-b border-black/10 bg-white p-3 text-zinc-500 dark:border-white/10 dark:bg-black">
                      Spec
                    </th>
                    {selectedProducts.map((product) => (
                      <th
                        key={product.slug}
                        className="min-w-56 border-b border-black/10 p-3 align-top dark:border-white/10"
                      >
                        <div className="flex gap-3">
                          <Image
                            src={product.imagePath}
                            alt=""
                            width={72}
                            height={54}
                            unoptimized
                            className="h-14 w-18 rounded-md border border-black/10 object-contain p-1 dark:border-white/10"
                          />
                          <div className="min-w-0">
                            <p className="text-xs font-medium tracking-[0.12em] text-zinc-500 uppercase">
                              {product.manufacturer}
                            </p>
                            <Link
                              href={productHref(locale, product)}
                              className="mt-1 block font-semibold text-black transition hover:text-zinc-600 dark:text-white dark:hover:text-zinc-300"
                            >
                              {product.model}
                            </Link>
                          </div>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr key={row.label}>
                      <th className="sticky left-0 z-10 border-b border-black/10 bg-white p-3 font-medium text-zinc-500 dark:border-white/10 dark:bg-black">
                        {row.label}
                      </th>
                      {selectedProducts.map((product) => (
                        <td
                          key={`${row.label}-${product.slug}`}
                          className="border-b border-black/10 p-3 font-medium text-black dark:border-white/10 dark:text-white"
                        >
                          {row.value(product)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
