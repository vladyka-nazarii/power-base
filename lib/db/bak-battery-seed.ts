export type BakBatterySeedRow = {
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

export const bakBatteryRows: BakBatterySeedRow[] = [
  {
    categorySlug: "batteries",
    manufacturer: "BAK",
    model: "BAKCBBL150 152Ah LiFePO4 3.2V Grade A",
    slug: "nkon-bak-bakcbbl150-prismatic-152ah-lifepo4-3-2v-a-grade",
    summary:
      "BAK BAKCBBL150 prismatic LiFePO4 cell from NKON with 152 Ah capacity, 3.2 V nominal voltage, busbars, and M6 terminals.",
    summaryUk:
      "BAK BAKCBBL150 prismatic LiFePO4 cell from NKON with 152 Ah capacity, 3.2 V nominal voltage, busbars, and M6 terminals.",
    imagePath:
      "https://media.vladyka.dev/battery/bak/eb9aca18c732d003235c4788e994f6e0.webp",
    priceCents: 3300,
    nominalVoltageV: 3,
    capacityWh: 486,
    chemistry: "LiFePO4",
    weightGrams: 3050,
    maxChargeCurrentA: 225,
    lifecycleCycles: 3000,
    sourceLabel: "NKON product page",
    sourceLabelUk: "NKON product page",
    sourceUrl:
      "https://www.nkon.nl/novat/bak-bakcbbl150-prismatic-152ah-lifepo4-3-2v-a-grade.html",
    specifications: {
      sourceFetchedAt: "2026-07-01",
      eanGtin: "6097328954935",
      grade: "A",
      model: "ZA10",
      sourceModel: "BAKCBBL150",
      cellFormat: "Prismatic",
      nominalVoltageV: 3.2,
      capacityAh: 152,
      maxChargeCurrentA: 225,
      continuousDischargeCurrentA: 300,
      listedDischargeCurrentA: 225,
      included: "Busbars",
      terminalType: "M6",
      heightMm: 117.26,
      widthMm: 220.44,
      thicknessMm: 60.4,
      compressionKg: "200-300",
      cycleLifeTo80Percent: 3000,
      priceEur: 33,
      stockStatus: "Available for preorder",
      expectedAvailabilityDate: "2026-06-18",
      additionalImages: [
        "https://www.nkon.nl/media/catalog/product/cache/571f095c3039c972605f32eb058cc7dc/i/m/image_template_nkon333_0069_layer_158.jpg",
        "https://www.nkon.nl/media/catalog/product/cache/571f095c3039c972605f32eb058cc7dc/i/m/image_template_nkon333_0068_layer_159.jpg",
      ],
      sourceProductUrl:
        "https://www.nkon.nl/novat/bak-bakcbbl150-prismatic-152ah-lifepo4-3-2v-a-grade.html",
    },
  },
];
