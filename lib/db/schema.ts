import {
  integer,
  jsonb,
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
  varchar,
} from "drizzle-orm/pg-core";

export const equipmentCategories = pgTable(
  "equipment_categories",
  {
    id: serial("id").primaryKey(),
    slug: varchar("slug", { length: 64 }).notNull(),
    name: varchar("name", { length: 120 }).notNull(),
    nameUk: varchar("name_uk", { length: 120 }),
    description: text("description").notNull(),
    descriptionUk: text("description_uk"),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [uniqueIndex("equipment_categories_slug_idx").on(table.slug)],
);

export const manufacturers = pgTable(
  "manufacturers",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 120 }).notNull(),
    country: varchar("country", { length: 80 }),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [uniqueIndex("manufacturers_name_idx").on(table.name)],
);

export const equipment = pgTable(
  "equipment",
  {
    id: serial("id").primaryKey(),
    categoryId: integer("category_id")
      .notNull()
      .references(() => equipmentCategories.id, { onDelete: "cascade" }),
    manufacturerId: integer("manufacturer_id")
      .notNull()
      .references(() => manufacturers.id, { onDelete: "restrict" }),
    slug: varchar("slug", { length: 160 }).notNull(),
    model: varchar("model", { length: 160 }).notNull(),
    summary: text("summary").notNull(),
    summaryUk: text("summary_uk"),
    imagePath: varchar("image_path", { length: 400 }).notNull(),
    priceCents: integer("price_cents"),
    productCode: varchar("product_code", { length: 120 }),
    nominalVoltageV: integer("nominal_voltage_v"),
    capacityWh: integer("capacity_wh"),
    continuousPowerW: integer("continuous_power_w"),
    peakPowerW: integer("peak_power_w"),
    maxPvVoltageV: integer("max_pv_voltage_v"),
    maxChargeCurrentA: integer("max_charge_current_a"),
    chemistry: varchar("chemistry", { length: 80 }),
    communicationProtocols: varchar("communication_protocols", { length: 160 }),
    weightGrams: integer("weight_grams"),
    warrantyYears: integer("warranty_years"),
    lifecycleCycles: integer("lifecycle_cycles"),
    sourceLabel: varchar("source_label", { length: 160 }).notNull(),
    sourceLabelUk: varchar("source_label_uk", { length: 160 }),
    sourceUrl: varchar("source_url", { length: 400 }),
    specifications: jsonb("specifications"),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [uniqueIndex("equipment_slug_idx").on(table.slug)],
);
