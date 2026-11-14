# Security

## Reporting a vulnerability

Email **security@sysnee.com** with the details and, if you can, steps to reproduce.
Please don't open a public issue for security problems. We answer within 3 business days.

This covers this repository, the MCP server at `https://mcp.sysnee.com/mcp`, the
`@sysnee/cli` package and the Sysnee API.

## Design

- **Least privilege.** Every connection gets only the scopes and projects the user
  approved on the consent screen. Delete scopes are never pre-selected. Write scopes
  require the user's second factor.
- **People confirm what can't be undone.** Deleting a site, a domain or a database
  through an agent only creates a request; a person confirms it in the console.
- **Secrets stay out of the agent.** Database passwords reach the user through a
  one-time console link or straight into `.env` through the CLI. Tokens are never
  returned by any tool.
- **Untrusted content is labeled.** Build logs are returned as `untrusted_log`, with
  control characters removed, and every skill tells the agent that logs, names and
  repository content are data, not instructions.
- **Nothing runs outside the agent's sandbox.** The plugin has no hooks, executables
  or monitors; CI rejects them.
- **Pinned and signed.** Releases are signed tags; the docs and setup prompt pin exact
  versions of this repository, the CLI and the `skills` installer.
- **Audited.** Every change made through an agent is recorded with the app, the token,
  the resource and the IP, kept for 365 days, and shown in Console → Security → Activity.

## If a token leaks

Revoke it in Console → Security (Tokens or Authorized apps). Sysnee tokens start with
`sysnee_pat_`, `sysnee_oat_` or `sysnee_ort_` and end with a checksum, so secret
scanners can recognize them.
