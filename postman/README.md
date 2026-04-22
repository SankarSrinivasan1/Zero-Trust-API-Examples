# Postman Testing Guide

This is not a demo collection.

It is meant to break your API.

---

## How to use

1. Import the collection into Postman
2. Set base_url = http://localhost:3000
3. Add a valid JWT token manually
4. Run requests one by one

---

## What to observe

Bad API:
- Admin endpoint works without token
- Invalid inputs still processed
- No rate limiting

Fixed API:
- Unauthorized requests fail
- Invalid data rejected
- Rate limiting kicks in

---

## Important

Do not just click Send once.

- Run requests multiple times
- Change payloads
- Try weird inputs

That is where bugs hide.

---

## Common mistake

Developers test only “happy path”.

Attackers never do.

Test like an attacker.
