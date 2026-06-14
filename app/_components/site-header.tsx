import Link from "next/link";
import { mainNavigation } from "@/app/_config/navigation";
import LanguageSwitcher from "@/app/_components/language-switcher";
import ThemeSwitcher from "@/app/_components/theme-switcher";
import { getDictionary, localizeHref, type Locale } from "@/lib/i18n";

type Dictionary = ReturnType<typeof getDictionary>;

type SiteHeaderProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export default function SiteHeader({ locale, dictionary }: SiteHeaderProps) {
  return (
    <header className="flex h-10 items-center justify-between border-b border-black/10 px-5 dark:border-white/10">
      <Link href={localizeHref(locale, "/")} prefetch={false}>
        <div>{dictionary.common.logo}</div>
      </Link>
      <div className="flex items-center gap-4">
        <nav>
          <ul className="flex items-center gap-3">
            {mainNavigation.map((item) => (
              <li key={item.href}>
                <Link href={localizeHref(locale, item.href)} prefetch={false}>
                  {dictionary.navigation[item.labelKey]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <LanguageSwitcher
          locale={locale}
          labels={dictionary.common.languages}
        />
        <ThemeSwitcher />
      </div>
    </header>
  );
}
