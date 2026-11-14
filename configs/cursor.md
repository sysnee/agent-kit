# Cursor

`.cursor/mcp.json` (project) or `~/.cursor/mcp.json`:

```json
{ "mcpServers": { "sysnee": { "url": "https://mcp.sysnee.com/mcp" } } }
```

Install link: `cursor://anysphere.cursor-deeplink/mcp/install?name=sysnee&config=eyJ1cmwiOiJodHRwczovL21jcC5zeXNuZWUuY29tL21jcCJ9`

```bash
DO_NOT_TRACK=1 npx -y skills@1.7.4 add https://github.com/sysnee/agent-kit/tree/v1.0.0/plugins/sysnee/skills -a cursor -y
```

Cursor asks you to sign in when it connects (CLI: `agent mcp login sysnee`). Docs: https://docs.sysnee.com/en/agents#cursor
