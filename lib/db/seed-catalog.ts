import { count, eq } from "drizzle-orm";

import { db, postgresClient } from "@/lib/db";
import { equipment, equipmentCategories, manufacturers } from "@/lib/db/schema";

const categories = [
  {
    slug: "power-banks",
    name: "Power Banks",
    nameUk: "Повербанки",
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
] as const;

type SeedEquipment = {
  categorySlug: (typeof categories)[number]["slug"];
  manufacturer: (typeof manufacturerRows)[number]["name"];
  model: string;
  slug: string;
  summary: string;
  summaryUk: string;
  imagePath: string;
  priceCents?: number | null;
  productCode?: string;
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
  sourceUrl?: string;
  specifications?: Record<string, unknown>;
};

const equipmentRows: SeedEquipment[] = [
  {
    categorySlug: "power-banks",
    manufacturer: "Xiaomi",
    model: "UltraThin Magnetic Power Bank 5000 15W",
    slug: "xiaomi-ultrathin-magnetic-power-bank-5000-15w",
    summary:
      "Ultra-slim magnetic power bank with 15 W wireless charging, 22.5 W USB-C output, and two-device charging.",
    summaryUk:
      "Ultra-slim magnetic power bank with 15 W wireless charging, 22.5 W USB-C output, and two-device charging.",
    imagePath:
      "https://i02.appmifile.com/835_operatorx_operatorx_opx/06/02/2026/39c0de98f9e4ab7d06e0660e3a34bd9a.png",
    priceCents: null,
    productCode: "MDY-20-EB",
    nominalVoltageV: 5,
    capacityWh: 19,
    continuousPowerW: 23,
    peakPowerW: 23,
    maxChargeCurrentA: 3,
    chemistry: "Lithium-ion",
    chemistryUk: "Літій-іонний",
    weightGrams: 98,
    sourceLabel: "Xiaomi official specs",
    sourceUrl:
      "https://www.mi.com/global/product/xiaomi-ultrathin-magnetic-power-bank-5000-15w/specs/",
    specifications: {
      ratedCapacityMah: 3000,
      ratedCapacityAt: "5V/2A",
      ratedEnergyWh: 18.58,
      typicalEnergyWh: 18.95,
      typicalCapacityMah: 5000,
      batteryVoltageV: 3.79,
      maxOutputW: 22.5,
      wirelessOutputW: 15,
      iphoneWirelessOutputW: 7.5,
      simultaneousOutput: "USB-C 5V/1.5A 7.5W max + wireless 5W max",
      dimensionsMm: "98.5 x 71.5 x 6",
      operatingFrequencyKhz: "120-147",
      wirelessChargingMechanism: "Magnetic induction",
      outputPorts: ["USB-C", "Wireless magnetic charging"],
      features: [
        "6 mm thin body",
        "Aluminium alloy shell",
        "Dual-NTC temperature control",
        "Ten layers of safety protection",
        "Air-travel suitable under 100 Wh",
      ],
      compatibleDeviceFamilies: [
        "Xiaomi 12-15 series",
        "iPhone 12-17 series",
        "Samsung Galaxy S23-S25",
        "Google Pixel 9-10",
      ],
      packageContents: ["Power bank", "User manual", "Warranty card"],
      listPosition: 1,
    },
    sourceLabelUk: "Xiaomi official specs",
  },
  {
    categorySlug: "power-banks",
    manufacturer: "Xiaomi",
    model: "Magnetic Power Bank 10000 with Built-in Stand",
    slug: "xiaomi-magnetic-power-bank-10000-with-built-in-stand",
    summary:
      "Magnetic 10,000 mAh-class bank with an adjustable stand, integrated USB-C cable, display, and three-device charging.",
    summaryUk:
      "Magnetic 10,000 mAh-class bank with an adjustable stand, integrated USB-C cable, display, and three-device charging.",
    imagePath:
      "https://i02.appmifile.com/723_operatorx_operatorx_opx/15/09/2025/f857732c9d6f01ad11b20280c57783ea.png",
    priceCents: null,
    productCode: "WPB1007Z",
    nominalVoltageV: 5,
    capacityWh: 37,
    continuousPowerW: 33,
    peakPowerW: 33,
    maxChargeCurrentA: 3,
    chemistry: "Lithium-ion",
    chemistryUk: "Літій-іонний",
    weightGrams: 229,
    communicationProtocols: "BC1.2, PD2.0, PD3.0 PPS, QC2.0, QC3.0, Apple 2.4A",
    sourceLabel: "Xiaomi official specs",
    sourceUrl:
      "https://www.mi.com/global/product/xiaomi-magnetic-power-bank-10000-with-built-in-stand/specs/",
    specifications: {
      ratedCapacityMah: 5900,
      ratedCapacityAt: "5V/3A",
      ratedEnergyWh: 37,
      typicalCapacityMah: 10000,
      batteryVoltageV: 7.4,
      maxInputW: 30,
      maxOutputW: 33,
      wirelessOutputW: 15,
      simultaneousOutput: "15W max wired and wireless",
      dimensionsMm: "108.8 x 68.9 x 20.25",
      inputPorts: ["Integrated USB-C cable", "USB-C"],
      outputPorts: [
        "Integrated USB-C cable",
        "USB-C",
        "Wireless magnetic charging",
      ],
      chargingProtocols: [
        "BC1.2",
        "PD2.0",
        "PD3.0 PPS",
        "QC2.0",
        "QC3.0",
        "Apple 2.4A",
      ],
      features: [
        "Adjustable built-in stand opens to about 80 degrees",
        "13N magnetic force",
        "Digital display",
        "Pass-through charging",
        "Nine layers of safety protection",
      ],
      packageContents: [
        "Xiaomi Magnetic Power Bank 10000 with Built-in Stand",
        "User manual",
      ],
      listPosition: 2,
    },
    sourceLabelUk: "Xiaomi official specs",
  },
  {
    categorySlug: "power-banks",
    manufacturer: "Xiaomi",
    model: "67W Power Bank 10000 (Integrated Cable)",
    slug: "xiaomi-67w-power-bank-10000-integrated-cable",
    summary:
      "Fast 67 W USB-C power bank with integrated cable, 65 W self-charging, USB-A output, display, and pass-through charging.",
    summaryUk:
      "Fast 67 W USB-C power bank with integrated cable, 65 W self-charging, USB-A output, display, and pass-through charging.",
    imagePath:
      "https://i02.appmifile.com/411_operatorx_operatorx_opx/10/09/2025/686a0afb4f10204d55178271808a738e.png",
    priceCents: null,
    productCode: "PB1067",
    nominalVoltageV: 5,
    capacityWh: 39,
    continuousPowerW: 67,
    peakPowerW: 67,
    maxChargeCurrentA: 3,
    chemistry: "Lithium-ion",
    chemistryUk: "Літій-іонний",
    weightGrams: 247,
    sourceLabel: "Xiaomi official specs",
    sourceUrl:
      "https://www.mi.com/global/product/xiaomi-67w-power-bank-10000-integrated-cable/specs/",
    specifications: {
      ratedCapacityMah: 6000,
      ratedCapacityAt: "5V/3A",
      ratedEnergyWh: 39.48,
      batteryCells: "Three 3400mAh cells",
      batteryVoltageV: 11.61,
      maxInputW: 65,
      maxOutputW: 67,
      dimensionsMm: "115 x 66 x 26 excluding integrated cable",
      operatingTemperatureC: "5 to 35",
      chargingTime: [
        "Approx. 1.9h with 9V/3A charger",
        "Approx. 1.3h with 20V/3.25A charger",
      ],
      inputPorts: ["Integrated USB-C cable", "USB-C"],
      outputPorts: ["Integrated USB-C cable", "USB-C", "USB-A"],
      features: [
        "Charge three devices simultaneously",
        "Pass-through charging",
        "Digital display",
        "9 safety features",
        "Air-travel suitable under 100 Wh",
      ],
      packageContents: [
        "Xiaomi 67W Power Bank 10000 (Integrated Cable)",
        "User manual",
        "Warranty card",
      ],
      listPosition: 3,
    },
    sourceLabelUk: "Xiaomi official specs",
  },
  {
    categorySlug: "power-banks",
    manufacturer: "Xiaomi",
    model: "67W Power Bank 20000 (Integrated Cable)",
    slug: "xiaomi-67w-power-bank-20000-integrated-cable",
    summary:
      "Higher-capacity 67 W power bank with integrated USB-C cable, USB-C and USB-A ports, and 65 W self-charging.",
    summaryUk:
      "Higher-capacity 67 W power bank with integrated USB-C cable, USB-C and USB-A ports, and 65 W self-charging.",
    imagePath:
      "https://i02.appmifile.com/11_operatorx_operatorx_opx/18/08/2025/78d1b5791d5ac17aee35cf143b53580d.png",
    priceCents: null,
    productCode: "PB2067",
    nominalVoltageV: 5,
    capacityWh: 74,
    continuousPowerW: 67,
    peakPowerW: 67,
    maxChargeCurrentA: 3,
    chemistry: "Lithium-ion",
    chemistryUk: "Lithium-ion",
    weightGrams: 415,
    sourceLabel: "Xiaomi official specs",
    sourceLabelUk: "Xiaomi official specs",
    sourceUrl:
      "https://www.mi.com/global/product/xiaomi-67w-power-bank-20000-integrated-cable/specs/",
    specifications: {
      ratedCapacityMah: 12000,
      ratedCapacityAt: "5V/3A",
      ratedEnergyWh: 74.37,
      batteryVoltageV: 11.1,
      batteryCapacityMahAtVoltage: 6700,
      typicalCapacityMah: 20000,
      maxInputW: 65,
      maxOutputW: 67,
      dimensionsMm: "140 x 72 x 31.2",
      inputPorts: ["Integrated USB-C cable", "USB-C"],
      outputPorts: ["Integrated USB-C cable", "USB-C", "USB-A"],
      features: [
        "67W max fast output",
        "65W max high-speed self-charging",
        "Integrated USB-C cable",
        "Multi-port output",
        "Air-travel suitable under 100 Wh",
      ],
      packageContents: [
        "Xiaomi 67W Power Bank 20000 (Integrated Cable)",
        "User manual",
      ],
      listPosition: 4,
    },
  },
  {
    categorySlug: "power-banks",
    manufacturer: "Xiaomi",
    model: "Super Slim Magnetic Power Bank 5000",
    slug: "xiaomi-super-slim-magnetic-power-bank-5000",
    summary:
      "Slim magnetic 5,000 mAh power bank with aluminium body, USB-C input/output, and up to 22.5 W wired output.",
    summaryUk:
      "Slim magnetic 5,000 mAh power bank with aluminium body, USB-C input/output, and up to 22.5 W wired output.",
    imagePath:
      "https://i02.appmifile.com/107_operatorx_operatorx_opx/15/07/2025/daad9ee33362ca155392459e09c9b996.png",
    priceCents: null,
    productCode: "WPB0507S",
    nominalVoltageV: 5,
    capacityWh: 19,
    continuousPowerW: 23,
    peakPowerW: 23,
    maxChargeCurrentA: 3,
    chemistry: "Lithium-ion",
    chemistryUk: "Lithium-ion",
    weightGrams: 122,
    sourceLabel: "Xiaomi official specs",
    sourceLabelUk: "Xiaomi official specs",
    sourceUrl:
      "https://www.mi.com/global/product/xiaomi-super-slim-magnetic-power-bank-5000/specs/",
    specifications: {
      ratedCapacityMah: 3000,
      ratedCapacityAt: "5V",
      ratedEnergyWh: 19.35,
      typicalCapacityMah: 5000,
      batteryVoltageV: 3.87,
      maxInputW: 20,
      maxOutputW: 22.5,
      dimensionsMm: "102 x 69.6 x 8.7",
      inputPorts: ["USB-C"],
      outputPorts: ["USB-C", "Wireless magnetic charging"],
      features: [
        "Approx. 8.7 mm thick",
        "Meticulously crafted aluminium body",
        "USB-C wired output up to 22.5W",
      ],
      packageContents: [
        "Xiaomi Super Slim Magnetic Power Bank 5000",
        "USB-C to USB-C charging cable",
        "User manual",
      ],
      listPosition: 5,
    },
  },
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
    summaryUk: "Захищений LFP модуль для компактних низьковольтних систем.",
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
  const powerBankCategoryId = categoryIds.get("power-banks");

  if (powerBankCategoryId) {
    await db
      .delete(equipment)
      .where(eq(equipment.categoryId, powerBankCategoryId));
  }

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
        priceCents: row.priceCents ?? null,
        productCode: row.productCode ?? null,
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
        sourceUrl: row.sourceUrl ?? null,
        specifications: row.specifications ?? null,
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
          chemistryUk: row.chemistryUk ?? null,
          communicationProtocols: row.communicationProtocols ?? null,
          weightGrams: row.weightGrams ?? null,
          warrantyYears: row.warrantyYears ?? null,
          lifecycleCycles: row.lifecycleCycles ?? null,
          sourceLabel: row.sourceLabel,
          sourceLabelUk: row.sourceLabelUk,
          sourceUrl: row.sourceUrl ?? null,
          specifications: row.specifications ?? null,
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
