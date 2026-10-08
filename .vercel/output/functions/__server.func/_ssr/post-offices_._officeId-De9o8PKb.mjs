import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-collapsible+[...].mjs";
import { R as ArrowLeft, g as MapPin } from "../_libs/lucide-react.mjs";
import { d as Panel, i as FieldRow, t as Button, u as PageHeader } from "./primitives-Df9_3jyn.mjs";
import {
  a as getMappingHistory,
  d as getPredictions,
  l as getPostOffice,
} from "./postroute-CSNwraMv.mjs";
import { n as ErrorState, r as LoadingState, t as EmptyState } from "./states-CV8sBkR8.mjs";
import { t as DataTable } from "./data-table-DkWBHKwC.mjs";
import {
  a as StatusBadge,
  c as formatDateTime,
  s as formatDate,
  t as ConfidenceBadge,
} from "./badges-COb38zu6.mjs";
import { n as useQuery } from "../_libs/tanstack__react-query.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./post-offices_._officeId-CrrpXH17.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/post-offices_._officeId-De9o8PKb.js
var import_jsx_runtime = require_jsx_runtime();
function PostOfficeDetailPage() {
  const { officeId } = Route.useParams();
  const query = useQuery({
    queryKey: ["post-office", officeId],
    queryFn: () => getPostOffice(officeId),
  });
  const mapping = useQuery({
    queryKey: ["mapping"],
    queryFn: getMappingHistory,
  });
  const preds = useQuery({
    queryKey: ["predictions"],
    queryFn: getPredictions,
  });
  if (query.isLoading)
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingState, {
      label: "Loading post office…",
      rows: 5,
    });
  if (query.error || !query.data)
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorState, {
      title: "Post office not found",
      description: query.error?.message ?? "No such office.",
      onRetry: () => query.refetch(),
    });
  const office = query.data;
  const history = (mapping.data ?? []).filter(
    (m) => m.pincode === office.pincode || m.affectedPostOffices.includes(office.name),
  );
  const recent = (preds.data ?? []).filter((p) => p.postOffice === office.name).slice(0, 6);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "space-y-6",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
        variant: "ghost",
        size: "sm",
        asChild: true,
        className: "-ml-2",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
          to: "/post-offices",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
              className: "size-4",
              "aria-hidden": true,
            }),
            " Back to post offices",
          ],
        }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
        title: office.name,
        subtitle: `${office.district}, ${office.state} · PIN ${office.pincode}`,
        actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
          status: office.status,
        }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "grid gap-6 xl:grid-cols-3",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
            title: "Office Information",
            className: "xl:col-span-2",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "grid gap-x-8 sm:grid-cols-2",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldRow, {
                      label: "Post Office",
                      value: office.name,
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldRow, {
                      label: "PIN",
                      value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        className: "tabular",
                        children: office.pincode,
                      }),
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldRow, {
                      label: "District",
                      value: office.district,
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldRow, {
                      label: "State",
                      value: office.state,
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldRow, {
                      label: "Region",
                      value: office.region,
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldRow, {
                      label: "Division",
                      value: office.division,
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldRow, {
                      label: "Mapping Version",
                      value: office.mappingVersion,
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldRow, {
                      label: "Coordinates",
                      value: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                        className: "tabular",
                        children: [office.latitude.toFixed(4), ", ", office.longitude.toFixed(4)],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
            title: "Location",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className:
                "flex h-48 flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-border bg-surface text-center",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
                  className: "size-6 text-primary",
                  "aria-hidden": true,
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  className: "text-sm font-medium",
                  children: "Map preview unavailable",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                  className: "tabular text-xs text-muted-foreground",
                  children: [office.latitude.toFixed(4), ", ", office.longitude.toFixed(4)],
                }),
              ],
            }),
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
        title: "Mapping History",
        bodyClassName: "p-4",
        children:
          history.length === 0
            ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
                title: "No mapping changes recorded",
                description: "This office uses the baseline mapping.",
              })
            : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
                columns: [
                  {
                    key: "version",
                    header: "Version",
                    render: (m) => m.version,
                  },
                  {
                    key: "type",
                    header: "Change Type",
                    render: (m) =>
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
                        status: m.changeType,
                      }),
                  },
                  {
                    key: "from",
                    header: "Effective From",
                    render: (m) => formatDate(m.effectiveFrom),
                  },
                  {
                    key: "mapping",
                    header: "New Mapping",
                    render: (m) => m.newMapping,
                  },
                ],
                rows: history,
                rowKey: (m) => m.id,
                dense: true,
                caption: "Mapping history",
              }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
        title: "Recent Predictions",
        bodyClassName: "p-4",
        children:
          recent.length === 0
            ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
                title: "No recent predictions",
                description: "No addresses have been routed to this office in the current window.",
              })
            : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
                columns: [
                  {
                    key: "time",
                    header: "Time",
                    render: (p) =>
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        className: "tabular text-xs",
                        children: formatDateTime(p.createdAt),
                      }),
                  },
                  {
                    key: "address",
                    header: "Address",
                    render: (p) =>
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        className: "line-clamp-1",
                        children: p.rawAddress,
                      }),
                  },
                  {
                    key: "pin",
                    header: "PIN",
                    render: (p) =>
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        className: "tabular",
                        children: p.pincode,
                      }),
                  },
                  {
                    key: "conf",
                    header: "Confidence",
                    render: (p) =>
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfidenceBadge, {
                        value: p.confidence,
                        showLabel: false,
                      }),
                  },
                ],
                rows: recent,
                rowKey: (p) => p.id,
                dense: true,
                caption: "Recent predictions",
              }),
      }),
    ],
  });
}
//#endregion
export { PostOfficeDetailPage as component };
