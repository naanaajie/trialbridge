import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical Disclaimer",
  description: "How to read the trial information on TrialBridge, and the limits of our service.",
};

export default function Disclaimer() {
  return (
    <section className="section">
      <div className="container prose">
        <h1>Medical disclaimer</h1>
        <p>
          TrialBridge is an information and patient-navigation service. We are not a hospital, clinic, or medical
          provider, and nothing on this site is medical advice, diagnosis, or treatment.
        </p>
        <h2>About the trial data</h2>
        <p>
          Trial listings are drawn from the public ClinicalTrials.gov registry and refreshed periodically. Registry
          data can be incomplete, out of date, or contain errors. Recruiting status can change without notice. Always
          confirm details directly with the trial site.
        </p>
        <h2>Eligibility and enrollment</h2>
        <p>
          Whether you can join any clinical trial is decided solely by that trial's investigators, based on their
          protocol. We cannot guarantee eligibility, enrollment, treatment, or any medical outcome. Clinical trials are
          research: benefits are not assured and risks are real.
        </p>
        <h2>Talk to your own doctor</h2>
        <p>
          Never delay, stop, or change treatment based on this website. Discuss any decision — including whether to
          pursue a trial abroad — with your treating physician, who knows your full medical picture.
        </p>
        <h2>The AI assistant</h2>
        <p>
          Our chat assistant ("Nora") provides general information only and can make mistakes. It is not a doctor and
          does not provide personalized medical advice. In an emergency, contact your local emergency services
          immediately.
        </p>
      </div>
    </section>
  );
}
