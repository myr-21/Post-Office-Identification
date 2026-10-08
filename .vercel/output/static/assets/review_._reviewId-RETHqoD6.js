import {
  c as e,
  ct as t,
  d as n,
  dt as r,
  f as i,
  g as a,
  h as o,
  j as s,
  lt as c,
  m as l,
  mt as u,
  p as d,
  r as f,
  s as p,
  u as m,
} from "./primitives-BCHLNZiF.js";
import { t as h } from "./link-BI1tahbv.js";
import { t as g } from "./useNavigate-C3-W0q7R.js";
import { _, f as v, y } from "./postroute-C-bfl2si.js";
import { t as b } from "./useQuery-kLumsi1Z.js";
import { t as x } from "./useMutation-B-ySW0uT.js";
import { t as S } from "./arrow-left-BNSLnK9L.js";
import { t as C } from "./circle-check-BKl7BPHP.js";
import { n as w, t as T } from "./textarea-JM3xxskW.js";
import { n as E, r as D } from "./states-CAGmlWJM.js";
import { n as O } from "./dist-BWeSYI3B.js";
import { t as k } from "./review_._reviewId-ApgbWFva.js";
import { c as A, d as j, i as M, l as N, n as P, r as F, t as I } from "./badges-BR-XpxyQ.js";
var L = t(`pencil-line`, [
    [`path`, { d: `M13 21h8`, key: `1jsn5i` }],
    [`path`, { d: `m15 5 4 4`, key: `1mk7zo` }],
    [
      `path`,
      {
        d: `M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z`,
        key: `1a8usu`,
      },
    ],
  ]),
  R = u(r()),
  z = c();
function B() {
  let { reviewId: t } = k.useParams(),
    r = g(),
    c = b({ queryKey: [`review-item`, t], queryFn: () => v(t) }),
    [u, B] = (0, R.useState)(!1),
    [V, H] = (0, R.useState)(``),
    [U, W] = (0, R.useState)(``),
    [G, K] = (0, R.useState)(``),
    [q, J] = (0, R.useState)(``),
    [Y, X] = (0, R.useState)(null),
    Z = x({
      mutationFn: _,
      onSuccess: (e, n) => {
        let r = {
          approve: `Prediction approved`,
          correct: `Correction saved`,
          reject: `Prediction rejected`,
          escalate: `Escalated to supervisor`,
        };
        (X(r[n.decision]), O.success(r[n.decision], { description: `Review ${t} updated.` }));
      },
    });
  if (c.isLoading) return (0, z.jsx)(D, { label: `Loading review…`, rows: 6 });
  if (c.error || !c.data)
    return (0, z.jsx)(E, {
      title: `Review not found`,
      description: c.error?.message ?? `This review item does not exist.`,
      onRetry: () => c.refetch(),
    });
  let Q = c.data;
  return (0, z.jsxs)(`div`, {
    className: `space-y-6`,
    children: [
      (0, z.jsx)(s, {
        variant: `ghost`,
        size: `sm`,
        asChild: !0,
        className: `-ml-2`,
        children: (0, z.jsxs)(h, {
          to: `/review`,
          children: [
            (0, z.jsx)(S, { className: `size-4`, "aria-hidden": !0 }),
            ` Back to review queue`,
          ],
        }),
      }),
      (0, z.jsx)(p, {
        title: `Review ${Q.id}`,
        subtitle: `${Q.parcelId} · created ${A(Q.createdAt)}`,
        actions: (0, z.jsxs)(`div`, {
          className: `flex items-center gap-2`,
          children: [
            (0, z.jsx)(M, { priority: Q.priority }),
            (0, z.jsx)(F, { tone: `warning`, children: j.reviewReason[Q.reason] }),
          ],
        }),
      }),
      Y &&
        (0, z.jsxs)(`p`, {
          className: `flex items-center gap-2 rounded-md border border-success/30 bg-success-soft px-3 py-2 text-sm text-success`,
          children: [
            (0, z.jsx)(C, { className: `size-4`, "aria-hidden": !0 }),
            ` `,
            Y,
            `. This item has been removed from the pending queue (demonstration only).`,
          ],
        }),
      (0, z.jsxs)(`div`, {
        className: `grid gap-6 xl:grid-cols-3`,
        children: [
          (0, z.jsxs)(`div`, {
            className: `space-y-6 xl:col-span-2`,
            children: [
              (0, z.jsxs)(e, {
                title: `Address`,
                children: [
                  (0, z.jsx)(f, {
                    label: `Original address`,
                    value: (0, z.jsx)(`span`, {
                      className: `font-mono text-xs`,
                      children: Q.rawAddress,
                    }),
                  }),
                  (0, z.jsx)(f, { label: `Normalized address`, value: Q.normalizedAddress }),
                  (0, z.jsx)(f, { label: `District / State`, value: `${Q.district}, ${Q.state}` }),
                ],
              }),
              (0, z.jsx)(e, {
                title: `Prediction`,
                accent: !0,
                children: (0, z.jsxs)(`div`, {
                  className: `grid gap-4 sm:grid-cols-3`,
                  children: [
                    (0, z.jsxs)(`div`, {
                      children: [
                        (0, z.jsx)(`p`, {
                          className: `text-xs tracking-wide text-muted-foreground uppercase`,
                          children: `PIN`,
                        }),
                        (0, z.jsx)(`p`, {
                          className: `tabular mt-1 text-3xl font-semibold text-primary-dark`,
                          children: Q.pincode,
                        }),
                      ],
                    }),
                    (0, z.jsxs)(`div`, {
                      children: [
                        (0, z.jsx)(`p`, {
                          className: `text-xs tracking-wide text-muted-foreground uppercase`,
                          children: `Post Office`,
                        }),
                        (0, z.jsx)(`p`, {
                          className: `mt-1 text-lg font-semibold`,
                          children: Q.postOffice,
                        }),
                      ],
                    }),
                    (0, z.jsxs)(`div`, {
                      children: [
                        (0, z.jsx)(`p`, {
                          className: `text-xs tracking-wide text-muted-foreground uppercase`,
                          children: `Confidence`,
                        }),
                        (0, z.jsx)(`p`, {
                          className: `tabular mt-1 text-2xl font-semibold`,
                          children: N(Q.confidence),
                        }),
                        (0, z.jsx)(P, { value: Q.confidence, className: `mt-2` }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, z.jsx)(e, {
                title: `Candidate Matches`,
                bodyClassName: `p-0`,
                children: (0, z.jsxs)(`table`, {
                  className: `w-full text-sm`,
                  children: [
                    (0, z.jsx)(`thead`, {
                      children: (0, z.jsxs)(`tr`, {
                        className: `border-b border-border bg-surface text-xs tracking-wide text-muted-foreground uppercase`,
                        children: [
                          (0, z.jsx)(`th`, {
                            scope: `col`,
                            className: `px-5 py-2.5 text-left`,
                            children: `Rank`,
                          }),
                          (0, z.jsx)(`th`, {
                            scope: `col`,
                            className: `px-5 py-2.5 text-left`,
                            children: `Post Office`,
                          }),
                          (0, z.jsx)(`th`, {
                            scope: `col`,
                            className: `px-5 py-2.5 text-left`,
                            children: `PIN`,
                          }),
                          (0, z.jsx)(`th`, {
                            scope: `col`,
                            className: `px-5 py-2.5 text-right`,
                            children: `Confidence`,
                          }),
                        ],
                      }),
                    }),
                    (0, z.jsx)(`tbody`, {
                      children: Q.candidates.map((e) =>
                        (0, z.jsxs)(
                          `tr`,
                          {
                            className: `border-b border-border/70 last:border-0`,
                            children: [
                              (0, z.jsx)(`td`, {
                                className: `tabular px-5 py-3`,
                                children: e.rank,
                              }),
                              (0, z.jsx)(`td`, {
                                className: `px-5 py-3 font-medium`,
                                children: e.postOffice,
                              }),
                              (0, z.jsx)(`td`, {
                                className: `tabular px-5 py-3`,
                                children: e.pincode,
                              }),
                              (0, z.jsx)(`td`, {
                                className: `px-5 py-3 text-right`,
                                children: (0, z.jsx)(I, { value: e.confidence, showLabel: !1 }),
                              }),
                            ],
                          },
                          e.rank,
                        ),
                      ),
                    }),
                  ],
                }),
              }),
              (0, z.jsxs)(e, {
                title: `Mapping Information`,
                children: [
                  (0, z.jsx)(f, { label: `Current mapping`, value: Q.mapping.current }),
                  (0, z.jsx)(f, { label: `Historical mapping`, value: Q.mapping.historical }),
                  (0, z.jsx)(f, {
                    label: `Potential conflict`,
                    value: Q.mapping.conflict
                      ? (0, z.jsxs)(`span`, {
                          className: `flex items-center gap-1.5 text-warning`,
                          children: [
                            (0, z.jsx)(y, { className: `size-4`, "aria-hidden": !0 }),
                            ` `,
                            Q.mapping.conflict,
                          ],
                        })
                      : (0, z.jsx)(`span`, {
                          className: `text-muted-foreground`,
                          children: `None detected`,
                        }),
                  }),
                ],
              }),
            ],
          }),
          (0, z.jsxs)(`div`, {
            className: `space-y-6`,
            children: [
              (0, z.jsxs)(e, {
                title: `Operator Decision`,
                accent: !0,
                children: [
                  (0, z.jsxs)(`div`, {
                    className: `grid gap-2`,
                    children: [
                      (0, z.jsxs)(s, {
                        disabled: Z.isPending || !!Y,
                        onClick: () => Z.mutate({ id: Q.id, decision: `approve` }),
                        children: [
                          (0, z.jsx)(C, { className: `size-4`, "aria-hidden": !0 }),
                          ` Approve Prediction`,
                        ],
                      }),
                      (0, z.jsxs)(s, {
                        variant: `outline`,
                        disabled: !!Y,
                        onClick: () => B((e) => !e),
                        "aria-expanded": u,
                        children: [
                          (0, z.jsx)(L, { className: `size-4`, "aria-hidden": !0 }),
                          ` Correct Prediction`,
                        ],
                      }),
                      (0, z.jsxs)(s, {
                        variant: `outline`,
                        disabled: Z.isPending || !!Y,
                        onClick: () => Z.mutate({ id: Q.id, decision: `reject` }),
                        children: [
                          (0, z.jsx)(w, { className: `size-4`, "aria-hidden": !0 }),
                          ` Reject`,
                        ],
                      }),
                      (0, z.jsxs)(s, {
                        variant: `ghost`,
                        disabled: Z.isPending || !!Y,
                        onClick: () => Z.mutate({ id: Q.id, decision: `escalate` }),
                        children: [
                          (0, z.jsx)(y, { className: `size-4`, "aria-hidden": !0 }),
                          ` Escalate`,
                        ],
                      }),
                    ],
                  }),
                  u &&
                    (0, z.jsxs)(`form`, {
                      className: `mt-5 space-y-3 border-t border-border pt-4`,
                      onSubmit: (e) => {
                        (e.preventDefault(),
                          Z.mutate({
                            id: Q.id,
                            decision: `correct`,
                            correctedPincode: V,
                            correctedPostOffice: U,
                            reason: G,
                            notes: q,
                          }),
                          B(!1));
                      },
                      children: [
                        (0, z.jsxs)(`div`, {
                          className: `space-y-1.5`,
                          children: [
                            (0, z.jsx)(o, { htmlFor: `correct-pin`, children: `Correct PIN` }),
                            (0, z.jsx)(a, {
                              id: `correct-pin`,
                              required: !0,
                              inputMode: `numeric`,
                              maxLength: 6,
                              value: V,
                              onChange: (e) => H(e.target.value.replace(/\D/g, ``)),
                              className: `tabular`,
                              placeholder: `411045`,
                            }),
                          ],
                        }),
                        (0, z.jsxs)(`div`, {
                          className: `space-y-1.5`,
                          children: [
                            (0, z.jsx)(o, {
                              htmlFor: `correct-office`,
                              children: `Correct Post Office`,
                            }),
                            (0, z.jsx)(a, {
                              id: `correct-office`,
                              required: !0,
                              value: U,
                              onChange: (e) => W(e.target.value),
                              placeholder: `Baner S.O`,
                            }),
                          ],
                        }),
                        (0, z.jsxs)(`div`, {
                          className: `space-y-1.5`,
                          children: [
                            (0, z.jsx)(o, {
                              htmlFor: `correct-reason`,
                              children: `Correction Reason`,
                            }),
                            (0, z.jsxs)(m, {
                              value: G,
                              onValueChange: K,
                              children: [
                                (0, z.jsx)(d, {
                                  id: `correct-reason`,
                                  children: (0, z.jsx)(l, { placeholder: `Select a reason` }),
                                }),
                                (0, z.jsxs)(n, {
                                  children: [
                                    (0, z.jsx)(i, {
                                      value: `wrong_locality`,
                                      children: `Wrong locality matched`,
                                    }),
                                    (0, z.jsx)(i, {
                                      value: `outdated_mapping`,
                                      children: `Outdated mapping`,
                                    }),
                                    (0, z.jsx)(i, {
                                      value: `incomplete_address`,
                                      children: `Incomplete address`,
                                    }),
                                    (0, z.jsx)(i, {
                                      value: `operator_knowledge`,
                                      children: `Local operator knowledge`,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, z.jsxs)(`div`, {
                          className: `space-y-1.5`,
                          children: [
                            (0, z.jsx)(o, { htmlFor: `correct-notes`, children: `Notes` }),
                            (0, z.jsx)(T, {
                              id: `correct-notes`,
                              rows: 3,
                              value: q,
                              onChange: (e) => J(e.target.value),
                              placeholder: `Optional context for the supervisor`,
                            }),
                          ],
                        }),
                        (0, z.jsx)(s, {
                          type: `submit`,
                          className: `w-full`,
                          disabled: Z.isPending,
                          children: `Save Correction`,
                        }),
                      ],
                    }),
                ],
              }),
              (0, z.jsxs)(e, {
                title: `Assignment`,
                children: [
                  (0, z.jsx)(f, { label: `Operator`, value: Q.operator }),
                  (0, z.jsx)(f, { label: `Status`, value: j.reviewStatus[Q.status] }),
                  (0, z.jsx)(f, { label: `Parcel`, value: Q.parcelId }),
                  (0, z.jsx)(s, {
                    variant: `outline`,
                    className: `mt-3 w-full`,
                    onClick: () => r({ to: `/parcels` }),
                    children: `Open parcel routing`,
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
export { B as component };
