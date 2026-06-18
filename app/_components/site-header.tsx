import Link from "next/link";
import AuthMenu from "@/app/_components/auth-menu";
import LanguageSwitcher from "@/app/_components/language-switcher";
import MobileHeaderMenu from "@/app/_components/mobile-header-menu";
import PowerBaseLogo from "@/app/_components/powerbase-logo";
import SiteNavigation from "@/app/_components/site-navigation";
import ThemeSwitcher from "@/app/_components/theme-switcher";
import { getCurrentSession } from "@/lib/favorites";
import { type getDictionary, localizeHref, type Locale } from "@/lib/i18n";

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
        className="flex min-w-0 items-center text-black dark:text-white"
        aria-label={dictionary.common.logo}
      >
        <PowerBaseLogo />
      </Link>
      <div className="flex min-w-0 items-center gap-3">
        <SiteNavigation
          labels={dictionary.navigation}
          locale={locale}
          showFavorites={showFavorites}
        />
        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher
            locale={locale}
            labels={dictionary.common.languages}
          />
          <ThemeSwitcher />
          <AuthMenu locale={locale} />
        </div>
        <MobileHeaderMenu
          labels={dictionary.navigation}
          languageLabels={dictionary.common.languages}
          locale={locale}
          showFavorites={showFavorites}
        />
      </div>
    </header>
  );
}
