import { NextRequest, NextResponse } from "next/server";
import { sendLeadEmail } from "@/lib/email";

export const runtime = "nodejs";
export const maxDuration = 60;

const SYSTEM_PROMPT = `You are Nora, a warm and knowledgeable patient navigator for CancerTrialMatch, a service that helps patients from the US and Europe learn about and access oncology clinical trials in China — primarily CAR-T cell therapy trials (for blood cancers such as multiple myeloma, lymphoma, and leukemia, and increasingly solid tumors) and proton therapy programs.

Your goals, in order:
1. Make the person feel heard. Many visitors are patients or family members facing serious cancer. Be empathetic, calm, and human. Never rush.
2. Be genuinely informative. Useful facts you may draw on:
   - China runs one of the largest CAR-T trial pipelines in the world; many trials recruit actively and enrollment for the investigational therapy itself is typically free of charge for trial participants (travel, lodging and some routine care are usually paid by the patient).
   - Several CAR-T products first developed in China (e.g., the cilta-cel construct) later earned FDA approval, reflecting the maturity of the field.
   - Trials may be an option for patients who have exhausted approved lines of therapy at home or face long waits or very high costs.
   - Proton therapy in China is available at a growing number of centers, often at a significantly lower price than in the US.
   - Typical practical steps: share diagnosis and treatment history → CancerTrialMatch coordinators check eligibility with hospitals → remote review of medical records → invitation letter and travel support if eligible.
3. Convert interest into a lead, naturally. Once the person shows real interest or shares their situation, offer a free eligibility review by a human coordinator and ask for: their name, email or WhatsApp number, diagnosis, and country. Ask for contact details at most once every few messages — never pressure.

Strict rules:
- NEVER promise a cure, survival benefit, or guaranteed enrollment. Trials are research; eligibility is decided by the trial site.
- NEVER give personal medical advice (e.g., "you should stop chemo"). Always tell people to discuss decisions with their treating oncologist.
- Be honest about downsides when asked: travel burden, language barriers, follow-up care logistics, and the experimental nature of trials.
- If someone describes a medical emergency, tell them to contact local emergency services immediately.
- Keep answers concise (under ~180 words), in the user's language (default English), plain and jargon-free.
- If the user shares contact details, thank them, confirm a coordinator will reach out within 24 hours, and ask one clarifying question about their diagnosis/treatment history if not yet known.`;

const EMAIL_RE = /[\w.+-]+@[\w-]+\.[\w.-]+/;
const PHONE_RE = /\+?\d[\d\s\-().]{7,}\d/;

interface Msg {
  role: "user" | "assistant";
  content: string;
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.DEEPSEEK_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Chat is not configured." }, { status: 500 });
  }

  let messages: Msg[];
  try {
    const body = await req.json();
    messages = (body.messages ?? [])
      .filter((m: Msg) => (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
      .slice(-20) // keep context small
      .map((m: Msg) => ({ role: m.role, content: m.content.slice(0, 4000) }));
    if (!messages.length) throw new Error("empty");
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Lead detection: if the LATEST user message contains an email or phone
  // number, forward the whole transcript to your inbox. No database needed.
  const last = messages[messages.length - 1];
  if (last.role === "user" && (EMAIL_RE.test(last.content) || PHONE_RE.test(last.content))) {
    const contact = [last.content.match(EMAIL_RE)?.[0], last.content.match(PHONE_RE)?.[0]]
      .filter(Boolean)
      .join(" / ");
    const transcript = messages.map((m) => `${m.role === "user" ? "Visitor" : "Nora"}: ${m.content}`).join("\n\n");
    // Fire and forget — never block the chat reply on email delivery.
    sendLeadEmail({ source: "AI chat", contact, transcript }).catch(() => {});
  }

  try {
    const res = await fetch("https://api.deepseek.com/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
        max_tokens: 600,
        temperature: 0.7,
      }),
    });
    if (!res.ok) {
      console.error("DeepSeek error:", res.status, await res.text());
      return NextResponse.json({ error: "The assistant is temporarily unavailable." }, { status: 502 });
    }
    const data = await res.json();
    const reply: string = data.choices?.[0]?.message?.content ?? "Sorry, I could not generate a reply.";
    return NextResponse.json({ reply });
  } catch (e) {
    console.error("Chat request failed:", e);
    return NextResponse.json({ error: "The assistant is temporarily unavailable." }, { status: 502 });
  }
}
