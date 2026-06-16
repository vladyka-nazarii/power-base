import { ankerPowerBankRows } from "@/lib/db/anker-power-bank-seed";
import { baseusPowerBankRows } from "@/lib/db/baseus-power-bank-seed";
import { ugreenPowerBankRows } from "@/lib/db/ugreen-power-bank-seed";
import { xiaomiPowerBankRows } from "@/lib/db/xiaomi-power-bank-seed";
import {
  parseDimensionsMm,
  type PowerBankBuiltInCable,
  type PowerBankChemistry,
  type PowerBankDimensions,
  type PowerBankDisplayType,
  type PowerBankProtocol,
} from "@/lib/power-bank-specs";

type SeedRow = (typeof ankerPowerBankRows)[number];

type CompletionSource = {
  url: string;
  fields: string[];
  note?: string;
};

type CompletionRow = {
  slug: string;
  capacityWh: number | null;
  batteryChemistry: PowerBankChemistry | null;
  supportedOutputProtocols: PowerBankProtocol[] | null;
  maxInputPower: number | null;
  maxOutputPower: number | null;
  passthroughCharging: boolean | null;
  gravimetricDensity: number | null;
  dimensions: PowerBankDimensions | null;
  weight: number | null;
  displayType: PowerBankDisplayType | null;
  price: number | null;
  builtInCable: PowerBankBuiltInCable | null;
  wirelessChargingMaxPower: number | null;
  sources: CompletionSource[];
  missingReason: Record<string, string>;
};

type CurrencyRates = {
  eurToUsd: number | null;
  eurRateDate: string | null;
};

const outputPath = "docs/POWER_BANK_MISSING_DATA_COMPLETION.json";
const fields = [
  "capacityWh",
  "batteryChemistry",
  "supportedOutputProtocols",
  "maxInputPower",
  "maxOutputPower",
  "passthroughCharging",
  "gravimetricDensity",
  "dimensions",
  "weight",
  "displayType",
  "price",
  "builtInCable",
  "wirelessChargingMaxPower",
] as const;

function numberValue(value: unknown) {
  return typeof value === "number" && Number.isFinite(value) ? value : null;
}

function firstNumber(...values: unknown[]) {
  for (const value of values) {
    const candidate = numberValue(value);

    if (candidate !== null) {
      return candidate;
    }
  }

  return null;
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

function normalizeChemistry(row: SeedRow): PowerBankChemistry | null {
  const specifications = row.specifications ?? {};
  const text = textBag(row.chemistry, specifications.batteryCells).toLowerCase();

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

  return null;
}

function normalizeProtocols(row: SeedRow): PowerBankProtocol[] | null {
  const specifications = row.specifications ?? {};
  const text = textBag(
    row.communicationProtocols,
    specifications.chargingProtocols,
    specifications.outputParameters,
    specifications.outputPorts,
    specifications.inputParameters,
    specifications.sourceDescription,
    specifications.descriptionText,
  ).toLowerCase();
  const protocols: PowerBankProtocol[] = [];
  const add = (protocol: PowerBankProtocol, patterns: string[]) => {
    if (patterns.some((pattern) => text.includes(pattern))) {
      protocols.push(protocol);
    }
  };

  add("PD 3.0", ["pd 3.0", "pd3.0", "pd3", "power delivery 3.0"]);
  add("PD 3.1", ["pd 3.1", "pd3.1", "power delivery 3.1"]);
  add("PPS", ["pps"]);
  add("QC 3.0", ["qc 3.0", "qc3.0"]);
  add("QC 4.0", ["qc 4.0", "qc4.0"]);
  add("AFC", ["afc"]);
  add("FCP", ["fcp"]);
  add("SCP", ["scp"]);
  add("SuperVOOC", ["supervooc", "super vooc"]);

  return protocols.length > 0 ? [...new Set(protocols)] : null;
}

function inferPassthrough(row: SeedRow) {
  const specifications = row.specifications ?? {};
  const text = textBag(
    specifications.features,
    specifications.sourceDescription,
    specifications.descriptionText,
    specifications.inferredInputOutputNotes,
  ).toLowerCase();

  if (
    text.includes("pass-through") ||
    text.includes("pass through") ||
    text.includes("passthrough") ||
    text.includes("charge and use simultaneously") ||
    text.includes("desktop mode")
  ) {
    return true;
  }

  return null;
}

function parseInchDimensionsFromText(text: string): PowerBankDimensions | null {
  const match =
    text.match(/(\d+(?:\.\d+)?)\s*x\s*(\d+(?:\.\d+)?)\s*x\s*(\d+(?:\.\d+)?)\s*in(?:ch|ches)?/i) ??
    text.match(/(\d+(?:\.\d+)?)\s*×\s*(\d+(?:\.\d+)?)\s*×\s*(\d+(?:\.\d+)?)\s*in(?:ch|ches)?/i);

  if (!match) {
    return null;
  }

  const values = match
    .slice(1, 4)
    .map((value) => Number((Number.parseFloat(value) * 25.4).toFixed(1)));

  const sorted = [...values].sort((a, b) => b - a);

  return {
    length: sorted[0],
    width: sorted[1],
    thickness: sorted[2],
  };
}

function normalizeDimensions(row: SeedRow) {
  const specifications = row.specifications ?? {};
  const dimensions = parseDimensionsMm(specifications.dimensionsMm);

  if (dimensions) {
    return dimensions;
  }

  return parseInchDimensionsFromText(
    textBag(row.summary, specifications.sourceDescription),
  );
}

function inferDisplayType(row: SeedRow): PowerBankDisplayType | null {
  const specifications = row.specifications ?? {};
  const text = textBag(
    row.summary,
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

  return null;
}

function inferBuiltInCable(row: SeedRow): PowerBankBuiltInCable | null {
  const specifications = row.specifications ?? {};
  const text = textBag(
    row.model,
    row.summary,
    specifications.features,
    specifications.inputPorts,
    specifications.outputPorts,
    specifications.sourceDescription,
    specifications.descriptionText,
  ).toLowerCase();

  const cablePhrases = [
    "built-in cable",
    "built in cable",
    "built-in usb-c cable",
    "built in usb-c cable",
    "built-in usb-c connector",
    "built in usb-c connector",
    "built-in lightning connector",
    "built in lightning connector",
    "integrated cable",
    "integrated usb-c cable",
    "integrated usb-c",
    "retractable cable",
    "retractable usb-c cable",
  ];

  if (!cablePhrases.some((phrase) => text.includes(phrase))) {
    return null;
  }

  const hasUsbC = text.includes("usb-c") || text.includes("type-c");
  const hasLightning = text.includes("lightning");
  const hasMicroUsb = text.includes("micro-usb") || text.includes("micro usb");
  const cableTypes = [hasUsbC, hasLightning, hasMicroUsb].filter(Boolean).length;

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

  return null;
}

function normalizeWirelessPower(row: SeedRow) {
  const specifications = row.specifications ?? {};
  const explicitWireless = textBag(
    specifications.sourceDescription,
    specifications.descriptionText,
    specifications.outputParameters,
  );
  const wirelessBeforePower = explicitWireless.match(
    /wireless\s+(?:charging\s+)?(?:power|output)\s*(?:up\s+to\s+)?(\d+(?:\.\d+)?)\s*w/i,
  );
  const powerBeforeWireless = explicitWireless.match(
    /(\d+(?:\.\d+)?)\s*w\s+(?:(?:qi2(?:\.2)?|certified|magnetic|fast|super-fast|ultra-fast)\s+){0,6}wireless\s+charging/i,
  );

  return firstNumber(
    specifications.wirelessChargingMaxPower,
    specifications.wirelessOutputW,
    specifications.iphoneWirelessOutputW,
    wirelessBeforePower?.[1] ? Number.parseFloat(wirelessBeforePower[1]) : null,
    powerBeforeWireless?.[1] ? Number.parseFloat(powerBeforeWireless[1]) : null,
  );
}

async function fetchRates(): Promise<CurrencyRates> {
  try {
    const response = await fetch(
      "https://api.frankfurter.app/latest?from=EUR&to=USD",
      {
        headers: {
          accept: "application/json",
          "user-agent": "PowerBase data completion script",
        },
      },
    );

    if (!response.ok) {
      throw new Error(`Frankfurter returned ${response.status}`);
    }

    const payload = (await response.json()) as {
      date?: string;
      rates?: { USD?: number };
    };

    return {
      eurToUsd: numberValue(payload.rates?.USD),
      eurRateDate: payload.date ?? null,
    };
  } catch {
    return { eurToUsd: null, eurRateDate: null };
  }
}

function normalizePrice(row: SeedRow, rates: CurrencyRates) {
  const specifications = row.specifications ?? {};
  const priceUsd = firstNumber(
    specifications.priceUsd,
    specifications.priceRangeUsd &&
      typeof specifications.priceRangeUsd === "object" &&
      "min" in specifications.priceRangeUsd
      ? (specifications.priceRangeUsd as { min?: unknown }).min
      : null,
  );

  if (priceUsd !== null) {
    return {
      value: Number(priceUsd.toFixed(2)),
      note: "Source price is USD.",
    };
  }

  const priceAed = firstNumber(specifications.priceAed);

  if (priceAed !== null && priceAed > 0) {
    return {
      value: Number((priceAed / 3.6725).toFixed(2)),
      note: "Source price converted from AED to USD at the UAE dirham peg of 1 USD = 3.6725 AED on 2026-06-16.",
    };
  }

  const priceEur = firstNumber(
    specifications.priceEur,
    specifications.originalPriceEur,
  );

  if (priceEur !== null && rates.eurToUsd !== null) {
    return {
      value: Number((priceEur * rates.eurToUsd).toFixed(2)),
      note: `Source price converted from EUR to USD at ${rates.eurToUsd} on ${rates.eurRateDate ?? "2026-06-16"}.`,
    };
  }

  return { value: null, note: null };
}

function sourceUrl(row: SeedRow) {
  return row.sourceUrl ?? row.specifications?.collectionUrl ?? "";
}

function addSource(
  sources: CompletionSource[],
  row: SeedRow,
  field: (typeof fields)[number],
  note?: string | null,
) {
  const url = sourceUrl(row);

  if (!url) {
    return;
  }

  const existing = sources.find(
    (source) => source.url === url && source.note === (note ?? undefined),
  );

  if (existing) {
    existing.fields.push(field);
    return;
  }

  sources.push({
    url,
    fields: [field],
    ...(note ? { note } : {}),
  });
}

function missingReason(field: (typeof fields)[number], row: SeedRow) {
  const manufacturer = row.manufacturer;

  switch (field) {
    case "batteryChemistry":
      return "Source uses only generic lithium chemistry or omits cell format; allowed labels require Li-Po, 18650, 21700, or LFP confirmation.";
    case "supportedOutputProtocols":
      return "Source does not explicitly name one of the allowed output protocol labels.";
    case "passthroughCharging":
      return "Source does not explicitly confirm support or lack of passthrough charging.";
    case "wirelessChargingMaxPower":
      return "Source does not explicitly state wireless charging support or an unsupported state.";
    case "builtInCable":
      return "Source does not explicitly confirm an integrated cable or no integrated cable.";
    case "price":
      return `${manufacturer} source did not expose a current verifiable price that can be represented in USD.`;
    default:
      return "Source page and seeded source data do not expose this field with enough specificity.";
  }
}

function buildCompletionRow(row: SeedRow, rates: CurrencyRates): CompletionRow {
  const specifications = row.specifications ?? {};
  const capacityWh = firstNumber(
    row.capacityWh,
    specifications.ratedEnergyWh,
    specifications.typicalEnergyWh,
    specifications.estimatedEnergyWh,
  );
  const weight = firstNumber(row.weightGrams);
  const price = normalizePrice(row, rates);
  const completion: CompletionRow = {
    slug: row.slug,
    capacityWh,
    batteryChemistry: normalizeChemistry(row),
    supportedOutputProtocols: normalizeProtocols(row),
    maxInputPower: firstNumber(specifications.maxInputW),
    maxOutputPower: firstNumber(
      specifications.maxOutputW,
      row.continuousPowerW,
      specifications.advertisedPowerW,
      specifications.singlePortMaxOutputW,
    ),
    passthroughCharging: inferPassthrough(row),
    gravimetricDensity:
      capacityWh !== null && weight !== null && weight > 0
        ? Number((capacityWh / (weight / 1000)).toFixed(1))
        : null,
    dimensions: normalizeDimensions(row),
    weight,
    displayType: inferDisplayType(row),
    price: price.value,
    builtInCable: inferBuiltInCable(row),
    wirelessChargingMaxPower: normalizeWirelessPower(row),
    sources: [],
    missingReason: {},
  };

  for (const field of fields) {
    if (completion[field] === null) {
      completion.missingReason[field] = missingReason(field, row);
    } else {
      addSource(completion.sources, row, field, field === "price" ? price.note : null);
    }
  }

  for (const source of completion.sources) {
    source.fields = [...new Set(source.fields)].sort();
  }

  return completion;
}

async function verifySourceReachability(rows: SeedRow[]) {
  const uniqueUrls = [...new Set(rows.map(sourceUrl).filter(Boolean))];

  await Promise.all(
    uniqueUrls.map(async (url) => {
      try {
        await fetch(url, {
          headers: {
            accept: "text/html,application/json",
            "user-agent": "Mozilla/5.0 PowerBase data completion",
          },
        });
      } catch {
        // Reachability is useful for warming/verification, but values still come
        // from the source URLs already captured in the seed rows.
      }
    }),
  );
}

async function main() {
  const rows = [
    ...ankerPowerBankRows,
    ...baseusPowerBankRows,
    ...ugreenPowerBankRows,
    ...xiaomiPowerBankRows,
  ];
  const rates = await fetchRates();

  await verifySourceReachability(rows);

  const completion = rows.map((row) => buildCompletionRow(row, rates));
  const missingCounts = Object.fromEntries(
    fields.map((field) => [
      field,
      completion.filter((row) => row[field] === null).length,
    ]),
  );

  await Bun.write(outputPath, `${JSON.stringify(completion, null, 2)}\n`);

  console.log(`Wrote ${completion.length} rows to ${outputPath}`);
  console.log(JSON.stringify(missingCounts, null, 2));
}

await main();
