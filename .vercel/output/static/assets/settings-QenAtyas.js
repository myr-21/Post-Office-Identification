import {
  N as e,
  Q as t,
  U as n,
  at as r,
  c as i,
  d as a,
  dt as o,
  f as s,
  h as c,
  it as l,
  j as u,
  lt as d,
  m as f,
  mt as p,
  p as m,
  r as h,
  rt as g,
  s as _,
  tt as v,
  u as y,
  y as b,
} from "./primitives-BCHLNZiF.js";
import { n as x } from "./dist-BWeSYI3B.js";
import { c as S, r as C } from "./badges-BR-XpxyQ.js";
var w = p(o(), 1),
  T = d(),
  E = Object.defineProperty,
  D = (e, t) => E(e, `name`, { value: t, configurable: !0 }),
  O = `Switch`,
  [k, A] = g(O),
  [j, M] = k(O);
function N(e) {
  let {
      __scopeSwitch: t,
      checked: n,
      children: r,
      defaultChecked: i,
      disabled: a,
      form: o,
      name: s,
      onCheckedChange: c,
      required: l,
      value: u = `on`,
      internal_do_not_use_render: d,
    } = e,
    [f, p] = v({ prop: n, defaultProp: i ?? !1, onChange: c, caller: O }),
    [m, h] = w.useState(null),
    [g, _] = w.useState(null),
    y = w.useRef(!1),
    [b, x] = w.useReducer((e) => e + 1, 0),
    S = {
      checked: f,
      setChecked: p,
      disabled: a,
      control: m,
      setControl: h,
      name: s,
      form: o,
      value: u,
      hasConsumerStoppedPropagationRef: y,
      userInteractionCount: b,
      onUserInteraction: x,
      required: l,
      defaultChecked: i,
      isFormControl: !m || !!o || !!m.closest(`form`),
      bubbleInput: g,
      setBubbleInput: _,
    };
  return (0, T.jsx)(j, { scope: t, ...S, children: V(d) ? d(S) : r });
}
D(N, `SwitchProvider`);
var P = `SwitchTrigger`,
  F = w.forwardRef(
    D(function ({ __scopeSwitch: e, onClick: n, ...i }, a) {
      let {
          control: o,
          form: s,
          value: c,
          disabled: u,
          checked: d,
          required: f,
          setControl: p,
          setChecked: m,
          hasConsumerStoppedPropagationRef: h,
          onUserInteraction: g,
          isFormControl: _,
          bubbleInput: v,
        } = M(P, e),
        y = l(a, p),
        b = w.useRef(d);
      return (
        w.useEffect(() => {
          let e = s ? o?.ownerDocument.getElementById(s) : o?.form;
          if (e instanceof HTMLFormElement) {
            let t = D(() => m(b.current), `reset`);
            return (e.addEventListener(`reset`, t), () => e.removeEventListener(`reset`, t));
          }
        }, [o, s, m]),
        (0, T.jsx)(t.button, {
          type: `button`,
          role: `switch`,
          "aria-checked": d,
          "aria-required": f,
          "data-state": H(d),
          "data-disabled": u ? `` : void 0,
          disabled: u,
          value: c,
          ...i,
          ref: y,
          onClick: r(n, (e) => {
            (g(),
              m((e) => !e),
              v && _ && ((h.current = e.isPropagationStopped()), h.current || e.stopPropagation()));
          }),
        })
      );
    }, `SwitchTrigger`),
  ),
  I = w.forwardRef(
    D(function (e, t) {
      let {
        __scopeSwitch: n,
        name: r,
        checked: i,
        defaultChecked: a,
        required: o,
        disabled: s,
        value: c,
        onCheckedChange: l,
        form: u,
        ...d
      } = e;
      return (0, T.jsx)(N, {
        __scopeSwitch: n,
        checked: i,
        defaultChecked: a,
        disabled: s,
        required: o,
        onCheckedChange: l,
        name: r,
        form: u,
        value: c,
        internal_do_not_use_render: ({ isFormControl: e }) =>
          (0, T.jsxs)(T.Fragment, {
            children: [
              (0, T.jsx)(F, { ...d, ref: t, __scopeSwitch: n }),
              e && (0, T.jsx)(B, { __scopeSwitch: n }),
            ],
          }),
      });
    }, `Switch`),
  ),
  L = `SwitchThumb`,
  R = w.forwardRef(
    D(function (e, n) {
      let { __scopeSwitch: r, ...i } = e,
        a = M(L, r);
      return (0, T.jsx)(t.span, {
        "data-state": H(a.checked),
        "data-disabled": a.disabled ? `` : void 0,
        ...i,
        ref: n,
      });
    }, `SwitchThumb`),
  ),
  z = `SwitchBubbleInput`,
  B = w.forwardRef(
    D(function ({ __scopeSwitch: e, onClick: i, ...a }, o) {
      let {
          control: s,
          hasConsumerStoppedPropagationRef: c,
          userInteractionCount: u,
          checked: d,
          defaultChecked: f,
          required: p,
          disabled: m,
          name: h,
          value: g,
          form: _,
          bubbleInput: v,
          setBubbleInput: y,
        } = M(z, e),
        b = l(o, y),
        x = n(s),
        S = w.useRef(!1),
        C = w.useRef(d),
        E = w.useRef(u);
      w.useEffect(() => {
        let e = v;
        if (!e) return;
        let t = window.HTMLInputElement.prototype,
          n = Object.getOwnPropertyDescriptor(t, `checked`).set,
          r = u !== E.current;
        E.current = u;
        let i = C.current !== d;
        C.current = d;
        let a = !(r && c.current);
        if (i && n) {
          S.current = !r;
          let t = new Event(`click`, { bubbles: a });
          (n.call(e, d), e.dispatchEvent(t), (S.current = !1));
        }
      }, [v, d, c, u]);
      let D = w.useRef(d);
      return (0, T.jsx)(t.input, {
        type: `checkbox`,
        "aria-hidden": !0,
        defaultChecked: f ?? D.current,
        required: p,
        disabled: m,
        name: h,
        value: g,
        form: _,
        ...a,
        tabIndex: -1,
        ref: b,
        onClick: r(i, (e) => {
          S.current && e.stopPropagation();
        }),
        style: {
          ...a.style,
          ...x,
          position: `absolute`,
          pointerEvents: `none`,
          opacity: 0,
          margin: 0,
          transform: `translateX(-100%)`,
        },
      });
    }, `SwitchBubbleInput`),
  );
function V(e) {
  return typeof e == `function`;
}
D(V, `isFunction`);
function H(e) {
  return e ? `checked` : `unchecked`;
}
D(H, `getState`);
var U = w.forwardRef(({ className: t, ...n }, r) =>
  (0, T.jsx)(I, {
    className: e(
      `peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input`,
      t,
    ),
    ...n,
    ref: r,
    children: (0, T.jsx)(R, {
      className: e(
        `pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0`,
      ),
    }),
  }),
);
U.displayName = I.displayName;
function W() {
  let [e, t] = (0, w.useState)(`comfortable`),
    [n, r] = (0, w.useState)(`light`),
    [o, l] = (0, w.useState)(`en-IN`),
    [d, p] = (0, w.useState)(!0),
    [g, v] = (0, w.useState)(!0),
    [E, D] = (0, w.useState)(!1),
    [O, k] = (0, w.useState)(!0);
  return (0, T.jsxs)(`div`, {
    className: `space-y-6`,
    children: [
      (0, T.jsx)(_, {
        title: `Operator Profile & Settings`,
        subtitle: `Workstation preferences — demonstration only, no sign-in is configured`,
      }),
      (0, T.jsxs)(`div`, {
        className: `grid gap-6 xl:grid-cols-3`,
        children: [
          (0, T.jsxs)(i, {
            title: `Profile`,
            accent: !0,
            children: [
              (0, T.jsxs)(`div`, {
                className: `mb-4 flex items-center gap-3`,
                children: [
                  (0, T.jsx)(`span`, {
                    className: `flex size-12 items-center justify-center rounded-full bg-primary-soft text-base font-semibold text-primary-dark`,
                    children: `MP`,
                  }),
                  (0, T.jsxs)(`div`, {
                    children: [
                      (0, T.jsx)(`p`, { className: `text-base font-semibold`, children: b.name }),
                      (0, T.jsx)(C, { tone: `success`, children: `Online` }),
                    ],
                  }),
                ],
              }),
              (0, T.jsx)(h, { label: `Role`, value: b.role }),
              (0, T.jsx)(h, { label: `Post Office`, value: b.postOffice }),
              (0, T.jsx)(h, { label: `Employee ID`, value: b.employeeId }),
              (0, T.jsx)(h, { label: `Last active`, value: S(b.lastActive) }),
            ],
          }),
          (0, T.jsx)(i, {
            title: `Appearance & Density`,
            className: `xl:col-span-2`,
            children: (0, T.jsxs)(`div`, {
              className: `grid gap-4 sm:grid-cols-2`,
              children: [
                (0, T.jsxs)(`div`, {
                  className: `space-y-1.5`,
                  children: [
                    (0, T.jsx)(c, { htmlFor: `appearance`, children: `Appearance` }),
                    (0, T.jsxs)(y, {
                      value: n,
                      onValueChange: r,
                      children: [
                        (0, T.jsx)(m, { id: `appearance`, children: (0, T.jsx)(f, {}) }),
                        (0, T.jsxs)(a, {
                          children: [
                            (0, T.jsx)(s, { value: `light`, children: `Light (recommended)` }),
                            (0, T.jsx)(s, { value: `system`, children: `Match system` }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, T.jsxs)(`div`, {
                  className: `space-y-1.5`,
                  children: [
                    (0, T.jsx)(c, { htmlFor: `density`, children: `Density` }),
                    (0, T.jsxs)(y, {
                      value: e,
                      onValueChange: t,
                      children: [
                        (0, T.jsx)(m, { id: `density`, children: (0, T.jsx)(f, {}) }),
                        (0, T.jsxs)(a, {
                          children: [
                            (0, T.jsx)(s, { value: `comfortable`, children: `Comfortable` }),
                            (0, T.jsx)(s, { value: `compact`, children: `Compact` }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, T.jsxs)(`div`, {
                  className: `space-y-1.5`,
                  children: [
                    (0, T.jsx)(c, { htmlFor: `language`, children: `Language` }),
                    (0, T.jsxs)(y, {
                      value: o,
                      onValueChange: l,
                      children: [
                        (0, T.jsx)(m, { id: `language`, children: (0, T.jsx)(f, {}) }),
                        (0, T.jsxs)(a, {
                          children: [
                            (0, T.jsx)(s, { value: `en-IN`, children: `English (India)` }),
                            (0, T.jsx)(s, { value: `hi-IN`, children: `हिन्दी — coming soon` }),
                            (0, T.jsx)(s, { value: `mr-IN`, children: `मराठी — coming soon` }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, T.jsxs)(`div`, {
                  className: `flex items-center justify-between rounded-lg border border-border px-3 py-2`,
                  children: [
                    (0, T.jsx)(c, { htmlFor: `striped`, children: `Striped table rows` }),
                    (0, T.jsx)(U, { id: `striped`, checked: O, onCheckedChange: k }),
                  ],
                }),
              ],
            }),
          }),
          (0, T.jsxs)(i, {
            title: `Notifications`,
            className: `xl:col-span-2`,
            children: [
              (0, T.jsxs)(`div`, {
                className: `space-y-3`,
                children: [
                  (0, T.jsxs)(`div`, {
                    className: `flex items-center justify-between rounded-lg border border-border px-3 py-2.5`,
                    children: [
                      (0, T.jsx)(c, { htmlFor: `n-review`, children: `New review required` }),
                      (0, T.jsx)(U, { id: `n-review`, checked: d, onCheckedChange: p }),
                    ],
                  }),
                  (0, T.jsxs)(`div`, {
                    className: `flex items-center justify-between rounded-lg border border-border px-3 py-2.5`,
                    children: [
                      (0, T.jsx)(c, { htmlFor: `n-mapping`, children: `Mapping change detected` }),
                      (0, T.jsx)(U, { id: `n-mapping`, checked: g, onCheckedChange: v }),
                    ],
                  }),
                  (0, T.jsxs)(`div`, {
                    className: `flex items-center justify-between rounded-lg border border-border px-3 py-2.5`,
                    children: [
                      (0, T.jsx)(c, { htmlFor: `n-low`, children: `Low-confidence prediction` }),
                      (0, T.jsx)(U, { id: `n-low`, checked: E, onCheckedChange: D }),
                    ],
                  }),
                ],
              }),
              (0, T.jsx)(u, {
                className: `mt-4`,
                onClick: () => x.success(`Preferences saved for this session`),
                children: `Save preferences`,
              }),
            ],
          }),
          (0, T.jsx)(i, {
            title: `Keyboard Shortcuts`,
            children: (0, T.jsx)(`ul`, {
              className: `space-y-2 text-sm`,
              children: [
                [`Ctrl + Enter`, `Run prediction`],
                [`Ctrl + K`, `Focus search`],
                [`G then D`, `Go to dashboard`],
                [`G then R`, `Go to review queue`],
                [`Esc`, `Close panel`],
              ].map(([e, t]) =>
                (0, T.jsxs)(
                  `li`,
                  {
                    className: `flex items-center justify-between gap-3`,
                    children: [
                      (0, T.jsx)(`span`, { className: `text-muted-foreground`, children: t }),
                      (0, T.jsx)(`kbd`, {
                        className: `rounded border border-border bg-muted px-2 py-0.5 text-xs`,
                        children: e,
                      }),
                    ],
                  },
                  e,
                ),
              ),
            }),
          }),
        ],
      }),
    ],
  });
}
export { W as component };
