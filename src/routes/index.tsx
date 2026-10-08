import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import {
  ArrowRight,
  BadgeCheck,
  Clock,
  Database,
  Gauge,
  MapPin,
  Package,
  ShieldCheck,
  TriangleAlert,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { DataTable, type Column } from "@/components/postroute/data-table";
import { ConfidenceBadge, StatusBadge } from "@/components/postroute/badges";
import { KpiCard, PageHeader, Panel } from "@/components/postroute/primitives";
import { Timeline } from "@/components/postroute/timeline";
import { formatTime, labels } from "@/lib/format";
import {
  getDashboardKpis,
  getPredictions,
  getReviewSummary,
  getSystemHealth,
} from "@/services/postroute";
import type { PredictionResult } from "@/types";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Operations Dashboard — PostRoute AI" },
      {
        name: "description",
        content:
          "Daily prediction volume, auto-routing rate, review queue load and system health for postal operations.",
      },
      { property: "og:title", content: "Operations Dashboard — PostRoute AI" },
      {
        property: "og:description",
        content: "Postal address prediction and routing overview for post office operators.",
      },
    ],
  }),
  component: DashboardPage,
});

const kpiIcons: Record<string, React.ReactNode> = {
  predictions: <Gauge className="size-4" aria-hidden />,
  auto: <BadgeCheck className="size-4" aria-hidden />,
  manual: <TriangleAlert className="size-4" aria-hidden />,
  accuracy: <ShieldCheck className="size-4" aria-hidden />,
  parcels: <Package className="size-4" aria-hidden />,
  mapping: <MapPin className="size-4" aria-hidden />,
};

function DashboardPage() {
  const kpis = useQuery({ queryKey: ["dashboard-kpis"], queryFn: getDashboardKpis });
  const preds = useQuery({ queryKey: ["predictions"], queryFn: getPredictions });
  const summary = useQuery({ queryKey: ["review-summary"], queryFn: getReviewSummary });
  const health = useQuery({ queryKey: ["system-health"], queryFn: getSystemHealth });

  const columns: Column<PredictionResult>[] = [
    {
      key: "time",
      header: "Time",
      render: (r) => <span className="tabular">{formatTime(r.createdAt)}</span>,
    },
    {
      key: "address",
      header: "Address",
      className: "max-w-[280px]",
      render: (r) => <span className="line-clamp-1 text-foreground">{r.rawAddress}</span>,
    },
    {
      key: "pin",
      header: "Predicted PIN",
      render: (r) => <span className="tabular font-medium">{r.pincode}</span>,
    },
    { key: "po", header: "Delivery Post Office", render: (r) => r.postOffice },
    {
      key: "conf",
      header: "Confidence",
      render: (r) => <ConfidenceBadge value={r.confidence} showLabel={false} />,
    },
    { key: "status", header: "Status", render: (r) => <StatusBadge status={r.status} /> },
    {
      key: "action",
      header: "Operator Action",
      render: (r) => (
        <span className="text-xs text-muted-foreground">
          {r.status === "needs_review" ? "Awaiting review" : `Handled by ${r.operator ?? "System"}`}
        </span>
      ),
    },
  ];

  const totalPending = (summary.data ?? []).reduce((sum, s) => sum + s.count, 0);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Operations Dashboard"
        subtitle="Postal address prediction and routing overview"
        actions={
          <Button asChild>
            <Link to="/prediction">
              New Prediction <ArrowRight className="size-4" aria-hidden />
            </Link>
          </Button>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
        {(kpis.data ?? []).map((kpi) => (
          <KpiCard
            key={kpi.key}
            label={kpi.label}
            value={kpi.value}
            support={kpi.support}
            tone={kpi.tone ?? "default"}
            icon={kpiIcons[kpi.key]}
          />
        ))}
        {kpis.isLoading &&
          Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-28 animate-pulse rounded-xl border border-border bg-muted/60"
            />
          ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <Panel
          className="xl:col-span-2"
          title="Recent Predictions"
          description="Latest addresses processed by the model"
          bodyClassName="p-0"
          actions={
            <Button variant="ghost" size="sm" asChild>
              <Link to="/activity">View activity</Link>
            </Button>
          }
        >
          <div className="p-4">
            <DataTable
              columns={columns}
              rows={(preds.data ?? []).slice(0, 8)}
              rowKey={(r) => r.id}
              loading={preds.isLoading}
              error={preds.error ? (preds.error as Error).message : null}
              onRetry={() => preds.refetch()}
              dense
              caption="Recent address predictions"
            />
          </div>
        </Panel>

        <div className="space-y-6">
          <Panel
            title="Review Queue Summary"
            description={`${totalPending} predictions waiting`}
            accent
          >
            <ul className="space-y-2.5">
              {(summary.data ?? []).map((item) => (
                <li key={item.reason} className="flex items-center justify-between gap-3">
                  <span className="text-sm text-foreground">{item.label}</span>
                  <span className="tabular rounded-md bg-muted px-2 py-0.5 text-sm font-semibold">
                    {item.count}
                  </span>
                </li>
              ))}
              {summary.isLoading && <li className="h-24 animate-pulse rounded-md bg-muted/60" />}
            </ul>
            <Button className="mt-4 w-full" asChild>
              <Link to="/review">
                Review Queue <ArrowRight className="size-4" aria-hidden />
              </Link>
            </Button>
          </Panel>

          <Panel title="System Health">
            <ul className="space-y-2.5">
              {(health.data ?? []).map((item) => (
                <li key={item.label} className="flex items-center justify-between gap-3 text-sm">
                  <span className="flex items-center gap-2 text-muted-foreground">
                    {item.label === "Database" ? (
                      <Database className="size-4" aria-hidden />
                    ) : item.label === "Last synchronization" ? (
                      <Clock className="size-4" aria-hidden />
                    ) : (
                      <ShieldCheck className="size-4" aria-hidden />
                    )}
                    {item.label}
                  </span>
                  <span
                    className={cn(
                      "font-medium",
                      item.state === "ok"
                        ? "text-success"
                        : item.state === "warn"
                          ? "text-warning"
                          : "text-error",
                    )}
                  >
                    {item.value}
                  </span>
                </li>
              ))}
            </ul>
          </Panel>
        </div>
      </div>

      <Panel title="Routing Activity" description="Standard parcel journey through the system">
        <Timeline
          steps={[
            { label: "Parcel received", timestamp: "Today 09:12", state: "done" },
            {
              label: "Address analyzed",
              timestamp: "Today 09:13",
              note: "Model v3.2",
              state: "done",
            },
            {
              label: "PIN predicted",
              timestamp: "Today 09:13",
              note: "411045 — Baner S.O",
              state: "done",
            },
            { label: "Operator verified", timestamp: "Today 10:05", state: "done" },
            { label: "Sorting", timestamp: "Today 11:40", state: "current" },
            { label: "Dispatched", timestamp: null, state: "pending" },
            { label: "Delivered", timestamp: null, state: "pending" },
          ]}
        />
      </Panel>

      <p className="text-xs text-muted-foreground">
        {labels.predictionStatus.auto_approved} entries are routed without operator input.
        Demonstration data — not live postal records.
      </p>
    </div>
  );
}
