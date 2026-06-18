import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";

import AuthForm from "@/app/[locale]/sign-in/auth-form";
import { getCurrentSession } from "@/lib/favorites";
import { isLocale, type Locale } from "@/lib/i18n";

type SignInPageProps = {
  params: Promise<{ locale: string }>;
};

const signInMetadata: Record<
  Locale,
  Pick<Metadata, "title" | "description">
> = {
  en: {
    title: "Sign in",
    description: "Sign in to PowerBase.",
  },
  uk: {
    title: "Увійти",
    description: "Увійдіть у PowerBase.",
  },
};

export async function generateMetadata({
  params,
}: SignInPageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    return {};
  }

  return {
    ...signInMetadata[localeParam],
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function SignInPage({ params }: SignInPageProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale: Locale = localeParam;
  const session = await getCurrentSession();
  const isAnonymous =
    session?.user && "isAnonymous" in session.user
      ? Boolean(session.user.isAnonymous)
      : false;

  if (session && !isAnonymous) {
    redirect(`/${locale}`);
  }

  return (
    <div className="px-5 py-10">
      <AuthForm locale={locale} />
    </div>
  );
}
