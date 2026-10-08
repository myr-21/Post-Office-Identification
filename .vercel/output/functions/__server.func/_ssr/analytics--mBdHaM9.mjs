import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-collapsible+[...].mjs";
import { c as KpiCard, d as Panel, n as DemoNotice, u as PageHeader } from "./primitives-Df9_3jyn.mjs";
import { n as getAnalytics } from "./postroute-CSNwraMv.mjs";
import { n as ErrorState, r as LoadingState } from "./states-CV8sBkR8.mjs";
import { n as useQuery } from "../_libs/tanstack__react-query.mjs";
import { a as XAxis, c as Bar, d as ResponsiveContainer, f as Tooltip, i as YAxis, l as Pie, n as BarChart, o as Line, p as Legend, r as LineChart, s as CartesianGrid, t as PieChart, u as Cell } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/analytics--mBdHaM9.js
var import_jsx_runtime = require_jsx_runtime();
var CHART_COLORS = [
	"var(--color-chart-1)",
	"var(--color-chart-2)",
	"var(--color-chart-3)",
	"var(--color-chart-4)",
	"var(--color-chart-5)"
];
var axisProps = {
	stroke: "var(--color-muted-foreground)",
	fontSize: 12,
	tickLine: false,
	axisLine: false
};
var tooltipStyle = { contentStyle: {
	borderRadius: 10,
	border: "1px solid var(--color-border)",
	background: "var(--color-card)",
	fontSize: 12
} };
function AnalyticsPage() {
	const query = useQuery({
		queryKey: ["analytics"],
		queryFn: getAnalytics
	});
	if (query.isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingState, {
		label: "Loading model metrics…",
		rows: 6
	});
	if (query.error || !query.data) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorState, {
		description: query.error.message,
		onRetry: () => query.refetch()
	});
	const data = query.data;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Analytics & Model Performance",
				subtitle: "Prediction quality across address conditions, confidence bands and model baselines"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoNotice, { text: "Demo metrics — these values are mock figures and will be replaced by live model evaluation results from the backend." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
				children: data.metrics.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
					label: m.label,
					value: m.value,
					support: m.delta ?? m.hint ?? "Current evaluation window"
				}, m.key))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 xl:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
						title: "Prediction Accuracy Trend",
						description: "Top-1 accuracy by month (%)",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-64",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
								width: "100%",
								height: "100%",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
									data: data.accuracyTrend,
									margin: {
										left: -18,
										right: 8,
										top: 8
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
											strokeDasharray: "3 3",
											stroke: "var(--color-border)",
											vertical: false
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
											dataKey: "label",
											...axisProps
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
											domain: [85, 100],
											...axisProps
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { ...tooltipStyle }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
											isAnimationActive: false,
											type: "monotone",
											dataKey: "value",
											name: "Top-1 accuracy",
											stroke: "var(--color-chart-1)",
											strokeWidth: 2.5,
											dot: { r: 3 }
										})
									]
								})
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
						title: "Accuracy by Address Condition",
						description: "Top-1 accuracy (%) per noise type",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-64",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
								width: "100%",
								height: "100%",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
									data: data.accuracyByCondition,
									margin: {
										left: -18,
										right: 8,
										top: 8
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
											strokeDasharray: "3 3",
											stroke: "var(--color-border)",
											vertical: false
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
											dataKey: "label",
											...axisProps,
											interval: 0,
											angle: -18,
											height: 54,
											dy: 10
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
											domain: [70, 100],
											...axisProps
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { ...tooltipStyle }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
											isAnimationActive: false,
											dataKey: "value",
											name: "Accuracy",
											fill: "var(--color-chart-1)",
											radius: [
												6,
												6,
												0,
												0
											]
										})
									]
								})
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
						title: "Confidence Distribution",
						description: "Predictions per confidence band",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-64",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
								width: "100%",
								height: "100%",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
									data: data.confidenceDistribution,
									margin: {
										left: -18,
										right: 8,
										top: 8
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
											strokeDasharray: "3 3",
											stroke: "var(--color-border)",
											vertical: false
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
											dataKey: "label",
											...axisProps
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, { ...axisProps }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { ...tooltipStyle }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
											isAnimationActive: false,
											dataKey: "value",
											name: "Predictions",
											fill: "var(--color-chart-2)",
											radius: [
												6,
												6,
												0,
												0
											]
										})
									]
								})
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
						title: "Review Reasons",
						description: "Why predictions entered the review queue",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-64",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
								width: "100%",
								height: "100%",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PieChart, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pie, {
										isAnimationActive: false,
										data: data.reviewReasons,
										dataKey: "value",
										nameKey: "label",
										innerRadius: 54,
										outerRadius: 88,
										paddingAngle: 2,
										children: data.reviewReasons.map((entry, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: CHART_COLORS[index % CHART_COLORS.length] }, entry.label))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, {
										verticalAlign: "bottom",
										iconType: "circle",
										wrapperStyle: { fontSize: 12 }
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { ...tooltipStyle })
								] })
							})
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				title: "Baseline vs Proposed Model",
				description: "Top-1 and Top-3 accuracy (%) across evaluated models",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-72",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
						width: "100%",
						height: "100%",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
							data: data.modelComparison,
							margin: {
								left: -18,
								right: 8,
								top: 8
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
									strokeDasharray: "3 3",
									stroke: "var(--color-border)",
									vertical: false
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
									dataKey: "model",
									...axisProps,
									interval: 0,
									height: 54,
									dy: 10
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
									domain: [75, 100],
									...axisProps
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { ...tooltipStyle }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Legend, { wrapperStyle: { fontSize: 12 } }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
									isAnimationActive: false,
									dataKey: "top1",
									name: "Top-1",
									fill: "var(--color-chart-1)",
									radius: [
										6,
										6,
										0,
										0
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
									isAnimationActive: false,
									dataKey: "top3",
									name: "Top-3",
									fill: "var(--color-chart-2)",
									radius: [
										6,
										6,
										0,
										0
									]
								})
							]
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "mt-4 w-full text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
							className: "sr-only",
							children: "Model comparison table"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-b border-border text-xs tracking-wide text-muted-foreground uppercase",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									scope: "col",
									className: "py-2 text-left",
									children: "Model"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									scope: "col",
									className: "py-2 text-right",
									children: "Top-1"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									scope: "col",
									className: "py-2 text-right",
									children: "Top-3"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									scope: "col",
									className: "py-2 text-right",
									children: "F1"
								})
							]
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: data.modelComparison.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-b border-border/70 last:border-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-2 font-medium",
									children: m.model
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
									className: "tabular py-2 text-right",
									children: [m.top1.toFixed(1), "%"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
									className: "tabular py-2 text-right",
									children: [m.top3.toFixed(1), "%"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "tabular py-2 text-right",
									children: m.f1.toFixed(3)
								})
							]
						}, m.model)) })
					]
				})]
			})
		]
	});
}
//#endregion
export { AnalyticsPage as component };
