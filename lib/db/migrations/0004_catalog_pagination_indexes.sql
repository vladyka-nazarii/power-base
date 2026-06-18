CREATE EXTENSION IF NOT EXISTS "pg_trgm";

CREATE INDEX IF NOT EXISTS "equipment_category_id_idx"
ON "equipment" USING btree ("category_id");

CREATE INDEX IF NOT EXISTS "equipment_manufacturer_id_idx"
ON "equipment" USING btree ("manufacturer_id");

CREATE INDEX IF NOT EXISTS "equipment_category_id_id_idx"
ON "equipment" USING btree ("category_id", "id");

CREATE INDEX IF NOT EXISTS "equipment_category_price_id_idx"
ON "equipment" USING btree ("category_id", "price_cents", "id");

CREATE INDEX IF NOT EXISTS "equipment_category_capacity_id_idx"
ON "equipment" USING btree ("category_id", "capacity_wh", "id");

CREATE INDEX IF NOT EXISTS "equipment_category_voltage_id_idx"
ON "equipment" USING btree ("category_id", "nominal_voltage_v", "id");

CREATE INDEX IF NOT EXISTS "equipment_category_chemistry_id_idx"
ON "equipment" USING btree ("category_id", "chemistry", "id");

CREATE INDEX IF NOT EXISTS "equipment_category_power_id_idx"
ON "equipment" USING btree ("category_id", "continuous_power_w", "id");

CREATE INDEX IF NOT EXISTS "equipment_category_weight_id_idx"
ON "equipment" USING btree ("category_id", "weight_grams", "id");

CREATE INDEX IF NOT EXISTS "equipment_model_trgm_idx"
ON "equipment" USING gin ("model" gin_trgm_ops);

CREATE INDEX IF NOT EXISTS "equipment_summary_trgm_idx"
ON "equipment" USING gin ("summary" gin_trgm_ops);

CREATE INDEX IF NOT EXISTS "equipment_summary_uk_trgm_idx"
ON "equipment" USING gin ("summary_uk" gin_trgm_ops);
