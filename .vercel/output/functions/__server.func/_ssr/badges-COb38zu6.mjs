import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-collapsible+[...].mjs";
import { b as cn } from "./primitives-Df9_3jyn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/badges-COb38zu6.js
var import_jsx_runtime = require_jsx_runtime();
function formatTime(iso) {
  return new Date(iso).toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}
function formatDateTime(iso) {
  return new Date(iso).toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}
function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}
function formatPercent(value, digits = 1) {
  return `${(value * 100).toFixed(digits)}%`;
}
function confidenceLevel(value) {
  if (value >= 0.9) return "high";
  if (value >= 0.7) return "medium";
  return "low";
}
var labels = {
  predictionStatus: {
    auto_approved: "Auto Approved",
    needs_review: "Needs Review",
    manually_verified: "Manually Verified",
    corrected: "Corrected",
  },
  reviewReason: {
    low_confidence: "Low Confidence",
    ambiguous_locality: "Ambiguous Locality",
    missing_information: "Missing Information",
    mapping_conflict: "Mapping Conflict",
    multiple_candidates: "Multiple Candidates",
  },
  reviewStatus: {
    pending: "Pending",
    in_review: "In Review",
    resolved: "Resolved",
    escalated: "Escalated",
  },
  parcelStatus: {
    received: "Received",
    address_analysis: "Address Analysis",
    address_verified: "Address Verified",
    sorting: "Sorting",
    dispatched: "Dispatched",
    delivered: "Delivered",
  },
  postOfficeStatus: {
    active: "Active",
    updated: "Updated",
    historical: "Historical",
  },
  changeType: {
    new: "New",
    updated: "Updated",
    merged: "Merged",
    deprecated: "Deprecated",
  },
  priority: {
    high: "High",
    medium: "Medium",
    low: "Low",
  },
};
var toneClasses = {
  neutral: "bg-muted text-muted-foreground border-border",
  success: "bg-success-soft text-success border-success/25",
  warning: "bg-warning-soft text-warning border-warning/25",
  error: "bg-error-soft text-error border-error/25",
  info: "bg-info-soft text-info border-info/25",
  primary: "bg-primary-soft text-primary-dark border-primary/25",
};
function Pill({ tone = "neutral", children, icon, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
    className: cn(
      "inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 text-xs font-medium whitespace-nowrap",
      toneClasses[tone],
      className,
    ),
    children: [icon, children],
  });
}
function StatusBadge({ status }) {
  const entry = {
    auto_approved: {
      tone: "success",
      label: labels.predictionStatus.auto_approved,
    },
    needs_review: {
      tone: "warning",
      label: labels.predictionStatus.needs_review,
    },
    manually_verified: {
      tone: "info",
      label: labels.predictionStatus.manually_verified,
    },
    corrected: {
      tone: "primary",
      label: labels.predictionStatus.corrected,
    },
    pending: {
      tone: "warning",
      label: "Pending",
    },
    in_review: {
      tone: "info",
      label: "In Review",
    },
    resolved: {
      tone: "success",
      label: "Resolved",
    },
    escalated: {
      tone: "error",
      label: "Escalated",
    },
    received: {
      tone: "neutral",
      label: "Received",
    },
    address_analysis: {
      tone: "info",
      label: "Address Analysis",
    },
    address_verified: {
      tone: "primary",
      label: "Address Verified",
    },
    sorting: {
      tone: "warning",
      label: "Sorting",
    },
    dispatched: {
      tone: "info",
      label: "Dispatched",
    },
    delivered: {
      tone: "success",
      label: "Delivered",
    },
    active: {
      tone: "success",
      label: "Active",
    },
    updated: {
      tone: "primary",
      label: "Updated",
    },
    historical: {
      tone: "neutral",
      label: "Historical",
    },
    superseded: {
      tone: "neutral",
      label: "Superseded",
    },
    new: {
      tone: "info",
      label: "New",
    },
    merged: {
      tone: "primary",
      label: "Merged",
    },
    deprecated: {
      tone: "error",
      label: "Deprecated",
    },
    success: {
      tone: "success",
      label: "Success",
    },
    warning: {
      tone: "warning",
      label: "Warning",
    },
    error: {
      tone: "error",
      label: "Error",
    },
    info: {
      tone: "info",
      label: "Info",
    },
  }[status] ?? {
    tone: "neutral",
    label: status,
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
    tone: entry.tone,
    children: entry.label,
  });
}
function PriorityBadge({ priority }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Pill, {
    tone: priority === "high" ? "error" : priority === "medium" ? "warning" : "neutral",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
        "aria-hidden": true,
        className: "text-[10px]",
        children: priority === "high" ? "▲" : priority === "medium" ? "◆" : "▼",
      }),
      labels.priority[priority],
    ],
  });
}
function ConfidenceBadge({ value, showLabel = true }) {
  const level = confidenceLevel(value);
  const tone = level === "high" ? "success" : level === "medium" ? "warning" : "error";
  const text = level === "high" ? "High" : level === "medium" ? "Medium" : "Low";
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Pill, {
    tone,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
        className: "tabular font-semibold",
        children: formatPercent(value),
      }),
      showLabel &&
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
          className: "font-normal opacity-80",
          children: text,
        }),
    ],
  });
}
function ConfidenceBar({ value, className }) {
  const level = confidenceLevel(value);
  const color = level === "high" ? "bg-success" : level === "medium" ? "bg-warning" : "bg-error";
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: cn("h-2 w-full overflow-hidden rounded-full bg-muted", className),
    role: "progressbar",
    "aria-valuenow": Math.round(value * 100),
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-label": "Prediction confidence",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
      className: cn("h-full rounded-full transition-all duration-500", color),
      style: { width: `${Math.max(2, value * 100)}%` },
    }),
  });
}
//#endregion
export {
  StatusBadge as a,
  formatDateTime as c,
  labels as d,
  PriorityBadge as i,
  formatPercent as l,
  ConfidenceBar as n,
  confidenceLevel as o,
  Pill as r,
  formatDate as s,
  ConfidenceBadge as t,
  formatTime as u,
};
