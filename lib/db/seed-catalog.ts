import { count, eq } from "drizzle-orm";

import { db, postgresClient } from "@/lib/db";
import { ankerPowerBankRows } from "@/lib/db/anker-power-bank-seed";
import { baseusPowerBankRows } from "@/lib/db/baseus-power-bank-seed";
import { equipment, equipmentCategories, manufacturers } from "@/lib/db/schema";
import { ugreenPowerBankRows } from "@/lib/db/ugreen-power-bank-seed";
import { xiaomiPowerBankRows } from "@/lib/db/xiaomi-power-bank-seed";
import powerBankMissingDataCompletion from "@/docs/POWER_BANK_MISSING_DATA_COMPLETION.json";
import { mergePowerBankSpecifications } from "@/lib/power-bank-specs";

const categories = [
  {
    slug: "power-banks",
    name: "Power Banks",
    nameUk: "Павербанки",
    description:
      "Portable USB and DC battery packs for phones, laptops, and field kits.",
    descriptionUk:
      "Портативні USB та DC акумулятори для телефонів, ноутбуків і польових комплектів.",
  },
  {
    slug: "power-stations",
    name: "Power Stations",
    nameUk: "Портативні електростанції",
    description:
      "Portable AC power stations for backup power, camping, and light jobsite use.",
    descriptionUk:
      "Портативні AC електростанції для резервного живлення, кемпінгу та легких робочих задач.",
  },
  {
    slug: "batteries",
    name: "Batteries",
    nameUk: "Акумулятори",
    description:
      "Standalone battery modules for off-grid, hybrid, and backup systems.",
    descriptionUk:
      "Окремі акумуляторні модулі для автономних, гібридних і резервних систем.",
  },
  {
    slug: "inverters",
    name: "Inverters",
    nameUk: "Інвертори",
    description: "Grid-tie, off-grid, and hybrid inverters for energy systems.",
    descriptionUk:
      "Мережеві, автономні та гібридні інвертори для енергетичних систем.",
  },
] as const;

const manufacturerRows = [
  { name: "Anker", country: "United States" },
  { name: "Bluetti", country: "United States" },
  { name: "EcoFlow", country: "United States" },
  { name: "Growatt", country: "China" },
  { name: "Renogy", country: "United States" },
  { name: "Victron Energy", country: "Netherlands" },
  { name: "Pylontech", country: "China" },
  { name: "Zendure", country: "United States" },
  { name: "Xiaomi", country: "China" },
  { name: "Unbranded", country: null },
  { name: "EVE", country: "China" },
  { name: "REPT", country: "China" },
  { name: "UGREEN", country: "China" },
  { name: "Baseus", country: "China" },
] as const;

type SeedEquipment = {
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

type PowerBankCompletionRow = {
  slug: string;
  capacityWh: number | null;
  batteryChemistry: string | null;
  supportedOutputProtocols: string[] | null;
  maxInputPower: number | null;
  maxOutputPower: number | null;
  passthroughCharging: boolean | null;
  gravimetricDensity: number | null;
  dimensions: Record<string, number> | null;
  weight: number | null;
  displayType: string | null;
  price: number | null;
  builtInCable: string | null;
  wirelessChargingMaxPower: number | null;
  sources: Array<{
    url: string;
    fields: string[];
    note?: string;
  }>;
  missingReason: Partial<Record<string, string>>;
};

const powerBankCompletionBySlug = new Map(
  (powerBankMissingDataCompletion as PowerBankCompletionRow[]).map((row) => [
    row.slug,
    row,
  ]),
);

function valueOrUndefined<T>(value: T | null | undefined) {
  return value === null || value === undefined ? undefined : value;
}

function mergePowerBankCompletion(row: SeedEquipment): SeedEquipment {
  if (row.categorySlug !== "power-banks") {
    return row;
  }

  const completion = powerBankCompletionBySlug.get(row.slug);

  if (!completion) {
    return row;
  }

  const completionSpecs = {
    ...(valueOrUndefined(completion.capacityWh) !== undefined
      ? { capacityWh: completion.capacityWh }
      : {}),
    ...(valueOrUndefined(completion.batteryChemistry) !== undefined
      ? { batteryChemistry: completion.batteryChemistry }
      : {}),
    ...(valueOrUndefined(completion.supportedOutputProtocols) !== undefined
      ? { supportedOutputProtocols: completion.supportedOutputProtocols }
      : {}),
    ...(valueOrUndefined(completion.maxInputPower) !== undefined
      ? {
          maxInputPower: completion.maxInputPower,
          maxInputW: completion.maxInputPower,
        }
      : {}),
    ...(valueOrUndefined(completion.maxOutputPower) !== undefined
      ? {
          maxOutputPower: completion.maxOutputPower,
          maxOutputW: completion.maxOutputPower,
        }
      : {}),
    ...(valueOrUndefined(completion.passthroughCharging) !== undefined
      ? { passthroughCharging: completion.passthroughCharging }
      : {}),
    ...(valueOrUndefined(completion.gravimetricDensity) !== undefined
      ? { gravimetricDensity: completion.gravimetricDensity }
      : {}),
    ...(valueOrUndefined(completion.dimensions) !== undefined
      ? { dimensions: completion.dimensions }
      : {}),
    ...(valueOrUndefined(completion.weight) !== undefined
      ? { weight: completion.weight }
      : {}),
    ...(valueOrUndefined(completion.displayType) !== undefined
      ? { displayType: completion.displayType }
      : {}),
    ...(valueOrUndefined(completion.price) !== undefined
      ? { price: completion.price }
      : {}),
    ...(valueOrUndefined(completion.builtInCable) !== undefined
      ? { builtInCable: completion.builtInCable }
      : {}),
    ...(valueOrUndefined(completion.wirelessChargingMaxPower) !== undefined
      ? { wirelessChargingMaxPower: completion.wirelessChargingMaxPower }
      : {}),
    powerBankDataCompletion: {
      sources: completion.sources,
      missingReason: completion.missingReason,
    },
  };

  return {
    ...row,
    capacityWh: valueOrUndefined(completion.capacityWh) ?? row.capacityWh,
    weightGrams: valueOrUndefined(completion.weight) ?? row.weightGrams,
    priceCents:
      completion.price !== null
        ? Math.round(completion.price * 100)
        : row.priceCents,
    specifications: {
      ...(row.specifications ?? {}),
      ...completionSpecs,
    },
  };
}

const equipmentRows: SeedEquipment[] = [
  {
    categorySlug: "inverters",
    manufacturer: "Victron Energy",
    model: "MultiPlus-II 48/5000",
    slug: "victron-multiplus-ii-48-5000",
    summary: "48 V inverter-charger for off-grid and ESS installations.",
    summaryUk: "Інвертор-зарядний пристрій 48 В для автономних систем і ESS.",
    imagePath: "/catalog/inverter.svg",
    priceCents: 141900,
    nominalVoltageV: 48,
    continuousPowerW: 4000,
    peakPowerW: 9000,
    maxChargeCurrentA: 70,
    communicationProtocols: "VE.Bus, CAN",
    weightGrams: 30000,
    warrantyYears: 5,
    sourceLabel: "Mock datasheet",
    sourceLabelUk: "Тестовий даташит",
  },
  {
    categorySlug: "inverters",
    manufacturer: "Growatt",
    model: "SPF 5000 ES",
    slug: "growatt-spf-5000-es",
    summary: "Hybrid inverter with integrated MPPT for residential backup.",
    summaryUk:
      "Гібридний інвертор з вбудованим MPPT для домашнього резервного живлення.",
    imagePath: "/catalog/inverter.svg",
    priceCents: 89900,
    nominalVoltageV: 48,
    continuousPowerW: 5000,
    peakPowerW: 10000,
    maxPvVoltageV: 450,
    maxChargeCurrentA: 100,
    communicationProtocols: "RS485, CAN",
    weightGrams: 12000,
    warrantyYears: 5,
    sourceLabel: "Mock manual",
    sourceLabelUk: "Тестова інструкція",
  },
  {
    categorySlug: "inverters",
    manufacturer: "Renogy",
    model: "REGO 3000",
    slug: "renogy-rego-3000",
    summary: "Compact pure sine inverter-charger for vans and cabins.",
    summaryUk:
      "Компактний інвертор-зарядний пристрій із чистою синусоїдою для фургонів і будинків.",
    imagePath: "/catalog/inverter.svg",
    priceCents: 64900,
    nominalVoltageV: 24,
    continuousPowerW: 3000,
    peakPowerW: 6000,
    maxChargeCurrentA: 75,
    communicationProtocols: "Bluetooth",
    weightGrams: 9200,
    warrantyYears: 3,
    sourceLabel: "Mock installation guide",
    sourceLabelUk: "Тестовий посібник з монтажу",
  },
  {
    categorySlug: "batteries",
    manufacturer: "Pylontech",
    model: "US5000",
    slug: "pylontech-us5000",
    summary: "Rack-mounted LFP battery module for expandable 48 V storage.",
    summaryUk:
      "Стійковий LFP акумуляторний модуль для розширюваного сховища 48 В.",
    imagePath: "/catalog/battery.svg",
    priceCents: 154900,
    nominalVoltageV: 48,
    capacityWh: 4800,
    maxChargeCurrentA: 80,
    chemistry: "LiFePO4",
    communicationProtocols: "CAN, RS485",
    weightGrams: 41000,
    warrantyYears: 10,
    lifecycleCycles: 6000,
    sourceLabel: "Mock datasheet",
    sourceLabelUk: "Тестовий даташит",
  },
  {
    categorySlug: "batteries",
    manufacturer: "Renogy",
    model: "Core 12V 200Ah",
    slug: "renogy-core-12v-200ah",
    summary: "Drop-in LFP battery for RVs, boats, and small backup systems.",
    summaryUk:
      "LFP акумулятор для прямої заміни у кемперах, човнах і малих резервних системах.",
    imagePath: "/catalog/battery.svg",
    priceCents: 79900,
    nominalVoltageV: 12,
    capacityWh: 2560,
    maxChargeCurrentA: 100,
    chemistry: "LiFePO4",
    communicationProtocols: "Bluetooth",
    weightGrams: 26300,
    warrantyYears: 5,
    lifecycleCycles: 4000,
    sourceLabel: "Mock product sheet",
    sourceLabelUk: "Тестова специфікація продукту",
  },
  {
    categorySlug: "batteries",
    manufacturer: "Victron Energy",
    model: "SuperPack 25.6V 100Ah",
    slug: "victron-superpack-25v-100ah",
    summary: "Protected LFP module for compact low-voltage systems.",
    summaryUk: "Захищений LFP модуль для компактних низьковольтних систем.",
    imagePath: "/catalog/battery.svg",
    priceCents: 132500,
    nominalVoltageV: 24,
    capacityWh: 2560,
    maxChargeCurrentA: 100,
    chemistry: "LiFePO4",
    communicationProtocols: "BMS port",
    weightGrams: 28000,
    warrantyYears: 3,
    lifecycleCycles: 2500,
    sourceLabel: "Mock manual",
    sourceLabelUk: "Тестова інструкція",
  },
  {
    categorySlug: "power-stations",
    manufacturer: "EcoFlow",
    model: "Delta 2 Max",
    slug: "ecoflow-delta-2-max",
    summary: "Expandable portable power station with fast AC charging.",
    summaryUk:
      "Розширювана портативна електростанція зі швидкою зарядкою від мережі.",
    imagePath: "/catalog/power-station.svg",
    priceCents: 129900,
    nominalVoltageV: 51,
    capacityWh: 2048,
    continuousPowerW: 2400,
    peakPowerW: 4800,
    maxPvVoltageV: 60,
    chemistry: "LiFePO4",
    weightGrams: 23000,
    warrantyYears: 5,
    lifecycleCycles: 3000,
    sourceLabel: "Mock datasheet",
    sourceLabelUk: "Тестовий даташит",
  },
  {
    categorySlug: "power-stations",
    manufacturer: "Bluetti",
    model: "AC200L",
    slug: "bluetti-ac200l",
    summary: "High-capacity portable station for home backup and field power.",
    summaryUk:
      "Портативна станція великої ємності для домашнього резерву та польового живлення.",
    imagePath: "/catalog/power-station.svg",
    priceCents: 159900,
    nominalVoltageV: 51,
    capacityWh: 2048,
    continuousPowerW: 2400,
    peakPowerW: 3600,
    maxPvVoltageV: 145,
    chemistry: "LiFePO4",
    weightGrams: 28000,
    warrantyYears: 5,
    lifecycleCycles: 3000,
    sourceLabel: "Mock product page",
    sourceLabelUk: "Тестова сторінка продукту",
  },
  {
    categorySlug: "power-stations",
    manufacturer: "Anker",
    model: "Solix F2000",
    slug: "anker-solix-f2000",
    summary: "Rolling power station with UPS support and app monitoring.",
    summaryUk:
      "Пересувна електростанція з підтримкою UPS і моніторингом через застосунок.",
    imagePath: "/catalog/power-station.svg",
    priceCents: 139900,
    nominalVoltageV: 51,
    capacityWh: 2048,
    continuousPowerW: 2400,
    peakPowerW: 3200,
    maxPvVoltageV: 60,
    chemistry: "LiFePO4",
    weightGrams: 30500,
    warrantyYears: 5,
    lifecycleCycles: 3000,
    sourceLabel: "Mock quick-start guide",
    sourceLabelUk: "Тестовий короткий посібник",
  },
];

const victronInverterRows: SeedEquipment[] = [
  {
    categorySlug: "inverters",
    manufacturer: "Victron Energy",
    model: "MultiPlus 500VA - 1600VA",
    slug: "victron-multiplus-500va-1600va",
    summary:
      "Compact true sine wave inverter-charger range with adaptive charging, a high-speed AC transfer switch, UPS switchover, and GX/VRM monitoring support.",
    summaryUk:
      "Compact true sine wave inverter-charger range with adaptive charging, a high-speed AC transfer switch, UPS switchover, and GX/VRM monitoring support.",
    imagePath:
      "https://media.vladyka.dev/inverter/victron/Multiplus_500-1600.png",
    priceCents: null,
    continuousPowerW: 1600,
    communicationProtocols: "VE.Bus, GX, VRM",
    warrantyYears: 5,
    sourceLabel: "Victron Energy product page",
    sourceLabelUk: "Victron Energy product page",
    sourceUrl: "https://www.victronenergy.com/inverters-chargers/multi-500-va",
    specifications: {
      sourceCategoryUrl: "https://www.victronenergy.com/inverters-chargers",
      collectionListPosition: 1,
      productFamily: "MultiPlus",
      productType: "Inverter/charger",
      models: ["500VA", "800VA", "1200VA", "1600VA"],
      outputRangeVa: [500, 800, 1200, 1600],
      nominalVoltagesV: [12, 24, 48],
      inverterWaveform: "True sine wave",
      transferSwitch: "High-speed AC transfer switch",
      upsTransferTimeMs: "<20",
      batteryCharging: "Adaptive charge technology",
      acInputs: 1,
      acOutputs: 2,
      monitoring: ["GX device", "VRM app", "VRM portal"],
      features: [
        "Uninterrupted AC power UPS function",
        "Remote monitoring and control with a GX device",
        "Compact enclosure",
      ],
      datasheets: ["MultiPlus 500VA - 2000VA PDF"],
    },
  },
  {
    categorySlug: "inverters",
    manufacturer: "Victron Energy",
    model: "MultiPlus",
    slug: "victron-multiplus",
    summary:
      "Combined inverter and charger family with true sine wave output, adaptive charging, PowerAssist, parallel operation, and multiple system integration options.",
    summaryUk:
      "Combined inverter and charger family with true sine wave output, adaptive charging, PowerAssist, parallel operation, and multiple system integration options.",
    imagePath: "https://media.vladyka.dev/inverter/victron/MultiPlus_20k.png",
    priceCents: null,
    continuousPowerW: 20000,
    communicationProtocols: "VE.Bus, GX, VRM",
    warrantyYears: 5,
    sourceLabel: "Victron Energy product page",
    sourceLabelUk: "Victron Energy product page",
    sourceUrl:
      "https://www.victronenergy.com/inverters-chargers/multiplus-12v-24v-48v-800va-3kva",
    specifications: {
      sourceCategoryUrl: "https://www.victronenergy.com/inverters-chargers",
      collectionListPosition: 2,
      productFamily: "MultiPlus",
      productType: "Inverter/charger",
      models: [
        "800VA",
        "1200VA",
        "1600VA",
        "2000VA",
        "3000VA",
        "5000VA",
        "20kW",
      ],
      outputRangeVa: [800, 1200, 1600, 2000, 3000, 5000],
      outputRangeW: [20000],
      nominalVoltagesV: [12, 24, 48],
      inverterWaveform: "True sine wave",
      acInputs: 1,
      acOutputs: 2,
      parallelUnitsMax: 4,
      supportsThreePhase: true,
      supportsSplitPhase: true,
      monitoring: ["GX device", "VRM app", "VRM portal"],
      features: [
        "Hybrid PowerAssist technology",
        "Uninterrupted AC power UPS function",
        "Parallel operation for higher power output",
        "Three phase or split phase operation",
      ],
      datasheets: [
        "MultiPlus 48V 20kW PDF",
        "MultiPlus Inverter/Charger 800VA - 5kVA PDF",
      ],
    },
  },
  {
    categorySlug: "inverters",
    manufacturer: "Victron Energy",
    model: "MultiPlus 2000VA",
    slug: "victron-multiplus-2000va",
    summary:
      "2000VA MultiPlus inverter-charger with PowerAssist, adaptive charging, UPS switchover, and support for parallel, three-phase, or split-phase operation.",
    summaryUk:
      "2000VA MultiPlus inverter-charger with PowerAssist, adaptive charging, UPS switchover, and support for parallel, three-phase, or split-phase operation.",
    imagePath:
      "https://media.vladyka.dev/inverter/victron/MultiPlus_12_2000VA_80_230V_(front).png",
    priceCents: null,
    continuousPowerW: 2000,
    communicationProtocols: "VE.Bus, GX, VRM",
    warrantyYears: 5,
    sourceLabel: "Victron Energy product page",
    sourceLabelUk: "Victron Energy product page",
    sourceUrl:
      "https://www.victronenergy.com/inverters-chargers/multiplus-2000-va",
    specifications: {
      sourceCategoryUrl: "https://www.victronenergy.com/inverters-chargers",
      collectionListPosition: 3,
      productFamily: "MultiPlus",
      productType: "Inverter/charger",
      models: ["2000VA"],
      outputRangeVa: [2000],
      nominalVoltagesV: [12, 24, 48],
      inverterWaveform: "True sine wave",
      parallelUnitsMax: 4,
      supportsThreePhase: true,
      supportsSplitPhase: true,
      upsTransferTimeMs: "<20",
      monitoring: ["GX device", "VRM app", "VRM portal"],
      features: [
        "PowerAssist for limited AC sources",
        "Uninterrupted AC power UPS function",
        "Parallel operation for higher power output",
        "Remote monitoring and control",
      ],
      datasheets: ["MultiPlus 2000VA 120V PDF", "MultiPlus 500VA - 2000VA PDF"],
    },
  },
  {
    categorySlug: "inverters",
    manufacturer: "Victron Energy",
    model: "MultiPlus-II",
    slug: "victron-multiplus-ii",
    summary:
      "Multifunctional inverter-charger family for marine, vehicle, off-grid, and ESS systems with two AC outputs, PowerControl, PowerAssist, and scalable parallel or three-phase configurations.",
    summaryUk:
      "Multifunctional inverter-charger family for marine, vehicle, off-grid, and ESS systems with two AC outputs, PowerControl, PowerAssist, and scalable parallel or three-phase configurations.",
    imagePath: "https://media.vladyka.dev/inverter/victron/MultiPlus-II_nw.png",
    priceCents: null,
    continuousPowerW: 15000,
    communicationProtocols: "VE.Bus, GX, VRM",
    warrantyYears: 5,
    sourceLabel: "Victron Energy product page",
    sourceLabelUk: "Victron Energy product page",
    sourceUrl: "https://www.victronenergy.com/inverters-chargers/multiplus-ii",
    specifications: {
      sourceCategoryUrl: "https://www.victronenergy.com/inverters-chargers",
      collectionListPosition: 4,
      productFamily: "MultiPlus-II",
      productType: "Inverter/charger",
      formerName: "MultiGrid-II",
      models: [
        "3000VA",
        "4kVA",
        "4k5VA",
        "5000VA",
        "6k5VA",
        "8000VA",
        "10000VA",
        "15000VA",
      ],
      outputRangeVa: [3000, 4000, 4500, 5000, 6500, 8000, 10000, 15000],
      nominalVoltagesV: [12, 24, 48],
      acOutputs: 2,
      supportsEss: true,
      supportsParallel: true,
      supportsThreePhase: true,
      upsTransferTimeMs: "<20",
      batteryCharging: "Smart adaptive charging algorithm",
      monitoring: ["GX device", "VRM app", "VRM portal"],
      features: [
        "PowerControl prevents grid or generator overload",
        "PowerAssist boosts AC power during peak demand",
        "ESS support",
        "Uninterrupted AC power UPS function",
      ],
      datasheets: [
        "MultiPlus-II 120V PDF",
        "MultiPlus-II 3kVA - 15kVA 230V PDF",
        "MultiPlus-II 4k, 4k5 and 6k5 230V PDF",
      ],
    },
  },
  {
    categorySlug: "inverters",
    manufacturer: "Victron Energy",
    model: "MultiPlus-II 2x 120V",
    slug: "victron-multiplus-ii-2x-120v",
    summary:
      "Split-phase MultiPlus-II inverter-charger for 120/240V systems, based on the MultiPlus-II platform with PowerControl, PowerAssist, and GX/VRM monitoring support.",
    summaryUk:
      "Split-phase MultiPlus-II inverter-charger for 120/240V systems, based on the MultiPlus-II platform with PowerControl, PowerAssist, and GX/VRM monitoring support.",
    imagePath:
      "https://media.vladyka.dev/inverter/victron/MultiPlus-II_12_3000_120-50_2x120V_(front)nw.png",
    priceCents: null,
    continuousPowerW: 3000,
    communicationProtocols: "VE.Bus, GX, VRM",
    warrantyYears: 5,
    sourceLabel: "Victron Energy product page",
    sourceLabelUk: "Victron Energy product page",
    sourceUrl:
      "https://www.victronenergy.com/inverters-chargers/multiplus-ii-2x-120v",
    specifications: {
      sourceCategoryUrl: "https://www.victronenergy.com/inverters-chargers",
      collectionListPosition: 5,
      productFamily: "MultiPlus-II",
      productType: "Inverter/charger",
      models: ["3000VA"],
      outputRangeVa: [3000],
      nominalVoltagesV: [12, 24],
      acSystem: "2x 120V split-phase",
      supportsSplitPhase: true,
      monitoring: ["GX device", "VRM app", "VRM portal"],
      features: [
        "Designed for 120/240V split-phase systems",
        "PowerControl and PowerAssist platform features",
        "Remote monitoring and control with a GX device",
      ],
      datasheets: ["MultiPlus-II 2x 120V PDF"],
    },
  },
];

const ecoFlowPowerStationRows: SeedEquipment[] = [
  {
    categorySlug: "power-stations",
    manufacturer: "EcoFlow",
    model: "DELTA 3 Classic (1024Wh)",
    slug: "ecoflow-delta-3-classic-1024wh",
    summary:
      "1,024 Wh LFP portable power station with 1,800 W AC output, 3,600 W surge, 500 W solar input, and 10 ms UPS switching.",
    summaryUk:
      "1,024 Wh LFP portable power station with 1,800 W AC output, 3,600 W surge, 500 W solar input, and 10 ms UPS switching.",
    imagePath:
      "https://media.vladyka.dev/power-station/ecoflow/ecoflow-delta-3-classic-1024wh-portable-power-station-1218691755.webp",
    priceCents: 54900,
    productCode: "EFDELTA3C-EU-CBox-L",
    nominalVoltageV: 230,
    capacityWh: 1024,
    continuousPowerW: 1800,
    peakPowerW: 3600,
    maxPvVoltageV: 60,
    chemistry: "LFP",
    communicationProtocols: "Wi-Fi, Bluetooth, EcoFlow app",
    weightGrams: 12100,
    warrantyYears: 5,
    sourceLabel: "EcoFlow official product page",
    sourceLabelUk: "EcoFlow official product page",
    sourceUrl:
      "https://eu.ecoflow.com/products/delta-3-classic-portable-power-station",
    specifications: {
      collectionListPosition: 1,
      capacityWh: 1024,
      outputVoltageV: 230,
      totalOutputPorts: 5,
      acOutlets: 3,
      maxOutputWithXBoostW: 2400,
      maxInputW: 1400,
      maxSolarInputW: 500,
      acCharging: "1400W, about 60 minutes",
      generatorChargingW: 1400,
      usbPorts: ["USB-A 12W", "USB-C 100W", "USB-C 30W"],
      dcOutput: "No 12V DC output",
      upsTransferMs: 10,
      dimensionsMm: "398 x 200 x 283",
      noise: ["600W < 30dB", "1200W < 40dB"],
      chargeTemperatureC: "0 to 45",
      dischargeTemperatureC: "-10 to 45",
      storageTemperatureC: "-10 to 45",
      operatingAltitudeM: 3000,
      packageContents: ["DELTA 3 Classic"],
      features: [
        "Automotive-grade full-tab LFP cells",
        "OASIS 3.0 smart app control",
        "Storm Guard Mode",
      ],
    },
  },
  {
    categorySlug: "power-stations",
    manufacturer: "EcoFlow",
    model: "DELTA 3 Max Plus (2048Wh)",
    slug: "ecoflow-delta-3-max-plus-2048wh",
    summary:
      "2,048 Wh LFP station with 3,000 W AC output, 6,000 W surge, 1,000 W solar charging, and expandable capacity up to 10 kWh.",
    summaryUk:
      "2,048 Wh LFP station with 3,000 W AC output, 6,000 W surge, 1,000 W solar charging, and expandable capacity up to 10 kWh.",
    imagePath:
      "https://media.vladyka.dev/power-station/ecoflow/ecoflow-delta-3-max-series-portable-power-station-1197150547.webp",
    priceCents: 119900,
    productCode: "EFD3MP-EU-CBOX",
    nominalVoltageV: 230,
    capacityWh: 2048,
    continuousPowerW: 3000,
    peakPowerW: 6000,
    maxPvVoltageV: 60,
    chemistry: "LFP",
    communicationProtocols: "Wi-Fi, Bluetooth, EcoFlow app",
    weightGrams: 22100,
    warrantyYears: 5,
    sourceLabel: "EcoFlow official product page",
    sourceLabelUk: "EcoFlow official product page",
    sourceUrl:
      "https://eu.ecoflow.com/products/delta-3-max-series-portable-power-station",
    specifications: {
      collectionListPosition: 2,
      capacityWh: 2048,
      totalOutputPorts: 10,
      acOutlets: 4,
      maxOutputWithXBoostW: 3900,
      maxInputW: 2300,
      maxSolarInputW: 1000,
      acCharging: "2300W, about 68 minutes",
      generatorChargingW: 2400,
      alternatorChargingW: 1000,
      usbPorts: ["USB-A 18W", "USB-C 140W", "2 x USB-C 45W shared"],
      dcOutput: "378W max; car power output 12.6V/10A; Anderson 12.6V/30A",
      carCharging: "12V/24V, 8A",
      extraBatteryPorts: 1,
      compatibleExtraBatteries: [
        "DELTA 2 Max",
        "DELTA 3 Max Plus",
        "DELTA Pro 3",
        "DELTA 3 Extra Battery",
      ],
      expandableCapacity: "Up to 10kWh",
      upsTransferMs: 10,
      dimensionsMm: "494 x 242 x 305",
      noise: "600W <= 25dB",
      chargeTemperatureC: "0 to 45",
      dischargeTemperatureC: "-10 to 45",
      storageTemperatureC: "-10 to 45",
      operatingAltitudeM: 3000,
      packageContents: ["DELTA 3 Max Plus"],
      features: [
        "Smart Output Priority",
        "X-Fusion support",
        "Full-tab LFP cells",
      ],
    },
  },
  {
    categorySlug: "power-stations",
    manufacturer: "EcoFlow",
    model: "DELTA 2 Max",
    slug: "ecoflow-delta-2-max",
    summary:
      "Expandable 2,048 Wh LFP portable station with 2,400 W AC output, 4,800 W surge, dual 500 W solar inputs, and app control.",
    summaryUk:
      "Expandable 2,048 Wh LFP portable station with 2,400 W AC output, 4,800 W surge, dual 500 W solar inputs, and app control.",
    imagePath:
      "https://media.vladyka.dev/power-station/ecoflow/ecoflow-delta-2-max-portable-power-station-51305159590231.webp",
    priceCents: 99900,
    productCode: "EFDELTA2Max-EU",
    nominalVoltageV: 230,
    capacityWh: 2048,
    continuousPowerW: 2400,
    peakPowerW: 4800,
    maxPvVoltageV: 60,
    chemistry: "LFP",
    communicationProtocols: "Wi-Fi, Bluetooth",
    weightGrams: 23000,
    warrantyYears: 5,
    lifecycleCycles: 3000,
    sourceLabel: "EcoFlow official product page",
    sourceLabelUk: "EcoFlow official product page",
    sourceUrl:
      "https://eu.ecoflow.com/products/delta-2-max-portable-power-station",
    specifications: {
      collectionListPosition: 3,
      capacityWh: 2048,
      expandableCapacity: "2-6kWh",
      extraBattery:
        "Supports up to two DELTA 2 Max Smart Extra Batteries or DELTA Max Smart Extra Batteries",
      acOutput: "4 outlets, 2400W total, 4800W surge",
      maxOutputWithXBoostW: 3100,
      maxInputW: 2300,
      acCharging: "X-Stream fast charge 2300W, 10A",
      solarCharging: "11-60V 15A, single port 500W; dual port 1000W",
      maxSolarInputW: 1000,
      carCharging: "12V/24V battery, 8A",
      outputPorts: [
        "2 x USB-A 12W",
        "2 x USB-A fast charge 18W",
        "2 x USB-C 100W",
        "Car power 126W",
        "2 x DC5521 38W",
      ],
      dimensionsMm: "497 x 242 x 305",
      netWeightKg: 23,
      noise: "As quiet as 30dB",
      packageContents: [
        "DELTA 2 Max",
        "AC charging cable",
        "User manual",
        "Warranty card",
      ],
      features: [
        "AC Always On mode",
        "In-app energy management",
        "Supports solar priority charging",
      ],
    },
  },
  {
    categorySlug: "power-stations",
    manufacturer: "EcoFlow",
    model: "DELTA 2",
    slug: "ecoflow-delta-2",
    summary:
      "1,024 Wh LFP station with 1,800 W AC output, 2,700 W surge, 500 W solar input, and Wi-Fi/Bluetooth control.",
    summaryUk:
      "1,024 Wh LFP station with 1,800 W AC output, 2,700 W surge, 500 W solar input, and Wi-Fi/Bluetooth control.",
    imagePath:
      "https://media.vladyka.dev/power-station/ecoflow/ecoflow-delta-2-portable-power-station-52097645347159.webp",
    priceCents: 59900,
    productCode: "ZMR330-EU",
    nominalVoltageV: 230,
    capacityWh: 1024,
    continuousPowerW: 1800,
    peakPowerW: 2700,
    maxPvVoltageV: 60,
    maxChargeCurrentA: 15,
    chemistry: "LFP",
    communicationProtocols: "Wi-Fi, Bluetooth",
    weightGrams: 12000,
    warrantyYears: 5,
    lifecycleCycles: 3000,
    sourceLabel: "EcoFlow official product page",
    sourceLabelUk: "EcoFlow official product page",
    sourceUrl: "https://eu.ecoflow.com/products/delta-2-portable-power-station",
    specifications: {
      collectionListPosition: 4,
      capacityWh: 1024,
      expandableCapacity: "1-3kWh",
      extraBattery:
        "Supports one DELTA 2 Extra Battery or DELTA Max Extra Battery",
      acOutput: "4 outlets, 1800W total, 2700W surge",
      maxOutputWithXBoostW: 2400,
      maxInputW: 1200,
      acChargingW: 1200,
      solarCharging: "11-60V, 15A, 500W max",
      maxSolarInputW: 500,
      carCharging: "12V/24V battery, 8A",
      dcChargingW: 1100,
      outputPorts: [
        "2 x USB-A 12W",
        "2 x USB-A fast charge 18W",
        "2 x USB-C 100W",
        "Car power 126W",
        "2 x DC5521 38W",
      ],
      dimensionsMm: "400 x 211 x 281",
      netWeightKg: 12,
      packageContents: [
        "DELTA 2",
        "AC charging cable",
        "User manual",
        "App quick start guide",
        "Warranty card",
      ],
      features: [
        "Emergency power supply mode",
        "EcoFlow app control",
        "MPPT solar charging",
      ],
    },
  },
  {
    categorySlug: "power-stations",
    manufacturer: "EcoFlow",
    model: "DELTA 3",
    slug: "ecoflow-delta-3",
    summary:
      "1,024 Wh LFP station with 1,800 W AC output, 3,600 W surge, expandable capacity to 5 kWh, and 5-year warranty.",
    summaryUk:
      "1,024 Wh LFP station with 1,800 W AC output, 3,600 W surge, expandable capacity to 5 kWh, and 5-year warranty.",
    imagePath:
      "https://media.vladyka.dev/power-station/ecoflow/ecoflow-delta-3-series-portable-power-station-60905350299991.webp",
    priceCents: 74900,
    productCode: "EFDELTA3-EU",
    nominalVoltageV: 230,
    capacityWh: 1024,
    continuousPowerW: 1800,
    peakPowerW: 3600,
    maxPvVoltageV: 60,
    chemistry: "LFP",
    communicationProtocols: "EcoFlow app",
    weightGrams: 12500,
    warrantyYears: 5,
    lifecycleCycles: 4000,
    sourceLabel: "EcoFlow official product page",
    sourceLabelUk: "EcoFlow official product page",
    sourceUrl:
      "https://eu.ecoflow.com/products/delta-3-series-portable-power-station",
    specifications: {
      collectionListPosition: 5,
      capacityWh: 1024,
      expandableCapacity: "Up to 5kWh",
      compatibleExtraBatteries: [
        "DELTA 2 Max",
        "DELTA 2",
        "DELTA Pro 3",
        "DELTA 3 Extra Battery",
      ],
      totalOutputPorts: 11,
      acOutlets: 4,
      acOutput: "4 x 1800W, 3600W surge",
      maxOutputWithXBoostW: 2400,
      maxInputW: 1500,
      acCharging: "1500W, 56 minutes",
      solarCharging: "11V-60V, 1 x 500W max",
      maxSolarInputW: 500,
      smartGeneratorCharging: "1500W, 56 minutes",
      carCharging: "800W, 1.3 hours",
      acPlusPvCharging: "1500W, 56 minutes",
      outputPorts: [
        "2 x USB-A fast charge 18W max",
        "2 x USB-C 100W max",
        "Car power 126W",
        "2 x DC5521 12.6V/3A max",
      ],
      dimensionsMm: "398 x 200 x 284",
      extraBatteryDimensionsMm: "398 x 200 x 198",
      upsTransferMs: 10,
      batteryPackWaterproofRating: "IP65",
      noise: ["600W < 30dB", "1200W < 40dB"],
      packageContents: ["DELTA 3"],
      features: [
        "TOU and storm warning app support",
        "Expandable with multiple EcoFlow extra batteries",
        "4000 cycles to 80% capacity",
      ],
    },
  },
];

const nkonBatteryRows: SeedEquipment[] = [
  {
    categorySlug: "batteries",
    manufacturer: "Unbranded",
    model: "51.2V 5kWh 16S 100Ah LiFePO4 Battery Pack - Used",
    slug: "nkon-51-2v-5kwh-16s-100ah-lifepo4-battery-pack-used",
    summary:
      "Used 16S LiFePO4 battery pack from NKON with 51.2 V nominal voltage, 100 Ah capacity, M8 terminals, and 80 A discharge rating.",
    summaryUk:
      "Used 16S LiFePO4 battery pack from NKON with 51.2 V nominal voltage, 100 Ah capacity, M8 terminals, and 80 A discharge rating.",
    imagePath:
      "https://www.nkon.nl/media/catalog/product/cache/d7e8d6be31dedc3e13513f59c64d138b/b/7/b71035b9-9c61-4f32-a230-dbce0def661d.jpeg",
    priceCents: 26495,
    productCode: "NKON-5566",
    nominalVoltageV: 51,
    capacityWh: 5120,
    chemistry: "LiFePO4",
    weightGrams: 51000,
    sourceLabel: "NKON product page",
    sourceLabelUk: "NKON product page",
    sourceUrl:
      "https://www.nkon.nl/novat/5wh-16s-100ah-51-2v-lifepo4-prismatic-battery-in-case.html",
    specifications: {
      listPosition: 1,
      nkonProductId: 5566,
      priceEur: 264.95,
      oldPriceEur: 289.95,
      stockStatus: "Out of stock",
      eanGtin: "6097331978928",
      batteryVersion: "Used",
      grade: "Unknown",
      nominalVoltageV: 51.2,
      seriesCells: 16,
      capacityAh: 100,
      dischargeCurrentA: 80,
      terminalType: "M8",
      dimensionsMm: "460 x 750 x 300",
      heightMm: 460,
      widthMm: 750,
      thicknessMm: 300,
      yearOfProduction: 2020,
      sourceCategoryUrl:
        "https://www.nkon.nl/novat/rechargeable/lifepo4.html?product_list_order=price&product_list_dir=desc",
      additionalImages: [
        "https://www.nkon.nl/media/catalog/product/cache/634f00c0cac7a25d9ea011187773489b/i/m/img_2425.jpg",
        "https://www.nkon.nl/media/catalog/product/cache/634f00c0cac7a25d9ea011187773489b/w/h/whatsapp_image_2024-11-22_at_09.42.04_2_.jpeg",
      ],
    },
  },
  {
    categorySlug: "batteries",
    manufacturer: "Unbranded",
    model:
      "48V 4.7kWh 15S 100Ah LiFePO4 Battery Pack - Used (16S with one broken cell)",
    slug: "nkon-48v-4-7kwh-15s-100ah-lifepo4-battery-pack-used",
    summary:
      "Used LiFePO4 battery pack from NKON listed as a 48 V, 15S, 100 Ah pack; the source notes it was originally 16S with one broken cell.",
    summaryUk:
      "Used LiFePO4 battery pack from NKON listed as a 48 V, 15S, 100 Ah pack; the source notes it was originally 16S with one broken cell.",
    imagePath:
      "https://www.nkon.nl/media/catalog/product/cache/d7e8d6be31dedc3e13513f59c64d138b/b/7/b71035b9-9c61-4f32-a230-dbce0def661d_1.jpeg",
    priceCents: 17995,
    productCode: "NKON-5600",
    nominalVoltageV: 48,
    capacityWh: 4800,
    chemistry: "LiFePO4",
    weightGrams: 51000,
    sourceLabel: "NKON product page",
    sourceLabelUk: "NKON product page",
    sourceUrl:
      "https://www.nkon.nl/novat/48v-4-7kwh-15s-100ah-lifepo4-battery-pack-gebruikt-16s-maar-een-cel-is-kapot.html",
    specifications: {
      listPosition: 2,
      nkonProductId: 5600,
      priceEur: 179.95,
      stockStatus: "Out of stock",
      eanGtin: "6097325994972",
      batteryVersion: "Used",
      grade: "Unknown",
      nominalVoltageV: 48,
      listedEnergyKwh: 4.7,
      seriesCells: 15,
      originalSeriesCells: 16,
      sourceConditionNote: "16S only one cell is broken",
      capacityAh: 100,
      dischargeCurrentA: 80,
      terminalType: "M8",
      dimensionsMm: "0 x 0 x 0",
      sourceCategoryUrl:
        "https://www.nkon.nl/novat/rechargeable/lifepo4.html?product_list_order=price&product_list_dir=desc",
      additionalImages: [
        "https://www.nkon.nl/media/catalog/product/cache/634f00c0cac7a25d9ea011187773489b/i/m/img_2425_1.jpg",
        "https://www.nkon.nl/media/catalog/product/cache/634f00c0cac7a25d9ea011187773489b/w/h/whatsapp_image_2024-10-18_at_10.30.04_1.jpeg",
      ],
    },
  },
  {
    categorySlug: "batteries",
    manufacturer: "EVE",
    model: "MB56 Prismatic 628Ah LiFePO4 3.2V Single Stud - Grade A",
    slug: "nkon-eve-mb56-prismatic-628ah-lifepo4-3-2v-grade-a-single-stud",
    summary:
      "Grade A EVE MB56 prismatic LiFePO4 cell from NKON with 628 Ah capacity, 3.2 V nominal voltage, busbars, and M8 terminal.",
    summaryUk:
      "Grade A EVE MB56 prismatic LiFePO4 cell from NKON with 628 Ah capacity, 3.2 V nominal voltage, busbars, and M8 terminal.",
    imagePath:
      "https://www.nkon.nl/media/catalog/product/cache/d7e8d6be31dedc3e13513f59c64d138b/i/m/image_template_nkon3336_0011_layer_61.jpg",
    priceCents: 11900,
    productCode: "NKON-5847",
    nominalVoltageV: 3,
    capacityWh: 2010,
    chemistry: "LiFePO4",
    weightGrams: 11500,
    sourceLabel: "NKON product page",
    sourceLabelUk: "NKON product page",
    sourceUrl:
      "https://www.nkon.nl/novat/eve-mb56-prismatic-628ah-lifepo4-3-2v-grade-a-single-stud-2.html",
    specifications: {
      listPosition: 3,
      nkonProductId: 5847,
      priceEur: 119,
      stockStatus: "Out of stock",
      eanGtin: "6097335184127",
      grade: "A",
      model: "MB56",
      nominalVoltageV: 3.2,
      capacityAh: 628,
      dischargeCurrentA: 314,
      included: "Busbars",
      terminalType: "M8",
      dimensionsMm: "205.1 x 352.3 x 71.7",
      heightMm: 205.1,
      widthMm: 352.3,
      thicknessMm: 71.7,
      sourceCategoryUrl:
        "https://www.nkon.nl/novat/rechargeable/lifepo4.html?product_list_order=price&product_list_dir=desc",
      additionalImages: [
        "https://www.nkon.nl/media/catalog/product/cache/634f00c0cac7a25d9ea011187773489b/i/m/image_template_nkon3336_0008_layer_64.jpg",
        "https://www.nkon.nl/media/catalog/product/cache/634f00c0cac7a25d9ea011187773489b/i/m/image_template_nkon3336_0010_layer_62.jpg",
      ],
    },
  },
  {
    categorySlug: "batteries",
    manufacturer: "EVE",
    model: "MB56 Prismatic 628Ah LiFePO4 3.2V Single Stud - Grade A-",
    slug: "nkon-eve-mb56-prismatic-628ah-lifepo4-3-2v-grade-a-minus-single-stud",
    summary:
      "Grade A- EVE MB56 prismatic LiFePO4 cell from NKON with 628 Ah capacity, 3.2 V nominal voltage, busbars, and M8 terminal.",
    summaryUk:
      "Grade A- EVE MB56 prismatic LiFePO4 cell from NKON with 628 Ah capacity, 3.2 V nominal voltage, busbars, and M8 terminal.",
    imagePath:
      "https://www.nkon.nl/media/catalog/product/cache/d7e8d6be31dedc3e13513f59c64d138b/m/b/mb56_3_.jpg",
    priceCents: 10995,
    productCode: "NKON-5846",
    nominalVoltageV: 3,
    capacityWh: 2010,
    chemistry: "LiFePO4",
    weightGrams: 11500,
    sourceLabel: "NKON product page",
    sourceLabelUk: "NKON product page",
    sourceUrl:
      "https://www.nkon.nl/novat/eve-mb56-prismatic-628ah-lifepo4-3-2v-grade-a-single-stud.html",
    specifications: {
      listPosition: 4,
      nkonProductId: 5846,
      priceEur: 109.95,
      stockStatus: "In stock",
      eanGtin: "6097335184127",
      grade: "A-",
      model: "MB56",
      nominalVoltageV: 3.2,
      capacityAh: 628,
      dischargeCurrentA: 314,
      included: "Busbars",
      terminalType: "M8",
      dimensionsMm: "205.1 x 352.3 x 71.7",
      heightMm: 205.1,
      widthMm: 352.3,
      thicknessMm: 71.7,
      sourceCategoryUrl:
        "https://www.nkon.nl/novat/rechargeable/lifepo4.html?product_list_order=price&product_list_dir=desc",
      additionalImages: [
        "https://www.nkon.nl/media/catalog/product/cache/634f00c0cac7a25d9ea011187773489b/_/_/__20260309191347.jpg",
        "https://www.nkon.nl/media/catalog/product/cache/634f00c0cac7a25d9ea011187773489b/w/h/whatsapp_image_2025-09-03_at_10.11.57_1.jpeg",
      ],
    },
  },
  {
    categorySlug: "batteries",
    manufacturer: "REPT",
    model: "7x CB3914895EA 50Ah LiFePO4 3.2V - Grade A",
    slug: "nkon-7x-rept-cb3914895ea-50ah-lifepo4-3-2v-grade-a",
    summary:
      "NKON listing for seven REPT CB3914895EA Grade A LiFePO4 cells, each rated at 50 Ah and 3.2 V.",
    summaryUk:
      "NKON listing for seven REPT CB3914895EA Grade A LiFePO4 cells, each rated at 50 Ah and 3.2 V.",
    imagePath:
      "https://www.nkon.nl/media/catalog/product/cache/d7e8d6be31dedc3e13513f59c64d138b/i/m/image_template_nkon3334_0016_layer_153_2.jpg",
    priceCents: 9000,
    productCode: "NKON-5728",
    nominalVoltageV: 3,
    capacityWh: 1120,
    chemistry: "LiFePO4",
    weightGrams: 8050,
    sourceLabel: "NKON product page",
    sourceLabelUk: "NKON product page",
    sourceUrl:
      "https://www.nkon.nl/novat/1x-rept-battero-72174l4-280ah-prismatic-280ah-lifepo4-3-2v-grade-a.html",
    specifications: {
      listPosition: 5,
      nkonProductId: 5728,
      priceEur: 90,
      stockStatus: "Out of stock",
      cellCount: 7,
      cellModel: "CB3914895EA",
      grade: "A",
      nominalVoltageV: 3.2,
      cellCapacityAh: 50,
      estimatedPackEnergyWh: 1120,
      sourceCategoryUrl:
        "https://www.nkon.nl/novat/rechargeable/lifepo4.html?product_list_order=price&product_list_dir=desc",
    },
  },
];

const seededEquipmentRows = [
  ...ankerPowerBankRows,
  ...ugreenPowerBankRows,
  ...baseusPowerBankRows,
  ...xiaomiPowerBankRows,
  ...equipmentRows.filter((row) => {
    // Keep non-catalog sections out as before, but only exclude power-banks
    // when they are provided by the separate brand seed files.
    if (
      ["batteries", "power-stations", "inverters"].includes(row.categorySlug)
    ) {
      return false;
    }
    if (
      row.categorySlug === "power-banks" &&
      ["Anker", "UGREEN", "Baseus", "Xiaomi"].includes(row.manufacturer)
    ) {
      return false;
    }
    return true;
  }),
  ...victronInverterRows,
  ...ecoFlowPowerStationRows,
  ...nkonBatteryRows,
].map(mergePowerBankCompletion);

async function upsertCategories() {
  for (const row of categories) {
    await db
      .insert(equipmentCategories)
      .values(row)
      .onConflictDoUpdate({
        target: equipmentCategories.slug,
        set: {
          name: row.name,
          nameUk: row.nameUk,
          description: row.description,
          descriptionUk: row.descriptionUk,
        },
      });
  }
}

async function upsertManufacturers() {
  for (const row of manufacturerRows) {
    await db
      .insert(manufacturers)
      .values(row)
      .onConflictDoUpdate({
        target: manufacturers.name,
        set: {
          country: row.country,
        },
      });
  }
}

async function seedEquipment() {
  const categoryRows = await db.select().from(equipmentCategories);
  const manufacturerRecords = await db.select().from(manufacturers);

  const categoryIds = new Map(categoryRows.map((row) => [row.slug, row.id]));
  const manufacturerIds = new Map(
    manufacturerRecords.map((row) => [row.name, row.id]),
  );
  const resetCategoryIds = [
    "power-banks",
    "power-stations",
    "batteries",
    "inverters",
  ]
    .map((slug) => categoryIds.get(slug))
    .filter((id): id is number => id !== undefined);

  for (const categoryId of resetCategoryIds) {
    await db.delete(equipment).where(eq(equipment.categoryId, categoryId));
  }

  for (const row of seededEquipmentRows) {
    const categoryId = categoryIds.get(row.categorySlug);
    const manufacturerId = manufacturerIds.get(row.manufacturer);

    if (!categoryId || !manufacturerId) {
      throw new Error(`Missing seed relation for ${row.slug}`);
    }

    await db
      .insert(equipment)
      .values({
        categoryId,
        manufacturerId,
        slug: row.slug,
        model: row.model,
        summary: row.summary,
        summaryUk: row.summaryUk,
        imagePath: row.imagePath,
        priceCents: row.priceCents ?? null,
        productCode: row.productCode ?? null,
        nominalVoltageV: row.nominalVoltageV ?? null,
        capacityWh: row.capacityWh ?? null,
        continuousPowerW: row.continuousPowerW ?? null,
        peakPowerW: row.peakPowerW ?? null,
        maxPvVoltageV: row.maxPvVoltageV ?? null,
        maxChargeCurrentA: row.maxChargeCurrentA ?? null,
        chemistry: row.chemistry ?? null,
        communicationProtocols: row.communicationProtocols ?? null,
        weightGrams: row.weightGrams ?? null,
        warrantyYears: row.warrantyYears ?? null,
        lifecycleCycles: row.lifecycleCycles ?? null,
        sourceLabel: row.sourceLabel,
        sourceLabelUk: row.sourceLabelUk,
        sourceUrl: row.sourceUrl ?? null,
        specifications:
          row.categorySlug === "power-banks"
            ? mergePowerBankSpecifications(row)
            : (row.specifications ?? null),
      })
      .onConflictDoUpdate({
        target: equipment.slug,
        set: {
          summary: row.summary,
          summaryUk: row.summaryUk,
          imagePath: row.imagePath,
          priceCents: row.priceCents ?? null,
          productCode: row.productCode ?? null,
          nominalVoltageV: row.nominalVoltageV ?? null,
          capacityWh: row.capacityWh ?? null,
          continuousPowerW: row.continuousPowerW ?? null,
          peakPowerW: row.peakPowerW ?? null,
          maxPvVoltageV: row.maxPvVoltageV ?? null,
          maxChargeCurrentA: row.maxChargeCurrentA ?? null,
          chemistry: row.chemistry ?? null,
          communicationProtocols: row.communicationProtocols ?? null,
          weightGrams: row.weightGrams ?? null,
          warrantyYears: row.warrantyYears ?? null,
          lifecycleCycles: row.lifecycleCycles ?? null,
          sourceLabel: row.sourceLabel,
          sourceLabelUk: row.sourceLabelUk,
          sourceUrl: row.sourceUrl ?? null,
          specifications:
            row.categorySlug === "power-banks"
              ? mergePowerBankSpecifications(row)
              : (row.specifications ?? null),
          updatedAt: new Date(),
        },
      });
  }
}

async function main() {
  await upsertCategories();
  await upsertManufacturers();
  await seedEquipment();

  const [{ seededRows }] = await db
    .select({ seededRows: count() })
    .from(equipment);

  console.log(`Seeded catalog mock data. Total product rows: ${seededRows}`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await postgresClient.end();
  });
