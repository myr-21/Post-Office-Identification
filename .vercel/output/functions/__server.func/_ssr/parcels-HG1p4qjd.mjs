import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-collapsible+[...].mjs";
import { a as FilterBar, c as KpiCard, f as SearchBar, o as FilterSelect, t as Button, u as PageHeader } from "./primitives-Df9_3jyn.mjs";
import { c as getParcels } from "./postroute-CSNwraMv.mjs";
import { t as DataTable } from "./data-table-DkWBHKwC.mjs";
import { a as StatusBadge, c as formatDateTime, d as labels, t as ConfidenceBadge } from "./badges-COb38zu6.mjs";
import { n as useQuery } from "../_libs/tanstack__react-query.mjs";
import { x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/parcels-HG1p4qjd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ParcelsPage() {
	const navigate = useNavigate();
	const query = useQuery({
		queryKey: ["parcels"],
		queryFn: getParcels
	});
	const [search, setSearch] = (0, import_react.useState)("");
	const [status, setStatus] = (0, import_react.useState)("all");
	const [office, setOffice] = (0, import_react.useState)("all");
	const all = query.data ?? [];
	const rows = (0, import_react.useMemo)(() => {
		const term = search.trim().toLowerCase();
		return all.filter((p) => (!term || p.id.toLowerCase().includes(term) || p.rawAddress.toLowerCase().includes(term) || p.pincode.includes(term) || p.postOffice.toLowerCase().includes(term)) && (status === "all" || p.status === status) && (office === "all" || p.postOffice === office));
	}, [
		all,
		search,
		status,
		office
	]);
	const count = (s) => all.filter((p) => p.status === s).length;
	const columns = [
		{
			key: "id",
			header: "Parcel ID",
			render: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "tabular font-medium",
				children: p.id
			})
		},
		{
			key: "address",
			header: "Address",
			className: "max-w-[260px]",
			render: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "line-clamp-1",
				children: p.rawAddress
			})
		},
		{
			key: "pin",
			header: "Predicted PIN",
			render: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "tabular",
				children: p.pincode
			})
		},
		{
			key: "office",
			header: "Delivery Office",
			render: (p) => p.postOffice
		},
		{
			key: "conf",
			header: "Confidence",
			render: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfidenceBadge, {
				value: p.confidence,
				showLabel: false
			})
		},
		{
			key: "status",
			header: "Routing Status",
			render: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: p.status })
		},
		{
			key: "updated",
			header: "Last Updated",
			render: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "tabular text-xs",
				children: formatDateTime(p.updatedAt)
			})
		},
		{
			key: "action",
			header: "Action",
			align: "right",
			render: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "sm",
				variant: "outline",
				onClick: (e) => {
					e.stopPropagation();
					navigate({
						to: "/parcels/$parcelId",
						params: { parcelId: p.id }
					});
				},
				children: "Open"
			})
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Parcel Routing",
				subtitle: "Parcels moving through prediction, sorting and dispatch"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-3 xl:grid-cols-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
						label: "Total Parcels",
						value: String(all.length),
						support: "In current view"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
						label: "Received",
						value: String(count("received")),
						support: "Awaiting analysis"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
						label: "Address Verified",
						value: String(count("address_verified")),
						support: "Ready for sorting",
						tone: "info"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
						label: "Sorting",
						value: String(count("sorting")),
						support: "At sorting hub",
						tone: "warning"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
						label: "Dispatched",
						value: String(count("dispatched")),
						support: "Out for delivery",
						tone: "info"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
						label: "Delivered",
						value: String(count("delivered")),
						support: "Completed today",
						tone: "success"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FilterBar, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchBar, {
					label: "Search parcels by ID, address, PIN or post office",
					placeholder: "Search parcel ID, address, PIN, post office…",
					value: search,
					onChange: setSearch
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSelect, {
					label: "Status",
					value: status,
					onChange: setStatus,
					options: Object.entries(labels.parcelStatus).map(([value, label]) => ({
						value,
						label
					}))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSelect, {
					label: "Post Office",
					value: office,
					onChange: setOffice,
					options: [...new Set(all.map((p) => p.postOffice))].map((v) => ({
						value: v,
						label: v
					}))
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
				columns,
				rows,
				rowKey: (p) => p.id,
				loading: query.isLoading,
				error: query.error ? query.error.message : null,
				onRetry: () => query.refetch(),
				onRowClick: (p) => navigate({
					to: "/parcels/$parcelId",
					params: { parcelId: p.id }
				}),
				emptyTitle: "No parcels match these filters",
				caption: "Parcel routing table"
			})
		]
	});
}
//#endregion
export { ParcelsPage as component };
