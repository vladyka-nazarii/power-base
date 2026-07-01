export type BluettiPowerStationSeedRow = {
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

const bluettiPremium100V2Images = [
  "https://cdn.shopify.com/s/files/1/0566/6396/5893/files/Premium100V2EU_1_1x_91ded14c-e2dd-4337-b2f6-7b781a674978.webp?v=1776741986",
  "https://cdn.shopify.com/s/files/1/0566/6396/5893/files/Premium100V2EU_1x_2c613d34-f8d8-436b-9746-6407a094add4.webp?v=1776741986",
  "https://cdn.shopify.com/s/files/1/0566/6396/5893/files/Premium100V2EU_1x_2ae6189e-24d3-4693-a7c8-24a3f8deb291.webp?v=1776741986",
  "https://cdn.shopify.com/s/files/1/0566/6396/5893/files/Premium100V2EU_1x_cbabb856-746b-43c5-9b00-fe65a542b535.webp?v=1776741986",
  "https://cdn.shopify.com/s/files/1/0566/6396/5893/files/Premium100V2EU_1x_446f43ef-af4f-4a9f-9f82-3a4cc7bf4035.webp?v=1776741942",
  "https://cdn.shopify.com/s/files/1/0566/6396/5893/files/bluetti-premium-100-V2-power-sation-1.webp?v=1777023310",
] as const;

const bluettiPremium200V2Images = [
  "https://cdn.shopify.com/s/files/1/0566/6396/5893/files/Premium200V2EU_6775b9f6-fb9b-4ed1-ab94-d0ab7187242f.png?v=1776323411",
  "https://cdn.shopify.com/s/files/1/0566/6396/5893/files/Premium200V2EU_2.png?v=1776323411",
  "https://cdn.shopify.com/s/files/1/0566/6396/5893/files/Premium200V2EU_3.png?v=1776323411",
  "https://cdn.shopify.com/s/files/1/0566/6396/5893/files/Premium200V2_76961f3a-55e8-445d-99f1-3fbff42f70f1.png?v=1776320195",
  "https://cdn.shopify.com/s/files/1/0566/6396/5893/files/Premium200V2.png?v=1776320195",
  "https://cdn.shopify.com/s/files/1/0566/6396/5893/files/Premium200V2EU_1a3607f0-230b-4319-ae12-b195bd9960bc.png?v=1776320196",
  "https://cdn.shopify.com/s/files/1/0566/6396/5893/files/Premium200V2EU_57a33734-7420-41f9-84fd-4bed22656299.png?v=1776320195",
  "https://cdn.shopify.com/s/files/1/0566/6396/5893/files/Premium200V2EU.png?v=1776320198",
] as const;

const bluettiPremium30V2Images = [
  "https://cdn.shopify.com/s/files/1/0566/6396/5893/files/Premium30V2EU_1c55efa4-306d-48ff-9528-3da62bc1820f.png?v=1776669475",
  "https://cdn.shopify.com/s/files/1/0566/6396/5893/files/Premium30V2EU_c4515443-7e53-49ef-84b1-4325ef8e6a5e.png?v=1776669475",
  "https://cdn.shopify.com/s/files/1/0566/6396/5893/files/Premium30V2EU.png?v=1776669475",
  "https://cdn.shopify.com/s/files/1/0566/6396/5893/files/Premium30V2EU_6c350549-0255-4565-a7c6-fdc3b01a3c57.png?v=1776669475",
  "https://cdn.shopify.com/s/files/1/0566/6396/5893/files/Premium30V2EU_ed18335f-52b8-4593-8410-ff12d2d23ec2.png?v=1776669398",
  "https://cdn.shopify.com/s/files/1/0566/6396/5893/files/Premium30V2EU_f629b299-4bcc-4c33-aa3a-3c3ab27df320.png?v=1776669398",
] as const;

const bluettiAc180PImages = [
  "https://cdn.shopify.com/s/files/1/0566/6396/5893/files/202310025AC180_2000-2000px_-3_e694f5db-6dd0-45a4-b665-25280f760f5d.jpg?v=1705544452",
  "https://cdn.shopify.com/s/files/1/0566/6396/5893/files/AC180P-ZT4.png?v=1705630578",
  "https://cdn.shopify.com/s/files/1/0566/6396/5893/files/AC180P-ZT2.png?v=1705630578",
  "https://cdn.shopify.com/s/files/1/0566/6396/5893/files/AC180P-ZT3.png?v=1705630578",
] as const;

const bluettiAc70PImages = [
  "https://cdn.shopify.com/s/files/1/0566/6396/5893/files/AC70P-ZT1.png?v=1706857422",
  "https://cdn.shopify.com/s/files/1/0566/6396/5893/files/AC70P-ZT2.png?v=1706857422",
  "https://cdn.shopify.com/s/files/1/0566/6396/5893/files/AC70P-ZT3.png?v=1706857422",
  "https://cdn.shopify.com/s/files/1/0566/6396/5893/files/AC70P-ZT4.png?v=1706857423",
  "https://cdn.shopify.com/s/files/1/0566/6396/5893/files/AC70P-ZT5.png?v=1706857423",
  "https://cdn.shopify.com/s/files/1/0566/6396/5893/files/AC70P-ZT6.png?v=1706857423",
] as const;

const bluettiAc50PImages = [
  "https://cdn.shopify.com/s/files/1/0566/6396/5893/files/AC50P-2024-02-13_1.png?v=1739348236",
  "https://cdn.shopify.com/s/files/1/0566/6396/5893/files/AC50P-2024-02-13_6.png?v=1739348236",
  "https://cdn.shopify.com/s/files/1/0566/6396/5893/files/AC50P-2024-02-13_5.png?v=1739348236",
  "https://cdn.shopify.com/s/files/1/0566/6396/5893/files/AC50P-2024-02-13_2.png?v=1739348236",
  "https://cdn.shopify.com/s/files/1/0566/6396/5893/files/AC50P-2024-02-13_3.png?v=1739348236",
  "https://cdn.shopify.com/s/files/1/0566/6396/5893/files/AC50P-2024-02-13_4.png?v=1739348236",
  "https://cdn.shopify.com/s/files/1/0566/6396/5893/files/AC50P-PV100D-2025-02-13.png?v=1739348293",
  "https://cdn.shopify.com/s/files/1/0566/6396/5893/files/AC50P-SP120L-2025-02-13.png?v=1739348314",
  "https://cdn.shopify.com/s/files/1/0566/6396/5893/files/AC50P-MP200-2025-02-13.png?v=1739348338",
] as const;

export const bluettiPowerStationRows: BluettiPowerStationSeedRow[] = [
  {
    categorySlug: "power-stations",
    manufacturer: "Bluetti",
    model: "Premium 200 (AC200PL)",
    slug: "bluetti-premium-200-ac200pl",
    summary:
      "2,304 Wh LiFePO4 portable power station with 2,400 W AC output, Bluetooth app support, USB-A, USB-C, 12 V output, and display.",
    summaryUk:
      "Портативна електростанція Bluetti Premium 200 (AC200PL) з LiFePO4 акумулятором 2 304 Вт·год, потужністю 2 400 Вт, Bluetooth, USB-A, USB-C, 12 В виходом і дисплеєм.",
    imagePath: bluettiPremium200V2Images[0],
    priceCents: 93523,
    productCode: "6970991294754",
    nominalVoltageV: 230,
    capacityWh: 2304,
    continuousPowerW: 2400,
    chemistry: "LiFePO4",
    communicationProtocols: "Bluetooth",
    weightGrams: 28300,
    sourceLabel: "NKON product page",
    sourceLabelUk: "Сторінка товару NKON",
    sourceUrl:
      "https://www.nkon.nl/ua/bluetti-premium-200-ac200pl-2-3kwh-power-station.html",
    specifications: {
      sourceCategoryUrl:
        "https://www.nkon.nl/ua/thuisbatterij/powerstation-plug-in.html?brand=Bluetti",
      productImages: bluettiPremium200V2Images,
      collectionListPosition: 1,
      sourceCurrency: "EUR",
      priceEur: 819.95,
      eurToUsdRate: 1.1406,
      eurToUsdRateDate: "2026-06-29",
      availability: "OutOfStock",
      gtin: "6970991294754",
      capacityAh: 45,
      dischargeCurrentA: 47,
      powerSourceUk: "12V, європейська вилка (220≈230 В)",
      featuresUk: "Bluetooth, USB-A, USB-C, екран",
      ipRating: "IP20",
      descriptionUk:
        "Bluetti Premium 200 (AC200PL) — це надзвичайно потужна та універсальна електростанція з ємністю 2304Wh, ідеально підходить для тривалого автономного використання, великих кемпінгових систем або як повноцінне резервне джерело живлення для дому.",
    },
  },
  {
    categorySlug: "power-stations",
    manufacturer: "Bluetti",
    model: "Premium 30 V2",
    slug: "bluetti-premium-30-v2",
    summary:
      "Compact 320 Wh LiFePO4 power station with 600 W output, Bluetooth, USB-A, USB-C, 12 V output, and display.",
    summaryUk:
      "Компактна портативна електростанція Bluetti Premium 30 V2 з LiFePO4 акумулятором 320 Вт·год, потужністю 600 Вт, Bluetooth, USB-A, USB-C, 12 В виходом і дисплеєм.",
    imagePath: bluettiPremium30V2Images[0],
    priceCents: 18244,
    productCode: "6978341874946",
    nominalVoltageV: 230,
    capacityWh: 320,
    continuousPowerW: 600,
    chemistry: "LiFePO4",
    communicationProtocols: "Bluetooth",
    weightGrams: 4300,
    sourceLabel: "NKON product page",
    sourceLabelUk: "Сторінка товару NKON",
    sourceUrl:
      "https://www.nkon.nl/ua/bluetti-premium-30-v2-0-6kwh-power-station.html",
    specifications: {
      sourceCategoryUrl:
        "https://www.nkon.nl/ua/thuisbatterij/powerstation-plug-in.html?brand=Bluetti",
      productImages: bluettiPremium30V2Images,
      collectionListPosition: 2,
      sourceCurrency: "EUR",
      priceEur: 159.95,
      eurToUsdRate: 1.1406,
      eurToUsdRateDate: "2026-06-29",
      availability: "InStock",
      gtin: "6978341874946",
      capacityAh: 6,
      dischargeCurrentA: 12,
      powerSourceUk: "12V, європейська вилка (220≈230 В)",
      featuresUk: "Bluetooth, USB-A, USB-C, екран",
      ipRating: "IP20",
      descriptionUk:
        "Bluetti Premium 30 V2 — це компактна та портативна електростанція з ємністю 320Wh, ідеально підходить для кемпінгу, подорожей або як резервне джерело живлення вдома.",
    },
  },
  {
    categorySlug: "power-stations",
    manufacturer: "Bluetti",
    model: "Premium 150 (AC180P)",
    slug: "bluetti-premium-150-ac180p",
    summary:
      "1,440 Wh LiFePO4 portable station with 1,800 W continuous output, Bluetooth, USB-A, USB-C, 12 V output, and display.",
    summaryUk:
      "Портативна електростанція Bluetti Premium 150 (AC180P) з LiFePO4 акумулятором 1 440 Вт·год, потужністю 1 800 Вт, Bluetooth, USB-A, USB-C, 12 В виходом і дисплеєм.",
    imagePath: bluettiAc180PImages[0],
    priceCents: 54743,
    productCode: "6970991292668",
    nominalVoltageV: 230,
    capacityWh: 1440,
    continuousPowerW: 1800,
    peakPowerW: 2700,
    chemistry: "LiFePO4",
    communicationProtocols: "Bluetooth",
    weightGrams: 17000,
    lifecycleCycles: 3500,
    sourceLabel: "NKON product page",
    sourceLabelUk: "Сторінка товару NKON",
    sourceUrl:
      "https://www.nkon.nl/ua/bluetti-premium-150-ac180p-1-44kwh-power-station.html",
    specifications: {
      sourceCategoryUrl:
        "https://www.nkon.nl/ua/thuisbatterij/powerstation-plug-in.html?brand=Bluetti",
      productImages: bluettiAc180PImages,
      collectionListPosition: 3,
      sourceCurrency: "EUR",
      priceEur: 479.95,
      eurToUsdRate: 1.1406,
      eurToUsdRateDate: "2026-06-29",
      availability: "OutOfStock",
      gtin: "6970991292668",
      capacityAh: 28,
      dischargeCurrentA: 35,
      powerLiftingW: 2700,
      powerSourceUk: "12V, європейська вилка (220≈230 В)",
      featuresUk: "Bluetooth, USB-A, USB-C, екран",
      ipRating: "IP20",
      descriptionUk:
        "Bluetti Premium 150 (AC180P) — це потужна портативна електростанція з ємністю 1440Wh та постійною потужністю 1800W.",
    },
  },
  {
    categorySlug: "power-stations",
    manufacturer: "Bluetti",
    model: "Premium 100 V2",
    slug: "bluetti-premium-100-v2",
    summary:
      "1,024 Wh LiFePO4 portable station with 2,000 W output, Bluetooth, USB-A, USB-C, 12 V output, and display.",
    summaryUk:
      "Портативна електростанція Bluetti Premium 100 V2 з LiFePO4 акумулятором 1 024 Вт·год, потужністю 2 000 Вт, Bluetooth, USB-A, USB-C, 12 В виходом і дисплеєм.",
    imagePath: bluettiPremium100V2Images[0],
    priceCents: 44478,
    productCode: "6978341871792",
    nominalVoltageV: 230,
    capacityWh: 1024,
    continuousPowerW: 2000,
    chemistry: "LiFePO4",
    communicationProtocols: "Bluetooth",
    weightGrams: 11500,
    sourceLabel: "NKON product page",
    sourceLabelUk: "Сторінка товару NKON",
    sourceUrl:
      "https://www.nkon.nl/ua/bluetti-premium-100-v2-1-02kwh-power-station.html",
    specifications: {
      sourceCategoryUrl:
        "https://www.nkon.nl/ua/thuisbatterij/powerstation-plug-in.html?brand=Bluetti",
      productImages: bluettiPremium100V2Images,
      collectionListPosition: 4,
      sourceCurrency: "EUR",
      priceEur: 389.95,
      eurToUsdRate: 1.1406,
      eurToUsdRateDate: "2026-06-29",
      availability: "InStock",
      gtin: "6978341871792",
      capacityAh: 20,
      dischargeCurrentA: 39,
      powerSourceUk: "12V, європейська вилка (220≈230 В)",
      featuresUk: "Bluetooth, USB-A, USB-C, екран",
      ipRating: "IP20",
      descriptionUk:
        "Bluetti Premium 100 V2 — це потужна та портативна електростанція з ємністю 1024Wh, ідеально підходить для тривалих кемпінгових поїздок, автономного використання або як надійне резервне джерело живлення вдома.",
    },
  },
  {
    categorySlug: "power-stations",
    manufacturer: "Bluetti",
    model: "Premium 80 (AC70P)",
    slug: "bluetti-premium-80-ac70p",
    summary:
      "864 Wh LiFePO4 portable station with 1,000 W output, Bluetooth, USB-A, USB-C, 12 V output, and display.",
    summaryUk:
      "Портативна електростанція Bluetti Premium 80 (AC70P) з LiFePO4 акумулятором 864 Вт·год, потужністю 1 000 Вт, Bluetooth, USB-A, USB-C, 12 В виходом і дисплеєм.",
    imagePath: bluettiAc70PImages[0],
    priceCents: 36493,
    productCode: "6970991294235",
    nominalVoltageV: 230,
    capacityWh: 864,
    continuousPowerW: 1000,
    peakPowerW: 2000,
    chemistry: "LiFePO4",
    communicationProtocols: "Bluetooth",
    weightGrams: 10700,
    lifecycleCycles: 3000,
    sourceLabel: "NKON product page",
    sourceLabelUk: "Сторінка товару NKON",
    sourceUrl:
      "https://www.nkon.nl/ua/bluetti-premium-80-ac70p-0-86kwh-power-station.html",
    specifications: {
      sourceCategoryUrl:
        "https://www.nkon.nl/ua/thuisbatterij/powerstation-plug-in.html?brand=Bluetti",
      productImages: bluettiAc70PImages,
      collectionListPosition: 5,
      sourceCurrency: "EUR",
      priceEur: 319.95,
      eurToUsdRate: 1.1406,
      eurToUsdRateDate: "2026-06-29",
      availability: "InStock",
      gtin: "6970991294235",
      capacityAh: 17,
      dischargeCurrentA: 20,
      powerLiftingW: 2000,
      powerSourceUk: "12V, європейська вилка (220≈230 В)",
      featuresUk: "Bluetooth, USB-A, USB-C, екран",
      ipRating: "IP20",
      descriptionUk:
        "Bluetti Premium 80 (AC70P) — це компактна та потужна портативна електростанція з ємністю 864Wh і постійною потужністю 1000W.",
    },
  },
  {
    categorySlug: "power-stations",
    manufacturer: "Bluetti",
    model: "Premium 50 (AC50P)",
    slug: "bluetti-premium-50-ac50p",
    summary:
      "504 Wh LiFePO4 portable station with 700 W output, Bluetooth, USB-A, USB-C, 12 V output, and display.",
    summaryUk:
      "Портативна електростанція Bluetti Premium 50 (AC50P) з LiFePO4 акумулятором 504 Вт·год, потужністю 700 Вт, Bluetooth, USB-A, USB-C, 12 В виходом і дисплеєм.",
    imagePath: bluettiAc50PImages[0],
    priceCents: 25658,
    productCode: "6970991296536",
    nominalVoltageV: 230,
    capacityWh: 504,
    continuousPowerW: 700,
    peakPowerW: 1200,
    chemistry: "LiFePO4",
    communicationProtocols: "Bluetooth",
    weightGrams: 6900,
    lifecycleCycles: 3000,
    sourceLabel: "NKON product page",
    sourceLabelUk: "Сторінка товару NKON",
    sourceUrl:
      "https://www.nkon.nl/ua/bluetti-premium-50-ac50p-0-5kwh-power-station.html",
    specifications: {
      sourceCategoryUrl:
        "https://www.nkon.nl/ua/thuisbatterij/powerstation-plug-in.html?brand=Bluetti",
      productImages: bluettiAc50PImages,
      collectionListPosition: 6,
      sourceCurrency: "EUR",
      priceEur: 224.95,
      eurToUsdRate: 1.1406,
      eurToUsdRateDate: "2026-06-29",
      availability: "InStock",
      gtin: "6970991296536",
      capacityAh: 10,
      dischargeCurrentA: 14,
      powerLiftingW: 1200,
      powerSourceUk: "12V, європейська вилка (220≈230 В)",
      featuresUk: "Bluetooth, USB-A, USB-C, екран",
      ipRating: "IP20",
      descriptionUk:
        "Bluetti Premium 50 (AC50P) — це компактна та універсальна портативна електростанція з ємністю 504Wh і постійною потужністю 700W.",
    },
  },
];
