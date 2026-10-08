import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-collapsible+[...].mjs";
import { R as ArrowLeft, f as RefreshCw } from "../_libs/lucide-react.mjs";
import {
  _ as SelectValue,
  d as Panel,
  g as SelectTrigger,
  h as SelectItem,
  i as FieldRow,
  m as SelectContent,
  p as Select,
  t as Button,
  u as PageHeader,
} from "./primitives-Df9_3jyn.mjs";
import { s as getParcel, v as updateParcelStatus } from "./postroute-CSNwraMv.mjs";
import { n as ErrorState, r as LoadingState } from "./states-CV8sBkR8.mjs";
import {
  a as StatusBadge,
  c as formatDateTime,
  d as labels,
  l as formatPercent,
  n as ConfidenceBar,
  t as ConfidenceBadge,
} from "./badges-COb38zu6.mjs";
import { n as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./parcels_._parcelId-BOwq02BW.mjs";
import { t as Timeline } from "./timeline-MVCgcup9.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/parcels_._parcelId-CgHDUmSV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ParcelDetailPage() {
  const { parcelId } = Route.useParams();
  const query = useQuery({
    queryKey: ["parcel", parcelId],
    queryFn: () => getParcel(parcelId),
  });
  const [nextStatus, setNextStatus] = (0, import_react.useState)("");
  const mutation = useMutation({
    mutationFn: ({ status }) => updateParcelStatus(parcelId, status),
    onSuccess: (_d, v) =>
      toast.success("Parcel status updated", {
        description: `${parcelId} → ${labels.parcelStatus[v.status]}`,
      }),
  });
  if (query.isLoading)
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingState, {
      label: "Loading parcel…",
      rows: 6,
    });
  if (query.error || !query.data)
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorState, {
      title: "Parcel not found",
      description: query.error?.message ?? "No such parcel.",
      onRetry: () => query.refetch(),
    });
  const parcel = query.data;
  const currentIndex = parcel.timeline.findIndex((t) => t.status === parcel.status);
  const steps = parcel.timeline.map((event, index) => ({
    label: event.label,
    timestamp: event.timestamp ? formatDateTime(event.timestamp) : null,
    note: event.note,
    state: index < currentIndex ? "done" : index === currentIndex ? "current" : "pending",
  }));
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "space-y-6",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
        variant: "ghost",
        size: "sm",
        asChild: true,
        className: "-ml-2",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
          to: "/parcels",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
              className: "size-4",
              "aria-hidden": true,
            }),
            " Back to parcels",
          ],
        }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
        title: `Parcel ${parcel.id}`,
        subtitle: `Last updated ${formatDateTime(parcel.updatedAt)}`,
        actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
          status: parcel.status,
        }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-5",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
            bodyClassName: "p-4",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                className: "text-xs tracking-wide text-muted-foreground uppercase",
                children: "Current Status",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                className: "mt-2 text-lg font-semibold",
                children: labels.parcelStatus[parcel.status],
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
            bodyClassName: "p-4",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                className: "text-xs tracking-wide text-muted-foreground uppercase",
                children: "PIN",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                className: "tabular mt-2 text-2xl font-semibold text-primary-dark",
                children: parcel.pincode,
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
            bodyClassName: "p-4",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                className: "text-xs tracking-wide text-muted-foreground uppercase",
                children: "Delivery Office",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                className: "mt-2 text-lg font-semibold",
                children: parcel.postOffice,
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
            bodyClassName: "p-4",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                className: "text-xs tracking-wide text-muted-foreground uppercase",
                children: "Confidence",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                className: "tabular mt-2 text-2xl font-semibold",
                children: formatPercent(parcel.confidence),
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfidenceBar, {
                value: parcel.confidence,
                className: "mt-2",
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
            bodyClassName: "p-4",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                className: "text-xs tracking-wide text-muted-foreground uppercase",
                children: "Assigned Operator",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                className: "mt-2 text-lg font-semibold",
                children: parcel.operator,
              }),
            ],
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "grid gap-6 xl:grid-cols-3",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "space-y-6 xl:col-span-2",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
                title: "Address",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldRow, {
                    label: "Raw address",
                    value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                      className: "font-mono text-xs",
                      children: parcel.rawAddress,
                    }),
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldRow, {
                    label: "Normalized address",
                    value: parcel.normalizedAddress,
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
                title: "Prediction",
                bodyClassName: "p-0",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
                  className: "w-full text-sm",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
                        className:
                          "border-b border-border bg-surface text-xs tracking-wide text-muted-foreground uppercase",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
                            scope: "col",
                            className: "px-5 py-2.5 text-left",
                            children: "Rank",
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
                            scope: "col",
                            className: "px-5 py-2.5 text-left",
                            children: "Post Office",
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
                            scope: "col",
                            className: "px-5 py-2.5 text-left",
                            children: "PIN",
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
                            scope: "col",
                            className: "px-5 py-2.5 text-right",
                            children: "Confidence",
                          }),
                        ],
                      }),
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
                      children: parcel.candidates.map((c) =>
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                          "tr",
                          {
                            className: "border-b border-border/70 last:border-0",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
                                className: "tabular px-5 py-3",
                                children: c.rank,
                              }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
                                className: "px-5 py-3 font-medium",
                                children: c.postOffice,
                              }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
                                className: "tabular px-5 py-3",
                                children: c.pincode,
                              }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
                                className: "px-5 py-3 text-right",
                                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                  ConfidenceBadge,
                                  {
                                    value: c.confidence,
                                    showLabel: false,
                                  },
                                ),
                              }),
                            ],
                          },
                          c.rank,
                        ),
                      ),
                    }),
                  ],
                }),
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "space-y-6",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
                title: "Routing Timeline",
                accent: true,
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timeline, { steps }),
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
                title: "Update Status",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "space-y-3",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
                      value: nextStatus,
                      onValueChange: (v) => setNextStatus(v),
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
                          "aria-label": "Select new parcel status",
                          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
                            placeholder: "Select new status",
                          }),
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
                          children: Object.entries(labels.parcelStatus).map(([value, label]) =>
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                              SelectItem,
                              {
                                value,
                                children: label,
                              },
                              value,
                            ),
                          ),
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
                      className: "w-full",
                      disabled: !nextStatus || mutation.isPending,
                      onClick: () => nextStatus && mutation.mutate({ status: nextStatus }),
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, {
                          className: "size-4",
                          "aria-hidden": true,
                        }),
                        " Update Status",
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
//#endregion
export { ParcelDetailPage as component };
