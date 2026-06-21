import {
  type NumberRangeFilterOption,
  type PowerBankRangeKey,
  powerBankNumberFilterGroups,
} from "@/lib/catalog-filter-definitions";
import type { Locale } from "@/lib/i18n";
import {
  filterAndSortOfflineProducts,
  localizeOfflineText,
  type OfflineCatalogProduct,
  type OfflineSort,
} from "@/lib/offline/catalog";
import {
  normalizePowerBankSpecifications,
  type PowerBankSpecifications,
} from "@/lib/power-bank-specs";

export type OfflineCatalogFilters = {
  query: string;
  manufacturers: string[];
  voltages: number[];
  chemistries: string[];
  minCapacityWh: string;
  minPowerW: string;
  batteryChemistries: string[];
  supportedOutputProtocols: string[];
  displayTypes: string[];
  builtInCables: string[];
  passthroughCharging: boolean;
  supports12vPdOutput: boolean;
  airlineSafe: boolean;
  safetyCertifications: string[];
  ranges: Record<PowerBankRangeKey, string[]>;
  sort: OfflineSort;
};

export function createOfflineCatalogFilters(): OfflineCatalogFilters {
  return {
    query: "",
    manufacturers: [],
    voltages: [],
    chemistries: [],
    minCapacityWh: "",
    minPowerW: "",
    batteryChemistries: [],
    supportedOutputProtocols: [],
    displayTypes: [],
    builtInCables: [],
    passthroughCharging: false,
    supports12vPdOutput: false,
    airlineSafe: false,
    safetyCertifications: [],
    ranges: {
      capacityWh: [],
      usableEnergy: [],
      conversionEfficiency: [],
      maxInputPower: [],
      maxOutputPower: [],
      volumetricDensity: [],
      gravimetricDensity: [],
      rechargeTime: [],
      thermalThrottle: [],
      weight: [],
      price: [],
      wirelessChargingMaxPower: [],
      dimensionLength: [],
      dimensionWidth: [],
      dimensionThickness: [],
    },
    sort: "recommended",
  };
}

export function getOfflinePowerBankSpecs(
  product: OfflineCatalogProduct,
  locale: Locale,
): PowerBankSpecifications {
  return {
    ...(product.specifications ?? {}),
    ...normalizePowerBankSpecifications({
      ...product,
      summary: localizeOfflineText(product.summary, locale),
    }),
  } as PowerBankSpecifications;
}

function matchesRange(
  value: number | undefined,
  selected: string[],
  options: readonly NumberRangeFilterOption[],
) {
  if (selected.length === 0) return true;
  return options.some((option) => {
    if (!selected.includes(option.id)) return false;
    const comparable =
      value === undefined && option.includeMissingAsZero ? 0 : value;
    if (comparable === undefined) return false;
    return (
      (option.min === undefined || comparable >= option.min) &&
      (option.max === undefined || comparable < option.max)
    );
  });
}

function matchesPowerBankFilters(
  product: OfflineCatalogProduct,
  filters: OfflineCatalogFilters,
  locale: Locale,
) {
  const specs = getOfflinePowerBankSpecs(product, locale);
  const dimensions = specs.dimensions;
  const rangeValue: Record<PowerBankRangeKey, number | undefined> = {
    capacityWh: specs.capacityWh,
    usableEnergy: specs.usableEnergyWh,
    conversionEfficiency: specs.conversionEfficiencyPercent,
    maxInputPower: specs.maxInputPower,
    maxOutputPower: specs.maxSinglePortOutputPower,
    volumetricDensity: specs.volumetricDensity,
    gravimetricDensity: specs.gravimetricDensity,
    rechargeTime: specs.rechargeTimeMinutes,
    thermalThrottle: specs.thermalThrottleMinutes,
    weight: specs.weight,
    price: specs.price,
    wirelessChargingMaxPower: specs.wirelessChargingMaxPower,
    dimensionLength: dimensions?.length,
    dimensionWidth: dimensions?.width,
    dimensionThickness: dimensions?.thickness,
  };

  return (
    (filters.batteryChemistries.length === 0 ||
      (specs.batteryChemistry !== undefined &&
        filters.batteryChemistries.includes(specs.batteryChemistry))) &&
    (filters.supportedOutputProtocols.length === 0 ||
      filters.supportedOutputProtocols.some((protocol) =>
        specs.supportedOutputProtocols?.includes(protocol as never),
      )) &&
    (filters.displayTypes.length === 0 ||
      (specs.displayType !== undefined &&
        filters.displayTypes.includes(specs.displayType))) &&
    (filters.builtInCables.length === 0 ||
      (specs.builtInCable !== undefined &&
        filters.builtInCables.includes(specs.builtInCable))) &&
    (!filters.passthroughCharging || specs.passthroughCharging === true) &&
    (!filters.supports12vPdOutput || specs.supports12vPdOutput === true) &&
    (!filters.airlineSafe || specs.airlineSafe === true) &&
    (filters.safetyCertifications.length === 0 ||
      filters.safetyCertifications.some((value) =>
        specs.safetyCertifications?.includes(value),
      )) &&
    (Object.keys(filters.ranges) as PowerBankRangeKey[]).every((key) =>
      matchesRange(
        rangeValue[key],
        filters.ranges[key],
        powerBankNumberFilterGroups[key].options,
      ),
    )
  );
}

export function filterOfflineCatalogProducts(
  products: OfflineCatalogProduct[],
  filters: OfflineCatalogFilters,
  locale: Locale,
  powerBanks: boolean,
) {
  const common = filterAndSortOfflineProducts(products, {
    locale,
    query: filters.query,
    manufacturers: filters.manufacturers,
    sort: filters.sort,
  });

  if (powerBanks) {
    return common.filter((product) =>
      matchesPowerBankFilters(product, filters, locale),
    );
  }

  return common.filter(
    (product) =>
      (filters.voltages.length === 0 ||
        (product.nominalVoltageV !== null &&
          filters.voltages.includes(product.nominalVoltageV))) &&
      (filters.chemistries.length === 0 ||
        (product.chemistry !== null &&
          filters.chemistries.includes(product.chemistry))) &&
      (!filters.minCapacityWh ||
        (product.capacityWh ?? 0) >= Number(filters.minCapacityWh)) &&
      (!filters.minPowerW ||
        (product.continuousPowerW ?? 0) >= Number(filters.minPowerW)),
  );
}
