import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "CAR-T for Lymphoma in China: Trials & What Patients Should Know",
  description:
    "CAR-T cell therapy for relapsed or refractory lymphoma in China — how CD19-targeted CAR-T works, which lymphomas it may help, and how to find a recruiting trial.",
  alternates: { canonical: "/car-t-lymphoma-china" },
};

export default function Page() {
  return (
    <ArticleLayout
      eyebrow="Lymphoma"
      title="CAR-T for lymphoma in China"
      lede="How CAR-T is used in relapsed or refractory lymphoma, why China's trial pipeline is so deep, and how to find a study you may qualify for."
      leadSource="lymphoma car-t guide"
      faqs={[
        {
          q: "Which lymphomas can CAR-T treat?",
          a: "CAR-T has been studied most in aggressive B-cell lymphomas, such as diffuse large B-cell lymphoma (DLBCL), and in some other subtypes like mantle cell lymphoma. Whether it fits your specific lymphoma and situation is decided by the trial's investigators.",
        },
        {
          q: "What is CD19?",
          a: "CD19 is a protein on the surface of many B-cell lymphoma cells. A large share of lymphoma CAR-T therapies are engineered to target CD19, directing the modified immune cells to the cancer.",
        },
        {
          q: "When is CAR-T considered for lymphoma?",
          a: "It's generally considered when lymphoma has relapsed or not responded to prior treatment. The exact point at which it's appropriate depends on the subtype and your history — a question for your treating hematologist and the trial team.",
        },
        {
          q: "How well does CAR-T work in lymphoma?",
          a: "Some patients with hard-to-treat lymphoma achieve lasting remission with CAR-T, while others relapse or don't respond. Outcomes vary by subtype and individual. Be cautious of any source promising guaranteed results.",
        },
      ]}
      related={[
        { href: "/car-t-cell-therapy-china", kicker: "Trials", title: "All CAR-T trials in China" },
        { href: "/car-t-multiple-myeloma-china", kicker: "Myeloma", title: "CAR-T for multiple myeloma" },
        { href: "/car-t-leukemia-china", kicker: "Leukemia", title: "CAR-T for leukemia in China" },
        { href: "/what-is-car-t-cell-therapy", kicker: "Basics", title: "What is CAR-T cell therapy?" },
      ]}
    >
      <p>
        Lymphoma is where CAR-T cell therapy first proved itself, and it remains one of the most active areas of
        research. For patients with lymphoma that has come back or stopped responding, CAR-T trials in China are worth
        understanding.
      </p>

      <h2>How CAR-T targets lymphoma</h2>
      <p>
        Many lymphoma CAR-T therapies are engineered to recognize <strong>CD19</strong>, a protein found on the surface
        of B-cell lymphoma cells. The patient&apos;s T-cells are modified to lock onto CD19, then infused back to find
        and destroy the cancer. Research in China also explores other targets and dual-target designs, particularly
        for lymphomas that relapse after CD19-directed treatment.
      </p>

      <h2>Which lymphomas are studied</h2>
      <p>
        The strongest track record is in aggressive B-cell lymphomas — especially <strong>diffuse large B-cell
        lymphoma (DLBCL)</strong> — with active research in other subtypes such as mantle cell and follicular
        lymphoma. Whether a given trial fits your subtype and history is something its investigators determine.
      </p>

      <div className="callout">
        <p>
          <strong>Why China&apos;s pipeline is relevant.</strong> China runs more CAR-T trials than any other country,
          which means a wide range of lymphoma studies — including newer approaches for patients who&apos;ve already
          tried standard CAR-T. More trials means more potential paths, though it never guarantees a fit.
        </p>
      </div>

      <h2>Who might consider a trial</h2>
      <p>
        Lymphoma CAR-T trials generally recruit patients whose disease is <strong>relapsed or refractory</strong> after
        prior therapy. For those who have exhausted approved options at home, or face long waits or high costs, a trial
        can open access to therapies not yet available where they live.
      </p>
      <p>
        Eligibility depends on your subtype, prior treatments, and overall health, and is decided by the trial team.
        That&apos;s why the practical first step is a review of your records rather than a generic yes-or-no.
      </p>

      <h2>What to weigh</h2>
      <p>
        CAR-T is demanding and carries real risks, including cytokine release syndrome and neurological effects, which
        is why it&apos;s delivered at specialized centers with close monitoring. Responses vary, some lymphomas
        relapse, and a trial abroad means travel and a multi-week stay. Decide with your treating oncologist, who
        knows your full picture.
      </p>

      <h2>Finding a lymphoma trial in China</h2>
      <p>
        Browse <a href="/car-t-cell-therapy-china">recruiting CAR-T trials in China</a> — many list lymphoma among
        their conditions — or send your details below for a free eligibility review based on your specific diagnosis.
      </p>
    </ArticleLayout>
  );
}
