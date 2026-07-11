import Link from "next/link";
import { Trial, statusLabel } from "@/lib/trials";

export default function TrialCard({ trial }: { trial: Trial }) {
  const recruiting = trial.status === "RECRUITING";
  return (
    <article className="trial-card">
      <span className="nct-tag">{trial.nctId}</span>
      <h3>
        <Link href={`/trials/${trial.nctId}`}>{trial.title}</Link>
      </h3>
      <div>
        <span className={`pill ${recruiting ? "recruiting" : ""}`}>{statusLabel(trial.status)}</span>
        {trial.phases.map((p) => (
          <span key={p} className="pill" style={{ marginLeft: 6 }}>
            {p}
          </span>
        ))}
      </div>
      <div className="trial-meta">
        {trial.conditions.length > 0 && <span>🎯 {trial.conditions.slice(0, 3).join(", ")}</span>}
        {trial.cities.length > 0 && <span>📍 {trial.cities.slice(0, 3).join(", ")}</span>}
      </div>
    </article>
  );
}
