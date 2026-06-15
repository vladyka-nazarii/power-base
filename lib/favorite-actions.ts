"use server";

import { and, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";

import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { equipment, userFavorites } from "@/lib/db/schema";
import { getCurrentSession } from "@/lib/favorites";

async function ensureFavoriteUserId() {
  const session = await getCurrentSession();

  if (session?.user.id) {
    return session.user.id;
  }

  const anonymousSession = await auth.api.signInAnonymous({
    headers: await headers(),
  });

  return anonymousSession.user.id;
}

export async function toggleFavorite({
  equipmentId,
  nextFavorite,
  path,
}: {
  equipmentId: number;
  nextFavorite: boolean;
  path: string;
}) {
  const [product] = await db
    .select({ id: equipment.id })
    .from(equipment)
    .where(eq(equipment.id, equipmentId))
    .limit(1);

  if (!product) {
    return;
  }

  const userId = await ensureFavoriteUserId();

  if (!userId) {
    throw new Error("Unable to create a favorite session.");
  }

  if (nextFavorite) {
    await db
      .insert(userFavorites)
      .values({
        userId,
        equipmentId,
      })
      .onConflictDoNothing();
  } else {
    await db
      .delete(userFavorites)
      .where(
        and(
          eq(userFavorites.userId, userId),
          eq(userFavorites.equipmentId, equipmentId),
        ),
      );
  }

  revalidatePath(path);
}
