import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import * as schema from "@/lib/db/schema";

const connectionString =
  process.env.DATABASE_URL ??
  "postgresql://powerbase_admin:dev_password@localhost:5432/powerbase_db";

const queryClient = postgres(connectionString, {
  max: 5,
  prepare: false,
});

export const db = drizzle(queryClient, { schema });
export const postgresClient = queryClient;
