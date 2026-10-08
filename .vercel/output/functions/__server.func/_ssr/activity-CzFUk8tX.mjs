import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-collapsible+[...].mjs";
import { a as FilterBar, f as SearchBar, o as FilterSelect, u as PageHeader } from "./primitives-Df9_3jyn.mjs";
import { t as getActivityLog } from "./postroute-CSNwraMv.mjs";
import { t as DataTable } from "./data-table-DkWBHKwC.mjs";
import { a as StatusBadge, c as formatDateTime } from "./badges-COb38zu6.mjs";
import { n as useQuery } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/activity-CzFUk8tX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ActivityPage() {
	const query = useQuery({
		queryKey: ["activity"],
		queryFn: getActivityLog
	});
	const [search, setSearch] = (0, import_react.useState)("");
	const [operator, setOperator] = (0, import_react.useState)("all");
	const [action, setAction] = (0, import_react.useState)("all");
	const [status, setStatus] = (0, import_react.useState)("all");
	const all = query.data ?? [];
	const rows = (0, import_react.useMemo)(() => {
		const term = search.trim().toLowerCase();
		return all.filter((e) => (!term || e.entity.toLowerCase().includes(term) || e.details.toLowerCase().includes(term) || e.action.toLowerCase().includes(term)) && (operator === "all" || e.operator === operator) && (action === "all" || e.action === action) && (status === "all" || e.status === status));
	}, [
		all,
		search,
		operator,
		action,
		status
	]);
	const columns = [
		{
			key: "time",
			header: "Timestamp",
			render: (e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "tabular text-xs",
				children: formatDateTime(e.timestamp)
			})
		},
		{
			key: "operator",
			header: "Operator",
			render: (e) => e.operator
		},
		{
			key: "action",
			header: "Action",
			render: (e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-medium",
				children: e.action
			})
		},
		{
			key: "entity",
			header: "Entity",
			render: (e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "tabular",
				children: e.entity
			})
		},
		{
			key: "details",
			header: "Details",
			className: "max-w-[320px]",
			render: (e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "line-clamp-1 text-muted-foreground",
				children: e.details
			})
		},
		{
			key: "status",
			header: "Status",
			render: (e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: e.status })
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Activity Log",
				subtitle: "Chronological system and operator actions"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FilterBar, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchBar, {
					label: "Search activity by entity, action or details",
					placeholder: "Search action, entity or details…",
					value: search,
					onChange: setSearch
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSelect, {
					label: "Operator",
					value: operator,
					onChange: setOperator,
					options: [...new Set(all.map((e) => e.operator))].map((v) => ({
						value: v,
						label: v
					}))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSelect, {
					label: "Action",
					value: action,
					onChange: setAction,
					options: [...new Set(all.map((e) => e.action))].map((v) => ({
						value: v,
						label: v
					}))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSelect, {
					label: "Result",
					value: status,
					onChange: setStatus,
					options: [
						{
							value: "success",
							label: "Success"
						},
						{
							value: "warning",
							label: "Warning"
						},
						{
							value: "error",
							label: "Error"
						},
						{
							value: "info",
							label: "Info"
						}
					]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
				columns,
				rows,
				rowKey: (e) => e.id,
				loading: query.isLoading,
				error: query.error ? query.error.message : null,
				onRetry: () => query.refetch(),
				emptyTitle: "No activity matches these filters",
				dense: true,
				caption: "Activity log"
			})
		]
	});
}
//#endregion
export { ActivityPage as component };
