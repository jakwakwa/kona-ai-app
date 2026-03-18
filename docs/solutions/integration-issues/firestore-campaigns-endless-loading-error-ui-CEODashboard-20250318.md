---
module: CEO Dashboard (Campaigns)
date: 2025-03-18
problem_type: integration_issue
component: database
symptoms:
  - "Campaigns page spinner never stops (endless loading)"
  - "Firebase Firestore: Missing or insufficient permissions"
  - "Failed to get document because the client is offline"
root_cause: logic_error
resolution_type: code_fix
severity: high
tags: [firestore, onSnapshot, error-handling, campaigns, nextjs]
---

# Troubleshooting: Firestore Campaigns Page Endless Loading and Permission Errors

## Problem

The CEO Dashboard Outbound Campaigns page either shows an endless loading spinner or surfaces Firestore errors ("Missing or insufficient permissions", "client is offline") without clear recovery options. The page never reaches a usable state (empty state or campaign list) when Firestore fails or the user lacks permission.

## Environment

- Module: CEO Dashboard (Campaigns)
- Framework: Next.js 15, Firebase Web SDK (Firestore)
- Affected Component: `app/ceo/dashboard/campaigns/page.tsx`
- Project: kona-83f57
- Date: 2025-03-18

## Symptoms

- Loading spinner never stops when Firestore returns an error or never resolves
- Console error: `Missing or insufficient permissions` in `onSnapshot` listener
- Next.js dev toolbar: "Failed to get document because the client is offline"
- No user-facing error message or retry option when Firestore fails

## What Didn't Work

**Attempted Solution 1:** Relying on Firestore rules alone
- **Why it failed:** Rules were also broken (`isAdmin()` used invalid env var syntax). Even after fixing rules, the page still hung if the `onSnapshot` error callback threw.

**Attempted Solution 2:** Assuming `onSnapshot` error callback would not block loading
- **Why it failed:** The error callback called `handleFirestoreError(..., { throw: true })`, which threw. `setLoading(false)` was never reached, so the spinner never stopped.

## Solution

### 1. Fix `onSnapshot` error callback (never throw)

**Before (broken):**
```tsx
onSnapshot(q, (snapshot) => {
  setCampaigns(/* ... */);
  setLoading(false);
}, (err) => {
  handleFirestoreError(err, OperationType.LIST, "campaigns"); // throws!
  // setLoading(false) never runs
});
```

**After (fixed):**
```tsx
onSnapshot(q, (snapshot) => {
  setCampaigns(/* ... */);
  setLoading(false);
  setError(null);
}, (err) => {
  handleFirestoreError(err, OperationType.LIST, "campaigns", { throw: false });
  setLoading(false);
  setError(getFriendlyFirestoreErrorMessage(err));
});
```

### 2. Add loading timeout

Firestore may never call the callback (e.g. internal Promise rejection). Add a timeout so loading always resolves:

```tsx
const LOADING_TIMEOUT_MS = 15_000;

useEffect(() => {
  const t = setTimeout(() => {
    if (resolvedRef.current) return;
    resolvedRef.current = true;
    setLoading(false);
    if (!error) setError("Loading took too long. Please try again.");
  }, LOADING_TIMEOUT_MS);
  return () => clearTimeout(t);
}, [/* deps */]);
```

### 3. Add error state UI with retry

```tsx
{error && (
  <div>
    <p>{error}</p>
    <Button onClick={() => { setError(null); setRetryKey((k) => k + 1); }}>
      Try again
    </Button>
  </div>
)}
```

### 4. Firestore rules (separate fix)

See [firestore-permission-denied-verification-20250318.md](./firestore-permission-denied-verification-20250318.md) for:
- Fixing `isAdmin()` (env vars not supported in rules)
- Relaxing `campaigns`, `agentMetrics`, `inboundLeads` read to `isAuthenticated()`

### 5. Firestore API and database ID

See [firestore-loading-and-api-20250318.md](./firestore-loading-and-api-20250318.md) for:
- Enabling Firestore API
- Creating `(default)` database
- Using `NEXT_PUBLIC_FIRESTORE_DATABASE_ID` or `"(default)"` instead of project ID

## Why This Works

1. **Root cause:** The `onSnapshot` error callback threw, so `setLoading(false)` never ran. The UI stayed in loading state indefinitely.
2. **Fix:** Error callback must never throw. Call `setLoading(false)` and `setError(...)` so the UI can show an error state and retry.
3. **Defence in depth:** A loading timeout ensures the page never hangs even if Firestore never responds. User-friendly error messages and a retry button give a clear path to recovery.

## Prevention

- **Never throw in Firestore `onSnapshot` error callbacks.** Always update loading/error state so the UI can recover.
- Add a loading timeout (e.g. 15s) for any Firestore listener that drives a loading spinner.
- Use `handleFirestoreError(..., { throw: false })` when you only want logging, not propagation.
- Provide user-facing error messages and retry for permission/offline errors.

## Related Issues

- See also: [firestore-permission-denied-verification-20250318.md](./firestore-permission-denied-verification-20250318.md) — Firestore rules fix
- See also: [firestore-loading-and-api-20250318.md](./firestore-loading-and-api-20250318.md) — Firestore API, database, and DB ID
- See also: [auth-unauthorized-domain-FirebaseAuth-20250318.md](./auth-unauthorized-domain-FirebaseAuth-20250318.md) — Localhost auth domains
