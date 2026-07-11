"use client";

import { useEffect, useRef, useState } from "react";

interface Msg {
  role: "user" | "assistant";
  content: string;
}

const GREETING: Msg = {
  role: "assistant",
  content:
    "Hi, I'm Nora. I help patients and families in the US and Europe understand CAR-T and proton therapy trials in China. What brings you here today — is it for you or someone you love?",
};

export default function Chat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([GREETING]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  async function send() {
    const text = input.trim();
    if (!text || busy) return;
    const next = [...messages, { role: "user" as const, content: text }];
    setMessages(next);
    setInput("");
    setBusy(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      setMessages([
        ...next,
        {
          role: "assistant",
          content: data.reply || data.error || "Sorry, something went wrong. Please try again.",
        },
      ]);
    } catch {
      setMessages([...next, { role: "assistant", content: "Network error. Please try again." }]);
    } finally {
      setBusy(false);
    }
  }

  if (!open) {
    return (
      <button className="chat-fab" onClick={() => setOpen(true)} aria-label="Open chat with Nora">
        💬 Ask about trials
      </button>
    );
  }

  return (
    <section className="chat-panel" role="dialog" aria-label="Chat with Nora">
      <div className="chat-head">
        <div>
          <div className="t">Nora · Patient navigator</div>
          <div className="s">Usually replies instantly</div>
        </div>
        <button className="chat-close" onClick={() => setOpen(false)} aria-label="Close chat">
          ×
        </button>
      </div>

      <div className="chat-body" ref={bodyRef}>
        {messages.map((m, i) => (
          <div key={i} className={`msg ${m.role}`}>
            {m.content}
          </div>
        ))}
        {busy && <div className="msg assistant typing">Nora is typing…</div>}
      </div>

      <div className="chat-input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder="Type your question…"
          aria-label="Message"
        />
        <button onClick={send} disabled={busy}>
          Send
        </button>
      </div>
      <p className="chat-note">Not medical advice. Share contact details only if you'd like a coordinator to reach out.</p>
    </section>
  );
}
