# OpenCode

`opencode.json` (project) or `~/.config/opencode/opencode.json`:

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": { "sysnee": { "type": "remote", "url": "https://mcp.sysnee.com/mcp", "enabled": true } }
}
```

```bash
opencode mcp auth sysnee
DO_NOT_TRACK=1 npx -y skills@1.7.4 add https://github.com/sysnee/agent-kit/tree/v1.1.0/plugins/sysnee/skills -a opencode -y
```

Docs: https://docs.sysnee.com/en/agents#opencode
