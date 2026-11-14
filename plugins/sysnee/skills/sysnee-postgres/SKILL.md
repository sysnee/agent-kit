---
name: sysnee-postgres
description: Use when creating or connecting to a managed PostgreSQL database on Sysnee - getting DATABASE_URL into .env without exposing the password, SSL settings, connection limits, Prisma or Drizzle setup, migrations, stopping or starting a database.
---

# Managed PostgreSQL on Sysnee

## The password rule

You never see a Sysnee database password, and you must keep it that way:

- **Never** print it, echo it, log it, put it in a commit, a chat message, a test fixture or a file other than the user's local `.env`.
- Make sure `.env` is listed in `.gitignore` **before** writing to it.
- If a password appears anyway (the user pastes it, a tool prints it), don't repeat it; suggest they treat it as exposed.

## Creating a database

Databases cost money per hour while they exist: **ask the user first**, stating size and storage. Creating needs the organization owner with account level 3 (verified email, second factor, verified billing); if the API says a step is missing, relay it.

Sizes: `low` (0.5 vCPU, 256 MB), `medium` (1 vCPU, 1 GB), `high` (1.5 vCPU, 2 GB). Storage from 2 GB. Versions 16, 17, 18. Names: up to 56 lowercase letters, digits and hyphens, starting with a letter.

**Preferred: the CLI writes the password straight into `.env`:**

```bash
sysnee db create my-db --dotenv .env
```

The CLI generates the password locally and writes `DATABASE_URL=postgresql://...` without printing it. Use `--env-key` for another variable name.

**With the MCP server:** `create_database` returns a `reveal_url` instead of the password. Give the user the link; it opens once, for 15 minutes, signed in to the console. Ask them to paste the password into `.env` themselves. Use the `connection_string` from the result (it has `<PASSWORD>` as a placeholder) to show them the shape.

Then wait until `get_database` reports it running before connecting.

## Connecting

- Host `<name>-<suffix>.pgs.br-sp-1.sysnee.com`, port and user come from `get_database` / `sysnee db info`.
- **TLS is required.** Keep `?sslmode=require` in the URL. Routing uses SNI, so the client must send TLS with the hostname (use the hostname, never an IP).
- Connections are limited (PostgreSQL's default of about 100). In serverless or many-instance apps, keep pools small (for example `max: 5`).
- If the database was created with an IP allowlist, connections from elsewhere are refused: check this before debugging credentials.

### Prisma

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

`npx prisma migrate deploy` for existing migrations; `prisma migrate dev` works too (the user can create the shadow database).

### Drizzle (node-postgres)

```ts
import { drizzle } from 'drizzle-orm/node-postgres';
export const db = drizzle(process.env.DATABASE_URL!);
```

Run migrations from the developer's machine or CI with the same `DATABASE_URL`.

## Lifecycle

- `stop_database` stops compute billing (storage is still billed); `start_database` brings it back. Ask first: the app loses its database while stopped.
- There are **no automatic backups**. Before risky migrations, suggest `pg_dump "$DATABASE_URL" --format=custom --file=backup.dump`.
- Deleting: `request_deletion` returns a `confirm_url`; the user confirms in the console with their second factor. Never try another route.

Details: https://docs.sysnee.com/postgres.md
