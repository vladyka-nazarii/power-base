import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpDown, Database, Search, SlidersHorizontal } from "lucide-react";

import AutoSubmitForm from "@/app/[locale]/(catalog)/_components/auto-submit-form";
import FavoriteButton from "@/app/_components/favorite-button";
import ResetFiltersLink from "@/app/[locale]/(catalog)/_components/reset-filters-link";
import {
  catalogPageCopy,
  catalogUiCopy,
  formatPrice,
  formatWeight,
  getCatalogPageData,
  type CatalogCategorySlug,
  type CatalogFilters,
} from "@/lib/catalog";
import { getCurrentSession, getFavoriteEquipmentIds } from "@/lib/favorites";
import { localizeHref, type Locale } from "@/lib/i18n";
import {
  powerBankBuiltInCableOptions,
  powerBankChemistryOptions,
  powerBankDisplayOptions,
  powerBankProtocolOptions,
} from "@/lib/power-bank-specs";

type CatalogPageProps = {
  category: CatalogCategorySlug;
  filters: CatalogFilters;
  locale: Locale;
};

type CatalogData = Awaited<ReturnType<typeof getCatalogPageData>>;
export type CatalogProduct = CatalogData["products"][number];
type ProductSpecifications = {
  maxInputW?: number;
  maxInputPower?: number;
  maxOutputW?: number;
  maxOutputPower?: number;
  wirelessOutputW?: number;
  wirelessChargingMaxPower?: number;
  ratedCapacityMah?: number;
  typicalCapacityMah?: number;
  ratedEnergyWh?: number;
  capacityWh?: number;
  dimensionsMm?: string;
  features?: string[];
};

const sortOptions = [
  "recommended",
  "price-asc",
  "price-desc",
  "capacity-desc",
  "power-desc",
  "weight-asc",
] as const;

function hiddenFilterInputs(filters: CatalogFilters, exclude: string[] = []) {
  const inputs: Array<[string, string | number]> = [];
  const add = (name: string, value: string | number | undefined) => {
    if (!exclude.includes(name) && value !== undefined && value !== "") {
      inputs.push([name, value]);
    }
  };

  add("q", filters.q);
  filters.manufacturers.forEach((value) => add("manufacturer", value));
  filters.voltages.forEach((value) => add("voltage", value));
  filters.chemistries.forEach((value) => add("chemistry", value));
  add("minCapacityWh", filters.minCapacityWh);
  add("minPowerW", filters.minPowerW);
  add("capacityWh", filters.capacityWh);
  filters.batteryChemistries.forEach((value) => add("batteryChemistry", value));
  filters.supportedOutputProtocols.forEach((value) =>
    add("supportedOutputProtocols", value),
  );
  add("maxInputPower", filters.maxInputPower);
  add("maxOutputPower", filters.maxOutputPower);
  add(
    "passthroughCharging",
    filters.passthroughCharging === true ? "true" : undefined,
  );
  add("gravimetricDensity", filters.gravimetricDensity);
  add("length", filters.dimensionLength);
  add("width", filters.dimensionWidth);
  add("thickness", filters.dimensionThickness);
  add("weight", filters.weight);
  filters.displayTypes.forEach((value) => add("displayType", value));
  add("price", filters.price);
  filters.builtInCables.forEach((value) => add("builtInCable", value));
  add("wirelessChargingMaxPower", filters.wirelessChargingMaxPower);
  add("sort", filters.sort);

  return inputs.map(([name, value]) => (
    <input key={`${name}-${value}`} type="hidden" name={name} value={value} />
  ));
}

function productDetailSpecs(product: CatalogProduct) {
  const specifications = product.specifications as ProductSpecifications | null;

  return [
    product.productCode ? product.productCode : null,
    specifications?.typicalCapacityMah
      ? `${specifications.typicalCapacityMah.toLocaleString()} mAh`
      : null,
    specifications?.ratedEnergyWh ? `${specifications.ratedEnergyWh} Wh` : null,
    specifications?.wirelessOutputW
      ? `${specifications.wirelessOutputW} W wireless`
      : null,
    specifications?.dimensionsMm,
    ...(specifications?.features?.slice(0, 2) ?? []),
  ].filter(Boolean);
}

function CheckboxOption({
  checked,
  count,
  name,
  value,
  children,
}: {
  checked: boolean;
  count?: number;
  name: string;
  value: string;
  children: ReactNode;
}) {
  return (
    <label className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
      <input
        type="checkbox"
        name={name}
        value={value}
        defaultChecked={checked}
        className="size-4 rounded border-black/20"
      />
      <span className="min-w-0 flex-1">
        {children}
        {count !== undefined ? (
          <span className="text-zinc-400"> ({count})</span>
        ) : null}
      </span>
    </label>
  );
}

function NumberFilter({
  label,
  name,
  value,
}: {
  label: string;
  name: string;
  value?: number;
}) {
  return (
    <label>
      <span className="text-sm font-medium text-black dark:text-white">
        {label}
      </span>
      <input
        type="number"
        min={0}
        step="any"
        name={name}
        defaultValue={value}
        className="mt-2 h-10 w-full rounded-md border border-black/10 bg-transparent px-3 text-sm outline-none dark:border-white/10"
      />
    </label>
  );
}

function PowerBankFilters({
  data,
  filters,
  ui,
}: {
  data: CatalogData;
  filters: CatalogFilters;
  ui: (typeof catalogUiCopy)[Locale];
}) {
  const chemistryOptions =
    data.facets.powerBanks.batteryChemistries.length > 0
      ? data.facets.powerBanks.batteryChemistries
      : powerBankChemistryOptions.map((value) => ({ value, count: 0 }));
  const protocolOptions =
    data.facets.powerBanks.supportedOutputProtocols.length > 0
      ? data.facets.powerBanks.supportedOutputProtocols
      : powerBankProtocolOptions.map((value) => ({ value, count: 0 }));
  const displayOptions =
    data.facets.powerBanks.displayTypes.length > 0
      ? data.facets.powerBanks.displayTypes
      : powerBankDisplayOptions.map((value) => ({ value, count: 0 }));
  const builtInCableOptions =
    data.facets.powerBanks.builtInCables.length > 0
      ? data.facets.powerBanks.builtInCables
      : powerBankBuiltInCableOptions.map((value) => ({ value, count: 0 }));

  return (
    <>
      <fieldset className="mt-6">
        <legend className="text-sm font-medium text-black dark:text-white">
          {ui.chemistry}
        </legend>
        <div className="mt-3 space-y-2">
          {chemistryOptions.map((chemistry) => (
            <CheckboxOption
              key={chemistry.value}
              name="batteryChemistry"
              value={chemistry.value}
              count={chemistry.count}
              checked={filters.batteryChemistries.includes(chemistry.value)}
            >
              {chemistry.value}
            </CheckboxOption>
          ))}
        </div>
      </fieldset>

      <fieldset className="mt-6">
        <legend className="text-sm font-medium text-black dark:text-white">
          {ui.outputProtocols}
        </legend>
        <div className="mt-3 space-y-2">
          {protocolOptions.map((protocol) => (
            <CheckboxOption
              key={protocol.value}
              name="supportedOutputProtocols"
              value={protocol.value}
              count={protocol.count}
              checked={filters.supportedOutputProtocols.includes(
                protocol.value,
              )}
            >
              {protocol.value}
            </CheckboxOption>
          ))}
        </div>
      </fieldset>

      <fieldset className="mt-6">
        <legend className="text-sm font-medium text-black dark:text-white">
          {ui.displayType}
        </legend>
        <div className="mt-3 space-y-2">
          {displayOptions.map((displayType) => (
            <CheckboxOption
              key={displayType.value}
              name="displayType"
              value={displayType.value}
              count={displayType.count}
              checked={filters.displayTypes.includes(displayType.value)}
            >
              {displayType.value}
            </CheckboxOption>
          ))}
        </div>
      </fieldset>

      <fieldset className="mt-6">
        <legend className="text-sm font-medium text-black dark:text-white">
          {ui.builtInCable}
        </legend>
        <div className="mt-3 space-y-2">
          {builtInCableOptions.map((builtInCable) => (
            <CheckboxOption
              key={builtInCable.value}
              name="builtInCable"
              value={builtInCable.value}
              count={builtInCable.count}
              checked={filters.builtInCables.includes(builtInCable.value)}
            >
              {builtInCable.value}
            </CheckboxOption>
          ))}
        </div>
      </fieldset>

      <div className="mt-6 grid gap-4">
        <NumberFilter
          label={ui.minCapacity}
          name="capacityWh"
          value={filters.capacityWh}
        />
        <NumberFilter
          label={ui.maxInputPower}
          name="maxInputPower"
          value={filters.maxInputPower}
        />
        <NumberFilter
          label={ui.maxOutputPower}
          name="maxOutputPower"
          value={filters.maxOutputPower}
        />
        <NumberFilter
          label={ui.minGravimetricDensity}
          name="gravimetricDensity"
          value={filters.gravimetricDensity}
        />
        <NumberFilter label={ui.maxWeight} name="weight" value={filters.weight} />
        <NumberFilter label={ui.maxPrice} name="price" value={filters.price} />
        <NumberFilter
          label={ui.minWirelessChargingPower}
          name="wirelessChargingMaxPower"
          value={filters.wirelessChargingMaxPower}
        />
      </div>

      <fieldset className="mt-6">
        <legend className="text-sm font-medium text-black dark:text-white">
          {ui.maxDimensions}
        </legend>
        <div className="mt-3 grid grid-cols-3 gap-2">
          <NumberFilter
            label={ui.length}
            name="length"
            value={filters.dimensionLength}
          />
          <NumberFilter
            label={ui.width}
            name="width"
            value={filters.dimensionWidth}
          />
          <NumberFilter
            label={ui.thickness}
            name="thickness"
            value={filters.dimensionThickness}
          />
        </div>
      </fieldset>

      <label className="mt-6 flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
        <input
          type="checkbox"
          name="passthroughCharging"
          value="true"
          defaultChecked={filters.passthroughCharging}
          className="size-4 rounded border-black/20"
        />
        {ui.passthroughCharging}
      </label>
    </>
  );
}

export function ProductCard({
  locale,
  product,
  ui,
  isFavorite,
}: {
  locale: Locale;
  product: CatalogProduct;
  ui: (typeof catalogUiCopy)[Locale];
  isFavorite: boolean;
}) {
  const specs = [
    product.continuousPowerW
      ? `${product.continuousPowerW.toLocaleString()} W`
      : null,
    product.nominalVoltageV ? `${product.nominalVoltageV} V` : null,
    product.chemistryLabel,
  ].filter(Boolean);
  const detailSpecs = productDetailSpecs(product);
  const detailHref = localizeHref(
    locale,
    `/${product.categorySlug}/${product.slug}`,
  );

  return (
    <article className="group overflow-hidden rounded-lg border border-black/10 bg-white transition hover:-translate-y-0.5 hover:border-black/20 hover:shadow-xl hover:shadow-black/5 dark:border-white/10 dark:bg-black dark:hover:border-white/20 dark:hover:shadow-white/5">
      <div className="relative border-b border-black/10 dark:border-white/10">
        <Link
          href={detailHref}
          prefetch={false}
          className="focus-visible:outline-ring flex aspect-[4/3] items-center justify-center bg-zinc-50 p-8 focus-visible:outline-2 focus-visible:outline-offset-[-2px] dark:bg-zinc-950"
        >
          <Image
            src={product.imagePath}
            alt={`${product.manufacturer} ${product.model}`}
            width={360}
            height={270}
            unoptimized
            className="h-full w-full object-contain transition duration-300 group-hover:scale-[1.03]"
          />
        </Link>
        <FavoriteButton
          equipmentId={product.id}
          isFavorite={isFavorite}
          className="absolute top-3 right-3 z-10 shadow-sm"
        />
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="text-xs font-medium tracking-[0.12em] text-zinc-500 uppercase dark:text-zinc-500">
              {product.manufacturer}
            </p>
            <h2 className="mt-1 text-lg font-semibold text-black dark:text-white">
              <Link
                href={detailHref}
                prefetch={false}
                className="focus-visible:outline-ring rounded-sm transition hover:text-zinc-600 focus-visible:outline-2 focus-visible:outline-offset-2 dark:hover:text-zinc-300"
              >
                {product.model}
              </Link>
            </h2>
          </div>
          <div className="shrink-0 text-right text-lg font-semibold text-black dark:text-white">
            {formatPrice(product.priceCents, locale)}
          </div>
        </div>

        <p className="mt-3 min-h-12 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          {product.summary}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {[...specs, ...detailSpecs].slice(0, 8).map((spec) => (
            <span
              key={spec}
              className="rounded-md border border-black/10 px-2 py-1 text-xs text-zinc-700 dark:border-white/10 dark:text-zinc-300"
            >
              {spec}
            </span>
          ))}
        </div>

        <dl className="mt-5 grid grid-cols-2 gap-3 border-t border-black/10 pt-4 text-sm dark:border-white/10">
          <div>
            <dt className="text-zinc-500">{ui.weight}</dt>
            <dd className="mt-1 font-medium text-black dark:text-white">
              {formatWeight(product.weightGrams, locale)}
            </dd>
          </div>
          <div>
            <dt className="text-zinc-500">{ui.warranty}</dt>
            <dd className="mt-1 font-medium text-black dark:text-white">
              {product.warrantyYears
                ? `${product.warrantyYears} ${ui.yearShort}`
                : ui.notAvailable}
            </dd>
          </div>
        </dl>

        <div className="mt-5 flex items-center gap-2 text-xs text-zinc-500">
          <Database className="size-3.5" aria-hidden="true" />
          {product.sourceUrl ? (
            <a
              href={product.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-black dark:hover:text-white"
            >
              {product.sourceLabel}
            </a>
          ) : (
            <span>{product.sourceLabel}</span>
          )}
        </div>
      </div>
    </article>
  );
}

export default async function CatalogPage({
  category,
  filters,
  locale,
}: CatalogPageProps) {
  const copy = catalogPageCopy[locale][category];
  const ui = catalogUiCopy[locale];
  const [data, session] = await Promise.all([
    getCatalogPageData(category, filters, locale),
    getCurrentSession(),
  ]);
  const favoriteEquipmentIds = await getFavoriteEquipmentIds(session?.user.id);
  const clearHref = localizeHref(locale, `/${category}`);
  const paginationSummary = (
    <div className="rounded-lg border border-black/10 px-4 py-3 text-sm dark:border-white/10">
      <span className="text-zinc-500">
        {ui.productCount(data.products.length, data.totalProducts)}
      </span>
    </div>
  );

  return (
    <div className="bg-background text-foreground">
      <section className="mx-auto grid max-w-[1840px] gap-8 px-5 py-8 lg:grid-cols-[280px_minmax(0,1fr)] 3xl:grid-cols-[320px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-20 lg:self-start">
          <AutoSubmitForm className="rounded-lg border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-black">
            <div className="flex items-center justify-between border-b border-black/10 pb-4 dark:border-white/10">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="size-4" aria-hidden="true" />
                <h2 className="text-sm font-semibold text-black dark:text-white">
                  {ui.filters}
                </h2>
              </div>
              <ResetFiltersLink
                href={clearHref}
                prefetch={false}
                className="text-sm text-zinc-500 transition hover:text-black dark:hover:text-white"
              >
                {ui.reset}
              </ResetFiltersLink>
            </div>

            <label className="mt-4 block">
              <span className="text-sm font-medium text-black dark:text-white">
                {ui.search}
              </span>
              <span className="mt-2 flex h-10 items-center gap-2 rounded-md border border-black/10 px-3 dark:border-white/10">
                <Search className="size-4 text-zinc-500" aria-hidden="true" />
                <input
                  type="search"
                  name="q"
                  defaultValue={filters.q}
                  placeholder={ui.searchPlaceholder}
                  className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-400"
                />
              </span>
            </label>

            <fieldset className="mt-6">
              <legend className="text-sm font-medium text-black dark:text-white">
                {ui.manufacturer}
              </legend>
              <div className="mt-3 space-y-2">
                {data.facets.manufacturers.map((manufacturer) => (
                  <label
                    key={manufacturer.value}
                    className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400"
                  >
                    <input
                      type="checkbox"
                      name="manufacturer"
                      value={manufacturer.value}
                      defaultChecked={filters.manufacturers.includes(
                        manufacturer.value,
                      )}
                      className="size-4 rounded border-black/20"
                    />
                    <span className="min-w-0 flex-1">
                      {manufacturer.value}
                      <span className="text-zinc-400">
                        {" "}
                        ({manufacturer.count})
                      </span>
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            {category === "power-banks" ? (
              <PowerBankFilters data={data} filters={filters} ui={ui} />
            ) : (
              <>
                <fieldset className="mt-6">
                  <legend className="text-sm font-medium text-black dark:text-white">
                    {ui.nominalVoltage}
                  </legend>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {data.facets.voltages.map((voltage) => (
                      <label key={voltage}>
                        <input
                          type="checkbox"
                          name="voltage"
                          value={voltage}
                          defaultChecked={filters.voltages.includes(voltage)}
                          className="peer sr-only"
                        />
                        <span className="inline-flex h-8 items-center rounded-md border border-black/10 px-3 text-sm text-zinc-600 transition peer-checked:border-black peer-checked:bg-black peer-checked:text-white dark:border-white/10 dark:text-zinc-400 dark:peer-checked:border-white dark:peer-checked:bg-white dark:peer-checked:text-black">
                          {voltage} V
                        </span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                {data.facets.chemistries.length > 0 ? (
                  <fieldset className="mt-6">
                    <legend className="text-sm font-medium text-black dark:text-white">
                      {ui.chemistry}
                    </legend>
                    <div className="mt-3 space-y-2">
                      {data.facets.chemistries.map((chemistry) => (
                        <label
                          key={chemistry.value}
                          className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400"
                        >
                          <input
                            type="checkbox"
                            name="chemistry"
                            value={chemistry.value}
                            defaultChecked={filters.chemistries.includes(
                              chemistry.value,
                            )}
                            className="size-4 rounded border-black/20"
                          />
                          {chemistry.label}
                        </label>
                      ))}
                    </div>
                  </fieldset>
                ) : null}

                <div className="mt-6 grid gap-4">
                  <NumberFilter
                    label={ui.minCapacity}
                    name="minCapacityWh"
                    value={filters.minCapacityWh}
                  />
                  <NumberFilter
                    label={ui.minPower}
                    name="minPowerW"
                    value={filters.minPowerW}
                  />
                </div>
              </>
            )}

            {hiddenFilterInputs(filters, [
              "q",
              "manufacturer",
              "voltage",
              "chemistry",
              "minCapacityWh",
              "minPowerW",
              "capacityWh",
              "batteryChemistry",
              "supportedOutputProtocols",
              "maxInputPower",
              "maxOutputPower",
              "passthroughCharging",
              "gravimetricDensity",
              "length",
              "width",
              "thickness",
              "weight",
              "displayType",
              "price",
              "builtInCable",
              "wirelessChargingMaxPower",
            ])}
          </AutoSubmitForm>
        </aside>

        <div className="min-w-0">
          <div className="mb-5 flex flex-col gap-3 border-b border-black/10 pb-5 sm:flex-row sm:items-center sm:justify-between dark:border-white/10">
            <p className="text-sm text-zinc-500">
              {data.unavailable
                ? ui.databaseUnavailable
                : ui.matchingProducts(data.products.length)}
            </p>

            <AutoSubmitForm className="flex items-center gap-2">
              {hiddenFilterInputs(filters, ["sort"])}
              <ArrowUpDown
                className="size-4 text-zinc-500"
                aria-hidden="true"
              />
              <select
                name="sort"
                defaultValue={filters.sort}
                className="h-10 rounded-md border border-black/10 bg-white px-3 text-sm text-black outline-none dark:border-white/10 dark:bg-black dark:text-white"
              >
                {sortOptions.map((option) => (
                  <option key={option} value={option}>
                    {ui.sortOptions[option]}
                  </option>
                ))}
              </select>
            </AutoSubmitForm>
          </div>

          {data.products.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4">
              {data.products.map((product) => (
                <ProductCard
                  key={product.id}
                  locale={locale}
                  product={product}
                  ui={ui}
                  isFavorite={favoriteEquipmentIds.has(product.id)}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-dashed border-black/15 px-6 py-16 text-center dark:border-white/15">
              <h2 className="text-xl font-semibold text-black dark:text-white">
                {data.unavailable ? ui.catalogOffline : copy.emptyTitle}
              </h2>
              <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-zinc-500">
                {data.unavailable ? ui.offlineDescription : ui.emptyDescription}
              </p>
            </div>
          )}

          <div className="mt-6 flex justify-center">{paginationSummary}</div>
        </div>
      </section>
    </div>
  );
}
