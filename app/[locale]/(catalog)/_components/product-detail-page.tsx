import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  BatteryCharging,
  Database,
  ExternalLink,
  FileText,
  Gauge,
  Ruler,
} from "lucide-react";

import FavoriteButton from "@/app/_components/favorite-button";
import {
  formatPrice,
  formatWeight,
  getProductDetailData,
  productDetailCopy,
  type CatalogCategorySlug,
  type CatalogProductSpecifications,
} from "@/lib/catalog";
import { getCurrentSession, getFavoriteEquipmentIds } from "@/lib/favorites";
import { localizeHref, type Locale } from "@/lib/i18n";

type ProductDetailPageProps = {
  category: CatalogCategorySlug;
  locale: Locale;
  productSlug: string;
};

type ProductDetailData = Awaited<ReturnType<typeof getProductDetailData>>;
type ProductDetail = NonNullable<ProductDetailData["product"]>;

function formatNumber(value: number, locale: Locale) {
  return value.toLocaleString(locale === "uk" ? "uk-UA" : "en-US");
}

function formatDate(value: Date, locale: Locale) {
  return new Intl.DateTimeFormat(locale === "uk" ? "uk-UA" : "en-US", {
    dateStyle: "medium",
  }).format(value);
}

function missing(copy: (typeof productDetailCopy)[Locale]) {
  return copy.notAvailable;
}

function specValue(value: unknown, locale: Locale): string {
  if (value === null || value === undefined || value === "") {
    return "";
  }

  if (typeof value === "object") {
    return "";
  }

  if (typeof value === "number") {
    return formatNumber(value, locale);
  }

  if (typeof value === "boolean") {
    return value
      ? locale === "uk"
        ? "Так"
        : "Yes"
      : locale === "uk"
        ? "Ні"
        : "No";
  }

  return String(value);
}

function specLabel(key: string) {
  return key
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/_/g, " ")
    .replace(/\b\w/g, (character) => character.toUpperCase());
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-black">
      <dt className="text-xs font-medium tracking-[0.12em] text-zinc-500 uppercase">
        {label}
      </dt>
      <dd className="mt-2 text-lg font-semibold text-black dark:text-white">
        {value}
      </dd>
    </div>
  );
}

function DetailGroup({
  icon,
  items,
  title,
}: {
  icon: React.ReactNode;
  items: Array<{ label: string; value: string }>;
  title: string;
}) {
  return (
    <section className="min-w-0 rounded-lg border border-black/10 bg-white p-5 dark:border-white/10 dark:bg-black">
      <div className="flex items-center gap-2">
        <span className="text-zinc-500">{icon}</span>
        <h2 className="text-base font-semibold text-black dark:text-white">
          {title}
        </h2>
      </div>
      <dl className="mt-4 divide-y divide-black/10 dark:divide-white/10">
        {items.map((item) => (
          <div
            key={item.label}
            className="grid min-w-0 gap-1 py-3 text-sm sm:grid-cols-[180px_minmax(0,1fr)]"
          >
            <dt className="min-w-0 text-zinc-500">{item.label}</dt>
            <dd className="min-w-0 break-words font-medium text-black dark:text-white">
              {item.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function productSummaryStats(
  product: ProductDetail,
  locale: Locale,
  copy: (typeof productDetailCopy)[Locale],
) {
  return [
    {
      label: copy.capacity,
      value: product.capacityWh
        ? `${formatNumber(product.capacityWh, locale)} Wh`
        : missing(copy),
    },
    {
      label: copy.continuousPower,
      value: product.continuousPowerW
        ? `${formatNumber(product.continuousPowerW, locale)} W`
        : missing(copy),
    },
    {
      label: copy.nominalVoltage,
      value: product.nominalVoltageV
        ? `${product.nominalVoltageV} V`
        : missing(copy),
    },
    {
      label: copy.price,
      value: formatPrice(product.priceCents, locale),
    },
  ];
}

function baseInfo(
  product: ProductDetail,
  locale: Locale,
  copy: (typeof productDetailCopy)[Locale],
) {
  return [
    { label: copy.manufacturer, value: product.manufacturer },
    { label: copy.category, value: product.categoryName ?? missing(copy) },
    { label: copy.model, value: product.model },
    { label: copy.productCode, value: product.productCode ?? missing(copy) },
    { label: copy.updatedAt, value: formatDate(product.updatedAt, locale) },
  ];
}

function electricalInfo(
  product: ProductDetail,
  locale: Locale,
  copy: (typeof productDetailCopy)[Locale],
) {
  return [
    {
      label: copy.nominalVoltage,
      value: product.nominalVoltageV
        ? `${product.nominalVoltageV} V`
        : missing(copy),
    },
    {
      label: copy.capacity,
      value: product.capacityWh
        ? `${formatNumber(product.capacityWh, locale)} Wh`
        : missing(copy),
    },
    {
      label: copy.continuousPower,
      value: product.continuousPowerW
        ? `${formatNumber(product.continuousPowerW, locale)} W`
        : missing(copy),
    },
    {
      label: copy.peakPower,
      value: product.peakPowerW
        ? `${formatNumber(product.peakPowerW, locale)} W`
        : missing(copy),
    },
    {
      label: copy.maxPvVoltage,
      value: product.maxPvVoltageV
        ? `${product.maxPvVoltageV} V`
        : missing(copy),
    },
    {
      label: copy.maxChargeCurrent,
      value: product.maxChargeCurrentA
        ? `${product.maxChargeCurrentA} A`
        : missing(copy),
    },
    {
      label: copy.communicationProtocols,
      value: product.communicationProtocols ?? missing(copy),
    },
  ];
}

function physicalInfo(
  product: ProductDetail,
  copy: (typeof productDetailCopy)[Locale],
  locale: Locale,
) {
  return [
    {
      label: copy.chemistry,
      value: product.chemistryLabel ?? product.chemistry ?? missing(copy),
    },
    {
      label: copy.weight,
      value: formatWeight(product.weightGrams, locale),
    },
  ];
}

function lifecycleInfo(
  product: ProductDetail,
  locale: Locale,
  copy: (typeof productDetailCopy)[Locale],
) {
  return [
    {
      label: copy.warranty,
      value: product.warrantyYears
        ? `${product.warrantyYears} ${copy.yearShort}`
        : missing(copy),
    },
    {
      label: copy.lifecycleCycles,
      value: product.lifecycleCycles
        ? `${formatNumber(product.lifecycleCycles, locale)} ${copy.cycles}`
        : missing(copy),
    },
  ];
}

function additionalSpecs(
  specifications: CatalogProductSpecifications | null,
  locale: Locale,
) {
  if (!specifications) {
    return [];
  }

  return Object.entries(specifications)
    .map(([key, value]) => ({
      label: specLabel(key),
      value: specValue(value, locale),
    }))
    .filter((item) => item.value);
}

export default async function ProductDetailPage({
  category,
  locale,
  productSlug,
}: ProductDetailPageProps) {
  const copy = productDetailCopy[locale];
  const [{ product, unavailable }, session] = await Promise.all([
    getProductDetailData({
      categorySlug: category,
      locale,
      productSlug,
    }),
    getCurrentSession(),
  ]);
  const catalogHref = localizeHref(locale, `/${category}`);

  if (unavailable) {
    return (
      <div className="mx-auto max-w-3xl px-5 py-16 text-center">
        <Database className="mx-auto size-8 text-zinc-500" aria-hidden="true" />
        <h1 className="mt-4 text-2xl font-semibold text-black dark:text-white">
          {copy.databaseUnavailable}
        </h1>
        <p className="mt-3 text-sm leading-6 text-zinc-500">
          {copy.offlineDescription}
        </p>
      </div>
    );
  }

  if (!product) {
    notFound();
  }

  const specs = additionalSpecs(
    product.specifications as CatalogProductSpecifications | null,
    locale,
  );
  const favoriteEquipmentIds = await getFavoriteEquipmentIds(session?.user.id);
  const isFavorite = favoriteEquipmentIds.has(product.id);

  return (
    <div className="bg-background text-foreground">
      <section className="mx-auto grid max-w-[1840px] gap-8 px-5 py-8 lg:grid-cols-[minmax(0,1fr)_360px] 3xl:grid-cols-[minmax(0,1fr)_400px]">
        <div className="min-w-0">
          <Link
            href={catalogHref}
            className="focus-visible:outline-ring inline-flex items-center gap-2 rounded-sm text-sm font-medium text-zinc-500 transition hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 dark:hover:text-white"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            {copy.backToCatalog}
          </Link>

          <div className="mt-6 grid gap-8 lg:grid-cols-[360px_minmax(0,1fr)] 3xl:grid-cols-[420px_minmax(0,1fr)]">
            <div className="relative flex aspect-[4/3] items-center justify-center rounded-lg border border-black/10 bg-zinc-50 p-8 dark:border-white/10 dark:bg-zinc-950">
              <Image
                src={product.imagePath}
                alt={`${product.manufacturer} ${product.model}`}
                width={520}
                height={390}
                priority
                unoptimized
                className="h-full w-full object-contain"
              />
              <FavoriteButton
                equipmentId={product.id}
                isFavorite={isFavorite}
                className="absolute top-3 right-3 z-10 shadow-sm"
              />
            </div>

            <div className="min-w-0">
              <p className="text-sm font-medium tracking-[0.14em] text-zinc-500 uppercase">
                {product.manufacturer}
              </p>
              <h1 className="mt-2 text-3xl font-semibold tracking-normal text-black sm:text-4xl dark:text-white">
                {product.model}
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
                {product.summary}
              </p>

              <dl className="mt-6 grid gap-3 sm:grid-cols-2">
                {productSummaryStats(product, locale, copy).map((item) => (
                  <StatCard key={item.label} {...item} />
                ))}
              </dl>
            </div>
          </div>

          <div className="mt-8 grid gap-5">
            <DetailGroup
              icon={<FileText className="size-4" aria-hidden="true" />}
              items={baseInfo(product, locale, copy)}
              title={copy.overview}
            />
            <DetailGroup
              icon={<Gauge className="size-4" aria-hidden="true" />}
              items={electricalInfo(product, locale, copy)}
              title={copy.electrical}
            />
            <DetailGroup
              icon={<Ruler className="size-4" aria-hidden="true" />}
              items={physicalInfo(product, copy, locale)}
              title={copy.physical}
            />
            <DetailGroup
              icon={<BatteryCharging className="size-4" aria-hidden="true" />}
              items={lifecycleInfo(product, locale, copy)}
              title={copy.lifecycle}
            />
          </div>
        </div>

        <aside className="grid min-w-0 content-start gap-5 lg:sticky lg:top-20">
          <section className="min-w-0 rounded-lg border border-black/10 bg-white p-5 dark:border-white/10 dark:bg-black">
            <div className="flex items-center gap-2">
              <Database className="size-4 text-zinc-500" aria-hidden="true" />
              <h2 className="text-base font-semibold text-black dark:text-white">
                {copy.source}
              </h2>
            </div>
            <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              {product.sourceLabel}
            </p>
            {product.sourceUrl ? (
              <a
                href={product.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="focus-visible:outline-ring mt-4 inline-flex max-w-full items-center gap-2 rounded-md border border-black/10 px-3 py-2 text-sm font-medium text-black transition hover:bg-zinc-50 focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-white/10 dark:text-white dark:hover:bg-zinc-900"
              >
                <ExternalLink className="size-4 shrink-0" aria-hidden="true" />
                <span className="min-w-0 break-words">
                  {product.sourceLabel}
                </span>
              </a>
            ) : null}
          </section>

          {specs.length > 0 ? (
            <section className="min-w-0 rounded-lg border border-black/10 bg-white p-5 dark:border-white/10 dark:bg-black">
              <h2 className="text-base font-semibold text-black dark:text-white">
                {copy.additionalSpecifications}
              </h2>
              <dl className="mt-4 divide-y divide-black/10 dark:divide-white/10">
                {specs.map((item) => (
                  <div key={item.label} className="min-w-0 py-3 text-sm">
                    <dt className="min-w-0 break-words text-zinc-500">
                      {item.label}
                    </dt>
                    <dd className="mt-1 min-w-0 break-words font-medium text-black dark:text-white">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          ) : null}
        </aside>
      </section>
    </div>
  );
}
