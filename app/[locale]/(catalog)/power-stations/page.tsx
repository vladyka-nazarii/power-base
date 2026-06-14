import { getDictionary, isLocale, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";

type PowerStationsPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function PowerStationsPage({
  params,
}: PowerStationsPageProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale: Locale = localeParam;
  const dictionary = getDictionary(locale);

  return (
    <div className="flex items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {dictionary.catalog.powerStations}
    </div>
  );
}
