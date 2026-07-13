import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "CAR-T for Leukemia in China: Trials & What to Know",
  description:
    "CAR-T cell therapy for relapsed or refractory leukemia in China — how it works in ALL and other leukemias, who it's for, and how to find a recruiting clinical trial.",
  alternates: { canonical: "/car-t-leukemia-china" },
};

export default function Page() {
  return (
    <ArticleLayout
      eyebrow="Leukemia"
      title="CAR-T for leukemia in China"
      lede="How CAR-T is used in relapsed or refractory leukemia, especially B-cell ALL, and how to find a trial in China that may fit."
      leadSource="leukemia car-t guide"
      faqs={[
        {
          q: "Which leukemias does CAR-T treat?",
          a: "CAR-T has the strongest record in B-cell acute lymphoblastic leukemia (B-ALL), including in children and young adults. Research continues in other leukemias. Whether it fits your specific type and situation is determined by the trial's investigators.",
        },
        {
          q: "Is CAR-T used in children with leukemia?",
          a: "CD19-directed CAR-T has been an important development for young patients with relapsed or refractory B-ALL. Pediatric eligibility and care are handled by specialized teams; a trial's investigators decide who qualifies.",
        },
        {
          q: "When is CAR-T considered for leukemia?",
          a: "Typically when leukemia has relapsed or is refractory to prior treatment. The right timing depends on the leukemia type and the patient's history, and should be discussed with the treating hematologist.",
        },
        {
          q: "Can CAR-T cure leukemia?",
          a: "CAR-T can produce remissions in leukemia, sometimes durable ones, but it is not described as a guaranteed cure. Relapse is possible and outcomes vary. Treat any promise of a certain cure with caution.",
        },
      ]}
      related={[
        { href: "/car-t-cell-therapy-china", kicker: "Trials", title: "All CAR-T trials in China" },
        { href: "/car-t-multiple-myeloma-china", kicker: "Myeloma", title: "CAR-T for multiple myeloma" },
        { href: "/car-t-lymphoma-china", kicker: "Lymphoma", title: "CAR-T for lymphoma in China" },
        { href: "/is-car-t-therapy-in-china-safe", kicker: "Safety", title: "Is CAR-T in China safe?" },
      ]}
    >
      <p>
        Leukemia, particularly B-cell acute lymphoblastic leukemia, was among the first cancers where CAR-T showed
        dramatic results. For patients whose leukemia has relapsed or stopped responding, trials in China are worth
        understanding.
      </p>

      <h2>How CAR-T works in leukemia</h2>
      <p>
        In B-cell leukemias, CAR-T therapies are commonly engineered to target <strong>CD19</strong>, a protein on the
        leukemia cells. The patient&apos;s T-cells are modified to recognize CD19 and infused back to attack the
        cancer. For leukemias that relapse after CD19-directed therapy, researchers in China are also studying
        alternative and dual targets.
      </p>

      <h2>Where the evidence is strongest</h2>
      <p>
        The clearest track record is in <strong>B-cell acute lymphoblastic leukemia (B-ALL)</strong>, including in
        children and young adults — a group for whom relapsed disease has historically been very hard to treat.
        Research into CAR-T for other leukemias continues.
      </p>

      <div className="callout">
        <p>
          <strong>Why look at China.</strong> China runs the largest number of CAR-T trials worldwide, which can mean
          more studies and more potential options — including newer approaches for patients who have relapsed after an
          earlier CAR-T. A deeper pipeline improves the odds of finding a fit, but never guarantees one.
        </p>
      </div>

      <h2>Who might consider a trial</h2>
      <p>
        Leukemia CAR-T trials generally recruit patients with <strong>relapsed or refractory</strong> disease.
        Eligibility depends on the leukemia type, prior treatment, age, and overall health, and is decided by each
        trial&apos;s investigators. Because the criteria are specific, a records review is the realistic starting point.
      </p>

      <h2>What to weigh carefully</h2>
      <p>
        CAR-T is intensive and carries real risks — cytokine release syndrome and neurological effects among them —
        which is why it&apos;s given at specialized centers with close monitoring. Responses vary, relapse is possible,
        and a trial abroad involves travel and a multi-week stay. For pediatric patients especially, these decisions
        belong with the treating team.
      </p>

      <h2>Finding a leukemia trial in China</h2>
      <p>
        Browse <a href="/car-t-cell-therapy-china">recruiting CAR-T trials in China</a> — many include leukemia among
        their conditions — or send your details below for a free eligibility review focused on your situation.
      </p>
    </ArticleLayout>
  );
}
