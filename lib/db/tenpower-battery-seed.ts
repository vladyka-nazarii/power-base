export type TenpowerBatterySeedRow = {
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

export const tenpowerBatteryRows: TenpowerBatterySeedRow[] = [
  {
    categorySlug: "batteries",
    manufacturer: "Tenpower",
    model: "IFR26700-45HE 4500mAh LiFePO4 3.2V",
    slug: "nkon-tenpower-ifr26700-45he-4500mah-9a-lifepo4-3-2v",
    summary:
      "Tenpower IFR26700-45HE cylindrical LiFePO4 cell from NKON with 4.5 Ah typical capacity, 3.2 V nominal voltage, and 9 A discharge rating.",
    summaryUk:
      "Tenpower IFR26700-45HE cylindrical LiFePO4 cell from NKON with 4.5 Ah typical capacity, 3.2 V nominal voltage, and 9 A discharge rating.",
    imagePath:
      "https://media.vladyka.dev/battery/tenpower/2f94041631123f55354dab5d445ecf57.webp",
    priceCents: 175,
    nominalVoltageV: 3,
    capacityWh: 14,
    chemistry: "LiFePO4",
    weightGrams: 98,
    sourceLabel: "NKON product page",
    sourceLabelUk: "NKON product page",
    sourceUrl:
      "https://www.nkon.nl/novat/tenpower-ifr26700-45he-4500mah-9a.html",
    specifications: {
      sourceFetchedAt: "2026-07-01",
      eanGtin: "6097321571573",
      model: "IFR26700-45HE",
      size: "26700",
      cellFormat: "Cylindrical",
      nominalVoltageV: 3.2,
      typicalCapacityMah: 4500,
      minimumCapacityMah: 4450,
      capacityAh: 4.5,
      dischargeCurrentA: 9,
      terminalType: "Flat top",
      circuitProtection: "Unprotected",
      internalResistanceMOhm: "<=20",
      chargeTemperatureRangeC: "0 to 55",
      dischargeTemperatureRangeC: "-20 to 60",
      heightMm: 71.2,
      diameterMm: 26.6,
      priceEur: 1.75,
      stockStatus: "In stock",
      additionalImages: [
        "https://www.nkon.nl/media/catalog/product/cache/571f095c3039c972605f32eb058cc7dc/i/m/image_template_nkon333_0226_layer_1.jpg",
        "https://www.nkon.nl/media/catalog/product/cache/571f095c3039c972605f32eb058cc7dc/i/m/image_template_nkon333_0225_layer_2.jpg",
      ],
      sourceProductUrl:
        "https://www.nkon.nl/novat/tenpower-ifr26700-45he-4500mah-9a.html",
    },
  },
];
