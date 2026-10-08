import {
  a as e,
  dt as t,
  i as n,
  l as r,
  lt as i,
  mt as a,
  s as o,
} from "./primitives-BCHLNZiF.js";
import { t as s } from "./postroute-C-bfl2si.js";
import { t as c } from "./useQuery-kLumsi1Z.js";
import { t as l } from "./data-table-CdyL5UA9.js";
import { a as u, c as d } from "./badges-BR-XpxyQ.js";
var f = a(t()),
  p = i();
function m() {
  let t = c({ queryKey: [`activity`], queryFn: s }),
    [i, a] = (0, f.useState)(``),
    [m, h] = (0, f.useState)(`all`),
    [g, _] = (0, f.useState)(`all`),
    [v, y] = (0, f.useState)(`all`),
    b = t.data ?? [],
    x = (0, f.useMemo)(() => {
      let e = i.trim().toLowerCase();
      return b.filter(
        (t) =>
          (!e ||
            t.entity.toLowerCase().includes(e) ||
            t.details.toLowerCase().includes(e) ||
            t.action.toLowerCase().includes(e)) &&
          (m === `all` || t.operator === m) &&
          (g === `all` || t.action === g) &&
          (v === `all` || t.status === v),
      );
    }, [b, i, m, g, v]),
    S = [
      {
        key: `time`,
        header: `Timestamp`,
        render: (e) =>
          (0, p.jsx)(`span`, { className: `tabular text-xs`, children: d(e.timestamp) }),
      },
      { key: `operator`, header: `Operator`, render: (e) => e.operator },
      {
        key: `action`,
        header: `Action`,
        render: (e) => (0, p.jsx)(`span`, { className: `font-medium`, children: e.action }),
      },
      {
        key: `entity`,
        header: `Entity`,
        render: (e) => (0, p.jsx)(`span`, { className: `tabular`, children: e.entity }),
      },
      {
        key: `details`,
        header: `Details`,
        className: `max-w-[320px]`,
        render: (e) =>
          (0, p.jsx)(`span`, {
            className: `line-clamp-1 text-muted-foreground`,
            children: e.details,
          }),
      },
      { key: `status`, header: `Status`, render: (e) => (0, p.jsx)(u, { status: e.status }) },
    ];
  return (0, p.jsxs)(`div`, {
    className: `space-y-6`,
    children: [
      (0, p.jsx)(o, {
        title: `Activity Log`,
        subtitle: `Chronological system and operator actions`,
      }),
      (0, p.jsxs)(n, {
        children: [
          (0, p.jsx)(r, {
            label: `Search activity by entity, action or details`,
            placeholder: `Search action, entity or details…`,
            value: i,
            onChange: a,
          }),
          (0, p.jsx)(e, {
            label: `Operator`,
            value: m,
            onChange: h,
            options: [...new Set(b.map((e) => e.operator))].map((e) => ({ value: e, label: e })),
          }),
          (0, p.jsx)(e, {
            label: `Action`,
            value: g,
            onChange: _,
            options: [...new Set(b.map((e) => e.action))].map((e) => ({ value: e, label: e })),
          }),
          (0, p.jsx)(e, {
            label: `Result`,
            value: v,
            onChange: y,
            options: [
              { value: `success`, label: `Success` },
              { value: `warning`, label: `Warning` },
              { value: `error`, label: `Error` },
              { value: `info`, label: `Info` },
            ],
          }),
        ],
      }),
      (0, p.jsx)(l, {
        columns: S,
        rows: x,
        rowKey: (e) => e.id,
        loading: t.isLoading,
        error: t.error ? t.error.message : null,
        onRetry: () => t.refetch(),
        emptyTitle: `No activity matches these filters`,
        dense: !0,
        caption: `Activity log`,
      }),
    ],
  });
}
export { m as component };
