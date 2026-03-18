---
module: Authentication
date: 2025-03-18
problem_type: integration_issue
component: authentication
symptoms:
  - "Firebase: Error (auth/unauthorized-domain) when signing in with Google"
  - "Google Sign-In popup fails on localhost with unauthorized domain error"
root_cause: incomplete_setup
resolution_type: tooling_addition
severity: high
tags: [firebase-auth, authorized-domains, localhost, identity-platform]
---

# Troubleshooting: Firebase auth/unauthorized-domain on Localhost

## Problem

Firebase Authentication rejects sign-in attempts from localhost with `auth/unauthorized-domain`. Users cannot sign in with Google when running the app locally, even though Firebase Auth is enabled and Google Sign-In is configured.

## Environment

- Module: Authentication
- Framework: Next.js 15.5, Firebase Web SDK
- Affected Component: Firebase Authentication (Google Sign-In)
- Project: kona-83f57
- Date: 2025-03-18

## Symptoms

- Console error: `Firebase: Error (auth/unauthorized-domain)`
- Google Sign-In popup opens but authentication fails
- Same error may occur when using `127.0.0.1` instead of `localhost`
- Works in production (deployed domain) but not in local development

## What Didn't Work

**Attempted Solution 1:** Adding `authorizedRedirectUris` to `firebase.json` auth config
- **Why it failed:** Redirect URIs are for OAuth provider configuration. The `unauthorized-domain` error refers to Firebase's separate "authorized domains" list, which controls which domains can host the app. These are different concerns.

**Attempted Solution 2:** Relying on Firebase Console manual setup
- **Why it failed:** Newer Firebase projects (post-April 2025) may not include `localhost` by default. Manual addition works but is not scriptable for team setup.

## Solution

Add `localhost` and `127.0.0.1` to Firebase Auth's authorized domains via the Identity Platform REST API. A script was created to automate this.

**Script:** `scripts/add-auth-domains.mjs`

**Run:**
```bash
GOOGLE_APPLICATION_CREDENTIALS="/path/to/your-firebase-adminsdk.json" node scripts/add-auth-domains.mjs
```

**What the script does:**
1. Uses the Firebase Admin SDK service account to obtain an OAuth token
2. Calls `GET https://identitytoolkit.googleapis.com/admin/v2/projects/{projectId}/config` to fetch current config
3. Appends `localhost` and `127.0.0.1` to `authorizedDomains` if not already present
4. Calls `PATCH` with `updateMask=authorizedDomains` to persist the change

**Key code pattern:**
```javascript
const configUrl = `https://identitytoolkit.googleapis.com/admin/v2/projects/${PROJECT_ID}/config`;
const config = await fetch(configUrl, { headers }).then(r => r.json());
const updated = [...new Set([...config.authorizedDomains, 'localhost', '127.0.0.1'])];
await fetch(`${configUrl}?updateMask=authorizedDomains`, {
  method: 'PATCH',
  body: JSON.stringify({ authorizedDomains: updated }),
});
```

**Service account requirements:**
- Must have `cloud-platform` or `identitytoolkit` scope
- Firebase Admin SDK key (JSON) from Firebase Console > Project Settings > Service Accounts

## Why This Works

1. **Root cause:** Firebase Auth maintains an "authorized domains" list in the Identity Platform project config. Only domains in this list can initiate auth flows. Newer projects may not include `localhost` by default.

2. **Identity Platform API:** The `projects.updateConfig` endpoint (Identity Toolkit API v2) allows programmatic updates to this list. The `authorizedDomains` field is a string array of domain names (no protocol, no port).

3. **localhost vs 127.0.0.1:** Firebase treats these as different domains. Both must be added for full local development coverage.

## Prevention

- **New project setup:** Run `scripts/add-auth-domains.mjs` as part of initial Firebase Auth setup for any project that will be developed locally.
- **CI/local dev:** Add to onboarding docs or `README` that developers must run this script (or have run it once) before local auth works.
- **Alternative:** Manually add domains in Firebase Console > Authentication > Settings > Authorized domains. Click "Add domain" and add `localhost` and `127.0.0.1`.

## Related Issues

No related issues documented yet.
