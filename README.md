# PowerBase

[![Bun](https://img.shields.io/badge/Bun-000000?logo=bun&logoColor=white)](https://bun.sh)
[![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=111111)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Biome](https://img.shields.io/badge/Biome-2-60A5FA?logo=biome&logoColor=white)](https://biomejs.dev)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-4169E1?logo=postgresql&logoColor=white)](https://www.postgresql.org)
[![Redis](https://img.shields.io/badge/Redis-cache-FF4438?logo=redis&logoColor=white)](https://redis.io)
[![Drizzle](https://img.shields.io/badge/Drizzle-ORM-C5F74F?logo=drizzle&logoColor=111111)](https://orm.drizzle.team)
[![Docker](https://img.shields.io/badge/Docker-ready-2496ED?logo=docker&logoColor=white)](https://www.docker.com)

PowerBase is a full-stack knowledge base for cataloging, comparing, and
managing alternative energy equipment: inverters, batteries, solar panels,
portable power stations, charge controllers, and related system components.

The goal is to turn fragmented manufacturer PDFs, manuals, and product pages
into structured data that supports search, side-by-side comparison,
compatibility checks, and practical energy-system planning.

## Project Status

PowerBase is an early application scaffold with catalog pages, seeded product
data, authentication, favorites, PostgreSQL persistence, Redis integration, and
self-hosted deployment documentation in place.

## Stack

| Layer | Tools |
| --- | --- |
| App | Next.js App Router 16, React 19, TypeScript |
| Styling | Tailwind CSS 4, Base UI, shadcn, Lucide icons |
| Runtime | Bun with `bun.lock` |
| Quality | Biome for linting, formatting, import organization |
| Data | PostgreSQL 15, Drizzle ORM, Drizzle Kit |
| Cache | Redis through `ioredis` |
| Auth | Better Auth with OAuth, email, and passkey support |
| Delivery | Docker, Docker Compose, GitHub Actions, GHCR, Cloudflare Tunnel, Watchtower |

## Features

- Equipment catalog pages for power banks, power stations, inverters, and
  batteries.
- Localized routes for English and Ukrainian content.
- Structured product records with typed technical fields.
- Favorite products with server-side merging support.
- Redis health route and cache boundary for expensive derived reads.
- PWA manifest, installable app metadata, and an offline fallback shell.
- Drizzle schema and migrations for catalog, auth, passkeys, and favorites.
- Docker-based local PostgreSQL and Redis services.

## Requirements

- [Bun](https://bun.sh)
- [Docker](https://www.docker.com) and Docker Compose
- PostgreSQL and Redis through the local Compose file, or compatible external
  services configured with environment variables

## Local Development

Install dependencies:

```bash
bun install
```

Start PostgreSQL and Redis:

```bash
docker compose -f docker-compose.dev.yml up -d
```

Start the Next.js app:

```bash
bun run dev
```

Open `http://localhost:3000`.

## Scripts

| Command | Purpose |
| --- | --- |
| `bun run dev` | Start the local Next.js development server |
| `bun run build` | Build the production app |
| `bun run start` | Start the built Next.js app |
| `bun run lint` | Run Biome lint checks |
| `bun run format` | Format files with Biome |
| `bun run format:check` | Check formatting with Biome |
| `bun run db:push` | Push Drizzle schema changes to the configured database |
| `bun run db:seed` | Seed catalog data |

Use Bun for all package and script work:

```bash
bun add package-name
bun add -d package-name
```

## Environment

Runtime configuration is injected through Docker Compose or the deployment
environment. Keep secrets out of source control and expose browser-safe values
only through `NEXT_PUBLIC_` variables.

Common local defaults are defined in `docker-compose.dev.yml`:

- PostgreSQL: `postgresql://powerbase_admin:dev_password@localhost:5432/powerbase_db`
- Redis: `redis://:dev_password@localhost:6379`

See `docs/ENVIRONMENT.md` for the full environment contract.

## Project Structure

```text
app/                 Next.js App Router pages, layouts, and route handlers
app/_components/     App-level UI components
components/          Shared React components
lib/                 Domain, auth, cache, database, and utility code
lib/db/              Drizzle schema, migrations, and seed data
docs/                Product, architecture, development, and deployment docs
public/              Static assets
scripts/             Data maintenance and generation scripts
```

## Verification

Run the narrow checks before opening changes:

```bash
bun run lint
bun run build
```

For formatting-only work:

```bash
bun run format:check
```

## Documentation

- `docs/PROJECT_BRIEF.md`: product and domain overview
- `docs/ARCHITECTURE.md`: system architecture and infrastructure boundaries
- `docs/DEVELOPMENT.md`: local development workflow
- `docs/ENVIRONMENT.md`: environment variable contract
- `docs/DEPLOYMENT.md`: production deployment model
- `docs/AGENT_SKILLS.md`: installed agent skills and precedence rules
- `AGENTS.md`: repository instructions for Codex and other AI agents

## Deployment Model

Production is intended for a self-hosted Synology NAS using a zero-trust network
model:

- Cloudflare Tunnel handles public ingress.
- PostgreSQL, Redis, the web app, media serving, and Watchtower communicate over
  internal Docker networks.
- Uploaded files are stored on persistent NAS-mounted media storage and served by
  a dedicated media host.
- GitHub Actions builds and pushes the web image to GHCR.
- Watchtower pulls and restarts the web container through an authenticated
  webhook.
- Drizzle migrations run before the Next.js server accepts traffic.

## Agentic Development

This repository includes project guidance for Codex and other AI agents. Read
`AGENTS.md` before making changes, then follow the relevant local skills:

- `.agents/skills/powerbase-development/SKILL.md`
- `.agents/skills/equipment-data-modeling/SKILL.md`
- `.agents/skills/`
