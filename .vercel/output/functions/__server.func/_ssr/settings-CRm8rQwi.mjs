import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-collapsible+[...].mjs";
import {
  _ as SelectValue,
  b as cn,
  d as Panel,
  g as SelectTrigger,
  h as SelectItem,
  i as FieldRow,
  l as Label,
  m as SelectContent,
  p as Select,
  t as Button,
  u as PageHeader,
  x as currentOperator,
} from "./primitives-Df9_3jyn.mjs";
import { c as formatDateTime, r as Pill } from "./badges-COb38zu6.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as SwitchThumb, t as Switch$1 } from "../_libs/radix-ui__react-switch.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/settings-CRm8rQwi.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Switch = import_react.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch$1, {
    className: cn(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className,
    ),
    ...props,
    ref,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchThumb, {
      className: cn(
        "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0",
      ),
    }),
  }),
);
Switch.displayName = Switch$1.displayName;
function SettingsPage() {
  const [density, setDensity] = (0, import_react.useState)("comfortable");
  const [appearance, setAppearance] = (0, import_react.useState)("light");
  const [language, setLanguage] = (0, import_react.useState)("en-IN");
  const [reviewAlerts, setReviewAlerts] = (0, import_react.useState)(true);
  const [mappingAlerts, setMappingAlerts] = (0, import_react.useState)(true);
  const [lowConfidence, setLowConfidence] = (0, import_react.useState)(false);
  const [stripedRows, setStripedRows] = (0, import_react.useState)(true);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "space-y-6",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
        title: "Operator Profile & Settings",
        subtitle: "Workstation preferences — demonstration only, no sign-in is configured",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "grid gap-6 xl:grid-cols-3",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
            title: "Profile",
            accent: true,
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "mb-4 flex items-center gap-3",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    className:
                      "flex size-12 items-center justify-center rounded-full bg-primary-soft text-base font-semibold text-primary-dark",
                    children: "MP",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                        className: "text-base font-semibold",
                        children: currentOperator.name,
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
                        tone: "success",
                        children: "Online",
                      }),
                    ],
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldRow, {
                label: "Role",
                value: currentOperator.role,
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldRow, {
                label: "Post Office",
                value: currentOperator.postOffice,
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldRow, {
                label: "Employee ID",
                value: currentOperator.employeeId,
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldRow, {
                label: "Last active",
                value: formatDateTime(currentOperator.lastActive),
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
            title: "Appearance & Density",
            className: "xl:col-span-2",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "grid gap-4 sm:grid-cols-2",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "space-y-1.5",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
                      htmlFor: "appearance",
                      children: "Appearance",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
                      value: appearance,
                      onValueChange: setAppearance,
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
                          id: "appearance",
                          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {}),
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
                              value: "light",
                              children: "Light (recommended)",
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
                              value: "system",
                              children: "Match system",
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
                      htmlFor: "density",
                      children: "Density",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
                      value: density,
                      onValueChange: setDensity,
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
                          id: "density",
                          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {}),
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
                              value: "comfortable",
                              children: "Comfortable",
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
                              value: "compact",
                              children: "Compact",
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
                      htmlFor: "language",
                      children: "Language",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
                      value: language,
                      onValueChange: setLanguage,
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
                          id: "language",
                          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {}),
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
                              value: "en-IN",
                              children: "English (India)",
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
                              value: "hi-IN",
                              children: "हिन्दी — coming soon",
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
                              value: "mr-IN",
                              children: "मराठी — coming soon",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className:
                    "flex items-center justify-between rounded-lg border border-border px-3 py-2",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
                      htmlFor: "striped",
                      children: "Striped table rows",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
                      id: "striped",
                      checked: stripedRows,
                      onCheckedChange: setStripedRows,
                    }),
                  ],
                }),
              ],
            }),
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
            title: "Notifications",
            className: "xl:col-span-2",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "space-y-3",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className:
                      "flex items-center justify-between rounded-lg border border-border px-3 py-2.5",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
                        htmlFor: "n-review",
                        children: "New review required",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
                        id: "n-review",
                        checked: reviewAlerts,
                        onCheckedChange: setReviewAlerts,
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className:
                      "flex items-center justify-between rounded-lg border border-border px-3 py-2.5",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
                        htmlFor: "n-mapping",
                        children: "Mapping change detected",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
                        id: "n-mapping",
                        checked: mappingAlerts,
                        onCheckedChange: setMappingAlerts,
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className:
                      "flex items-center justify-between rounded-lg border border-border px-3 py-2.5",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
                        htmlFor: "n-low",
                        children: "Low-confidence prediction",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
                        id: "n-low",
                        checked: lowConfidence,
                        onCheckedChange: setLowConfidence,
                      }),
                    ],
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
                className: "mt-4",
                onClick: () => toast.success("Preferences saved for this session"),
                children: "Save preferences",
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
            title: "Keyboard Shortcuts",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
              className: "space-y-2 text-sm",
              children: [
                ["Ctrl + Enter", "Run prediction"],
                ["Ctrl + K", "Focus search"],
                ["G then D", "Go to dashboard"],
                ["G then R", "Go to review queue"],
                ["Esc", "Close panel"],
              ].map(([keys, action]) =>
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                  "li",
                  {
                    className: "flex items-center justify-between gap-3",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        className: "text-muted-foreground",
                        children: action,
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
                        className: "rounded border border-border bg-muted px-2 py-0.5 text-xs",
                        children: keys,
                      }),
                    ],
                  },
                  keys,
                ),
              ),
            }),
          }),
        ],
      }),
    ],
  });
}
//#endregion
export { SettingsPage as component };
