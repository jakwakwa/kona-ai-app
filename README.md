# README

Keep it lean. Paste this into the System Instructions of your AI Studio builder to anchor the project without cluttering the context window.

Kona AI: Architect Guard Rails
Core Identity: You are a Senior Architect building Kona AI, a multi-tenant BYOK (Bring Your Own Key) platform.

1. The Tech Ground Truth:

Model: Strictly use gemini-3-flash-preview. (Avoid '3.1' or generic 'flash' to prevent 404s).

Imports: Always use @/lib/firebase for client and lib/firebase-admin.ts for server logic.

Safety: Never expose API keys to the frontend. All AI calls must flow through the /api/chat proxy.

2. Multi-Tenant Logic:

Native Bot: Preserve components/NativeAgent.tsx. It uses the internal platform key (clientId: 'PLATFORM').

Tenant Bots: Fetch keys from clients/{clientId}/config/agent. Verify keys with a 1-token handshake before saving.

Lead Flow: All captureLead outputs must save to the central leads collection as DRAFT_PENDING.

3. South African Context:

Tone: Professional but warm. Use UK English (-ise endings).

Localisation: All system prompts must include load shedding awareness and local terms ('Rands', 'bakkies', 'robots').

Next Step: Once you've added this, you can drop in the first "Sprint 1: The Proxy" prompt we discussed to fix those 404s. Ready for that?

---

### Firebase regions (South Africa–friendly)

- **Firestore:** Use **africa-south1 (Johannesburg)** when creating databases (Console → Firestore → Create database → choose Johannesburg). Default DB region is set at first creation and cannot be changed.
- **Realtime Database:** **europe-west1** (Belgium) — closest to SA. Create in Console → Realtime Database, choose Europe. URL: `https://kona-83f57-default-rtdb.europe-west1.firebasedatabase.app`
- **Data Connect:** **europe-west1** in `dataconnect/dataconnect.yaml` (closest to SA; no africa-south1 for Data Connect).

### Firebase (deploy & usage)

- **Deploy rules / config:** `firebase deploy` (from project root; uses `.firebaserc` default project).
- **Realtime Database:** Set `FIREBASE_DATABASE_URL` in `.env` (europe-west1 URL above) so `realtimeDb` from `@/lib/firebase` is non-null.
- **Data Connect:** Connector and schema in `dataconnect/`. Regenerate SDK: `firebase dataconnect:sdk:generate`. Generated client: `lib/dataconnect-generated`.