"use client";

import {
  Check,
  CloudDownload,
  RefreshCw,
  Trash2,
  WifiOff,
  X,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import type { Locale } from "@/lib/i18n";
import type { OfflineCatalogSnapshot } from "@/lib/offline/catalog";
import {
  type OfflineProgress,
  readOfflineSnapshot,
  removeOfflineCatalog,
  synchronizeOfflineCatalog,
} from "@/lib/offline/catalog-client";

const text = {
  en: {
    title: "Offline catalog",
    description:
      "Save the first catalog page in every category, both languages, and images.",
    download: "Download (about 15 MB)",
    refresh: "Check for updates",
    remove: "Remove download",
    ready: "Available offline",
    never: "Not downloaded",
    updated: "Last updated",
    close: "Close",
    error: "Offline catalog update failed.",
    confirmRemove: "Remove the downloaded offline catalog from this device?",
  },
  uk: {
    title: "Офлайн-каталог",
    description:
      "Збережіть першу сторінку кожної категорії, обидві мови та зображення.",
    download: "Завантажити (близько 15 МБ)",
    refresh: "Перевірити оновлення",
    remove: "Видалити завантаження",
    ready: "Доступний офлайн",
    never: "Не завантажено",
    updated: "Оновлено",
    close: "Закрити",
    error: "Не вдалося оновити офлайн-каталог.",
    confirmRemove: "Видалити офлайн-каталог із цього пристрою?",
  },
} as const;

export default function OfflineCatalogControl({ locale }: { locale: Locale }) {
  const ui = text[locale];
  const [open, setOpen] = useState(false);
  const [snapshot, setSnapshot] = useState<OfflineCatalogSnapshot | null>(null);
  const [progress, setProgress] = useState<OfflineProgress | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const panelRef = useRef<HTMLDivElement>(null);

  const reload = useCallback(() => {
    readOfflineSnapshot()
      .then(setSnapshot)
      .catch(() => setSnapshot(null));
  }, []);

  const synchronize = useCallback(
    async (initial = false) => {
      setBusy(true);
      setError("");
      setProgress(null);
      try {
        const next = await synchronizeOfflineCatalog({
          initial,
          onProgress: setProgress,
        });
        setSnapshot(next);
      } catch (syncError) {
        console.error(syncError);
        setError(syncError instanceof Error ? syncError.message : ui.error);
      } finally {
        setBusy(false);
        setProgress(null);
      }
    },
    [ui.error],
  );

  useEffect(() => {
    let cancelled = false;
    readOfflineSnapshot()
      .then((stored) => {
        if (cancelled) return;
        setSnapshot(stored);
        if (stored && navigator.onLine) void synchronize(false);
      })
      .catch(() => setSnapshot(null));
    window.addEventListener("powerbase-offline-catalog-changed", reload);
    return () => {
      cancelled = true;
      window.removeEventListener("powerbase-offline-catalog-changed", reload);
    };
  }, [reload, synchronize]);

  useEffect(() => {
    if (!open) return;
    const closeOnPointer = (event: PointerEvent) => {
      if (!panelRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", closeOnPointer);
    return () => document.removeEventListener("pointerdown", closeOnPointer);
  }, [open]);

  const progressPercent = progress?.total
    ? Math.round((progress.completed / progress.total) * 100)
    : 0;

  return (
    <div ref={panelRef} className="relative">
      <Button
        type="button"
        variant="outline"
        size="icon"
        aria-label={ui.title}
        title={ui.title}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {snapshot ? (
          <Check className="text-emerald-600" aria-hidden="true" />
        ) : (
          <CloudDownload aria-hidden="true" />
        )}
      </Button>
      {open ? (
        <div className="fixed top-16 right-3 left-3 z-[60] max-h-[calc(100dvh-5rem)] overflow-y-auto rounded-lg border border-black/10 bg-white p-4 shadow-xl shadow-black/10 lg:absolute lg:top-full lg:right-0 lg:left-auto lg:z-50 lg:mt-2 lg:max-h-none lg:w-[min(22rem,calc(100vw-2rem))] lg:overflow-visible dark:border-white/10 dark:bg-zinc-950 dark:shadow-black/40">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="font-semibold">{ui.title}</h2>
              <p className="mt-1 text-sm leading-6 text-zinc-500">
                {ui.description}
              </p>
            </div>
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              aria-label={ui.close}
              onClick={() => setOpen(false)}
            >
              <X aria-hidden="true" />
            </Button>
          </div>

          <div className="mt-4 rounded-md bg-zinc-50 p-3 text-sm dark:bg-zinc-900">
            <p className="flex items-center gap-2 font-medium">
              {snapshot ? (
                <Check className="size-4 text-emerald-600" />
              ) : (
                <WifiOff className="size-4 text-zinc-500" />
              )}
              {snapshot ? ui.ready : ui.never}
            </p>
            {snapshot ? (
              <p className="mt-1 text-xs text-zinc-500">
                {ui.updated}: {new Date(snapshot.updatedAt).toLocaleString()}
              </p>
            ) : null}
          </div>

          {busy ? (
            <div className="mt-4">
              <div className="h-2 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800">
                <div
                  className="h-full bg-black transition-[width] dark:bg-white"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <p className="mt-2 text-xs text-zinc-500">
                {progress?.phase === "images" ? "Images" : "Application"}:{" "}
                {progressPercent}%
              </p>
            </div>
          ) : null}
          {error ? <p className="mt-3 text-sm text-red-600">{error}</p> : null}

          <div className="mt-4 grid gap-2">
            <Button
              type="button"
              disabled={
                busy || (typeof navigator !== "undefined" && !navigator.onLine)
              }
              onClick={() => void synchronize(!snapshot)}
            >
              {snapshot ? <RefreshCw /> : <CloudDownload />}
              {snapshot ? ui.refresh : ui.download}
            </Button>
            {snapshot ? (
              <Button
                type="button"
                variant="destructive"
                disabled={busy}
                onClick={() => {
                  if (!window.confirm(ui.confirmRemove)) return;
                  setBusy(true);
                  removeOfflineCatalog()
                    .then(() => setSnapshot(null))
                    .catch((removeError) =>
                      setError(
                        removeError instanceof Error
                          ? removeError.message
                          : ui.error,
                      ),
                    )
                    .finally(() => setBusy(false));
                }}
              >
                <Trash2 /> {ui.remove}
              </Button>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
}
