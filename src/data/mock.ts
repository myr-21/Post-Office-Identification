/**
 * Demonstration data only. Replaced by real API responses later.
 */
import type {
  ActivityEvent,
  AnalyticsData,
  AppNotification,
  DashboardKpi,
  MappingChange,
  Operator,
  Parcel,
  PostOffice,
  PredictionResult,
  ReviewItem,
  ReviewQueueSummary,
  SystemHealthItem,
} from "@/types";

export const DEMO_NOTICE = "Demonstration data — not live postal records.";

export const currentOperator: Operator = {
  name: "Mayur Patil",
  role: "Postal Operations Operator",
  postOffice: "Pune Central Operations",
  employeeId: "EMP-PUN-10482",
  lastActive: "2026-09-16T18:05:00Z",
  status: "online",
};

export const postOffices: PostOffice[] = [
  {
    id: "PO-001",
    name: "Baner S.O",
    pincode: "411045",
    district: "Pune",
    state: "Maharashtra",
    region: "Pune Region",
    division: "Pune City West",
    latitude: 18.5642,
    longitude: 73.7769,
    status: "active",
    mappingVersion: "V3",
  },
  {
    id: "PO-002",
    name: "Aundh S.O",
    pincode: "411007",
    district: "Pune",
    state: "Maharashtra",
    region: "Pune Region",
    division: "Pune City West",
    latitude: 18.5593,
    longitude: 73.8078,
    status: "active",
    mappingVersion: "V3",
  },
  {
    id: "PO-003",
    name: "Balewadi S.O",
    pincode: "411045",
    district: "Pune",
    state: "Maharashtra",
    region: "Pune Region",
    division: "Pune City West",
    latitude: 18.5762,
    longitude: 73.7684,
    status: "updated",
    mappingVersion: "V3",
  },
  {
    id: "PO-004",
    name: "Shivajinagar H.O",
    pincode: "411005",
    district: "Pune",
    state: "Maharashtra",
    region: "Pune Region",
    division: "Pune City Central",
    latitude: 18.5308,
    longitude: 73.8475,
    status: "active",
    mappingVersion: "V3",
  },
  {
    id: "PO-005",
    name: "Kothrud S.O",
    pincode: "411038",
    district: "Pune",
    state: "Maharashtra",
    region: "Pune Region",
    division: "Pune City West",
    latitude: 18.5074,
    longitude: 73.8077,
    status: "active",
    mappingVersion: "V3",
  },
  {
    id: "PO-006",
    name: "Hadapsar S.O",
    pincode: "411028",
    district: "Pune",
    state: "Maharashtra",
    region: "Pune Region",
    division: "Pune City East",
    latitude: 18.5089,
    longitude: 73.926,
    status: "active",
    mappingVersion: "V3",
  },
  {
    id: "PO-007",
    name: "Viman Nagar S.O",
    pincode: "411014",
    district: "Pune",
    state: "Maharashtra",
    region: "Pune Region",
    division: "Pune City East",
    latitude: 18.5679,
    longitude: 73.9143,
    status: "updated",
    mappingVersion: "V3",
  },
  {
    id: "PO-008",
    name: "Pimpri S.O",
    pincode: "411017",
    district: "Pune",
    state: "Maharashtra",
    region: "Pune Region",
    division: "Pimpri Chinchwad",
    latitude: 18.6279,
    longitude: 73.8009,
    status: "active",
    mappingVersion: "V3",
  },
  {
    id: "PO-009",
    name: "Chinchwad S.O",
    pincode: "411033",
    district: "Pune",
    state: "Maharashtra",
    region: "Pune Region",
    division: "Pimpri Chinchwad",
    latitude: 18.6419,
    longitude: 73.7929,
    status: "active",
    mappingVersion: "V2",
  },
  {
    id: "PO-010",
    name: "Wakad S.O",
    pincode: "411057",
    district: "Pune",
    state: "Maharashtra",
    region: "Pune Region",
    division: "Pimpri Chinchwad",
    latitude: 18.5984,
    longitude: 73.7627,
    status: "active",
    mappingVersion: "V3",
  },
  {
    id: "PO-011",
    name: "Katraj S.O",
    pincode: "411046",
    district: "Pune",
    state: "Maharashtra",
    region: "Pune Region",
    division: "Pune City South",
    latitude: 18.4529,
    longitude: 73.8654,
    status: "active",
    mappingVersion: "V3",
  },
  {
    id: "PO-012",
    name: "Lonavala S.O",
    pincode: "410401",
    district: "Pune",
    state: "Maharashtra",
    region: "Pune Region",
    division: "Pune Mofussil",
    latitude: 18.7546,
    longitude: 73.4062,
    status: "historical",
    mappingVersion: "V1",
  },
  {
    id: "PO-013",
    name: "Nashik Road S.O",
    pincode: "422101",
    district: "Nashik",
    state: "Maharashtra",
    region: "Nashik Region",
    division: "Nashik City",
    latitude: 19.9517,
    longitude: 73.8402,
    status: "active",
    mappingVersion: "V3",
  },
  {
    id: "PO-014",
    name: "Koramangala S.O",
    pincode: "560034",
    district: "Bengaluru Urban",
    state: "Karnataka",
    region: "Bengaluru Region",
    division: "Bengaluru South",
    latitude: 12.9352,
    longitude: 77.6245,
    status: "active",
    mappingVersion: "V3",
  },
  {
    id: "PO-015",
    name: "Navrangpura S.O",
    pincode: "380009",
    district: "Ahmedabad",
    state: "Gujarat",
    region: "Ahmedabad Region",
    division: "Ahmedabad City",
    latitude: 23.0367,
    longitude: 72.5615,
    status: "active",
    mappingVersion: "V2",
  },
];

const candidate = (
  rank: number,
  postOffice: string,
  pincode: string,
  confidence: number,
  district = "Pune",
  state = "Maharashtra",
) => ({ rank, postOffice, pincode, confidence, district, state });

export const predictions: PredictionResult[] = [
  {
    id: "PR-24881",
    createdAt: "2026-09-16T17:58:00Z",
    rawAddress: "flat no 302 baner rd pune near balewadi",
    normalization: {
      raw: "flat no 302 baner rd pune near balewadi",
      normalized: "Flat 302, Baner Road, Balewadi, Pune",
      components: [
        { label: "Flat/Unit", value: "Flat 302", type: "unit" },
        { label: "Road", value: "Baner Road", type: "road" },
        { label: "Locality", value: "Balewadi", type: "locality" },
        { label: "City", value: "Pune", type: "city" },
        { label: "District", value: "Pune", type: "district" },
        { label: "State", value: "Maharashtra", type: "state" },
      ],
    },
    pincode: "411045",
    postOffice: "Baner S.O",
    district: "Pune",
    state: "Maharashtra",
    confidence: 0.942,
    status: "auto_approved",
    candidates: [
      candidate(1, "Baner S.O", "411045", 0.942),
      candidate(2, "Aundh S.O", "411007", 0.038),
      candidate(3, "Balewadi S.O", "411045", 0.016),
    ],
    explanation: [
      { label: "Locality detected", detail: "Balewadi", matched: true },
      { label: "District detected", detail: "Pune", matched: true },
      { label: "PIN token matched", detail: "No PIN token in input", matched: false },
      { label: "Address normalized", detail: "6 components resolved", matched: true },
      { label: "Mapping validated", detail: "Mapping V3 active", matched: true },
    ],
    operator: "Mayur Patil",
  },
  ...Array.from({ length: 19 }).map((_, index): PredictionResult => {
    const office = postOffices[(index + 1) % postOffices.length];
    const confidence = [0.97, 0.91, 0.88, 0.74, 0.62, 0.95, 0.83, 0.68][index % 8];
    const status: PredictionResult["status"] =
      confidence >= 0.9
        ? "auto_approved"
        : confidence >= 0.7
          ? index % 3 === 0
            ? "manually_verified"
            : "needs_review"
          : index % 4 === 0
            ? "corrected"
            : "needs_review";
    const raw = [
      "hse no 12 opp sbi bank kothrud pune",
      "b wing 704 magarpatta hadapsar",
      "shop 4 nr airport rd viman ngr pune",
      "plot 21 sector 7 pimpri chinchwd",
      "702 lake town, wakad road, pune 411057",
      "near katraj dairy, ambegaon bk, pune",
      "23/4 fc road shivaji ngr, pune mh",
      "flat 9 sai residency, aundh gaon",
    ][index % 8];
    return {
      id: `PR-${24880 - index}`,
      createdAt: new Date(Date.parse("2026-09-16T17:50:00Z") - index * 7 * 60000).toISOString(),
      rawAddress: raw,
      normalization: {
        raw,
        normalized: `${raw.replace(/\b\w/g, (c) => c.toUpperCase())}`,
        components: [
          { label: "Locality", value: office.name.replace(" S.O", "").replace(" H.O", ""), type: "locality" },
          { label: "City", value: office.district, type: "city" },
          { label: "District", value: office.district, type: "district" },
          { label: "State", value: office.state, type: "state" },
        ],
      },
      pincode: office.pincode,
      postOffice: office.name,
      district: office.district,
      state: office.state,
      confidence,
      status,
      candidates: [
        candidate(1, office.name, office.pincode, confidence, office.district, office.state),
        candidate(
          2,
          postOffices[(index + 2) % postOffices.length].name,
          postOffices[(index + 2) % postOffices.length].pincode,
          Math.round((1 - confidence) * 0.7 * 1000) / 1000,
        ),
        candidate(
          3,
          postOffices[(index + 3) % postOffices.length].name,
          postOffices[(index + 3) % postOffices.length].pincode,
          Math.round((1 - confidence) * 0.3 * 1000) / 1000,
        ),
      ],
      explanation: [
        { label: "Locality detected", detail: office.name, matched: true },
        { label: "District detected", detail: office.district, matched: true },
        { label: "PIN token matched", detail: confidence > 0.9 ? office.pincode : "Not present", matched: confidence > 0.9 },
        { label: "Address normalized", detail: "Tokens standardized", matched: true },
        { label: "Mapping validated", detail: `Mapping ${office.mappingVersion}`, matched: office.mappingVersion === "V3" },
      ],
      operator: index % 2 === 0 ? "Mayur Patil" : "S. Kulkarni",
    };
  }),
];

const reviewReasons = [
  "low_confidence",
  "ambiguous_locality",
  "missing_information",
  "mapping_conflict",
  "multiple_candidates",
] as const;

export const reviewQueue: ReviewItem[] = Array.from({ length: 10 }).map((_, i) => {
  const office = postOffices[i % postOffices.length];
  const reason = reviewReasons[i % reviewReasons.length];
  const confidence = [0.58, 0.64, 0.71, 0.49, 0.77, 0.66, 0.52, 0.81, 0.6, 0.45][i];
  const raw = [
    "rm 5 sant ngr rd, nr baner, pune",
    "c-12, oppst pmc school, blwadi",
    "12 mg road pune",
    "plot 7, sector 12, pcmc",
    "flat 404, green county, wkd",
    "near dairy, katraj",
    "hse 88, nashik rd",
    "3rd flr, koramangla 5th blk",
    "navrangpura, a'bad",
    "kothrud dpt, pn",
  ][i];
  return {
    id: `RV-${5120 + i}`,
    parcelId: `PA-2026-00${4810 + i}`,
    priority: confidence < 0.55 ? "high" : confidence < 0.7 ? "medium" : "low",
    rawAddress: raw,
    normalizedAddress: raw.replace(/\b\w/g, (c) => c.toUpperCase()),
    pincode: office.pincode,
    postOffice: office.name,
    district: office.district,
    state: office.state,
    confidence,
    reason,
    createdAt: new Date(Date.parse("2026-09-16T16:30:00Z") - i * 23 * 60000).toISOString(),
    status: i === 3 ? "escalated" : i === 6 ? "in_review" : "pending",
    operator: i % 2 === 0 ? "Mayur Patil" : "S. Kulkarni",
    candidates: [
      candidate(1, office.name, office.pincode, confidence, office.district, office.state),
      candidate(2, postOffices[(i + 1) % postOffices.length].name, postOffices[(i + 1) % postOffices.length].pincode, Math.round((1 - confidence) * 0.6 * 1000) / 1000),
      candidate(3, postOffices[(i + 2) % postOffices.length].name, postOffices[(i + 2) % postOffices.length].pincode, Math.round((1 - confidence) * 0.4 * 1000) / 1000),
    ],
    mapping: {
      current: `${office.pincode} → ${office.name} (V3)`,
      historical: `${office.pincode} → ${postOffices[(i + 1) % postOffices.length].name} (V1)`,
      conflict:
        reason === "mapping_conflict"
          ? `PIN ${office.pincode} is served by two offices after the V3 merge.`
          : null,
    },
  };
});

const parcelStages: Array<{ status: Parcel["status"]; label: string }> = [
  { status: "received", label: "Parcel received" },
  { status: "address_analysis", label: "Address analyzed" },
  { status: "address_verified", label: "Operator verified" },
  { status: "sorting", label: "Sorting" },
  { status: "dispatched", label: "Dispatched" },
  { status: "delivered", label: "Delivered" },
];

export const parcels: Parcel[] = Array.from({ length: 15 }).map((_, i) => {
  const office = postOffices[i % postOffices.length];
  const stageIndex = i % parcelStages.length;
  const confidence = [0.96, 0.88, 0.93, 0.67, 0.91, 0.72, 0.98, 0.84][i % 8];
  const raw = [
    "flat 302, baner rd, near balewadi, pune",
    "b-14, magarpatta city, hadapsar, pune",
    "shop 4, airport road, viman nagar",
    "plot 21, sector 7, pimpri",
    "702 lake town, wakad road, pune",
    "nr katraj dairy, ambegaon bk",
    "23/4 fc road, shivajinagar",
    "flat 9, sai residency, aundh",
  ][i % 8];
  return {
    id: `PA-2026-00${4821 - i}`,
    rawAddress: raw,
    normalizedAddress: raw.replace(/\b\w/g, (c) => c.toUpperCase()),
    pincode: office.pincode,
    postOffice: office.name,
    confidence,
    status: parcelStages[stageIndex].status,
    updatedAt: new Date(Date.parse("2026-09-16T17:20:00Z") - i * 41 * 60000).toISOString(),
    operator: i % 2 === 0 ? "Mayur Patil" : "S. Kulkarni",
    candidates: [
      candidate(1, office.name, office.pincode, confidence, office.district, office.state),
      candidate(2, postOffices[(i + 1) % postOffices.length].name, postOffices[(i + 1) % postOffices.length].pincode, Math.round((1 - confidence) * 0.65 * 1000) / 1000),
      candidate(3, postOffices[(i + 2) % postOffices.length].name, postOffices[(i + 2) % postOffices.length].pincode, Math.round((1 - confidence) * 0.35 * 1000) / 1000),
    ],
    timeline: parcelStages.map((stage, si) => ({
      status: stage.status,
      label: stage.label,
      timestamp:
        si <= stageIndex
          ? new Date(Date.parse("2026-09-16T09:00:00Z") + si * 95 * 60000 - i * 41 * 60000).toISOString()
          : null,
      note:
        si === 1
          ? "Prediction generated by model v3.2"
          : si === 2
            ? "Verified against mapping V3"
            : undefined,
    })),
  };
});

export const mappingChanges: MappingChange[] = [
  {
    id: "MC-001",
    pincode: "411045",
    postOffice: "Baner S.O",
    region: "Pune Region",
    version: "V3",
    effectiveFrom: "2026-08-01",
    status: "active",
    changeType: "merged",
    previousMapping: "411045 → Balewadi S.O",
    newMapping: "411045 → Baner S.O",
    reason: "Balewadi delivery beat merged into Baner S.O after volume review.",
    affectedPostOffices: ["Baner S.O", "Balewadi S.O"],
    affectedPincodes: ["411045"],
  },
  {
    id: "MC-002",
    pincode: "411014",
    postOffice: "Viman Nagar S.O",
    region: "Pune Region",
    version: "V3",
    effectiveFrom: "2026-07-18",
    status: "active",
    changeType: "updated",
    previousMapping: "411014 → Yerawada S.O",
    newMapping: "411014 → Viman Nagar S.O",
    reason: "Delivery jurisdiction realigned for airport corridor.",
    affectedPostOffices: ["Viman Nagar S.O", "Yerawada S.O"],
    affectedPincodes: ["411014", "411006"],
  },
  {
    id: "MC-003",
    pincode: "411057",
    postOffice: "Wakad S.O",
    region: "Pune Region",
    version: "V3",
    effectiveFrom: "2026-06-02",
    status: "active",
    changeType: "new",
    previousMapping: "—",
    newMapping: "411057 → Wakad S.O",
    reason: "New sub office opened for Wakad growth corridor.",
    affectedPostOffices: ["Wakad S.O"],
    affectedPincodes: ["411057"],
  },
  {
    id: "MC-004",
    pincode: "410401",
    postOffice: "Lonavala S.O",
    region: "Pune Region",
    version: "V1",
    effectiveFrom: "2024-04-10",
    status: "superseded",
    changeType: "deprecated",
    previousMapping: "410401 → Lonavala S.O",
    newMapping: "410401 → Lonavala H.O",
    reason: "Office reclassified during regional update.",
    affectedPostOffices: ["Lonavala S.O"],
    affectedPincodes: ["410401"],
  },
  {
    id: "MC-005",
    pincode: "411033",
    postOffice: "Chinchwad S.O",
    region: "Pune Region",
    version: "V2",
    effectiveFrom: "2025-05-21",
    status: "superseded",
    changeType: "updated",
    previousMapping: "411033 → Chinchwad East S.O",
    newMapping: "411033 → Chinchwad S.O",
    reason: "Beat consolidation in Pimpri Chinchwad division.",
    affectedPostOffices: ["Chinchwad S.O", "Chinchwad East S.O"],
    affectedPincodes: ["411033", "411019"],
  },
  {
    id: "MC-006",
    pincode: "422101",
    postOffice: "Nashik Road S.O",
    region: "Nashik Region",
    version: "V2",
    effectiveFrom: "2025-09-09",
    status: "superseded",
    changeType: "updated",
    previousMapping: "422101 → Nashik Road B.O",
    newMapping: "422101 → Nashik Road S.O",
    reason: "Branch office upgraded to sub office.",
    affectedPostOffices: ["Nashik Road S.O"],
    affectedPincodes: ["422101"],
  },
  {
    id: "MC-007",
    pincode: "560034",
    postOffice: "Koramangala S.O",
    region: "Bengaluru Region",
    version: "V3",
    effectiveFrom: "2026-03-14",
    status: "active",
    changeType: "updated",
    previousMapping: "560034 → Koramangala VI Block S.O",
    newMapping: "560034 → Koramangala S.O",
    reason: "Naming standardization across Bengaluru South.",
    affectedPostOffices: ["Koramangala S.O"],
    affectedPincodes: ["560034"],
  },
  {
    id: "MC-008",
    pincode: "380009",
    postOffice: "Navrangpura S.O",
    region: "Ahmedabad Region",
    version: "V2",
    effectiveFrom: "2025-11-30",
    status: "superseded",
    changeType: "merged",
    previousMapping: "380009 → Ellisbridge S.O",
    newMapping: "380009 → Navrangpura S.O",
    reason: "Two adjacent beats merged to reduce misrouting.",
    affectedPostOffices: ["Navrangpura S.O", "Ellisbridge S.O"],
    affectedPincodes: ["380009", "380006"],
  },
  {
    id: "MC-009",
    pincode: "411038",
    postOffice: "Kothrud S.O",
    region: "Pune Region",
    version: "V1",
    effectiveFrom: "2024-04-10",
    status: "superseded",
    changeType: "new",
    previousMapping: "—",
    newMapping: "411038 → Kothrud S.O",
    reason: "Original mapping baseline.",
    affectedPostOffices: ["Kothrud S.O"],
    affectedPincodes: ["411038"],
  },
  {
    id: "MC-010",
    pincode: "411028",
    postOffice: "Hadapsar S.O",
    region: "Pune Region",
    version: "V3",
    effectiveFrom: "2026-08-22",
    status: "active",
    changeType: "updated",
    previousMapping: "411028 → Hadapsar B.O",
    newMapping: "411028 → Hadapsar S.O",
    reason: "Capacity expansion for eastern Pune.",
    affectedPostOffices: ["Hadapsar S.O"],
    affectedPincodes: ["411028", "411013"],
  },
];

export const analytics: AnalyticsData = {
  metrics: [
    { key: "top1", label: "Top-1 Accuracy", value: "94.8%", delta: "+1.2 pts", hint: "Verified predictions" },
    { key: "top3", label: "Top-3 Accuracy", value: "98.1%", delta: "+0.6 pts" },
    { key: "top5", label: "Top-5 Accuracy", value: "99.2%", delta: "+0.3 pts" },
    { key: "precision", label: "Precision", value: "0.941" },
    { key: "recall", label: "Recall", value: "0.928" },
    { key: "f1", label: "F1 Score", value: "0.934" },
    { key: "auto", label: "Auto-resolution Rate", value: "87.4%", hint: "No operator input needed" },
    { key: "manual", label: "Manual Review Rate", value: "12.6%", hint: "Routed to review queue" },
  ],
  accuracyTrend: [
    { label: "Mar", value: 89.4 },
    { label: "Apr", value: 90.2 },
    { label: "May", value: 91.1 },
    { label: "Jun", value: 92.0 },
    { label: "Jul", value: 93.3 },
    { label: "Aug", value: 94.1 },
    { label: "Sep", value: 94.8 },
  ],
  accuracyByCondition: [
    { label: "Clean", value: 98.2 },
    { label: "Spelling Errors", value: 93.4 },
    { label: "Abbreviations", value: 94.7 },
    { label: "Missing Fields", value: 86.9 },
    { label: "Reordered", value: 92.1 },
    { label: "Combined Noise", value: 81.5 },
  ],
  confidenceDistribution: [
    { label: "<50%", value: 42 },
    { label: "50-59%", value: 61 },
    { label: "60-69%", value: 94 },
    { label: "70-79%", value: 148 },
    { label: "80-89%", value: 286 },
    { label: "90-100%", value: 617 },
  ],
  reviewReasons: [
    { label: "Low Confidence", value: 61 },
    { label: "Ambiguous Locality", value: 38 },
    { label: "Mapping Conflict", value: 24 },
    { label: "Missing Information", value: 21 },
    { label: "Multiple Candidates", value: 13 },
  ],
  modelComparison: [
    { model: "TF-IDF + Logistic Regression", top1: 86.4, top3: 92.7, f1: 0.851 },
    { model: "TF-IDF + Linear SVM", top1: 89.1, top3: 95.0, f1: 0.883 },
    { model: "Proposed Model", top1: 94.8, top3: 98.1, f1: 0.934 },
  ],
};

export const activityLog: ActivityEvent[] = Array.from({ length: 24 }).map((_, i) => {
  const templates = [
    { action: "Prediction generated", entity: `PR-${24880 - i}`, details: "Automatic mode, confidence 94.2%", status: "success" as const },
    { action: "Prediction manually corrected", entity: `PR-${24860 - i}`, details: "PIN changed 411007 → 411045", status: "warning" as const },
    { action: "Parcel status updated", entity: `PA-2026-00${4821 - i}`, details: "Sorting → Dispatched", status: "info" as const },
    { action: "Mapping updated", entity: "MC-001", details: "411045 merged into Baner S.O (V3)", status: "warning" as const },
    { action: "Review approved", entity: `RV-${5120 + (i % 10)}`, details: "Prediction confirmed by operator", status: "success" as const },
    { action: "Prediction failed", entity: `PR-${24840 - i}`, details: "Address too short to analyze", status: "error" as const },
  ];
  const t = templates[i % templates.length];
  return {
    id: `AC-${9000 + i}`,
    timestamp: new Date(Date.parse("2026-09-16T18:00:00Z") - i * 17 * 60000).toISOString(),
    operator: i % 3 === 0 ? "Mayur Patil" : i % 3 === 1 ? "S. Kulkarni" : "System",
    ...t,
  };
});

export const dashboardKpis: DashboardKpi[] = [
  { key: "predictions", label: "Predictions Today", value: "1,248", support: "+8.4% vs yesterday" },
  { key: "auto", label: "Auto-Routed", value: "1,091", support: "87.4% of predictions", tone: "success" },
  { key: "manual", label: "Manual Review", value: "157", support: "12.6% of predictions", tone: "warning" },
  { key: "accuracy", label: "Prediction Accuracy", value: "94.8%", support: "Based on verified predictions" },
  { key: "parcels", label: "Active Parcels", value: "326", support: "In routing pipeline", tone: "info" },
  { key: "mapping", label: "Mapping Changes", value: "3", support: "Last 30 days", tone: "warning" },
];

export const reviewSummary: ReviewQueueSummary[] = [
  { label: "Low confidence", count: 61, reason: "low_confidence" },
  { label: "Ambiguous address", count: 38, reason: "ambiguous_locality" },
  { label: "Mapping conflict", count: 24, reason: "mapping_conflict" },
  { label: "Missing locality", count: 21, reason: "missing_information" },
  { label: "Multiple candidate matches", count: 13, reason: "multiple_candidates" },
];

export const systemHealth: SystemHealthItem[] = [
  { label: "API", value: "Operational", state: "ok" },
  { label: "ML Model", value: "Loaded — v3.2", state: "ok" },
  { label: "Database", value: "Connected", state: "ok" },
  { label: "Postal Mapping", value: "Updated — V3", state: "ok" },
  { label: "Last synchronization", value: "16 Sep 2026, 17:42 IST", state: "ok" },
];

export const notifications: AppNotification[] = [
  { id: "N1", type: "review", title: "New review required", detail: "RV-5123 — mapping conflict on PIN 411045", time: "4 min ago", unread: true },
  { id: "N2", type: "mapping", title: "Mapping change detected", detail: "Balewadi S.O merged into Baner S.O (V3)", time: "32 min ago", unread: true },
  { id: "N3", type: "low_confidence", title: "Low-confidence prediction", detail: "PR-24874 resolved at 45.0% confidence", time: "1 hr ago", unread: true },
  { id: "N4", type: "system", title: "System warning", detail: "Mapping sync delayed by 6 minutes", time: "3 hr ago", unread: false },
  { id: "N5", type: "success", title: "Successful update", detail: "Model v3.2 metrics refreshed", time: "Yesterday", unread: false },
];

export const states = ["Maharashtra", "Karnataka", "Gujarat", "Delhi", "Tamil Nadu", "Rajasthan"];

export const districtsByState: Record<string, string[]> = {
  Maharashtra: ["Pune", "Mumbai Suburban", "Nashik", "Nagpur", "Thane"],
  Karnataka: ["Bengaluru Urban", "Mysuru", "Belagavi"],
  Gujarat: ["Ahmedabad", "Surat", "Vadodara"],
  Delhi: ["New Delhi", "South Delhi", "North Delhi"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai"],
  Rajasthan: ["Jaipur", "Jodhpur", "Udaipur"],
};
