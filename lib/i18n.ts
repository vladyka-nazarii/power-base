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
      badge: "Alternative energy knowledge base",
      headline: "Structured equipment data for practical system design",
      description:
        "PowerBase turns scattered manufacturer PDFs, datasheets, manuals, websites, photos, and forum notes into a searchable catalog for comparing equipment and checking real-world compatibility.",
      primaryAction: "Explore catalog",
      secondaryAction: "Read the brief",
      command: "powerbase ingest datasheet.pdf --trace-source",
      stats: [
        { value: "6", label: "initial equipment categories" },
        { value: "Typed", label: "technical specifications" },
        { value: "Source", label: "traceability for important claims" },
      ],
      featuresTitle: "What's in PowerBase?",
      featuresDescription:
        "Everything needed to catalog, compare, and reason about alternative energy components.",
      features: [
        {
          title: "Structured catalog",
          description:
            "Maintain manufacturers, models, categories, media, and source documents as normalized equipment records.",
        },
        {
          title: "Typed specifications",
          description:
            "Store voltages, power ratings, PV limits, chemistry, capacity, currents, protocols, dimensions, warranty, and lifecycle data in comparable fields.",
        },
        {
          title: "Compatibility checks",
          description:
            "Evaluate inverter, battery, solar, and controller combinations against practical power, capacity, protocol, budget, and space constraints.",
        },
        {
          title: "Source confidence",
          description:
            "Prefer manufacturer evidence, keep retrieval context, and make confirmed, inferred, and user-submitted specs visibly distinct.",
        },
        {
          title: "Fast comparison paths",
          description:
            "Use Redis for expensive comparison matrices, compatibility reports, repeated filters, and derived catalog summaries.",
        },
        {
          title: "Container-safe media",
          description:
            "Validate uploads, store files outside the ephemeral app container, and persist only public media URLs and metadata.",
        },
      ],
      categoriesTitle: "Built for the equipment people actually compare",
      categories: [
        "Inverters",
        "Hybrid inverters",
        "Batteries",
        "Solar panels",
        "Portable power stations",
        "Charge controllers",
        "Balance-of-system components",
      ],
      pipelineTitle: "From scattered sources to usable decisions",
      pipeline: [
        "Collect manufacturer PDFs, manuals, websites, distributor pages, photos, and user-submitted evidence.",
        "Normalize specs into base units with Drizzle-backed relational data and explicit source references.",
        "Compare products side by side and cache expensive derived reads with versioned Redis keys.",
        "Design systems with compatibility checks that explain constraints instead of hiding uncertainty in notes.",
      ],
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
        uk: "UK",
      },
    },
    home: {
      title: "PowerBase",
      badge: "База знань про альтернативну енергетику",
      headline:
        "Структуровані дані обладнання для практичного проєктування систем",
      description:
        "PowerBase перетворює розрізнені PDF-файли виробників, даташити, інструкції, сайти, фото та нотатки з форумів на пошуковий каталог для порівняння обладнання і перевірки реальної сумісності.",
      primaryAction: "Перейти до каталогу",
      secondaryAction: "Відкрити опис",
      command: "powerbase ingest datasheet.pdf --trace-source",
      stats: [
        { value: "6", label: "початкових категорій обладнання" },
        { value: "Типізовані", label: "технічні характеристики" },
        { value: "Джерела", label: "простежуваність важливих тверджень" },
      ],
      featuresTitle: "Що є в PowerBase?",
      featuresDescription:
        "Усе необхідне, щоб каталогізувати, порівнювати й оцінювати компоненти альтернативної енергетики.",
      features: [
        {
          title: "Структурований каталог",
          description:
            "Зберігайте виробників, моделі, категорії, медіа та джерельні документи як нормалізовані записи обладнання.",
        },
        {
          title: "Типізовані характеристики",
          description:
            "Фіксуйте напруги, потужність, межі PV-входу, хімію, ємність, струми, протоколи, габарити, гарантію та ресурс у полях, придатних для порівняння.",
        },
        {
          title: "Перевірка сумісності",
          description:
            "Оцінюйте комбінації інверторів, акумуляторів, панелей і контролерів за потужністю, ємністю, протоколами, бюджетом і простором.",
        },
        {
          title: "Довіра до джерел",
          description:
            "Надавайте перевагу даним виробника, зберігайте контекст отримання й розділяйте підтверджені, припущені та користувацькі характеристики.",
        },
        {
          title: "Швидкі порівняння",
          description:
            "Використовуйте Redis для важких матриць порівняння, звітів сумісності, повторних фільтрів і похідних підсумків каталогу.",
        },
        {
          title: "Медіа поза контейнером",
          description:
            "Перевіряйте завантаження, зберігайте файли поза тимчасовим контейнером застосунку, а в базі лишайте тільки публічні URL і метадані.",
        },
      ],
      categoriesTitle: "Для обладнання, яке справді порівнюють",
      categories: [
        "Інвертори",
        "Гібридні інвертори",
        "Акумулятори",
        "Сонячні панелі",
        "Портативні електростанції",
        "Контролери заряду",
        "Компоненти балансування системи",
      ],
      pipelineTitle: "Від розрізнених джерел до практичних рішень",
      pipeline: [
        "Збирайте PDF-файли виробників, інструкції, сайти, сторінки дистриб'юторів, фото та користувацькі докази.",
        "Нормалізуйте характеристики в базові одиниці з реляційними даними через Drizzle і явними посиланнями на джерела.",
        "Порівнюйте продукти поруч і кешуйте важкі похідні читання версійними ключами Redis.",
        "Проєктуйте системи з перевірками сумісності, які пояснюють обмеження, а не ховають невизначеність у примітках.",
      ],
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
