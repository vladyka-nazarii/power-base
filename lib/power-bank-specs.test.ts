import { describe, expect, test } from "bun:test";

import { normalizePowerBankSpecifications } from "@/lib/power-bank-specs";

describe("normalizePowerBankSpecifications", () => {
  test("derives density, airline eligibility, 12V support, and recharge time", () => {
    const specs = normalizePowerBankSpecifications({
      capacityWh: 90,
      weightGrams: 450,
      specifications: {
        dimensionsMm: "150 x 75 x 30 mm",
        outputParameters: ["USB-C: 5V/3A, 9V/3A, 12V/3A"],
        sourceDescription: "The power bank is fully recharged in 1.5 hours.",
      },
    });

    expect(specs.gravimetricDensity).toBe(200);
    expect(specs.volumetricDensity).toBe(266.7);
    expect(specs.supports12vPdOutput).toBe(true);
    expect(specs.rechargeTimeMinutes).toBe(90);
    expect(specs.airlineSafe).toBe(true);
  });

  test("does not invent measured efficiency or thermal throttling data", () => {
    const specs = normalizePowerBankSpecifications({ capacityWh: 37 });

    expect(specs.usableEnergyWh).toBeUndefined();
    expect(specs.conversionEfficiencyPercent).toBeUndefined();
    expect(specs.thermalThrottleMinutes).toBeUndefined();
  });

  test("uses explicit measured energy to calculate conversion efficiency", () => {
    const specs = normalizePowerBankSpecifications({
      capacityWh: 40,
      specifications: { usableEnergyWh: 32 },
    });

    expect(specs.conversionEfficiencyPercent).toBe(80);
  });

  test("does not treat combined output as a single-port rating", () => {
    const specs = normalizePowerBankSpecifications({
      continuousPowerW: 200,
      specifications: {
        maxOutputW: 200,
        sourceDescription:
          "Two USB-C ports provide 200W total output and charge laptops simultaneously.",
      },
    });

    expect(specs.maxSinglePortOutputPower).toBeUndefined();
  });
});
