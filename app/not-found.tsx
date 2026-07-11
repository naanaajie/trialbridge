import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container prose">
        <h1>We couldn't find that page</h1>
        <p>The trial or page may have moved, or the link may be incomplete.</p>
        <p className="btn-row" style={{ marginTop: 20 }}>
          <Link href="/" className="btn">
            Back to home
          </Link>
          <Link href="/car-t-cell-therapy-china" className="btn secondary">
            Browse CAR-T trials
          </Link>
        </p>
      </div>
    </section>
  );
}
