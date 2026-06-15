"use client";

import { usePathname, useRouter } from "next/navigation";
import { Heart } from "lucide-react";
import { useTransition } from "react";

import { Button } from "@/components/ui/button";
import { authSessionChangedEvent } from "@/lib/auth-session-events";
import { toggleFavorite } from "@/lib/favorite-actions";
import { cn } from "@/lib/utils";

type FavoriteButtonProps = {
  equipmentId: number;
  isFavorite: boolean;
  className?: string;
  label?: string;
};

export default function FavoriteButton({
  equipmentId,
  isFavorite,
  className,
  label,
}: FavoriteButtonProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <Button
      type="button"
      variant={isFavorite ? "default" : "outline"}
      size={label ? "sm" : "icon-sm"}
      className={className}
      aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
      title={isFavorite ? "Remove from favorites" : "Add to favorites"}
      disabled={isPending}
      onClick={() => {
        startTransition(async () => {
          await toggleFavorite({
            equipmentId,
            nextFavorite: !isFavorite,
            path: pathname,
          });
          window.dispatchEvent(new Event(authSessionChangedEvent));
          router.refresh();
        });
      }}
    >
      <Heart aria-hidden="true" className={cn(isFavorite && "fill-current")} />
      {label}
    </Button>
  );
}
