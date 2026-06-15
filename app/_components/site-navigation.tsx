"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart } from "lucide-react";

import { mainNavigation } from "@/app/_config/navigation";
import { cn } from "@/lib/utils";
import { localizeHref, type Locale } from "@/lib/i18n";

type NavigationLabels = Record<
  (typeof mainNavigation)[number]["labelKey"],
  string
>;

type SiteNavigationProps = {
  labels: NavigationLabels;
  locale: Locale;
  showFavorites: boolean;
};

function isActivePath(pathname: string, href: string) {
  return pathname === href;
}

export default function SiteNavigation({
  labels,
  locale,
  showFavorites,
}: SiteNavigationProps) {
  const pathname = usePathname();
  const navigationItems = showFavorites
    ? mainNavigation
    : mainNavigation.filter((item) => item.href !== "/favorites");

  return (
    <nav className="hidden min-w-0 lg:block">
      <ul className="flex items-center gap-1">
        {navigationItems.map((item) => {
          const href = localizeHref(locale, item.href);
          const isActive = isActivePath(pathname, href);

          return (
            <li key={item.href}>
              <Link
                aria-current={isActive ? "page" : undefined}
                aria-label={labels[item.labelKey]}
                title={labels[item.labelKey]}
                className={cn(
                  "rounded-md px-2.5 py-1.5 text-sm text-zinc-600 transition hover:bg-zinc-100 hover:text-black dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white",
                  item.href === "/favorites" &&
                    "inline-flex size-8 items-center justify-center px-0 py-0",
                  isActive &&
                    "bg-zinc-900 font-medium text-white hover:bg-zinc-900 hover:text-white dark:bg-white dark:text-black dark:hover:bg-white dark:hover:text-black",
                )}
                href={href}
                prefetch={false}
              >
                {item.href === "/favorites" ? (
                  <Heart className="size-4" aria-hidden="true" />
                ) : (
                  labels[item.labelKey]
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
