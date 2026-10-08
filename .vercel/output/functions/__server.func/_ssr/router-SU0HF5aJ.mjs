import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-collapsible+[...].mjs";
import {
  A as ChevronRight,
  E as Circle,
  F as Bell,
  M as Check,
  N as ChartColumn,
  O as CircleCheck,
  P as Building2,
  S as FileExclamationPoint,
  T as ClipboardCheck,
  c as ShieldAlert,
  d as Route,
  g as MapPin,
  h as Menu,
  l as Settings,
  m as Package,
  n as UserRound,
  o as Signal,
  r as TriangleAlert,
  t as X,
  v as LayoutDashboard,
  z as Activity,
} from "../_libs/lucide-react.mjs";
import {
  a as Label2,
  c as Root2,
  d as SubTrigger2,
  f as Trigger,
  i as ItemIndicator2,
  l as Separator2,
  n as Content2,
  o as Portal2,
  r as Item2,
  s as RadioItem2,
  t as CheckboxItem2,
  u as SubContent2,
} from "../_libs/@radix-ui/react-dropdown-menu+[...].mjs";
import {
  b as cn,
  f as SearchBar,
  t as Button,
  x as currentOperator,
} from "./primitives-Df9_3jyn.mjs";
import { o as getNotifications } from "./postroute-CSNwraMv.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { n as useQuery, r as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import {
  S as useRouter,
  _ as lazyRouteComponent,
  b as Link,
  d as Scripts,
  f as HeadContent,
  g as Outlet,
  h as createRouter,
  p as useRouterState,
  v as createFileRoute,
  y as createRootRouteWithContext,
} from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route$11 } from "./parcels_._parcelId-BOwq02BW.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { t as Route$12 } from "./post-offices_._officeId-CrrpXH17.mjs";
import { t as Route$13 } from "./review_._reviewId-uGeKiz81.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-SU0HF5aJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-DXP7SOFz.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context,
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error",
    },
  );
  const message =
    error instanceof Response
      ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`
      : error instanceof Error
        ? error.message
        : String(error);
  const stack = error instanceof Error ? error.stack : void 0;
  window.__lovableReportRuntimeError?.({
    message,
    ...(stack !== void 0 && { stack }),
    filename: window.location.pathname,
  });
}
var navItems = [
  {
    to: "/",
    label: "Dashboard",
    icon: LayoutDashboard,
    title: "Operations Dashboard",
    subtitle: "Postal address prediction and routing overview",
  },
  {
    to: "/prediction",
    label: "Address Prediction",
    icon: Route,
    title: "Address Prediction",
    subtitle: "Identify the most probable delivery post office and PIN code",
  },
  {
    to: "/review",
    label: "Review Queue",
    icon: ClipboardCheck,
    title: "Review Queue",
    subtitle: "Predictions requiring operator verification",
  },
  {
    to: "/parcels",
    label: "Parcels",
    icon: Package,
    title: "Parcel Routing",
    subtitle: "Track parcels through address analysis, sorting and dispatch",
  },
  {
    to: "/post-offices",
    label: "Post Offices",
    icon: Building2,
    title: "Post Offices",
    subtitle: "Browse postal offices and their associated PIN mappings",
  },
  {
    to: "/mapping",
    label: "Pincode Mapping",
    icon: MapPin,
    title: "Pincode Mapping",
    subtitle: "Manage current and historical postal mappings",
  },
  {
    to: "/analytics",
    label: "Analytics",
    icon: ChartColumn,
    title: "Analytics & Model Performance",
    subtitle: "Prediction quality metrics across address conditions and models",
  },
  {
    to: "/activity",
    label: "Activity Log",
    icon: Activity,
    title: "Activity Log",
    subtitle: "Chronological record of system and operator actions",
  },
];
function sectionFor(pathname) {
  if (pathname.startsWith("/settings"))
    return {
      title: "Operator Profile & Settings",
      subtitle: "Workstation preferences",
    };
  return (
    [...navItems].filter((item) => item.to !== "/").find((item) => pathname.startsWith(item.to)) ??
    navItems[0]
  );
}
var DropdownMenu = Root2;
var DropdownMenuTrigger = Trigger;
var DropdownMenuSubTrigger = import_react.forwardRef(
  ({ className, inset, children, ...props }, ref) =>
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SubTrigger2, {
      ref,
      className: cn(
        "flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
        inset && "pl-8",
        className,
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "ml-auto" }),
      ],
    }),
);
DropdownMenuSubTrigger.displayName = SubTrigger2.displayName;
var DropdownMenuSubContent = import_react.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SubContent2, {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)",
      className,
    ),
    ...props,
  }),
);
DropdownMenuSubContent.displayName = SubContent2.displayName;
var DropdownMenuContent = import_react.forwardRef(({ className, sideOffset = 4, ...props }, ref) =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal2, {
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
      ref,
      sideOffset,
      className: cn(
        "z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)",
        className,
      ),
      ...props,
    }),
  }),
);
DropdownMenuContent.displayName = Content2.displayName;
var DropdownMenuItem = import_react.forwardRef(({ className, inset, ...props }, ref) =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item2, {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
      inset && "pl-8",
      className,
    ),
    ...props,
  }),
);
DropdownMenuItem.displayName = Item2.displayName;
var DropdownMenuCheckboxItem = import_react.forwardRef(({ className, children, ...props }, ref) =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CheckboxItem2, {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    ),
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemIndicator2, {
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }),
        }),
      }),
      children,
    ],
  }),
);
DropdownMenuCheckboxItem.displayName = CheckboxItem2.displayName;
var DropdownMenuRadioItem = import_react.forwardRef(({ className, children, ...props }, ref) =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RadioItem2, {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    ),
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemIndicator2, {
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, {
            className: "h-2 w-2 fill-current",
          }),
        }),
      }),
      children,
    ],
  }),
);
DropdownMenuRadioItem.displayName = RadioItem2.displayName;
var DropdownMenuLabel = import_react.forwardRef(({ className, inset, ...props }, ref) =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label2, {
    ref,
    className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
    ...props,
  }),
);
DropdownMenuLabel.displayName = Label2.displayName;
var DropdownMenuSeparator = import_react.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator2, {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props,
  }),
);
DropdownMenuSeparator.displayName = Separator2.displayName;
var DropdownMenuShortcut = ({ className, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
    className: cn("ml-auto text-xs tracking-widest opacity-60", className),
    ...props,
  });
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
var iconFor = (type) => {
  switch (type) {
    case "review":
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileExclamationPoint, {
        className: "size-4 text-warning",
        "aria-hidden": true,
      });
    case "mapping":
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
        className: "size-4 text-primary",
        "aria-hidden": true,
      });
    case "low_confidence":
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
        className: "size-4 text-error",
        "aria-hidden": true,
      });
    case "system":
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, {
        className: "size-4 text-info",
        "aria-hidden": true,
      });
    default:
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
        className: "size-4 text-success",
        "aria-hidden": true,
      });
  }
};
function NotificationPanel() {
  const { data = [] } = useQuery({
    queryKey: ["notifications"],
    queryFn: getNotifications,
  });
  const unread = data.filter((n) => n.unread).length;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
        asChild: true,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
          variant: "ghost",
          size: "icon",
          className: "relative",
          "aria-label": `Notifications, ${unread} unread`,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, {
              className: "size-5",
              "aria-hidden": true,
            }),
            unread > 0 &&
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                className:
                  "absolute top-1.5 right-1.5 flex size-4 items-center justify-center rounded-full bg-primary text-[10px] font-semibold text-primary-foreground",
                children: unread,
              }),
          ],
        }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
        align: "end",
        className: "w-88 p-0",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "flex items-center justify-between border-b border-border px-4 py-3",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                className: "text-sm font-semibold",
                children: "Notifications",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                className: "text-xs text-muted-foreground",
                children: [unread, " unread"],
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
            className: "max-h-96 overflow-y-auto",
            children: data.map((n) =>
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                "li",
                {
                  className: cn(
                    "flex gap-3 border-b border-border/70 px-4 py-3 last:border-0",
                    n.unread && "bg-primary-soft/40",
                  ),
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                      className: "mt-0.5",
                      children: iconFor(n.type),
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className: "min-w-0",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                          className: "text-sm font-medium text-foreground",
                          children: n.title,
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                          className: "text-xs text-muted-foreground",
                          children: n.detail,
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                          className: "mt-1 text-[11px] text-muted-foreground",
                          children: n.time,
                        }),
                      ],
                    }),
                  ],
                },
                n.id,
              ),
            ),
          }),
        ],
      }),
    ],
  });
}
function SidebarContent({ onNavigate }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "flex h-full flex-col bg-sidebar",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "flex flex-col border-b border-sidebar-border",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "flex items-center gap-3 px-5 py-5",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
                src: "/logo.png",
                alt: "PostRoute AI Logo",
                className: "size-12 object-contain drop-shadow-sm",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "leading-tight",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                    className: "text-base font-bold text-foreground tracking-tight",
                    children: "PostRoute AI",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                    className:
                      "text-[10px] font-medium text-muted-foreground uppercase tracking-wider mt-0.5",
                    children: "Delivery PO ID",
                  }),
                ],
              }),
            ],
          }),
          {
            BASE_URL: "/",
            DEV: false,
            MODE: "production",
            PROD: true,
            SSR: true,
            TSS_DEV_SERVER: "false",
            TSS_DEV_SSR_STYLES_BASEPATH: "/",
            TSS_DEV_SSR_STYLES_ENABLED: "true",
            TSS_DISABLE_CSRF_MIDDLEWARE_WARNING: "false",
            TSS_INLINE_CSS_ENABLED: "false",
            TSS_ROUTER_BASEPATH: "",
            TSS_SERVER_FN_BASE: "/_serverFn/",
            VITE_API_URL: "http://localhost:8000",
            VITE_USE_MOCK: "false",
          }["VITE_USE_MOCK"] !== "false" &&
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className:
                "bg-amber-100 dark:bg-amber-900/30 px-3 py-2 text-center text-xs font-semibold text-amber-800 dark:text-amber-200 border-t border-amber-200 dark:border-amber-800/50",
              children: [
                "DEMO MODE",
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                  className: "text-[10px] font-normal opacity-80 mt-0.5",
                  children: "Using static prototype data",
                }),
              ],
            }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
        className: "flex-1 overflow-y-auto px-3 py-4",
        "aria-label": "Main",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
          className: "space-y-1",
          children: navItems.map((item) =>
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "li",
              {
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
                  to: item.to,
                  onClick: onNavigate,
                  activeOptions: { exact: item.to === "/" },
                  activeProps: {
                    className:
                      "bg-primary-soft text-primary-dark font-semibold border-l-2 border-l-primary",
                  },
                  inactiveProps: {
                    className: "text-muted-foreground border-l-2 border-l-transparent",
                  },
                  className:
                    "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-colors hover:bg-muted hover:text-foreground",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, {
                      className: "size-4.5 shrink-0",
                      "aria-hidden": true,
                    }),
                    item.label,
                  ],
                }),
              },
              item.to,
            ),
          ),
        }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "space-y-2 border-t border-sidebar-border px-3 py-4",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className:
              "flex items-center gap-2 rounded-md bg-success-soft px-3 py-2 text-xs text-success",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Signal, {
                className: "size-4",
                "aria-hidden": true,
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                className: "font-medium",
                children: "System Status:",
              }),
              " All services operational",
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
            to: "/settings",
            onClick: onNavigate,
            activeProps: { className: "bg-primary-soft text-primary-dark" },
            className:
              "flex items-center gap-3 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, {
                className: "size-4.5",
                "aria-hidden": true,
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                className: "min-w-0 truncate",
                children: [
                  currentOperator.name,
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    className: "block text-[11px] text-muted-foreground",
                    children: currentOperator.role,
                  }),
                ],
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
            to: "/settings",
            onClick: onNavigate,
            className:
              "flex items-center gap-3 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, {
                className: "size-4.5",
                "aria-hidden": true,
              }),
              "Settings",
            ],
          }),
        ],
      }),
    ],
  });
}
function AppShell({ children }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const section = sectionFor(pathname);
  const [mobileOpen, setMobileOpen] = (0, import_react.useState)(false);
  const [search, setSearch] = (0, import_react.useState)("");
  const [now, setNow] = (0, import_react.useState)("");
  (0, import_react.useEffect)(() => {
    const tick = () =>
      setNow(
        /* @__PURE__ */ new Date().toLocaleString("en-IN", {
          day: "2-digit",
          month: "short",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }),
      );
    tick();
    const id = setInterval(tick, 3e4);
    return () => clearInterval(id);
  }, []);
  (0, import_react.useEffect)(() => {
    setMobileOpen(false);
  }, [pathname]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "min-h-screen bg-background",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
        href: "#main-content",
        className:
          "sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground",
        children: "Skip to content",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
        className:
          "fixed inset-y-0 left-0 z-30 hidden w-64 border-r border-sidebar-border lg:block",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarContent, {}),
      }),
      mobileOpen &&
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "fixed inset-0 z-40 lg:hidden",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
              "aria-label": "Close navigation",
              className: "absolute inset-0 bg-foreground/30",
              onClick: () => setMobileOpen(false),
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className:
                "absolute inset-y-0 left-0 w-64 border-r border-sidebar-border shadow-raised",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarContent, {
                  onNavigate: () => setMobileOpen(false),
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
                  variant: "ghost",
                  size: "icon",
                  className: "absolute top-3 right-2",
                  "aria-label": "Close navigation",
                  onClick: () => setMobileOpen(false),
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
                    className: "size-4",
                    "aria-hidden": true,
                  }),
                }),
              ],
            }),
          ],
        }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "lg:pl-64",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
            className:
              "sticky top-0 z-20 flex flex-wrap items-center gap-3 border-b border-border bg-surface/95 px-4 py-3 backdrop-blur md:px-6",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
                variant: "ghost",
                size: "icon",
                className: "lg:hidden",
                "aria-label": "Open navigation",
                onClick: () => setMobileOpen(true),
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
                  className: "size-5",
                  "aria-hidden": true,
                }),
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "min-w-0 flex-1",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                    className: "truncate text-sm font-semibold text-foreground",
                    children: section.title,
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                    className: "hidden truncate text-xs text-muted-foreground sm:block",
                    children: section.subtitle,
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className: "hidden w-64 xl:block",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchBar, {
                  label: "Search addresses, PIN codes or parcels",
                  placeholder: "Search address, PIN, parcel…",
                  value: search,
                  onChange: setSearch,
                }),
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "flex items-center gap-1.5",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                    className:
                      "hidden items-center gap-1.5 rounded-md border border-success/25 bg-success-soft px-2.5 py-1 text-xs font-medium text-success md:inline-flex",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, {
                        className: "size-3.5",
                        "aria-hidden": true,
                      }),
                      "Online",
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                    className: "tabular hidden text-xs text-muted-foreground lg:block",
                    children: [now, " IST"],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotificationPanel, {}),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
                    to: "/settings",
                    className:
                      "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-muted",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        className:
                          "flex size-8 items-center justify-center rounded-full bg-primary-soft text-xs font-semibold text-primary-dark",
                        children: "TO",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                        className: "hidden leading-tight sm:block",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                            className: "block text-xs font-semibold",
                            children: currentOperator.name,
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                            className: "block text-[11px] text-muted-foreground",
                            children: "Operator",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
            id: "main-content",
            className: cn("mx-auto w-full max-w-[1600px] space-y-6 px-4 py-6 md:px-6 md:py-8"),
            children,
          }),
        ],
      }),
    ],
  });
}
var Toaster$1 = ({ ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
    className: "toaster group",
    toastOptions: {
      classNames: {
        toast:
          "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
        description: "group-[.toast]:text-muted-foreground",
        actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
        cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
      },
    },
    ...props,
  });
};
function NotFoundComponent() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: "flex min-h-screen items-center justify-center bg-background px-4",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className: "max-w-md text-center",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
          className: "text-7xl font-bold text-foreground",
          children: "404",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
          className: "mt-4 text-xl font-semibold text-foreground",
          children: "Page not found",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
          className: "mt-2 text-sm text-muted-foreground",
          children: "This screen does not exist in PostRoute AI.",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className: "mt-6",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
            to: "/",
            className:
              "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
            children: "Go to dashboard",
          }),
        }),
      ],
    }),
  });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  (0, import_react.useEffect)(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: "flex min-h-screen items-center justify-center bg-background px-4",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className: "max-w-md text-center",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
          className: "text-xl font-semibold tracking-tight text-foreground",
          children: "This screen didn't load",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
          className: "mt-2 text-sm text-muted-foreground",
          children: "Something went wrong. You can retry or return to the dashboard.",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "mt-6 flex flex-wrap justify-center gap-2",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
              onClick: () => {
                router.invalidate();
                reset();
              },
              className:
                "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
              children: "Try again",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
              href: "/",
              className:
                "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
              children: "Go to dashboard",
            }),
          ],
        }),
      ],
    }),
  });
}
var Route$10 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      { title: "PostRoute AI — Delivery Post Office Identification" },
      {
        name: "description",
        content:
          "Internal postal operations console for predicting PIN codes and delivery post offices from incomplete addresses.",
      },
      {
        property: "og:title",
        content: "PostRoute AI",
      },
      {
        property: "og:description",
        content:
          "AI-assisted delivery post office and PIN code identification for postal operations.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: styles_default,
      },
      {
        rel: "icon",
        href: "/logo.png",
        type: "image/png",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});
function RootShell({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", {
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
        children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})],
      }),
    ],
  });
}
function RootComponent() {
  const { queryClient } = Route$10.useRouteContext();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
    client: queryClient,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, { position: "top-right" }),
    ],
  });
}
var $$splitComponentImporter$8 = () => import("./routes-0G2KRkFc.mjs");
var Route$9 = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Operations Dashboard — PostRoute AI" },
      {
        name: "description",
        content:
          "Daily prediction volume, auto-routing rate, review queue load and system health for postal operations.",
      },
      {
        property: "og:title",
        content: "Operations Dashboard — PostRoute AI",
      },
      {
        property: "og:description",
        content: "Postal address prediction and routing overview for post office operators.",
      },
    ],
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component"),
});
var $$splitComponentImporter$7 = () => import("./activity-CzFUk8tX.mjs");
var Route$8 = createFileRoute("/activity")({
  head: () => ({
    meta: [
      { title: "Activity Log — PostRoute AI" },
      {
        name: "description",
        content:
          "Chronological record of operator and system actions across predictions, parcels and mappings.",
      },
      {
        property: "og:title",
        content: "Activity Log — PostRoute AI",
      },
      {
        property: "og:description",
        content: "System and operator action history.",
      },
    ],
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component"),
});
var $$splitComponentImporter$6 = () => import("./analytics--mBdHaM9.mjs");
var Route$7 = createFileRoute("/analytics")({
  head: () => ({
    meta: [
      { title: "Analytics & Model Performance — PostRoute AI" },
      {
        name: "description",
        content:
          "Top-k accuracy, precision, recall, confidence distribution and baseline model comparison for address prediction.",
      },
      {
        property: "og:title",
        content: "Analytics & Model Performance — PostRoute AI",
      },
      {
        property: "og:description",
        content: "Prediction quality metrics across address conditions and models.",
      },
    ],
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component"),
});
var $$splitComponentImporter$5 = () => import("./mapping-BIWQ2Isf.mjs");
var Route$6 = createFileRoute("/mapping")({
  head: () => ({
    meta: [
      { title: "Pincode Mapping — PostRoute AI" },
      {
        name: "description",
        content:
          "Current and historical PIN code to delivery post office mappings, versions and detected conflicts.",
      },
      {
        property: "og:title",
        content: "Pincode Mapping — PostRoute AI",
      },
      {
        property: "og:description",
        content: "Manage current and historical postal mappings.",
      },
    ],
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component"),
});
var $$splitComponentImporter$4 = () => import("./parcels-HG1p4qjd.mjs");
var Route$5 = createFileRoute("/parcels")({
  head: () => ({
    meta: [
      { title: "Parcel Routing — PostRoute AI" },
      {
        name: "description",
        content:
          "Track parcels from receipt through address analysis, verification, sorting, dispatch and delivery.",
      },
      {
        property: "og:title",
        content: "Parcel Routing — PostRoute AI",
      },
      {
        property: "og:description",
        content: "Parcel routing status across the delivery pipeline.",
      },
    ],
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component"),
});
var $$splitComponentImporter$3 = () => import("./post-offices-SdX1-pv_.mjs");
var Route$4 = createFileRoute("/post-offices")({
  head: () => ({
    meta: [
      { title: "Post Offices — PostRoute AI" },
      {
        name: "description",
        content: "Browse delivery post offices, their PIN codes, divisions and mapping versions.",
      },
      {
        property: "og:title",
        content: "Post Offices — PostRoute AI",
      },
      {
        property: "og:description",
        content: "Post office directory with PIN mappings.",
      },
    ],
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component"),
});
var $$splitComponentImporter$2 = () => import("./prediction-zOJuZuPt.mjs");
var Route$3 = createFileRoute("/prediction")({
  head: () => ({
    meta: [
      { title: "Address Prediction — PostRoute AI" },
      {
        name: "description",
        content:
          "Enter an incomplete or noisy postal address and get the most probable delivery post office, PIN code and confidence.",
      },
      {
        property: "og:title",
        content: "Address Prediction — PostRoute AI",
      },
      {
        property: "og:description",
        content: "Identify the most probable delivery post office and PIN code from any address.",
      },
    ],
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component"),
});
var $$splitComponentImporter$1 = () => import("./review-DjwImtxd.mjs");
var Route$2 = createFileRoute("/review")({
  head: () => ({
    meta: [
      { title: "Review Queue — PostRoute AI" },
      {
        name: "description",
        content:
          "Predictions requiring operator verification, ranked by priority, confidence and review reason.",
      },
      {
        property: "og:title",
        content: "Review Queue — PostRoute AI",
      },
      {
        property: "og:description",
        content: "Predictions requiring operator verification.",
      },
    ],
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component"),
});
var $$splitComponentImporter = () => import("./settings-CRm8rQwi.mjs");
var Route$1 = createFileRoute("/settings")({
  head: () => ({
    meta: [
      { title: "Operator Profile & Settings — PostRoute AI" },
      {
        name: "description",
        content:
          "Operator profile, workstation appearance, density, notification and shortcut preferences.",
      },
      {
        property: "og:title",
        content: "Operator Profile & Settings — PostRoute AI",
      },
      {
        property: "og:description",
        content: "Workstation preferences for post office operators.",
      },
    ],
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component"),
});
var rootRouteChildren = {
  IndexRoute: Route$9.update({
    id: "/",
    path: "/",
    getParentRoute: () => Route$10,
  }),
  ActivityRoute: Route$8.update({
    id: "/activity",
    path: "/activity",
    getParentRoute: () => Route$10,
  }),
  AnalyticsRoute: Route$7.update({
    id: "/analytics",
    path: "/analytics",
    getParentRoute: () => Route$10,
  }),
  MappingRoute: Route$6.update({
    id: "/mapping",
    path: "/mapping",
    getParentRoute: () => Route$10,
  }),
  ParcelsRoute: Route$5.update({
    id: "/parcels",
    path: "/parcels",
    getParentRoute: () => Route$10,
  }),
  PostOfficesRoute: Route$4.update({
    id: "/post-offices",
    path: "/post-offices",
    getParentRoute: () => Route$10,
  }),
  PredictionRoute: Route$3.update({
    id: "/prediction",
    path: "/prediction",
    getParentRoute: () => Route$10,
  }),
  ReviewRoute: Route$2.update({
    id: "/review",
    path: "/review",
    getParentRoute: () => Route$10,
  }),
  SettingsRoute: Route$1.update({
    id: "/settings",
    path: "/settings",
    getParentRoute: () => Route$10,
  }),
  ParcelsParcelIdRoute: Route$11.update({
    id: "/parcels_/$parcelId",
    path: "/parcels/$parcelId",
    getParentRoute: () => Route$10,
  }),
  PostOfficesOfficeIdRoute: Route$12.update({
    id: "/post-offices_/$officeId",
    path: "/post-offices/$officeId",
    getParentRoute: () => Route$10,
  }),
  ReviewReviewIdRoute: Route$13.update({
    id: "/review_/$reviewId",
    path: "/review/$reviewId",
    getParentRoute: () => Route$10,
  }),
};
var routeTree = Route$10._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
  const queryClient = new QueryClient();
  return createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });
};
//#endregion
export { getRouter };
