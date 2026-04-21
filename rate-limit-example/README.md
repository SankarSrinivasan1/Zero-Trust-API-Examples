# Rate Limiting

Basic limit works for single server.

But in real systems:
- You have multiple instances
- Attackers rotate IPs

Use Redis or centralized store.

Otherwise your rate limit is just decoration.
