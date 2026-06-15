"use client";

import { useState, useTransition } from "react";
import { GitBranch, Mail } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { localizeHref, type Locale } from "@/lib/i18n";

type AuthFormProps = {
  locale: Locale;
};

type AuthMode = "sign-in" | "sign-up";

export default function AuthForm({ locale }: AuthFormProps) {
  const router = useRouter();
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
          setError(signUpError.message ?? "Unable to create account.");
          return;
        }

        setMessage("Check your email to verify your PowerBase account.");
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
            ? "Please verify your email address before signing in."
            : (signInError.message ?? "Unable to sign in."),
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
        setError(socialError.message ?? "Unable to start sign in.");
      }
    });
  }

  return (
    <div className="mx-auto grid w-full max-w-md gap-5 rounded-lg border border-black/10 bg-white p-5 dark:border-white/10 dark:bg-black">
      <div>
        <h1 className="text-2xl font-semibold text-black dark:text-white">
          {mode === "sign-in" ? "Sign in" : "Create account"}
        </h1>
        <p className="mt-2 text-sm leading-6 text-zinc-500">
          Save favorites, keep them after login, and sync them across devices.
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
          <Mail aria-hidden="true" />
          Continue with Google
        </Button>
        <Button
          type="button"
          variant="outline"
          size="lg"
          disabled={isPending}
          onClick={() => social("github")}
        >
          <GitBranch aria-hidden="true" />
          Continue with GitHub
        </Button>
      </div>

      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 text-xs text-zinc-500">
        <span className="h-px bg-black/10 dark:bg-white/10" />
        Email
        <span className="h-px bg-black/10 dark:bg-white/10" />
      </div>

      <form action={submit} className="grid gap-4">
        {mode === "sign-up" ? (
          <label className="grid gap-2 text-sm font-medium text-black dark:text-white">
            Name
            <input
              name="name"
              autoComplete="name"
              required
              className="h-10 rounded-md border border-black/10 bg-transparent px-3 text-sm font-normal outline-none dark:border-white/10"
            />
          </label>
        ) : null}

        <label className="grid gap-2 text-sm font-medium text-black dark:text-white">
          Email
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            className="h-10 rounded-md border border-black/10 bg-transparent px-3 text-sm font-normal outline-none dark:border-white/10"
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-black dark:text-white">
          Password
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
          {mode === "sign-in" ? "Sign in" : "Create account"}
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
          ? "Need an account? Sign up"
          : "Already have an account? Sign in"}
      </Button>
    </div>
  );
}
