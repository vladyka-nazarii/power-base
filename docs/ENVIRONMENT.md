# Environment Variables

PowerBase assumes strict separation between build-time and runtime configuration. Secrets should be injected by Docker Compose or the deployment environment and must not be committed.

## Application

| Variable                  | Required    | Scope         | Description                                                                                      |
| ------------------------- | ----------- | ------------- | ------------------------------------------------------------------------------------------------ |
| `NODE_ENV`                | yes         | runtime       | Standard Node/Bun environment mode.                                                              |
| `PORT`                    | yes         | runtime       | Port used by the Next.js standalone server.                                                      |
| `NEXT_TELEMETRY_DISABLED` | recommended | build/runtime | Disable Next.js telemetry in containers.                                                         |
| `APP_BASE_URL`            | yes         | runtime       | Public application URL.                                                                          |
| `MEDIA_BASE_URL`          | yes         | runtime       | Public base URL for uploaded media served by Nginx.                                              |
| `UPLOAD_DIR`              | yes         | runtime       | Filesystem path mounted to persistent media storage.                                             |
| `BETTER_AUTH_URL`         | yes         | runtime       | Public application URL used by Better Auth callbacks. Usually the same origin as `APP_BASE_URL`. |
| `BETTER_AUTH_SECRET`      | yes         | runtime       | Secret used by Better Auth to sign and verify auth data.                                         |

## Authentication

| Variable               | Required   | Scope   | Description                               |
| ---------------------- | ---------- | ------- | ----------------------------------------- |
| `GOOGLE_CLIENT_ID`     | auth       | runtime | Google OAuth client ID.                   |
| `GOOGLE_CLIENT_SECRET` | auth       | runtime | Google OAuth client secret.               |
| `GITHUB_CLIENT_ID`     | auth       | runtime | GitHub OAuth client ID.                   |
| `GITHUB_CLIENT_SECRET` | auth       | runtime | GitHub OAuth client secret.               |
| `EMAIL_FROM`           | email auth | runtime | Sender address for verification emails.   |
| `SMTP_HOST`            | email auth | runtime | SMTP server host for verification emails. |
| `SMTP_PORT`            | email auth | runtime | SMTP server port. Port `465` uses TLS.    |
| `SMTP_USER`            | email auth | runtime | SMTP username.                            |
| `SMTP_PASSWORD`        | email auth | runtime | SMTP password.                            |

In local development, verification emails are logged to the server console when SMTP variables are not configured.

## PostgreSQL

| Variable            | Required  | Scope   | Description                                   |
| ------------------- | --------- | ------- | --------------------------------------------- |
| `DATABASE_URL`      | yes       | runtime | PostgreSQL connection string used by Drizzle. |
| `POSTGRES_USER`     | local/dev | runtime | Local Docker Postgres user.                   |
| `POSTGRES_PASSWORD` | local/dev | runtime | Local Docker Postgres password.               |
| `POSTGRES_DB`       | local/dev | runtime | Local Docker Postgres database.               |

## Redis

| Variable         | Required  | Scope   | Description                            |
| ---------------- | --------- | ------- | -------------------------------------- |
| `REDIS_URL`      | yes       | runtime | Redis connection string for `ioredis`. |
| `REDIS_PASSWORD` | local/dev | runtime | Local Docker Redis password.           |

## Deployment

| Variable                    | Required | Scope     | Description                                       |
| --------------------------- | -------- | --------- | ------------------------------------------------- |
| `GHCR_IMAGE`                | deploy   | CI/deploy | Container image name pushed by GitHub Actions.    |
| `WATCHTOWER_HTTP_API_TOKEN` | deploy   | runtime   | Token for authenticated Watchtower webhook calls. |
| `CLOUDFLARE_TUNNEL_TOKEN`   | deploy   | runtime   | Token used by the Cloudflare Tunnel container.    |

## Rules

- Never expose secrets through `NEXT_PUBLIC_` variables.
- Only use `NEXT_PUBLIC_` for values that are safe to ship to browsers.
- Do not rely on runtime-only secrets during `bun run build`.
- Keep `.env` local and uncommitted.
