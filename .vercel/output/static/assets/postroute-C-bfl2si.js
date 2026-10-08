import {
  A as e,
  C as t,
  D as n,
  E as r,
  O as i,
  S as a,
  T as o,
  _ as s,
  b as c,
  ct as l,
  dt as u,
  lt as d,
  mt as f,
  v as p,
  w as m,
  y as h,
} from "./primitives-BCHLNZiF.js";
var g = class {
    constructor() {
      ((this.listeners = new Set()), (this.subscribe = this.subscribe.bind(this)));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          (this.listeners.delete(e), this.onUnsubscribe());
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  _ = new (class extends g {
    #e;
    #t;
    #n;
    constructor() {
      (super(),
        (this.#n = (e) => {
          if (typeof window < `u` && window.addEventListener) {
            let t = () => e();
            return (
              window.addEventListener(`visibilitychange`, t, !1),
              () => {
                window.removeEventListener(`visibilitychange`, t);
              }
            );
          }
        }));
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(e) {
      ((this.#n = e),
        this.#t?.(),
        (this.#t = e((e) => {
          typeof e == `boolean` ? this.setFocused(e) : this.onFocus();
        })));
    }
    setFocused(e) {
      this.#e !== e && ((this.#e = e), this.onFocus());
    }
    onFocus() {
      let e = this.isFocused();
      this.listeners.forEach((t) => {
        t(e);
      });
    }
    isFocused() {
      return typeof this.#e == `boolean`
        ? this.#e
        : globalThis.document?.visibilityState !== `hidden`;
    }
  })(),
  ee = {
    setTimeout: (e, t) => setTimeout(e, t),
    clearTimeout: (e) => clearTimeout(e),
    setInterval: (e, t) => setInterval(e, t),
    clearInterval: (e) => clearInterval(e),
  },
  v = new (class {
    #e = ee;
    setTimeoutProvider(e) {
      this.#e = e;
    }
    setTimeout(e, t) {
      return this.#e.setTimeout(e, t);
    }
    clearTimeout(e) {
      this.#e.clearTimeout(e);
    }
    setInterval(e, t) {
      return this.#e.setInterval(e, t);
    }
    clearInterval(e) {
      this.#e.clearInterval(e);
    }
  })();
function te(e) {
  setTimeout(e, 0);
}
var ne = typeof window > `u` || `Deno` in globalThis;
function re() {}
function ie(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function y(e) {
  return typeof e == `number` && e >= 0 && e !== 1 / 0;
}
function ae(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function b(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function x(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function S(e, t) {
  let { type: n = `all`, exact: r, fetchStatus: i, predicate: a, queryKey: o, stale: s } = e;
  if (o) {
    if (r) {
      if (t.queryHash !== w(o, t.options)) return !1;
    } else if (!E(t.queryKey, o)) return !1;
  }
  if (n !== `all`) {
    let e = t.isActive();
    if ((n === `active` && !e) || (n === `inactive` && e)) return !1;
  }
  return !(
    (typeof s == `boolean` && t.isStale() !== s) ||
    (i && i !== t.state.fetchStatus) ||
    (a && !a(t))
  );
}
function C(e, t) {
  let { exact: n, status: r, predicate: i, mutationKey: a } = e;
  if (a) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (T(t.options.mutationKey) !== T(a)) return !1;
    } else if (!E(t.options.mutationKey, a)) return !1;
  }
  return !((r && t.state.status !== r) || (i && !i(t)));
}
function w(e, t) {
  return (t?.queryKeyHashFn || T)(e);
}
function T(e) {
  return JSON.stringify(e, (e, t) =>
    k(t)
      ? Object.keys(t)
          .sort()
          .reduce((e, n) => ((e[n] = t[n]), e), {})
      : t,
  );
}
function E(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (e && t && typeof e == `object` && typeof t == `object`) {
    if (Array.isArray(e) && Array.isArray(t)) {
      for (let n = 0; n < t.length; n++) if (!E(e[n], t[n])) return !1;
      return !0;
    }
    let n = Object.keys(t);
    for (let r of n) if (!E(e[r], t[r])) return !1;
    return !0;
  }
  return !1;
}
var oe = Object.prototype.hasOwnProperty;
function D(e, t, n = 0) {
  if (e === t) return e;
  if (n > 500) return t;
  let r = O(e) && O(t);
  if (!r && !(k(e) && k(t))) return t;
  let i = (r ? e : Object.keys(e)).length,
    a = r ? t : Object.keys(t),
    o = a.length,
    s = r ? Array(o) : {},
    c = 0;
  for (let l = 0; l < o; l++) {
    let o = r ? l : a[l],
      u = e[o],
      d = t[o];
    if (u === d) {
      ((s[o] = u), (r ? l < i : oe.call(e, o)) && c++);
      continue;
    }
    if (u === null || d === null || typeof u != `object` || typeof d != `object`) {
      s[o] = d;
      continue;
    }
    let f = D(u, d, n + 1);
    ((s[o] = f), f === u && c++);
  }
  return i === o && c === i ? e : s;
}
function se(e, t) {
  if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
  for (let n in e) if (e[n] !== t[n]) return !1;
  return !0;
}
function O(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function k(e) {
  if (!A(e)) return !1;
  let t = e.constructor;
  if (t === void 0) return !0;
  let n = t.prototype;
  return !(
    !A(n) ||
    !n.hasOwnProperty(`isPrototypeOf`) ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function A(e) {
  return Object.prototype.toString.call(e) === `[object Object]`;
}
function ce(e) {
  return new Promise((t) => {
    v.setTimeout(t, e);
  });
}
function j(e, t, n) {
  return typeof n.structuralSharing == `function`
    ? n.structuralSharing(e, t)
    : n.structuralSharing === !1
      ? t
      : D(e, t);
}
function M(e, t, n = 0) {
  let r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function N(e, t, n = 0) {
  let r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var P = Symbol();
function F(e, t) {
  return !e.queryFn && t?.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === P
      ? () => Promise.reject(Error(`Missing queryFn: '${e.queryHash}'`))
      : e.queryFn;
}
function I(e, t) {
  return typeof e == `function` ? e(...t) : !!e;
}
function L(e, t, n) {
  let r = !1,
    i;
  return (
    Object.defineProperty(e, "signal", {
      enumerable: !0,
      get: () => (
        (i ??= t()),
        r ? i : ((r = !0), i.aborted ? n() : i.addEventListener(`abort`, n, { once: !0 }), i)
      ),
    }),
    e
  );
}
var R = (() => {
  let e = () => ne;
  return {
    isServer() {
      return e();
    },
    setIsServer(t) {
      e = t;
    },
  };
})();
function z() {
  let e,
    t,
    n = new Promise((n, r) => {
      ((e = n), (t = r));
    });
  ((n.status = `pending`), n.catch(() => {}));
  function r(e) {
    (Object.assign(n, e), delete n.resolve, delete n.reject);
  }
  return (
    (n.resolve = (t) => {
      (r({ status: `fulfilled`, value: t }), e(t));
    }),
    (n.reject = (e) => {
      (r({ status: `rejected`, reason: e }), t(e));
    }),
    n
  );
}
var B = te;
function V() {
  let e = [],
    t = 0,
    n = (e) => {
      e();
    },
    r = (e) => {
      e();
    },
    i = B,
    a = (r) => {
      t
        ? e.push(r)
        : i(() => {
            n(r);
          });
    },
    o = () => {
      let t = e;
      ((e = []),
        t.length &&
          i(() => {
            r(() => {
              t.forEach((e) => {
                n(e);
              });
            });
          }));
    };
  return {
    batch: (e) => {
      let n;
      t++;
      try {
        n = e();
      } finally {
        (t--, t || o());
      }
      return n;
    },
    batchCalls:
      (e) =>
      (...t) => {
        a(() => {
          e(...t);
        });
      },
    schedule: a,
    setNotifyFunction: (e) => {
      n = e;
    },
    setBatchNotifyFunction: (e) => {
      r = e;
    },
    setScheduler: (e) => {
      i = e;
    },
  };
}
var H = V(),
  U = new (class extends g {
    #e = !0;
    #t;
    #n;
    constructor() {
      (super(),
        (this.#n = (e) => {
          if (typeof window < `u` && window.addEventListener) {
            let t = () => e(!0),
              n = () => e(!1);
            return (
              window.addEventListener(`online`, t, !1),
              window.addEventListener(`offline`, n, !1),
              () => {
                (window.removeEventListener(`online`, t), window.removeEventListener(`offline`, n));
              }
            );
          }
        }));
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(e) {
      ((this.#n = e), this.#t?.(), (this.#t = e(this.setOnline.bind(this))));
    }
    setOnline(e) {
      this.#e !== e &&
        ((this.#e = e),
        this.listeners.forEach((t) => {
          t(e);
        }));
    }
    isOnline() {
      return this.#e;
    }
  })();
function W(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function G(e) {
  return (e ?? `online`) !== `online` || U.isOnline();
}
var K = class extends Error {
  constructor(e) {
    (super(`CancelledError`), (this.revert = e?.revert), (this.silent = e?.silent));
  }
};
function le(e) {
  let t = !1,
    n = 0,
    r,
    i = z(),
    a = () => i.status !== `pending`,
    o = (t) => {
      if (!a()) {
        let n = new K(t);
        (f(n), e.onCancel?.(n));
      }
    },
    s = () => {
      t = !0;
    },
    c = () => {
      t = !1;
    },
    l = () => _.isFocused() && (e.networkMode === `always` || U.isOnline()) && e.canRun(),
    u = () => G(e.networkMode) && e.canRun(),
    d = (e) => {
      a() || (r?.(), i.resolve(e));
    },
    f = (e) => {
      a() || (r?.(), i.reject(e));
    },
    p = () =>
      new Promise((t) => {
        ((r = (e) => {
          (a() || l()) && t(e);
        }),
          e.onPause?.());
      }).then(() => {
        ((r = void 0), a() || e.onContinue?.());
      }),
    m = () => {
      if (a()) return;
      let r,
        i = n === 0 ? e.initialPromise : void 0;
      try {
        r = i ?? e.fn();
      } catch (e) {
        r = Promise.reject(e);
      }
      Promise.resolve(r)
        .then(d)
        .catch((r) => {
          if (a()) return;
          let i = e.retry ?? (R.isServer() ? 0 : 3),
            o = e.retryDelay ?? W,
            s = typeof o == `function` ? o(n, r) : o,
            c = i === !0 || (typeof i == `number` && n < i) || (typeof i == `function` && i(n, r));
          if (t || !c) {
            f(r);
            return;
          }
          (n++,
            e.onFail?.(n, r),
            ce(s)
              .then(() => (l() ? void 0 : p()))
              .then(() => {
                t ? f(r) : m();
              }));
        });
    };
  return {
    promise: i,
    status: () => i.status,
    cancel: o,
    continue: () => (r?.(), i),
    cancelRetry: s,
    continueRetry: c,
    canStart: u,
    start: () => (u() ? m() : p().then(m), i),
  };
}
var ue = class {
    #e;
    destroy() {
      this.clearGcTimeout();
    }
    scheduleGc() {
      (this.clearGcTimeout(),
        y(this.gcTime) &&
          (this.#e = v.setTimeout(() => {
            this.optionalRemove();
          }, this.gcTime)));
    }
    updateGcTime(e) {
      this.gcTime = Math.max(this.gcTime || 0, e ?? (R.isServer() ? 1 / 0 : 3e5));
    }
    clearGcTimeout() {
      this.#e !== void 0 && (v.clearTimeout(this.#e), (this.#e = void 0));
    }
  },
  q = f(u(), 1),
  de = d(),
  J = q.createContext(void 0),
  fe = (e) => {
    let t = q.useContext(J);
    if (e) return e;
    if (!t) throw Error(`No QueryClient set, use QueryClientProvider to set one`);
    return t;
  },
  pe = ({ client: e, children: t }) => (
    q.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e],
    ),
    (0, de.jsx)(J.Provider, { value: e, children: t })
  ),
  me = l(`triangle-alert`, [
    [
      `path`,
      {
        d: `m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3`,
        key: `wmoenq`,
      },
    ],
    [`path`, { d: `M12 9v4`, key: `juzpu7` }],
    [`path`, { d: `M12 17h.01`, key: `p32p05` }],
  ]),
  he = 420;
function Y(e, t = he) {
  return new Promise((n) => setTimeout(() => n(e), t));
}
function X(e) {
  return e
    .split(` `)
    .filter(Boolean)
    .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
    .join(` `);
}
var Z = {
  rd: `Road`,
  "rd.": `Road`,
  hse: `House`,
  no: `No`,
  nr: `near`,
  opp: `opposite`,
  oppst: `opposite`,
  soc: `Society`,
  apt: `Apartment`,
  blk: `Block`,
  ngr: `Nagar`,
  mh: `Maharashtra`,
  pn: `Pune`,
  bk: `Budruk`,
  flr: `Floor`,
  wkd: `Wakad`,
  blwadi: `Balewadi`,
  pcmc: `Pimpri Chinchwad`,
};
function ge(e) {
  return X(
    e
      .replace(/\s+/g, ` `)
      .replace(/\s*,\s*/g, `, `)
      .trim()
      .toLowerCase()
      .split(` `)
      .map((e) => {
        let t = e.replace(/[.,]/g, ``);
        return Z[t] ? Z[t] + (e.endsWith(`,`) ? `,` : ``) : e;
      })
      .join(` `),
  );
}
async function _e(e) {
  if (
    {
      BASE_URL: `/`,
      DEV: !1,
      MODE: `production`,
      PROD: !0,
      SSR: !1,
      TSS_DEV_SERVER: `false`,
      TSS_DEV_SSR_STYLES_BASEPATH: `/`,
      TSS_DEV_SSR_STYLES_ENABLED: `true`,
      TSS_DISABLE_CSRF_MIDDLEWARE_WARNING: `false`,
      TSS_INLINE_CSS_ENABLED: `false`,
      TSS_ROUTER_BASEPATH: ``,
      TSS_SERVER_FN_BASE: `/_serverFn/`,
      VITE_API_URL: `http://localhost:8000`,
      VITE_USE_MOCK: `false`,
    }.VITE_USE_MOCK === `false`
  ) {
    let t = await fetch(
      `${{ BASE_URL: `/`, DEV: !1, MODE: `production`, PROD: !0, SSR: !1, TSS_DEV_SERVER: `false`, TSS_DEV_SSR_STYLES_BASEPATH: `/`, TSS_DEV_SSR_STYLES_ENABLED: `true`, TSS_DISABLE_CSRF_MIDDLEWARE_WARNING: `false`, TSS_INLINE_CSS_ENABLED: `false`, TSS_ROUTER_BASEPATH: ``, TSS_SERVER_FN_BASE: `/_serverFn/`, VITE_API_URL: `http://localhost:8000`, VITE_USE_MOCK: `false` }.VITE_API_URL}/api/predict`,
      { method: `POST`, headers: { "Content-Type": `application/json` }, body: JSON.stringify(e) },
    );
    if (!t.ok) throw Error(`Failed to predict address`);
    return t.json();
  }
  let t = e.rawAddress.trim();
  if (t.length < 6)
    throw (
      await Y(null, 250),
      Error(`Address is too short to analyze. Enter at least a locality and city.`)
    );
  let n = t.toLowerCase(),
    r = n.match(/\b\d{6}\b/)?.[0] ?? e.pincode?.trim(),
    i = o
      .map((t) => {
        let i = 0.04,
          a = t.name.replace(/ (S\.O|H\.O|B\.O)$/, ``).toLowerCase(),
          o = n.indexOf(a);
        if (o >= 0) {
          let e = n.slice(Math.max(0, o - 14), o),
            t = /\b(near|nr|opp|opposite|behind|beside)\b[\s.,-]*$/.test(e);
          ((i += t ? 0.3 : 0.9), (i += Math.max(0, 0.08 - o / 400)));
        } else n.includes(a.slice(0, 5)) && (i += 0.25);
        return (
          n.includes(t.district.toLowerCase()) && (i += 0.2),
          e.district && e.district === t.district && (i += 0.14),
          e.state && e.state === t.state && (i += 0.08),
          r === t.pincode && (i += 0.55),
          t.status === `historical` && (i -= 0.25),
          { office: t, score: i }
        );
      })
      .sort((e, t) => t.score - e.score),
    a = (e) => Math.max(e, 0.01) ** 3,
    s = i.slice(0, 3).reduce((e, t) => e + a(t.score), 0),
    c = i[0],
    l = t.split(/[ ,]+/).filter(Boolean).length < 4 ? 0.25 : 0,
    u = a(c.score) / s - l,
    d = Math.min(0.985, Math.max(0.31, u)),
    f = i
      .slice(0, 3)
      .map((e, t) => ({
        rank: t + 1,
        postOffice: e.office.name,
        pincode: e.office.pincode,
        district: e.office.district,
        state: e.office.state,
        confidence: t === 0 ? d : Math.round((1 - d) * (t === 1 ? 0.7 : 0.3) * 1e3) / 1e3,
      })),
    p = c.office.name.replace(/ (S\.O|H\.O|B\.O)$/, ``),
    m = ge(t),
    g = [
      ...(t.match(/\b(flat|hse|house|plot|shop|room|rm)\s*\.?\s*(no\.?)?\s*\d+/i)
        ? [
            {
              label: `Flat/Unit`,
              value: X(t.match(/\b(flat|hse|house|plot|shop|room|rm)\s*\.?\s*(no\.?)?\s*\d+/i)[0]),
              type: `unit`,
            },
          ]
        : []),
      { label: `Locality`, value: p, type: `locality` },
      ...(n.includes(`road`) || n.includes(` rd`)
        ? [{ label: `Road`, value: `${p} Road`, type: `road` }]
        : []),
      { label: `City`, value: c.office.district, type: `city` },
      { label: `District`, value: c.office.district, type: `district` },
      { label: `State`, value: c.office.state, type: `state` },
      ...(r ? [{ label: `PIN`, value: r, type: `pincode` }] : []),
    ];
  return Y(
    {
      id: `PR-${Math.floor(24900 + Math.random() * 90)}`,
      createdAt: new Date().toISOString(),
      rawAddress: t,
      normalization: { raw: t, normalized: m, components: g },
      pincode: c.office.pincode,
      postOffice: c.office.name,
      district: c.office.district,
      state: c.office.state,
      confidence: d,
      status: d >= (await $()).autoRouteThreshold ? `auto_approved` : `needs_review`,
      candidates: f,
      explanation: [
        { label: `Locality detected`, detail: p, matched: !0 },
        { label: `District detected`, detail: c.office.district, matched: !!c.office.district },
        { label: `PIN token matched`, detail: r ?? `No PIN token in input`, matched: !!r },
        { label: `Address normalized`, detail: `${g.length} components resolved`, matched: !0 },
        {
          label: `Mapping validated`,
          detail: `Mapping ${c.office.mappingVersion} ${c.office.status === `active` ? `active` : c.office.status}`,
          matched: c.office.mappingVersion === `V3`,
        },
      ],
      operator: h.name,
    },
    900,
  );
}
async function ve() {
  return Y(r);
}
async function ye() {
  if (
    {
      BASE_URL: `/`,
      DEV: !1,
      MODE: `production`,
      PROD: !0,
      SSR: !1,
      TSS_DEV_SERVER: `false`,
      TSS_DEV_SSR_STYLES_BASEPATH: `/`,
      TSS_DEV_SSR_STYLES_ENABLED: `true`,
      TSS_DISABLE_CSRF_MIDDLEWARE_WARNING: `false`,
      TSS_INLINE_CSS_ENABLED: `false`,
      TSS_ROUTER_BASEPATH: ``,
      TSS_SERVER_FN_BASE: `/_serverFn/`,
      VITE_API_URL: `http://localhost:8000`,
      VITE_USE_MOCK: `false`,
    }.VITE_USE_MOCK === `false`
  ) {
    let e = await fetch(
      `${{ BASE_URL: `/`, DEV: !1, MODE: `production`, PROD: !0, SSR: !1, TSS_DEV_SERVER: `false`, TSS_DEV_SSR_STYLES_BASEPATH: `/`, TSS_DEV_SSR_STYLES_ENABLED: `true`, TSS_DISABLE_CSRF_MIDDLEWARE_WARNING: `false`, TSS_INLINE_CSS_ENABLED: `false`, TSS_ROUTER_BASEPATH: ``, TSS_SERVER_FN_BASE: `/_serverFn/`, VITE_API_URL: `http://localhost:8000`, VITE_USE_MOCK: `false` }.VITE_API_URL}/api/review-queue`,
    );
    if (!e.ok) throw Error(`Failed to fetch review queue`);
    return e.json();
  }
  return Y(n);
}
async function be(e) {
  let t = n.find((t) => t.id === e);
  if (!t) throw Error(`Review item ${e} was not found.`);
  return Y(t);
}
async function xe(e) {
  return Y({ ok: !0, id: e.id }, 600);
}
async function Q() {
  return Y(m);
}
async function Se(e) {
  let t = m.find((t) => t.id === e);
  if (!t) throw Error(`Parcel ${e} was not found.`);
  return Y(t);
}
async function Ce(e, t) {
  return Y({ ok: !0, id: e, status: t }, 500);
}
async function we() {
  return Y(o);
}
async function Te(e) {
  let t = o.find((t) => t.id === e);
  if (!t) throw Error(`Post office ${e} was not found.`);
  return Y(t);
}
async function Ee() {
  return Y(a);
}
async function De() {
  return Y(p);
}
async function Oe() {
  return Y(s);
}
async function ke() {
  return Y(c);
}
async function Ae() {
  return Y(i);
}
async function je() {
  return Y(e);
}
async function Me() {
  return Y(t, 150);
}
async function $() {
  if (
    {
      BASE_URL: `/`,
      DEV: !1,
      MODE: `production`,
      PROD: !0,
      SSR: !1,
      TSS_DEV_SERVER: `false`,
      TSS_DEV_SSR_STYLES_BASEPATH: `/`,
      TSS_DEV_SSR_STYLES_ENABLED: `true`,
      TSS_DISABLE_CSRF_MIDDLEWARE_WARNING: `false`,
      TSS_INLINE_CSS_ENABLED: `false`,
      TSS_ROUTER_BASEPATH: ``,
      TSS_SERVER_FN_BASE: `/_serverFn/`,
      VITE_API_URL: `http://localhost:8000`,
      VITE_USE_MOCK: `false`,
    }.VITE_USE_MOCK !== `false`
  )
    return Y({ autoRouteThreshold: 0.85, reviewFloor: 0.55 }, 100);
  let e = await fetch(
    `${{ BASE_URL: `/`, DEV: !1, MODE: `production`, PROD: !0, SSR: !1, TSS_DEV_SERVER: `false`, TSS_DEV_SSR_STYLES_BASEPATH: `/`, TSS_DEV_SSR_STYLES_ENABLED: `true`, TSS_DISABLE_CSRF_MIDDLEWARE_WARNING: `false`, TSS_INLINE_CSS_ENABLED: `false`, TSS_ROUTER_BASEPATH: ``, TSS_SERVER_FN_BASE: `/_serverFn/`, VITE_API_URL: `http://localhost:8000`, VITE_USE_MOCK: `false` }.VITE_API_URL}/api/config`,
  );
  if (!e.ok) throw Error(`Failed to fetch config`);
  return e.json();
}
export {
  L as A,
  re as B,
  K as C,
  H as D,
  U as E,
  T as F,
  se as G,
  j as H,
  w as I,
  ae as J,
  I as K,
  y as L,
  N as M,
  F as N,
  z as O,
  ie as P,
  C as R,
  ue as S,
  le as T,
  x as U,
  E as V,
  b as W,
  _ as X,
  v as Y,
  g as Z,
  xe as _,
  Ee as a,
  pe as b,
  Q as c,
  ve as d,
  be as f,
  _e as g,
  je as h,
  ke as i,
  M as j,
  R as k,
  Te as l,
  Ae as m,
  De as n,
  Me as o,
  ye as p,
  P as q,
  $ as r,
  Se as s,
  Oe as t,
  we as u,
  Ce as v,
  G as w,
  fe as x,
  me as y,
  S as z,
};
