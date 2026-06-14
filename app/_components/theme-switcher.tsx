"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useSyncExternalStore } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ThemePreference = "light" | "dark";
type StoredThemePreference = ThemePreference | null;
type ThemeState = {
  storedPreference: StoredThemePreference;
  resolvedTheme: ThemePreference;
};

const THEME_STORAGE_KEY = "theme";
const DARK_THEME_COLOR = "#09090b";
const LIGHT_THEME_COLOR = "#ffffff";
const DEFAULT_THEME_STATE: ThemeState = {
  storedPreference: null,
  resolvedTheme: "light",
};
const themeListeners = new Set<() => void>();
let currentThemeState: ThemeState = DEFAULT_THEME_STATE;

const themeOptions: Array<{
  icon: typeof Sun;
  label: string;
  value: ThemePreference;
}> = [
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
];

function isThemePreference(value: string | null): value is ThemePreference {
  return value === "light" || value === "dark";
}

function getSystemPreference(): ThemePreference {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function getStoredPreference(): StoredThemePreference {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const storedPreference = window.localStorage.getItem(THEME_STORAGE_KEY);
    return isThemePreference(storedPreference) ? storedPreference : null;
  } catch {
    return null;
  }
}

function applyTheme(preference: ThemePreference) {
  const root = document.documentElement;
  const themeColor = document.querySelector('meta[name="theme-color"]');

  root.classList.toggle("dark", preference === "dark");
  root.dataset.theme = preference;
  root.style.colorScheme = preference;
  themeColor?.setAttribute(
    "content",
    preference === "dark" ? DARK_THEME_COLOR : LIGHT_THEME_COLOR,
  );
}

function emitThemeChange() {
  themeListeners.forEach((listener) => listener());
}

function setCurrentThemeState(nextState: ThemeState) {
  currentThemeState = nextState;
  emitThemeChange();
}

function syncStoredPreference() {
  const storedPreference = getStoredPreference();
  const resolvedTheme = storedPreference ?? getSystemPreference();

  if (
    storedPreference !== currentThemeState.storedPreference ||
    resolvedTheme !== currentThemeState.resolvedTheme
  ) {
    currentThemeState = { storedPreference, resolvedTheme };
    emitThemeChange();
  }

  applyTheme(resolvedTheme);
}

function subscribeToThemePreference(listener: () => void) {
  themeListeners.add(listener);
  syncStoredPreference();

  return () => {
    themeListeners.delete(listener);
  };
}

function getThemePreferenceSnapshot(): ThemeState {
  return currentThemeState;
}

function getServerThemePreferenceSnapshot(): ThemeState {
  return DEFAULT_THEME_STATE;
}

export default function ThemeSwitcher() {
  const themeState = useSyncExternalStore(
    subscribeToThemePreference,
    getThemePreferenceSnapshot,
    getServerThemePreferenceSnapshot,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if (getStoredPreference()) {
        return;
      }

      const resolvedTheme = getSystemPreference();

      setCurrentThemeState({
        storedPreference: null,
        resolvedTheme,
      });
      applyTheme(resolvedTheme);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  function updatePreference(nextPreference: ThemePreference) {
    setCurrentThemeState({
      storedPreference: nextPreference,
      resolvedTheme: nextPreference,
    });

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, nextPreference);
    } catch {
      // Storage can be unavailable in private contexts; the visual change still applies.
    }

    applyTheme(nextPreference);
  }

  return (
    <div
      aria-label="Theme"
      className="inline-flex items-center rounded-lg border border-border bg-background p-0.5"
      role="group"
    >
      {themeOptions.map((option) => {
        const Icon = option.icon;
        const isActive = option.value === themeState.resolvedTheme;

        return (
          <Button
            aria-label={`Use ${option.label.toLowerCase()} theme`}
            aria-pressed={isActive}
            className={cn(
              "theme-switcher-option size-7 rounded-md text-muted-foreground",
            )}
            data-theme-option={option.value}
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
