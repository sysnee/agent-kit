# VS Code (GitHub Copilot)

`.mcp.json` at the workspace root or `~/.copilot/mcp-config.json`:

```json
{ "mcpServers": { "sysnee": { "type": "http", "url": "https://mcp.sysnee.com/mcp", "tools": ["*"] } } }
```

Versions that still read `.vscode/mcp.json`:

```json
{ "servers": { "sysnee": { "type": "http", "url": "https://mcp.sysnee.com/mcp" } } }
```

```bash
DO_NOT_TRACK=1 npx -y skills@1.7.4 add https://github.com/sysnee/agent-kit/tree/v1.1.0/plugins/sysnee/skills -a github-copilot -y
```

The browser opens on the first connection, or use **Authenticate** in the server's actions. Docs: https://docs.sysnee.com/en/agents#vs-code-github-copilot
