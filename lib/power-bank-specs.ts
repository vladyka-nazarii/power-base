export const powerBankFilterDefinitions = [
  {
    id: "capacityWh",
    name: "Capacity",
    type: "number",
    unit: "Wh",
    description:
      "Real energy capacity in Watt-hours to accurately reflect stored energy.",
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
      "LiFePO4 (LFP)",
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
    name: "Max Output Power",
    type: "number",
    unit: "W",
    description: "Maximum combined wattage the power bank can deliver.",
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
  "LiFePO4 (LFP)",
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
  batteryChemistry?: PowerBankChemistry;
  supportedOutputProtocols?: PowerBankProtocol[];
  maxInputPower?: number;
  maxOutputPower?: number;
  passthroughCharging?: boolean;
  gravimetricDensity?: number;
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

function normalizeChemistry(
  chemistry: string | null | undefined,
  specifications: Record<string, unknown>,
): PowerBankChemistry | undefined {
  const text = textBag(chemistry, specifications.batteryCells).toLowerCase();

  if (text.includes("lifepo4") || text.includes("lfp")) {
    return "LiFePO4 (LFP)";
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
  const protocols = normalizeProtocols(
    input.communicationProtocols,
    specifications,
  );
  const wirelessOutputPower = firstNumber(
    specifications.wirelessChargingMaxPower,
    specifications.wirelessOutputW,
    specifications.iphoneWirelessOutputW,
  );

  return {
    ...(capacityWh !== undefined ? { capacityWh } : {}),
    ...(normalizeChemistry(input.chemistry, specifications)
      ? {
          batteryChemistry: normalizeChemistry(input.chemistry, specifications),
        }
      : {}),
    ...(protocols.length > 0 ? { supportedOutputProtocols: protocols } : {}),
    ...(maxInputPower !== undefined ? { maxInputPower } : {}),
    ...(maxOutputPower !== undefined ? { maxOutputPower } : {}),
    ...(inferPassthroughCharging(specifications) !== undefined
      ? { passthroughCharging: inferPassthroughCharging(specifications) }
      : {}),
    ...(capacityWh !== undefined && weight !== undefined && weight > 0
      ? {
          gravimetricDensity: Number((capacityWh / (weight / 1000)).toFixed(1)),
        }
      : {}),
    ...(parseDimensionsMm(specifications.dimensionsMm)
      ? { dimensions: parseDimensionsMm(specifications.dimensionsMm) }
      : {}),
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
