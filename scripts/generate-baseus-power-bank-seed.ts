import { readFile, writeFile } from "node:fs/promises";

type ShopifyVariant = {
  id: number;
  title: string;
  sku?: string;
  available: boolean;
  price: number;
  compare_at_price?: number | null;
  weight?: number | null;
  barcode?: string | null;
  option1?: string | null;
  option2?: string | null;
  option3?: string | null;
  featured_image?: {
    id: number;
    src: string;
    alt?: string | null;
    width?: number;
    height?: number;
    position?: number;
  } | null;
};

type ShopifyProduct = {
  id: number;
  title: string;
  handle: string;
  description: string;
  published_at: string;
  created_at: string;
  vendor: string;
  type: string;
  tags: string[];
  price: number;
  price_min: number;
  price_max: number;
  available: boolean;
  price_varies: boolean;
  compare_at_price?: number | null;
  compare_at_price_min?: number | null;
  compare_at_price_max?: number | null;
  variants: ShopifyVariant[];
  images: string[];
  featured_image: string;
  options: { name: string; position: number; values: string[] }[];
  url: string;
  media: {
    id: number;
    alt?: string | null;
    position: number;
    media_type: string;
    src?: string;
    width?: number;
    height?: number;
    aspect_ratio?: number;
    preview_image?: {
      src: string;
      width?: number;
      height?: number;
      aspect_ratio?: number;
    };
  }[];
};

const sourcePath =
  process.argv[2] ?? `${process.env.TEMP}\\baseus-products.json`;
const outputPath =
  process.argv[3] ?? "lib/db/baseus-power-bank-seed.ts";

const htmlEntities: Record<string, string> = {
  amp: "&",
  apos: "'",
  "#39": "'",
  quot: '"',
  nbsp: " ",
  "#160": " ",
  lt: "<",
  gt: ">",
};

function decodeEntities(value: string) {
  return value.replace(/&([^;]+);/g, (match, entity) => {
    return htmlEntities[entity] ?? match;
  });
}

function normalizeUrl(value?: string | null) {
  if (!value) {
    return null;
  }

  if (value.startsWith("//")) {
    return `https:${value}`;
  }

  return value;
}

function stripHtml(value: string) {
  return decodeEntities(
    value
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim(),
  );
}

function extractTagText(html: string, tagName: string) {
  const matches = [
    ...html.matchAll(
      new RegExp(`<${tagName}\\b[^>]*>([\\s\\S]*?)<\\/${tagName}>`, "gi"),
    ),
  ];

  return [
    ...new Set(
      matches
        .map((match) => stripHtml(match[1]))
        .filter((value) => value.length > 0),
    ),
  ];
}

function extractDescriptionImages(html: string) {
  const matches = [...html.matchAll(/<img\b[^>]*\bsrc=["']([^"']+)["']/gi)];

  return [...new Set(matches.map((match) => normalizeUrl(match[1])))].filter(
    (value): value is string => value !== null,
  );
}

function extractCapacityMah(title: string, descriptionText: string) {
  const match = `${title} ${descriptionText}`.match(
    /(\d{1,3}(?:,\d{3})+|\d{4,6})\s*mAh/i,
  );

  return match ? Number(match[1].replace(/,/g, "")) : null;
}

function extractMaxPowerW(title: string, descriptionText: string) {
  const matches = [...`${title} ${descriptionText}`.matchAll(/(\d+(?:\.\d+)?)\s*W\b/gi)]
    .map((match) => Number(match[1]))
    .filter((value) => Number.isFinite(value));

  return matches.length > 0 ? Math.max(...matches) : null;
}

function extractModel(title: string) {
  return title.replace(/^Baseus\s+/i, "").trim();
}

function extractFeatures(product: ShopifyProduct, descriptionText: string) {
  const features: string[] = [];
  const title = product.title;
  const capacityMah = extractCapacityMah(title, descriptionText);
  const maxPowerW = extractMaxPowerW(title, descriptionText);

  if (capacityMah) {
    features.push(`${capacityMah.toLocaleString("en-US")} mAh advertised capacity`);
  }

  if (maxPowerW) {
    features.push(`Up to ${maxPowerW} W output`);
  }

  if (/qi2\.2/i.test(`${title} ${descriptionText}`)) {
    features.push("Qi2.2 magnetic wireless charging");
  } else if (/qi2/i.test(`${title} ${descriptionText}`)) {
    features.push("Qi2 magnetic wireless charging");
  } else if (/magnetic/i.test(`${title} ${descriptionText}`)) {
    features.push("Magnetic wireless charging support");
  }

  if (/built[-\s]?in/i.test(title) && /cable/i.test(title)) {
    features.push("Built-in cable");
  }

  if (/display/i.test(`${title} ${descriptionText}`)) {
    features.push("Digital display");
  }

  if (/retractable/i.test(title)) {
    features.push("Retractable cable");
  }

  return [...new Set(features)];
}

function communicationProtocols(title: string, descriptionText: string) {
  const text = `${title} ${descriptionText}`;
  const protocols = [];

  if (/USB-C|Type-C/i.test(text)) {
    protocols.push("USB-C");
  }

  if (/\bPD\b|Power Delivery/i.test(text)) {
    protocols.push("USB-C PD");
  }

  if (/Qi2\.2/i.test(text)) {
    protocols.push("Qi2.2");
  } else if (/Qi2/i.test(text)) {
    protocols.push("Qi2");
  }

  if (/magnetic/i.test(text)) {
    protocols.push("Magnetic wireless charging");
  }

  return protocols.length > 0 ? protocols.join(", ") : null;
}

function toSummary(product: ShopifyProduct, descriptionText: string) {
  const model = extractModel(product.title);
  const capacityMah = extractCapacityMah(product.title, descriptionText);
  const maxPowerW = extractMaxPowerW(product.title, descriptionText);
  const traits = [];

  if (capacityMah) {
    traits.push(`${capacityMah.toLocaleString("en-US")} mAh advertised capacity`);
  }

  if (maxPowerW) {
    traits.push(`up to ${maxPowerW} W output`);
  }

  if (/qi2\.2/i.test(product.title)) {
    traits.push("Qi2.2 magnetic charging");
  } else if (/qi2/i.test(product.title)) {
    traits.push("Qi2 magnetic charging");
  } else if (/magnetic/i.test(product.title)) {
    traits.push("magnetic charging");
  }

  if (/built[-\s]?in/i.test(product.title) && /cable/i.test(product.title)) {
    traits.push("built-in cable");
  }

  if (/retractable/i.test(product.title)) {
    traits.push("retractable cable");
  }

  if (/display/i.test(product.title)) {
    traits.push("digital display");
  }

  return `${model} from Baseus with ${traits.join(", ")}.`;
}

function toSeedRow(product: ShopifyProduct, collectionListPosition: number) {
  const descriptionText = stripHtml(product.description);
  const capacityMah = extractCapacityMah(product.title, descriptionText);
  const maxPowerW = extractMaxPowerW(product.title, descriptionText);
  const maxPowerWColumn = maxPowerW ? Math.round(maxPowerW) : null;
  const imageUrls = product.images
    .map((image) => normalizeUrl(image))
    .filter((value): value is string => value !== null);
  const featuredImage = normalizeUrl(product.featured_image) ?? imageUrls[0];
  const productUrl = `https://www.baseus.com${product.url}`;
  const weights = product.variants
    .map((variant) => variant.weight)
    .filter((weight): weight is number => typeof weight === "number" && weight > 0);
  const plausibleWeights = weights.filter((weight) => weight <= 2000);
  const firstSku = product.variants.find((variant) => variant.sku)?.sku ?? null;
  const capacityWh = capacityMah ? Math.round((capacityMah * 3.7) / 1000) : null;
  const features = extractFeatures(product, descriptionText);

  return {
    categorySlug: "power-banks",
    manufacturer: "Baseus",
    model: extractModel(product.title),
    slug: `baseus-${product.handle}`,
    summary: toSummary(product, descriptionText),
    summaryUk: toSummary(product, descriptionText),
    imagePath: featuredImage,
    priceCents: product.price_min ?? product.price ?? null,
    productCode: firstSku,
    nominalVoltageV: 5,
    capacityWh,
    continuousPowerW: maxPowerWColumn,
    peakPowerW: maxPowerWColumn,
    chemistry: "Lithium-ion",
    communicationProtocols: communicationProtocols(product.title, descriptionText),
    weightGrams:
      plausibleWeights.length > 0 &&
      plausibleWeights.every((weight) => weight === plausibleWeights[0])
        ? plausibleWeights[0]
        : null,
    sourceLabel: `Baseus product page (${product.handle})`,
    sourceLabelUk: `Baseus product page (${product.handle})`,
    sourceUrl: productUrl,
    specifications: {
      collectionListPosition,
      collectionUrl:
        "https://www.baseus.com/collections/charging?sort_by=manual&filter.p.product_type=Power+Banks",
      collectionProductsJsonUrl:
        "https://www.baseus.com/collections/charging/products.json?limit=250",
      sourceFetchedAt: "2026-06-16",
      sourceProductId: product.id,
      handle: product.handle,
      vendor: product.vendor,
      productType: product.type,
      tags: product.tags,
      status: product.available ? "In Stock" : "Unavailable",
      availableForSale: product.available,
      priceUsd: product.price_min / 100,
      priceRangeUsd: {
        min: product.price_min / 100,
        max: product.price_max / 100,
        varies: product.price_varies,
      },
      compareAtPriceUsd:
        typeof product.compare_at_price_min === "number"
          ? product.compare_at_price_min / 100
          : null,
      sourceCurrency: "USD",
      typicalCapacityMah: capacityMah,
      estimatedEnergyWh: capacityWh,
      maxOutputW: maxPowerW,
      advertisedPowerW: maxPowerW,
      advertisedCapacityMah: capacityMah,
      inferredInputOutputNotes: [
        "Capacity and max output are inferred from Baseus product title and product-page text where not separately exposed by Shopify JSON.",
        "Energy is estimated from advertised mAh at 3.7V nominal lithium-cell voltage.",
      ],
      features,
      options: product.options,
      variants: product.variants.map((variant) => ({
        id: variant.id,
        title: variant.title,
        sku: variant.sku ?? null,
        barcode: variant.barcode ?? null,
        available: variant.available,
        priceUsd: variant.price / 100,
        compareAtPriceUsd:
          typeof variant.compare_at_price === "number"
            ? variant.compare_at_price / 100
            : null,
        weightGrams: variant.weight ?? null,
        weightSource: "Shopify variant weight field",
        weightPromotedToTopLevel:
          typeof variant.weight === "number" &&
          variant.weight > 0 &&
          variant.weight <= 2000,
        options: [variant.option1, variant.option2, variant.option3].filter(
          (option): option is string => Boolean(option),
        ),
        featuredImage: variant.featured_image
          ? {
              id: variant.featured_image.id,
              src: normalizeUrl(variant.featured_image.src),
              alt: variant.featured_image.alt ?? null,
              width: variant.featured_image.width ?? null,
              height: variant.featured_image.height ?? null,
              position: variant.featured_image.position ?? null,
            }
          : null,
      })),
      productImages: imageUrls.map((src, index) => ({
        position: index + 1,
        src,
      })),
      media: product.media.map((media) => ({
        id: media.id,
        position: media.position,
        mediaType: media.media_type,
        alt: media.alt ?? null,
        src: normalizeUrl(media.src ?? media.preview_image?.src),
        width: media.width ?? media.preview_image?.width ?? null,
        height: media.height ?? media.preview_image?.height ?? null,
        aspectRatio: media.aspect_ratio ?? media.preview_image?.aspect_ratio ?? null,
      })),
      descriptionImages: extractDescriptionImages(product.description),
      descriptionHeadings: [
        ...extractTagText(product.description, "h1"),
        ...extractTagText(product.description, "h2"),
        ...extractTagText(product.description, "h3"),
        ...extractTagText(product.description, "h4"),
        ...extractTagText(product.description, "h5"),
        ...extractTagText(product.description, "h6"),
      ],
      descriptionBullets: extractTagText(product.description, "li"),
      descriptionButtons: extractTagText(product.description, "button"),
      descriptionText,
      publishedAt: product.published_at,
      createdAt: product.created_at,
    },
  };
}

const source = (await readFile(sourcePath, "utf8")).replace(/^\uFEFF/, "");
const products = JSON.parse(source) as ShopifyProduct[];
const rows = products.map((product, index) => toSeedRow(product, index + 1));

const file = `export type BaseusPowerBankSeedRow = {
  categorySlug: string;
  manufacturer: string;
  model: string;
  slug: string;
  summary: string;
  summaryUk: string;
  imagePath: string;
  priceCents?: number | null;
  productCode?: string | null;
  nominalVoltageV?: number | null;
  capacityWh?: number | null;
  continuousPowerW?: number | null;
  peakPowerW?: number | null;
  maxPvVoltageV?: number | null;
  maxChargeCurrentA?: number | null;
  chemistry?: string | null;
  communicationProtocols?: string | null;
  weightGrams?: number | null;
  warrantyYears?: number | null;
  lifecycleCycles?: number | null;
  sourceLabel: string;
  sourceLabelUk: string;
  sourceUrl?: string | null;
  specifications?: Record<string, unknown>;
};

export const baseusPowerBankRows: BaseusPowerBankSeedRow[] = ${JSON.stringify(
  rows,
  null,
  2,
)};
`;

await writeFile(outputPath, file);
console.log(`Wrote ${rows.length} Baseus power bank rows to ${outputPath}`);
