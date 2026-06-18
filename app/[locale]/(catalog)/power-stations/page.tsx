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

type PowerStationsPageProps = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export async function generateMetadata({
  params,
}: PowerStationsPageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    return {};
  }

  const locale: Locale = localeParam;
  const copy = catalogPageCopy[locale]["power-stations"];

  return {
    title: copy.title,
    description: copy.description,
    alternates: localizedAlternates(locale, "/power-stations"),
    openGraph: localizedOpenGraph(
      locale,
      "/power-stations",
      copy.title,
      copy.description,
    ),
  };
}

export default async function PowerStationsPage({
  params,
  searchParams,
}: PowerStationsPageProps) {
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
      category="power-stations"
      compareSlugs={compareSlugs}
      filters={filters}
      locale={locale}
    />
  );
}
