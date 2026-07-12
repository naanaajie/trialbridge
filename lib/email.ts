// Sends lead notifications to your inbox via Resend (no database needed).

export interface LeadPayload {
  source: string; // "chat" | "form" | page name
  name?: string;
  contact?: string;
  message?: string;
  transcript?: string;
}

function esc(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br/>");
}

export async function sendLeadEmail(lead: LeadPayload): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_EMAIL;
  const from = process.env.LEAD_FROM || "onboarding@resend.dev";
  if (!apiKey || !to) {
    console.error("RESEND_API_KEY or LEAD_EMAIL is not configured");
    return false;
  }

  const html = `
    <h2>🔔 New lead from CancerTrialMatch</h2>
    <table cellpadding="6" style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
      <tr><td><b>Source</b></td><td>${esc(lead.source)}</td></tr>
      ${lead.name ? `<tr><td><b>Name</b></td><td>${esc(lead.name)}</td></tr>` : ""}
      ${lead.contact ? `<tr><td><b>Contact</b></td><td>${esc(lead.contact)}</td></tr>` : ""}
      ${lead.message ? `<tr><td><b>Message</b></td><td>${esc(lead.message)}</td></tr>` : ""}
      <tr><td><b>Time (UTC)</b></td><td>${new Date().toISOString()}</td></tr>
    </table>
    ${lead.transcript ? `<h3>Chat transcript</h3><div style="background:#f6f6f6;padding:12px;border-radius:8px;font-family:sans-serif;font-size:13px;white-space:pre-wrap">${esc(lead.transcript)}</div>` : ""}
  `;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `CancerTrialMatch Leads <${from}>`,
        to: [to],
        subject: `New lead (${lead.source})${lead.contact ? " — " + lead.contact : ""}`,
        html,
      }),
    });
    if (!res.ok) console.error("Resend error:", res.status, await res.text());
    return res.ok;
  } catch (e) {
    console.error("Resend request failed:", e);
    return false;
  }
}
