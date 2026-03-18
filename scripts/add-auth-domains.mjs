#!/usr/bin/env node
/**
 * Add localhost and 127.0.0.1 to Firebase Auth authorized domains.
 * Run: node scripts/add-auth-domains.mjs
 */
import { readFileSync } from "fs";
import { pathToFileURL } from "url";

const KEY_FILE = process.env.FIREBASE_SERVICE_ACCOUNT_KEY || process.env.GOOGLE_APPLICATION_CREDENTIALS || "/Users/jacobkotzee/Projects/GCP/kona-83f57-firebase-adminsdk-fbsvc-ebc3e96eb4.json";
const PROJECT_ID = "kona-83f57";
const DOMAINS_TO_ADD = ["localhost", "127.0.0.1"];

async function getAccessToken() {
  const key = JSON.parse(readFileSync(KEY_FILE, "utf8"));
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: "RS256", typ: "JWT" };
  const payload = {
    iss: key.client_email,
    sub: key.client_email,
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 3600,
    scope: "https://www.googleapis.com/auth/cloud-platform",
  };
  const encoder = new TextEncoder();
  const b64 = (obj) => Buffer.from(JSON.stringify(obj)).toString("base64url");
  const signatureInput = `${b64(header)}.${b64(payload)}`;
  const crypto = await import("crypto");
  const sig = crypto.createSign("RSA-SHA256").update(signatureInput).sign(key.private_key, "base64url");
  const jwt = `${signatureInput}.${sig}`;

  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
  });
  const data = await res.json();
  if (data.error) throw new Error(data.error_description || data.error);
  return data.access_token;
}

async function main() {
  const token = await getAccessToken();
  const configUrl = `https://identitytoolkit.googleapis.com/admin/v2/projects/${PROJECT_ID}/config`;
  const headers = { Authorization: `Bearer ${token}` };

  const getRes = await fetch(configUrl, { headers });
  if (!getRes.ok) {
    const err = await getRes.text();
    throw new Error(`GET config failed: ${getRes.status} ${err}`);
  }
  const config = await getRes.json();
  const current = config.authorizedDomains || [];
  const toAdd = DOMAINS_TO_ADD.filter((d) => !current.includes(d));
  if (toAdd.length === 0) {
    console.log("Domains already authorized:", DOMAINS_TO_ADD.join(", "));
    return;
  }
  const updated = [...new Set([...current, ...toAdd])];

  const patchRes = await fetch(`${configUrl}?updateMask=authorizedDomains`, {
    method: "PATCH",
    headers: { ...headers, "Content-Type": "application/json" },
    body: JSON.stringify({ authorizedDomains: updated }),
  });
  if (!patchRes.ok) {
    const err = await patchRes.text();
    throw new Error(`PATCH config failed: ${patchRes.status} ${err}`);
  }
  console.log("Added authorized domains:", toAdd.join(", "));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
