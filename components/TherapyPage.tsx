import TrialCard from "@/components/TrialCard";
import LeadForm from "@/components/LeadForm";
import { fetchTrials, Therapy, THERAPY_LABEL } from "@/lib/trials";

export default async function TherapyPage({
  therapy,
  intro,
}: {
  therapy: Therapy;
  intro: React.ReactNode;
}) {
  const { trials, total } = await fetchTrials({ therapy, pageSize: 60 });
  const label = THERAPY_LABEL[therapy];

  return (
    <>
      <section className="hero" style={{ paddingBottom: 32 }}>
        <div className="container">
          <p className="eyebrow">Recruiting in China · live from ClinicalTrials.gov</p>
          <h1>{label} trials in China</h1>
          <div className="prose">{intro}</div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 8 }}>
        <div className="container">
          <h2>
            {total} {label.toLowerCase()} {total === 1 ? "trial" : "trials"} recruiting
          </h2>
          <p className="section-intro">
            Each card links to full eligibility criteria and study locations. Not sure which fit? Ask Nora in the chat,
            or request a free review below.
          </p>
          <div className="cards">
            {trials.length ? (
              trials.map((t) => <TrialCard key={t.nctId} trial={t} />)
            ) : (
              <p>
                Live data is slow to load right now. Please refresh in a moment, or ask Nora in the chat and we'll pull
                the latest for you.
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="section alt" id="contact">
        <div className="container hero-grid">
          <div>
            <h2>Want help narrowing these down?</h2>
            <p className="section-intro">
              Send your diagnosis and treatment history and a coordinator will identify the {label.toLowerCase()}{" "}
              trials you may actually qualify for — free, within 24 hours.
            </p>
          </div>
          <LeadForm source={`${label} page form`} />
        </div>
      </section>
    </>
  );
}
