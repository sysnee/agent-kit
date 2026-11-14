# Devin (formerly Windsurf)

```bash
devin mcp add -s user sysnee https://mcp.sysnee.com/mcp
devin mcp login sysnee
DO_NOT_TRACK=1 npx -y skills@1.7.4 add https://github.com/sysnee/agent-kit/tree/v1.0.0/plugins/sysnee/skills -a devin -y
```

File: `~/.config/devin/mcp_config.json` (or `.devin/mcp_config.json` in the project):

```json
{ "mcpServers": { "sysnee": { "url": "https://mcp.sysnee.com/mcp", "transport": "http" } } }
```

Desktop: **Customize → MCPs → Authenticate**. Docs: https://docs.sysnee.com/en/agents#devin-formerly-windsurf
