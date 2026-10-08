/**
 * Domain types for PostRoute AI.
 * These mirror the shape a future FastAPI + PostgreSQL backend is expected to
 * return, so only the service layer changes when the real API is connected.
 */

export type ConfidenceLevel = "high" | "medium" | "low";

export type PredictionStatus = "auto_approved" | "needs_review" | "manually_verified" | "corrected";

export type ReviewReason =
  | "low_confidence"
  | "ambiguous_locality"
  | "missing_information"
  | "mapping_conflict"
  | "multiple_candidates";

export type ReviewPriority = "high" | "medium" | "low";

export type ReviewStatus = "pending" | "in_review" | "resolved" | "escalated";

export type ParcelStatus =
  "received" | "address_analysis" | "address_verified" | "sorting" | "dispatched" | "delivered";

export type PostOfficeStatus = "active" | "updated" | "historical";

export type MappingChangeType = "new" | "updated" | "merged" | "deprecated";

export type ProcessingMode = "automatic" | "assisted";

export interface AddressInput {
  rawAddress: string;
  state?: string | undefined;
  district?: string | undefined;
  pincode?: string | undefined;
  mode: ProcessingMode;
}

export interface AddressComponent {
  label: string;
  value: string;
  type: "unit" | "locality" | "road" | "city" | "district" | "state" | "pincode" | "landmark";
}

export interface NormalizationResult {
  raw: string;
  normalized: string;
  components: AddressComponent[];
}

export interface CandidatePrediction {
  rank: number;
  postOffice: string;
  pincode: string;
  district: string;
  state: string;
  confidence: number; // 0..1
}

export interface ExplanationFactor {
  label: string;
  detail: string;
  matched: boolean;
}

export interface PredictionResult {
  id: string;
  createdAt: string;
  rawAddress: string;
  normalization: NormalizationResult;
  pincode: string;
  postOffice: string;
  district: string;
  state: string;
  confidence: number; // 0..1
  status: PredictionStatus;
  candidates: CandidatePrediction[];
  explanation: ExplanationFactor[];
  operator?: string | undefined;
}

export interface PostOffice {
  id: string;
  name: string;
  pincode: string;
  district: string;
  state: string;
  region: string;
  division: string;
  latitude: number;
  longitude: number;
  status: PostOfficeStatus;
  mappingVersion: string;
}

export interface ParcelEvent {
  status: ParcelStatus;
  label: string;
  timestamp: string | null;
  note?: string | undefined;
}

export interface Parcel {
  id: string;
  rawAddress: string;
  normalizedAddress: string;
  pincode: string;
  postOffice: string;
  confidence: number;
  status: ParcelStatus;
  updatedAt: string;
  operator: string;
  candidates: CandidatePrediction[];
  timeline: ParcelEvent[];
}

export interface ReviewItem {
  id: string;
  parcelId: string;
  priority: ReviewPriority;
  rawAddress: string;
  normalizedAddress: string;
  pincode: string;
  postOffice: string;
  district: string;
  state: string;
  confidence: number;
  reason: ReviewReason;
  createdAt: string;
  status: ReviewStatus;
  operator: string;
  candidates: CandidatePrediction[];
  mapping: {
    current: string;
    historical: string;
    conflict: string | null;
  };
}

export interface MappingChange {
  id: string;
  pincode: string;
  postOffice: string;
  region: string;
  version: string;
  effectiveFrom: string;
  status: "active" | "superseded";
  changeType: MappingChangeType;
  previousMapping: string;
  newMapping: string;
  reason: string;
  affectedPostOffices: string[];
  affectedPincodes: string[];
}

export interface AnalyticsPoint {
  label: string;
  value: number;
  secondary?: number | undefined;
}

export interface AnalyticsMetric {
  key: string;
  label: string;
  value: string;
  delta?: string | undefined;
  hint?: string | undefined;
}

export interface ModelComparison {
  model: string;
  top1: number;
  top3: number;
  f1: number;
}

export interface AnalyticsData {
  metrics: AnalyticsMetric[];
  accuracyTrend: AnalyticsPoint[];
  accuracyByCondition: AnalyticsPoint[];
  confidenceDistribution: AnalyticsPoint[];
  reviewReasons: AnalyticsPoint[];
  modelComparison: ModelComparison[];
}

export interface ActivityEvent {
  id: string;
  timestamp: string;
  operator: string;
  action: string;
  entity: string;
  details: string;
  status: "success" | "warning" | "error" | "info";
}

export interface Operator {
  name: string;
  role: string;
  postOffice: string;
  employeeId: string;
  lastActive: string;
  status: "online" | "away" | "offline";
}

export interface DashboardKpi {
  key: string;
  label: string;
  value: string;
  support: string;
  tone?: "default" | "warning" | "success" | "info" | undefined;
}

export interface SystemHealthItem {
  label: string;
  value: string;
  state: "ok" | "warn" | "error";
}

export interface ReviewQueueSummary {
  label: string;
  count: number;
  reason: ReviewReason;
}

export interface AppNotification {
  id: string;
  type: "review" | "mapping" | "low_confidence" | "system" | "success";
  title: string;
  detail: string;
  time: string;
  unread: boolean;
}

export interface SystemConfig {
  autoRouteThreshold: number;
  reviewFloor: number;
}
