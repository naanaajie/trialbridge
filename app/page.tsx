import Link from "next/link";
import TrialCard from "@/components/TrialCard";
import LeadForm from "@/components/LeadForm";
import { fetchTrials } from "@/lib/trials";

export const revalidate = 43200;

// TODO: 拿到真实患者的书面授权后，可替换/补充为自有证言。
const newsCoverage = [
  {
    outlet: "BBC World Service",
    summary:
      "An Australian myeloma patient's cancer became undetectable weeks after CAR-T treatment in Shanghai; she is now in remission back home.",
    href: "https://www.youtube.com/watch?v=wZGqpzYVkXs",
  },
  {
    outlet: "Business Standard",
    summary:
      "A New Zealand man told to consider palliative care travelled to China for a CAR-T trial; the total cost, flights included, was around a tenth of prices elsewhere.",
    href: "https://www.business-standard.com/amp/world-news/china-lures-foreign-patients-with-cutting-edge-low-cost-medical-care-126061100121_1.html",
  },
  {
    outlet: "Inside Precision Medicine",
    summary:
      "In 2025 China approved the world's first CAR-T therapy for a solid tumour, a milestone the field had chased for years.",
    href: "https://www.insideprecisionmedicine.com/topics/oncology/solid-tumor-car-t-therapy-approved-in-china-a-world-first/",
  },
];

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
              When treatment runs out at home, <em>it may not be over</em>.
            </h1>
            <p className="lede">
              A growing number of patients from the US and Europe are reaching remission through CAR-T trials in
              China — often for a fraction of what it costs at home, and years before these therapies are approved
              where they live. We help you find out whether a trial could fit you.
            </p>
            <div className="btn-row">
              <Link href="#contact" className="btn">
                See if a trial could fit — free
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

      {/* IN THE NEWS */}
      <section className="section">
        <div className="container">
          <h2>You may have seen the coverage</h2>
          <p className="section-intro">
            Independent reporting on why patients are travelling to China — and what they're finding. These are
            journalists' accounts, linked in full, not testimonials from us.
          </p>
          <div className="cards">
            {newsCoverage.map((item) => (
              <div className="step" key={item.outlet}>
                <span className="news-outlet">{item.outlet}</span>
                <p>{item.summary}</p>
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  Read the report ↗
                </a>
              </div>
            ))}
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
          <h2>How CancerTrialMatch works</h2>
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
          {/* 数字会变动，上线前请核实并保持更新（来源：ACS / 近期报道）。 */}
          <div className="cards">
            <div className="step">
              <h3>A fraction of the cost</h3>
              <p>
                In the US, a single CAR-T infusion can run $300,000–$475,000. In China it is often around $150,000 —
                and new therapies are pushing prices lower still.
              </p>
            </div>
            <div className="step">
              <h3>A field that's proven itself</h3>
              <p>
                China approved the world's first solid-tumour CAR-T in 2025, and therapies first developed there have
                gone on to win FDA approval — a sign of how far the science has come.
              </p>
            </div>
            <div className="step">
              <h3>When you've been told to wait</h3>
              <p>
                For patients who've exhausted approved options, or face long waits at home, a trial can open a door
                in weeks rather than months.
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
              Tell us a little about the diagnosis and we'll come back within 24 hours with the trials worth
              exploring — or an honest "not yet." No cost, no obligation, and you can stop at any point.
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
