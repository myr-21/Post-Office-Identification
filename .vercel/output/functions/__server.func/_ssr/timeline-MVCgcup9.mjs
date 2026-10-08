import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-collapsible+[...].mjs";
import { E as Circle, M as Check } from "../_libs/lucide-react.mjs";
import { b as cn } from "./primitives-Df9_3jyn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/timeline-MVCgcup9.js
var import_jsx_runtime = require_jsx_runtime();
function Timeline({ steps }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "relative space-y-0",
		children: steps.map((step, index) => {
			const isLast = index === steps.length - 1;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "relative flex gap-3 pb-5 last:pb-0",
				children: [
					!isLast && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": true,
						className: cn("absolute top-6 left-[11px] h-[calc(100%-1rem)] w-px", step.state === "done" ? "bg-primary/45" : "bg-border")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": true,
						className: cn("z-10 flex size-6 shrink-0 items-center justify-center rounded-full border", step.state === "done" && "border-primary bg-primary text-primary-foreground", step.state === "current" && "border-primary bg-primary-soft text-primary-dark", step.state === "pending" && "border-border bg-card text-muted-foreground"),
						children: step.state === "done" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, { className: "size-2 fill-current" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 pt-0.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: cn("text-sm font-medium", step.state === "pending" ? "text-muted-foreground" : "text-foreground"),
								children: [step.label, step.state === "current" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "ml-2 text-xs font-semibold text-primary-dark",
									children: "In progress"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "tabular text-xs text-muted-foreground",
								children: step.timestamp ?? "Pending"
							}),
							step.note && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-0.5 text-xs text-muted-foreground",
								children: step.note
							})
						]
					})
				]
			}, step.label);
		})
	});
}
//#endregion
export { Timeline as t };
