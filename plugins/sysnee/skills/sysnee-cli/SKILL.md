---
name: sysnee-cli
description: Use when running the sysnee CLI (@sysnee/cli) from a terminal, script or CI - signing in, deploying a folder or a container app, following logs, creating a database into .env, reading JSON output and exit codes (2 = a person must confirm, 3 = sign-in needed).
---

# The `sysnee` CLI

Install the pinned version (Node.js 20+): `npm install -g @sysnee/cli@1.1.0`, or run it with `npx @sysnee/cli@1.1.0 <command>`. Ask before installing globally.

## Sign-in

- `sysnee login` is done by the **user** in the browser (device code). Run it only when they agree, and let them approve. Never ask for their password or a token.
- In CI, the user provides `SYSNEE_TOKEN` (a personal token with only the needed scopes) through the CI's secret store. Never write a token into a file or a command line you show.
- `sysnee whoami` shows the scopes and projects in effect.

## Commands you'll use

```bash
sysnee whoami
sysnee link --site <name>                 # ties the folder to a site (.sysnee/project.json)
sysnee deploy <output-folder>             # zip, upload, follow the build
sysnee sites list | info [site] | logs [site] [deployment] --follow
sysnee sites rollback <site> <deployment>
sysnee sites update <site> --spa | --no-spa | --analytics | --no-analytics
sysnee domains add <site> <hostname>      # prints DNS records for the user
sysnee domains verify <site> <domain-id>
sysnee domains remove <site> <hostname>   # exit 2 + confirm_url outside a terminal
sysnee apps deploy . --app <name>          # zip the compose project, upload, follow build and rollout
sysnee apps list | info <app> | logs <app> [--service <name>] [--follow]
sysnee apps env set <app> KEY=value [--service <name>]
sysnee apps rollback <app> <deployment>
sysnee db create <name> --dotenv .env     # password goes to .env, never printed
sysnee db info <database>
sysnee usage
sysnee schema                             # every command and option as JSON
```

Never use `--show-password`.

`sysnee deploy` refuses a folder over 10,000 files, 500 MB, or 100 MB zipped (`too_large`) before uploading: deploy the build output folder, not the project.

## Output and exit codes

Output is JSON when stdout isn't a terminal (or with `--json`); errors are `{"error": "<code>", "message": "..."}`. Use `--dry-run` to show a change without sending it.

| Exit | Meaning | What you do |
|---|---|---|
| `0` | Success | Continue |
| `1` | Error | Read `message`, fix or report |
| `2` | A person must confirm; nothing was done | Give the user `confirm_url` and stop |
| `3` | Not signed in | Ask the user to run `sysnee login` |

Deletions (`sysnee sites delete`, `sysnee apps delete`, `sysnee domains remove`, `sysnee db delete`) outside a terminal always end with exit 2 and a `confirm_url`. That is the expected result, not a failure to retry.

Details: https://docs.sysnee.com/cli.md
