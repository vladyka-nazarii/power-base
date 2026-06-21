export type AnkerPowerBankSeedRow = {
  categorySlug: string;
  manufacturer: string;
  model: string;
  slug: string;
  summary: string;
  summaryUk: string;
  imagePath: string;
  priceCents?: number | null;
  productCode?: string | null;
  nominalVoltageV?: number | null;
  capacityWh?: number | null;
  continuousPowerW?: number | null;
  peakPowerW?: number | null;
  maxPvVoltageV?: number | null;
  maxChargeCurrentA?: number | null;
  chemistry?: string | null;
  communicationProtocols?: string | null;
  weightGrams?: number | null;
  warrantyYears?: number | null;
  lifecycleCycles?: number | null;
  sourceLabel: string;
  sourceLabelUk: string;
  sourceUrl?: string | null;
  specifications?: Record<string, unknown>;
};

export const ankerPowerBankRows: AnkerPowerBankSeedRow[] = [
  {
    categorySlug: "power-banks",
    manufacturer: "Anker",
    model: "Anker MagGo Power Bank (10K, Slim)",
    slug: "anker-maggo-power-bank-10k-slim",
    summary: "Slimmest Power Yet: At just 0.58 x 2.78 x 4.09 inches thick, achieve maximum portability and power with our slimmest design to date. (Note: Based on internal comparisons with previous Anker models.) Ultra-Fast 15W Wir...",
    summaryUk: "Slimmest Power Yet: At just 0.58 x 2.78 x 4.09 inches thick, achieve maximum portability and power with our slimmest design to date. (Note: Based on internal comparisons with previous Anker models.) Ultra-Fast 15W Wir...",
    imagePath: "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1664H11_Richimage_US_TD01_V2_1534x.png?v=1765192171",
    priceCents: 5438,
    productCode: "A1664",
    nominalVoltageV: 5,
    capacityWh: 37,
    continuousPowerW: 30,
    peakPowerW: 30,
    chemistry: "Lithium-ion",
    weightGrams: 405,
    warrantyYears: 2,
    sourceLabel: "Anker EU product page (A1664)",
    sourceLabelUk: "Anker EU product page (A1664)",
    sourceUrl: "https://www.anker.com/eu-en/products/a1664-maggo-10000mah-power-bank?variant=44551602307262&collections_power-banks&Sort_by=Recommended",
    specifications: {
      collectionListPosition: 1,
      collectionUrl: "https://www.anker.com/eu-en/collections/power-banks",
      shopifyProductId: "gid://shopify/Product/8314245710014",
      handle: "a1664-maggo-10000mah-power-bank",
      status: "In Stock",
      priceEur: 46.9,
      originalPriceEur: 69.99,
      typicalCapacityMah: 10000,
      estimatedEnergyWh: 37,
      maxOutputW: 30,
      sourceDescription: "Slimmest Power Yet: At just 0.58 x 2.78 x 4.09 inches thick, achieve maximum portability and power with our slimmest design to date. (Note: Based on internal comparisons with previous Anker models.) Ultra-Fast 15W Wireless Charging: Keep your devices fully charged wherever you go with 15W Qi2-certified wireless output, which charges an iPhone 15 Pro from 0 to 50% in 51 minutes. It also features a 30W USB-C port for extensive compatibility. Ergonomic Design, Enhanced Portability: Combines a matte UV finish and a sturdy metal frame for a superior user experience, enhanced by aerogel thermal insulation to keep it cool to the touch. 10,000mAh High-Capacity Power: Ideal for both daily use and travel, this power bank offers ample capacity, providing 1.8 full charges for an iPhone 15 Pro. What You Get: Anker MagGo Power Bank (10K, Slim), 23.62\" / 60 cm USB-C to USB-C cable, welcome guide, 24-month warranty, and our friendly customer service.",
      features: [
        "Slimmest Power Yet",
        "Ultra-Fast 15W Wireless Charging",
        "Ergonomic Design, Enhanced Portability",
        "10,000mAh High-Capacity Power"
      ],
      allImages: [
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1664H11_Richimage_US_TD01_V2.png?v=1765192171",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1664H11_Richimage_Richimage_US_TD02_V1.jpg?v=1765192171",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1664H11_Richimage_Richimage_US_TD05_V1.jpg?v=1765192171",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1664H11_Richimage_Richimage_US_TD06_V1.jpg?v=1765192171",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1664H11_Richimage_TD03_US_V1.jpg?v=1765192171",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1664H11_Richimage_Richimage_US_TD04_V1.jpg?v=1765192171",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1664H21_Rich_image_TD01_US_V1.png?v=1765192171",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1664H21_Rich_image_US_TD02_V1.jpg?v=1765192171",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1664H21_Rich_image_US_TD04_V1.jpg?v=1765192171",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1664H21_Rich_image_US_TD05_V1.jpg?v=1765192171",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1664H21_Rich_image_US_TD06_V1.jpg?v=1765192171",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1664H21_Rich_image_TD03_US_V1.jpg?v=1765192171",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1664H61_A1664H61_Product_Image_Rich_image_TD01_V2_2.png?v=1733569604",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A16644061_5.jpg?v=1733451531",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A16644061_2.jpg?v=1733451532",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A16644061_6.jpg?v=1733451531",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A16644061_3.jpg?v=1733451531",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A16644061_4.jpg?v=1733451531"
      ],
      variants: [
        {
          id: "gid://shopify/ProductVariant/44551602307262",
          name: "Black",
          sku: "A1664H11",
          barcode: "194644203467",
          price: 69.99,
          weight: 0.8929,
          availableForSale: true,
          quantityAvailable: 6652,
          imageUrl: "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1664H11_Richimage_US_TD01_V2.png?v=1765192171",
          discounts: [
            {
              title: "WS24A1664PD",
              starts_at: "2026-06-14T22:00:00.000Z",
              ends_at: "2026-06-30T21:59:59.000Z",
              variant_shopify_id: 44551602307262,
              value_type: "percentage",
              value: "-33.0",
              currency: "EUR",
              fixed_value: "23.09",
              value_style: "EUR33",
              variant_price4wscode: 46.9,
              discount_type: "WS24",
              amazon_deal: false,
              cdi_id: 156266,
              cdi_updated_at: "2026-06-15T03:08:15.074Z"
            }
          ]
        },
        {
          id: "gid://shopify/ProductVariant/44551602274494",
          name: "White",
          sku: "A1664H21",
          barcode: "194644203504",
          price: 69.99,
          weight: 0.8929,
          availableForSale: true,
          quantityAvailable: 3301,
          imageUrl: "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1664H21_Rich_image_TD01_US_V1.png?v=1765192171",
          discounts: [
            {
              title: "WS24A1664PD",
              starts_at: "2026-06-14T22:00:00.000Z",
              ends_at: "2026-06-30T21:59:59.000Z",
              variant_shopify_id: 44551602274494,
              value_type: "percentage",
              value: "-33.0",
              currency: "EUR",
              fixed_value: "23.09",
              value_style: "EUR33",
              variant_price4wscode: 46.9,
              discount_type: "WS24",
              amazon_deal: false,
              cdi_id: 156267,
              cdi_updated_at: "2026-06-15T03:08:15.100Z"
            }
          ]
        },
        {
          id: "gid://shopify/ProductVariant/54823916274040",
          name: "Sprout Green",
          sku: "A1664H61",
          barcode: "194644203535",
          price: 69.99,
          weight: 0.8929,
          availableForSale: true,
          quantityAvailable: 579,
          imageUrl: "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1664H61_A1664H61_Product_Image_Rich_image_TD01_V2_2.png?v=1733569604",
          discounts: [
            {
              title: "WS24A1664PD",
              starts_at: "2026-06-14T22:00:00.000Z",
              ends_at: "2026-06-30T21:59:59.000Z",
              variant_shopify_id: 54823916274040,
              value_type: "percentage",
              value: "-33.0",
              currency: "EUR",
              fixed_value: "23.09",
              value_style: "EUR33",
              variant_price4wscode: 46.9,
              discount_type: "WS24",
              amazon_deal: false,
              cdi_id: 156265,
              cdi_updated_at: "2026-06-15T03:08:15.046Z"
            }
          ]
        }
      ],
      downloads: [
        {
          label: "Declaration of Conformity A1664 DOC 2024-09-27",
          url: "https://cdn.shopify.com/s/files/1/0491/8460/4324/files/Battery_Doc_-_A1664.pdf?v=1727170334"
        }
      ],
      faqs: [
        {
          question: "Why does charging stop at 80%?",
          answer: "Your iPhone may automatically stop charging at 80% to protect its battery from overheating, as part of iOS 17's thermal management strategy. Charging will resume once the device cools down. Moving it to a cooler spot can help speed up this process."
        },
        {
          question: "What functions does the button have?",
          answer: "Pressing the button once displays the battery level and activates wireless charging. Holding it for 2 seconds turns off the lights and the wireless charging feature. Holding it for 5 seconds disables the \"Instant Connect\"feature."
        },
        {
          question: "Why is my phone overheating?",
          answer: "We regulate the charging surface to stay below 104 degrees F (40 degrees C), but your phone may still heat up, especially under heavy use. If overheating occurs during charging, pause and let the phone cool down before resuming."
        },
        {
          question: "Why is my power bank providing fewer chargeS than expected?",
          answer: "Due to a 35% to 45% capacity loss from battery cell and circuit inefficiencies during charging, a fully charged Anker MagGo Power Bank (10K, Slim) effectively provides about 5,500mAh to 6,500mAh ofusable power to your devices."
        },
        {
          question: "Why can't I charge my AirPods?",
          answer: "If the AirPods case doesn't fully cover the charging area needed for wireless charging, the feature won't activate. Ensure the case is centered on the charging pad and press the button to start charging."
        }
      ],
      dataNotes: [
        "Fetched from Anker EU collection and product pages on 2026-06-16.",
        "CapacityWh is estimated from advertised mAh at 3.7V unless Anker listed Wh in the product name.",
        "Variant weight is Shopify shipping weight converted from pounds to grams."
      ]
    },
  },
  {
    categorySlug: "power-banks",
    manufacturer: "Anker",
    model: "Anker MagGo Power Bank (10K)",
    slug: "anker-maggo-power-bank-10k",
    summary: "Qi2 Certified Charging: Embrace the convenience of 15W wireless charging that comes with the assurance of Qi2 certification for fast, secure, and efficient power boosts. Double Up on Speed: Enjoy 15W ultra-fast wirele...",
    summaryUk: "Qi2 Certified Charging: Embrace the convenience of 15W wireless charging that comes with the assurance of Qi2 certification for fast, secure, and efficient power boosts. Double Up on Speed: Enjoy 15W ultra-fast wirele...",
    imagePath: "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/20240109-154532_1_1534x.png?v=1709094094",
    priceCents: 5667,
    productCode: "A1654",
    nominalVoltageV: 5,
    capacityWh: 37,
    continuousPowerW: 15,
    peakPowerW: 15,
    chemistry: "Lithium-ion",
    weightGrams: 450,
    warrantyYears: 2,
    sourceLabel: "Anker EU product page (A1654)",
    sourceLabelUk: "Anker EU product page (A1654)",
    sourceUrl: "https://www.anker.com/eu-en/products/a1654-maggo-10000mah-qi2-power-bank-magsafe-compatible?variant=43596722766014&collections_power-banks&Sort_by=Recommended",
    specifications: {
      collectionListPosition: 2,
      collectionUrl: "https://www.anker.com/eu-en/collections/power-banks",
      shopifyProductId: "gid://shopify/Product/7916908839102",
      handle: "a1654-maggo-10000mah-qi2-power-bank-magsafe-compatible",
      status: "In Stock",
      priceEur: 48.88,
      originalPriceEur: 93.99,
      typicalCapacityMah: 10000,
      estimatedEnergyWh: 37,
      maxOutputW: 15,
      sourceDescription: "Qi2 Certified Charging: Embrace the convenience of 15W wireless charging that comes with the assurance of Qi2 certification for fast, secure, and efficient power boosts. Double Up on Speed: Enjoy 15W ultra-fast wireless charging and power up your devices 2X faster*. Get your iPhone 15 from 0 to 50% in just 44 minutes. Informative Smart Display: Keep tabs on your device's charging journey. From battery percentages to full recharge times, the intuitive smart screen ensures you're always updated. Power Up and Prop Up: With a powerful 10,000mAh, secure 1.8 charges for your iPhone 15 Pro and enjoy hands-free viewing with the built-in stand. What You Get: Anker MagGo Power Bank (10K), 2 ft (0.6 m) USB-C to USB-C cable, welcome guide, 24-month warranty, and our friendly customer service.",
      features: [
        "Qi2 Certified Charging",
        "Double Up on Speed",
        "Informative Smart Display",
        "Power Up and Prop Up"
      ],
      allImages: [
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/20240109-154532_1.png?v=1709094094",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1654021_TD01_V2.jpg?v=1709094094",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1654021_TD02_V4.jpg?v=1709094094",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1654021_TD02_V3_13677e7e-14a9-4c1e-8a0b-e8c843efab40.jpg?v=1709094094",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1654021_TD03_V1.jpg?v=1709094094",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1654021_TD04_V1.jpg?v=1709094094",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1654021_TD05_V1.jpg?v=1709094094",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1654021_TD06_V1.jpg?v=1709094094",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1654011_TD01_V1_1-removebg-preview.png?v=1719825334",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1654011_TD01_V2_1.jpg?v=1719825349",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1654011_TD02_V3_1.jpg?v=1719825349",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1654011_TD04_V1_1.jpg?v=1719825349",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1654011_TD05_V1_1.jpg?v=1719825349",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1654011_TD02_V4_1.jpg?v=1719825349",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1654011_TD06_V1_1.jpg?v=1719825349",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1654011_TD03_V1_1.jpg?v=1719825349",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1654031_TD01_V1-removebg-preview.png?v=1728468944",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1654031_TD01_V2.jpg?v=1719825349",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1654031_TD02_V11.jpg?v=1719825349",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1654031_TD02_V1.jpg?v=1719825349",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1654031_TD03_V1.jpg?v=1719825349",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1654031_TD05_V1.jpg?v=1719825349",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1654031_TD06_V1.jpg?v=1719825349",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1654031_TD04_V1.jpg?v=1719825349",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1654061_ND01_V1_a8260cda-582e-4be9-b41e-2071fd6cb319.png?v=1774852436",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1654061_TD02_V1.jpg?v=1774852597",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1654061_TD03_V1-1280x1280.jpg?v=1774852597",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1654061_TD04_V1.jpg?v=1774852597",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1654061_TD05_V1.jpg?v=1774852597",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1654061_TD06_V1-1280x1280.jpg?v=1774852597",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A16540V1_ND01_V1_619bab63-499a-4fd1-865a-4d28848a97b6.png?v=1774852597",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A16540V1_TD02_V1.jpg?v=1774852597",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A16540V1_TD03_V1-1280x1280.jpg?v=1774852597",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A16540V1_TD04_V1.jpg?v=1774852597",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A16540V1_TD05_V1.jpg?v=1774852597",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A16540V1_TD06_V1-1280x1280.jpg?v=1774852597"
      ],
      variants: [
        {
          id: "gid://shopify/ProductVariant/43596722766014",
          name: "White",
          sku: "A1654021",
          barcode: "194644156657",
          price: 93.99,
          weight: 0.9921,
          availableForSale: true,
          quantityAvailable: 699,
          imageUrl: "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/20240109-154532_1.png?v=1709094094",
          discounts: [
            {
              title: "WS24A1654PD26",
              starts_at: "2026-06-14T22:00:00.000Z",
              ends_at: "2026-06-30T21:59:59.000Z",
              variant_shopify_id: 43596722766014,
              value_type: "percentage",
              value: "-48.0",
              currency: "EUR",
              fixed_value: "45.11",
              value_style: "EUR48",
              variant_price4wscode: 48.88,
              discount_type: "WS24",
              amazon_deal: false,
              cdi_id: 156362,
              cdi_updated_at: "2026-06-15T03:28:02.497Z"
            }
          ]
        },
        {
          id: "gid://shopify/ProductVariant/43596722798782",
          name: "Black",
          sku: "A1654011",
          barcode: "194644156640",
          price: 93.99,
          weight: 0.9921,
          availableForSale: true,
          quantityAvailable: 3625,
          imageUrl: "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1654011_TD01_V1_1-removebg-preview.png?v=1719825334",
          discounts: [
            {
              title: "WS24A1654PD26",
              starts_at: "2026-06-14T22:00:00.000Z",
              ends_at: "2026-06-30T21:59:59.000Z",
              variant_shopify_id: 43596722798782,
              value_type: "percentage",
              value: "-48.0",
              currency: "EUR",
              fixed_value: "45.11",
              value_style: "EUR48",
              variant_price4wscode: 48.88,
              discount_type: "WS24",
              amazon_deal: false,
              cdi_id: 156363,
              cdi_updated_at: "2026-06-15T03:28:02.532Z"
            }
          ]
        },
        {
          id: "gid://shopify/ProductVariant/43921542676670",
          name: "Misty Blue",
          sku: "A1654031",
          barcode: "194644156664",
          price: 93.99,
          weight: 0.9921,
          availableForSale: true,
          quantityAvailable: 300,
          imageUrl: "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1654031_TD01_V1-removebg-preview.png?v=1728468944",
          discounts: [
            {
              title: "WS24A1654PD26",
              starts_at: "2026-06-14T22:00:00.000Z",
              ends_at: "2026-06-30T21:59:59.000Z",
              variant_shopify_id: 43921542676670,
              value_type: "percentage",
              value: "-48.0",
              currency: "EUR",
              fixed_value: "45.11",
              value_style: "EUR48",
              variant_price4wscode: 48.88,
              discount_type: "WS24",
              amazon_deal: false,
              cdi_id: 156361,
              cdi_updated_at: "2026-06-15T03:28:02.468Z"
            }
          ]
        },
        {
          id: "gid://shopify/ProductVariant/55516207284600",
          name: "Green",
          sku: "A1654061",
          barcode: "194644156671",
          price: 93.99,
          weight: 0.9921,
          availableForSale: true,
          quantityAvailable: 10,
          imageUrl: "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1654061_ND01_V1_a8260cda-582e-4be9-b41e-2071fd6cb319.png?v=1774852436",
          discounts: [
            {
              title: "WS24A1654PD26",
              starts_at: "2026-06-14T22:00:00.000Z",
              ends_at: "2026-06-30T21:59:59.000Z",
              variant_shopify_id: 55516207284600,
              value_type: "percentage",
              value: "-48.0",
              currency: "EUR",
              fixed_value: "45.11",
              value_style: "EUR48",
              variant_price4wscode: 48.88,
              discount_type: "WS24",
              amazon_deal: false,
              cdi_id: 156365,
              cdi_updated_at: "2026-06-15T03:28:02.592Z"
            }
          ]
        },
        {
          id: "gid://shopify/ProductVariant/55516207448440",
          name: "Pink",
          sku: "A16540V1",
          barcode: "194644156688",
          price: 93.99,
          weight: 0.9921,
          availableForSale: true,
          quantityAvailable: 5,
          imageUrl: "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A16540V1_ND01_V1_619bab63-499a-4fd1-865a-4d28848a97b6.png?v=1774852597",
          discounts: [
            {
              title: "WS24A1654PD26",
              starts_at: "2026-06-14T22:00:00.000Z",
              ends_at: "2026-06-30T21:59:59.000Z",
              variant_shopify_id: 55516207448440,
              value_type: "percentage",
              value: "-48.0",
              currency: "EUR",
              fixed_value: "45.11",
              value_style: "EUR48",
              variant_price4wscode: 48.88,
              discount_type: "WS24",
              amazon_deal: false,
              cdi_id: 156364,
              cdi_updated_at: "2026-06-15T03:28:02.562Z"
            }
          ]
        }
      ],
      downloads: [
        {
          label: "Declaration of Conformity A1654 DOC 2023-03-28",
          url: "https://cdn.shopify.com/s/files/1/0491/8460/4324/files/A1654.pdf?v=1710476559"
        }
      ],
      faqs: [
        {
          question: "Q1: Is the product safe to use when it gets warm/hot?",
          answer: "The slight warming of wireless charging products and devices is normal, especially during heavy use like prolonged gaming or streaming. However, this product complies with international safety standards, including EN 62368-1 and IEC 62368-1, ensuring that it is safe to use under normal conditions without posing any safety risk."
        },
        {
          question: "Q2: Can a phone case affect wireless charging?",
          answer: "For the best wireless charging experience, we recommend using Apple's official magnetic phone cases. You should avoid cases thicker than 2.5 mm and non-magnetic cases, as they may affect charging efficiency."
        },
        {
          question: "Q3: Why doesn't my phone achieve 15W wireless charging power, and why is the charging circle not displayed?",
          answer: "Ensure our iPhone (13 series or later) has iOS 17.2. for optimal charging and display; this power bank is not Android-compatible. Please note, when the USB-C port is also charging a device, the wireless charging output will be reduced to 5W."
        },
        {
          question: "Q4: Why is my power bank providing fewer charges than expected?",
          answer: "The capacity reduction during charging is due to a 30% to 45% energy loss in the battery cells and conversion circuitry. Therefore, a fully charged Anker MagGo Power Bank (10K) offers an estimated 6,000mAh to 7,000mAh to power devices."
        },
        {
          question: "Q5: Is this power bank compatible with Android phones?",
          answer: "No, this power bank is not compatible with Android devices. It is designed for devices that support magnetic wireless charging, which is currently available only in the iPhone 12 and later models."
        }
      ],
      dataNotes: [
        "Fetched from Anker EU collection and product pages on 2026-06-16.",
        "CapacityWh is estimated from advertised mAh at 3.7V unless Anker listed Wh in the product name.",
        "Variant weight is Shopify shipping weight converted from pounds to grams."
      ]
    },
  },
  {
    categorySlug: "power-banks",
    manufacturer: "Anker",
    model: "Anker MagGo Power Bank (10K, 35W, For Apple Watch)",
    slug: "anker-maggo-power-bank-10k-35w-for-apple-watch",
    summary: "All-Around Apple Charging: Seamlessly charge your tech with a robust 10,000mAh power bank, featuring an adjustable Apple Watch charger and a built-in USB-C cable for quick, on-the-go power. Officially Certified for Ap...",
    summaryUk: "All-Around Apple Charging: Seamlessly charge your tech with a robust 10,000mAh power bank, featuring an adjustable Apple Watch charger and a built-in USB-C cable for quick, on-the-go power. Officially Certified for Ap...",
    imagePath: "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1657021_Rich_image_TD01_US_V2_1534x.png?v=1727319962",
    priceCents: 5609,
    productCode: "A1657",
    nominalVoltageV: 5,
    capacityWh: 37,
    continuousPowerW: 35,
    peakPowerW: 35,
    chemistry: "Lithium-ion",
    weightGrams: 315,
    warrantyYears: 2,
    sourceLabel: "Anker EU product page (A1657)",
    sourceLabelUk: "Anker EU product page (A1657)",
    sourceUrl: "https://www.anker.com/eu-en/products/a1657-maggo-10000mah-power-bank?variant=44551601881278&collections_power-banks&Sort_by=Recommended",
    specifications: {
      collectionListPosition: 3,
      collectionUrl: "https://www.anker.com/eu-en/collections/power-banks",
      shopifyProductId: "gid://shopify/Product/8314245382334",
      handle: "a1657-maggo-10000mah-power-bank",
      status: "In Stock",
      priceEur: 48.38,
      originalPriceEur: 81.99,
      typicalCapacityMah: 10000,
      estimatedEnergyWh: 37,
      maxOutputW: 35,
      sourceDescription: "All-Around Apple Charging: Seamlessly charge your tech with a robust 10,000mAh power bank, featuring an adjustable Apple Watch charger and a built-in USB-C cable for quick, on-the-go power. Officially Certified for Apple Watch: Maximize your charging efficiency with the Apple-certified power bank, capable of charging an Apple Watch Series 9 to 47% in just 30 minutes. 30W USB-C and 5W Apple Watch Charging: Supports simultaneous device charging with the built-in cable or port, offering up to 30W, alongside a wireless watch charger that provides up to 5W. The power bank fully recharges in 1.5 hours with a 30W maximum input. Travel-Friendly Power: Compact as a standard mouse at just 3.7 x 2.0 x 1.3 inches, it fits effortlessly into pockets or bags. Fully flight-approved, the power bank offers hassle-free travel charging, providing about two full charges for iPhone 15 Pro and up to 11 charges for Apple Watch Series 9. What You Get: Anker MagGo Power Bank (10K, 35W, For Apple Watch), welcome guide, 24-month warranty, and our friendly customer service.",
      features: [
        "All-Around Apple Charging",
        "Officially Certified for Apple Watch",
        "30W USB-C and 5W Apple Watch Charging",
        "Travel-Friendly Power"
      ],
      allImages: [
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1657021_Rich_image_TD01_US_V2.png?v=1727319962",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1657021_Rich_image_US_TD02_V1.jpg?v=1725520079",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1657021_Rich_image_US_TD03_V1.jpg?v=1725520079",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1657021_Rich_image_US_TD06_V1.jpg?v=1725520079",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1657021_Rich_image_US_TD04_V1.jpg?v=1725520079",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1657021_Rich_image_Rich_image_US_TD05_V1.jpg?v=1725520079",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1657011_Rich_image_TD01_US_V2.png?v=1727319963",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1657011_Richimage_US_TD02_V1.jpg?v=1725520079",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1657011_Richimage_US_TD03_V1.jpg?v=1725520079",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1657011_Richimage_Richimage_US_TD05_V1.jpg?v=1725520079",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1657011_Richimage_US_TD04_V1.jpg?v=1725520079",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1657011_Richimage_US_TD06_V1.jpg?v=1725520079",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1657051_Rich_image_TD01.2_UK_V2.png?v=1776937785",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1657051_Rich_image_TD02_UK_V2.jpg?v=1776937784",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1657051_Rich_image_TD03_UK_V2.jpg?v=1776937785",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1657051_Rich_image_TD06_UK_V2.jpg?v=1776937784",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1657051_Rich_image_TD04_UK_V2.jpg?v=1776937783",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1657051_Rich_image_TD05_UK_V2.jpg?v=1776937784"
      ],
      variants: [
        {
          id: "gid://shopify/ProductVariant/44551601881278",
          name: "White",
          sku: "A1657021",
          barcode: "194644039066",
          price: 81.99,
          weight: 0.6945,
          availableForSale: true,
          quantityAvailable: 389,
          imageUrl: "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1657021_Rich_image_TD01_US_V2.png?v=1727319962",
          discounts: [
            {
              title: "WS24A1657PD26",
              starts_at: "2026-06-14T22:00:00.000Z",
              ends_at: "2026-06-30T21:59:59.000Z",
              variant_shopify_id: 44551601881278,
              value_type: "percentage",
              value: "-41.0",
              currency: "EUR",
              fixed_value: "33.61",
              value_style: "EUR41",
              variant_price4wscode: 48.38,
              discount_type: "WS24",
              amazon_deal: false,
              cdi_id: 156367,
              cdi_updated_at: "2026-06-15T03:28:44.108Z"
            }
          ]
        },
        {
          id: "gid://shopify/ProductVariant/44551601914046",
          name: "Black",
          sku: "A1657011",
          barcode: "194644039073",
          price: 81.99,
          weight: 0.6945,
          availableForSale: true,
          quantityAvailable: 156,
          imageUrl: "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1657011_Rich_image_TD01_US_V2.png?v=1727319963",
          discounts: [
            {
              title: "WS24A1657PD26",
              starts_at: "2026-06-14T22:00:00.000Z",
              ends_at: "2026-06-30T21:59:59.000Z",
              variant_shopify_id: 44551601914046,
              value_type: "percentage",
              value: "-41.0",
              currency: "EUR",
              fixed_value: "33.61",
              value_style: "EUR41",
              variant_price4wscode: 48.38,
              discount_type: "WS24",
              amazon_deal: false,
              cdi_id: 156366,
              cdi_updated_at: "2026-06-15T03:28:44.069Z"
            }
          ]
        },
        {
          id: "gid://shopify/ProductVariant/55538113085816",
          name: "Pink",
          sku: "A1657051",
          barcode: "194644296087",
          price: 81.99,
          weight: 0.6945,
          availableForSale: true,
          quantityAvailable: 195,
          imageUrl: "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1657051_Rich_image_TD01.2_UK_V2.png?v=1776937785",
          discounts: [
            {
              title: "WS24A1657PD26",
              starts_at: "2026-06-14T22:00:00.000Z",
              ends_at: "2026-06-30T21:59:59.000Z",
              variant_shopify_id: 55538113085816,
              value_type: "percentage",
              value: "-41.0",
              currency: "EUR",
              fixed_value: "33.61",
              value_style: "EUR41",
              variant_price4wscode: 48.38,
              discount_type: "WS24",
              amazon_deal: false,
              cdi_id: 156368,
              cdi_updated_at: "2026-06-15T03:28:44.141Z"
            }
          ]
        }
      ],
      downloads: [
        {
          label: "Declaration of Conformity A1657 DOC 2024-09-27",
          url: "https://cdn.shopify.com/s/files/1/0491/8460/4324/files/Battery_Doc_-_A1657.pdf?v=1727170334"
        }
      ],
      faqs: [],
      dataNotes: [
        "Fetched from Anker EU collection and product pages on 2026-06-16.",
        "CapacityWh is estimated from advertised mAh at 3.7V unless Anker listed Wh in the product name.",
        "Variant weight is Shopify shipping weight converted from pounds to grams."
      ]
    },
  },
  {
    categorySlug: "power-banks",
    manufacturer: "Anker",
    model: "Anker 737 Power Bank (PowerCore 24K)",
    slug: "anker-737-power-bank-powercore-24k",
    summary: "Swift Power Anywhere: Benefit from fast charging with 140W Power Delivery 3.1 technology, ideal for keeping devices powered up during travel and commutes, perfect for professionals needing a reliable laptop power bank...",
    summaryUk: "Swift Power Anywhere: Benefit from fast charging with 140W Power Delivery 3.1 technology, ideal for keeping devices powered up during travel and commutes, perfect for professionals needing a reliable laptop power bank...",
    imagePath: "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1289011-Anker_737_Power_Bank_PowerCore_24K_5_1534x.png?v=1672389694",
    priceCents: 8050,
    productCode: "A1289",
    nominalVoltageV: 5,
    capacityWh: 89,
    continuousPowerW: 140,
    peakPowerW: 140,
    chemistry: "Lithium-ion",
    weightGrams: 903,
    warrantyYears: 2,
    sourceLabel: "Anker EU product page (A1289)",
    sourceLabelUk: "Anker EU product page (A1289)",
    sourceUrl: "https://www.anker.com/eu-en/products/a1289?variant=42109767549118&collections_power-banks&Sort_by=Recommended",
    specifications: {
      collectionListPosition: 4,
      collectionUrl: "https://www.anker.com/eu-en/collections/power-banks",
      shopifyProductId: "gid://shopify/Product/7407168291006",
      handle: "a1289",
      status: "In Stock",
      priceEur: 69.43,
      originalPriceEur: 157.79,
      typicalCapacityMah: 24000,
      estimatedEnergyWh: 89,
      maxOutputW: 140,
      sourceDescription: "Swift Power Anywhere: Benefit from fast charging with 140W Power Delivery 3.1 technology, ideal for keeping devices powered up during travel and commutes, perfect for professionals needing a reliable laptop power bank. Marathon Battery Life: With a 24,000mAh capacity, enjoy up to five full charges for an iPhone 13 or 1.3 charges for an iPad Pro, ensuring you stay connected and productive, making this a dependable Anker power bank for long-lasting use. Intelligent Charge Monitoring: The integrated digital display provides real-time charging information, allowing for precise power management and recharge planning on the go, making this a smart choice for a high-capacity Anker USB C power bank. What You Get: Anker 737 Power Bank (PowerCore 24K), welcome guide, 24-month stress-free warranty, and friendly customer service.",
      features: [
        "Swift Power Anywhere",
        "Marathon Battery Life",
        "Intelligent Charge Monitoring"
      ],
      allImages: [
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1289011-Anker_737_Power_Bank_PowerCore_24K_5.png?v=1672389694",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1289011_TD02_V1.jpg?v=1672389693",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1289011_TD03_V1.jpg?v=1672389693",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1289011_TD04_V1.jpg?v=1672389693",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1289011_TD05_V1.jpg?v=1672389693",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1289011_TD06_V1.jpg?v=1672389693"
      ],
      variants: [
        {
          id: "gid://shopify/ProductVariant/42109767549118",
          name: "Default Title",
          sku: "A1289011",
          barcode: "194644098728",
          price: 157.79,
          weight: 1.9908,
          availableForSale: true,
          quantityAvailable: 199,
          imageUrl: "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1289011-Anker_737_Power_Bank_PowerCore_24K_5.png?v=1672389694",
          discounts: [
            {
              title: "WS24A1289PD26",
              starts_at: "2026-06-14T22:00:00.000Z",
              ends_at: "2026-06-30T21:59:59.000Z",
              variant_shopify_id: 42109767549118,
              value_type: "percentage",
              value: "-56.0",
              currency: "EUR",
              fixed_value: "88.36",
              value_style: "EUR56",
              variant_price4wscode: 69.43,
              discount_type: "WS24",
              amazon_deal: false,
              cdi_id: 156355,
              cdi_updated_at: "2026-06-15T03:26:43.193Z"
            }
          ]
        }
      ],
      downloads: [
        {
          label: "Declaration of Conformity A1289 DOC 2024-09-27",
          url: "https://cdn.shopify.com/s/files/1/0491/8460/4324/files/Battery_Doc_-_A1289_d58a35b6-51f2-41a9-beb0-6fdfa09dc60f.pdf?v=1727170334"
        }
      ],
      faqs: [
        {
          question: "1. Why does the battery drain so quickly?",
          answer: "When the Settings selection screen is always on, both the screen and MCU are working, so it is normal that the battery drains quickly. The overall power consumption is 0.36W and uses 15% of the battery in about 24 hours. We recommend that you turn off the display screen when not in use."
        },
        {
          question: "2. Why is \"Screen Time\", \"Battery Cycle\", \"Total Input\", and \"Total Output\" not showing \"0\" on the display?",
          answer: "After receiving the portable charger, you will see the value displayed on the screen with data. This is the value record of the factory during the production and testing process. To ensure the quality of the product, we conduct tests to verify that the product meets the intended performance and specifications. (a) \"Battery Cycle\" should be 0 while \"Battery Health\" should be 100%. (b) Other information such as \"Screen Usage\", \"Total Input\", and \"Total Output\" should not be 0."
        },
        {
          question: "3. Why can't the power reach 140W?",
          answer: "To reach 140W, you need to use a cable that supports PD 3.1 and a device that supports PD 3.1 input such as the 2021 MacBook Pro 16."
        },
        {
          question: "4. Why does port A show 0.1W output when the power bank is not connected to any device?",
          answer: "1. Even if the device is unplugged when charging with port A, it will continue to output a small current to prevent the device from being fully charged, and it will last for about 2 minutes. 2. In low current mode, it is normal that the output of port A is 0.1W."
        }
      ],
      dataNotes: [
        "Fetched from Anker EU collection and product pages on 2026-06-16.",
        "CapacityWh is estimated from advertised mAh at 3.7V unless Anker listed Wh in the product name.",
        "Variant weight is Shopify shipping weight converted from pounds to grams."
      ]
    },
  },
  {
    categorySlug: "power-banks",
    manufacturer: "Anker",
    model: "Anker Prime 20,000mAh Power Bank (200W)",
    slug: "anker-prime-20-000mah-power-bank-200w",
    summary: "200W Total Output: Equipped with two high-powered USB-C ports and one USB-A port totaling 200W output, quickly charge two laptops simultaneously at 100W each for maximum efficiency. Lightning-Fast Recharge: The 100W r...",
    summaryUk: "200W Total Output: Equipped with two high-powered USB-C ports and one USB-A port totaling 200W output, quickly charge two laptops simultaneously at 100W each for maximum efficiency. Lightning-Fast Recharge: The 100W r...",
    imagePath: "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1336011_TD01_V1-removebg-preview_1534x.png?v=1691029520",
    priceCents: 8580,
    productCode: "A1336",
    nominalVoltageV: 5,
    capacityWh: 74,
    continuousPowerW: 200,
    peakPowerW: 200,
    chemistry: "Lithium-ion",
    weightGrams: 680,
    warrantyYears: 2,
    sourceLabel: "Anker EU product page (A1336)",
    sourceLabelUk: "Anker EU product page (A1336)",
    sourceUrl: "https://www.anker.com/eu-en/products/a1336-20000mah-power-bank?variant=42948669309118&collections_power-banks&Sort_by=Recommended",
    specifications: {
      collectionListPosition: 5,
      collectionUrl: "https://www.anker.com/eu-en/collections/power-banks",
      shopifyProductId: "gid://shopify/Product/7711358222526",
      handle: "a1336-20000mah-power-bank",
      status: "In Stock",
      priceEur: 74,
      originalPriceEur: 147.99,
      typicalCapacityMah: 20000,
      estimatedEnergyWh: 74,
      maxOutputW: 200,
      sourceDescription: "200W Total Output: Equipped with two high-powered USB-C ports and one USB-A port totaling 200W output, quickly charge two laptops simultaneously at 100W each for maximum efficiency. Lightning-Fast Recharge: The 100W rapid recharge via the USB-C port enables the power bank to be fully recharged in 1 hour and 15 minutes. Power On the Move: With a compact size of 4.9 x 2.1 x 1.9 inches, the 20,000mAh power bank is designed to fit seamlessly into your bag, making it convenient for travel and ensuring you always have reliable power on the go. Get Real-Time Information: Stay informed with the smart digital display that provides real-time information on remaining battery capacity, power input, and power output, giving you complete control and visibility over the power bank. What You Get: Anker Prime 20,000mAh Power Bank (200W), 2 ft / 0.6 m USB-C to USB-C charging cable, travel pouch, welcome guide, our worry-free 24-month warranty, and friendly customer service.",
      features: [
        "200W Total Output",
        "Lightning-Fast Recharge",
        "Power On the Move",
        "Get Real-Time Information"
      ],
      allImages: [
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1336011_TD01_V1-removebg-preview.png?v=1691029520",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1336011_TD02_V1.jpg?v=1691029520",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1336011_TD03_V1.jpg?v=1691029520",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1336011_TD04_V1.jpg?v=1691029520",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1336011_TD05_V1.jpg?v=1691029520",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1336011_TD06_V1.jpg?v=1691029520",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/Gold-01.jpg?v=1709519938",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/Gold-04.jpg?v=1709519938",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/Gold-05.jpg?v=1709519938",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/Gold-03.jpg?v=1709519934",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/Gold-02.jpg?v=1709519935"
      ],
      variants: [
        {
          id: "gid://shopify/ProductVariant/42948669309118",
          name: "Black",
          sku: "A1336011",
          barcode: "194644130893",
          price: 147.99,
          weight: 1.4991,
          availableForSale: true,
          quantityAvailable: 70,
          imageUrl: "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1336011_TD01_V1-removebg-preview.png?v=1691029520",
          discounts: [
            {
              title: "WS24A1336PD26",
              starts_at: "2026-06-14T22:00:00.000Z",
              ends_at: "2026-06-30T21:59:59.000Z",
              variant_shopify_id: 42948669309118,
              value_type: "percentage",
              value: "-50.0",
              currency: "EUR",
              fixed_value: "73.99",
              value_style: "EUR50",
              variant_price4wscode: 74,
              discount_type: "WS24",
              amazon_deal: false,
              cdi_id: 156356,
              cdi_updated_at: "2026-06-15T03:27:36.934Z"
            }
          ]
        },
        {
          id: "gid://shopify/ProductVariant/43618675425470",
          name: "champagne",
          sku: "A13360B1",
          barcode: "194644147648",
          price: 147.99,
          weight: 1.4991,
          availableForSale: false,
          quantityAvailable: 0,
          imageUrl: "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/Gold-01.jpg?v=1709519938",
          discounts: [
            {
              title: "WS24A1336PD26",
              starts_at: "2026-06-14T22:00:00.000Z",
              ends_at: "2026-06-30T21:59:59.000Z",
              variant_shopify_id: 43618675425470,
              value_type: "percentage",
              value: "-50.0",
              currency: "EUR",
              fixed_value: "73.99",
              value_style: "EUR50",
              variant_price4wscode: 74,
              discount_type: "WS24",
              amazon_deal: false,
              cdi_id: 156357,
              cdi_updated_at: "2026-06-15T03:27:36.957Z"
            }
          ]
        }
      ],
      downloads: [
        {
          label: "QSG QSG 2023-07-27T07:50:49Z",
          url: "https://cdn.shopify.com/s/files/1/0517/6767/3016/files/A1336_Anker_Prime_20000mAh_Power_Bank_200W_QSG.pdf?v=1690444250"
        },
        {
          label: "Declaration of Conformity A1336 DOC 2024-09-27",
          url: "https://cdn.shopify.com/s/files/1/0491/8460/4324/files/Battery_Doc_-_A1336_B1336.pdf?v=1727170334"
        }
      ],
      faqs: [],
      dataNotes: [
        "Fetched from Anker EU collection and product pages on 2026-06-16.",
        "CapacityWh is estimated from advertised mAh at 3.7V unless Anker listed Wh in the product name.",
        "Variant weight is Shopify shipping weight converted from pounds to grams."
      ]
    },
  },
  {
    categorySlug: "power-banks",
    manufacturer: "Anker",
    model: "Anker Nano Power Bank (22.5W, Built-In USB-C Connector)",
    slug: "anker-nano-power-bank-22-5w-built-in-usb-c-connector",
    summary: "Two-Port High-Speed Charging: Experience high-speed charging with dual USB-C ports and advanced PowerIQ 3.0 technology, delivering an impressive 22.5W output. Foldable USB-C Connector: Say goodbye to cable tangles and...",
    summaryUk: "Two-Port High-Speed Charging: Experience high-speed charging with dual USB-C ports and advanced PowerIQ 3.0 technology, delivering an impressive 22.5W output. Foldable USB-C Connector: Say goodbye to cable tangles and...",
    imagePath: "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/20241010-102108_1534x.png?v=1728526915",
    priceCents: 2145,
    productCode: "A1653",
    nominalVoltageV: 5,
    capacityWh: 19,
    continuousPowerW: 23,
    peakPowerW: 23,
    chemistry: "Lithium-ion",
    weightGrams: 146,
    warrantyYears: 2,
    sourceLabel: "Anker EU product page (A1653)",
    sourceLabelUk: "Anker EU product page (A1653)",
    sourceUrl: "https://www.anker.com/eu-en/products/a1653-usb-c-portable-charger-5000mah?variant=43398823936190&collections_power-banks&Sort_by=Recommended",
    specifications: {
      collectionListPosition: 6,
      collectionUrl: "https://www.anker.com/eu-en/collections/power-banks",
      shopifyProductId: "gid://shopify/Product/7856432906430",
      handle: "a1653-usb-c-portable-charger-5000mah",
      status: "In Stock",
      priceEur: 18.5,
      originalPriceEur: 36.99,
      typicalCapacityMah: 5000,
      estimatedEnergyWh: 19,
      maxOutputW: 22.5,
      sourceDescription: "Two-Port High-Speed Charging: Experience high-speed charging with dual USB-C ports and advanced PowerIQ 3.0 technology, delivering an impressive 22.5W output. Foldable USB-C Connector: Say goodbye to cable tangles and protect your USB-C connector with a convenient foldable design for hassle-free charging. The Perfect Size: Enjoy the perfect blend of style and functionality, meticulously crafted to effortlessly fit into your pocket or purse. All-Day Power: Get uninterrupted charging during your travels with the reliable 5,000mAh capacity, keeping your devices powered up wherever you go. What You Get: Anker Nano Power Bank (22.5W, Built-In USB-C Connector), 2 ft / 0.6 m USB-C to USB-C cable, welcome guide, user manual, 24-month worry-free warranty, and our friendly customer service.",
      features: [
        "Two-Port High-Speed Charging",
        "Foldable USB-C Connector",
        "The Perfect Size",
        "All-Day Power"
      ],
      allImages: [
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/20241010-102108.png?v=1728526915",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/81VZ468LlcL.jpg?v=1703063304",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/81AtGiqBJOL.jpg?v=1703063304",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/7129UcJ1gfL.jpg?v=1703063304",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/61ukokO_-wL.jpg?v=1703063304",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/71cKN9pcWDL.jpg?v=1703063304",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1653031_ND01_V1.png?v=1728470287",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1653031_TD01_V2-1280x1280.jpg?v=1703063304",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1653031_TD02_V1-1280x1280.jpg?v=1703063304",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1653031_TD03_V1-1280x1280.jpg?v=1703063304",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1653031_TD04_V1-1280x1280.jpg?v=1703063304",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1653031_TD05_V1-1280x1280.jpg?v=1703063304",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/1fa1e126-aa1c-452d-900c-d398d11800b4.png?v=1728470286",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1653031_TD06_V1-1280x1280.jpg?v=1703063305",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1653021_TD01_V2-1280x1280.jpg?v=1703063305",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1653021_TD02_V1-1280x1280.jpg?v=1703063305",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1653021_TD03_V1-1280x1280.jpg?v=1703063305",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1653021_TD04_V1-1280x1280.jpg?v=1703063305",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1653021_TD05_V1-1280x1280.jpg?v=1703063305",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1653021_TD06_V1-1280x1280.jpg?v=1703063305",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1653061_TD01_V1-1280x1280__1_-removebg-preview.png?v=1731577435",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1653061_TD01_V2-1280x1280.jpg?v=1703063305",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1653061_TD02_V1-1280x1280.jpg?v=1703063305",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1653061_TD03_V1-1280x1280.jpg?v=1703063305",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1653061_TD04_V1-1280x1280.jpg?v=1703063305",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1653061_TD05_V1-1280x1280.jpg?v=1703063305",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A16530V1_TD01_V1-1280x1280-removebg-preview_1.png?v=1728470285",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1653061_TD06_V1-1280x1280.jpg?v=1703063305",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A16530V1_TD01_V2-1280x1280.jpg?v=1703063305",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A16530V1_TD02_V1-1280x1280.jpg?v=1703063305",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A16530V1_TD03_V1-1280x1280.jpg?v=1703063305",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A16530V1_TD04_V1-1280x1280.jpg?v=1703063305",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A16530V1_TD05_V1-1280x1280.jpg?v=1703063305",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A16530V1_TD06_V1-1280x1280.jpg?v=1703063305"
      ],
      variants: [
        {
          id: "gid://shopify/ProductVariant/43398823936190",
          name: "Black Stone",
          sku: "A1653011",
          barcode: "194644145880",
          price: 36.99,
          weight: 0.3219,
          availableForSale: true,
          quantityAvailable: 4008,
          imageUrl: "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/20241010-102108.png?v=1728526915",
          discounts: [
            {
              title: "WS24A1653PD26",
              starts_at: "2026-06-14T22:00:00.000Z",
              ends_at: "2026-06-30T21:59:59.000Z",
              variant_shopify_id: 43398823936190,
              value_type: "percentage",
              value: "-50.0",
              currency: "EUR",
              fixed_value: "18.49",
              value_style: "EUR50",
              variant_price4wscode: 18.5,
              discount_type: "WS24",
              amazon_deal: false,
              cdi_id: 156395,
              cdi_updated_at: "2026-06-15T03:37:23.860Z"
            }
          ]
        },
        {
          id: "gid://shopify/ProductVariant/43398820069566",
          name: "Ice Lake Blue",
          sku: "A1653031",
          barcode: "194644145842",
          price: 36.99,
          weight: 0.3219,
          availableForSale: true,
          quantityAvailable: 801,
          imageUrl: "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1653031_ND01_V1.png?v=1728470287",
          discounts: [
            {
              title: "WS24A1653PD26",
              starts_at: "2026-06-14T22:00:00.000Z",
              ends_at: "2026-06-30T21:59:59.000Z",
              variant_shopify_id: 43398820069566,
              value_type: "percentage",
              value: "-50.0",
              currency: "EUR",
              fixed_value: "18.49",
              value_style: "EUR50",
              variant_price4wscode: 18.5,
              discount_type: "WS24",
              amazon_deal: false,
              cdi_id: 156397,
              cdi_updated_at: "2026-06-15T03:37:23.917Z"
            }
          ]
        },
        {
          id: "gid://shopify/ProductVariant/43398819971262",
          name: "Shell White",
          sku: "A1653021",
          barcode: "194644145743",
          price: 36.99,
          weight: 0.3219,
          availableForSale: true,
          quantityAvailable: 305,
          imageUrl: "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/1fa1e126-aa1c-452d-900c-d398d11800b4.png?v=1728470286",
          discounts: [
            {
              title: "WS24A1653PD26",
              starts_at: "2026-06-14T22:00:00.000Z",
              ends_at: "2026-06-30T21:59:59.000Z",
              variant_shopify_id: 43398819971262,
              value_type: "percentage",
              value: "-50.0",
              currency: "EUR",
              fixed_value: "18.49",
              value_style: "EUR50",
              variant_price4wscode: 18.5,
              discount_type: "WS24",
              amazon_deal: false,
              cdi_id: 156394,
              cdi_updated_at: "2026-06-15T03:37:23.819Z"
            }
          ]
        },
        {
          id: "gid://shopify/ProductVariant/43398820036798",
          name: "Sprout Green",
          sku: "A1653061",
          barcode: "194644145866",
          price: 36.99,
          weight: 0.3219,
          availableForSale: false,
          quantityAvailable: 0,
          imageUrl: "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1653061_TD01_V1-1280x1280__1_-removebg-preview.png?v=1731577435",
          discounts: [
            {
              title: "WS24A1653PD26",
              starts_at: "2026-06-14T22:00:00.000Z",
              ends_at: "2026-06-30T21:59:59.000Z",
              variant_shopify_id: 43398820036798,
              value_type: "percentage",
              value: "-50.0",
              currency: "EUR",
              fixed_value: "18.49",
              value_style: "EUR50",
              variant_price4wscode: 18.5,
              discount_type: "WS24",
              amazon_deal: false,
              cdi_id: 156396,
              cdi_updated_at: "2026-06-15T03:37:23.890Z"
            }
          ]
        },
        {
          id: "gid://shopify/ProductVariant/43398820004030",
          name: "Lotus Pink",
          sku: "A16530V1",
          barcode: "194644145835",
          price: 36.99,
          weight: 0.3219,
          availableForSale: true,
          quantityAvailable: 17,
          imageUrl: "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A16530V1_TD01_V1-1280x1280-removebg-preview_1.png?v=1728470285",
          discounts: [
            {
              title: "WS24A1653PD26",
              starts_at: "2026-06-14T22:00:00.000Z",
              ends_at: "2026-06-30T21:59:59.000Z",
              variant_shopify_id: 43398820004030,
              value_type: "percentage",
              value: "-50.0",
              currency: "EUR",
              fixed_value: "18.49",
              value_style: "EUR50",
              variant_price4wscode: 18.5,
              discount_type: "WS24",
              amazon_deal: false,
              cdi_id: 156398,
              cdi_updated_at: "2026-06-15T03:37:23.952Z"
            }
          ]
        }
      ],
      downloads: [
        {
          label: "QSG Anker Nano Power Bank (22.5W, Built-In USB-C Connector) - A1653 2023-08-28T02:18:17Z",
          url: "https://cdn.shopify.com/s/files/1/0517/6767/3016/files/51005004096_V01_Battery_A1653_QSG_90x62mm_20230710_outline.pdf?v=1693189098"
        },
        {
          label: "Declaration of Conformity A1653 DOC 2024-09-27",
          url: "https://cdn.shopify.com/s/files/1/0491/8460/4324/files/Battery_Doc_-_A1653_871dba59-1496-4200-a5ee-269eb59c7ccd.pdf?v=1727170336"
        }
      ],
      faqs: [],
      dataNotes: [
        "Fetched from Anker EU collection and product pages on 2026-06-16.",
        "CapacityWh is estimated from advertised mAh at 3.7V unless Anker listed Wh in the product name.",
        "Variant weight is Shopify shipping weight converted from pounds to grams."
      ]
    },
  },
  {
    categorySlug: "power-banks",
    manufacturer: "Anker",
    model: "Anker 633 Magnetic Battery",
    slug: "anker-633-magnetic-battery",
    summary: "2-in-1: The charger wirelessly charges your phone while the practical foldable stand props up your phone for easy viewing. Compact and Powerful: The 10,000mAh small-sized battery contains enough power to charge an iPh...",
    summaryUk: "2-in-1: The charger wirelessly charges your phone while the practical foldable stand props up your phone for easy viewing. Compact and Powerful: The 10,000mAh small-sized battery contains enough power to charge an iPh...",
    imagePath: "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1641011-Anker_633_Magnetic_Battery_6_1534x.png?v=1672389703",
    priceCents: 6955,
    productCode: "A1641",
    nominalVoltageV: 5,
    capacityWh: 37,
    continuousPowerW: 20,
    peakPowerW: 20,
    chemistry: "Lithium-ion",
    weightGrams: 278,
    warrantyYears: 2,
    sourceLabel: "Anker EU product page (A1641)",
    sourceLabelUk: "Anker EU product page (A1641)",
    sourceUrl: "https://www.anker.com/eu-en/products/a1641?variant=41510196740286&collections_power-banks&Sort_by=Recommended",
    specifications: {
      collectionListPosition: 7,
      collectionUrl: "https://www.anker.com/eu-en/collections/power-banks",
      shopifyProductId: "gid://shopify/Product/7251919798462",
      handle: "a1641",
      status: "In Stock",
      priceEur: 59.99,
      originalPriceEur: null,
      typicalCapacityMah: 10000,
      estimatedEnergyWh: 37,
      maxOutputW: 20,
      sourceDescription: "2-in-1: The charger wirelessly charges your phone while the practical foldable stand props up your phone for easy viewing. Compact and Powerful: The 10,000mAh small-sized battery contains enough power to charge an iPhone 13 Pro 1.8 times*. Snap On, Power Up: Get a safe and secure wireless charge with the perfectly aligned strong magnets that snap onto your phone for a constant charge. High-Speed Charging: Use the 20W USB-C Power Delivery port and a USB-C charging cable to charge your iPhone 3x faster. What You Get: Anker 633 Magnetic Battery (MagGo), 2ft (0.6m) USB-C to USB-C charging cable, welcome guide, our worry-free 24-month warranty, and friendly customer service.",
      features: [
        "2-in-1",
        "Compact and Powerful",
        "Snap On, Power Up",
        "High-Speed Charging"
      ],
      allImages: [
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1641011-Anker_633_Magnetic_Battery_6.png?v=1672389703",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1641011_TD02_V1.jpg?v=1672389702",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1641011_TD03_V1.jpg?v=1672389702",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1641011_TD04_V1.jpg?v=1672389702",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1641011_TD05_V1.jpg?v=1672389702",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1641011_TD06_V1.jpg?v=1672389702",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1641011_TD07_V1.jpg?v=1672389702",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1641021_TD01_V1.jpg?v=1672389702",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1641021_TD02_V1.jpg?v=1672389702",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1641021_TD03_V1.jpg?v=1672389702",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1641021_TD04_V1.jpg?v=1672389702",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1641021_TD05_V1.jpg?v=1672389702",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1641021_TD06_V1.jpg?v=1672389702",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1641021_TD07_V1.jpg?v=1672389702",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1641031.png?v=1728467143",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1641031_TD02_V1.jpg?v=1672389702",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1641031_TD03_V1.jpg?v=1672389702",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1641031_TD04_V1.jpg?v=1672389702",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1641031_TD05_V1.jpg?v=1672389702",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1641031_TD06_V1.jpg?v=1672389702",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1641031_TD07_V1.jpg?v=1672389702"
      ],
      variants: [
        {
          id: "gid://shopify/ProductVariant/41510196740286",
          name: "Interstellar Gray",
          sku: "A1641011",
          barcode: "194644089368",
          price: 59.99,
          weight: 0.6118,
          availableForSale: true,
          quantityAvailable: 234,
          imageUrl: "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1641011-Anker_633_Magnetic_Battery_6.png?v=1672389703",
          discounts: []
        },
        {
          id: "gid://shopify/ProductVariant/41510196773054",
          name: "Dolomite White",
          sku: "A1641021",
          barcode: "194644089481",
          price: 59.99,
          weight: 0.6118,
          availableForSale: true,
          quantityAvailable: 10,
          imageUrl: "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1641021_TD01_V1.jpg?v=1672389702",
          discounts: []
        },
        {
          id: "gid://shopify/ProductVariant/41510196707518",
          name: "Misty Blue",
          sku: "A1641031",
          barcode: "194644089474",
          price: 59.99,
          weight: 0.6129,
          availableForSale: false,
          quantityAvailable: 0,
          imageUrl: "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1641031.png?v=1728467143",
          discounts: []
        }
      ],
      downloads: [
        {
          label: "Declaration of Conformity A1641 DOC 2024-09-27",
          url: "https://cdn.shopify.com/s/files/1/0491/8460/4324/files/Battery_Doc_-_A1641_d414243b-aa24-4692-9d49-4866b9c21ed6.pdf?v=1727170333"
        }
      ],
      faqs: [],
      dataNotes: [
        "Fetched from Anker EU collection and product pages on 2026-06-16.",
        "CapacityWh is estimated from advertised mAh at 3.7V unless Anker listed Wh in the product name.",
        "Variant weight is Shopify shipping weight converted from pounds to grams."
      ]
    },
  },
  {
    categorySlug: "power-banks",
    manufacturer: "Anker",
    model: "Anker 100W Charging Base for Anker Prime Power Bank",
    slug: "anker-100w-charging-base-for-anker-prime-power-bank",
    summary: "Go Wireless, Go Convenient: Experience hassle-free recharging with the charging base-simply place your power bank on the base for an instant boost, up to 100W. Please note that Anker 737 Power Bank (PowerCore 24K) doe...",
    summaryUk: "Go Wireless, Go Convenient: Experience hassle-free recharging with the charging base-simply place your power bank on the base for an instant boost, up to 100W. Please note that Anker 737 Power Bank (PowerCore 24K) doe...",
    imagePath: "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1902111_TD01_V1-removebg-preview_1534x.png?v=1691031755",
    priceCents: 8694,
    productCode: "A1902",
    nominalVoltageV: 5,
    capacityWh: 89,
    continuousPowerW: 100,
    peakPowerW: 100,
    chemistry: "Lithium-ion",
    weightGrams: 762,
    warrantyYears: 2,
    sourceLabel: "Anker EU product page (A1902)",
    sourceLabelUk: "Anker EU product page (A1902)",
    sourceUrl: "https://www.anker.com/eu-en/products/a1902-100w-power-bank-charging-station?variant=42948696375486&collections_power-banks&Sort_by=Recommended",
    specifications: {
      collectionListPosition: 8,
      collectionUrl: "https://www.anker.com/eu-en/collections/power-banks",
      shopifyProductId: "gid://shopify/Product/7711380406462",
      handle: "a1902-100w-power-bank-charging-station",
      status: "In Stock",
      priceEur: 74.99,
      originalPriceEur: null,
      typicalCapacityMah: 24000,
      estimatedEnergyWh: 89,
      maxOutputW: 100,
      sourceDescription: "Go Wireless, Go Convenient: Experience hassle-free recharging with the charging base-simply place your power bank on the base for an instant boost, up to 100W. Please note that Anker 737 Power Bank (PowerCore 24K) does not support wireless recharge. 4-in-1 Fast Charging: With a total output of 100W shared among 3 USB ports and 1 Pogo pin, the charging base is ideal for powering your essentials. Smaller with GaN: With GaN technology, get reliable, high-powered charging in a compact design-comparable in size to an original 96W single-port charger. Smart LED Indicator: Easily monitor the status of your Anker Prime Power Bank with the intuitive LED indicator, which flashes while wirelessly recharging and stays steady when fully charged. What You Get: Anker 100W Charging Base for Anker Prime Power Bank, power cord for charging base, welcome guide, our worry-free 24-month warranty, and friendly customer service.",
      features: [
        "Go Wireless, Go Convenient",
        "4-in-1 Fast Charging",
        "Smaller with GaN",
        "Smart LED Indicator"
      ],
      allImages: [
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1902111_TD01_V1-removebg-preview.png?v=1691031755",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1902111_TD02_V1.png?v=1691031755",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1902111_TD03_V1.png?v=1691031755",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1902111_TD04_V1.png?v=1691031755",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1902111_TD05_V1.png?v=1691031755",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1902111_TD06_V1.png?v=1691031755"
      ],
      variants: [
        {
          id: "gid://shopify/ProductVariant/42948696375486",
          name: "Default Title",
          sku: "A1902311",
          barcode: "194644150662",
          price: 74.99,
          weight: 1.6799,
          availableForSale: true,
          quantityAvailable: 1310,
          imageUrl: "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1902111_TD01_V1-removebg-preview.png?v=1691031755",
          discounts: []
        }
      ],
      downloads: [
        {
          label: "QSG QSG",
          url: "https://cdn.shopify.com/s/files/1/0491/8460/4324/files/A1902_Anker_100W_Charging_Base_QSG.pdf?v=1690525964"
        },
        {
          label: "Declaration of Conformity A1902 DOC 2023-03-28",
          url: "https://cdn.shopify.com/s/files/1/0491/8460/4324/files/Charger_Doc_-_A1902.pdf?v=1710490121"
        }
      ],
      faqs: [],
      dataNotes: [
        "Fetched from Anker EU collection and product pages on 2026-06-16.",
        "CapacityWh is estimated from advertised mAh at 3.7V unless Anker listed Wh in the product name.",
        "Variant weight is Shopify shipping weight converted from pounds to grams."
      ]
    },
  },
  {
    categorySlug: "power-banks",
    manufacturer: "Anker",
    model: "Anker Nano Power Bank (30W, Built-In USB-C Cable)",
    slug: "anker-nano-power-bank-30w-built-in-usb-c-cable",
    summary: "Built-In USB-C Cable: Use the integrated USB-C cable to charge your phones, tablets, and laptops, as well as recharge the power bank, meeting all your charging needs. 30W Bi-Directional Charging: Boost the power bank ...",
    summaryUk: "Built-In USB-C Cable: Use the integrated USB-C cable to charge your phones, tablets, and laptops, as well as recharge the power bank, meeting all your charging needs. 30W Bi-Directional Charging: Boost the power bank ...",
    imagePath: "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/image_4_b2d2c909-0ee3-4a81-94f9-8f3a8543c95f_1534x.png?v=1712055495",
    priceCents: 3710,
    productCode: "A1259",
    nominalVoltageV: 5,
    capacityWh: 37,
    continuousPowerW: 30,
    peakPowerW: 30,
    chemistry: "Lithium-ion",
    weightGrams: 269,
    warrantyYears: 2,
    sourceLabel: "Anker EU product page (A1259)",
    sourceLabelUk: "Anker EU product page (A1259)",
    sourceUrl: "https://www.anker.com/eu-en/products/a1259-built-in-cable-power-bank-10000mah?variant=43398799687870&collections_power-banks&Sort_by=Recommended",
    specifications: {
      collectionListPosition: 9,
      collectionUrl: "https://www.anker.com/eu-en/collections/power-banks",
      shopifyProductId: "gid://shopify/Product/7856425664702",
      handle: "a1259-built-in-cable-power-bank-10000mah",
      status: "In Stock",
      priceEur: 32,
      originalPriceEur: 49.99,
      typicalCapacityMah: 10000,
      estimatedEnergyWh: 37,
      maxOutputW: 30,
      sourceDescription: "Built-In USB-C Cable: Use the integrated USB-C cable to charge your phones, tablets, and laptops, as well as recharge the power bank, meeting all your charging needs. 30W Bi-Directional Charging: Boost the power bank to 50% in just 45 minutes or achieve a 50% charge for your iPhone 14 within 30 minutes through 30W two-way fast charging. 10,000mAh Worry-Free Power: Experience hassle-free power on the go with the built-in USB-C cable, providing seamless charging in a compact form factor measuring 4.09 x 2.06 x 1.02 inches. A Greener Approach: Through meticulous material selections and manufacturing practices, the exterior casing is made from 80% post-consumer recycled plastic (PCR) to reduce carbon emissions. What You Get: Anker Nano Power Bank (30W, Built-In USB-C Cable), welcome guide, our worry-free 24-month warranty, and friendly customer service.",
      features: [
        "Built-In USB-C Cable",
        "30W Bi-Directional Charging",
        "10,000mAh Worry-Free Power",
        "A Greener Approach"
      ],
      allImages: [
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/image_4_b2d2c909-0ee3-4a81-94f9-8f3a8543c95f.png?v=1712055495",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1259021_TD03_V1.jpg-1280x1280_f32f8b9d-4124-40a0-8813-88fdb4ca932e.jpg?v=1712055495",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1259021_TD04_V2.jpg-1280x1280_f50b71d9-6baf-443b-a2e2-1479b2cc3833.jpg?v=1712055495",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1259021_TD05_V1.jpg-1280x1280_a67693e3-c7f8-468a-b4f8-4d0523180ffe.jpg?v=1712055495",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/IceLakeBlue-02_845d99ab-05b9-4247-8ba7-b4e72703a228.jpg?v=1712055495",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/20231107-115731.png?v=1712055495",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1259021_TD02_V1.jpg-1280x1280_f5a7b7f3-3e47-4904-98b9-7307f94423e6.jpg?v=1712055495",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1259021_TD06_V1.jpg-1280x1280_3cb1c976-3497-4334-b0e0-c5822f5a1a92.jpg?v=1712055495",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1259011_TD05_V1-1280x1280_7cd03c41-3d63-4da9-8810-60baa8dd8426.jpg?v=1703061782",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/IceLakeBlue-05_9c435fd3-5969-4762-922b-162117ef2dc1.jpg?v=1703061782",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/IceLakeBlue-04_291095ac-a025-4a9c-82c3-b9ff74f8c64b.jpg?v=1703061782",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/IceLakeBlue-03_0f6e9d21-5866-47d5-a7dd-98a67e68f1e9.jpg?v=1703061782",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/IceLakeBlue-06_ec4f9427-8588-43b0-b2b5-a7021a1eecbc.jpg?v=1703061782",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1259011.png?v=1721190972",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1259011_TD02_V1-1280x1280_018e0006-4a63-4c67-832a-c718d34537f7.jpg?v=1721190987",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1259011_TD03_V1-1280x1280_daf18216-a2e1-41e8-9c29-acf6de5a3916.jpg?v=1721190987",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1259011_TD04_V1-1280x1280_595971bb-3ba2-4d74-ab57-bcfa7d18a5b7.jpg?v=1721190987",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1259011_TD05_V1-1280x1280_4d2ae477-a30f-48a0-bf01-97bcd2c6125e.jpg?v=1721190987",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1259011_TD06_V1-1280x1280_3d442eaf-67db-4ffa-be58-7d58be643dd1.jpg?v=1721190987",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/61YByFiiVzL-removebg-preview.png?v=1719824960",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/Purple-03.jpg?v=1721190987",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/Green-04.jpg?v=1721190987",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/Green-05.jpg?v=1721190987",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/Green-06.jpg?v=1721190987",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/Purple-01.jpg?v=1721190987",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/Purple-02.jpg?v=1721190987",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/Purple-05.jpg?v=1721190987",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/Purple-06.jpg?v=1721190987",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/Purple-04.jpg?v=1721190987"
      ],
      variants: [
        {
          id: "gid://shopify/ProductVariant/43398799687870",
          name: "Ice Lake Blue",
          sku: "A1259031",
          barcode: "194644148751",
          price: 49.99,
          weight: 0.593,
          availableForSale: true,
          quantityAvailable: 231,
          imageUrl: "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/image_4_b2d2c909-0ee3-4a81-94f9-8f3a8543c95f.png?v=1712055495",
          discounts: [
            {
              title: "WS24A1259PD26",
              starts_at: "2026-06-14T22:00:00.000Z",
              ends_at: "2026-06-30T21:59:59.000Z",
              variant_shopify_id: 43398799687870,
              value_type: "percentage",
              value: "-36.0",
              currency: "EUR",
              fixed_value: "17.99",
              value_style: "EUR36",
              variant_price4wscode: 32,
              discount_type: "WS24",
              amazon_deal: false,
              cdi_id: 156268,
              cdi_updated_at: "2026-06-15T03:09:02.335Z"
            }
          ]
        },
        {
          id: "gid://shopify/ProductVariant/43398799655102",
          name: "Shell White",
          sku: "A1259021",
          barcode: "194644148744",
          price: 49.99,
          weight: 0.593,
          availableForSale: true,
          quantityAvailable: 199,
          imageUrl: "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/20231107-115731.png?v=1712055495",
          discounts: [
            {
              title: "WS24A1259PD26",
              starts_at: "2026-06-14T22:00:00.000Z",
              ends_at: "2026-06-30T21:59:59.000Z",
              variant_shopify_id: 43398799655102,
              value_type: "percentage",
              value: "-36.0",
              currency: "EUR",
              fixed_value: "17.99",
              value_style: "EUR36",
              variant_price4wscode: 32,
              discount_type: "WS24",
              amazon_deal: false,
              cdi_id: 156270,
              cdi_updated_at: "2026-06-15T03:09:02.390Z"
            }
          ]
        },
        {
          id: "gid://shopify/ProductVariant/43398799720638",
          name: "Black Stone",
          sku: "A1259011",
          barcode: "194644148652",
          price: 49.99,
          weight: 0.593,
          availableForSale: true,
          quantityAvailable: 4702,
          imageUrl: "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1259011.png?v=1721190972",
          discounts: [
            {
              title: "WS24A1259PD26",
              starts_at: "2026-06-14T22:00:00.000Z",
              ends_at: "2026-06-30T21:59:59.000Z",
              variant_shopify_id: 43398799720638,
              value_type: "percentage",
              value: "-36.0",
              currency: "EUR",
              fixed_value: "17.99",
              value_style: "EUR36",
              variant_price4wscode: 32,
              discount_type: "WS24",
              amazon_deal: false,
              cdi_id: 156271,
              cdi_updated_at: "2026-06-15T03:09:02.414Z"
            }
          ]
        },
        {
          id: "gid://shopify/ProductVariant/43398810173630",
          name: "Green",
          sku: "A1259061",
          barcode: "194644148768",
          price: 49.99,
          weight: 0.593,
          availableForSale: false,
          quantityAvailable: 0,
          imageUrl: "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/61YByFiiVzL-removebg-preview.png?v=1719824960",
          discounts: [
            {
              title: "WS24A1259PD26",
              starts_at: "2026-06-14T22:00:00.000Z",
              ends_at: "2026-06-30T21:59:59.000Z",
              variant_shopify_id: 43398810173630,
              value_type: "percentage",
              value: "-36.0",
              currency: "EUR",
              fixed_value: "17.99",
              value_style: "EUR36",
              variant_price4wscode: 32,
              discount_type: "WS24",
              amazon_deal: false,
              cdi_id: 156272,
              cdi_updated_at: "2026-06-15T03:09:02.441Z"
            }
          ]
        },
        {
          id: "gid://shopify/ProductVariant/43764059078846",
          name: "Purple",
          sku: "A12590V1",
          barcode: "194644148713",
          price: 49.99,
          weight: 0.593,
          availableForSale: true,
          quantityAvailable: 122,
          imageUrl: "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/Purple-01.jpg?v=1721190987",
          discounts: [
            {
              title: "WS24A1259PD26",
              starts_at: "2026-06-14T22:00:00.000Z",
              ends_at: "2026-06-30T21:59:59.000Z",
              variant_shopify_id: 43764059078846,
              value_type: "percentage",
              value: "-36.0",
              currency: "EUR",
              fixed_value: "17.99",
              value_style: "EUR36",
              variant_price4wscode: 32,
              discount_type: "WS24",
              amazon_deal: false,
              cdi_id: 156269,
              cdi_updated_at: "2026-06-15T03:09:02.364Z"
            }
          ]
        }
      ],
      downloads: [
        {
          label: "Manual A2637 Manual 2021-08-26",
          url: "https://dix7fd4yse9rd.cloudfront.net/s/Anker/product/6944739852452/files/1630893578801_a2637ukmanual510050028942021070550x50mmv01.pdf"
        },
        {
          label: "Declaration of Conformity A1259 DOC 2024-09-27",
          url: "https://cdn.shopify.com/s/files/1/0491/8460/4324/files/Battery_Doc_-_A1259_385b457b-cc29-4856-8961-b4fed919710c.pdf?v=1727170334"
        }
      ],
      faqs: [
        {
          question: "Why is Anker 511 Charger (Nano Pro) faster and smaller?",
          answer: "Anker's exclusive highly-integrated technology uses a stacked design with custom magnetic components to reduce size, boost efficiency, and improve heat dissipation. This allows Anker 511 Charger (Nano Pro) to support an 20W max output, while being just as small as a 5W iPhone charger."
        },
        {
          question: "Is fast charging safe with my phone battery?",
          answer: "Yes, almost all android phones and iPhones released in recent years support fast-charging technology, but many in-box chargers don't deliver enough power to enable fast charging."
        },
        {
          question: "What is ActiveShieldTM?",
          answer: "Anker 511 Charger (Nano Pro) is equipped with our all-new ActiveShieldTMTM safety system to offer enhanced protection. It features a Dynamic Temperature Sensor which actively monitors temperature, and a Power Tuner Chip which adjusts power output to safeguard your connected device."
        },
        {
          question: "How can I get fast charging for my device?",
          answer: "If your device has a USB-C port, you'll need a USB-C to USB-C cable. If your device has a Lightning port, you'll need a USB-C to Lightning cable. Then just connect to Anker Nano to start fast charging."
        },
        {
          question: "Does it work with tablets, portable chargers, earphones, and other gadgets?",
          answer: "Yes, Anker 511 Charger (Nano Pro) charges not only phones, but also handheld consoles, tablets, earphones, portable chargers, and more."
        },
        {
          question: "Which devices are compatible with this charger?",
          answer: "Here are some of the most popular compatible devices: Phone 13 / 13 Mini / 13 Pro / 13 Pro Max / 12 / 12 mini / 12 Pro / 12 Pro Max / iPhone SE (2nd generation) / 11 / 11 Pro / 11 Pro Max / XS / XS Max / XR / X / 8 Plus / 8; iPad 10.2-inch; iPad mini 8.3-inch; iPad Pro 12.9-inch 4th / 3rd / 2nd / 1st generation; iPad Pro 11-inch 2nd / 1st generation; iPad Pro 10.5-inch; iPad Air 4th / 3rd generation; iPad 8th / 7th generation; iPad mini 5th generation, AirPods, Apple Watch, Galaxy Z Flip; S10+ / S10 / S10e, Pixel 3 / 3XL / 4 / 4XL / 5, and more."
        },
        {
          question: "Is this charger foldable?",
          answer: "No, this charger isn't foldable."
        },
        {
          question: "What is PowerIQ 3.0?",
          answer: "PowerIQ is Anker's proprietary technology that intelligently identifies your device to deliver the fastest possible charge, and offers unprecedented compatibility with most high-speed charging protocols."
        }
      ],
      dataNotes: [
        "Fetched from Anker EU collection and product pages on 2026-06-16.",
        "CapacityWh is estimated from advertised mAh at 3.7V unless Anker listed Wh in the product name.",
        "Variant weight is Shopify shipping weight converted from pounds to grams."
      ]
    },
  },
  {
    categorySlug: "power-banks",
    manufacturer: "Anker",
    model: "Anker 621 Magnetic Battery (MagGo)",
    slug: "anker-621-magnetic-battery-maggo",
    summary: "Smaller Than Ever: Anker's new MiniCell technology delivers identical charging performance with fewer components. This means it's smaller and lighter than ever before. Pocket-Sized Power: Slim enough to snap to your p...",
    summaryUk: "Smaller Than Ever: Anker's new MiniCell technology delivers identical charging performance with fewer components. This means it's smaller and lighter than ever before. Pocket-Sized Power: Slim enough to snap to your p...",
    imagePath: "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1610022_1534x.png?v=1758188737",
    priceCents: 4636,
    productCode: "A1610",
    nominalVoltageV: null,
    capacityWh: null,
    continuousPowerW: null,
    peakPowerW: null,
    chemistry: null,
    weightGrams: 182,
    warrantyYears: 2,
    sourceLabel: "Anker EU product page (A1610)",
    sourceLabelUk: "Anker EU product page (A1610)",
    sourceUrl: "https://www.anker.com/eu-en/products/a1610?variant=42364656844990&collections_power-banks&Sort_by=Recommended",
    specifications: {
      collectionListPosition: 10,
      collectionUrl: "https://www.anker.com/eu-en/collections/power-banks",
      shopifyProductId: "gid://shopify/Product/7489710260414",
      handle: "a1610",
      status: "In Stock",
      priceEur: 39.99,
      originalPriceEur: null,
      typicalCapacityMah: null,
      estimatedEnergyWh: null,
      maxOutputW: null,
      sourceDescription: "Smaller Than Ever: Anker's new MiniCell technology delivers identical charging performance with fewer components. This means it's smaller and lighter than ever before. Pocket-Sized Power: Slim enough to snap to your phone and slip into your pack, purse, or pocket. Strong Attachment: Equipped with ultra-strong magnets that firmly attach to the back of the iPhone 13 or 12 so you can single-handedly take selfies, make calls, and more. Charge in a Snap: Align your iPhone and battery with a snap. Say goodbye to disconnection issues caused by wireless charging misalignment. What You Get: Anker 621 Magnetic Battery (MagGo), 23.6 in (60 cm) USB-C to USB-C cable, welcome guide, worry-free 24-month warranty, and friendly customer service.",
      features: [
        "Smaller Than Ever",
        "Pocket-Sized Power",
        "Strong Attachment",
        "Charge in a Snap"
      ],
      allImages: [
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1610022.png?v=1758188737",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1610022_TD02_V1.jpg?v=1758188737",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1610022_TD03_V1.jpg?v=1758188737",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1610022_TD04_V1.jpg?v=1758188737",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1610022_TD05_V1.jpg?v=1758188737",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1610022_TD06_V1.jpg?v=1758188737",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1610012_TD01_V1-removebg-preview.png?v=1758188737",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1610012_TD02_V1.jpg?v=1758188737",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1610012_TD03_V1.jpg?v=1758188737",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1610012_TD04_V1.jpg?v=1758188737",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1610012_TD05_V1.jpg?v=1758188737",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1610012_TD06_V1.jpg?v=1758188737"
      ],
      variants: [
        {
          id: "gid://shopify/ProductVariant/42364656844990",
          name: "Dolomite White",
          sku: "A1610022",
          barcode: "194644078591",
          price: 39.99,
          weight: 0.4012,
          availableForSale: true,
          quantityAvailable: 205,
          imageUrl: "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1610022.png?v=1758188737",
          discounts: []
        },
        {
          id: "gid://shopify/ProductVariant/42364656779454",
          name: "Interstellar Gray",
          sku: "A1610012",
          barcode: "194644077624",
          price: 39.99,
          weight: 0.4012,
          availableForSale: true,
          quantityAvailable: 345,
          imageUrl: "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1610012_TD01_V1-removebg-preview.png?v=1758188737",
          discounts: []
        }
      ],
      downloads: [
        {
          label: "Declaration of Conformity A1610 DOC 2024-09-27",
          url: "https://cdn.shopify.com/s/files/1/0491/8460/4324/files/Battery_Doc_-_A1610_470bc23c-9e8f-4f99-b161-44acfefff10b.pdf?v=1727170335"
        }
      ],
      faqs: [],
      dataNotes: [
        "Fetched from Anker EU collection and product pages on 2026-06-16.",
        "CapacityWh is estimated from advertised mAh at 3.7V unless Anker listed Wh in the product name.",
        "Variant weight is Shopify shipping weight converted from pounds to grams."
      ]
    },
  },
  {
    categorySlug: "power-banks",
    manufacturer: "Anker",
    model: "Anker Nano Power Bank (12W, Built-In Lightning Connector)",
    slug: "anker-nano-power-bank-12w-built-in-lightning-connector",
    summary: "Pocket-Sized Power: Equipped with a built-in Lightning connector, making it easy to charge your Apple devices without having to carry an extra cable. 12W Fast Charging: Power your device quickly and efficiently with t...",
    summaryUk: "Pocket-Sized Power: Equipped with a built-in Lightning connector, making it easy to charge your Apple devices without having to carry an extra cable. 12W Fast Charging: Power your device quickly and efficiently with t...",
    imagePath: "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1645011_TD01_V1_5bccb261-cab2-4973-a023-47eca7d39f84_1534x.png?v=1755768223",
    priceCents: 4289,
    productCode: "A1645",
    nominalVoltageV: 5,
    capacityWh: 19,
    continuousPowerW: 12,
    peakPowerW: 12,
    chemistry: "Lithium-ion",
    weightGrams: 153,
    warrantyYears: 2,
    sourceLabel: "Anker EU product page (A1645)",
    sourceLabelUk: "Anker EU product page (A1645)",
    sourceUrl: "https://www.anker.com/eu-en/products/a1645?variant=42794785538238&collections_power-banks&Sort_by=Recommended",
    specifications: {
      collectionListPosition: 11,
      collectionUrl: "https://www.anker.com/eu-en/collections/power-banks",
      shopifyProductId: "gid://shopify/Product/7653824004286",
      handle: "a1645",
      status: "In Stock",
      priceEur: 36.99,
      originalPriceEur: null,
      typicalCapacityMah: 5000,
      estimatedEnergyWh: 19,
      maxOutputW: 12,
      sourceDescription: "Pocket-Sized Power: Equipped with a built-in Lightning connector, making it easy to charge your Apple devices without having to carry an extra cable. 12W Fast Charging: Power your device quickly and efficiently with the 12W output, so you'll be up and running in no time. MFi Certified: The power bank is made specifically for Apple devices like iPhones, iPads, and iPods-trust it to work safely and effectively with your devices. The Ultimate Power Boost: Get up to 20 hours of additional video playtime for your iPhone 14 Pro Max with a 5,000mAh capacity-enough to keep you entertained for an entire journey. What You Get: Anker 621 Power Bank (Built-In Lightning Connector, 12W), a 1.9 ft (60cm) USB-C to USB-C cable, welcome guide, worry-free 18-month warranty, and our friendly customer service.",
      features: [
        "Pocket-Sized Power: Equipped with a built-in Lightning connector, making it easy to charge your Apple devices without having to carry an extra cable.",
        "12W Fast Charging: Power your device quickly and efficiently with the 12W output, so you'll be up and running in no time.",
        "MFi Certified: The power bank is made specifically for Apple devices like iPhones, iPads, and iPods-trust it to work safely and effectively with your devices.",
        "The Ultimate Power Boost: Get up to 20 hours of additional video playtime for your iPhone 14 Pro Max with a 5,000mAh capacity-enough to keep you entertained for an entire journey.",
        "What You Get: Anker 621 Power Bank (Built-In Lightning Connector, 12W), a 1.9 ft (60cm) USB-C to USB-C cable, welcome guide, worry-free 18-month warranty, and our friendly customer service."
      ],
      allImages: [
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1645011_TD01_V1_5bccb261-cab2-4973-a023-47eca7d39f84.png?v=1755768223",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/Black-03_6bcc473a-460e-48e8-a7b1-edf86c4b05b9.jpg?v=1755768223",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1645022_TD01_V1_f3964723-f272-4cbf-9245-c5e9d9926aaa.png?v=1755768223",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/Black-02.jpg?v=1755768223",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1645021_TD02_V3.jpg?v=1755768223",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1645011_TD01_V1-removebg-preview_1.png?v=1686118936"
      ],
      variants: [
        {
          id: "gid://shopify/ProductVariant/42794785538238",
          name: "Black",
          sku: "A1645012",
          barcode: "194644124922",
          price: 36.99,
          weight: 0.3373,
          availableForSale: true,
          quantityAvailable: 45,
          imageUrl: "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1645011_TD01_V1_5bccb261-cab2-4973-a023-47eca7d39f84.png?v=1755768223",
          discounts: []
        },
        {
          id: "gid://shopify/ProductVariant/55254192161144",
          name: "White",
          sku: "A1645022",
          barcode: "194644124908",
          price: 36.99,
          weight: 0.3395,
          availableForSale: true,
          quantityAvailable: 203,
          imageUrl: "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1645022_TD01_V1_f3964723-f272-4cbf-9245-c5e9d9926aaa.png?v=1755768223",
          discounts: []
        }
      ],
      downloads: [
        {
          label: "Declaration of Conformity A1645 DOC 2024-09-27",
          url: "https://cdn.shopify.com/s/files/1/0491/8460/4324/files/Battery_Doc_-_A1645_0a08de11-c34e-40f3-aa64-935a7aa010b7.pdf?v=1727170334"
        }
      ],
      faqs: [],
      dataNotes: [
        "Fetched from Anker EU collection and product pages on 2026-06-16.",
        "CapacityWh is estimated from advertised mAh at 3.7V unless Anker listed Wh in the product name.",
        "Variant weight is Shopify shipping weight converted from pounds to grams."
      ]
    },
  },
  {
    categorySlug: "power-banks",
    manufacturer: "Anker",
    model: "Anker Prime 27,650mAh Power Bank (250W)",
    slug: "anker-prime-27-650mah-power-bank-250w",
    summary: "250W Multi-Device Fast Charging: Powered by the latest PD 3.1 technology, the power bank comes with 2 USB-C ports and 1 USB-A port to deliver up to 250W of power. Boost your MacBook Pro 16\" (M2 Pro) to 50% in just 28 ...",
    summaryUk: "250W Multi-Device Fast Charging: Powered by the latest PD 3.1 technology, the power bank comes with 2 USB-C ports and 1 USB-A port to deliver up to 250W of power. Boost your MacBook Pro 16\" (M2 Pro) to 50% in just 28 ...",
    imagePath: "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1340011_TD01_V1-removebg-preview_1534x.png?v=1691032243",
    priceCents: 17999,
    productCode: "A1340",
    nominalVoltageV: 5,
    capacityWh: 102,
    continuousPowerW: 250,
    peakPowerW: 250,
    chemistry: "Lithium-ion",
    weightGrams: 1081,
    warrantyYears: 2,
    sourceLabel: "Anker EU product page (A1340)",
    sourceLabelUk: "Anker EU product page (A1340)",
    sourceUrl: "https://www.anker.com/eu-en/products/a1340-250w-power-bank?variant=43763112476862&collections_power-banks&Sort_by=Recommended",
    specifications: {
      collectionListPosition: 12,
      collectionUrl: "https://www.anker.com/eu-en/collections/power-banks",
      shopifyProductId: "gid://shopify/Product/7711388860606",
      handle: "a1340-250w-power-bank",
      status: "Sold Out",
      priceEur: null,
      originalPriceEur: null,
      typicalCapacityMah: 27650,
      estimatedEnergyWh: 102,
      maxOutputW: 250,
      sourceDescription: "250W Multi-Device Fast Charging: Powered by the latest PD 3.1 technology, the power bank comes with 2 USB-C ports and 1 USB-A port to deliver up to 250W of power. Boost your MacBook Pro 16\" (M2 Pro) to 50% in just 28 minutes. Intuitive Smart App: Use the Anker app to quickly locate your power bank with sound alerts, access real-time stats, and optimize device battery life with smart charging. Small Size, Huge Power: The power bank is the size of a soda can with a capacity of 27,650mAh and can charge a 13-inch MacBook Air (M2) 1.28 times or an iPhone 14 approximately 4.67 times. Please know that this power bank is 99.54Wh, which meets the requirements of the TSA(<100Wh) to be taken on airplanes as carry-on baggage. 170W Fast USB-C Recharge: Recharge your power bank at lightning speed with the convenience of dual USB-C ports, allowing you to fully replenish it in just 37 minutes. What You Get: Anker Prime 27,650mAh Power Bank (250W), 2 ft / 0.6 m 140W USB-C to USB-C charging cable, travel pouch, quick start guide, our worry-free 24-month warranty, and friendly customer service.",
      features: [
        "250W Multi-Device Fast Charging",
        "Intuitive Smart App",
        "Small Size, Huge Power",
        "170W Fast USB-C Recharge"
      ],
      allImages: [
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1340011_TD01_V1-removebg-preview.png?v=1691032243",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1340011_TD02_V1.jpg?v=1691032243",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1340011_TD03_V1.jpg?v=1691032243",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1340011_TD04_V1.jpg?v=1691032243",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1340011_TD05_V1.jpg?v=1691032243",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1340011_TD06_V1.jpg?v=1691032243",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A13400B1_TD01_V2.png?v=1728527411",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/71ZfCc3ejRL_2.jpg?v=1711700835",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/713YBqjTEfL_2.jpg?v=1711700835",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/71WmPl9gJLL_2.jpg?v=1711700835",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/71pS0WHwYbL_2.jpg?v=1711700835",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/71oiexI7zPL_2.jpg?v=1711700826"
      ],
      variants: [
        {
          id: "gid://shopify/ProductVariant/43763112476862",
          name: "Black",
          sku: "A1340011",
          barcode: "194644130886",
          price: 149.99,
          weight: 2.3832,
          availableForSale: false,
          quantityAvailable: 0,
          imageUrl: "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1340011_TD01_V1-removebg-preview.png?v=1691032243",
          discounts: []
        },
        {
          id: "gid://shopify/ProductVariant/43763112509630",
          name: "Champagne",
          sku: "A13400B1",
          barcode: "194644147570",
          price: 149.99,
          weight: 2.3832,
          availableForSale: false,
          quantityAvailable: 0,
          imageUrl: "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A13400B1_TD01_V2.png?v=1728527411",
          discounts: []
        }
      ],
      downloads: [
        {
          label: "QSG QSG 2023-07-25",
          url: "https://cdn.shopify.com/s/files/1/0508/1815/4652/files/A1340_Anker_Prime_27650mAh_Power_Bank_250W_QSG.pdf?v=1690286444"
        },
        {
          label: "Declaration of Conformity A1340 DOC 2024-09-27",
          url: "https://cdn.shopify.com/s/files/1/0491/8460/4324/files/Battery_Doc_-_A1340_9887868c-14ca-4a8b-b6f5-b38759d84e0b.pdf?v=1727170335"
        }
      ],
      faqs: [],
      dataNotes: [
        "Fetched from Anker EU collection and product pages on 2026-06-16.",
        "CapacityWh is estimated from advertised mAh at 3.7V unless Anker listed Wh in the product name.",
        "Variant weight is Shopify shipping weight converted from pounds to grams."
      ]
    },
  },
  {
    categorySlug: "power-banks",
    manufacturer: "Anker",
    model: "Anker 525 Power Bank (PowerCore 20K)",
    slug: "anker-525-power-bank-powercore-20k",
    summary: "The Anker Advantage: Join the 55 million+ powered by our leading technology. Charge Fast Anywhere: The 20W USB-C port has enough power to charge an iPhone 12 to 50% in just 30 minutes. Also equipped with an 18W USB po...",
    summaryUk: "The Anker Advantage: Join the 55 million+ powered by our leading technology. Charge Fast Anywhere: The 20W USB-C port has enough power to charge an iPhone 12 to 50% in just 30 minutes. Also equipped with an 18W USB po...",
    imagePath: "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1287011_TD01_V1-removebg-preview_1534x.png?v=1683701020",
    priceCents: 5999,
    productCode: "A1287",
    nominalVoltageV: 5,
    capacityWh: 74,
    continuousPowerW: 20,
    peakPowerW: 20,
    chemistry: "Lithium-ion",
    weightGrams: 401,
    warrantyYears: 2,
    sourceLabel: "Anker EU product page (A1287)",
    sourceLabelUk: "Anker EU product page (A1287)",
    sourceUrl: "https://www.anker.com/eu-en/products/a1287?variant=41510197362878&collections_power-banks&Sort_by=Recommended",
    specifications: {
      collectionListPosition: 13,
      collectionUrl: "https://www.anker.com/eu-en/collections/power-banks",
      shopifyProductId: "gid://shopify/Product/7251920355518",
      handle: "a1287",
      status: "Sold Out",
      priceEur: null,
      originalPriceEur: null,
      typicalCapacityMah: 20000,
      estimatedEnergyWh: 74,
      maxOutputW: 20,
      sourceDescription: "The Anker Advantage: Join the 55 million+ powered by our leading technology. Charge Fast Anywhere: The 20W USB-C port has enough power to charge an iPhone 12 to 50% in just 30 minutes. Also equipped with an 18W USB port if you need to charge a second device. Ultra-High Cell Capacity: The massive 20,000mAh cell capacity provides 5 charges for iPhone 12, more than 4 full charges for Samsung Galaxy S10, and over 2 and a half charges for iPad mini 5. Wide Compatibility: Charge virtually any mobile device including phones, tablets, and more. What You Get: Anker 525 Power Bank (PowerCore 20K) / PowerCore Essential 20000 PD, USB-A to USB-C cable, USB-C to USB-C cable, travel pouch, welcome guide, and our worry-free 18-month warranty.",
      features: [
        "The Anker Advantage",
        "Charge Fast Anywhere",
        "Ultra-High Cell Capacity",
        "Wide Compatibility"
      ],
      allImages: [
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1287011_TD01_V1-removebg-preview.png?v=1683701020",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1287011_TD02_V1.jpg?v=1683701020",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1287011_TD03_V1.jpg?v=1683701020",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1287011_TD04_V1.jpg?v=1683701020",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1287011_TD05_V2.jpg?v=1683701020",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1281011_TD06_V1.jpg?v=1683701020",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1287011_TD07_V1.jpg?v=1683701020"
      ],
      variants: [
        {
          id: "gid://shopify/ProductVariant/41510197362878",
          name: "Black",
          sku: "A1287014",
          barcode: "194644063139",
          price: 54.99,
          weight: 0.8841,
          availableForSale: false,
          quantityAvailable: 0,
          imageUrl: "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1287011_TD01_V1-removebg-preview.png?v=1683701020",
          discounts: [
            {
              title: "WS24Q1P50N2V",
              starts_at: "2024-08-30T08:29:10.000Z",
              variant_shopify_id: 41510197362878,
              value_type: "percentage",
              value: "-20.0",
              currency: "EUR",
              fixed_value: "11.0",
              value_style: "EUR20",
              variant_price4wscode: 44,
              discount_type: "WS24",
              amazon_deal: false,
              cdi_id: 23118,
              cdi_updated_at: "2025-01-20T05:03:18.492Z"
            }
          ]
        }
      ],
      downloads: [
        {
          label: "Declaration of Conformity A1287 DOC 2024-09-27",
          url: "https://cdn.shopify.com/s/files/1/0491/8460/4324/files/Battery_Doc_-_A1287_baace2c2-1f7c-47ab-bb86-fabb29c6a42e.pdf?v=1727170334"
        }
      ],
      faqs: [],
      dataNotes: [
        "Fetched from Anker EU collection and product pages on 2026-06-16.",
        "CapacityWh is estimated from advertised mAh at 3.7V unless Anker listed Wh in the product name.",
        "Variant weight is Shopify shipping weight converted from pounds to grams."
      ]
    },
  },
  {
    categorySlug: "power-banks",
    manufacturer: "Anker",
    model: "Anker MagGo Power Bank (6.6K)",
    slug: "anker-maggo-power-bank-6-6k",
    summary: "Qi2 Certified Charging: Embrace the convenience of 15W wireless charging that comes with the assurance of Qi2 certification for fast, secure, and efficient power boosts. Double Up on Speed: Enjoy 15W ultra-fast wirele...",
    summaryUk: "Qi2 Certified Charging: Embrace the convenience of 15W wireless charging that comes with the assurance of Qi2 certification for fast, secure, and efficient power boosts. Double Up on Speed: Enjoy 15W ultra-fast wirele...",
    imagePath: "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1643011_1534x.png?v=1728467291",
    priceCents: 6999,
    productCode: "A1643",
    nominalVoltageV: 5,
    capacityWh: 24,
    continuousPowerW: 15,
    peakPowerW: 15,
    chemistry: "Lithium-ion",
    weightGrams: 455,
    warrantyYears: 2,
    sourceLabel: "Anker EU product page (A1643)",
    sourceLabelUk: "Anker EU product page (A1643)",
    sourceUrl: "https://www.anker.com/eu-en/products/a1643-maggo-6600mah-qi2-power-bank-magsafe-compatible?variant=43596564922558&collections_power-banks&Sort_by=Recommended",
    specifications: {
      collectionListPosition: 14,
      collectionUrl: "https://www.anker.com/eu-en/collections/power-banks",
      shopifyProductId: "gid://shopify/Product/7916799262910",
      handle: "a1643-maggo-6600mah-qi2-power-bank-magsafe-compatible",
      status: "Sold Out",
      priceEur: null,
      originalPriceEur: null,
      typicalCapacityMah: 6600,
      estimatedEnergyWh: 24,
      maxOutputW: 15,
      sourceDescription: "Qi2 Certified Charging: Embrace the convenience of 15W wireless charging that comes with the assurance of Qi2 certification for fast, secure, and efficient power boosts. Double Up on Speed: Enjoy 15W ultra-fast wireless charging and power up your devices 2X faster*. Get your iPhone 15 Pro from 0 to 50% in just 45 minutes. Your Ideal Angle, Every Time: Adjust the angle anywhere from 30 degrees  to 65 degrees  to find your optimal viewing position, making video calls and content streaming more comfortable and enjoyable. Seamless Power, All Day: A huge 6,600mAh capacity ensures that you can focus on the moment, not the battery percentage. What You Get: Anker MagGo Power Bank (6.6K), 2 ft (0.6 m) USB-C to USB-C cable, welcome guide, 24-month warranty, and our friendly customer service.",
      features: [
        "Qi2 Certified Charging",
        "Double Up on Speed",
        "Your Ideal Angle, Every Time",
        "Seamless Power, All Day"
      ],
      allImages: [
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/20240118-175419_4bb6a98a-cd05-49fc-8c42-f30e90f2d6e5.png?v=1709091992",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1643021_TD02_V1_1.jpg?v=1709091993",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1643021_TD06_V1_1.jpg?v=1709091991",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1643021_TD07_V1_1.jpg?v=1709091992",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1643021_TD08_V1_1.jpg?v=1709091994",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1643021_TD05_V1_1.jpg?v=1709091991",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1643021_TD04_V1_1.jpg?v=1709091993",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1643021_TD03_V1_1.jpg?v=1709091992",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1643021_TD09_V1_1.jpg?v=1709091990",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1643011.png?v=1728467291",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1643011_TD02_V1_1.jpg?v=1716434957",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1643011_TD07_V1_1.jpg?v=1716434957",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1643011_TD03_V1_1.jpg?v=1716434957",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1643011_TD09_V1_1.jpg?v=1716434957",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1643011_TD04_V1_1.jpg?v=1716434957",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1643011_TD08_V1_1.jpg?v=1716434957",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1643011_TD06_V1_1.jpg?v=1716434957",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1643011_TD05_V1_1.jpg?v=1716434957"
      ],
      variants: [
        {
          id: "gid://shopify/ProductVariant/43596564922558",
          name: "Black Stone",
          sku: "A1643011",
          barcode: "194644148621",
          price: 69.99,
          weight: 1.0031,
          availableForSale: false,
          quantityAvailable: 0,
          imageUrl: "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/A1643011.png?v=1728467291",
          discounts: []
        }
      ],
      downloads: [
        {
          label: "Declaration of Conformity A1643 DOC 2023-03-28",
          url: "https://cdn.shopify.com/s/files/1/0491/8460/4324/files/A1643.pdf?v=1710476559"
        }
      ],
      faqs: [
        {
          question: "Q1: Is the product safe to use when it gets warm/hot?",
          answer: "It's normal for wireless charging to warm up slightly, especially during intensive use such as long gaming or streaming sessions. This product uses metal materials to improve heat dissipation for faster charging, which may make it feel warmer to the touch. However, it complies with international safety standards, including EN 62368-1 and IEC 62368-1, ensuring safe usage."
        },
        {
          question: "Q2: Can a phone case affect wireless charging?",
          answer: "For the best wireless charging experience, we recommend using Apple's official magnetic phone cases. You should avoid cases thicker than 2.5 mm and non-magnetic cases, as they may affect charging efficiency."
        }
      ],
      dataNotes: [
        "Fetched from Anker EU collection and product pages on 2026-06-16.",
        "CapacityWh is estimated from advertised mAh at 3.7V unless Anker listed Wh in the product name.",
        "Variant weight is Shopify shipping weight converted from pounds to grams."
      ]
    },
  },
  {
    categorySlug: "power-banks",
    manufacturer: "Anker",
    model: "Anker Prime 12,000mAh Power Bank (130W)",
    slug: "anker-prime-12-000mah-power-bank-130w",
    summary: "130W High-Speed Charging: Enjoy the convenience of two-way fast charging with a total output of up to 130W, while a single USB-C port supports a maximum output of 65W for efficient charging. Pocket-Sized Power: Take r...",
    summaryUk: "130W High-Speed Charging: Enjoy the convenience of two-way fast charging with a total output of up to 130W, while a single USB-C port supports a maximum output of 65W for efficient charging. Pocket-Sized Power: Take r...",
    imagePath: "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1335011_TD01_V1-removebg-preview_1534x.png?v=1691031545",
    priceCents: 8999,
    productCode: "A1335",
    nominalVoltageV: 5,
    capacityWh: 44,
    continuousPowerW: 130,
    peakPowerW: 130,
    chemistry: "Lithium-ion",
    weightGrams: 641,
    warrantyYears: 2,
    sourceLabel: "Anker EU product page (A1335)",
    sourceLabelUk: "Anker EU product page (A1335)",
    sourceUrl: "https://www.anker.com/eu-en/products/a1335-12000mah-power-bank?variant=42948695556286&collections_power-banks&Sort_by=Recommended",
    specifications: {
      collectionListPosition: 15,
      collectionUrl: "https://www.anker.com/eu-en/collections/power-banks",
      shopifyProductId: "gid://shopify/Product/7711378899134",
      handle: "a1335-12000mah-power-bank",
      status: "Coming Soon",
      priceEur: null,
      originalPriceEur: null,
      typicalCapacityMah: 12000,
      estimatedEnergyWh: 44,
      maxOutputW: 130,
      sourceDescription: "130W High-Speed Charging: Enjoy the convenience of two-way fast charging with a total output of up to 130W, while a single USB-C port supports a maximum output of 65W for efficient charging. Pocket-Sized Power: Take reliable power on the go with the power bank's compact and travel-friendly design, measuring just 5.29 x 2.17 x 1.36 inches in size. Smart Monitoring: Stay updated with the smart digital display that provides real-time information on remaining battery capacity, power input, and power output, giving you complete control and visibility over the power bank. High-Speed Recharge: The 65W rapid recharge via the USB-C port enables the power bank to be fully recharged in just 45 minutes. What You Get: Anker Prime 12,000mAh Power Bank (130W), 1.96 ft (0.6 m) 60W USB-C to USB-C charging cable, travel pouch, welcome guide, our worry-free 24-month warranty, and friendly customer service.",
      features: [],
      allImages: [
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1335011_TD01_V1-removebg-preview.png?v=1691031545",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1335011_TD02_V1.jpg?v=1691031545",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1335011_TD03_V1.jpg?v=1691031545",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1335011_TD04_V1.jpg?v=1691031545",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1335011_TD05_V1.jpg?v=1691031545",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1335011_TD06_V1.jpg?v=1691031545"
      ],
      variants: [
        {
          id: "gid://shopify/ProductVariant/42948695556286",
          name: "Default Title",
          sku: "A1335011",
          barcode: "194644130916",
          price: 69.99,
          weight: 1.4132,
          availableForSale: false,
          quantityAvailable: 0,
          imageUrl: "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1335011_TD01_V1-removebg-preview.png?v=1691031545",
          discounts: []
        }
      ],
      downloads: [
        {
          label: "QSG QSG 2023-07-25",
          url: "https://cdn.shopify.com/s/files/1/0508/1815/4652/files/A1335_Anker_Prime_12000mAh_Power_Bank_130W_QSG.pdf?v=1690286446"
        },
        {
          label: "Declaration of Conformity A1335 DOC 2024-09-27",
          url: "https://cdn.shopify.com/s/files/1/0491/8460/4324/files/Battery_Doc_-_A1335_0248ddb7-3508-432f-ad06-01d0f72b6287.pdf?v=1727170334"
        }
      ],
      faqs: [],
      dataNotes: [
        "Fetched from Anker EU collection and product pages on 2026-06-16.",
        "CapacityWh is estimated from advertised mAh at 3.7V unless Anker listed Wh in the product name.",
        "Variant weight is Shopify shipping weight converted from pounds to grams."
      ]
    },
  },
  {
    categorySlug: "power-banks",
    manufacturer: "Anker",
    model: "Anker 548 Power Bank (PowerCore Reserve 192Wh)",
    slug: "anker-548-power-bank-powercore-reserve-192wh",
    summary: "Massive Power for All: Get the ultimate emergency power source for all your devices with a massive capacity of 60,000mAh. Charge an iPhone 14 over 10 times, a MacBook Air up to 2.9 times, or power a 3W LED lamp for 42...",
    summaryUk: "Massive Power for All: Get the ultimate emergency power source for all your devices with a massive capacity of 60,000mAh. Charge an iPhone 14 over 10 times, a MacBook Air up to 2.9 times, or power a 3W LED lamp for 42...",
    imagePath: "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/61pFG7DId_L1_1534x.png?v=1686543592",
    priceCents: 14999,
    productCode: "A1294",
    nominalVoltageV: 5,
    capacityWh: 192,
    continuousPowerW: 192,
    peakPowerW: 192,
    chemistry: "Lithium-ion",
    weightGrams: 2387,
    warrantyYears: 2,
    sourceLabel: "Anker EU product page (A1294)",
    sourceLabelUk: "Anker EU product page (A1294)",
    sourceUrl: "https://www.anker.com/eu-en/products/a1294?variant=42809390137534&collections_power-banks&Sort_by=Recommended",
    specifications: {
      collectionListPosition: 16,
      collectionUrl: "https://www.anker.com/eu-en/collections/power-banks",
      shopifyProductId: "gid://shopify/Product/7659686756542",
      handle: "a1294",
      status: "Sold Out",
      priceEur: null,
      originalPriceEur: null,
      typicalCapacityMah: 60000,
      estimatedEnergyWh: 192,
      maxOutputW: 192,
      sourceDescription: "Massive Power for All: Get the ultimate emergency power source for all your devices with a massive capacity of 60,000mAh. Charge an iPhone 14 over 10 times, a MacBook Air up to 2.9 times, or power a 3W LED lamp for 42.3 hours. Simultaneous Charging: Features 60W and 27W USB-C ports, allowing you to charge your phone and laptop simultaneously-ideal for quick power on the go. Stay Safe and Secure: The retractable light and an SOS button provide emergency lighting for safety during power outages or other emergency situations. Power Up Sustainably: Recharge the power bank seamlessly via solar panels, providing sustainable charging for your devices on the go. What You Get: Anker 548 Power Bank (PowerCore Reserve 192Wh), 1.9 ft (60 cm) USB-C to USB-C cable, welcome guide, worry-free 3-year warranty, and our friendly customer service. (Note: Wall charger and XT-60 cable not included) Notes: 1. When in auto mode, the power bank must be connected to a power source via the USB-C 1 port to activate emergency lighting. 2. The power bank is compatible with a solar charger featuring an XT-60 connector, ranging from 10-24V.",
      features: [
        "Massive Power for All",
        "Simultaneous Charging",
        "Stay Safe and Secure",
        "Power Up Sustainably"
      ],
      allImages: [
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/61pFG7DId_L1.png?v=1686543592",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/71_64FGH_RL.jpg?v=1686543593",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/71Ao0LE1NuL.jpg?v=1686543592",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/81A-__mow0L.jpg?v=1686543593",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/81n-yESsNdL.jpg?v=1686543593",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/819G9HxW5KL.jpg?v=1686543593"
      ],
      variants: [
        {
          id: "gid://shopify/ProductVariant/42809390137534",
          name: "Default Title",
          sku: "A1294061",
          barcode: "194644124847",
          price: 199.99,
          weight: 5.2624,
          availableForSale: false,
          quantityAvailable: 0,
          imageUrl: "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/61pFG7DId_L1.png?v=1686543592",
          discounts: []
        }
      ],
      downloads: [
        {
          label: "QSG A1294_QSG 2023-06-29",
          url: "https://cdn.shopify.com/s/files/1/0595/4034/0926/files/91VzU9a92UL.pdf?v=1688097814"
        },
        {
          label: "Declaration of Conformity A1294 DOC 2024-09-27",
          url: "https://cdn.shopify.com/s/files/1/0491/8460/4324/files/Battery_Doc_-_A1294_caead250-8583-4485-8a84-9ff0fa2288f0.pdf?v=1727170334"
        }
      ],
      faqs: [
        {
          question: "Q1: Why does the charging pause for a few seconds when I plug in another device?",
          answer: "The power bank reallocates power internally, which takes a few seconds to complete. This is a normal process, so there is no need to worry."
        },
        {
          question: "Q2: Why does the device show that it's charging, but the displayed power remains at 0W?",
          answer: "The power bank has a 0.1W resolution. For devices like headphones or smartwatches with high battery levels, the charging power may fall below 0.1W. Rest assured, the power bank continues to charge the device even if the displayed power shows 0W."
        },
        {
          question: "Q3: Why does the laptop's battery level decrease when connected to a power bank for charging?",
          answer: "The power bank's USB-C port supports bidirectional charging. Ensure your laptop is charging by checking after connecting the cable and disconnecting once fully charged."
        },
        {
          question: "Q4: How do I enable the 'light' feature during power outages?",
          answer: "1. Press the 'light' button to turn on the screen. 2. Long press the 'light' button to activate. 'Auto' indicates it's on. 3. Connect to a power source via USB-C 1. 4. Place where light is unobstructed. 5. Light auto-activates during power outages."
        },
        {
          question: "Q5: How can I adjust the screen timeout settings?",
          answer: "1. When idle with a battery level circle, press the SOS button twice to enter the settings page. 2. Press and hold for 2 seconds to switch between different screen timeout settings. 3. Press the SOS button twice to exit the settings page."
        }
      ],
      dataNotes: [
        "Fetched from Anker EU collection and product pages on 2026-06-16.",
        "CapacityWh is estimated from advertised mAh at 3.7V unless Anker listed Wh in the product name.",
        "Variant weight is Shopify shipping weight converted from pounds to grams."
      ]
    },
  },
  {
    categorySlug: "power-banks",
    manufacturer: "Anker",
    model: "Anker 533 Wireless Power Bank (PowerCore 10K)",
    slug: "anker-533-wireless-power-bank-powercore-10k",
    summary: "The Anker Advantage: Join the 55 million+ powered by our leading technology. Portable Wireless Charging: Qi-certified to provide up to 10W of wireless charging power to phones, earbuds, or other devices on the go. Hig...",
    summaryUk: "The Anker Advantage: Join the 55 million+ powered by our leading technology. Portable Wireless Charging: Qi-certified to provide up to 10W of wireless charging power to phones, earbuds, or other devices on the go. Hig...",
    imagePath: "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1617_1534x.jpg?v=1654744667",
    priceCents: 5999,
    productCode: "A1617",
    nominalVoltageV: 5,
    capacityWh: 37,
    continuousPowerW: 533,
    peakPowerW: 533,
    chemistry: "Lithium-ion",
    weightGrams: 297,
    warrantyYears: 2,
    sourceLabel: "Anker EU product page (A1617)",
    sourceLabelUk: "Anker EU product page (A1617)",
    sourceUrl: "https://www.anker.com/eu-en/products/a1617?variant=41510215745726&collections_power-banks&Sort_by=Recommended",
    specifications: {
      collectionListPosition: 17,
      collectionUrl: "https://www.anker.com/eu-en/collections/power-banks",
      shopifyProductId: "gid://shopify/Product/7251929759934",
      handle: "a1617",
      status: "Sold Out",
      priceEur: null,
      originalPriceEur: null,
      typicalCapacityMah: 10000,
      estimatedEnergyWh: 37,
      maxOutputW: 533,
      sourceDescription: "The Anker Advantage: Join the 55 million+ powered by our leading technology. Portable Wireless Charging: Qi-certified to provide up to 10W of wireless charging power to phones, earbuds, or other devices on the go. High-Speed USB Charging: Connect to either the USB-C or USB-A port to give your phone or tablet a powerful charge up to 18W. Desktop Mode: Use PowerCore as a wireless pad by connecting to a power supply via the USB-C port. Charge your device wirelessly while giving PowerCores internal battery a full recharge. What You Get: Anker 533 Wireless Power Bank (PowerCore 10K) / PowerCore III 10K Wireless, USB-C to USB-C cable, travel pouch, welcome guide, our 18-month warranty, and friendly customer service.",
      features: [
        "The Anker Advantage",
        "Portable Wireless Charging",
        "High-Speed USB Charging",
        "Desktop Mode"
      ],
      allImages: [
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1617.jpg?v=1654744667",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A3_3ef8bc2c-b4ef-41ee-80e8-7717ae3a6b50.jpg?v=1654744667",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A4_4f832fe8-28e8-471c-bf3a-e03e5f0ff151.jpg?v=1654744667",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A5_fb1136b8-c2aa-44cc-89d2-4d9c92260123.jpg?v=1654744667"
      ],
      variants: [
        {
          id: "gid://shopify/ProductVariant/41510215745726",
          name: "Black",
          sku: "A1617012",
          barcode: "194644034238",
          price: 49.99,
          weight: 0.6548,
          availableForSale: false,
          quantityAvailable: 0,
          imageUrl: "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1617.jpg?v=1654744667",
          discounts: []
        }
      ],
      downloads: [
        {
          label: "Manual A1617 Manual 2021-07-08",
          url: "https://dix7fd4yse9rd.cloudfront.net/s/Anker/product/5953819443364/files/1625728196808_51005002349a1617onlinemanual75x110mm20210617v05.pdf"
        },
        {
          label: "Declaration of Conformity A1617 DOC 2024-09-27",
          url: "https://cdn.shopify.com/s/files/1/0491/8460/4324/files/Battery_Doc_-_A1617_c692e0e9-45f2-4f4f-9d1d-c17c7bf8199d.pdf?v=1727170334"
        }
      ],
      faqs: [],
      dataNotes: [
        "Fetched from Anker EU collection and product pages on 2026-06-16.",
        "CapacityWh is estimated from advertised mAh at 3.7V unless Anker listed Wh in the product name.",
        "Variant weight is Shopify shipping weight converted from pounds to grams."
      ]
    },
  },
  {
    categorySlug: "power-banks",
    manufacturer: "Anker",
    model: "Anker 325 Power Bank (PowerCore 20K)",
    slug: "anker-325-power-bank-powercore-20k",
    summary: "Ultra-High Cell Capacity: The massive 20,000mAh cell capacity provides more than 5 charges for iPhone XS, almost 5 full charges for Samsung Galaxy S10, more than 4 charges for iPhone 11, and over 2 and a half charges ...",
    summaryUk: "Ultra-High Cell Capacity: The massive 20,000mAh cell capacity provides more than 5 charges for iPhone XS, almost 5 full charges for Samsung Galaxy S10, more than 4 charges for iPhone 11, and over 2 and a half charges ...",
    imagePath: "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1268013-Anker_325_Power_Bank_PowerCore_20K_5_1534x.png?v=1672389689",
    priceCents: 4999,
    productCode: "A1268",
    nominalVoltageV: 5,
    capacityWh: 74,
    continuousPowerW: 10,
    peakPowerW: 10,
    chemistry: "Lithium-ion",
    weightGrams: 443,
    warrantyYears: 2,
    sourceLabel: "Anker EU product page (A1268)",
    sourceLabelUk: "Anker EU product page (A1268)",
    sourceUrl: "https://www.anker.com/eu-en/products/a1268?variant=41510216335550&collections_power-banks&Sort_by=Recommended",
    specifications: {
      collectionListPosition: 18,
      collectionUrl: "https://www.anker.com/eu-en/collections/power-banks",
      shopifyProductId: "gid://shopify/Product/7251930349758",
      handle: "a1268",
      status: "Sold Out",
      priceEur: null,
      originalPriceEur: null,
      typicalCapacityMah: 20000,
      estimatedEnergyWh: 74,
      maxOutputW: 10,
      sourceDescription: "Ultra-High Cell Capacity: The massive 20,000mAh cell capacity provides more than 5 charges for iPhone XS, almost 5 full charges for Samsung Galaxy S10, more than 4 charges for iPhone 11, and over 2 and a half charges for iPad mini 5. Advanced Charging Technology: Anker's exclusive PowerIQ and VoltageBoost technology combine to deliver an optimized charge to your devices, while the trickle-charging mode is the best way to charge low-power accessories. Simultaneous Charging: Twin USB ports allow you to charge two devices at the same time. The USB-C port cannot charge other devices. Versatile Recharging: With both a USB-C and Micro USB input port, you have more options over how you recharge. Recharging PowerCore with a 10W charger will take approximately 10.5 hours, while recharging with a 5W charger will take approximately 20 hours. What You Get: Anker 325 Power Bank (PowerCore 20K) / PowerCore Essential 20000, Micro USB cable, welcome guide, our worry-free 18-month warranty, and friendly customer service. (USB-C cable, Lightning cable, and wall charger not included)",
      features: [
        "Ultra-High Cell Capacity",
        "Advanced Charging Technology",
        "Simultaneous Charging",
        "Versatile Recharging"
      ],
      allImages: [
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1268013-Anker_325_Power_Bank_PowerCore_20K_5.png?v=1672389689",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/Black-02_0e8762ae-57d4-4be3-b5b5-683fa86fc776.jpg?v=1672389689",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/Black-03_582d5d4b-0a27-4eb8-b8c4-78e5f346001f.jpg?v=1672389689",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/Black-04_588c93d4-c3d3-4e71-a8bf-8f4ec95a971b.jpg?v=1672389689",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/Black-05_c5b5ef0b-eb2f-48d0-b5b2-4b4844777c5f.jpg?v=1672389689",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/Black-06_f8ed157c-cea1-4243-a2b6-9bd982453fc1.jpg?v=1672389689",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/Black-07_ace2a5dc-1baa-48dd-b0af-d07ec1690234.jpg?v=1672389689",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/Black-08.jpg?v=1672389689",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1268021.jpg?v=1672389689",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/White-02_1.jpg?v=1672389689",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/White-03_1.jpg?v=1672389689",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/White-04_1.jpg?v=1672389689",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/White-05_1.jpg?v=1672389689",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/White-06_1.jpg?v=1672389689",
        "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/White-07_1.jpg?v=1672389689"
      ],
      variants: [
        {
          id: "gid://shopify/ProductVariant/41510216335550",
          name: "Default Title",
          sku: "A1268015",
          barcode: "848061059861",
          price: 39.99,
          weight: 0.9766,
          availableForSale: false,
          quantityAvailable: 0,
          imageUrl: "https://cdn.shopify.com/s/files/1/0595/4034/0926/products/A1268013-Anker_325_Power_Bank_PowerCore_20K_5.png?v=1672389689",
          discounts: []
        }
      ],
      downloads: [
        {
          label: "Manual A1268 Manual 2021-08-26",
          url: "https://dix7fd4yse9rd.cloudfront.net/s/Anker/product/5953810038948/files/1629965215806_a1268-new-manual.pdf"
        },
        {
          label: "Declaration of Conformity A1268 DOC 2024-09-27",
          url: "https://cdn.shopify.com/s/files/1/0491/8460/4324/files/Battery_Doc_-_A1268_43aeee7c-f942-4e15-86bc-5a8c2e82a845.pdf?v=1727170336"
        }
      ],
      faqs: [],
      dataNotes: [
        "Fetched from Anker EU collection and product pages on 2026-06-16.",
        "CapacityWh is estimated from advertised mAh at 3.7V unless Anker listed Wh in the product name.",
        "Variant weight is Shopify shipping weight converted from pounds to grams."
      ]
    },
  }
];
