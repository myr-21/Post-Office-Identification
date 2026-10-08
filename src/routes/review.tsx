import { useMemo, useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { DataTable, type Column } from "@/components/postroute/data-table";
import { ConfidenceBadge, PriorityBadge, StatusBadge } from "@/components/postroute/badges";
import {
  FilterBar,
  FilterSelect,
  KpiCard,
  PageHeader,
  SearchBar,
} from "@/components/postroute/primitives";
import { formatDateTime, labels } from "@/lib/format";
import { getReviewQueue, getConfig } from "@/services/postroute";
import type { ReviewItem } from "@/types";

export const Route = createFileRoute("/review")({
  head: () => ({
    meta: [
      { title: "Review Queue — PostRoute AI" },
      {
        name: "description",
        content:
          "Predictions requiring operator verification, ranked by priority, confidence and review reason.",
      },
      { property: "og:title", content: "Review Queue — PostRoute AI" },
      { property: "og:description", content: "Predictions requiring operator verification." },
    ],
  }),
  component: ReviewQueuePage,
});

function ReviewQueuePage() {
  const navigate = useNavigate();
  const query = useQuery({ queryKey: ["review-queue"], queryFn: getReviewQueue });
  const configQuery = useQuery({ queryKey: ["config"], queryFn: getConfig });
  const [search, setSearch] = useState("");
  const [confidence, setConfidence] = useState("all");
  const [reason, setReason] = useState("all");
  const [status, setStatus] = useState("all");
  const [region, setRegion] = useState("all");
  const [operator, setOperator] = useState("all");

  const rows = useMemo(() => {
    const items = query.data ?? [];
    const config = configQuery.data ?? { autoRouteThreshold: 0.85, reviewFloor: 0.55 };
    return items
      .filter((item) => {
        const term = search.trim().toLowerCase();
        const matchesSearch =
          !term ||
          item.rawAddress.toLowerCase().includes(term) ||
          item.pincode.includes(term) ||
          item.parcelId.toLowerCase().includes(term);
        const matchesConfidence =
          confidence === "all" ||
          (confidence === "high" && item.confidence >= config.autoRouteThreshold) ||
          (confidence === "medium" &&
            item.confidence >= config.reviewFloor &&
            item.confidence < config.autoRouteThreshold) ||
          (confidence === "low" && item.confidence < config.reviewFloor);
        return (
          matchesSearch &&
          matchesConfidence &&
          (reason === "all" || item.reason === reason) &&
          (status === "all" || item.status === status) &&
          (region === "all" || item.state === region) &&
          (operator === "all" || item.operator === operator)
        );
      })
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }, [query.data, configQuery.data, search, confidence, reason, status, region, operator]);

  const all = query.data ?? [];
  const columns: Column<ReviewItem>[] = [
    { key: "priority", header: "Priority", render: (r) => <PriorityBadge priority={r.priority} /> },
    {
      key: "address",
      header: "Address",
      className: "max-w-[260px]",
      render: (r) => (
        <div>
          <p className="line-clamp-1 font-medium">{r.rawAddress}</p>
          <p className="text-xs text-muted-foreground">{r.parcelId}</p>
        </div>
      ),
    },
    {
      key: "pin",
      header: "Predicted PIN",
      render: (r) => <span className="tabular">{r.pincode}</span>,
    },
    { key: "po", header: "Post Office", render: (r) => r.postOffice },
    {
      key: "conf",
      header: "Confidence",
      render: (r) => <ConfidenceBadge value={r.confidence} showLabel={false} />,
    },
    { key: "reason", header: "Review Reason", render: (r) => labels.reviewReason[r.reason] },
    {
      key: "created",
      header: "Created",
      render: (r) => <span className="tabular text-xs">{formatDateTime(r.createdAt)}</span>,
    },
    { key: "status", header: "Status", render: (r) => <StatusBadge status={r.status} /> },
    {
      key: "action",
      header: "Action",
      align: "right",
      render: (r) => (
        <Button
          size="sm"
          variant="outline"
          onClick={(e) => {
            e.stopPropagation();
            navigate({ to: "/review/$reviewId", params: { reviewId: r.id } });
          }}
        >
          Review
        </Button>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <PageHeader title="Review Queue" subtitle="Predictions requiring operator verification" />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <KpiCard
          label="Total pending"
          value={String(all.filter((i) => i.status === "pending").length)}
          support="Awaiting an operator"
        />
        <KpiCard
          label="High priority"
          value={String(all.filter((i) => i.priority === "high").length)}
          support="Confidence below 55%"
          tone="warning"
        />
        <KpiCard
          label="Mapping conflicts"
          value={String(all.filter((i) => i.reason === "mapping_conflict").length)}
          support="Requires mapping check"
          tone="warning"
        />
        <KpiCard
          label="Low confidence"
          value={String(all.filter((i) => i.confidence < 0.7).length)}
          support="Below auto-routing threshold"
          tone="info"
        />
      </div>

      <FilterBar>
        <SearchBar
          label="Search review queue by address, PIN or parcel ID"
          placeholder="Search address, PIN or parcel ID…"
          value={search}
          onChange={setSearch}
        />
        <FilterSelect
          label="Confidence"
          value={confidence}
          onChange={setConfidence}
          options={[
            { value: "high", label: "High (≥90%)" },
            { value: "medium", label: "Medium (70–89%)" },
            { value: "low", label: "Low (<70%)" },
          ]}
        />
        <FilterSelect
          label="Reason"
          value={reason}
          onChange={setReason}
          options={Object.entries(labels.reviewReason).map(([value, label]) => ({ value, label }))}
        />
        <FilterSelect
          label="Status"
          value={status}
          onChange={setStatus}
          options={Object.entries(labels.reviewStatus).map(([value, label]) => ({ value, label }))}
        />
        <FilterSelect
          label="Region"
          value={region}
          onChange={setRegion}
          options={[...new Set(all.map((i) => i.state))].map((v) => ({ value: v, label: v }))}
        />
        <FilterSelect
          label="Operator"
          value={operator}
          onChange={setOperator}
          options={[...new Set(all.map((i) => i.operator))].map((v) => ({ value: v, label: v }))}
        />
      </FilterBar>

      <DataTable
        columns={columns}
        rows={rows}
        rowKey={(r) => r.id}
        loading={query.isLoading}
        error={query.error ? (query.error as Error).message : null}
        onRetry={() => query.refetch()}
        onRowClick={(r) => navigate({ to: "/review/$reviewId", params: { reviewId: r.id } })}
        emptyTitle="No predictions match these filters"
        emptyDescription="Clear the filters or widen the search to see pending reviews."
        caption="Review queue"
      />
    </div>
  );
}
