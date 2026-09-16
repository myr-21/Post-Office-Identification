import { useMemo, useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { DataTable, type Column } from "@/components/postroute/data-table";
import { StatusBadge } from "@/components/postroute/badges";
import {
  FilterBar,
  FilterSelect,
  PageHeader,
  SearchBar,
} from "@/components/postroute/primitives";
import { getPostOffices } from "@/services/postroute";
import type { PostOffice } from "@/types";
import { labels } from "@/lib/format";

export const Route = createFileRoute("/post-offices")({
  head: () => ({
    meta: [
      { title: "Post Offices — PostRoute AI" },
      {
        name: "description",
        content: "Browse delivery post offices, their PIN codes, divisions and mapping versions.",
      },
      { property: "og:title", content: "Post Offices — PostRoute AI" },
      { property: "og:description", content: "Post office directory with PIN mappings." },
    ],
  }),
  component: PostOfficesPage,
});

function PostOfficesPage() {
  const navigate = useNavigate();
  const query = useQuery({ queryKey: ["post-offices"], queryFn: getPostOffices });
  const [search, setSearch] = useState("");
  const [state, setState] = useState("all");
  const [district, setDistrict] = useState("all");
  const [status, setStatus] = useState("all");
  const [version, setVersion] = useState("all");

  const all = query.data ?? [];
  const rows = useMemo(() => {
    const term = search.trim().toLowerCase();
    return all.filter(
      (o) =>
        (!term ||
          o.name.toLowerCase().includes(term) ||
          o.pincode.includes(term) ||
          o.district.toLowerCase().includes(term) ||
          o.state.toLowerCase().includes(term)) &&
        (state === "all" || o.state === state) &&
        (district === "all" || o.district === district) &&
        (status === "all" || o.status === status) &&
        (version === "all" || o.mappingVersion === version),
    );
  }, [all, search, state, district, status, version]);

  const columns: Column<PostOffice>[] = [
    { key: "name", header: "Post Office", render: (o) => <span className="font-medium">{o.name}</span> },
    { key: "pin", header: "PIN", render: (o) => <span className="tabular">{o.pincode}</span> },
    { key: "district", header: "District", render: (o) => o.district },
    { key: "state", header: "State", render: (o) => o.state },
    { key: "lat", header: "Latitude", render: (o) => <span className="tabular text-xs">{o.latitude.toFixed(4)}</span> },
    { key: "lng", header: "Longitude", render: (o) => <span className="tabular text-xs">{o.longitude.toFixed(4)}</span> },
    { key: "status", header: "Status", render: (o) => <StatusBadge status={o.status} /> },
    { key: "version", header: "Mapping Version", render: (o) => o.mappingVersion },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        title="Post Offices"
        subtitle="Browse postal offices and their associated PIN mappings"
      />

      <FilterBar>
        <SearchBar
          label="Search post offices by name, PIN, district or state"
          placeholder="Search post office, PIN, district, state…"
          value={search}
          onChange={setSearch}
        />
        <FilterSelect
          label="State"
          value={state}
          onChange={(v) => {
            setState(v);
            setDistrict("all");
          }}
          options={[...new Set(all.map((o) => o.state))].map((v) => ({ value: v, label: v }))}
        />
        <FilterSelect
          label="District"
          value={district}
          onChange={setDistrict}
          options={[...new Set(all.filter((o) => state === "all" || o.state === state).map((o) => o.district))].map(
            (v) => ({ value: v, label: v }),
          )}
        />
        <FilterSelect
          label="Status"
          value={status}
          onChange={setStatus}
          options={Object.entries(labels.postOfficeStatus).map(([value, label]) => ({ value, label }))}
        />
        <FilterSelect
          label="Mapping Version"
          value={version}
          onChange={setVersion}
          options={[...new Set(all.map((o) => o.mappingVersion))].map((v) => ({ value: v, label: v }))}
        />
      </FilterBar>

      <DataTable
        columns={columns}
        rows={rows}
        rowKey={(o) => o.id}
        loading={query.isLoading}
        error={query.error ? (query.error as Error).message : null}
        onRetry={() => query.refetch()}
        onRowClick={(o) => navigate({ to: "/post-offices/$officeId", params: { officeId: o.id } })}
        emptyTitle="No post offices match these filters"
        caption="Post office directory"
      />
    </div>
  );
}
