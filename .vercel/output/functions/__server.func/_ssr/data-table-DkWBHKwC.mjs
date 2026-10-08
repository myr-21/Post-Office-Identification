import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-collapsible+[...].mjs";
import { b as cn } from "./primitives-Df9_3jyn.mjs";
import { n as ErrorState, r as LoadingState, t as EmptyState } from "./states-CV8sBkR8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/data-table-DkWBHKwC.js
var import_jsx_runtime = require_jsx_runtime();
function DataTable({
  columns,
  rows,
  rowKey,
  onRowClick,
  loading,
  error,
  onRetry,
  emptyTitle = "No records found",
  emptyDescription = "Adjust the filters or search terms to see results.",
  dense,
  caption,
}) {
  if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingState, { rows: 6 });
  if (error)
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorState, {
      description: error,
      ...(onRetry ? { onRetry } : {}),
    });
  if (rows.length === 0)
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
      title: emptyTitle,
      description: emptyDescription,
    });
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: "w-full overflow-x-auto rounded-xl border border-border bg-card",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
      className: "w-full min-w-[820px] border-collapse text-sm",
      children: [
        caption &&
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
            className: "sr-only",
            children: caption,
          }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
            className: "border-b border-border bg-surface",
            children: columns.map((col) =>
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "th",
                {
                  scope: "col",
                  className: cn(
                    "px-4 py-3 text-left text-xs font-semibold tracking-wide text-muted-foreground uppercase",
                    col.align === "right" && "text-right",
                    col.className,
                  ),
                  children: col.header,
                },
                col.key,
              ),
            ),
          }),
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
          children: rows.map((row) =>
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "tr",
              {
                ...(onRowClick
                  ? {
                      onClick: () => onRowClick(row),
                      tabIndex: 0,
                      role: "button",
                      onKeyDown: (e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          onRowClick(row);
                        }
                      },
                    }
                  : {}),
                className: cn(
                  "border-b border-border/70 transition-colors last:border-0",
                  onRowClick && "cursor-pointer hover:bg-primary-soft/60 focus:bg-primary-soft/60",
                ),
                children: columns.map((col) =>
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    "td",
                    {
                      className: cn(
                        "px-4 align-middle text-foreground",
                        dense ? "py-2.5" : "py-3.5",
                        col.align === "right" && "text-right",
                        col.className,
                      ),
                      children: col.render(row),
                    },
                    col.key,
                  ),
                ),
              },
              rowKey(row),
            ),
          ),
        }),
      ],
    }),
  });
}
//#endregion
export { DataTable as t };
