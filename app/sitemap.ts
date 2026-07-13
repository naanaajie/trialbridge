import type { MetadataRoute } from "next";
import { fetchTrials } from "@/lib/trials";

export const revalidate = 43200;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://trialbridge.vercel.app";

  const [cart, proton] = await Promise.all([
    fetchTrials({ therapy: "car-t", pageSize: 60 }),
    fetchTrials({ therapy: "proton", pageSize: 60 }),
  ]);
  const trialUrls = [...cart.trials, ...proton.trials].map((t) => ({
    url: `${base}/trials/${t.nctId}`,
    lastModified: t.lastUpdate ? new Date(t.lastUpdate) : new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const staticUrls = [
    { url: base, priority: 1 },
    { url: `${base}/car-t-cell-therapy-china`, priority: 0.9 },
    { url: `${base}/proton-therapy-china`, priority: 0.9 },
    { url: `${base}/guides`, priority: 0.7 },
    { url: `${base}/what-is-car-t-cell-therapy`, priority: 0.8 },
    { url: `${base}/car-t-therapy-cost-china`, priority: 0.8 },
    { url: `${base}/proton-therapy-cost-china`, priority: 0.8 },
    { url: `${base}/car-t-multiple-myeloma-china`, priority: 0.8 },
    { url: `${base}/car-t-lymphoma-china`, priority: 0.8 },
    { url: `${base}/car-t-leukemia-china`, priority: 0.8 },
    { url: `${base}/is-car-t-therapy-in-china-safe`, priority: 0.8 },
    { url: `${base}/how-to-join-clinical-trial-china`, priority: 0.8 },
    { url: `${base}/car-t-therapy-china-vs-usa`, priority: 0.8 },
    { url: `${base}/disclaimer`, priority: 0.3 },
    { url: `${base}/privacy`, priority: 0.3 },
  ].map((u) => ({ ...u, lastModified: new Date(), changeFrequency: "weekly" as const }));

  return [...staticUrls, ...trialUrls];
}
