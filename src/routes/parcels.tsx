import { useMemo, useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { DataTable, type Column } from "@/components/postroute/data-table";
import { ConfidenceBadge, StatusBadge } from "@/components/postroute/badges";
import {
  FilterBar,
  FilterSelect,
  KpiCard,
  PageHeader,
  SearchBar,
} from "@/components/postroute/primitives";
import { formatDateTime, labels } from "@/lib/format";
import { getParcels } from "@/services/postroute";
import type { Parcel } from "@/types";

export const Route = createFileRoute("/parcels")({
  head: () => ({
    meta: [
      { title: "Parcel Routing — PostRoute AI" },
      {
        name: "description",
        content:
          "Track parcels from receipt through address analysis, verification, sorting, dispatch and delivery.",
      },
      { property: "og:title", content: "Parcel Routing — PostRoute AI" },
      { property: "og:description", content: "Parcel routing status across the delivery pipeline." },
    ],
  }),
  component: ParcelsPage,
});

function ParcelsPage() {
  const navigate = useNavigate();
  const query = useQuery({ queryKey: ["parcels"], queryFn: getParcels });
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [office, setOffice] = useState("all");

  const all = query.data ?? [];
  const rows = useMemo(() => {
    const term = search.trim().toLowerCase();
    return all.filter(
      (p) =>
        (!term ||
          p.id.toLowerCase().includes(term) ||
          p.rawAddress.toLowerCase().includes(term) ||
          p.pincode.includes(term) ||
          p.postOffice.toLowerCase().includes(term)) &&
        (status === "all" || p.status === status) &&
        (office === "all" || p.postOffice === office),
    );
  }, [all, search, status, office]);

  const count = (s: Parcel["status"]) => all.filter((p) => p.status === s).length;

  const columns: Column<Parcel>[] = [
    { key: "id", header: "Parcel ID", render: (p) => <span className="tabular font-medium">{p.id}</span> },
    {
      key: "address",
      header: "Address",
      className: "max-w-[260px]",
      render: (p) => <span className="line-clamp-1">{p.rawAddress}</span>,
    },
    { key: "pin", header: "Predicted PIN", render: (p) => <span className="tabular">{p.pincode}</span> },
    { key: "office", header: "Delivery Office", render: (p) => p.postOffice },
    { key: "conf", header: "Confidence", render: (p) => <ConfidenceBadge value={p.confidence} showLabel={false} /> },
    { key: "status", header: "Routing Status", render: (p) => <StatusBadge status={p.status} /> },
    { key: "updated", header: "Last Updated", render: (p) => <span className="tabular text-xs">{formatDateTime(p.updatedAt)}</span> },
    {
      key: "action",
      header: "Action",
      align: "right",
      render: (p) => (
        <Button
          size="sm"
          variant="outline"
          onClick={(e) => {
            e.stopPropagation();
            navigate({ to: "/parcels/$parcelId", params: { parcelId: p.id } });
          }}
        >
          Open
        </Button>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <PageHeader title="Parcel Routing" subtitle="Parcels moving through prediction, sorting and dispatch" />

      <div className="grid gap-4 sm:grid-cols-3 xl:grid-cols-6">
        <KpiCard label="Total Parcels" value={String(all.length)} support="In current view" />
        <KpiCard label="Received" value={String(count("received"))} support="Awaiting analysis" />
        <KpiCard label="Address Verified" value={String(count("address_verified"))} support="Ready for sorting" tone="info" />
        <KpiCard label="Sorting" value={String(count("sorting"))} support="At sorting hub" tone="warning" />
        <KpiCard label="Dispatched" value={String(count("dispatched"))} support="Out for delivery" tone="info" />
        <KpiCard label="Delivered" value={String(count("delivered"))} support="Completed today" tone="success" />
      </div>

      <FilterBar>
        <SearchBar
          label="Search parcels by ID, address, PIN or post office"
          placeholder="Search parcel ID, address, PIN, post office…"
          value={search}
          onChange={setSearch}
        />
        <FilterSelect
          label="Status"
          value={status}
          onChange={setStatus}
          options={Object.entries(labels.parcelStatus).map(([value, label]) => ({ value, label }))}
        />
        <FilterSelect
          label="Post Office"
          value={office}
          onChange={setOffice}
          options={[...new Set(all.map((p) => p.postOffice))].map((v) => ({ value: v, label: v }))}
        />
      </FilterBar>

      <DataTable
        columns={columns}
        rows={rows}
        rowKey={(p) => p.id}
        loading={query.isLoading}
        error={query.error ? (query.error as Error).message : null}
        onRetry={() => query.refetch()}
        onRowClick={(p) => navigate({ to: "/parcels/$parcelId", params: { parcelId: p.id } })}
        emptyTitle="No parcels match these filters"
        caption="Parcel routing table"
      />
    </div>
  );
}
