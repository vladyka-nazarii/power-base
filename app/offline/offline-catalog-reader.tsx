"use client";

import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Database,
  FileText,
  Heart,
  Menu,
  Search,
  SlidersHorizontal,
  Wifi,
  WifiOff,
  X,
  Zap,
} from "lucide-react";
import { useSearchParams } from "next/navigation";
import {
  createContext,
  type MouseEvent,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import LanguageSwitcher from "@/app/_components/language-switcher";
import PowerBaseLogo, {
  PowerBaseLogoMark,
} from "@/app/_components/powerbase-logo";
import SiteFooter from "@/app/_components/site-footer";
import ThemeSwitcher from "@/app/_components/theme-switcher";
import { Button } from "@/components/ui/button";
import type { CatalogCategorySlug } from "@/lib/catalog";
import {
  localizePowerBankNumberFilterGroup,
  type PowerBankRangeKey,
} from "@/lib/catalog-filter-definitions";
import { getDictionary } from "@/lib/i18n";
import {
  localizeOfflineText,
  type OfflineCatalogProduct,
  type OfflineCatalogSnapshot,
  type OfflineSort,
  parseOfflineRoute,
} from "@/lib/offline/catalog";
import { readOfflineSnapshot } from "@/lib/offline/catalog-client";
import {
  createOfflineCatalogFilters,
  filterOfflineCatalogProducts,
  getOfflinePowerBankSpecs,
  type OfflineCatalogFilters,
} from "@/lib/offline/catalog-filters";
import {
  localizePowerBankOption,
  powerBankBuiltInCableOptions,
  powerBankChemistryOptions,
  powerBankDisplayOptions,
  powerBankProtocolOptions,
} from "@/lib/power-bank-specs";

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
    filters: "Filters",
    reset: "Reset",
    chemistry: "Chemistry",
    nominalVoltage: "Nominal voltage",
    outputProtocols: "Output protocols",
    displayType: "Display type",
    builtInCable: "Built-in cable",
    maxDimensions: "Maximum dimensions",
    length: "Length",
    width: "Width",
    thickness: "Thickness",
    passthroughCharging: "Passthrough charging",
    supports12vPdOutput: "12V PD output support",
    airlineSafe: "Airline safe (100Wh or less)",
    safetyCertifications: "Safety certifications",
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
    returnOnline: "Return online",
  },
  uk: {
    offline: "Офлайн-каталог",
    description: "Збережений каталог PowerBase доступний без підключення.",
    search: "Пошук збережених товарів",
    manufacturer: "Виробник",
    filters: "Фільтри",
    reset: "Скинути",
    chemistry: "Хімія",
    nominalVoltage: "Номінальна напруга",
    outputProtocols: "Протоколи виходу",
    displayType: "Тип дисплея",
    builtInCable: "Вбудований кабель",
    maxDimensions: "Максимальні розміри",
    length: "Довжина",
    width: "Ширина",
    thickness: "Товщина",
    passthroughCharging: "Наскрізне заряджання",
    supports12vPdOutput: "Підтримка виходу PD 12 В",
    airlineSafe: "Дозволено в літаку (до 100 Вт·год включно)",
    safetyCertifications: "Сертифікати безпеки",
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
    returnOnline: "Повернутися онлайн",
  },
} as const;

function offlineHref(path: string) {
  return `/offline?path=${encodeURIComponent(path)}`;
}

const OfflineNavigationContext = createContext<(path: string) => void>(
  () => {},
);

function OfflineLink({
  path,
  children,
  className,
}: {
  path: string;
  children: ReactNode;
  className?: string;
}) {
  const navigate = useContext(OfflineNavigationContext);
  return (
    <a
      href={offlineHref(path)}
      className={className}
      onClick={(event: MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        navigate(path);
      }}
    >
      {children}
    </a>
  );
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

function onlinePathFor(path: string, locale: "en" | "uk") {
  const route = parseOfflineRoute(path);
  if (route.kind === "home") return `/${route.locale}`;
  if (route.kind === "category") {
    return `/${route.locale}/${route.category}`;
  }
  if (route.kind === "product") {
    return `/${route.locale}/${route.category}/${route.productSlug}`;
  }
  return `/${locale}`;
}

function localizedOfflinePath(
  path: string,
  currentLocale: "en" | "uk",
  nextLocale: "en" | "uk",
) {
  return path === `/${currentLocale}`
    ? `/${nextLocale}`
    : path.replace(/^\/(en|uk)\//, `/${nextLocale}/`);
}

function OfflineMobileMenu({
  locale,
  path,
  online,
}: {
  locale: "en" | "uk";
  path: string;
  online: boolean;
}) {
  const navigate = useContext(OfflineNavigationContext);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const route = parseOfflineRoute(path);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const handlePointerDown = (event: PointerEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [open]);

  const items = [
    {
      label: getDictionary(locale).navigation.home,
      path: `/${locale}`,
      active: route.kind === "home",
    },
    ...Object.entries(categoryLabels[locale]).map(([category, label]) => ({
      label,
      path: `/${locale}/${category}`,
      active:
        (route.kind === "category" || route.kind === "product") &&
        route.category === category,
    })),
  ];

  return (
    <div ref={menuRef} className="lg:hidden">
      <Button
        type="button"
        variant="outline"
        size="icon"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="offline-mobile-header-menu"
        onClick={() => setOpen((current) => !current)}
      >
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </Button>
      {open ? (
        <div
          id="offline-mobile-header-menu"
          className="absolute top-full right-3 left-3 mt-2 rounded-lg border border-black/10 bg-white p-3 shadow-xl shadow-black/10 dark:border-white/10 dark:bg-zinc-950 dark:shadow-black/40"
          onClickCapture={(event) => {
            if ((event.target as Element).closest("a")) setOpen(false);
          }}
        >
          <div className="mb-3 flex items-center gap-2 px-3 text-xs font-medium text-zinc-500">
            <WifiOff className="size-3.5" /> {copy[locale].offline}
          </div>
          <nav aria-label="Primary">
            <ul className="grid gap-1">
              {items.map((item) => (
                <li key={item.path}>
                  <OfflineLink
                    path={item.path}
                    className={`flex min-h-10 items-center rounded-md px-3 text-sm font-medium transition ${
                      item.active
                        ? "bg-zinc-900 text-white dark:bg-white dark:text-black"
                        : "text-zinc-700 hover:bg-zinc-100 hover:text-black dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-white"
                    }`}
                  >
                    {item.label}
                  </OfflineLink>
                </li>
              ))}
            </ul>
          </nav>
          {online ? (
            <a
              href={onlinePathFor(path, locale)}
              className="mt-3 flex min-h-10 items-center justify-center gap-2 rounded-md bg-black px-3 text-sm font-medium text-white dark:bg-white dark:text-black"
            >
              <Wifi className="size-4" /> {copy[locale].returnOnline}
            </a>
          ) : null}
          <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-black/10 pt-3 dark:border-white/10">
            <LanguageSwitcher
              locale={locale}
              labels={getDictionary(locale).common.languages}
              getHref={(nextLocale) =>
                offlineHref(localizedOfflinePath(path, locale, nextLocale))
              }
              onLocaleChange={(nextLocale) =>
                navigate(localizedOfflinePath(path, locale, nextLocale))
              }
            />
            <ThemeSwitcher />
          </div>
        </div>
      ) : null}
    </div>
  );
}

function ReaderHeader({
  locale,
  path,
  online,
}: {
  locale: "en" | "uk";
  path: string;
  online: boolean;
}) {
  const navigate = useContext(OfflineNavigationContext);
  const localizedPath = (nextLocale: "en" | "uk") =>
    localizedOfflinePath(path, locale, nextLocale);
  return (
    <header className="sticky top-0 z-20 flex min-h-14 items-center justify-between gap-4 border-b border-black/10 bg-white/90 px-5 backdrop-blur dark:border-white/10 dark:bg-black/85">
      <OfflineLink path={`/${locale}`} className="shrink-0">
        <PowerBaseLogo />
      </OfflineLink>
      <nav className="hidden min-w-0 lg:block" aria-label="Primary">
        <ul className="flex items-center gap-1">
          {Object.entries(categoryLabels[locale]).map(([category, label]) => (
            <li key={category}>
              <OfflineLink
                path={`/${locale}/${category}`}
                className="rounded-md px-2.5 py-1.5 text-sm text-zinc-600 transition hover:bg-zinc-100 hover:text-black dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white"
              >
                {label}
              </OfflineLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="hidden shrink-0 items-center gap-2 text-sm lg:flex">
        <span className="inline-flex items-center gap-2 text-zinc-500">
          <WifiOff className="size-4" /> {copy[locale].offline}
        </span>
        {online ? (
          <a
            href={onlinePathFor(path, locale)}
            className="inline-flex h-8 items-center gap-1.5 rounded-lg bg-black px-2.5 text-xs font-medium text-white transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
          >
            <Wifi className="size-3.5" /> {copy[locale].returnOnline}
          </a>
        ) : null}
        <ThemeSwitcher />
        <LanguageSwitcher
          locale={locale}
          labels={getDictionary(locale).common.languages}
          getHref={(nextLocale) => offlineHref(localizedPath(nextLocale))}
          onLocaleChange={(nextLocale) => navigate(localizedPath(nextLocale))}
        />
      </div>
      <OfflineMobileMenu locale={locale} path={path} online={online} />
    </header>
  );
}

function OfflineBreadcrumbs({
  route,
  product,
}: {
  route: ReturnType<typeof parseOfflineRoute>;
  product?: OfflineCatalogProduct;
}) {
  if (route.kind === "home" || route.kind === "unsupported") return null;
  const items = [
    {
      label: getDictionary(route.locale).navigation.home,
      path: `/${route.locale}`,
    },
    {
      label: categoryLabels[route.locale][route.category],
      path: `/${route.locale}/${route.category}`,
    },
    ...(route.kind === "product"
      ? [{ label: product?.model ?? route.productSlug, path: "" }]
      : []),
  ];

  return (
    <nav
      aria-label="Breadcrumb"
      className="border-b border-black/10 px-5 py-3 text-sm dark:border-white/10"
    >
      <ol className="mx-auto flex max-w-[1880px] flex-wrap items-center gap-1 text-zinc-500 dark:text-zinc-400">
        {items.map((item, index) => {
          const current = index === items.length - 1;
          return (
            <li
              key={item.path || item.label}
              className="flex items-center gap-1"
            >
              {index > 0 ? <ChevronRight className="size-3.5" /> : null}
              {current ? (
                <span
                  aria-current="page"
                  className="font-medium text-zinc-900 dark:text-zinc-100"
                >
                  {item.label}
                </span>
              ) : (
                <OfflineLink
                  path={item.path}
                  className="hover:text-zinc-900 dark:hover:text-zinc-100"
                >
                  {item.label}
                </OfflineLink>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

function OfflineHome({
  locale,
  snapshot,
}: {
  locale: "en" | "uk";
  snapshot: OfflineCatalogSnapshot;
}) {
  const home = getDictionary(locale).home;
  return (
    <main>
      <section className="relative border-b border-black/10 px-5 py-20 text-center sm:py-24 dark:border-white/10">
        <div className="mx-auto flex max-w-5xl flex-col items-center">
          <div className="mb-8 inline-flex h-8 items-center gap-2 rounded-full border border-black/10 bg-white px-3 text-sm text-zinc-700 shadow-sm dark:border-white/15 dark:bg-zinc-950 dark:text-zinc-300">
            <Zap className="size-4" />
            <span>{home.badge}</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-7">
            <PowerBaseLogoMark className="size-24 sm:size-32 lg:size-40" />
            <h1 className="max-w-4xl text-5xl leading-[1.05] font-semibold text-balance sm:text-6xl lg:text-7xl">
              {home.title}
            </h1>
          </div>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-balance text-zinc-600 sm:text-2xl dark:text-zinc-400">
            {home.headline}
          </p>
          <p className="mt-5 max-w-3xl text-base leading-8 text-pretty text-zinc-600 sm:text-lg dark:text-zinc-400">
            {home.description}
          </p>
          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
            <OfflineLink
              path={`/${locale}/inverters`}
              className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-black px-4 text-sm font-medium text-white dark:bg-white dark:text-black"
            >
              {home.primaryAction} <ArrowRight className="size-4" />
            </OfflineLink>
            <a
              href="#brief"
              className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-black/10 bg-white px-4 text-sm font-medium dark:border-white/15 dark:bg-black"
            >
              <FileText className="size-4" /> {home.secondaryAction}
            </a>
          </div>
          <div className="mt-12 w-full max-w-2xl overflow-hidden rounded-lg border border-black/10 bg-zinc-950 text-left shadow-2xl dark:border-white/15">
            <div className="flex h-10 items-center gap-2 border-b border-white/10 px-4">
              <span className="size-3 rounded-full bg-zinc-500" />
              <span className="size-3 rounded-full bg-zinc-600" />
              <span className="size-3 rounded-full bg-zinc-700" />
            </div>
            <div className="flex items-center gap-3 px-4 py-5 font-mono text-sm text-zinc-100 sm:text-base">
              <span className="text-zinc-500">▲</span>
              <code className="overflow-x-auto whitespace-nowrap">
                {home.command}
              </code>
            </div>
          </div>
        </div>
      </section>
      <section className="grid border-b border-black/10 sm:grid-cols-3 dark:border-white/10">
        {home.stats.map((stat) => (
          <div
            key={stat.label}
            className="border-b border-black/10 px-5 py-8 text-center last:border-b-0 sm:border-r sm:border-b-0 sm:last:border-r-0 dark:border-white/10"
          >
            <div className="text-3xl font-semibold">{stat.value}</div>
            <div className="mx-auto mt-2 max-w-56 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              {stat.label}
            </div>
          </div>
        ))}
      </section>
      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-[1840px]">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold sm:text-4xl">
              {home.featuresTitle}
            </h2>
            <p className="mt-4 text-base leading-7 text-zinc-600 sm:text-lg dark:text-zinc-400">
              {home.featuresDescription}
            </p>
          </div>
          <div className="mt-12 grid overflow-hidden rounded-lg border border-black/10 bg-white sm:grid-cols-2 lg:grid-cols-3 dark:border-white/10 dark:bg-black">
            {home.features.map((feature) => (
              <article
                key={feature.title}
                className="min-h-56 border-b border-black/10 p-6 lg:border-r dark:border-white/10"
              >
                <Database className="mb-8 size-5" />
                <h3 className="font-semibold">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section
        id="brief"
        className="border-y border-black/10 bg-zinc-50 px-5 py-16 dark:border-white/10 dark:bg-zinc-950"
      >
        <div className="mx-auto grid max-w-[1840px] gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              {home.categoriesTitle}
            </h2>
            <div className="mt-8 flex flex-wrap gap-2">
              {home.categories.map((category) => (
                <span
                  key={category}
                  className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-sm dark:border-white/15 dark:bg-black"
                >
                  {category}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm text-zinc-500">
              {snapshot.products.length} {copy[locale].products}
            </p>
          </div>
          <div className="overflow-hidden rounded-lg border border-black/10 bg-white dark:border-white/10 dark:bg-black">
            <div className="border-b border-black/10 px-5 py-4 dark:border-white/10">
              <h3 className="font-medium">{home.pipelineTitle}</h3>
            </div>
            <ol className="divide-y divide-black/10 dark:divide-white/10">
              {home.pipeline.map((item, index) => (
                <li key={item} className="flex gap-4 px-5 py-5">
                  <div className="flex size-7 shrink-0 items-center justify-center rounded-full border border-black/10 text-sm font-medium dark:border-white/15">
                    {index + 1}
                  </div>
                  <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    {item}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
      <section className="px-5 py-12">
        <div className="mx-auto flex max-w-[1840px] flex-col gap-4 rounded-lg border border-black/10 bg-white p-5 sm:flex-row sm:items-center sm:justify-between dark:border-white/10 dark:bg-black">
          <p className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
            <CheckCircle2 className="size-5" /> {home.description}
          </p>
          <OfflineLink
            path={`/${locale}/batteries`}
            className="inline-flex h-9 items-center justify-center gap-2 rounded-md border border-black/10 px-3 text-sm font-medium dark:border-white/10"
          >
            {home.primaryAction} <ArrowRight className="size-4" />
          </OfflineLink>
        </div>
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

function toggleFilterValue<T>(values: T[], value: T) {
  return values.includes(value)
    ? values.filter((item) => item !== value)
    : [...values, value];
}

function OfflineCheckboxGroup({
  title,
  options,
  selected,
  onToggle,
  className = "mt-6",
}: {
  title: string;
  options: Array<{ value: string; label?: string; count?: number }>;
  selected: string[];
  onToggle: (value: string) => void;
  className?: string;
}) {
  return (
    <fieldset className={className}>
      <legend className="text-sm font-medium">{title}</legend>
      <div className="mt-3 space-y-2">
        {options.map((option) => (
          <label
            key={option.value}
            className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400"
          >
            <input
              type="checkbox"
              checked={selected.includes(option.value)}
              onChange={() => onToggle(option.value)}
              className="size-4 rounded border-black/20"
            />
            <span className="min-w-0 flex-1">
              {option.label ?? option.value}
              {option.count !== undefined ? (
                <span className="text-zinc-400"> ({option.count})</span>
              ) : null}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

function OfflineRangeGroup({
  rangeKey,
  title,
  filters,
  products,
  locale,
  onToggle,
}: {
  rangeKey: PowerBankRangeKey;
  title: string;
  filters: OfflineCatalogFilters;
  products: OfflineCatalogProduct[];
  locale: "en" | "uk";
  onToggle: (value: string) => void;
}) {
  const group = localizePowerBankNumberFilterGroup(rangeKey, locale);
  const options = group.options.map((option) => {
    const testFilters = createOfflineCatalogFilters();
    testFilters.ranges[rangeKey] = [option.id];
    return {
      value: option.id,
      label: option.label,
      count: filterOfflineCatalogProducts(products, testFilters, locale, true)
        .length,
    };
  });

  return (
    <fieldset>
      <legend className="text-sm font-medium">{title}</legend>
      <div className="mt-3 space-y-2">
        {options.map((option) => (
          <label
            key={option.value}
            className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400"
          >
            <input
              type="checkbox"
              checked={filters.ranges[rangeKey].includes(option.value)}
              onChange={() => onToggle(option.value)}
              className="size-4 rounded border-black/20"
            />
            <span>
              {option.label}
              <span className="text-zinc-400"> ({option.count})</span>
            </span>
          </label>
        ))}
      </div>
    </fieldset>
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
  const [filters, setFilters] = useState(createOfflineCatalogFilters);
  const categoryIds = new Set(snapshot.manifest.categories[category]);
  const sourceProducts = snapshot.products.filter((product) =>
    categoryIds.has(product.id),
  );
  const countOptions = (values: string[]) =>
    [...new Set(values)].map((value) => ({
      value,
      count: values.filter((item) => item === value).length,
    }));
  const localizeOptions = <T extends { value: string }>(options: T[]) =>
    options.map((option) => ({
      ...option,
      label: localizePowerBankOption(option.value, locale),
    }));
  const manufacturers = countOptions(
    sourceProducts.map((item) => item.manufacturer),
  );
  const chemistries = countOptions(
    sourceProducts
      .map((item) => item.chemistry)
      .filter((value): value is string => Boolean(value)),
  );
  const voltages = [
    ...new Set(
      sourceProducts
        .map((item) => item.nominalVoltageV)
        .filter((value): value is number => value !== null),
    ),
  ].sort((left, right) => left - right);
  const powerBankSpecs = sourceProducts.map((product) =>
    getOfflinePowerBankSpecs(product, locale),
  );
  const optionCounts = (
    values: Array<string | undefined>,
    options: readonly string[],
  ) =>
    options.map((value) => ({
      value,
      count: values.filter((item) => item === value).length,
    }));
  const protocolCounts = powerBankProtocolOptions.map((value) => ({
    value,
    count: powerBankSpecs.filter((specs) =>
      specs.supportedOutputProtocols?.includes(value),
    ).length,
  }));
  const safetyCertificationCounts = countOptions(
    powerBankSpecs.flatMap((specs) => specs.safetyCertifications ?? []),
  );
  const passthroughChargingCount = powerBankSpecs.filter(
    (specs) => specs.passthroughCharging === true,
  ).length;
  const supports12vPdOutputCount = powerBankSpecs.filter(
    (specs) => specs.supports12vPdOutput === true,
  ).length;
  const airlineSafeCount = powerBankSpecs.filter(
    (specs) => specs.airlineSafe === true,
  ).length;
  const products = filterOfflineCatalogProducts(
    sourceProducts,
    filters,
    locale,
    category === "power-banks",
  );

  const toggleArray = (
    key:
      | "manufacturers"
      | "chemistries"
      | "batteryChemistries"
      | "supportedOutputProtocols"
      | "displayTypes"
      | "builtInCables"
      | "safetyCertifications",
    value: string,
  ) =>
    setFilters((current) => ({
      ...current,
      [key]: toggleFilterValue(current[key], value),
    }));
  const toggleRange = (key: PowerBankRangeKey, value: string) =>
    setFilters((current) => ({
      ...current,
      ranges: {
        ...current.ranges,
        [key]: toggleFilterValue(current.ranges[key], value),
      },
    }));

  return (
    <main className="mx-auto grid max-w-[1840px] gap-8 px-5 py-8 lg:grid-cols-[280px_minmax(0,1fr)]">
      <aside className="rounded-lg border border-black/10 bg-white p-4 lg:sticky lg:top-20 lg:self-start dark:border-white/10 dark:bg-black">
        <div className="flex items-center justify-between gap-2 border-b border-black/10 pb-4 dark:border-white/10">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="size-4" />
            <h2 className="text-sm font-semibold">{ui.filters}</h2>
          </div>
          <button
            type="button"
            onClick={() => setFilters(createOfflineCatalogFilters())}
            className="text-sm text-zinc-500 transition hover:text-black dark:hover:text-white"
          >
            {ui.reset}
          </button>
        </div>
        <label className="mt-4 block text-sm font-medium">
          {ui.search}
          <span className="mt-2 flex items-center gap-2 rounded-md border border-black/10 px-3 dark:border-white/10">
            <Search className="size-4 text-zinc-500" />
            <input
              value={filters.query}
              onChange={(event) =>
                setFilters((current) => ({
                  ...current,
                  query: event.target.value,
                }))
              }
              className="h-10 min-w-0 flex-1 bg-transparent outline-none"
            />
          </span>
        </label>
        <OfflineCheckboxGroup
          title={ui.manufacturer}
          options={manufacturers}
          selected={filters.manufacturers}
          onToggle={(value) => toggleArray("manufacturers", value)}
        />
        {category === "power-banks" ? (
          <>
            <OfflineCheckboxGroup
              title={ui.chemistry}
              options={localizeOptions(
                optionCounts(
                  powerBankSpecs.map((specs) => specs.batteryChemistry),
                  powerBankChemistryOptions,
                ),
              )}
              selected={filters.batteryChemistries}
              onToggle={(value) => toggleArray("batteryChemistries", value)}
            />
            <OfflineCheckboxGroup
              title={ui.outputProtocols}
              options={protocolCounts}
              selected={filters.supportedOutputProtocols}
              onToggle={(value) =>
                toggleArray("supportedOutputProtocols", value)
              }
            />
            <OfflineCheckboxGroup
              title={ui.displayType}
              options={localizeOptions(
                optionCounts(
                  powerBankSpecs.map((specs) => specs.displayType),
                  powerBankDisplayOptions,
                ),
              )}
              selected={filters.displayTypes}
              onToggle={(value) => toggleArray("displayTypes", value)}
            />
            <OfflineCheckboxGroup
              title={ui.builtInCable}
              options={localizeOptions(
                optionCounts(
                  powerBankSpecs.map((specs) => specs.builtInCable),
                  powerBankBuiltInCableOptions,
                ),
              )}
              selected={filters.builtInCables}
              onToggle={(value) => toggleArray("builtInCables", value)}
            />
            {safetyCertificationCounts.length > 0 ? (
              <OfflineCheckboxGroup
                title={ui.safetyCertifications}
                options={safetyCertificationCounts}
                selected={filters.safetyCertifications}
                onToggle={(value) => toggleArray("safetyCertifications", value)}
              />
            ) : null}
            <div className="mt-6 grid gap-6">
              {(
                [
                  "capacityWh",
                  "usableEnergy",
                  "conversionEfficiency",
                  "maxInputPower",
                  "maxOutputPower",
                  "volumetricDensity",
                  "gravimetricDensity",
                  "rechargeTime",
                  "thermalThrottle",
                  "weight",
                  "price",
                  "wirelessChargingMaxPower",
                ] as PowerBankRangeKey[]
              ).map((rangeKey) => (
                <OfflineRangeGroup
                  key={rangeKey}
                  rangeKey={rangeKey}
                  title={
                    localizePowerBankNumberFilterGroup(rangeKey, locale).title
                  }
                  filters={filters}
                  products={sourceProducts}
                  locale={locale}
                  onToggle={(value) => toggleRange(rangeKey, value)}
                />
              ))}
            </div>
            <fieldset className="mt-6">
              <legend className="text-sm font-medium">
                {ui.maxDimensions}
              </legend>
              <div className="mt-3 grid gap-6">
                {(
                  [
                    ["dimensionLength", ui.length],
                    ["dimensionWidth", ui.width],
                    ["dimensionThickness", ui.thickness],
                  ] as Array<[PowerBankRangeKey, string]>
                ).map(([rangeKey, title]) => (
                  <OfflineRangeGroup
                    key={rangeKey}
                    rangeKey={rangeKey}
                    title={title}
                    filters={filters}
                    products={sourceProducts}
                    locale={locale}
                    onToggle={(value) => toggleRange(rangeKey, value)}
                  />
                ))}
              </div>
            </fieldset>
            <label className="mt-6 flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
              <input
                type="checkbox"
                checked={filters.passthroughCharging}
                onChange={(event) =>
                  setFilters((current) => ({
                    ...current,
                    passthroughCharging: event.target.checked,
                  }))
                }
                className="size-4 rounded border-black/20"
              />
              {ui.passthroughCharging}
              <span className="text-zinc-400">
                ({passthroughChargingCount})
              </span>
            </label>
            <label className="mt-3 flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
              <input
                type="checkbox"
                checked={filters.supports12vPdOutput}
                onChange={(event) =>
                  setFilters((current) => ({
                    ...current,
                    supports12vPdOutput: event.target.checked,
                  }))
                }
                className="size-4 rounded border-black/20"
              />
              {ui.supports12vPdOutput}
              <span className="text-zinc-400">
                ({supports12vPdOutputCount})
              </span>
            </label>
            <label className="mt-3 flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
              <input
                type="checkbox"
                checked={filters.airlineSafe}
                onChange={(event) =>
                  setFilters((current) => ({
                    ...current,
                    airlineSafe: event.target.checked,
                  }))
                }
                className="size-4 rounded border-black/20"
              />
              {ui.airlineSafe}
              <span className="text-zinc-400">({airlineSafeCount})</span>
            </label>
          </>
        ) : (
          <>
            <fieldset className="mt-6">
              <legend className="text-sm font-medium">
                {ui.nominalVoltage}
              </legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {voltages.map((voltage) => (
                  <label key={voltage}>
                    <input
                      type="checkbox"
                      checked={filters.voltages.includes(voltage)}
                      onChange={() =>
                        setFilters((current) => ({
                          ...current,
                          voltages: toggleFilterValue(
                            current.voltages,
                            voltage,
                          ),
                        }))
                      }
                      className="peer sr-only"
                    />
                    <span className="inline-flex h-8 items-center rounded-md border border-black/10 px-3 text-sm text-zinc-600 transition peer-checked:border-black peer-checked:bg-black peer-checked:text-white dark:border-white/10 dark:text-zinc-400 dark:peer-checked:border-white dark:peer-checked:bg-white dark:peer-checked:text-black">
                      {voltage} V
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>
            {chemistries.length > 0 ? (
              <OfflineCheckboxGroup
                title={ui.chemistry}
                options={chemistries}
                selected={filters.chemistries}
                onToggle={(value) => toggleArray("chemistries", value)}
              />
            ) : null}
            <div className="mt-6 grid gap-4">
              {[
                ["minCapacityWh", ui.minCapacity],
                ["minPowerW", ui.minPower],
              ].map(([key, label]) => (
                <label key={key} className="text-sm font-medium">
                  {label}
                  <input
                    type="number"
                    min="0"
                    step="any"
                    value={filters[key as "minCapacityWh" | "minPowerW"]}
                    onChange={(event) =>
                      setFilters((current) => ({
                        ...current,
                        [key]: event.target.value,
                      }))
                    }
                    className="mt-2 h-10 w-full rounded-md border border-black/10 bg-transparent px-3 outline-none dark:border-white/10"
                  />
                </label>
              ))}
            </div>
          </>
        )}
      </aside>
      <section className="min-w-0">
        <div className="mb-5 flex items-center justify-between border-b border-black/10 pb-5 dark:border-white/10">
          <p className="text-sm text-zinc-500">{products.length} products</p>
          <label className="text-sm">
            <span className="sr-only">{ui.sort}</span>
            <select
              value={filters.sort}
              onChange={(event) =>
                setFilters((current) => ({
                  ...current,
                  sort: event.target.value as OfflineSort,
                }))
              }
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
              <OfflineLink
                path={`/${locale}/${category}/${product.slug}`}
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
              </OfflineLink>
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
      <OfflineLink
        path={`/${locale}/${product.categorySlug}`}
        className="inline-flex items-center gap-2 text-sm text-zinc-500"
      >
        <ArrowLeft className="size-4" /> {ui.back}
      </OfflineLink>
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
  const [path, setPath] = useState(() => searchParams.get("path") ?? "/en");
  const route = useMemo(() => parseOfflineRoute(path), [path]);
  const [snapshot, setSnapshot] = useState<OfflineCatalogSnapshot | null>();
  const [online, setOnline] = useState(false);

  const navigate = useCallback((nextPath: string) => {
    setPath(nextPath);
    window.history.pushState(null, "", offlineHref(nextPath));
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  useEffect(() => {
    readOfflineSnapshot()
      .then(setSnapshot)
      .catch(() => setSnapshot(null));
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      setPath(params.get("path") ?? "/en");
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    const updateConnection = () => setOnline(navigator.onLine);
    updateConnection();
    window.addEventListener("online", updateConnection);
    window.addEventListener("offline", updateConnection);
    return () => {
      window.removeEventListener("online", updateConnection);
      window.removeEventListener("offline", updateConnection);
    };
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
  let breadcrumbProduct: OfflineCatalogProduct | undefined;
  if (route.kind === "home") {
    content = <OfflineHome locale={route.locale} snapshot={snapshot} />;
  } else if (route.kind === "category") {
    content = (
      <OfflineCategory
        key={route.category}
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
    breadcrumbProduct = product;
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
    <OfflineNavigationContext.Provider value={navigate}>
      <div className="bg-background text-foreground mx-auto flex min-h-screen max-w-[1920px] flex-col">
        <ReaderHeader locale={route.locale} path={path} online={online} />
        <OfflineBreadcrumbs route={route} product={breadcrumbProduct} />
        <div className="flex-1">{content}</div>
        <SiteFooter dictionary={getDictionary(route.locale)} />
      </div>
    </OfflineNavigationContext.Provider>
  );
}
