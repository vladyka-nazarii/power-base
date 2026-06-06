"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useEffect, useMemo, useSyncExternalStore } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ThemePreference = "system" | "light" | "dark";
type ResolvedTheme = "light" | "dark";

const THEME_STORAGE_KEY = "powerbase-theme";
const themePreferences = ["system", "light", "dark"] as const;
const themeListeners = new Set<() => void>();
let currentPreference: ThemePreference = "system";

const themeOptions: Array<{
  icon: typeof Monitor;
  label: string;
  value: ThemePreference;
}> = [
  { value: "system", label: "System", icon: Monitor },
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
];

function isThemePreference(value: string | null): value is ThemePreference {
  return themePreferences.some((theme) => theme === value);
}

function getStoredPreference(): ThemePreference {
  if (typeof window === "undefined") {
    return "system";
  }

  try {
    const storedPreference = window.localStorage.getItem(THEME_STORAGE_KEY);
    return isThemePreference(storedPreference) ? storedPreference : "system";
  } catch {
    return "system";
  }
}

function getSystemTheme(): ResolvedTheme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function resolveTheme(preference: ThemePreference): ResolvedTheme {
  return preference === "system" ? getSystemTheme() : preference;
}

function applyTheme(preference: ThemePreference) {
  const resolvedTheme = resolveTheme(preference);
  const root = document.documentElement;

  root.classList.toggle("dark", resolvedTheme === "dark");
  root.dataset.theme = preference;
  root.style.colorScheme = resolvedTheme;
}

function emitThemeChange() {
  themeListeners.forEach((listener) => listener());
}

function setCurrentPreference(nextPreference: ThemePreference) {
  currentPreference = nextPreference;
  emitThemeChange();
}

function syncStoredPreference() {
  const storedPreference = getStoredPreference();

  if (storedPreference !== currentPreference) {
    setCurrentPreference(storedPreference);
  }

  applyTheme(storedPreference);
}

function subscribeToThemePreference(listener: () => void) {
  themeListeners.add(listener);
  syncStoredPreference();

  return () => {
    themeListeners.delete(listener);
  };
}

function getThemePreferenceSnapshot() {
  return currentPreference;
}

function getServerThemePreferenceSnapshot() {
  return "system" satisfies ThemePreference;
}

export default function ThemeSwitcher() {
  const preference = useSyncExternalStore(
    subscribeToThemePreference,
    getThemePreferenceSnapshot,
    getServerThemePreferenceSnapshot,
  );

  useEffect(() => {
    if (preference !== "system") {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => applyTheme("system");

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [preference]);

  const activeLabel = useMemo(
    () =>
      themeOptions.find((option) => option.value === preference)?.label ??
      "System",
    [preference],
  );

  function updatePreference(nextPreference: ThemePreference) {
    setCurrentPreference(nextPreference);

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, nextPreference);
    } catch {
      // Storage can be unavailable in private contexts; the visual change still applies.
    }

    applyTheme(nextPreference);
  }

  return (
    <div
      aria-label={`Theme: ${activeLabel}`}
      className="inline-flex items-center rounded-lg border border-border bg-background p-0.5"
      role="group"
    >
      {themeOptions.map((option) => {
        const Icon = option.icon;
        const isActive = option.value === preference;

        return (
          <Button
            aria-label={`Use ${option.label.toLowerCase()} theme`}
            aria-pressed={isActive}
            className={cn(
              "size-7 rounded-md text-muted-foreground",
              isActive && "bg-muted text-foreground shadow-xs",
            )}
            key={option.value}
            onClick={() => updatePreference(option.value)}
            size="icon-sm"
            title={option.label}
            type="button"
            variant="ghost"
          >
            <Icon aria-hidden="true" />
          </Button>
        );
      })}
    </div>
  );
}
