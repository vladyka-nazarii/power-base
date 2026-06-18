"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  CheckCircle2,
  KeyRound,
  LogIn,
  LogOut,
  User,
  XCircle,
} from "lucide-react";
import { useEffect, useState, useTransition } from "react";

import { Button, buttonVariants } from "@/components/ui/button";
import { authSessionChangedEvent } from "@/lib/auth-session-events";
import { authClient } from "@/lib/auth-client";
import { localizeHref, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const authMenuCopy = {
  en: {
    signIn: "Sign in",
    guest: "Guest",
    userAvatar: "User avatar",
    addPasskey: "Add passkey",
    passkeyAdded: "Passkey added.",
    passkeyError: "Unable to add passkey.",
    signOut: "Sign out",
  },
  uk: {
    signIn: "Увійти",
    guest: "Гість",
    userAvatar: "Аватар користувача",
    addPasskey: "Додати passkey",
    passkeyAdded: "Passkey додано.",
    passkeyError: "Не вдалося додати passkey.",
    signOut: "Вийти",
  },
} as const;

type AuthMenuProps = {
  locale: Locale;
  showIdentity?: boolean;
};

type PasskeyStatus = {
  type: "success" | "error";
  message: string;
} | null;

export default function AuthMenu({
  locale,
  showIdentity = false,
}: AuthMenuProps) {
  const router = useRouter();
  const copy = authMenuCopy[locale];
  const [passkeyStatus, setPasskeyStatus] = useState<PasskeyStatus>(null);
  const [isAddingPasskey, startAddPasskeyTransition] = useTransition();
  const { data: session, isPending, refetch } = authClient.useSession();
  const { data: passkeys, isPending: arePasskeysPending } =
    authClient.useListPasskeys();
  const isAnonymous =
    session?.user && "isAnonymous" in session.user
      ? Boolean(session.user.isAnonymous)
      : false;
  const userImage = !isAnonymous ? session?.user.image : null;
  const hasPasskey = Boolean(passkeys?.length);

  useEffect(() => {
    const handleSessionChanged = () => {
      void refetch().then(() => {
        router.refresh();
      });
    };

    window.addEventListener(authSessionChangedEvent, handleSessionChanged);

    return () => {
      window.removeEventListener(authSessionChangedEvent, handleSessionChanged);
    };
  }, [refetch, router]);

  useEffect(() => {
    if (!passkeyStatus) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setPasskeyStatus(null);
    }, 4000);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [passkeyStatus]);

  if (isPending) {
    return (
      <div className="h-8 w-20 rounded-md border border-black/10 dark:border-white/10" />
    );
  }

  if (!session) {
    return (
      <Link
        href={localizeHref(locale, "/sign-in")}
        className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
      >
        <LogIn aria-hidden="true" />
        {copy.signIn}
      </Link>
    );
  }

  if (isAnonymous) {
    return (
      <div className="flex items-center gap-2">
        <span
          className={cn(
            "items-center gap-1.5 text-sm text-zinc-600 dark:text-zinc-400",
            showIdentity ? "inline-flex" : "hidden sm:inline-flex",
          )}
        >
          <User className="size-4 shrink-0" aria-hidden="true" />
          {copy.guest}
        </span>
        <Link
          href={localizeHref(locale, "/sign-in")}
          className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
        >
          <LogIn aria-hidden="true" />
          {copy.signIn}
        </Link>
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          aria-label={copy.signOut}
          title={copy.signOut}
          onClick={() => {
            void authClient.signOut({
              fetchOptions: {
                onSuccess: () => {
                  router.refresh();
                },
              },
            });
          }}
        >
          <LogOut aria-hidden="true" />
        </Button>
      </div>
    );
  }

  function addPasskey() {
    if (!session?.user) {
      return;
    }

    setPasskeyStatus(null);

    startAddPasskeyTransition(async () => {
      const { error } = await authClient.passkey.addPasskey({
        name: `${session.user.name || session.user.email} passkey`,
      });

      setPasskeyStatus(
        error
          ? { type: "error", message: error.message ?? copy.passkeyError }
          : { type: "success", message: copy.passkeyAdded },
      );
    });
  }

  return (
    <div className="relative flex items-center gap-2">
      <span
        className={cn(
          "items-center gap-1.5 text-sm text-zinc-600 dark:text-zinc-400",
          showIdentity ? "inline-flex" : "hidden sm:inline-flex",
        )}
      >
        {userImage ? (
          <Image
            src={userImage}
            alt={copy.userAvatar}
            width={28}
            height={28}
            className="size-7 shrink-0 rounded-full object-cover"
            aria-hidden="true"
          />
        ) : (
          <User className="size-4 shrink-0" aria-hidden="true" />
        )}
        {session.user.name}
      </span>
      {!hasPasskey ? (
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          disabled={isAddingPasskey || arePasskeysPending}
          aria-label={copy.addPasskey}
          title={copy.addPasskey}
          onClick={addPasskey}
        >
          <KeyRound aria-hidden="true" />
        </Button>
      ) : null}
      <Button
        type="button"
        variant="ghost"
        size="icon-sm"
        aria-label={copy.signOut}
        title={copy.signOut}
        onClick={() => {
          void authClient.signOut({
            fetchOptions: {
              onSuccess: () => {
                router.refresh();
              },
            },
          });
        }}
      >
        <LogOut aria-hidden="true" />
      </Button>
      {passkeyStatus ? (
        <div
          className={cn(
            "absolute top-full right-0 z-50 mt-2 flex w-64 items-start gap-2 rounded-lg border bg-white p-3 text-sm shadow-lg dark:bg-zinc-950",
            passkeyStatus.type === "success"
              ? "border-emerald-200 text-emerald-800 dark:border-emerald-900 dark:text-emerald-200"
              : "border-red-200 text-red-800 dark:border-red-900 dark:text-red-200",
          )}
          role="status"
        >
          {passkeyStatus.type === "success" ? (
            <CheckCircle2
              className="mt-0.5 size-4 shrink-0"
              aria-hidden="true"
            />
          ) : (
            <XCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          )}
          <span className="leading-5">{passkeyStatus.message}</span>
        </div>
      ) : null}
    </div>
  );
}
