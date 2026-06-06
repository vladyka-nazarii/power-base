# AGENTS.md

Guidance for Codex and other AI agents working in PowerBase.

## Project Identity

PowerBase is a full-stack Next.js application for cataloging, comparing, and managing alternative energy equipment: inverters, batteries, solar panels, portable power stations, charge controllers, and related system components.

The product goal is to turn fragmented manufacturer PDFs, datasheets, manuals, and websites into a structured knowledge base that supports comparison, compatibility checks, and practical energy-system design.

## Current Stack

- Framework: Next.js App Router
- Language: TypeScript
- Runtime and package manager: Bun
- Database: PostgreSQL 15
- ORM: Drizzle ORM
- Cache: Redis through `ioredis`
- Containers: Docker and Docker Compose
- CI/CD: GitHub Actions, GHCR, Cloudflare Tunnel, Watchtower
- Deployment target: self-hosted Synology NAS

## Non-Negotiables

- Use Bun for scripts and dependencies: `bun run`, `bun add`, `bun install`.
- Do not introduce `npm`, `yarn`, `pnpm`, `package-lock.json`, `yarn.lock`, or `pnpm-lock.yaml`.
- Use Drizzle ORM for all database access. Do not add raw SQL query layers unless they are Drizzle migrations or tightly justified Drizzle-supported raw fragments.
- Use Redis for expensive read paths such as equipment comparison matrices, compatibility calculations, and repeated catalog filters.
- Keep build-time and runtime configuration separate. Secrets are runtime values injected by Docker Compose or the deployment environment.
- Treat the Next.js container as ephemeral. Do not store uploaded media inside the app container.
- File upload implementations must write to `process.env.UPLOAD_DIR` and persist only the fully qualified public media URL in PostgreSQL.
- Public uploaded assets should be served by the dedicated media host, usually an Nginx container behind a Cloudflare Tunnel subdomain such as `media.domain.dev`.
- Do not expose inbound ports in production. Public traffic reaches services through Cloudflare Tunnels.

## Expected Agent Workflow

1. Read the relevant existing code before changing behavior.
2. Check `package.json`, `README.md`, `docs/`, and this file for local conventions.
3. Preserve user changes in the working tree. Never revert unrelated edits.
4. Prefer small, focused changes that follow existing folder structure and component style.
5. Add or update tests when behavior changes or when touching shared logic.
6. Run the narrowest useful verification, usually `bun run lint` and then a targeted build/test command when available.
7. If adding dependencies, use `bun add` and explain why the dependency is worth carrying.

## Domain Modeling Principles

Equipment data should be structured enough to support comparison and compatibility checks, not just display pages.

Prefer explicit typed fields for technical values that users will filter, sort, or compare:

- voltage ranges
- nominal voltage
- continuous and peak power
- battery chemistry
- capacity in Wh and Ah where relevant
- maximum charge/discharge current
- PV input limits
- MPPT ranges
- communication protocols
- dimensions and weight
- warranty and lifecycle data
- manufacturer and model identifiers

Keep source traceability in mind. Equipment specs should eventually be attributable to a datasheet, manual, manufacturer page, or user-submitted evidence.

## Application Boundaries

- UI lives in `app/` and `components/`.
- Server-only database and cache code should live outside client components.
- Shared domain logic should be framework-light and easy to test.
- Do not put secrets, database credentials, or Cloudflare tokens in code, docs examples with real values, or client-visible environment variables.
- Use `NEXT_PUBLIC_` only for values that are safe to expose in browser bundles.

## Database Guidance

- Add schema with Drizzle tables and migrations.
- Keep schema names stable and explicit.
- Prefer normalized core entities for equipment categories, manufacturers, models, specifications, media, and source documents.
- Use constraints and indexes for data integrity and common lookups.
- Store canonical numeric values in base units where possible, then format for users in the UI.

## Redis Guidance

- Cache derived and expensive reads, not source-of-truth data.
- Include versioned cache keys for comparison or compatibility algorithms.
- Invalidate cache entries when equipment specs or compatibility-affecting fields change.
- Avoid caching user-specific sensitive data unless there is a clear need and expiry strategy.

## Upload Guidance

Uploads must follow this flow:

1. Validate file type and size.
2. Write the file under `process.env.UPLOAD_DIR`.
3. Generate the public URL using the configured media base URL.
4. Store only the public URL and metadata in PostgreSQL.
5. Serve the bytes through the media host, not through the Next.js app container.

## Deployment Model

Production is designed for zero-trust self-hosting:

- No public inbound port forwarding.
- Cloudflare Tunnel routes public traffic to internal containers.
- The web app, PostgreSQL, Redis, media server, Cloudflare Tunnel, and Watchtower communicate through Docker networks.
- GitHub Actions builds the web image and pushes it to GHCR.
- GitHub Actions triggers Watchtower through an authenticated webhook exposed through the tunnel.
- The container runs Drizzle migrations before the Next.js server accepts traffic.

## Verification Commands

Use the commands that exist in `package.json`.

```bash
bun install
bun run lint
bun run build
```

When database scripts are added, prefer commands like:

```bash
bun run db:generate
bun run db:migrate
```

Do not invent commands in docs without adding them to `package.json`.

## Documentation Index

- `docs/PROJECT_BRIEF.md`: product and domain overview.
- `docs/ARCHITECTURE.md`: system architecture and infrastructure boundaries.
- `docs/DEVELOPMENT.md`: local development workflow.
- `docs/ENVIRONMENT.md`: environment variable contract.
- `docs/DEPLOYMENT.md`: production deployment model.
- `docs/AGENT_SKILLS.md`: installed local and third-party agent skills.
- `.codex/skills/powerbase-development/SKILL.md`: local Codex skill for implementation work.
- `.codex/skills/equipment-data-modeling/SKILL.md`: local Codex skill for equipment catalog and specification work.
- `.agents/skills/`: repo-local skills installed from `skills.sh`.
