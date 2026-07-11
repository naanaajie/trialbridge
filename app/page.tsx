import Link from "next/link";
import TrialCard from "@/components/TrialCard";
import LeadForm from "@/components/LeadForm";
import { fetchTrials } from "@/lib/trials";

export const revalidate = 43200;

export default async function Home() {
  const [cart, proton] = await Promise.all([
    fetchTrials({ therapy: "car-t", pageSize: 6 }),
    fetchTrials({ therapy: "proton", pageSize: 3 }),
  ]);
  const featured = cart.trials.slice(0, 6);

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">For patients in the US & Europe</p>
            <h1>
              China's <em>CAR-T</em> and <em>proton therapy</em> trials, made findable.
            </h1>
            <p className="lede">
              Hundreds of cell-therapy and proton programs recruit in China right now — many free to join, several
              years ahead of what's approved at home. We help you see what fits and connect you to the right center.
            </p>
            <div className="btn-row">
              <Link href="#contact" className="btn">
                Check my eligibility — free
              </Link>
              <Link href="/car-t-cell-therapy-china" className="btn secondary">
                Browse CAR-T trials
              </Link>
            </div>
          </div>

          {/* Signature: a live registry console reading straight off ClinicalTrials.gov */}
          <div className="console" aria-label="Live trial counts">
            <div className="src">▸ source: clinicaltrials.gov · recruiting in China</div>
            <div className="console-row">
              <span className="n">{cart.total}</span>
              <span className="lbl">CAR-T cell therapy trials recruiting</span>
            </div>
            <div className="console-row">
              <span className="n">{proton.total}</span>
              <span className="lbl">Proton therapy trials recruiting</span>
            </div>
            <div className="foot">Counts refresh from the public registry every 12 hours.</div>
          </div>
        </div>
      </section>

      {/* FEATURED TRIALS */}
      <section className="section alt">
        <div className="container">
          <h2>Recruiting now: CAR-T cell therapy</h2>
          <p className="section-intro">
            A live sample of blood-cancer and solid-tumor cell-therapy studies enrolling patients across Chinese
            centers. Open any study for eligibility criteria and location.
          </p>
          <div className="cards">
            {featured.length ? (
              featured.map((t) => <TrialCard key={t.nctId} trial={t} />)
            ) : (
              <p>Live trial data is loading slowly right now. Please refresh, or ask Nora in the chat.</p>
            )}
          </div>
          <div style={{ marginTop: 26 }}>
            <Link href="/car-t-cell-therapy-china" className="btn secondary">
              See all CAR-T trials →
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section" id="how">
        <div className="container">
          <h2>How TrialBridge works</h2>
          <p className="section-intro">
            You stay in control the whole way. Nothing is booked, and no records are shared, without your say-so.
          </p>
          <div className="steps">
            <div className="step">
              <div className="k">STEP ONE</div>
              <h3>Tell us your situation</h3>
              <p>Share the diagnosis, treatments tried, and where you live — in the chat or the form below.</p>
            </div>
            <div className="step">
              <div className="k">STEP TWO</div>
              <h3>We match trials</h3>
              <p>Coordinators cross-check your history against recruiting trials and confirm openings with the hospital.</p>
            </div>
            <div className="step">
              <div className="k">STEP THREE</div>
              <h3>Remote record review</h3>
              <p>The trial team reviews your records remotely and decides whether you may be eligible. No travel yet.</p>
            </div>
            <div className="step">
              <div className="k">STEP FOUR</div>
              <h3>Plan the visit</h3>
              <p>If accepted, you get an invitation letter plus help with visas, translation, and logistics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHINA */}
      <section className="section alt">
        <div className="container">
          <h2>Why patients look to China</h2>
          <div className="cards">
            <div className="step">
              <h3>A deep CAR-T pipeline</h3>
              <p>
                China runs one of the world's largest cell-therapy programs. Some constructs first tested there later
                won FDA approval — a sign of how mature the science has become.
              </p>
            </div>
            <div className="step">
              <h3>Access when options run low</h3>
              <p>
                Trials can be a path for patients who've exhausted approved therapies at home, or who face long waits
                and very high costs.
              </p>
            </div>
            <div className="step">
              <h3>Proton therapy, expanding fast</h3>
              <p>
                A growing number of Chinese centers offer proton therapy, often at a fraction of US pricing, for
                tumors where precision matters most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT / LEAD */}
      <section className="section" id="contact">
        <div className="container hero-grid">
          <div>
            <h2>Get a free eligibility review</h2>
            <p className="section-intro">
              Tell us a little about the diagnosis and we'll come back within 24 hours with the trials worth exploring
              — or an honest "not yet." There's no cost and no obligation, and you can stop at any point.
            </p>
            <p className="form-note">
              Prefer to just ask questions first? Open the chat with Nora in the bottom corner.
            </p>
          </div>
          <LeadForm source="home page form" />
        </div>
      </section>
    </>
  );
}
