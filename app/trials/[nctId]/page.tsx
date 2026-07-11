import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import LeadForm from "@/components/LeadForm";
import { fetchTrialDetail, statusLabel } from "@/lib/trials";

export const revalidate = 43200;

export async function generateMetadata({ params }: { params: { nctId: string } }): Promise<Metadata> {
  const trial = await fetchTrialDetail(params.nctId);
  if (!trial) return { title: "Trial not found" };
  return {
    title: `${trial.title} (${trial.nctId})`,
    description:
      (trial.summary?.slice(0, 155) ??
        `${trial.title} — a clinical trial recruiting in China. See eligibility and locations.`).replace(/\s+/g, " "),
    alternates: { canonical: `/trials/${trial.nctId}` },
  };
}

export default async function TrialDetailPage({ params }: { params: { nctId: string } }) {
  const trial = await fetchTrialDetail(params.nctId);
  if (!trial) notFound();

  const recruiting = trial.status === "RECRUITING";

  return (
    <section className="section">
      <div className="container">
        <p style={{ marginBottom: 18 }}>
          <Link href="/car-t-cell-therapy-china">← Back to trials</Link>
        </p>

        <span className="nct-tag">{trial.nctId}</span>
        <h1 style={{ marginTop: 12, fontSize: "clamp(26px,3.6vw,38px)" }}>{trial.title}</h1>
        <div style={{ margin: "12px 0 28px" }}>
          <span className={`pill ${recruiting ? "recruiting" : ""}`}>{statusLabel(trial.status)}</span>
          {trial.phases.map((p) => (
            <span key={p} className="pill" style={{ marginLeft: 6 }}>
              {p}
            </span>
          ))}
        </div>

        <div className="detail-grid">
          <div>
            {trial.summary && (
              <div className="panel">
                <h2>Study summary</h2>
                <p style={{ color: "var(--ink-soft)" }}>{trial.summary}</p>
              </div>
            )}

            <div className="panel">
              <h2>At a glance</h2>
              <dl className="kv">
                {trial.conditions.length > 0 && (
                  <>
                    <dt>Conditions</dt>
                    <dd>{trial.conditions.join(", ")}</dd>
                  </>
                )}
                {trial.interventions.length > 0 && (
                  <>
                    <dt>Interventions</dt>
                    <dd>{trial.interventions.join(", ")}</dd>
                  </>
                )}
                {trial.sponsor && (
                  <>
                    <dt>Lead sponsor</dt>
                    <dd>{trial.sponsor}</dd>
                  </>
                )}
                {trial.enrollment != null && (
                  <>
                    <dt>Target enrollment</dt>
                    <dd>{trial.enrollment} participants</dd>
                  </>
                )}
                {(trial.minimumAge || trial.maximumAge) && (
                  <>
                    <dt>Age</dt>
                    <dd>
                      {trial.minimumAge ?? "N/A"} – {trial.maximumAge ?? "N/A"}
                    </dd>
                  </>
                )}
                {trial.sex && (
                  <>
                    <dt>Sex</dt>
                    <dd>{trial.sex}</dd>
                  </>
                )}
                {trial.cities.length > 0 && (
                  <>
                    <dt>Locations</dt>
                    <dd>{trial.facilities.length ? trial.facilities.join("; ") : trial.cities.join(", ")}</dd>
                  </>
                )}
                <dt>Registry</dt>
                <dd>
                  <a
                    href={`https://clinicaltrials.gov/study/${trial.nctId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on ClinicalTrials.gov ↗
                  </a>
                </dd>
              </dl>
            </div>

            {trial.eligibility && (
              <div className="panel">
                <h2>Eligibility criteria</h2>
                <div className="pre">{trial.eligibility}</div>
              </div>
            )}
          </div>

          <aside>
            <div className="panel">
              <h2 style={{ fontSize: 19 }}>Could this trial fit you?</h2>
              <p style={{ color: "var(--ink-soft)", fontSize: 14.5 }}>
                Eligibility rules are dense and the final decision rests with the trial site. Send us the diagnosis and
                treatment history and a coordinator will check — free, within 24 hours.
              </p>
              <LeadForm source={`trial ${trial.nctId}`} />
            </div>
          </aside>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalStudy",
            name: trial.title,
            identifier: trial.nctId,
            status: statusLabel(trial.status),
            studySubject: trial.conditions.join(", "),
            sponsor: trial.sponsor,
            url: `https://clinicaltrials.gov/study/${trial.nctId}`,
          }),
        }}
      />
    </section>
  );
}
