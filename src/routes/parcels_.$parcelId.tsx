import { createFileRoute, Link } from "@tanstack/react-router";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { ArrowLeft, RefreshCw } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ConfidenceBadge, ConfidenceBar, StatusBadge } from "@/components/postroute/badges";
import { FieldRow, PageHeader, Panel } from "@/components/postroute/primitives";
import { ErrorState, LoadingState } from "@/components/postroute/states";
import { Timeline, type TimelineStep } from "@/components/postroute/timeline";
import { formatDateTime, formatPercent, labels } from "@/lib/format";
import { getParcel, updateParcelStatus } from "@/services/postroute";
import type { ParcelStatus } from "@/types";

export const Route = createFileRoute("/parcels_/$parcelId")({
  head: () => ({
    meta: [
      { title: "Parcel Detail — PostRoute AI" },
      {
        name: "description",
        content: "Address, prediction, confidence and full routing timeline for a single parcel.",
      },
      { property: "og:title", content: "Parcel Detail — PostRoute AI" },
      { property: "og:description", content: "Routing timeline and prediction for one parcel." },
    ],
  }),
  component: ParcelDetailPage,
});

function ParcelDetailPage() {
  const { parcelId } = Route.useParams();
  const query = useQuery({ queryKey: ["parcel", parcelId], queryFn: () => getParcel(parcelId) });
  const [nextStatus, setNextStatus] = useState<ParcelStatus | "">("");

  const mutation = useMutation({
    mutationFn: ({ status }: { status: ParcelStatus }) => updateParcelStatus(parcelId, status),
    onSuccess: (_d, v) =>
      toast.success("Parcel status updated", {
        description: `${parcelId} → ${labels.parcelStatus[v.status]}`,
      }),
  });

  if (query.isLoading) return <LoadingState label="Loading parcel…" rows={6} />;
  if (query.error || !query.data)
    return (
      <ErrorState
        title="Parcel not found"
        description={(query.error as Error | undefined)?.message ?? "No such parcel."}
        onRetry={() => query.refetch()}
      />
    );

  const parcel = query.data;
  const currentIndex = parcel.timeline.findIndex((t) => t.status === parcel.status);
  const steps: TimelineStep[] = parcel.timeline.map((event, index) => ({
    label: event.label,
    timestamp: event.timestamp ? formatDateTime(event.timestamp) : null,
    note: event.note,
    state: index < currentIndex ? "done" : index === currentIndex ? "current" : "pending",
  }));

  return (
    <div className="space-y-6">
      <Button variant="ghost" size="sm" asChild className="-ml-2">
        <Link to="/parcels">
          <ArrowLeft className="size-4" aria-hidden /> Back to parcels
        </Link>
      </Button>

      <PageHeader
        title={`Parcel ${parcel.id}`}
        subtitle={`Last updated ${formatDateTime(parcel.updatedAt)}`}
        actions={<StatusBadge status={parcel.status} />}
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        <Panel bodyClassName="p-4">
          <p className="text-xs tracking-wide text-muted-foreground uppercase">Current Status</p>
          <p className="mt-2 text-lg font-semibold">{labels.parcelStatus[parcel.status]}</p>
        </Panel>
        <Panel bodyClassName="p-4">
          <p className="text-xs tracking-wide text-muted-foreground uppercase">PIN</p>
          <p className="tabular mt-2 text-2xl font-semibold text-primary-dark">{parcel.pincode}</p>
        </Panel>
        <Panel bodyClassName="p-4">
          <p className="text-xs tracking-wide text-muted-foreground uppercase">Delivery Office</p>
          <p className="mt-2 text-lg font-semibold">{parcel.postOffice}</p>
        </Panel>
        <Panel bodyClassName="p-4">
          <p className="text-xs tracking-wide text-muted-foreground uppercase">Confidence</p>
          <p className="tabular mt-2 text-2xl font-semibold">{formatPercent(parcel.confidence)}</p>
          <ConfidenceBar value={parcel.confidence} className="mt-2" />
        </Panel>
        <Panel bodyClassName="p-4">
          <p className="text-xs tracking-wide text-muted-foreground uppercase">Assigned Operator</p>
          <p className="mt-2 text-lg font-semibold">{parcel.operator}</p>
        </Panel>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <div className="space-y-6 xl:col-span-2">
          <Panel title="Address">
            <FieldRow label="Raw address" value={<span className="font-mono text-xs">{parcel.rawAddress}</span>} />
            <FieldRow label="Normalized address" value={parcel.normalizedAddress} />
          </Panel>

          <Panel title="Prediction" bodyClassName="p-0">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-surface text-xs tracking-wide text-muted-foreground uppercase">
                  <th scope="col" className="px-5 py-2.5 text-left">Rank</th>
                  <th scope="col" className="px-5 py-2.5 text-left">Post Office</th>
                  <th scope="col" className="px-5 py-2.5 text-left">PIN</th>
                  <th scope="col" className="px-5 py-2.5 text-right">Confidence</th>
                </tr>
              </thead>
              <tbody>
                {parcel.candidates.map((c) => (
                  <tr key={c.rank} className="border-b border-border/70 last:border-0">
                    <td className="tabular px-5 py-3">{c.rank}</td>
                    <td className="px-5 py-3 font-medium">{c.postOffice}</td>
                    <td className="tabular px-5 py-3">{c.pincode}</td>
                    <td className="px-5 py-3 text-right">
                      <ConfidenceBadge value={c.confidence} showLabel={false} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Panel>
        </div>

        <div className="space-y-6">
          <Panel title="Routing Timeline" accent>
            <Timeline steps={steps} />
          </Panel>

          <Panel title="Update Status">
            <div className="space-y-3">
              <Select value={nextStatus} onValueChange={(v) => setNextStatus(v as ParcelStatus)}>
                <SelectTrigger aria-label="Select new parcel status">
                  <SelectValue placeholder="Select new status" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(labels.parcelStatus).map(([value, label]) => (
                    <SelectItem key={value} value={value}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button
                className="w-full"
                disabled={!nextStatus || mutation.isPending}
                onClick={() => nextStatus && mutation.mutate({ status: nextStatus })}
              >
                <RefreshCw className="size-4" aria-hidden /> Update Status
              </Button>
            </div>
          </Panel>
        </div>
      </div>
    </div>
  );
}
