# Gemini CLI

```bash
gemini mcp add --transport http -s user sysnee https://mcp.sysnee.com/mcp
DO_NOT_TRACK=1 npx -y skills@1.7.4 add https://github.com/sysnee/agent-kit/tree/v1.0.0/plugins/sysnee/skills -a gemini-cli -y
```

Then, inside Gemini: `/mcp auth sysnee`. In `~/.gemini/settings.json` use `httpUrl` (`url` alone means SSE):

```json
{ "mcpServers": { "sysnee": { "httpUrl": "https://mcp.sysnee.com/mcp" } } }
```

Docs: https://docs.sysnee.com/en/agents#gemini-cli
