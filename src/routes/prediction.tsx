import { useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useMutation } from "@tanstack/react-query";
import {
  ChevronDown,
  CircleCheck,
  CircleX,
  Loader2,
  MapPin,
  Sparkles,
  Trash2,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ConfidenceBadge, ConfidenceBar, Pill } from "@/components/postroute/badges";
import { EntityChip, PageHeader, Panel } from "@/components/postroute/primitives";
import { EmptyState, ErrorState } from "@/components/postroute/states";
import { districtsByState, states } from "@/data/mock";
import { confidenceLevel, formatPercent } from "@/lib/format";
import { predictAddress } from "@/services/postroute";
import type { AddressInput, PredictionResult, ProcessingMode } from "@/types";

export const Route = createFileRoute("/prediction")({
  head: () => ({
    meta: [
      { title: "Address Prediction — PostRoute AI" },
      {
        name: "description",
        content:
          "Enter an incomplete or noisy postal address and get the most probable delivery post office, PIN code and confidence.",
      },
      { property: "og:title", content: "Address Prediction — PostRoute AI" },
      {
        property: "og:description",
        content: "Identify the most probable delivery post office and PIN code from any address.",
      },
    ],
  }),
  component: PredictionPage,
});

function PredictionPage() {
  const navigate = useNavigate();
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [pincode, setPincode] = useState("");
  const [mode, setMode] = useState<ProcessingMode>("automatic");

  const mutation = useMutation({
    mutationFn: (input: AddressInput) => predictAddress(input),
  });

  const submit = () => {
    const payload: AddressInput = {
      rawAddress: address,
      mode,
      ...(state ? { state } : {}),
      ...(district ? { district } : {}),
      ...(pincode ? { pincode } : {}),
    };
    mutation.mutate(payload);
  };

  const clear = () => {
    setAddress("");
    setState("");
    setDistrict("");
    setPincode("");
    mutation.reset();
  };

  const result = mutation.data;

  return (
    <div className="space-y-6">
      <PageHeader
        title="Address Prediction"
        subtitle="Identify the most probable delivery post office and PIN code"
      />

      <div className="grid gap-6 xl:grid-cols-[minmax(0,420px)_minmax(0,1fr)]">
        <div className="space-y-6">
          <Panel title="Address Input" accent>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                submit();
              }}
              className="space-y-4"
            >
              <div className="space-y-1.5">
                <Label htmlFor="address">Postal Address</Label>
                <Textarea
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
                      e.preventDefault();
                      submit();
                    }
                  }}
                  rows={5}
                  placeholder="Enter or paste a postal address..."
                  className="resize-y bg-card text-base"
                  aria-describedby="address-help"
                />
                <p id="address-help" className="text-xs text-muted-foreground">
                  Example: Flat 302, Baner Road, near Balewadi, Pune ·{" "}
                  <kbd className="rounded border border-border bg-muted px-1 py-0.5 text-[10px]">
                    Ctrl
                  </kbd>{" "}
                  +{" "}
                  <kbd className="rounded border border-border bg-muted px-1 py-0.5 text-[10px]">
                    Enter
                  </kbd>{" "}
                  to predict
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="state">Region (optional)</Label>
                  <Select
                    value={state}
                    onValueChange={(v) => {
                      setState(v);
                      setDistrict("");
                    }}
                  >
                    <SelectTrigger id="state" className="bg-card">
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                    <SelectContent>
                      {states.map((s) => (
                        <SelectItem key={s} value={s}>
                          {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="district">District (optional)</Label>
                  <Select value={district} onValueChange={setDistrict} disabled={!state}>
                    <SelectTrigger id="district" className="bg-card">
                      <SelectValue placeholder={state ? "Select district" : "Select state first"} />
                    </SelectTrigger>
                    <SelectContent>
                      {(districtsByState[state] ?? []).map((d) => (
                        <SelectItem key={d} value={d}>
                          {d}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="pincode">PIN (optional)</Label>
                <Input
                  id="pincode"
                  inputMode="numeric"
                  maxLength={6}
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value.replace(/\D/g, ""))}
                  placeholder="411045"
                  className="tabular bg-card"
                />
              </div>

              <fieldset className="space-y-1.5">
                <legend className="text-sm font-medium">Processing Mode</legend>
                <div className="inline-flex rounded-lg border border-border bg-surface p-1">
                  {(["automatic", "assisted"] as ProcessingMode[]).map((option) => (
                    <button
                      key={option}
                      type="button"
                      aria-pressed={mode === option}
                      onClick={() => setMode(option)}
                      className={`rounded-md px-4 py-1.5 text-sm font-medium capitalize transition-colors ${
                        mode === option
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">
                  {mode === "automatic"
                    ? "High-confidence results are routed without operator input."
                    : "Every result is presented for operator confirmation."}
                </p>
              </fieldset>

              <div className="flex flex-wrap gap-2 pt-1">
                <Button type="submit" disabled={!address.trim() || mutation.isPending}>
                  {mutation.isPending ? (
                    <>
                      <Loader2 className="size-4 animate-spin" aria-hidden /> Predicting…
                    </>
                  ) : (
                    <>
                      <Sparkles className="size-4" aria-hidden /> Predict Address
                    </>
                  )}
                </Button>
                <Button type="button" variant="outline" onClick={clear}>
                  <Trash2 className="size-4" aria-hidden /> Clear
                </Button>
              </div>
            </form>
          </Panel>

          {result && <ProcessingPanel result={result} />}
        </div>

        <div className="space-y-6">
          {mutation.isPending && (
            <Panel title="Prediction Result">
              <div className="flex flex-col items-center gap-3 py-16 text-center">
                <Loader2 className="size-7 animate-spin text-primary" aria-hidden />
                <p className="text-sm font-medium">Analyzing address…</p>
                <p className="text-sm text-muted-foreground">
                  Normalizing tokens, matching localities and validating mapping V3.
                </p>
              </div>
            </Panel>
          )}

          {mutation.isError && !mutation.isPending && (
            <Panel title="Prediction Result">
              <ErrorState
                title="Prediction failed"
                description={(mutation.error as Error).message}
                onRetry={submit}
              />
            </Panel>
          )}

          {!mutation.isPending && !mutation.isError && !result && (
            <Panel title="Prediction Result">
              <EmptyState
                title="Prediction results will appear here"
                description="Enter a postal address on the left and run a prediction to see the delivery post office, confidence and alternative matches."
                icon={<MapPin className="size-5" aria-hidden />}
              />
            </Panel>
          )}

          {result && !mutation.isPending && <ResultView result={result} onReset={clear} navigateToReview={() => navigate({ to: "/review" })} />}
        </div>
      </div>
    </div>
  );
}

function ResultView({
  result,
  onReset,
  navigateToReview,
}: {
  result: PredictionResult;
  onReset: () => void;
  navigateToReview: () => void;
}) {
  const level = confidenceLevel(result.confidence);
  const levelLabel =
    level === "high" ? "High Confidence" : level === "medium" ? "Medium Confidence" : "Low Confidence";

  return (
    <div className="space-y-6">
      <Panel
        title="Prediction Result"
        accent
        actions={<Pill tone={level === "high" ? "success" : level === "medium" ? "warning" : "error"}>{levelLabel}</Pill>}
      >
        {level === "low" && (
          <p className="mb-4 rounded-md border border-warning/30 bg-warning-soft px-3 py-2 text-sm text-warning">
            Manual review required — confidence is below the auto-routing threshold of 70%.
          </p>
        )}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border border-border bg-surface p-4 sm:col-span-2">
            <p className="text-xs tracking-wide text-muted-foreground uppercase">Predicted PIN</p>
            <p className="tabular mt-1 text-4xl font-semibold text-primary-dark">{result.pincode}</p>
            <p className="mt-2 text-sm font-medium text-foreground">{result.postOffice}</p>
          </div>
          <div className="rounded-lg border border-border bg-surface p-4">
            <p className="text-xs tracking-wide text-muted-foreground uppercase">District</p>
            <p className="mt-1 text-lg font-semibold">{result.district}</p>
            <p className="mt-3 text-xs tracking-wide text-muted-foreground uppercase">State</p>
            <p className="mt-1 text-lg font-semibold">{result.state}</p>
          </div>
          <div className="rounded-lg border border-border bg-surface p-4">
            <p className="text-xs tracking-wide text-muted-foreground uppercase">Confidence</p>
            <p className="tabular mt-1 text-3xl font-semibold">{formatPercent(result.confidence)}</p>
            <ConfidenceBar value={result.confidence} className="mt-3" />
            <p className="mt-2 text-xs text-muted-foreground">{levelLabel}</p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          <Button
            onClick={() =>
              toast.success("Routing confirmed", {
                description: `${result.pincode} · ${result.postOffice}`,
              })
            }
          >
            <CircleCheck className="size-4" aria-hidden /> Confirm Routing
          </Button>
          <Button variant="outline" onClick={navigateToReview}>
            Send to Review
          </Button>
          <Button variant="ghost" onClick={onReset}>
            <CircleX className="size-4" aria-hidden /> Try Another Address
          </Button>
        </div>
      </Panel>

      <Panel title="Alternative Matches" bodyClassName="p-0">
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
            {result.candidates.map((c) => (
              <tr key={`${c.rank}-${c.postOffice}`} className="border-b border-border/70 last:border-0">
                <td className="tabular px-5 py-3">{c.rank}</td>
                <td className="px-5 py-3 font-medium">{c.postOffice}</td>
                <td className="tabular px-5 py-3">{c.pincode}</td>
                <td className="tabular px-5 py-3 text-right">{formatPercent(c.confidence)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Panel>

      <Panel
        title="Prediction Explanation"
        description="Interpretable factors — full model reasoning will come from the backend."
      >
        <ul className="space-y-2">
          {result.explanation.map((factor) => (
            <li key={factor.label} className="flex items-start gap-2.5 text-sm">
              {factor.matched ? (
                <CircleCheck className="mt-0.5 size-4 shrink-0 text-success" aria-hidden />
              ) : (
                <CircleX className="mt-0.5 size-4 shrink-0 text-muted-foreground" aria-hidden />
              )}
              <span>
                <span className="font-medium text-foreground">{factor.label}</span>
                <span className="text-muted-foreground"> — {factor.detail}</span>
                <span className="sr-only">{factor.matched ? " (matched)" : " (not matched)"}</span>
              </span>
            </li>
          ))}
        </ul>
      </Panel>
    </div>
  );
}

function ProcessingPanel({ result }: { result: PredictionResult }) {
  const [open, setOpen] = useState(true);
  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <div className="rounded-xl border border-border bg-card shadow-card">
        <CollapsibleTrigger className="flex w-full items-center justify-between px-5 py-4 text-left">
          <span className="text-base font-semibold">Address Processing</span>
          <ChevronDown
            className={`size-4 transition-transform ${open ? "rotate-180" : ""}`}
            aria-hidden
          />
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="space-y-4 border-t border-border px-5 py-4">
            <div>
              <p className="text-xs tracking-wide text-muted-foreground uppercase">Raw input</p>
              <p className="mt-1 rounded-md bg-muted px-3 py-2 font-mono text-xs break-words">
                {result.normalization.raw}
              </p>
            </div>
            <div>
              <p className="text-xs tracking-wide text-muted-foreground uppercase">Normalized</p>
              <p className="mt-1 rounded-md bg-primary-soft px-3 py-2 text-sm text-primary-dark">
                {result.normalization.normalized}
              </p>
            </div>
            <div>
              <p className="text-xs tracking-wide text-muted-foreground uppercase">
                Detected components
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {result.normalization.components.map((c) => (
                  <EntityChip key={`${c.type}-${c.value}`} label={c.label} value={c.value} />
                ))}
              </div>
            </div>
          </div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
}
