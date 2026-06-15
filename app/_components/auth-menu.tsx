"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { LogIn, LogOut, User } from "lucide-react";
import { useEffect } from "react";

import { Button, buttonVariants } from "@/components/ui/button";
import { authSessionChangedEvent } from "@/lib/auth-session-events";
import { authClient } from "@/lib/auth-client";
import { localizeHref, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export default function AuthMenu({ locale }: { locale: Locale }) {
  const router = useRouter();
  const { data: session, isPending, refetch } = authClient.useSession();
  const isAnonymous =
    session?.user && "isAnonymous" in session.user
      ? Boolean(session.user.isAnonymous)
      : false;

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
        Sign in
      </Link>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <span className="hidden max-w-32 items-center gap-1.5 truncate text-sm text-zinc-600 sm:inline-flex dark:text-zinc-400">
        <User className="size-4" aria-hidden="true" />
        {isAnonymous ? "Guest" : session.user.name}
      </span>
      <Button
        type="button"
        variant="ghost"
        size="icon-sm"
        aria-label="Sign out"
        title="Sign out"
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
