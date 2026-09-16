export function formatTime(iso: string) {
  return new Date(iso).toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

export function formatDateTime(iso: string) {
  return new Date(iso).toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export function formatPercent(value: number, digits = 1) {
  return `${(value * 100).toFixed(digits)}%`;
}

export function confidenceLevel(value: number): "high" | "medium" | "low" {
  if (value >= 0.9) return "high";
  if (value >= 0.7) return "medium";
  return "low";
}

export const labels = {
  predictionStatus: {
    auto_approved: "Auto Approved",
    needs_review: "Needs Review",
    manually_verified: "Manually Verified",
    corrected: "Corrected",
  } as const,
  reviewReason: {
    low_confidence: "Low Confidence",
    ambiguous_locality: "Ambiguous Locality",
    missing_information: "Missing Information",
    mapping_conflict: "Mapping Conflict",
    multiple_candidates: "Multiple Candidates",
  } as const,
  reviewStatus: {
    pending: "Pending",
    in_review: "In Review",
    resolved: "Resolved",
    escalated: "Escalated",
  } as const,
  parcelStatus: {
    received: "Received",
    address_analysis: "Address Analysis",
    address_verified: "Address Verified",
    sorting: "Sorting",
    dispatched: "Dispatched",
    delivered: "Delivered",
  } as const,
  postOfficeStatus: {
    active: "Active",
    updated: "Updated",
    historical: "Historical",
  } as const,
  changeType: {
    new: "New",
    updated: "Updated",
    merged: "Merged",
    deprecated: "Deprecated",
  } as const,
  priority: {
    high: "High",
    medium: "Medium",
    low: "Low",
  } as const,
};
