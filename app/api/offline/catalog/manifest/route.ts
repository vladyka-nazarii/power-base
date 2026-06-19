import { getOfflineCatalogManifest } from "@/lib/offline/catalog-server";

export async function GET(request: Request) {
  try {
    const manifest = await getOfflineCatalogManifest();
    const etag = `"${manifest.version}"`;

    if (request.headers.get("if-none-match") === etag) {
      return new Response(null, { status: 304, headers: { ETag: etag } });
    }

    return Response.json(manifest, {
      headers: {
        "Cache-Control": "public, max-age=0, s-maxage=300, must-revalidate",
        ETag: etag,
      },
    });
  } catch (error) {
    console.error("Offline catalog manifest read failed", error);
    return Response.json({ error: "Catalog unavailable" }, { status: 503 });
  }
}
