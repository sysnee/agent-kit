# Sysnee agent kit

The [Sysnee Cloud](https://sysnee.com) plugin for Claude Code, and the same skills and
MCP configuration for other coding agents. With it, an agent can deploy static sites
and manage PostgreSQL databases on your account, within the permissions you approve.

- **MCP server:** `https://mcp.sysnee.com/mcp` (Streamable HTTP, OAuth in the browser).
- **Skills:** `plugins/sysnee/skills/`: when to use what, deploying each framework,
  PostgreSQL without exposing passwords, and the `sysnee` CLI.
- **Configs:** `configs/` has the setup for Codex, Cursor, VS Code, OpenCode, Devin,
  Gemini CLI and Antigravity.

## Install

The easiest way is to paste this into your agent:

```text
Read https://docs.sysnee.com/agent-setup/prompt.md and help me set up Sysnee in this agent, asking for my approval before each command.
```

Or by hand, in Claude Code:

```bash
claude plugin marketplace add sysnee/agent-kit#v1.0.0
claude plugin install sysnee@sysnee
```

Then `/reload-plugins`, and `/mcp` → `sysnee` → **Authenticate**.

Other agents: see [`configs/`](configs/) or <https://docs.sysnee.com/en/agents>.

## What this plugin does and doesn't contain

- Skills (Markdown) and one remote MCP server entry. Nothing else.
- **No hooks, no executables, no monitors, no install scripts.** CI fails if any appear.
- The MCP server never returns passwords or tokens, and can't delete anything by itself:
  deletions are requests a person confirms in the Sysnee console.

You choose the scopes and projects on Sysnee's consent screen, and can revoke the
access at any time in **Console → Security → Authorized apps**.

## Versions

Releases are signed git tags (`v1.0.0`). Install by tag, as above: the marketplace then
stays on that version until you add a newer tag. Auto-update is off by default for
third-party marketplaces, and we recommend keeping it off.

Check a tag's signature with `git tag -v v1.0.0`. See [CHANGELOG.md](CHANGELOG.md).

## Security

See [SECURITY.md](SECURITY.md).

## License

[MIT](LICENSE)
