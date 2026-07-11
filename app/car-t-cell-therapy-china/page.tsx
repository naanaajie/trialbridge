import type { Metadata } from "next";
import TherapyPage from "@/components/TherapyPage";

export const revalidate = 43200;

export const metadata: Metadata = {
  title: "CAR-T Cell Therapy Clinical Trials in China (Recruiting Now)",
  description:
    "Browse actively recruiting CAR-T cell therapy trials in China for multiple myeloma, lymphoma, leukemia and solid tumors. Free eligibility guidance for US and European patients.",
  alternates: { canonical: "/car-t-cell-therapy-china" },
};

export default function Page() {
  return (
    <TherapyPage
      therapy="car-t"
      intro={
        <>
          <p>
            CAR-T (chimeric antigen receptor T-cell) therapy re-engineers a patient's own immune cells to hunt cancer.
            China runs one of the largest CAR-T trial pipelines in the world, spanning multiple myeloma, lymphoma,
            leukemia, and a fast-growing set of solid-tumor programs.
          </p>
          <p>
            For many international patients, a trial is a route to next-generation therapy that isn't yet approved — or
            is far more costly — at home. Enrollment in the investigational therapy is typically free; patients
            generally cover travel, lodging, and some routine care. Below are trials currently recruiting, pulled live
            from the public ClinicalTrials.gov registry.
          </p>
        </>
      }
    />
  );
}
