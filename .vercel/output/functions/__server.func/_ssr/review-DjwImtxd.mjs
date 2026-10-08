import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-collapsible+[...].mjs";
import { a as FilterBar, c as KpiCard, f as SearchBar, o as FilterSelect, t as Button, u as PageHeader } from "./primitives-Df9_3jyn.mjs";
import { p as getReviewQueue, r as getConfig } from "./postroute-CSNwraMv.mjs";
import { t as DataTable } from "./data-table-DkWBHKwC.mjs";
import { a as StatusBadge, c as formatDateTime, d as labels, i as PriorityBadge, t as ConfidenceBadge } from "./badges-COb38zu6.mjs";
import { n as useQuery } from "../_libs/tanstack__react-query.mjs";
import { x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/review-DjwImtxd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ReviewQueuePage() {
	const navigate = useNavigate();
	const query = useQuery({
		queryKey: ["review-queue"],
		queryFn: getReviewQueue
	});
	const configQuery = useQuery({
		queryKey: ["config"],
		queryFn: getConfig
	});
	const [search, setSearch] = (0, import_react.useState)("");
	const [confidence, setConfidence] = (0, import_react.useState)("all");
	const [reason, setReason] = (0, import_react.useState)("all");
	const [status, setStatus] = (0, import_react.useState)("all");
	const [region, setRegion] = (0, import_react.useState)("all");
	const [operator, setOperator] = (0, import_react.useState)("all");
	const rows = (0, import_react.useMemo)(() => {
		const items = query.data ?? [];
		const config = configQuery.data ?? {
			autoRouteThreshold: .85,
			reviewFloor: .55
		};
		return items.filter((item) => {
			const term = search.trim().toLowerCase();
			const matchesSearch = !term || item.rawAddress.toLowerCase().includes(term) || item.pincode.includes(term) || item.parcelId.toLowerCase().includes(term);
			const matchesConfidence = confidence === "all" || confidence === "high" && item.confidence >= config.autoRouteThreshold || confidence === "medium" && item.confidence >= config.reviewFloor && item.confidence < config.autoRouteThreshold || confidence === "low" && item.confidence < config.reviewFloor;
			return matchesSearch && matchesConfidence && (reason === "all" || item.reason === reason) && (status === "all" || item.status === status) && (region === "all" || item.state === region) && (operator === "all" || item.operator === operator);
		}).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
	}, [
		query.data,
		configQuery.data,
		search,
		confidence,
		reason,
		status,
		region,
		operator
	]);
	const all = query.data ?? [];
	const columns = [
		{
			key: "priority",
			header: "Priority",
			render: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PriorityBadge, { priority: r.priority })
		},
		{
			key: "address",
			header: "Address",
			className: "max-w-[260px]",
			render: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "line-clamp-1 font-medium",
				children: r.rawAddress
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground",
				children: r.parcelId
			})] })
		},
		{
			key: "pin",
			header: "Predicted PIN",
			render: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "tabular",
				children: r.pincode
			})
		},
		{
			key: "po",
			header: "Post Office",
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
			key: "reason",
			header: "Review Reason",
			render: (r) => labels.reviewReason[r.reason]
		},
		{
			key: "created",
			header: "Created",
			render: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "tabular text-xs",
				children: formatDateTime(r.createdAt)
			})
		},
		{
			key: "status",
			header: "Status",
			render: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: r.status })
		},
		{
			key: "action",
			header: "Action",
			align: "right",
			render: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "sm",
				variant: "outline",
				onClick: (e) => {
					e.stopPropagation();
					navigate({
						to: "/review/$reviewId",
						params: { reviewId: r.id }
					});
				},
				children: "Review"
			})
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Review Queue",
				subtitle: "Predictions requiring operator verification"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
						label: "Total pending",
						value: String(all.filter((i) => i.status === "pending").length),
						support: "Awaiting an operator"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
						label: "High priority",
						value: String(all.filter((i) => i.priority === "high").length),
						support: "Confidence below 55%",
						tone: "warning"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
						label: "Mapping conflicts",
						value: String(all.filter((i) => i.reason === "mapping_conflict").length),
						support: "Requires mapping check",
						tone: "warning"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
						label: "Low confidence",
						value: String(all.filter((i) => i.confidence < .7).length),
						support: "Below auto-routing threshold",
						tone: "info"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FilterBar, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchBar, {
					label: "Search review queue by address, PIN or parcel ID",
					placeholder: "Search address, PIN or parcel ID…",
					value: search,
					onChange: setSearch
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSelect, {
					label: "Confidence",
					value: confidence,
					onChange: setConfidence,
					options: [
						{
							value: "high",
							label: "High (≥90%)"
						},
						{
							value: "medium",
							label: "Medium (70–89%)"
						},
						{
							value: "low",
							label: "Low (<70%)"
						}
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSelect, {
					label: "Reason",
					value: reason,
					onChange: setReason,
					options: Object.entries(labels.reviewReason).map(([value, label]) => ({
						value,
						label
					}))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSelect, {
					label: "Status",
					value: status,
					onChange: setStatus,
					options: Object.entries(labels.reviewStatus).map(([value, label]) => ({
						value,
						label
					}))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSelect, {
					label: "Region",
					value: region,
					onChange: setRegion,
					options: [...new Set(all.map((i) => i.state))].map((v) => ({
						value: v,
						label: v
					}))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSelect, {
					label: "Operator",
					value: operator,
					onChange: setOperator,
					options: [...new Set(all.map((i) => i.operator))].map((v) => ({
						value: v,
						label: v
					}))
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
				columns,
				rows,
				rowKey: (r) => r.id,
				loading: query.isLoading,
				error: query.error ? query.error.message : null,
				onRetry: () => query.refetch(),
				onRowClick: (r) => navigate({
					to: "/review/$reviewId",
					params: { reviewId: r.id }
				}),
				emptyTitle: "No predictions match these filters",
				emptyDescription: "Clear the filters or widen the search to see pending reviews.",
				caption: "Review queue"
			})
		]
	});
}
//#endregion
export { ReviewQueuePage as component };
