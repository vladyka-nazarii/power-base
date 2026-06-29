import type { Locale } from "@/lib/i18n";

// National Bank of Ukraine official USD rate for 2026-06-29.
export const usdToUahRate = 44.8596;

export function formatPrice(priceCents: number | null, locale: Locale = "en") {
  if (priceCents === null) {
    return locale === "uk" ? "н/д" : "n/a";
  }

  const priceUsd = priceCents / 100;

  if (locale === "uk") {
    const priceUah = Math.round(priceUsd * usdToUahRate);
    return `${priceUah.toLocaleString("uk-UA").replaceAll("\u00a0", " ")} ₴`;
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(priceUsd);
}
