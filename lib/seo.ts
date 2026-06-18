import type { Metadata } from "next";
import { defaultLocale, type Locale, locales } from "@/lib/i18n";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export function absoluteUrl(pathname: string) {
  const origin = siteUrl.replace(/\/+$/, "");
  const normalizedPathname = pathname.startsWith("/")
    ? pathname
    : `/${pathname}`;

  return `${origin}${normalizedPathname}`;
}

export function localizedPath(locale: Locale, pathname = "/") {
  return pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;
}

export function localizedAlternates(locale: Locale, pathname = "/") {
  const languages = Object.fromEntries(
    locales.map((locale) => [
      locale,
      absoluteUrl(localizedPath(locale, pathname)),
    ]),
  );

  return {
    canonical: absoluteUrl(localizedPath(locale, pathname)),
    languages: {
      ...languages,
      "x-default": absoluteUrl(localizedPath(defaultLocale, pathname)),
    },
  } satisfies NonNullable<Metadata["alternates"]>;
}

export function localizedOpenGraph(
  locale: Locale,
  pathname: string,
  title: string,
  description: string,
): NonNullable<Metadata["openGraph"]> {
  return {
    title,
    description,
    locale: locale === "uk" ? "uk_UA" : "en_US",
    alternateLocale: locales
      .filter((item) => item !== locale)
      .map((item) => (item === "uk" ? "uk_UA" : "en_US")),
    siteName: "PowerBase",
    type: "website",
    url: absoluteUrl(localizedPath(locale, pathname)),
  };
}
