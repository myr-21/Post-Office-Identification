import { cn } from "@/lib/utils";
import { confidenceLevel, formatPercent, labels } from "@/lib/format";
import type { ReactNode } from "react";

type Tone = "neutral" | "success" | "warning" | "error" | "info" | "primary";

const toneClasses: Record<Tone, string> = {
  neutral: "bg-muted text-muted-foreground border-border",
  success: "bg-success-soft text-success border-success/25",
  warning: "bg-warning-soft text-warning border-warning/25",
  error: "bg-error-soft text-error border-error/25",
  info: "bg-info-soft text-info border-info/25",
  primary: "bg-primary-soft text-primary-dark border-primary/25",
};

export function Pill({
  tone = "neutral",
  children,
  icon,
  className,
}: {
  tone?: Tone;
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 text-xs font-medium whitespace-nowrap",
        toneClasses[tone],
        className,
      )}
    >
      {icon}
      {children}
    </span>
  );
}

export function StatusBadge({ status }: { status: string }) {
  const map: Record<string, { tone: Tone; label: string }> = {
    auto_approved: { tone: "success", label: labels.predictionStatus.auto_approved },
    needs_review: { tone: "warning", label: labels.predictionStatus.needs_review },
    manually_verified: { tone: "info", label: labels.predictionStatus.manually_verified },
    corrected: { tone: "primary", label: labels.predictionStatus.corrected },
    pending: { tone: "warning", label: "Pending" },
    in_review: { tone: "info", label: "In Review" },
    resolved: { tone: "success", label: "Resolved" },
    escalated: { tone: "error", label: "Escalated" },
    received: { tone: "neutral", label: "Received" },
    address_analysis: { tone: "info", label: "Address Analysis" },
    address_verified: { tone: "primary", label: "Address Verified" },
    sorting: { tone: "warning", label: "Sorting" },
    dispatched: { tone: "info", label: "Dispatched" },
    delivered: { tone: "success", label: "Delivered" },
    active: { tone: "success", label: "Active" },
    updated: { tone: "primary", label: "Updated" },
    historical: { tone: "neutral", label: "Historical" },
    superseded: { tone: "neutral", label: "Superseded" },
    new: { tone: "info", label: "New" },
    merged: { tone: "primary", label: "Merged" },
    deprecated: { tone: "error", label: "Deprecated" },
    success: { tone: "success", label: "Success" },
    warning: { tone: "warning", label: "Warning" },
    error: { tone: "error", label: "Error" },
    info: { tone: "info", label: "Info" },
  };
  const entry = map[status] ?? { tone: "neutral" as Tone, label: status };
  return <Pill tone={entry.tone}>{entry.label}</Pill>;
}

export function PriorityBadge({ priority }: { priority: "high" | "medium" | "low" }) {
  const tone: Tone = priority === "high" ? "error" : priority === "medium" ? "warning" : "neutral";
  return (
    <Pill tone={tone}>
      <span aria-hidden className="text-[10px]">
        {priority === "high" ? "▲" : priority === "medium" ? "◆" : "▼"}
      </span>
      {labels.priority[priority]}
    </Pill>
  );
}

export function ConfidenceBadge({
  value,
  showLabel = true,
}: {
  value: number;
  showLabel?: boolean;
}) {
  const level = confidenceLevel(value);
  const tone: Tone = level === "high" ? "success" : level === "medium" ? "warning" : "error";
  const text = level === "high" ? "High" : level === "medium" ? "Medium" : "Low";
  return (
    <Pill tone={tone}>
      <span className="tabular font-semibold">{formatPercent(value)}</span>
      {showLabel && <span className="font-normal opacity-80">{text}</span>}
    </Pill>
  );
}

export function ConfidenceBar({ value, className }: { value: number; className?: string }) {
  const level = confidenceLevel(value);
  const color = level === "high" ? "bg-success" : level === "medium" ? "bg-warning" : "bg-error";
  return (
    <div
      className={cn("h-2 w-full overflow-hidden rounded-full bg-muted", className)}
      role="progressbar"
      aria-valuenow={Math.round(value * 100)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Prediction confidence"
    >
      <div
        className={cn("h-full rounded-full transition-all duration-500", color)}
        style={{ width: `${Math.max(2, value * 100)}%` }}
      />
    </div>
  );
}
