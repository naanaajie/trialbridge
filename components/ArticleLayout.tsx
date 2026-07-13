import Link from "next/link";
import LeadForm from "@/components/LeadForm";

export interface Faq {
  q: string;
  a: string;
}

export interface RelatedLink {
  href: string;
  kicker: string;
  title: string;
}

export default function ArticleLayout({
  eyebrow,
  title,
  lede,
  children,
  faqs = [],
  related = [],
  leadSource,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  children: React.ReactNode;
  faqs?: Faq[];
  related?: RelatedLink[];
  leadSource: string;
}) {
  return (
    <>
      <section className="article-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/guides">Guides</Link>
            <span>/</span>
            {title}
          </nav>
          <p className="eyebrow">{eyebrow}</p>
          <h1 style={{ maxWidth: "20ch" }}>{title}</h1>
          <p className="article-lede">{lede}</p>
        </div>
      </section>

      <section className="article-body">
        <div className="container">
          <div className="prose">{children}</div>
        </div>
      </section>

      {faqs.length > 0 && (
        <section className="section" style={{ paddingTop: 24 }}>
          <div className="container prose">
            <h2>Frequently asked questions</h2>
            <div className="faq">
              {faqs.map((f, i) => (
                <details key={i}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section" style={{ paddingTop: 8 }}>
        <div className="container">
          <div className="article-cta">
            <div>
              <h2>Not sure where you stand?</h2>
              <p>
                Send your diagnosis and what you&apos;ve tried so far. A coordinator will tell you — free, within 24
                hours — whether a trial in China could realistically fit, or give you an honest &quot;not yet.&quot;
              </p>
            </div>
            <LeadForm source={leadSource} />
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section" style={{ paddingTop: 8 }}>
          <div className="container">
            <h2 style={{ fontSize: 22, marginBottom: 16 }}>Keep reading</h2>
            <div className="related">
              {related.map((r) => (
                <Link key={r.href} href={r.href}>
                  <span className="r-k">{r.kicker}</span>
                  <span className="r-t">{r.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />
      )}
    </>
  );
}
