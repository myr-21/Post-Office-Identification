import { useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useMutation, useQuery } from "@tanstack/react-query";
import { ArrowLeft, CircleCheck, CircleX, PencilLine, TriangleAlert } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ConfidenceBadge, ConfidenceBar, Pill, PriorityBadge } from "@/components/postroute/badges";
import { FieldRow, PageHeader, Panel } from "@/components/postroute/primitives";
import { ErrorState, LoadingState } from "@/components/postroute/states";
import { formatDateTime, formatPercent, labels } from "@/lib/format";
import { getReviewItem, submitReviewDecision } from "@/services/postroute";

export const Route = createFileRoute("/review_/$reviewId")({
  head: () => ({
    meta: [
      { title: "Review Detail — PostRoute AI" },
      {
        name: "description",
        content: "Verify, correct, reject or escalate a single address prediction.",
      },
      { property: "og:title", content: "Review Detail — PostRoute AI" },
      { property: "og:description", content: "Operator verification for a single prediction." },
    ],
  }),
  component: ReviewDetailPage,
});

function ReviewDetailPage() {
  const { reviewId } = Route.useParams();
  const navigate = useNavigate();
  const query = useQuery({
    queryKey: ["review-item", reviewId],
    queryFn: () => getReviewItem(reviewId),
  });
  const [correcting, setCorrecting] = useState(false);
  const [pin, setPin] = useState("");
  const [office, setOffice] = useState("");
  const [reason, setReason] = useState("");
  const [notes, setNotes] = useState("");
  const [resolved, setResolved] = useState<string | null>(null);

  const mutation = useMutation({
    mutationFn: submitReviewDecision,
    onSuccess: (_data, variables) => {
      const map = {
        approve: "Prediction approved",
        correct: "Correction saved",
        reject: "Prediction rejected",
        escalate: "Escalated to supervisor",
      } as const;
      setResolved(map[variables.decision]);
      toast.success(map[variables.decision], { description: `Review ${reviewId} updated.` });
    },
  });

  if (query.isLoading) return <LoadingState label="Loading review…" rows={6} />;
  if (query.error || !query.data)
    return (
      <ErrorState
        title="Review not found"
        description={(query.error as Error | undefined)?.message ?? "This review item does not exist."}
        onRetry={() => query.refetch()}
      />
    );

  const item = query.data;

  return (
    <div className="space-y-6">
      <Button variant="ghost" size="sm" asChild className="-ml-2">
        <Link to="/review">
          <ArrowLeft className="size-4" aria-hidden /> Back to review queue
        </Link>
      </Button>

      <PageHeader
        title={`Review ${item.id}`}
        subtitle={`${item.parcelId} · created ${formatDateTime(item.createdAt)}`}
        actions={
          <div className="flex items-center gap-2">
            <PriorityBadge priority={item.priority} />
            <Pill tone="warning">{labels.reviewReason[item.reason]}</Pill>
          </div>
        }
      />

      {resolved && (
        <p className="flex items-center gap-2 rounded-md border border-success/30 bg-success-soft px-3 py-2 text-sm text-success">
          <CircleCheck className="size-4" aria-hidden /> {resolved}. This item has been removed from
          the pending queue (demonstration only).
        </p>
      )}

      <div className="grid gap-6 xl:grid-cols-3">
        <div className="space-y-6 xl:col-span-2">
          <Panel title="Address">
            <FieldRow label="Original address" value={<span className="font-mono text-xs">{item.rawAddress}</span>} />
            <FieldRow label="Normalized address" value={item.normalizedAddress} />
            <FieldRow label="District / State" value={`${item.district}, ${item.state}`} />
          </Panel>

          <Panel title="Prediction" accent>
            <div className="grid gap-4 sm:grid-cols-3">
              <div>
                <p className="text-xs tracking-wide text-muted-foreground uppercase">PIN</p>
                <p className="tabular mt-1 text-3xl font-semibold text-primary-dark">{item.pincode}</p>
              </div>
              <div>
                <p className="text-xs tracking-wide text-muted-foreground uppercase">Post Office</p>
                <p className="mt-1 text-lg font-semibold">{item.postOffice}</p>
              </div>
              <div>
                <p className="text-xs tracking-wide text-muted-foreground uppercase">Confidence</p>
                <p className="tabular mt-1 text-2xl font-semibold">{formatPercent(item.confidence)}</p>
                <ConfidenceBar value={item.confidence} className="mt-2" />
              </div>
            </div>
          </Panel>

          <Panel title="Candidate Matches" bodyClassName="p-0">
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
                {item.candidates.map((c) => (
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

          <Panel title="Mapping Information">
            <FieldRow label="Current mapping" value={item.mapping.current} />
            <FieldRow label="Historical mapping" value={item.mapping.historical} />
            <FieldRow
              label="Potential conflict"
              value={
                item.mapping.conflict ? (
                  <span className="flex items-center gap-1.5 text-warning">
                    <TriangleAlert className="size-4" aria-hidden /> {item.mapping.conflict}
                  </span>
                ) : (
                  <span className="text-muted-foreground">None detected</span>
                )
              }
            />
          </Panel>
        </div>

        <div className="space-y-6">
          <Panel title="Operator Decision" accent>
            <div className="grid gap-2">
              <Button
                disabled={mutation.isPending || Boolean(resolved)}
                onClick={() => mutation.mutate({ id: item.id, decision: "approve" })}
              >
                <CircleCheck className="size-4" aria-hidden /> Approve Prediction
              </Button>
              <Button
                variant="outline"
                disabled={Boolean(resolved)}
                onClick={() => setCorrecting((v) => !v)}
                aria-expanded={correcting}
              >
                <PencilLine className="size-4" aria-hidden /> Correct Prediction
              </Button>
              <Button
                variant="outline"
                disabled={mutation.isPending || Boolean(resolved)}
                onClick={() => mutation.mutate({ id: item.id, decision: "reject" })}
              >
                <CircleX className="size-4" aria-hidden /> Reject
              </Button>
              <Button
                variant="ghost"
                disabled={mutation.isPending || Boolean(resolved)}
                onClick={() => mutation.mutate({ id: item.id, decision: "escalate" })}
              >
                <TriangleAlert className="size-4" aria-hidden /> Escalate
              </Button>
            </div>

            {correcting && (
              <form
                className="mt-5 space-y-3 border-t border-border pt-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  mutation.mutate({
                    id: item.id,
                    decision: "correct",
                    correctedPincode: pin,
                    correctedPostOffice: office,
                    reason,
                    notes,
                  });
                  setCorrecting(false);
                }}
              >
                <div className="space-y-1.5">
                  <Label htmlFor="correct-pin">Correct PIN</Label>
                  <Input
                    id="correct-pin"
                    required
                    inputMode="numeric"
                    maxLength={6}
                    value={pin}
                    onChange={(e) => setPin(e.target.value.replace(/\D/g, ""))}
                    className="tabular"
                    placeholder="411045"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="correct-office">Correct Post Office</Label>
                  <Input
                    id="correct-office"
                    required
                    value={office}
                    onChange={(e) => setOffice(e.target.value)}
                    placeholder="Baner S.O"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="correct-reason">Correction Reason</Label>
                  <Select value={reason} onValueChange={setReason}>
                    <SelectTrigger id="correct-reason">
                      <SelectValue placeholder="Select a reason" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wrong_locality">Wrong locality matched</SelectItem>
                      <SelectItem value="outdated_mapping">Outdated mapping</SelectItem>
                      <SelectItem value="incomplete_address">Incomplete address</SelectItem>
                      <SelectItem value="operator_knowledge">Local operator knowledge</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="correct-notes">Notes</Label>
                  <Textarea
                    id="correct-notes"
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Optional context for the supervisor"
                  />
                </div>
                <Button type="submit" className="w-full" disabled={mutation.isPending}>
                  Save Correction
                </Button>
              </form>
            )}
          </Panel>

          <Panel title="Assignment">
            <FieldRow label="Operator" value={item.operator} />
            <FieldRow label="Status" value={labels.reviewStatus[item.status]} />
            <FieldRow label="Parcel" value={item.parcelId} />
            <Button
              variant="outline"
              className="mt-3 w-full"
              onClick={() => navigate({ to: "/parcels" })}
            >
              Open parcel routing
            </Button>
          </Panel>
        </div>
      </div>
    </div>
  );
}
