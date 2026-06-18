import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CatalogPage from "@/app/[locale]/(catalog)/_components/catalog-page";
import {
  catalogPageCopy,
  parseCatalogFilters,
  parseCompareSlugs,
} from "@/lib/catalog";
import { isLocale, type Locale } from "@/lib/i18n";
import { localizedAlternates, localizedOpenGraph } from "@/lib/seo";

type BatteriesPageProps = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export async function generateMetadata({
  params,
}: BatteriesPageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    return {};
  }

  const locale: Locale = localeParam;
  const copy = catalogPageCopy[locale].batteries;

  return {
    title: copy.title,
    description: copy.description,
    alternates: localizedAlternates(locale, "/batteries"),
    openGraph: localizedOpenGraph(
      locale,
      "/batteries",
      copy.title,
      copy.description,
    ),
  };
}

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
