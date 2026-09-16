import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { ArrowRight, History } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { DataTable, type Column } from "@/components/postroute/data-table";
import { Pill, StatusBadge } from "@/components/postroute/badges";
import {
  FieldRow,
  FilterBar,
  FilterSelect,
  KpiCard,
  PageHeader,
  Panel,
  SearchBar,
} from "@/components/postroute/primitives";
import { formatDate, labels } from "@/lib/format";
import { getMappingHistory } from "@/services/postroute";
import type { MappingChange } from "@/types";

export const Route = createFileRoute("/mapping")({
  head: () => ({
    meta: [
      { title: "Pincode Mapping — PostRoute AI" },
      {
        name: "description",
        content:
          "Current and historical PIN code to delivery post office mappings, versions and detected conflicts.",
      },
      { property: "og:title", content: "Pincode Mapping — PostRoute AI" },
      { property: "og:description", content: "Manage current and historical postal mappings." },
    ],
  }),
  component: MappingPage,
});

function MappingPage() {
  const query = useQuery({ queryKey: ["mapping"], queryFn: getMappingHistory });
  const [search, setSearch] = useState("");
  const [changeType, setChangeType] = useState("all");
  const [view, setView] = useState<"current" | "historical">("current");
  const [selected, setSelected] = useState<MappingChange | null>(null);

  const all = query.data ?? [];
  const rows = useMemo(() => {
    const term = search.trim().toLowerCase();
    return all.filter(
      (m) =>
        (view === "current" ? m.status === "active" : m.status === "superseded") &&
        (!term || m.pincode.includes(term) || m.postOffice.toLowerCase().includes(term)) &&
        (changeType === "all" || m.changeType === changeType),
    );
  }, [all, search, changeType, view]);

  const columns: Column<MappingChange>[] = [
    { key: "pin", header: "PIN", render: (m) => <span className="tabular font-medium">{m.pincode}</span> },
    { key: "po", header: "Post Office", render: (m) => m.postOffice },
    { key: "region", header: "Region", render: (m) => m.region },
    { key: "version", header: "Mapping Version", render: (m) => <Pill tone="primary">{m.version}</Pill> },
    { key: "from", header: "Effective From", render: (m) => formatDate(m.effectiveFrom) },
    { key: "status", header: "Status", render: (m) => <StatusBadge status={m.status} /> },
    { key: "type", header: "Change Type", render: (m) => <StatusBadge status={m.changeType} /> },
    {
      key: "actions",
      header: "Actions",
      align: "right",
      render: (m) => (
        <Button
          size="sm"
          variant="outline"
          onClick={(e) => {
            e.stopPropagation();
            setSelected(m);
          }}
        >
          Details
        </Button>
      ),
    },
  ];

  const versions = [
    { version: "V1", title: "Original Mapping", date: "10 Apr 2024" },
    { version: "V2", title: "Regional Update", date: "21 May 2025" },
    { version: "V3", title: "Post Office Merge", date: "01 Aug 2026" },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        title="Pincode Mapping"
        subtitle="Manage current and historical postal mappings"
        actions={<Pill tone="primary">Mapping Version: V3</Pill>}
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <KpiCard label="Active PIN Codes" value={String(all.filter((m) => m.status === "active").length)} support="Currently in service" />
        <KpiCard label="Recent Mapping Changes" value="3" support="Last 30 days" tone="warning" />
        <KpiCard label="Merged Codes" value={String(all.filter((m) => m.changeType === "merged").length)} support="Beats consolidated" tone="info" />
        <KpiCard label="Conflicts Detected" value="2" support="Requires operator review" tone="warning" />
      </div>

      <div className="inline-flex rounded-lg border border-border bg-surface p-1">
        {(["current", "historical"] as const).map((option) => (
          <button
            key={option}
            type="button"
            aria-pressed={view === option}
            onClick={() => setView(option)}
            className={`rounded-md px-4 py-1.5 text-sm font-medium transition-colors ${
              view === option
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {option === "current" ? "Current Mapping" : "Historical Mapping"}
          </button>
        ))}
      </div>

      <FilterBar>
        <SearchBar
          label="Search mappings by PIN or post office"
          placeholder="Search PIN or post office…"
          value={search}
          onChange={setSearch}
        />
        <FilterSelect
          label="Change Type"
          value={changeType}
          onChange={setChangeType}
          options={Object.entries(labels.changeType).map(([value, label]) => ({ value, label }))}
        />
      </FilterBar>

      <DataTable
        columns={columns}
        rows={rows}
        rowKey={(m) => m.id}
        loading={query.isLoading}
        error={query.error ? (query.error as Error).message : null}
        onRetry={() => query.refetch()}
        onRowClick={(m) => setSelected(m)}
        emptyTitle="No mapping records in this view"
        caption="Pincode mapping table"
      />

      <Panel title="Mapping History" description="How the PIN to post office mapping evolved" accent>
        <ol className="grid gap-4 md:grid-cols-3">
          {versions.map((v, i) => (
            <li key={v.version} className="relative rounded-lg border border-border bg-surface p-4">
              <div className="flex items-center gap-2">
                <span className="flex size-8 items-center justify-center rounded-md bg-primary text-sm font-semibold text-primary-foreground">
                  {v.version}
                </span>
                <div>
                  <p className="text-sm font-semibold">{v.title}</p>
                  <p className="text-xs text-muted-foreground">{v.date}</p>
                </div>
              </div>
              <ul className="mt-3 space-y-1 text-xs text-muted-foreground">
                {all
                  .filter((m) => m.version === v.version)
                  .slice(0, 3)
                  .map((m) => (
                    <li key={m.id} className="flex items-center gap-1.5">
                      <History className="size-3.5 shrink-0" aria-hidden />
                      <span className="tabular">{m.pincode}</span> · {m.postOffice} ·{" "}
                      {labels.changeType[m.changeType]}
                    </li>
                  ))}
              </ul>
              {i < versions.length - 1 && (
                <ArrowRight
                  className="absolute top-1/2 -right-3 hidden size-4 text-muted-foreground md:block"
                  aria-hidden
                />
              )}
            </li>
          ))}
        </ol>
      </Panel>

      <Sheet open={Boolean(selected)} onOpenChange={(open) => !open && setSelected(null)}>
        <SheetContent className="w-full overflow-y-auto sm:max-w-lg">
          <SheetHeader>
            <SheetTitle>Mapping Change Details</SheetTitle>
            <SheetDescription>
              {selected ? `${selected.pincode} · ${selected.version}` : ""}
            </SheetDescription>
          </SheetHeader>
          {selected && (
            <div className="space-y-4 px-4 pb-6">
              <FieldRow label="Previous mapping" value={selected.previousMapping} />
              <FieldRow label="New mapping" value={selected.newMapping} />
              <FieldRow label="Effective date" value={formatDate(selected.effectiveFrom)} />
              <FieldRow label="Change type" value={<StatusBadge status={selected.changeType} />} />
              <div>
                <p className="text-xs tracking-wide text-muted-foreground uppercase">Change reason</p>
                <p className="mt-1 text-sm">{selected.reason}</p>
              </div>
              <div>
                <p className="text-xs tracking-wide text-muted-foreground uppercase">
                  Affected post offices
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {selected.affectedPostOffices.map((po) => (
                    <Pill key={po}>{po}</Pill>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs tracking-wide text-muted-foreground uppercase">
                  Affected PIN codes
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {selected.affectedPincodes.map((pin) => (
                    <Pill key={pin} tone="primary">
                      {pin}
                    </Pill>
                  ))}
                </div>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}
