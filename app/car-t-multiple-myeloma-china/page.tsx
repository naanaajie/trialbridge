import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "CAR-T for Multiple Myeloma in China: Trials & What to Know",
  description:
    "CAR-T cell therapy for relapsed or refractory multiple myeloma in China — how BCMA-targeted CAR-T works, why China's pipeline matters, and how to find a trial you may qualify for.",
  alternates: { canonical: "/car-t-multiple-myeloma-china" },
};

export default function Page() {
  return (
    <ArticleLayout
      eyebrow="Multiple myeloma"
      title="CAR-T for multiple myeloma in China"
      lede="Why China's CAR-T pipeline is closely watched in myeloma, how BCMA-targeted therapy works, and how to find a trial that might fit you."
      leadSource="myeloma car-t guide"
      faqs={[
        {
          q: "Who is CAR-T for in multiple myeloma?",
          a: "CAR-T is generally considered for relapsed or refractory multiple myeloma — that is, myeloma that has come back or stopped responding after prior lines of treatment. Whether it fits depends on your specific history, and eligibility is decided by each trial's investigators.",
        },
        {
          q: "What does BCMA mean?",
          a: "BCMA (B-cell maturation antigen) is a protein found on myeloma cells. Many myeloma CAR-T therapies are engineered to target BCMA so the modified immune cells can recognize and attack the cancer.",
        },
        {
          q: "Is a Chinese-developed myeloma CAR-T actually FDA approved?",
          a: "Yes — ciltacabtagene autoleucel, first tested in China, later earned US FDA approval for multiple myeloma. It's a notable example of the maturity of China's myeloma CAR-T science, though it doesn't guarantee any particular trial or outcome.",
        },
        {
          q: "Can CAR-T cure multiple myeloma?",
          a: "No treatment is described as a guaranteed cure for myeloma. CAR-T can produce deep and durable responses in some patients, but myeloma can relapse, and outcomes vary. Discuss realistic expectations with your treating hematologist.",
        },
      ]}
      related={[
        { href: "/car-t-cell-therapy-china", kicker: "Trials", title: "All CAR-T trials in China" },
        { href: "/car-t-lymphoma-china", kicker: "Lymphoma", title: "CAR-T for lymphoma in China" },
        { href: "/car-t-leukemia-china", kicker: "Leukemia", title: "CAR-T for leukemia in China" },
        { href: "/what-is-car-t-cell-therapy", kicker: "Basics", title: "What is CAR-T cell therapy?" },
      ]}
    >
      <p>
        Multiple myeloma is one of the areas where CAR-T cell therapy has made the biggest mark — and where
        China&apos;s research is watched most closely. If you or a family member has relapsed or refractory myeloma,
        here&apos;s what&apos;s worth understanding.
      </p>

      <h2>How CAR-T targets myeloma</h2>
      <p>
        Most myeloma CAR-T therapies are built to recognize a protein called <strong>BCMA</strong> (B-cell maturation
        antigen), which sits on the surface of myeloma cells. The patient&apos;s own T-cells are engineered to lock
        onto BCMA, then infused back to seek out and destroy the cancer. Newer designs targeting additional proteins,
        including dual-target approaches, are an active area of research in China.
      </p>

      <h2>Why China&apos;s myeloma pipeline matters</h2>
      <p>
        China runs the largest number of CAR-T trials of any country, and myeloma is a major focus. The clearest proof
        of how far the science has come:
      </p>
      <div className="callout">
        <p>
          <strong>A China-origin myeloma CAR-T reached the FDA.</strong> Ciltacabtagene autoleucel was first tested in
          China (in the CARTIFAN-1 study) and later approved by the US FDA for relapsed or refractory multiple myeloma.
          It shows that myeloma CAR-T developed in China can meet the bar of Western regulators — though it doesn&apos;t
          guarantee any particular trial will accept you or work for you.
        </p>
      </div>

      <h2>Who might consider a trial</h2>
      <p>
        CAR-T trials for myeloma generally recruit patients whose disease has <strong>relapsed or become
        refractory</strong> after earlier lines of therapy — for example, after proteasome inhibitors and
        immunomodulatory drugs. For patients who have run low on approved options at home, or who face very high costs,
        a trial can be a meaningful path to next-generation therapy.
      </p>
      <p>
        Eligibility is specific and decided by each trial&apos;s investigators. Criteria often consider your prior
        treatments, organ function, and disease status — which is why a records review is the real starting point,
        not a general checklist.
      </p>

      <h2>What to keep in mind</h2>
      <p>
        CAR-T is intensive and carries real risks, including cytokine release syndrome and neurological effects, which
        is why it&apos;s given at specialized centers. Responses vary and myeloma can return. A trial abroad also means
        travel and a multi-week stay. None of this makes it the wrong choice — but it should be a considered one, made
        with your treating hematologist.
      </p>

      <h2>Finding a myeloma trial in China</h2>
      <p>
        You can browse <a href="/car-t-cell-therapy-china">CAR-T trials recruiting in China</a> — many list myeloma
        among their conditions — or send your details below for a free eligibility review focused on your history.
      </p>
    </ArticleLayout>
  );
}
