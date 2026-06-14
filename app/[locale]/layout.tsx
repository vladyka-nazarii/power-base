import { notFound } from "next/navigation";
import SiteFooter from "@/app/_components/site-footer";
import SiteBreadcrumbs from "@/app/_components/site-breadcrumbs";
import SiteHeader from "@/app/_components/site-header";
import { getDictionary, isLocale, locales, type Locale } from "@/lib/i18n";

type LocaleLayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale: Locale = localeParam;
  const dictionary = getDictionary(locale);

  return (
    <div className="mx-auto flex min-h-screen max-w-[1440px] flex-col">
      <SiteHeader locale={locale} dictionary={dictionary} />
      <SiteBreadcrumbs locale={locale} labels={dictionary.navigation} />
      <main className="flex-1">{children}</main>
      <SiteFooter dictionary={dictionary} />
    </div>
  );
}
