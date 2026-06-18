import { asc, eq } from "drizzle-orm";
import type { MetadataRoute } from "next";

import { catalogCategorySlugs } from "@/lib/catalog";
import { db } from "@/lib/db";
import { equipment, equipmentCategories } from "@/lib/db/schema";
import { type Locale, locales } from "@/lib/i18n";
import { absoluteUrl, localizedPath } from "@/lib/seo";

export const dynamic = "force-dynamic";
export const revalidate = 3600;

function sitemapEntry(
  locale: Locale,
  pathname: string,
  metadata: Omit<MetadataRoute.Sitemap[number], "url" | "alternates">,
): MetadataRoute.Sitemap[number] {
  return {
    url: absoluteUrl(localizedPath(locale, pathname)),
    alternates: {
      languages: Object.fromEntries(
        locales.map((item) => [
          item,
          absoluteUrl(localizedPath(item, pathname)),
        ]),
      ),
    },
    ...metadata,
  };
}

function staticRoutes(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths = [
    "/",
    ...catalogCategorySlugs.map((categorySlug) => `/${categorySlug}`),
  ];

  return locales.flatMap((locale) =>
    paths.map((path) => ({
      ...sitemapEntry(locale, path, {
        lastModified: now,
        changeFrequency: path === "/" ? "weekly" : "daily",
        priority: path === "/" ? 1 : 0.8,
      }),
    })),
  );
}

async function productRoutes(): Promise<MetadataRoute.Sitemap> {
  const products = await db
    .select({
      categorySlug: equipmentCategories.slug,
      productSlug: equipment.slug,
      updatedAt: equipment.updatedAt,
    })
    .from(equipment)
    .innerJoin(
      equipmentCategories,
      eq(equipment.categoryId, equipmentCategories.id),
    )
    .orderBy(asc(equipmentCategories.slug), asc(equipment.slug));

  return locales.flatMap((locale) =>
    products.map((product) =>
      sitemapEntry(locale, `/${product.categorySlug}/${product.productSlug}`, {
        lastModified: product.updatedAt,
        changeFrequency: "weekly",
        priority: 0.7,
      }),
    ),
  );
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = staticRoutes();

  try {
    return [...routes, ...(await productRoutes())];
  } catch (error) {
    console.error("Sitemap product route generation failed", error);

    return routes;
  }
}
