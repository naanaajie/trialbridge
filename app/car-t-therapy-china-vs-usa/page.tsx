import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "CAR-T Therapy: China vs the USA — Cost, Access & Options",
  description:
    "How CAR-T cell therapy in China compares to the US on cost, trial availability, wait times, and what's approved — plus the trade-offs of traveling abroad for treatment.",
  alternates: { canonical: "/car-t-therapy-china-vs-usa" },
};

export default function Page() {
  return (
    <ArticleLayout
      eyebrow="Compare"
      title="CAR-T therapy: China vs the USA"
      lede="A balanced comparison on cost, trial access, wait times, and the real trade-offs of going abroad — so you can weigh it for yourself."
      leadSource="china-vs-usa guide"
      faqs={[
        {
          q: "Is CAR-T cheaper in China than the US?",
          a: "Generally yes, often substantially — especially through a clinical trial, where the investigational therapy may be provided at no charge. Commercial CAR-T in the US carries a list price in the hundreds of thousands of dollars. But you must factor in travel and a multi-week stay for treatment in China.",
        },
        {
          q: "Are there more CAR-T trials in China?",
          a: "China runs the largest number of CAR-T trials of any country, which can mean more options and, in some cases, shorter recruitment timelines. Whether any specific trial fits you is a separate question decided by its investigators.",
        },
        {
          q: "Is the quality comparable?",
          a: "At its best, China's CAR-T science meets international standards — a China-developed therapy earned US FDA approval. But quality varies by center and trial, so the specific study matters more than the country label.",
        },
        {
          q: "What's the catch with going abroad?",
          a: "The trade-offs are real: travel and a multi-week stay, language and logistical barriers, the experimental nature of trials, and coordinating follow-up care back home. These don't rule it out, but they belong in your decision.",
        },
      ]}
      related={[
        { href: "/car-t-therapy-cost-china", kicker: "Cost", title: "What CAR-T costs in China" },
        { href: "/is-car-t-therapy-in-china-safe", kicker: "Safety", title: "Is CAR-T in China safe?" },
        { href: "/how-to-join-clinical-trial-china", kicker: "Process", title: "How to join a trial in China" },
        { href: "/car-t-cell-therapy-china", kicker: "Trials", title: "CAR-T trials in China" },
      ]}
    >
      <p>
        If you&apos;re weighing CAR-T at home in the US against a trial in China, the right frame isn&apos;t
        &quot;which is better&quot; — it&apos;s &quot;which fits your situation.&quot; Here&apos;s a balanced look at
        where each has the edge.
      </p>

      <h2>Cost</h2>
      <p>
        This is often the deciding factor. In the US, commercial CAR-T carries a list price in the hundreds of
        thousands of dollars for the therapy alone. In a <strong>clinical trial</strong> — in China or elsewhere — the
        investigational therapy is frequently provided at no charge, shifting your main costs to travel and living
        expenses. So the comparison isn&apos;t just China vs US; it&apos;s often <strong>trial vs commercial</strong>.
        For many families, a trial is what makes CAR-T financially reachable at all.
      </p>

      <h2>Trial availability and wait times</h2>
      <p>
        China runs the largest number of CAR-T trials of any country. In practice that can mean a wider range of
        studies — including newer designs and approaches for patients who&apos;ve already tried standard CAR-T — and,
        in some cases, faster recruitment. In the US, established approved products and strong centers exist, but
        popular programs can have waitlists and strict insurance hurdles.
      </p>

      <div className="callout">
        <p>
          <strong>Depth of pipeline matters most when options are running low.</strong> If you&apos;ve exhausted
          approved therapies at home, a larger pool of trials simply gives you more chances to find one that fits —
          though it never guarantees a match.
        </p>
      </div>

      <h2>Quality and credibility</h2>
      <p>
        China&apos;s CAR-T science, at its best, meets international standards — the clearest proof being a
        China-developed CAR-T that earned US FDA approval for multiple myeloma. That said, quality is not uniform.
        The specific center and trial matter far more than the country. Judge the individual study, not the flag.
      </p>

      <h2>The honest trade-offs of going abroad</h2>
      <p>Traveling for treatment adds real burdens that staying home doesn&apos;t:</p>
      <ul>
        <li><strong>Travel and a multi-week stay</strong> far from your support network.</li>
        <li><strong>Language and logistics</strong>, even with translation help.</li>
        <li><strong>The experimental nature</strong> of trials — benefits aren&apos;t guaranteed.</li>
        <li><strong>Follow-up coordination</strong> across borders once you&apos;re home.</li>
      </ul>
      <p>
        For some patients these are dealbreakers; for others, well worth it. The point is to go in with eyes open.
      </p>

      <h2>So which is right for you?</h2>
      <p>
        There&apos;s no universal answer. If you have good approved options and coverage at home, staying may be
        simplest. If you&apos;ve run low on options, face very high costs, or need a therapy not available where you
        live, a trial in China is worth investigating seriously. The only way to know is to have your records reviewed
        against what&apos;s actually recruiting.
      </p>
      <p>
        Start with a free review below, and — either way — make the final call with your treating oncologist.
      </p>
    </ArticleLayout>
  );
}
