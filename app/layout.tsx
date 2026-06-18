import type { Metadata } from "next";
import { headers } from "next/headers";
import ServiceWorkerRegistration from "@/app/_components/service-worker-registration";
import { isLocale, type Locale } from "@/lib/i18n";
import { siteUrl } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "PowerBase",
    template: "%s | PowerBase",
  },
  description: "Alternative energy equipment catalog",
  applicationName: "PowerBase",
  openGraph: {
    title: "PowerBase",
    description: "Alternative energy equipment catalog",
    siteName: "PowerBase",
    type: "website",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "PowerBase",
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    apple: "/icons/powerbase-icon-192.png",
    icon: [
      { url: "/icons/powerbase-icon.svg", type: "image/svg+xml" },
      { url: "/icons/powerbase-icon-192.png", sizes: "192x192" },
    ],
    shortcut: "/icons/powerbase-icon-192.png",
  },
  manifest: "/manifest.webmanifest",
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || "",
  },
};

const themeScript = `
(() => {
  const darkThemeColor = "#09090b";
  const lightThemeColor = "#ffffff";

  try {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isSystemTheme = storedTheme !== "light" && storedTheme !== "dark";
    const isDark = storedTheme === "dark" || (isSystemTheme && prefersDark);
    const themePreference = isSystemTheme ? "system" : storedTheme;
    const themeColor = document.querySelector('meta[name="theme-color"]');

    document.documentElement.classList.toggle("dark", isDark);
    document.documentElement.dataset.theme = isDark ? "dark" : "light";
    document.documentElement.dataset.themePreference = themePreference;
    document.documentElement.style.colorScheme = isDark ? "dark" : "light";

    if (themeColor) {
      themeColor.setAttribute("content", isDark ? darkThemeColor : lightThemeColor);
    }
  } catch (_) {}
})();
`;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const requestHeaders = await headers();
  const localeHeader = requestHeaders.get("x-powerbase-locale");
  const locale: Locale =
    localeHeader && isLocale(localeHeader) ? localeHeader : "en";

  return (
    <html lang={locale} suppressHydrationWarning className="font-sans">
      <head>
        <meta name="theme-color" content="#ffffff" />
        <script
          id="powerbase-theme"
          dangerouslySetInnerHTML={{ __html: themeScript }}
        />
      </head>
      <body className="antialiased">
        <ServiceWorkerRegistration />
        {children}
      </body>
    </html>
  );
}
