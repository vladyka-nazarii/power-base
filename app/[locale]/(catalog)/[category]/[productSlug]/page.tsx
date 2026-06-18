import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ProductDetailPage from "@/app/[locale]/(catalog)/_components/product-detail-page";
import {
  type CatalogCategorySlug,
  catalogCategorySlugs,
  getProductDetailData,
} from "@/lib/catalog";
import { isLocale, type Locale } from "@/lib/i18n";
import { localizedAlternates, localizedOpenGraph } from "@/lib/seo";

type ProductPageProps = {
  params: Promise<{
    category: string;
    locale: string;
    productSlug: string;
  }>;
};

function isCatalogCategory(value: string): value is CatalogCategorySlug {
  return catalogCategorySlugs.includes(value as CatalogCategorySlug);
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { category, locale: localeParam, productSlug } = await params;

  if (!isLocale(localeParam) || !isCatalogCategory(category)) {
    return {};
  }

  const locale: Locale = localeParam;
  const { product } = await getProductDetailData({
    categorySlug: category,
    locale,
    productSlug,
  });

  if (!product) {
    return {};
  }

  return {
    title: `${product.manufacturer} ${product.model} | PowerBase`,
    description: product.summary,
    alternates: localizedAlternates(locale, `/${category}/${productSlug}`),
    openGraph: localizedOpenGraph(
      locale,
      `/${category}/${productSlug}`,
      `${product.manufacturer} ${product.model}`,
      product.summary,
    ),
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { category, locale: localeParam, productSlug } = await params;

  if (!isLocale(localeParam) || !isCatalogCategory(category)) {
    notFound();
  }

  const locale: Locale = localeParam;

  return (
    <ProductDetailPage
      category={category}
      locale={locale}
      productSlug={productSlug}
    />
  );
}
