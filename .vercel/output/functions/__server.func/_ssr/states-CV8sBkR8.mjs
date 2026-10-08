import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-collapsible+[...].mjs";
import { _ as LoaderCircle, f as RefreshCw, r as TriangleAlert, y as Inbox } from "../_libs/lucide-react.mjs";
import { b as cn, t as Button } from "./primitives-Df9_3jyn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/states-CV8sBkR8.js
var import_jsx_runtime = require_jsx_runtime();
function EmptyState({ title, description, icon, action, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-border bg-surface px-6 py-14 text-center", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex size-10 items-center justify-center rounded-lg bg-muted text-muted-foreground",
				children: icon ?? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Inbox, {
					className: "size-5",
					"aria-hidden": true
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-semibold text-foreground",
				children: title
			}),
			description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-sm text-sm text-muted-foreground",
				children: description
			}),
			action
		]
	});
}
function LoadingState({ label = "Loading data…", rows = 4 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3 py-4",
		role: "status",
		"aria-live": "polite",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "flex items-center gap-2 text-sm text-muted-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
				className: "size-4 animate-spin",
				"aria-hidden": true
			}), label]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-2",
			children: Array.from({ length: rows }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-10 animate-pulse rounded-lg bg-muted/70" }, i))
		})]
	});
}
function ErrorState({ title = "Could not load data", description, onRetry }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		role: "alert",
		className: "flex flex-col items-center justify-center gap-3 rounded-xl border border-error/30 bg-error-soft px-6 py-12 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
				className: "size-6 text-error",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-semibold text-error",
				children: title
			}),
			description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm text-muted-foreground",
				children: description
			}),
			onRetry && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "outline",
				size: "sm",
				onClick: onRetry,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, {
					className: "size-4",
					"aria-hidden": true
				}), " Try again"]
			})
		]
	});
}
//#endregion
export { ErrorState as n, LoadingState as r, EmptyState as t };
