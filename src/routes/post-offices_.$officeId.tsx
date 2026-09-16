import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ConfidenceBadge, StatusBadge } from "@/components/postroute/badges";
import { FieldRow, PageHeader, Panel } from "@/components/postroute/primitives";
import { EmptyState, ErrorState, LoadingState } from "@/components/postroute/states";
import { DataTable, type Column } from "@/components/postroute/data-table";
import { formatDate, formatDateTime } from "@/lib/format";
import { getMappingHistory, getPostOffice, getPredictions } from "@/services/postroute";
import type { MappingChange, PredictionResult } from "@/types";

export const Route = createFileRoute("/post-offices_/$officeId")({
  head: () => ({
    meta: [
      { title: "Post Office Detail — PostRoute AI" },
      {
        name: "description",
        content: "Location, PIN mapping history and recent predictions for a delivery post office.",
      },
      { property: "og:title", content: "Post Office Detail — PostRoute AI" },
      { property: "og:description", content: "Mapping history and prediction activity per office." },
    ],
  }),
  component: PostOfficeDetailPage,
});

function PostOfficeDetailPage() {
  const { officeId } = Route.useParams();
  const query = useQuery({ queryKey: ["post-office", officeId], queryFn: () => getPostOffice(officeId) });
  const mapping = useQuery({ queryKey: ["mapping"], queryFn: getMappingHistory });
  const preds = useQuery({ queryKey: ["predictions"], queryFn: getPredictions });

  if (query.isLoading) return <LoadingState label="Loading post office…" rows={5} />;
  if (query.error || !query.data)
    return (
      <ErrorState
        title="Post office not found"
        description={(query.error as Error | undefined)?.message ?? "No such office."}
        onRetry={() => query.refetch()}
      />
    );

  const office = query.data;
  const history = (mapping.data ?? []).filter(
    (m) => m.pincode === office.pincode || m.affectedPostOffices.includes(office.name),
  );
  const recent = (preds.data ?? []).filter((p) => p.postOffice === office.name).slice(0, 6);

  const historyColumns: Column<MappingChange>[] = [
    { key: "version", header: "Version", render: (m) => m.version },
    { key: "type", header: "Change Type", render: (m) => <StatusBadge status={m.changeType} /> },
    { key: "from", header: "Effective From", render: (m) => formatDate(m.effectiveFrom) },
    { key: "mapping", header: "New Mapping", render: (m) => m.newMapping },
  ];

  const predColumns: Column<PredictionResult>[] = [
    { key: "time", header: "Time", render: (p) => <span className="tabular text-xs">{formatDateTime(p.createdAt)}</span> },
    { key: "address", header: "Address", render: (p) => <span className="line-clamp-1">{p.rawAddress}</span> },
    { key: "pin", header: "PIN", render: (p) => <span className="tabular">{p.pincode}</span> },
    { key: "conf", header: "Confidence", render: (p) => <ConfidenceBadge value={p.confidence} showLabel={false} /> },
  ];

  return (
    <div className="space-y-6">
      <Button variant="ghost" size="sm" asChild className="-ml-2">
        <Link to="/post-offices">
          <ArrowLeft className="size-4" aria-hidden /> Back to post offices
        </Link>
      </Button>

      <PageHeader
        title={office.name}
        subtitle={`${office.district}, ${office.state} · PIN ${office.pincode}`}
        actions={<StatusBadge status={office.status} />}
      />

      <div className="grid gap-6 xl:grid-cols-3">
        <Panel title="Office Information" className="xl:col-span-2">
          <div className="grid gap-x-8 sm:grid-cols-2">
            <div>
              <FieldRow label="Post Office" value={office.name} />
              <FieldRow label="PIN" value={<span className="tabular">{office.pincode}</span>} />
              <FieldRow label="District" value={office.district} />
              <FieldRow label="State" value={office.state} />
            </div>
            <div>
              <FieldRow label="Region" value={office.region} />
              <FieldRow label="Division" value={office.division} />
              <FieldRow label="Mapping Version" value={office.mappingVersion} />
              <FieldRow
                label="Coordinates"
                value={
                  <span className="tabular">
                    {office.latitude.toFixed(4)}, {office.longitude.toFixed(4)}
                  </span>
                }
              />
            </div>
          </div>
        </Panel>

        <Panel title="Location">
          <div className="flex h-48 flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-border bg-surface text-center">
            <MapPin className="size-6 text-primary" aria-hidden />
            <p className="text-sm font-medium">Map preview unavailable</p>
            <p className="tabular text-xs text-muted-foreground">
              {office.latitude.toFixed(4)}, {office.longitude.toFixed(4)}
            </p>
          </div>
        </Panel>
      </div>

      <Panel title="Mapping History" bodyClassName="p-4">
        {history.length === 0 ? (
          <EmptyState title="No mapping changes recorded" description="This office uses the baseline mapping." />
        ) : (
          <DataTable columns={historyColumns} rows={history} rowKey={(m) => m.id} dense caption="Mapping history" />
        )}
      </Panel>

      <Panel title="Recent Predictions" bodyClassName="p-4">
        {recent.length === 0 ? (
          <EmptyState
            title="No recent predictions"
            description="No addresses have been routed to this office in the current window."
          />
        ) : (
          <DataTable columns={predColumns} rows={recent} rowKey={(p) => p.id} dense caption="Recent predictions" />
        )}
      </Panel>
    </div>
  );
}
