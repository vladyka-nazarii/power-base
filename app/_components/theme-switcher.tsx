"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useEffect, useSyncExternalStore } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ThemePreference = "light" | "dark";
type ThemeMode = ThemePreference | "system";
type ThemeState = {
  mode: ThemeMode;
  resolvedTheme: ThemePreference;
};

const THEME_STORAGE_KEY = "theme";
const DARK_THEME_COLOR = "#09090b";
const LIGHT_THEME_COLOR = "#ffffff";
const DEFAULT_THEME_STATE: ThemeState = {
  mode: "system",
  resolvedTheme: "light",
};
const themeListeners = new Set<() => void>();
let currentThemeState: ThemeState = DEFAULT_THEME_STATE;

const themeOptions: Array<{
  icon: typeof Sun;
  label: string;
  value: ThemeMode;
}> = [
  { value: "light", label: "Light", icon: Sun },
  { value: "system", label: "System", icon: Monitor },
  { value: "dark", label: "Dark", icon: Moon },
];

function isThemeMode(value: string | null): value is ThemeMode {
  return value === "light" || value === "dark" || value === "system";
}

function getSystemPreference(): ThemePreference {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function getStoredMode(): ThemeMode {
  if (typeof window === "undefined") {
    return "system";
  }

  try {
    const storedMode = window.localStorage.getItem(THEME_STORAGE_KEY);
    return isThemeMode(storedMode) ? storedMode : "system";
  } catch {
    return "system";
  }
}

function resolveTheme(mode: ThemeMode): ThemePreference {
  return mode === "system" ? getSystemPreference() : mode;
}

function applyTheme(mode: ThemeMode) {
  const resolvedTheme = resolveTheme(mode);
  const root = document.documentElement;
  const themeColor = document.querySelector('meta[name="theme-color"]');

  root.classList.toggle("dark", resolvedTheme === "dark");
  root.dataset.theme = resolvedTheme;
  root.dataset.themePreference = mode;
  root.style.colorScheme = resolvedTheme;
  themeColor?.setAttribute(
    "content",
    resolvedTheme === "dark" ? DARK_THEME_COLOR : LIGHT_THEME_COLOR,
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
  const mode = getStoredMode();
  const resolvedTheme = resolveTheme(mode);

  if (
    mode !== currentThemeState.mode ||
    resolvedTheme !== currentThemeState.resolvedTheme
  ) {
    currentThemeState = { mode, resolvedTheme };
    emitThemeChange();
  }

  applyTheme(mode);
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
      if (getStoredMode() !== "system") {
        return;
      }

      const resolvedTheme = getSystemPreference();

      setCurrentThemeState({
        mode: "system",
        resolvedTheme,
      });
      applyTheme("system");
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  function updatePreference(nextPreference: ThemeMode) {
    const resolvedTheme = resolveTheme(nextPreference);

    setCurrentThemeState({
      mode: nextPreference,
      resolvedTheme,
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
      className="border-border bg-background inline-flex items-center rounded-lg border p-0.5"
      role="group"
    >
      {themeOptions.map((option) => {
        const Icon = option.icon;
        const isActive = option.value === themeState.mode;

        return (
          <Button
            aria-label={`Use ${option.label.toLowerCase()} theme`}
            aria-pressed={isActive}
            className={cn(
              "theme-switcher-option text-muted-foreground size-7 rounded-md",
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
