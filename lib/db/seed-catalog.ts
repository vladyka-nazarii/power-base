import { count, eq } from "drizzle-orm";

import powerBankMissingDataCompletion from "@/docs/POWER_BANK_MISSING_DATA_COMPLETION.json";
import { db, postgresClient } from "@/lib/db";
import { ankerPowerBankRows } from "@/lib/db/anker-power-bank-seed";
import { ankerPowerStationRows } from "@/lib/db/anker-power-station-seed";
import { bakBatteryRows } from "@/lib/db/bak-battery-seed";
import { baseusPowerBankRows } from "@/lib/db/baseus-power-bank-seed";
import { bluettiPowerStationRows } from "@/lib/db/bluetti-power-station-seed";
import { cbakBatteryRows } from "@/lib/db/cbak-battery-seed";
import { ecoFlowPowerStationRows } from "@/lib/db/ecoflow-power-station-seed";
import { envisionBatteryRows } from "@/lib/db/envision-battery-seed";
import { eveBatteryRows } from "@/lib/db/eve-battery-seed";
import { equipment, equipmentCategories, manufacturers } from "@/lib/db/schema";
import { tenpowerBatteryRows } from "@/lib/db/tenpower-battery-seed";
import { ugreenPowerBankRows } from "@/lib/db/ugreen-power-bank-seed";
import { xiaomiPowerBankRows } from "@/lib/db/xiaomi-power-bank-seed";
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
  { name: "CBAK", country: "China" },
  { name: "Tenpower", country: "China" },
  { name: "Envision AESC", country: "China" },
  { name: "BAK", country: "China" },
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

const equipmentTypeUk: Record<string, string> = {
  batteries: "акумулятор",
  inverters: "інвертор",
  "power-banks": "павербанк",
  "power-stations": "портативна електростанція",
};

function formatSpecificationUk(value: number) {
  return value.toLocaleString("uk-UA").replaceAll("\u00a0", " ");
}

function localizeSeedSummary(row: SeedEquipment): SeedEquipment {
  if (row.summaryUk !== row.summary) {
    return row;
  }

  const equipmentType =
    equipmentTypeUk[row.categorySlug] ?? "енергетичне обладнання";
  const specifications = [
    row.capacityWh
      ? `запас енергії ${formatSpecificationUk(row.capacityWh)} Вт·год`
      : null,
    row.continuousPowerW
      ? `номінальну потужність ${formatSpecificationUk(row.continuousPowerW)} Вт`
      : null,
    row.peakPowerW && row.peakPowerW !== row.continuousPowerW
      ? `пікову потужність ${formatSpecificationUk(row.peakPowerW)} Вт`
      : null,
  ].filter((value): value is string => value !== null);
  const specificationText =
    specifications.length > 0 ? ` Має ${specifications.join(", ")}.` : "";

  return {
    ...row,
    summaryUk: `${row.model} від ${row.manufacturer} — ${equipmentType}.${specificationText}`,
  };
}

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
  ...ankerPowerStationRows,
  ...bluettiPowerStationRows,
  ...ecoFlowPowerStationRows,
  ...cbakBatteryRows,
  ...eveBatteryRows,
  ...tenpowerBatteryRows,
  ...envisionBatteryRows,
  ...bakBatteryRows,
]
  .map(localizeSeedSummary)
  .map(mergePowerBankCompletion);

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
