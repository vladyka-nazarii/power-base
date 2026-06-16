export type BaseusPowerBankSeedRow = {
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

export const baseusPowerBankRows: BaseusPowerBankSeedRow[] = [
  {
    "categorySlug": "power-banks",
    "manufacturer": "Baseus",
    "model": "PicoGo Ultra-Slim Qi2 Magnetic Power Bank 10000mAh 27W",
    "slug": "baseus-picogo-ultra-slim-qi2-magnetic-power-bank-10000mah",
    "summary": "PicoGo Ultra-Slim Qi2 Magnetic Power Bank 10000mAh 27W from Baseus with 10,000 mAh advertised capacity, up to 27 W output, Qi2 magnetic charging.",
    "summaryUk": "PicoGo Ultra-Slim Qi2 Magnetic Power Bank 10000mAh 27W from Baseus with 10,000 mAh advertised capacity, up to 27 W output, Qi2 magnetic charging.",
    "imagePath": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Qi2_Magnetic_Power_Bank_10000mAh_1.jpg?v=1742898527",
    "priceCents": 5299,
    "productCode": "E0027200",
    "nominalVoltageV": 5,
    "capacityWh": 37,
    "continuousPowerW": 27,
    "peakPowerW": 27,
    "chemistry": "Lithium-ion",
    "communicationProtocols": "USB-C, Qi2, Magnetic wireless charging",
    "weightGrams": null,
    "sourceLabel": "Baseus product page (picogo-ultra-slim-qi2-magnetic-power-bank-10000mah)",
    "sourceLabelUk": "Baseus product page (picogo-ultra-slim-qi2-magnetic-power-bank-10000mah)",
    "sourceUrl": "https://www.baseus.com/products/picogo-ultra-slim-qi2-magnetic-power-bank-10000mah",
    "specifications": {
      "collectionListPosition": 1,
      "collectionUrl": "https://www.baseus.com/collections/charging?sort_by=manual&filter.p.product_type=Power+Banks",
      "collectionProductsJsonUrl": "https://www.baseus.com/collections/charging/products.json?limit=250",
      "sourceFetchedAt": "2026-06-16",
      "sourceProductId": 7451769208909,
      "handle": "picogo-ultra-slim-qi2-magnetic-power-bank-10000mah",
      "vendor": "Baseus US",
      "productType": "Power Banks",
      "tags": [
        "20% to 29% Off",
        "2025PD",
        "2026PD",
        "__label:BEST SELLER",
        "AM52 Campaign",
        "BWP",
        "Charging",
        "On the go",
        "Picogo",
        "Power Banks"
      ],
      "status": "In Stock",
      "availableForSale": true,
      "priceUsd": 52.99,
      "priceRangeUsd": {
        "min": 52.99,
        "max": 52.99,
        "varies": false
      },
      "compareAtPriceUsd": 69.99,
      "sourceCurrency": "USD",
      "typicalCapacityMah": 10000,
      "estimatedEnergyWh": 37,
      "maxOutputW": 27,
      "advertisedPowerW": 27,
      "advertisedCapacityMah": 10000,
      "inferredInputOutputNotes": [
        "Capacity and max output are inferred from Baseus product title and product-page text where not separately exposed by Shopify JSON.",
        "Energy is estimated from advertised mAh at 3.7V nominal lithium-cell voltage."
      ],
      "features": [
        "10,000 mAh advertised capacity",
        "Up to 27 W output",
        "Qi2 magnetic wireless charging"
      ],
      "options": [
        {
          "name": "Color",
          "position": 1,
          "values": [
            "Grey",
            "Black",
            "Titanium",
            "Pink"
          ]
        }
      ],
      "variants": [
        {
          "id": 41663923191885,
          "title": "Grey",
          "sku": "E0027200",
          "barcode": "6932172691424",
          "available": true,
          "priceUsd": 52.99,
          "compareAtPriceUsd": 69.99,
          "weightGrams": 152407,
          "weightSource": "Shopify variant weight field",
          "weightPromotedToTopLevel": false,
          "options": [
            "Grey"
          ],
          "featuredImage": {
            "id": 32691673038925,
            "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Qi2_Magnetic_Power_Bank_10000mAh_1.jpg?v=1742898527",
            "alt": "Baseus PicoGo Ultra-Slim Qi2 Magnetic Power Bank 10000mAh 27W Grey",
            "width": 1200,
            "height": 1200,
            "position": 1
          }
        },
        {
          "id": 41663923159117,
          "title": "Black",
          "sku": "E0027201",
          "barcode": "6932172691707",
          "available": true,
          "priceUsd": 52.99,
          "compareAtPriceUsd": 69.99,
          "weightGrams": 152407,
          "weightSource": "Shopify variant weight field",
          "weightPromotedToTopLevel": false,
          "options": [
            "Black"
          ],
          "featuredImage": {
            "id": 32884652179533,
            "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Qi2_Magnetic_Power_Bank_10000mAh__black_3.jpg?v=1745994703",
            "alt": "Baseus PicoGo Ultra-Slim Qi2 Magnetic Power Bank 10000mAh 27W Black",
            "width": 1200,
            "height": 1200,
            "position": 5
          }
        },
        {
          "id": 41663923224653,
          "title": "Titanium",
          "sku": "E0027203",
          "barcode": "6932172691684",
          "available": true,
          "priceUsd": 52.99,
          "compareAtPriceUsd": 69.99,
          "weightGrams": 152407,
          "weightSource": "Shopify variant weight field",
          "weightPromotedToTopLevel": false,
          "options": [
            "Titanium"
          ],
          "featuredImage": {
            "id": 32884658077773,
            "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Qi2_Magnetic_Power_Bank_10000mAh__titanium_2.jpg?v=1753415900",
            "alt": "Baseus PicoGo Ultra-Slim Qi2 Magnetic Power Bank 10000mAh 27W Titanium",
            "width": 1200,
            "height": 1200,
            "position": 9
          }
        },
        {
          "id": 41663923257421,
          "title": "Pink",
          "sku": "E0027202",
          "barcode": "6932172691691",
          "available": true,
          "priceUsd": 52.99,
          "compareAtPriceUsd": 69.99,
          "weightGrams": 152407,
          "weightSource": "Shopify variant weight field",
          "weightPromotedToTopLevel": false,
          "options": [
            "Pink"
          ],
          "featuredImage": {
            "id": 32884652212301,
            "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Qi2_Magnetic_Power_Bank_10000mAh__pink_2.jpg?v=1753415900",
            "alt": "Baseus PicoGo Ultra-Slim Qi2 Magnetic Power Bank 10000mAh 27W Pink",
            "width": 1200,
            "height": 1200,
            "position": 13
          }
        }
      ],
      "productImages": [
        {
          "position": 1,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Qi2_Magnetic_Power_Bank_10000mAh_1.jpg?v=1742898527"
        },
        {
          "position": 2,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Qi2_Magnetic_Power_Bank_10000mAh_2.jpg?v=1742898530"
        },
        {
          "position": 3,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Qi2_Magnetic_Power_Bank_10000mAh_3.jpg?v=1742898531"
        },
        {
          "position": 4,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Qi2_Magnetic_Power_Bank_10000mAh_4.jpg?v=1745481424"
        },
        {
          "position": 5,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Qi2_Magnetic_Power_Bank_10000mAh__black_3.jpg?v=1745994703"
        },
        {
          "position": 6,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Qi2_Magnetic_Power_Bank_10000mAh__black_1.jpg?v=1745994703"
        },
        {
          "position": 7,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Qi2_Magnetic_Power_Bank_10000mAh__black_2.jpg?v=1745994703"
        },
        {
          "position": 8,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Qi2_Magnetic_Power_Bank_10000mAh__black_4.jpg?v=1745994703"
        },
        {
          "position": 9,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Qi2_Magnetic_Power_Bank_10000mAh__titanium_2.jpg?v=1753415900"
        },
        {
          "position": 10,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Qi2_Magnetic_Power_Bank_10000mAh__titanium_1.jpg?v=1753415900"
        },
        {
          "position": 11,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Qi2_Magnetic_Power_Bank_10000mAh__titanium_3.jpg?v=1753415900"
        },
        {
          "position": 12,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Qi2_Magnetic_Power_Bank_10000mAh__titanium_4.jpg?v=1753415900"
        },
        {
          "position": 13,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Qi2_Magnetic_Power_Bank_10000mAh__pink_2.jpg?v=1753415900"
        },
        {
          "position": 14,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Qi2_Magnetic_Power_Bank_10000mAh__pink_1.jpg?v=1753415900"
        },
        {
          "position": 15,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Qi2_Magnetic_Power_Bank_10000mAh__pink_3.jpg?v=1753415900"
        },
        {
          "position": 16,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Qi2_Magnetic_Power_Bank_10000mAh__pink_4.jpg?v=1753415900"
        }
      ],
      "media": [
        {
          "id": 24886602334285,
          "position": 1,
          "mediaType": "image",
          "alt": "Baseus PicoGo Ultra-Slim Qi2 Magnetic Power Bank 10000mAh 27W Grey",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Qi2_Magnetic_Power_Bank_10000mAh_1.jpg?v=1742898527",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 24886602367053,
          "position": 2,
          "mediaType": "image",
          "alt": "Baseus PicoGo Ultra-Slim Qi2 Magnetic Power Bank 10000mAh 27W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Qi2_Magnetic_Power_Bank_10000mAh_2.jpg?v=1742898530",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 24886602399821,
          "position": 3,
          "mediaType": "image",
          "alt": "Baseus PicoGo Ultra-Slim Qi2 Magnetic Power Bank 10000mAh 27W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Qi2_Magnetic_Power_Bank_10000mAh_3.jpg?v=1742898531",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 24992081903693,
          "position": 4,
          "mediaType": "image",
          "alt": "Baseus PicoGo Ultra-Slim Qi2 Magnetic Power Bank 10000mAh 27W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Qi2_Magnetic_Power_Bank_10000mAh_4.jpg?v=1745481424",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 25006432387149,
          "position": 5,
          "mediaType": "image",
          "alt": "Baseus PicoGo Ultra-Slim Qi2 Magnetic Power Bank 10000mAh 27W Black",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Qi2_Magnetic_Power_Bank_10000mAh__black_3.jpg?v=1745994703",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 25006441889869,
          "position": 6,
          "mediaType": "image",
          "alt": "Baseus PicoGo Ultra-Slim Qi2 Magnetic Power Bank 10000mAh 27W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Qi2_Magnetic_Power_Bank_10000mAh__black_1.jpg?v=1745994703",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 25006442840141,
          "position": 7,
          "mediaType": "image",
          "alt": "Baseus PicoGo Ultra-Slim Qi2 Magnetic Power Bank 10000mAh 27W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Qi2_Magnetic_Power_Bank_10000mAh__black_2.jpg?v=1745994703",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 25006442872909,
          "position": 8,
          "mediaType": "image",
          "alt": "Baseus PicoGo Ultra-Slim Qi2 Magnetic Power Bank 10000mAh 27W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Qi2_Magnetic_Power_Bank_10000mAh__black_4.jpg?v=1745994703",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 25006436778061,
          "position": 9,
          "mediaType": "image",
          "alt": "Baseus PicoGo Ultra-Slim Qi2 Magnetic Power Bank 10000mAh 27W Titanium",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Qi2_Magnetic_Power_Bank_10000mAh__titanium_2.jpg?v=1753415900",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 25006440120397,
          "position": 10,
          "mediaType": "image",
          "alt": "Baseus PicoGo Ultra-Slim Qi2 Magnetic Power Bank 10000mAh 27W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Qi2_Magnetic_Power_Bank_10000mAh__titanium_1.jpg?v=1753415900",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 25006440218701,
          "position": 11,
          "mediaType": "image",
          "alt": "Baseus PicoGo Ultra-Slim Qi2 Magnetic Power Bank 10000mAh 27W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Qi2_Magnetic_Power_Bank_10000mAh__titanium_3.jpg?v=1753415900",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 25006440251469,
          "position": 12,
          "mediaType": "image",
          "alt": "Baseus PicoGo Ultra-Slim Qi2 Magnetic Power Bank 10000mAh 27W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Qi2_Magnetic_Power_Bank_10000mAh__titanium_4.jpg?v=1753415900",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 25006432419917,
          "position": 13,
          "mediaType": "image",
          "alt": "Baseus PicoGo Ultra-Slim Qi2 Magnetic Power Bank 10000mAh 27W Pink",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Qi2_Magnetic_Power_Bank_10000mAh__pink_2.jpg?v=1753415900",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 25006441398349,
          "position": 14,
          "mediaType": "image",
          "alt": "Baseus PicoGo Ultra-Slim Qi2 Magnetic Power Bank 10000mAh 27W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Qi2_Magnetic_Power_Bank_10000mAh__pink_1.jpg?v=1753415900",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 25006441562189,
          "position": 15,
          "mediaType": "image",
          "alt": "Baseus PicoGo Ultra-Slim Qi2 Magnetic Power Bank 10000mAh 27W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Qi2_Magnetic_Power_Bank_10000mAh__pink_3.jpg?v=1753415900",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 25006441594957,
          "position": 16,
          "mediaType": "image",
          "alt": "Baseus PicoGo Ultra-Slim Qi2 Magnetic Power Bank 10000mAh 27W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Qi2_Magnetic_Power_Bank_10000mAh__pink_4.jpg?v=1753415900",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        }
      ],
      "descriptionImages": [
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/picogo_10k_banner.jpg?v=1744189983",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Qi2_Magnetic_Power_Bank_10000mAh_A_2.jpg?v=1743573013",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Qi2_Magnetic_Power_Bank_10000mAh_A_3.jpg?v=1743573013",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Qi2_Magnetic_Power_Bank_10000mAh_A_4.jpg?v=1743573015",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Qi2_Magnetic_Power_Bank_10000mAh_A_5.jpg?v=1743573014",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Qi2_Magnetic_Power_Bank_10000mAh_A_7.jpg?v=1743573013",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Qi2_Magnetic_Power_Bank_10000mAh_A_8.jpg?v=1743573015",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Qi2_Magnetic_Power_Bank_10000mAh_A_9.jpg?v=1743573014",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Qi2_Magnetic_Power_Bank_10000mAh_A_6.jpg?v=1743573015",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Qi2_Magnetic_Power_Bank_10000mAh_A_10.jpg?v=1743573014",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Qi2_Magnetic_Power_Bank_10000mAh_A_11.jpg?v=1743573014"
      ],
      "descriptionHeadings": [],
      "descriptionBullets": [],
      "descriptionButtons": [
        "Slim. Light. Portable",
        "Premium Design",
        "Durable and Reliable",
        "Qi2 Certified",
        "2 Way Fast Charging",
        "USB-C Fast Charging",
        "Advanced AI Tech",
        "Power For the Day",
        "Huge Compatibility",
        "2-Year Care"
      ],
      "descriptionText": "The Baseus PicoGo redefines what a power bank can be. At just 10,000mAh, it delivers 15W Qi2 magnetic wireless charging and 27W wired fast charging in an ultra-slim, pocket-friendly design. Available in four premium colors — Grey, Black, Titanium, and Pink — it’s the power bank that fits your style as perfectly as it fits your bag. Slim. Light. Portable Premium Design Durable and Reliable Qi2 Certified Snap it on, slip it in your pocket — the PicoGo is so slim, you’ll forget it’s there until you need it most. 2 Way Fast Charging USB-C Fast Charging Advanced AI Tech Qi2 certified for maximum wireless efficiency — charge faster, run cooler, and stay powered through the whole day. Power For the Day Huge Compatibility 2-Year Care",
      "publishedAt": "2025-04-24T01:37:50-07:00",
      "createdAt": "2025-03-25T01:45:44-07:00"
    }
  },
  {
    "categorySlug": "power-banks",
    "manufacturer": "Baseus",
    "model": "PicoGo AM31 Mini Magnetic Power Bank with Stand 5000mAh 20W",
    "slug": "baseus-picogo-am31-mini-magnetic-power-bank-with-stand-20w-5000mah",
    "summary": "PicoGo AM31 Mini Magnetic Power Bank with Stand 5000mAh 20W from Baseus with 5,000 mAh advertised capacity, up to 20 W output, magnetic charging.",
    "summaryUk": "PicoGo AM31 Mini Magnetic Power Bank with Stand 5000mAh 20W from Baseus with 5,000 mAh advertised capacity, up to 20 W output, magnetic charging.",
    "imagePath": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31Mini_Magnetic_Power_Bank_with_Stand_20W_5000mAh_1.jpg?v=1772532953",
    "priceCents": 4999,
    "productCode": "P1007680B813-00",
    "nominalVoltageV": 5,
    "capacityWh": 19,
    "continuousPowerW": 20,
    "peakPowerW": 20,
    "chemistry": "Lithium-ion",
    "communicationProtocols": "Magnetic wireless charging",
    "weightGrams": null,
    "sourceLabel": "Baseus product page (picogo-am31-mini-magnetic-power-bank-with-stand-20w-5000mah)",
    "sourceLabelUk": "Baseus product page (picogo-am31-mini-magnetic-power-bank-with-stand-20w-5000mah)",
    "sourceUrl": "https://www.baseus.com/products/picogo-am31-mini-magnetic-power-bank-with-stand-20w-5000mah",
    "specifications": {
      "collectionListPosition": 2,
      "collectionUrl": "https://www.baseus.com/collections/charging?sort_by=manual&filter.p.product_type=Power+Banks",
      "collectionProductsJsonUrl": "https://www.baseus.com/collections/charging/products.json?limit=250",
      "sourceFetchedAt": "2026-06-16",
      "sourceProductId": 7502951874637,
      "handle": "picogo-am31-mini-magnetic-power-bank-with-stand-20w-5000mah",
      "vendor": "Baseus US",
      "productType": "Power Banks",
      "tags": [
        "2026PD",
        "AM52 Campaign",
        "BF40",
        "Charging",
        "Gifts for Mom",
        "On the go",
        "PicoGo II",
        "Power Banks"
      ],
      "status": "In Stock",
      "availableForSale": true,
      "priceUsd": 49.99,
      "priceRangeUsd": {
        "min": 49.99,
        "max": 49.99,
        "varies": false
      },
      "compareAtPriceUsd": 49.99,
      "sourceCurrency": "USD",
      "typicalCapacityMah": 5000,
      "estimatedEnergyWh": 19,
      "maxOutputW": 20,
      "advertisedPowerW": 20,
      "advertisedCapacityMah": 5000,
      "inferredInputOutputNotes": [
        "Capacity and max output are inferred from Baseus product title and product-page text where not separately exposed by Shopify JSON.",
        "Energy is estimated from advertised mAh at 3.7V nominal lithium-cell voltage."
      ],
      "features": [
        "5,000 mAh advertised capacity",
        "Up to 20 W output",
        "Magnetic wireless charging support"
      ],
      "options": [
        {
          "name": "Color",
          "position": 1,
          "values": [
            "Grey",
            "Pink",
            "Black",
            "Titanium"
          ]
        }
      ],
      "variants": [
        {
          "id": 41947413905485,
          "title": "Grey",
          "sku": "P1007680B813-00",
          "barcode": "6932172690502",
          "available": true,
          "priceUsd": 49.99,
          "compareAtPriceUsd": 49.99,
          "weightGrams": 152407,
          "weightSource": "Shopify variant weight field",
          "weightPromotedToTopLevel": false,
          "options": [
            "Grey"
          ],
          "featuredImage": {
            "id": 33184420921421,
            "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31Mini_Magnetic_Power_Bank_with_Stand_20W_5000mAh_1.jpg?v=1772532953",
            "alt": "Baseus PicoGo AM31 Mini Magnetic Power Bank with Stand 5000mAh 20W Grey",
            "width": 1200,
            "height": 1200,
            "position": 1
          }
        },
        {
          "id": 41947413938253,
          "title": "Pink",
          "sku": "P1007680B453-00",
          "barcode": "6932172690496",
          "available": true,
          "priceUsd": 49.99,
          "compareAtPriceUsd": 49.99,
          "weightGrams": 152407,
          "weightSource": "Shopify variant weight field",
          "weightPromotedToTopLevel": false,
          "options": [
            "Pink"
          ],
          "featuredImage": {
            "id": 33551824355405,
            "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_with_Stand_20W_5000mAh_pink_1.jpg?v=1772532953",
            "alt": "Baseus PicoGo AM31 Mini Magnetic Power Bank with Stand 5000mAh 20W Pink",
            "width": 1200,
            "height": 1200,
            "position": 5
          }
        },
        {
          "id": 41947414003789,
          "title": "Black",
          "sku": "P10081907123-00",
          "barcode": "6932172690519",
          "available": false,
          "priceUsd": 49.99,
          "compareAtPriceUsd": 49.99,
          "weightGrams": 152407,
          "weightSource": "Shopify variant weight field",
          "weightPromotedToTopLevel": false,
          "options": [
            "Black"
          ],
          "featuredImage": {
            "id": 33551824224333,
            "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_with_Stand_20W_5000mAh_black_1.jpg?v=1772532953",
            "alt": "Baseus PicoGo AM31 Mini Magnetic Power Bank with Stand 5000mAh 20W Black",
            "width": 1200,
            "height": 1200,
            "position": 10
          }
        },
        {
          "id": 41947413971021,
          "title": "Titanium",
          "sku": "P10081907853-00",
          "barcode": "6932172690489",
          "available": false,
          "priceUsd": 49.99,
          "compareAtPriceUsd": 49.99,
          "weightGrams": 152407,
          "weightSource": "Shopify variant weight field",
          "weightPromotedToTopLevel": false,
          "options": [
            "Titanium"
          ],
          "featuredImage": {
            "id": 33551824977997,
            "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_with_Stand_20W_5000mAh_Titanium_1.jpg?v=1772532953",
            "alt": "Baseus PicoGo AM31 Mini Magnetic Power Bank with Stand 5000mAh 20W Titanium",
            "width": 1200,
            "height": 1200,
            "position": 15
          }
        }
      ],
      "productImages": [
        {
          "position": 1,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31Mini_Magnetic_Power_Bank_with_Stand_20W_5000mAh_1.jpg?v=1772532953"
        },
        {
          "position": 2,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31Mini_Magnetic_Power_Bank_with_Stand_20W_5000mAh_2.jpg?v=1772532953"
        },
        {
          "position": 3,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31Mini_Magnetic_Power_Bank_with_Stand_20W_5000mAh_3.jpg?v=1772532953"
        },
        {
          "position": 4,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31Mini_Magnetic_Power_Bank_with_Stand_20W_5000mAh_4.jpg?v=1772532953"
        },
        {
          "position": 5,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_with_Stand_20W_5000mAh_pink_1.jpg?v=1772532953"
        },
        {
          "position": 6,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_with_Stand_20W_5000mAh_pink_2.jpg?v=1772532953"
        },
        {
          "position": 7,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_with_Stand_20W_5000mAh_pink_3.jpg?v=1772532953"
        },
        {
          "position": 8,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_with_Stand_20W_5000mAh_pink_4.jpg?v=1772532953"
        },
        {
          "position": 9,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_with_Stand_20W_5000mAh_pink_5.jpg?v=1772532953"
        },
        {
          "position": 10,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_with_Stand_20W_5000mAh_black_1.jpg?v=1772532953"
        },
        {
          "position": 11,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_with_Stand_20W_5000mAh_black_2.jpg?v=1772532953"
        },
        {
          "position": 12,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_with_Stand_20W_5000mAh_black_3.jpg?v=1772532953"
        },
        {
          "position": 13,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_with_Stand_20W_5000mAh_black_4.jpg?v=1772532953"
        },
        {
          "position": 14,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_with_Stand_20W_5000mAh_black_5.jpg?v=1772532953"
        },
        {
          "position": 15,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_with_Stand_20W_5000mAh_Titanium_1.jpg?v=1772532953"
        },
        {
          "position": 16,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_with_Stand_20W_5000mAh_Titanium_2.jpg?v=1772532953"
        },
        {
          "position": 17,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_with_Stand_20W_5000mAh_Titanium_3.jpg?v=1772532953"
        },
        {
          "position": 18,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_with_Stand_20W_5000mAh_Titanium_4.jpg?v=1772532953"
        },
        {
          "position": 19,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_with_Stand_20W_5000mAh_Titanium_5.jpg?v=1772532953"
        },
        {
          "position": 20,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31Mini_Magnetic_Power_Bank_with_Stand_20W_5000mAh_5.jpg?v=1772532953"
        }
      ],
      "media": [
        {
          "id": 25201398186061,
          "position": 1,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM31 Mini Magnetic Power Bank with Stand 5000mAh 20W Grey",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31Mini_Magnetic_Power_Bank_with_Stand_20W_5000mAh_1.jpg?v=1772532953",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 25201398218829,
          "position": 2,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM31 Mini Magnetic Power Bank with Stand 5000mAh 20W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31Mini_Magnetic_Power_Bank_with_Stand_20W_5000mAh_2.jpg?v=1772532953",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 25201398251597,
          "position": 3,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM31 Mini Magnetic Power Bank with Stand 5000mAh 20W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31Mini_Magnetic_Power_Bank_with_Stand_20W_5000mAh_3.jpg?v=1772532953",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 25201398284365,
          "position": 4,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM31 Mini Magnetic Power Bank with Stand 5000mAh 20W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31Mini_Magnetic_Power_Bank_with_Stand_20W_5000mAh_4.jpg?v=1772532953",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 25430872916045,
          "position": 5,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM31 Mini Magnetic Power Bank with Stand 5000mAh 20W Pink",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_with_Stand_20W_5000mAh_pink_1.jpg?v=1772532953",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 25430872883277,
          "position": 6,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM31 Mini Magnetic Power Bank with Stand 5000mAh 20W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_with_Stand_20W_5000mAh_pink_2.jpg?v=1772532953",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 25430872981581,
          "position": 7,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM31 Mini Magnetic Power Bank with Stand 5000mAh 20W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_with_Stand_20W_5000mAh_pink_3.jpg?v=1772532953",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 25430873014349,
          "position": 8,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM31 Mini Magnetic Power Bank with Stand 5000mAh 20W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_with_Stand_20W_5000mAh_pink_4.jpg?v=1772532953",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 25430872948813,
          "position": 9,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM31 Mini Magnetic Power Bank with Stand 5000mAh 20W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_with_Stand_20W_5000mAh_pink_5.jpg?v=1772532953",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 25430872784973,
          "position": 10,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM31 Mini Magnetic Power Bank with Stand 5000mAh 20W Black",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_with_Stand_20W_5000mAh_black_1.jpg?v=1772532953",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 25430872752205,
          "position": 11,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM31 Mini Magnetic Power Bank with Stand 5000mAh 20W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_with_Stand_20W_5000mAh_black_2.jpg?v=1772532953",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 25430872719437,
          "position": 12,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM31 Mini Magnetic Power Bank with Stand 5000mAh 20W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_with_Stand_20W_5000mAh_black_3.jpg?v=1772532953",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 25430872817741,
          "position": 13,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM31 Mini Magnetic Power Bank with Stand 5000mAh 20W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_with_Stand_20W_5000mAh_black_4.jpg?v=1772532953",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 25430872850509,
          "position": 14,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM31 Mini Magnetic Power Bank with Stand 5000mAh 20W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_with_Stand_20W_5000mAh_black_5.jpg?v=1772532953",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 25430873440333,
          "position": 15,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM31 Mini Magnetic Power Bank with Stand 5000mAh 20W Titanium",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_with_Stand_20W_5000mAh_Titanium_1.jpg?v=1772532953",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 25430873407565,
          "position": 16,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM31 Mini Magnetic Power Bank with Stand 5000mAh 20W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_with_Stand_20W_5000mAh_Titanium_2.jpg?v=1772532953",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 25430873473101,
          "position": 17,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM31 Mini Magnetic Power Bank with Stand 5000mAh 20W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_with_Stand_20W_5000mAh_Titanium_3.jpg?v=1772532953",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 25430873538637,
          "position": 18,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM31 Mini Magnetic Power Bank with Stand 5000mAh 20W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_with_Stand_20W_5000mAh_Titanium_4.jpg?v=1772532953",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 25430873505869,
          "position": 19,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM31 Mini Magnetic Power Bank with Stand 5000mAh 20W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_with_Stand_20W_5000mAh_Titanium_5.jpg?v=1772532953",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 25201398317133,
          "position": 20,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM31 Mini Magnetic Power Bank with Stand 5000mAh 20W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31Mini_Magnetic_Power_Bank_with_Stand_20W_5000mAh_5.jpg?v=1772532953",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        }
      ],
      "descriptionImages": [
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_with_Stand_20W_5000mAh_1_01.jpg?v=1749609941",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_with_Stand_20W_5000mAh_1_02.jpg?v=1749609941",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_with_Stand_20W_5000mAh_2.jpg?v=1749609940",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_with_Stand_20W_5000mAh_3.jpg?v=1749609939",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_with_Stand_20W_5000mAh_4.jpg?v=1749609939",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_with_Stand_20W_5000mAh_5.jpg?v=1749609938",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_with_Stand_20W_5000mAh_6.jpg?v=1749609939",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_with_Stand_20W_5000mAh_7.jpg?v=1749609938",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_with_Stand_20W_5000mAh_9.jpg?v=1749609941",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_with_Stand_20W_5000mAh_10.jpg?v=1749609941",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_with_Stand_20W_5000mAh_11.jpg?v=1749609941",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_with_Stand_20W_5000mAh_12.jpg?v=1749609941",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_with_Stand_20W_5000mAh_13.jpg?v=1749609940",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_with_Stand_20W_5000mAh_14.jpg?v=1749609939",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_with_Stand_20W_5000mAh_15.jpg?v=1749609940",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_with_Stand_20W_5000mAh_16.jpg?v=1749609939"
      ],
      "descriptionHeadings": [],
      "descriptionBullets": [],
      "descriptionButtons": [],
      "descriptionText": "",
      "publishedAt": "2025-06-10T02:57:13-07:00",
      "createdAt": "2025-06-10T02:57:13-07:00"
    }
  },
  {
    "categorySlug": "power-banks",
    "manufacturer": "Baseus",
    "model": "PicoGo Ultra-Slim Magnetic Power Bank 5000mAh 20W",
    "slug": "baseus-picogo-ultra-slim-magnetic-power-bank-5000mah",
    "summary": "PicoGo Ultra-Slim Magnetic Power Bank 5000mAh 20W from Baseus with 5,000 mAh advertised capacity, up to 20 W output, magnetic charging.",
    "summaryUk": "PicoGo Ultra-Slim Magnetic Power Bank 5000mAh 20W from Baseus with 5,000 mAh advertised capacity, up to 20 W output, magnetic charging.",
    "imagePath": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Magnetic_Power_Bank_5000mAh_Grey_1.jpg?v=1742897730",
    "priceCents": 3299,
    "productCode": "P1007680C813-00",
    "nominalVoltageV": 5,
    "capacityWh": 19,
    "continuousPowerW": 20,
    "peakPowerW": 20,
    "chemistry": "Lithium-ion",
    "communicationProtocols": "Magnetic wireless charging",
    "weightGrams": null,
    "sourceLabel": "Baseus product page (picogo-ultra-slim-magnetic-power-bank-5000mah)",
    "sourceLabelUk": "Baseus product page (picogo-ultra-slim-magnetic-power-bank-5000mah)",
    "sourceUrl": "https://www.baseus.com/products/picogo-ultra-slim-magnetic-power-bank-5000mah",
    "specifications": {
      "collectionListPosition": 3,
      "collectionUrl": "https://www.baseus.com/collections/charging?sort_by=manual&filter.p.product_type=Power+Banks",
      "collectionProductsJsonUrl": "https://www.baseus.com/collections/charging/products.json?limit=250",
      "sourceFetchedAt": "2026-06-16",
      "sourceProductId": 7451765276749,
      "handle": "picogo-ultra-slim-magnetic-power-bank-5000mah",
      "vendor": "Baseus US",
      "productType": "Power Banks",
      "tags": [
        "2026PD",
        "__label:BEST SELLER",
        "AM52 Campaign",
        "Amazon's Deals",
        "BWP",
        "Charging",
        "On the go",
        "Power Banks"
      ],
      "status": "In Stock",
      "availableForSale": true,
      "priceUsd": 32.99,
      "priceRangeUsd": {
        "min": 32.99,
        "max": 32.99,
        "varies": false
      },
      "compareAtPriceUsd": 49.99,
      "sourceCurrency": "USD",
      "typicalCapacityMah": 5000,
      "estimatedEnergyWh": 19,
      "maxOutputW": 20,
      "advertisedPowerW": 20,
      "advertisedCapacityMah": 5000,
      "inferredInputOutputNotes": [
        "Capacity and max output are inferred from Baseus product title and product-page text where not separately exposed by Shopify JSON.",
        "Energy is estimated from advertised mAh at 3.7V nominal lithium-cell voltage."
      ],
      "features": [
        "5,000 mAh advertised capacity",
        "Up to 20 W output",
        "Magnetic wireless charging support"
      ],
      "options": [
        {
          "name": "Color",
          "position": 1,
          "values": [
            "Grey",
            "Black",
            "Titanium",
            "Pink"
          ]
        }
      ],
      "variants": [
        {
          "id": 41663922864205,
          "title": "Grey",
          "sku": "P1007680C813-00",
          "barcode": "6932172690656",
          "available": true,
          "priceUsd": 32.99,
          "compareAtPriceUsd": 49.99,
          "weightGrams": 152407,
          "weightSource": "Shopify variant weight field",
          "weightPromotedToTopLevel": false,
          "options": [
            "Grey"
          ],
          "featuredImage": {
            "id": 33580630016077,
            "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Magnetic_Power_Bank_5000mAh_Grey6.jpg?v=1753856622",
            "alt": "Baseus PicoGo Ultra-Slim Magnetic Power Bank 5000mAh 20W Grey",
            "width": 1200,
            "height": 1200,
            "position": 3
          }
        },
        {
          "id": 41663922896973,
          "title": "Black",
          "sku": "P1007680C123-00",
          "barcode": "6932172690670",
          "available": true,
          "priceUsd": 32.99,
          "compareAtPriceUsd": 49.99,
          "weightGrams": 152407,
          "weightSource": "Shopify variant weight field",
          "weightPromotedToTopLevel": false,
          "options": [
            "Black"
          ],
          "featuredImage": {
            "id": 33580630245453,
            "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Magnetic_Power_Bank_5000mAh_Black_8_625b96f2-6c4c-44fc-af17-8cba049220ed.jpg?v=1753856622",
            "alt": "Baseus PicoGo Ultra-Slim Magnetic Power Bank 5000mAh 20W Black",
            "width": 1200,
            "height": 1200,
            "position": 5
          }
        },
        {
          "id": 41663922929741,
          "title": "Titanium",
          "sku": "P1007680C853-00",
          "barcode": "6932172690687",
          "available": true,
          "priceUsd": 32.99,
          "compareAtPriceUsd": 49.99,
          "weightGrams": 152407,
          "weightSource": "Shopify variant weight field",
          "weightPromotedToTopLevel": false,
          "options": [
            "Titanium"
          ],
          "featuredImage": {
            "id": 33580630147149,
            "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Magnetic_Power_Bank_5000mAh_Titanium_7_ec9713a1-c5ea-4a58-a20b-bf1ebc7489ee.jpg?v=1753857135",
            "alt": "Baseus PicoGo Ultra-Slim Magnetic Power Bank 5000mAh 20W Titanium",
            "width": 1200,
            "height": 1200,
            "position": 8
          }
        },
        {
          "id": 41663922962509,
          "title": "Pink",
          "sku": "P1007680C453-00",
          "barcode": "6932172690663",
          "available": true,
          "priceUsd": 32.99,
          "compareAtPriceUsd": 49.99,
          "weightGrams": 152407,
          "weightSource": "Shopify variant weight field",
          "weightPromotedToTopLevel": false,
          "options": [
            "Pink"
          ],
          "featuredImage": {
            "id": 33580630278221,
            "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Magnetic_Power_Bank_5000mAh_Pink_5_66c5a45a-ca62-4910-84f0-f31233c73bc6.jpg?v=1753857135",
            "alt": "Baseus PicoGo Ultra-Slim Magnetic Power Bank 5000mAh 20W Pink",
            "width": 1200,
            "height": 1200,
            "position": 11
          }
        }
      ],
      "productImages": [
        {
          "position": 1,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Magnetic_Power_Bank_5000mAh_Grey_1.jpg?v=1742897730"
        },
        {
          "position": 2,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Magnetic_Power_Bank_5000mAh_Grey_2.jpg?v=1742897753"
        },
        {
          "position": 3,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Magnetic_Power_Bank_5000mAh_Grey6.jpg?v=1753856622"
        },
        {
          "position": 4,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Magnetic_Power_Bank_5000mAh_Grey_3.jpg?v=1753856622"
        },
        {
          "position": 5,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Magnetic_Power_Bank_5000mAh_Black_8_625b96f2-6c4c-44fc-af17-8cba049220ed.jpg?v=1753856622"
        },
        {
          "position": 6,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Magnetic_Power_Bank_5000mAh_Black_9.jpg?v=1753857135"
        },
        {
          "position": 7,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Magnetic_Power_Bank_5000mAh_Black_2.jpg?v=1753857135"
        },
        {
          "position": 8,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Magnetic_Power_Bank_5000mAh_Titanium_7_ec9713a1-c5ea-4a58-a20b-bf1ebc7489ee.jpg?v=1753857135"
        },
        {
          "position": 9,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Magnetic_Power_Bank_5000mAh_Titanium_7.jpg?v=1753857135"
        },
        {
          "position": 10,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Magnetic_Power_Bank_5000mAh_Titanium_1.jpg?v=1753857135"
        },
        {
          "position": 11,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Magnetic_Power_Bank_5000mAh_Pink_5_66c5a45a-ca62-4910-84f0-f31233c73bc6.jpg?v=1753857135"
        },
        {
          "position": 12,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Magnetic_Power_Bank_5000mAh_Pink_4_91e52224-8272-4df2-8d2c-27acc22d991a.jpg?v=1753857135"
        },
        {
          "position": 13,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Magnetic_Power_Bank_5000mAh_Pink_5.jpg?v=1753857135"
        }
      ],
      "media": [
        {
          "id": 24886579986509,
          "position": 1,
          "mediaType": "image",
          "alt": "Baseus PicoGo Ultra-Slim Magnetic Portable Power Charger 5000mAh Grey",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Magnetic_Power_Bank_5000mAh_Grey_1.jpg?v=1742897730",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 24886580248653,
          "position": 2,
          "mediaType": "image",
          "alt": "Baseus PicoGo Ultra-Slim Magnetic Portable Power Charger 5000mAh",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Magnetic_Power_Bank_5000mAh_Grey_2.jpg?v=1742897753",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 25445023514701,
          "position": 3,
          "mediaType": "image",
          "alt": "Baseus PicoGo Ultra-Slim Magnetic Power Bank 5000mAh 20W Grey",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Magnetic_Power_Bank_5000mAh_Grey6.jpg?v=1753856622",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 24886580281421,
          "position": 4,
          "mediaType": "image",
          "alt": "Baseus PicoGo Ultra-Slim Magnetic Portable Power Charger 5000mAh",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Magnetic_Power_Bank_5000mAh_Grey_3.jpg?v=1753856622",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 25445023744077,
          "position": 5,
          "mediaType": "image",
          "alt": "Baseus PicoGo Ultra-Slim Magnetic Power Bank 5000mAh 20W Black",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Magnetic_Power_Bank_5000mAh_Black_8_625b96f2-6c4c-44fc-af17-8cba049220ed.jpg?v=1753856622",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 24943308046413,
          "position": 6,
          "mediaType": "image",
          "alt": "Baseus PicoGo Ultra-Slim Magnetic Portable Power Charger 5000mAh Black",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Magnetic_Power_Bank_5000mAh_Black_9.jpg?v=1753857135",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 25445023547469,
          "position": 7,
          "mediaType": "image",
          "alt": "Baseus PicoGo Ultra-Slim Magnetic Power Bank 5000mAh 20W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Magnetic_Power_Bank_5000mAh_Black_2.jpg?v=1753857135",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 25445023645773,
          "position": 8,
          "mediaType": "image",
          "alt": "Baseus PicoGo Ultra-Slim Magnetic Power Bank 5000mAh 20W Titanium",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Magnetic_Power_Bank_5000mAh_Titanium_7_ec9713a1-c5ea-4a58-a20b-bf1ebc7489ee.jpg?v=1753857135",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 24943307980877,
          "position": 9,
          "mediaType": "image",
          "alt": "Baseus PicoGo Ultra-Slim Magnetic Portable Power Charger 5000mAh Titanium",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Magnetic_Power_Bank_5000mAh_Titanium_7.jpg?v=1753857135",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 25445023580237,
          "position": 10,
          "mediaType": "image",
          "alt": "Baseus PicoGo Ultra-Slim Magnetic Power Bank 5000mAh 20W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Magnetic_Power_Bank_5000mAh_Titanium_1.jpg?v=1753857135",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 25445023776845,
          "position": 11,
          "mediaType": "image",
          "alt": "Baseus PicoGo Ultra-Slim Magnetic Power Bank 5000mAh 20W Pink",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Magnetic_Power_Bank_5000mAh_Pink_5_66c5a45a-ca62-4910-84f0-f31233c73bc6.jpg?v=1753857135",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 25445023613005,
          "position": 12,
          "mediaType": "image",
          "alt": "Baseus PicoGo Ultra-Slim Magnetic Power Bank 5000mAh 20W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Magnetic_Power_Bank_5000mAh_Pink_4_91e52224-8272-4df2-8d2c-27acc22d991a.jpg?v=1753857135",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 24943307915341,
          "position": 13,
          "mediaType": "image",
          "alt": "Baseus PicoGo Ultra-Slim Magnetic Portable Power Charger 5000mAh Pink",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Magnetic_Power_Bank_5000mAh_Pink_5.jpg?v=1753857135",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        }
      ],
      "descriptionImages": [
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Magnetic_Power_Bank_5000mAh_A_KV.jpg?v=1743560308",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Magnetic_Power_Bank_5000mAh_A_2.jpg?v=1743560306",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Magnetic_Power_Bank_5000mAh_A_3.jpg?v=1743560305",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Magnetic_Power_Bank_5000mAh_A_4.jpg?v=1743560305",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Magnetic_Power_Bank_5000mAh_A_6.jpg?v=1743560306",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Magnetic_Power_Bank_5000mAh_A_8.jpg?v=1743560306",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Magnetic_Power_Bank_5000mAh_A_5.jpg?v=1743560307",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Magnetic_Power_Bank_5000mAh_A_7.jpg?v=1743560307",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Magnetic_Power_Bank_5000mAh_A_9.jpg?v=1743560305",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_Ultra-Slim_Magnetic_Power_Bank_5000mAh_A_10.jpg?v=1743560306"
      ],
      "descriptionHeadings": [
        "Sleek Power in Your Pocket, Charging Your Life On-the-Go!"
      ],
      "descriptionBullets": [],
      "descriptionButtons": [
        "Slim. Light. Portable",
        "Premium Materials",
        "Thoughtfully Details",
        "Strong Magnetic Grip",
        "Auto-Grade Battery Health",
        "Pass-through Charging",
        "Power Up",
        "Widely Compatible",
        "2-Year Warranty"
      ],
      "descriptionText": "Sleek Power in Your Pocket, Charging Your Life On-the-Go! Slim. Light. Portable Premium Materials Thoughtfully Details Strong Magnetic Grip Auto-Grade Battery Health Pass-through Charging Power Up Widely Compatible 2-Year Warranty",
      "publishedAt": "2025-03-25T03:36:12-07:00",
      "createdAt": "2025-03-25T01:36:38-07:00"
    }
  },
  {
    "categorySlug": "power-banks",
    "manufacturer": "Baseus",
    "model": "PicoGo AM61 Qi2.2 Magnetic Power Bank 10000mAh 45W",
    "slug": "baseus-picogo-am61-qi2-2-magnetic-power-bank-10000mah-45w",
    "summary": "PicoGo AM61 Qi2.2 Magnetic Power Bank 10000mAh 45W from Baseus with 10,000 mAh advertised capacity, up to 45 W output, Qi2.2 magnetic charging.",
    "summaryUk": "PicoGo AM61 Qi2.2 Magnetic Power Bank 10000mAh 45W from Baseus with 10,000 mAh advertised capacity, up to 45 W output, Qi2.2 magnetic charging.",
    "imagePath": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM61_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_2.jpg?v=1758263649",
    "priceCents": 6999,
    "productCode": "E0028V00",
    "nominalVoltageV": 5,
    "capacityWh": 37,
    "continuousPowerW": 45,
    "peakPowerW": 45,
    "chemistry": "Lithium-ion",
    "communicationProtocols": "Qi2.2, Magnetic wireless charging",
    "weightGrams": null,
    "sourceLabel": "Baseus product page (picogo-am61-qi2-2-magnetic-power-bank-10000mah-45w)",
    "sourceLabelUk": "Baseus product page (picogo-am61-qi2-2-magnetic-power-bank-10000mah-45w)",
    "sourceUrl": "https://www.baseus.com/products/picogo-am61-qi2-2-magnetic-power-bank-10000mah-45w",
    "specifications": {
      "collectionListPosition": 4,
      "collectionUrl": "https://www.baseus.com/collections/charging?sort_by=manual&filter.p.product_type=Power+Banks",
      "collectionProductsJsonUrl": "https://www.baseus.com/collections/charging/products.json?limit=250",
      "sourceFetchedAt": "2026-06-16",
      "sourceProductId": 7569566728269,
      "handle": "picogo-am61-qi2-2-magnetic-power-bank-10000mah-45w",
      "vendor": "Baseus",
      "productType": "Power Banks",
      "tags": [
        "BF20",
        "BWP",
        "Charging",
        "On the go",
        "Power Banks"
      ],
      "status": "In Stock",
      "availableForSale": true,
      "priceUsd": 69.99,
      "priceRangeUsd": {
        "min": 69.99,
        "max": 69.99,
        "varies": false
      },
      "compareAtPriceUsd": 69.99,
      "sourceCurrency": "USD",
      "typicalCapacityMah": 10000,
      "estimatedEnergyWh": 37,
      "maxOutputW": 45,
      "advertisedPowerW": 45,
      "advertisedCapacityMah": 10000,
      "inferredInputOutputNotes": [
        "Capacity and max output are inferred from Baseus product title and product-page text where not separately exposed by Shopify JSON.",
        "Energy is estimated from advertised mAh at 3.7V nominal lithium-cell voltage."
      ],
      "features": [
        "10,000 mAh advertised capacity",
        "Up to 45 W output",
        "Qi2.2 magnetic wireless charging"
      ],
      "options": [
        {
          "name": "Title",
          "position": 1,
          "values": [
            "Default Title"
          ]
        }
      ],
      "variants": [
        {
          "id": 42119610138701,
          "title": "Default Title",
          "sku": "E0028V00",
          "barcode": "6953156210929",
          "available": true,
          "priceUsd": 69.99,
          "compareAtPriceUsd": 69.99,
          "weightGrams": 127006,
          "weightSource": "Shopify variant weight field",
          "weightPromotedToTopLevel": false,
          "options": [
            "Default Title"
          ],
          "featuredImage": null
        }
      ],
      "productImages": [
        {
          "position": 1,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM61_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_2.jpg?v=1758263649"
        },
        {
          "position": 2,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM61_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_3.jpg?v=1758263649"
        },
        {
          "position": 3,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM61_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_4.jpg?v=1758263649"
        },
        {
          "position": 4,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM61_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_5.jpg?v=1758263649"
        },
        {
          "position": 5,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM61_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_6.jpg?v=1758263649"
        },
        {
          "position": 6,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM61_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_7.jpg?v=1758263649"
        },
        {
          "position": 7,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM61_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_8.jpg?v=1758263649"
        }
      ],
      "media": [
        {
          "id": 25659019886669,
          "position": 1,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM61 Qi2.2 Magnetic Power Bank 10000mAh 45W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM61_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_2.jpg?v=1758263649",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 25659019919437,
          "position": 2,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM61 Qi2.2 Magnetic Power Bank 10000mAh 45W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM61_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_3.jpg?v=1758263649",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 25659019952205,
          "position": 3,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM61 Qi2.2 Magnetic Power Bank 10000mAh 45W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM61_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_4.jpg?v=1758263649",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 25659019984973,
          "position": 4,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM61 Qi2.2 Magnetic Power Bank 10000mAh 45W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM61_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_5.jpg?v=1758263649",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 25659020017741,
          "position": 5,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM61 Qi2.2 Magnetic Power Bank 10000mAh 45W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM61_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_6.jpg?v=1758263649",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 25659020050509,
          "position": 6,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM61 Qi2.2 Magnetic Power Bank 10000mAh 45W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM61_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_7.jpg?v=1758263649",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 25659020083277,
          "position": 7,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM61 Qi2.2 Magnetic Power Bank 10000mAh 45W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM61_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_8.jpg?v=1758263649",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        }
      ],
      "descriptionImages": [
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM61_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_A_1.jpg?v=1758263733",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM61_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_A_2.jpg?v=1758263733",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM61_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_A_3.jpg?v=1758263732",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM61_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_A_4-1.jpg?v=1758263732",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM61_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_A_4-2.jpg?v=1758263732",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM61_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_A_4-3.jpg?v=1758263732",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM61_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_A_5-1.jpg?v=1758263733",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM61_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_A_5-2.jpg?v=1758263733",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM61_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_A_5-3.jpg?v=1758263733",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM61_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_A_6-1.jpg?v=1758263732",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM61_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_A_6-2.jpg?v=1758263732",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM61_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_A_6-3.jpg?v=1758263732"
      ],
      "descriptionHeadings": [
        "Snap On. Power Up. Go Anywhere."
      ],
      "descriptionBullets": [],
      "descriptionButtons": [
        "Fast. Universal. Empowered.",
        "Snap. Stay Charged",
        "Charge Cool. Charge Safe.",
        "Faster Qi2 Charging",
        "Super Fast On-The-Go",
        "3-in-1",
        "Charge Anywhere. Anytime.",
        "Widely Compatible",
        "Specifications"
      ],
      "descriptionText": "Snap On. Power Up. Go Anywhere. The Baseus PicoGo AM61 redefines portable charging with Qi2.2 magnetic wireless technology and 45W wired fast charging. At just 10,000mAh, it's compact enough for your pocket yet powerful enough to keep all your devices running — wherever the day takes you. Fast. Universal. Empowered. Snap. Stay Charged Charge Cool. Charge Safe. Magnetically attaches to your iPhone in seconds — no cables, no hassle, just seamless Qi2.2 wireless power. Faster Qi2 Charging Super Fast On-The-Go 3-in-1 From the coffee shop to the boarding gate — the AM61 keeps you powered through every moment of your day. Charge Anywhere. Anytime. Widely Compatible Specifications",
      "publishedAt": "2025-09-18T23:34:30-07:00",
      "createdAt": "2025-09-18T23:34:25-07:00"
    }
  },
  {
    "categorySlug": "power-banks",
    "manufacturer": "Baseus",
    "model": "PicoGo AM52 Qi2.2 Magnetic Power Bank 10000mAh 25W",
    "slug": "baseus-picogo-am52-qi2-2-magnetic-power-bank-10000mah-45w",
    "summary": "PicoGo AM52 Qi2.2 Magnetic Power Bank 10000mAh 25W from Baseus with 10,000 mAh advertised capacity, up to 45 W output, Qi2.2 magnetic charging.",
    "summaryUk": "PicoGo AM52 Qi2.2 Magnetic Power Bank 10000mAh 25W from Baseus with 10,000 mAh advertised capacity, up to 45 W output, Qi2.2 magnetic charging.",
    "imagePath": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM52_Qi2.2_Magnetic_Power_Bank_10000mAh_45W1.png?v=1773295337",
    "priceCents": 5999,
    "productCode": "E0028Z00",
    "nominalVoltageV": 5,
    "capacityWh": 37,
    "continuousPowerW": 45,
    "peakPowerW": 45,
    "chemistry": "Lithium-ion",
    "communicationProtocols": "USB-C, Qi2.2, Magnetic wireless charging",
    "weightGrams": 195,
    "sourceLabel": "Baseus product page (picogo-am52-qi2-2-magnetic-power-bank-10000mah-45w)",
    "sourceLabelUk": "Baseus product page (picogo-am52-qi2-2-magnetic-power-bank-10000mah-45w)",
    "sourceUrl": "https://www.baseus.com/products/picogo-am52-qi2-2-magnetic-power-bank-10000mah-45w",
    "specifications": {
      "collectionListPosition": 5,
      "collectionUrl": "https://www.baseus.com/collections/charging?sort_by=manual&filter.p.product_type=Power+Banks",
      "collectionProductsJsonUrl": "https://www.baseus.com/collections/charging/products.json?limit=250",
      "sourceFetchedAt": "2026-06-16",
      "sourceProductId": 7688688304205,
      "handle": "picogo-am52-qi2-2-magnetic-power-bank-10000mah-45w",
      "vendor": "Baseus",
      "productType": "Power Banks",
      "tags": [
        "2026PD",
        "AM52 Campaign",
        "Charging",
        "On the go",
        "Power Banks"
      ],
      "status": "In Stock",
      "availableForSale": true,
      "priceUsd": 59.99,
      "priceRangeUsd": {
        "min": 59.99,
        "max": 59.99,
        "varies": false
      },
      "compareAtPriceUsd": 79.99,
      "sourceCurrency": "USD",
      "typicalCapacityMah": 10000,
      "estimatedEnergyWh": 37,
      "maxOutputW": 45,
      "advertisedPowerW": 45,
      "advertisedCapacityMah": 10000,
      "inferredInputOutputNotes": [
        "Capacity and max output are inferred from Baseus product title and product-page text where not separately exposed by Shopify JSON.",
        "Energy is estimated from advertised mAh at 3.7V nominal lithium-cell voltage."
      ],
      "features": [
        "10,000 mAh advertised capacity",
        "Up to 45 W output",
        "Qi2.2 magnetic wireless charging"
      ],
      "options": [
        {
          "name": "Title",
          "position": 1,
          "values": [
            "Default Title"
          ]
        }
      ],
      "variants": [
        {
          "id": 42662908952653,
          "title": "Default Title",
          "sku": "E0028Z00",
          "barcode": "6942521202621",
          "available": true,
          "priceUsd": 59.99,
          "compareAtPriceUsd": 79.99,
          "weightGrams": 195,
          "weightSource": "Shopify variant weight field",
          "weightPromotedToTopLevel": true,
          "options": [
            "Default Title"
          ],
          "featuredImage": null
        }
      ],
      "productImages": [
        {
          "position": 1,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM52_Qi2.2_Magnetic_Power_Bank_10000mAh_45W1.png?v=1773295337"
        },
        {
          "position": 2,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM52_Qi2.2_Magnetic_Power_Bank_10000mAh_45W2.png?v=1773295337"
        },
        {
          "position": 3,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM52_Qi2.2_Magnetic_Power_Bank_10000mAh_45W3.png?v=1773295337"
        },
        {
          "position": 4,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM52_Qi2.2_Magnetic_Power_Bank_10000mAh_45W4.png?v=1773295337"
        },
        {
          "position": 5,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM52_Qi2.2_Magnetic_Power_Bank_10000mAh_45W5.png?v=1773295337"
        },
        {
          "position": 6,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM52_Qi2.2_Magnetic_Power_Bank_10000mAh_45W6_87518126-bd76-476e-90fc-accd5b746334.jpg?v=1773295337"
        },
        {
          "position": 7,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM52_Qi2.2_Magnetic_Power_Bank_10000mAh_45W7_7f27e182-0b33-4fd3-953d-079586aaaa83.jpg?v=1773295336"
        },
        {
          "position": 8,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM52_Qi2.2_Magnetic_Power_Bank_10000mAh_45W8.jpg?v=1773295336"
        },
        {
          "position": 9,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM52_Qi2.2_Magnetic_Power_Bank_10000mAh_45W9.jpg?v=1773295337"
        },
        {
          "position": 10,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM52_Qi2.2_Magnetic_Power_Bank_10000mAh_45W10_98bd6168-9066-46a7-8faf-21b187126d79.jpg?v=1773295336"
        },
        {
          "position": 11,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM52_Qi2.2_Magnetic_Power_Bank_10000mAh_45W11.jpg?v=1773295337"
        },
        {
          "position": 12,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM52_Qi2.2_Magnetic_Power_Bank_10000mAh_45W12_8abdca08-d9d7-45b6-96c1-bb51395bcbe9.jpg?v=1773295336"
        },
        {
          "position": 13,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM52_Qi2.2_Magnetic_Power_Bank_10000mAh_45W13_deef845a-e2b3-48f1-ad8f-1f763cba00c9.jpg?v=1773295336"
        }
      ],
      "media": [
        {
          "id": 26617511608397,
          "position": 1,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM52 Qi2.2 Magnetic Power Bank 10000mAh 25W BOA",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM52_Qi2.2_Magnetic_Power_Bank_10000mAh_45W1.png?v=1773295337",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 26617511641165,
          "position": 2,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM52 Qi2.2 Magnetic Power Bank 10000mAh 25W BOA",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM52_Qi2.2_Magnetic_Power_Bank_10000mAh_45W2.png?v=1773295337",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 26617511673933,
          "position": 3,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM52 Qi2.2 Magnetic Power Bank 10000mAh 25W BOA",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM52_Qi2.2_Magnetic_Power_Bank_10000mAh_45W3.png?v=1773295337",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 26617511706701,
          "position": 4,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM52 Qi2.2 Magnetic Power Bank 10000mAh 25W BOA",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM52_Qi2.2_Magnetic_Power_Bank_10000mAh_45W4.png?v=1773295337",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 26617511739469,
          "position": 5,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM52 Qi2.2 Magnetic Power Bank 10000mAh 25W BOA",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM52_Qi2.2_Magnetic_Power_Bank_10000mAh_45W5.png?v=1773295337",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 26617511772237,
          "position": 6,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM52 Qi2.2 Magnetic Power Bank 10000mAh 25W BOA",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM52_Qi2.2_Magnetic_Power_Bank_10000mAh_45W6_87518126-bd76-476e-90fc-accd5b746334.jpg?v=1773295337",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 26617511805005,
          "position": 7,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM52 Qi2.2 Magnetic Power Bank 10000mAh 25W BOA",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM52_Qi2.2_Magnetic_Power_Bank_10000mAh_45W7_7f27e182-0b33-4fd3-953d-079586aaaa83.jpg?v=1773295336",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 26617511837773,
          "position": 8,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM52 Qi2.2 Magnetic Power Bank 10000mAh 25W BOA",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM52_Qi2.2_Magnetic_Power_Bank_10000mAh_45W8.jpg?v=1773295336",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 26617511870541,
          "position": 9,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM52 Qi2.2 Magnetic Power Bank 10000mAh 25W BOA",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM52_Qi2.2_Magnetic_Power_Bank_10000mAh_45W9.jpg?v=1773295337",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 26617511903309,
          "position": 10,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM52 Qi2.2 Magnetic Power Bank 10000mAh 25W BOA",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM52_Qi2.2_Magnetic_Power_Bank_10000mAh_45W10_98bd6168-9066-46a7-8faf-21b187126d79.jpg?v=1773295336",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 26617511936077,
          "position": 11,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM52 Qi2.2 Magnetic Power Bank 10000mAh 25W BOA",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM52_Qi2.2_Magnetic_Power_Bank_10000mAh_45W11.jpg?v=1773295337",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 26617511968845,
          "position": 12,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM52 Qi2.2 Magnetic Power Bank 10000mAh 25W BOA",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM52_Qi2.2_Magnetic_Power_Bank_10000mAh_45W12_8abdca08-d9d7-45b6-96c1-bb51395bcbe9.jpg?v=1773295336",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 26617512001613,
          "position": 13,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM52 Qi2.2 Magnetic Power Bank 10000mAh 25W BOA",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM52_Qi2.2_Magnetic_Power_Bank_10000mAh_45W13_deef845a-e2b3-48f1-ad8f-1f763cba00c9.jpg?v=1773295336",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        }
      ],
      "descriptionImages": [
        "https://cdn.shopify.com/s/files/1/0770/7151/5968/files/Baseus_PicoGo_AM52_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_A_1.jpg?v=1769737631",
        "https://cdn.shopify.com/s/files/1/0770/7151/5968/files/Baseus_PicoGo_AM52_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_A_2.jpg?v=1769737630",
        "https://cdn.shopify.com/s/files/1/0770/7151/5968/files/Baseus_PicoGo_AM52_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_A_3.jpg?v=1769737632",
        "https://cdn.shopify.com/s/files/1/0770/7151/5968/files/Baseus_PicoGo_AM52_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_A_4.jpg?v=1769737631",
        "https://cdn.shopify.com/s/files/1/0770/7151/5968/files/Baseus_PicoGo_AM52_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_A_5_1.jpg?v=1769737632",
        "https://cdn.shopify.com/s/files/1/0770/7151/5968/files/Baseus_PicoGo_AM52_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_A_5_2.jpg?v=1769737635",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM52_Qi2.2_Magnetic_Power_Bank_with_Built-in_Cable_10000mAh_45W_5_3.jpg?v=1772703892",
        "https://cdn.shopify.com/s/files/1/0770/7151/5968/files/Baseus_PicoGo_AM52_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_A_5_4.jpg?v=1769737633",
        "https://cdn.shopify.com/s/files/1/0770/7151/5968/files/Baseus_PicoGo_AM52_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_A_5_5.jpg?v=1769737632",
        "https://cdn.shopify.com/s/files/1/0770/7151/5968/files/Baseus_PicoGo_AM52_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_A_6_1.jpg?v=1769737637",
        "https://cdn.shopify.com/s/files/1/0770/7151/5968/files/Baseus_PicoGo_AM52_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_A_6_2.jpg?v=1769737638",
        "https://cdn.shopify.com/s/files/1/0770/7151/5968/files/Baseus_PicoGo_AM52_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_A_6_3.jpg?v=1769737635",
        "https://cdn.shopify.com/s/files/1/0770/7151/5968/files/Baseus_PicoGo_AM52_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_A_6_4.jpg?v=1769737635",
        "https://cdn.shopify.com/s/files/1/0770/7151/5968/files/Baseus_PicoGo_AM52_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_A_6_5.jpg?v=1769737631"
      ],
      "descriptionHeadings": [
        "Magnetic. Wireless. Effortlessly Powerful.",
        "Baseus PicoGo AM52 Qi2.2 Magnetic Power Bank 10000mAh 45W"
      ],
      "descriptionBullets": [],
      "descriptionButtons": [
        "25W Qi2.2 Wireless Charging",
        "45W USB-C Wired Charging",
        "30W Fast Recharging",
        "Cooler & Safer",
        "Precision Craftsmanship",
        "Compact & Portable",
        "Travel Companion",
        "Daily Commute",
        "Work Booster",
        "Universal Compatibility"
      ],
      "descriptionText": "Baseus PicoGo AM52 Qi2.2 Magnetic Power Bank 10000mAh 45W Magnetic. Wireless. Effortlessly Powerful. The Baseus PicoGo AM52 delivers 25W Qi2.2 magnetic wireless charging and 45W wired output in a slim, pocket-sized form. With precision-engineered magnets, triple cooling technology, and universal compatibility, it's the cleanest way to stay charged — no cables required. 25W Qi2.2 Wireless Charging 45W USB-C Wired Charging 30W Fast Recharging Cooler & Safer Precision Craftsmanship Just snap it on — strong magnets lock in instantly for a secure, wobble-free wireless charge every time. Compact & Portable Travel Companion Daily Commute Work Booster Universal Compatibility From morning commute to late-night work sessions — the AM52 fits your life and keeps up with your pace.",
      "publishedAt": "2026-02-09T19:27:28-08:00",
      "createdAt": "2026-02-09T19:27:28-08:00"
    }
  },
  {
    "categorySlug": "power-banks",
    "manufacturer": "Baseus",
    "model": "EnerFill FM12 Qi2 Magnetic Power Bank 10000mAh 22.5W",
    "slug": "baseus-enerfill-fm12-qi2-magnetic-power-bank-22-5w-10000mah",
    "summary": "EnerFill FM12 Qi2 Magnetic Power Bank 10000mAh 22.5W from Baseus with 10,000 mAh advertised capacity, up to 22.5 W output, Qi2 magnetic charging.",
    "summaryUk": "EnerFill FM12 Qi2 Magnetic Power Bank 10000mAh 22.5W from Baseus with 10,000 mAh advertised capacity, up to 22.5 W output, Qi2 magnetic charging.",
    "imagePath": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FM12_Qi2_Magnetic_Power_Bank_22.5W_10000mAh_1.jpg?v=1752588951",
    "priceCents": 3999,
    "productCode": "E0028500",
    "nominalVoltageV": 5,
    "capacityWh": 37,
    "continuousPowerW": 23,
    "peakPowerW": 23,
    "chemistry": "Lithium-ion",
    "communicationProtocols": "Qi2, Magnetic wireless charging",
    "weightGrams": null,
    "sourceLabel": "Baseus product page (enerfill-fm12-qi2-magnetic-power-bank-22-5w-10000mah)",
    "sourceLabelUk": "Baseus product page (enerfill-fm12-qi2-magnetic-power-bank-22-5w-10000mah)",
    "sourceUrl": "https://www.baseus.com/products/enerfill-fm12-qi2-magnetic-power-bank-22-5w-10000mah",
    "specifications": {
      "collectionListPosition": 6,
      "collectionUrl": "https://www.baseus.com/collections/charging?sort_by=manual&filter.p.product_type=Power+Banks",
      "collectionProductsJsonUrl": "https://www.baseus.com/collections/charging/products.json?limit=250",
      "sourceFetchedAt": "2026-06-16",
      "sourceProductId": 7518120149069,
      "handle": "enerfill-fm12-qi2-magnetic-power-bank-22-5w-10000mah",
      "vendor": "Baseus US",
      "productType": "Power Banks",
      "tags": [
        "2025PD",
        "2026PD",
        "BF40",
        "Charging",
        "Gifts for Mom",
        "On the go",
        "Power Banks"
      ],
      "status": "In Stock",
      "availableForSale": true,
      "priceUsd": 39.99,
      "priceRangeUsd": {
        "min": 39.99,
        "max": 49.99,
        "varies": true
      },
      "compareAtPriceUsd": 69.99,
      "sourceCurrency": "USD",
      "typicalCapacityMah": 10000,
      "estimatedEnergyWh": 37,
      "maxOutputW": 22.5,
      "advertisedPowerW": 22.5,
      "advertisedCapacityMah": 10000,
      "inferredInputOutputNotes": [
        "Capacity and max output are inferred from Baseus product title and product-page text where not separately exposed by Shopify JSON.",
        "Energy is estimated from advertised mAh at 3.7V nominal lithium-cell voltage."
      ],
      "features": [
        "10,000 mAh advertised capacity",
        "Up to 22.5 W output",
        "Qi2 magnetic wireless charging"
      ],
      "options": [
        {
          "name": "Color",
          "position": 1,
          "values": [
            "Black",
            "White",
            "Pink"
          ]
        }
      ],
      "variants": [
        {
          "id": 42139174731853,
          "title": "Black",
          "sku": "E0028500",
          "barcode": "6932172699062",
          "available": true,
          "priceUsd": 49.99,
          "compareAtPriceUsd": 69.99,
          "weightGrams": 115212,
          "weightSource": "Shopify variant weight field",
          "weightPromotedToTopLevel": false,
          "options": [
            "Black"
          ],
          "featuredImage": {
            "id": 33426494947405,
            "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FM12_Qi2_Magnetic_Power_Bank_22.5W_10000mAh_1.jpg?v=1752588951",
            "alt": "Baseus EnerFill FM12 Qi2 Magnetic Power Bank 10000mAh 22.5W Black",
            "width": 1200,
            "height": 1200,
            "position": 1
          }
        },
        {
          "id": 42139174764621,
          "title": "White",
          "sku": "E0028501",
          "barcode": "6932172699086",
          "available": true,
          "priceUsd": 39.99,
          "compareAtPriceUsd": 69.99,
          "weightGrams": 115212,
          "weightSource": "Shopify variant weight field",
          "weightPromotedToTopLevel": false,
          "options": [
            "White"
          ],
          "featuredImage": {
            "id": 33942270378061,
            "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FM12_Qi2_Magnetic_Power_Bank_22.5W_10000mAh_White_1.jpg?v=1759137513",
            "alt": "Baseus EnerFill FM12 Qi2 Magnetic Power Bank 10000mAh 22.5W White",
            "width": 1200,
            "height": 1200,
            "position": 7
          }
        },
        {
          "id": 42139174797389,
          "title": "Pink",
          "sku": "E0028502",
          "barcode": "6932172699079",
          "available": true,
          "priceUsd": 39.99,
          "compareAtPriceUsd": 69.99,
          "weightGrams": 115212,
          "weightSource": "Shopify variant weight field",
          "weightPromotedToTopLevel": false,
          "options": [
            "Pink"
          ],
          "featuredImage": {
            "id": 33942270443597,
            "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FM12_Qi2_Magnetic_Power_Bank_22.5W_10000mAh_Pink_1.jpg?v=1759137513",
            "alt": "Baseus EnerFill FM12 Qi2 Magnetic Power Bank 10000mAh 22.5W Pink",
            "width": 1200,
            "height": 1200,
            "position": 4
          }
        }
      ],
      "productImages": [
        {
          "position": 1,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FM12_Qi2_Magnetic_Power_Bank_22.5W_10000mAh_1.jpg?v=1752588951"
        },
        {
          "position": 2,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FM12_Qi2_Magnetic_Power_Bank_22.5W_10000mAh_3.jpg?v=1752588951"
        },
        {
          "position": 3,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FM12_Qi2_Magnetic_Power_Bank_22.5W_10000mAh_2.jpg?v=1751522717"
        },
        {
          "position": 4,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FM12_Qi2_Magnetic_Power_Bank_22.5W_10000mAh_Pink_1.jpg?v=1759137513"
        },
        {
          "position": 5,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FM12_Qi2_Magnetic_Power_Bank_22.5W_10000mAh_Pink_2.jpg?v=1759137513"
        },
        {
          "position": 6,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FM12_Qi2_Magnetic_Power_Bank_22.5W_10000mAh_Pink_3.jpg?v=1759137513"
        },
        {
          "position": 7,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FM12_Qi2_Magnetic_Power_Bank_22.5W_10000mAh_White_1.jpg?v=1759137513"
        },
        {
          "position": 8,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FM12_Qi2_Magnetic_Power_Bank_22.5W_10000mAh_White_2.jpg?v=1759137513"
        },
        {
          "position": 9,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FM12_Qi2_Magnetic_Power_Bank_22.5W_10000mAh_White_3.jpg?v=1759137513"
        }
      ],
      "media": [
        {
          "id": 25346885582925,
          "position": 1,
          "mediaType": "image",
          "alt": "Baseus EnerFill FM12 Qi2 Magnetic Power Bank 10000mAh 22.5W Black",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FM12_Qi2_Magnetic_Power_Bank_22.5W_10000mAh_1.jpg?v=1752588951",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 25346885550157,
          "position": 2,
          "mediaType": "image",
          "alt": "Baseus EnerFill FM12 Qi2 Magnetic Power Bank 10000mAh 22.5W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FM12_Qi2_Magnetic_Power_Bank_22.5W_10000mAh_3.jpg?v=1752588951",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 25346885615693,
          "position": 3,
          "mediaType": "image",
          "alt": "Baseus EnerFill FM12 Qi2 Magnetic Power Bank 10000mAh 22.5W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FM12_Qi2_Magnetic_Power_Bank_22.5W_10000mAh_2.jpg?v=1751522717",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 25703847985229,
          "position": 4,
          "mediaType": "image",
          "alt": "Baseus EnerFill FM12 Qi2 Magnetic Power Bank 10000mAh 22.5W Pink",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FM12_Qi2_Magnetic_Power_Bank_22.5W_10000mAh_Pink_1.jpg?v=1759137513",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 25703847952461,
          "position": 5,
          "mediaType": "image",
          "alt": "Baseus EnerFill FM12 Qi2 Magnetic Power Bank 10000mAh 22.5W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FM12_Qi2_Magnetic_Power_Bank_22.5W_10000mAh_Pink_2.jpg?v=1759137513",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 25703848083533,
          "position": 6,
          "mediaType": "image",
          "alt": "Baseus EnerFill FM12 Qi2 Magnetic Power Bank 10000mAh 22.5W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FM12_Qi2_Magnetic_Power_Bank_22.5W_10000mAh_Pink_3.jpg?v=1759137513",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 25703847919693,
          "position": 7,
          "mediaType": "image",
          "alt": "Baseus EnerFill FM12 Qi2 Magnetic Power Bank 10000mAh 22.5W White",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FM12_Qi2_Magnetic_Power_Bank_22.5W_10000mAh_White_1.jpg?v=1759137513",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 25703848017997,
          "position": 8,
          "mediaType": "image",
          "alt": "Baseus EnerFill FM12 Qi2 Magnetic Power Bank 10000mAh 22.5W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FM12_Qi2_Magnetic_Power_Bank_22.5W_10000mAh_White_2.jpg?v=1759137513",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 25703848050765,
          "position": 9,
          "mediaType": "image",
          "alt": "Baseus EnerFill FM12 Qi2 Magnetic Power Bank 10000mAh 22.5W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FM12_Qi2_Magnetic_Power_Bank_22.5W_10000mAh_White_3.jpg?v=1759137513",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        }
      ],
      "descriptionImages": [
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FM12_Qi2_Magnetic_Power_Bank_22.5W_10000mAh_01.jpg?v=1751522878",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FM12_Qi2_Magnetic_Power_Bank_22.5W_10000mAh_02.jpg?v=1751522880",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FM12_Qi2_Magnetic_Power_Bank_22.5W_10000mAh_03.jpg?v=1751522880",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FM12_Qi2_Magnetic_Power_Bank_22.5W_10000mAh_04.jpg?v=1751522880",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FM12_Qi2_Magnetic_Power_Bank_22.5W_10000mAh_05.jpg?v=1751522880",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FM12_Qi2_Magnetic_Power_Bank_22.5W_10000mAh_06.jpg?v=1751522879",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FM12_Qi2_Magnetic_Power_Bank_22.5W_10000mAh_07.jpg?v=1751522880",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FM12_Qi2_Magnetic_Power_Bank_22.5W_10000mAh_08.jpg?v=1751522880",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FM12_Qi2_Magnetic_Power_Bank_22.5W_10000mAh_09.jpg?v=1751522879",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FM12_Qi2_Magnetic_Power_Bank_22.5W_10000mAh_010.jpg?v=1751522879",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FM12_Qi2_Magnetic_Power_Bank_22.5W_10000mAh_011.jpg?v=1751522880",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FM12_Qi2_Magnetic_Power_Bank_22.5W_10000mAh_012.jpg?v=1751522879"
      ],
      "descriptionHeadings": [],
      "descriptionBullets": [],
      "descriptionButtons": [],
      "descriptionText": "",
      "publishedAt": "2025-07-02T23:09:56-07:00",
      "createdAt": "2025-07-02T23:09:54-07:00"
    }
  },
  {
    "categorySlug": "power-banks",
    "manufacturer": "Baseus",
    "model": "EnerFill FC41 Digital Display Power Bank 20000mAh 100W",
    "slug": "baseus-enerfill-fc41-digital-display-power-bank-20000mah-100w",
    "summary": "EnerFill FC41 Digital Display Power Bank 20000mAh 100W from Baseus with 20,000 mAh advertised capacity, up to 100 W output, digital display.",
    "summaryUk": "EnerFill FC41 Digital Display Power Bank 20000mAh 100W from Baseus with 20,000 mAh advertised capacity, up to 100 W output, digital display.",
    "imagePath": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FC41_Digital_Display_Power_Bank_20000mAh_100W_1.jpg?v=1763532603",
    "priceCents": 5999,
    "productCode": "E0028N04",
    "nominalVoltageV": 5,
    "capacityWh": 74,
    "continuousPowerW": 100,
    "peakPowerW": 100,
    "chemistry": "Lithium-ion",
    "communicationProtocols": null,
    "weightGrams": null,
    "sourceLabel": "Baseus product page (enerfill-fc41-digital-display-power-bank-20000mah-100w)",
    "sourceLabelUk": "Baseus product page (enerfill-fc41-digital-display-power-bank-20000mah-100w)",
    "sourceUrl": "https://www.baseus.com/products/enerfill-fc41-digital-display-power-bank-20000mah-100w",
    "specifications": {
      "collectionListPosition": 7,
      "collectionUrl": "https://www.baseus.com/collections/charging?sort_by=manual&filter.p.product_type=Power+Banks",
      "collectionProductsJsonUrl": "https://www.baseus.com/collections/charging/products.json?limit=250",
      "sourceFetchedAt": "2026-06-16",
      "sourceProductId": 7625175138381,
      "handle": "enerfill-fc41-digital-display-power-bank-20000mah-100w",
      "vendor": "Baseus US",
      "productType": "Power Banks",
      "tags": [
        "BWP",
        "Charging",
        "Entertainment",
        "Power Banks"
      ],
      "status": "In Stock",
      "availableForSale": true,
      "priceUsd": 59.99,
      "priceRangeUsd": {
        "min": 59.99,
        "max": 59.99,
        "varies": false
      },
      "compareAtPriceUsd": 79.99,
      "sourceCurrency": "USD",
      "typicalCapacityMah": 20000,
      "estimatedEnergyWh": 74,
      "maxOutputW": 100,
      "advertisedPowerW": 100,
      "advertisedCapacityMah": 20000,
      "inferredInputOutputNotes": [
        "Capacity and max output are inferred from Baseus product title and product-page text where not separately exposed by Shopify JSON.",
        "Energy is estimated from advertised mAh at 3.7V nominal lithium-cell voltage."
      ],
      "features": [
        "20,000 mAh advertised capacity",
        "Up to 100 W output",
        "Digital display"
      ],
      "options": [
        {
          "name": "Title",
          "position": 1,
          "values": [
            "Default Title"
          ]
        }
      ],
      "variants": [
        {
          "id": 42440845393997,
          "title": "Default Title",
          "sku": "E0028N04",
          "barcode": "6942521201815",
          "available": true,
          "priceUsd": 59.99,
          "compareAtPriceUsd": 79.99,
          "weightGrams": 224982,
          "weightSource": "Shopify variant weight field",
          "weightPromotedToTopLevel": false,
          "options": [
            "Default Title"
          ],
          "featuredImage": null
        }
      ],
      "productImages": [
        {
          "position": 1,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FC41_Digital_Display_Power_Bank_20000mAh_100W_1.jpg?v=1763532603"
        },
        {
          "position": 2,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FC41_Digital_Display_Power_Bank_20000mAh_100W_2.jpg?v=1763532603"
        },
        {
          "position": 3,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FC41_Digital_Display_Power_Bank_20000mAh_100W_3.jpg?v=1763532603"
        },
        {
          "position": 4,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FC41_Digital_Display_Power_Bank_20000mAh_100W_4.jpg?v=1763534239"
        },
        {
          "position": 5,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FC41_Digital_Display_Power_Bank_20000mAh_100W_5.jpg?v=1763534239"
        },
        {
          "position": 6,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FC41_Digital_Display_Power_Bank_20000mAh_100W_7.jpg?v=1763534239"
        },
        {
          "position": 7,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FC41_Digital_Display_Power_Bank_20000mAh_100W_8.jpg?v=1763534239"
        },
        {
          "position": 8,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FC41_Digital_Display_Power_Bank_20000mAh_100W_6.jpg?v=1763534240"
        }
      ],
      "media": [
        {
          "id": 25962475814989,
          "position": 1,
          "mediaType": "image",
          "alt": "Baseus EnerFill FC41 Digital Display Power Bank 20000mAh 100W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FC41_Digital_Display_Power_Bank_20000mAh_100W_1.jpg?v=1763532603",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 25962475847757,
          "position": 2,
          "mediaType": "image",
          "alt": "Baseus EnerFill FC41 Digital Display Power Bank 20000mAh 100W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FC41_Digital_Display_Power_Bank_20000mAh_100W_2.jpg?v=1763532603",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 25962475880525,
          "position": 3,
          "mediaType": "image",
          "alt": "Baseus EnerFill FC41 Digital Display Power Bank 20000mAh 100W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FC41_Digital_Display_Power_Bank_20000mAh_100W_3.jpg?v=1763532603",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 25962538434637,
          "position": 4,
          "mediaType": "image",
          "alt": "Baseus EnerFill FC41 Digital Display Power Bank 20000mAh 100W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FC41_Digital_Display_Power_Bank_20000mAh_100W_4.jpg?v=1763534239",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 25962538336333,
          "position": 5,
          "mediaType": "image",
          "alt": "Baseus EnerFill FC41 Digital Display Power Bank 20000mAh 100W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FC41_Digital_Display_Power_Bank_20000mAh_100W_5.jpg?v=1763534239",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 25962538401869,
          "position": 6,
          "mediaType": "image",
          "alt": "Baseus EnerFill FC41 Digital Display Power Bank 20000mAh 100W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FC41_Digital_Display_Power_Bank_20000mAh_100W_7.jpg?v=1763534239",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 25962538369101,
          "position": 7,
          "mediaType": "image",
          "alt": "Baseus EnerFill FC41 Digital Display Power Bank 20000mAh 100W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FC41_Digital_Display_Power_Bank_20000mAh_100W_8.jpg?v=1763534239",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 25962538467405,
          "position": 8,
          "mediaType": "image",
          "alt": "Baseus EnerFill FC41 Digital Display Power Bank 20000mAh 100W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FC41_Digital_Display_Power_Bank_20000mAh_100W_6.jpg?v=1763534240",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        }
      ],
      "descriptionImages": [
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FC41_Digital_Display_Power_Bank_20000mAh_100W_A_1.jpg?v=1763532666",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FC41_Digital_Display_Power_Bank_20000mAh_100W_A_2.jpg?v=1763532666",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FC41_Digital_Display_Power_Bank_20000mAh_100W_A_3_1.jpg?v=1763532666",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FC41_Digital_Display_Power_Bank_20000mAh_100W_A_3_2.jpg?v=1763532666",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FC41_Digital_Display_Power_Bank_20000mAh_100W_A_3_3.jpg?v=1763532666",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FC41_Digital_Display_Power_Bank_20000mAh_100W_A_3_4.jpg?v=1763532666",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FC41_Digital_Display_Power_Bank_20000mAh_100W_A_4_1.jpg?v=1763532666",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FC41_Digital_Display_Power_Bank_20000mAh_100W_A_4_2.jpg?v=1763532666",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FC41_Digital_Display_Power_Bank_20000mAh_100W_A_4_3.jpg?v=1763532666",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FC41_Digital_Display_Power_Bank_20000mAh_100W_A_4_4.jpg?v=1763532666",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FC41_Digital_Display_Power_Bank_20000mAh_100W_A_5_1.jpg?v=1763532667",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FC41_Digital_Display_Power_Bank_20000mAh_100W_A_5_2.jpg?v=1763532666",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FC41_Digital_Display_Power_Bank_20000mAh_100W_A_5_3.jpg?v=1763532667",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FC41_Digital_Display_Power_Bank_20000mAh_100W_A_5_4.jpg?v=1763532666"
      ],
      "descriptionHeadings": [],
      "descriptionBullets": [],
      "descriptionButtons": [
        "Laptop Fast Charge",
        "Ultra Fast Recharging",
        "Multi Device Power",
        "Ergonomic Comfort Grip",
        "High Capacity",
        "Airline Approved",
        "Portable Lanyard",
        "Smart Monitoring",
        "Travel Essentials",
        "Business Trip",
        "Friends Gathering",
        "Wide Compatibility"
      ],
      "descriptionText": "Laptop Fast Charge Ultra Fast Recharging Multi Device Power Ergonomic Comfort Grip High Capacity Airline Approved Portable Lanyard Smart Monitoring Travel Essentials Business Trip Friends Gathering Wide Compatibility",
      "publishedAt": "2025-11-18T22:26:58-08:00",
      "createdAt": "2025-11-18T22:09:16-08:00"
    }
  },
  {
    "categorySlug": "power-banks",
    "manufacturer": "Baseus",
    "model": "PicoGo AM41 Magnetic Power Bank with Built-in Cable 10000mAh 27W",
    "slug": "baseus-picogo-am41-magnetic-power-bank-with-built-in-usb-c-cable-10000mah-27w",
    "summary": "PicoGo AM41 Magnetic Power Bank with Built-in Cable 10000mAh 27W from Baseus with 10,000 mAh advertised capacity, up to 27 W output, magnetic charging, built-in cable.",
    "summaryUk": "PicoGo AM41 Magnetic Power Bank with Built-in Cable 10000mAh 27W from Baseus with 10,000 mAh advertised capacity, up to 27 W output, magnetic charging, built-in cable.",
    "imagePath": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM41_Magnetic_Power_Bank_with_Built_in_USB_C_Cable_10000mAh_27W_5.jpg?v=1773905412",
    "priceCents": 4999,
    "productCode": "E0029100",
    "nominalVoltageV": 5,
    "capacityWh": 37,
    "continuousPowerW": 27,
    "peakPowerW": 27,
    "chemistry": "Lithium-ion",
    "communicationProtocols": "USB-C, Qi2, Magnetic wireless charging",
    "weightGrams": null,
    "sourceLabel": "Baseus product page (picogo-am41-magnetic-power-bank-with-built-in-usb-c-cable-10000mah-27w)",
    "sourceLabelUk": "Baseus product page (picogo-am41-magnetic-power-bank-with-built-in-usb-c-cable-10000mah-27w)",
    "sourceUrl": "https://www.baseus.com/products/picogo-am41-magnetic-power-bank-with-built-in-usb-c-cable-10000mah-27w",
    "specifications": {
      "collectionListPosition": 8,
      "collectionUrl": "https://www.baseus.com/collections/charging?sort_by=manual&filter.p.product_type=Power+Banks",
      "collectionProductsJsonUrl": "https://www.baseus.com/collections/charging/products.json?limit=250",
      "sourceFetchedAt": "2026-06-16",
      "sourceProductId": 7742662279245,
      "handle": "picogo-am41-magnetic-power-bank-with-built-in-usb-c-cable-10000mah-27w",
      "vendor": "Baseus",
      "productType": "Power Banks",
      "tags": [
        "2026PD",
        "__label:NEW",
        "Charging",
        "On the go",
        "Power Banks"
      ],
      "status": "In Stock",
      "availableForSale": true,
      "priceUsd": 49.99,
      "priceRangeUsd": {
        "min": 49.99,
        "max": 49.99,
        "varies": false
      },
      "compareAtPriceUsd": 69.99,
      "sourceCurrency": "USD",
      "typicalCapacityMah": 10000,
      "estimatedEnergyWh": 37,
      "maxOutputW": 27,
      "advertisedPowerW": 27,
      "advertisedCapacityMah": 10000,
      "inferredInputOutputNotes": [
        "Capacity and max output are inferred from Baseus product title and product-page text where not separately exposed by Shopify JSON.",
        "Energy is estimated from advertised mAh at 3.7V nominal lithium-cell voltage."
      ],
      "features": [
        "10,000 mAh advertised capacity",
        "Up to 27 W output",
        "Qi2 magnetic wireless charging",
        "Built-in cable"
      ],
      "options": [
        {
          "name": "Color",
          "position": 1,
          "values": [
            "Cosmic Black",
            "Space Grey",
            "Titanium",
            "Nebula Pink"
          ]
        }
      ],
      "variants": [
        {
          "id": 42795258380365,
          "title": "Cosmic Black",
          "sku": "E0029100",
          "barcode": "6942521201877",
          "available": true,
          "priceUsd": 49.99,
          "compareAtPriceUsd": 69.99,
          "weightGrams": 0,
          "weightSource": "Shopify variant weight field",
          "weightPromotedToTopLevel": false,
          "options": [
            "Cosmic Black"
          ],
          "featuredImage": {
            "id": 35003630682189,
            "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM41_Magnetic_Power_Bank_with_Built_in_USB_C_Cable_10000mAh_27W_5.jpg?v=1773905412",
            "alt": "Baseus PicoGo AM41 Magnetic Power Bank with Built-in Cable 10000mAh 27W Cosmic Black",
            "width": 1200,
            "height": 1200,
            "position": 1
          }
        },
        {
          "id": 42795258413133,
          "title": "Space Grey",
          "sku": "E0029101",
          "barcode": "6942521201846",
          "available": true,
          "priceUsd": 49.99,
          "compareAtPriceUsd": 69.99,
          "weightGrams": 0,
          "weightSource": "Shopify variant weight field",
          "weightPromotedToTopLevel": false,
          "options": [
            "Space Grey"
          ],
          "featuredImage": {
            "id": 35003630551117,
            "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM41_Magnetic_Power_Bank_with_Built_in_USB_C_Cable_10000mAh_27W_1.jpg?v=1773905412",
            "alt": "Baseus PicoGo AM41 Magnetic Power Bank with Built-in Cable 10000mAh 27W Space Grey",
            "width": 1200,
            "height": 1200,
            "position": 5
          }
        },
        {
          "id": 42795258445901,
          "title": "Titanium",
          "sku": "E0029103",
          "barcode": "6942521201860",
          "available": true,
          "priceUsd": 49.99,
          "compareAtPriceUsd": 69.99,
          "weightGrams": 0,
          "weightSource": "Shopify variant weight field",
          "weightPromotedToTopLevel": false,
          "options": [
            "Titanium"
          ],
          "featuredImage": {
            "id": 35003630813261,
            "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM41_Magnetic_Power_Bank_with_Built_in_USB_C_Cable_10000mAh_27W_9.jpg?v=1773905412",
            "alt": "Baseus PicoGo AM41 Magnetic Power Bank with Built-in Cable 10000mAh 27W Titanium",
            "width": 1200,
            "height": 1200,
            "position": 9
          }
        },
        {
          "id": 42795258478669,
          "title": "Nebula Pink",
          "sku": "E0029102",
          "barcode": "6942521201853",
          "available": true,
          "priceUsd": 49.99,
          "compareAtPriceUsd": 69.99,
          "weightGrams": 0,
          "weightSource": "Shopify variant weight field",
          "weightPromotedToTopLevel": false,
          "options": [
            "Nebula Pink"
          ],
          "featuredImage": {
            "id": 35003630944333,
            "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM41_Magnetic_Power_Bank_with_Built_in_USB_C_Cable_10000mAh_27W_13.jpg?v=1773905412",
            "alt": "Baseus PicoGo AM41 Magnetic Power Bank with Built-in Cable 10000mAh 27W Nebula Pink",
            "width": 1200,
            "height": 1200,
            "position": 13
          }
        }
      ],
      "productImages": [
        {
          "position": 1,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM41_Magnetic_Power_Bank_with_Built_in_USB_C_Cable_10000mAh_27W_5.jpg?v=1773905412"
        },
        {
          "position": 2,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM41_Magnetic_Power_Bank_with_Built_in_USB_C_Cable_10000mAh_27W_6.jpg?v=1773905412"
        },
        {
          "position": 3,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM41_Magnetic_Power_Bank_with_Built_in_USB_C_Cable_10000mAh_27W_7.jpg?v=1773905412"
        },
        {
          "position": 4,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM41_Magnetic_Power_Bank_with_Built_in_USB_C_Cable_10000mAh_27W_8.jpg?v=1773905412"
        },
        {
          "position": 5,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM41_Magnetic_Power_Bank_with_Built_in_USB_C_Cable_10000mAh_27W_1.jpg?v=1773905412"
        },
        {
          "position": 6,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM41_Magnetic_Power_Bank_with_Built_in_USB_C_Cable_10000mAh_27W_2.jpg?v=1773905412"
        },
        {
          "position": 7,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM41_Magnetic_Power_Bank_with_Built_in_USB_C_Cable_10000mAh_27W_3.jpg?v=1773905412"
        },
        {
          "position": 8,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM41_Magnetic_Power_Bank_with_Built_in_USB_C_Cable_10000mAh_27W_4.jpg?v=1773905412"
        },
        {
          "position": 9,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM41_Magnetic_Power_Bank_with_Built_in_USB_C_Cable_10000mAh_27W_9.jpg?v=1773905412"
        },
        {
          "position": 10,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM41_Magnetic_Power_Bank_with_Built_in_USB_C_Cable_10000mAh_27W_10.jpg?v=1773905412"
        },
        {
          "position": 11,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM41_Magnetic_Power_Bank_with_Built_in_USB_C_Cable_10000mAh_27W_11.jpg?v=1773905412"
        },
        {
          "position": 12,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM41_Magnetic_Power_Bank_with_Built_in_USB_C_Cable_10000mAh_27W_12.jpg?v=1773905412"
        },
        {
          "position": 13,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM41_Magnetic_Power_Bank_with_Built_in_USB_C_Cable_10000mAh_27W_13.jpg?v=1773905412"
        },
        {
          "position": 14,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM41_Magnetic_Power_Bank_with_Built_in_USB_C_Cable_10000mAh_27W_14.jpg?v=1773905412"
        },
        {
          "position": 15,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM41_Magnetic_Power_Bank_with_Built_in_USB_C_Cable_10000mAh_27W_15.jpg?v=1773905412"
        },
        {
          "position": 16,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM41_Magnetic_Power_Bank_with_Built_in_USB_C_Cable_10000mAh_27W_16.jpg?v=1773905412"
        }
      ],
      "media": [
        {
          "id": 26687236603981,
          "position": 1,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM41 Magnetic Power Bank with Built-in Cable 10000mAh 27W Cosmic Black",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM41_Magnetic_Power_Bank_with_Built_in_USB_C_Cable_10000mAh_27W_5.jpg?v=1773905412",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 26687236636749,
          "position": 2,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM41 Magnetic Power Bank with Built-in Cable 10000mAh 27W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM41_Magnetic_Power_Bank_with_Built_in_USB_C_Cable_10000mAh_27W_6.jpg?v=1773905412",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 26687236669517,
          "position": 3,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM41 Magnetic Power Bank with Built-in Cable 10000mAh 27W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM41_Magnetic_Power_Bank_with_Built_in_USB_C_Cable_10000mAh_27W_7.jpg?v=1773905412",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 26687236702285,
          "position": 4,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM41 Magnetic Power Bank with Built-in Cable 10000mAh 27W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM41_Magnetic_Power_Bank_with_Built_in_USB_C_Cable_10000mAh_27W_8.jpg?v=1773905412",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 26687236472909,
          "position": 5,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM41 Magnetic Power Bank with Built-in Cable 10000mAh 27W Space Grey",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM41_Magnetic_Power_Bank_with_Built_in_USB_C_Cable_10000mAh_27W_1.jpg?v=1773905412",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 26687236505677,
          "position": 6,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM41 Magnetic Power Bank with Built-in Cable 10000mAh 27W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM41_Magnetic_Power_Bank_with_Built_in_USB_C_Cable_10000mAh_27W_2.jpg?v=1773905412",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 26687236538445,
          "position": 7,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM41 Magnetic Power Bank with Built-in Cable 10000mAh 27W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM41_Magnetic_Power_Bank_with_Built_in_USB_C_Cable_10000mAh_27W_3.jpg?v=1773905412",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 26687236571213,
          "position": 8,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM41 Magnetic Power Bank with Built-in Cable 10000mAh 27W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM41_Magnetic_Power_Bank_with_Built_in_USB_C_Cable_10000mAh_27W_4.jpg?v=1773905412",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 26687236735053,
          "position": 9,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM41 Magnetic Power Bank with Built-in Cable 10000mAh 27W Titanium",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM41_Magnetic_Power_Bank_with_Built_in_USB_C_Cable_10000mAh_27W_9.jpg?v=1773905412",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 26687236767821,
          "position": 10,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM41 Magnetic Power Bank with Built-in Cable 10000mAh 27W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM41_Magnetic_Power_Bank_with_Built_in_USB_C_Cable_10000mAh_27W_10.jpg?v=1773905412",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 26687236800589,
          "position": 11,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM41 Magnetic Power Bank with Built-in Cable 10000mAh 27W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM41_Magnetic_Power_Bank_with_Built_in_USB_C_Cable_10000mAh_27W_11.jpg?v=1773905412",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 26687236833357,
          "position": 12,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM41 Magnetic Power Bank with Built-in Cable 10000mAh 27W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM41_Magnetic_Power_Bank_with_Built_in_USB_C_Cable_10000mAh_27W_12.jpg?v=1773905412",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 26687236866125,
          "position": 13,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM41 Magnetic Power Bank with Built-in Cable 10000mAh 27W Nebula Pink",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM41_Magnetic_Power_Bank_with_Built_in_USB_C_Cable_10000mAh_27W_13.jpg?v=1773905412",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 26687236898893,
          "position": 14,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM41 Magnetic Power Bank with Built-in Cable 10000mAh 27W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM41_Magnetic_Power_Bank_with_Built_in_USB_C_Cable_10000mAh_27W_14.jpg?v=1773905412",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 26687236931661,
          "position": 15,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM41 Magnetic Power Bank with Built-in Cable 10000mAh 27W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM41_Magnetic_Power_Bank_with_Built_in_USB_C_Cable_10000mAh_27W_15.jpg?v=1773905412",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 26687236964429,
          "position": 16,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM41 Magnetic Power Bank with Built-in Cable 10000mAh 27W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM41_Magnetic_Power_Bank_with_Built_in_USB_C_Cable_10000mAh_27W_16.jpg?v=1773905412",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        }
      ],
      "descriptionImages": [
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM41_Magnetic_Power_Bank_with_Built_in_USB_C_Cable_10000mAh_27W_A_1.jpg?v=1773905983",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM41_Magnetic_Power_Bank_with_Built_in_USB_C_Cable_10000mAh_27W_A_2.jpg?v=1773905983",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM41_Magnetic_Power_Bank_with_Built_in_USB_C_Cable_10000mAh_27W_A_3_1.jpg?v=1773905983",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM41_Magnetic_Power_Bank_with_Built_in_USB_C_Cable_10000mAh_27W_A_3_2.jpg?v=1773905982",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM41_Magnetic_Power_Bank_with_Built_in_USB_C_Cable_10000mAh_27W_A_3_3.jpg?v=1773905983",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM41_Magnetic_Power_Bank_with_Built_in_USB_C_Cable_10000mAh_27W_A_3_4.jpg?v=1773905983",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM41_Magnetic_Power_Bank_with_Built_in_USB_C_Cable_10000mAh_27W_A_4_1.jpg?v=1773905983",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM41_Magnetic_Power_Bank_with_Built_in_USB_C_Cable_10000mAh_27W_A_4_2.jpg?v=1773905983",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM41_Magnetic_Power_Bank_with_Built_in_USB_C_Cable_10000mAh_27W_A_4_3.jpg?v=1773905983",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM41_Magnetic_Power_Bank_with_Built_in_USB_C_Cable_10000mAh_27W_A_5_1.jpg?v=1773905983",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM41_Magnetic_Power_Bank_with_Built_in_USB_C_Cable_10000mAh_27W_A_5_2.jpg?v=1773905983"
      ],
      "descriptionHeadings": [],
      "descriptionBullets": [],
      "descriptionButtons": [
        "Slim. Light. Portable",
        "Premium Design",
        "Durable and Reliable",
        "Qi2 Certified",
        "Built-in USB-C Cable",
        "USB-C Fast Charging",
        "Advanced AI Tech",
        "Power For the Day",
        "Huge Compatibilty"
      ],
      "descriptionText": "Slim. Light. Portable Premium Design Durable and Reliable Qi2 Certified Built-in USB-C Cable USB-C Fast Charging Advanced AI Tech Power For the Day Huge Compatibilty",
      "publishedAt": "2026-03-19T00:48:50-07:00",
      "createdAt": "2026-03-19T00:35:56-07:00"
    }
  },
  {
    "categorySlug": "power-banks",
    "manufacturer": "Baseus",
    "model": "EnerCore CR11 Power Bank with Retractable Cable 10000mAh 45W",
    "slug": "baseus-enercore-cr11-power-bank-with-retractable-cable-10000mah-45w",
    "summary": "EnerCore CR11 Power Bank with Retractable Cable 10000mAh 45W from Baseus with 10,000 mAh advertised capacity, up to 45 W output, retractable cable.",
    "summaryUk": "EnerCore CR11 Power Bank with Retractable Cable 10000mAh 45W from Baseus with 10,000 mAh advertised capacity, up to 45 W output, retractable cable.",
    "imagePath": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerCore_CR11_Power_Bank_with_Retractable_Cable_10000mAh_45W__3.jpg?v=1750040844",
    "priceCents": 2999,
    "productCode": "E0027G00",
    "nominalVoltageV": 5,
    "capacityWh": 37,
    "continuousPowerW": 45,
    "peakPowerW": 45,
    "chemistry": "Lithium-ion",
    "communicationProtocols": "USB-C",
    "weightGrams": null,
    "sourceLabel": "Baseus product page (enercore-cr11-power-bank-with-retractable-cable-10000mah-45w)",
    "sourceLabelUk": "Baseus product page (enercore-cr11-power-bank-with-retractable-cable-10000mah-45w)",
    "sourceUrl": "https://www.baseus.com/products/enercore-cr11-power-bank-with-retractable-cable-10000mah-45w",
    "specifications": {
      "collectionListPosition": 9,
      "collectionUrl": "https://www.baseus.com/collections/charging?sort_by=manual&filter.p.product_type=Power+Banks",
      "collectionProductsJsonUrl": "https://www.baseus.com/collections/charging/products.json?limit=250",
      "sourceFetchedAt": "2026-06-16",
      "sourceProductId": 7505456300109,
      "handle": "enercore-cr11-power-bank-with-retractable-cable-10000mah-45w",
      "vendor": "Baseus US",
      "productType": "Power Banks",
      "tags": [
        "20% to 29% Off",
        "Charging",
        "EnerCore",
        "On the go",
        "Power Banks"
      ],
      "status": "In Stock",
      "availableForSale": true,
      "priceUsd": 29.99,
      "priceRangeUsd": {
        "min": 29.99,
        "max": 29.99,
        "varies": false
      },
      "compareAtPriceUsd": 39.99,
      "sourceCurrency": "USD",
      "typicalCapacityMah": 10000,
      "estimatedEnergyWh": 37,
      "maxOutputW": 45,
      "advertisedPowerW": 45,
      "advertisedCapacityMah": 10000,
      "inferredInputOutputNotes": [
        "Capacity and max output are inferred from Baseus product title and product-page text where not separately exposed by Shopify JSON.",
        "Energy is estimated from advertised mAh at 3.7V nominal lithium-cell voltage."
      ],
      "features": [
        "10,000 mAh advertised capacity",
        "Up to 45 W output",
        "Digital display",
        "Retractable cable"
      ],
      "options": [
        {
          "name": "Title",
          "position": 1,
          "values": [
            "Default Title"
          ]
        }
      ],
      "variants": [
        {
          "id": 41864107458637,
          "title": "Default Title",
          "sku": "E0027G00",
          "barcode": "6932172691936",
          "available": true,
          "priceUsd": 29.99,
          "compareAtPriceUsd": 39.99,
          "weightGrams": 151953,
          "weightSource": "Shopify variant weight field",
          "weightPromotedToTopLevel": false,
          "options": [
            "Default Title"
          ],
          "featuredImage": null
        }
      ],
      "productImages": [
        {
          "position": 1,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerCore_CR11_Power_Bank_with_Retractable_Cable_10000mAh_45W__3.jpg?v=1750040844"
        },
        {
          "position": 2,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerCore_CR11_Power_Bank_with_Retractable_Cable_10000mAh_45W__4.jpg?v=1750040844"
        },
        {
          "position": 3,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerCore_CR11_Power_Bank_with_Retractable_Cable_10000mAh_45W__5.jpg?v=1750040844"
        },
        {
          "position": 4,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerCore_CR11_Power_Bank_with_Retractable_Cable_10000mAh_45W__1.jpg?v=1750040844"
        },
        {
          "position": 5,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerCore_CR11_Power_Bank_with_Retractable_Cable_10000mAh_45W__2.jpg?v=1750040844"
        }
      ],
      "media": [
        {
          "id": 25230604533837,
          "position": 1,
          "mediaType": "image",
          "alt": "Baseus EnerCore CR11 Power Bank with Retractable Cable 10000mAh 45W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerCore_CR11_Power_Bank_with_Retractable_Cable_10000mAh_45W__3.jpg?v=1750040844",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 25230604566605,
          "position": 2,
          "mediaType": "image",
          "alt": "Baseus EnerCore CR11 Power Bank with Retractable Cable 10000mAh 45W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerCore_CR11_Power_Bank_with_Retractable_Cable_10000mAh_45W__4.jpg?v=1750040844",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 25230604599373,
          "position": 3,
          "mediaType": "image",
          "alt": "Baseus EnerCore CR11 Power Bank with Retractable Cable 10000mAh 45W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerCore_CR11_Power_Bank_with_Retractable_Cable_10000mAh_45W__5.jpg?v=1750040844",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 25230604468301,
          "position": 4,
          "mediaType": "image",
          "alt": "Baseus EnerCore CR11 Power Bank with Retractable Cable 10000mAh 45W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerCore_CR11_Power_Bank_with_Retractable_Cable_10000mAh_45W__1.jpg?v=1750040844",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 25230604501069,
          "position": 5,
          "mediaType": "image",
          "alt": "Baseus EnerCore CR11 Power Bank with Retractable Cable 10000mAh 45W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerCore_CR11_Power_Bank_with_Retractable_Cable_10000mAh_45W__2.jpg?v=1750040844",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        }
      ],
      "descriptionImages": [
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerCore_CR11_Power_Bank_with_Retractable_Cable_10000mAh_45W_01.jpg?v=1750404030",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerCore_CR11_Power_Bank_with_Retractable_Cable_10000mAh_45W_02.jpg?v=1750404030",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerCore_CR11_Power_Bank_with_Retractable_Cable_10000mAh_45W_03_1.jpg?v=1750404030",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerCore_CR11_Power_Bank_with_Retractable_Cable_10000mAh_45W_03_2.jpg?v=1750404028",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerCore_CR11_Power_Bank_with_Retractable_Cable_10000mAh_45W_03_3.jpg?v=1750404030",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerCore_CR11_Power_Bank_with_Retractable_Cable_10000mAh_45W_03_4.jpg?v=1750404029",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerCore_CR11_Power_Bank_with_Retractable_Cable_10000mAh_45W_04_1.jpg?v=1750404029",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerCore_CR11_Power_Bank_with_Retractable_Cable_10000mAh_45W_04_2.jpg?v=1750404029",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerCore_CR11_Power_Bank_with_Retractable_Cable_10000mAh_45W_04_3.jpg?v=1750404029",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerCore_CR11_Power_Bank_with_Retractable_Cable_10000mAh_45W_04_4.jpg?v=1750404028",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerCore_CR11_Power_Bank_with_Retractable_Cable_10000mAh_45W_05_1.jpg?v=1750404031",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerCore_CR11_Power_Bank_with_Retractable_Cable_10000mAh_45W_05_2.jpg?v=1750404031",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerCore_CR11_Power_Bank_with_Retractable_Cable_10000mAh_45W_05_3.jpg?v=1750404030",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerCore_CR11_Power_Bank_with_Retractable_Cable_10000mAh_45W_05_4.jpg?v=1750404031"
      ],
      "descriptionHeadings": [],
      "descriptionBullets": [],
      "descriptionButtons": [
        "Built in USB-C",
        "Up to 45W Charging",
        "Retractable Cable",
        "Awards",
        "10000 Capacity",
        "Huge Compatibility",
        "Smart Cooling System",
        "Smart Display"
      ],
      "descriptionText": "Built in USB-C Up to 45W Charging Retractable Cable Awards 10000 Capacity Huge Compatibility Smart Cooling System Smart Display",
      "publishedAt": "2025-06-15T19:23:15-07:00",
      "createdAt": "2025-06-15T19:23:15-07:00"
    }
  },
  {
    "categorySlug": "power-banks",
    "manufacturer": "Baseus",
    "model": "PicoGo AC22 Ultra Mini Power Bank with Built-in Cable 10000mAh 45W",
    "slug": "baseus-picogo-ac22-ultra-mini-power-bank-with-built-in-usb-c-cable-10000mah-45w",
    "summary": "PicoGo AC22 Ultra Mini Power Bank with Built-in Cable 10000mAh 45W from Baseus with 10,000 mAh advertised capacity, up to 45 W output, built-in cable.",
    "summaryUk": "PicoGo AC22 Ultra Mini Power Bank with Built-in Cable 10000mAh 45W from Baseus with 10,000 mAh advertised capacity, up to 45 W output, built-in cable.",
    "imagePath": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AC22_Ultra_Mini_Power_Bank_with_Built_in_Cable_10000mAh_45W_1.jpg?v=1773912171",
    "priceCents": 3999,
    "productCode": "E0028K00",
    "nominalVoltageV": 5,
    "capacityWh": 37,
    "continuousPowerW": 45,
    "peakPowerW": 45,
    "chemistry": "Lithium-ion",
    "communicationProtocols": null,
    "weightGrams": null,
    "sourceLabel": "Baseus product page (picogo-ac22-ultra-mini-power-bank-with-built-in-usb-c-cable-10000mah-45w)",
    "sourceLabelUk": "Baseus product page (picogo-ac22-ultra-mini-power-bank-with-built-in-usb-c-cable-10000mah-45w)",
    "sourceUrl": "https://www.baseus.com/products/picogo-ac22-ultra-mini-power-bank-with-built-in-usb-c-cable-10000mah-45w",
    "specifications": {
      "collectionListPosition": 10,
      "collectionUrl": "https://www.baseus.com/collections/charging?sort_by=manual&filter.p.product_type=Power+Banks",
      "collectionProductsJsonUrl": "https://www.baseus.com/collections/charging/products.json?limit=250",
      "sourceFetchedAt": "2026-06-16",
      "sourceProductId": 7742862688333,
      "handle": "picogo-ac22-ultra-mini-power-bank-with-built-in-usb-c-cable-10000mah-45w",
      "vendor": "Baseus",
      "productType": "Power Banks",
      "tags": [
        "__label:NEW",
        "Charging",
        "On the go",
        "Power Banks"
      ],
      "status": "In Stock",
      "availableForSale": true,
      "priceUsd": 39.99,
      "priceRangeUsd": {
        "min": 39.99,
        "max": 39.99,
        "varies": false
      },
      "compareAtPriceUsd": 39.99,
      "sourceCurrency": "USD",
      "typicalCapacityMah": 10000,
      "estimatedEnergyWh": 37,
      "maxOutputW": 45,
      "advertisedPowerW": 45,
      "advertisedCapacityMah": 10000,
      "inferredInputOutputNotes": [
        "Capacity and max output are inferred from Baseus product title and product-page text where not separately exposed by Shopify JSON.",
        "Energy is estimated from advertised mAh at 3.7V nominal lithium-cell voltage."
      ],
      "features": [
        "10,000 mAh advertised capacity",
        "Up to 45 W output",
        "Built-in cable"
      ],
      "options": [
        {
          "name": "Title",
          "position": 1,
          "values": [
            "Default Title"
          ]
        }
      ],
      "variants": [
        {
          "id": 42795489591373,
          "title": "Default Title",
          "sku": "E0028K00",
          "barcode": "6953156210912",
          "available": true,
          "priceUsd": 39.99,
          "compareAtPriceUsd": 39.99,
          "weightGrams": 96615,
          "weightSource": "Shopify variant weight field",
          "weightPromotedToTopLevel": false,
          "options": [
            "Default Title"
          ],
          "featuredImage": null
        }
      ],
      "productImages": [
        {
          "position": 1,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AC22_Ultra_Mini_Power_Bank_with_Built_in_Cable_10000mAh_45W_1.jpg?v=1773912171"
        },
        {
          "position": 2,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AC22_Ultra_Mini_Power_Bank_with_Built_in_Cable_10000mAh_45W_2.jpg?v=1773912171"
        },
        {
          "position": 3,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AC22_Ultra_Mini_Power_Bank_with_Built_in_Cable_10000mAh_45W_3.jpg?v=1773912171"
        },
        {
          "position": 4,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AC22_Ultra_Mini_Power_Bank_with_Built_in_Cable_10000mAh_45W_4.jpg?v=1773912171"
        },
        {
          "position": 5,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AC22_Ultra_Mini_Power_Bank_with_Built_in_Cable_10000mAh_45W_5.jpg?v=1773912171"
        },
        {
          "position": 6,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AC22_Ultra_Mini_Power_Bank_with_Built_in_Cable_10000mAh_45W_6.jpg?v=1773912171"
        }
      ],
      "media": [
        {
          "id": 26689120501837,
          "position": 1,
          "mediaType": "image",
          "alt": "Baseus PicoGo AC22 Ultra Mini Power Bank with Built-in Cable 10000mAh 45W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AC22_Ultra_Mini_Power_Bank_with_Built_in_Cable_10000mAh_45W_1.jpg?v=1773912171",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 26689120534605,
          "position": 2,
          "mediaType": "image",
          "alt": "Baseus PicoGo AC22 Ultra Mini Power Bank with Built-in Cable 10000mAh 45W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AC22_Ultra_Mini_Power_Bank_with_Built_in_Cable_10000mAh_45W_2.jpg?v=1773912171",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 26689120567373,
          "position": 3,
          "mediaType": "image",
          "alt": "Baseus PicoGo AC22 Ultra Mini Power Bank with Built-in Cable 10000mAh 45W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AC22_Ultra_Mini_Power_Bank_with_Built_in_Cable_10000mAh_45W_3.jpg?v=1773912171",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 26689120600141,
          "position": 4,
          "mediaType": "image",
          "alt": "Baseus PicoGo AC22 Ultra Mini Power Bank with Built-in Cable 10000mAh 45W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AC22_Ultra_Mini_Power_Bank_with_Built_in_Cable_10000mAh_45W_4.jpg?v=1773912171",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 26689120632909,
          "position": 5,
          "mediaType": "image",
          "alt": "Baseus PicoGo AC22 Ultra Mini Power Bank with Built-in Cable 10000mAh 45W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AC22_Ultra_Mini_Power_Bank_with_Built_in_Cable_10000mAh_45W_5.jpg?v=1773912171",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 26689120665677,
          "position": 6,
          "mediaType": "image",
          "alt": "Baseus PicoGo AC22 Ultra Mini Power Bank with Built-in Cable 10000mAh 45W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AC22_Ultra_Mini_Power_Bank_with_Built_in_Cable_10000mAh_45W_6.jpg?v=1773912171",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        }
      ],
      "descriptionImages": [
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AC22_Ultra_Mini_Power_Bank_with_Built_in_Cable_10000mAh_45W_A_1.jpg?v=1773912228",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AC22_Ultra_Mini_Power_Bank_with_Built_in_Cable_10000mAh_45W_A_2.jpg?v=1773912229",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AC22_Ultra_Mini_Power_Bank_with_Built_in_Cable_10000mAh_45W_A_3_1.jpg?v=1773912229",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AC22_Ultra_Mini_Power_Bank_with_Built_in_Cable_10000mAh_45W_A_3_2.jpg?v=1773912229",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AC22_Ultra_Mini_Power_Bank_with_Built_in_Cable_10000mAh_45W_A_3_3.jpg?v=1773912230",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AC22_Ultra_Mini_Power_Bank_with_Built_in_Cable_10000mAh_45W_A_4_1.jpg?v=1773912228",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AC22_Ultra_Mini_Power_Bank_with_Built_in_Cable_10000mAh_45W_A_4_2.jpg?v=1773912229",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AC22_Ultra_Mini_Power_Bank_with_Built_in_Cable_10000mAh_45W_A_4_3.jpg?v=1773912228",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AC22_Ultra_Mini_Power_Bank_with_Built_in_Cable_10000mAh_45W_A_4_4.jpg?v=1773912228",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AC22_Ultra_Mini_Power_Bank_with_Built_in_Cable_10000mAh_45W_A_5_1.jpg?v=1773912229",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AC22_Ultra_Mini_Power_Bank_with_Built_in_Cable_10000mAh_45W_A_5_2.jpg?v=1773912228",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AC22_Ultra_Mini_Power_Bank_with_Built_in_Cable_10000mAh_45W_A_5_3.jpg?v=1773912229",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AC22_Ultra_Mini_Power_Bank_with_Built_in_Cable_10000mAh_45W_A_6_1.jpg?v=1773912230",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AC22_Ultra_Mini_Power_Bank_with_Built_in_Cable_10000mAh_45W_A_6_2.jpg?v=1773912230",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AC22_Ultra_Mini_Power_Bank_with_Built_in_Cable_10000mAh_45W_A_6_3.jpg?v=1773912230",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AC22_Ultra_Mini_Power_Bank_with_Built_in_Cable_10000mAh_45W_A_6_4.jpg?v=1773912230"
      ],
      "descriptionHeadings": [],
      "descriptionBullets": [],
      "descriptionButtons": [
        "45W Full-Speed Charging",
        "Pass-Through Charging",
        "Charge 2 Simultaneously",
        "Small but Power",
        "Ample 10,000mAh Capacity",
        "Built-in USB‑C Cable",
        "Broad Compatibility",
        "Advanced Stacking Tech",
        "High-Density Battery Cell",
        "Enhanced Safety",
        "On the Go",
        "Fits Anywhere",
        "Timely Recharge",
        "Instantly Share"
      ],
      "descriptionText": "45W Full-Speed Charging Pass-Through Charging Charge 2 Simultaneously Small but Power Ample 10,000mAh Capacity Built-in USB‑C Cable Broad Compatibility Advanced Stacking Tech High-Density Battery Cell Enhanced Safety On the Go Fits Anywhere Timely Recharge Instantly Share",
      "publishedAt": "2026-03-19T02:16:55-07:00",
      "createdAt": "2026-03-19T02:16:54-07:00"
    }
  },
  {
    "categorySlug": "power-banks",
    "manufacturer": "Baseus",
    "model": "PicoGo AM52 Qi2.2 Magnetic Power Bank with Cable 10000mAh 45W",
    "slug": "baseus-picogo-am52-qi2-2-magnetic-power-bank-with-built-in-cable-10000mah-45w",
    "summary": "PicoGo AM52 Qi2.2 Magnetic Power Bank with Cable 10000mAh 45W from Baseus with 10,000 mAh advertised capacity, up to 45 W output, Qi2.2 magnetic charging.",
    "summaryUk": "PicoGo AM52 Qi2.2 Magnetic Power Bank with Cable 10000mAh 45W from Baseus with 10,000 mAh advertised capacity, up to 45 W output, Qi2.2 magnetic charging.",
    "imagePath": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM52_Qi2.2_Magnetic_Power_Bank_with_Built-in_Cable_10000mAh_45W_1.jpg?v=1770695238",
    "priceCents": 6999,
    "productCode": "E0029000",
    "nominalVoltageV": 5,
    "capacityWh": 37,
    "continuousPowerW": 45,
    "peakPowerW": 45,
    "chemistry": "Lithium-ion",
    "communicationProtocols": "USB-C, Qi2.2, Magnetic wireless charging",
    "weightGrams": null,
    "sourceLabel": "Baseus product page (picogo-am52-qi2-2-magnetic-power-bank-with-built-in-cable-10000mah-45w)",
    "sourceLabelUk": "Baseus product page (picogo-am52-qi2-2-magnetic-power-bank-with-built-in-cable-10000mah-45w)",
    "sourceUrl": "https://www.baseus.com/products/picogo-am52-qi2-2-magnetic-power-bank-with-built-in-cable-10000mah-45w",
    "specifications": {
      "collectionListPosition": 11,
      "collectionUrl": "https://www.baseus.com/collections/charging?sort_by=manual&filter.p.product_type=Power+Banks",
      "collectionProductsJsonUrl": "https://www.baseus.com/collections/charging/products.json?limit=250",
      "sourceFetchedAt": "2026-06-16",
      "sourceProductId": 7688691023949,
      "handle": "picogo-am52-qi2-2-magnetic-power-bank-with-built-in-cable-10000mah-45w",
      "vendor": "Baseus US",
      "productType": "Power Banks",
      "tags": [
        "AM52 Campaign",
        "Charging",
        "On the go",
        "Power Banks"
      ],
      "status": "In Stock",
      "availableForSale": true,
      "priceUsd": 69.99,
      "priceRangeUsd": {
        "min": 69.99,
        "max": 69.99,
        "varies": false
      },
      "compareAtPriceUsd": 89.99,
      "sourceCurrency": "USD",
      "typicalCapacityMah": 10000,
      "estimatedEnergyWh": 37,
      "maxOutputW": 45,
      "advertisedPowerW": 45,
      "advertisedCapacityMah": 10000,
      "inferredInputOutputNotes": [
        "Capacity and max output are inferred from Baseus product title and product-page text where not separately exposed by Shopify JSON.",
        "Energy is estimated from advertised mAh at 3.7V nominal lithium-cell voltage."
      ],
      "features": [
        "10,000 mAh advertised capacity",
        "Up to 45 W output",
        "Qi2.2 magnetic wireless charging"
      ],
      "options": [
        {
          "name": "Title",
          "position": 1,
          "values": [
            "Default Title"
          ]
        }
      ],
      "variants": [
        {
          "id": 42662914719821,
          "title": "Default Title",
          "sku": "E0029000",
          "barcode": "6942521204717",
          "available": true,
          "priceUsd": 69.99,
          "compareAtPriceUsd": 89.99,
          "weightGrams": 54431,
          "weightSource": "Shopify variant weight field",
          "weightPromotedToTopLevel": false,
          "options": [
            "Default Title"
          ],
          "featuredImage": null
        }
      ],
      "productImages": [
        {
          "position": 1,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM52_Qi2.2_Magnetic_Power_Bank_with_Built-in_Cable_10000mAh_45W_1.jpg?v=1770695238"
        },
        {
          "position": 2,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM52_Qi2.2_Magnetic_Power_Bank_with_Built-in_Cable_10000mAh_45W_2.jpg?v=1770695238"
        },
        {
          "position": 3,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM52_Qi2.2_Magnetic_Power_Bank_with_Built-in_Cable_10000mAh_45W_3.jpg?v=1770695238"
        },
        {
          "position": 4,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM52_Qi2.2_Magnetic_Power_Bank_with_Built-in_Cable_10000mAh_45W_4.jpg?v=1770695238"
        },
        {
          "position": 5,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM52_Qi2.2_Magnetic_Power_Bank_with_Built-in_Cable_10000mAh_45W_5.jpg?v=1770695238"
        }
      ],
      "media": [
        {
          "id": 26338797518925,
          "position": 1,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM52 Qi2.2 Magnetic Power Bank with Cable 10000mAh 45W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM52_Qi2.2_Magnetic_Power_Bank_with_Built-in_Cable_10000mAh_45W_1.jpg?v=1770695238",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 26338797551693,
          "position": 2,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM52 Qi2.2 Magnetic Power Bank with Cable 10000mAh 45W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM52_Qi2.2_Magnetic_Power_Bank_with_Built-in_Cable_10000mAh_45W_2.jpg?v=1770695238",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 26338797584461,
          "position": 3,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM52 Qi2.2 Magnetic Power Bank with Cable 10000mAh 45W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM52_Qi2.2_Magnetic_Power_Bank_with_Built-in_Cable_10000mAh_45W_3.jpg?v=1770695238",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 26338797617229,
          "position": 4,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM52 Qi2.2 Magnetic Power Bank with Cable 10000mAh 45W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM52_Qi2.2_Magnetic_Power_Bank_with_Built-in_Cable_10000mAh_45W_4.jpg?v=1770695238",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 26338797649997,
          "position": 5,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM52 Qi2.2 Magnetic Power Bank with Cable 10000mAh 45W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM52_Qi2.2_Magnetic_Power_Bank_with_Built-in_Cable_10000mAh_45W_5.jpg?v=1770695238",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        }
      ],
      "descriptionImages": [
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM52_Qi2.2_Magnetic_Power_Bank_with_Built-in_Cable_10000mAh_45W_1_2e7c3036-fc1c-4a13-acda-105bc5fb81e5.jpg?v=1772703891",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM52_Qi2.2_Magnetic_Power_Bank_with_Built-in_Cable_10000mAh_45W_2_22d38c23-c733-40b0-818b-c795a20204f6.jpg?v=1772703891",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM52_Qi2.2_Magnetic_Power_Bank_with_Built-in_Cable_10000mAh_45W_3_bc7f79db-44c5-45fd-9e78-eda49bdbc14e.jpg?v=1772703891",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM52_Qi2.2_Magnetic_Power_Bank_with_Built-in_Cable_10000mAh_45W_4_9c494dfc-fda5-4bbe-92b5-5fe264d61f12.jpg?v=1772703891",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM52_Qi2.2_Magnetic_Power_Bank_with_Built-in_Cable_10000mAh_45W_5_1.jpg?v=1772703891",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM52_Qi2.2_Magnetic_Power_Bank_with_Built-in_Cable_10000mAh_45W_5_2.jpg?v=1772703892",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM52_Qi2.2_Magnetic_Power_Bank_with_Built-in_Cable_10000mAh_45W_5_3.jpg?v=1772703892",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM52_Qi2.2_Magnetic_Power_Bank_with_Built-in_Cable_10000mAh_45W_6_1.jpg?v=1772703891",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM52_Qi2.2_Magnetic_Power_Bank_with_Built-in_Cable_10000mAh_45W_6_2.jpg?v=1772703891",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM52_Qi2.2_Magnetic_Power_Bank_with_Built-in_Cable_10000mAh_45W_6_3.jpg?v=1772703892",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM52_Qi2.2_Magnetic_Power_Bank_with_Built-in_Cable_10000mAh_45W_6_4.jpg?v=1772703891",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM52_Qi2.2_Magnetic_Power_Bank_with_Built-in_Cable_10000mAh_45W_6_5.jpg?v=1772703891",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM52_Qi2.2_Magnetic_Power_Bank_with_Built-in_Cable_10000mAh_45W_7_1.jpg?v=1772703892",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM52_Qi2.2_Magnetic_Power_Bank_with_Built-in_Cable_10000mAh_45W_7_2.jpg?v=1772703892",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM52_Qi2.2_Magnetic_Power_Bank_with_Built-in_Cable_10000mAh_45W_7_3.jpg?v=1772703892"
      ],
      "descriptionHeadings": [
        "Wireless Power + Built-In Cable — The Ultimate 2-in-1 Charger"
      ],
      "descriptionBullets": [],
      "descriptionButtons": [
        "25W Wireless Charging",
        "45W Built-in USB-C Cable",
        "30W Fast Recharging",
        "Slim Fit Design",
        "Cooler & Safer Charging",
        "Compact & Portable Design",
        "Expert Craftsmanship",
        "Universal Compatibility",
        "Travel Companion",
        "Daily Commute",
        "Work Booster"
      ],
      "descriptionText": "Wireless Power + Built-In Cable — The Ultimate 2-in-1 Charger The Baseus PicoGo AM52 combines Qi2.2 magnetic wireless charging with a built-in USB-C cable, giving you the ultimate flexibility in one slim, pocket-friendly design. With 25W wireless output, 45W wired charging, and 30W fast self-recharging, the AM52 is engineered for those who refuse to slow down. 25W Wireless Charging 45W Built-in USB-C Cable 30W Fast Recharging Snap it on wirelessly or plug in the built-in cable — the AM52 adapts to how you charge, not the other way around. Slim Fit Design Cooler & Safer Charging Compact & Portable Design Expert Craftsmanship Universal Compatibility Slim enough to slip into your pocket, powerful enough to get you through the day — at work, on the road, or anywhere in between. Travel Companion Daily Commute Work Booster",
      "publishedAt": "2026-03-05T01:55:40-08:00",
      "createdAt": "2026-02-09T19:46:20-08:00"
    }
  },
  {
    "categorySlug": "power-banks",
    "manufacturer": "Baseus",
    "model": "EnerFill FC11 Power Bank with Cables 20000mAh 45W",
    "slug": "baseus-enerfill-fc11-power-bank-with-dual-built-in-usb-c-cables-20000mah-45w",
    "summary": "EnerFill FC11 Power Bank with Cables 20000mAh 45W from Baseus with 20,000 mAh advertised capacity, up to 45 W output.",
    "summaryUk": "EnerFill FC11 Power Bank with Cables 20000mAh 45W from Baseus with 20,000 mAh advertised capacity, up to 45 W output.",
    "imagePath": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FC11_Power_Bank_with_Dual_Built_in__Cables_20000mAh_45W_Black_1.jpg?v=1775810008",
    "priceCents": 3999,
    "productCode": "E0031100",
    "nominalVoltageV": 5,
    "capacityWh": 74,
    "continuousPowerW": 45,
    "peakPowerW": 45,
    "chemistry": "Lithium-ion",
    "communicationProtocols": "USB-C",
    "weightGrams": null,
    "sourceLabel": "Baseus product page (enerfill-fc11-power-bank-with-dual-built-in-usb-c-cables-20000mah-45w)",
    "sourceLabelUk": "Baseus product page (enerfill-fc11-power-bank-with-dual-built-in-usb-c-cables-20000mah-45w)",
    "sourceUrl": "https://www.baseus.com/products/enerfill-fc11-power-bank-with-dual-built-in-usb-c-cables-20000mah-45w",
    "specifications": {
      "collectionListPosition": 12,
      "collectionUrl": "https://www.baseus.com/collections/charging?sort_by=manual&filter.p.product_type=Power+Banks",
      "collectionProductsJsonUrl": "https://www.baseus.com/collections/charging/products.json?limit=250",
      "sourceFetchedAt": "2026-06-16",
      "sourceProductId": 7765650669645,
      "handle": "enerfill-fc11-power-bank-with-dual-built-in-usb-c-cables-20000mah-45w",
      "vendor": "Baseus US",
      "productType": "Power Banks",
      "tags": [
        "2026PD",
        "__label:NEW",
        "CCC",
        "Charging",
        "For Office",
        "Power Banks",
        "Work"
      ],
      "status": "In Stock",
      "availableForSale": true,
      "priceUsd": 39.99,
      "priceRangeUsd": {
        "min": 39.99,
        "max": 39.99,
        "varies": false
      },
      "compareAtPriceUsd": 39.99,
      "sourceCurrency": "USD",
      "typicalCapacityMah": 20000,
      "estimatedEnergyWh": 74,
      "maxOutputW": 45,
      "advertisedPowerW": 45,
      "advertisedCapacityMah": 20000,
      "inferredInputOutputNotes": [
        "Capacity and max output are inferred from Baseus product title and product-page text where not separately exposed by Shopify JSON.",
        "Energy is estimated from advertised mAh at 3.7V nominal lithium-cell voltage."
      ],
      "features": [
        "20,000 mAh advertised capacity",
        "Up to 45 W output"
      ],
      "options": [
        {
          "name": "Color",
          "position": 1,
          "values": [
            "Black",
            "Beige"
          ]
        }
      ],
      "variants": [
        {
          "id": 42857310027853,
          "title": "Black",
          "sku": "E0031100",
          "barcode": "6942521203666",
          "available": true,
          "priceUsd": 39.99,
          "compareAtPriceUsd": 39.99,
          "weightGrams": 0,
          "weightSource": "Shopify variant weight field",
          "weightPromotedToTopLevel": false,
          "options": [
            "Black"
          ],
          "featuredImage": {
            "id": 35160561811533,
            "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FC11_Power_Bank_with_Dual_Built_in__Cables_20000mAh_45W_Black_1.jpg?v=1775810008",
            "alt": "Baseus EnerFill FC11 Power Bank with Cables 20000mAh 45W Black",
            "width": 1200,
            "height": 1200,
            "position": 1
          }
        },
        {
          "id": 42857310060621,
          "title": "Beige",
          "sku": "E0031101",
          "barcode": "6942521203673",
          "available": true,
          "priceUsd": 39.99,
          "compareAtPriceUsd": 39.99,
          "weightGrams": 0,
          "weightSource": "Shopify variant weight field",
          "weightPromotedToTopLevel": false,
          "options": [
            "Beige"
          ],
          "featuredImage": {
            "id": 35160561713229,
            "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FC11_Power_Bank_with_Dual_Built_in__Cables_20000mAh_45W_Beige_7.jpg?v=1775810008",
            "alt": "Baseus EnerFill FC11 Power Bank with Cables 20000mAh 45W Beige",
            "width": 1200,
            "height": 1200,
            "position": 6
          }
        }
      ],
      "productImages": [
        {
          "position": 1,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FC11_Power_Bank_with_Dual_Built_in__Cables_20000mAh_45W_Black_1.jpg?v=1775810008"
        },
        {
          "position": 2,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FC11_Power_Bank_with_Dual_Built_in__Cables_20000mAh_45W_Black_2.jpg?v=1775810008"
        },
        {
          "position": 3,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FC11_Power_Bank_with_Dual_Built_in__Cables_20000mAh_45W_Black_3.jpg?v=1775810008"
        },
        {
          "position": 4,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FC11_Power_Bank_with_Dual_Built_in__Cables_20000mAh_45W_Black_4.jpg?v=1775810008"
        },
        {
          "position": 5,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FC11_Power_Bank_with_Dual_Built_in__Cables_20000mAh_45W_Black_5.jpg?v=1775810008"
        },
        {
          "position": 6,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FC11_Power_Bank_with_Dual_Built_in__Cables_20000mAh_45W_Beige_7.jpg?v=1775810008"
        },
        {
          "position": 7,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FC11_Power_Bank_with_Dual_Built_in__Cables_20000mAh_45W_Beige_6.jpg?v=1775810008"
        },
        {
          "position": 8,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FC11_Power_Bank_with_Dual_Built_in__Cables_20000mAh_45W_Beige_8.jpg?v=1775810008"
        },
        {
          "position": 9,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FC11_Power_Bank_with_Dual_Built_in__Cables_20000mAh_45W_Beige_9.jpg?v=1775810008"
        }
      ],
      "media": [
        {
          "id": 26834662817869,
          "position": 1,
          "mediaType": "image",
          "alt": "Baseus EnerFill FC11 Power Bank with Cables 20000mAh 45W Black",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FC11_Power_Bank_with_Dual_Built_in__Cables_20000mAh_45W_Black_1.jpg?v=1775810008",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 26834662850637,
          "position": 2,
          "mediaType": "image",
          "alt": "Baseus EnerFill FC11 Power Bank with Cables 20000mAh 45W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FC11_Power_Bank_with_Dual_Built_in__Cables_20000mAh_45W_Black_2.jpg?v=1775810008",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 26834662883405,
          "position": 3,
          "mediaType": "image",
          "alt": "Baseus EnerFill FC11 Power Bank with Cables 20000mAh 45W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FC11_Power_Bank_with_Dual_Built_in__Cables_20000mAh_45W_Black_3.jpg?v=1775810008",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 26834662916173,
          "position": 4,
          "mediaType": "image",
          "alt": "Baseus EnerFill FC11 Power Bank with Cables 20000mAh 45W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FC11_Power_Bank_with_Dual_Built_in__Cables_20000mAh_45W_Black_4.jpg?v=1775810008",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 26834662948941,
          "position": 5,
          "mediaType": "image",
          "alt": "Baseus EnerFill FC11 Power Bank with Cables 20000mAh 45W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FC11_Power_Bank_with_Dual_Built_in__Cables_20000mAh_45W_Black_5.jpg?v=1775810008",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 26834662719565,
          "position": 6,
          "mediaType": "image",
          "alt": "Baseus EnerFill FC11 Power Bank with Cables 20000mAh 45W Beige",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FC11_Power_Bank_with_Dual_Built_in__Cables_20000mAh_45W_Beige_7.jpg?v=1775810008",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 26834662686797,
          "position": 7,
          "mediaType": "image",
          "alt": "Baseus EnerFill FC11 Power Bank with Cables 20000mAh 45W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FC11_Power_Bank_with_Dual_Built_in__Cables_20000mAh_45W_Beige_6.jpg?v=1775810008",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 26834662752333,
          "position": 8,
          "mediaType": "image",
          "alt": "Baseus EnerFill FC11 Power Bank with Cables 20000mAh 45W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FC11_Power_Bank_with_Dual_Built_in__Cables_20000mAh_45W_Beige_8.jpg?v=1775810008",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 26834662785101,
          "position": 9,
          "mediaType": "image",
          "alt": "Baseus EnerFill FC11 Power Bank with Cables 20000mAh 45W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FC11_Power_Bank_with_Dual_Built_in__Cables_20000mAh_45W_Beige_9.jpg?v=1775810008",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        }
      ],
      "descriptionImages": [
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FC11_Power_Bank_with_Dual_Built_in__Cables_20000mAh_45W_A_1.jpg?v=1775810292",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FC11_Power_Bank_with_Dual_Built_in__Cables_20000mAh_45W_A_2.jpg?v=1775810291",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FC11_Power_Bank_with_Dual_Built_in__Cables_20000mAh_45W_A_3_1.jpg?v=1775810291",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FC11_Power_Bank_with_Dual_Built_in__Cables_20000mAh_45W_A_3_2.jpg?v=1775810291",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FC11_Power_Bank_with_Dual_Built_in__Cables_20000mAh_45W_A_3_3.jpg?v=1775810292",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FC11_Power_Bank_with_Dual_Built_in__Cables_20000mAh_45W_A_4_1.jpg?v=1775810290",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FC11_Power_Bank_with_Dual_Built_in__Cables_20000mAh_45W_A_4_2.jpg?v=1775810292",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FC11_Power_Bank_with_Dual_Built_in__Cables_20000mAh_45W_A_4_3.jpg?v=1775810291",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FC11_Power_Bank_with_Dual_Built_in__Cables_20000mAh_45W_A_4_4.jpg?v=1775810291",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FC11_Power_Bank_with_Dual_Built_in__Cables_20000mAh_45W_A_5_1.jpg?v=1775810291",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FC11_Power_Bank_with_Dual_Built_in__Cables_20000mAh_45W_A_5_2.jpg?v=1775810292",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FC11_Power_Bank_with_Dual_Built_in__Cables_20000mAh_45W_A_5_3.jpg?v=1775810292",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FC11_Power_Bank_with_Dual_Built_in__Cables_20000mAh_45W_A_5_4.jpg?v=1775810291",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FC11_Power_Bank_with_Dual_Built_in__Cables_20000mAh_45W_A_6.jpg?v=1775810290"
      ],
      "descriptionHeadings": [
        "Power Up to 4 Devices — Without a Single Extra Cable"
      ],
      "descriptionBullets": [],
      "descriptionButtons": [
        "Compact Design",
        "Huge Capacity",
        "Enhanced Safety",
        "Built-in Cables",
        "Fast Charging",
        "Charge 4 Devices",
        "Rapid Self-Charging",
        "Wide Compatibility",
        "Airline-Approved",
        "Share the Power",
        "Convenient Charging"
      ],
      "descriptionText": "Power Up to 4 Devices — Without a Single Extra Cable The Baseus EnerFill FC11 packs a massive 20,000mAh capacity and 45W fast charging into a compact, airline-approved design. Dual built-in USB-C cables mean you're always ready — no tangled cords, no forgotten adapters. Compact Design Huge Capacity Enhanced Safety Built-in Cables Fast Charging Charge 4 Devices Rapid Self-Charging From the office to the airport — stay charged through every journey with the FC11 by your side. Wide Compatibility Airline-Approved Share the Power Convenient Charging",
      "publishedAt": "2026-04-10T01:22:26-07:00",
      "createdAt": "2026-04-10T01:22:25-07:00"
    }
  },
  {
    "categorySlug": "power-banks",
    "manufacturer": "Baseus",
    "model": "PicoGo AC22 Ultra Mini Power Bank with Built-in Cable 20000mAh 45W",
    "slug": "baseus-picogo-ac22-ultra-mini-power-bank-with-built-in-cable-20000mah-45w",
    "summary": "PicoGo AC22 Ultra Mini Power Bank with Built-in Cable 20000mAh 45W from Baseus with 20,000 mAh advertised capacity, up to 45 W output, built-in cable.",
    "summaryUk": "PicoGo AC22 Ultra Mini Power Bank with Built-in Cable 20000mAh 45W from Baseus with 20,000 mAh advertised capacity, up to 45 W output, built-in cable.",
    "imagePath": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AC22_Ultra_Mini_Power_Bank_with_Built_in_Cable_20000mAh_45W_1.jpg?v=1776765246",
    "priceCents": 6999,
    "productCode": "E0029403",
    "nominalVoltageV": 5,
    "capacityWh": 74,
    "continuousPowerW": 45,
    "peakPowerW": 45,
    "chemistry": "Lithium-ion",
    "communicationProtocols": "USB-C",
    "weightGrams": 355,
    "sourceLabel": "Baseus product page (picogo-ac22-ultra-mini-power-bank-with-built-in-cable-20000mah-45w)",
    "sourceLabelUk": "Baseus product page (picogo-ac22-ultra-mini-power-bank-with-built-in-cable-20000mah-45w)",
    "sourceUrl": "https://www.baseus.com/products/picogo-ac22-ultra-mini-power-bank-with-built-in-cable-20000mah-45w",
    "specifications": {
      "collectionListPosition": 13,
      "collectionUrl": "https://www.baseus.com/collections/charging?sort_by=manual&filter.p.product_type=Power+Banks",
      "collectionProductsJsonUrl": "https://www.baseus.com/collections/charging/products.json?limit=250",
      "sourceFetchedAt": "2026-06-16",
      "sourceProductId": 7779055042637,
      "handle": "picogo-ac22-ultra-mini-power-bank-with-built-in-cable-20000mah-45w",
      "vendor": "Baseus",
      "productType": "Power Banks",
      "tags": [
        "2026PD",
        "__label:NEW",
        "Charging",
        "On the go",
        "Power Banks"
      ],
      "status": "In Stock",
      "availableForSale": true,
      "priceUsd": 69.99,
      "priceRangeUsd": {
        "min": 69.99,
        "max": 69.99,
        "varies": false
      },
      "compareAtPriceUsd": 69.99,
      "sourceCurrency": "USD",
      "typicalCapacityMah": 20000,
      "estimatedEnergyWh": 74,
      "maxOutputW": 45,
      "advertisedPowerW": 45,
      "advertisedCapacityMah": 20000,
      "inferredInputOutputNotes": [
        "Capacity and max output are inferred from Baseus product title and product-page text where not separately exposed by Shopify JSON.",
        "Energy is estimated from advertised mAh at 3.7V nominal lithium-cell voltage."
      ],
      "features": [
        "20,000 mAh advertised capacity",
        "Up to 45 W output",
        "Built-in cable"
      ],
      "options": [
        {
          "name": "Title",
          "position": 1,
          "values": [
            "Default Title"
          ]
        }
      ],
      "variants": [
        {
          "id": 42898219139149,
          "title": "Default Title",
          "sku": "E0029403",
          "barcode": "6942521204649",
          "available": true,
          "priceUsd": 69.99,
          "compareAtPriceUsd": 69.99,
          "weightGrams": 355,
          "weightSource": "Shopify variant weight field",
          "weightPromotedToTopLevel": true,
          "options": [
            "Default Title"
          ],
          "featuredImage": null
        }
      ],
      "productImages": [
        {
          "position": 1,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AC22_Ultra_Mini_Power_Bank_with_Built_in_Cable_20000mAh_45W_1.jpg?v=1776765246"
        },
        {
          "position": 2,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AC22_Ultra_Mini_Power_Bank_with_Built_in_Cable_20000mAh_45W_2.jpg?v=1776765246"
        },
        {
          "position": 3,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AC22_Ultra_Mini_Power_Bank_with_Built_in_Cable_20000mAh_45W_3.jpg?v=1776765246"
        },
        {
          "position": 4,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AC22_Ultra_Mini_Power_Bank_with_Built_in_Cable_20000mAh_45W_4.jpg?v=1776765246"
        }
      ],
      "media": [
        {
          "id": 26938779369549,
          "position": 1,
          "mediaType": "image",
          "alt": "Baseus PicoGo AC22 Ultra Mini Power Bank with Built-in Cable 20000mAh 45W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AC22_Ultra_Mini_Power_Bank_with_Built_in_Cable_20000mAh_45W_1.jpg?v=1776765246",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 26938779402317,
          "position": 2,
          "mediaType": "image",
          "alt": "Baseus PicoGo AC22 Ultra Mini Power Bank with Built-in Cable 20000mAh 45W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AC22_Ultra_Mini_Power_Bank_with_Built_in_Cable_20000mAh_45W_2.jpg?v=1776765246",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 26938779435085,
          "position": 3,
          "mediaType": "image",
          "alt": "Baseus PicoGo AC22 Ultra Mini Power Bank with Built-in Cable 20000mAh 45W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AC22_Ultra_Mini_Power_Bank_with_Built_in_Cable_20000mAh_45W_3.jpg?v=1776765246",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 26938779467853,
          "position": 4,
          "mediaType": "image",
          "alt": "Baseus PicoGo AC22 Ultra Mini Power Bank with Built-in Cable 20000mAh 45W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AC22_Ultra_Mini_Power_Bank_with_Built_in_Cable_20000mAh_45W_4.jpg?v=1776765246",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        }
      ],
      "descriptionImages": [
        "https://cdn.shopify.com/s/files/1/0770/7151/5968/files/Baseus_PicoGo_AC22_Ultra_Mini_Power_Bank_with_Built_in_Cable_20000mAh_45W_A_1.jpg?v=1776763966",
        "https://cdn.shopify.com/s/files/1/0770/7151/5968/files/Baseus_PicoGo_AC22_Ultra_Mini_Power_Bank_with_Built_in_Cable_20000mAh_45W_A_2_1.jpg?v=1776763966",
        "https://cdn.shopify.com/s/files/1/0770/7151/5968/files/Baseus_PicoGo_AC22_Ultra_Mini_Power_Bank_with_Built_in_Cable_20000mAh_45W_A_2_2.jpg?v=1776763966",
        "https://cdn.shopify.com/s/files/1/0770/7151/5968/files/Baseus_PicoGo_AC22_Ultra_Mini_Power_Bank_with_Built_in_Cable_20000mAh_45W_A_2_3.jpg?v=1776763966",
        "https://cdn.shopify.com/s/files/1/0770/7151/5968/files/Baseus_PicoGo_AC22_Ultra_Mini_Power_Bank_with_Built_in_Cable_20000mAh_45W_A_2_4.jpg?v=1776763966",
        "https://cdn.shopify.com/s/files/1/0770/7151/5968/files/Baseus_PicoGo_AC22_Ultra_Mini_Power_Bank_with_Built_in_Cable_20000mAh_45W_A_2_5.jpg?v=1776763966",
        "https://cdn.shopify.com/s/files/1/0770/7151/5968/files/Baseus_PicoGo_AC22_Ultra_Mini_Power_Bank_with_Built_in_Cable_20000mAh_45W_A_3_1.jpg?v=1776763966",
        "https://cdn.shopify.com/s/files/1/0770/7151/5968/files/Baseus_PicoGo_AC22_Ultra_Mini_Power_Bank_with_Built_in_Cable_20000mAh_45W_A_3_2.jpg?v=1776763966",
        "https://cdn.shopify.com/s/files/1/0770/7151/5968/files/Baseus_PicoGo_AC22_Ultra_Mini_Power_Bank_with_Built_in_Cable_20000mAh_45W_A_3_3.jpg?v=1776763966",
        "https://cdn.shopify.com/s/files/1/0770/7151/5968/files/Baseus_PicoGo_AC22_Ultra_Mini_Power_Bank_with_Built_in_Cable_20000mAh_45W_A_3_4.jpg?v=1776763966",
        "https://cdn.shopify.com/s/files/1/0770/7151/5968/files/Baseus_PicoGo_AC22_Ultra_Mini_Power_Bank_with_Built_in_Cable_20000mAh_45W_A_5_1.jpg?v=1776763966",
        "https://cdn.shopify.com/s/files/1/0770/7151/5968/files/Baseus_PicoGo_AC22_Ultra_Mini_Power_Bank_with_Built_in_Cable_20000mAh_45W_A_5_2.jpg?v=1776763966",
        "https://cdn.shopify.com/s/files/1/0770/7151/5968/files/Baseus_PicoGo_AC22_Ultra_Mini_Power_Bank_with_Built_in_Cable_20000mAh_45W_A_5_3.jpg?v=1776763966"
      ],
      "descriptionHeadings": [],
      "descriptionBullets": [],
      "descriptionButtons": [
        "45W Full-Speed Charging",
        "Dual-Way 45W USB-C Cable",
        "Pass-Through Charging",
        "Portable Size",
        "Small but Power",
        "Safe and Reliable Use",
        "Built-in USB‑C Cable",
        "Broad Compatibilit",
        "Advanced Stacking Tech",
        "High-Density Battery Cell",
        "Enhanced Safety",
        "Camping",
        "On the Go",
        "Vacation",
        "As a Gift"
      ],
      "descriptionText": "45W Full-Speed Charging Dual-Way 45W USB-C Cable Dual-Way 45W USB-C Cable Pass-Through Charging Portable Size Small but Power Safe and Reliable Use Built-in USB‑C Cable Broad Compatibilit Advanced Stacking Tech High-Density Battery Cell Enhanced Safety Camping On the Go Vacation As a Gift",
      "publishedAt": "2026-04-21T02:54:03-07:00",
      "createdAt": "2026-04-21T02:54:03-07:00"
    }
  },
  {
    "categorySlug": "power-banks",
    "manufacturer": "Baseus",
    "model": "PicoGo AM31 Mini Magnetic Power Bank 5000mAh 20W",
    "slug": "baseus-picogo-am31-mini-magnetic-power-bank-5000mah-20w",
    "summary": "PicoGo AM31 Mini Magnetic Power Bank 5000mAh 20W from Baseus with 5,000 mAh advertised capacity, up to 20 W output, magnetic charging.",
    "summaryUk": "PicoGo AM31 Mini Magnetic Power Bank 5000mAh 20W from Baseus with 5,000 mAh advertised capacity, up to 20 W output, magnetic charging.",
    "imagePath": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_5000mAh_20W_Cosmic_Black_1.jpg?v=1776927481",
    "priceCents": 4999,
    "productCode": "E0030303",
    "nominalVoltageV": 5,
    "capacityWh": 19,
    "continuousPowerW": 20,
    "peakPowerW": 20,
    "chemistry": "Lithium-ion",
    "communicationProtocols": "USB-C, Magnetic wireless charging",
    "weightGrams": null,
    "sourceLabel": "Baseus product page (picogo-am31-mini-magnetic-power-bank-5000mah-20w)",
    "sourceLabelUk": "Baseus product page (picogo-am31-mini-magnetic-power-bank-5000mah-20w)",
    "sourceUrl": "https://www.baseus.com/products/picogo-am31-mini-magnetic-power-bank-5000mah-20w",
    "specifications": {
      "collectionListPosition": 14,
      "collectionUrl": "https://www.baseus.com/collections/charging?sort_by=manual&filter.p.product_type=Power+Banks",
      "collectionProductsJsonUrl": "https://www.baseus.com/collections/charging/products.json?limit=250",
      "sourceFetchedAt": "2026-06-16",
      "sourceProductId": 7781280612429,
      "handle": "picogo-am31-mini-magnetic-power-bank-5000mah-20w",
      "vendor": "Baseus",
      "productType": "Power Banks",
      "tags": [
        "__label:NEW",
        "Charging",
        "On the go",
        "Power Banks"
      ],
      "status": "In Stock",
      "availableForSale": true,
      "priceUsd": 49.99,
      "priceRangeUsd": {
        "min": 49.99,
        "max": 49.99,
        "varies": false
      },
      "compareAtPriceUsd": 49.99,
      "sourceCurrency": "USD",
      "typicalCapacityMah": 5000,
      "estimatedEnergyWh": 19,
      "maxOutputW": 20,
      "advertisedPowerW": 20,
      "advertisedCapacityMah": 5000,
      "inferredInputOutputNotes": [
        "Capacity and max output are inferred from Baseus product title and product-page text where not separately exposed by Shopify JSON.",
        "Energy is estimated from advertised mAh at 3.7V nominal lithium-cell voltage."
      ],
      "features": [
        "5,000 mAh advertised capacity",
        "Up to 20 W output",
        "Magnetic wireless charging support"
      ],
      "options": [
        {
          "name": "Color",
          "position": 1,
          "values": [
            "Cosmic Black",
            "Galaxy Natural Titanium",
            "Space Gray"
          ]
        }
      ],
      "variants": [
        {
          "id": 42903568777293,
          "title": "Cosmic Black",
          "sku": "E0030303",
          "barcode": "6942521204762",
          "available": true,
          "priceUsd": 49.99,
          "compareAtPriceUsd": 49.99,
          "weightGrams": 0,
          "weightSource": "Shopify variant weight field",
          "weightPromotedToTopLevel": false,
          "options": [
            "Cosmic Black"
          ],
          "featuredImage": {
            "id": 35284780875853,
            "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_5000mAh_20W_Cosmic_Black_1.jpg?v=1776927481",
            "alt": "Baseus PicoGo AM31 Mini Magnetic Power Bank 5000mAh 20W Cosmic Black",
            "width": 1200,
            "height": 1200,
            "position": 1
          }
        },
        {
          "id": 42903568744525,
          "title": "Galaxy Natural Titanium",
          "sku": "E0030305",
          "barcode": "6942521204786",
          "available": true,
          "priceUsd": 49.99,
          "compareAtPriceUsd": 49.99,
          "weightGrams": 0,
          "weightSource": "Shopify variant weight field",
          "weightPromotedToTopLevel": false,
          "options": [
            "Galaxy Natural Titanium"
          ],
          "featuredImage": {
            "id": 35284846641229,
            "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_5000mAh_20W_Galaxy_Natural_Titanium_9.jpg?v=1776927570",
            "alt": "Baseus PicoGo AM31 Mini Magnetic Power Bank 5000mAh 20W Galaxy Natural Titanium",
            "width": 1200,
            "height": 1200,
            "position": 12
          }
        },
        {
          "id": 42903568810061,
          "title": "Space Gray",
          "sku": "E0030304",
          "barcode": "6942521204779",
          "available": true,
          "priceUsd": 49.99,
          "compareAtPriceUsd": 49.99,
          "weightGrams": 0,
          "weightSource": "Shopify variant weight field",
          "weightPromotedToTopLevel": false,
          "options": [
            "Space Gray"
          ],
          "featuredImage": {
            "id": 35284821180493,
            "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_5000mAh_20W_Space_Gray_5.jpg?v=1776927556",
            "alt": "Baseus PicoGo AM31 Mini Magnetic Power Bank 5000mAh 20W Space Gray",
            "width": 1200,
            "height": 1200,
            "position": 5
          }
        }
      ],
      "productImages": [
        {
          "position": 1,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_5000mAh_20W_Cosmic_Black_1.jpg?v=1776927481"
        },
        {
          "position": 2,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_5000mAh_20W_Cosmic_Black_2.jpg?v=1776927481"
        },
        {
          "position": 3,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_5000mAh_20W_Cosmic_Black_3.jpg?v=1776927481"
        },
        {
          "position": 4,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_5000mAh_20W_Cosmic_Black_4.jpg?v=1776927481"
        },
        {
          "position": 5,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_5000mAh_20W_Space_Gray_5.jpg?v=1776927556"
        },
        {
          "position": 6,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_5000mAh_20W_Space_Gray_6.jpg?v=1776927556"
        },
        {
          "position": 7,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_5000mAh_20W_Space_Gray_7.jpg?v=1776927556"
        },
        {
          "position": 8,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_5000mAh_20W_Space_Gray_8.jpg?v=1776927556"
        },
        {
          "position": 9,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_5000mAh_20W_Galaxy_Natural_Titanium_10.jpg?v=1776927571"
        },
        {
          "position": 10,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_5000mAh_20W_Galaxy_Natural_Titanium_11.jpg?v=1776927570"
        },
        {
          "position": 11,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_5000mAh_20W_Galaxy_Natural_Titanium_12.jpg?v=1776927571"
        },
        {
          "position": 12,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_5000mAh_20W_Galaxy_Natural_Titanium_9.jpg?v=1776927570"
        },
        {
          "position": 13,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_5000mAh_20W_13.jpg?v=1776927588"
        },
        {
          "position": 14,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_5000mAh_20W_14.jpg?v=1776927589"
        },
        {
          "position": 15,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_5000mAh_20W_15.jpg?v=1776927588"
        },
        {
          "position": 16,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_5000mAh_20W_16.jpg?v=1776927588"
        },
        {
          "position": 17,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_5000mAh_20W_17.jpg?v=1776927589"
        },
        {
          "position": 18,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_5000mAh_20W_18.jpg?v=1776927588"
        },
        {
          "position": 19,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_5000mAh_20W_19.jpg?v=1776927588"
        }
      ],
      "media": [
        {
          "id": 26954404495437,
          "position": 1,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM31 Mini Magnetic Power Bank 5000mAh 20W Cosmic Black",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_5000mAh_20W_Cosmic_Black_1.jpg?v=1776927481",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 26954404528205,
          "position": 2,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM31 Mini Magnetic Power Bank 5000mAh 20W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_5000mAh_20W_Cosmic_Black_2.jpg?v=1776927481",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 26954404560973,
          "position": 3,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM31 Mini Magnetic Power Bank 5000mAh 20W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_5000mAh_20W_Cosmic_Black_3.jpg?v=1776927481",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 26954404593741,
          "position": 4,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM31 Mini Magnetic Power Bank 5000mAh 20W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_5000mAh_20W_Cosmic_Black_4.jpg?v=1776927481",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 26954444734541,
          "position": 5,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM31 Mini Magnetic Power Bank 5000mAh 20W Space Gray",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_5000mAh_20W_Space_Gray_5.jpg?v=1776927556",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 26954444832845,
          "position": 6,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM31 Mini Magnetic Power Bank 5000mAh 20W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_5000mAh_20W_Space_Gray_6.jpg?v=1776927556",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 26954445160525,
          "position": 7,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM31 Mini Magnetic Power Bank 5000mAh 20W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_5000mAh_20W_Space_Gray_7.jpg?v=1776927556",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 26954444865613,
          "position": 8,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM31 Mini Magnetic Power Bank 5000mAh 20W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_5000mAh_20W_Space_Gray_8.jpg?v=1776927556",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 26954470326349,
          "position": 9,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM31 Mini Magnetic Power Bank 5000mAh 20W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_5000mAh_20W_Galaxy_Natural_Titanium_10.jpg?v=1776927571",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 26954470260813,
          "position": 10,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM31 Mini Magnetic Power Bank 5000mAh 20W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_5000mAh_20W_Galaxy_Natural_Titanium_11.jpg?v=1776927570",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 26954470359117,
          "position": 11,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM31 Mini Magnetic Power Bank 5000mAh 20W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_5000mAh_20W_Galaxy_Natural_Titanium_12.jpg?v=1776927571",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 26954470228045,
          "position": 12,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM31 Mini Magnetic Power Bank 5000mAh 20W Galaxy Natural Titanium",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_5000mAh_20W_Galaxy_Natural_Titanium_9.jpg?v=1776927570",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 26954501718093,
          "position": 13,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM31 Mini Magnetic Power Bank 5000mAh 20W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_5000mAh_20W_13.jpg?v=1776927588",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 26954501685325,
          "position": 14,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM31 Mini Magnetic Power Bank 5000mAh 20W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_5000mAh_20W_14.jpg?v=1776927589",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 26954502307917,
          "position": 15,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM31 Mini Magnetic Power Bank 5000mAh 20W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_5000mAh_20W_15.jpg?v=1776927588",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 26954501750861,
          "position": 16,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM31 Mini Magnetic Power Bank 5000mAh 20W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_5000mAh_20W_16.jpg?v=1776927588",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 26954502668365,
          "position": 17,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM31 Mini Magnetic Power Bank 5000mAh 20W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_5000mAh_20W_17.jpg?v=1776927589",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 26954501783629,
          "position": 18,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM31 Mini Magnetic Power Bank 5000mAh 20W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_5000mAh_20W_18.jpg?v=1776927588",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 26954502275149,
          "position": 19,
          "mediaType": "image",
          "alt": "Baseus PicoGo AM31 Mini Magnetic Power Bank 5000mAh 20W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_5000mAh_20W_19.jpg?v=1776927588",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        }
      ],
      "descriptionImages": [
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_5000mAh_20W_A_1.jpg?v=1776937432",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_5000mAh_20W_A_2.jpg?v=1776937432",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_5000mAh_20W_A_3_1.jpg?v=1776937432",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_5000mAh_20W_A_3_2.jpg?v=1776937432",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_5000mAh_20W_A_3_3.jpg?v=1776937432",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_5000mAh_20W_A_3_4.jpg?v=1776937432",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_5000mAh_20W_A_3_5.jpg?v=1776937432",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_5000mAh_20W_A_5_1.jpg?v=1776937432",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_5000mAh_20W_A_5_2.jpg?v=1776937432",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_5000mAh_20W_A_5_3.jpg?v=1776937432",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_5000mAh_20W_A_5_4.png?v=1776937432",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_5000mAh_20W_A_6_1.jpg?v=1776937353",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_PicoGo_AM31_Mini_Magnetic_Power_Bank_5000mAh_20W_A_5_5.jpg?v=1776937432"
      ],
      "descriptionHeadings": [],
      "descriptionBullets": [],
      "descriptionButtons": [
        "Versatile Charging",
        "Charge 2 at Once",
        "USB-C Fast Charging",
        "Pass-Through Charging",
        "Power for Emergencies",
        "Strong Magnetic Grip",
        "Advanced Cooling System",
        "Small Tips",
        "Compact Design",
        "Wide Compatibility"
      ],
      "descriptionText": "Versatile Charging Charge 2 at Once USB-C Fast Charging Pass-Through Charging Power for Emergencies Strong Magnetic Grip Strong Magnetic Grip Advanced Cooling System Small Tips Compact Design Wide Compatibility",
      "publishedAt": "2026-04-22T23:17:46-07:00",
      "createdAt": "2026-04-22T23:17:45-07:00"
    }
  },
  {
    "categorySlug": "power-banks",
    "manufacturer": "Baseus",
    "model": "Picogo Power Bank 45W 10000mAh With Built-in Cable",
    "slug": "baseus-picogo-power-bank-45w-10000mah-with-built-in-cable",
    "summary": "Picogo Power Bank 45W 10000mAh With Built-in Cable from Baseus with 10,000 mAh advertised capacity, up to 45 W output, built-in cable.",
    "summaryUk": "Picogo Power Bank 45W 10000mAh With Built-in Cable from Baseus with 10,000 mAh advertised capacity, up to 45 W output, built-in cable.",
    "imagePath": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_Picogo_Power_Bank_45W_10000mAh_With_Built-in_Cable__3.jpg?v=1725909302",
    "priceCents": 3999,
    "productCode": "P10076803123-00",
    "nominalVoltageV": 5,
    "capacityWh": 37,
    "continuousPowerW": 45,
    "peakPowerW": 45,
    "chemistry": "Lithium-ion",
    "communicationProtocols": null,
    "weightGrams": 100,
    "sourceLabel": "Baseus product page (picogo-power-bank-45w-10000mah-with-built-in-cable)",
    "sourceLabelUk": "Baseus product page (picogo-power-bank-45w-10000mah-with-built-in-cable)",
    "sourceUrl": "https://www.baseus.com/products/picogo-power-bank-45w-10000mah-with-built-in-cable",
    "specifications": {
      "collectionListPosition": 15,
      "collectionUrl": "https://www.baseus.com/collections/charging?sort_by=manual&filter.p.product_type=Power+Banks",
      "collectionProductsJsonUrl": "https://www.baseus.com/collections/charging/products.json?limit=250",
      "sourceFetchedAt": "2026-06-16",
      "sourceProductId": 7339174428749,
      "handle": "picogo-power-bank-45w-10000mah-with-built-in-cable",
      "vendor": "Baseus",
      "productType": "Power Banks",
      "tags": [
        "20% to 29% Off",
        "2025BFFD2",
        "2025PD",
        "2026PD",
        "Charging",
        "Clearance",
        "Picogo",
        "Power Banks",
        "Work"
      ],
      "status": "In Stock",
      "availableForSale": true,
      "priceUsd": 39.99,
      "priceRangeUsd": {
        "min": 39.99,
        "max": 39.99,
        "varies": false
      },
      "compareAtPriceUsd": 49.99,
      "sourceCurrency": "USD",
      "typicalCapacityMah": 10000,
      "estimatedEnergyWh": 37,
      "maxOutputW": 45,
      "advertisedPowerW": 45,
      "advertisedCapacityMah": 10000,
      "inferredInputOutputNotes": [
        "Capacity and max output are inferred from Baseus product title and product-page text where not separately exposed by Shopify JSON.",
        "Energy is estimated from advertised mAh at 3.7V nominal lithium-cell voltage."
      ],
      "features": [
        "10,000 mAh advertised capacity",
        "Up to 45 W output",
        "Built-in cable"
      ],
      "options": [
        {
          "name": "Color",
          "position": 1,
          "values": [
            "Black",
            "White"
          ]
        }
      ],
      "variants": [
        {
          "id": 41312683229261,
          "title": "Black",
          "sku": "P10076803123-00",
          "barcode": "6932172678715",
          "available": true,
          "priceUsd": 39.99,
          "compareAtPriceUsd": 49.99,
          "weightGrams": 100,
          "weightSource": "Shopify variant weight field",
          "weightPromotedToTopLevel": true,
          "options": [
            "Black"
          ],
          "featuredImage": {
            "id": 31839900467277,
            "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_Picogo_Power_Bank_45W_10000mAh_With_Built-in_Cable__3.jpg?v=1725909302",
            "alt": "Baseus Picogo Power Bank 45W 10000mAh With Built-in Cable Black",
            "width": 1200,
            "height": 1200,
            "position": 1
          }
        },
        {
          "id": 42119706247245,
          "title": "White",
          "sku": "P10076803213-00",
          "barcode": "6932172678722",
          "available": true,
          "priceUsd": 39.99,
          "compareAtPriceUsd": 49.99,
          "weightGrams": 100,
          "weightSource": "Shopify variant weight field",
          "weightPromotedToTopLevel": true,
          "options": [
            "White"
          ],
          "featuredImage": {
            "id": 33891761619021,
            "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_Picogo_Power_Bank_45W_10000mAh_With_Built_in_Cable_White_2_f20e069d-dbf5-4866-8a5b-54218b20bac7.jpg?v=1758267139",
            "alt": "Baseus Picogo Power Bank 45W 10000mAh With Built-in Cable White",
            "width": 1200,
            "height": 1200,
            "position": 4
          }
        }
      ],
      "productImages": [
        {
          "position": 1,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_Picogo_Power_Bank_45W_10000mAh_With_Built-in_Cable__3.jpg?v=1725909302"
        },
        {
          "position": 2,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_Picogo_Power_Bank_45W_10000mAh_With_Built-in_Cable__2.jpg?v=1725909313"
        },
        {
          "position": 3,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_Picogo_Power_Bank_45W_10000mAh_With_Built-in_Cable__1.jpg?v=1725909312"
        },
        {
          "position": 4,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_Picogo_Power_Bank_45W_10000mAh_With_Built_in_Cable_White_2_f20e069d-dbf5-4866-8a5b-54218b20bac7.jpg?v=1758267139"
        },
        {
          "position": 5,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_Picogo_Power_Bank_45W_10000mAh_With_Built_in_Cable_White_2.jpg?v=1758267139"
        },
        {
          "position": 6,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_Picogo_Power_Bank_45W_10000mAh_With_Built_in_Cable_White_1_d40de398-7285-41fd-9c46-d65835e0be2a.jpg?v=1758267139"
        },
        {
          "position": 7,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_Picogo_Power_Bank_45W_10000mAh_With_Built_in_Cable_White_3_7b1700ec-9456-454a-aeda-4680dc8c7b30.jpg?v=1758267139"
        },
        {
          "position": 8,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_Picogo_Power_Bank_45W_10000mAh_With_Built_in_Cable_White_4_0ee95c9d-c401-436e-9155-c1ddac8707db.jpg?v=1758267139"
        },
        {
          "position": 9,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_Picogo_Power_Bank_45W_10000mAh_With_Built_in_Cable_White_5_43898814-afac-4cf5-ad06-a05375fb9ee9.jpg?v=1758267139"
        },
        {
          "position": 10,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_Picogo_Power_Bank_45W_10000mAh_With_Built_in_Cable_White_6_05af54b2-55e1-4367-8b8a-afcef67f6661.jpg?v=1758267139"
        }
      ],
      "media": [
        {
          "id": 24262668288077,
          "position": 1,
          "mediaType": "image",
          "alt": "Baseus Picogo Power Bank 45W 10000mAh With Built-in Cable Black",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_Picogo_Power_Bank_45W_10000mAh_With_Built-in_Cable__3.jpg?v=1725909302",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 24262668779597,
          "position": 2,
          "mediaType": "image",
          "alt": "Baseus Picogo Power Bank 45W 10000mAh With Built-in Cable",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_Picogo_Power_Bank_45W_10000mAh_With_Built-in_Cable__2.jpg?v=1725909313",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 24262668746829,
          "position": 3,
          "mediaType": "image",
          "alt": "Baseus Picogo Power Bank 45W 10000mAh With Built-in Cable",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_Picogo_Power_Bank_45W_10000mAh_With_Built-in_Cable__1.jpg?v=1725909312",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 25659320107085,
          "position": 4,
          "mediaType": "image",
          "alt": "Baseus Picogo Power Bank 45W 10000mAh With Built-in Cable White",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_Picogo_Power_Bank_45W_10000mAh_With_Built_in_Cable_White_2_f20e069d-dbf5-4866-8a5b-54218b20bac7.jpg?v=1758267139",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 25659306639437,
          "position": 5,
          "mediaType": "image",
          "alt": "Baseus Picogo Power Bank 45W 10000mAh With Built-in Cable",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_Picogo_Power_Bank_45W_10000mAh_With_Built_in_Cable_White_2.jpg?v=1758267139",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 25659311226957,
          "position": 6,
          "mediaType": "image",
          "alt": "Baseus Picogo Power Bank 45W 10000mAh With Built-in Cable",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_Picogo_Power_Bank_45W_10000mAh_With_Built_in_Cable_White_1_d40de398-7285-41fd-9c46-d65835e0be2a.jpg?v=1758267139",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 25659311194189,
          "position": 7,
          "mediaType": "image",
          "alt": "Baseus Picogo Power Bank 45W 10000mAh With Built-in Cable",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_Picogo_Power_Bank_45W_10000mAh_With_Built_in_Cable_White_3_7b1700ec-9456-454a-aeda-4680dc8c7b30.jpg?v=1758267139",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 25659311325261,
          "position": 8,
          "mediaType": "image",
          "alt": "Baseus Picogo Power Bank 45W 10000mAh With Built-in Cable",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_Picogo_Power_Bank_45W_10000mAh_With_Built_in_Cable_White_4_0ee95c9d-c401-436e-9155-c1ddac8707db.jpg?v=1758267139",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 25659311292493,
          "position": 9,
          "mediaType": "image",
          "alt": "Baseus Picogo Power Bank 45W 10000mAh With Built-in Cable",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_Picogo_Power_Bank_45W_10000mAh_With_Built_in_Cable_White_5_43898814-afac-4cf5-ad06-a05375fb9ee9.jpg?v=1758267139",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 25659311358029,
          "position": 10,
          "mediaType": "image",
          "alt": "Baseus Picogo Power Bank 45W 10000mAh With Built-in Cable",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_Picogo_Power_Bank_45W_10000mAh_With_Built_in_Cable_White_6_05af54b2-55e1-4367-8b8a-afcef67f6661.jpg?v=1758267139",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        }
      ],
      "descriptionImages": [
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_Picogo_Power_Bank_45W_10000mAh_With_Built-in_Cable_A_1.jpg?v=1725909539",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_Picogo_Power_Bank_45W_10000mAh_With_Built-in_Cable_A_2-1.jpg?v=1725909540",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_Picogo_Power_Bank_45W_10000mAh_With_Built-in_Cable_A_2-2.jpg?v=1725909542",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_Picogo_Power_Bank_45W_10000mAh_With_Built-in_Cable_A_3-1.jpg?v=1725909541",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_Picogo_Power_Bank_45W_10000mAh_With_Built-in_Cable_A_3-2.jpg?v=1725909544",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_Picogo_Power_Bank_45W_10000mAh_With_Built-in_Cable_A_3-3.jpg?v=1725909545",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_Picogo_Power_Bank_45W_10000mAh_With_Built-in_Cable_A_4-1.jpg?v=1725909546",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_Picogo_Power_Bank_45W_10000mAh_With_Built-in_Cable_A_4-2.jpg?v=1725909547",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_Picogo_Power_Bank_45W_10000mAh_With_Built-in_Cable_A_4-3.jpg?v=1725909547",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_Picogo_Power_Bank_45W_10000mAh_With_Built-in_Cable_A_5-1.jpg?v=1725909546",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_Picogo_Power_Bank_45W_10000mAh_With_Built-in_Cable_A_5-2.jpg?v=1725909547",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_Picogo_Power_Bank_45W_10000mAh_With_Built-in_Cable_A_5-3.jpg?v=1725909547",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_Picogo_Power_Bank_45W_10000mAh_With_Built-in_Cable_A_5-4.jpg?v=1725909547",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_Picogo_Power_Bank_45W_10000mAh_With_Built-in_Cable_A_5-5.jpg?v=1725909546"
      ],
      "descriptionHeadings": [],
      "descriptionBullets": [],
      "descriptionButtons": [],
      "descriptionText": "",
      "publishedAt": "2024-09-09T12:16:45-07:00",
      "createdAt": "2024-09-09T12:16:45-07:00"
    }
  },
  {
    "categorySlug": "power-banks",
    "manufacturer": "Baseus",
    "model": "Blade H1 Digital Display Power Bank 20000mAh 100W",
    "slug": "baseus-blade-h1-digital-display-power-bank-20000mah-100w",
    "summary": "Blade H1 Digital Display Power Bank 20000mAh 100W from Baseus with 20,000 mAh advertised capacity, up to 100 W output, digital display.",
    "summaryUk": "Blade H1 Digital Display Power Bank 20000mAh 100W from Baseus with 20,000 mAh advertised capacity, up to 100 W output, digital display.",
    "imagePath": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus__Blade_H1_Digital_Display_Power_Bank_20000mAh_100W_5.jpg?v=1752588995",
    "priceCents": 8999,
    "productCode": "P10021604123-00",
    "nominalVoltageV": 5,
    "capacityWh": 74,
    "continuousPowerW": 100,
    "peakPowerW": 100,
    "chemistry": "Lithium-ion",
    "communicationProtocols": null,
    "weightGrams": null,
    "sourceLabel": "Baseus product page (blade-h1-digital-display-power-bank-20000mah-100w)",
    "sourceLabelUk": "Baseus product page (blade-h1-digital-display-power-bank-20000mah-100w)",
    "sourceUrl": "https://www.baseus.com/products/blade-h1-digital-display-power-bank-20000mah-100w",
    "specifications": {
      "collectionListPosition": 16,
      "collectionUrl": "https://www.baseus.com/collections/charging?sort_by=manual&filter.p.product_type=Power+Banks",
      "collectionProductsJsonUrl": "https://www.baseus.com/collections/charging/products.json?limit=250",
      "sourceFetchedAt": "2026-06-16",
      "sourceProductId": 7515301740621,
      "handle": "blade-h1-digital-display-power-bank-20000mah-100w",
      "vendor": "Baseus",
      "productType": "Power Banks",
      "tags": [
        "2025PD",
        "2026PD",
        "Charging",
        "Entertainment",
        "Office Power Up",
        "Power Banks",
        "Up to 20% Off"
      ],
      "status": "In Stock",
      "availableForSale": true,
      "priceUsd": 89.99,
      "priceRangeUsd": {
        "min": 89.99,
        "max": 89.99,
        "varies": false
      },
      "compareAtPriceUsd": 99.99,
      "sourceCurrency": "USD",
      "typicalCapacityMah": 20000,
      "estimatedEnergyWh": 74,
      "maxOutputW": 100,
      "advertisedPowerW": 100,
      "advertisedCapacityMah": 20000,
      "inferredInputOutputNotes": [
        "Capacity and max output are inferred from Baseus product title and product-page text where not separately exposed by Shopify JSON.",
        "Energy is estimated from advertised mAh at 3.7V nominal lithium-cell voltage."
      ],
      "features": [
        "20,000 mAh advertised capacity",
        "Up to 100 W output",
        "Digital display"
      ],
      "options": [
        {
          "name": "Title",
          "position": 1,
          "values": [
            "Default Title"
          ]
        }
      ],
      "variants": [
        {
          "id": 41896220622925,
          "title": "Default Title",
          "sku": "P10021604123-00",
          "barcode": "6932172682446",
          "available": true,
          "priceUsd": 89.99,
          "compareAtPriceUsd": 99.99,
          "weightGrams": 204570,
          "weightSource": "Shopify variant weight field",
          "weightPromotedToTopLevel": false,
          "options": [
            "Default Title"
          ],
          "featuredImage": null
        }
      ],
      "productImages": [
        {
          "position": 1,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus__Blade_H1_Digital_Display_Power_Bank_20000mAh_100W_5.jpg?v=1752588995"
        },
        {
          "position": 2,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus__Blade_H1_Digital_Display_Power_Bank_20000mAh_100W_4.jpg?v=1752588995"
        },
        {
          "position": 3,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus__Blade_H1_Digital_Display_Power_Bank_20000mAh_100W_1.jpg?v=1752588995"
        },
        {
          "position": 4,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus__Blade_H1_Digital_Display_Power_Bank_20000mAh_100W_2.jpg?v=1752588995"
        },
        {
          "position": 5,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus__Blade_H1_Digital_Display_Power_Bank_20000mAh_100W_3.jpg?v=1752588995"
        },
        {
          "position": 6,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus__Blade_H1_Digital_Display_Power_Bank_20000mAh_100W_6.jpg?v=1751267079"
        }
      ],
      "media": [
        {
          "id": 25334713057357,
          "position": 1,
          "mediaType": "image",
          "alt": "Baseus Blade H1 Digital Display Power Bank 20000mAh 100W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus__Blade_H1_Digital_Display_Power_Bank_20000mAh_100W_5.jpg?v=1752588995",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 25334713024589,
          "position": 2,
          "mediaType": "image",
          "alt": "Baseus Blade H1 Digital Display Power Bank 20000mAh 100W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus__Blade_H1_Digital_Display_Power_Bank_20000mAh_100W_4.jpg?v=1752588995",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 25334712926285,
          "position": 3,
          "mediaType": "image",
          "alt": "Baseus Blade H1 Digital Display Power Bank 20000mAh 100W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus__Blade_H1_Digital_Display_Power_Bank_20000mAh_100W_1.jpg?v=1752588995",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 25334712959053,
          "position": 4,
          "mediaType": "image",
          "alt": "Baseus Blade H1 Digital Display Power Bank 20000mAh 100W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus__Blade_H1_Digital_Display_Power_Bank_20000mAh_100W_2.jpg?v=1752588995",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 25334712991821,
          "position": 5,
          "mediaType": "image",
          "alt": "Baseus Blade H1 Digital Display Power Bank 20000mAh 100W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus__Blade_H1_Digital_Display_Power_Bank_20000mAh_100W_3.jpg?v=1752588995",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 25334713090125,
          "position": 6,
          "mediaType": "image",
          "alt": "Baseus Blade H1 Digital Display Power Bank 20000mAh 100W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus__Blade_H1_Digital_Display_Power_Bank_20000mAh_100W_6.jpg?v=1751267079",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        }
      ],
      "descriptionImages": [
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus__Blade_H1_Digital_Display_Power_Bank_20000mAh_100W_01.jpg?v=1751267073",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus__Blade_H1_Digital_Display_Power_Bank_20000mAh_100W_02.jpg?v=1751267074",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus__Blade_H1_Digital_Display_Power_Bank_20000mAh_100W_03_1.jpg?v=1751267073",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus__Blade_H1_Digital_Display_Power_Bank_20000mAh_100W_03_2.jpg?v=1751267073",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus__Blade_H1_Digital_Display_Power_Bank_20000mAh_100W_03_3.jpg?v=1751267074",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus__Blade_H1_Digital_Display_Power_Bank_20000mAh_100W_03_4.jpg?v=1751267074",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus__Blade_H1_Digital_Display_Power_Bank_20000mAh_100W_04_1.jpg?v=1751267075",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus__Blade_H1_Digital_Display_Power_Bank_20000mAh_100W_04_2.jpg?v=1751267073",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus__Blade_H1_Digital_Display_Power_Bank_20000mAh_100W_04_3.jpg?v=1751267073",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus__Blade_H1_Digital_Display_Power_Bank_20000mAh_100W_05_1.jpg?v=1751267075",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus__Blade_H1_Digital_Display_Power_Bank_20000mAh_100W_05_2.jpg?v=1751267074",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus__Blade_H1_Digital_Display_Power_Bank_20000mAh_100W_05_3.jpg?v=1751267075",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus__Blade_H1_Digital_Display_Power_Bank_20000mAh_100W_05_4.jpg?v=1751267074"
      ],
      "descriptionHeadings": [],
      "descriptionBullets": [],
      "descriptionButtons": [
        "Compact Design",
        "Smart Display",
        "Wide Compatibility",
        "Safety Protection",
        "Pass-through Charging",
        "60W Input",
        "Huge Capacity",
        "Outdoors",
        "Airline Travel",
        "Entertainment",
        "At the Office"
      ],
      "descriptionText": "Compact Design Smart Display Wide Compatibility Safety Protection Pass-through Charging 60W Input Huge Capacity Outdoors Airline Travel Entertainment At the Office",
      "publishedAt": "2025-06-30T00:22:01-07:00",
      "createdAt": "2025-06-30T00:02:19-07:00"
    }
  },
  {
    "categorySlug": "power-banks",
    "manufacturer": "Baseus",
    "model": "EnerFill FM21 Qi2.2 Magnetic Power Bank 10000mAh 45W",
    "slug": "baseus-enerfill-fm21-qi2-2-magnetic-power-bank-10000mah-45w",
    "summary": "EnerFill FM21 Qi2.2 Magnetic Power Bank 10000mAh 45W from Baseus with 10,000 mAh advertised capacity, up to 45 W output, Qi2.2 magnetic charging.",
    "summaryUk": "EnerFill FM21 Qi2.2 Magnetic Power Bank 10000mAh 45W from Baseus with 10,000 mAh advertised capacity, up to 45 W output, Qi2.2 magnetic charging.",
    "imagePath": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FM21_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_1.jpg?v=1781514794",
    "priceCents": 6999,
    "productCode": "E0031800",
    "nominalVoltageV": 5,
    "capacityWh": 37,
    "continuousPowerW": 45,
    "peakPowerW": 45,
    "chemistry": "Lithium-ion",
    "communicationProtocols": "Qi2.2, Magnetic wireless charging",
    "weightGrams": null,
    "sourceLabel": "Baseus product page (enerfill-fm21-qi2-2-magnetic-power-bank-10000mah-45w)",
    "sourceLabelUk": "Baseus product page (enerfill-fm21-qi2-2-magnetic-power-bank-10000mah-45w)",
    "sourceUrl": "https://www.baseus.com/products/enerfill-fm21-qi2-2-magnetic-power-bank-10000mah-45w",
    "specifications": {
      "collectionListPosition": 17,
      "collectionUrl": "https://www.baseus.com/collections/charging?sort_by=manual&filter.p.product_type=Power+Banks",
      "collectionProductsJsonUrl": "https://www.baseus.com/collections/charging/products.json?limit=250",
      "sourceFetchedAt": "2026-06-16",
      "sourceProductId": 7853248512077,
      "handle": "enerfill-fm21-qi2-2-magnetic-power-bank-10000mah-45w",
      "vendor": "Baseus",
      "productType": "Power Banks",
      "tags": [
        "2026PD",
        "__label:NEW",
        "Charging",
        "Power Banks"
      ],
      "status": "In Stock",
      "availableForSale": true,
      "priceUsd": 69.99,
      "priceRangeUsd": {
        "min": 69.99,
        "max": 69.99,
        "varies": false
      },
      "compareAtPriceUsd": 79.99,
      "sourceCurrency": "USD",
      "typicalCapacityMah": 10000,
      "estimatedEnergyWh": 37,
      "maxOutputW": 45,
      "advertisedPowerW": 45,
      "advertisedCapacityMah": 10000,
      "inferredInputOutputNotes": [
        "Capacity and max output are inferred from Baseus product title and product-page text where not separately exposed by Shopify JSON.",
        "Energy is estimated from advertised mAh at 3.7V nominal lithium-cell voltage."
      ],
      "features": [
        "10,000 mAh advertised capacity",
        "Up to 45 W output",
        "Qi2.2 magnetic wireless charging"
      ],
      "options": [
        {
          "name": "Title",
          "position": 1,
          "values": [
            "Default Title"
          ]
        }
      ],
      "variants": [
        {
          "id": 43128354963533,
          "title": "Default Title",
          "sku": "E0031800",
          "barcode": "6942521213238",
          "available": true,
          "priceUsd": 69.99,
          "compareAtPriceUsd": 79.99,
          "weightGrams": 100244,
          "weightSource": "Shopify variant weight field",
          "weightPromotedToTopLevel": false,
          "options": [
            "Default Title"
          ],
          "featuredImage": null
        }
      ],
      "productImages": [
        {
          "position": 1,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FM21_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_1.jpg?v=1781514794"
        },
        {
          "position": 2,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FM21_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_2.jpg?v=1781514794"
        },
        {
          "position": 3,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FM21_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_3.jpg?v=1781514794"
        },
        {
          "position": 4,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FM21_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_4.jpg?v=1781514794"
        },
        {
          "position": 5,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FM21_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_5.jpg?v=1781514794"
        },
        {
          "position": 6,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FM21_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_6.jpg?v=1781514794"
        },
        {
          "position": 7,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FM21_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_7.jpg?v=1781514794"
        },
        {
          "position": 8,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FM21_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_8.jpg?v=1781514794"
        },
        {
          "position": 9,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FM21_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_9.jpg?v=1781514794"
        },
        {
          "position": 10,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FM21_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_10.jpg?v=1781514794"
        },
        {
          "position": 11,
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FM21_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_11.jpg?v=1781514794"
        }
      ],
      "media": [
        {
          "id": 27398383796301,
          "position": 1,
          "mediaType": "image",
          "alt": "Baseus EnerFill FM21 Qi2.2 Magnetic Power Bank 10000mAh 45W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FM21_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_1.jpg?v=1781514794",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 27398383829069,
          "position": 2,
          "mediaType": "image",
          "alt": "Baseus EnerFill FM21 Qi2.2 Magnetic Power Bank 10000mAh 45W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FM21_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_2.jpg?v=1781514794",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 27398383861837,
          "position": 3,
          "mediaType": "image",
          "alt": "Baseus EnerFill FM21 Qi2.2 Magnetic Power Bank 10000mAh 45W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FM21_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_3.jpg?v=1781514794",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 27398383894605,
          "position": 4,
          "mediaType": "image",
          "alt": "Baseus EnerFill FM21 Qi2.2 Magnetic Power Bank 10000mAh 45W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FM21_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_4.jpg?v=1781514794",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 27398383927373,
          "position": 5,
          "mediaType": "image",
          "alt": "Baseus EnerFill FM21 Qi2.2 Magnetic Power Bank 10000mAh 45W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FM21_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_5.jpg?v=1781514794",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 27398383960141,
          "position": 6,
          "mediaType": "image",
          "alt": "Baseus EnerFill FM21 Qi2.2 Magnetic Power Bank 10000mAh 45W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FM21_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_6.jpg?v=1781514794",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 27398383992909,
          "position": 7,
          "mediaType": "image",
          "alt": "Baseus EnerFill FM21 Qi2.2 Magnetic Power Bank 10000mAh 45W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FM21_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_7.jpg?v=1781514794",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 27398384025677,
          "position": 8,
          "mediaType": "image",
          "alt": "Baseus EnerFill FM21 Qi2.2 Magnetic Power Bank 10000mAh 45W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FM21_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_8.jpg?v=1781514794",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 27398384058445,
          "position": 9,
          "mediaType": "image",
          "alt": "Baseus EnerFill FM21 Qi2.2 Magnetic Power Bank 10000mAh 45W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FM21_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_9.jpg?v=1781514794",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 27398384091213,
          "position": 10,
          "mediaType": "image",
          "alt": "Baseus EnerFill FM21 Qi2.2 Magnetic Power Bank 10000mAh 45W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FM21_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_10.jpg?v=1781514794",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        },
        {
          "id": 27398384123981,
          "position": 11,
          "mediaType": "image",
          "alt": "Baseus EnerFill FM21 Qi2.2 Magnetic Power Bank 10000mAh 45W",
          "src": "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FM21_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_11.jpg?v=1781514794",
          "width": 1200,
          "height": 1200,
          "aspectRatio": 1
        }
      ],
      "descriptionImages": [
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FM21_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_A_1.jpg?v=1781516356",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FM21_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_A_2.jpg?v=1781516356",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FM21_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_A_3_1.jpg?v=1781516357",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FM21_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_A_3_2.jpg?v=1781516356",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FM21_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_A_3_3.jpg?v=1781516357",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FM21_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_A_3_4.jpg?v=1781516356",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FM21_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_A_4_1.jpg?v=1781516357",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FM21_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_A_4_2.jpg?v=1781516356",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FM21_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_A_4_3.jpg?v=1781516357",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FM21_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_A_4_4.jpg?v=1781516356",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FM21_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_A_5_1.jpg?v=1781516355",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FM21_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_A_5_2.jpg?v=1781516355",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FM21_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_A_6_1.jpg?v=1781516358",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FM21_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_A_6_2.jpg?v=1781516357",
        "https://cdn.shopify.com/s/files/1/0555/8432/5709/files/Baseus_EnerFill_FM21_Qi2.2_Magnetic_Power_Bank_10000mAh_45W_A_6_3.jpg?v=1781516357"
      ],
      "descriptionHeadings": [],
      "descriptionBullets": [],
      "descriptionButtons": [
        "Qi2.2 Certified",
        "45W Fast Charging",
        "30W Fast Recharging",
        "Charge 2 Devices",
        "Stay Coll & Charge Safely",
        "Portability",
        "Strong Magnetic Force",
        "User-friendly Design",
        "Qi2 Compare",
        "Universal Compatibility",
        "Trave Campaign",
        "Easy Commute",
        "Coffee Shop"
      ],
      "descriptionText": "Qi2.2 Certified 45W Fast Charging 30W Fast Recharging Charge 2 Devices Stay Coll & Charge Safely Portability Strong Magnetic Force User-friendly Design Qi2 Compare Universal Compatibility Trave Campaign Easy Commute Coffee Shop",
      "publishedAt": "2026-06-16T02:37:48-07:00",
      "createdAt": "2026-06-15T02:42:19-07:00"
    }
  }
];
