import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-collapsible+[...].mjs";
import { L as ArrowRight, b as History, t as X } from "../_libs/lucide-react.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import {
  a as DialogOverlay,
  i as DialogDescription,
  n as DialogClose,
  o as DialogPortal,
  r as DialogContent,
  s as DialogTitle,
  t as Dialog,
} from "../_libs/@radix-ui/react-dialog+[...].mjs";
import {
  a as FilterBar,
  b as cn,
  c as KpiCard,
  d as Panel,
  f as SearchBar,
  i as FieldRow,
  o as FilterSelect,
  t as Button,
  u as PageHeader,
} from "./primitives-Df9_3jyn.mjs";
import { a as getMappingHistory } from "./postroute-CSNwraMv.mjs";
import { t as DataTable } from "./data-table-DkWBHKwC.mjs";
import { a as StatusBadge, d as labels, r as Pill, s as formatDate } from "./badges-COb38zu6.mjs";
import { n as useQuery } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/mapping-BIWQ2Isf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Sheet = Dialog;
var SheetPortal = DialogPortal;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    ),
    ...props,
    ref,
  }),
);
SheetOverlay.displayName = DialogOverlay.displayName;
var sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
          "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
      },
    },
    defaultVariants: { side: "right" },
  },
);
var SheetContent = import_react.forwardRef(
  ({ side = "right", className, children, ...props }, ref) =>
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, {
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
          ref,
          className: cn(sheetVariants({ side }), className),
          ...props,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
              className:
                "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                  className: "sr-only",
                  children: "Close",
                }),
              ],
            }),
            children,
          ],
        }),
      ],
    }),
);
SheetContent.displayName = DialogContent.displayName;
var SheetHeader = ({ className, ...props }) =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
    ...props,
  });
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({ className, ...props }) =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
    ...props,
  });
SheetFooter.displayName = "SheetFooter";
var SheetTitle = import_react.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
    ref,
    className: cn("text-lg font-semibold text-foreground", className),
    ...props,
  }),
);
SheetTitle.displayName = DialogTitle.displayName;
var SheetDescription = import_react.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props,
  }),
);
SheetDescription.displayName = DialogDescription.displayName;
function MappingPage() {
  const query = useQuery({
    queryKey: ["mapping"],
    queryFn: getMappingHistory,
  });
  const [search, setSearch] = (0, import_react.useState)("");
  const [changeType, setChangeType] = (0, import_react.useState)("all");
  const [view, setView] = (0, import_react.useState)("current");
  const [selected, setSelected] = (0, import_react.useState)(null);
  const all = query.data ?? [];
  const rows = (0, import_react.useMemo)(() => {
    const term = search.trim().toLowerCase();
    return all.filter(
      (m) =>
        (view === "current" ? m.status === "active" : m.status === "superseded") &&
        (!term || m.pincode.includes(term) || m.postOffice.toLowerCase().includes(term)) &&
        (changeType === "all" || m.changeType === changeType),
    );
  }, [all, search, changeType, view]);
  const columns = [
    {
      key: "pin",
      header: "PIN",
      render: (m) =>
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
          className: "tabular font-medium",
          children: m.pincode,
        }),
    },
    {
      key: "po",
      header: "Post Office",
      render: (m) => m.postOffice,
    },
    {
      key: "region",
      header: "Region",
      render: (m) => m.region,
    },
    {
      key: "version",
      header: "Mapping Version",
      render: (m) =>
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
          tone: "primary",
          children: m.version,
        }),
    },
    {
      key: "from",
      header: "Effective From",
      render: (m) => formatDate(m.effectiveFrom),
    },
    {
      key: "status",
      header: "Status",
      render: (m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: m.status }),
    },
    {
      key: "type",
      header: "Change Type",
      render: (m) =>
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: m.changeType }),
    },
    {
      key: "actions",
      header: "Actions",
      align: "right",
      render: (m) =>
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
          size: "sm",
          variant: "outline",
          onClick: (e) => {
            e.stopPropagation();
            setSelected(m);
          },
          children: "Details",
        }),
    },
  ];
  const versions = [
    {
      version: "V1",
      title: "Original Mapping",
      date: "10 Apr 2024",
    },
    {
      version: "V2",
      title: "Regional Update",
      date: "21 May 2025",
    },
    {
      version: "V3",
      title: "Post Office Merge",
      date: "01 Aug 2026",
    },
  ];
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "space-y-6",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
        title: "Pincode Mapping",
        subtitle: "Manage current and historical postal mappings",
        actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
          tone: "primary",
          children: "Mapping Version: V3",
        }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
            label: "Active PIN Codes",
            value: String(all.filter((m) => m.status === "active").length),
            support: "Currently in service",
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
            label: "Recent Mapping Changes",
            value: "3",
            support: "Last 30 days",
            tone: "warning",
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
            label: "Merged Codes",
            value: String(all.filter((m) => m.changeType === "merged").length),
            support: "Beats consolidated",
            tone: "info",
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
            label: "Conflicts Detected",
            value: "2",
            support: "Requires operator review",
            tone: "warning",
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "inline-flex rounded-lg border border-border bg-surface p-1",
        children: ["current", "historical"].map((option) =>
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "button",
            {
              type: "button",
              "aria-pressed": view === option,
              onClick: () => setView(option),
              className: `rounded-md px-4 py-1.5 text-sm font-medium transition-colors ${view === option ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`,
              children: option === "current" ? "Current Mapping" : "Historical Mapping",
            },
            option,
          ),
        ),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FilterBar, {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchBar, {
            label: "Search mappings by PIN or post office",
            placeholder: "Search PIN or post office…",
            value: search,
            onChange: setSearch,
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSelect, {
            label: "Change Type",
            value: changeType,
            onChange: setChangeType,
            options: Object.entries(labels.changeType).map(([value, label]) => ({
              value,
              label,
            })),
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
        columns,
        rows,
        rowKey: (m) => m.id,
        loading: query.isLoading,
        error: query.error ? query.error.message : null,
        onRetry: () => query.refetch(),
        onRowClick: (m) => setSelected(m),
        emptyTitle: "No mapping records in this view",
        caption: "Pincode mapping table",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
        title: "Mapping History",
        description: "How the PIN to post office mapping evolved",
        accent: true,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
          className: "grid gap-4 md:grid-cols-3",
          children: versions.map((v, i) =>
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
              "li",
              {
                className: "relative rounded-lg border border-border bg-surface p-4",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        className:
                          "flex size-8 items-center justify-center rounded-md bg-primary text-sm font-semibold text-primary-foreground",
                        children: v.version,
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                            className: "text-sm font-semibold",
                            children: v.title,
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                            className: "text-xs text-muted-foreground",
                            children: v.date,
                          }),
                        ],
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
                    className: "mt-3 space-y-1 text-xs text-muted-foreground",
                    children: all
                      .filter((m) => m.version === v.version)
                      .slice(0, 3)
                      .map((m) =>
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                          "li",
                          {
                            className: "flex items-center gap-1.5",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(History, {
                                className: "size-3.5 shrink-0",
                                "aria-hidden": true,
                              }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                className: "tabular",
                                children: m.pincode,
                              }),
                              " · ",
                              m.postOffice,
                              " ·",
                              " ",
                              labels.changeType[m.changeType],
                            ],
                          },
                          m.id,
                        ),
                      ),
                  }),
                  i < versions.length - 1 &&
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
                      className:
                        "absolute top-1/2 -right-3 hidden size-4 text-muted-foreground md:block",
                      "aria-hidden": true,
                    }),
                ],
              },
              v.version,
            ),
          ),
        }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
        open: Boolean(selected),
        onOpenChange: (open) => !open && setSelected(null),
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
          className: "w-full overflow-y-auto sm:max-w-lg",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetHeader, {
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, {
                  children: "Mapping Change Details",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetDescription, {
                  children: selected ? `${selected.pincode} · ${selected.version}` : "",
                }),
              ],
            }),
            selected &&
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "space-y-4 px-4 pb-6",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldRow, {
                    label: "Previous mapping",
                    value: selected.previousMapping,
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldRow, {
                    label: "New mapping",
                    value: selected.newMapping,
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldRow, {
                    label: "Effective date",
                    value: formatDate(selected.effectiveFrom),
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldRow, {
                    label: "Change type",
                    value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
                      status: selected.changeType,
                    }),
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                        className: "text-xs tracking-wide text-muted-foreground uppercase",
                        children: "Change reason",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                        className: "mt-1 text-sm",
                        children: selected.reason,
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                        className: "text-xs tracking-wide text-muted-foreground uppercase",
                        children: "Affected post offices",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                        className: "mt-2 flex flex-wrap gap-2",
                        children: selected.affectedPostOffices.map((po) =>
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, { children: po }, po),
                        ),
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                        className: "text-xs tracking-wide text-muted-foreground uppercase",
                        children: "Affected PIN codes",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                        className: "mt-2 flex flex-wrap gap-2",
                        children: selected.affectedPincodes.map((pin) =>
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                            Pill,
                            {
                              tone: "primary",
                              children: pin,
                            },
                            pin,
                          ),
                        ),
                      }),
                    ],
                  }),
                ],
              }),
          ],
        }),
      }),
    ],
  });
}
//#endregion
export { MappingPage as component };
