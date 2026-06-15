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
    <nav
      aria-label="Language"
      className="flex items-center rounded-full border border-black/10 bg-black/[0.03] p-0.5 text-xs font-medium dark:border-white/15 dark:bg-white/10"
    >
      {locales.map((item) => (
        <Link
          key={item}
          href={getLocalizedPath(pathname, item)}
          prefetch={false}
          aria-current={item === locale ? "page" : undefined}
          aria-label={`Switch language to ${labels[item]}`}
          className="rounded-full px-2.5 py-1 text-black/60 transition-colors hover:text-black aria-[current=page]:bg-black aria-[current=page]:text-white aria-[current=page]:shadow-sm aria-[current=page]:ring-1 aria-[current=page]:ring-black/10 dark:text-white/65 dark:hover:text-white dark:aria-[current=page]:bg-white dark:aria-[current=page]:text-black dark:aria-[current=page]:ring-white/20"
          onClick={() => saveLocalePreference(item)}
        >
          {labels[item]}
        </Link>
      ))}
    </nav>
  );
}
