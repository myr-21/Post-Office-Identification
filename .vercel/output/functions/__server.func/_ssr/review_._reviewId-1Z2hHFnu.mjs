import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-collapsible+[...].mjs";
import {
  D as CircleX,
  O as CircleCheck,
  R as ArrowLeft,
  p as PencilLine,
  r as TriangleAlert,
} from "../_libs/lucide-react.mjs";
import {
  _ as SelectValue,
  d as Panel,
  g as SelectTrigger,
  h as SelectItem,
  i as FieldRow,
  l as Label,
  m as SelectContent,
  p as Select,
  s as Input,
  t as Button,
  u as PageHeader,
} from "./primitives-Df9_3jyn.mjs";
import { _ as submitReviewDecision, f as getReviewItem } from "./postroute-CSNwraMv.mjs";
import { n as ErrorState, r as LoadingState } from "./states-CV8sBkR8.mjs";
import {
  c as formatDateTime,
  d as labels,
  i as PriorityBadge,
  l as formatPercent,
  n as ConfidenceBar,
  r as Pill,
  t as ConfidenceBadge,
} from "./badges-COb38zu6.mjs";
import { n as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { b as Link, x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Textarea } from "./textarea-B-o4L7Tb.mjs";
import { t as Route } from "./review_._reviewId-uGeKiz81.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/review_._reviewId-1Z2hHFnu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ReviewDetailPage() {
  const { reviewId } = Route.useParams();
  const navigate = useNavigate();
  const query = useQuery({
    queryKey: ["review-item", reviewId],
    queryFn: () => getReviewItem(reviewId),
  });
  const [correcting, setCorrecting] = (0, import_react.useState)(false);
  const [pin, setPin] = (0, import_react.useState)("");
  const [office, setOffice] = (0, import_react.useState)("");
  const [reason, setReason] = (0, import_react.useState)("");
  const [notes, setNotes] = (0, import_react.useState)("");
  const [resolved, setResolved] = (0, import_react.useState)(null);
  const mutation = useMutation({
    mutationFn: submitReviewDecision,
    onSuccess: (_data, variables) => {
      const map = {
        approve: "Prediction approved",
        correct: "Correction saved",
        reject: "Prediction rejected",
        escalate: "Escalated to supervisor",
      };
      setResolved(map[variables.decision]);
      toast.success(map[variables.decision], { description: `Review ${reviewId} updated.` });
    },
  });
  if (query.isLoading)
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingState, {
      label: "Loading review…",
      rows: 6,
    });
  if (query.error || !query.data)
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorState, {
      title: "Review not found",
      description: query.error?.message ?? "This review item does not exist.",
      onRetry: () => query.refetch(),
    });
  const item = query.data;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "space-y-6",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
        variant: "ghost",
        size: "sm",
        asChild: true,
        className: "-ml-2",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
          to: "/review",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
              className: "size-4",
              "aria-hidden": true,
            }),
            " Back to review queue",
          ],
        }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
        title: `Review ${item.id}`,
        subtitle: `${item.parcelId} · created ${formatDateTime(item.createdAt)}`,
        actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "flex items-center gap-2",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PriorityBadge, { priority: item.priority }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
              tone: "warning",
              children: labels.reviewReason[item.reason],
            }),
          ],
        }),
      }),
      resolved &&
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
          className:
            "flex items-center gap-2 rounded-md border border-success/30 bg-success-soft px-3 py-2 text-sm text-success",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
              className: "size-4",
              "aria-hidden": true,
            }),
            " ",
            resolved,
            ". This item has been removed from the pending queue (demonstration only).",
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
                    label: "Original address",
                    value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                      className: "font-mono text-xs",
                      children: item.rawAddress,
                    }),
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldRow, {
                    label: "Normalized address",
                    value: item.normalizedAddress,
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldRow, {
                    label: "District / State",
                    value: `${item.district}, ${item.state}`,
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
                title: "Prediction",
                accent: true,
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "grid gap-4 sm:grid-cols-3",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                          className: "text-xs tracking-wide text-muted-foreground uppercase",
                          children: "PIN",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                          className: "tabular mt-1 text-3xl font-semibold text-primary-dark",
                          children: item.pincode,
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                          className: "text-xs tracking-wide text-muted-foreground uppercase",
                          children: "Post Office",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                          className: "mt-1 text-lg font-semibold",
                          children: item.postOffice,
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                          className: "text-xs tracking-wide text-muted-foreground uppercase",
                          children: "Confidence",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                          className: "tabular mt-1 text-2xl font-semibold",
                          children: formatPercent(item.confidence),
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfidenceBar, {
                          value: item.confidence,
                          className: "mt-2",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
                title: "Candidate Matches",
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
                      children: item.candidates.map((c) =>
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
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
                title: "Mapping Information",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldRow, {
                    label: "Current mapping",
                    value: item.mapping.current,
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldRow, {
                    label: "Historical mapping",
                    value: item.mapping.historical,
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldRow, {
                    label: "Potential conflict",
                    value: item.mapping.conflict
                      ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                          className: "flex items-center gap-1.5 text-warning",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
                              className: "size-4",
                              "aria-hidden": true,
                            }),
                            " ",
                            item.mapping.conflict,
                          ],
                        })
                      : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                          className: "text-muted-foreground",
                          children: "None detected",
                        }),
                  }),
                ],
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "space-y-6",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
                title: "Operator Decision",
                accent: true,
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className: "grid gap-2",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
                        disabled: mutation.isPending || Boolean(resolved),
                        onClick: () =>
                          mutation.mutate({
                            id: item.id,
                            decision: "approve",
                          }),
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
                            className: "size-4",
                            "aria-hidden": true,
                          }),
                          " Approve Prediction",
                        ],
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
                        variant: "outline",
                        disabled: Boolean(resolved),
                        onClick: () => setCorrecting((v) => !v),
                        "aria-expanded": correcting,
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PencilLine, {
                            className: "size-4",
                            "aria-hidden": true,
                          }),
                          " Correct Prediction",
                        ],
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
                        variant: "outline",
                        disabled: mutation.isPending || Boolean(resolved),
                        onClick: () =>
                          mutation.mutate({
                            id: item.id,
                            decision: "reject",
                          }),
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, {
                            className: "size-4",
                            "aria-hidden": true,
                          }),
                          " Reject",
                        ],
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
                        variant: "ghost",
                        disabled: mutation.isPending || Boolean(resolved),
                        onClick: () =>
                          mutation.mutate({
                            id: item.id,
                            decision: "escalate",
                          }),
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
                            className: "size-4",
                            "aria-hidden": true,
                          }),
                          " Escalate",
                        ],
                      }),
                    ],
                  }),
                  correcting &&
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
                      className: "mt-5 space-y-3 border-t border-border pt-4",
                      onSubmit: (e) => {
                        e.preventDefault();
                        mutation.mutate({
                          id: item.id,
                          decision: "correct",
                          correctedPincode: pin,
                          correctedPostOffice: office,
                          reason,
                          notes,
                        });
                        setCorrecting(false);
                      },
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className: "space-y-1.5",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
                              htmlFor: "correct-pin",
                              children: "Correct PIN",
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
                              id: "correct-pin",
                              required: true,
                              inputMode: "numeric",
                              maxLength: 6,
                              value: pin,
                              onChange: (e) => setPin(e.target.value.replace(/\D/g, "")),
                              className: "tabular",
                              placeholder: "411045",
                            }),
                          ],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className: "space-y-1.5",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
                              htmlFor: "correct-office",
                              children: "Correct Post Office",
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
                              id: "correct-office",
                              required: true,
                              value: office,
                              onChange: (e) => setOffice(e.target.value),
                              placeholder: "Baner S.O",
                            }),
                          ],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className: "space-y-1.5",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
                              htmlFor: "correct-reason",
                              children: "Correction Reason",
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
                              value: reason,
                              onValueChange: setReason,
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
                                  id: "correct-reason",
                                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    SelectValue,
                                    { placeholder: "Select a reason" },
                                  ),
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
                                  children: [
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
                                      value: "wrong_locality",
                                      children: "Wrong locality matched",
                                    }),
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
                                      value: "outdated_mapping",
                                      children: "Outdated mapping",
                                    }),
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
                                      value: "incomplete_address",
                                      children: "Incomplete address",
                                    }),
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
                                      value: "operator_knowledge",
                                      children: "Local operator knowledge",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className: "space-y-1.5",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
                              htmlFor: "correct-notes",
                              children: "Notes",
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
                              id: "correct-notes",
                              rows: 3,
                              value: notes,
                              onChange: (e) => setNotes(e.target.value),
                              placeholder: "Optional context for the supervisor",
                            }),
                          ],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
                          type: "submit",
                          className: "w-full",
                          disabled: mutation.isPending,
                          children: "Save Correction",
                        }),
                      ],
                    }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
                title: "Assignment",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldRow, {
                    label: "Operator",
                    value: item.operator,
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldRow, {
                    label: "Status",
                    value: labels.reviewStatus[item.status],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldRow, {
                    label: "Parcel",
                    value: item.parcelId,
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
                    variant: "outline",
                    className: "mt-3 w-full",
                    onClick: () => navigate({ to: "/parcels" }),
                    children: "Open parcel routing",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
//#endregion
export { ReviewDetailPage as component };
