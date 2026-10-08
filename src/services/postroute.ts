/**
 * Mock service layer for PostRoute AI.
 *
 * Every screen talks to the application only through these functions.
 * When the FastAPI / ML / PostgreSQL backend is ready, replace the bodies with
 * real fetch calls — signatures and return types stay identical.
 */
import {
  activityLog,
  analytics,
  currentOperator,
  dashboardKpis,
  mappingChanges,
  notifications,
  parcels,
  postOffices,
  predictions,
  reviewQueue,
  reviewSummary,
  systemHealth,
} from "@/data/mock";
import type {
  ActivityEvent,
  AddressInput,
  AnalyticsData,
  AppNotification,
  DashboardKpi,
  MappingChange,
  Operator,
  Parcel,
  ParcelStatus,
  PostOffice,
  PredictionResult,
  ReviewItem,
  ReviewQueueSummary,
  SystemHealthItem,
  SystemConfig,
} from "@/types";

const LATENCY = 420;

function delay<T>(value: T, ms = LATENCY): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

function titleCase(input: string) {
  return input
    .split(" ")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

const EXPANSIONS: Record<string, string> = {
  rd: "Road",
  "rd.": "Road",
  hse: "House",
  no: "No",
  nr: "near",
  opp: "opposite",
  oppst: "opposite",
  soc: "Society",
  apt: "Apartment",
  blk: "Block",
  ngr: "Nagar",
  mh: "Maharashtra",
  pn: "Pune",
  bk: "Budruk",
  flr: "Floor",
  wkd: "Wakad",
  blwadi: "Balewadi",
  pcmc: "Pimpri Chinchwad",
};

export function normalizeAddress(raw: string) {
  const cleaned = raw
    .replace(/\s+/g, " ")
    .replace(/\s*,\s*/g, ", ")
    .trim();
  const normalized = titleCase(
    cleaned
      .toLowerCase()
      .split(" ")
      .map((token) => {
        const bare = token.replace(/[.,]/g, "");
        return EXPANSIONS[bare] ? EXPANSIONS[bare] + (token.endsWith(",") ? "," : "") : token;
      })
      .join(" "),
  );
  return normalized;
}

/** Runs an address through the prediction pipeline. */
export async function predictAddress(input: AddressInput): Promise<PredictionResult> {
  const isMock = import.meta.env.VITE_USE_MOCK !== "false";
  if (!isMock) {
    const res = await fetch(`${import.meta.env["VITE_API_URL"]}/api/predict`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    });
    if (!res.ok) throw new Error("Failed to predict address");
    return res.json();
  }

  const raw = input.rawAddress.trim();
  if (raw.length < 6) {
    await delay(null, 250);
    throw new Error("Address is too short to analyze. Enter at least a locality and city.");
  }

  const lower = raw.toLowerCase();
  const pinToken = lower.match(/\b\d{6}\b/)?.[0] ?? input.pincode?.trim();

  const scored = postOffices
    .map((office) => {
      let score = 0.04;
      const localityKey = office.name.replace(/ (S\.O|H\.O|B\.O)$/, "").toLowerCase();
      const at = lower.indexOf(localityKey);
      if (at >= 0) {
        // A locality mentioned right after "near"/"opp"/"nr" is a landmark, not the
        // delivery locality, so it carries much less weight.
        const prefix = lower.slice(Math.max(0, at - 14), at);
        const isLandmark = /\b(near|nr|opp|opposite|behind|beside)\b[\s.,-]*$/.test(prefix);
        score += isLandmark ? 0.3 : 0.9;
        // Earlier mentions are more likely to be the delivery locality.
        score += Math.max(0, 0.08 - at / 400);
      } else if (lower.includes(localityKey.slice(0, 5))) {
        score += 0.25;
      }
      if (lower.includes(office.district.toLowerCase())) score += 0.2;
      if (input.district && input.district === office.district) score += 0.14;
      if (input.state && input.state === office.state) score += 0.08;
      if (pinToken === office.pincode) score += 0.55;
      if (office.status === "historical") score -= 0.25;
      return { office, score };
    })
    .sort((a, b) => b.score - a.score);

  // Sharpen the distribution so a clear locality match dominates its neighbours.
  const weight = (value: number) => Math.pow(Math.max(value, 0.01), 3);
  const total = scored.slice(0, 3).reduce((sum, item) => sum + weight(item.score), 0);
  const top = scored[0]!;
  const noisePenalty = raw.split(/[ ,]+/).filter(Boolean).length < 4 ? 0.25 : 0;
  const rawConfidence = weight(top.score) / total - noisePenalty;
  const confidence = Math.min(0.985, Math.max(0.31, rawConfidence));

  const candidates = scored.slice(0, 3).map((item, index) => ({
    rank: index + 1,
    postOffice: item.office.name,
    pincode: item.office.pincode,
    district: item.office.district,
    state: item.office.state,
    confidence:
      index === 0
        ? confidence
        : Math.round((1 - confidence) * (index === 1 ? 0.7 : 0.3) * 1000) / 1000,
  }));

  const localityGuess = top.office.name.replace(/ (S\.O|H\.O|B\.O)$/, "");
  const normalized = normalizeAddress(raw);
  const components: PredictionResult["normalization"]["components"] = [
    ...(raw.match(/\b(flat|hse|house|plot|shop|room|rm)\s*\.?\s*(no\.?)?\s*\d+/i)
      ? [
          {
            label: "Flat/Unit",
            value: titleCase(
              raw.match(/\b(flat|hse|house|plot|shop|room|rm)\s*\.?\s*(no\.?)?\s*\d+/i)![0],
            ),
            type: "unit" as const,
          },
        ]
      : []),
    { label: "Locality", value: localityGuess, type: "locality" as const },
    ...(lower.includes("road") || lower.includes(" rd")
      ? [{ label: "Road", value: `${localityGuess} Road`, type: "road" as const }]
      : []),
    { label: "City", value: top.office.district, type: "city" as const },
    { label: "District", value: top.office.district, type: "district" as const },
    { label: "State", value: top.office.state, type: "state" as const },
    ...(pinToken ? [{ label: "PIN", value: pinToken, type: "pincode" as const }] : []),
  ];

  const result: PredictionResult = {
    id: `PR-${Math.floor(24900 + Math.random() * 90)}`,
    createdAt: new Date().toISOString(),
    rawAddress: raw,
    normalization: { raw, normalized, components },
    pincode: top.office.pincode,
    postOffice: top.office.name,
    district: top.office.district,
    state: top.office.state,
    confidence,
    status: confidence >= (await getConfig()).autoRouteThreshold ? "auto_approved" : "needs_review",
    candidates,
    explanation: [
      { label: "Locality detected", detail: localityGuess, matched: true },
      {
        label: "District detected",
        detail: top.office.district,
        matched: Boolean(top.office.district),
      },
      {
        label: "PIN token matched",
        detail: pinToken ?? "No PIN token in input",
        matched: Boolean(pinToken),
      },
      {
        label: "Address normalized",
        detail: `${components.length} components resolved`,
        matched: true,
      },
      {
        label: "Mapping validated",
        detail: `Mapping ${top.office.mappingVersion} ${top.office.status === "active" ? "active" : top.office.status}`,
        matched: top.office.mappingVersion === "V3",
      },
    ],
    operator: currentOperator.name,
  };

  return delay(result, 900);
}

export async function getPredictions(): Promise<PredictionResult[]> {
  return delay(predictions);
}

export async function getReviewQueue(): Promise<ReviewItem[]> {
  const isMock = import.meta.env.VITE_USE_MOCK !== "false";
  if (!isMock) {
    const res = await fetch(`${import.meta.env["VITE_API_URL"]}/api/review-queue`);
    if (!res.ok) throw new Error("Failed to fetch review queue");
    return res.json();
  }
  return delay(reviewQueue);
}

export async function getReviewItem(id: string): Promise<ReviewItem> {
  const item = reviewQueue.find((r) => r.id === id);
  if (!item) throw new Error(`Review item ${id} was not found.`);
  return delay(item);
}

export async function submitReviewDecision(payload: {
  id: string;
  decision: "approve" | "correct" | "reject" | "escalate";
  correctedPincode?: string;
  correctedPostOffice?: string;
  reason?: string;
  notes?: string;
}): Promise<{ ok: true; id: string }> {
  return delay({ ok: true as const, id: payload.id }, 600);
}

export async function getParcels(): Promise<Parcel[]> {
  return delay(parcels);
}

export async function getParcel(id: string): Promise<Parcel> {
  const parcel = parcels.find((p) => p.id === id);
  if (!parcel) throw new Error(`Parcel ${id} was not found.`);
  return delay(parcel);
}

export async function updateParcelStatus(id: string, status: ParcelStatus) {
  return delay({ ok: true as const, id, status }, 500);
}

export async function getPostOffices(): Promise<PostOffice[]> {
  return delay(postOffices);
}

export async function getPostOffice(id: string): Promise<PostOffice> {
  const office = postOffices.find((o) => o.id === id);
  if (!office) throw new Error(`Post office ${id} was not found.`);
  return delay(office);
}

export async function getMappingHistory(): Promise<MappingChange[]> {
  return delay(mappingChanges);
}

export async function getAnalytics(): Promise<AnalyticsData> {
  return delay(analytics);
}

export async function getActivityLog(): Promise<ActivityEvent[]> {
  return delay(activityLog);
}

export async function getDashboardKpis(): Promise<DashboardKpi[]> {
  return delay(dashboardKpis);
}

export async function getReviewSummary(): Promise<ReviewQueueSummary[]> {
  return delay(reviewSummary);
}

export async function getSystemHealth(): Promise<SystemHealthItem[]> {
  return delay(systemHealth);
}

export async function getNotifications(): Promise<AppNotification[]> {
  return delay(notifications, 150);
}

export async function getOperator(): Promise<Operator> {
  return delay(currentOperator, 100);
}

export async function getConfig(): Promise<SystemConfig> {
  const isMock = import.meta.env.VITE_USE_MOCK !== "false";
  if (isMock) {
    return delay({ autoRouteThreshold: 0.85, reviewFloor: 0.55 }, 100);
  }
  const res = await fetch(`${import.meta.env["VITE_API_URL"]}/api/config`);
  if (!res.ok) throw new Error("Failed to fetch config");
  return res.json();
}
