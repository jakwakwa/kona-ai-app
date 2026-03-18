---
name: firebase-auth-local-dev
description: Resolves Firebase Auth errors when running locally (auth/unauthorized-domain, auth/configuration-not-found). Adds localhost and 127.0.0.1 to authorized domains via Identity Platform API. Use when Google Sign-In fails on localhost, when setting up Firebase Auth for local development, or when the user reports auth/unauthorized-domain.
---

# Firebase Auth Local Development

## When to Use

- `Firebase: Error (auth/unauthorized-domain)` on localhost
- `Firebase: Error (auth/configuration-not-found)` (Auth not enabled)
- Google Sign-In works in production but fails locally

## Quick Fix: Authorized Domains

Firebase Auth blocks sign-in from domains not in its "authorized domains" list. Newer projects may not include `localhost` by default.

### Option 1: Run the Script (Recommended)

This project includes `scripts/add-auth-domains.mjs`:

```bash
GOOGLE_APPLICATION_CREDENTIALS="/path/to/firebase-adminsdk.json" node scripts/add-auth-domains.mjs
```

The script adds `localhost` and `127.0.0.1` via the Identity Platform REST API. Requires Firebase Admin SDK service account with `cloud-platform` scope.

### Option 2: Manual (Firebase Console)

1. Firebase Console → Authentication → Settings → Authorized domains
2. Click "Add domain"
3. Add `localhost` and `127.0.0.1` (they are different domains)

## auth/configuration-not-found

Firebase Auth is not enabled. Enable via MCP or CLI:

```bash
# Via Firebase MCP: firebase_init with auth providers
# Or deploy auth config from firebase.json:
npx -y firebase-tools@latest deploy --only auth
```

Ensure `firebase.json` has an `auth` block with `googleSignIn` configured.

## NEXT_PUBLIC_FIREBASE_API_KEY

If the auth iframe URL shows `${FIREBASE_API_KEY}` placeholders, the Web API key is missing. Set `NEXT_PUBLIC_FIREBASE_API_KEY` in `.env` (get from Firebase MCP `firebase_get_sdk_config` with platform `web`).

## Full Solution Doc

See [docs/solutions/integration-issues/auth-unauthorized-domain-FirebaseAuth-20250318.md](../../../docs/solutions/integration-issues/auth-unauthorized-domain-FirebaseAuth-20250318.md) for root cause, prevention, and script details.
