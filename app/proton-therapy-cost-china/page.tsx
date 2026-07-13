import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "Proton Therapy Cost in China vs the US (2026 Patient Guide)",
  description:
    "How much does proton therapy cost in China compared to the US? Understand pricing ranges, what a full course involves, carbon-ion options, and the travel costs to plan for.",
  alternates: { canonical: "/proton-therapy-cost-china" },
};

export default function Page() {
  return (
    <ArticleLayout
      eyebrow="Cost"
      title="What proton therapy costs in China"
      lede="A clear look at proton (and carbon-ion) therapy pricing in China versus the US, and what a full treatment course actually involves."
      leadSource="proton cost guide"
      faqs={[
        {
          q: "How much cheaper is proton therapy in China than the US?",
          a: "Reported ranges suggest a full proton course in China can cost substantially less than in the US — often cited as roughly half or less. Exact figures vary by center, cancer type, and number of sessions, so treat published numbers as approximate. A specific hospital quote for your case is the only reliable figure.",
        },
        {
          q: "How long is a proton therapy course?",
          a: "A typical course runs across multiple sessions over several weeks. Because of that, international patients usually plan for a stay of roughly six to eight weeks, though your treatment plan determines the exact length.",
        },
        {
          q: "What is carbon-ion (heavy-ion) therapy?",
          a: "Carbon-ion therapy is a related, even more precise form of particle therapy available at only a handful of centers worldwide — including several in China. For certain radiation-resistant tumors it may be recommended over standard proton therapy. Whether it applies to you is a decision for a radiation oncologist.",
        },
        {
          q: "Does insurance cover proton therapy abroad?",
          a: "Usually not, or only partially. It depends entirely on your insurer and policy. Confirm with your provider before making any plans.",
        },
      ]}
      related={[
        { href: "/proton-therapy-china", kicker: "Trials", title: "Proton therapy trials in China" },
        { href: "/car-t-therapy-cost-china", kicker: "Cost", title: "CAR-T therapy cost in China" },
        { href: "/how-to-join-clinical-trial-china", kicker: "Process", title: "How to join a trial in China" },
      ]}
    >
      <p>
        Proton therapy is one of the most precise forms of radiation treatment available — and one of the most
        expensive to build and deliver. That&apos;s reflected in the price. For many international patients, the gap
        between US and Chinese pricing is what makes the treatment reachable at all.
      </p>

      <h2>The price gap</h2>
      <p>
        In the US, a full proton therapy course generally runs into six figures. In China, published figures point to
        a substantially lower cost for a comparable course — frequently cited as around half, sometimes less. The
        drivers are familiar: lower operating costs, government price ceilings, high patient volumes, and a growing
        domestic industry.
      </p>

      <div className="callout">
        <p>
          <strong>A word on numbers:</strong> cost figures you find online vary widely by center and change over time.
          Use them to get a sense of scale, not as a quote. The only figure you can rely on is one a specific hospital
          gives after reviewing your case.
        </p>
      </div>

      <h2>What a full course involves</h2>
      <p>
        Proton therapy isn&apos;t a single visit. A course is usually delivered across many sessions over several
        weeks. For someone traveling from abroad, that means planning for an extended stay — commonly in the range of
        six to eight weeks — plus the associated travel and living costs.
      </p>
      <p>Beyond the treatment fee itself, budget for:</p>
      <ul>
        <li>
          <strong>Flights and accommodation</strong> for the patient and a companion, over a multi-week stay.
        </li>
        <li>
          <strong>Imaging and planning</strong> — scans used to map the treatment precisely.
        </li>
        <li>
          <strong>Translation and coordination</strong> — often offered by larger centers&apos; international
          departments.
        </li>
        <li>
          <strong>Living expenses</strong> during the course.
        </li>
      </ul>

      <h2>Proton vs carbon-ion therapy</h2>
      <p>
        China is one of the few countries that also offers <strong>carbon-ion therapy</strong>, a heavier form of
        particle radiation that can be more effective against certain radiation-resistant tumors. It&apos;s not the
        right tool for every cancer, and only a radiation oncologist reviewing your case can say whether standard
        proton therapy, carbon-ion, or conventional radiation makes the most sense.
      </p>

      <h2>Getting a realistic estimate</h2>
      <p>
        Because cost depends on your cancer type, the treatment plan, and the number of sessions, a general figure
        online won&apos;t answer your real question. The practical step is to have your records and imaging reviewed so
        a center can tell you whether you&apos;re a candidate and what it would cost.
      </p>
      <p>
        Start with a free review below, or see{" "}
        <a href="/proton-therapy-china">proton therapy trials in China</a>. As always, confirm coverage with your
        insurer and discuss the decision with your treating oncologist.
      </p>
    </ArticleLayout>
  );
}
