export const powerBankFilterDefinitions = [
  {
    id: "capacityWh",
    name: "Rated Energy",
    type: "number",
    unit: "Wh",
    description:
      "Real energy capacity in Watt-hours to accurately reflect stored energy.",
  },
  {
    id: "usableEnergyWh",
    name: "Real Usable Energy",
    type: "number",
    unit: "Wh",
    description: "Measured energy delivered at the test voltage and load.",
  },
  {
    id: "conversionEfficiencyPercent",
    name: "Conversion Efficiency",
    type: "number",
    unit: "%",
    description: "Measured usable output energy divided by stored energy.",
  },
  {
    id: "batteryChemistry",
    name: "Battery Chemistry",
    type: "enum",
    options: [
      "Li-Po",
      "Li-ion",
      "Li-ion (18650)",
      "Li-ion (21700)",
      "Silicon-Carbon (Si-C)",
      "LiFePO4",
      "Semi-Solid State",
    ],
    description:
      "Type of battery cells used, affecting lifespan and form factor.",
  },
  {
    id: "supportedOutputProtocols",
    name: "Output Protocols",
    type: "array",
    options: [
      "PD 3.0",
      "PD 3.1",
      "PPS",
      "QC 3.0",
      "QC 4.0",
      "AFC",
      "FCP",
      "SCP",
      "SuperVOOC",
    ],
    description: "Supported fast charging protocols on output ports.",
  },
  {
    id: "maxInputPower",
    name: "Max Input Power",
    type: "number",
    unit: "W",
    description: "Maximum wattage the power bank can accept for self-charging.",
  },
  {
    id: "maxOutputPower",
    name: "Max Combined Output Power",
    type: "number",
    unit: "W",
    description: "Maximum combined wattage the power bank can deliver.",
  },
  {
    id: "maxSinglePortOutputPower",
    name: "Max Single-Port Output",
    type: "number",
    unit: "W",
  },
  {
    id: "supports12vPdOutput",
    name: "12V PD Output Support",
    type: "boolean",
  },
  {
    id: "passthroughCharging",
    name: "Passthrough Charging",
    type: "boolean",
    description:
      "Supports charging a connected device while the power bank itself is being charged.",
  },
  {
    id: "gravimetricDensity",
    name: "Gravimetric Density",
    type: "number",
    unit: "Wh/kg",
    description:
      "Energy-to-weight ratio (Capacity in Wh divided by weight in kg).",
  },
  {
    id: "volumetricDensity",
    name: "Volumetric Density",
    type: "number",
    unit: "Wh/L",
  },
  {
    id: "rechargeTimeMinutes",
    name: "Full Recharge Time",
    type: "number",
    unit: "min",
  },
  {
    id: "thermalThrottleMinutes",
    name: "Sustained Max Output Before Thermal Throttling",
    type: "number",
    unit: "min",
  },
  {
    id: "airlineSafe",
    name: "Airline Safe (at or below 100Wh)",
    type: "boolean",
  },
  {
    id: "safetyCertifications",
    name: "Safety Certifications",
    type: "array",
  },
  {
    id: "dimensions",
    name: "Dimensions",
    type: "object",
    properties: {
      length: { type: "number", unit: "mm" },
      width: { type: "number", unit: "mm" },
      thickness: { type: "number", unit: "mm" },
    },
  },
  {
    id: "weight",
    name: "Weight",
    type: "number",
    unit: "g",
  },
  {
    id: "displayType",
    name: "Display Type",
    type: "enum",
    options: [
      "LED Indicators (Dots)",
      "Digital Display (%)",
      "Smart Screen (TFT/OLED with V/A stats)",
    ],
  },
  {
    id: "price",
    name: "Price",
    type: "number",
    unit: "USD",
    description: "Retail price for calculating the Value ratio (Wh per $).",
  },
  {
    id: "builtInCable",
    name: "Built-in Cable",
    type: "enum",
    options: ["None", "USB-C", "Lightning", "Micro-USB", "Multiple"],
    description:
      "Presence and type of an integrated, non-removable charging cable.",
  },
  {
    id: "wirelessChargingMaxPower",
    name: "Wireless Charging Max Power",
    type: "number",
    unit: "W",
    description:
      "Maximum wattage for wireless output (e.g., Qi or MagSafe). Value should be 0 if unsupported.",
  },
] as const;

export const powerBankChemistryOptions = [
  "Li-Po",
  "Li-ion",
  "Li-ion (18650)",
  "Li-ion (21700)",
  "Silicon-Carbon (Si-C)",
  "LiFePO4",
  "Semi-Solid State",
] as const;

export const powerBankProtocolOptions = [
  "PD 3.0",
  "PD 3.1",
  "PPS",
  "QC 3.0",
  "QC 4.0",
  "AFC",
  "FCP",
  "SCP",
  "SuperVOOC",
] as const;

export const powerBankDisplayOptions = [
  "LED Indicators (Dots)",
  "Digital Display (%)",
  "Smart Screen (TFT/OLED with V/A stats)",
] as const;

export const powerBankBuiltInCableOptions = [
  "None",
  "USB-C",
  "Lightning",
  "Micro-USB",
  "Multiple",
] as const;

export type PowerBankChemistry = (typeof powerBankChemistryOptions)[number];
export type PowerBankProtocol = (typeof powerBankProtocolOptions)[number];
export type PowerBankDisplayType = (typeof powerBankDisplayOptions)[number];
export type PowerBankBuiltInCable =
  (typeof powerBankBuiltInCableOptions)[number];

const powerBankOptionLabelsUk: Record<string, string> = {
  "Li-Po": "Літій-полімерна (Li-Po)",
  "Li-ion": "Літій-іонна (Li-ion)",
  "Li-ion (18650)": "Літій-іонна (18650)",
  "Li-ion (21700)": "Літій-іонна (21700)",
  "LED Indicators (Dots)": "Світлодіодні індикатори",
  "Digital Display (%)": "Цифровий дисплей (%)",
  "Smart Screen (TFT/OLED with V/A stats)":
    "Розумний екран (TFT/OLED зі статистикою В/А)",
  None: "Немає",
  Lightning: "Lightning",
  "Micro-USB": "Micro-USB",
  Multiple: "Кілька",
  "Silicon-Carbon (Si-C)": "Кремній-вуглецева (Si-C)",
  "Semi-Solid State": "Напівтвердотільна",
};

export function localizePowerBankOption(value: string, locale: "en" | "uk") {
  return locale === "uk" ? (powerBankOptionLabelsUk[value] ?? value) : value;
}

const powerBankFeatureLabelsUk: Record<string, string> = {
  "10,000mAh High-Capacity Power": "Висока ємність 10 000 мА·год",
  "Ergonomic Design, Enhanced Portability":
    "Ергономічний дизайн і покращена портативність",
  "Slimmest Power Yet": "Найтонша потужна модель",
  "Ultra-Fast 15W Wireless Charging": "Надшвидке бездротове заряджання 15 Вт",
};

export function localizePowerBankFeature(value: string, locale: "en" | "uk") {
  return locale === "uk" ? (powerBankFeatureLabelsUk[value] ?? value) : value;
}

export type PowerBankDimensions = {
  length: number;
  width: number;
  thickness: number;
};

export type PowerBankSpecificationInput = {
  capacityWh?: number | null;
  chemistry?: string | null;
  communicationProtocols?: string | null;
  continuousPowerW?: number | null;
  weightGrams?: number | null;
  priceCents?: number | null;
  summary?: string | null;
  specifications?: Record<string, unknown> | null;
};

export type PowerBankSpecifications = {
  capacityWh?: number;
  usableEnergyWh?: number;
  conversionEfficiencyPercent?: number;
  batteryChemistry?: PowerBankChemistry;
  supportedOutputProtocols?: PowerBankProtocol[];
  maxInputPower?: number;
  maxOutputPower?: number;
  maxSinglePortOutputPower?: number;
  supports12vPdOutput?: boolean;
  passthroughCharging?: boolean;
  gravimetricDensity?: number;
  volumetricDensity?: number;
  rechargeTimeMinutes?: number;
  thermalThrottleMinutes?: number;
  airlineSafe?: boolean;
  safetyCertifications?: string[];
  dimensions?: PowerBankDimensions;
  weight?: number;
  displayType?: PowerBankDisplayType;
  price?: number;
  builtInCable?: PowerBankBuiltInCable;
  wirelessChargingMaxPower?: number;
};

const numberFromUnknown = (value: unknown) =>
  typeof value === "number" && Number.isFinite(value) ? value : undefined;

function firstNumber(...values: unknown[]) {
  for (const value of values) {
    const numberValue = numberFromUnknown(value);

    if (numberValue !== undefined) {
      return numberValue;
    }
  }

  return undefined;
}

function textBag(...values: unknown[]) {
  return values
    .flatMap((value) => {
      if (Array.isArray(value)) {
        return value.map((item) => String(item));
      }

      return value === null || value === undefined ? [] : [String(value)];
    })
    .join(" ");
}

function stringArray(value: unknown) {
  if (Array.isArray(value)) {
    return value.filter((item): item is string => typeof item === "string");
  }
  return typeof value === "string" ? [value] : [];
}

function inferRechargeTimeMinutes(specifications: Record<string, unknown>) {
  const explicit = firstNumber(specifications.rechargeTimeMinutes);
  if (explicit !== undefined) return explicit;
  const text = textBag(
    specifications.sourceDescription,
    specifications.descriptionText,
    specifications.features,
  );
  const match = text.match(
    /(?:fully recharge|full recharge|fully recharged|recharging)[^.!]{0,80}?(\d+(?:\.\d+)?)\s*(hours?|hrs?|minutes?|mins?)/i,
  );
  if (!match) return undefined;
  const value = Number.parseFloat(match[1]);
  return /hour|hr/i.test(match[2]) ? value * 60 : value;
}

function inferSafetyCertifications(specifications: Record<string, unknown>) {
  const explicit = stringArray(specifications.safetyCertifications);
  const text = textBag(
    explicit,
    specifications.certifications,
    specifications.sourceDescription,
    specifications.descriptionText,
    specifications.features,
  );
  const known = ["UL 2056", "CCC", "CE", "FCC", "RoHS", "Qi", "Qi2", "MFi"];
  return known.filter((certification) => {
    const escaped = certification.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return new RegExp(
      `\\b${escaped}(?:[- ]certified| certification)?\\b`,
      "i",
    ).test(text);
  });
}

function supports12vOutput(specifications: Record<string, unknown>) {
  const explicit = specifications.supports12vPdOutput;
  if (typeof explicit === "boolean") return explicit;
  const text = textBag(
    specifications.outputParameters,
    specifications.outputPorts,
  );
  return /(?:^|[,;\s])12V\s*[/x:]?\s*\d/i.test(text) ? true : undefined;
}

function inferMaxSinglePortOutputPower(
  input: PowerBankSpecificationInput,
  specifications: Record<string, unknown>,
) {
  const explicit = firstNumber(
    specifications.singlePortMaxOutputW,
    specifications.maxSinglePortOutputW,
  );
  if (explicit !== undefined) return explicit;

  const outputProfiles = stringArray(specifications.outputParameters).concat(
    stringArray(specifications.outputPorts),
  );
  const profilePowers = outputProfiles.flatMap((profile) => {
    if (/\b(?:dual|total|combined)\b/i.test(profile)) return [];
    return [
      ...profile.matchAll(/(\d+(?:\.\d+)?)V\s*[/]?\s*(\d+(?:\.\d+)?)A/gi),
    ].map((match) => Number.parseFloat(match[1]) * Number.parseFloat(match[2]));
  });
  if (profilePowers.length > 0) return Math.max(...profilePowers);

  const text = textBag(
    specifications.sourceDescription,
    specifications.descriptionText,
    specifications.features,
  );
  const statedSinglePort = text.match(
    /(?:single(?:\s+USB-C)?\s+port|per port)[^.!]{0,80}?(\d+(?:\.\d+)?)\s*W/i,
  );
  if (statedSinglePort) return Number.parseFloat(statedSinglePort[1]);
  const statedPerPort = text.match(/(\d+(?:\.\d+)?)\s*W\s+each/i);
  if (statedPerPort) return Number.parseFloat(statedPerPort[1]);

  const combinedOutputLanguage =
    /\b(?:total output|combined output|multi-device|simultaneously|shared)\b/i.test(
      text,
    );
  return combinedOutputLanguage
    ? undefined
    : firstNumber(specifications.maxOutputW, input.continuousPowerW);
}

function normalizeChemistry(
  chemistry: string | null | undefined,
  specifications: Record<string, unknown>,
): PowerBankChemistry | undefined {
  const text = textBag(chemistry, specifications.batteryCells).toLowerCase();

  if (text.includes("lifepo4") || text.includes("lfp")) {
    return "LiFePO4";
  }

  if (text.includes("silicon-carbon") || text.includes("silicon carbon")) {
    return "Silicon-Carbon (Si-C)";
  }

  if (text.includes("semi-solid") || text.includes("semi solid")) {
    return "Semi-Solid State";
  }

  if (
    text.includes("li-po") ||
    text.includes("lipo") ||
    text.includes("polymer")
  ) {
    return "Li-Po";
  }

  if (text.includes("21700")) {
    return "Li-ion (21700)";
  }

  if (text.includes("18650")) {
    return "Li-ion (18650)";
  }

  if (
    text.includes("li-ion") ||
    text.includes("li ion") ||
    text.includes("lithium-ion") ||
    text.includes("lithium ion") ||
    text.includes("lithium cell") ||
    text.includes("lithium-cell")
  ) {
    return "Li-ion";
  }

  return undefined;
}

function normalizeProtocols(
  communicationProtocols: string | null | undefined,
  specifications: Record<string, unknown>,
) {
  const text = textBag(
    communicationProtocols,
    specifications.chargingProtocols,
    specifications.outputParameters,
    specifications.outputPorts,
    specifications.sourceDescription,
    specifications.descriptionText,
  ).toLowerCase();
  const protocols: PowerBankProtocol[] = [];
  const add = (protocol: PowerBankProtocol, patterns: string[]) => {
    if (patterns.some((pattern) => text.includes(pattern))) {
      protocols.push(protocol);
    }
  };

  add("PD 3.0", [
    "pd 3.0",
    "pd3.0",
    "pd3",
    "power delivery 3.0",
    "power delivery",
    "usb-c pd",
    "usb c pd",
  ]);
  add("PD 3.1", ["pd 3.1", "pd3.1", "power delivery 3.1"]);
  add("PPS", ["pps"]);
  add("QC 3.0", ["qc 3.0", "qc3.0", "quick charge", "qc"]);
  add("QC 4.0", ["qc 4.0", "qc4.0"]);
  add("AFC", ["afc"]);
  add("FCP", ["fcp"]);
  add("SCP", ["scp"]);
  add("SuperVOOC", ["supervooc", "super vooc"]);

  if (protocols.includes("PD 3.1")) {
    protocols.push("PD 3.0");
  }

  if (protocols.includes("QC 4.0")) {
    protocols.push("QC 3.0");
  }

  return [...new Set(protocols)];
}

function inferPassthroughCharging(
  specifications: Record<string, unknown>,
): boolean | undefined {
  const text = textBag(
    specifications.features,
    specifications.sourceDescription,
    specifications.descriptionText,
    specifications.inferredInputOutputNotes,
  ).toLowerCase();

  if (
    text.includes("pass-through") ||
    text.includes("pass through") ||
    text.includes("passthrough")
  ) {
    return true;
  }

  return undefined;
}

export function parseDimensionsMm(value: unknown) {
  if (typeof value !== "string") {
    return undefined;
  }

  const dimensions = value
    .match(/\d+(?:\.\d+)?/g)
    ?.map((part) => Number.parseFloat(part))
    .filter((part) => Number.isFinite(part));

  if (!dimensions || dimensions.length < 3) {
    return undefined;
  }

  return {
    length: dimensions[0],
    width: dimensions[1],
    thickness: dimensions[2],
  };
}

function inferDisplayType(
  summary: string | null | undefined,
  specifications: Record<string, unknown>,
): PowerBankDisplayType | undefined {
  const text = textBag(
    summary,
    specifications.features,
    specifications.sourceDescription,
    specifications.descriptionText,
  ).toLowerCase();

  if (
    text.includes("smart screen") ||
    text.includes("real-time") ||
    text.includes("input and output") ||
    text.includes("input/output")
  ) {
    return "Smart Screen (TFT/OLED with V/A stats)";
  }

  if (text.includes("digital display") || text.includes("display")) {
    return "Digital Display (%)";
  }

  if (text.includes("led indicator") || text.includes("led indicators")) {
    return "LED Indicators (Dots)";
  }

  return undefined;
}

function inferBuiltInCable(
  summary: string | null | undefined,
  specifications: Record<string, unknown>,
): PowerBankBuiltInCable | undefined {
  const text = textBag(
    summary,
    specifications.features,
    specifications.inputPorts,
    specifications.outputPorts,
    specifications.sourceDescription,
    specifications.descriptionText,
  ).toLowerCase();

  if (
    !text.includes("built-in") &&
    !text.includes("integrated") &&
    !text.includes("retractable")
  ) {
    return "None";
  }

  const hasUsbC = text.includes("usb-c") || text.includes("type-c");
  const hasLightning = text.includes("lightning");
  const hasMicroUsb = text.includes("micro-usb") || text.includes("micro usb");
  const cableTypes = [hasUsbC, hasLightning, hasMicroUsb].filter(
    Boolean,
  ).length;

  if (cableTypes > 1) {
    return "Multiple";
  }

  if (hasUsbC) {
    return "USB-C";
  }

  if (hasLightning) {
    return "Lightning";
  }

  if (hasMicroUsb) {
    return "Micro-USB";
  }

  return undefined;
}

export function normalizePowerBankSpecifications(
  input: PowerBankSpecificationInput,
): PowerBankSpecifications {
  const specifications = input.specifications ?? {};
  const capacityWh = firstNumber(
    input.capacityWh,
    specifications.ratedEnergyWh,
    specifications.typicalEnergyWh,
    specifications.estimatedEnergyWh,
  );
  const weight = firstNumber(input.weightGrams);
  const maxInputPower = firstNumber(specifications.maxInputW);
  const maxOutputPower = firstNumber(
    specifications.maxOutputW,
    input.continuousPowerW,
    specifications.advertisedPowerW,
    specifications.singlePortMaxOutputW,
  );
  const maxSinglePortOutputPower = inferMaxSinglePortOutputPower(
    input,
    specifications,
  );
  const protocols = normalizeProtocols(
    input.communicationProtocols,
    specifications,
  );
  const wirelessOutputPower = firstNumber(
    specifications.wirelessChargingMaxPower,
    specifications.wirelessOutputW,
    specifications.iphoneWirelessOutputW,
  );
  const dimensions = parseDimensionsMm(specifications.dimensionsMm);
  const usableEnergyWh = firstNumber(specifications.usableEnergyWh);
  const conversionEfficiencyPercent = firstNumber(
    specifications.conversionEfficiencyPercent,
    usableEnergyWh !== undefined && capacityWh !== undefined && capacityWh > 0
      ? (usableEnergyWh / capacityWh) * 100
      : undefined,
  );
  const rechargeTimeMinutes = inferRechargeTimeMinutes(specifications);
  const thermalThrottleMinutes = firstNumber(
    specifications.thermalThrottleMinutes,
  );
  const safetyCertifications = inferSafetyCertifications(specifications);

  return {
    ...(capacityWh !== undefined ? { capacityWh } : {}),
    ...(usableEnergyWh !== undefined ? { usableEnergyWh } : {}),
    ...(conversionEfficiencyPercent !== undefined
      ? {
          conversionEfficiencyPercent: Number(
            conversionEfficiencyPercent.toFixed(1),
          ),
        }
      : {}),
    ...(normalizeChemistry(input.chemistry, specifications)
      ? {
          batteryChemistry: normalizeChemistry(input.chemistry, specifications),
        }
      : {}),
    ...(protocols.length > 0 ? { supportedOutputProtocols: protocols } : {}),
    ...(maxInputPower !== undefined ? { maxInputPower } : {}),
    ...(maxOutputPower !== undefined ? { maxOutputPower } : {}),
    ...(maxSinglePortOutputPower !== undefined
      ? { maxSinglePortOutputPower }
      : {}),
    ...(supports12vOutput(specifications) !== undefined
      ? { supports12vPdOutput: supports12vOutput(specifications) }
      : {}),
    ...(inferPassthroughCharging(specifications) !== undefined
      ? { passthroughCharging: inferPassthroughCharging(specifications) }
      : {}),
    ...(capacityWh !== undefined && weight !== undefined && weight > 0
      ? {
          gravimetricDensity: Number((capacityWh / (weight / 1000)).toFixed(1)),
        }
      : {}),
    ...(dimensions ? { dimensions } : {}),
    ...(capacityWh !== undefined && dimensions
      ? {
          volumetricDensity: Number(
            (
              capacityWh /
              ((dimensions.length * dimensions.width * dimensions.thickness) /
                1_000_000)
            ).toFixed(1),
          ),
        }
      : {}),
    ...(rechargeTimeMinutes !== undefined ? { rechargeTimeMinutes } : {}),
    ...(thermalThrottleMinutes !== undefined ? { thermalThrottleMinutes } : {}),
    ...(capacityWh !== undefined ? { airlineSafe: capacityWh <= 100 } : {}),
    ...(safetyCertifications.length > 0 ? { safetyCertifications } : {}),
    ...(weight !== undefined ? { weight } : {}),
    ...(inferDisplayType(input.summary, specifications)
      ? { displayType: inferDisplayType(input.summary, specifications) }
      : {}),
    ...(input.priceCents !== null && input.priceCents !== undefined
      ? { price: Number((input.priceCents / 100).toFixed(2)) }
      : {}),
    ...(inferBuiltInCable(input.summary, specifications)
      ? { builtInCable: inferBuiltInCable(input.summary, specifications) }
      : {}),
    ...(wirelessOutputPower !== undefined
      ? { wirelessChargingMaxPower: wirelessOutputPower }
      : {}),
  };
}

export function mergePowerBankSpecifications<
  T extends PowerBankSpecificationInput,
>(input: T) {
  return {
    ...(input.specifications ?? {}),
    ...normalizePowerBankSpecifications(input),
  };
}
