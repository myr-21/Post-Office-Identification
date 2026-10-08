import {
  a as e,
  dt as t,
  i as n,
  j as r,
  l as i,
  lt as a,
  mt as o,
  o as s,
  s as c,
} from "./primitives-BCHLNZiF.js";
import { t as l } from "./useNavigate-C3-W0q7R.js";
import { p as u, r as d } from "./postroute-C-bfl2si.js";
import { t as f } from "./useQuery-kLumsi1Z.js";
import { t as p } from "./data-table-CdyL5UA9.js";
import { a as m, c as h, d as g, i as _, t as v } from "./badges-BR-XpxyQ.js";
var y = o(t()),
  b = a();
function x() {
  let t = l(),
    a = f({ queryKey: [`review-queue`], queryFn: u }),
    o = f({ queryKey: [`config`], queryFn: d }),
    [x, S] = (0, y.useState)(``),
    [C, w] = (0, y.useState)(`all`),
    [T, E] = (0, y.useState)(`all`),
    [D, O] = (0, y.useState)(`all`),
    [k, A] = (0, y.useState)(`all`),
    [j, M] = (0, y.useState)(`all`),
    N = (0, y.useMemo)(() => {
      let e = a.data ?? [],
        t = o.data ?? { autoRouteThreshold: 0.85, reviewFloor: 0.55 };
      return e
        .filter((e) => {
          let n = x.trim().toLowerCase(),
            r =
              !n ||
              e.rawAddress.toLowerCase().includes(n) ||
              e.pincode.includes(n) ||
              e.parcelId.toLowerCase().includes(n),
            i =
              C === `all` ||
              (C === `high` && e.confidence >= t.autoRouteThreshold) ||
              (C === `medium` &&
                e.confidence >= t.reviewFloor &&
                e.confidence < t.autoRouteThreshold) ||
              (C === `low` && e.confidence < t.reviewFloor);
          return (
            r &&
            i &&
            (T === `all` || e.reason === T) &&
            (D === `all` || e.status === D) &&
            (k === `all` || e.state === k) &&
            (j === `all` || e.operator === j)
          );
        })
        .sort((e, t) => new Date(t.createdAt).getTime() - new Date(e.createdAt).getTime());
    }, [a.data, o.data, x, C, T, D, k, j]),
    P = a.data ?? [],
    F = [
      {
        key: `priority`,
        header: `Priority`,
        render: (e) => (0, b.jsx)(_, { priority: e.priority }),
      },
      {
        key: `address`,
        header: `Address`,
        className: `max-w-[260px]`,
        render: (e) =>
          (0, b.jsxs)(`div`, {
            children: [
              (0, b.jsx)(`p`, { className: `line-clamp-1 font-medium`, children: e.rawAddress }),
              (0, b.jsx)(`p`, { className: `text-xs text-muted-foreground`, children: e.parcelId }),
            ],
          }),
      },
      {
        key: `pin`,
        header: `Predicted PIN`,
        render: (e) => (0, b.jsx)(`span`, { className: `tabular`, children: e.pincode }),
      },
      { key: `po`, header: `Post Office`, render: (e) => e.postOffice },
      {
        key: `conf`,
        header: `Confidence`,
        render: (e) => (0, b.jsx)(v, { value: e.confidence, showLabel: !1 }),
      },
      { key: `reason`, header: `Review Reason`, render: (e) => g.reviewReason[e.reason] },
      {
        key: `created`,
        header: `Created`,
        render: (e) =>
          (0, b.jsx)(`span`, { className: `tabular text-xs`, children: h(e.createdAt) }),
      },
      { key: `status`, header: `Status`, render: (e) => (0, b.jsx)(m, { status: e.status }) },
      {
        key: `action`,
        header: `Action`,
        align: `right`,
        render: (e) =>
          (0, b.jsx)(r, {
            size: `sm`,
            variant: `outline`,
            onClick: (n) => {
              (n.stopPropagation(), t({ to: `/review/$reviewId`, params: { reviewId: e.id } }));
            },
            children: `Review`,
          }),
      },
    ];
  return (0, b.jsxs)(`div`, {
    className: `space-y-6`,
    children: [
      (0, b.jsx)(c, {
        title: `Review Queue`,
        subtitle: `Predictions requiring operator verification`,
      }),
      (0, b.jsxs)(`div`, {
        className: `grid gap-4 sm:grid-cols-2 xl:grid-cols-4`,
        children: [
          (0, b.jsx)(s, {
            label: `Total pending`,
            value: String(P.filter((e) => e.status === `pending`).length),
            support: `Awaiting an operator`,
          }),
          (0, b.jsx)(s, {
            label: `High priority`,
            value: String(P.filter((e) => e.priority === `high`).length),
            support: `Confidence below 55%`,
            tone: `warning`,
          }),
          (0, b.jsx)(s, {
            label: `Mapping conflicts`,
            value: String(P.filter((e) => e.reason === `mapping_conflict`).length),
            support: `Requires mapping check`,
            tone: `warning`,
          }),
          (0, b.jsx)(s, {
            label: `Low confidence`,
            value: String(P.filter((e) => e.confidence < 0.7).length),
            support: `Below auto-routing threshold`,
            tone: `info`,
          }),
        ],
      }),
      (0, b.jsxs)(n, {
        children: [
          (0, b.jsx)(i, {
            label: `Search review queue by address, PIN or parcel ID`,
            placeholder: `Search address, PIN or parcel ID…`,
            value: x,
            onChange: S,
          }),
          (0, b.jsx)(e, {
            label: `Confidence`,
            value: C,
            onChange: w,
            options: [
              { value: `high`, label: `High (≥90%)` },
              { value: `medium`, label: `Medium (70–89%)` },
              { value: `low`, label: `Low (<70%)` },
            ],
          }),
          (0, b.jsx)(e, {
            label: `Reason`,
            value: T,
            onChange: E,
            options: Object.entries(g.reviewReason).map(([e, t]) => ({ value: e, label: t })),
          }),
          (0, b.jsx)(e, {
            label: `Status`,
            value: D,
            onChange: O,
            options: Object.entries(g.reviewStatus).map(([e, t]) => ({ value: e, label: t })),
          }),
          (0, b.jsx)(e, {
            label: `Region`,
            value: k,
            onChange: A,
            options: [...new Set(P.map((e) => e.state))].map((e) => ({ value: e, label: e })),
          }),
          (0, b.jsx)(e, {
            label: `Operator`,
            value: j,
            onChange: M,
            options: [...new Set(P.map((e) => e.operator))].map((e) => ({ value: e, label: e })),
          }),
        ],
      }),
      (0, b.jsx)(p, {
        columns: F,
        rows: N,
        rowKey: (e) => e.id,
        loading: a.isLoading,
        error: a.error ? a.error.message : null,
        onRetry: () => a.refetch(),
        onRowClick: (e) => t({ to: `/review/$reviewId`, params: { reviewId: e.id } }),
        emptyTitle: `No predictions match these filters`,
        emptyDescription: `Clear the filters or widen the search to see pending reviews.`,
        caption: `Review queue`,
      }),
    ],
  });
}
export { x as component };
