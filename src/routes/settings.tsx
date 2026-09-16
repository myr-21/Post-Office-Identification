import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Pill } from "@/components/postroute/badges";
import { FieldRow, PageHeader, Panel } from "@/components/postroute/primitives";
import { currentOperator } from "@/data/mock";
import { formatDateTime } from "@/lib/format";

export const Route = createFileRoute("/settings")({
  head: () => ({
    meta: [
      { title: "Operator Profile & Settings — PostRoute AI" },
      {
        name: "description",
        content: "Operator profile, workstation appearance, density, notification and shortcut preferences.",
      },
      { property: "og:title", content: "Operator Profile & Settings — PostRoute AI" },
      { property: "og:description", content: "Workstation preferences for post office operators." },
    ],
  }),
  component: SettingsPage,
});

function SettingsPage() {
  const [density, setDensity] = useState("comfortable");
  const [appearance, setAppearance] = useState("light");
  const [language, setLanguage] = useState("en-IN");
  const [reviewAlerts, setReviewAlerts] = useState(true);
  const [mappingAlerts, setMappingAlerts] = useState(true);
  const [lowConfidence, setLowConfidence] = useState(false);
  const [stripedRows, setStripedRows] = useState(true);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Operator Profile & Settings"
        subtitle="Workstation preferences — demonstration only, no sign-in is configured"
      />

      <div className="grid gap-6 xl:grid-cols-3">
        <Panel title="Profile" accent>
          <div className="mb-4 flex items-center gap-3">
            <span className="flex size-12 items-center justify-center rounded-full bg-primary-soft text-base font-semibold text-primary-dark">
              MP
            </span>
            <div>
              <p className="text-base font-semibold">{currentOperator.name}</p>
              <Pill tone="success">Online</Pill>
            </div>
          </div>
          <FieldRow label="Role" value={currentOperator.role} />
          <FieldRow label="Post Office" value={currentOperator.postOffice} />
          <FieldRow label="Employee ID" value={currentOperator.employeeId} />
          <FieldRow label="Last active" value={formatDateTime(currentOperator.lastActive)} />
        </Panel>

        <Panel title="Appearance & Density" className="xl:col-span-2">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor="appearance">Appearance</Label>
              <Select value={appearance} onValueChange={setAppearance}>
                <SelectTrigger id="appearance">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light (recommended)</SelectItem>
                  <SelectItem value="system">Match system</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="density">Density</Label>
              <Select value={density} onValueChange={setDensity}>
                <SelectTrigger id="density">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="comfortable">Comfortable</SelectItem>
                  <SelectItem value="compact">Compact</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="language">Language</Label>
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger id="language">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en-IN">English (India)</SelectItem>
                  <SelectItem value="hi-IN">हिन्दी — coming soon</SelectItem>
                  <SelectItem value="mr-IN">मराठी — coming soon</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-border px-3 py-2">
              <Label htmlFor="striped">Striped table rows</Label>
              <Switch id="striped" checked={stripedRows} onCheckedChange={setStripedRows} />
            </div>
          </div>
        </Panel>

        <Panel title="Notifications" className="xl:col-span-2">
          <div className="space-y-3">
            <div className="flex items-center justify-between rounded-lg border border-border px-3 py-2.5">
              <Label htmlFor="n-review">New review required</Label>
              <Switch id="n-review" checked={reviewAlerts} onCheckedChange={setReviewAlerts} />
            </div>
            <div className="flex items-center justify-between rounded-lg border border-border px-3 py-2.5">
              <Label htmlFor="n-mapping">Mapping change detected</Label>
              <Switch id="n-mapping" checked={mappingAlerts} onCheckedChange={setMappingAlerts} />
            </div>
            <div className="flex items-center justify-between rounded-lg border border-border px-3 py-2.5">
              <Label htmlFor="n-low">Low-confidence prediction</Label>
              <Switch id="n-low" checked={lowConfidence} onCheckedChange={setLowConfidence} />
            </div>
          </div>
          <Button className="mt-4" onClick={() => toast.success("Preferences saved for this session")}>
            Save preferences
          </Button>
        </Panel>

        <Panel title="Keyboard Shortcuts">
          <ul className="space-y-2 text-sm">
            {[
              ["Ctrl + Enter", "Run prediction"],
              ["Ctrl + K", "Focus search"],
              ["G then D", "Go to dashboard"],
              ["G then R", "Go to review queue"],
              ["Esc", "Close panel"],
            ].map(([keys, action]) => (
              <li key={keys} className="flex items-center justify-between gap-3">
                <span className="text-muted-foreground">{action}</span>
                <kbd className="rounded border border-border bg-muted px-2 py-0.5 text-xs">{keys}</kbd>
              </li>
            ))}
          </ul>
        </Panel>
      </div>
    </div>
  );
}
