# Changelog

## v1.1.0 (2026-11-24)

- New skill `sysnee-apps`: container apps from a docker-compose.yml (compose checks, deploy, variables, sizes, volumes, logs, rollback).
- `sysnee` routes container apps to `sysnee-apps` and asks before creating or scaling an app.
- `sysnee-cli` pins `@sysnee/cli@1.1.0` and lists the `sysnee apps` commands.

## v1.0.0 (2026-11-14)

- Claude Code plugin `sysnee` with the remote MCP server `https://mcp.sysnee.com/mcp`.
- Skills: `sysnee` (router and safety rules), `sysnee-deploy`, `sysnee-postgres`, `sysnee-cli`.
- Setup for Codex, Cursor, VS Code, OpenCode, Devin, Gemini CLI and Antigravity in `configs/`.
