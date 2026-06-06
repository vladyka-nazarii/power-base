# Architecture

PowerBase is a Next.js App Router application backed by PostgreSQL and Redis, deployed as containers on a self-hosted Synology NAS.

## Logical Components

- `web`: Next.js application running on Bun.
- `postgres`: PostgreSQL 15 database for source-of-truth catalog data.
- `redis`: Redis cache for expensive reads and derived comparison data.
- `media`: Nginx or equivalent static server for uploaded files.
- `cloudflared`: Cloudflare Tunnel ingress for public routes.
- `watchtower`: Deployment automation that pulls fresh images and restarts containers.

## Runtime Boundaries

The web container is ephemeral. It should be replaceable at any time without losing user data or uploaded assets.

Persistent state belongs in:

- PostgreSQL volumes for relational data.
- Redis volumes only when configured for cache durability.
- Media volumes mounted from the NAS for uploaded files.

## Network Model

Production uses a zero-trust network posture:

- No public inbound port forwarding.
- Public traffic enters through Cloudflare Tunnel.
- Internal service communication happens on Docker networks.
- PostgreSQL and Redis are not publicly exposed.
- Media is served from a dedicated hostname, separate from the app hostname.

## Data Flow

Typical catalog read:

1. User requests a catalog, detail, comparison, or compatibility page.
2. The web app checks Redis for a cached derived response when appropriate.
3. On cache miss, the web app reads normalized data through Drizzle ORM.
4. Derived results are cached with versioned keys.
5. The UI renders typed specs and links to public media URLs.

Typical upload:

1. The web app validates the uploaded file.
2. The file is written to `process.env.UPLOAD_DIR`.
3. A public URL is generated from the configured media base URL.
4. PostgreSQL stores the public URL and metadata.
5. Nginx serves the file through the media hostname.

## Database Access

All application database access must go through Drizzle ORM. Schema changes should use Drizzle migrations. Raw SQL should be limited to migration internals or narrow Drizzle-supported expressions where the ORM cannot express a query clearly.

## Cache Access

Redis should cache derived reads that are expensive or frequently repeated:

- comparison tables
- compatibility reports
- filtered equipment result sets
- manufacturer or category summaries

Cache keys should be explicit, versioned, and invalidated when equipment data changes.
