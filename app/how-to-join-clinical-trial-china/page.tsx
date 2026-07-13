import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "How to Join a Clinical Trial in China as a Foreign Patient",
  description:
    "A step-by-step guide for international patients: how to check eligibility for a CAR-T or proton therapy trial in China, what records you need, visas, and what to expect on the ground.",
  alternates: { canonical: "/how-to-join-clinical-trial-china" },
};

export default function Page() {
  return (
    <ArticleLayout
      eyebrow="Process"
      title="How to join a clinical trial in China"
      lede="A step-by-step walkthrough for patients from the US and Europe — from checking eligibility to travel and follow-up."
      leadSource="process guide"
      faqs={[
        {
          q: "Do I have to travel before I know if I'm eligible?",
          a: "No. Eligibility is usually assessed remotely first, from your medical records and imaging. You only plan travel if a trial team confirms you may be a candidate. Never book flights before that step.",
        },
        {
          q: "What records will I need?",
          a: "Typically a medical summary in English, pathology reports, and imaging files (CT, MRI, or PET scans), plus a treatment history. Trial teams use these to check eligibility and, for radiation, to plan treatment.",
        },
        {
          q: "What kind of visa do I need?",
          a: "Patients traveling for medical treatment generally need an appropriate medical or visitor visa; the exact category depends on your nationality and length of stay. Requirements change, so verify current rules for your country before making plans. Larger centers' international departments often assist.",
        },
        {
          q: "How long will I need to stay?",
          a: "It depends on the treatment. CAR-T typically involves a stay of several weeks; a full proton therapy course can run six to eight weeks. The trial team gives you a timeline before you travel so you can plan.",
        },
      ]}
      related={[
        { href: "/car-t-cell-therapy-china", kicker: "Trials", title: "CAR-T trials in China" },
        { href: "/proton-therapy-china", kicker: "Trials", title: "Proton therapy trials in China" },
        { href: "/is-car-t-therapy-in-china-safe", kicker: "Safety", title: "Is CAR-T in China safe?" },
        { href: "/car-t-therapy-cost-china", kicker: "Cost", title: "What CAR-T costs in China" },
      ]}
    >
      <p>
        Joining a clinical trial abroad can feel daunting, but the path is more orderly than most people expect. The
        key principle: <strong>nothing is booked, and no travel happens, until a trial team confirms you may
        qualify</strong>. Here&apos;s how it usually goes.
      </p>

      <h2>Step 1 — Share your situation</h2>
      <p>
        It starts with the basics: your diagnosis, the treatments you&apos;ve already tried, and where you live. This
        lets a coordinator narrow down which recruiting trials are even worth considering for your case, before anyone
        gathers detailed records.
      </p>

      <h2>Step 2 — Gather your medical records</h2>
      <p>To assess eligibility, trial teams generally need:</p>
      <ul>
        <li>A <strong>medical summary</strong> in English</li>
        <li><strong>Pathology reports</strong> confirming the diagnosis</li>
        <li><strong>Imaging</strong> — CT, MRI, or PET scans (often the original files, not just printouts)</li>
        <li>A record of <strong>prior treatments</strong> and how you responded</li>
      </ul>
      <p>Coordinators often help with translation and organizing these documents.</p>

      <h2>Step 3 — Remote eligibility review</h2>
      <p>
        The trial team reviews your records <strong>remotely</strong> and decides whether you may be eligible under
        their protocol. This is the gate that matters — and it happens before you spend anything on travel. If a trial
        can&apos;t accept you, a good coordinator will tell you honestly and look at alternatives.
      </p>

      <div className="callout">
        <p>
          <strong>Important:</strong> eligibility is decided solely by the trial&apos;s investigators, not by any
          agency or coordinator. No one can promise you a spot in advance. Be wary of anyone who does.
        </p>
      </div>

      <h2>Step 4 — Invitation and logistics</h2>
      <p>
        If a trial confirms you may be a candidate, you typically receive an invitation letter, which supports your
        visa application. From there, you plan the practical side: the appropriate visa for medical travel, flights,
        accommodation for a multi-week stay, and translation support. Requirements vary by nationality and change over
        time, so confirm current rules for your country.
      </p>

      <h2>Step 5 — Treatment and monitoring</h2>
      <p>
        On arrival, the center confirms eligibility with in-person tests before treatment begins. CAR-T involves a stay
        of several weeks with close monitoring; a proton therapy course runs across many sessions over several weeks.
        Larger centers usually have international departments that handle day-to-day coordination.
      </p>

      <h2>Step 6 — Follow-up back home</h2>
      <p>
        After treatment, you return home with your complete records — pathology, imaging, dose details, and follow-up
        instructions — so your local oncologist can continue your care. Arrange this handover in advance; continuity of
        follow-up is one of the most important parts of treatment abroad.
      </p>

      <h2>Where to start</h2>
      <p>
        You don&apos;t need to figure all of this out alone. Send your diagnosis and history below for a free
        eligibility review, and a coordinator will tell you whether a trial could realistically fit — and walk you
        through the steps if it does. Keep your treating oncologist involved throughout.
      </p>
    </ArticleLayout>
  );
}
