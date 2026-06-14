"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { mainNavigation } from "@/app/_config/navigation";
import { localizeHref, type getDictionary, type Locale } from "@/lib/i18n";

type Dictionary = ReturnType<typeof getDictionary>;
type NavigationLabels = Dictionary["navigation"];

type SiteBreadcrumbsProps = {
  labels: NavigationLabels;
  locale: Locale;
};

const navigationLabelsByHref: ReadonlyMap<
  string,
  (typeof mainNavigation)[number]["labelKey"]
> = new Map(
  mainNavigation.map((item) => [item.href, item.labelKey] as const),
);

function formatSegmentLabel(segment: string) {
  return decodeURIComponent(segment)
    .replace(/-/g, " ")
    .replace(/\b\w/g, (character) => character.toUpperCase());
}

export default function SiteBreadcrumbs({
  labels,
  locale,
}: SiteBreadcrumbsProps) {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  const pathSegments = segments[0] === locale ? segments.slice(1) : segments;

  if (pathSegments.length === 0) {
    return null;
  }

  const breadcrumbs = [
    {
      href: localizeHref(locale, "/"),
      label: labels.home,
    },
    ...pathSegments.map((segment, index) => {
      const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
      const labelKey = navigationLabelsByHref.get(href);

      return {
        href: localizeHref(locale, href),
        label: labelKey ? labels[labelKey] : formatSegmentLabel(segment),
      };
    }),
  ];

  return (
    <nav
      aria-label="Breadcrumb"
      className="border-b border-black/10 px-5 py-3 text-sm dark:border-white/10"
    >
      <ol className="mx-auto flex max-w-[1400px] items-center gap-1 overflow-x-auto whitespace-nowrap text-zinc-500 dark:text-zinc-400">
        {breadcrumbs.map((item, index) => {
          const isCurrent = index === breadcrumbs.length - 1;

          return (
            <li key={item.href} className="flex items-center gap-1">
              {index > 0 ? (
                <ChevronRight
                  aria-hidden="true"
                  className="size-3.5 shrink-0 text-zinc-400 dark:text-zinc-600"
                />
              ) : null}
              {isCurrent ? (
                <span
                  aria-current="page"
                  className="font-medium text-zinc-900 dark:text-zinc-100"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  prefetch={false}
                  className="rounded-sm transition hover:text-zinc-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring dark:hover:text-zinc-100"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
