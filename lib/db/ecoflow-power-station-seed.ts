export type EcoFlowPowerStationSeedRow = {
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

export const ecoFlowPowerStationRows: EcoFlowPowerStationSeedRow[] = [
  {
    categorySlug: "power-stations",
    manufacturer: "EcoFlow",
    model: "DELTA 3 Classic (1024Wh)",
    slug: "ecoflow-delta-3-classic-1024wh",
    summary:
      "1,024 Wh LiFePO4 portable power station with 1,800 W AC output, 3,600 W surge, 500 W solar input, and 10 ms UPS switching.",
    summaryUk:
      "1,024 Wh LiFePO4 portable power station with 1,800 W AC output, 3,600 W surge, 500 W solar input, and 10 ms UPS switching.",
    imagePath:
      "https://media.vladyka.dev/power-station/ecoflow/ecoflow-delta-3-classic-1024wh-portable-power-station-1218691755.webp",
    priceCents: 54900,
    productCode: "EFDELTA3C-EU-CBox-L",
    nominalVoltageV: 230,
    capacityWh: 1024,
    continuousPowerW: 1800,
    peakPowerW: 3600,
    maxPvVoltageV: 60,
    chemistry: "LiFePO4",
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
        "Automotive-grade full-tab LiFePO4 cells",
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
      "2,048 Wh LiFePO4 station with 3,000 W AC output, 6,000 W surge, 1,000 W solar charging, and expandable capacity up to 10 kWh.",
    summaryUk:
      "2,048 Wh LiFePO4 station with 3,000 W AC output, 6,000 W surge, 1,000 W solar charging, and expandable capacity up to 10 kWh.",
    imagePath:
      "https://media.vladyka.dev/power-station/ecoflow/ecoflow-delta-3-max-series-portable-power-station-1197150547.webp",
    priceCents: 119900,
    productCode: "EFD3MP-EU-CBOX",
    nominalVoltageV: 230,
    capacityWh: 2048,
    continuousPowerW: 3000,
    peakPowerW: 6000,
    maxPvVoltageV: 60,
    chemistry: "LiFePO4",
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
        "Full-tab LiFePO4 cells",
      ],
    },
  },
  {
    categorySlug: "power-stations",
    manufacturer: "EcoFlow",
    model: "DELTA 2 Max",
    slug: "ecoflow-delta-2-max",
    summary:
      "Expandable 2,048 Wh LiFePO4 portable station with 2,400 W AC output, 4,800 W surge, dual 500 W solar inputs, and app control.",
    summaryUk:
      "Expandable 2,048 Wh LiFePO4 portable station with 2,400 W AC output, 4,800 W surge, dual 500 W solar inputs, and app control.",
    imagePath:
      "https://media.vladyka.dev/power-station/ecoflow/ecoflow-delta-2-max-portable-power-station-51305159590231.webp",
    priceCents: 99900,
    productCode: "EFDELTA2Max-EU",
    nominalVoltageV: 230,
    capacityWh: 2048,
    continuousPowerW: 2400,
    peakPowerW: 4800,
    maxPvVoltageV: 60,
    chemistry: "LiFePO4",
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
      "1,024 Wh LiFePO4 station with 1,800 W AC output, 2,700 W surge, 500 W solar input, and Wi-Fi/Bluetooth control.",
    summaryUk:
      "1,024 Wh LiFePO4 station with 1,800 W AC output, 2,700 W surge, 500 W solar input, and Wi-Fi/Bluetooth control.",
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
    chemistry: "LiFePO4",
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
      "1,024 Wh LiFePO4 station with 1,800 W AC output, 3,600 W surge, expandable capacity to 5 kWh, and 5-year warranty.",
    summaryUk:
      "1,024 Wh LiFePO4 station with 1,800 W AC output, 3,600 W surge, expandable capacity to 5 kWh, and 5-year warranty.",
    imagePath:
      "https://media.vladyka.dev/power-station/ecoflow/ecoflow-delta-3-series-portable-power-station-60905350299991.webp",
    priceCents: 74900,
    productCode: "EFDELTA3-EU",
    nominalVoltageV: 230,
    capacityWh: 1024,
    continuousPowerW: 1800,
    peakPowerW: 3600,
    maxPvVoltageV: 60,
    chemistry: "LiFePO4",
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
