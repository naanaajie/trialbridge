import type { Metadata } from "next";
import TherapyPage from "@/components/TherapyPage";

export const revalidate = 43200;

export const metadata: Metadata = {
  title: "Proton Therapy Clinical Trials in China (Recruiting Now)",
  description:
    "Explore recruiting proton therapy clinical trials in China for precision cancer treatment. Free eligibility guidance for patients from the US and Europe.",
  alternates: { canonical: "/proton-therapy-china" },
};

export default function Page() {
  return (
    <TherapyPage
      therapy="proton"
      intro={
        <>
          <p>
            Proton therapy delivers radiation with millimeter precision, sparing healthy tissue around the tumor — an
            advantage for cancers near critical structures and for pediatric patients. China's proton capacity is
            expanding quickly across a growing set of centers, frequently at a fraction of US pricing.
          </p>
          <p>
            The studies below are recruiting now, pulled live from the public ClinicalTrials.gov registry. If you're
            weighing proton therapy abroad, we can help you understand which programs match your diagnosis.
          </p>
        </>
      }
    />
  );
}
