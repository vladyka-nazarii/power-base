# Power Bank Missing Data Request

This audit was generated from the local seed files only. No external lookup was performed.

## Audit Summary

- Total seeded power-bank rows checked: 72
- Rows with all requested fields present: 0
- Rows with one or more missing requested fields: 72

Missing field counts:

| Field | Missing rows |
| --- | ---: |
| `capacityWh` | 1 |
| `batteryChemistry` | 63 |
| `supportedOutputProtocols` | 69 |
| `maxInputPower` | 49 |
| `maxOutputPower` | 1 |
| `passthroughCharging` | 64 |
| `gravimetricDensity` | 34 |
| `dimensions` | 49 |
| `weight` | 33 |
| `displayType` | 56 |
| `price` | 44 |
| `builtInCable` | 48 |
| `wirelessChargingMaxPower` | 65 |

## Request To Enter For Data Completion

Fill the missing canonical power-bank specification fields for every product in `lib/db/anker-power-bank-seed.ts`, `lib/db/baseus-power-bank-seed.ts`, `lib/db/ugreen-power-bank-seed.ts`, and `lib/db/xiaomi-power-bank-seed.ts`.

Use only manufacturer pages, official datasheets/manuals, or clearly attributable retailer listings. Return a JSON array keyed by existing `slug`. Do not invent values. If a value cannot be verified, set it to `null` and include a `missingReason`.

Required schema for each product:

```json
{
  "slug": "existing-product-slug",
  "capacityWh": 0,
  "batteryChemistry": "Li-Po | Li-ion (18650) | Li-ion (21700) | LiFePO4 (LFP) | null",
  "supportedOutputProtocols": [
    "PD 3.0",
    "PD 3.1",
    "PPS",
    "QC 3.0",
    "QC 4.0",
    "AFC",
    "FCP",
    "SCP",
    "SuperVOOC"
  ],
  "maxInputPower": 0,
  "maxOutputPower": 0,
  "passthroughCharging": true,
  "gravimetricDensity": 0,
  "dimensions": {
    "length": 0,
    "width": 0,
    "thickness": 0
  },
  "weight": 0,
  "displayType": "LED Indicators (Dots) | Digital Display (%) | Smart Screen (TFT/OLED with V/A stats) | null",
  "price": 0,
  "builtInCable": "None | USB-C | Lightning | Micro-USB | Multiple | null",
  "wirelessChargingMaxPower": 0,
  "sources": [
    {
      "url": "https://...",
      "fields": ["fieldName"]
    }
  ],
  "missingReason": {
    "fieldName": "Reason the value could not be verified"
  }
}
```

Rules:

- Use Watt-hours for `capacityWh`.
- Use watts for `maxInputPower` and `maxOutputPower`.
- Use grams for `weight`.
- Use millimeters for `dimensions.length`, `dimensions.width`, and `dimensions.thickness`.
- Use USD for `price`; if the source price is in another currency, include the source currency and conversion date in `sources`.
- Calculate `gravimetricDensity` as `capacityWh / (weight / 1000)` only when both `capacityWh` and `weight` are verified.
- `passthroughCharging` must be `true` or `false` only when the source explicitly confirms support or lack of support; otherwise use `null`.
- `batteryChemistry` must use one of the four allowed labels. Do not collapse generic "Lithium-ion" into `Li-ion (18650)` or `Li-ion (21700)` unless the cell format is verified.
- `builtInCable` must use one of the allowed labels. Use `None` only when the source makes clear that no integrated cable is present.
- Use watts for `wirelessChargingMaxPower`. Use `0` only when the source confirms wireless charging is unsupported.
