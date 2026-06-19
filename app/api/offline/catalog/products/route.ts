import { getOfflineCatalogProducts } from "@/lib/offline/catalog-server";

export async function GET(request: Request) {
  const values = new URL(request.url).searchParams.get("ids")?.split(",") ?? [];
  const ids = [...new Set(values.map(Number).filter(Number.isInteger))];

  if (ids.length === 0 || ids.length > 100) {
    return Response.json(
      { error: "Provide between 1 and 100 product IDs" },
      { status: 400 },
    );
  }

  try {
    const allowedIds = new Set(ids);
    const products = (await getOfflineCatalogProducts()).filter((product) =>
      allowedIds.has(product.id),
    );
    return Response.json(
      { products },
      {
        headers: { "Cache-Control": "public, max-age=0, s-maxage=300" },
      },
    );
  } catch (error) {
    console.error("Offline catalog products read failed", error);
    return Response.json({ error: "Catalog unavailable" }, { status: 503 });
  }
}
