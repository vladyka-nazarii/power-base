import { Suspense } from "react";

import OfflineCatalogReader from "@/app/offline/offline-catalog-reader";

export const dynamic = "force-static";

export default function OfflinePage() {
  return (
    <Suspense
      fallback={
        <main className="mx-auto max-w-3xl px-5 py-20 text-center">
          <h1 className="text-2xl font-semibold">Opening offline catalog...</h1>
        </main>
      }
    >
      <OfflineCatalogReader />
    </Suspense>
  );
}
