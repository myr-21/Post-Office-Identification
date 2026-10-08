import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-collapsible+[...].mjs";
import { C as Database, I as BadgeCheck, L as ArrowRight, g as MapPin, m as Package, r as TriangleAlert, s as ShieldCheck, w as Clock, x as Gauge } from "../_libs/lucide-react.mjs";
import { b as cn, c as KpiCard, d as Panel, t as Button, u as PageHeader } from "./primitives-Df9_3jyn.mjs";
import { d as getPredictions, h as getSystemHealth, i as getDashboardKpis, m as getReviewSummary } from "./postroute-CSNwraMv.mjs";
import { t as DataTable } from "./data-table-DkWBHKwC.mjs";
import { a as StatusBadge, d as labels, t as ConfidenceBadge, u as formatTime } from "./badges-COb38zu6.mjs";
import { n as useQuery } from "../_libs/tanstack__react-query.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Timeline } from "./timeline-MVCgcup9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-0G2KRkFc.js
var import_jsx_runtime = require_jsx_runtime();
var kpiIcons = {
	predictions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gauge, {
		className: "size-4",
		"aria-hidden": true
	}),
	auto: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, {
		className: "size-4",
		"aria-hidden": true
	}),
	manual: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
		className: "size-4",
		"aria-hidden": true
	}),
	accuracy: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
		className: "size-4",
		"aria-hidden": true
	}),
	parcels: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, {
		className: "size-4",
		"aria-hidden": true
	}),
	mapping: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
		className: "size-4",
		"aria-hidden": true
	})
};
function DashboardPage() {
	const kpis = useQuery({
		queryKey: ["dashboard-kpis"],
		queryFn: getDashboardKpis
	});
	const preds = useQuery({
		queryKey: ["predictions"],
		queryFn: getPredictions
	});
	const summary = useQuery({
		queryKey: ["review-summary"],
		queryFn: getReviewSummary
	});
	const health = useQuery({
		queryKey: ["system-health"],
		queryFn: getSystemHealth
	});
	const columns = [
		{
			key: "time",
			header: "Time",
			render: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "tabular",
				children: formatTime(r.createdAt)
			})
		},
		{
			key: "address",
			header: "Address",
			className: "max-w-[280px]",
			render: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "line-clamp-1 text-foreground",
				children: r.rawAddress
			})
		},
		{
			key: "pin",
			header: "Predicted PIN",
			render: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "tabular font-medium",
				children: r.pincode
			})
		},
		{
			key: "po",
			header: "Delivery Post Office",
			render: (r) => r.postOffice
		},
		{
			key: "conf",
			header: "Confidence",
			render: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfidenceBadge, {
				value: r.confidence,
				showLabel: false
			})
		},
		{
			key: "status",
			header: "Status",
			render: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: r.status })
		},
		{
			key: "action",
			header: "Operator Action",
			render: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs text-muted-foreground",
				children: r.status === "needs_review" ? "Awaiting review" : `Handled by ${r.operator ?? "System"}`
			})
		}
	];
	const totalPending = (summary.data ?? []).reduce((sum, s) => sum + s.count, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Operations Dashboard",
				subtitle: "Postal address prediction and routing overview",
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/prediction",
						children: ["New Prediction ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
							className: "size-4",
							"aria-hidden": true
						})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6",
				children: [(kpis.data ?? []).map((kpi) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
					label: kpi.label,
					value: kpi.value,
					support: kpi.support,
					tone: kpi.tone ?? "default",
					icon: kpiIcons[kpi.key]
				}, kpi.key)), kpis.isLoading && Array.from({ length: 6 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-28 animate-pulse rounded-xl border border-border bg-muted/60" }, i))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 xl:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
					className: "xl:col-span-2",
					title: "Recent Predictions",
					description: "Latest addresses processed by the model",
					bodyClassName: "p-0",
					actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "sm",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/activity",
							children: "View activity"
						})
					}),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "p-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
							columns,
							rows: (preds.data ?? []).slice(0, 8),
							rowKey: (r) => r.id,
							loading: preds.isLoading,
							error: preds.error ? preds.error.message : null,
							onRetry: () => preds.refetch(),
							dense: true,
							caption: "Recent address predictions"
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
						title: "Review Queue Summary",
						description: `${totalPending} predictions waiting`,
						accent: true,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-2.5",
							children: [(summary.data ?? []).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm text-foreground",
									children: item.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "tabular rounded-md bg-muted px-2 py-0.5 text-sm font-semibold",
									children: item.count
								})]
							}, item.reason)), summary.isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { className: "h-24 animate-pulse rounded-md bg-muted/60" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "mt-4 w-full",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/review",
								children: ["Review Queue ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
									className: "size-4",
									"aria-hidden": true
								})]
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
						title: "System Health",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-2.5",
							children: (health.data ?? []).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center justify-between gap-3 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-2 text-muted-foreground",
									children: [item.label === "Database" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Database, {
										className: "size-4",
										"aria-hidden": true
									}) : item.label === "Last synchronization" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
										className: "size-4",
										"aria-hidden": true
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
										className: "size-4",
										"aria-hidden": true
									}), item.label]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("font-medium", item.state === "ok" ? "text-success" : item.state === "warn" ? "text-warning" : "text-error"),
									children: item.value
								})]
							}, item.label))
						})
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
				title: "Routing Activity",
				description: "Standard parcel journey through the system",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timeline, { steps: [
					{
						label: "Parcel received",
						timestamp: "Today 09:12",
						state: "done"
					},
					{
						label: "Address analyzed",
						timestamp: "Today 09:13",
						note: "Model v3.2",
						state: "done"
					},
					{
						label: "PIN predicted",
						timestamp: "Today 09:13",
						note: "411045 — Baner S.O",
						state: "done"
					},
					{
						label: "Operator verified",
						timestamp: "Today 10:05",
						state: "done"
					},
					{
						label: "Sorting",
						timestamp: "Today 11:40",
						state: "current"
					},
					{
						label: "Dispatched",
						timestamp: null,
						state: "pending"
					},
					{
						label: "Delivered",
						timestamp: null,
						state: "pending"
					}
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs text-muted-foreground",
				children: [labels.predictionStatus.auto_approved, " entries are routed without operator input. Demonstration data — not live postal records."]
			})
		]
	});
}
//#endregion
export { DashboardPage as component };
