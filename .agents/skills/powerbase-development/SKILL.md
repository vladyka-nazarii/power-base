# PowerBase Development

Use this skill when implementing application features, refactors, bug fixes, database work, caching, upload handling, or deployment-related changes in PowerBase.

## Required Context

Before editing, read:

- `AGENTS.md`
- `docs/DEVELOPMENT.md`
- the files directly related to the requested change

If the work touches infrastructure, also read:

- `docs/ARCHITECTURE.md`
- `docs/DEPLOYMENT.md`
- `docs/ENVIRONMENT.md`

## Project Rules

- Use Bun only: `bun run`, `bun add`, `bun install`.
- Use Drizzle ORM for all database queries.
- Use Redis for expensive derived reads.
- Keep runtime secrets out of client code and build-time assumptions.
- Treat the app container as ephemeral.
- Store uploads in `process.env.UPLOAD_DIR`.
- Store only public media URLs and metadata in PostgreSQL.

## Implementation Workflow

1. Inspect current structure and scripts.
2. Identify the narrowest files to change.
3. Follow existing component and TypeScript style.
4. Keep domain logic testable outside React where practical.
5. Add or update docs if the change affects setup, environment, architecture, or deployment.
6. Run `bun run lint`.
7. Run `bun run build` for runtime, routing, Docker, or data-layer changes.

## Database Workflow

When adding database features:

1. Define Drizzle schema with explicit types and constraints.
2. Add migrations.
3. Add indexes for common catalog, manufacturer, category, and comparison queries.
4. Keep canonical numeric values in base units where possible.
5. Preserve source traceability for technical claims.

## Cache Workflow

When adding Redis cache:

1. Cache only derived or expensive reads.
2. Use explicit versioned keys.
3. Include invalidation behavior in the same change.
4. Avoid storing sensitive user-specific data without a clear expiry plan.

## Upload Workflow

When adding uploads:

1. Validate size and MIME type.
2. Write to `UPLOAD_DIR`.
3. Generate a URL from `MEDIA_BASE_URL`.
4. Store only URL and metadata in PostgreSQL.
5. Do not serve persistent uploads through the Next.js container.
