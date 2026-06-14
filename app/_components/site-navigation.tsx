"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
};

function isActivePath(pathname: string, href: string) {
  return pathname === href;
}

export default function SiteNavigation({
  labels,
  locale,
}: SiteNavigationProps) {
  const pathname = usePathname();

  return (
    <nav className="hidden min-w-0 md:block">
      <ul className="flex items-center gap-1">
        {mainNavigation.map((item) => {
          const href = localizeHref(locale, item.href);
          const isActive = isActivePath(pathname, href);

          return (
            <li key={item.href}>
              <Link
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "rounded-md px-2.5 py-1.5 text-sm text-zinc-600 transition hover:bg-zinc-100 hover:text-black dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white",
                  isActive &&
                    "bg-zinc-900 font-medium text-white hover:bg-zinc-900 hover:text-white dark:bg-white dark:text-black dark:hover:bg-white dark:hover:text-black",
                )}
                href={href}
                prefetch={false}
              >
                {labels[item.labelKey]}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
