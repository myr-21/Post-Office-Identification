import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-collapsible+[...].mjs";
import { a as FilterBar, f as SearchBar, o as FilterSelect, u as PageHeader } from "./primitives-Df9_3jyn.mjs";
import { u as getPostOffices } from "./postroute-CSNwraMv.mjs";
import { t as DataTable } from "./data-table-DkWBHKwC.mjs";
import { a as StatusBadge, d as labels } from "./badges-COb38zu6.mjs";
import { n as useQuery } from "../_libs/tanstack__react-query.mjs";
import { x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/post-offices-SdX1-pv_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PostOfficesPage() {
	const navigate = useNavigate();
	const query = useQuery({
		queryKey: ["post-offices"],
		queryFn: getPostOffices
	});
	const [search, setSearch] = (0, import_react.useState)("");
	const [state, setState] = (0, import_react.useState)("all");
	const [district, setDistrict] = (0, import_react.useState)("all");
	const [status, setStatus] = (0, import_react.useState)("all");
	const [version, setVersion] = (0, import_react.useState)("all");
	const all = query.data ?? [];
	const rows = (0, import_react.useMemo)(() => {
		const term = search.trim().toLowerCase();
		return all.filter((o) => (!term || o.name.toLowerCase().includes(term) || o.pincode.includes(term) || o.district.toLowerCase().includes(term) || o.state.toLowerCase().includes(term)) && (state === "all" || o.state === state) && (district === "all" || o.district === district) && (status === "all" || o.status === status) && (version === "all" || o.mappingVersion === version));
	}, [
		all,
		search,
		state,
		district,
		status,
		version
	]);
	const columns = [
		{
			key: "name",
			header: "Post Office",
			render: (o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-medium",
				children: o.name
			})
		},
		{
			key: "pin",
			header: "PIN",
			render: (o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "tabular",
				children: o.pincode
			})
		},
		{
			key: "district",
			header: "District",
			render: (o) => o.district
		},
		{
			key: "state",
			header: "State",
			render: (o) => o.state
		},
		{
			key: "lat",
			header: "Latitude",
			render: (o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "tabular text-xs",
				children: o.latitude.toFixed(4)
			})
		},
		{
			key: "lng",
			header: "Longitude",
			render: (o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "tabular text-xs",
				children: o.longitude.toFixed(4)
			})
		},
		{
			key: "status",
			header: "Status",
			render: (o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: o.status })
		},
		{
			key: "version",
			header: "Mapping Version",
			render: (o) => o.mappingVersion
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Post Offices",
				subtitle: "Browse postal offices and their associated PIN mappings"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FilterBar, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchBar, {
					label: "Search post offices by name, PIN, district or state",
					placeholder: "Search post office, PIN, district, state…",
					value: search,
					onChange: setSearch
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSelect, {
					label: "State",
					value: state,
					onChange: (v) => {
						setState(v);
						setDistrict("all");
					},
					options: [...new Set(all.map((o) => o.state))].map((v) => ({
						value: v,
						label: v
					}))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSelect, {
					label: "District",
					value: district,
					onChange: setDistrict,
					options: [...new Set(all.filter((o) => state === "all" || o.state === state).map((o) => o.district))].map((v) => ({
						value: v,
						label: v
					}))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSelect, {
					label: "Status",
					value: status,
					onChange: setStatus,
					options: Object.entries(labels.postOfficeStatus).map(([value, label]) => ({
						value,
						label
					}))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSelect, {
					label: "Mapping Version",
					value: version,
					onChange: setVersion,
					options: [...new Set(all.map((o) => o.mappingVersion))].map((v) => ({
						value: v,
						label: v
					}))
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
				columns,
				rows,
				rowKey: (o) => o.id,
				loading: query.isLoading,
				error: query.error ? query.error.message : null,
				onRetry: () => query.refetch(),
				onRowClick: (o) => navigate({
					to: "/post-offices/$officeId",
					params: { officeId: o.id }
				}),
				emptyTitle: "No post offices match these filters",
				caption: "Post office directory"
			})
		]
	});
}
//#endregion
export { PostOfficesPage as component };
