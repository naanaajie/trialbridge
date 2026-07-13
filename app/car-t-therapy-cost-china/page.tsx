import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "CAR-T Therapy Cost in China vs the US: What Patients Actually Pay",
  description:
    "How much does CAR-T cell therapy cost in China compared to the US? Understand trial vs commercial pricing, what's free in a clinical trial, and the travel costs to budget for.",
  alternates: { canonical: "/car-t-therapy-cost-china" },
};

export default function Page() {
  return (
    <ArticleLayout
      eyebrow="Cost"
      title="What CAR-T therapy costs in China"
      lede="An honest look at CAR-T pricing in China versus the US — including what a clinical trial covers, and what you still need to budget for."
      leadSource="car-t cost guide"
      faqs={[
        {
          q: "Is CAR-T free in a clinical trial in China?",
          a: "In many trials, the investigational CAR-T therapy itself is provided at no charge to participants, because the trial sponsor covers it. However, you typically still pay for travel, accommodation, some routine tests, and living costs during a stay that can run several weeks. Always confirm exactly what a specific trial covers before you commit.",
        },
        {
          q: "How much does commercial CAR-T cost in the US?",
          a: "Approved CAR-T products in the US carry list prices in the hundreds of thousands of dollars for the therapy alone, before hospital and care costs. This is a major reason patients look at trials and at lower-cost options abroad.",
        },
        {
          q: "What does a full CAR-T journey in China cost out of pocket?",
          a: "It varies widely by trial, hospital, and your situation. If the therapy is provided through a trial, your main costs are flights, lodging, translation, and living expenses over several weeks. If you pursue commercial (non-trial) treatment, therapy costs apply on top. A coordinator can give you a realistic estimate once your case is reviewed.",
        },
        {
          q: "Does insurance cover treatment abroad?",
          a: "Usually not, or only partially. Coverage depends entirely on your insurer and policy. Check directly with your provider before making plans, and don't assume reimbursement.",
        },
      ]}
      related={[
        { href: "/car-t-cell-therapy-china", kicker: "Trials", title: "CAR-T trials recruiting in China" },
        { href: "/car-t-therapy-china-vs-usa", kicker: "Compare", title: "CAR-T in China vs the USA" },
        { href: "/how-to-join-clinical-trial-china", kicker: "Process", title: "How to join a trial in China" },
        { href: "/proton-therapy-cost-china", kicker: "Cost", title: "Proton therapy cost in China" },
      ]}
    >
      <p>
        Cost is often the first question families ask, and for good reason — CAR-T is one of the most expensive cancer
        treatments in the world. The honest answer is that the total depends heavily on <strong>whether you access
        it through a clinical trial or as commercial treatment</strong>, so let&apos;s separate the two.
      </p>

      <h2>The single biggest factor: trial vs commercial</h2>
      <p>
        In a <strong>clinical trial</strong>, the investigational CAR-T therapy is often provided at no charge to
        participants, because the study sponsor is paying for it. That can remove the largest single line item — the
        cost of the therapy itself.
      </p>
      <p>
        Outside a trial, as <strong>commercial treatment</strong>, the therapy is paid for out of pocket. For context,
        approved CAR-T products in the US carry list prices in the hundreds of thousands of dollars for the drug alone,
        before hospital stays and supportive care.
      </p>

      <div className="callout">
        <p>
          <strong>The takeaway:</strong> if you qualify for a trial, the therapy may cost you nothing — and your real
          budget is travel and living costs. This is exactly why so many international patients look at trials rather
          than commercial treatment.
        </p>
      </div>

      <h2>What you still pay for in a trial</h2>
      <p>Even when the therapy is covered, a trial abroad involves real costs. Plan for:</p>
      <ul>
        <li>
          <strong>Flights</strong> — for the patient and usually a caregiver.
        </li>
        <li>
          <strong>Accommodation</strong> — CAR-T requires a stay of several weeks, so lodging adds up.
        </li>
        <li>
          <strong>Some routine tests and care</strong> — not everything is always covered by the study.
        </li>
        <li>
          <strong>Translation and coordination</strong> — sometimes provided, sometimes not.
        </li>
        <li>
          <strong>Living expenses</strong> — food and daily costs during the stay.
        </li>
      </ul>

      <h2>Why treatment in China can cost less</h2>
      <p>
        Beyond trials, China&apos;s cancer care is generally priced well below US and European levels. High patient
        volumes, centralized purchasing, and a fast-maturing domestic industry keep costs down. That said, published
        price figures vary by center and change over time, so treat any single number you see online as a rough range,
        not a quote. The only reliable figure is the one a specific hospital gives for your specific case.
      </p>

      <h2>How to get a real number for your situation</h2>
      <p>
        Because so much depends on your diagnosis, the specific trial, and your travel plans, a general price online
        won&apos;t tell you much. The practical path is to have your records reviewed so a coordinator can tell you
        which trials might accept you, what they cover, and what you&apos;d realistically need to budget.
      </p>
      <p>
        You can start with a free review below, or browse{" "}
        <a href="/car-t-cell-therapy-china">recruiting CAR-T trials</a> first. And whatever the numbers, check coverage
        with your own insurer and discuss the decision with your treating oncologist.
      </p>
    </ArticleLayout>
  );
}
