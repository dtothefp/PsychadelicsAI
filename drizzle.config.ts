import { defineConfig } from "drizzle-kit";
import { config } from "dotenv";

// Load environment variables from .env.local by default, or .env.prod if DRIZZLE_ENV=prod
const envFile = process.env.DRIZZLE_ENV === "prod" ? ".env.prod" : ".env.local";
config({ path: envFile });

// DATABASE_URL format: postgresql://postgres:[password]@db.[project-ref].supabase.co:5432/postgres
// Get this from Supabase: Project Settings > Database > Connection string > URI
const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  const envFile =
    process.env.DRIZZLE_ENV === "prod" ? ".env.prod" : ".env.local";
  throw new Error(
    `DATABASE_URL must be set in ${envFile}. ` +
      "Get it from Supabase: Project Settings > Database > Connection string > URI"
  );
}

export default defineConfig({
  out: "./migrations",
  schema: "./shared/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: databaseUrl,
  },
});
