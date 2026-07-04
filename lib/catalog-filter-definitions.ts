import { usdToUahRate } from "@/lib/price-format";

export type NumberRangeFilterOption = {
  id: string;
  label: string;
  min?: number;
  max?: number;
  includeMissingAsZero?: boolean;
};

export const powerBankNumberFilterGroups = {
  capacityWh: {
    title: "Rated energy",
    param: "capacityWhRange",
    options: [
      { id: "lt-20", label: "< 20 Wh", max: 20 },
      { id: "20-50", label: "20-50 Wh", min: 20, max: 50 },
      { id: "gt-50", label: "> 50 Wh", min: 50 },
    ],
  },
  usableEnergy: {
    title: "Real usable energy",
    param: "usableEnergyRange",
    options: [
      { id: "lt-20", label: "< 20 Wh", max: 20 },
      { id: "20-50", label: "20-50 Wh", min: 20, max: 50 },
      { id: "gt-50", label: "> 50 Wh", min: 50 },
    ],
  },
  conversionEfficiency: {
    title: "Conversion efficiency",
    param: "conversionEfficiencyRange",
    options: [
      { id: "lt-75", label: "< 75%", max: 75 },
      { id: "75-85", label: "75-85%", min: 75, max: 85 },
      { id: "gt-85", label: "> 85%", min: 85 },
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
    title: "Max single-port output",
    param: "maxSinglePortOutputRange",
    options: [
      { id: "lt-20", label: "< 20 W", max: 20 },
      { id: "20-65", label: "20-65 W", min: 20, max: 65 },
      { id: "gt-65", label: "> 65 W", min: 65 },
    ],
  },
  volumetricDensity: {
    title: "Volumetric density, Wh/L",
    param: "volumetricDensityRange",
    options: [
      { id: "lt-150", label: "Up to 150", max: 150 },
      { id: "150-250", label: "150 - 250", min: 150, max: 250 },
      { id: "gt-250", label: "More than 250", min: 250 },
    ],
  },
  gravimetricDensity: {
    title: "Gravimetric density",
    param: "gravimetricDensityRange",
    options: [
      { id: "lt-150", label: "< 150 Wh/kg", max: 150 },
      { id: "150-200", label: "150-200 Wh/kg", min: 150, max: 200 },
      { id: "gt-200", label: "> 200 Wh/kg", min: 200 },
    ],
  },
  rechargeTime: {
    title: "Full recharge time",
    param: "rechargeTimeRange",
    options: [
      { id: "lt-90", label: "< 1.5 h", max: 90 },
      { id: "90-180", label: "1.5-3 h", min: 90, max: 180 },
      { id: "gt-180", label: "> 3 h", min: 180 },
    ],
  },
  thermalThrottle: {
    title: "Sustained max output",
    param: "thermalThrottleRange",
    options: [
      { id: "lt-15", label: "< 15 min", max: 15 },
      { id: "15-60", label: "15-60 min", min: 15, max: 60 },
      { id: "gt-60", label: "> 60 min", min: 60 },
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

export const powerStationCapacityFilterGroup = {
  title: "Power station capacity, Wh",
  param: "capacityWhRange",
  options: [
    { id: "lt-500", label: "Less than 500", max: 500 },
    { id: "500-1000", label: "500 - 1000", min: 500, max: 1001 },
    { id: "1001-2000", label: "1001 - 2000", min: 1001, max: 2001 },
    { id: "2001-3000", label: "2001 - 3000", min: 2001, max: 3001 },
    { id: "gt-3000", label: "More than 3000", min: 3001 },
  ],
} as const;

export const powerStationNumberFilterGroups = {
  capacityWh: powerStationCapacityFilterGroup,
  continuousPower: {
    title: "Output power (total), W",
    param: "continuousPowerRange",
    options: [
      { id: "lte-600", label: "Up to 600", max: 601 },
      { id: "601-1200", label: "600 - 1200", min: 601, max: 1201 },
      { id: "1201-1800", label: "1201 - 1800", min: 1201, max: 1801 },
      { id: "1801-2400", label: "1801 - 2400", min: 1801, max: 2401 },
      { id: "gt-2400", label: "More than 2400", min: 2401 },
    ],
  },
  peakPower: {
    title: "Maximum device power, W",
    param: "peakPowerRange",
    options: [
      { id: "lte-300", label: "300 and below", max: 301 },
      { id: "301-500", label: "301 - 500", min: 301, max: 501 },
      { id: "501-600", label: "501 - 600", min: 501, max: 601 },
      { id: "601-1000", label: "601 - 1000", min: 601, max: 1001 },
      { id: "1001-1200", label: "1001 - 1200", min: 1001, max: 1201 },
      { id: "1201-1500", label: "1201 - 1500", min: 1201, max: 1501 },
      { id: "1501-2000", label: "1501 - 2000", min: 1501, max: 2001 },
      { id: "2001-2400", label: "2001 - 2400", min: 2001, max: 2401 },
      { id: "gt-2400", label: "More than 2400", min: 2401 },
    ],
  },
  pricePerKwh: {
    title: "Price per 1 kWh capacity, USD/kWh",
    param: "pricePerKwhRange",
    options: [
      { id: "lte-500", label: "Up to 500", max: 501 },
      { id: "501-700", label: "501 - 700", min: 501, max: 701 },
      { id: "701-900", label: "701 - 900", min: 701, max: 901 },
      { id: "gt-900", label: "More than 900", min: 901 },
    ],
  },
} as const;

export type PowerStationRangeKey = keyof typeof powerStationNumberFilterGroups;

export const batteryPricePerKwhFilterGroup = {
  title: "Price per 1 kWh capacity, USD/kWh",
  param: "pricePerKwhRange",
  options: [
    { id: "lte-60", label: "Up to 60", max: 61 },
    { id: "61-80", label: "61 - 80", min: 61, max: 81 },
    { id: "81-100", label: "81 - 100", min: 81, max: 101 },
    { id: "gt-100", label: "More than 100", min: 101 },
  ],
} as const;

export const batteryVolumetricDensityFilterGroup = {
  title: "Volumetric energy density, Wh/L",
  param: "volumetricDensityRange",
  options: [
    { id: "lt-350", label: "Up to 350", max: 350 },
    { id: "350-400", label: "350 - 400", min: 350, max: 400 },
    { id: "gt-400", label: "More than 400", min: 400 },
  ],
} as const;

export const batteryMassEnergyDensityFilterGroup = {
  title: "Mass energy density, Wh/kg",
  param: "massEnergyDensityRange",
  options: [
    { id: "lt-150", label: "Up to 150", max: 150 },
    { id: "150-170", label: "150 - 170", min: 150, max: 170 },
    { id: "170-200", label: "170 - 200", min: 170, max: 200 },
    { id: "gt-200", label: "More than 200", min: 200 },
  ],
} as const;

const powerBankNumberFilterTitlesUk: Record<PowerBankRangeKey, string> = {
  capacityWh: "Номінальна енергія",
  usableEnergy: "Реальна корисна енергія",
  conversionEfficiency: "Ефективність перетворення",
  maxInputPower: "Максимальна вхідна потужність",
  maxOutputPower: "Максимальна потужність одного порту",
  volumetricDensity: "Об'ємна щільність енергії, Вт·год/л",
  gravimetricDensity: "Гравіметрична щільність енергії",
  rechargeTime: "Час повного заряджання",
  thermalThrottle: "Робота на максимальній потужності",
  weight: "Вага",
  price: "Ціна",
  wirelessChargingMaxPower: "Бездротове заряджання",
  dimensionLength: "Довжина",
  dimensionWidth: "Ширина",
  dimensionThickness: "Товщина",
};

function localizePowerBankRangeLabel(label: string) {
  return label
    .replace("None", "Немає")
    .replace("Up to", "До")
    .replace("More than", "Більше")
    .replace("1.5-3 h", "1,5-3 год")
    .replace("< 1.5 h", "< 1,5 год")
    .replace("> 3 h", "> 3 год")
    .replace("15-60 min", "15-60 хв")
    .replace("< 15 min", "< 15 хв")
    .replace("> 60 min", "> 60 хв");
}

export function localizePowerBankNumberFilterGroup(
  key: PowerBankRangeKey,
  locale: "en" | "uk",
) {
  const group = powerBankNumberFilterGroups[key];
  if (locale === "en") return group;

  return {
    ...group,
    title: powerBankNumberFilterTitlesUk[key],
    options: group.options.map((option) => ({
      ...option,
      label: localizePowerBankRangeLabel(option.label),
    })),
  };
}

export function localizePowerStationCapacityFilterGroup(locale: "en" | "uk") {
  if (locale === "en") return powerStationCapacityFilterGroup;

  return {
    ...powerStationCapacityFilterGroup,
    title: "Місткість зарядної станції, Вт·год",
    options: [
      { ...powerStationCapacityFilterGroup.options[0], label: "Менше 500" },
      { ...powerStationCapacityFilterGroup.options[1] },
      { ...powerStationCapacityFilterGroup.options[2] },
      { ...powerStationCapacityFilterGroup.options[3] },
      { ...powerStationCapacityFilterGroup.options[4], label: "Більше 3000" },
    ],
  };
}

export function localizePowerStationNumberFilterGroup(
  key: PowerStationRangeKey,
  locale: "en" | "uk",
) {
  const group = powerStationNumberFilterGroups[key];

  if (key === "capacityWh") {
    return localizePowerStationCapacityFilterGroup(locale);
  }

  if (locale === "en") return group;

  if (key === "pricePerKwh") {
    const formatUahPerKwh = (value: number) =>
      Math.round(value * usdToUahRate)
        .toLocaleString("uk-UA")
        .replaceAll("\u00a0", " ");

    return {
      ...group,
      title: "Ціна за 1 кВт·год місткості, грн/кВт·год",
      options: [
        {
          ...group.options[0],
          label: `До ${formatUahPerKwh(500)}`,
        },
        {
          ...group.options[1],
          label: `${formatUahPerKwh(501)} - ${formatUahPerKwh(700)}`,
        },
        {
          ...group.options[2],
          label: `${formatUahPerKwh(701)} - ${formatUahPerKwh(900)}`,
        },
        {
          ...group.options[3],
          label: `Більше ${formatUahPerKwh(900)}`,
        },
      ],
    };
  }

  return {
    ...group,
    title:
      key === "continuousPower"
        ? "Вихідна потужність (загальна), Вт"
        : "Максимальна потужність пристроїв, Вт",
    options: group.options.map((option) => ({
      ...option,
      label: option.label
        .replace("Up to", "До")
        .replace("and below", "і менше")
        .replace("More than", "Більше"),
    })),
  };
}

export function localizeBatteryPricePerKwhFilterGroup(locale: "en" | "uk") {
  const group = batteryPricePerKwhFilterGroup;

  if (locale === "en") return group;

  const formatUahPerKwh = (value: number) =>
    Math.round(value * usdToUahRate)
      .toLocaleString("uk-UA")
      .replaceAll("\u00a0", " ");

  return {
    ...group,
    title: "Ціна за 1 кВт·год місткості, грн/кВт·год",
    options: [
      {
        ...group.options[0],
        label: `До ${formatUahPerKwh(60)}`,
      },
      {
        ...group.options[1],
        label: `${formatUahPerKwh(61)} - ${formatUahPerKwh(80)}`,
      },
      {
        ...group.options[2],
        label: `${formatUahPerKwh(81)} - ${formatUahPerKwh(100)}`,
      },
      {
        ...group.options[3],
        label: `Більше ${formatUahPerKwh(100)}`,
      },
    ],
  };
}

export function localizeBatteryVolumetricDensityFilterGroup(
  locale: "en" | "uk",
) {
  const group = batteryVolumetricDensityFilterGroup;

  if (locale === "en") return group;

  return {
    ...group,
    title: "Об'ємна щільність енергії, Вт·год/л",
    options: group.options.map((option) => ({
      ...option,
      label: option.label
        .replace("Up to", "До")
        .replace("More than", "Більше"),
    })),
  };
}

export function localizeBatteryMassEnergyDensityFilterGroup(
  locale: "en" | "uk",
) {
  const group = batteryMassEnergyDensityFilterGroup;

  if (locale === "en") return group;

  return {
    ...group,
    title: "Масова щільність енергії, Вт·год/кг",
    options: group.options.map((option) => ({
      ...option,
      label: option.label
        .replace("Up to", "До")
        .replace("More than", "Більше"),
    })),
  };
}
