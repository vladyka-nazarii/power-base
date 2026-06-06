# PowerBase

PowerBase is a full-stack web application for cataloging, comparing, and managing alternative energy equipment such as inverters, batteries, solar panels, portable power stations, and related system components.

It is designed to turn fragmented manufacturer PDFs, manuals, and product pages into a structured database that supports search, side-by-side comparison, compatibility checks, and practical alternative-energy system planning.

## Stack

- Next.js App Router
- TypeScript
- Bun
- PostgreSQL 15
- Drizzle ORM
- Redis with `ioredis`
- Docker and Docker Compose
- GitHub Actions, GHCR, Cloudflare Tunnel, and Watchtower for deployment

## Development

Install dependencies:

```bash
bun install
```

Start local database and cache services:

```bash
docker compose -f docker-compose.dev.yml up -d
```

Start the app:

```bash
bun run dev
```

Open `http://localhost:3000`.

## Verification

```bash
bun run lint
bun run build
```

## Agentic Development

This repository includes project guidance for Codex and other AI agents:

- `AGENTS.md`: primary project instructions and non-negotiables.
- `.codex/skills/powerbase-development/SKILL.md`: implementation workflow for PowerBase.
- `.codex/skills/equipment-data-modeling/SKILL.md`: equipment catalog and specification modeling workflow.
- `.agents/skills/`: repo-local skills installed from `skills.sh`.
- `docs/AGENT_SKILLS.md`: installed skill inventory and precedence rules.
- `docs/`: product, architecture, development, environment, and deployment docs.

Agents should read `AGENTS.md` before making changes.

## Documentation

- `docs/PROJECT_BRIEF.md`
- `docs/ARCHITECTURE.md`
- `docs/DEVELOPMENT.md`
- `docs/ENVIRONMENT.md`
- `docs/DEPLOYMENT.md`
- `docs/AGENT_SKILLS.md`

## Deployment Model

Production is intended for a self-hosted Synology NAS using a zero-trust network model:

- no public inbound port forwarding
- Cloudflare Tunnel for public ingress
- internal Docker networking for `web`, `postgres`, `redis`, media serving, and deployment automation
- uploaded files stored on a persistent NAS-mounted volume and served by a dedicated media host
- GitHub Actions builds and pushes the image to GHCR
- Watchtower pulls and restarts the web container after an authenticated webhook
- Drizzle migrations run before the Next.js server accepts traffic
