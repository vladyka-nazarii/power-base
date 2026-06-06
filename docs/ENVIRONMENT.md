# Environment Variables

PowerBase assumes strict separation between build-time and runtime configuration. Secrets should be injected by Docker Compose or the deployment environment and must not be committed.

## Application

| Variable | Required | Scope | Description |
| --- | --- | --- | --- |
| `NODE_ENV` | yes | runtime | Standard Node/Bun environment mode. |
| `PORT` | yes | runtime | Port used by the Next.js standalone server. |
| `NEXT_TELEMETRY_DISABLED` | recommended | build/runtime | Disable Next.js telemetry in containers. |
| `APP_BASE_URL` | yes | runtime | Public application URL. |
| `MEDIA_BASE_URL` | yes | runtime | Public base URL for uploaded media served by Nginx. |
| `UPLOAD_DIR` | yes | runtime | Filesystem path mounted to persistent media storage. |

## PostgreSQL

| Variable | Required | Scope | Description |
| --- | --- | --- | --- |
| `DATABASE_URL` | yes | runtime | PostgreSQL connection string used by Drizzle. |
| `POSTGRES_USER` | local/dev | runtime | Local Docker Postgres user. |
| `POSTGRES_PASSWORD` | local/dev | runtime | Local Docker Postgres password. |
| `POSTGRES_DB` | local/dev | runtime | Local Docker Postgres database. |

## Redis

| Variable | Required | Scope | Description |
| --- | --- | --- | --- |
| `REDIS_URL` | yes | runtime | Redis connection string for `ioredis`. |
| `REDIS_PASSWORD` | local/dev | runtime | Local Docker Redis password. |

## Deployment

| Variable | Required | Scope | Description |
| --- | --- | --- | --- |
| `GHCR_IMAGE` | deploy | CI/deploy | Container image name pushed by GitHub Actions. |
| `WATCHTOWER_HTTP_API_TOKEN` | deploy | runtime | Token for authenticated Watchtower webhook calls. |
| `CLOUDFLARE_TUNNEL_TOKEN` | deploy | runtime | Token used by the Cloudflare Tunnel container. |

## Rules

- Never expose secrets through `NEXT_PUBLIC_` variables.
- Only use `NEXT_PUBLIC_` for values that are safe to ship to browsers.
- Do not rely on runtime-only secrets during `bun run build`.
- Keep `.env` local and uncommitted.
