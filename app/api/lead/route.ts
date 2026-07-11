import { NextRequest, NextResponse } from "next/server";
import { sendLeadEmail } from "@/lib/email";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = (body.name ?? "").trim().slice(0, 200);
  const contact = (body.contact ?? "").trim().slice(0, 300);
  const message = (body.message ?? "").trim().slice(0, 3000);
  const source = (body.source ?? "form").trim().slice(0, 200);

  // Honeypot field — bots fill it, humans never see it.
  if (body.company) return NextResponse.json({ ok: true });

  if (!contact) {
    return NextResponse.json({ error: "Please leave an email or phone number." }, { status: 400 });
  }

  const ok = await sendLeadEmail({ source, name, contact, message });
  if (!ok) {
    return NextResponse.json({ error: "Could not submit right now. Please try again." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
