import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { DemoNotice, KpiCard, PageHeader, Panel } from "@/components/postroute/primitives";
import { ErrorState, LoadingState } from "@/components/postroute/states";
import { getAnalytics } from "@/services/postroute";

export const Route = createFileRoute("/analytics")({
  head: () => ({
    meta: [
      { title: "Analytics & Model Performance — PostRoute AI" },
      {
        name: "description",
        content:
          "Top-k accuracy, precision, recall, confidence distribution and baseline model comparison for address prediction.",
      },
      { property: "og:title", content: "Analytics & Model Performance — PostRoute AI" },
      {
        property: "og:description",
        content: "Prediction quality metrics across address conditions and models.",
      },
    ],
  }),
  component: AnalyticsPage,
});

const CHART_COLORS = [
  "var(--color-chart-1)",
  "var(--color-chart-2)",
  "var(--color-chart-3)",
  "var(--color-chart-4)",
  "var(--color-chart-5)",
];

const axisProps = {
  stroke: "var(--color-muted-foreground)",
  fontSize: 12,
  tickLine: false,
  axisLine: false,
} as const;

const tooltipStyle = {
  contentStyle: {
    borderRadius: 10,
    border: "1px solid var(--color-border)",
    background: "var(--color-card)",
    fontSize: 12,
  },
} as const;

function AnalyticsPage() {
  const query = useQuery({ queryKey: ["analytics"], queryFn: getAnalytics });

  if (query.isLoading) return <LoadingState label="Loading model metrics…" rows={6} />;
  if (query.error || !query.data)
    return <ErrorState description={(query.error as Error).message} onRetry={() => query.refetch()} />;

  const data = query.data;

  return (
    <div className="space-y-6">
      <PageHeader
        title="Analytics & Model Performance"
        subtitle="Prediction quality across address conditions, confidence bands and model baselines"
      />

      <DemoNotice text="Demo metrics — these values are mock figures and will be replaced by live model evaluation results from the backend." />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {data.metrics.map((m) => (
          <KpiCard
            key={m.key}
            label={m.label}
            value={m.value}
            support={m.delta ?? m.hint ?? "Current evaluation window"}
          />
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <Panel title="Prediction Accuracy Trend" description="Top-1 accuracy by month (%)">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data.accuracyTrend} margin={{ left: -18, right: 8, top: 8 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
                <XAxis dataKey="label" {...axisProps} />
                <YAxis domain={[85, 100]} {...axisProps} />
                <Tooltip {...tooltipStyle} />
                <Line isAnimationActive={false}
                  type="monotone"
                  dataKey="value"
                  name="Top-1 accuracy"
                  stroke="var(--color-chart-1)"
                  strokeWidth={2.5}
                  dot={{ r: 3 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Panel>

        <Panel title="Accuracy by Address Condition" description="Top-1 accuracy (%) per noise type">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data.accuracyByCondition} margin={{ left: -18, right: 8, top: 8 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
                <XAxis dataKey="label" {...axisProps} interval={0} angle={-18} height={54} dy={10} />
                <YAxis domain={[70, 100]} {...axisProps} />
                <Tooltip {...tooltipStyle} />
                <Bar isAnimationActive={false} dataKey="value" name="Accuracy" fill="var(--color-chart-1)" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Panel>

        <Panel title="Confidence Distribution" description="Predictions per confidence band">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data.confidenceDistribution} margin={{ left: -18, right: 8, top: 8 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
                <XAxis dataKey="label" {...axisProps} />
                <YAxis {...axisProps} />
                <Tooltip {...tooltipStyle} />
                <Bar isAnimationActive={false} dataKey="value" name="Predictions" fill="var(--color-chart-2)" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Panel>

        <Panel title="Review Reasons" description="Why predictions entered the review queue">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie isAnimationActive={false}
                  data={data.reviewReasons}
                  dataKey="value"
                  nameKey="label"
                  innerRadius={54}
                  outerRadius={88}
                  paddingAngle={2}
                >
                  {data.reviewReasons.map((entry, index) => (
                    <Cell key={entry.label} fill={CHART_COLORS[index % CHART_COLORS.length]} />
                  ))}
                </Pie>
                <Legend verticalAlign="bottom" iconType="circle" wrapperStyle={{ fontSize: 12 }} />
                <Tooltip {...tooltipStyle} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Panel>
      </div>

      <Panel
        title="Baseline vs Proposed Model"
        description="Top-1 and Top-3 accuracy (%) across evaluated models"
      >
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data.modelComparison} margin={{ left: -18, right: 8, top: 8 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
              <XAxis dataKey="model" {...axisProps} interval={0} height={54} dy={10} />
              <YAxis domain={[75, 100]} {...axisProps} />
              <Tooltip {...tooltipStyle} />
              <Legend wrapperStyle={{ fontSize: 12 }} />
              <Bar isAnimationActive={false} dataKey="top1" name="Top-1" fill="var(--color-chart-1)" radius={[6, 6, 0, 0]} />
              <Bar isAnimationActive={false} dataKey="top3" name="Top-3" fill="var(--color-chart-2)" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <table className="mt-4 w-full text-sm">
          <caption className="sr-only">Model comparison table</caption>
          <thead>
            <tr className="border-b border-border text-xs tracking-wide text-muted-foreground uppercase">
              <th scope="col" className="py-2 text-left">Model</th>
              <th scope="col" className="py-2 text-right">Top-1</th>
              <th scope="col" className="py-2 text-right">Top-3</th>
              <th scope="col" className="py-2 text-right">F1</th>
            </tr>
          </thead>
          <tbody>
            {data.modelComparison.map((m) => (
              <tr key={m.model} className="border-b border-border/70 last:border-0">
                <td className="py-2 font-medium">{m.model}</td>
                <td className="tabular py-2 text-right">{m.top1.toFixed(1)}%</td>
                <td className="tabular py-2 text-right">{m.top3.toFixed(1)}%</td>
                <td className="tabular py-2 text-right">{m.f1.toFixed(3)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Panel>
    </div>
  );
}
