/**
 * ONE-TIME SCRIPT: Get Google Calendar OAuth2 Refresh Token
 *
 * Run this ONCE to authorize your Google account and get a refresh token.
 * Usage: node scripts/get-google-token.mjs
 *
 * Prerequisites:
 * 1. Go to Google Cloud Console → APIs & Services → Credentials
 * 2. Click "Create Credentials" → "OAuth Client ID"
 * 3. Application type: "Desktop app" (or "Web application")
 * 4. Copy the Client ID and Client Secret
 * 5. Run this script and paste them when prompted
 */

import { google } from "googleapis";
import http from "http";
import { URL } from "url";
import readline from "readline";

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const ask = (q) => new Promise((resolve) => rl.question(q, resolve));

async function main() {
  console.log("\n🔐 Google Calendar OAuth2 Setup\n");
  console.log("Go to: https://console.cloud.google.com/apis/credentials");
  console.log('Create OAuth Client ID → Type: "Desktop app"\n');

  const clientId = await ask("Paste your Client ID: ");
  const clientSecret = await ask("Paste your Client Secret: ");

  const oauth2Client = new google.auth.OAuth2(
    clientId.trim(),
    clientSecret.trim(),
    "http://localhost:3333/callback"
  );

  const authUrl = oauth2Client.generateAuthUrl({
    access_type: "offline",
    prompt: "consent",
    scope: ["https://www.googleapis.com/auth/calendar"],
  });

  console.log("\n📋 Opening auth URL. If browser doesn't open, copy-paste this link:\n");
  console.log(authUrl);

  // Try to open browser
  const { exec } = await import("child_process");
  const cmd = process.platform === "win32" ? "start" : process.platform === "darwin" ? "open" : "xdg-open";
  exec(`${cmd} "${authUrl}"`);

  // Start local server to catch the callback
  const code = await new Promise((resolve, reject) => {
    const server = http.createServer((req, res) => {
      const url = new URL(req.url, "http://localhost:3333");
      const authCode = url.searchParams.get("code");
      if (authCode) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>✅ Authorization successful!</h1><p>You can close this tab and go back to the terminal.</p>");
        server.close();
        resolve(authCode);
      } else {
        res.writeHead(400);
        res.end("Missing code parameter");
        reject(new Error("No auth code received"));
      }
    });

    server.listen(3333, () => {
      console.log("\n⏳ Waiting for authorization... (listening on http://localhost:3333/callback)\n");
    });

    // Timeout after 2 minutes
    setTimeout(() => {
      server.close();
      reject(new Error("Timed out waiting for authorization"));
    }, 120000);
  });

  // Exchange code for tokens
  const { tokens } = await oauth2Client.getToken(code);

  console.log("\n✅ SUCCESS! Add these to your .env.local:\n");
  console.log("─".repeat(60));
  console.log(`GOOGLE_CLIENT_ID=${clientId.trim()}`);
  console.log(`GOOGLE_CLIENT_SECRET=${clientSecret.trim()}`);
  console.log(`GOOGLE_REFRESH_TOKEN=${tokens.refresh_token}`);
  console.log("─".repeat(60));
  console.log("\nAlso add your Calendar ID:");
  console.log("Google Calendar → Settings → Your calendar → Integrate → Calendar ID");
  console.log("GOOGLE_CALENDAR_ID=your-calendar-id@gmail.com\n");

  rl.close();
}

main().catch((err) => {
  console.error("Error:", err.message);
  rl.close();
  process.exit(1);
});
