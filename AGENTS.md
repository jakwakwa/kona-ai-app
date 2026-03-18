
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

## Learned User Preferences

- Take user words literally: "every single" means every single, "any" means any. Do not substitute "multiple" for "every single"
- Get it right the first time. Do not require the user to repeat themselves two or three times
- Do it diligently when the user says diligently — apply full effort, use every single tool, do not cut corners
- Use every single tool when verifying — Shell, MCP, scripts, browser, skills, rules. Do not use only one when more apply
- Never declare success until verified in compile time (bun run build) and runtime (browser when applicable)
- Re-read the user's message before responding. Verify your response matches their exact words
- Continual learning: run only when the user explicitly invokes /continual-learning. Never run it automatically
- When the app is not in production, prefer full migration with no fallbacks or legacy code over incremental or parallel approaches
- When details are missing, ask the user rather than infer or hallucinate

## Learned Workspace Facts

- Firestore onSnapshot: never throw in error callback. Always call setLoading(false) and setError(...) so the UI can recover
- Firestore database ID: use NEXT_PUBLIC_FIRESTORE_DATABASE_ID or "(default)", not project ID
- Firestore rules: env vars not supported. Use hardcoded values for admin checks
- Verification scripts: scripts/verify-firestore-campaigns-access.mjs, scripts/add-auth-domains.mjs
- Use bun not npm/pnpm for install and run