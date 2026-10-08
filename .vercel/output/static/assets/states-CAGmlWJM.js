import { N as e, ct as t, j as n, lt as r } from "./primitives-BCHLNZiF.js";
import { y as i } from "./postroute-C-bfl2si.js";
var a = t(`inbox`, [
    [`polyline`, { points: `22 12 16 12 14 15 10 15 8 12 2 12`, key: `o97t9d` }],
    [
      `path`,
      {
        d: `M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z`,
        key: `oot6mr`,
      },
    ],
  ]),
  o = t(`loader-circle`, [[`path`, { d: `M21 12a9 9 0 1 1-6.219-8.56`, key: `13zald` }]]),
  s = t(`refresh-cw`, [
    [`path`, { d: `M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8`, key: `v9h5vc` }],
    [`path`, { d: `M21 3v5h-5`, key: `1q7to0` }],
    [`path`, { d: `M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16`, key: `3uifl3` }],
    [`path`, { d: `M8 16H3v5`, key: `1cv678` }],
  ]),
  c = r();
function l({ title: t, description: n, icon: r, action: i, className: o }) {
  return (0, c.jsxs)(`div`, {
    className: e(
      `flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-border bg-surface px-6 py-14 text-center`,
      o,
    ),
    children: [
      (0, c.jsx)(`div`, {
        className: `flex size-10 items-center justify-center rounded-lg bg-muted text-muted-foreground`,
        children: r ?? (0, c.jsx)(a, { className: `size-5`, "aria-hidden": !0 }),
      }),
      (0, c.jsx)(`p`, { className: `text-sm font-semibold text-foreground`, children: t }),
      n && (0, c.jsx)(`p`, { className: `max-w-sm text-sm text-muted-foreground`, children: n }),
      i,
    ],
  });
}
function u({ label: e = `Loading data…`, rows: t = 4 }) {
  return (0, c.jsxs)(`div`, {
    className: `space-y-3 py-4`,
    role: `status`,
    "aria-live": `polite`,
    children: [
      (0, c.jsxs)(`p`, {
        className: `flex items-center gap-2 text-sm text-muted-foreground`,
        children: [(0, c.jsx)(o, { className: `size-4 animate-spin`, "aria-hidden": !0 }), e],
      }),
      (0, c.jsx)(`div`, {
        className: `space-y-2`,
        children: Array.from({ length: t }).map((e, t) =>
          (0, c.jsx)(`div`, { className: `h-10 animate-pulse rounded-lg bg-muted/70` }, t),
        ),
      }),
    ],
  });
}
function d({ title: e = `Could not load data`, description: t, onRetry: r }) {
  return (0, c.jsxs)(`div`, {
    role: `alert`,
    className: `flex flex-col items-center justify-center gap-3 rounded-xl border border-error/30 bg-error-soft px-6 py-12 text-center`,
    children: [
      (0, c.jsx)(i, { className: `size-6 text-error`, "aria-hidden": !0 }),
      (0, c.jsx)(`p`, { className: `text-sm font-semibold text-error`, children: e }),
      t && (0, c.jsx)(`p`, { className: `max-w-md text-sm text-muted-foreground`, children: t }),
      r &&
        (0, c.jsxs)(n, {
          variant: `outline`,
          size: `sm`,
          onClick: r,
          children: [(0, c.jsx)(s, { className: `size-4`, "aria-hidden": !0 }), ` Try again`],
        }),
    ],
  });
}
export { o as a, s as i, d as n, u as r, l as t };
