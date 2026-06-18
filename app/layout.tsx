import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "PowerBase",
  description: "Alternative energy equipment catalog",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="font-sans">
      <head>
        <meta name="theme-color" content="#ffffff" />
        <script
          id="powerbase-theme"
          dangerouslySetInnerHTML={{ __html: themeScript }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
