# MS-900 Flashcard App

A SvelteKit project that lays the groundwork for an interactive Microsoft MS-900 study aid. It couples a modern Svelte 5 front end with a typed data layer and secure session management so flashcard experiences can be built quickly.

## Tech Stack
- Svelte 5 + SvelteKit 2 for the application shell, routing, and server endpoints
- Vite 7 with `vite-plugin-devtools-json` for fast local development
- Tailwind CSS 4 alongside the forms and typography plugins for styling
- Drizzle ORM with the Turso/LibSQL driver to persist users and sessions
- `@node-rs/argon2` and `@oslojs/*` utilities for hashing credentials and generating session tokens
- `formsnap`, `sveltekit-superforms`, and `zod` ready for typed, schema-driven form flows
- TypeScript, ESLint, Prettier, and Svelte Check for consistent DX

## Project Highlights
- `src/routes/demo/lucia` contains a working demo that shows cookie-based login, registration, and logout backed by Drizzle + Turso
- Global Tailwind configuration lives in `src/app.css`, enabling utility-first styling across upcoming flashcard pages
- Database schema and Drizzle configuration reside in `src/lib/server/db`, keeping data models colocated with server-only logic

## Getting Started
### Prerequisites
- Node.js 18.17 or newer (20 LTS recommended)
- `pnpm` (preferred), `npm`, or `yarn` for dependency management
- A Turso/LibSQL database URL; generate an auth token for non-dev usage

### Installation
```sh
pnpm install
```
> Swap in `npm install` or `yarn` if you prefer a different package manager.

### Environment Variables
Create a `.env` file in the project root and supply the following keys:

| Variable | Purpose |
| --- | --- |
| `DATABASE_URL` | LibSQL/Turso connection string (required) |
| `DATABASE_AUTH_TOKEN` | Turso auth token (required in production; optional when running locally against an unauthenticated database) |

During development SvelteKit reads variables from `.env`, while Drizzle CLI (`drizzle-kit`) reads from your shell environment.

### Database Workflow
Use the provided scripts to manage schema changes:

```sh
pnpm db:generate   # Generate SQL migration files from the Drizzle schema
pnpm db:push       # Apply the schema directly to the connected database
pnpm db:migrate    # Run generated migrations
pnpm db:studio     # Open the Drizzle Studio UI
```

### Run the App
```sh
pnpm dev           # Start the SvelteKit dev server on http://localhost:5173
pnpm dev -- --open # Start and open the app in your default browser
```

Build and preview a production bundle when you are ready to deploy:

```sh
pnpm build
pnpm preview
```

### Code Quality
```sh
pnpm check         # Svelte Check with the project TS config
pnpm lint          # Prettier + ESLint
pnpm format        # Format source files with Prettier
```

## Next Steps
- Flesh out flashcard domains and routes that sit beside the authentication demo
- Leverage `sveltekit-superforms`, `formsnap`, and `zod` to build fully validated form flows
- Configure a deployment target (e.g., Vercel, Cloudflare) and add the appropriate SvelteKit adapter when deploying

## Useful References
- [SvelteKit Docs](https://svelte.dev/docs/kit)
- [Drizzle ORM Documentation](https://orm.drizzle.team/docs/overview)
- [Turso Documentation](https://docs.turso.tech/)
- [Tailwind CSS v4 Preview](https://tailwindcss.com/docs/installation)
