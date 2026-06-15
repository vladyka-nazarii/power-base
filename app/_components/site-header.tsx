import Link from "next/link";
import AuthMenu from "@/app/_components/auth-menu";
import LanguageSwitcher from "@/app/_components/language-switcher";
import SiteNavigation from "@/app/_components/site-navigation";
import ThemeSwitcher from "@/app/_components/theme-switcher";
import { getCurrentSession } from "@/lib/favorites";
import { getDictionary, localizeHref, type Locale } from "@/lib/i18n";

type Dictionary = ReturnType<typeof getDictionary>;

type SiteHeaderProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export default async function SiteHeader({
  locale,
  dictionary,
}: SiteHeaderProps) {
  const session = await getCurrentSession();
  const showFavorites = Boolean(session?.user.id);

  return (
    <header className="sticky top-0 z-50 flex min-h-14 items-center justify-between gap-4 border-b border-black/10 bg-white/85 px-5 backdrop-blur dark:border-white/10 dark:bg-black/80">
      <Link
        href={localizeHref(locale, "/")}
        prefetch={false}
        className="flex items-center gap-2 text-sm font-semibold text-black dark:text-white"
      >
        <span className="flex size-6 items-center justify-center rounded-full border border-black/15 text-xs dark:border-white/20">
          PB
        </span>
        <span>{dictionary.common.logo}</span>
      </Link>
      <div className="flex min-w-0 items-center gap-3">
        <SiteNavigation
          labels={dictionary.navigation}
          locale={locale}
          showFavorites={showFavorites}
        />
        <LanguageSwitcher
          locale={locale}
          labels={dictionary.common.languages}
        />
        <ThemeSwitcher />
        <AuthMenu locale={locale} />
      </div>
    </header>
  );
}
