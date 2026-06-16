# Agent Skills

This project uses repo-local agent skills installed under `.agents/skills/`, plus project-specific Codex skills under `.codex/skills/`.

PowerBase project rules in `AGENTS.md` always take precedence over third-party skill guidance.

## Project Skills

| Skill                     | Path                                                                                   | Use For                                                                     |
| ------------------------- | -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `powerbase-development`   | `.agents/skills/powerbase-development/` and `.codex/skills/powerbase-development/`     | General PowerBase implementation workflow.                                  |
| `equipment-data-modeling` | `.agents/skills/equipment-data-modeling/` and `.codex/skills/equipment-data-modeling/` | Equipment catalog, technical specs, compatibility, and source traceability. |

## Installed From skills.sh

| Skill                              | Source                     | Use For                                                                | Notes                                                                                                              |
| ---------------------------------- | -------------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `next-best-practices`              | `vercel-labs/next-skills`  | Next.js App Router implementation patterns.                            | Good default for routing, server/client boundaries, metadata, self-hosting, and runtime choices.                   |
| `next-cache-components`            | `vercel-labs/next-skills`  | Next.js 16 cache component patterns.                                   | Useful for catalog, comparison, and heavy read workflows.                                                          |
| `bun`                              | `hoodini/ai-agents-skills` | General Bun commands and APIs.                                         | The installer flagged this with a critical Gen risk assessment. Treat as reference only; `AGENTS.md` overrides it. |
| `bun-test`                         | `daleseo/bun-skills`       | Bun test runner setup and patterns.                                    | Useful when tests are introduced. Avoid copying decorative/non-ASCII examples into project files.                  |
| `supabase-postgres-best-practices` | `supabase/agent-skills`    | PostgreSQL schema, indexing, query, locking, and performance guidance. | Use for PostgreSQL generally; do not assume Supabase is part of PowerBase infrastructure.                          |
| `neon-drizzle`                     | `neondatabase/ai-rules`    | Drizzle ORM setup, schema, migrations, and query patterns.             | Use Drizzle guidance only. Do not provision Neon or change deployment target unless explicitly requested.          |
| `redis-core`                       | `redis/agent-skills`       | Redis data structures, key design, and core usage.                     | Preferred Redis starting point.                                                                                    |
| `redis-connections`                | `redis/agent-skills`       | Redis connection handling, timeouts, pooling, and pipelining.          | Relevant for `ioredis` integration.                                                                                |
| `redis-security`                   | `redis/agent-skills`       | Redis authentication, ACLs, and network security.                      | Must align with Docker and Cloudflare Tunnel boundaries.                                                           |
| `redis-observability`              | `redis/agent-skills`       | Redis metrics and operational checks.                                  | Useful before production deployment.                                                                               |
| `redis-query-engine`               | `redis/agent-skills`       | Redis query/index features.                                            | Use only if the selected Redis deployment supports these modules/features.                                         |
| `redis-semantic-cache`             | `redis/agent-skills`       | Semantic cache patterns.                                               | Optional future use; normal catalog/comparison caching should start simpler.                                       |
| `redis-vector-search`              | `redis/agent-skills`       | Vector search patterns.                                                | Optional future use for semantic equipment search.                                                                 |
| `redis-clustering`                 | `redis/agent-skills`       | Redis cluster and read-replica patterns.                               | Likely future-scale guidance, not needed for the initial single Redis container.                                   |
| `iris-development`                 | `redis/agent-skills`       | Redis Iris/memory-agent workflows.                                     | Not part of the current PowerBase stack unless explicitly introduced later.                                        |

## Source Lock

`skills-lock.json` records the installed skill sources and computed hashes. Review it when updating skills.

## Skill Precedence

When guidance conflicts, use this order:

1. User request.
2. `AGENTS.md`.
3. Project docs under `docs/`.
4. Project-specific skills.
5. Third-party skills from `.agents/skills/`.

## Important Overrides

- Use Bun for this project even if a third-party skill mentions npm, yarn, or pnpm.
- Use self-hosted PostgreSQL 15 unless the user explicitly asks for Neon, Supabase, or another hosted database.
- Use Drizzle ORM for application database access.
- Use Redis through the chosen project client, currently planned as `ioredis`.
- Do not expose production inbound ports.
- Do not store uploaded media in the web container.
