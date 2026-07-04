export type EveBatterySeedRow = {
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

export const eveBatteryRows: EveBatterySeedRow[] = [
  {
    categorySlug: "batteries",
    manufacturer: "EVE",
    model: "MB56 628Ah LiFePO4 3.2V Single Stud Grade A-",
    slug: "nkon-eve-mb56-prismatic-628ah-lifepo4-3-2v-grade-a-single-stud",
    summary:
      "EVE MB56 prismatic LiFePO4 cell from NKON with 628 Ah capacity, 3.2 V nominal voltage, busbars, and M8 single-stud terminals.",
    summaryUk:
      "EVE MB56 prismatic LiFePO4 cell from NKON with 628 Ah capacity, 3.2 V nominal voltage, busbars, and M8 single-stud terminals.",
    imagePath:
      "https://media.vladyka.dev/battery/eve/45e9394acbba206061295b902490046b.webp",
    priceCents: 10995,
    nominalVoltageV: 3,
    capacityWh: 2010,
    chemistry: "LiFePO4",
    weightGrams: 11500,
    lifecycleCycles: 8000,
    sourceLabel: "NKON product page",
    sourceLabelUk: "NKON product page",
    sourceUrl:
      "https://www.nkon.nl/novat/eve-mb56-prismatic-628ah-lifepo4-3-2v-grade-a-single-stud.html",
    specifications: {
      sourceFetchedAt: "2026-07-01",
      eanGtin: "6097335184127",
      grade: "A-",
      model: "MB56",
      cellFormat: "Prismatic",
      nominalVoltageV: 3.2,
      capacityAh: 628,
      minimumBatchCapacityAh: 680,
      dischargeCurrentA: 314,
      maximumDischargeRate: "0.5P",
      included: "Busbars",
      terminalType: "M8",
      heightMm: 205.1,
      widthMm: 352.3,
      thicknessMm: 71.7,
      recommendedCompressionN: "3000-7000",
      cycleLifeTo70Percent: 8000,
      priceEur: 109.95,
      stockStatus: "Out of stock",
      additionalImages: [
        "https://www.nkon.nl/media/catalog/product/cache/571f095c3039c972605f32eb058cc7dc/w/h/whatsapp_image_2025-09-03_at_10.11.57_1.jpeg",
        "https://www.nkon.nl/media/catalog/product/cache/571f095c3039c972605f32eb058cc7dc/t/h/thumbnail_mb56_2__1.jpg",
        "https://www.nkon.nl/media/catalog/product/cache/571f095c3039c972605f32eb058cc7dc/t/h/thumbnail_whatsapp_image_2025-09-03_at_08.41.34.jpg",
        "https://www.nkon.nl/media/catalog/product/cache/571f095c3039c972605f32eb058cc7dc/_/_/__20260309191416.jpg",
        "https://www.nkon.nl/media/catalog/product/cache/571f095c3039c972605f32eb058cc7dc/_/_/__20260309191357.jpg",
        "https://www.nkon.nl/media/catalog/product/cache/571f095c3039c972605f32eb058cc7dc/_/_/__20260309191429.jpg",
        "https://www.nkon.nl/media/catalog/product/cache/571f095c3039c972605f32eb058cc7dc/_/_/__20260309191337.jpg",
        "https://www.nkon.nl/media/catalog/product/cache/571f095c3039c972605f32eb058cc7dc/_/_/__20260309191420.jpg",
        "https://www.nkon.nl/media/catalog/product/cache/571f095c3039c972605f32eb058cc7dc/_/_/__20260309191532.jpg",
        "https://www.nkon.nl/media/catalog/product/cache/571f095c3039c972605f32eb058cc7dc/_/_/__20260309191433.jpg",
        "https://www.nkon.nl/media/catalog/product/cache/571f095c3039c972605f32eb058cc7dc/_/_/__20260309191514.jpg",
        "https://www.nkon.nl/media/catalog/product/cache/571f095c3039c972605f32eb058cc7dc/_/_/__20260309191818.jpg",
        "https://www.nkon.nl/media/catalog/product/cache/571f095c3039c972605f32eb058cc7dc/_/_/__20260309191332.jpg",
        "https://www.nkon.nl/media/catalog/product/cache/571f095c3039c972605f32eb058cc7dc/_/_/__20260309191816.jpg",
        "https://www.nkon.nl/media/catalog/product/cache/571f095c3039c972605f32eb058cc7dc/_/_/__20260309191538.jpg",
        "https://www.nkon.nl/media/catalog/product/cache/571f095c3039c972605f32eb058cc7dc/_/_/__20260309191347.jpg",
      ],
      sourceProductUrl:
        "https://www.nkon.nl/novat/eve-mb56-prismatic-628ah-lifepo4-3-2v-grade-a-single-stud.html",
    },
  },
  {
    categorySlug: "batteries",
    manufacturer: "EVE",
    model: "MB31 314Ah LiFePO4 3.2V Grade A",
    slug: "nkon-eve-mb31-prismatic-314ah-lifepo4-3-2v-a-grade",
    summary:
      "EVE MB31 prismatic LiFePO4 cell from NKON with 314 Ah capacity, 3.2 V nominal voltage, optional busbars, and M6 terminals.",
    summaryUk:
      "EVE MB31 prismatic LiFePO4 cell from NKON with 314 Ah capacity, 3.2 V nominal voltage, optional busbars, and M6 terminals.",
    imagePath:
      "https://media.vladyka.dev/battery/eve/32242ee4f15a498d1324193735a52685.webp",
    priceCents: 6999,
    nominalVoltageV: 3,
    capacityWh: 1005,
    chemistry: "LiFePO4",
    weightGrams: 5600,
    lifecycleCycles: 8000,
    sourceLabel: "NKON product page",
    sourceLabelUk: "NKON product page",
    sourceUrl:
      "https://www.nkon.nl/novat/eve-mb31-prismatic-314ah-lifepo4-3-2v-a-grade.html",
    specifications: {
      sourceFetchedAt: "2026-07-01",
      eanGtin: "6097319094022",
      grade: "A",
      model: "MB31",
      cellFormat: "Prismatic",
      nominalVoltageV: 3.2,
      capacityAh: 314,
      dischargeCurrentA: 157,
      maximumDischargeRate: "0.5P",
      included: "Optional flexible busbars",
      terminalType: "M6",
      heightMm: 207.2,
      widthMm: 173.7,
      thicknessMm: 71.7,
      studAdditionalHeightMm: 13,
      recommendedCompressionN: "3000-7000",
      cycleLifeTo70Percent: 8000,
      priceEur: 69.99,
      stockStatus: "In stock",
      additionalImages: [
        "https://www.nkon.nl/media/catalog/product/cache/571f095c3039c972605f32eb058cc7dc/i/m/image_template_nkon333_0061_layer_166_1.jpg",
        "https://www.nkon.nl/media/catalog/product/cache/571f095c3039c972605f32eb058cc7dc/i/m/image_template_nkon333_0060_layer_167.jpg",
        "https://www.nkon.nl/media/catalog/product/cache/571f095c3039c972605f32eb058cc7dc/i/m/image_template_nkon333_0059_layer_168.jpg",
      ],
      sourceProductUrl:
        "https://www.nkon.nl/novat/eve-mb31-prismatic-314ah-lifepo4-3-2v-a-grade.html",
    },
  },
  {
    categorySlug: "batteries",
    manufacturer: "EVE",
    model: "LF304 304Ah LiFePO4 3.2V A-Grade",
    slug: "nkon-eve-lf304-prismatic-304ah-lifepo4-3-2v-a-grade-stock",
    summary:
      "EVE LF304 prismatic LiFePO4 cell from NKON with 304 Ah capacity, 3.2 V nominal voltage, flexible busbars, and M6 terminals.",
    summaryUk:
      "EVE LF304 prismatic LiFePO4 cell from NKON with 304 Ah capacity, 3.2 V nominal voltage, flexible busbars, and M6 terminals.",
    imagePath:
      "https://media.vladyka.dev/battery/eve/ddca0d2c79472bf84f0808ed0826b0e1.webp",
    priceCents: 7950,
    nominalVoltageV: 3,
    capacityWh: 973,
    chemistry: "LiFePO4",
    weightGrams: 5490,
    lifecycleCycles: 4000,
    sourceLabel: "NKON product page",
    sourceLabelUk: "NKON product page",
    sourceUrl:
      "https://www.nkon.nl/novat/eve-lf304-prismatic-304ah-lifepo4-3-2v-a-grade-stock.html",
    specifications: {
      sourceFetchedAt: "2026-07-01",
      eanGtin: "6097324151123",
      grade: "A",
      model: "LF304",
      cellFormat: "Prismatic",
      nominalVoltageV: 3.2,
      capacityAh: 304,
      dischargeCurrentA: 304,
      maximumDischargeRate: "1C",
      included: "Busbars",
      terminalType: "M6",
      heightMm: 208.8,
      widthMm: 173.5,
      thicknessMm: 72,
      studHeightMm: 13,
      compressionKg: "280-320",
      cycleLifeTo80Percent: 4000,
      priceEur: 79.5,
      stockStatus: "In stock",
      additionalImages: [
        "https://www.nkon.nl/media/catalog/product/cache/571f095c3039c972605f32eb058cc7dc/e/v/eve_lf304_-_3_5.jpg",
        "https://www.nkon.nl/media/catalog/product/cache/571f095c3039c972605f32eb058cc7dc/e/v/eve_lf304_5.jpg",
        "https://www.nkon.nl/media/catalog/product/cache/571f095c3039c972605f32eb058cc7dc/1/_/1_10_19_2.png",
        "https://www.nkon.nl/media/catalog/product/cache/571f095c3039c972605f32eb058cc7dc/e/v/eve_lf304_-_2_5.jpg",
        "https://www.nkon.nl/media/catalog/product/cache/571f095c3039c972605f32eb058cc7dc/m/i/microsoftteams-image_67__1_1_4.png",
      ],
      sourceProductUrl:
        "https://www.nkon.nl/novat/eve-lf304-prismatic-304ah-lifepo4-3-2v-a-grade-stock.html",
    },
  },
  {
    categorySlug: "batteries",
    manufacturer: "EVE",
    model: "MB31 314Ah LiFePO4 3.2V Single Stud Grade A",
    slug: "nkon-eve-mb31-prismatic-314ah-lifepo4-3-2v-single-stud-grade-a",
    summary:
      "EVE MB31 prismatic LiFePO4 cell from NKON with 314 Ah capacity, 3.2 V nominal voltage, busbars, and M6 single-stud terminals.",
    summaryUk:
      "EVE MB31 prismatic LiFePO4 cell from NKON with 314 Ah capacity, 3.2 V nominal voltage, busbars, and M6 single-stud terminals.",
    imagePath:
      "https://media.vladyka.dev/battery/eve/1e635c80fe87612b1e7d11347a84f5aa.webp",
    priceCents: 6395,
    nominalVoltageV: 3,
    capacityWh: 1005,
    chemistry: "LiFePO4",
    weightGrams: 5600,
    lifecycleCycles: 8000,
    sourceLabel: "NKON product page",
    sourceLabelUk: "NKON product page",
    sourceUrl:
      "https://www.nkon.nl/novat/eve-mb31-prismatic-314ah-lifepo4-3-2v-single-stud-grade-a.html",
    specifications: {
      sourceFetchedAt: "2026-07-01",
      eanGtin: "6097339767722",
      grade: "A",
      model: "MB31",
      cellFormat: "Prismatic",
      nominalVoltageV: 3.2,
      capacityAh: 314,
      dischargeCurrentA: 157,
      maximumDischargeRate: "0.5P",
      included: "Busbars",
      terminalType: "M6",
      heightMm: 207.2,
      widthMm: 173.7,
      thicknessMm: 71.7,
      heightWithStudsBusbarsAndNutsMm: 225,
      yearOfProduction: "05-2025",
      recommendedCompressionN: "3000-7000",
      cycleLifeTo70Percent: 8000,
      priceEur: 63.95,
      stockStatus: "Available for preorder",
      expectedAvailabilityDate: "2026-07-24",
      additionalImages: [
        "https://www.nkon.nl/media/catalog/product/cache/571f095c3039c972605f32eb058cc7dc/i/m/image_template_nkon333_0073_layer_154.jpg",
        "https://www.nkon.nl/media/catalog/product/cache/571f095c3039c972605f32eb058cc7dc/i/m/image_template_nkon333_0072_layer_155.jpg",
        "https://www.nkon.nl/media/catalog/product/cache/571f095c3039c972605f32eb058cc7dc/i/m/image_template_nkon333_0071_layer_156.jpg",
      ],
      sourceProductUrl:
        "https://www.nkon.nl/novat/eve-mb31-prismatic-314ah-lifepo4-3-2v-single-stud-grade-a.html",
    },
  },
  {
    categorySlug: "batteries",
    manufacturer: "EVE",
    model: "LF334 334Ah LiFePO4 3.2V Single Stud Grade A-",
    slug: "nkon-eve-lf334-334ah-lifepo4-3-2v-single-stud-grade-a",
    summary:
      "EVE LF334 prismatic LiFePO4 cell from NKON with 334 Ah capacity, 3.2 V nominal voltage, busbars, and M6 single-stud terminals.",
    summaryUk:
      "EVE LF334 prismatic LiFePO4 cell from NKON with 334 Ah capacity, 3.2 V nominal voltage, busbars, and M6 single-stud terminals.",
    imagePath:
      "https://media.vladyka.dev/battery/eve/a8a2160177dc5cb59631a02ea960b110.webp",
    priceCents: 6220,
    nominalVoltageV: 3,
    capacityWh: 1069,
    chemistry: "LiFePO4",
    weightGrams: 5520,
    lifecycleCycles: 4000,
    sourceLabel: "NKON product page",
    sourceLabelUk: "NKON product page",
    sourceUrl:
      "https://www.nkon.nl/novat/eve-lf334-334ah-lifepo4-3-2v-single-stud-grade-a.html",
    specifications: {
      sourceFetchedAt: "2026-07-01",
      eanGtin: "6097348626638",
      grade: "A-",
      model: "LF334",
      cellFormat: "Prismatic",
      nominalVoltageV: 3.2,
      capacityAh: 334,
      minimumBatchCapacityAh: 336,
      averageBatchCapacityAh: 348,
      dischargeCurrentA: 334,
      maximumDischargeRate: "3C",
      included: "Busbars",
      terminalType: "M6",
      heightMm: 207,
      widthMm: 174,
      thicknessMm: 71.7,
      internalResistanceMOhm: "0.16-0.1865",
      cycleLifeTo80Percent: 4000,
      priceEur: 62.2,
      stockStatus: "Available for preorder",
      expectedAvailabilityDate: "2026-06-27",
      additionalImages: [
        "https://www.nkon.nl/media/catalog/product/cache/571f095c3039c972605f32eb058cc7dc/l/f/lf334_5_.jpg",
        "https://www.nkon.nl/media/catalog/product/cache/571f095c3039c972605f32eb058cc7dc/l/f/lf334_5_.jpg",
        "https://www.nkon.nl/media/catalog/product/cache/571f095c3039c972605f32eb058cc7dc/l/f/lf334_2__1.jpg",
        "https://www.nkon.nl/media/catalog/product/cache/571f095c3039c972605f32eb058cc7dc/k/n/knipsel.jpeg",
      ],
      sourceProductUrl:
        "https://www.nkon.nl/novat/eve-lf334-334ah-lifepo4-3-2v-single-stud-grade-a.html",
    },
  },
  {
    categorySlug: "batteries",
    manufacturer: "EVE",
    model: "LF280K v3 280Ah LiFePO4 3.2V Single Stud Grade A",
    slug: "nkon-eve-lf280-prismatic-280ah-280a-lifepo4-threaded",
    summary:
      "EVE LF280K v3 prismatic LiFePO4 cell from NKON with 280 Ah capacity, 3.2 V nominal voltage, busbars, and M6 single-stud terminals.",
    summaryUk:
      "EVE LF280K v3 prismatic LiFePO4 cell from NKON with 280 Ah capacity, 3.2 V nominal voltage, busbars, and M6 single-stud terminals.",
    imagePath:
      "https://media.vladyka.dev/battery/eve/d424fa9fd9a7084eae961e6e11b2acf5.webp",
    priceCents: 6099,
    nominalVoltageV: 3,
    capacityWh: 896,
    chemistry: "LiFePO4",
    weightGrams: 5450,
    lifecycleCycles: 8000,
    sourceLabel: "NKON product page",
    sourceLabelUk: "NKON product page",
    sourceUrl:
      "https://www.nkon.nl/novat/eve-lf280-prismatic-280ah-280a-lifepo4-threaded.html",
    specifications: {
      sourceFetchedAt: "2026-07-01",
      eanGtin: "6097334212210",
      grade: "A",
      model: "LF280K",
      modelVersion: "v3",
      cellFormat: "Prismatic",
      nominalVoltageV: 3.2,
      capacityAh: 280,
      dischargeCurrentA: 280,
      maximumDischargeRate: "1C",
      included: "Busbars",
      terminalType: "M6",
      heightMm: 207.5,
      widthMm: 173.7,
      thicknessMm: 72,
      heightWithStudsBusbarsAndNutsMm: 225,
      compressionKg: "280-320",
      cycleLifeTo80Percent: 8000,
      priceEur: 60.99,
      stockStatus: "Out of stock",
      additionalImages: [
        "https://www.nkon.nl/media/catalog/product/cache/571f095c3039c972605f32eb058cc7dc/i/m/image_template_nkon333_0052_layer_175.jpg",
        "https://www.nkon.nl/media/catalog/product/cache/571f095c3039c972605f32eb058cc7dc/i/m/image_template_nkon333_0051_layer_176.jpg",
        "https://www.nkon.nl/media/catalog/product/cache/571f095c3039c972605f32eb058cc7dc/i/m/image_template_nkon333_0050_layer_177.jpg",
      ],
      sourceProductUrl:
        "https://www.nkon.nl/novat/eve-lf280-prismatic-280ah-280a-lifepo4-threaded.html",
    },
  },
  {
    categorySlug: "batteries",
    manufacturer: "EVE",
    model: "LF230 230Ah LiFePO4 3.2V Grade A",
    slug: "nkon-eve-lf230-prismatic-230ah-230a-lifepo4",
    summary:
      "EVE LF230 prismatic LiFePO4 cell from NKON with 230 Ah capacity, 3.2 V nominal voltage, busbars, and M6 terminals.",
    summaryUk:
      "EVE LF230 prismatic LiFePO4 cell from NKON with 230 Ah capacity, 3.2 V nominal voltage, busbars, and M6 terminals.",
    imagePath:
      "https://media.vladyka.dev/battery/eve/24f566d7cf4a9178f90df4e00a95ad63.webp",
    priceCents: 5700,
    nominalVoltageV: 3,
    capacityWh: 736,
    chemistry: "LiFePO4",
    weightGrams: 4110,
    lifecycleCycles: 4000,
    sourceLabel: "NKON product page",
    sourceLabelUk: "NKON product page",
    sourceUrl:
      "https://www.nkon.nl/novat/eve-lf230-prismatic-230ah-230a-lifepo4.html",
    specifications: {
      sourceFetchedAt: "2026-07-01",
      eanGtin: "7417940529462",
      grade: "A",
      model: "LF230",
      cellFormat: "Prismatic",
      nominalVoltageV: 3.2,
      capacityAh: 230,
      dischargeCurrentA: 230,
      maximumDischargeRate: "1C",
      included: "Busbars and screws",
      terminalType: "M6",
      heightMm: 205,
      widthMm: 174,
      thicknessMm: 54,
      dimensionsWithoutTerminalMm: "207 x 173 x 54",
      compressionKg: "280-320",
      cycleLifeTo80Percent: 4000,
      priceEur: 57,
      stockStatus: "Out of stock",
      additionalImages: [
        "https://www.nkon.nl/media/catalog/product/cache/571f095c3039c972605f32eb058cc7dc/i/m/image_template_nkon3336_0012_layer_60.jpg",
        "https://www.nkon.nl/media/catalog/product/cache/571f095c3039c972605f32eb058cc7dc/i/m/image_template_nkon3336_0013_layer_59.jpg",
        "https://www.nkon.nl/media/catalog/product/cache/571f095c3039c972605f32eb058cc7dc/1/_/1_20_56.jpg",
        "https://www.nkon.nl/media/catalog/product/cache/571f095c3039c972605f32eb058cc7dc/i/m/image_template_nkon3336_0014_layer_58.jpg",
        "https://www.nkon.nl/media/catalog/product/cache/571f095c3039c972605f32eb058cc7dc/i/m/image_template_nkon3336_0015_layer_57.jpg",
      ],
      sourceProductUrl:
        "https://www.nkon.nl/novat/eve-lf230-prismatic-230ah-230a-lifepo4.html",
    },
  },
  {
    categorySlug: "batteries",
    manufacturer: "EVE",
    model: "LF105 105Ah LiFePO4 3.2V A-Grade",
    slug: "nkon-eve-lf105-prismatic-105ah-105a-lifepo4-a-grade",
    summary:
      "EVE LF105 prismatic LiFePO4 cell from NKON with 105 Ah capacity, 3.2 V nominal voltage, busbars, and M4 terminals.",
    summaryUk:
      "EVE LF105 prismatic LiFePO4 cell from NKON with 105 Ah capacity, 3.2 V nominal voltage, busbars, and M4 terminals.",
    imagePath:
      "https://media.vladyka.dev/battery/eve/d5319dee0b2476f3c927e3ce32c08334.webp",
    priceCents: 3195,
    nominalVoltageV: 3,
    capacityWh: 336,
    chemistry: "LiFePO4",
    weightGrams: 1980,
    lifecycleCycles: 3500,
    sourceLabel: "NKON product page",
    sourceLabelUk: "NKON product page",
    sourceUrl:
      "https://www.nkon.nl/novat/eve-lf105-prismatic-105ah-105a-lifepo4-a-grade.html",
    specifications: {
      sourceFetchedAt: "2026-07-01",
      eanGtin: "7417940528250",
      grade: "A",
      model: "LF105",
      cellFormat: "Prismatic",
      nominalVoltageV: 3.2,
      capacityAh: 105,
      dischargeCurrentA: 105,
      maximumDischargeRate: "1C",
      included: "Busbars and bolts",
      terminalType: "M4",
      heightMm: 200.5,
      widthMm: 130.3,
      thicknessMm: 36.7,
      compressionKg: 300,
      cycleLifeTo80Percent: 3500,
      priceEur: 31.95,
      stockStatus: "In stock",
      additionalImages: [
        "https://www.nkon.nl/media/catalog/product/cache/571f095c3039c972605f32eb058cc7dc/i/m/image_template_nkon3336_0021_layer_51.jpg",
        "https://www.nkon.nl/media/catalog/product/cache/571f095c3039c972605f32eb058cc7dc/i/m/image_template_nkon3336_0022_layer_50.jpg",
        "https://www.nkon.nl/media/catalog/product/cache/571f095c3039c972605f32eb058cc7dc/i/m/image_template_nkon3336_0023_layer_49.jpg",
        "https://www.nkon.nl/media/catalog/product/cache/571f095c3039c972605f32eb058cc7dc/i/m/image_template_nkon3336_0023_layer_49.jpg",
        "https://www.nkon.nl/media/catalog/product/cache/571f095c3039c972605f32eb058cc7dc/i/m/image_template_nkon3336_0020_layer_52.jpg",
      ],
      sourceProductUrl:
        "https://www.nkon.nl/novat/eve-lf105-prismatic-105ah-105a-lifepo4-a-grade.html",
    },
  },
  {
    categorySlug: "batteries",
    manufacturer: "EVE",
    model: "LF50K 50Ah LiFePO4 3.2V Grade A",
    slug: "nkon-eve-lf50k-prismatic-50ah-50a-lifepo4-1",
    summary:
      "EVE LF50K prismatic LiFePO4 cell from NKON with 50 Ah capacity, 3.2 V nominal voltage, and M6 terminals.",
    summaryUk:
      "EVE LF50K prismatic LiFePO4 cell from NKON with 50 Ah capacity, 3.2 V nominal voltage, and M6 terminals.",
    imagePath:
      "https://media.vladyka.dev/battery/eve/04ef4cba5fd63207a44ff02fc03c1238.webp",
    priceCents: 1275,
    nominalVoltageV: 3,
    capacityWh: 160,
    chemistry: "LiFePO4",
    weightGrams: 1395,
    lifecycleCycles: 7000,
    sourceLabel: "NKON product page",
    sourceLabelUk: "NKON product page",
    sourceUrl:
      "https://www.nkon.nl/novat/eve-lf50k-prismatic-50ah-50a-lifepo4-1.html",
    specifications: {
      sourceFetchedAt: "2026-07-01",
      eanGtin: "7417940528267",
      grade: "A",
      model: "LF50K",
      cellFormat: "Prismatic",
      nominalVoltageV: 3.2,
      capacityAh: 50,
      dischargeCurrentA: 50,
      maximumDischargeRate: "3C",
      maxDischargeCurrentA: 150,
      included: "No busbars or bolts",
      terminalType: "M6",
      heightMm: 185.3,
      widthMm: 135.3,
      thicknessMm: 29.7,
      dimensionsMm: "135 x 29.3 x 185",
      yearOfProduction: 2020,
      estimatedRemainingCapacityPercent: 98.5,
      compressionKg: 300,
      cycleLifeTo80Percent: 7000,
      priceEur: 12.75,
      stockStatus: "In stock",
      additionalImages: [
        "https://www.nkon.nl/media/catalog/product/cache/571f095c3039c972605f32eb058cc7dc/l/f/lf50k_ef5c06846a4e63319fc6908416858bc_1_2_1.jpg",
        "https://www.nkon.nl/media/catalog/product/cache/571f095c3039c972605f32eb058cc7dc/i/m/image_template_nkon27_0049_layer_39_1_1.jpg",
      ],
      sourceProductUrl:
        "https://www.nkon.nl/novat/eve-lf50k-prismatic-50ah-50a-lifepo4-1.html",
    },
  },
];
