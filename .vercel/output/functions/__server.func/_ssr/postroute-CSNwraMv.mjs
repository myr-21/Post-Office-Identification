import {
  A as reviewSummary,
  D as postOffices,
  E as parcels,
  M as systemHealth,
  O as predictions,
  S as dashboardKpis,
  T as notifications,
  k as reviewQueue,
  v as activityLog,
  w as mappingChanges,
  x as currentOperator,
  y as analytics,
} from "./primitives-Df9_3jyn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/postroute-CSNwraMv.js
/**
 * Mock service layer for PostRoute AI.
 *
 * Every screen talks to the application only through these functions.
 * When the FastAPI / ML / PostgreSQL backend is ready, replace the bodies with
 * real fetch calls — signatures and return types stay identical.
 */
var LATENCY = 420;
function delay(value, ms = LATENCY) {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}
function titleCase(input) {
  return input
    .split(" ")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
var EXPANSIONS = {
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
function normalizeAddress(raw) {
  return titleCase(
    raw
      .replace(/\s+/g, " ")
      .replace(/\s*,\s*/g, ", ")
      .trim()
      .toLowerCase()
      .split(" ")
      .map((token) => {
        const bare = token.replace(/[.,]/g, "");
        return EXPANSIONS[bare] ? EXPANSIONS[bare] + (token.endsWith(",") ? "," : "") : token;
      })
      .join(" "),
  );
}
/** Runs an address through the prediction pipeline. */
async function predictAddress(input) {
  if (
    !(
      {
        BASE_URL: "/",
        DEV: false,
        MODE: "production",
        PROD: true,
        SSR: true,
        TSS_DEV_SERVER: "false",
        TSS_DEV_SSR_STYLES_BASEPATH: "/",
        TSS_DEV_SSR_STYLES_ENABLED: "true",
        TSS_DISABLE_CSRF_MIDDLEWARE_WARNING: "false",
        TSS_INLINE_CSS_ENABLED: "false",
        TSS_ROUTER_BASEPATH: "",
        TSS_SERVER_FN_BASE: "/_serverFn/",
        VITE_API_URL: "http://localhost:8000",
        VITE_USE_MOCK: "false",
      }["VITE_USE_MOCK"] !== "false"
    )
  ) {
    const res = await fetch(
      `${
        {
          BASE_URL: "/",
          DEV: false,
          MODE: "production",
          PROD: true,
          SSR: true,
          TSS_DEV_SERVER: "false",
          TSS_DEV_SSR_STYLES_BASEPATH: "/",
          TSS_DEV_SSR_STYLES_ENABLED: "true",
          TSS_DISABLE_CSRF_MIDDLEWARE_WARNING: "false",
          TSS_INLINE_CSS_ENABLED: "false",
          TSS_ROUTER_BASEPATH: "",
          TSS_SERVER_FN_BASE: "/_serverFn/",
          VITE_API_URL: "http://localhost:8000",
          VITE_USE_MOCK: "false",
        }["VITE_API_URL"]
      }/api/predict`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input),
      },
    );
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
        const prefix = lower.slice(Math.max(0, at - 14), at);
        const isLandmark = /\b(near|nr|opp|opposite|behind|beside)\b[\s.,-]*$/.test(prefix);
        score += isLandmark ? 0.3 : 0.9;
        score += Math.max(0, 0.08 - at / 400);
      } else if (lower.includes(localityKey.slice(0, 5))) score += 0.25;
      if (lower.includes(office.district.toLowerCase())) score += 0.2;
      if (input.district && input.district === office.district) score += 0.14;
      if (input.state && input.state === office.state) score += 0.08;
      if (pinToken === office.pincode) score += 0.55;
      if (office.status === "historical") score -= 0.25;
      return {
        office,
        score,
      };
    })
    .sort((a, b) => b.score - a.score);
  const weight = (value) => Math.pow(Math.max(value, 0.01), 3);
  const total = scored.slice(0, 3).reduce((sum, item) => sum + weight(item.score), 0);
  const top = scored[0];
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
        : Math.round((1 - confidence) * (index === 1 ? 0.7 : 0.3) * 1e3) / 1e3,
  }));
  const localityGuess = top.office.name.replace(/ (S\.O|H\.O|B\.O)$/, "");
  const normalized = normalizeAddress(raw);
  const components = [
    ...(raw.match(/\b(flat|hse|house|plot|shop|room|rm)\s*\.?\s*(no\.?)?\s*\d+/i)
      ? [
          {
            label: "Flat/Unit",
            value: titleCase(
              raw.match(/\b(flat|hse|house|plot|shop|room|rm)\s*\.?\s*(no\.?)?\s*\d+/i)[0],
            ),
            type: "unit",
          },
        ]
      : []),
    {
      label: "Locality",
      value: localityGuess,
      type: "locality",
    },
    ...(lower.includes("road") || lower.includes(" rd")
      ? [
          {
            label: "Road",
            value: `${localityGuess} Road`,
            type: "road",
          },
        ]
      : []),
    {
      label: "City",
      value: top.office.district,
      type: "city",
    },
    {
      label: "District",
      value: top.office.district,
      type: "district",
    },
    {
      label: "State",
      value: top.office.state,
      type: "state",
    },
    ...(pinToken
      ? [
          {
            label: "PIN",
            value: pinToken,
            type: "pincode",
          },
        ]
      : []),
  ];
  return delay(
    {
      id: `PR-${Math.floor(24900 + Math.random() * 90)}`,
      createdAt: /* @__PURE__ */ new Date().toISOString(),
      rawAddress: raw,
      normalization: {
        raw,
        normalized,
        components,
      },
      pincode: top.office.pincode,
      postOffice: top.office.name,
      district: top.office.district,
      state: top.office.state,
      confidence,
      status:
        confidence >= (await getConfig()).autoRouteThreshold ? "auto_approved" : "needs_review",
      candidates,
      explanation: [
        {
          label: "Locality detected",
          detail: localityGuess,
          matched: true,
        },
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
    },
    900,
  );
}
async function getPredictions() {
  return delay(predictions);
}
async function getReviewQueue() {
  if (
    !(
      {
        BASE_URL: "/",
        DEV: false,
        MODE: "production",
        PROD: true,
        SSR: true,
        TSS_DEV_SERVER: "false",
        TSS_DEV_SSR_STYLES_BASEPATH: "/",
        TSS_DEV_SSR_STYLES_ENABLED: "true",
        TSS_DISABLE_CSRF_MIDDLEWARE_WARNING: "false",
        TSS_INLINE_CSS_ENABLED: "false",
        TSS_ROUTER_BASEPATH: "",
        TSS_SERVER_FN_BASE: "/_serverFn/",
        VITE_API_URL: "http://localhost:8000",
        VITE_USE_MOCK: "false",
      }["VITE_USE_MOCK"] !== "false"
    )
  ) {
    const res = await fetch(
      `${
        {
          BASE_URL: "/",
          DEV: false,
          MODE: "production",
          PROD: true,
          SSR: true,
          TSS_DEV_SERVER: "false",
          TSS_DEV_SSR_STYLES_BASEPATH: "/",
          TSS_DEV_SSR_STYLES_ENABLED: "true",
          TSS_DISABLE_CSRF_MIDDLEWARE_WARNING: "false",
          TSS_INLINE_CSS_ENABLED: "false",
          TSS_ROUTER_BASEPATH: "",
          TSS_SERVER_FN_BASE: "/_serverFn/",
          VITE_API_URL: "http://localhost:8000",
          VITE_USE_MOCK: "false",
        }["VITE_API_URL"]
      }/api/review-queue`,
    );
    if (!res.ok) throw new Error("Failed to fetch review queue");
    return res.json();
  }
  return delay(reviewQueue);
}
async function getReviewItem(id) {
  const item = reviewQueue.find((r) => r.id === id);
  if (!item) throw new Error(`Review item ${id} was not found.`);
  return delay(item);
}
async function submitReviewDecision(payload) {
  return delay(
    {
      ok: true,
      id: payload.id,
    },
    600,
  );
}
async function getParcels() {
  return delay(parcels);
}
async function getParcel(id) {
  const parcel = parcels.find((p) => p.id === id);
  if (!parcel) throw new Error(`Parcel ${id} was not found.`);
  return delay(parcel);
}
async function updateParcelStatus(id, status) {
  return delay(
    {
      ok: true,
      id,
      status,
    },
    500,
  );
}
async function getPostOffices() {
  return delay(postOffices);
}
async function getPostOffice(id) {
  const office = postOffices.find((o) => o.id === id);
  if (!office) throw new Error(`Post office ${id} was not found.`);
  return delay(office);
}
async function getMappingHistory() {
  return delay(mappingChanges);
}
async function getAnalytics() {
  return delay(analytics);
}
async function getActivityLog() {
  return delay(activityLog);
}
async function getDashboardKpis() {
  return delay(dashboardKpis);
}
async function getReviewSummary() {
  return delay(reviewSummary);
}
async function getSystemHealth() {
  return delay(systemHealth);
}
async function getNotifications() {
  return delay(notifications, 150);
}
async function getConfig() {
  if (
    {
      BASE_URL: "/",
      DEV: false,
      MODE: "production",
      PROD: true,
      SSR: true,
      TSS_DEV_SERVER: "false",
      TSS_DEV_SSR_STYLES_BASEPATH: "/",
      TSS_DEV_SSR_STYLES_ENABLED: "true",
      TSS_DISABLE_CSRF_MIDDLEWARE_WARNING: "false",
      TSS_INLINE_CSS_ENABLED: "false",
      TSS_ROUTER_BASEPATH: "",
      TSS_SERVER_FN_BASE: "/_serverFn/",
      VITE_API_URL: "http://localhost:8000",
      VITE_USE_MOCK: "false",
    }["VITE_USE_MOCK"] !== "false"
  )
    return delay(
      {
        autoRouteThreshold: 0.85,
        reviewFloor: 0.55,
      },
      100,
    );
  const res = await fetch(
    `${
      {
        BASE_URL: "/",
        DEV: false,
        MODE: "production",
        PROD: true,
        SSR: true,
        TSS_DEV_SERVER: "false",
        TSS_DEV_SSR_STYLES_BASEPATH: "/",
        TSS_DEV_SSR_STYLES_ENABLED: "true",
        TSS_DISABLE_CSRF_MIDDLEWARE_WARNING: "false",
        TSS_INLINE_CSS_ENABLED: "false",
        TSS_ROUTER_BASEPATH: "",
        TSS_SERVER_FN_BASE: "/_serverFn/",
        VITE_API_URL: "http://localhost:8000",
        VITE_USE_MOCK: "false",
      }["VITE_API_URL"]
    }/api/config`,
  );
  if (!res.ok) throw new Error("Failed to fetch config");
  return res.json();
}
//#endregion
export {
  submitReviewDecision as _,
  getMappingHistory as a,
  getParcels as c,
  getPredictions as d,
  getReviewItem as f,
  predictAddress as g,
  getSystemHealth as h,
  getDashboardKpis as i,
  getPostOffice as l,
  getReviewSummary as m,
  getAnalytics as n,
  getNotifications as o,
  getReviewQueue as p,
  getConfig as r,
  getParcel as s,
  getActivityLog as t,
  getPostOffices as u,
  updateParcelStatus as v,
};
