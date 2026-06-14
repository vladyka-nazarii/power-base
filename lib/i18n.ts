export const locales = ["en", "uk"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";
export const localePreferenceCookie = "locale";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getPreferredLocale(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) {
    return defaultLocale;
  }

  const acceptedLocales = acceptLanguage
    .split(",")
    .map((value, index) => {
      const [languageRange = "", ...parameters] = value.trim().split(";");
      const qualityParameter = parameters.find((parameter) =>
        parameter.trim().startsWith("q="),
      );
      const quality = qualityParameter
        ? Number.parseFloat(qualityParameter.split("=")[1] ?? "")
        : 1;

      return {
        index,
        locale: languageRange.toLowerCase().split("-")[0],
        quality: Number.isFinite(quality) ? quality : 0,
      };
    })
    .filter(({ quality }) => quality > 0)
    .sort((first, second) => {
      if (second.quality !== first.quality) {
        return second.quality - first.quality;
      }

      return first.index - second.index;
    });

  for (const { locale } of acceptedLocales) {
    if (isLocale(locale)) {
      return locale;
    }
  }

  return defaultLocale;
}

export function localizeHref(locale: Locale, href: string) {
  return href === "/" ? `/${locale}` : `/${locale}${href}`;
}

export const dictionaries = {
  en: {
    common: {
      logo: "PowerBase",
      footer: "PowerBase equipment catalog",
      languages: {
        en: "EN",
        uk: "UK",
      },
    },
    home: {
      title: "PowerBase",
      description: "Catalog, compare, and manage alternative energy equipment.",
    },
    catalog: {
      batteries: "Here will be a lot of power batteries",
      inverters: "Here will be inverters",
      powerBanks: "Here will be power banks",
      powerStations: "Here will be power stations",
    },
    navigation: {
      home: "Home",
      powerBanks: "Power Banks",
      powerStations: "Power Stations",
      batteries: "Batteries",
      inverters: "Inverters",
    },
  },
  uk: {
    common: {
      logo: "PowerBase",
      footer: "Каталог обладнання PowerBase",
      languages: {
        en: "EN",
        uk: "UA",
      },
    },
    home: {
      title: "PowerBase",
      description:
        "Каталогізуйте, порівнюйте та керуйте обладнанням для альтернативної енергетики.",
    },
    catalog: {
      batteries: "Тут буде багато акумуляторів",
      inverters: "Тут будуть інвертори",
      powerBanks: "Тут будуть повербанки",
      powerStations: "Тут будуть портативні електростанції",
    },
    navigation: {
      home: "Головна",
      powerBanks: "Повербанки",
      powerStations: "Портативні станції",
      batteries: "Акумулятори",
      inverters: "Інвертори",
    },
  },
} as const;

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
