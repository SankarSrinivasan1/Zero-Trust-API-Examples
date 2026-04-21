# Attack Scripts

### These scripts are for learning and testing your own systems. Do not run against systems you do not own or have permission to test. If you do, the problem is not the script.

These are simple scripts to break your own API.

If they succeed, your API is not secure.
That is normal.

---

## How to use

1. Run your bad-api-example
2. Run these scripts
3. Observe what breaks
4. Then switch to fixed-api-example
5. Run again

---

## What you should notice

- Bad API fails silently
- Fixed API rejects aggressively
- Logs become more meaningful

---

## Common mistake

Developers run these once and stop.

Run them again after every change.

Security is not a feature.
It is a habit.

---

## Real World Truth
Most APIs are not broken by genius hackers. They are broken by:
- repeated requests
- bad tokens
- unexpected input
- simple persistence

Nothing fancy.
