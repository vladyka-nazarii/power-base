import { count } from "drizzle-orm";

import { db, postgresClient } from "@/lib/db";
import {
  equipment,
  equipmentCategories,
  manufacturers,
} from "@/lib/db/schema";

const categories = [
  {
    slug: "power-banks",
    name: "Power Banks",
    nameUk: "Повербанки",
    description: "Portable USB and DC battery packs for phones, laptops, and field kits.",
    descriptionUk:
      "Портативні USB та DC акумулятори для телефонів, ноутбуків і польових комплектів.",
  },
  {
    slug: "power-stations",
    name: "Power Stations",
    nameUk: "Портативні електростанції",
    description: "Portable AC power stations for backup power, camping, and light jobsite use.",
    descriptionUk:
      "Портативні AC електростанції для резервного живлення, кемпінгу та легких робочих задач.",
  },
  {
    slug: "batteries",
    name: "Batteries",
    nameUk: "Акумулятори",
    description: "Standalone battery modules for off-grid, hybrid, and backup systems.",
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
] as const;

type SeedEquipment = {
  categorySlug: (typeof categories)[number]["slug"];
  manufacturer: (typeof manufacturerRows)[number]["name"];
  model: string;
  slug: string;
  summary: string;
  summaryUk: string;
  imagePath: string;
  priceCents: number;
  nominalVoltageV?: number;
  capacityWh?: number;
  continuousPowerW?: number;
  peakPowerW?: number;
  maxPvVoltageV?: number;
  maxChargeCurrentA?: number;
  chemistry?: string;
  chemistryUk?: string;
  communicationProtocols?: string;
  weightGrams?: number;
  warrantyYears?: number;
  lifecycleCycles?: number;
  sourceLabel: string;
  sourceLabelUk: string;
};

const equipmentRows: SeedEquipment[] = [
  {
    categorySlug: "power-banks",
    manufacturer: "Anker",
    model: "Prime 27K",
    slug: "anker-prime-27k",
    summary: "Travel-friendly USB-C power bank with high-output laptop charging.",
    summaryUk:
      "Зручний для подорожей USB-C повербанк з потужною зарядкою ноутбуків.",
    imagePath: "/catalog/power-bank.svg",
    priceCents: 17900,
    nominalVoltageV: 5,
    capacityWh: 99,
    peakPowerW: 250,
    maxChargeCurrentA: 5,
    chemistry: "Li-ion",
    chemistryUk: "Літій-іонний",
    weightGrams: 665,
    warrantyYears: 2,
    lifecycleCycles: 500,
    sourceLabel: "Mock manufacturer datasheet",
    sourceLabelUk: "Тестовий даташит виробника",
  },
  {
    categorySlug: "power-banks",
    manufacturer: "Zendure",
    model: "SuperTank Pro",
    slug: "zendure-supertank-pro",
    summary: "Four-port laptop bank with OLED status and pass-through charging.",
    summaryUk:
      "Повербанк для ноутбуків із чотирма портами, OLED-індикатором і наскрізною зарядкою.",
    imagePath: "/catalog/power-bank.svg",
    priceCents: 22900,
    nominalVoltageV: 5,
    capacityWh: 100,
    peakPowerW: 138,
    maxChargeCurrentA: 5,
    chemistry: "Li-ion",
    chemistryUk: "Літій-іонний",
    weightGrams: 575,
    warrantyYears: 2,
    lifecycleCycles: 500,
    sourceLabel: "Mock product page",
    sourceLabelUk: "Тестова сторінка продукту",
  },
  {
    categorySlug: "power-banks",
    manufacturer: "EcoFlow",
    model: "Rapid 25K",
    slug: "ecoflow-rapid-25k",
    summary: "Slim USB-C pack for daily carry and quick top-ups.",
    summaryUk:
      "Тонкий USB-C акумулятор для щоденного носіння та швидкого дозаряджання.",
    imagePath: "/catalog/power-bank.svg",
    priceCents: 14900,
    nominalVoltageV: 5,
    capacityWh: 92,
    peakPowerW: 170,
    maxChargeCurrentA: 5,
    chemistry: "Li-ion",
    chemistryUk: "Літій-іонний",
    weightGrams: 520,
    warrantyYears: 2,
    lifecycleCycles: 600,
    sourceLabel: "Mock retail listing",
    sourceLabelUk: "Тестова картка магазину",
  },
  {
    categorySlug: "inverters",
    manufacturer: "Victron Energy",
    model: "MultiPlus-II 48/5000",
    slug: "victron-multiplus-ii-48-5000",
    summary: "48 V inverter-charger for off-grid and ESS installations.",
    summaryUk:
      "Інвертор-зарядний пристрій 48 В для автономних систем і ESS.",
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
    chemistryUk: "LiFePO4",
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
    chemistryUk: "LiFePO4",
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
    summaryUk:
      "Захищений LFP модуль для компактних низьковольтних систем.",
    imagePath: "/catalog/battery.svg",
    priceCents: 132500,
    nominalVoltageV: 24,
    capacityWh: 2560,
    maxChargeCurrentA: 100,
    chemistry: "LiFePO4",
    chemistryUk: "LiFePO4",
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
    chemistryUk: "LiFePO4",
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
    chemistryUk: "LiFePO4",
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
    chemistryUk: "LiFePO4",
    weightGrams: 30500,
    warrantyYears: 5,
    lifecycleCycles: 3000,
    sourceLabel: "Mock quick-start guide",
    sourceLabelUk: "Тестовий короткий посібник",
  },
];

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

  for (const row of equipmentRows) {
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
        priceCents: row.priceCents,
        nominalVoltageV: row.nominalVoltageV ?? null,
        capacityWh: row.capacityWh ?? null,
        continuousPowerW: row.continuousPowerW ?? null,
        peakPowerW: row.peakPowerW ?? null,
        maxPvVoltageV: row.maxPvVoltageV ?? null,
        maxChargeCurrentA: row.maxChargeCurrentA ?? null,
        chemistry: row.chemistry ?? null,
        chemistryUk: row.chemistryUk ?? null,
        communicationProtocols: row.communicationProtocols ?? null,
        weightGrams: row.weightGrams ?? null,
        warrantyYears: row.warrantyYears ?? null,
        lifecycleCycles: row.lifecycleCycles ?? null,
        sourceLabel: row.sourceLabel,
        sourceLabelUk: row.sourceLabelUk,
      })
      .onConflictDoUpdate({
        target: equipment.slug,
        set: {
          summary: row.summary,
          summaryUk: row.summaryUk,
          imagePath: row.imagePath,
          priceCents: row.priceCents,
          nominalVoltageV: row.nominalVoltageV ?? null,
          capacityWh: row.capacityWh ?? null,
          continuousPowerW: row.continuousPowerW ?? null,
          peakPowerW: row.peakPowerW ?? null,
          maxPvVoltageV: row.maxPvVoltageV ?? null,
          maxChargeCurrentA: row.maxChargeCurrentA ?? null,
          chemistry: row.chemistry ?? null,
          chemistryUk: row.chemistryUk ?? null,
          communicationProtocols: row.communicationProtocols ?? null,
          weightGrams: row.weightGrams ?? null,
          warrantyYears: row.warrantyYears ?? null,
          lifecycleCycles: row.lifecycleCycles ?? null,
          sourceLabel: row.sourceLabel,
          sourceLabelUk: row.sourceLabelUk,
          updatedAt: new Date(),
        },
      });
  }
}

async function main() {
  await upsertCategories();
  await upsertManufacturers();
  await seedEquipment();

  const [{ seededRows }] = await db.select({ seededRows: count() }).from(equipment);

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
