"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import AuthMenu from "@/app/_components/auth-menu";
import LanguageSwitcher from "@/app/_components/language-switcher";
import ThemeSwitcher from "@/app/_components/theme-switcher";
import { mainNavigation } from "@/app/_config/navigation";
import { Button } from "@/components/ui/button";
import { localizeHref, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type NavigationLabels = Record<
  (typeof mainNavigation)[number]["labelKey"],
  string
>;

type MobileHeaderMenuProps = {
  labels: NavigationLabels;
  languageLabels: Record<Locale, string>;
  locale: Locale;
  showFavorites: boolean;
};

function isActivePath(pathname: string, href: string) {
  return pathname === href;
}

export default function MobileHeaderMenu({
  labels,
  languageLabels,
  locale,
  showFavorites,
}: MobileHeaderMenuProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const navigationItems = showFavorites
    ? mainNavigation
    : mainNavigation.filter((item) => item.href !== "/favorites");

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    function handlePointerDown(event: PointerEvent) {
      if (!menuRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isOpen]);

  return (
    <div ref={menuRef} className="lg:hidden">
      <Button
        type="button"
        variant="outline"
        size="icon"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-header-menu"
        onClick={() => setIsOpen((current) => !current)}
      >
        {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </Button>
      {isOpen ? (
        <div
          id="mobile-header-menu"
          className="absolute top-full right-3 left-3 mt-2 rounded-lg border border-black/10 bg-white p-3 shadow-xl shadow-black/10 dark:border-white/10 dark:bg-zinc-950 dark:shadow-black/40"
          onClickCapture={(event) => {
            if ((event.target as Element).closest("a")) {
              setIsOpen(false);
            }
          }}
        >
          <nav aria-label="Primary">
            <ul className="grid gap-1">
              {navigationItems.map((item) => {
                const href = localizeHref(locale, item.href);
                const isActive = isActivePath(pathname, href);

                return (
                  <li key={item.href}>
                    <Link
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "flex min-h-10 items-center gap-2 rounded-md px-3 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 hover:text-black dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-white",
                        isActive &&
                          "bg-zinc-900 text-white hover:bg-zinc-900 hover:text-white dark:bg-white dark:text-black dark:hover:bg-white dark:hover:text-black",
                      )}
                      href={href}
                      prefetch={false}
                    >
                      {item.href === "/favorites" ? (
                        <Heart className="size-4" aria-hidden="true" />
                      ) : null}
                      {labels[item.labelKey]}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-black/10 pt-3 dark:border-white/10">
            <LanguageSwitcher locale={locale} labels={languageLabels} />
            <ThemeSwitcher />
            <AuthMenu locale={locale} showIdentity />
          </div>
        </div>
      ) : null}
    </div>
  );
}
