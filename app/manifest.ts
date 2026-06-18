import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "PowerBase",
    short_name: "PowerBase",
    description: "Structured alternative energy equipment catalog.",
    start_url: "/en",
    scope: "/",
    display: "standalone",
    orientation: "portrait-primary",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    categories: ["productivity", "utilities", "business"],
    icons: [
      {
        src: "/icons/powerbase-icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/powerbase-icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/powerbase-maskable-icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icons/powerbase-icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/icons/powerbase-maskable-icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "maskable",
      },
    ],
    shortcuts: [
      {
        name: "Power Banks",
        short_name: "Power Banks",
        description: "Open the power bank catalog.",
        url: "/en/power-banks",
        icons: [{ src: "/catalog/power-bank.svg", sizes: "any" }],
      },
      {
        name: "Inverters",
        short_name: "Inverters",
        description: "Open the inverter catalog.",
        url: "/en/inverters",
        icons: [{ src: "/catalog/inverter.svg", sizes: "any" }],
      },
      {
        name: "Favorites",
        short_name: "Favorites",
        description: "Open saved equipment.",
        url: "/en/favorites",
        icons: [{ src: "/icons/powerbase-icon-192.png", sizes: "192x192" }],
      },
    ],
  };
}
