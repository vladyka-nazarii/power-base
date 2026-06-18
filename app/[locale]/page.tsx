import {
  ArrowRight,
  CheckCircle2,
  Database,
  FileText,
  Zap,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PowerBaseLogoMark } from "@/app/_components/powerbase-logo";
import { getDictionary, isLocale, type Locale, localizeHref } from "@/lib/i18n";
import { localizedAlternates, localizedOpenGraph } from "@/lib/seo";

type HomeProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: HomeProps): Promise<Metadata> {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    return {};
  }

  const locale: Locale = localeParam;
  const home = getDictionary(locale).home;

  return {
    title: {
      absolute: home.title,
    },
    description: home.description,
    alternates: localizedAlternates(locale, "/"),
    openGraph: localizedOpenGraph(locale, "/", home.title, home.description),
  };
}

export default async function Home({ params }: HomeProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale: Locale = localeParam;
  const dictionary = getDictionary(locale);
  const home = dictionary.home;

  return (
    <div className="bg-background text-foreground">
      <section className="relative isolate overflow-hidden border-b border-black/10 px-5 py-20 text-center sm:py-24 lg:py-28 dark:border-white/10">
        <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-black/20 to-transparent dark:via-white/30" />
        <div className="mx-auto flex max-w-5xl flex-col items-center">
          <div className="mb-8 inline-flex h-8 items-center gap-2 rounded-full border border-black/10 bg-white px-3 text-sm text-zinc-700 shadow-sm dark:border-white/15 dark:bg-zinc-950 dark:text-zinc-300">
            <Zap className="size-4" aria-hidden="true" />
            <span>{home.badge}</span>
          </div>

          <div className="flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-7">
            <PowerBaseLogoMark className="size-24 text-black sm:size-32 lg:size-40 dark:text-white" />
            <h1 className="max-w-4xl text-5xl leading-[1.05] font-semibold tracking-normal text-balance text-black sm:text-6xl lg:text-7xl dark:text-white">
              {home.title}
            </h1>
          </div>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-balance text-zinc-600 sm:text-2xl dark:text-zinc-400">
            {home.headline}
          </p>
          <p className="mt-5 max-w-3xl text-base leading-8 text-pretty text-zinc-600 sm:text-lg dark:text-zinc-400">
            {home.description}
          </p>

          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
            <Link
              href={localizeHref(locale, "/inverters")}
              className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-black px-4 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
            >
              {home.primaryAction}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link
              href="#brief"
              className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-black/10 bg-white px-4 text-sm font-medium text-black transition hover:bg-zinc-50 dark:border-white/15 dark:bg-black dark:text-white dark:hover:bg-zinc-950"
            >
              <FileText className="size-4" aria-hidden="true" />
              {home.secondaryAction}
            </Link>
          </div>

          <div className="mt-12 w-full max-w-2xl overflow-hidden rounded-lg border border-black/10 bg-zinc-950 text-left shadow-2xl shadow-black/10 dark:border-white/15">
            <div className="flex h-10 items-center gap-2 border-b border-white/10 px-4">
              <span className="size-3 rounded-full bg-zinc-500" />
              <span className="size-3 rounded-full bg-zinc-600" />
              <span className="size-3 rounded-full bg-zinc-700" />
            </div>
            <div className="flex items-center gap-3 px-4 py-5 font-mono text-sm text-zinc-100 sm:text-base">
              <span className="text-zinc-500">▲</span>
              <code className="overflow-x-auto whitespace-nowrap">
                {home.command}
              </code>
            </div>
          </div>
        </div>
      </section>

      <section className="grid border-b border-black/10 sm:grid-cols-3 dark:border-white/10">
        {home.stats.map((stat) => (
          <div
            key={stat.label}
            className="border-b border-black/10 px-5 py-8 text-center last:border-b-0 sm:border-r sm:border-b-0 sm:last:border-r-0 dark:border-white/10"
          >
            <div className="text-3xl font-semibold tracking-normal text-black dark:text-white">
              {stat.value}
            </div>
            <div className="mx-auto mt-2 max-w-56 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              {stat.label}
            </div>
          </div>
        ))}
      </section>

      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-[1840px]">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-normal text-black sm:text-4xl dark:text-white">
              {home.featuresTitle}
            </h2>
            <p className="mt-4 text-base leading-7 text-zinc-600 sm:text-lg dark:text-zinc-400">
              {home.featuresDescription}
            </p>
          </div>

          <div className="mt-12 grid overflow-hidden rounded-lg border border-black/10 bg-white sm:grid-cols-2 lg:grid-cols-3 dark:border-white/10 dark:bg-black">
            {home.features.map((feature) => (
              <article
                key={feature.title}
                className="min-h-56 border-b border-black/10 p-6 lg:border-r dark:border-white/10 lg:[&:nth-child(3n)]:border-r-0 sm:[&:nth-child(odd)]:border-r lg:[&:nth-last-child(-n+3)]:border-b-0"
              >
                <Database className="mb-8 size-5 text-black dark:text-white" />
                <h3 className="text-base font-semibold text-black dark:text-white">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="brief"
        className="border-y border-black/10 bg-zinc-50 px-5 py-16 dark:border-white/10 dark:bg-zinc-950"
      >
        <div className="mx-auto grid max-w-[1840px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-semibold tracking-normal text-black sm:text-4xl dark:text-white">
              {home.categoriesTitle}
            </h2>
            <div className="mt-8 flex flex-wrap gap-2">
              {home.categories.map((category) => (
                <span
                  key={category}
                  className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-sm text-zinc-700 dark:border-white/15 dark:bg-black dark:text-zinc-300"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-black/10 bg-white dark:border-white/10 dark:bg-black">
            <div className="border-b border-black/10 px-5 py-4 dark:border-white/10">
              <h3 className="font-medium text-black dark:text-white">
                {home.pipelineTitle}
              </h3>
            </div>
            <ol className="divide-y divide-black/10 dark:divide-white/10">
              {home.pipeline.map((item, index) => (
                <li key={item} className="flex gap-4 px-5 py-5">
                  <div className="flex size-7 shrink-0 items-center justify-center rounded-full border border-black/10 bg-zinc-50 text-sm font-medium text-black dark:border-white/15 dark:bg-zinc-950 dark:text-white">
                    {index + 1}
                  </div>
                  <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    {item}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="px-5 py-12">
        <div className="mx-auto flex max-w-[1840px] flex-col gap-4 rounded-lg border border-black/10 bg-white p-5 sm:flex-row sm:items-center sm:justify-between dark:border-white/10 dark:bg-black">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="size-5 text-black dark:text-white" />
            <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              {home.description}
            </p>
          </div>
          <Link
            href={localizeHref(locale, "/batteries")}
            className="inline-flex h-9 shrink-0 items-center justify-center gap-2 rounded-md border border-black/10 px-3 text-sm font-medium text-black transition hover:bg-zinc-50 dark:border-white/15 dark:text-white dark:hover:bg-zinc-950"
          >
            {home.primaryAction}
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
