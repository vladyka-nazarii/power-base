export type NumberRangeFilterOption = {
  id: string;
  label: string;
  min?: number;
  max?: number;
  includeMissingAsZero?: boolean;
};

export const powerBankNumberFilterGroups = {
  capacityWh: {
    title: "Capacity",
    param: "capacityWhRange",
    options: [
      { id: "lt-20", label: "< 20 Wh", max: 20 },
      { id: "20-50", label: "20-50 Wh", min: 20, max: 50 },
      { id: "gt-50", label: "> 50 Wh", min: 50 },
    ],
  },
  maxInputPower: {
    title: "Input power",
    param: "maxInputPowerRange",
    options: [
      { id: "lt-20", label: "< 20 W", max: 20 },
      { id: "20-45", label: "20-45 W", min: 20, max: 45 },
      { id: "gt-45", label: "> 45 W", min: 45 },
    ],
  },
  maxOutputPower: {
    title: "Output power",
    param: "maxOutputPowerRange",
    options: [
      { id: "lt-20", label: "< 20 W", max: 20 },
      { id: "20-65", label: "20-65 W", min: 20, max: 65 },
      { id: "gt-65", label: "> 65 W", min: 65 },
    ],
  },
  gravimetricDensity: {
    title: "Density",
    param: "gravimetricDensityRange",
    options: [
      { id: "lt-150", label: "< 150 Wh/kg", max: 150 },
      { id: "150-200", label: "150-200 Wh/kg", min: 150, max: 200 },
      { id: "gt-200", label: "> 200 Wh/kg", min: 200 },
    ],
  },
  weight: {
    title: "Weight",
    param: "weightRange",
    options: [
      { id: "lt-200", label: "< 200 g", max: 200 },
      { id: "200-400", label: "200-400 g", min: 200, max: 400 },
      { id: "gt-400", label: "> 400 g", min: 400 },
    ],
  },
  price: {
    title: "Price",
    param: "priceRange",
    options: [
      { id: "lt-30", label: "< $30", max: 30 },
      { id: "30-70", label: "$30-$70", min: 30, max: 70 },
      { id: "gt-70", label: "> $70", min: 70 },
    ],
  },
  wirelessChargingMaxPower: {
    title: "Wireless charging",
    param: "wirelessChargingMaxPowerRange",
    options: [
      { id: "none", label: "None", max: 0, includeMissingAsZero: true },
      { id: "lt-10", label: "< 10 W", min: 0, max: 10 },
      { id: "10-15", label: "10-15 W", min: 10, max: 15 },
      { id: "gt-15", label: "> 15 W", min: 15 },
    ],
  },
  dimensionLength: {
    title: "Length",
    param: "lengthRange",
    options: [
      { id: "lt-100", label: "< 100 mm", max: 100 },
      { id: "100-150", label: "100-150 mm", min: 100, max: 150 },
      { id: "gt-150", label: "> 150 mm", min: 150 },
    ],
  },
  dimensionWidth: {
    title: "Width",
    param: "widthRange",
    options: [
      { id: "lt-65", label: "< 65 mm", max: 65 },
      { id: "65-80", label: "65-80 mm", min: 65, max: 80 },
      { id: "gt-80", label: "> 80 mm", min: 80 },
    ],
  },
  dimensionThickness: {
    title: "Thickness",
    param: "thicknessRange",
    options: [
      { id: "lt-15", label: "< 15 mm", max: 15 },
      { id: "15-25", label: "15-25 mm", min: 15, max: 25 },
      { id: "gt-25", label: "> 25 mm", min: 25 },
    ],
  },
} as const;

export type PowerBankRangeKey = keyof typeof powerBankNumberFilterGroups;
