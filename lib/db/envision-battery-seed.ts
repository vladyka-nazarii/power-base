export type EnvisionBatterySeedRow = {
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

export const envisionBatteryRows: EnvisionBatterySeedRow[] = [
  {
    categorySlug: "batteries",
    manufacturer: "Envision AESC",
    model: "4LH3L7 280Ah LiFePO4 3.2V Grade A",
    slug: "nkon-envision-ess-4lh3l7-280ah-lifepo4-3-2v-a-grade",
    summary:
      "Envision AESC 4LH3L7 prismatic LiFePO4 cell from NKON with 280 Ah capacity, 3.2 V nominal voltage, busbars, and M6 terminals.",
    summaryUk:
      "Envision AESC 4LH3L7 prismatic LiFePO4 cell from NKON with 280 Ah capacity, 3.2 V nominal voltage, busbars, and M6 terminals.",
    imagePath:
      "https://media.vladyka.dev/battery/envision/6c048a24f7b000f1c23d7c67ccc696e9.webp",
    priceCents: 4695,
    nominalVoltageV: 3,
    capacityWh: 896,
    chemistry: "LiFePO4",
    weightGrams: 5450,
    lifecycleCycles: 6000,
    sourceLabel: "NKON product page",
    sourceLabelUk: "NKON product page",
    sourceUrl:
      "https://www.nkon.nl/novat/envision-ess-4lh3l7-280ah-lifepo4-3-2v-a-grade.html",
    specifications: {
      sourceFetchedAt: "2026-07-01",
      eanGtin: "6097319560510",
      grade: "A",
      model: "ESS 72173207",
      alternateModel: "ESS 4LH3L7",
      cellFormat: "Prismatic",
      nominalVoltageV: 3.2,
      capacityAh: 280,
      minimumBatchCapacityAh: 290,
      dischargeCurrentA: 280,
      included: "Busbars",
      terminalType: "M6",
      heightMm: 207,
      widthMm: 173,
      thicknessMm: 71,
      yearOfProduction: 2023,
      protection: "None",
      cycleLifeTo70Percent: 6000,
      priceEur: 46.95,
      stockStatus: "Out of stock",
      additionalImages: [
        "https://www.nkon.nl/media/catalog/product/cache/571f095c3039c972605f32eb058cc7dc/e/n/envision_ess_72173207_1_1.jpg",
        "https://www.nkon.nl/media/catalog/product/cache/571f095c3039c972605f32eb058cc7dc/e/n/envision_ess_72173207_-_3_1_1.jpg",
        "https://www.nkon.nl/media/catalog/product/cache/571f095c3039c972605f32eb058cc7dc/e/n/envision_ess_72173207_-2_1_1.jpg",
        "https://www.nkon.nl/media/catalog/product/cache/571f095c3039c972605f32eb058cc7dc/e/n/envision_ess_72173207_-_4_1_1.jpg",
      ],
      sourceProductUrl:
        "https://www.nkon.nl/novat/envision-ess-4lh3l7-280ah-lifepo4-3-2v-a-grade.html",
    },
  },
];
