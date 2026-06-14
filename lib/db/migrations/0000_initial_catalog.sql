CREATE TABLE IF NOT EXISTS "equipment_categories" (
	"id" serial PRIMARY KEY NOT NULL,
	"slug" varchar(64) NOT NULL,
	"name" varchar(120) NOT NULL,
	"name_uk" varchar(120),
	"description" text NOT NULL,
	"description_uk" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "manufacturers" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(120) NOT NULL,
	"country" varchar(80),
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "equipment" (
	"id" serial PRIMARY KEY NOT NULL,
	"category_id" integer NOT NULL,
	"manufacturer_id" integer NOT NULL,
	"slug" varchar(160) NOT NULL,
	"model" varchar(160) NOT NULL,
	"summary" text NOT NULL,
	"summary_uk" text,
	"image_path" varchar(400) NOT NULL,
	"price_cents" integer,
	"product_code" varchar(120),
	"nominal_voltage_v" integer,
	"capacity_wh" integer,
	"continuous_power_w" integer,
	"peak_power_w" integer,
	"max_pv_voltage_v" integer,
	"max_charge_current_a" integer,
	"chemistry" varchar(80),
	"chemistry_uk" varchar(80),
	"communication_protocols" varchar(160),
	"weight_grams" integer,
	"warranty_years" integer,
	"lifecycle_cycles" integer,
	"source_label" varchar(160) NOT NULL,
	"source_label_uk" varchar(160),
	"source_url" varchar(400),
	"specifications" jsonb,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);

DO $$ BEGIN
 ALTER TABLE "equipment" ADD CONSTRAINT "equipment_category_id_equipment_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "equipment_categories"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "equipment" ADD CONSTRAINT "equipment_manufacturer_id_manufacturers_id_fk" FOREIGN KEY ("manufacturer_id") REFERENCES "manufacturers"("id") ON DELETE restrict ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

CREATE UNIQUE INDEX IF NOT EXISTS "equipment_categories_slug_idx" ON "equipment_categories" USING btree ("slug");
CREATE UNIQUE INDEX IF NOT EXISTS "manufacturers_name_idx" ON "manufacturers" USING btree ("name");
CREATE UNIQUE INDEX IF NOT EXISTS "equipment_slug_idx" ON "equipment" USING btree ("slug");

ALTER TABLE "equipment_categories" ADD COLUMN IF NOT EXISTS "name_uk" varchar(120);
ALTER TABLE "equipment_categories" ADD COLUMN IF NOT EXISTS "description_uk" text;
ALTER TABLE "equipment" ADD COLUMN IF NOT EXISTS "summary_uk" text;
ALTER TABLE "equipment" ADD COLUMN IF NOT EXISTS "chemistry_uk" varchar(80);
ALTER TABLE "equipment" ADD COLUMN IF NOT EXISTS "source_label_uk" varchar(160);
ALTER TABLE "equipment" ALTER COLUMN "image_path" TYPE varchar(400);
ALTER TABLE "equipment" ALTER COLUMN "price_cents" DROP NOT NULL;
ALTER TABLE "equipment" ADD COLUMN IF NOT EXISTS "product_code" varchar(120);
ALTER TABLE "equipment" ADD COLUMN IF NOT EXISTS "source_url" varchar(400);
ALTER TABLE "equipment" ADD COLUMN IF NOT EXISTS "specifications" jsonb;
