import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Patient Guides: CAR-T & Proton Therapy Trials in China",
  description:
    "Plain-language guides for patients considering CAR-T or proton therapy clinical trials in China — covering cost, safety, the process, specific cancers, and how China compares to the US.",
  alternates: { canonical: "/guides" },
};

const guides = [
  {
    kicker: "Basics",
    href: "/what-is-car-t-cell-therapy",
    title: "What is CAR-T cell therapy?",
    desc: "How it works, which cancers it treats, and what to expect — in plain language.",
  },
  {
    kicker: "Cost",
    href: "/car-t-therapy-cost-china",
    title: "What CAR-T costs in China",
    desc: "Trial vs commercial pricing, what's free in a trial, and what to budget for.",
  },
  {
    kicker: "Cost",
    href: "/proton-therapy-cost-china",
    title: "What proton therapy costs in China",
    desc: "Price ranges vs the US, what a full course involves, and carbon-ion options.",
  },
  {
    kicker: "Multiple myeloma",
    href: "/car-t-multiple-myeloma-china",
    title: "CAR-T for multiple myeloma in China",
    desc: "BCMA-targeted therapy, why China's pipeline matters, and finding a trial.",
  },
  {
    kicker: "Lymphoma",
    href: "/car-t-lymphoma-china",
    title: "CAR-T for lymphoma in China",
    desc: "CD19-targeted CAR-T, which lymphomas it may help, and how to find a study.",
  },
  {
    kicker: "Leukemia",
    href: "/car-t-leukemia-china",
    title: "CAR-T for leukemia in China",
    desc: "How it works in B-ALL and other leukemias, and who it's for.",
  },
  {
    kicker: "Safety & trust",
    href: "/is-car-t-therapy-in-china-safe",
    title: "Is CAR-T therapy in China safe?",
    desc: "An honest look at the science, the risks, and how to judge a specific trial.",
  },
  {
    kicker: "Process",
    href: "/how-to-join-clinical-trial-china",
    title: "How to join a clinical trial in China",
    desc: "Step by step: eligibility, records, visas, travel, and follow-up.",
  },
  {
    kicker: "Compare",
    href: "/car-t-therapy-china-vs-usa",
    title: "CAR-T therapy: China vs the USA",
    desc: "Cost, trial access, wait times, and the real trade-offs of going abroad.",
  },
];

export default function Guides() {
  return (
    <>
      <section className="article-hero">
        <div className="container">
          <p className="eyebrow">Patient guides</p>
          <h1 style={{ maxWidth: "18ch" }}>Understand your options, clearly</h1>
          <p className="article-lede">
            Straight, jargon-free guides for patients and families weighing CAR-T or proton therapy trials in China —
            written to inform, not to sell.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 32 }}>
        <div className="container">
          <div className="guide-grid">
            {guides.map((g) => (
              <article key={g.href} className="guide-card">
                <span className="g-k">{g.kicker}</span>
                <h3>
                  <Link href={g.href}>{g.title}</Link>
                </h3>
                <p>{g.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container" style={{ textAlign: "center" }}>
          <h2>Ready to check if a trial fits you?</h2>
          <p className="section-intro" style={{ margin: "0 auto 24px" }}>
            Browse recruiting trials, or ask Nora in the chat. A free eligibility review takes minutes to start.
          </p>
          <div className="btn-row" style={{ justifyContent: "center" }}>
            <Link href="/car-t-cell-therapy-china" className="btn">
              CAR-T trials
            </Link>
            <Link href="/proton-therapy-china" className="btn secondary">
              Proton therapy trials
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
