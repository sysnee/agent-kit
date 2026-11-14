# sysnee plugin

Lets Claude Code deploy static sites and manage PostgreSQL databases on
[Sysnee Cloud](https://docs.sysnee.com/en/agents), within the permissions you approve.
It contains four skills (when to use what, deploying each framework, PostgreSQL without
exposing passwords, and the `sysnee` CLI) and the remote MCP server
`https://mcp.sysnee.com/mcp`. No hooks or executables.

## Install

```bash
claude plugin marketplace add sysnee/agent-kit#v1.0.0
claude plugin install sysnee@sysnee
```

Then run `/reload-plugins`, then `/mcp` → `sysnee` → **Authenticate**, and approve the
permissions in the browser. Revoke at any time in Console → Security → Authorized apps.

Privacy: <https://cloud.sysnee.com/privacy>
