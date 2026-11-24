# sysnee plugin

Lets Claude Code deploy static sites and container apps and manage PostgreSQL databases on
[Sysnee Cloud](https://docs.sysnee.com/en/agents), within the permissions you approve.
It contains five skills (when to use what, deploying each framework, container apps from
a compose file, PostgreSQL without exposing passwords, and the `sysnee` CLI) and the remote MCP server
`https://mcp.sysnee.com/mcp`. No hooks or executables.

## Install

```bash
claude plugin marketplace add sysnee/agent-kit#v1.1.0
claude plugin install sysnee@sysnee
```

Then run `/reload-plugins`, then `/mcp` → `sysnee` → **Authenticate**, and approve the
permissions in the browser. Revoke at any time in Console → Security → Authorized apps.

Privacy: <https://cloud.sysnee.com/privacy>
