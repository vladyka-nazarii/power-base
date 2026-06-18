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

type PowerBanksPageProps = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export async function generateMetadata({
  params,
}: PowerBanksPageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    return {};
  }

  const locale: Locale = localeParam;
  const copy = catalogPageCopy[locale]["power-banks"];

  return {
    title: copy.title,
    description: copy.description,
    alternates: localizedAlternates(locale, "/power-banks"),
    openGraph: localizedOpenGraph(
      locale,
      "/power-banks",
      copy.title,
      copy.description,
    ),
  };
}

export default async function PowerBanksPage({
  params,
  searchParams,
}: PowerBanksPageProps) {
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
      category="power-banks"
      compareSlugs={compareSlugs}
      filters={filters}
      locale={locale}
    />
  );
}
