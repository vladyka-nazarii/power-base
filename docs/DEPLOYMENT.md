# Deployment

PowerBase is designed for automated container deployment to a self-hosted Synology NAS using GitHub Actions, GHCR, Cloudflare Tunnel, and Watchtower.

## Production Principles

- No inbound public ports are exposed on the NAS.
- Cloudflare Tunnel handles public ingress.
- PostgreSQL and Redis remain internal services.
- Uploaded media is stored on a persistent NAS-mounted volume.
- Nginx or an equivalent static server serves uploaded files from a dedicated media hostname.
- The web container is ephemeral and can be replaced on every deployment.

## CI/CD Flow

1. GitHub Actions builds the Docker image.
2. The image is pushed to GitHub Container Registry.
3. GitHub Actions calls an authenticated Watchtower HTTP webhook through Cloudflare Tunnel.
4. Watchtower pulls the new image.
5. Watchtower gracefully restarts the web container.
6. The web container runs Drizzle migrations before starting the Next.js server.
7. The new application version begins accepting traffic.

## Migration Requirement

Production startup must run database migrations before the web server accepts traffic. The intended command is:

```bash
bun run src/db/migrate.ts
```

If this path changes, update this document, `AGENTS.md`, and the Docker startup command together.

## Media Requirement

Uploads must not be stored in the web image or temporary container filesystem. Use a persistent mounted path from `UPLOAD_DIR`, and store only public media URLs in PostgreSQL.

## Rollback Notes

Because schema migrations run automatically, rollbacks must account for database compatibility. Prefer backward-compatible migrations when possible:

- add nullable columns before requiring them
- deploy code that can read old and new shapes during transitions
- backfill data before adding strict constraints
- avoid destructive schema changes without a tested rollback path
