"use client";

import { usePathname } from "next/navigation";
import { Heart } from "lucide-react";
import { useTransition } from "react";

import { Button } from "@/components/ui/button";
import { toggleFavorite } from "@/lib/favorite-actions";
import { cn } from "@/lib/utils";

type FavoriteButtonProps = {
  equipmentId: number;
  isFavorite: boolean;
  label?: string;
};

export default function FavoriteButton({
  equipmentId,
  isFavorite,
  label,
}: FavoriteButtonProps) {
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  return (
    <Button
      type="button"
      variant={isFavorite ? "default" : "outline"}
      size={label ? "sm" : "icon-sm"}
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
        });
      }}
    >
      <Heart aria-hidden="true" className={cn(isFavorite && "fill-current")} />
      {label}
    </Button>
  );
}
