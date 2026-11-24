# Antigravity

`~/.gemini/config/mcp_config.json` (or `.agents/mcp_config.json` in the workspace):

```json
{ "mcpServers": { "sysnee": { "serverUrl": "https://mcp.sysnee.com/mcp" } } }
```

```bash
DO_NOT_TRACK=1 npx -y skills@1.7.4 add https://github.com/sysnee/agent-kit/tree/v1.1.0/plugins/sysnee/skills -a antigravity -y
```

Sign in from **Customizations → Installed → Authenticate**. Docs: https://docs.sysnee.com/en/agents#antigravity
