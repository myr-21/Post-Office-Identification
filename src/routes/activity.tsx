import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { DataTable, type Column } from "@/components/postroute/data-table";
import { StatusBadge } from "@/components/postroute/badges";
import {
  FilterBar,
  FilterSelect,
  PageHeader,
  SearchBar,
} from "@/components/postroute/primitives";
import { formatDateTime } from "@/lib/format";
import { getActivityLog } from "@/services/postroute";
import type { ActivityEvent } from "@/types";

export const Route = createFileRoute("/activity")({
  head: () => ({
    meta: [
      { title: "Activity Log — PostRoute AI" },
      {
        name: "description",
        content: "Chronological record of operator and system actions across predictions, parcels and mappings.",
      },
      { property: "og:title", content: "Activity Log — PostRoute AI" },
      { property: "og:description", content: "System and operator action history." },
    ],
  }),
  component: ActivityPage,
});

function ActivityPage() {
  const query = useQuery({ queryKey: ["activity"], queryFn: getActivityLog });
  const [search, setSearch] = useState("");
  const [operator, setOperator] = useState("all");
  const [action, setAction] = useState("all");
  const [status, setStatus] = useState("all");

  const all = query.data ?? [];
  const rows = useMemo(() => {
    const term = search.trim().toLowerCase();
    return all.filter(
      (e) =>
        (!term ||
          e.entity.toLowerCase().includes(term) ||
          e.details.toLowerCase().includes(term) ||
          e.action.toLowerCase().includes(term)) &&
        (operator === "all" || e.operator === operator) &&
        (action === "all" || e.action === action) &&
        (status === "all" || e.status === status),
    );
  }, [all, search, operator, action, status]);

  const columns: Column<ActivityEvent>[] = [
    { key: "time", header: "Timestamp", render: (e) => <span className="tabular text-xs">{formatDateTime(e.timestamp)}</span> },
    { key: "operator", header: "Operator", render: (e) => e.operator },
    { key: "action", header: "Action", render: (e) => <span className="font-medium">{e.action}</span> },
    { key: "entity", header: "Entity", render: (e) => <span className="tabular">{e.entity}</span> },
    { key: "details", header: "Details", className: "max-w-[320px]", render: (e) => <span className="line-clamp-1 text-muted-foreground">{e.details}</span> },
    { key: "status", header: "Status", render: (e) => <StatusBadge status={e.status} /> },
  ];

  return (
    <div className="space-y-6">
      <PageHeader title="Activity Log" subtitle="Chronological system and operator actions" />

      <FilterBar>
        <SearchBar
          label="Search activity by entity, action or details"
          placeholder="Search action, entity or details…"
          value={search}
          onChange={setSearch}
        />
        <FilterSelect
          label="Operator"
          value={operator}
          onChange={setOperator}
          options={[...new Set(all.map((e) => e.operator))].map((v) => ({ value: v, label: v }))}
        />
        <FilterSelect
          label="Action"
          value={action}
          onChange={setAction}
          options={[...new Set(all.map((e) => e.action))].map((v) => ({ value: v, label: v }))}
        />
        <FilterSelect
          label="Result"
          value={status}
          onChange={setStatus}
          options={[
            { value: "success", label: "Success" },
            { value: "warning", label: "Warning" },
            { value: "error", label: "Error" },
            { value: "info", label: "Info" },
          ]}
        />
      </FilterBar>

      <DataTable
        columns={columns}
        rows={rows}
        rowKey={(e) => e.id}
        loading={query.isLoading}
        error={query.error ? (query.error as Error).message : null}
        onRetry={() => query.refetch()}
        emptyTitle="No activity matches these filters"
        dense
        caption="Activity log"
      />
    </div>
  );
}
