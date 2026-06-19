"use client";

import {
  ArrowLeft,
  BatteryCharging,
  Database,
  Heart,
  Search,
  SlidersHorizontal,
  WifiOff,
} from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

import { PowerBaseLogoMark } from "@/app/_components/powerbase-logo";
import type { CatalogCategorySlug } from "@/lib/catalog";
import {
  filterAndSortOfflineProducts,
  localizeOfflineText,
  type OfflineCatalogProduct,
  type OfflineCatalogSnapshot,
  type OfflineSort,
  parseOfflineRoute,
} from "@/lib/offline/catalog";
import { readOfflineSnapshot } from "@/lib/offline/catalog-client";

const categoryLabels: Record<
  "en" | "uk",
  Record<CatalogCategorySlug, string>
> = {
  en: {
    "power-banks": "Power Banks",
    "power-stations": "Power Stations",
    batteries: "Batteries",
    inverters: "Inverters",
  },
  uk: {
    "power-banks": "Павербанки",
    "power-stations": "Портативні електростанції",
    batteries: "Акумулятори",
    inverters: "Інвертори",
  },
};

const copy = {
  en: {
    offline: "Offline catalog",
    description:
      "The saved PowerBase catalog is available without a connection.",
    search: "Search saved products",
    manufacturer: "Manufacturer",
    chemistry: "Chemistry",
    minCapacity: "Minimum capacity (Wh)",
    minPower: "Minimum power (W)",
    sort: "Sort",
    all: "All",
    products: "products stored on this device",
    unavailable: "This page is not included in the offline catalog.",
    missing: "Download the offline catalog while connected, then try again.",
    favorite: "Saved favorite. Favorite changes require a connection.",
    source: "Source",
    specifications: "Specifications",
    back: "Back",
  },
  uk: {
    offline: "Офлайн-каталог",
    description: "Збережений каталог PowerBase доступний без підключення.",
    search: "Пошук збережених товарів",
    manufacturer: "Виробник",
    chemistry: "Хімія",
    minCapacity: "Мінімальна ємність (Вт·год)",
    minPower: "Мінімальна потужність (Вт)",
    sort: "Сортування",
    all: "Усі",
    products: "товарів збережено на цьому пристрої",
    unavailable: "Ця сторінка не входить до офлайн-каталогу.",
    missing: "Завантажте офлайн-каталог із підключенням і повторіть спробу.",
    favorite: "Збережено в обраному. Зміни потребують підключення.",
    source: "Джерело",
    specifications: "Характеристики",
    back: "Назад",
  },
} as const;

function offlineHref(path: string) {
  return `/offline?path=${encodeURIComponent(path)}`;
}

function imagePlaceholder(category: CatalogCategorySlug) {
  const names: Record<CatalogCategorySlug, string> = {
    "power-banks": "power-bank",
    "power-stations": "power-station",
    batteries: "battery",
    inverters: "inverter",
  };
  return `/catalog/${names[category]}.svg`;
}

function formatPrice(value: number | null, locale: "en" | "uk") {
  if (value === null) return "n/a";
  return new Intl.NumberFormat(locale === "uk" ? "uk-UA" : "en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(value / 100);
}

function ReaderHeader({ locale }: { locale: "en" | "uk" }) {
  const otherLocale = locale === "en" ? "uk" : "en";
  return (
    <header className="sticky top-0 z-20 flex min-h-14 items-center justify-between border-b border-black/10 bg-white/90 px-5 backdrop-blur dark:border-white/10 dark:bg-black/85">
      <a href={offlineHref(`/${locale}`)} className="flex items-center gap-3">
        <PowerBaseLogoMark className="size-8" />
        <span className="font-semibold">PowerBase</span>
      </a>
      <div className="flex items-center gap-3 text-sm">
        <span className="inline-flex items-center gap-2 text-zinc-500">
          <WifiOff className="size-4" /> {copy[locale].offline}
        </span>
        <a
          href={offlineHref(`/${otherLocale}`)}
          className="rounded-md border border-black/10 px-2.5 py-1.5 font-medium dark:border-white/15"
        >
          {otherLocale.toUpperCase()}
        </a>
      </div>
    </header>
  );
}

function OfflineHome({
  locale,
  snapshot,
}: {
  locale: "en" | "uk";
  snapshot: OfflineCatalogSnapshot;
}) {
  return (
    <main>
      <section className="border-b border-black/10 px-5 py-20 text-center dark:border-white/10">
        <Database className="mx-auto size-9 text-zinc-500" />
        <h1 className="mt-5 text-5xl font-semibold tracking-tight">
          PowerBase
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          {copy[locale].description}
        </p>
        <p className="mt-4 text-sm text-zinc-500">
          {snapshot.products.length} {copy[locale].products}
        </p>
      </section>
      <section className="mx-auto grid max-w-6xl gap-5 px-5 py-12 sm:grid-cols-2">
        {Object.entries(categoryLabels[locale]).map(([category, label]) => {
          const count =
            snapshot.manifest.categories[category as CatalogCategorySlug]
              .length;
          return (
            <a
              key={category}
              href={offlineHref(`/${locale}/${category}`)}
              className="rounded-xl border border-black/10 bg-white p-6 transition hover:bg-zinc-50 dark:border-white/10 dark:bg-black dark:hover:bg-zinc-950"
            >
              <BatteryCharging className="size-5 text-zinc-500" />
              <h2 className="mt-8 text-xl font-semibold">{label}</h2>
              <p className="mt-2 text-sm text-zinc-500">{count} products</p>
            </a>
          );
        })}
      </section>
    </main>
  );
}

function ProductImage({ product }: { product: OfflineCatalogProduct }) {
  return (
    // biome-ignore lint/performance/noImgElement: The worker caches exact remote image URLs for offline use.
    <img
      src={product.imagePath}
      alt={`${product.manufacturer} ${product.model}`}
      className="h-full w-full object-contain"
      onError={(event) => {
        event.currentTarget.onerror = null;
        event.currentTarget.src = imagePlaceholder(product.categorySlug);
      }}
    />
  );
}

function OfflineCategory({
  locale,
  category,
  snapshot,
}: {
  locale: "en" | "uk";
  category: CatalogCategorySlug;
  snapshot: OfflineCatalogSnapshot;
}) {
  const ui = copy[locale];
  const [query, setQuery] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [chemistry, setChemistry] = useState("");
  const [minCapacity, setMinCapacity] = useState("");
  const [minPower, setMinPower] = useState("");
  const [sort, setSort] = useState<OfflineSort>("recommended");
  const categoryIds = new Set(snapshot.manifest.categories[category]);
  const sourceProducts = snapshot.products.filter((product) =>
    categoryIds.has(product.id),
  );
  const manufacturers = [
    ...new Set(sourceProducts.map((item) => item.manufacturer)),
  ];
  const chemistries = [
    ...new Set(sourceProducts.map((item) => item.chemistry).filter(Boolean)),
  ] as string[];
  const products = filterAndSortOfflineProducts(sourceProducts, {
    locale,
    query,
    manufacturers: manufacturer ? [manufacturer] : [],
    sort,
  }).filter(
    (product) =>
      (!chemistry || product.chemistry === chemistry) &&
      (!minCapacity || (product.capacityWh ?? 0) >= Number(minCapacity)) &&
      (!minPower || (product.continuousPowerW ?? 0) >= Number(minPower)),
  );

  return (
    <main className="mx-auto grid max-w-[1840px] gap-8 px-5 py-8 lg:grid-cols-[280px_minmax(0,1fr)]">
      <aside className="rounded-lg border border-black/10 bg-white p-4 lg:sticky lg:top-20 lg:self-start dark:border-white/10 dark:bg-black">
        <div className="flex items-center gap-2 border-b border-black/10 pb-4 dark:border-white/10">
          <SlidersHorizontal className="size-4" />
          <h2 className="font-semibold">{categoryLabels[locale][category]}</h2>
        </div>
        <label className="mt-4 block text-sm font-medium">
          {ui.search}
          <span className="mt-2 flex items-center gap-2 rounded-md border border-black/10 px-3 dark:border-white/10">
            <Search className="size-4 text-zinc-500" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="h-10 min-w-0 flex-1 bg-transparent outline-none"
            />
          </span>
        </label>
        {[
          [ui.manufacturer, manufacturer, setManufacturer, manufacturers],
          [ui.chemistry, chemistry, setChemistry, chemistries],
        ].map(([label, value, setter, options]) => (
          <label
            key={label as string}
            className="mt-4 block text-sm font-medium"
          >
            {label as string}
            <select
              value={value as string}
              onChange={(event) =>
                (setter as (value: string) => void)(event.target.value)
              }
              className="mt-2 h-10 w-full rounded-md border border-black/10 bg-white px-3 dark:border-white/10 dark:bg-black"
            >
              <option value="">{ui.all}</option>
              {(options as string[]).map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
        ))}
        <label className="mt-4 block text-sm font-medium">
          {ui.minCapacity}
          <input
            type="number"
            min="0"
            value={minCapacity}
            onChange={(event) => setMinCapacity(event.target.value)}
            className="mt-2 h-10 w-full rounded-md border border-black/10 bg-transparent px-3 dark:border-white/10"
          />
        </label>
        <label className="mt-4 block text-sm font-medium">
          {ui.minPower}
          <input
            type="number"
            min="0"
            value={minPower}
            onChange={(event) => setMinPower(event.target.value)}
            className="mt-2 h-10 w-full rounded-md border border-black/10 bg-transparent px-3 dark:border-white/10"
          />
        </label>
      </aside>
      <section className="min-w-0">
        <div className="mb-5 flex items-center justify-between border-b border-black/10 pb-5 dark:border-white/10">
          <p className="text-sm text-zinc-500">{products.length} products</p>
          <label className="text-sm">
            <span className="sr-only">{ui.sort}</span>
            <select
              value={sort}
              onChange={(event) => setSort(event.target.value as OfflineSort)}
              className="h-10 rounded-md border border-black/10 bg-white px-3 dark:border-white/10 dark:bg-black"
            >
              <option value="recommended">Recommended</option>
              <option value="price-asc">Price: low to high</option>
              <option value="price-desc">Price: high to low</option>
              <option value="capacity-desc">Capacity</option>
              <option value="power-desc">Power</option>
              <option value="weight-asc">Weight</option>
            </select>
          </label>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.id}
              className="overflow-hidden rounded-lg border border-black/10 bg-white dark:border-white/10 dark:bg-black"
            >
              <a
                href={offlineHref(`/${locale}/${category}/${product.slug}`)}
                className="block"
              >
                <div className="aspect-[4/3] bg-zinc-50 p-5 dark:bg-zinc-950">
                  <ProductImage product={product} />
                </div>
                <div className="p-5">
                  <p className="text-xs font-medium tracking-wider text-zinc-500 uppercase">
                    {product.manufacturer}
                  </p>
                  <h2 className="mt-2 font-semibold">{product.model}</h2>
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-zinc-500">
                    {localizeOfflineText(product.summary, locale)}
                  </p>
                  <p className="mt-4 font-semibold">
                    {formatPrice(product.priceCents, locale)}
                  </p>
                </div>
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function OfflineProduct({
  locale,
  product,
  isFavorite,
}: {
  locale: "en" | "uk";
  product: OfflineCatalogProduct;
  isFavorite: boolean;
}) {
  const ui = copy[locale];
  const primarySpecs = [
    ["Capacity", product.capacityWh, "Wh"],
    ["Continuous power", product.continuousPowerW, "W"],
    ["Nominal voltage", product.nominalVoltageV, "V"],
    ["Weight", product.weightGrams, "g"],
    ["Chemistry", product.chemistry, ""],
    ["Warranty", product.warrantyYears, "years"],
  ].filter(([, value]) => value !== null && value !== undefined);
  const extraSpecs = Object.entries(product.specifications ?? {}).filter(
    ([, value]) => ["string", "number", "boolean"].includes(typeof value),
  );

  return (
    <main className="mx-auto max-w-6xl px-5 py-8">
      <a
        href={offlineHref(`/${locale}/${product.categorySlug}`)}
        className="inline-flex items-center gap-2 text-sm text-zinc-500"
      >
        <ArrowLeft className="size-4" /> {ui.back}
      </a>
      <section className="mt-6 grid gap-8 lg:grid-cols-[420px_minmax(0,1fr)]">
        <div className="relative aspect-[4/3] rounded-lg border border-black/10 bg-zinc-50 p-8 dark:border-white/10 dark:bg-zinc-950">
          <ProductImage product={product} />
          {isFavorite ? (
            <button
              type="button"
              disabled
              title={ui.favorite}
              className="absolute top-3 right-3 rounded-md bg-black p-2 text-white disabled:opacity-80 dark:bg-white dark:text-black"
            >
              <Heart className="size-4 fill-current" />
              <span className="sr-only">{ui.favorite}</span>
            </button>
          ) : null}
        </div>
        <div>
          <p className="text-sm font-medium tracking-wider text-zinc-500 uppercase">
            {product.manufacturer}
          </p>
          <h1 className="mt-2 text-4xl font-semibold">{product.model}</h1>
          <p className="mt-5 leading-7 text-zinc-600 dark:text-zinc-400">
            {localizeOfflineText(product.summary, locale)}
          </p>
          <p className="mt-6 text-2xl font-semibold">
            {formatPrice(product.priceCents, locale)}
          </p>
        </div>
      </section>
      <section className="mt-8 rounded-lg border border-black/10 bg-white p-5 dark:border-white/10 dark:bg-black">
        <h2 className="font-semibold">{ui.specifications}</h2>
        <dl className="mt-4 divide-y divide-black/10 dark:divide-white/10">
          {[...primarySpecs, ...extraSpecs].map(([label, value, unit]) => (
            <div
              key={String(label)}
              className="grid gap-1 py-3 text-sm sm:grid-cols-[220px_1fr]"
            >
              <dt className="text-zinc-500">{String(label)}</dt>
              <dd className="font-medium">
                {String(value)} {unit ? String(unit) : ""}
              </dd>
            </div>
          ))}
        </dl>
      </section>
      <section className="mt-5 rounded-lg border border-black/10 p-5 dark:border-white/10">
        <h2 className="font-semibold">{ui.source}</h2>
        <p className="mt-2 text-sm text-zinc-500">
          {localizeOfflineText(product.sourceLabel, locale)}
        </p>
      </section>
    </main>
  );
}

export default function OfflineCatalogReader() {
  const searchParams = useSearchParams();
  const route = useMemo(
    () => parseOfflineRoute(searchParams.get("path") ?? "/en"),
    [searchParams],
  );
  const [snapshot, setSnapshot] = useState<OfflineCatalogSnapshot | null>();

  useEffect(() => {
    readOfflineSnapshot()
      .then(setSnapshot)
      .catch(() => setSnapshot(null));
  }, []);

  if (snapshot === undefined) {
    return (
      <div className="px-5 py-20 text-center">Opening offline catalog...</div>
    );
  }

  if (!snapshot) {
    return (
      <main className="mx-auto max-w-xl px-5 py-20 text-center">
        <WifiOff className="mx-auto size-8 text-zinc-500" />
        <h1 className="mt-5 text-2xl font-semibold">
          {copy[route.locale].offline}
        </h1>
        <p className="mt-3 text-zinc-500">{copy[route.locale].missing}</p>
      </main>
    );
  }

  let content: React.ReactNode;
  if (route.kind === "home") {
    content = <OfflineHome locale={route.locale} snapshot={snapshot} />;
  } else if (route.kind === "category") {
    content = (
      <OfflineCategory
        locale={route.locale}
        category={route.category}
        snapshot={snapshot}
      />
    );
  } else if (route.kind === "product") {
    const product = snapshot.products.find(
      (item) =>
        item.categorySlug === route.category && item.slug === route.productSlug,
    );
    content = product ? (
      <OfflineProduct
        locale={route.locale}
        product={product}
        isFavorite={snapshot.favoriteIds.includes(product.id)}
      />
    ) : (
      <p className="px-5 py-20 text-center">{copy[route.locale].unavailable}</p>
    );
  } else {
    content = (
      <p className="px-5 py-20 text-center">{copy[route.locale].unavailable}</p>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ReaderHeader locale={route.locale} />
      {content}
    </div>
  );
}
