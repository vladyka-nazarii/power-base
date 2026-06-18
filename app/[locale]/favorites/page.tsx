import { Database, Heart } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  type CatalogProduct,
  ProductCard,
} from "@/app/[locale]/(catalog)/_components/catalog-page";
import { catalogUiCopy } from "@/lib/catalog";
import {
  getCurrentSession,
  getFavoriteCatalogProducts,
  getFavoriteEquipmentIds,
} from "@/lib/favorites";
import { isLocale, type Locale, localizeHref } from "@/lib/i18n";

type FavoritesPageProps = {
  params: Promise<{ locale: string }>;
};

const favoritesCopy: Record<
  Locale,
  {
    title: string;
    description: string;
    count: (count: number) => string;
    emptyTitle: string;
    emptyDescription: string;
    browseCatalog: string;
    databaseUnavailable: string;
    offlineDescription: string;
  }
> = {
  en: {
    title: "Favorite products",
    description: "Products you saved for comparison and system planning.",
    count: (count) => `${count} saved products`,
    emptyTitle: "No favorites yet",
    emptyDescription:
      "Save products from the catalog and they will appear here.",
    browseCatalog: "Browse catalog",
    databaseUnavailable: "Favorites are unavailable",
    offlineDescription:
      "Start local Postgres, run the auth migration, then refresh this page.",
  },
  uk: {
    title: "Обрані товари",
    description: "Товари, які ви зберегли для порівняння та планування систем.",
    count: (count) => `${count} збережених товарів`,
    emptyTitle: "Поки що немає обраних",
    emptyDescription: "Збережіть товари з каталогу, і вони з'являться тут.",
    browseCatalog: "Перейти до каталогу",
    databaseUnavailable: "Обране недоступне",
    offlineDescription:
      "Запустіть локальний Postgres, виконайте auth-міграцію, а потім оновіть сторінку.",
  },
};

export async function generateMetadata({
  params,
}: FavoritesPageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    return {};
  }

  const locale: Locale = localeParam;
  const copy = favoritesCopy[locale];

  return {
    title: copy.title,
    description: copy.description,
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function FavoritesPage({ params }: FavoritesPageProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale: Locale = localeParam;
  const copy = favoritesCopy[locale];
  const ui = catalogUiCopy[locale];
  const session = await getCurrentSession();
  const [data, favoriteEquipmentIds] = await Promise.all([
    getFavoriteCatalogProducts({ locale, userId: session?.user.id }),
    getFavoriteEquipmentIds(session?.user.id),
  ]);

  return (
    <div className="bg-background text-foreground">
      <section className="mx-auto max-w-[1840px] px-5 py-8">
        <div className="mb-6 flex flex-col gap-3 border-b border-black/10 pb-5 sm:flex-row sm:items-end sm:justify-between dark:border-white/10">
          <div>
            <div className="flex items-center gap-2 text-sm font-medium text-zinc-500">
              <Heart className="size-4" aria-hidden="true" />
              {copy.count(data.products.length)}
            </div>
            <h1 className="mt-2 text-3xl font-semibold text-black dark:text-white">
              {copy.title}
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-500">
              {copy.description}
            </p>
          </div>
          <Link
            href={localizeHref(locale, "/power-banks")}
            className="inline-flex h-9 items-center justify-center rounded-lg border border-black/10 px-3 text-sm font-medium transition hover:bg-zinc-50 dark:border-white/10 dark:hover:bg-zinc-900"
          >
            {copy.browseCatalog}
          </Link>
        </div>

        {data.unavailable ? (
          <div className="rounded-lg border border-dashed border-black/15 px-6 py-16 text-center dark:border-white/15">
            <Database
              className="mx-auto size-8 text-zinc-500"
              aria-hidden="true"
            />
            <h2 className="mt-4 text-xl font-semibold text-black dark:text-white">
              {copy.databaseUnavailable}
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-zinc-500">
              {copy.offlineDescription}
            </p>
          </div>
        ) : data.products.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4">
            {data.products.map((product: CatalogProduct) => (
              <ProductCard
                key={product.id}
                locale={locale}
                product={product}
                ui={ui}
                isFavorite={favoriteEquipmentIds.has(product.id)}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-dashed border-black/15 px-6 py-16 text-center dark:border-white/15">
            <Heart
              className="mx-auto size-8 text-zinc-500"
              aria-hidden="true"
            />
            <h2 className="mt-4 text-xl font-semibold text-black dark:text-white">
              {copy.emptyTitle}
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-zinc-500">
              {copy.emptyDescription}
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
