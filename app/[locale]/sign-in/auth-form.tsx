"use client";

import type { SVGProps } from "react";
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { localizeHref, type Locale } from "@/lib/i18n";

type AuthFormProps = {
  locale: Locale;
};

type AuthMode = "sign-in" | "sign-up";

const authFormCopy = {
  en: {
    title: {
      signIn: "Sign in",
      signUp: "Create account",
    },
    description:
      "Save favorites, keep them after login, and sync them across devices.",
    social: {
      google: "Continue with Google",
      github: "Continue with GitHub",
    },
    emailDivider: "Email",
    fields: {
      name: "Name",
      email: "Email",
      password: "Password",
    },
    toggle: {
      signIn: "Already have an account? Sign in",
      signUp: "Need an account? Sign up",
    },
    messages: {
      verifyEmail: "Check your email to verify your PowerBase account.",
    },
    errors: {
      createAccount: "Unable to create account.",
      verifyBeforeSignIn: "Please verify your email address before signing in.",
      signIn: "Unable to sign in.",
      social: "Unable to start sign in.",
    },
  },
  uk: {
    title: {
      signIn: "Увійти",
      signUp: "Створити акаунт",
    },
    description:
      "Зберігайте обране, не втрачайте його після входу та синхронізуйте між пристроями.",
    social: {
      google: "Продовжити з Google",
      github: "Продовжити з GitHub",
    },
    emailDivider: "Email",
    fields: {
      name: "Ім'я",
      email: "Email",
      password: "Пароль",
    },
    toggle: {
      signIn: "Вже маєте акаунт? Увійти",
      signUp: "Потрібен акаунт? Зареєструватися",
    },
    messages: {
      verifyEmail: "Перевірте email, щоб підтвердити акаунт PowerBase.",
    },
    errors: {
      createAccount: "Не вдалося створити акаунт.",
      verifyBeforeSignIn: "Підтвердьте email-адресу перед входом.",
      signIn: "Не вдалося увійти.",
      social: "Не вдалося почати вхід.",
    },
  },
} as const;

function GoogleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="#4285F4"
        d="M23.8 12.3c0-.8-.1-1.5-.2-2.2H12.2v4.3h6.5c-.3 1.4-1.1 2.7-2.3 3.5v2.9h3.7c2.2-2 3.7-5 3.7-8.5z"
      />
      <path
        fill="#34A853"
        d="M12.2 24c3.2 0 5.9-1.1 7.9-3.1l-3.7-2.9c-1 .7-2.4 1.1-4.1 1.1-3.1 0-5.7-2.1-6.7-4.9H1.7v3c2 4 6 6.8 10.5 6.8z"
      />
      <path
        fill="#FBBC05"
        d="M5.5 14.2c-.2-.7-.4-1.4-.4-2.2s.1-1.5.4-2.2v-3H1.7C.9 8.3.5 10.1.5 12s.4 3.7 1.2 5.2l3.8-3z"
      />
      <path
        fill="#EA4335"
        d="M12.2 4.8c1.7 0 3.3.6 4.5 1.8L20 3.3C17.9 1.2 15.3 0 12.2 0 7.7 0 3.7 2.8 1.7 6.8l3.8 3c1-2.9 3.6-5 6.7-5z"
      />
    </svg>
  );
}

function GitHubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .5C5.6.5.5 5.8.5 12.3c0 5.2 3.3 9.6 7.9 11.2.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.6-3.9-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.3 1.8 1.3 1.1 1.8 2.8 1.3 3.4 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.6 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.9 1.2 1.9 1.2 3.2 0 4.6-2.7 5.6-5.3 5.9.4.4.8 1.1.8 2.2V23c0 .3.2.7.8.6 4.6-1.6 7.9-6 7.9-11.2C23.5 5.8 18.4.5 12 .5z" />
    </svg>
  );
}

export default function AuthForm({ locale }: AuthFormProps) {
  const router = useRouter();
  const copy = authFormCopy[locale];
  const [mode, setMode] = useState<AuthMode>("sign-in");
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const callbackURL = localizeHref(locale, "/");

  function submit(formData: FormData) {
    const email = String(formData.get("email") ?? "");
    const password = String(formData.get("password") ?? "");
    const name = String(formData.get("name") ?? "");

    setError(null);
    setMessage(null);

    startTransition(async () => {
      if (mode === "sign-up") {
        const { error: signUpError } = await authClient.signUp.email({
          name,
          email,
          password,
          callbackURL,
        });

        if (signUpError) {
          setError(signUpError.message ?? copy.errors.createAccount);
          return;
        }

        setMessage(copy.messages.verifyEmail);
        return;
      }

      const { error: signInError } = await authClient.signIn.email({
        email,
        password,
        callbackURL,
      });

      if (signInError) {
        setError(
          signInError.status === 403
            ? copy.errors.verifyBeforeSignIn
            : (signInError.message ?? copy.errors.signIn),
        );
        return;
      }

      router.push(callbackURL);
      router.refresh();
    });
  }

  function social(provider: "github" | "google") {
    setError(null);
    setMessage(null);

    startTransition(async () => {
      const { error: socialError } = await authClient.signIn.social({
        provider,
        callbackURL,
      });

      if (socialError) {
        setError(socialError.message ?? copy.errors.social);
      }
    });
  }

  return (
    <div className="mx-auto grid w-full max-w-md gap-5 rounded-lg border border-black/10 bg-white p-5 dark:border-white/10 dark:bg-black">
      <div>
        <h1 className="text-2xl font-semibold text-black dark:text-white">
          {mode === "sign-in" ? copy.title.signIn : copy.title.signUp}
        </h1>
        <p className="mt-2 text-sm leading-6 text-zinc-500">
          {copy.description}
        </p>
      </div>

      <div className="grid gap-2">
        <Button
          type="button"
          variant="outline"
          size="lg"
          disabled={isPending}
          onClick={() => social("google")}
        >
          <GoogleIcon aria-hidden="true" />
          {copy.social.google}
        </Button>
        <Button
          type="button"
          variant="outline"
          size="lg"
          disabled={isPending}
          onClick={() => social("github")}
        >
          <GitHubIcon aria-hidden="true" />
          {copy.social.github}
        </Button>
      </div>

      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 text-xs text-zinc-500">
        <span className="h-px bg-black/10 dark:bg-white/10" />
        {copy.emailDivider}
        <span className="h-px bg-black/10 dark:bg-white/10" />
      </div>

      <form action={submit} className="grid gap-4">
        {mode === "sign-up" ? (
          <label className="grid gap-2 text-sm font-medium text-black dark:text-white">
            {copy.fields.name}
            <input
              name="name"
              autoComplete="name"
              required
              className="h-10 rounded-md border border-black/10 bg-transparent px-3 text-sm font-normal outline-none dark:border-white/10"
            />
          </label>
        ) : null}

        <label className="grid gap-2 text-sm font-medium text-black dark:text-white">
          {copy.fields.email}
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            className="h-10 rounded-md border border-black/10 bg-transparent px-3 text-sm font-normal outline-none dark:border-white/10"
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-black dark:text-white">
          {copy.fields.password}
          <input
            name="password"
            type="password"
            minLength={8}
            maxLength={128}
            autoComplete={
              mode === "sign-in" ? "current-password" : "new-password"
            }
            required
            className="h-10 rounded-md border border-black/10 bg-transparent px-3 text-sm font-normal outline-none dark:border-white/10"
          />
        </label>

        {error ? (
          <p className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700 dark:border-red-950 dark:bg-red-950/40 dark:text-red-200">
            {error}
          </p>
        ) : null}

        {message ? (
          <p className="rounded-md border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-700 dark:border-emerald-950 dark:bg-emerald-950/40 dark:text-emerald-200">
            {message}
          </p>
        ) : null}

        <Button type="submit" size="lg" disabled={isPending}>
          {mode === "sign-in" ? copy.title.signIn : copy.title.signUp}
        </Button>
      </form>

      <Button
        type="button"
        variant="ghost"
        onClick={() => {
          setError(null);
          setMessage(null);
          setMode(mode === "sign-in" ? "sign-up" : "sign-in");
        }}
      >
        {mode === "sign-in"
          ? copy.toggle.signUp
          : copy.toggle.signIn}
      </Button>
    </div>
  );
}
