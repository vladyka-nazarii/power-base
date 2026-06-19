import { getCurrentSession, getFavoriteEquipmentIds } from "@/lib/favorites";

export async function GET() {
  const session = await getCurrentSession();
  const ids = await getFavoriteEquipmentIds(session?.user.id);
  return Response.json(
    { ids: [...ids] },
    { headers: { "Cache-Control": "private, no-store" } },
  );
}
