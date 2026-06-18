import type { MetadataRoute } from "next";
import { absoluteUrl, siteUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/en/sign-in",
        "/uk/sign-in",
        "/en/favorites",
        "/uk/favorites",
      ],
    },
    sitemap: absoluteUrl("/sitemap.xml"),
    host: siteUrl.replace(/\/+$/, ""),
  };
}
