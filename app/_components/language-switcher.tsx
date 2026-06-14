"use client";

import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { localePreferenceCookie, locales, type Locale } from "@/lib/i18n";

type LanguageSwitcherProps = {
  locale: Locale;
  labels: Record<Locale, string>;
};

const cookieMaxAge = 60 * 60 * 24 * 365;

function saveLocalePreference(locale: Locale) {
  document.cookie = `${localePreferenceCookie}=${locale}; path=/; max-age=${cookieMaxAge}; samesite=lax`;
}

function getLocalizedPath(pathname: string, locale: Locale) {
  const segments = pathname.split("/");
  const firstSegment = segments[1];

  if (locales.includes(firstSegment as Locale)) {
    segments[1] = locale;
    return segments.join("/") || `/${locale}`;
  }

  return pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;
}

export default function LanguageSwitcher({
  locale,
  labels,
}: LanguageSwitcherProps) {
  const pathname = usePathname();

  useEffect(() => {
    saveLocalePreference(locale);
  }, [locale]);

  return (
    <div className="flex items-center gap-2">
      {locales.map((item) => (
        <Link
          key={item}
          href={getLocalizedPath(pathname, item)}
          aria-current={item === locale ? "page" : undefined}
          className="text-sm aria-[current=page]:font-semibold"
          onClick={() => saveLocalePreference(item)}
        >
          {labels[item]}
        </Link>
      ))}
    </div>
  );
}
