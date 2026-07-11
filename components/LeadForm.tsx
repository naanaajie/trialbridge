"use client";

import { useState } from "react";

export default function LeadForm({ source = "form" }: { source?: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [form, setForm] = useState({ name: "", contact: "", message: "", company: "" });

  async function submit() {
    if (!form.contact.trim()) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source }),
      });
      setStatus(res.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="form-ok">
        Thank you — a coordinator will email or message you within 24 hours to walk through your options. There's no
        cost and no obligation.
      </div>
    );
  }

  return (
    <div className="lead-form">
      <input
        placeholder="Your name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        aria-label="Your name"
      />
      <input
        placeholder="Email or WhatsApp *"
        value={form.contact}
        onChange={(e) => setForm({ ...form, contact: e.target.value })}
        aria-label="Email or WhatsApp"
      />
      <textarea
        placeholder="Diagnosis, country, and what you've tried so far (optional)"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        aria-label="Your situation"
      />
      {/* Honeypot */}
      <input
        className="hp"
        tabIndex={-1}
        autoComplete="off"
        placeholder="Company"
        value={form.company}
        onChange={(e) => setForm({ ...form, company: e.target.value })}
        aria-hidden="true"
      />
      {status === "error" && (
        <p className="form-err">Please add an email or WhatsApp number so we can reach you, then try again.</p>
      )}
      <button className="btn" onClick={submit} disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Request a free eligibility review"}
      </button>
      <p className="form-note">
        We share your details only with vetted treatment coordinators to check trial eligibility. No spam. See our{" "}
        <a href="/privacy">privacy note</a>.
      </p>
    </div>
  );
}
