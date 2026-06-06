# Development

PowerBase uses Bun for package management and script execution.

## Local Setup

Install dependencies:

```bash
bun install
```

Start local infrastructure:

```bash
docker compose -f docker-compose.dev.yml up -d
```

Start the app:

```bash
bun run dev
```

Open `http://localhost:3000`.

## Common Commands

```bash
bun run lint
bun run build
```

Use only Bun commands for dependency and script work:

```bash
bun add package-name
bun add -d package-name
```

## Current Repository Shape

- `app/`: Next.js App Router pages, layouts, and route handlers.
- `components/`: shared React components.
- `public/`: static assets bundled with the app.
- `docs/`: project documentation for humans and agents.
- `.codex/skills/`: local Codex skills for project-specific workflows.

## Implementation Conventions

- Keep server-only logic out of client components.
- Add `"use client"` only when browser interactivity requires it.
- Prefer typed domain functions for compatibility and comparison logic.
- Keep display formatting separate from canonical stored values.
- Avoid introducing broad abstractions before the product model stabilizes.
- Use Tailwind consistently with the existing app style unless a design system is introduced.

## Database Work

When Drizzle is added or modified:

- Keep schema files close to database code, for example `src/db/schema.ts`.
- Add migration commands to `package.json`.
- Run migrations through Bun.
- Ensure production startup can run migrations before serving traffic.

Suggested future commands, once implemented:

```bash
bun run db:generate
bun run db:migrate
bun run db:studio
```

## Testing and Verification

At minimum, run:

```bash
bun run lint
```

For changes that affect runtime behavior, also run:

```bash
bun run build
```

When tests are introduced, keep them focused around:

- spec normalization
- compatibility logic
- upload validation
- database query behavior
- cache invalidation
