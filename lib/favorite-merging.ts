import { eq } from "drizzle-orm";

import { db } from "@/lib/db";
import { userFavorites } from "@/lib/db/schema";

export async function mergeFavoriteUsers({
  anonymousUserId,
  newUserId,
}: {
  anonymousUserId: string;
  newUserId: string;
}) {
  if (anonymousUserId === newUserId) {
    return;
  }

  const rows = await db
    .select({ equipmentId: userFavorites.equipmentId })
    .from(userFavorites)
    .where(eq(userFavorites.userId, anonymousUserId));

  if (rows.length > 0) {
    await db
      .insert(userFavorites)
      .values(
        rows.map((row) => ({
          userId: newUserId,
          equipmentId: row.equipmentId,
        })),
      )
      .onConflictDoNothing();
  }

  await db
    .delete(userFavorites)
    .where(eq(userFavorites.userId, anonymousUserId));
}
