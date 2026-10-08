import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import {
  m as require_jsx_runtime,
  n as CollapsibleTrigger$1,
  r as Root,
  t as CollapsibleContent$1,
} from "../_libs/@radix-ui/react-collapsible+[...].mjs";
import {
  D as CircleX,
  O as CircleCheck,
  _ as LoaderCircle,
  a as Sparkles,
  g as MapPin,
  i as Trash2,
  j as ChevronDown,
} from "../_libs/lucide-react.mjs";
import {
  C as districtsByState,
  _ as SelectValue,
  d as Panel,
  g as SelectTrigger,
  h as SelectItem,
  j as states,
  l as Label,
  m as SelectContent,
  p as Select,
  r as EntityChip,
  s as Input,
  t as Button,
  u as PageHeader,
} from "./primitives-Df9_3jyn.mjs";
import { g as predictAddress } from "./postroute-CSNwraMv.mjs";
import { n as ErrorState, t as EmptyState } from "./states-CV8sBkR8.mjs";
import {
  l as formatPercent,
  n as ConfidenceBar,
  o as confidenceLevel,
  r as Pill,
} from "./badges-COb38zu6.mjs";
import { t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Textarea } from "./textarea-B-o4L7Tb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/prediction-zOJuZuPt.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Collapsible = Root;
var CollapsibleTrigger = CollapsibleTrigger$1;
var CollapsibleContent = CollapsibleContent$1;
function PredictionPage() {
  const navigate = useNavigate();
  const [address, setAddress] = (0, import_react.useState)("");
  const [state, setState] = (0, import_react.useState)("");
  const [district, setDistrict] = (0, import_react.useState)("");
  const [pincode, setPincode] = (0, import_react.useState)("");
  const [mode, setMode] = (0, import_react.useState)("automatic");
  const mutation = useMutation({ mutationFn: (input) => predictAddress(input) });
  const submit = () => {
    const payload = {
      rawAddress: address,
      mode,
      ...(state ? { state } : {}),
      ...(district ? { district } : {}),
      ...(pincode ? { pincode } : {}),
    };
    mutation.mutate(payload);
  };
  const clear = () => {
    setAddress("");
    setState("");
    setDistrict("");
    setPincode("");
    mutation.reset();
  };
  const result = mutation.data;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "space-y-6",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
        title: "Address Prediction",
        subtitle: "Identify the most probable delivery post office and PIN code",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "grid gap-6 xl:grid-cols-[minmax(0,420px)_minmax(0,1fr)]",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "space-y-6",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
                title: "Address Input",
                accent: true,
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
                  onSubmit: (e) => {
                    e.preventDefault();
                    submit();
                  },
                  className: "space-y-4",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className: "space-y-1.5",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
                          htmlFor: "address",
                          children: "Postal Address",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
                          id: "address",
                          value: address,
                          onChange: (e) => setAddress(e.target.value),
                          onKeyDown: (e) => {
                            if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
                              e.preventDefault();
                              submit();
                            }
                          },
                          rows: 5,
                          placeholder: "Enter or paste a postal address...",
                          className: "resize-y bg-card text-base",
                          "aria-describedby": "address-help",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                          id: "address-help",
                          className: "text-xs text-muted-foreground",
                          children: [
                            "Example: Flat 302, Baner Road, near Balewadi, Pune ·",
                            " ",
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
                              className:
                                "rounded border border-border bg-muted px-1 py-0.5 text-[10px]",
                              children: "Ctrl",
                            }),
                            " ",
                            "+",
                            " ",
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
                              className:
                                "rounded border border-border bg-muted px-1 py-0.5 text-[10px]",
                              children: "Enter",
                            }),
                            " ",
                            "to predict",
                          ],
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className: "grid gap-3 sm:grid-cols-2",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className: "space-y-1.5",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
                              htmlFor: "state",
                              children: "Region (optional)",
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
                              value: state,
                              onValueChange: (v) => {
                                setState(v);
                                setDistrict("");
                              },
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
                                  id: "state",
                                  className: "bg-card",
                                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    SelectValue,
                                    { placeholder: "Select state" },
                                  ),
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
                                  children: states.map((s) =>
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      SelectItem,
                                      {
                                        value: s,
                                        children: s,
                                      },
                                      s,
                                    ),
                                  ),
                                }),
                              ],
                            }),
                          ],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className: "space-y-1.5",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
                              htmlFor: "district",
                              children: "District (optional)",
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
                              value: district,
                              onValueChange: setDistrict,
                              disabled: !state,
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
                                  id: "district",
                                  className: "bg-card",
                                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    SelectValue,
                                    {
                                      placeholder: state ? "Select district" : "Select state first",
                                    },
                                  ),
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
                                  children: (districtsByState[state] ?? []).map((d) =>
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      SelectItem,
                                      {
                                        value: d,
                                        children: d,
                                      },
                                      d,
                                    ),
                                  ),
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
                          htmlFor: "pincode",
                          children: "PIN (optional)",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
                          id: "pincode",
                          inputMode: "numeric",
                          maxLength: 6,
                          value: pincode,
                          onChange: (e) => setPincode(e.target.value.replace(/\D/g, "")),
                          placeholder: "411045",
                          className: "tabular bg-card",
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
                      className: "space-y-1.5",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
                          className: "text-sm font-medium",
                          children: "Processing Mode",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                          className: "inline-flex rounded-lg border border-border bg-surface p-1",
                          children: ["automatic", "assisted"].map((option) =>
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                              "button",
                              {
                                type: "button",
                                "aria-pressed": mode === option,
                                onClick: () => setMode(option),
                                className: `rounded-md px-4 py-1.5 text-sm font-medium capitalize transition-colors ${mode === option ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`,
                                children: option,
                              },
                              option,
                            ),
                          ),
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                          className: "text-xs text-muted-foreground",
                          children:
                            mode === "automatic"
                              ? "High-confidence results are routed without operator input."
                              : "Every result is presented for operator confirmation.",
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className: "flex flex-wrap gap-2 pt-1",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
                          type: "submit",
                          disabled: !address.trim() || mutation.isPending,
                          children: mutation.isPending
                            ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                import_jsx_runtime.Fragment,
                                {
                                  children: [
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
                                      className: "size-4 animate-spin",
                                      "aria-hidden": true,
                                    }),
                                    " Predicting…",
                                  ],
                                },
                              )
                            : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                import_jsx_runtime.Fragment,
                                {
                                  children: [
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
                                      className: "size-4",
                                      "aria-hidden": true,
                                    }),
                                    " Predict Address",
                                  ],
                                },
                              ),
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
                          type: "button",
                          variant: "outline",
                          onClick: clear,
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {
                              className: "size-4",
                              "aria-hidden": true,
                            }),
                            " Clear",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              result && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessingPanel, { result }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "space-y-6",
            children: [
              mutation.isPending &&
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
                  title: "Prediction Result",
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className: "flex flex-col items-center gap-3 py-16 text-center",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
                        className: "size-7 animate-spin text-primary",
                        "aria-hidden": true,
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                        className: "text-sm font-medium",
                        children: "Analyzing address…",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                        className: "text-sm text-muted-foreground",
                        children:
                          "Normalizing tokens, matching localities and validating mapping V3.",
                      }),
                    ],
                  }),
                }),
              mutation.isError &&
                !mutation.isPending &&
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
                  title: "Prediction Result",
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorState, {
                    title: "Prediction failed",
                    description: mutation.error.message,
                    onRetry: submit,
                  }),
                }),
              !mutation.isPending &&
                !mutation.isError &&
                !result &&
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
                  title: "Prediction Result",
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
                    title: "Prediction results will appear here",
                    description:
                      "Enter a postal address on the left and run a prediction to see the delivery post office, confidence and alternative matches.",
                    icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
                      className: "size-5",
                      "aria-hidden": true,
                    }),
                  }),
                }),
              result &&
                !mutation.isPending &&
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResultView, {
                  result,
                  onReset: clear,
                  navigateToReview: () => navigate({ to: "/review" }),
                }),
            ],
          }),
        ],
      }),
    ],
  });
}
function ResultView({ result, onReset, navigateToReview }) {
  const level = confidenceLevel(result.confidence);
  const levelLabel =
    level === "high"
      ? "High Confidence"
      : level === "medium"
        ? "Medium Confidence"
        : "Low Confidence";
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "space-y-6",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
        title: "Prediction Result",
        accent: true,
        actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
          tone: level === "high" ? "success" : level === "medium" ? "warning" : "error",
          children: levelLabel,
        }),
        children: [
          level === "low" &&
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
              className:
                "mb-4 rounded-md border border-warning/30 bg-warning-soft px-3 py-2 text-sm text-warning",
              children:
                "Manual review required — confidence is below the auto-routing threshold of 70%.",
            }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "rounded-lg border border-border bg-surface p-4 sm:col-span-2",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                    className: "text-xs tracking-wide text-muted-foreground uppercase",
                    children: "Predicted PIN",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                    className: "tabular mt-1 text-4xl font-semibold text-primary-dark",
                    children: result.pincode,
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                    className: "mt-2 text-sm font-medium text-foreground",
                    children: result.postOffice,
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "rounded-lg border border-border bg-surface p-4",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                    className: "text-xs tracking-wide text-muted-foreground uppercase",
                    children: "District",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                    className: "mt-1 text-lg font-semibold",
                    children: result.district,
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                    className: "mt-3 text-xs tracking-wide text-muted-foreground uppercase",
                    children: "State",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                    className: "mt-1 text-lg font-semibold",
                    children: result.state,
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "rounded-lg border border-border bg-surface p-4",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                    className: "text-xs tracking-wide text-muted-foreground uppercase",
                    children: "Confidence",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                    className: "tabular mt-1 text-3xl font-semibold",
                    children: formatPercent(result.confidence),
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfidenceBar, {
                    value: result.confidence,
                    className: "mt-3",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                    className: "mt-2 text-xs text-muted-foreground",
                    children: levelLabel,
                  }),
                ],
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "mt-5 flex flex-wrap gap-2",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
                onClick: () => {
                  toast.success("Added to route", {
                    description: `Successfully routed to ${result.pincode} · ${result.postOffice}`,
                  });
                  onReset();
                },
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
                    className: "size-4",
                    "aria-hidden": true,
                  }),
                  " Confirm Routing",
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
                variant: "outline",
                onClick: () => {
                  toast.info("Added to review queue", {
                    description: "This prediction has been flagged for manual operator review.",
                  });
                  navigateToReview();
                },
                children: "Send to Review",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
                variant: "ghost",
                onClick: onReset,
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, {
                    className: "size-4",
                    "aria-hidden": true,
                  }),
                  " Try Another Address",
                ],
              }),
            ],
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
        title: "Alternative Matches",
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
              children: result.candidates.map((c) =>
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
                        className: "tabular px-5 py-3 text-right",
                        children: formatPercent(c.confidence),
                      }),
                    ],
                  },
                  `${c.rank}-${c.postOffice}`,
                ),
              ),
            }),
          ],
        }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
        title: "Prediction Explanation",
        description: "Interpretable factors — full model reasoning will come from the backend.",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
          className: "space-y-2",
          children: result.explanation.map((factor) =>
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
              "li",
              {
                className: "flex items-start gap-2.5 text-sm",
                children: [
                  factor.matched
                    ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
                        className: "mt-0.5 size-4 shrink-0 text-success",
                        "aria-hidden": true,
                      })
                    : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, {
                        className: "mt-0.5 size-4 shrink-0 text-muted-foreground",
                        "aria-hidden": true,
                      }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        className: "font-medium text-foreground",
                        children: factor.label,
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                        className: "text-muted-foreground",
                        children: [" — ", factor.detail],
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        className: "sr-only",
                        children: factor.matched ? " (matched)" : " (not matched)",
                      }),
                    ],
                  }),
                ],
              },
              factor.label,
            ),
          ),
        }),
      }),
    ],
  });
}
function ProcessingPanel({ result }) {
  const [open, setOpen] = (0, import_react.useState)(true);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collapsible, {
    open,
    onOpenChange: setOpen,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className: "rounded-xl border border-border bg-card shadow-card",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CollapsibleTrigger, {
          className: "flex w-full items-center justify-between px-5 py-4 text-left",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
              className: "text-base font-semibold",
              children: "Address Processing",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
              className: `size-4 transition-transform ${open ? "rotate-180" : ""}`,
              "aria-hidden": true,
            }),
          ],
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsibleContent, {
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "space-y-4 border-t border-border px-5 py-4",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                    className: "text-xs tracking-wide text-muted-foreground uppercase",
                    children: "Raw input",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                    className: "mt-1 rounded-md bg-muted px-3 py-2 font-mono text-xs break-words",
                    children: result.normalization.raw,
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                    className: "text-xs tracking-wide text-muted-foreground uppercase",
                    children: "Normalized",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                    className:
                      "mt-1 rounded-md bg-primary-soft px-3 py-2 text-sm text-primary-dark",
                    children: result.normalization.normalized,
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                    className: "text-xs tracking-wide text-muted-foreground uppercase",
                    children: "Detected components",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                    className: "mt-2 flex flex-wrap gap-2",
                    children: result.normalization.components.map((c) =>
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                        EntityChip,
                        {
                          label: c.label,
                          value: c.value,
                        },
                        `${c.type}-${c.value}`,
                      ),
                    ),
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
//#endregion
export { PredictionPage as component };
