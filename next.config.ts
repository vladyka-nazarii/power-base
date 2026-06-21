import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  experimental: {
    inlineCss: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "media.vladyka.dev",
        pathname: "/power-bank/**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:locale(en|uk)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, s-maxage=31536000, must-revalidate",
          },
        ],
      },
      {
        source: "/:locale(en|uk)/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, s-maxage=31536000, must-revalidate",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
