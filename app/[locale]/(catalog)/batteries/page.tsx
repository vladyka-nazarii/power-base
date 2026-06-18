import { notFound } from "next/navigation";
import CatalogPage from "@/app/[locale]/(catalog)/_components/catalog-page";
import { isLocale, type Locale } from "@/lib/i18n";
import { parseCatalogFilters, parseCompareSlugs } from "@/lib/catalog";

type BatteriesPageProps = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function BatteriesPage({
  params,
  searchParams,
}: BatteriesPageProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale: Locale = localeParam;
  const resolvedSearchParams = await searchParams;
  const filters = parseCatalogFilters(resolvedSearchParams);
  const compareSlugs = parseCompareSlugs(resolvedSearchParams);

  return (
    <CatalogPage
      category="batteries"
      compareSlugs={compareSlugs}
      filters={filters}
      locale={locale}
    />
  );
}
