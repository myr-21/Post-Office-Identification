import { Check, Circle } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TimelineStep {
  label: string;
  timestamp?: string | null;
  note?: string | undefined;
  state: "done" | "current" | "pending";
}

export function Timeline({ steps }: { steps: TimelineStep[] }) {
  return (
    <ol className="relative space-y-0">
      {steps.map((step, index) => {
        const isLast = index === steps.length - 1;
        return (
          <li key={step.label} className="relative flex gap-3 pb-5 last:pb-0">
            {!isLast && (
              <span
                aria-hidden
                className={cn(
                  "absolute top-6 left-[11px] h-[calc(100%-1rem)] w-px",
                  step.state === "done" ? "bg-primary/45" : "bg-border",
                )}
              />
            )}
            <span
              aria-hidden
              className={cn(
                "z-10 flex size-6 shrink-0 items-center justify-center rounded-full border",
                step.state === "done" && "border-primary bg-primary text-primary-foreground",
                step.state === "current" && "border-primary bg-primary-soft text-primary-dark",
                step.state === "pending" && "border-border bg-card text-muted-foreground",
              )}
            >
              {step.state === "done" ? (
                <Check className="size-3.5" />
              ) : (
                <Circle className="size-2 fill-current" />
              )}
            </span>
            <div className="min-w-0 pt-0.5">
              <p
                className={cn(
                  "text-sm font-medium",
                  step.state === "pending" ? "text-muted-foreground" : "text-foreground",
                )}
              >
                {step.label}
                {step.state === "current" && (
                  <span className="ml-2 text-xs font-semibold text-primary-dark">In progress</span>
                )}
              </p>
              <p className="tabular text-xs text-muted-foreground">{step.timestamp ?? "Pending"}</p>
              {step.note && <p className="mt-0.5 text-xs text-muted-foreground">{step.note}</p>}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
