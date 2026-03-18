# Firestore Loading / "Client Offline" Root Cause Analysis

**Date:** 2025-03-18  
**Project:** kona-83f57 (Kona)

## Summary

MCP tools and Firebase CLI revealed two root causes for the endless loading and "Failed to get document because the client is offline" error. Both have been fixed.

---

## Fix 1: Firestore API Enabled (DONE)

The Cloud Firestore API was not enabled. Fixed via:

```bash
gcloud services enable firestore.googleapis.com --project=kona-83f57
```

---

## Fix 2: Default Firestore Database Created (DONE)

The project had **no Firestore databases**. Created the default database:

```bash
npx -y firebase-tools@latest firestore:databases:create "(default)" --location=africa-south1 -P kona-83f57
```

---

## Fix 3: Firestore Rules Deployed (DONE)

Added `firestore` config to `firebase.json` and deployed rules:

```bash
npx -y firebase-tools@latest deploy --only firestore -P kona-83f57
```

---

## Fix 4: Wrong Firestore Database ID in Code (DONE)

**Current `.env`:**
```
NEXT_PUBLIC_FIREBASE_DATABASE_ID=kona-83f57
```

**Problem:** `kona-83f57` is the **Firebase project ID**, not the Firestore database ID. The code in `lib/firebase.ts` uses this for Firestore:

```ts
const firestoreDatabaseId =
  process.env.NEXT_PUBLIC_FIREBASE_DATABASE_ID ?? process.env.FIRESTORE_DATABASE_ID;
// Results in: "kona-83f57" — wrong for Firestore
```

Firestore expects:
- **`(default)`** — the default Firestore database (most projects)
- Or a custom database name if you created one

Using `kona-83f57` as the database ID tries to connect to a non-existent Firestore database, which can cause connection failures and misleading "client is offline" errors.

**Action:** Use the default Firestore database. The code has been updated to use `NEXT_PUBLIC_FIRESTORE_DATABASE_ID` (or `"(default)"` when unset) instead of `NEXT_PUBLIC_FIREBASE_DATABASE_ID` (project ID).

---

## Recommended Fix

1. **Enable Firestore API** in Google Cloud Console (see link above).
2. **Fix Firestore database ID** in `lib/firebase.ts`:
   - Use `"(default)"` for Firestore when no custom database is configured.
   - Do not reuse `NEXT_PUBLIC_FIREBASE_DATABASE_ID` (Realtime DB) for Firestore.

---

## MCP Tools Used

- `firebase_get_project` — confirmed project `kona-83f57`
- `firebase_get_environment` — confirmed config and project aliases
- `firebase firestore:indexes` (CLI) — surfaced Firestore API enablement error

The Firebase MCP server does not expose Firestore log-fetching tools. Logs are available in:
- Browser DevTools (client-side)
- [Google Cloud Logging](https://console.cloud.google.com/logs) (server-side / API)

## Related Issues

- See also: [firestore-campaigns-endless-loading-error-ui-CEODashboard-20250318.md](./firestore-campaigns-endless-loading-error-ui-CEODashboard-20250318.md) — Campaigns page error handling and loading timeout
