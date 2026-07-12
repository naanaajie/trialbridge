import type { Metadata } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import Link from "next/link";
import Chat from "@/components/Chat";
import "./globals.css";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const plexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-plex-mono", display: "swap" });

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://trialbridge.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "CancerTrialMatch — CAR-T & Proton Therapy Clinical Trials in China",
    template: "%s | CancerTrialMatch",
  },
  description:
    "Explore actively recruiting CAR-T cell therapy and proton therapy clinical trials in China. Free eligibility guidance for patients and families in the US and Europe.",
  keywords: [
    "CAR-T therapy China",
    "proton therapy China",
    "clinical trials China",
    "CAR-T clinical trial",
    "cancer clinical trials abroad",
    "multiple myeloma CAR-T trial",
  ],
  openGraph: {
    title: "CAR-T & Proton Therapy Clinical Trials in China",
    description:
      "Browse recruiting trials pulled live from ClinicalTrials.gov. Free eligibility guidance for international patients.",
    type: "website",
    url: SITE,
    siteName: "CancerTrialMatch",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${plexMono.variable}`}>
      <body>
        <header className="site-header">
          <div className="container">
            <Link href="/" className="brand">
              CancerTrialMatch <span className="cn">临床桥</span>
            </Link>
            <nav className="nav">
              <Link href="/car-t-cell-therapy-china">CAR-T</Link>
              <Link href="/proton-therapy-china">Proton therapy</Link>
              <Link href="/#how">How it works</Link>
              <Link href="/#contact">Talk to us</Link>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="site-footer">
          <div className="container">
            <div className="links">
              <Link href="/car-t-cell-therapy-china">CAR-T trials</Link>
              <Link href="/proton-therapy-china">Proton therapy trials</Link>
              <Link href="/disclaimer">Medical disclaimer</Link>
              <Link href="/privacy">Privacy</Link>
            </div>
            <p className="disclaimer">
              CancerTrialMatch is an information and patient-navigation service. We are not a hospital and do not
              provide medical care or advice. Trial data is sourced from the public ClinicalTrials.gov registry
              and may not be complete or current. Participation in any clinical trial is decided solely by the
              trial site. Always consult your treating physician before making treatment decisions.
              © {new Date().getFullYear()} CancerTrialMatch.
            </p>
          </div>
        </footer>

        <Chat />
      </body>
    </html>
  );
}
