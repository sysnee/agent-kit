# Codex

```bash
codex mcp add sysnee --url https://mcp.sysnee.com/mcp
codex mcp login sysnee
DO_NOT_TRACK=1 npx -y skills@1.7.4 add https://github.com/sysnee/agent-kit/tree/v1.1.0/plugins/sysnee/skills -a codex -y
```

Same thing in `~/.codex/config.toml`:

```toml
[mcp_servers.sysnee]
url = "https://mcp.sysnee.com/mcp"
```

Over SSH: `codex mcp login sysnee --no-browser`. Docs: https://docs.sysnee.com/en/agents#codex
