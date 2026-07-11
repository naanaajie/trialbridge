// Helpers for the ClinicalTrials.gov API v2
// Docs: https://clinicaltrials.gov/data-api/api

const API = "https://clinicaltrials.gov/api/v2/studies";

export type Therapy = "car-t" | "proton";

export interface Trial {
  nctId: string;
  title: string;
  status: string;
  phases: string[];
  conditions: string[];
  interventions: string[];
  cities: string[];
  facilities: string[];
  enrollment?: number;
  lastUpdate?: string;
  summary?: string;
}

export interface TrialDetail extends Trial {
  eligibility?: string;
  minimumAge?: string;
  maximumAge?: string;
  sex?: string;
  startDate?: string;
  studyType?: string;
  sponsor?: string;
  contacts: { name?: string; role?: string }[];
}

const THERAPY_QUERY: Record<Therapy, string> = {
  "car-t": 'AREA[InterventionName]("CAR-T" OR "CAR T" OR "chimeric antigen receptor")',
  proton: 'AREA[InterventionName]("proton therapy" OR "proton beam" OR "proton radiotherapy")',
};

export const THERAPY_LABEL: Record<Therapy, string> = {
  "car-t": "CAR-T cell therapy",
  proton: "Proton therapy",
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function parseStudy(s: any): Trial {
  const p = s?.protocolSection ?? {};
  const locations: any[] = p.contactsLocationsModule?.locations ?? [];
  const chinaLocs = locations.filter((l) => l.country === "China");
  const locs = chinaLocs.length ? chinaLocs : locations;
  return {
    nctId: p.identificationModule?.nctId ?? "",
    title: p.identificationModule?.briefTitle ?? "Untitled study",
    status: p.statusModule?.overallStatus ?? "UNKNOWN",
    phases: p.designModule?.phases ?? [],
    conditions: p.conditionsModule?.conditions ?? [],
    interventions: (p.armsInterventionsModule?.interventions ?? []).map((i: any) => i.name).filter(Boolean),
    cities: Array.from(new Set(locs.map((l) => l.city).filter(Boolean))) as string[],
    facilities: Array.from(new Set(locs.map((l) => l.facility).filter(Boolean))).slice(0, 6) as string[],
    enrollment: p.designModule?.enrollmentInfo?.count,
    lastUpdate: p.statusModule?.lastUpdatePostDateStruct?.date,
    summary: p.descriptionModule?.briefSummary,
  };
}

export async function fetchTrials(opts: {
  therapy: Therapy;
  recruitingOnly?: boolean;
  pageSize?: number;
}): Promise<{ trials: Trial[]; total: number }> {
  const params = new URLSearchParams({
    "query.locn": "China",
    "query.term": THERAPY_QUERY[opts.therapy],
    pageSize: String(opts.pageSize ?? 60),
    countTotal: "true",
    sort: "LastUpdatePostDate:desc",
  });
  if (opts.recruitingOnly !== false) {
    params.set("filter.overallStatus", "RECRUITING");
  }
  const res = await fetch(`${API}?${params.toString()}`, {
    // Cache on the server for 12h — trial data changes slowly.
    next: { revalidate: 43200 },
    headers: { Accept: "application/json" },
  });
  if (!res.ok) return { trials: [], total: 0 };
  const data = await res.json();
  const trials: Trial[] = (data.studies ?? []).map(parseStudy).filter((t: Trial) => t.nctId);
  return { trials, total: data.totalCount ?? trials.length };
}

export async function fetchTrialDetail(nctId: string): Promise<TrialDetail | null> {
  const id = nctId.toUpperCase().replace(/[^A-Z0-9]/g, "");
  if (!/^NCT\d{8}$/.test(id)) return null;
  const res = await fetch(`${API}/${id}`, {
    next: { revalidate: 43200 },
    headers: { Accept: "application/json" },
  });
  if (!res.ok) return null;
  const data = await res.json();
  const base = parseStudy(data);
  const p = data?.protocolSection ?? {};
  return {
    ...base,
    eligibility: p.eligibilityModule?.eligibilityCriteria,
    minimumAge: p.eligibilityModule?.minimumAge,
    maximumAge: p.eligibilityModule?.maximumAge,
    sex: p.eligibilityModule?.sex,
    startDate: p.statusModule?.startDateStruct?.date,
    studyType: p.designModule?.studyType,
    sponsor: p.sponsorCollaboratorsModule?.leadSponsor?.name,
    contacts: (p.contactsLocationsModule?.centralContacts ?? []).map((c: any) => ({
      name: c.name,
      role: c.role,
    })),
  };
}

export function statusLabel(status: string): string {
  return status
    .toLowerCase()
    .replace(/_/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}
