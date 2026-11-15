# Guide for AI agents

Applies to any coding agent working in this repository (Claude Code, Codex, Cursor,
Copilot, Gemini and others). `CLAUDE.md` only imports this file.

This repository is public: Sysnee customers install it into their own agents. What the
skills and configs say is what those agents will do, so it must match the real product.

## Rule: every change checks the public documentation

Whenever you change **anything** here (a skill, a config, the plugin manifest, the MCP
URL, an install command, a pinned version), search the rest of Sysnee's public
documentation for references to that part. If there are any, update them in the same
change. And when the product changes, the skills here must follow.

If the search finds nothing, say so in your final report ("searched X, Y and Z; nothing
to update"). Outdated instructions are a bug: an agent will follow them literally.

## Where the public documentation lives

| Surface | Files | Published at |
|---|---|---|
| Skills | `plugins/sysnee/skills/*/SKILL.md` | this repo (plugin and `npx skills`) |
| Plugin and MCP server | `.claude-plugin/marketplace.json`, `plugins/sysnee/.claude-plugin/plugin.json`, `plugins/sysnee/.mcp.json` | this repo |
| Setup for other agents | `configs/*.md`, `README.md` | this repo |
| Docs (pt-BR and en) | `../cloud/public-docs/content/{pt-BR,en}/*.md` (especially `agents.md`, `mcp.md`, `cli.md`, `sites.md`, `postgres.md`) | docs.sysnee.com |
| Agent setup prompt | `../cloud/public-docs/agent-setup/versions/<version>.md` | docs.sysnee.com |
| MCP tool texts | `../cloud/api/src/modules/mcp/tools.ts`, `INSTRUCTIONS` in `mcp.service.ts` | mcp.sysnee.com |
| CLI help | `../cloud/cli/bin/sysnee.js` (becomes `sysnee schema` and `--help`) | npm `@sysnee/cli` |
| Landing page | `../landing-page/public/llms.txt`, texts in `../landing-page/src` | sysnee.com |

`../cloud` and `../landing-page` are separate repositories: a change there goes in a
commit of its own in each, named in your report.

## Where to look, by kind of change

| Changed | Look in |
|---|---|
| Install command, repo path, tag or plugin version | `README.md`, `configs/*.md`, docs `agents.md` (both languages), setup prompt, landing `llms.txt` |
| MCP URL or auth flow | `plugins/sysnee/.mcp.json`, `configs/*.md`, docs `agents.md` and `mcp.md`, setup prompt |
| A skill's commands, tools or limits | the matching docs page; check them against `../cloud/cli/bin/sysnee.js`, `../cloud/api/src/modules/mcp/tools.ts` and `../cloud/api/src/config/*.config.ts` |
| A safety rule (passwords, tokens, deletions, untrusted logs) | skill `sysnee`, docs `mcp.md` and `agents.md`, setup prompt, MCP `INSTRUCTIONS` |
| Product change in `../cloud` | every skill that mentions it |

## How to search

Search for the **exact names and values** that changed, before and after: command,
flag, tool, parameter, URL, version, limit number and the old wording. Include the
sibling repositories:

```bash
grep -rniE --exclude-dir=node_modules --exclude-dir=dist \
  'agent-kit#v|mcp\.sysnee\.com|domains remove|update_site' \
  . ../cloud/public-docs/content ../cloud/public-docs/agent-setup \
  ../landing-page/public ../landing-page/src
```

Numbers are written differently per language (`10,000` in English, `10.000` in pt-BR):
search both.

## Consistency rules

1. **The product is the source of truth.** Commands, flags, tool names, scopes, limits
   and prices come from the code in `../cloud`, never from memory or another page.
2. **Same name everywhere.** A feature has the same name in the skills, the configs, the
   docs, the CLI and MCP.
3. **Describe what exists.** No planned features presented as ready. Never claim
   automatic backups, a CDN, "edge", "global", boleto or a free allowance: none exists.
   Payments: PIX and card.
4. **Versions move together.** A release bumps `plugin.json`, adds a `## vX.Y.Z`
   section to `CHANGELOG.md` and updates every `agent-kit#vX.Y.Z` and
   `agent-kit/tree/vX.Y.Z` pin; `scripts/check-pins.mjs` fails otherwise. Pinned tool
   versions (`@sysnee/cli@x.y.z`, `skills@x.y.z`) must exist on npm.
5. **A published setup prompt never changes.** If it needs new install steps, create the
   next version in `../cloud/public-docs/agent-setup/versions/` and run
   `npm run lock-prompt` there.
6. **Docs change in both languages.** Any edit to `../cloud/public-docs/content/pt-BR`
   has its equivalent in `content/en`.

## Check before committing

```bash
node scripts/check-pins.mjs
npx markdownlint-cli2 "**/*.md"
claude plugin validate .
# when you edited the docs in ../cloud:
cd ../cloud/public-docs && npm test && npm run build
```

In your final report, list the public surfaces you updated, or where you searched and
why nothing needed to change.
