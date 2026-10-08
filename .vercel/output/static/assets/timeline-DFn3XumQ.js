import { N as e, lt as t, st as n } from "./primitives-BCHLNZiF.js";
import { t as r } from "./circle-BT-iCFq7.js";
var i = t();
function a({ steps: t }) {
  return (0, i.jsx)(`ol`, {
    className: `relative space-y-0`,
    children: t.map((a, o) => {
      let s = o === t.length - 1;
      return (0, i.jsxs)(
        `li`,
        {
          className: `relative flex gap-3 pb-5 last:pb-0`,
          children: [
            !s &&
              (0, i.jsx)(`span`, {
                "aria-hidden": !0,
                className: e(
                  `absolute top-6 left-[11px] h-[calc(100%-1rem)] w-px`,
                  a.state === `done` ? `bg-primary/45` : `bg-border`,
                ),
              }),
            (0, i.jsx)(`span`, {
              "aria-hidden": !0,
              className: e(
                `z-10 flex size-6 shrink-0 items-center justify-center rounded-full border`,
                a.state === `done` && `border-primary bg-primary text-primary-foreground`,
                a.state === `current` && `border-primary bg-primary-soft text-primary-dark`,
                a.state === `pending` && `border-border bg-card text-muted-foreground`,
              ),
              children:
                a.state === `done`
                  ? (0, i.jsx)(n, { className: `size-3.5` })
                  : (0, i.jsx)(r, { className: `size-2 fill-current` }),
            }),
            (0, i.jsxs)(`div`, {
              className: `min-w-0 pt-0.5`,
              children: [
                (0, i.jsxs)(`p`, {
                  className: e(
                    `text-sm font-medium`,
                    a.state === `pending` ? `text-muted-foreground` : `text-foreground`,
                  ),
                  children: [
                    a.label,
                    a.state === `current` &&
                      (0, i.jsx)(`span`, {
                        className: `ml-2 text-xs font-semibold text-primary-dark`,
                        children: `In progress`,
                      }),
                  ],
                }),
                (0, i.jsx)(`p`, {
                  className: `tabular text-xs text-muted-foreground`,
                  children: a.timestamp ?? `Pending`,
                }),
                a.note &&
                  (0, i.jsx)(`p`, {
                    className: `mt-0.5 text-xs text-muted-foreground`,
                    children: a.note,
                  }),
              ],
            }),
          ],
        },
        a.label,
      );
    }),
  });
}
export { a as t };
