"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { LogIn, LogOut, User } from "lucide-react";
import { useEffect } from "react";

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
    signOut: "Sign out",
  },
  uk: {
    signIn: "Увійти",
    guest: "Гість",
    userAvatar: "Аватар користувача",
    signOut: "Вийти",
  },
} as const;

export default function AuthMenu({ locale }: { locale: Locale }) {
  const router = useRouter();
  const copy = authMenuCopy[locale];
  const { data: session, isPending, refetch } = authClient.useSession();
  const isAnonymous =
    session?.user && "isAnonymous" in session.user
      ? Boolean(session.user.isAnonymous)
      : false;
  const userImage = !isAnonymous ? session?.user.image : null;

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

  if (isPending) {
    return (
      <div className="h-8 w-20 rounded-md border border-black/10 dark:border-white/10" />
    );
  }

  if (!session) {
    return (
      <Link
        href={localizeHref(locale, "/sign-in")}
        prefetch={false}
        className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
      >
        <LogIn aria-hidden="true" />
        {copy.signIn}
      </Link>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <span className="hidden items-center gap-1.5 text-sm text-zinc-600 sm:inline-flex dark:text-zinc-400">
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
        {isAnonymous ? copy.guest : session.user.name}
      </span>
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
