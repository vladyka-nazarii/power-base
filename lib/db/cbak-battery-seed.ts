export type CbakBatterySeedRow = {
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

export const cbakBatteryRows: CbakBatterySeedRow[] = [
  {
    categorySlug: "batteries",
    manufacturer: "CBAK",
    model: "32140FS 15Ah LiFePO4 3.2V A-Grade",
    slug: "nkon-cbak-32140fs-15ah-lifepo4-3-2v-a-grade",
    summary:
      "CBAK 32140FS cylindrical LiFePO4 cell from NKON with 15 Ah capacity, 3.2 V nominal voltage, and 15 A discharge rating.",
    summaryUk:
      "CBAK 32140FS cylindrical LiFePO4 cell from NKON with 15 Ah capacity, 3.2 V nominal voltage, and 15 A discharge rating.",
    imagePath:
      "https://media.vladyka.dev/battery/cbak/fcc932c0dfb9ccd71dc5eb5c4c7293f4.webp",
    priceCents: 439,
    nominalVoltageV: 3,
    capacityWh: 48,
    chemistry: "LiFePO4",
    weightGrams: 300,
    lifecycleCycles: 2500,
    sourceLabel: "NKON product page",
    sourceLabelUk: "NKON product page",
    sourceUrl:
      "https://www.nkon.nl/novat/cbak-32140-15ah-lifepo4-3-2v-a-grade.html",
    specifications: {
      sourceFetchedAt: "2026-07-01",
      eanGtin: "6097329357391",
      grade: "A",
      model: "32140FS",
      cellFormat: "Cylindrical",
      nominalVoltageV: 3.2,
      capacityAh: 15,
      minimumCapacityAh: 14.5,
      dischargeCurrentA: 15,
      terminalType: "Flat top",
      heightMm: 140,
      diameterMm: 32,
      widthMm: 33,
      thicknessMm: 32,
      weightGramsDetailed: 305,
      standardCycles: 2500,
      fastChargeCycles: 3000,
      priceEur: 3.85,
      stockStatus: "OutOfStock",
      additionalImages: [
        "https://www.nkon.nl/media/catalog/product/cache/571f095c3039c972605f32eb058cc7dc/i/m/image_template_nkon30_0068_layer_29.jpg",
        "https://www.nkon.nl/media/catalog/product/cache/571f095c3039c972605f32eb058cc7dc/i/m/image_template_nkon30_0067_layer_30.jpg",
        "https://www.nkon.nl/media/catalog/product/cache/571f095c3039c972605f32eb058cc7dc/i/m/image_template_nkon30_0066_layer_31.jpg",
      ],
      sourceProductUrl:
        "https://www.nkon.nl/novat/cbak-32140-15ah-lifepo4-3-2v-a-grade.html",
    },
  },
  {
    categorySlug: "batteries",
    manufacturer: "CBAK",
    model: "40130FS 20Ah LiFePO4 3.2V A-Grade",
    slug: "nkon-cbak-40130fs-20ah-10a-lifepo4-3-2v-a-grade",
    summary:
      "CBAK 40130FS cylindrical LiFePO4 cell from NKON with 20 Ah capacity, 3.2 V nominal voltage, and 10 A discharge rating.",
    summaryUk:
      "CBAK 40130FS cylindrical LiFePO4 cell from NKON with 20 Ah capacity, 3.2 V nominal voltage, and 10 A discharge rating.",
    imagePath:
      "https://media.vladyka.dev/battery/cbak/64a8f07db678416fbe9da611778ddb3e.webp",
    priceCents: 587,
    nominalVoltageV: 3,
    capacityWh: 64,
    chemistry: "LiFePO4",
    weightGrams: 390,
    lifecycleCycles: 3500,
    sourceLabel: "NKON product page",
    sourceLabelUk: "NKON product page",
    sourceUrl:
      "https://www.nkon.nl/novat/cbak-40130fs-20ah-10a-lifepo4-3-2v-a-grade.html",
    specifications: {
      sourceFetchedAt: "2026-07-01",
      eanGtin: "6097332552523",
      grade: "A",
      model: "40130FS",
      cellFormat: "Cylindrical",
      nominalVoltageV: 3.2,
      capacityAh: 20,
      minimumCapacityAh: 19.5,
      dischargeCurrentA: 10,
      terminalType: "Flat top",
      heightMm: 130,
      diameterMm: 40.5,
      thicknessMm: 40.5,
      standardCycles: 3500,
      fastChargeCycles: 2800,
      priceEur: 5.15,
      stockStatus: "OutOfStock",
      expectedAvailabilityDate: "2026-03-28",
      additionalImages: [],
      sourceProductUrl:
        "https://www.nkon.nl/novat/cbak-40130fs-20ah-10a-lifepo4-3-2v-a-grade.html",
    },
  },
  {
    categorySlug: "batteries",
    manufacturer: "CBAK",
    model: "40135FS 20Ah LiFePO4 3.2V A-Grade",
    slug: "nkon-cbak-40135fs-20ah-60a-lifepo4-3-2v-a-grade",
    summary:
      "CBAK 40135FS cylindrical LiFePO4 cell from NKON with 20 Ah capacity, 3.2 V nominal voltage, and 60 A discharge rating.",
    summaryUk:
      "CBAK 40135FS cylindrical LiFePO4 cell from NKON with 20 Ah capacity, 3.2 V nominal voltage, and 60 A discharge rating.",
    imagePath:
      "https://media.vladyka.dev/battery/cbak/38c3d7a80066019d79560b6afe756126.webp",
    priceCents: 587,
    nominalVoltageV: 3,
    capacityWh: 64,
    chemistry: "LiFePO4",
    weightGrams: 403,
    lifecycleCycles: 3500,
    sourceLabel: "NKON product page",
    sourceLabelUk: "NKON product page",
    sourceUrl:
      "https://www.nkon.nl/novat/cbak-40135fs-20ah-10a-lifepo4-3-2v-a-grade.html",
    specifications: {
      sourceFetchedAt: "2026-07-01",
      eanGtin: "6097323782700",
      grade: "A",
      model: "40135FS",
      cellFormat: "Cylindrical",
      nominalVoltageV: 3.2,
      capacityAh: 20,
      minimumCapacityAh: 19.5,
      dischargeCurrentA: 60,
      terminalType: "Flat top",
      heightMm: 135,
      diameterMm: 40.5,
      thicknessMm: 40.5,
      weightGramsDetailed: 403,
      standardCycles: 3500,
      fastChargeCycles: 2800,
      priceEur: 5.15,
      stockStatus: "In stock",
      shippingCostToUkraineEur: 5,
      additionalImages: [],
      sourceProductUrl:
        "https://www.nkon.nl/novat/cbak-40135fs-20ah-10a-lifepo4-3-2v-a-grade.html",
    },
  },
];
