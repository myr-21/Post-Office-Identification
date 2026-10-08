const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/routes-BKKUzlYq.js",
      "assets/primitives-BCHLNZiF.js",
      "assets/link-BI1tahbv.js",
      "assets/useRouter-CDYUVTqa.js",
      "assets/postroute-C-bfl2si.js",
      "assets/useQuery-kLumsi1Z.js",
      "assets/arrow-right-DRbeHAtE.js",
      "assets/map-pin-CEoWcCSG.js",
      "assets/package-1x7Ujfu1.js",
      "assets/data-table-CdyL5UA9.js",
      "assets/states-CAGmlWJM.js",
      "assets/badges-BR-XpxyQ.js",
      "assets/timeline-DFn3XumQ.js",
      "assets/circle-BT-iCFq7.js",
      "assets/activity-98qXQSuO.js",
      "assets/analytics-CB1z37jM.js",
      "assets/mapping-B6ntT9Zc.js",
      "assets/x-DvoBqKB2.js",
      "assets/parcels-hO2zf-md.js",
      "assets/useNavigate-C3-W0q7R.js",
      "assets/post-offices-CNvCwBFW.js",
      "assets/prediction-DQUvEmHA.js",
      "assets/useMutation-B-ySW0uT.js",
      "assets/mutation-1MmOTjY0.js",
      "assets/circle-check-BKl7BPHP.js",
      "assets/textarea-JM3xxskW.js",
      "assets/dist-BWeSYI3B.js",
      "assets/review-S_Lgop7D.js",
      "assets/settings-QenAtyas.js",
    ]),
) => i.map((i) => d[i]);
import {
  $ as e,
  B as t,
  F as n,
  G as r,
  H as i,
  I as a,
  K as o,
  L as s,
  N as c,
  Q as l,
  R as u,
  V as d,
  W as f,
  X as p,
  Y as m,
  Z as h,
  at as g,
  ct as _,
  dt as v,
  et as y,
  ft as b,
  it as x,
  j as S,
  l as C,
  lt as ee,
  mt as te,
  nt as ne,
  q as re,
  rt as ie,
  st as ae,
  tt as oe,
  ut as se,
  y as ce,
  z as le,
} from "./primitives-BCHLNZiF.js";
import {
  a as ue,
  c as w,
  d as T,
  i as de,
  l as fe,
  n as pe,
  o as me,
  r as E,
  s as D,
  t as he,
  u as ge,
} from "./preload-helper-DCw9-y5V.js";
import {
  C as _e,
  D as ve,
  E as ye,
  O as be,
  S as xe,
  T as Se,
  _ as Ce,
  a as we,
  b as Te,
  c as Ee,
  d as De,
  f as Oe,
  g as ke,
  h as Ae,
  i as je,
  l as Me,
  m as Ne,
  n as Pe,
  o as Fe,
  p as Ie,
  r as Le,
  s as Re,
  t as ze,
  v as Be,
  x as Ve,
  y as He,
} from "./link-BI1tahbv.js";
import { n as Ue, t as We } from "./useRouter-CDYUVTqa.js";
import {
  B as Ge,
  D as Ke,
  E as qe,
  F as Je,
  I as Ye,
  P as Xe,
  R as Ze,
  V as Qe,
  W as $e,
  X as et,
  Z as tt,
  b as nt,
  o as rt,
  q as it,
  y as at,
  z as ot,
} from "./postroute-C-bfl2si.js";
import { n as st, t as ct } from "./useQuery-kLumsi1Z.js";
import { t as lt } from "./mutation-1MmOTjY0.js";
import { t as ut } from "./circle-check-BKl7BPHP.js";
import { t as dt } from "./circle-BT-iCFq7.js";
import { t as ft } from "./map-pin-CEoWcCSG.js";
import { t as pt } from "./package-1x7Ujfu1.js";
import { t as mt } from "./x-DvoBqKB2.js";
import { t as ht } from "./dist-BWeSYI3B.js";
import { t as gt } from "./parcels_._parcelId-tcpcGwR0.js";
import { t as _t } from "./post-offices_._officeId-BcHyPUMo.js";
import { t as vt } from "./review_._reviewId-ApgbWFva.js";
var yt = b((e) => {
    function t(e, t) {
      var n = e.length;
      e.push(t);
      a: for (; 0 < n;) {
        var r = (n - 1) >>> 1,
          a = e[r];
        if (0 < i(a, t)) ((e[r] = t), (e[n] = a), (n = r));
        else break a;
      }
    }
    function n(e) {
      return e.length === 0 ? null : e[0];
    }
    function r(e) {
      if (e.length === 0) return null;
      var t = e[0],
        n = e.pop();
      if (n !== t) {
        e[0] = n;
        a: for (var r = 0, a = e.length, o = a >>> 1; r < o;) {
          var s = 2 * (r + 1) - 1,
            c = e[s],
            l = s + 1,
            u = e[l];
          if (0 > i(c, n))
            l < a && 0 > i(u, c)
              ? ((e[r] = u), (e[l] = n), (r = l))
              : ((e[r] = c), (e[s] = n), (r = s));
          else if (l < a && 0 > i(u, n)) ((e[r] = u), (e[l] = n), (r = l));
          else break a;
        }
      }
      return t;
    }
    function i(e, t) {
      var n = e.sortIndex - t.sortIndex;
      return n === 0 ? e.id - t.id : n;
    }
    if (
      ((e.unstable_now = void 0),
      typeof performance == `object` && typeof performance.now == `function`)
    ) {
      var a = performance;
      e.unstable_now = function () {
        return a.now();
      };
    } else {
      var o = Date,
        s = o.now();
      e.unstable_now = function () {
        return o.now() - s;
      };
    }
    var c = [],
      l = [],
      u = 1,
      d = null,
      f = 3,
      p = !1,
      m = !1,
      h = !1,
      g = !1,
      _ = typeof setTimeout == `function` ? setTimeout : null,
      v = typeof clearTimeout == `function` ? clearTimeout : null,
      y = typeof setImmediate < `u` ? setImmediate : null;
    function b(e) {
      for (var i = n(l); i !== null;) {
        if (i.callback === null) r(l);
        else if (i.startTime <= e) (r(l), (i.sortIndex = i.expirationTime), t(c, i));
        else break;
        i = n(l);
      }
    }
    function x(e) {
      if (((h = !1), b(e), !m))
        if (n(c) !== null) ((m = !0), S || ((S = !0), ie()));
        else {
          var t = n(l);
          t !== null && se(x, t.startTime - e);
        }
    }
    var S = !1,
      C = -1,
      ee = 5,
      te = -1;
    function ne() {
      return g ? !0 : !(e.unstable_now() - te < ee);
    }
    function re() {
      if (((g = !1), S)) {
        var t = e.unstable_now();
        te = t;
        var i = !0;
        try {
          a: {
            ((m = !1), h && ((h = !1), v(C), (C = -1)), (p = !0));
            var a = f;
            try {
              b: {
                for (b(t), d = n(c); d !== null && !(d.expirationTime > t && ne());) {
                  var o = d.callback;
                  if (typeof o == `function`) {
                    ((d.callback = null), (f = d.priorityLevel));
                    var s = o(d.expirationTime <= t);
                    if (((t = e.unstable_now()), typeof s == `function`)) {
                      ((d.callback = s), b(t), (i = !0));
                      break b;
                    }
                    (d === n(c) && r(c), b(t));
                  } else r(c);
                  d = n(c);
                }
                if (d !== null) i = !0;
                else {
                  var u = n(l);
                  (u !== null && se(x, u.startTime - t), (i = !1));
                }
              }
              break a;
            } finally {
              ((d = null), (f = a), (p = !1));
            }
          }
        } finally {
          i ? ie() : (S = !1);
        }
      }
    }
    var ie;
    if (typeof y == `function`)
      ie = function () {
        y(re);
      };
    else if (typeof MessageChannel < `u`) {
      var ae = new MessageChannel(),
        oe = ae.port2;
      ((ae.port1.onmessage = re),
        (ie = function () {
          oe.postMessage(null);
        }));
    } else
      ie = function () {
        _(re, 0);
      };
    function se(t, n) {
      C = _(function () {
        t(e.unstable_now());
      }, n);
    }
    ((e.unstable_IdlePriority = 5),
      (e.unstable_ImmediatePriority = 1),
      (e.unstable_LowPriority = 4),
      (e.unstable_NormalPriority = 3),
      (e.unstable_Profiling = null),
      (e.unstable_UserBlockingPriority = 2),
      (e.unstable_cancelCallback = function (e) {
        e.callback = null;
      }),
      (e.unstable_forceFrameRate = function (e) {
        0 > e || 125 < e
          ? console.error(
              `forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`,
            )
          : (ee = 0 < e ? Math.floor(1e3 / e) : 5);
      }),
      (e.unstable_getCurrentPriorityLevel = function () {
        return f;
      }),
      (e.unstable_next = function (e) {
        switch (f) {
          case 1:
          case 2:
          case 3:
            var t = 3;
            break;
          default:
            t = f;
        }
        var n = f;
        f = t;
        try {
          return e();
        } finally {
          f = n;
        }
      }),
      (e.unstable_requestPaint = function () {
        g = !0;
      }),
      (e.unstable_runWithPriority = function (e, t) {
        switch (e) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            e = 3;
        }
        var n = f;
        f = e;
        try {
          return t();
        } finally {
          f = n;
        }
      }),
      (e.unstable_scheduleCallback = function (r, i, a) {
        var o = e.unstable_now();
        switch (
          (typeof a == `object` && a
            ? ((a = a.delay), (a = typeof a == `number` && 0 < a ? o + a : o))
            : (a = o),
          r)
        ) {
          case 1:
            var s = -1;
            break;
          case 2:
            s = 250;
            break;
          case 5:
            s = 1073741823;
            break;
          case 4:
            s = 1e4;
            break;
          default:
            s = 5e3;
        }
        return (
          (s = a + s),
          (r = {
            id: u++,
            callback: i,
            priorityLevel: r,
            startTime: a,
            expirationTime: s,
            sortIndex: -1,
          }),
          a > o
            ? ((r.sortIndex = a),
              t(l, r),
              n(c) === null && r === n(l) && (h ? (v(C), (C = -1)) : (h = !0), se(x, a - o)))
            : ((r.sortIndex = s), t(c, r), m || p || ((m = !0), S || ((S = !0), ie()))),
          r
        );
      }),
      (e.unstable_shouldYield = ne),
      (e.unstable_wrapCallback = function (e) {
        var t = f;
        return function () {
          var n = f;
          f = t;
          try {
            return e.apply(this, arguments);
          } finally {
            f = n;
          }
        };
      }));
  }),
  bt = b((e, t) => {
    t.exports = yt();
  }),
  xt = b((e) => {
    var t = bt(),
      n = v(),
      r = se();
    function i(e) {
      var t = `https://react.dev/errors/` + e;
      if (1 < arguments.length) {
        t += `?args[]=` + encodeURIComponent(arguments[1]);
        for (var n = 2; n < arguments.length; n++)
          t += `&args[]=` + encodeURIComponent(arguments[n]);
      }
      return (
        `Minified React error #` +
        e +
        `; visit ` +
        t +
        ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
      );
    }
    function a(e) {
      return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
    }
    function o(e) {
      var t = e,
        n = e;
      if (e.alternate) for (; t.return;) t = t.return;
      else {
        e = t;
        do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
        while (e);
      }
      return t.tag === 3 ? n : null;
    }
    function s(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
          return t.dehydrated;
      }
      return null;
    }
    function c(e) {
      if (e.tag === 31) {
        var t = e.memoizedState;
        if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
          return t.dehydrated;
      }
      return null;
    }
    function l(e) {
      if (o(e) !== e) throw Error(i(188));
    }
    function u(e) {
      var t = e.alternate;
      if (!t) {
        if (((t = o(e)), t === null)) throw Error(i(188));
        return t === e ? e : null;
      }
      for (var n = e, r = t; ;) {
        var a = n.return;
        if (a === null) break;
        var s = a.alternate;
        if (s === null) {
          if (((r = a.return), r !== null)) {
            n = r;
            continue;
          }
          break;
        }
        if (a.child === s.child) {
          for (s = a.child; s;) {
            if (s === n) return (l(a), e);
            if (s === r) return (l(a), t);
            s = s.sibling;
          }
          throw Error(i(188));
        }
        if (n.return !== r.return) ((n = a), (r = s));
        else {
          for (var c = !1, u = a.child; u;) {
            if (u === n) {
              ((c = !0), (n = a), (r = s));
              break;
            }
            if (u === r) {
              ((c = !0), (r = a), (n = s));
              break;
            }
            u = u.sibling;
          }
          if (!c) {
            for (u = s.child; u;) {
              if (u === n) {
                ((c = !0), (n = s), (r = a));
                break;
              }
              if (u === r) {
                ((c = !0), (r = s), (n = a));
                break;
              }
              u = u.sibling;
            }
            if (!c) throw Error(i(189));
          }
        }
        if (n.alternate !== r) throw Error(i(190));
      }
      if (n.tag !== 3) throw Error(i(188));
      return n.stateNode.current === n ? e : t;
    }
    function d(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null;) {
        if (((t = d(e)), t !== null)) return t;
        e = e.sibling;
      }
      return null;
    }
    var f = Object.assign,
      p = Symbol.for(`react.element`),
      m = Symbol.for(`react.transitional.element`),
      h = Symbol.for(`react.portal`),
      g = Symbol.for(`react.fragment`),
      _ = Symbol.for(`react.strict_mode`),
      y = Symbol.for(`react.profiler`),
      b = Symbol.for(`react.consumer`),
      x = Symbol.for(`react.context`),
      S = Symbol.for(`react.forward_ref`),
      C = Symbol.for(`react.suspense`),
      ee = Symbol.for(`react.suspense_list`),
      te = Symbol.for(`react.memo`),
      ne = Symbol.for(`react.lazy`),
      re = Symbol.for(`react.activity`),
      ie = Symbol.for(`react.memo_cache_sentinel`),
      ae = Symbol.iterator;
    function oe(e) {
      return typeof e != `object` || !e
        ? null
        : ((e = (ae && e[ae]) || e[`@@iterator`]), typeof e == `function` ? e : null);
    }
    var ce = Symbol.for(`react.client.reference`);
    function le(e) {
      if (e == null) return null;
      if (typeof e == `function`) return e.$$typeof === ce ? null : e.displayName || e.name || null;
      if (typeof e == `string`) return e;
      switch (e) {
        case g:
          return `Fragment`;
        case y:
          return `Profiler`;
        case _:
          return `StrictMode`;
        case C:
          return `Suspense`;
        case ee:
          return `SuspenseList`;
        case re:
          return `Activity`;
      }
      if (typeof e == `object`)
        switch (e.$$typeof) {
          case h:
            return `Portal`;
          case x:
            return e.displayName || `Context`;
          case b:
            return (e._context.displayName || `Context`) + `.Consumer`;
          case S:
            var t = e.render;
            return (
              (e = e.displayName),
              (e ||=
                ((e = t.displayName || t.name || ``),
                e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`)),
              e
            );
          case te:
            return ((t = e.displayName || null), t === null ? le(e.type) || `Memo` : t);
          case ne:
            ((t = e._payload), (e = e._init));
            try {
              return le(e(t));
            } catch {}
        }
      return null;
    }
    var ue = Array.isArray,
      w = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      T = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      de = { pending: !1, data: null, method: null, action: null },
      fe = [],
      pe = -1;
    function me(e) {
      return { current: e };
    }
    function E(e) {
      0 > pe || ((e.current = fe[pe]), (fe[pe] = null), pe--);
    }
    function D(e, t) {
      (pe++, (fe[pe] = e.current), (e.current = t));
    }
    var he = me(null),
      ge = me(null),
      _e = me(null),
      ve = me(null);
    function ye(e, t) {
      switch ((D(_e, t), D(ge, e), D(he, null), t.nodeType)) {
        case 9:
        case 11:
          e = (e = t.documentElement) && (e = e.namespaceURI) ? Vd(e) : 0;
          break;
        default:
          if (((e = t.tagName), (t = t.namespaceURI))) ((t = Vd(t)), (e = Hd(t, e)));
          else
            switch (e) {
              case `svg`:
                e = 1;
                break;
              case `math`:
                e = 2;
                break;
              default:
                e = 0;
            }
      }
      (E(he), D(he, e));
    }
    function be() {
      (E(he), E(ge), E(_e));
    }
    function xe(e) {
      e.memoizedState !== null && D(ve, e);
      var t = he.current,
        n = Hd(t, e.type);
      t !== n && (D(ge, e), D(he, n));
    }
    function Se(e) {
      (ge.current === e && (E(he), E(ge)), ve.current === e && (E(ve), (Qf._currentValue = de)));
    }
    var Ce, we;
    function Te(e) {
      if (Ce === void 0)
        try {
          throw Error();
        } catch (e) {
          var t = e.stack.trim().match(/\n( *(at )?)/);
          ((Ce = (t && t[1]) || ``),
            (we =
              -1 <
              e.stack.indexOf(`
    at`)
                ? ` (<anonymous>)`
                : -1 < e.stack.indexOf(`@`)
                  ? `@unknown:0:0`
                  : ``));
        }
      return (
        `
` +
        Ce +
        e +
        we
      );
    }
    var Ee = !1;
    function De(e, t) {
      if (!e || Ee) return ``;
      Ee = !0;
      var n = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var r = {
          DetermineComponentFrameRoot: function () {
            try {
              if (t) {
                var n = function () {
                  throw Error();
                };
                if (
                  (Object.defineProperty(n.prototype, "props", {
                    set: function () {
                      throw Error();
                    },
                  }),
                  typeof Reflect == `object` && Reflect.construct)
                ) {
                  try {
                    Reflect.construct(n, []);
                  } catch (e) {
                    var r = e;
                  }
                  Reflect.construct(e, [], n);
                } else {
                  try {
                    n.call();
                  } catch (e) {
                    r = e;
                  }
                  e.call(n.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (e) {
                  r = e;
                }
                (n = e()) && typeof n.catch == `function` && n.catch(function () {});
              }
            } catch (e) {
              if (e && r && typeof e.stack == `string`) return [e.stack, r.stack];
            }
            return [null, null];
          },
        };
        r.DetermineComponentFrameRoot.displayName = `DetermineComponentFrameRoot`;
        var i = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, `name`);
        i &&
          i.configurable &&
          Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
            value: `DetermineComponentFrameRoot`,
          });
        var a = r.DetermineComponentFrameRoot(),
          o = a[0],
          s = a[1];
        if (o && s) {
          var c = o.split(`
`),
            l = s.split(`
`);
          for (i = r = 0; r < c.length && !c[r].includes(`DetermineComponentFrameRoot`);) r++;
          for (; i < l.length && !l[i].includes(`DetermineComponentFrameRoot`);) i++;
          if (r === c.length || i === l.length)
            for (r = c.length - 1, i = l.length - 1; 1 <= r && 0 <= i && c[r] !== l[i];) i--;
          for (; 1 <= r && 0 <= i; r--, i--)
            if (c[r] !== l[i]) {
              if (r !== 1 || i !== 1)
                do
                  if ((r--, i--, 0 > i || c[r] !== l[i])) {
                    var u =
                      `
` + c[r].replace(` at new `, ` at `);
                    return (
                      e.displayName &&
                        u.includes(`<anonymous>`) &&
                        (u = u.replace(`<anonymous>`, e.displayName)),
                      u
                    );
                  }
                while (1 <= r && 0 <= i);
              break;
            }
        }
      } finally {
        ((Ee = !1), (Error.prepareStackTrace = n));
      }
      return (n = e ? e.displayName || e.name : ``) ? Te(n) : ``;
    }
    function Oe(e, t) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return Te(e.type);
        case 16:
          return Te(`Lazy`);
        case 13:
          return e.child !== t && t !== null ? Te(`Suspense Fallback`) : Te(`Suspense`);
        case 19:
          return Te(`SuspenseList`);
        case 0:
        case 15:
          return De(e.type, !1);
        case 11:
          return De(e.type.render, !1);
        case 1:
          return De(e.type, !0);
        case 31:
          return Te(`Activity`);
        default:
          return ``;
      }
    }
    function ke(e) {
      try {
        var t = ``,
          n = null;
        do ((t += Oe(e, n)), (n = e), (e = e.return));
        while (e);
        return t;
      } catch (e) {
        return (
          `
Error generating stack: ` +
          e.message +
          `
` +
          e.stack
        );
      }
    }
    var Ae = Object.prototype.hasOwnProperty,
      je = t.unstable_scheduleCallback,
      Me = t.unstable_cancelCallback,
      Ne = t.unstable_shouldYield,
      Pe = t.unstable_requestPaint,
      Fe = t.unstable_now,
      Ie = t.unstable_getCurrentPriorityLevel,
      Le = t.unstable_ImmediatePriority,
      Re = t.unstable_UserBlockingPriority,
      ze = t.unstable_NormalPriority,
      Be = t.unstable_LowPriority,
      Ve = t.unstable_IdlePriority,
      He = t.log,
      Ue = t.unstable_setDisableYieldValue,
      We = null,
      Ge = null;
    function Ke(e) {
      if ((typeof He == `function` && Ue(e), Ge && typeof Ge.setStrictMode == `function`))
        try {
          Ge.setStrictMode(We, e);
        } catch {}
    }
    var qe = Math.clz32 ? Math.clz32 : Xe,
      Je = Math.log,
      Ye = Math.LN2;
    function Xe(e) {
      return ((e >>>= 0), e === 0 ? 32 : (31 - ((Je(e) / Ye) | 0)) | 0);
    }
    var Ze = 256,
      Qe = 262144,
      $e = 4194304;
    function et(e) {
      var t = e & 42;
      if (t !== 0) return t;
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
          return e & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return e & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return e;
      }
    }
    function tt(e, t, n) {
      var r = e.pendingLanes;
      if (r === 0) return 0;
      var i = 0,
        a = e.suspendedLanes,
        o = e.pingedLanes;
      e = e.warmLanes;
      var s = r & 134217727;
      return (
        s === 0
          ? ((s = r & ~a),
            s === 0
              ? o === 0
                ? n || ((n = r & ~e), n !== 0 && (i = et(n)))
                : (i = et(o))
              : (i = et(s)))
          : ((r = s & ~a),
            r === 0
              ? ((o &= s), o === 0 ? n || ((n = s & ~e), n !== 0 && (i = et(n))) : (i = et(o)))
              : (i = et(r))),
        i === 0
          ? 0
          : t !== 0 &&
              t !== i &&
              (t & a) === 0 &&
              ((a = i & -i), (n = t & -t), a >= n || (a === 32 && n & 4194048))
            ? t
            : i
      );
    }
    function nt(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function rt(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return t + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function it() {
      var e = $e;
      return (($e <<= 1), !($e & 62914560) && ($e = 4194304), e);
    }
    function at(e) {
      for (var t = [], n = 0; 31 > n; n++) t.push(e);
      return t;
    }
    function ot(e, t) {
      ((e.pendingLanes |= t),
        t !== 268435456 && ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
    }
    function st(e, t, n, r, i, a) {
      var o = e.pendingLanes;
      ((e.pendingLanes = n),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.warmLanes = 0),
        (e.expiredLanes &= n),
        (e.entangledLanes &= n),
        (e.errorRecoveryDisabledLanes &= n),
        (e.shellSuspendCounter = 0));
      var s = e.entanglements,
        c = e.expirationTimes,
        l = e.hiddenUpdates;
      for (n = o & ~n; 0 < n;) {
        var u = 31 - qe(n),
          d = 1 << u;
        ((s[u] = 0), (c[u] = -1));
        var f = l[u];
        if (f !== null)
          for (l[u] = null, u = 0; u < f.length; u++) {
            var p = f[u];
            p !== null && (p.lane &= -536870913);
          }
        n &= ~d;
      }
      (r !== 0 && ct(e, r, 0),
        a !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= a & ~(o & ~t)));
    }
    function ct(e, t, n) {
      ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
      var r = 31 - qe(t);
      ((e.entangledLanes |= t),
        (e.entanglements[r] = e.entanglements[r] | 1073741824 | (n & 261930)));
    }
    function lt(e, t) {
      var n = (e.entangledLanes |= t);
      for (e = e.entanglements; n;) {
        var r = 31 - qe(n),
          i = 1 << r;
        ((i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i));
      }
    }
    function ut(e, t) {
      var n = t & -t;
      return ((n = n & 42 ? 1 : dt(n)), (n & (e.suspendedLanes | t)) === 0 ? n : 0);
    }
    function dt(e) {
      switch (e) {
        case 2:
          e = 1;
          break;
        case 8:
          e = 4;
          break;
        case 32:
          e = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          e = 128;
          break;
        case 268435456:
          e = 134217728;
          break;
        default:
          e = 0;
      }
      return e;
    }
    function ft(e) {
      return ((e &= -e), 2 < e ? (8 < e ? (e & 134217727 ? 32 : 268435456) : 8) : 2);
    }
    function pt() {
      var e = T.p;
      return e === 0 ? ((e = window.event), e === void 0 ? 32 : mp(e.type)) : e;
    }
    function mt(e, t) {
      var n = T.p;
      try {
        return ((T.p = e), t());
      } finally {
        T.p = n;
      }
    }
    var ht = Math.random().toString(36).slice(2),
      gt = `__reactFiber$` + ht,
      _t = `__reactProps$` + ht,
      vt = `__reactContainer$` + ht,
      yt = `__reactEvents$` + ht,
      xt = `__reactListeners$` + ht,
      St = `__reactHandles$` + ht,
      Ct = `__reactResources$` + ht,
      wt = `__reactMarker$` + ht;
    function Tt(e) {
      (delete e[gt], delete e[_t], delete e[yt], delete e[xt], delete e[St]);
    }
    function Et(e) {
      var t = e[gt];
      if (t) return t;
      for (var n = e.parentNode; n;) {
        if ((t = n[vt] || n[gt])) {
          if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
            for (e = df(e); e !== null;) {
              if ((n = e[gt])) return n;
              e = df(e);
            }
          return t;
        }
        ((e = n), (n = e.parentNode));
      }
      return null;
    }
    function Dt(e) {
      if ((e = e[gt] || e[vt])) {
        var t = e.tag;
        if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
      }
      return null;
    }
    function Ot(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
      throw Error(i(33));
    }
    function kt(e) {
      var t = e[Ct];
      return ((t ||= e[Ct] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), t);
    }
    function At(e) {
      e[wt] = !0;
    }
    var jt = new Set(),
      Mt = {};
    function Nt(e, t) {
      (Pt(e, t), Pt(e + `Capture`, t));
    }
    function Pt(e, t) {
      for (Mt[e] = t, e = 0; e < t.length; e++) jt.add(t[e]);
    }
    var Ft = RegExp(
        `^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`,
      ),
      It = {},
      Lt = {};
    function Rt(e) {
      return Ae.call(Lt, e)
        ? !0
        : Ae.call(It, e)
          ? !1
          : Ft.test(e)
            ? (Lt[e] = !0)
            : ((It[e] = !0), !1);
    }
    function zt(e, t, n) {
      if (Rt(t))
        if (n === null) e.removeAttribute(t);
        else {
          switch (typeof n) {
            case `undefined`:
            case `function`:
            case `symbol`:
              e.removeAttribute(t);
              return;
            case `boolean`:
              var r = t.toLowerCase().slice(0, 5);
              if (r !== `data-` && r !== `aria-`) {
                e.removeAttribute(t);
                return;
              }
          }
          e.setAttribute(t, `` + n);
        }
    }
    function Bt(e, t, n) {
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case `undefined`:
          case `function`:
          case `symbol`:
          case `boolean`:
            e.removeAttribute(t);
            return;
        }
        e.setAttribute(t, `` + n);
      }
    }
    function Vt(e, t, n, r) {
      if (r === null) e.removeAttribute(n);
      else {
        switch (typeof r) {
          case `undefined`:
          case `function`:
          case `symbol`:
          case `boolean`:
            e.removeAttribute(n);
            return;
        }
        e.setAttributeNS(t, n, `` + r);
      }
    }
    function Ht(e) {
      switch (typeof e) {
        case `bigint`:
        case `boolean`:
        case `number`:
        case `string`:
        case `undefined`:
          return e;
        case `object`:
          return e;
        default:
          return ``;
      }
    }
    function Ut(e) {
      var t = e.type;
      return (e = e.nodeName) && e.toLowerCase() === `input` && (t === `checkbox` || t === `radio`);
    }
    function Wt(e, t, n) {
      var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      if (
        !e.hasOwnProperty(t) &&
        r !== void 0 &&
        typeof r.get == `function` &&
        typeof r.set == `function`
      ) {
        var i = r.get,
          a = r.set;
        return (
          Object.defineProperty(e, t, {
            configurable: !0,
            get: function () {
              return i.call(this);
            },
            set: function (e) {
              ((n = `` + e), a.call(this, e));
            },
          }),
          Object.defineProperty(e, t, { enumerable: r.enumerable }),
          {
            getValue: function () {
              return n;
            },
            setValue: function (e) {
              n = `` + e;
            },
            stopTracking: function () {
              ((e._valueTracker = null), delete e[t]);
            },
          }
        );
      }
    }
    function Gt(e) {
      if (!e._valueTracker) {
        var t = Ut(e) ? `checked` : `value`;
        e._valueTracker = Wt(e, t, `` + e[t]);
      }
    }
    function Kt(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var n = t.getValue(),
        r = ``;
      return (
        e && (r = Ut(e) ? (e.checked ? `true` : `false`) : e.value),
        (e = r),
        e !== n && (t.setValue(e), !0)
      );
    }
    function qt(e) {
      if (((e ||= typeof document < `u` ? document : void 0), e === void 0)) return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Jt = /[\n"\\]/g;
    function Yt(e) {
      return e.replace(Jt, function (e) {
        return `\\` + e.charCodeAt(0).toString(16) + ` `;
      });
    }
    function Xt(e, t, n, r, i, a, o, s) {
      ((e.name = ``),
        o != null && typeof o != `function` && typeof o != `symbol` && typeof o != `boolean`
          ? (e.type = o)
          : e.removeAttribute(`type`),
        t == null
          ? (o !== `submit` && o !== `reset`) || e.removeAttribute(`value`)
          : o === `number`
            ? ((t === 0 && e.value === ``) || e.value != t) && (e.value = `` + Ht(t))
            : e.value !== `` + Ht(t) && (e.value = `` + Ht(t)),
        t == null
          ? n == null
            ? r != null && e.removeAttribute(`value`)
            : Qt(e, o, Ht(n))
          : Qt(e, o, Ht(t)),
        i == null && a != null && (e.defaultChecked = !!a),
        i != null && (e.checked = i && typeof i != `function` && typeof i != `symbol`),
        s != null && typeof s != `function` && typeof s != `symbol` && typeof s != `boolean`
          ? (e.name = `` + Ht(s))
          : e.removeAttribute(`name`));
    }
    function Zt(e, t, n, r, i, a, o, s) {
      if (
        (a != null &&
          typeof a != `function` &&
          typeof a != `symbol` &&
          typeof a != `boolean` &&
          (e.type = a),
        t != null || n != null)
      ) {
        if (!((a !== `submit` && a !== `reset`) || t != null)) {
          Gt(e);
          return;
        }
        ((n = n == null ? `` : `` + Ht(n)),
          (t = t == null ? n : `` + Ht(t)),
          s || t === e.value || (e.value = t),
          (e.defaultValue = t));
      }
      ((r ??= i),
        (r = typeof r != `function` && typeof r != `symbol` && !!r),
        (e.checked = s ? e.checked : !!r),
        (e.defaultChecked = !!r),
        o != null &&
          typeof o != `function` &&
          typeof o != `symbol` &&
          typeof o != `boolean` &&
          (e.name = o),
        Gt(e));
    }
    function Qt(e, t, n) {
      (t === `number` && qt(e.ownerDocument) === e) ||
        e.defaultValue === `` + n ||
        (e.defaultValue = `` + n);
    }
    function $t(e, t, n, r) {
      if (((e = e.options), t)) {
        t = {};
        for (var i = 0; i < n.length; i++) t[`$` + n[i]] = !0;
        for (n = 0; n < e.length; n++)
          ((i = t.hasOwnProperty(`$` + e[n].value)),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0));
      } else {
        for (n = `` + Ht(n), t = null, i = 0; i < e.length; i++) {
          if (e[i].value === n) {
            ((e[i].selected = !0), r && (e[i].defaultSelected = !0));
            return;
          }
          t !== null || e[i].disabled || (t = e[i]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function en(e, t, n) {
      if (t != null && ((t = `` + Ht(t)), t !== e.value && (e.value = t), n == null)) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = n == null ? `` : `` + Ht(n);
    }
    function tn(e, t, n, r) {
      if (t == null) {
        if (r != null) {
          if (n != null) throw Error(i(92));
          if (ue(r)) {
            if (1 < r.length) throw Error(i(93));
            r = r[0];
          }
          n = r;
        }
        ((n ??= ``), (t = n));
      }
      ((n = Ht(t)),
        (e.defaultValue = n),
        (r = e.textContent),
        r === n && r !== `` && r !== null && (e.value = r),
        Gt(e));
    }
    function nn(e, t) {
      if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
          n.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    var rn = new Set(
      `animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(
        ` `,
      ),
    );
    function an(e, t, n) {
      var r = t.indexOf(`--`) === 0;
      n == null || typeof n == `boolean` || n === ``
        ? r
          ? e.setProperty(t, ``)
          : t === `float`
            ? (e.cssFloat = ``)
            : (e[t] = ``)
        : r
          ? e.setProperty(t, n)
          : typeof n != `number` || n === 0 || rn.has(t)
            ? t === `float`
              ? (e.cssFloat = n)
              : (e[t] = (`` + n).trim())
            : (e[t] = n + `px`);
    }
    function on(e, t, n) {
      if (t != null && typeof t != `object`) throw Error(i(62));
      if (((e = e.style), n != null)) {
        for (var r in n)
          !n.hasOwnProperty(r) ||
            (t != null && t.hasOwnProperty(r)) ||
            (r.indexOf(`--`) === 0
              ? e.setProperty(r, ``)
              : r === `float`
                ? (e.cssFloat = ``)
                : (e[r] = ``));
        for (var a in t) ((r = t[a]), t.hasOwnProperty(a) && n[a] !== r && an(e, a, r));
      } else for (var o in t) t.hasOwnProperty(o) && an(e, o, t[o]);
    }
    function sn(e) {
      if (e.indexOf(`-`) === -1) return !1;
      switch (e) {
        case `annotation-xml`:
        case `color-profile`:
        case `font-face`:
        case `font-face-src`:
        case `font-face-uri`:
        case `font-face-format`:
        case `font-face-name`:
        case `missing-glyph`:
          return !1;
        default:
          return !0;
      }
    }
    var cn = new Map([
        [`acceptCharset`, `accept-charset`],
        [`htmlFor`, `for`],
        [`httpEquiv`, `http-equiv`],
        [`crossOrigin`, `crossorigin`],
        [`accentHeight`, `accent-height`],
        [`alignmentBaseline`, `alignment-baseline`],
        [`arabicForm`, `arabic-form`],
        [`baselineShift`, `baseline-shift`],
        [`capHeight`, `cap-height`],
        [`clipPath`, `clip-path`],
        [`clipRule`, `clip-rule`],
        [`colorInterpolation`, `color-interpolation`],
        [`colorInterpolationFilters`, `color-interpolation-filters`],
        [`colorProfile`, `color-profile`],
        [`colorRendering`, `color-rendering`],
        [`dominantBaseline`, `dominant-baseline`],
        [`enableBackground`, `enable-background`],
        [`fillOpacity`, `fill-opacity`],
        [`fillRule`, `fill-rule`],
        [`floodColor`, `flood-color`],
        [`floodOpacity`, `flood-opacity`],
        [`fontFamily`, `font-family`],
        [`fontSize`, `font-size`],
        [`fontSizeAdjust`, `font-size-adjust`],
        [`fontStretch`, `font-stretch`],
        [`fontStyle`, `font-style`],
        [`fontVariant`, `font-variant`],
        [`fontWeight`, `font-weight`],
        [`glyphName`, `glyph-name`],
        [`glyphOrientationHorizontal`, `glyph-orientation-horizontal`],
        [`glyphOrientationVertical`, `glyph-orientation-vertical`],
        [`horizAdvX`, `horiz-adv-x`],
        [`horizOriginX`, `horiz-origin-x`],
        [`imageRendering`, `image-rendering`],
        [`letterSpacing`, `letter-spacing`],
        [`lightingColor`, `lighting-color`],
        [`markerEnd`, `marker-end`],
        [`markerMid`, `marker-mid`],
        [`markerStart`, `marker-start`],
        [`overlinePosition`, `overline-position`],
        [`overlineThickness`, `overline-thickness`],
        [`paintOrder`, `paint-order`],
        [`panose-1`, `panose-1`],
        [`pointerEvents`, `pointer-events`],
        [`renderingIntent`, `rendering-intent`],
        [`shapeRendering`, `shape-rendering`],
        [`stopColor`, `stop-color`],
        [`stopOpacity`, `stop-opacity`],
        [`strikethroughPosition`, `strikethrough-position`],
        [`strikethroughThickness`, `strikethrough-thickness`],
        [`strokeDasharray`, `stroke-dasharray`],
        [`strokeDashoffset`, `stroke-dashoffset`],
        [`strokeLinecap`, `stroke-linecap`],
        [`strokeLinejoin`, `stroke-linejoin`],
        [`strokeMiterlimit`, `stroke-miterlimit`],
        [`strokeOpacity`, `stroke-opacity`],
        [`strokeWidth`, `stroke-width`],
        [`textAnchor`, `text-anchor`],
        [`textDecoration`, `text-decoration`],
        [`textRendering`, `text-rendering`],
        [`transformOrigin`, `transform-origin`],
        [`underlinePosition`, `underline-position`],
        [`underlineThickness`, `underline-thickness`],
        [`unicodeBidi`, `unicode-bidi`],
        [`unicodeRange`, `unicode-range`],
        [`unitsPerEm`, `units-per-em`],
        [`vAlphabetic`, `v-alphabetic`],
        [`vHanging`, `v-hanging`],
        [`vIdeographic`, `v-ideographic`],
        [`vMathematical`, `v-mathematical`],
        [`vectorEffect`, `vector-effect`],
        [`vertAdvY`, `vert-adv-y`],
        [`vertOriginX`, `vert-origin-x`],
        [`vertOriginY`, `vert-origin-y`],
        [`wordSpacing`, `word-spacing`],
        [`writingMode`, `writing-mode`],
        [`xmlnsXlink`, `xmlns:xlink`],
        [`xHeight`, `x-height`],
      ]),
      ln =
        /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function O(e) {
      return ln.test(`` + e)
        ? `javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`
        : e;
    }
    function un() {}
    var dn = null;
    function fn(e) {
      return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
      );
    }
    var pn = null,
      mn = null;
    function hn(e) {
      var t = Dt(e);
      if (t && (e = t.stateNode)) {
        var n = e[_t] || null;
        a: switch (((e = t.stateNode), t.type)) {
          case `input`:
            if (
              (Xt(
                e,
                n.value,
                n.defaultValue,
                n.defaultValue,
                n.checked,
                n.defaultChecked,
                n.type,
                n.name,
              ),
              (t = n.name),
              n.type === `radio` && t != null)
            ) {
              for (n = e; n.parentNode;) n = n.parentNode;
              for (
                n = n.querySelectorAll(`input[name="` + Yt(`` + t) + `"][type="radio"]`), t = 0;
                t < n.length;
                t++
              ) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                  var a = r[_t] || null;
                  if (!a) throw Error(i(90));
                  Xt(
                    r,
                    a.value,
                    a.defaultValue,
                    a.defaultValue,
                    a.checked,
                    a.defaultChecked,
                    a.type,
                    a.name,
                  );
                }
              }
              for (t = 0; t < n.length; t++) ((r = n[t]), r.form === e.form && Kt(r));
            }
            break a;
          case `textarea`:
            en(e, n.value, n.defaultValue);
            break a;
          case `select`:
            ((t = n.value), t != null && $t(e, !!n.multiple, t, !1));
        }
      }
    }
    var gn = !1;
    function _n(e, t, n) {
      if (gn) return e(t, n);
      gn = !0;
      try {
        return e(t);
      } finally {
        if (
          ((gn = !1),
          (pn !== null || mn !== null) &&
            (xu(), pn && ((t = pn), (e = mn), (mn = pn = null), hn(t), e)))
        )
          for (t = 0; t < e.length; t++) hn(e[t]);
      }
    }
    function vn(e, t) {
      var n = e.stateNode;
      if (n === null) return null;
      var r = n[_t] || null;
      if (r === null) return null;
      n = r[t];
      a: switch (t) {
        case `onClick`:
        case `onClickCapture`:
        case `onDoubleClick`:
        case `onDoubleClickCapture`:
        case `onMouseDown`:
        case `onMouseDownCapture`:
        case `onMouseMove`:
        case `onMouseMoveCapture`:
        case `onMouseUp`:
        case `onMouseUpCapture`:
        case `onMouseEnter`:
          ((r = !r.disabled) ||
            ((e = e.type),
            (r = e !== `button` && e !== `input` && e !== `select` && e !== `textarea`)),
            (e = !r));
          break a;
        default:
          e = !1;
      }
      if (e) return null;
      if (n && typeof n != `function`) throw Error(i(231, t, typeof n));
      return n;
    }
    var yn = !(
        typeof window > `u` ||
        window.document === void 0 ||
        window.document.createElement === void 0
      ),
      bn = !1;
    if (yn)
      try {
        var xn = {};
        (Object.defineProperty(xn, "passive", {
          get: function () {
            bn = !0;
          },
        }),
          window.addEventListener(`test`, xn, xn),
          window.removeEventListener(`test`, xn, xn));
      } catch {
        bn = !1;
      }
    var Sn = null,
      Cn = null,
      wn = null;
    function Tn() {
      if (wn) return wn;
      var e,
        t = Cn,
        n = t.length,
        r,
        i = `value` in Sn ? Sn.value : Sn.textContent,
        a = i.length;
      for (e = 0; e < n && t[e] === i[e]; e++);
      var o = n - e;
      for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
      return (wn = i.slice(e, 1 < r ? 1 - r : void 0));
    }
    function En(e) {
      var t = e.keyCode;
      return (
        `charCode` in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
      );
    }
    function Dn() {
      return !0;
    }
    function On() {
      return !1;
    }
    function kn(e) {
      function t(t, n, r, i, a) {
        for (var o in ((this._reactName = t),
        (this._targetInst = r),
        (this.type = n),
        (this.nativeEvent = i),
        (this.target = a),
        (this.currentTarget = null),
        e))
          e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(i) : i[o]));
        return (
          (this.isDefaultPrevented = (
            i.defaultPrevented == null ? !1 === i.returnValue : i.defaultPrevented
          )
            ? Dn
            : On),
          (this.isPropagationStopped = On),
          this
        );
      }
      return (
        f(t.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e &&
              (e.preventDefault
                ? e.preventDefault()
                : typeof e.returnValue != `unknown` && (e.returnValue = !1),
              (this.isDefaultPrevented = Dn));
          },
          stopPropagation: function () {
            var e = this.nativeEvent;
            e &&
              (e.stopPropagation
                ? e.stopPropagation()
                : typeof e.cancelBubble != `unknown` && (e.cancelBubble = !0),
              (this.isPropagationStopped = Dn));
          },
          persist: function () {},
          isPersistent: Dn,
        }),
        t
      );
    }
    var An = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
          return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      jn = kn(An),
      Mn = f({}, An, { view: 0, detail: 0 }),
      Nn = kn(Mn),
      Pn,
      Fn,
      In,
      Ln = f({}, Mn, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Jn,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
          return e.relatedTarget === void 0
            ? e.fromElement === e.srcElement
              ? e.toElement
              : e.fromElement
            : e.relatedTarget;
        },
        movementX: function (e) {
          return `movementX` in e
            ? e.movementX
            : (e !== In &&
                (In && e.type === `mousemove`
                  ? ((Pn = e.screenX - In.screenX), (Fn = e.screenY - In.screenY))
                  : (Fn = Pn = 0),
                (In = e)),
              Pn);
        },
        movementY: function (e) {
          return `movementY` in e ? e.movementY : Fn;
        },
      }),
      Rn = kn(Ln),
      zn = kn(f({}, Ln, { dataTransfer: 0 })),
      Bn = kn(f({}, Mn, { relatedTarget: 0 })),
      Vn = kn(f({}, An, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
      Hn = kn(
        f({}, An, {
          clipboardData: function (e) {
            return `clipboardData` in e ? e.clipboardData : window.clipboardData;
          },
        }),
      ),
      Un = kn(f({}, An, { data: 0 })),
      Wn = {
        Esc: `Escape`,
        Spacebar: ` `,
        Left: `ArrowLeft`,
        Up: `ArrowUp`,
        Right: `ArrowRight`,
        Down: `ArrowDown`,
        Del: `Delete`,
        Win: `OS`,
        Menu: `ContextMenu`,
        Apps: `ContextMenu`,
        Scroll: `ScrollLock`,
        MozPrintableKey: `Unidentified`,
      },
      Gn = {
        8: `Backspace`,
        9: `Tab`,
        12: `Clear`,
        13: `Enter`,
        16: `Shift`,
        17: `Control`,
        18: `Alt`,
        19: `Pause`,
        20: `CapsLock`,
        27: `Escape`,
        32: ` `,
        33: `PageUp`,
        34: `PageDown`,
        35: `End`,
        36: `Home`,
        37: `ArrowLeft`,
        38: `ArrowUp`,
        39: `ArrowRight`,
        40: `ArrowDown`,
        45: `Insert`,
        46: `Delete`,
        112: `F1`,
        113: `F2`,
        114: `F3`,
        115: `F4`,
        116: `F5`,
        117: `F6`,
        118: `F7`,
        119: `F8`,
        120: `F9`,
        121: `F10`,
        122: `F11`,
        123: `F12`,
        144: `NumLock`,
        145: `ScrollLock`,
        224: `Meta`,
      },
      Kn = { Alt: `altKey`, Control: `ctrlKey`, Meta: `metaKey`, Shift: `shiftKey` };
    function qn(e) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : (e = Kn[e]) ? !!t[e] : !1;
    }
    function Jn() {
      return qn;
    }
    var Yn = kn(
        f({}, Mn, {
          key: function (e) {
            if (e.key) {
              var t = Wn[e.key] || e.key;
              if (t !== `Unidentified`) return t;
            }
            return e.type === `keypress`
              ? ((e = En(e)), e === 13 ? `Enter` : String.fromCharCode(e))
              : e.type === `keydown` || e.type === `keyup`
                ? Gn[e.keyCode] || `Unidentified`
                : ``;
          },
          code: 0,
          location: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          repeat: 0,
          locale: 0,
          getModifierState: Jn,
          charCode: function (e) {
            return e.type === `keypress` ? En(e) : 0;
          },
          keyCode: function (e) {
            return e.type === `keydown` || e.type === `keyup` ? e.keyCode : 0;
          },
          which: function (e) {
            return e.type === `keypress`
              ? En(e)
              : e.type === `keydown` || e.type === `keyup`
                ? e.keyCode
                : 0;
          },
        }),
      ),
      Xn = kn(
        f({}, Ln, {
          pointerId: 0,
          width: 0,
          height: 0,
          pressure: 0,
          tangentialPressure: 0,
          tiltX: 0,
          tiltY: 0,
          twist: 0,
          pointerType: 0,
          isPrimary: 0,
        }),
      ),
      Zn = kn(
        f({}, Mn, {
          touches: 0,
          targetTouches: 0,
          changedTouches: 0,
          altKey: 0,
          metaKey: 0,
          ctrlKey: 0,
          shiftKey: 0,
          getModifierState: Jn,
        }),
      ),
      Qn = kn(f({}, An, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
      $n = kn(
        f({}, Ln, {
          deltaX: function (e) {
            return `deltaX` in e ? e.deltaX : `wheelDeltaX` in e ? -e.wheelDeltaX : 0;
          },
          deltaY: function (e) {
            return `deltaY` in e
              ? e.deltaY
              : `wheelDeltaY` in e
                ? -e.wheelDeltaY
                : `wheelDelta` in e
                  ? -e.wheelDelta
                  : 0;
          },
          deltaZ: 0,
          deltaMode: 0,
        }),
      ),
      er = kn(f({}, An, { newState: 0, oldState: 0 })),
      tr = [9, 13, 27, 32],
      nr = yn && `CompositionEvent` in window,
      rr = null;
    yn && `documentMode` in document && (rr = document.documentMode);
    var ir = yn && `TextEvent` in window && !rr,
      ar = yn && (!nr || (rr && 8 < rr && 11 >= rr)),
      or = ` `,
      sr = !1;
    function cr(e, t) {
      switch (e) {
        case `keyup`:
          return tr.indexOf(t.keyCode) !== -1;
        case `keydown`:
          return t.keyCode !== 229;
        case `keypress`:
        case `mousedown`:
        case `focusout`:
          return !0;
        default:
          return !1;
      }
    }
    function lr(e) {
      return ((e = e.detail), typeof e == `object` && `data` in e ? e.data : null);
    }
    var ur = !1;
    function dr(e, t) {
      switch (e) {
        case `compositionend`:
          return lr(t);
        case `keypress`:
          return t.which === 32 ? ((sr = !0), or) : null;
        case `textInput`:
          return ((e = t.data), e === or && sr ? null : e);
        default:
          return null;
      }
    }
    function fr(e, t) {
      if (ur)
        return e === `compositionend` || (!nr && cr(e, t))
          ? ((e = Tn()), (wn = Cn = Sn = null), (ur = !1), e)
          : null;
      switch (e) {
        case `paste`:
          return null;
        case `keypress`:
          if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
            if (t.char && 1 < t.char.length) return t.char;
            if (t.which) return String.fromCharCode(t.which);
          }
          return null;
        case `compositionend`:
          return ar && t.locale !== `ko` ? null : t.data;
        default:
          return null;
      }
    }
    var pr = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0,
    };
    function mr(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === `input` ? !!pr[e.type] : t === `textarea`;
    }
    function hr(e, t, n, r) {
      (pn ? (mn ? mn.push(r) : (mn = [r])) : (pn = r),
        (t = Ed(t, `onChange`)),
        0 < t.length &&
          ((n = new jn(`onChange`, `change`, null, n, r)), e.push({ event: n, listeners: t })));
    }
    var gr = null,
      _r = null;
    function vr(e) {
      yd(e, 0);
    }
    function yr(e) {
      if (Kt(Ot(e))) return e;
    }
    function br(e, t) {
      if (e === `change`) return t;
    }
    var xr = !1;
    if (yn) {
      var Sr;
      if (yn) {
        var Cr = `oninput` in document;
        if (!Cr) {
          var wr = document.createElement(`div`);
          (wr.setAttribute(`oninput`, `return;`), (Cr = typeof wr.oninput == `function`));
        }
        Sr = Cr;
      } else Sr = !1;
      xr = Sr && (!document.documentMode || 9 < document.documentMode);
    }
    function Tr() {
      gr && (gr.detachEvent(`onpropertychange`, Er), (_r = gr = null));
    }
    function Er(e) {
      if (e.propertyName === `value` && yr(_r)) {
        var t = [];
        (hr(t, _r, e, fn(e)), _n(vr, t));
      }
    }
    function Dr(e, t, n) {
      e === `focusin`
        ? (Tr(), (gr = t), (_r = n), gr.attachEvent(`onpropertychange`, Er))
        : e === `focusout` && Tr();
    }
    function Or(e) {
      if (e === `selectionchange` || e === `keyup` || e === `keydown`) return yr(_r);
    }
    function kr(e, t) {
      if (e === `click`) return yr(t);
    }
    function Ar(e, t) {
      if (e === `input` || e === `change`) return yr(t);
    }
    function jr(e, t) {
      return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
    }
    var Mr = typeof Object.is == `function` ? Object.is : jr;
    function Nr(e, t) {
      if (Mr(e, t)) return !0;
      if (typeof e != `object` || !e || typeof t != `object` || !t) return !1;
      var n = Object.keys(e),
        r = Object.keys(t);
      if (n.length !== r.length) return !1;
      for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!Ae.call(t, i) || !Mr(e[i], t[i])) return !1;
      }
      return !0;
    }
    function Pr(e) {
      for (; e && e.firstChild;) e = e.firstChild;
      return e;
    }
    function Fr(e, t) {
      var n = Pr(e);
      e = 0;
      for (var r; n;) {
        if (n.nodeType === 3) {
          if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e };
          e = r;
        }
        a: {
          for (; n;) {
            if (n.nextSibling) {
              n = n.nextSibling;
              break a;
            }
            n = n.parentNode;
          }
          n = void 0;
        }
        n = Pr(n);
      }
    }
    function Ir(e, t) {
      return e && t
        ? e === t
          ? !0
          : e && e.nodeType === 3
            ? !1
            : t && t.nodeType === 3
              ? Ir(e, t.parentNode)
              : `contains` in e
                ? e.contains(t)
                : e.compareDocumentPosition
                  ? !!(e.compareDocumentPosition(t) & 16)
                  : !1
        : !1;
    }
    function Lr(e) {
      e =
        e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null
          ? e.ownerDocument.defaultView
          : window;
      for (var t = qt(e.document); t instanceof e.HTMLIFrameElement;) {
        try {
          var n = typeof t.contentWindow.location.href == `string`;
        } catch {
          n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = qt(e.document);
      }
      return t;
    }
    function Rr(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return (
        t &&
        ((t === `input` &&
          (e.type === `text` ||
            e.type === `search` ||
            e.type === `tel` ||
            e.type === `url` ||
            e.type === `password`)) ||
          t === `textarea` ||
          e.contentEditable === `true`)
      );
    }
    var zr = yn && `documentMode` in document && 11 >= document.documentMode,
      Br = null,
      Vr = null,
      Hr = null,
      k = !1;
    function Ur(e, t, n) {
      var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
      k ||
        Br == null ||
        Br !== qt(r) ||
        ((r = Br),
        `selectionStart` in r && Rr(r)
          ? (r = { start: r.selectionStart, end: r.selectionEnd })
          : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
            (r = {
              anchorNode: r.anchorNode,
              anchorOffset: r.anchorOffset,
              focusNode: r.focusNode,
              focusOffset: r.focusOffset,
            })),
        (Hr && Nr(Hr, r)) ||
          ((Hr = r),
          (r = Ed(Vr, `onSelect`)),
          0 < r.length &&
            ((t = new jn(`onSelect`, `select`, null, t, n)),
            e.push({ event: t, listeners: r }),
            (t.target = Br))));
    }
    function Wr(e, t) {
      var n = {};
      return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n[`Webkit` + e] = `webkit` + t),
        (n[`Moz` + e] = `moz` + t),
        n
      );
    }
    var Gr = {
        animationend: Wr(`Animation`, `AnimationEnd`),
        animationiteration: Wr(`Animation`, `AnimationIteration`),
        animationstart: Wr(`Animation`, `AnimationStart`),
        transitionrun: Wr(`Transition`, `TransitionRun`),
        transitionstart: Wr(`Transition`, `TransitionStart`),
        transitioncancel: Wr(`Transition`, `TransitionCancel`),
        transitionend: Wr(`Transition`, `TransitionEnd`),
      },
      Kr = {},
      qr = {};
    yn &&
      ((qr = document.createElement(`div`).style),
      `AnimationEvent` in window ||
        (delete Gr.animationend.animation,
        delete Gr.animationiteration.animation,
        delete Gr.animationstart.animation),
      `TransitionEvent` in window || delete Gr.transitionend.transition);
    function Jr(e) {
      if (Kr[e]) return Kr[e];
      if (!Gr[e]) return e;
      var t = Gr[e],
        n;
      for (n in t) if (t.hasOwnProperty(n) && n in qr) return (Kr[e] = t[n]);
      return e;
    }
    var Yr = Jr(`animationend`),
      Xr = Jr(`animationiteration`),
      Zr = Jr(`animationstart`),
      Qr = Jr(`transitionrun`),
      $r = Jr(`transitionstart`),
      ei = Jr(`transitioncancel`),
      ti = Jr(`transitionend`),
      ni = new Map(),
      ri =
        `abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(
          ` `,
        );
    ri.push(`scrollEnd`);
    function ii(e, t) {
      (ni.set(e, t), Nt(t, [e]));
    }
    var ai =
        typeof reportError == `function`
          ? reportError
          : function (e) {
              if (typeof window == `object` && typeof window.ErrorEvent == `function`) {
                var t = new window.ErrorEvent(`error`, {
                  bubbles: !0,
                  cancelable: !0,
                  message:
                    typeof e == `object` && e && typeof e.message == `string`
                      ? String(e.message)
                      : String(e),
                  error: e,
                });
                if (!window.dispatchEvent(t)) return;
              } else if (typeof process == `object` && typeof process.emit == `function`) {
                process.emit(`uncaughtException`, e);
                return;
              }
              console.error(e);
            },
      oi = [],
      si = 0,
      ci = 0;
    function li() {
      for (var e = si, t = (ci = si = 0); t < e;) {
        var n = oi[t];
        oi[t++] = null;
        var r = oi[t];
        oi[t++] = null;
        var i = oi[t];
        oi[t++] = null;
        var a = oi[t];
        if (((oi[t++] = null), r !== null && i !== null)) {
          var o = r.pending;
          (o === null ? (i.next = i) : ((i.next = o.next), (o.next = i)), (r.pending = i));
        }
        a !== 0 && pi(n, i, a);
      }
    }
    function ui(e, t, n, r) {
      ((oi[si++] = e),
        (oi[si++] = t),
        (oi[si++] = n),
        (oi[si++] = r),
        (ci |= r),
        (e.lanes |= r),
        (e = e.alternate),
        e !== null && (e.lanes |= r));
    }
    function di(e, t, n, r) {
      return (ui(e, t, n, r), mi(e));
    }
    function fi(e, t) {
      return (ui(e, null, null, t), mi(e));
    }
    function pi(e, t, n) {
      e.lanes |= n;
      var r = e.alternate;
      r !== null && (r.lanes |= n);
      for (var i = !1, a = e.return; a !== null;)
        ((a.childLanes |= n),
          (r = a.alternate),
          r !== null && (r.childLanes |= n),
          a.tag === 22 && ((e = a.stateNode), e === null || e._visibility & 1 || (i = !0)),
          (e = a),
          (a = a.return));
      return e.tag === 3
        ? ((a = e.stateNode),
          i &&
            t !== null &&
            ((i = 31 - qe(n)),
            (e = a.hiddenUpdates),
            (r = e[i]),
            r === null ? (e[i] = [t]) : r.push(t),
            (t.lane = n | 536870912)),
          a)
        : null;
    }
    function mi(e) {
      if (50 < fu) throw ((fu = 0), (pu = null), Error(i(185)));
      for (var t = e.return; t !== null;) ((e = t), (t = e.return));
      return e.tag === 3 ? e.stateNode : null;
    }
    var hi = {};
    function gi(e, t, n, r) {
      ((this.tag = e),
        (this.key = n),
        (this.sibling =
          this.child =
          this.return =
          this.stateNode =
          this.type =
          this.elementType =
            null),
        (this.index = 0),
        (this.refCleanup = this.ref = null),
        (this.pendingProps = t),
        (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null));
    }
    function _i(e, t, n, r) {
      return new gi(e, t, n, r);
    }
    function vi(e) {
      return ((e = e.prototype), !(!e || !e.isReactComponent));
    }
    function yi(e, t) {
      var n = e.alternate;
      return (
        n === null
          ? ((n = _i(e.tag, t, e.key, e.mode)),
            (n.elementType = e.elementType),
            (n.type = e.type),
            (n.stateNode = e.stateNode),
            (n.alternate = e),
            (e.alternate = n))
          : ((n.pendingProps = t),
            (n.type = e.type),
            (n.flags = 0),
            (n.subtreeFlags = 0),
            (n.deletions = null)),
        (n.flags = e.flags & 65011712),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        (n.refCleanup = e.refCleanup),
        n
      );
    }
    function bi(e, t) {
      e.flags &= 65011714;
      var n = e.alternate;
      return (
        n === null
          ? ((e.childLanes = 0),
            (e.lanes = t),
            (e.child = null),
            (e.subtreeFlags = 0),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.updateQueue = null),
            (e.dependencies = null),
            (e.stateNode = null))
          : ((e.childLanes = n.childLanes),
            (e.lanes = n.lanes),
            (e.child = n.child),
            (e.subtreeFlags = 0),
            (e.deletions = null),
            (e.memoizedProps = n.memoizedProps),
            (e.memoizedState = n.memoizedState),
            (e.updateQueue = n.updateQueue),
            (e.type = n.type),
            (t = n.dependencies),
            (e.dependencies =
              t === null ? null : { lanes: t.lanes, firstContext: t.firstContext })),
        e
      );
    }
    function xi(e, t, n, r, a, o) {
      var s = 0;
      if (((r = e), typeof e == `function`)) vi(e) && (s = 1);
      else if (typeof e == `string`)
        s = Uf(e, n, he.current) ? 26 : e === `html` || e === `head` || e === `body` ? 27 : 5;
      else
        a: switch (e) {
          case re:
            return ((e = _i(31, n, t, a)), (e.elementType = re), (e.lanes = o), e);
          case g:
            return Si(n.children, a, o, t);
          case _:
            ((s = 8), (a |= 24));
            break;
          case y:
            return ((e = _i(12, n, t, a | 2)), (e.elementType = y), (e.lanes = o), e);
          case C:
            return ((e = _i(13, n, t, a)), (e.elementType = C), (e.lanes = o), e);
          case ee:
            return ((e = _i(19, n, t, a)), (e.elementType = ee), (e.lanes = o), e);
          default:
            if (typeof e == `object` && e)
              switch (e.$$typeof) {
                case x:
                  s = 10;
                  break a;
                case b:
                  s = 9;
                  break a;
                case S:
                  s = 11;
                  break a;
                case te:
                  s = 14;
                  break a;
                case ne:
                  ((s = 16), (r = null));
                  break a;
              }
            ((s = 29), (n = Error(i(130, e === null ? `null` : typeof e, ``))), (r = null));
        }
      return ((t = _i(s, n, t, a)), (t.elementType = e), (t.type = r), (t.lanes = o), t);
    }
    function Si(e, t, n, r) {
      return ((e = _i(7, e, r, t)), (e.lanes = n), e);
    }
    function Ci(e, t, n) {
      return ((e = _i(6, e, null, t)), (e.lanes = n), e);
    }
    function wi(e) {
      var t = _i(18, null, null, 0);
      return ((t.stateNode = e), t);
    }
    function Ti(e, t, n) {
      return (
        (t = _i(4, e.children === null ? [] : e.children, e.key, t)),
        (t.lanes = n),
        (t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation,
        }),
        t
      );
    }
    var Ei = new WeakMap();
    function Di(e, t) {
      if (typeof e == `object` && e) {
        var n = Ei.get(e);
        return n === void 0 ? ((t = { value: e, source: t, stack: ke(t) }), Ei.set(e, t), t) : n;
      }
      return { value: e, source: t, stack: ke(t) };
    }
    var Oi = [],
      ki = 0,
      Ai = null,
      ji = 0,
      Mi = [],
      Ni = 0,
      Pi = null,
      Fi = 1,
      Ii = ``;
    function Li(e, t) {
      ((Oi[ki++] = ji), (Oi[ki++] = Ai), (Ai = e), (ji = t));
    }
    function Ri(e, t, n) {
      ((Mi[Ni++] = Fi), (Mi[Ni++] = Ii), (Mi[Ni++] = Pi), (Pi = e));
      var r = Fi;
      e = Ii;
      var i = 32 - qe(r) - 1;
      ((r &= ~(1 << i)), (n += 1));
      var a = 32 - qe(t) + i;
      if (30 < a) {
        var o = i - (i % 5);
        ((a = (r & ((1 << o) - 1)).toString(32)),
          (r >>= o),
          (i -= o),
          (Fi = (1 << (32 - qe(t) + i)) | (n << i) | r),
          (Ii = a + e));
      } else ((Fi = (1 << a) | (n << i) | r), (Ii = e));
    }
    function zi(e) {
      e.return !== null && (Li(e, 1), Ri(e, 1, 0));
    }
    function Bi(e) {
      for (; e === Ai;) ((Ai = Oi[--ki]), (Oi[ki] = null), (ji = Oi[--ki]), (Oi[ki] = null));
      for (; e === Pi;)
        ((Pi = Mi[--Ni]),
          (Mi[Ni] = null),
          (Ii = Mi[--Ni]),
          (Mi[Ni] = null),
          (Fi = Mi[--Ni]),
          (Mi[Ni] = null));
    }
    function Vi(e, t) {
      ((Mi[Ni++] = Fi), (Mi[Ni++] = Ii), (Mi[Ni++] = Pi), (Fi = t.id), (Ii = t.overflow), (Pi = e));
    }
    var A = null,
      j = null,
      M = !1,
      Hi = null,
      Ui = !1,
      Wi = Error(i(519));
    function Gi(e) {
      throw (
        Zi(
          Di(
            Error(
              i(
                418,
                1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? `text` : `HTML`,
                ``,
              ),
            ),
            e,
          ),
        ),
        Wi
      );
    }
    function Ki(e) {
      var t = e.stateNode,
        n = e.type,
        r = e.memoizedProps;
      switch (((t[gt] = e), (t[_t] = r), n)) {
        case `dialog`:
          (Q(`cancel`, t), Q(`close`, t));
          break;
        case `iframe`:
        case `object`:
        case `embed`:
          Q(`load`, t);
          break;
        case `video`:
        case `audio`:
          for (n = 0; n < _d.length; n++) Q(_d[n], t);
          break;
        case `source`:
          Q(`error`, t);
          break;
        case `img`:
        case `image`:
        case `link`:
          (Q(`error`, t), Q(`load`, t));
          break;
        case `details`:
          Q(`toggle`, t);
          break;
        case `input`:
          (Q(`invalid`, t),
            Zt(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0));
          break;
        case `select`:
          Q(`invalid`, t);
          break;
        case `textarea`:
          (Q(`invalid`, t), tn(t, r.value, r.defaultValue, r.children));
      }
      ((n = r.children),
        (typeof n != `string` && typeof n != `number` && typeof n != `bigint`) ||
        t.textContent === `` + n ||
        !0 === r.suppressHydrationWarning ||
        Md(t.textContent, n)
          ? (r.popover != null && (Q(`beforetoggle`, t), Q(`toggle`, t)),
            r.onScroll != null && Q(`scroll`, t),
            r.onScrollEnd != null && Q(`scrollend`, t),
            r.onClick != null && (t.onclick = un),
            (t = !0))
          : (t = !1),
        t || Gi(e, !0));
    }
    function qi(e) {
      for (A = e.return; A;)
        switch (A.tag) {
          case 5:
          case 31:
          case 13:
            Ui = !1;
            return;
          case 27:
          case 3:
            Ui = !0;
            return;
          default:
            A = A.return;
        }
    }
    function Ji(e) {
      if (e !== A) return !1;
      if (!M) return (qi(e), (M = !0), !1);
      var t = e.tag,
        n;
      if (
        ((n = t !== 3 && t !== 27) &&
          ((n = t === 5) &&
            ((n = e.type), (n = n === `form` || n === `button` || Ud(e.type, e.memoizedProps))),
          (n = !n)),
        n && j && Gi(e),
        qi(e),
        t === 13)
      ) {
        if (((e = e.memoizedState), (e = e === null ? null : e.dehydrated), !e))
          throw Error(i(317));
        j = uf(e);
      } else if (t === 31) {
        if (((e = e.memoizedState), (e = e === null ? null : e.dehydrated), !e))
          throw Error(i(317));
        j = uf(e);
      } else
        t === 27
          ? ((t = j), Zd(e.type) ? ((e = lf), (lf = null), (j = e)) : (j = t))
          : (j = A ? cf(e.stateNode.nextSibling) : null);
      return !0;
    }
    function Yi() {
      ((j = A = null), (M = !1));
    }
    function Xi() {
      var e = Hi;
      return (e !== null && (Ql === null ? (Ql = e) : Ql.push.apply(Ql, e), (Hi = null)), e);
    }
    function Zi(e) {
      Hi === null ? (Hi = [e]) : Hi.push(e);
    }
    var Qi = me(null),
      $i = null,
      ea = null;
    function ta(e, t, n) {
      (D(Qi, t._currentValue), (t._currentValue = n));
    }
    function na(e) {
      ((e._currentValue = Qi.current), E(Qi));
    }
    function ra(e, t, n) {
      for (; e !== null;) {
        var r = e.alternate;
        if (
          ((e.childLanes & t) === t
            ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t)
            : ((e.childLanes |= t), r !== null && (r.childLanes |= t)),
          e === n)
        )
          break;
        e = e.return;
      }
    }
    function N(e, t, n, r) {
      var a = e.child;
      for (a !== null && (a.return = e); a !== null;) {
        var o = a.dependencies;
        if (o !== null) {
          var s = a.child;
          o = o.firstContext;
          a: for (; o !== null;) {
            var c = o;
            o = a;
            for (var l = 0; l < t.length; l++)
              if (c.context === t[l]) {
                ((o.lanes |= n),
                  (c = o.alternate),
                  c !== null && (c.lanes |= n),
                  ra(o.return, n, e),
                  r || (s = null));
                break a;
              }
            o = c.next;
          }
        } else if (a.tag === 18) {
          if (((s = a.return), s === null)) throw Error(i(341));
          ((s.lanes |= n),
            (o = s.alternate),
            o !== null && (o.lanes |= n),
            ra(s, n, e),
            (s = null));
        } else s = a.child;
        if (s !== null) s.return = a;
        else
          for (s = a; s !== null;) {
            if (s === e) {
              s = null;
              break;
            }
            if (((a = s.sibling), a !== null)) {
              ((a.return = s.return), (s = a));
              break;
            }
            s = s.return;
          }
        a = s;
      }
    }
    function ia(e, t, n, r) {
      e = null;
      for (var a = t, o = !1; a !== null;) {
        if (!o) {
          if (a.flags & 524288) o = !0;
          else if (a.flags & 262144) break;
        }
        if (a.tag === 10) {
          var s = a.alternate;
          if (s === null) throw Error(i(387));
          if (((s = s.memoizedProps), s !== null)) {
            var c = a.type;
            Mr(a.pendingProps.value, s.value) || (e === null ? (e = [c]) : e.push(c));
          }
        } else if (a === ve.current) {
          if (((s = a.alternate), s === null)) throw Error(i(387));
          s.memoizedState.memoizedState !== a.memoizedState.memoizedState &&
            (e === null ? (e = [Qf]) : e.push(Qf));
        }
        a = a.return;
      }
      (e !== null && N(t, e, n, r), (t.flags |= 262144));
    }
    function aa(e) {
      for (e = e.firstContext; e !== null;) {
        if (!Mr(e.context._currentValue, e.memoizedValue)) return !0;
        e = e.next;
      }
      return !1;
    }
    function oa(e) {
      (($i = e), (ea = null), (e = e.dependencies), e !== null && (e.firstContext = null));
    }
    function sa(e) {
      return la($i, e);
    }
    function ca(e, t) {
      return ($i === null && oa(e), la(e, t));
    }
    function la(e, t) {
      var n = t._currentValue;
      if (((t = { context: t, memoizedValue: n, next: null }), ea === null)) {
        if (e === null) throw Error(i(308));
        ((ea = t), (e.dependencies = { lanes: 0, firstContext: t }), (e.flags |= 524288));
      } else ea = ea.next = t;
      return n;
    }
    var ua =
        typeof AbortController < `u`
          ? AbortController
          : function () {
              var e = [],
                t = (this.signal = {
                  aborted: !1,
                  addEventListener: function (t, n) {
                    e.push(n);
                  },
                });
              this.abort = function () {
                ((t.aborted = !0),
                  e.forEach(function (e) {
                    return e();
                  }));
              };
            },
      da = t.unstable_scheduleCallback,
      fa = t.unstable_NormalPriority,
      pa = {
        $$typeof: x,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0,
      };
    function ma() {
      return { controller: new ua(), data: new Map(), refCount: 0 };
    }
    function ha(e) {
      (e.refCount--,
        e.refCount === 0 &&
          da(fa, function () {
            e.controller.abort();
          }));
    }
    var ga = null,
      _a = 0,
      va = 0,
      ya = null;
    function ba(e, t) {
      if (ga === null) {
        var n = (ga = []);
        ((_a = 0),
          (va = dd()),
          (ya = {
            status: `pending`,
            value: void 0,
            then: function (e) {
              n.push(e);
            },
          }));
      }
      return (_a++, t.then(xa, xa), t);
    }
    function xa() {
      if (--_a === 0 && ga !== null) {
        ya !== null && (ya.status = `fulfilled`);
        var e = ga;
        ((ga = null), (va = 0), (ya = null));
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function Sa(e, t) {
      var n = [],
        r = {
          status: `pending`,
          value: null,
          reason: null,
          then: function (e) {
            n.push(e);
          },
        };
      return (
        e.then(
          function () {
            ((r.status = `fulfilled`), (r.value = t));
            for (var e = 0; e < n.length; e++) (0, n[e])(t);
          },
          function (e) {
            for (r.status = `rejected`, r.reason = e, e = 0; e < n.length; e++) (0, n[e])(void 0);
          },
        ),
        r
      );
    }
    var Ca = w.S;
    w.S = function (e, t) {
      ((tu = Fe()),
        typeof t == `object` && t && typeof t.then == `function` && ba(e, t),
        Ca !== null && Ca(e, t));
    };
    var wa = me(null);
    function Ta() {
      var e = wa.current;
      return e === null ? K.pooledCache : e;
    }
    function Ea(e, t) {
      t === null ? D(wa, wa.current) : D(wa, t.pool);
    }
    function Da() {
      var e = Ta();
      return e === null ? null : { parent: pa._currentValue, pool: e };
    }
    var Oa = Error(i(460)),
      ka = Error(i(474)),
      Aa = Error(i(542)),
      ja = { then: function () {} };
    function Ma(e) {
      return ((e = e.status), e === `fulfilled` || e === `rejected`);
    }
    function Na(e, t, n) {
      switch (
        ((n = e[n]), n === void 0 ? e.push(t) : n !== t && (t.then(un, un), (t = n)), t.status)
      ) {
        case `fulfilled`:
          return t.value;
        case `rejected`:
          throw ((e = t.reason), La(e), e);
        default:
          if (typeof t.status == `string`) t.then(un, un);
          else {
            if (((e = K), e !== null && 100 < e.shellSuspendCounter)) throw Error(i(482));
            ((e = t),
              (e.status = `pending`),
              e.then(
                function (e) {
                  if (t.status === `pending`) {
                    var n = t;
                    ((n.status = `fulfilled`), (n.value = e));
                  }
                },
                function (e) {
                  if (t.status === `pending`) {
                    var n = t;
                    ((n.status = `rejected`), (n.reason = e));
                  }
                },
              ));
          }
          switch (t.status) {
            case `fulfilled`:
              return t.value;
            case `rejected`:
              throw ((e = t.reason), La(e), e);
          }
          throw ((Fa = t), Oa);
      }
    }
    function Pa(e) {
      try {
        var t = e._init;
        return t(e._payload);
      } catch (e) {
        throw typeof e == `object` && e && typeof e.then == `function` ? ((Fa = e), Oa) : e;
      }
    }
    var Fa = null;
    function Ia() {
      if (Fa === null) throw Error(i(459));
      var e = Fa;
      return ((Fa = null), e);
    }
    function La(e) {
      if (e === Oa || e === Aa) throw Error(i(483));
    }
    var Ra = null,
      za = 0;
    function P(e) {
      var t = za;
      return ((za += 1), Ra === null && (Ra = []), Na(Ra, e, t));
    }
    function Ba(e, t) {
      ((t = t.props.ref), (e.ref = t === void 0 ? null : t));
    }
    function Va(e, t) {
      throw t.$$typeof === p
        ? Error(i(525))
        : ((e = Object.prototype.toString.call(t)),
          Error(
            i(
              31,
              e === `[object Object]` ? `object with keys {` + Object.keys(t).join(`, `) + `}` : e,
            ),
          ));
    }
    function Ha(e) {
      function t(t, n) {
        if (e) {
          var r = t.deletions;
          r === null ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
        }
      }
      function n(n, r) {
        if (!e) return null;
        for (; r !== null;) (t(n, r), (r = r.sibling));
        return null;
      }
      function r(e) {
        for (var t = new Map(); e !== null;)
          (e.key === null ? t.set(e.index, e) : t.set(e.key, e), (e = e.sibling));
        return t;
      }
      function a(e, t) {
        return ((e = yi(e, t)), (e.index = 0), (e.sibling = null), e);
      }
      function o(t, n, r) {
        return (
          (t.index = r),
          e
            ? ((r = t.alternate),
              r === null
                ? ((t.flags |= 67108866), n)
                : ((r = r.index), r < n ? ((t.flags |= 67108866), n) : r))
            : ((t.flags |= 1048576), n)
        );
      }
      function s(t) {
        return (e && t.alternate === null && (t.flags |= 67108866), t);
      }
      function c(e, t, n, r) {
        return t === null || t.tag !== 6
          ? ((t = Ci(n, e.mode, r)), (t.return = e), t)
          : ((t = a(t, n)), (t.return = e), t);
      }
      function l(e, t, n, r) {
        var i = n.type;
        return i === g
          ? d(e, t, n.props.children, r, n.key)
          : t !== null &&
              (t.elementType === i ||
                (typeof i == `object` && i && i.$$typeof === ne && Pa(i) === t.type))
            ? ((t = a(t, n.props)), Ba(t, n), (t.return = e), t)
            : ((t = xi(n.type, n.key, n.props, null, e.mode, r)), Ba(t, n), (t.return = e), t);
      }
      function u(e, t, n, r) {
        return t === null ||
          t.tag !== 4 ||
          t.stateNode.containerInfo !== n.containerInfo ||
          t.stateNode.implementation !== n.implementation
          ? ((t = Ti(n, e.mode, r)), (t.return = e), t)
          : ((t = a(t, n.children || [])), (t.return = e), t);
      }
      function d(e, t, n, r, i) {
        return t === null || t.tag !== 7
          ? ((t = Si(n, e.mode, r, i)), (t.return = e), t)
          : ((t = a(t, n)), (t.return = e), t);
      }
      function f(e, t, n) {
        if ((typeof t == `string` && t !== ``) || typeof t == `number` || typeof t == `bigint`)
          return ((t = Ci(`` + t, e.mode, n)), (t.return = e), t);
        if (typeof t == `object` && t) {
          switch (t.$$typeof) {
            case m:
              return (
                (n = xi(t.type, t.key, t.props, null, e.mode, n)),
                Ba(n, t),
                (n.return = e),
                n
              );
            case h:
              return ((t = Ti(t, e.mode, n)), (t.return = e), t);
            case ne:
              return ((t = Pa(t)), f(e, t, n));
          }
          if (ue(t) || oe(t)) return ((t = Si(t, e.mode, n, null)), (t.return = e), t);
          if (typeof t.then == `function`) return f(e, P(t), n);
          if (t.$$typeof === x) return f(e, ca(e, t), n);
          Va(e, t);
        }
        return null;
      }
      function p(e, t, n, r) {
        var i = t === null ? null : t.key;
        if ((typeof n == `string` && n !== ``) || typeof n == `number` || typeof n == `bigint`)
          return i === null ? c(e, t, `` + n, r) : null;
        if (typeof n == `object` && n) {
          switch (n.$$typeof) {
            case m:
              return n.key === i ? l(e, t, n, r) : null;
            case h:
              return n.key === i ? u(e, t, n, r) : null;
            case ne:
              return ((n = Pa(n)), p(e, t, n, r));
          }
          if (ue(n) || oe(n)) return i === null ? d(e, t, n, r, null) : null;
          if (typeof n.then == `function`) return p(e, t, P(n), r);
          if (n.$$typeof === x) return p(e, t, ca(e, n), r);
          Va(e, n);
        }
        return null;
      }
      function _(e, t, n, r, i) {
        if ((typeof r == `string` && r !== ``) || typeof r == `number` || typeof r == `bigint`)
          return ((e = e.get(n) || null), c(t, e, `` + r, i));
        if (typeof r == `object` && r) {
          switch (r.$$typeof) {
            case m:
              return ((e = e.get(r.key === null ? n : r.key) || null), l(t, e, r, i));
            case h:
              return ((e = e.get(r.key === null ? n : r.key) || null), u(t, e, r, i));
            case ne:
              return ((r = Pa(r)), _(e, t, n, r, i));
          }
          if (ue(r) || oe(r)) return ((e = e.get(n) || null), d(t, e, r, i, null));
          if (typeof r.then == `function`) return _(e, t, n, P(r), i);
          if (r.$$typeof === x) return _(e, t, n, ca(t, r), i);
          Va(t, r);
        }
        return null;
      }
      function v(i, a, s, c) {
        for (
          var l = null, u = null, d = a, m = (a = 0), h = null;
          d !== null && m < s.length;
          m++
        ) {
          d.index > m ? ((h = d), (d = null)) : (h = d.sibling);
          var g = p(i, d, s[m], c);
          if (g === null) {
            d === null && (d = h);
            break;
          }
          (e && d && g.alternate === null && t(i, d),
            (a = o(g, a, m)),
            u === null ? (l = g) : (u.sibling = g),
            (u = g),
            (d = h));
        }
        if (m === s.length) return (n(i, d), M && Li(i, m), l);
        if (d === null) {
          for (; m < s.length; m++)
            ((d = f(i, s[m], c)),
              d !== null && ((a = o(d, a, m)), u === null ? (l = d) : (u.sibling = d), (u = d)));
          return (M && Li(i, m), l);
        }
        for (d = r(d); m < s.length; m++)
          ((h = _(d, i, m, s[m], c)),
            h !== null &&
              (e && h.alternate !== null && d.delete(h.key === null ? m : h.key),
              (a = o(h, a, m)),
              u === null ? (l = h) : (u.sibling = h),
              (u = h)));
        return (
          e &&
            d.forEach(function (e) {
              return t(i, e);
            }),
          M && Li(i, m),
          l
        );
      }
      function y(a, s, c, l) {
        if (c == null) throw Error(i(151));
        for (
          var u = null, d = null, m = s, h = (s = 0), g = null, v = c.next();
          m !== null && !v.done;
          h++, v = c.next()
        ) {
          m.index > h ? ((g = m), (m = null)) : (g = m.sibling);
          var y = p(a, m, v.value, l);
          if (y === null) {
            m === null && (m = g);
            break;
          }
          (e && m && y.alternate === null && t(a, m),
            (s = o(y, s, h)),
            d === null ? (u = y) : (d.sibling = y),
            (d = y),
            (m = g));
        }
        if (v.done) return (n(a, m), M && Li(a, h), u);
        if (m === null) {
          for (; !v.done; h++, v = c.next())
            ((v = f(a, v.value, l)),
              v !== null && ((s = o(v, s, h)), d === null ? (u = v) : (d.sibling = v), (d = v)));
          return (M && Li(a, h), u);
        }
        for (m = r(m); !v.done; h++, v = c.next())
          ((v = _(m, a, h, v.value, l)),
            v !== null &&
              (e && v.alternate !== null && m.delete(v.key === null ? h : v.key),
              (s = o(v, s, h)),
              d === null ? (u = v) : (d.sibling = v),
              (d = v)));
        return (
          e &&
            m.forEach(function (e) {
              return t(a, e);
            }),
          M && Li(a, h),
          u
        );
      }
      function b(e, r, o, c) {
        if (
          (typeof o == `object` && o && o.type === g && o.key === null && (o = o.props.children),
          typeof o == `object` && o)
        ) {
          switch (o.$$typeof) {
            case m:
              a: {
                for (var l = o.key; r !== null;) {
                  if (r.key === l) {
                    if (((l = o.type), l === g)) {
                      if (r.tag === 7) {
                        (n(e, r.sibling), (c = a(r, o.props.children)), (c.return = e), (e = c));
                        break a;
                      }
                    } else if (
                      r.elementType === l ||
                      (typeof l == `object` && l && l.$$typeof === ne && Pa(l) === r.type)
                    ) {
                      (n(e, r.sibling), (c = a(r, o.props)), Ba(c, o), (c.return = e), (e = c));
                      break a;
                    }
                    n(e, r);
                    break;
                  }
                  (t(e, r), (r = r.sibling));
                }
                o.type === g
                  ? ((c = Si(o.props.children, e.mode, c, o.key)), (c.return = e), (e = c))
                  : ((c = xi(o.type, o.key, o.props, null, e.mode, c)),
                    Ba(c, o),
                    (c.return = e),
                    (e = c));
              }
              return s(e);
            case h:
              a: {
                for (l = o.key; r !== null;) {
                  if (r.key === l)
                    if (
                      r.tag === 4 &&
                      r.stateNode.containerInfo === o.containerInfo &&
                      r.stateNode.implementation === o.implementation
                    ) {
                      (n(e, r.sibling), (c = a(r, o.children || [])), (c.return = e), (e = c));
                      break a;
                    } else {
                      n(e, r);
                      break;
                    }
                  (t(e, r), (r = r.sibling));
                }
                ((c = Ti(o, e.mode, c)), (c.return = e), (e = c));
              }
              return s(e);
            case ne:
              return ((o = Pa(o)), b(e, r, o, c));
          }
          if (ue(o)) return v(e, r, o, c);
          if (oe(o)) {
            if (((l = oe(o)), typeof l != `function`)) throw Error(i(150));
            return ((o = l.call(o)), y(e, r, o, c));
          }
          if (typeof o.then == `function`) return b(e, r, P(o), c);
          if (o.$$typeof === x) return b(e, r, ca(e, o), c);
          Va(e, o);
        }
        return (typeof o == `string` && o !== ``) || typeof o == `number` || typeof o == `bigint`
          ? ((o = `` + o),
            r !== null && r.tag === 6
              ? (n(e, r.sibling), (c = a(r, o)), (c.return = e), (e = c))
              : (n(e, r), (c = Ci(o, e.mode, c)), (c.return = e), (e = c)),
            s(e))
          : n(e, r);
      }
      return function (e, t, n, r) {
        try {
          za = 0;
          var i = b(e, t, n, r);
          return ((Ra = null), i);
        } catch (t) {
          if (t === Oa || t === Aa) throw t;
          var a = _i(29, t, null, e.mode);
          return ((a.lanes = r), (a.return = e), a);
        }
      };
    }
    var Ua = Ha(!0),
      Wa = Ha(!1),
      Ga = !1;
    function Ka(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null,
      };
    }
    function qa(e, t) {
      ((e = e.updateQueue),
        t.updateQueue === e &&
          (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            callbacks: null,
          }));
    }
    function Ja(e) {
      return { lane: e, tag: 0, payload: null, callback: null, next: null };
    }
    function Ya(e, t, n) {
      var r = e.updateQueue;
      if (r === null) return null;
      if (((r = r.shared), G & 2)) {
        var i = r.pending;
        return (
          i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
          (r.pending = t),
          (t = mi(e)),
          pi(e, null, n),
          t
        );
      }
      return (ui(e, r, t, n), mi(e));
    }
    function Xa(e, t, n) {
      if (((t = t.updateQueue), t !== null && ((t = t.shared), n & 4194048))) {
        var r = t.lanes;
        ((r &= e.pendingLanes), (n |= r), (t.lanes = n), lt(e, n));
      }
    }
    function Za(e, t) {
      var n = e.updateQueue,
        r = e.alternate;
      if (r !== null && ((r = r.updateQueue), n === r)) {
        var i = null,
          a = null;
        if (((n = n.firstBaseUpdate), n !== null)) {
          do {
            var o = { lane: n.lane, tag: n.tag, payload: n.payload, callback: null, next: null };
            (a === null ? (i = a = o) : (a = a.next = o), (n = n.next));
          } while (n !== null);
          a === null ? (i = a = t) : (a = a.next = t);
        } else i = a = t;
        ((n = {
          baseState: r.baseState,
          firstBaseUpdate: i,
          lastBaseUpdate: a,
          shared: r.shared,
          callbacks: r.callbacks,
        }),
          (e.updateQueue = n));
        return;
      }
      ((e = n.lastBaseUpdate),
        e === null ? (n.firstBaseUpdate = t) : (e.next = t),
        (n.lastBaseUpdate = t));
    }
    var Qa = !1;
    function $a() {
      if (Qa) {
        var e = ya;
        if (e !== null) throw e;
      }
    }
    function eo(e, t, n, r) {
      Qa = !1;
      var i = e.updateQueue;
      Ga = !1;
      var a = i.firstBaseUpdate,
        o = i.lastBaseUpdate,
        s = i.shared.pending;
      if (s !== null) {
        i.shared.pending = null;
        var c = s,
          l = c.next;
        ((c.next = null), o === null ? (a = l) : (o.next = l), (o = c));
        var u = e.alternate;
        u !== null &&
          ((u = u.updateQueue),
          (s = u.lastBaseUpdate),
          s !== o && (s === null ? (u.firstBaseUpdate = l) : (s.next = l), (u.lastBaseUpdate = c)));
      }
      if (a !== null) {
        var d = i.baseState;
        ((o = 0), (u = l = c = null), (s = a));
        do {
          var p = s.lane & -536870913,
            m = p !== s.lane;
          if (m ? (J & p) === p : (r & p) === p) {
            (p !== 0 && p === va && (Qa = !0),
              u !== null &&
                (u = u.next =
                  { lane: 0, tag: s.tag, payload: s.payload, callback: null, next: null }));
            a: {
              var h = e,
                g = s;
              p = t;
              var _ = n;
              switch (g.tag) {
                case 1:
                  if (((h = g.payload), typeof h == `function`)) {
                    d = h.call(_, d, p);
                    break a;
                  }
                  d = h;
                  break a;
                case 3:
                  h.flags = (h.flags & -65537) | 128;
                case 0:
                  if (
                    ((h = g.payload), (p = typeof h == `function` ? h.call(_, d, p) : h), p == null)
                  )
                    break a;
                  d = f({}, d, p);
                  break a;
                case 2:
                  Ga = !0;
              }
            }
            ((p = s.callback),
              p !== null &&
                ((e.flags |= 64),
                m && (e.flags |= 8192),
                (m = i.callbacks),
                m === null ? (i.callbacks = [p]) : m.push(p)));
          } else
            ((m = { lane: p, tag: s.tag, payload: s.payload, callback: s.callback, next: null }),
              u === null ? ((l = u = m), (c = d)) : (u = u.next = m),
              (o |= p));
          if (((s = s.next), s === null)) {
            if (((s = i.shared.pending), s === null)) break;
            ((m = s),
              (s = m.next),
              (m.next = null),
              (i.lastBaseUpdate = m),
              (i.shared.pending = null));
          }
        } while (1);
        (u === null && (c = d),
          (i.baseState = c),
          (i.firstBaseUpdate = l),
          (i.lastBaseUpdate = u),
          a === null && (i.shared.lanes = 0),
          (Kl |= o),
          (e.lanes = o),
          (e.memoizedState = d));
      }
    }
    function to(e, t) {
      if (typeof e != `function`) throw Error(i(191, e));
      e.call(t);
    }
    function no(e, t) {
      var n = e.callbacks;
      if (n !== null) for (e.callbacks = null, e = 0; e < n.length; e++) to(n[e], t);
    }
    var ro = me(null),
      io = me(0);
    function ao(e, t) {
      ((e = Wl), D(io, e), D(ro, t), (Wl = e | t.baseLanes));
    }
    function oo() {
      (D(io, Wl), D(ro, ro.current));
    }
    function so() {
      ((Wl = io.current), E(ro), E(io));
    }
    var co = me(null),
      lo = null;
    function uo(e) {
      var t = e.alternate;
      (D(F, F.current & 1),
        D(co, e),
        lo === null && (t === null || ro.current !== null || t.memoizedState !== null) && (lo = e));
    }
    function fo(e) {
      (D(F, F.current), D(co, e), lo === null && (lo = e));
    }
    function po(e) {
      e.tag === 22 ? (D(F, F.current), D(co, e), lo === null && (lo = e)) : mo(e);
    }
    function mo() {
      (D(F, F.current), D(co, co.current));
    }
    function ho(e) {
      (E(co), lo === e && (lo = null), E(F));
    }
    var F = me(0);
    function go(e) {
      for (var t = e; t !== null;) {
        if (t.tag === 13) {
          var n = t.memoizedState;
          if (n !== null && ((n = n.dehydrated), n === null || af(n) || of(n))) return t;
        } else if (
          t.tag === 19 &&
          (t.memoizedProps.revealOrder === `forwards` ||
            t.memoizedProps.revealOrder === `backwards` ||
            t.memoizedProps.revealOrder === `unstable_legacy-backwards` ||
            t.memoizedProps.revealOrder === `together`)
        ) {
          if (t.flags & 128) return t;
        } else if (t.child !== null) {
          ((t.child.return = t), (t = t.child));
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null;) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
      return null;
    }
    var _o = 0,
      I = null,
      L = null,
      vo = null,
      yo = !1,
      bo = !1,
      xo = !1,
      So = 0,
      Co = 0,
      wo = null,
      To = 0;
    function R() {
      throw Error(i(321));
    }
    function Eo(e, t) {
      if (t === null) return !1;
      for (var n = 0; n < t.length && n < e.length; n++) if (!Mr(e[n], t[n])) return !1;
      return !0;
    }
    function Do(e, t, n, r, i, a) {
      return (
        (_o = a),
        (I = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (w.H = e === null || e.memoizedState === null ? Us : Ws),
        (xo = !1),
        (a = n(r, i)),
        (xo = !1),
        bo && (a = ko(t, n, r, i)),
        Oo(e),
        a
      );
    }
    function Oo(e) {
      w.H = Hs;
      var t = L !== null && L.next !== null;
      if (((_o = 0), (vo = L = I = null), (yo = !1), (Co = 0), (wo = null), t)) throw Error(i(300));
      e === null || B || ((e = e.dependencies), e !== null && aa(e) && (B = !0));
    }
    function ko(e, t, n, r) {
      I = e;
      var a = 0;
      do {
        if ((bo && (wo = null), (Co = 0), (bo = !1), 25 <= a)) throw Error(i(301));
        if (((a += 1), (vo = L = null), e.updateQueue != null)) {
          var o = e.updateQueue;
          ((o.lastEffect = null),
            (o.events = null),
            (o.stores = null),
            o.memoCache != null && (o.memoCache.index = 0));
        }
        ((w.H = Gs), (o = t(n, r)));
      } while (bo);
      return o;
    }
    function Ao() {
      var e = w.H,
        t = e.useState()[0];
      return (
        (t = typeof t.then == `function` ? Io(t) : t),
        (e = e.useState()[0]),
        (L === null ? null : L.memoizedState) !== e && (I.flags |= 1024),
        t
      );
    }
    function jo() {
      var e = So !== 0;
      return ((So = 0), e);
    }
    function Mo(e, t, n) {
      ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n));
    }
    function No(e) {
      if (yo) {
        for (e = e.memoizedState; e !== null;) {
          var t = e.queue;
          (t !== null && (t.pending = null), (e = e.next));
        }
        yo = !1;
      }
      ((_o = 0), (vo = L = I = null), (bo = !1), (Co = So = 0), (wo = null));
    }
    function Po() {
      var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
      return (vo === null ? (I.memoizedState = vo = e) : (vo = vo.next = e), vo);
    }
    function z() {
      if (L === null) {
        var e = I.alternate;
        e = e === null ? null : e.memoizedState;
      } else e = L.next;
      var t = vo === null ? I.memoizedState : vo.next;
      if (t !== null) ((vo = t), (L = e));
      else {
        if (e === null) throw I.alternate === null ? Error(i(467)) : Error(i(310));
        ((L = e),
          (e = {
            memoizedState: L.memoizedState,
            baseState: L.baseState,
            baseQueue: L.baseQueue,
            queue: L.queue,
            next: null,
          }),
          vo === null ? (I.memoizedState = vo = e) : (vo = vo.next = e));
      }
      return vo;
    }
    function Fo() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function Io(e) {
      var t = Co;
      return (
        (Co += 1),
        wo === null && (wo = []),
        (e = Na(wo, e, t)),
        (t = I),
        (vo === null ? t.memoizedState : vo.next) === null &&
          ((t = t.alternate), (w.H = t === null || t.memoizedState === null ? Us : Ws)),
        e
      );
    }
    function Lo(e) {
      if (typeof e == `object` && e) {
        if (typeof e.then == `function`) return Io(e);
        if (e.$$typeof === x) return sa(e);
      }
      throw Error(i(438, String(e)));
    }
    function Ro(e) {
      var t = null,
        n = I.updateQueue;
      if ((n !== null && (t = n.memoCache), t == null)) {
        var r = I.alternate;
        r !== null &&
          ((r = r.updateQueue),
          r !== null &&
            ((r = r.memoCache),
            r != null &&
              (t = {
                data: r.data.map(function (e) {
                  return e.slice();
                }),
                index: 0,
              })));
      }
      if (
        ((t ??= { data: [], index: 0 }),
        n === null && ((n = Fo()), (I.updateQueue = n)),
        (n.memoCache = t),
        (n = t.data[t.index]),
        n === void 0)
      )
        for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = ie;
      return (t.index++, n);
    }
    function zo(e, t) {
      return typeof t == `function` ? t(e) : t;
    }
    function Bo(e) {
      return Vo(z(), L, e);
    }
    function Vo(e, t, n) {
      var r = e.queue;
      if (r === null) throw Error(i(311));
      r.lastRenderedReducer = n;
      var a = e.baseQueue,
        o = r.pending;
      if (o !== null) {
        if (a !== null) {
          var s = a.next;
          ((a.next = o.next), (o.next = s));
        }
        ((t.baseQueue = a = o), (r.pending = null));
      }
      if (((o = e.baseState), a === null)) e.memoizedState = o;
      else {
        t = a.next;
        var c = (s = null),
          l = null,
          u = t,
          d = !1;
        do {
          var f = u.lane & -536870913;
          if (f === u.lane ? (_o & f) === f : (J & f) === f) {
            var p = u.revertLane;
            if (p === 0)
              (l !== null &&
                (l = l.next =
                  {
                    lane: 0,
                    revertLane: 0,
                    gesture: null,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null,
                  }),
                f === va && (d = !0));
            else if ((_o & p) === p) {
              ((u = u.next), p === va && (d = !0));
              continue;
            } else
              ((f = {
                lane: 0,
                revertLane: u.revertLane,
                gesture: null,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null,
              }),
                l === null ? ((c = l = f), (s = o)) : (l = l.next = f),
                (I.lanes |= p),
                (Kl |= p));
            ((f = u.action), xo && n(o, f), (o = u.hasEagerState ? u.eagerState : n(o, f)));
          } else
            ((p = {
              lane: f,
              revertLane: u.revertLane,
              gesture: u.gesture,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
              l === null ? ((c = l = p), (s = o)) : (l = l.next = p),
              (I.lanes |= f),
              (Kl |= f));
          u = u.next;
        } while (u !== null && u !== t);
        if (
          (l === null ? (s = o) : (l.next = c),
          !Mr(o, e.memoizedState) && ((B = !0), d && ((n = ya), n !== null)))
        )
          throw n;
        ((e.memoizedState = o), (e.baseState = s), (e.baseQueue = l), (r.lastRenderedState = o));
      }
      return (a === null && (r.lanes = 0), [e.memoizedState, r.dispatch]);
    }
    function Ho(e) {
      var t = z(),
        n = t.queue;
      if (n === null) throw Error(i(311));
      n.lastRenderedReducer = e;
      var r = n.dispatch,
        a = n.pending,
        o = t.memoizedState;
      if (a !== null) {
        n.pending = null;
        var s = (a = a.next);
        do ((o = e(o, s.action)), (s = s.next));
        while (s !== a);
        (Mr(o, t.memoizedState) || (B = !0),
          (t.memoizedState = o),
          t.baseQueue === null && (t.baseState = o),
          (n.lastRenderedState = o));
      }
      return [o, r];
    }
    function Uo(e, t, n) {
      var r = I,
        a = z(),
        o = M;
      if (o) {
        if (n === void 0) throw Error(i(407));
        n = n();
      } else n = t();
      var s = !Mr((L || a).memoizedState, n);
      if (
        (s && ((a.memoizedState = n), (B = !0)),
        (a = a.queue),
        ms(Ko.bind(null, r, a, e), [e]),
        a.getSnapshot !== t || s || (vo !== null && vo.memoizedState.tag & 1))
      ) {
        if (
          ((r.flags |= 2048),
          ls(9, { destroy: void 0 }, Go.bind(null, r, a, n, t), null),
          K === null)
        )
          throw Error(i(349));
        o || _o & 127 || Wo(r, t, n);
      }
      return n;
    }
    function Wo(e, t, n) {
      ((e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        (t = I.updateQueue),
        t === null
          ? ((t = Fo()), (I.updateQueue = t), (t.stores = [e]))
          : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
    }
    function Go(e, t, n, r) {
      ((t.value = n), (t.getSnapshot = r), qo(t) && Jo(e));
    }
    function Ko(e, t, n) {
      return n(function () {
        qo(t) && Jo(e);
      });
    }
    function qo(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var n = t();
        return !Mr(e, n);
      } catch {
        return !0;
      }
    }
    function Jo(e) {
      var t = fi(e, 2);
      t !== null && gu(t, e, 2);
    }
    function Yo(e) {
      var t = Po();
      if (typeof e == `function`) {
        var n = e;
        if (((e = n()), xo)) {
          Ke(!0);
          try {
            n();
          } finally {
            Ke(!1);
          }
        }
      }
      return (
        (t.memoizedState = t.baseState = e),
        (t.queue = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: zo,
          lastRenderedState: e,
        }),
        t
      );
    }
    function Xo(e, t, n, r) {
      return ((e.baseState = n), Vo(e, L, typeof r == `function` ? r : zo));
    }
    function Zo(e, t, n, r, a) {
      if (zs(e)) throw Error(i(485));
      if (((e = t.action), e !== null)) {
        var o = {
          payload: a,
          action: e,
          next: null,
          isTransition: !0,
          status: `pending`,
          value: null,
          reason: null,
          listeners: [],
          then: function (e) {
            o.listeners.push(e);
          },
        };
        (w.T === null ? (o.isTransition = !1) : n(!0),
          r(o),
          (n = t.pending),
          n === null
            ? ((o.next = t.pending = o), Qo(t, o))
            : ((o.next = n.next), (t.pending = n.next = o)));
      }
    }
    function Qo(e, t) {
      var n = t.action,
        r = t.payload,
        i = e.state;
      if (t.isTransition) {
        var a = w.T,
          o = {};
        w.T = o;
        try {
          var s = n(i, r),
            c = w.S;
          (c !== null && c(o, s), $o(e, t, s));
        } catch (n) {
          ts(e, t, n);
        } finally {
          (a !== null && o.types !== null && (a.types = o.types), (w.T = a));
        }
      } else
        try {
          ((a = n(i, r)), $o(e, t, a));
        } catch (n) {
          ts(e, t, n);
        }
    }
    function $o(e, t, n) {
      typeof n == `object` && n && typeof n.then == `function`
        ? n.then(
            function (n) {
              es(e, t, n);
            },
            function (n) {
              return ts(e, t, n);
            },
          )
        : es(e, t, n);
    }
    function es(e, t, n) {
      ((t.status = `fulfilled`),
        (t.value = n),
        ns(t),
        (e.state = n),
        (t = e.pending),
        t !== null &&
          ((n = t.next), n === t ? (e.pending = null) : ((n = n.next), (t.next = n), Qo(e, n))));
    }
    function ts(e, t, n) {
      var r = e.pending;
      if (((e.pending = null), r !== null)) {
        r = r.next;
        do ((t.status = `rejected`), (t.reason = n), ns(t), (t = t.next));
        while (t !== r);
      }
      e.action = null;
    }
    function ns(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function rs(e, t) {
      return t;
    }
    function is(e, t) {
      if (M) {
        var n = K.formState;
        if (n !== null) {
          a: {
            var r = I;
            if (M) {
              if (j) {
                b: {
                  for (var i = j, a = Ui; i.nodeType !== 8;) {
                    if (!a) {
                      i = null;
                      break b;
                    }
                    if (((i = cf(i.nextSibling)), i === null)) {
                      i = null;
                      break b;
                    }
                  }
                  ((a = i.data), (i = a === `F!` || a === `F` ? i : null));
                }
                if (i) {
                  ((j = cf(i.nextSibling)), (r = i.data === `F!`));
                  break a;
                }
              }
              Gi(r);
            }
            r = !1;
          }
          r && (t = n[0]);
        }
      }
      return (
        (n = Po()),
        (n.memoizedState = n.baseState = t),
        (r = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: rs,
          lastRenderedState: t,
        }),
        (n.queue = r),
        (n = Is.bind(null, I, r)),
        (r.dispatch = n),
        (r = Yo(!1)),
        (a = Rs.bind(null, I, !1, r.queue)),
        (r = Po()),
        (i = { state: t, dispatch: null, action: e, pending: null }),
        (r.queue = i),
        (n = Zo.bind(null, I, i, a, n)),
        (i.dispatch = n),
        (r.memoizedState = e),
        [t, n, !1]
      );
    }
    function as(e) {
      return os(z(), L, e);
    }
    function os(e, t, n) {
      if (
        ((t = Vo(e, t, rs)[0]),
        (e = Bo(zo)[0]),
        typeof t == `object` && t && typeof t.then == `function`)
      )
        try {
          var r = Io(t);
        } catch (e) {
          throw e === Oa ? Aa : e;
        }
      else r = t;
      t = z();
      var i = t.queue,
        a = i.dispatch;
      return (
        n !== t.memoizedState &&
          ((I.flags |= 2048), ls(9, { destroy: void 0 }, ss.bind(null, i, n), null)),
        [r, a, e]
      );
    }
    function ss(e, t) {
      e.action = t;
    }
    function cs(e) {
      var t = z(),
        n = L;
      if (n !== null) return os(t, n, e);
      (z(), (t = t.memoizedState), (n = z()));
      var r = n.queue.dispatch;
      return ((n.memoizedState = e), [t, r, !1]);
    }
    function ls(e, t, n, r) {
      return (
        (e = { tag: e, create: n, deps: r, inst: t, next: null }),
        (t = I.updateQueue),
        t === null && ((t = Fo()), (I.updateQueue = t)),
        (n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
        e
      );
    }
    function us() {
      return z().memoizedState;
    }
    function ds(e, t, n, r) {
      var i = Po();
      ((I.flags |= e),
        (i.memoizedState = ls(1 | t, { destroy: void 0 }, n, r === void 0 ? null : r)));
    }
    function fs(e, t, n, r) {
      var i = z();
      r = r === void 0 ? null : r;
      var a = i.memoizedState.inst;
      L !== null && r !== null && Eo(r, L.memoizedState.deps)
        ? (i.memoizedState = ls(t, a, n, r))
        : ((I.flags |= e), (i.memoizedState = ls(1 | t, a, n, r)));
    }
    function ps(e, t) {
      ds(8390656, 8, e, t);
    }
    function ms(e, t) {
      fs(2048, 8, e, t);
    }
    function hs(e) {
      I.flags |= 4;
      var t = I.updateQueue;
      if (t === null) ((t = Fo()), (I.updateQueue = t), (t.events = [e]));
      else {
        var n = t.events;
        n === null ? (t.events = [e]) : n.push(e);
      }
    }
    function gs(e) {
      var t = z().memoizedState;
      return (
        hs({ ref: t, nextImpl: e }),
        function () {
          if (G & 2) throw Error(i(440));
          return t.impl.apply(void 0, arguments);
        }
      );
    }
    function _s(e, t) {
      return fs(4, 2, e, t);
    }
    function vs(e, t) {
      return fs(4, 4, e, t);
    }
    function ys(e, t) {
      if (typeof t == `function`) {
        e = e();
        var n = t(e);
        return function () {
          typeof n == `function` ? n() : t(null);
        };
      }
      if (t != null)
        return (
          (e = e()),
          (t.current = e),
          function () {
            t.current = null;
          }
        );
    }
    function bs(e, t, n) {
      ((n = n == null ? null : n.concat([e])), fs(4, 4, ys.bind(null, t, e), n));
    }
    function xs() {}
    function Ss(e, t) {
      var n = z();
      t = t === void 0 ? null : t;
      var r = n.memoizedState;
      return t !== null && Eo(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
    }
    function Cs(e, t) {
      var n = z();
      t = t === void 0 ? null : t;
      var r = n.memoizedState;
      if (t !== null && Eo(t, r[1])) return r[0];
      if (((r = e()), xo)) {
        Ke(!0);
        try {
          e();
        } finally {
          Ke(!1);
        }
      }
      return ((n.memoizedState = [r, t]), r);
    }
    function ws(e, t, n) {
      return n === void 0 || (_o & 1073741824 && !(J & 261930))
        ? (e.memoizedState = t)
        : ((e.memoizedState = n), (e = hu()), (I.lanes |= e), (Kl |= e), n);
    }
    function Ts(e, t, n, r) {
      return Mr(n, t)
        ? n
        : ro.current === null
          ? !(_o & 42) || (_o & 1073741824 && !(J & 261930))
            ? ((B = !0), (e.memoizedState = n))
            : ((e = hu()), (I.lanes |= e), (Kl |= e), t)
          : ((e = ws(e, n, r)), Mr(e, t) || (B = !0), e);
    }
    function Es(e, t, n, r, i) {
      var a = T.p;
      T.p = a !== 0 && 8 > a ? a : 8;
      var o = w.T,
        s = {};
      ((w.T = s), Rs(e, !1, t, n));
      try {
        var c = i(),
          l = w.S;
        (l !== null && l(s, c),
          typeof c == `object` && c && typeof c.then == `function`
            ? Ls(e, t, Sa(c, r), mu(e))
            : Ls(e, t, r, mu(e)));
      } catch (n) {
        Ls(e, t, { then: function () {}, status: `rejected`, reason: n }, mu());
      } finally {
        ((T.p = a), o !== null && s.types !== null && (o.types = s.types), (w.T = o));
      }
    }
    function Ds() {}
    function Os(e, t, n, r) {
      if (e.tag !== 5) throw Error(i(476));
      var a = ks(e).queue;
      Es(
        e,
        a,
        t,
        de,
        n === null
          ? Ds
          : function () {
              return (As(e), n(r));
            },
      );
    }
    function ks(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: de,
        baseState: de,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: zo,
          lastRenderedState: de,
        },
        next: null,
      };
      var n = {};
      return (
        (t.next = {
          memoizedState: n,
          baseState: n,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: zo,
            lastRenderedState: n,
          },
          next: null,
        }),
        (e.memoizedState = t),
        (e = e.alternate),
        e !== null && (e.memoizedState = t),
        t
      );
    }
    function As(e) {
      var t = ks(e);
      (t.next === null && (t = e.alternate.memoizedState), Ls(e, t.next.queue, {}, mu()));
    }
    function js() {
      return sa(Qf);
    }
    function Ms() {
      return z().memoizedState;
    }
    function Ns() {
      return z().memoizedState;
    }
    function Ps(e) {
      for (var t = e.return; t !== null;) {
        switch (t.tag) {
          case 24:
          case 3:
            var n = mu();
            e = Ja(n);
            var r = Ya(t, e, n);
            (r !== null && (gu(r, t, n), Xa(r, t, n)), (t = { cache: ma() }), (e.payload = t));
            return;
        }
        t = t.return;
      }
    }
    function Fs(e, t, n) {
      var r = mu();
      ((n = {
        lane: r,
        revertLane: 0,
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
        zs(e) ? Bs(t, n) : ((n = di(e, t, n, r)), n !== null && (gu(n, e, r), Vs(n, t, r))));
    }
    function Is(e, t, n) {
      Ls(e, t, n, mu());
    }
    function Ls(e, t, n, r) {
      var i = {
        lane: r,
        revertLane: 0,
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
      if (zs(e)) Bs(t, i);
      else {
        var a = e.alternate;
        if (
          e.lanes === 0 &&
          (a === null || a.lanes === 0) &&
          ((a = t.lastRenderedReducer), a !== null)
        )
          try {
            var o = t.lastRenderedState,
              s = a(o, n);
            if (((i.hasEagerState = !0), (i.eagerState = s), Mr(s, o)))
              return (ui(e, t, i, 0), K === null && li(), !1);
          } catch {}
        if (((n = di(e, t, i, r)), n !== null)) return (gu(n, e, r), Vs(n, t, r), !0);
      }
      return !1;
    }
    function Rs(e, t, n, r) {
      if (
        ((r = {
          lane: 2,
          revertLane: dd(),
          gesture: null,
          action: r,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        }),
        zs(e))
      ) {
        if (t) throw Error(i(479));
      } else ((t = di(e, n, r, 2)), t !== null && gu(t, e, 2));
    }
    function zs(e) {
      var t = e.alternate;
      return e === I || (t !== null && t === I);
    }
    function Bs(e, t) {
      bo = yo = !0;
      var n = e.pending;
      (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
    }
    function Vs(e, t, n) {
      if (n & 4194048) {
        var r = t.lanes;
        ((r &= e.pendingLanes), (n |= r), (t.lanes = n), lt(e, n));
      }
    }
    var Hs = {
      readContext: sa,
      use: Lo,
      useCallback: R,
      useContext: R,
      useEffect: R,
      useImperativeHandle: R,
      useLayoutEffect: R,
      useInsertionEffect: R,
      useMemo: R,
      useReducer: R,
      useRef: R,
      useState: R,
      useDebugValue: R,
      useDeferredValue: R,
      useTransition: R,
      useSyncExternalStore: R,
      useId: R,
      useHostTransitionStatus: R,
      useFormState: R,
      useActionState: R,
      useOptimistic: R,
      useMemoCache: R,
      useCacheRefresh: R,
    };
    Hs.useEffectEvent = R;
    var Us = {
        readContext: sa,
        use: Lo,
        useCallback: function (e, t) {
          return ((Po().memoizedState = [e, t === void 0 ? null : t]), e);
        },
        useContext: sa,
        useEffect: ps,
        useImperativeHandle: function (e, t, n) {
          ((n = n == null ? null : n.concat([e])), ds(4194308, 4, ys.bind(null, t, e), n));
        },
        useLayoutEffect: function (e, t) {
          return ds(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
          ds(4, 2, e, t);
        },
        useMemo: function (e, t) {
          var n = Po();
          t = t === void 0 ? null : t;
          var r = e();
          if (xo) {
            Ke(!0);
            try {
              e();
            } finally {
              Ke(!1);
            }
          }
          return ((n.memoizedState = [r, t]), r);
        },
        useReducer: function (e, t, n) {
          var r = Po();
          if (n !== void 0) {
            var i = n(t);
            if (xo) {
              Ke(!0);
              try {
                n(t);
              } finally {
                Ke(!1);
              }
            }
          } else i = t;
          return (
            (r.memoizedState = r.baseState = i),
            (e = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: e,
              lastRenderedState: i,
            }),
            (r.queue = e),
            (e = e.dispatch = Fs.bind(null, I, e)),
            [r.memoizedState, e]
          );
        },
        useRef: function (e) {
          var t = Po();
          return ((e = { current: e }), (t.memoizedState = e));
        },
        useState: function (e) {
          e = Yo(e);
          var t = e.queue,
            n = Is.bind(null, I, t);
          return ((t.dispatch = n), [e.memoizedState, n]);
        },
        useDebugValue: xs,
        useDeferredValue: function (e, t) {
          return ws(Po(), e, t);
        },
        useTransition: function () {
          var e = Yo(!1);
          return ((e = Es.bind(null, I, e.queue, !0, !1)), (Po().memoizedState = e), [!1, e]);
        },
        useSyncExternalStore: function (e, t, n) {
          var r = I,
            a = Po();
          if (M) {
            if (n === void 0) throw Error(i(407));
            n = n();
          } else {
            if (((n = t()), K === null)) throw Error(i(349));
            J & 127 || Wo(r, t, n);
          }
          a.memoizedState = n;
          var o = { value: n, getSnapshot: t };
          return (
            (a.queue = o),
            ps(Ko.bind(null, r, o, e), [e]),
            (r.flags |= 2048),
            ls(9, { destroy: void 0 }, Go.bind(null, r, o, n, t), null),
            n
          );
        },
        useId: function () {
          var e = Po(),
            t = K.identifierPrefix;
          if (M) {
            var n = Ii,
              r = Fi;
            ((n = (r & ~(1 << (32 - qe(r) - 1))).toString(32) + n),
              (t = `_` + t + `R_` + n),
              (n = So++),
              0 < n && (t += `H` + n.toString(32)),
              (t += `_`));
          } else ((n = To++), (t = `_` + t + `r_` + n.toString(32) + `_`));
          return (e.memoizedState = t);
        },
        useHostTransitionStatus: js,
        useFormState: is,
        useActionState: is,
        useOptimistic: function (e) {
          var t = Po();
          t.memoizedState = t.baseState = e;
          var n = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: null,
            lastRenderedState: null,
          };
          return ((t.queue = n), (t = Rs.bind(null, I, !0, n)), (n.dispatch = t), [e, t]);
        },
        useMemoCache: Ro,
        useCacheRefresh: function () {
          return (Po().memoizedState = Ps.bind(null, I));
        },
        useEffectEvent: function (e) {
          var t = Po(),
            n = { impl: e };
          return (
            (t.memoizedState = n),
            function () {
              if (G & 2) throw Error(i(440));
              return n.impl.apply(void 0, arguments);
            }
          );
        },
      },
      Ws = {
        readContext: sa,
        use: Lo,
        useCallback: Ss,
        useContext: sa,
        useEffect: ms,
        useImperativeHandle: bs,
        useInsertionEffect: _s,
        useLayoutEffect: vs,
        useMemo: Cs,
        useReducer: Bo,
        useRef: us,
        useState: function () {
          return Bo(zo);
        },
        useDebugValue: xs,
        useDeferredValue: function (e, t) {
          return Ts(z(), L.memoizedState, e, t);
        },
        useTransition: function () {
          var e = Bo(zo)[0],
            t = z().memoizedState;
          return [typeof e == `boolean` ? e : Io(e), t];
        },
        useSyncExternalStore: Uo,
        useId: Ms,
        useHostTransitionStatus: js,
        useFormState: as,
        useActionState: as,
        useOptimistic: function (e, t) {
          return Xo(z(), L, e, t);
        },
        useMemoCache: Ro,
        useCacheRefresh: Ns,
      };
    Ws.useEffectEvent = gs;
    var Gs = {
      readContext: sa,
      use: Lo,
      useCallback: Ss,
      useContext: sa,
      useEffect: ms,
      useImperativeHandle: bs,
      useInsertionEffect: _s,
      useLayoutEffect: vs,
      useMemo: Cs,
      useReducer: Ho,
      useRef: us,
      useState: function () {
        return Ho(zo);
      },
      useDebugValue: xs,
      useDeferredValue: function (e, t) {
        var n = z();
        return L === null ? ws(n, e, t) : Ts(n, L.memoizedState, e, t);
      },
      useTransition: function () {
        var e = Ho(zo)[0],
          t = z().memoizedState;
        return [typeof e == `boolean` ? e : Io(e), t];
      },
      useSyncExternalStore: Uo,
      useId: Ms,
      useHostTransitionStatus: js,
      useFormState: cs,
      useActionState: cs,
      useOptimistic: function (e, t) {
        var n = z();
        return L === null ? ((n.baseState = e), [e, n.queue.dispatch]) : Xo(n, L, e, t);
      },
      useMemoCache: Ro,
      useCacheRefresh: Ns,
    };
    Gs.useEffectEvent = gs;
    function Ks(e, t, n, r) {
      ((t = e.memoizedState),
        (n = n(r, t)),
        (n = n == null ? t : f({}, t, n)),
        (e.memoizedState = n),
        e.lanes === 0 && (e.updateQueue.baseState = n));
    }
    var qs = {
      enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = mu(),
          i = Ja(r);
        ((i.payload = t),
          n != null && (i.callback = n),
          (t = Ya(e, i, r)),
          t !== null && (gu(t, e, r), Xa(t, e, r)));
      },
      enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = mu(),
          i = Ja(r);
        ((i.tag = 1),
          (i.payload = t),
          n != null && (i.callback = n),
          (t = Ya(e, i, r)),
          t !== null && (gu(t, e, r), Xa(t, e, r)));
      },
      enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = mu(),
          r = Ja(n);
        ((r.tag = 2),
          t != null && (r.callback = t),
          (t = Ya(e, r, n)),
          t !== null && (gu(t, e, n), Xa(t, e, n)));
      },
    };
    function Js(e, t, n, r, i, a, o) {
      return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == `function`
          ? e.shouldComponentUpdate(r, a, o)
          : t.prototype && t.prototype.isPureReactComponent
            ? !Nr(n, r) || !Nr(i, a)
            : !0
      );
    }
    function Ys(e, t, n, r) {
      ((e = t.state),
        typeof t.componentWillReceiveProps == `function` && t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == `function` &&
          t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && qs.enqueueReplaceState(t, t.state, null));
    }
    function Xs(e, t) {
      var n = t;
      if (`ref` in t) for (var r in ((n = {}), t)) r !== `ref` && (n[r] = t[r]);
      if ((e = e.defaultProps))
        for (var i in (n === t && (n = f({}, n)), e)) n[i] === void 0 && (n[i] = e[i]);
      return n;
    }
    function Zs(e) {
      ai(e);
    }
    function Qs(e) {
      console.error(e);
    }
    function $s(e) {
      ai(e);
    }
    function ec(e, t) {
      try {
        var n = e.onUncaughtError;
        n(t.value, { componentStack: t.stack });
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    function tc(e, t, n) {
      try {
        var r = e.onCaughtError;
        r(n.value, { componentStack: n.stack, errorBoundary: t.tag === 1 ? t.stateNode : null });
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    function nc(e, t, n) {
      return (
        (n = Ja(n)),
        (n.tag = 3),
        (n.payload = { element: null }),
        (n.callback = function () {
          ec(e, t);
        }),
        n
      );
    }
    function rc(e) {
      return ((e = Ja(e)), (e.tag = 3), e);
    }
    function ic(e, t, n, r) {
      var i = n.type.getDerivedStateFromError;
      if (typeof i == `function`) {
        var a = r.value;
        ((e.payload = function () {
          return i(a);
        }),
          (e.callback = function () {
            tc(t, n, r);
          }));
      }
      var o = n.stateNode;
      o !== null &&
        typeof o.componentDidCatch == `function` &&
        (e.callback = function () {
          (tc(t, n, r),
            typeof i != `function` && (iu === null ? (iu = new Set([this])) : iu.add(this)));
          var e = r.stack;
          this.componentDidCatch(r.value, { componentStack: e === null ? `` : e });
        });
    }
    function ac(e, t, n, r, a) {
      if (((n.flags |= 32768), typeof r == `object` && r && typeof r.then == `function`)) {
        if (((t = n.alternate), t !== null && ia(t, n, a, !0), (n = co.current), n !== null)) {
          switch (n.tag) {
            case 31:
            case 13:
              return (
                lo === null ? Ou() : n.alternate === null && Gl === 0 && (Gl = 3),
                (n.flags &= -257),
                (n.flags |= 65536),
                (n.lanes = a),
                r === ja
                  ? (n.flags |= 16384)
                  : ((t = n.updateQueue),
                    t === null ? (n.updateQueue = new Set([r])) : t.add(r),
                    Z(e, r, a)),
                !1
              );
            case 22:
              return (
                (n.flags |= 65536),
                r === ja
                  ? (n.flags |= 16384)
                  : ((t = n.updateQueue),
                    t === null
                      ? ((t = {
                          transitions: null,
                          markerInstances: null,
                          retryQueue: new Set([r]),
                        }),
                        (n.updateQueue = t))
                      : ((n = t.retryQueue), n === null ? (t.retryQueue = new Set([r])) : n.add(r)),
                    Z(e, r, a)),
                !1
              );
          }
          throw Error(i(435, n.tag));
        }
        return (Z(e, r, a), Ou(), !1);
      }
      if (M)
        return (
          (t = co.current),
          t === null
            ? (r !== Wi && ((t = Error(i(423), { cause: r })), Zi(Di(t, n))),
              (e = e.current.alternate),
              (e.flags |= 65536),
              (a &= -a),
              (e.lanes |= a),
              (r = Di(r, n)),
              (a = nc(e.stateNode, r, a)),
              Za(e, a),
              Gl !== 4 && (Gl = 2))
            : (!(t.flags & 65536) && (t.flags |= 256),
              (t.flags |= 65536),
              (t.lanes = a),
              r !== Wi && ((e = Error(i(422), { cause: r })), Zi(Di(e, n)))),
          !1
        );
      var o = Error(i(520), { cause: r });
      if (((o = Di(o, n)), Zl === null ? (Zl = [o]) : Zl.push(o), Gl !== 4 && (Gl = 2), t === null))
        return !0;
      ((r = Di(r, n)), (n = t));
      do {
        switch (n.tag) {
          case 3:
            return (
              (n.flags |= 65536),
              (e = a & -a),
              (n.lanes |= e),
              (e = nc(n.stateNode, r, e)),
              Za(n, e),
              !1
            );
          case 1:
            if (
              ((t = n.type),
              (o = n.stateNode),
              !(n.flags & 128) &&
                (typeof t.getDerivedStateFromError == `function` ||
                  (o !== null &&
                    typeof o.componentDidCatch == `function` &&
                    (iu === null || !iu.has(o)))))
            )
              return (
                (n.flags |= 65536),
                (a &= -a),
                (n.lanes |= a),
                (a = rc(a)),
                ic(a, e, n, r),
                Za(n, a),
                !1
              );
        }
        n = n.return;
      } while (n !== null);
      return !1;
    }
    var oc = Error(i(461)),
      B = !1;
    function sc(e, t, n, r) {
      t.child = e === null ? Wa(t, null, n, r) : Ua(t, e.child, n, r);
    }
    function cc(e, t, n, r, i) {
      n = n.render;
      var a = t.ref;
      if (`ref` in r) {
        var o = {};
        for (var s in r) s !== `ref` && (o[s] = r[s]);
      } else o = r;
      return (
        oa(t),
        (r = Do(e, t, n, o, a, i)),
        (s = jo()),
        e !== null && !B
          ? (Mo(e, t, i), Mc(e, t, i))
          : (M && s && zi(t), (t.flags |= 1), sc(e, t, r, i), t.child)
      );
    }
    function lc(e, t, n, r, i) {
      if (e === null) {
        var a = n.type;
        return typeof a == `function` && !vi(a) && a.defaultProps === void 0 && n.compare === null
          ? ((t.tag = 15), (t.type = a), uc(e, t, a, r, i))
          : ((e = xi(n.type, null, r, t, t.mode, i)),
            (e.ref = t.ref),
            (e.return = t),
            (t.child = e));
      }
      if (((a = e.child), !Nc(e, i))) {
        var o = a.memoizedProps;
        if (((n = n.compare), (n = n === null ? Nr : n), n(o, r) && e.ref === t.ref))
          return Mc(e, t, i);
      }
      return ((t.flags |= 1), (e = yi(a, r)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    function uc(e, t, n, r, i) {
      if (e !== null) {
        var a = e.memoizedProps;
        if (Nr(a, r) && e.ref === t.ref)
          if (((B = !1), (t.pendingProps = r = a), Nc(e, i))) e.flags & 131072 && (B = !0);
          else return ((t.lanes = e.lanes), Mc(e, t, i));
      }
      return vc(e, t, n, r, i);
    }
    function dc(e, t, n, r) {
      var i = r.children,
        a = e === null ? null : e.memoizedState;
      if (
        (e === null &&
          t.stateNode === null &&
          (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
          }),
        r.mode === `hidden`)
      ) {
        if (t.flags & 128) {
          if (((a = a === null ? n : a.baseLanes | n), e !== null)) {
            for (r = t.child = e.child, i = 0; r !== null;)
              ((i = i | r.lanes | r.childLanes), (r = r.sibling));
            r = i & ~a;
          } else ((r = 0), (t.child = null));
          return pc(e, t, a, n, r);
        }
        if (n & 536870912)
          ((t.memoizedState = { baseLanes: 0, cachePool: null }),
            e !== null && Ea(t, a === null ? null : a.cachePool),
            a === null ? oo() : ao(t, a),
            po(t));
        else return ((r = t.lanes = 536870912), pc(e, t, a === null ? n : a.baseLanes | n, n, r));
      } else
        a === null
          ? (e !== null && Ea(t, null), oo(), mo(t))
          : (Ea(t, a.cachePool), ao(t, a), mo(t), (t.memoizedState = null));
      return (sc(e, t, i, n), t.child);
    }
    function fc(e, t) {
      return (
        (e !== null && e.tag === 22) ||
          t.stateNode !== null ||
          (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
          }),
        t.sibling
      );
    }
    function pc(e, t, n, r, i) {
      var a = Ta();
      return (
        (a = a === null ? null : { parent: pa._currentValue, pool: a }),
        (t.memoizedState = { baseLanes: n, cachePool: a }),
        e !== null && Ea(t, null),
        oo(),
        po(t),
        e !== null && ia(e, t, r, !0),
        (t.childLanes = i),
        null
      );
    }
    function mc(e, t) {
      return (
        (t = Dc({ mode: t.mode, children: t.children }, e.mode)),
        (t.ref = e.ref),
        (e.child = t),
        (t.return = e),
        t
      );
    }
    function hc(e, t, n) {
      return (
        Ua(t, e.child, null, n),
        (e = mc(t, t.pendingProps)),
        (e.flags |= 2),
        ho(t),
        (t.memoizedState = null),
        e
      );
    }
    function gc(e, t, n) {
      var r = t.pendingProps,
        a = !!(t.flags & 128);
      if (((t.flags &= -129), e === null)) {
        if (M) {
          if (r.mode === `hidden`) return ((e = mc(t, r)), (t.lanes = 536870912), fc(null, e));
          if (
            (fo(t),
            (e = j)
              ? ((e = rf(e, Ui)),
                (e = e !== null && e.data === `&` ? e : null),
                e !== null &&
                  ((t.memoizedState = {
                    dehydrated: e,
                    treeContext: Pi === null ? null : { id: Fi, overflow: Ii },
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (n = wi(e)),
                  (n.return = t),
                  (t.child = n),
                  (A = t),
                  (j = null)))
              : (e = null),
            e === null)
          )
            throw Gi(t);
          return ((t.lanes = 536870912), null);
        }
        return mc(t, r);
      }
      var o = e.memoizedState;
      if (o !== null) {
        var s = o.dehydrated;
        if ((fo(t), a))
          if (t.flags & 256) ((t.flags &= -257), (t = hc(e, t, n)));
          else if (t.memoizedState !== null) ((t.child = e.child), (t.flags |= 128), (t = null));
          else throw Error(i(558));
        else if ((B || ia(e, t, n, !1), (a = (n & e.childLanes) !== 0), B || a)) {
          if (((r = K), r !== null && ((s = ut(r, n)), s !== 0 && s !== o.retryLane)))
            throw ((o.retryLane = s), fi(e, s), gu(r, e, s), oc);
          (Ou(), (t = hc(e, t, n)));
        } else
          ((e = o.treeContext),
            (j = cf(s.nextSibling)),
            (A = t),
            (M = !0),
            (Hi = null),
            (Ui = !1),
            e !== null && Vi(t, e),
            (t = mc(t, r)),
            (t.flags |= 4096));
        return t;
      }
      return (
        (e = yi(e.child, { mode: r.mode, children: r.children })),
        (e.ref = t.ref),
        (t.child = e),
        (e.return = t),
        e
      );
    }
    function _c(e, t) {
      var n = t.ref;
      if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
      else {
        if (typeof n != `function` && typeof n != `object`) throw Error(i(284));
        (e === null || e.ref !== n) && (t.flags |= 4194816);
      }
    }
    function vc(e, t, n, r, i) {
      return (
        oa(t),
        (n = Do(e, t, n, r, void 0, i)),
        (r = jo()),
        e !== null && !B
          ? (Mo(e, t, i), Mc(e, t, i))
          : (M && r && zi(t), (t.flags |= 1), sc(e, t, n, i), t.child)
      );
    }
    function yc(e, t, n, r, i, a) {
      return (
        oa(t),
        (t.updateQueue = null),
        (n = ko(t, r, n, i)),
        Oo(e),
        (r = jo()),
        e !== null && !B
          ? (Mo(e, t, a), Mc(e, t, a))
          : (M && r && zi(t), (t.flags |= 1), sc(e, t, n, a), t.child)
      );
    }
    function bc(e, t, n, r, i) {
      if ((oa(t), t.stateNode === null)) {
        var a = hi,
          o = n.contextType;
        (typeof o == `object` && o && (a = sa(o)),
          (a = new n(r, a)),
          (t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null),
          (a.updater = qs),
          (t.stateNode = a),
          (a._reactInternals = t),
          (a = t.stateNode),
          (a.props = r),
          (a.state = t.memoizedState),
          (a.refs = {}),
          Ka(t),
          (o = n.contextType),
          (a.context = typeof o == `object` && o ? sa(o) : hi),
          (a.state = t.memoizedState),
          (o = n.getDerivedStateFromProps),
          typeof o == `function` && (Ks(t, n, o, r), (a.state = t.memoizedState)),
          typeof n.getDerivedStateFromProps == `function` ||
            typeof a.getSnapshotBeforeUpdate == `function` ||
            (typeof a.UNSAFE_componentWillMount != `function` &&
              typeof a.componentWillMount != `function`) ||
            ((o = a.state),
            typeof a.componentWillMount == `function` && a.componentWillMount(),
            typeof a.UNSAFE_componentWillMount == `function` && a.UNSAFE_componentWillMount(),
            o !== a.state && qs.enqueueReplaceState(a, a.state, null),
            eo(t, r, a, i),
            $a(),
            (a.state = t.memoizedState)),
          typeof a.componentDidMount == `function` && (t.flags |= 4194308),
          (r = !0));
      } else if (e === null) {
        a = t.stateNode;
        var s = t.memoizedProps,
          c = Xs(n, s);
        a.props = c;
        var l = a.context,
          u = n.contextType;
        ((o = hi), typeof u == `object` && u && (o = sa(u)));
        var d = n.getDerivedStateFromProps;
        ((u = typeof d == `function` || typeof a.getSnapshotBeforeUpdate == `function`),
          (s = t.pendingProps !== s),
          u ||
            (typeof a.UNSAFE_componentWillReceiveProps != `function` &&
              typeof a.componentWillReceiveProps != `function`) ||
            ((s || l !== o) && Ys(t, a, r, o)),
          (Ga = !1));
        var f = t.memoizedState;
        ((a.state = f),
          eo(t, r, a, i),
          $a(),
          (l = t.memoizedState),
          s || f !== l || Ga
            ? (typeof d == `function` && (Ks(t, n, d, r), (l = t.memoizedState)),
              (c = Ga || Js(t, n, c, r, f, l, o))
                ? (u ||
                    (typeof a.UNSAFE_componentWillMount != `function` &&
                      typeof a.componentWillMount != `function`) ||
                    (typeof a.componentWillMount == `function` && a.componentWillMount(),
                    typeof a.UNSAFE_componentWillMount == `function` &&
                      a.UNSAFE_componentWillMount()),
                  typeof a.componentDidMount == `function` && (t.flags |= 4194308))
                : (typeof a.componentDidMount == `function` && (t.flags |= 4194308),
                  (t.memoizedProps = r),
                  (t.memoizedState = l)),
              (a.props = r),
              (a.state = l),
              (a.context = o),
              (r = c))
            : (typeof a.componentDidMount == `function` && (t.flags |= 4194308), (r = !1)));
      } else {
        ((a = t.stateNode),
          qa(e, t),
          (o = t.memoizedProps),
          (u = Xs(n, o)),
          (a.props = u),
          (d = t.pendingProps),
          (f = a.context),
          (l = n.contextType),
          (c = hi),
          typeof l == `object` && l && (c = sa(l)),
          (s = n.getDerivedStateFromProps),
          (l = typeof s == `function` || typeof a.getSnapshotBeforeUpdate == `function`) ||
            (typeof a.UNSAFE_componentWillReceiveProps != `function` &&
              typeof a.componentWillReceiveProps != `function`) ||
            ((o !== d || f !== c) && Ys(t, a, r, c)),
          (Ga = !1),
          (f = t.memoizedState),
          (a.state = f),
          eo(t, r, a, i),
          $a());
        var p = t.memoizedState;
        o !== d || f !== p || Ga || (e !== null && e.dependencies !== null && aa(e.dependencies))
          ? (typeof s == `function` && (Ks(t, n, s, r), (p = t.memoizedState)),
            (u =
              Ga ||
              Js(t, n, u, r, f, p, c) ||
              (e !== null && e.dependencies !== null && aa(e.dependencies)))
              ? (l ||
                  (typeof a.UNSAFE_componentWillUpdate != `function` &&
                    typeof a.componentWillUpdate != `function`) ||
                  (typeof a.componentWillUpdate == `function` && a.componentWillUpdate(r, p, c),
                  typeof a.UNSAFE_componentWillUpdate == `function` &&
                    a.UNSAFE_componentWillUpdate(r, p, c)),
                typeof a.componentDidUpdate == `function` && (t.flags |= 4),
                typeof a.getSnapshotBeforeUpdate == `function` && (t.flags |= 1024))
              : (typeof a.componentDidUpdate != `function` ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                typeof a.getSnapshotBeforeUpdate != `function` ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (t.memoizedProps = r),
                (t.memoizedState = p)),
            (a.props = r),
            (a.state = p),
            (a.context = c),
            (r = u))
          : (typeof a.componentDidUpdate != `function` ||
              (o === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != `function` ||
              (o === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (r = !1));
      }
      return (
        (a = r),
        _c(e, t),
        (r = !!(t.flags & 128)),
        a || r
          ? ((a = t.stateNode),
            (n = r && typeof n.getDerivedStateFromError != `function` ? null : a.render()),
            (t.flags |= 1),
            e !== null && r
              ? ((t.child = Ua(t, e.child, null, i)), (t.child = Ua(t, null, n, i)))
              : sc(e, t, n, i),
            (t.memoizedState = a.state),
            (e = t.child))
          : (e = Mc(e, t, i)),
        e
      );
    }
    function xc(e, t, n, r) {
      return (Yi(), (t.flags |= 256), sc(e, t, n, r), t.child);
    }
    var Sc = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
    function Cc(e) {
      return { baseLanes: e, cachePool: Da() };
    }
    function wc(e, t, n) {
      return ((e = e === null ? 0 : e.childLanes & ~n), t && (e |= Yl), e);
    }
    function Tc(e, t, n) {
      var r = t.pendingProps,
        a = !1,
        o = !!(t.flags & 128),
        s;
      if (
        ((s = o) || (s = e !== null && e.memoizedState === null ? !1 : !!(F.current & 2)),
        s && ((a = !0), (t.flags &= -129)),
        (s = !!(t.flags & 32)),
        (t.flags &= -33),
        e === null)
      ) {
        if (M) {
          if (
            (a ? uo(t) : mo(t),
            (e = j)
              ? ((e = rf(e, Ui)),
                (e = e !== null && e.data !== `&` ? e : null),
                e !== null &&
                  ((t.memoizedState = {
                    dehydrated: e,
                    treeContext: Pi === null ? null : { id: Fi, overflow: Ii },
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (n = wi(e)),
                  (n.return = t),
                  (t.child = n),
                  (A = t),
                  (j = null)))
              : (e = null),
            e === null)
          )
            throw Gi(t);
          return (of(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
        }
        var c = r.children;
        return (
          (r = r.fallback),
          a
            ? (mo(t),
              (a = t.mode),
              (c = Dc({ mode: `hidden`, children: c }, a)),
              (r = Si(r, a, n, null)),
              (c.return = t),
              (r.return = t),
              (c.sibling = r),
              (t.child = c),
              (r = t.child),
              (r.memoizedState = Cc(n)),
              (r.childLanes = wc(e, s, n)),
              (t.memoizedState = Sc),
              fc(null, r))
            : (uo(t), Ec(t, c))
        );
      }
      var l = e.memoizedState;
      if (l !== null && ((c = l.dehydrated), c !== null)) {
        if (o)
          t.flags & 256
            ? (uo(t), (t.flags &= -257), (t = Oc(e, t, n)))
            : t.memoizedState === null
              ? (mo(t),
                (c = r.fallback),
                (a = t.mode),
                (r = Dc({ mode: `visible`, children: r.children }, a)),
                (c = Si(c, a, n, null)),
                (c.flags |= 2),
                (r.return = t),
                (c.return = t),
                (r.sibling = c),
                (t.child = r),
                Ua(t, e.child, null, n),
                (r = t.child),
                (r.memoizedState = Cc(n)),
                (r.childLanes = wc(e, s, n)),
                (t.memoizedState = Sc),
                (t = fc(null, r)))
              : (mo(t), (t.child = e.child), (t.flags |= 128), (t = null));
        else if ((uo(t), of(c))) {
          if (((s = c.nextSibling && c.nextSibling.dataset), s)) var u = s.dgst;
          ((s = u),
            (r = Error(i(419))),
            (r.stack = ``),
            (r.digest = s),
            Zi({ value: r, source: null, stack: null }),
            (t = Oc(e, t, n)));
        } else if ((B || ia(e, t, n, !1), (s = (n & e.childLanes) !== 0), B || s)) {
          if (((s = K), s !== null && ((r = ut(s, n)), r !== 0 && r !== l.retryLane)))
            throw ((l.retryLane = r), fi(e, r), gu(s, e, r), oc);
          (af(c) || Ou(), (t = Oc(e, t, n)));
        } else
          af(c)
            ? ((t.flags |= 192), (t.child = e.child), (t = null))
            : ((e = l.treeContext),
              (j = cf(c.nextSibling)),
              (A = t),
              (M = !0),
              (Hi = null),
              (Ui = !1),
              e !== null && Vi(t, e),
              (t = Ec(t, r.children)),
              (t.flags |= 4096));
        return t;
      }
      return a
        ? (mo(t),
          (c = r.fallback),
          (a = t.mode),
          (l = e.child),
          (u = l.sibling),
          (r = yi(l, { mode: `hidden`, children: r.children })),
          (r.subtreeFlags = l.subtreeFlags & 65011712),
          u === null ? ((c = Si(c, a, n, null)), (c.flags |= 2)) : (c = yi(u, c)),
          (c.return = t),
          (r.return = t),
          (r.sibling = c),
          (t.child = r),
          fc(null, r),
          (r = t.child),
          (c = e.child.memoizedState),
          c === null
            ? (c = Cc(n))
            : ((a = c.cachePool),
              a === null
                ? (a = Da())
                : ((l = pa._currentValue), (a = a.parent === l ? a : { parent: l, pool: l })),
              (c = { baseLanes: c.baseLanes | n, cachePool: a })),
          (r.memoizedState = c),
          (r.childLanes = wc(e, s, n)),
          (t.memoizedState = Sc),
          fc(e.child, r))
        : (uo(t),
          (n = e.child),
          (e = n.sibling),
          (n = yi(n, { mode: `visible`, children: r.children })),
          (n.return = t),
          (n.sibling = null),
          e !== null &&
            ((s = t.deletions), s === null ? ((t.deletions = [e]), (t.flags |= 16)) : s.push(e)),
          (t.child = n),
          (t.memoizedState = null),
          n);
    }
    function Ec(e, t) {
      return ((t = Dc({ mode: `visible`, children: t }, e.mode)), (t.return = e), (e.child = t));
    }
    function Dc(e, t) {
      return ((e = _i(22, e, null, t)), (e.lanes = 0), e);
    }
    function Oc(e, t, n) {
      return (
        Ua(t, e.child, null, n),
        (e = Ec(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
      );
    }
    function kc(e, t, n) {
      e.lanes |= t;
      var r = e.alternate;
      (r !== null && (r.lanes |= t), ra(e.return, t, n));
    }
    function Ac(e, t, n, r, i, a) {
      var o = e.memoizedState;
      o === null
        ? (e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailMode: i,
            treeForkCount: a,
          })
        : ((o.isBackwards = t),
          (o.rendering = null),
          (o.renderingStartTime = 0),
          (o.last = r),
          (o.tail = n),
          (o.tailMode = i),
          (o.treeForkCount = a));
    }
    function jc(e, t, n) {
      var r = t.pendingProps,
        i = r.revealOrder,
        a = r.tail;
      r = r.children;
      var o = F.current,
        s = !!(o & 2);
      if (
        (s ? ((o = (o & 1) | 2), (t.flags |= 128)) : (o &= 1),
        D(F, o),
        sc(e, t, r, n),
        (r = M ? ji : 0),
        !s && e !== null && e.flags & 128)
      )
        a: for (e = t.child; e !== null;) {
          if (e.tag === 13) e.memoizedState !== null && kc(e, n, t);
          else if (e.tag === 19) kc(e, n, t);
          else if (e.child !== null) {
            ((e.child.return = e), (e = e.child));
            continue;
          }
          if (e === t) break a;
          for (; e.sibling === null;) {
            if (e.return === null || e.return === t) break a;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      switch (i) {
        case `forwards`:
          for (n = t.child, i = null; n !== null;)
            ((e = n.alternate), e !== null && go(e) === null && (i = n), (n = n.sibling));
          ((n = i),
            n === null ? ((i = t.child), (t.child = null)) : ((i = n.sibling), (n.sibling = null)),
            Ac(t, !1, i, n, a, r));
          break;
        case `backwards`:
        case `unstable_legacy-backwards`:
          for (n = null, i = t.child, t.child = null; i !== null;) {
            if (((e = i.alternate), e !== null && go(e) === null)) {
              t.child = i;
              break;
            }
            ((e = i.sibling), (i.sibling = n), (n = i), (i = e));
          }
          Ac(t, !0, n, null, a, r);
          break;
        case `together`:
          Ac(t, !1, null, null, void 0, r);
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function Mc(e, t, n) {
      if (
        (e !== null && (t.dependencies = e.dependencies), (Kl |= t.lanes), (n & t.childLanes) === 0)
      )
        if (e !== null) {
          if ((ia(e, t, n, !1), (n & t.childLanes) === 0)) return null;
        } else return null;
      if (e !== null && t.child !== e.child) throw Error(i(153));
      if (t.child !== null) {
        for (e = t.child, n = yi(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;)
          ((e = e.sibling), (n = n.sibling = yi(e, e.pendingProps)), (n.return = t));
        n.sibling = null;
      }
      return t.child;
    }
    function Nc(e, t) {
      return (e.lanes & t) !== 0 || ((e = e.dependencies), !!(e !== null && aa(e)));
    }
    function Pc(e, t, n) {
      switch (t.tag) {
        case 3:
          (ye(t, t.stateNode.containerInfo), ta(t, pa, e.memoizedState.cache), Yi());
          break;
        case 27:
        case 5:
          xe(t);
          break;
        case 4:
          ye(t, t.stateNode.containerInfo);
          break;
        case 10:
          ta(t, t.type, t.memoizedProps.value);
          break;
        case 31:
          if (t.memoizedState !== null) return ((t.flags |= 128), fo(t), null);
          break;
        case 13:
          var r = t.memoizedState;
          if (r !== null)
            return r.dehydrated === null
              ? (n & t.child.childLanes) === 0
                ? (uo(t), (e = Mc(e, t, n)), e === null ? null : e.sibling)
                : Tc(e, t, n)
              : (uo(t), (t.flags |= 128), null);
          uo(t);
          break;
        case 19:
          var i = !!(e.flags & 128);
          if (
            ((r = (n & t.childLanes) !== 0), (r ||= (ia(e, t, n, !1), (n & t.childLanes) !== 0)), i)
          ) {
            if (r) return jc(e, t, n);
            t.flags |= 128;
          }
          if (
            ((i = t.memoizedState),
            i !== null && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
            D(F, F.current),
            r)
          )
            break;
          return null;
        case 22:
          return ((t.lanes = 0), dc(e, t, n, t.pendingProps));
        case 24:
          ta(t, pa, e.memoizedState.cache);
      }
      return Mc(e, t, n);
    }
    function Fc(e, t, n) {
      if (e !== null)
        if (e.memoizedProps !== t.pendingProps) B = !0;
        else {
          if (!Nc(e, n) && !(t.flags & 128)) return ((B = !1), Pc(e, t, n));
          B = !!(e.flags & 131072);
        }
      else ((B = !1), M && t.flags & 1048576 && Ri(t, ji, t.index));
      switch (((t.lanes = 0), t.tag)) {
        case 16:
          a: {
            var r = t.pendingProps;
            if (((e = Pa(t.elementType)), (t.type = e), typeof e == `function`))
              vi(e)
                ? ((r = Xs(e, r)), (t.tag = 1), (t = bc(null, t, e, r, n)))
                : ((t.tag = 0), (t = vc(null, t, e, r, n)));
            else {
              if (e != null) {
                var a = e.$$typeof;
                if (a === S) {
                  ((t.tag = 11), (t = cc(null, t, e, r, n)));
                  break a;
                }
                if (a === te) {
                  ((t.tag = 14), (t = lc(null, t, e, r, n)));
                  break a;
                }
              }
              throw ((t = le(e) || e), Error(i(306, t, ``)));
            }
          }
          return t;
        case 0:
          return vc(e, t, t.type, t.pendingProps, n);
        case 1:
          return ((r = t.type), (a = Xs(r, t.pendingProps)), bc(e, t, r, a, n));
        case 3:
          a: {
            if ((ye(t, t.stateNode.containerInfo), e === null)) throw Error(i(387));
            r = t.pendingProps;
            var o = t.memoizedState;
            ((a = o.element), qa(e, t), eo(t, r, null, n));
            var s = t.memoizedState;
            if (
              ((r = s.cache),
              ta(t, pa, r),
              r !== o.cache && N(t, [pa], n, !0),
              $a(),
              (r = s.element),
              o.isDehydrated)
            )
              if (
                ((o = { element: r, isDehydrated: !1, cache: s.cache }),
                (t.updateQueue.baseState = o),
                (t.memoizedState = o),
                t.flags & 256)
              ) {
                t = xc(e, t, r, n);
                break a;
              } else if (r !== a) {
                ((a = Di(Error(i(424)), t)), Zi(a), (t = xc(e, t, r, n)));
                break a;
              } else {
                switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                  case 9:
                    e = e.body;
                    break;
                  default:
                    e = e.nodeName === `HTML` ? e.ownerDocument.body : e;
                }
                for (
                  j = cf(e.firstChild),
                    A = t,
                    M = !0,
                    Hi = null,
                    Ui = !0,
                    n = Wa(t, null, r, n),
                    t.child = n;
                  n;
                )
                  ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
              }
            else {
              if ((Yi(), r === a)) {
                t = Mc(e, t, n);
                break a;
              }
              sc(e, t, r, n);
            }
            t = t.child;
          }
          return t;
        case 26:
          return (
            _c(e, t),
            e === null
              ? (n = kf(t.type, null, t.pendingProps, null))
                ? (t.memoizedState = n)
                : M ||
                  ((n = t.type),
                  (e = t.pendingProps),
                  (r = Bd(_e.current).createElement(n)),
                  (r[gt] = t),
                  (r[_t] = e),
                  Pd(r, n, e),
                  At(r),
                  (t.stateNode = r))
              : (t.memoizedState = kf(t.type, e.memoizedProps, t.pendingProps, e.memoizedState)),
            null
          );
        case 27:
          return (
            xe(t),
            e === null &&
              M &&
              ((r = t.stateNode = ff(t.type, t.pendingProps, _e.current)),
              (A = t),
              (Ui = !0),
              (a = j),
              Zd(t.type) ? ((lf = a), (j = cf(r.firstChild))) : (j = a)),
            sc(e, t, t.pendingProps.children, n),
            _c(e, t),
            e === null && (t.flags |= 4194304),
            t.child
          );
        case 5:
          return (
            e === null &&
              M &&
              ((a = r = j) &&
                ((r = tf(r, t.type, t.pendingProps, Ui)),
                r === null
                  ? (a = !1)
                  : ((t.stateNode = r), (A = t), (j = cf(r.firstChild)), (Ui = !1), (a = !0))),
              a || Gi(t)),
            xe(t),
            (a = t.type),
            (o = t.pendingProps),
            (s = e === null ? null : e.memoizedProps),
            (r = o.children),
            Ud(a, o) ? (r = null) : s !== null && Ud(a, s) && (t.flags |= 32),
            t.memoizedState !== null && ((a = Do(e, t, Ao, null, null, n)), (Qf._currentValue = a)),
            _c(e, t),
            sc(e, t, r, n),
            t.child
          );
        case 6:
          return (
            e === null &&
              M &&
              ((e = n = j) &&
                ((n = nf(n, t.pendingProps, Ui)),
                n === null ? (e = !1) : ((t.stateNode = n), (A = t), (j = null), (e = !0))),
              e || Gi(t)),
            null
          );
        case 13:
          return Tc(e, t, n);
        case 4:
          return (
            ye(t, t.stateNode.containerInfo),
            (r = t.pendingProps),
            e === null ? (t.child = Ua(t, null, r, n)) : sc(e, t, r, n),
            t.child
          );
        case 11:
          return cc(e, t, t.type, t.pendingProps, n);
        case 7:
          return (sc(e, t, t.pendingProps, n), t.child);
        case 8:
          return (sc(e, t, t.pendingProps.children, n), t.child);
        case 12:
          return (sc(e, t, t.pendingProps.children, n), t.child);
        case 10:
          return ((r = t.pendingProps), ta(t, t.type, r.value), sc(e, t, r.children, n), t.child);
        case 9:
          return (
            (a = t.type._context),
            (r = t.pendingProps.children),
            oa(t),
            (a = sa(a)),
            (r = r(a)),
            (t.flags |= 1),
            sc(e, t, r, n),
            t.child
          );
        case 14:
          return lc(e, t, t.type, t.pendingProps, n);
        case 15:
          return uc(e, t, t.type, t.pendingProps, n);
        case 19:
          return jc(e, t, n);
        case 31:
          return gc(e, t, n);
        case 22:
          return dc(e, t, n, t.pendingProps);
        case 24:
          return (
            oa(t),
            (r = sa(pa)),
            e === null
              ? ((a = Ta()),
                a === null &&
                  ((a = K),
                  (o = ma()),
                  (a.pooledCache = o),
                  o.refCount++,
                  o !== null && (a.pooledCacheLanes |= n),
                  (a = o)),
                (t.memoizedState = { parent: r, cache: a }),
                Ka(t),
                ta(t, pa, a))
              : ((e.lanes & n) !== 0 && (qa(e, t), eo(t, null, null, n), $a()),
                (a = e.memoizedState),
                (o = t.memoizedState),
                a.parent === r
                  ? ((r = o.cache), ta(t, pa, r), r !== a.cache && N(t, [pa], n, !0))
                  : ((a = { parent: r, cache: r }),
                    (t.memoizedState = a),
                    t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a),
                    ta(t, pa, r))),
            sc(e, t, t.pendingProps.children, n),
            t.child
          );
        case 29:
          throw t.pendingProps;
      }
      throw Error(i(156, t.tag));
    }
    function Ic(e) {
      e.flags |= 4;
    }
    function Lc(e, t, n, r, i) {
      if (((t = !!(e.mode & 32)) && (t = !1), t)) {
        if (((e.flags |= 16777216), (i & 335544128) === i))
          if (e.stateNode.complete) e.flags |= 8192;
          else if (Tu()) e.flags |= 8192;
          else throw ((Fa = ja), ka);
      } else e.flags &= -16777217;
    }
    function Rc(e, t) {
      if (t.type !== `stylesheet` || t.state.loading & 4) e.flags &= -16777217;
      else if (((e.flags |= 16777216), !Wf(t)))
        if (Tu()) e.flags |= 8192;
        else throw ((Fa = ja), ka);
    }
    function zc(e, t) {
      (t !== null && (e.flags |= 4),
        e.flags & 16384 && ((t = e.tag === 22 ? 536870912 : it()), (e.lanes |= t), (Xl |= t)));
    }
    function Bc(e, t) {
      if (!M)
        switch (e.tailMode) {
          case `hidden`:
            t = e.tail;
            for (var n = null; t !== null;) (t.alternate !== null && (n = t), (t = t.sibling));
            n === null ? (e.tail = null) : (n.sibling = null);
            break;
          case `collapsed`:
            n = e.tail;
            for (var r = null; n !== null;) (n.alternate !== null && (r = n), (n = n.sibling));
            r === null
              ? t || e.tail === null
                ? (e.tail = null)
                : (e.tail.sibling = null)
              : (r.sibling = null);
        }
    }
    function V(e) {
      var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
      if (t)
        for (var i = e.child; i !== null;)
          ((n |= i.lanes | i.childLanes),
            (r |= i.subtreeFlags & 65011712),
            (r |= i.flags & 65011712),
            (i.return = e),
            (i = i.sibling));
      else
        for (i = e.child; i !== null;)
          ((n |= i.lanes | i.childLanes),
            (r |= i.subtreeFlags),
            (r |= i.flags),
            (i.return = e),
            (i = i.sibling));
      return ((e.subtreeFlags |= r), (e.childLanes = n), t);
    }
    function Vc(e, t, n) {
      var r = t.pendingProps;
      switch ((Bi(t), t.tag)) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return (V(t), null);
        case 1:
          return (V(t), null);
        case 3:
          return (
            (n = t.stateNode),
            (r = null),
            e !== null && (r = e.memoizedState.cache),
            t.memoizedState.cache !== r && (t.flags |= 2048),
            na(pa),
            be(),
            n.pendingContext && ((n.context = n.pendingContext), (n.pendingContext = null)),
            (e === null || e.child === null) &&
              (Ji(t)
                ? Ic(t)
                : e === null ||
                  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                  ((t.flags |= 1024), Xi())),
            V(t),
            null
          );
        case 26:
          var a = t.type,
            o = t.memoizedState;
          return (
            e === null
              ? (Ic(t), o === null ? (V(t), Lc(t, a, null, r, n)) : (V(t), Rc(t, o)))
              : o
                ? o === e.memoizedState
                  ? (V(t), (t.flags &= -16777217))
                  : (Ic(t), V(t), Rc(t, o))
                : ((e = e.memoizedProps), e !== r && Ic(t), V(t), Lc(t, a, e, r, n)),
            null
          );
        case 27:
          if ((Se(t), (n = _e.current), (a = t.type), e !== null && t.stateNode != null))
            e.memoizedProps !== r && Ic(t);
          else {
            if (!r) {
              if (t.stateNode === null) throw Error(i(166));
              return (V(t), null);
            }
            ((e = he.current), Ji(t) ? Ki(t, e) : ((e = ff(a, r, n)), (t.stateNode = e), Ic(t)));
          }
          return (V(t), null);
        case 5:
          if ((Se(t), (a = t.type), e !== null && t.stateNode != null))
            e.memoizedProps !== r && Ic(t);
          else {
            if (!r) {
              if (t.stateNode === null) throw Error(i(166));
              return (V(t), null);
            }
            if (((o = he.current), Ji(t))) Ki(t, o);
            else {
              var s = Bd(_e.current);
              switch (o) {
                case 1:
                  o = s.createElementNS(`http://www.w3.org/2000/svg`, a);
                  break;
                case 2:
                  o = s.createElementNS(`http://www.w3.org/1998/Math/MathML`, a);
                  break;
                default:
                  switch (a) {
                    case `svg`:
                      o = s.createElementNS(`http://www.w3.org/2000/svg`, a);
                      break;
                    case `math`:
                      o = s.createElementNS(`http://www.w3.org/1998/Math/MathML`, a);
                      break;
                    case `script`:
                      ((o = s.createElement(`div`)),
                        (o.innerHTML = `<script><\/script>`),
                        (o = o.removeChild(o.firstChild)));
                      break;
                    case `select`:
                      ((o =
                        typeof r.is == `string`
                          ? s.createElement(`select`, { is: r.is })
                          : s.createElement(`select`)),
                        r.multiple ? (o.multiple = !0) : r.size && (o.size = r.size));
                      break;
                    default:
                      o =
                        typeof r.is == `string`
                          ? s.createElement(a, { is: r.is })
                          : s.createElement(a);
                  }
              }
              ((o[gt] = t), (o[_t] = r));
              a: for (s = t.child; s !== null;) {
                if (s.tag === 5 || s.tag === 6) o.appendChild(s.stateNode);
                else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                  ((s.child.return = s), (s = s.child));
                  continue;
                }
                if (s === t) break a;
                for (; s.sibling === null;) {
                  if (s.return === null || s.return === t) break a;
                  s = s.return;
                }
                ((s.sibling.return = s.return), (s = s.sibling));
              }
              t.stateNode = o;
              a: switch ((Pd(o, a, r), a)) {
                case `button`:
                case `input`:
                case `select`:
                case `textarea`:
                  r = !!r.autoFocus;
                  break a;
                case `img`:
                  r = !0;
                  break a;
                default:
                  r = !1;
              }
              r && Ic(t);
            }
          }
          return (
            V(t),
            Lc(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n),
            null
          );
        case 6:
          if (e && t.stateNode != null) e.memoizedProps !== r && Ic(t);
          else {
            if (typeof r != `string` && t.stateNode === null) throw Error(i(166));
            if (((e = _e.current), Ji(t))) {
              if (((e = t.stateNode), (n = t.memoizedProps), (r = null), (a = A), a !== null))
                switch (a.tag) {
                  case 27:
                  case 5:
                    r = a.memoizedProps;
                }
              ((e[gt] = t),
                (e = !!(
                  e.nodeValue === n ||
                  (r !== null && !0 === r.suppressHydrationWarning) ||
                  Md(e.nodeValue, n)
                )),
                e || Gi(t, !0));
            } else ((e = Bd(e).createTextNode(r)), (e[gt] = t), (t.stateNode = e));
          }
          return (V(t), null);
        case 31:
          if (((n = t.memoizedState), e === null || e.memoizedState !== null)) {
            if (((r = Ji(t)), n !== null)) {
              if (e === null) {
                if (!r) throw Error(i(318));
                if (((e = t.memoizedState), (e = e === null ? null : e.dehydrated), !e))
                  throw Error(i(557));
                e[gt] = t;
              } else (Yi(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4));
              (V(t), (e = !1));
            } else
              ((n = Xi()),
                e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n),
                (e = !0));
            if (!e) return t.flags & 256 ? (ho(t), t) : (ho(t), null);
            if (t.flags & 128) throw Error(i(558));
          }
          return (V(t), null);
        case 13:
          if (
            ((r = t.memoizedState),
            e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
          ) {
            if (((a = Ji(t)), r !== null && r.dehydrated !== null)) {
              if (e === null) {
                if (!a) throw Error(i(318));
                if (((a = t.memoizedState), (a = a === null ? null : a.dehydrated), !a))
                  throw Error(i(317));
                a[gt] = t;
              } else (Yi(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4));
              (V(t), (a = !1));
            } else
              ((a = Xi()),
                e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a),
                (a = !0));
            if (!a) return t.flags & 256 ? (ho(t), t) : (ho(t), null);
          }
          return (
            ho(t),
            t.flags & 128
              ? ((t.lanes = n), t)
              : ((n = r !== null),
                (e = e !== null && e.memoizedState !== null),
                n &&
                  ((r = t.child),
                  (a = null),
                  r.alternate !== null &&
                    r.alternate.memoizedState !== null &&
                    r.alternate.memoizedState.cachePool !== null &&
                    (a = r.alternate.memoizedState.cachePool.pool),
                  (o = null),
                  r.memoizedState !== null &&
                    r.memoizedState.cachePool !== null &&
                    (o = r.memoizedState.cachePool.pool),
                  o !== a && (r.flags |= 2048)),
                n !== e && n && (t.child.flags |= 8192),
                zc(t, t.updateQueue),
                V(t),
                null)
          );
        case 4:
          return (be(), e === null && Sd(t.stateNode.containerInfo), V(t), null);
        case 10:
          return (na(t.type), V(t), null);
        case 19:
          if ((E(F), (r = t.memoizedState), r === null)) return (V(t), null);
          if (((a = !!(t.flags & 128)), (o = r.rendering), o === null))
            if (a) Bc(r, !1);
            else {
              if (Gl !== 0 || (e !== null && e.flags & 128))
                for (e = t.child; e !== null;) {
                  if (((o = go(e)), o !== null)) {
                    for (
                      t.flags |= 128,
                        Bc(r, !1),
                        e = o.updateQueue,
                        t.updateQueue = e,
                        zc(t, e),
                        t.subtreeFlags = 0,
                        e = n,
                        n = t.child;
                      n !== null;
                    )
                      (bi(n, e), (n = n.sibling));
                    return (D(F, (F.current & 1) | 2), M && Li(t, r.treeForkCount), t.child);
                  }
                  e = e.sibling;
                }
              r.tail !== null &&
                Fe() > nu &&
                ((t.flags |= 128), (a = !0), Bc(r, !1), (t.lanes = 4194304));
            }
          else {
            if (!a)
              if (((e = go(o)), e !== null)) {
                if (
                  ((t.flags |= 128),
                  (a = !0),
                  (e = e.updateQueue),
                  (t.updateQueue = e),
                  zc(t, e),
                  Bc(r, !0),
                  r.tail === null && r.tailMode === `hidden` && !o.alternate && !M)
                )
                  return (V(t), null);
              } else
                2 * Fe() - r.renderingStartTime > nu &&
                  n !== 536870912 &&
                  ((t.flags |= 128), (a = !0), Bc(r, !1), (t.lanes = 4194304));
            r.isBackwards
              ? ((o.sibling = t.child), (t.child = o))
              : ((e = r.last), e === null ? (t.child = o) : (e.sibling = o), (r.last = o));
          }
          return r.tail === null
            ? (V(t), null)
            : ((e = r.tail),
              (r.rendering = e),
              (r.tail = e.sibling),
              (r.renderingStartTime = Fe()),
              (e.sibling = null),
              (n = F.current),
              D(F, a ? (n & 1) | 2 : n & 1),
              M && Li(t, r.treeForkCount),
              e);
        case 22:
        case 23:
          return (
            ho(t),
            so(),
            (r = t.memoizedState !== null),
            e === null
              ? r && (t.flags |= 8192)
              : (e.memoizedState !== null) !== r && (t.flags |= 8192),
            r
              ? n & 536870912 && !(t.flags & 128) && (V(t), t.subtreeFlags & 6 && (t.flags |= 8192))
              : V(t),
            (n = t.updateQueue),
            n !== null && zc(t, n.retryQueue),
            (n = null),
            e !== null &&
              e.memoizedState !== null &&
              e.memoizedState.cachePool !== null &&
              (n = e.memoizedState.cachePool.pool),
            (r = null),
            t.memoizedState !== null &&
              t.memoizedState.cachePool !== null &&
              (r = t.memoizedState.cachePool.pool),
            r !== n && (t.flags |= 2048),
            e !== null && E(wa),
            null
          );
        case 24:
          return (
            (n = null),
            e !== null && (n = e.memoizedState.cache),
            t.memoizedState.cache !== n && (t.flags |= 2048),
            na(pa),
            V(t),
            null
          );
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(i(156, t.tag));
    }
    function Hc(e, t) {
      switch ((Bi(t), t.tag)) {
        case 1:
          return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
        case 3:
          return (
            na(pa),
            be(),
            (e = t.flags),
            e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 26:
        case 27:
        case 5:
          return (Se(t), null);
        case 31:
          if (t.memoizedState !== null) {
            if ((ho(t), t.alternate === null)) throw Error(i(340));
            Yi();
          }
          return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
        case 13:
          if ((ho(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
            if (t.alternate === null) throw Error(i(340));
            Yi();
          }
          return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
        case 19:
          return (E(F), null);
        case 4:
          return (be(), null);
        case 10:
          return (na(t.type), null);
        case 22:
        case 23:
          return (
            ho(t),
            so(),
            e !== null && E(wa),
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 24:
          return (na(pa), null);
        case 25:
          return null;
        default:
          return null;
      }
    }
    function Uc(e, t) {
      switch ((Bi(t), t.tag)) {
        case 3:
          (na(pa), be());
          break;
        case 26:
        case 27:
        case 5:
          Se(t);
          break;
        case 4:
          be();
          break;
        case 31:
          t.memoizedState !== null && ho(t);
          break;
        case 13:
          ho(t);
          break;
        case 19:
          E(F);
          break;
        case 10:
          na(t.type);
          break;
        case 22:
        case 23:
          (ho(t), so(), e !== null && E(wa));
          break;
        case 24:
          na(pa);
      }
    }
    function Wc(e, t) {
      try {
        var n = t.updateQueue,
          r = n === null ? null : n.lastEffect;
        if (r !== null) {
          var i = r.next;
          n = i;
          do {
            if ((n.tag & e) === e) {
              r = void 0;
              var a = n.create,
                o = n.inst;
              ((r = a()), (o.destroy = r));
            }
            n = n.next;
          } while (n !== i);
        }
      } catch (e) {
        X(t, t.return, e);
      }
    }
    function Gc(e, t, n) {
      try {
        var r = t.updateQueue,
          i = r === null ? null : r.lastEffect;
        if (i !== null) {
          var a = i.next;
          r = a;
          do {
            if ((r.tag & e) === e) {
              var o = r.inst,
                s = o.destroy;
              if (s !== void 0) {
                ((o.destroy = void 0), (i = t));
                var c = n,
                  l = s;
                try {
                  l();
                } catch (e) {
                  X(i, c, e);
                }
              }
            }
            r = r.next;
          } while (r !== a);
        }
      } catch (e) {
        X(t, t.return, e);
      }
    }
    function Kc(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var n = e.stateNode;
        try {
          no(t, n);
        } catch (t) {
          X(e, e.return, t);
        }
      }
    }
    function qc(e, t, n) {
      ((n.props = Xs(e.type, e.memoizedProps)), (n.state = e.memoizedState));
      try {
        n.componentWillUnmount();
      } catch (n) {
        X(e, t, n);
      }
    }
    function Jc(e, t) {
      try {
        var n = e.ref;
        if (n !== null) {
          switch (e.tag) {
            case 26:
            case 27:
            case 5:
              var r = e.stateNode;
              break;
            case 30:
              r = e.stateNode;
              break;
            default:
              r = e.stateNode;
          }
          typeof n == `function` ? (e.refCleanup = n(r)) : (n.current = r);
        }
      } catch (n) {
        X(e, t, n);
      }
    }
    function H(e, t) {
      var n = e.ref,
        r = e.refCleanup;
      if (n !== null)
        if (typeof r == `function`)
          try {
            r();
          } catch (n) {
            X(e, t, n);
          } finally {
            ((e.refCleanup = null), (e = e.alternate), e != null && (e.refCleanup = null));
          }
        else if (typeof n == `function`)
          try {
            n(null);
          } catch (n) {
            X(e, t, n);
          }
        else n.current = null;
    }
    function U(e) {
      var t = e.type,
        n = e.memoizedProps,
        r = e.stateNode;
      try {
        a: switch (t) {
          case `button`:
          case `input`:
          case `select`:
          case `textarea`:
            n.autoFocus && r.focus();
            break a;
          case `img`:
            n.src ? (r.src = n.src) : n.srcSet && (r.srcset = n.srcSet);
        }
      } catch (t) {
        X(e, e.return, t);
      }
    }
    function Yc(e, t, n) {
      try {
        var r = e.stateNode;
        (Fd(r, e.type, n, t), (r[_t] = t));
      } catch (t) {
        X(e, e.return, t);
      }
    }
    function Xc(e) {
      return (
        e.tag === 5 || e.tag === 3 || e.tag === 26 || (e.tag === 27 && Zd(e.type)) || e.tag === 4
      );
    }
    function Zc(e) {
      a: for (;;) {
        for (; e.sibling === null;) {
          if (e.return === null || Xc(e.return)) return null;
          e = e.return;
        }
        for (
          e.sibling.return = e.return, e = e.sibling;
          e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
        ) {
          if ((e.tag === 27 && Zd(e.type)) || e.flags & 2 || e.child === null || e.tag === 4)
            continue a;
          ((e.child.return = e), (e = e.child));
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function Qc(e, t, n) {
      var r = e.tag;
      if (r === 5 || r === 6)
        ((e = e.stateNode),
          t
            ? (n.nodeType === 9
                ? n.body
                : n.nodeName === `HTML`
                  ? n.ownerDocument.body
                  : n
              ).insertBefore(e, t)
            : ((t = n.nodeType === 9 ? n.body : n.nodeName === `HTML` ? n.ownerDocument.body : n),
              t.appendChild(e),
              (n = n._reactRootContainer),
              n != null || t.onclick !== null || (t.onclick = un)));
      else if (
        r !== 4 &&
        (r === 27 && Zd(e.type) && ((n = e.stateNode), (t = null)), (e = e.child), e !== null)
      )
        for (Qc(e, t, n), e = e.sibling; e !== null;) (Qc(e, t, n), (e = e.sibling));
    }
    function $c(e, t, n) {
      var r = e.tag;
      if (r === 5 || r === 6) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
      else if (r !== 4 && (r === 27 && Zd(e.type) && (n = e.stateNode), (e = e.child), e !== null))
        for ($c(e, t, n), e = e.sibling; e !== null;) ($c(e, t, n), (e = e.sibling));
    }
    function el(e) {
      var t = e.stateNode,
        n = e.memoizedProps;
      try {
        for (var r = e.type, i = t.attributes; i.length;) t.removeAttributeNode(i[0]);
        (Pd(t, r, n), (t[gt] = e), (t[_t] = n));
      } catch (t) {
        X(e, e.return, t);
      }
    }
    var tl = !1,
      nl = !1,
      rl = !1,
      il = typeof WeakSet == `function` ? WeakSet : Set,
      al = null;
    function ol(e, t) {
      if (((e = e.containerInfo), (Rd = sp), (e = Lr(e)), Rr(e))) {
        if (`selectionStart` in e) var n = { start: e.selectionStart, end: e.selectionEnd };
        else
          a: {
            n = ((n = e.ownerDocument) && n.defaultView) || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
              n = r.anchorNode;
              var a = r.anchorOffset,
                o = r.focusNode;
              r = r.focusOffset;
              try {
                (n.nodeType, o.nodeType);
              } catch {
                n = null;
                break a;
              }
              var s = 0,
                c = -1,
                l = -1,
                u = 0,
                d = 0,
                f = e,
                p = null;
              b: for (;;) {
                for (
                  var m;
                  f !== n || (a !== 0 && f.nodeType !== 3) || (c = s + a),
                    f !== o || (r !== 0 && f.nodeType !== 3) || (l = s + r),
                    f.nodeType === 3 && (s += f.nodeValue.length),
                    (m = f.firstChild) !== null;
                )
                  ((p = f), (f = m));
                for (;;) {
                  if (f === e) break b;
                  if (
                    (p === n && ++u === a && (c = s),
                    p === o && ++d === r && (l = s),
                    (m = f.nextSibling) !== null)
                  )
                    break;
                  ((f = p), (p = f.parentNode));
                }
                f = m;
              }
              n = c === -1 || l === -1 ? null : { start: c, end: l };
            } else n = null;
          }
        n ||= { start: 0, end: 0 };
      } else n = null;
      for (zd = { focusedElem: e, selectionRange: n }, sp = !1, al = t; al !== null;)
        if (((t = al), (e = t.child), t.subtreeFlags & 1028 && e !== null))
          ((e.return = t), (al = e));
        else
          for (; al !== null;) {
            switch (((t = al), (o = t.alternate), (e = t.flags), t.tag)) {
              case 0:
                if (e & 4 && ((e = t.updateQueue), (e = e === null ? null : e.events), e !== null))
                  for (n = 0; n < e.length; n++) ((a = e[n]), (a.ref.impl = a.nextImpl));
                break;
              case 11:
              case 15:
                break;
              case 1:
                if (e & 1024 && o !== null) {
                  ((e = void 0),
                    (n = t),
                    (a = o.memoizedProps),
                    (o = o.memoizedState),
                    (r = n.stateNode));
                  try {
                    var h = Xs(n.type, a);
                    ((e = r.getSnapshotBeforeUpdate(h, o)),
                      (r.__reactInternalSnapshotBeforeUpdate = e));
                  } catch (e) {
                    X(n, n.return, e);
                  }
                }
                break;
              case 3:
                if (e & 1024) {
                  if (((e = t.stateNode.containerInfo), (n = e.nodeType), n === 9)) ef(e);
                  else if (n === 1)
                    switch (e.nodeName) {
                      case `HEAD`:
                      case `HTML`:
                      case `BODY`:
                        ef(e);
                        break;
                      default:
                        e.textContent = ``;
                    }
                }
                break;
              case 5:
              case 26:
              case 27:
              case 6:
              case 4:
              case 17:
                break;
              default:
                if (e & 1024) throw Error(i(163));
            }
            if (((e = t.sibling), e !== null)) {
              ((e.return = t.return), (al = e));
              break;
            }
            al = t.return;
          }
    }
    function sl(e, t, n) {
      var r = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          (xl(e, n), r & 4 && Wc(5, n));
          break;
        case 1:
          if ((xl(e, n), r & 4))
            if (((e = n.stateNode), t === null))
              try {
                e.componentDidMount();
              } catch (e) {
                X(n, n.return, e);
              }
            else {
              var i = Xs(n.type, t.memoizedProps);
              t = t.memoizedState;
              try {
                e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate);
              } catch (e) {
                X(n, n.return, e);
              }
            }
          (r & 64 && Kc(n), r & 512 && Jc(n, n.return));
          break;
        case 3:
          if ((xl(e, n), r & 64 && ((e = n.updateQueue), e !== null))) {
            if (((t = null), n.child !== null))
              switch (n.child.tag) {
                case 27:
                case 5:
                  t = n.child.stateNode;
                  break;
                case 1:
                  t = n.child.stateNode;
              }
            try {
              no(e, t);
            } catch (e) {
              X(n, n.return, e);
            }
          }
          break;
        case 27:
          t === null && r & 4 && el(n);
        case 26:
        case 5:
          (xl(e, n), t === null && r & 4 && U(n), r & 512 && Jc(n, n.return));
          break;
        case 12:
          xl(e, n);
          break;
        case 31:
          (xl(e, n), r & 4 && fl(e, n));
          break;
        case 13:
          (xl(e, n),
            r & 4 && pl(e, n),
            r & 64 &&
              ((e = n.memoizedState),
              e !== null &&
                ((e = e.dehydrated), e !== null && ((n = Ju.bind(null, n)), sf(e, n)))));
          break;
        case 22:
          if (((r = n.memoizedState !== null || tl), !r)) {
            ((t = (t !== null && t.memoizedState !== null) || nl), (i = tl));
            var a = nl;
            ((tl = r),
              (nl = t) && !a ? Cl(e, n, !!(n.subtreeFlags & 8772)) : xl(e, n),
              (tl = i),
              (nl = a));
          }
          break;
        case 30:
          break;
        default:
          xl(e, n);
      }
    }
    function cl(e) {
      var t = e.alternate;
      (t !== null && ((e.alternate = null), cl(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 && ((t = e.stateNode), t !== null && Tt(t)),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null));
    }
    var W = null,
      ll = !1;
    function ul(e, t, n) {
      for (n = n.child; n !== null;) (dl(e, t, n), (n = n.sibling));
    }
    function dl(e, t, n) {
      if (Ge && typeof Ge.onCommitFiberUnmount == `function`)
        try {
          Ge.onCommitFiberUnmount(We, n);
        } catch {}
      switch (n.tag) {
        case 26:
          (nl || H(n, t),
            ul(e, t, n),
            n.memoizedState
              ? n.memoizedState.count--
              : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n)));
          break;
        case 27:
          nl || H(n, t);
          var r = W,
            i = ll;
          (Zd(n.type) && ((W = n.stateNode), (ll = !1)),
            ul(e, t, n),
            pf(n.stateNode),
            (W = r),
            (ll = i));
          break;
        case 5:
          nl || H(n, t);
        case 6:
          if (((r = W), (i = ll), (W = null), ul(e, t, n), (W = r), (ll = i), W !== null))
            if (ll)
              try {
                (W.nodeType === 9
                  ? W.body
                  : W.nodeName === `HTML`
                    ? W.ownerDocument.body
                    : W
                ).removeChild(n.stateNode);
              } catch (e) {
                X(n, t, e);
              }
            else
              try {
                W.removeChild(n.stateNode);
              } catch (e) {
                X(n, t, e);
              }
          break;
        case 18:
          W !== null &&
            (ll
              ? ((e = W),
                Qd(
                  e.nodeType === 9 ? e.body : e.nodeName === `HTML` ? e.ownerDocument.body : e,
                  n.stateNode,
                ),
                Np(e))
              : Qd(W, n.stateNode));
          break;
        case 4:
          ((r = W),
            (i = ll),
            (W = n.stateNode.containerInfo),
            (ll = !0),
            ul(e, t, n),
            (W = r),
            (ll = i));
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          (Gc(2, n, t), nl || Gc(4, n, t), ul(e, t, n));
          break;
        case 1:
          (nl ||
            (H(n, t),
            (r = n.stateNode),
            typeof r.componentWillUnmount == `function` && qc(n, t, r)),
            ul(e, t, n));
          break;
        case 21:
          ul(e, t, n);
          break;
        case 22:
          ((nl = (r = nl) || n.memoizedState !== null), ul(e, t, n), (nl = r));
          break;
        default:
          ul(e, t, n);
      }
    }
    function fl(e, t) {
      if (
        t.memoizedState === null &&
        ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
      ) {
        e = e.dehydrated;
        try {
          Np(e);
        } catch (e) {
          X(t, t.return, e);
        }
      }
    }
    function pl(e, t) {
      if (
        t.memoizedState === null &&
        ((e = t.alternate),
        e !== null && ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
      )
        try {
          Np(e);
        } catch (e) {
          X(t, t.return, e);
        }
    }
    function ml(e) {
      switch (e.tag) {
        case 31:
        case 13:
        case 19:
          var t = e.stateNode;
          return (t === null && (t = e.stateNode = new il()), t);
        case 22:
          return (
            (e = e.stateNode),
            (t = e._retryCache),
            t === null && (t = e._retryCache = new il()),
            t
          );
        default:
          throw Error(i(435, e.tag));
      }
    }
    function hl(e, t) {
      var n = ml(e);
      t.forEach(function (t) {
        if (!n.has(t)) {
          n.add(t);
          var r = Yu.bind(null, e, t);
          t.then(r, r);
        }
      });
    }
    function gl(e, t) {
      var n = t.deletions;
      if (n !== null)
        for (var r = 0; r < n.length; r++) {
          var a = n[r],
            o = e,
            s = t,
            c = s;
          a: for (; c !== null;) {
            switch (c.tag) {
              case 27:
                if (Zd(c.type)) {
                  ((W = c.stateNode), (ll = !1));
                  break a;
                }
                break;
              case 5:
                ((W = c.stateNode), (ll = !1));
                break a;
              case 3:
              case 4:
                ((W = c.stateNode.containerInfo), (ll = !0));
                break a;
            }
            c = c.return;
          }
          if (W === null) throw Error(i(160));
          (dl(o, s, a),
            (W = null),
            (ll = !1),
            (o = a.alternate),
            o !== null && (o.return = null),
            (a.return = null));
        }
      if (t.subtreeFlags & 13886) for (t = t.child; t !== null;) (vl(t, e), (t = t.sibling));
    }
    var _l = null;
    function vl(e, t) {
      var n = e.alternate,
        r = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (gl(t, e), yl(e), r & 4 && (Gc(3, e, e.return), Wc(3, e), Gc(5, e, e.return)));
          break;
        case 1:
          (gl(t, e),
            yl(e),
            r & 512 && (nl || n === null || H(n, n.return)),
            r & 64 &&
              tl &&
              ((e = e.updateQueue),
              e !== null &&
                ((r = e.callbacks),
                r !== null &&
                  ((n = e.shared.hiddenCallbacks),
                  (e.shared.hiddenCallbacks = n === null ? r : n.concat(r))))));
          break;
        case 26:
          var a = _l;
          if ((gl(t, e), yl(e), r & 512 && (nl || n === null || H(n, n.return)), r & 4)) {
            var o = n === null ? null : n.memoizedState;
            if (((r = e.memoizedState), n === null))
              if (r === null)
                if (e.stateNode === null) {
                  a: {
                    ((r = e.type), (n = e.memoizedProps), (a = a.ownerDocument || a));
                    b: switch (r) {
                      case `title`:
                        ((o = a.getElementsByTagName(`title`)[0]),
                          (!o ||
                            o[wt] ||
                            o[gt] ||
                            o.namespaceURI === `http://www.w3.org/2000/svg` ||
                            o.hasAttribute(`itemprop`)) &&
                            ((o = a.createElement(r)),
                            a.head.insertBefore(o, a.querySelector(`head > title`))),
                          Pd(o, r, n),
                          (o[gt] = e),
                          At(o),
                          (r = o));
                        break a;
                      case `link`:
                        var s = Vf(`link`, `href`, a).get(r + (n.href || ``));
                        if (s) {
                          for (var c = 0; c < s.length; c++)
                            if (
                              ((o = s[c]),
                              o.getAttribute(`href`) ===
                                (n.href == null || n.href === `` ? null : n.href) &&
                                o.getAttribute(`rel`) === (n.rel == null ? null : n.rel) &&
                                o.getAttribute(`title`) === (n.title == null ? null : n.title) &&
                                o.getAttribute(`crossorigin`) ===
                                  (n.crossOrigin == null ? null : n.crossOrigin))
                            ) {
                              s.splice(c, 1);
                              break b;
                            }
                        }
                        ((o = a.createElement(r)), Pd(o, r, n), a.head.appendChild(o));
                        break;
                      case `meta`:
                        if ((s = Vf(`meta`, `content`, a).get(r + (n.content || ``)))) {
                          for (c = 0; c < s.length; c++)
                            if (
                              ((o = s[c]),
                              o.getAttribute(`content`) ===
                                (n.content == null ? null : `` + n.content) &&
                                o.getAttribute(`name`) === (n.name == null ? null : n.name) &&
                                o.getAttribute(`property`) ===
                                  (n.property == null ? null : n.property) &&
                                o.getAttribute(`http-equiv`) ===
                                  (n.httpEquiv == null ? null : n.httpEquiv) &&
                                o.getAttribute(`charset`) ===
                                  (n.charSet == null ? null : n.charSet))
                            ) {
                              s.splice(c, 1);
                              break b;
                            }
                        }
                        ((o = a.createElement(r)), Pd(o, r, n), a.head.appendChild(o));
                        break;
                      default:
                        throw Error(i(468, r));
                    }
                    ((o[gt] = e), At(o), (r = o));
                  }
                  e.stateNode = r;
                } else Hf(a, e.type, e.stateNode);
              else e.stateNode = If(a, r, e.memoizedProps);
            else
              o === r
                ? r === null && e.stateNode !== null && Yc(e, e.memoizedProps, n.memoizedProps)
                : (o === null
                    ? n.stateNode !== null && ((n = n.stateNode), n.parentNode.removeChild(n))
                    : o.count--,
                  r === null ? Hf(a, e.type, e.stateNode) : If(a, r, e.memoizedProps));
          }
          break;
        case 27:
          (gl(t, e),
            yl(e),
            r & 512 && (nl || n === null || H(n, n.return)),
            n !== null && r & 4 && Yc(e, e.memoizedProps, n.memoizedProps));
          break;
        case 5:
          if ((gl(t, e), yl(e), r & 512 && (nl || n === null || H(n, n.return)), e.flags & 32)) {
            a = e.stateNode;
            try {
              nn(a, ``);
            } catch (t) {
              X(e, e.return, t);
            }
          }
          (r & 4 &&
            e.stateNode != null &&
            ((a = e.memoizedProps), Yc(e, a, n === null ? a : n.memoizedProps)),
            r & 1024 && (rl = !0));
          break;
        case 6:
          if ((gl(t, e), yl(e), r & 4)) {
            if (e.stateNode === null) throw Error(i(162));
            ((r = e.memoizedProps), (n = e.stateNode));
            try {
              n.nodeValue = r;
            } catch (t) {
              X(e, e.return, t);
            }
          }
          break;
        case 3:
          if (
            ((Bf = null),
            (a = _l),
            (_l = gf(t.containerInfo)),
            gl(t, e),
            (_l = a),
            yl(e),
            r & 4 && n !== null && n.memoizedState.isDehydrated)
          )
            try {
              Np(t.containerInfo);
            } catch (t) {
              X(e, e.return, t);
            }
          rl && ((rl = !1), bl(e));
          break;
        case 4:
          ((r = _l), (_l = gf(e.stateNode.containerInfo)), gl(t, e), yl(e), (_l = r));
          break;
        case 12:
          (gl(t, e), yl(e));
          break;
        case 31:
          (gl(t, e),
            yl(e),
            r & 4 && ((r = e.updateQueue), r !== null && ((e.updateQueue = null), hl(e, r))));
          break;
        case 13:
          (gl(t, e),
            yl(e),
            e.child.flags & 8192 &&
              (e.memoizedState !== null) != (n !== null && n.memoizedState !== null) &&
              (eu = Fe()),
            r & 4 && ((r = e.updateQueue), r !== null && ((e.updateQueue = null), hl(e, r))));
          break;
        case 22:
          a = e.memoizedState !== null;
          var l = n !== null && n.memoizedState !== null,
            u = tl,
            d = nl;
          if (((tl = u || a), (nl = d || l), gl(t, e), (nl = d), (tl = u), yl(e), r & 8192))
            a: for (
              t = e.stateNode,
                t._visibility = a ? t._visibility & -2 : t._visibility | 1,
                a && (n === null || l || tl || nl || Sl(e)),
                n = null,
                t = e;
              ;
            ) {
              if (t.tag === 5 || t.tag === 26) {
                if (n === null) {
                  l = n = t;
                  try {
                    if (((o = l.stateNode), a))
                      ((s = o.style),
                        typeof s.setProperty == `function`
                          ? s.setProperty(`display`, `none`, `important`)
                          : (s.display = `none`));
                    else {
                      c = l.stateNode;
                      var f = l.memoizedProps.style,
                        p = f != null && f.hasOwnProperty(`display`) ? f.display : null;
                      c.style.display = p == null || typeof p == `boolean` ? `` : (`` + p).trim();
                    }
                  } catch (e) {
                    X(l, l.return, e);
                  }
                }
              } else if (t.tag === 6) {
                if (n === null) {
                  l = t;
                  try {
                    l.stateNode.nodeValue = a ? `` : l.memoizedProps;
                  } catch (e) {
                    X(l, l.return, e);
                  }
                }
              } else if (t.tag === 18) {
                if (n === null) {
                  l = t;
                  try {
                    var m = l.stateNode;
                    a ? $d(m, !0) : $d(l.stateNode, !1);
                  } catch (e) {
                    X(l, l.return, e);
                  }
                }
              } else if (
                ((t.tag !== 22 && t.tag !== 23) || t.memoizedState === null || t === e) &&
                t.child !== null
              ) {
                ((t.child.return = t), (t = t.child));
                continue;
              }
              if (t === e) break a;
              for (; t.sibling === null;) {
                if (t.return === null || t.return === e) break a;
                (n === t && (n = null), (t = t.return));
              }
              (n === t && (n = null), (t.sibling.return = t.return), (t = t.sibling));
            }
          r & 4 &&
            ((r = e.updateQueue),
            r !== null && ((n = r.retryQueue), n !== null && ((r.retryQueue = null), hl(e, n))));
          break;
        case 19:
          (gl(t, e),
            yl(e),
            r & 4 && ((r = e.updateQueue), r !== null && ((e.updateQueue = null), hl(e, r))));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          (gl(t, e), yl(e));
      }
    }
    function yl(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          for (var n, r = e.return; r !== null;) {
            if (Xc(r)) {
              n = r;
              break;
            }
            r = r.return;
          }
          if (n == null) throw Error(i(160));
          switch (n.tag) {
            case 27:
              var a = n.stateNode;
              $c(e, Zc(e), a);
              break;
            case 5:
              var o = n.stateNode;
              (n.flags & 32 && (nn(o, ``), (n.flags &= -33)), $c(e, Zc(e), o));
              break;
            case 3:
            case 4:
              var s = n.stateNode.containerInfo;
              Qc(e, Zc(e), s);
              break;
            default:
              throw Error(i(161));
          }
        } catch (t) {
          X(e, e.return, t);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function bl(e) {
      if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null;) {
          var t = e;
          (bl(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), (e = e.sibling));
        }
    }
    function xl(e, t) {
      if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null;) (sl(e, t.alternate, t), (t = t.sibling));
    }
    function Sl(e) {
      for (e = e.child; e !== null;) {
        var t = e;
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            (Gc(4, t, t.return), Sl(t));
            break;
          case 1:
            H(t, t.return);
            var n = t.stateNode;
            (typeof n.componentWillUnmount == `function` && qc(t, t.return, n), Sl(t));
            break;
          case 27:
            pf(t.stateNode);
          case 26:
          case 5:
            (H(t, t.return), Sl(t));
            break;
          case 22:
            t.memoizedState === null && Sl(t);
            break;
          case 30:
            Sl(t);
            break;
          default:
            Sl(t);
        }
        e = e.sibling;
      }
    }
    function Cl(e, t, n) {
      for (n &&= !!(t.subtreeFlags & 8772), t = t.child; t !== null;) {
        var r = t.alternate,
          i = e,
          a = t,
          o = a.flags;
        switch (a.tag) {
          case 0:
          case 11:
          case 15:
            (Cl(i, a, n), Wc(4, a));
            break;
          case 1:
            if ((Cl(i, a, n), (r = a), (i = r.stateNode), typeof i.componentDidMount == `function`))
              try {
                i.componentDidMount();
              } catch (e) {
                X(r, r.return, e);
              }
            if (((r = a), (i = r.updateQueue), i !== null)) {
              var s = r.stateNode;
              try {
                var c = i.shared.hiddenCallbacks;
                if (c !== null)
                  for (i.shared.hiddenCallbacks = null, i = 0; i < c.length; i++) to(c[i], s);
              } catch (e) {
                X(r, r.return, e);
              }
            }
            (n && o & 64 && Kc(a), Jc(a, a.return));
            break;
          case 27:
            el(a);
          case 26:
          case 5:
            (Cl(i, a, n), n && r === null && o & 4 && U(a), Jc(a, a.return));
            break;
          case 12:
            Cl(i, a, n);
            break;
          case 31:
            (Cl(i, a, n), n && o & 4 && fl(i, a));
            break;
          case 13:
            (Cl(i, a, n), n && o & 4 && pl(i, a));
            break;
          case 22:
            (a.memoizedState === null && Cl(i, a, n), Jc(a, a.return));
            break;
          case 30:
            break;
          default:
            Cl(i, a, n);
        }
        t = t.sibling;
      }
    }
    function wl(e, t) {
      var n = null;
      (e !== null &&
        e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (n = e.memoizedState.cachePool.pool),
        (e = null),
        t.memoizedState !== null &&
          t.memoizedState.cachePool !== null &&
          (e = t.memoizedState.cachePool.pool),
        e !== n && (e != null && e.refCount++, n != null && ha(n)));
    }
    function Tl(e, t) {
      ((e = null),
        t.alternate !== null && (e = t.alternate.memoizedState.cache),
        (t = t.memoizedState.cache),
        t !== e && (t.refCount++, e != null && ha(e)));
    }
    function El(e, t, n, r) {
      if (t.subtreeFlags & 10256) for (t = t.child; t !== null;) (Dl(e, t, n, r), (t = t.sibling));
    }
    function Dl(e, t, n, r) {
      var i = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          (El(e, t, n, r), i & 2048 && Wc(9, t));
          break;
        case 1:
          El(e, t, n, r);
          break;
        case 3:
          (El(e, t, n, r),
            i & 2048 &&
              ((e = null),
              t.alternate !== null && (e = t.alternate.memoizedState.cache),
              (t = t.memoizedState.cache),
              t !== e && (t.refCount++, e != null && ha(e))));
          break;
        case 12:
          if (i & 2048) {
            (El(e, t, n, r), (e = t.stateNode));
            try {
              var a = t.memoizedProps,
                o = a.id,
                s = a.onPostCommit;
              typeof s == `function` &&
                s(o, t.alternate === null ? `mount` : `update`, e.passiveEffectDuration, -0);
            } catch (e) {
              X(t, t.return, e);
            }
          } else El(e, t, n, r);
          break;
        case 31:
          El(e, t, n, r);
          break;
        case 13:
          El(e, t, n, r);
          break;
        case 23:
          break;
        case 22:
          ((a = t.stateNode),
            (o = t.alternate),
            t.memoizedState === null
              ? a._visibility & 2
                ? El(e, t, n, r)
                : ((a._visibility |= 2), Ol(e, t, n, r, !!(t.subtreeFlags & 10256) || !1))
              : a._visibility & 2
                ? El(e, t, n, r)
                : kl(e, t),
            i & 2048 && wl(o, t));
          break;
        case 24:
          (El(e, t, n, r), i & 2048 && Tl(t.alternate, t));
          break;
        default:
          El(e, t, n, r);
      }
    }
    function Ol(e, t, n, r, i) {
      for (i &&= !!(t.subtreeFlags & 10256) || !1, t = t.child; t !== null;) {
        var a = e,
          o = t,
          s = n,
          c = r,
          l = o.flags;
        switch (o.tag) {
          case 0:
          case 11:
          case 15:
            (Ol(a, o, s, c, i), Wc(8, o));
            break;
          case 23:
            break;
          case 22:
            var u = o.stateNode;
            (o.memoizedState === null
              ? ((u._visibility |= 2), Ol(a, o, s, c, i))
              : u._visibility & 2
                ? Ol(a, o, s, c, i)
                : kl(a, o),
              i && l & 2048 && wl(o.alternate, o));
            break;
          case 24:
            (Ol(a, o, s, c, i), i && l & 2048 && Tl(o.alternate, o));
            break;
          default:
            Ol(a, o, s, c, i);
        }
        t = t.sibling;
      }
    }
    function kl(e, t) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null;) {
          var n = e,
            r = t,
            i = r.flags;
          switch (r.tag) {
            case 22:
              (kl(n, r), i & 2048 && wl(r.alternate, r));
              break;
            case 24:
              (kl(n, r), i & 2048 && Tl(r.alternate, r));
              break;
            default:
              kl(n, r);
          }
          t = t.sibling;
        }
    }
    var Al = 8192;
    function jl(e, t, n) {
      if (e.subtreeFlags & Al) for (e = e.child; e !== null;) (Ml(e, t, n), (e = e.sibling));
    }
    function Ml(e, t, n) {
      switch (e.tag) {
        case 26:
          (jl(e, t, n),
            e.flags & Al &&
              e.memoizedState !== null &&
              Gf(n, _l, e.memoizedState, e.memoizedProps));
          break;
        case 5:
          jl(e, t, n);
          break;
        case 3:
        case 4:
          var r = _l;
          ((_l = gf(e.stateNode.containerInfo)), jl(e, t, n), (_l = r));
          break;
        case 22:
          e.memoizedState === null &&
            ((r = e.alternate),
            r !== null && r.memoizedState !== null
              ? ((r = Al), (Al = 16777216), jl(e, t, n), (Al = r))
              : jl(e, t, n));
          break;
        default:
          jl(e, t, n);
      }
    }
    function Nl(e) {
      var t = e.alternate;
      if (t !== null && ((e = t.child), e !== null)) {
        t.child = null;
        do ((t = e.sibling), (e.sibling = null), (e = t));
        while (e !== null);
      }
    }
    function Pl(e) {
      var t = e.deletions;
      if (e.flags & 16) {
        if (t !== null)
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            ((al = r), Ll(r, e));
          }
        Nl(e);
      }
      if (e.subtreeFlags & 10256) for (e = e.child; e !== null;) (Fl(e), (e = e.sibling));
    }
    function Fl(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          (Pl(e), e.flags & 2048 && Gc(9, e, e.return));
          break;
        case 3:
          Pl(e);
          break;
        case 12:
          Pl(e);
          break;
        case 22:
          var t = e.stateNode;
          e.memoizedState !== null &&
          t._visibility & 2 &&
          (e.return === null || e.return.tag !== 13)
            ? ((t._visibility &= -3), Il(e))
            : Pl(e);
          break;
        default:
          Pl(e);
      }
    }
    function Il(e) {
      var t = e.deletions;
      if (e.flags & 16) {
        if (t !== null)
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            ((al = r), Ll(r, e));
          }
        Nl(e);
      }
      for (e = e.child; e !== null;) {
        switch (((t = e), t.tag)) {
          case 0:
          case 11:
          case 15:
            (Gc(8, t, t.return), Il(t));
            break;
          case 22:
            ((n = t.stateNode), n._visibility & 2 && ((n._visibility &= -3), Il(t)));
            break;
          default:
            Il(t);
        }
        e = e.sibling;
      }
    }
    function Ll(e, t) {
      for (; al !== null;) {
        var n = al;
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            Gc(8, n, t);
            break;
          case 23:
          case 22:
            if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
              var r = n.memoizedState.cachePool.pool;
              r != null && r.refCount++;
            }
            break;
          case 24:
            ha(n.memoizedState.cache);
        }
        if (((r = n.child), r !== null)) ((r.return = n), (al = r));
        else
          a: for (n = e; al !== null;) {
            r = al;
            var i = r.sibling,
              a = r.return;
            if ((cl(r), r === n)) {
              al = null;
              break a;
            }
            if (i !== null) {
              ((i.return = a), (al = i));
              break a;
            }
            al = a;
          }
      }
    }
    var Rl = {
        getCacheForType: function (e) {
          var t = sa(pa),
            n = t.data.get(e);
          return (n === void 0 && ((n = e()), t.data.set(e, n)), n);
        },
        cacheSignal: function () {
          return sa(pa).controller.signal;
        },
      },
      zl = typeof WeakMap == `function` ? WeakMap : Map,
      G = 0,
      K = null,
      q = null,
      J = 0,
      Y = 0,
      Bl = null,
      Vl = !1,
      Hl = !1,
      Ul = !1,
      Wl = 0,
      Gl = 0,
      Kl = 0,
      ql = 0,
      Jl = 0,
      Yl = 0,
      Xl = 0,
      Zl = null,
      Ql = null,
      $l = !1,
      eu = 0,
      tu = 0,
      nu = 1 / 0,
      ru = null,
      iu = null,
      au = 0,
      ou = null,
      su = null,
      cu = 0,
      lu = 0,
      uu = null,
      du = null,
      fu = 0,
      pu = null;
    function mu() {
      return G & 2 && J !== 0 ? J & -J : w.T === null ? pt() : dd();
    }
    function hu() {
      if (Yl === 0)
        if (!(J & 536870912) || M) {
          var e = Qe;
          ((Qe <<= 1), !(Qe & 3932160) && (Qe = 262144), (Yl = e));
        } else Yl = 536870912;
      return ((e = co.current), e !== null && (e.flags |= 32), Yl);
    }
    function gu(e, t, n) {
      (((e === K && (Y === 2 || Y === 9)) || e.cancelPendingCommit !== null) &&
        (Cu(e, 0), bu(e, J, Yl, !1)),
        ot(e, n),
        (!(G & 2) || e !== K) &&
          (e === K && (!(G & 2) && (ql |= n), Gl === 4 && bu(e, J, Yl, !1)), rd(e)));
    }
    function _u(e, t, n) {
      if (G & 6) throw Error(i(327));
      var r = (!n && !(t & 127) && (t & e.expiredLanes) === 0) || nt(e, t),
        a = r ? ju(e, t) : ku(e, t, !0),
        o = r;
      do {
        if (a === 0) {
          Hl && !r && bu(e, t, 0, !1);
          break;
        }
        if (((n = e.current.alternate), o && !yu(n))) {
          ((a = ku(e, t, !1)), (o = !1));
          continue;
        }
        if (a === 2) {
          if (((o = t), e.errorRecoveryDisabledLanes & o)) var s = 0;
          else
            ((s = e.pendingLanes & -536870913),
              (s = s === 0 ? (s & 536870912 ? 536870912 : 0) : s));
          if (s !== 0) {
            t = s;
            a: {
              var c = e;
              a = Zl;
              var l = c.current.memoizedState.isDehydrated;
              if ((l && (Cu(c, s).flags |= 256), (s = ku(c, s, !1)), s !== 2)) {
                if (Ul && !l) {
                  ((c.errorRecoveryDisabledLanes |= o), (ql |= o), (a = 4));
                  break a;
                }
                ((o = Ql), (Ql = a), o !== null && (Ql === null ? (Ql = o) : Ql.push.apply(Ql, o)));
              }
              a = s;
            }
            if (((o = !1), a !== 2)) continue;
          }
        }
        if (a === 1) {
          (Cu(e, 0), bu(e, t, 0, !0));
          break;
        }
        a: {
          switch (((r = e), (o = a), o)) {
            case 0:
            case 1:
              throw Error(i(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              bu(r, t, Yl, !Vl);
              break a;
            case 2:
              Ql = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(i(329));
          }
          if ((t & 62914560) === t && ((a = eu + 300 - Fe()), 10 < a)) {
            if ((bu(r, t, Yl, !Vl), tt(r, 0, !0) !== 0)) break a;
            ((cu = t),
              (r.timeoutHandle = Kd(
                vu.bind(null, r, n, Ql, ru, $l, t, Yl, ql, Xl, Vl, o, `Throttled`, -0, 0),
                a,
              )));
            break a;
          }
          vu(r, n, Ql, ru, $l, t, Yl, ql, Xl, Vl, o, null, -0, 0);
        }
        break;
      } while (1);
      rd(e);
    }
    function vu(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
      if (((e.timeoutHandle = -1), (d = t.subtreeFlags), d & 8192 || (d & 16785408) == 16785408)) {
        ((d = {
          stylesheets: null,
          count: 0,
          imgCount: 0,
          imgBytes: 0,
          suspenseyImages: [],
          waitingForImages: !0,
          waitingForViewTransition: !1,
          unsuspend: un,
        }),
          Ml(t, a, d));
        var m = (a & 62914560) === a ? eu - Fe() : (a & 4194048) === a ? tu - Fe() : 0;
        if (((m = qf(d, m)), m !== null)) {
          ((cu = a),
            (e.cancelPendingCommit = m(Ru.bind(null, e, t, a, n, r, i, o, s, c, u, d, null, f, p))),
            bu(e, a, o, !l));
          return;
        }
      }
      Ru(e, t, a, n, r, i, o, s, c);
    }
    function yu(e) {
      for (var t = e; ;) {
        var n = t.tag;
        if (
          (n === 0 || n === 11 || n === 15) &&
          t.flags & 16384 &&
          ((n = t.updateQueue), n !== null && ((n = n.stores), n !== null))
        )
          for (var r = 0; r < n.length; r++) {
            var i = n[r],
              a = i.getSnapshot;
            i = i.value;
            try {
              if (!Mr(a(), i)) return !1;
            } catch {
              return !1;
            }
          }
        if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) ((n.return = t), (t = n));
        else {
          if (t === e) break;
          for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return !0;
            t = t.return;
          }
          ((t.sibling.return = t.return), (t = t.sibling));
        }
      }
      return !0;
    }
    function bu(e, t, n, r) {
      ((t &= ~Jl),
        (t &= ~ql),
        (e.suspendedLanes |= t),
        (e.pingedLanes &= ~t),
        r && (e.warmLanes |= t),
        (r = e.expirationTimes));
      for (var i = t; 0 < i;) {
        var a = 31 - qe(i),
          o = 1 << a;
        ((r[a] = -1), (i &= ~o));
      }
      n !== 0 && ct(e, n, t);
    }
    function xu() {
      return G & 6 ? !0 : (id(0, !1), !1);
    }
    function Su() {
      if (q !== null) {
        if (Y === 0) var e = q.return;
        else ((e = q), (ea = $i = null), No(e), (Ra = null), (za = 0), (e = q));
        for (; e !== null;) (Uc(e.alternate, e), (e = e.return));
        q = null;
      }
    }
    function Cu(e, t) {
      var n = e.timeoutHandle;
      (n !== -1 && ((e.timeoutHandle = -1), qd(n)),
        (n = e.cancelPendingCommit),
        n !== null && ((e.cancelPendingCommit = null), n()),
        (cu = 0),
        Su(),
        (K = e),
        (q = n = yi(e.current, null)),
        (J = t),
        (Y = 0),
        (Bl = null),
        (Vl = !1),
        (Hl = nt(e, t)),
        (Ul = !1),
        (Xl = Yl = Jl = ql = Kl = Gl = 0),
        (Ql = Zl = null),
        ($l = !1),
        t & 8 && (t |= t & 32));
      var r = e.entangledLanes;
      if (r !== 0)
        for (e = e.entanglements, r &= t; 0 < r;) {
          var i = 31 - qe(r),
            a = 1 << i;
          ((t |= e[i]), (r &= ~a));
        }
      return ((Wl = t), li(), n);
    }
    function wu(e, t) {
      ((I = null),
        (w.H = Hs),
        t === Oa || t === Aa
          ? ((t = Ia()), (Y = 3))
          : t === ka
            ? ((t = Ia()), (Y = 4))
            : (Y = t === oc ? 8 : typeof t == `object` && t && typeof t.then == `function` ? 6 : 1),
        (Bl = t),
        q === null && ((Gl = 1), ec(e, Di(t, e.current))));
    }
    function Tu() {
      var e = co.current;
      return e === null
        ? !0
        : (J & 4194048) === J
          ? lo === null
          : (J & 62914560) === J || J & 536870912
            ? e === lo
            : !1;
    }
    function Eu() {
      var e = w.H;
      return ((w.H = Hs), e === null ? Hs : e);
    }
    function Du() {
      var e = w.A;
      return ((w.A = Rl), e);
    }
    function Ou() {
      ((Gl = 4),
        Vl || ((J & 4194048) !== J && co.current !== null) || (Hl = !0),
        (!(Kl & 134217727) && !(ql & 134217727)) || K === null || bu(K, J, Yl, !1));
    }
    function ku(e, t, n) {
      var r = G;
      G |= 2;
      var i = Eu(),
        a = Du();
      ((K !== e || J !== t) && ((ru = null), Cu(e, t)), (t = !1));
      var o = Gl;
      a: do
        try {
          if (Y !== 0 && q !== null) {
            var s = q,
              c = Bl;
            switch (Y) {
              case 8:
                (Su(), (o = 6));
                break a;
              case 3:
              case 2:
              case 9:
              case 6:
                co.current === null && (t = !0);
                var l = Y;
                if (((Y = 0), (Bl = null), Fu(e, s, c, l), n && Hl)) {
                  o = 0;
                  break a;
                }
                break;
              default:
                ((l = Y), (Y = 0), (Bl = null), Fu(e, s, c, l));
            }
          }
          (Au(), (o = Gl));
          break;
        } catch (t) {
          wu(e, t);
        }
      while (1);
      return (
        t && e.shellSuspendCounter++,
        (ea = $i = null),
        (G = r),
        (w.H = i),
        (w.A = a),
        q === null && ((K = null), (J = 0), li()),
        o
      );
    }
    function Au() {
      for (; q !== null;) Nu(q);
    }
    function ju(e, t) {
      var n = G;
      G |= 2;
      var r = Eu(),
        a = Du();
      K !== e || J !== t ? ((ru = null), (nu = Fe() + 500), Cu(e, t)) : (Hl = nt(e, t));
      a: do
        try {
          if (Y !== 0 && q !== null) {
            t = q;
            var o = Bl;
            b: switch (Y) {
              case 1:
                ((Y = 0), (Bl = null), Fu(e, t, o, 1));
                break;
              case 2:
              case 9:
                if (Ma(o)) {
                  ((Y = 0), (Bl = null), Pu(t));
                  break;
                }
                ((t = function () {
                  ((Y !== 2 && Y !== 9) || K !== e || (Y = 7), rd(e));
                }),
                  o.then(t, t));
                break a;
              case 3:
                Y = 7;
                break a;
              case 4:
                Y = 5;
                break a;
              case 7:
                Ma(o) ? ((Y = 0), (Bl = null), Pu(t)) : ((Y = 0), (Bl = null), Fu(e, t, o, 7));
                break;
              case 5:
                var s = null;
                switch (q.tag) {
                  case 26:
                    s = q.memoizedState;
                  case 5:
                  case 27:
                    var c = q;
                    if (s ? Wf(s) : c.stateNode.complete) {
                      ((Y = 0), (Bl = null));
                      var l = c.sibling;
                      if (l !== null) q = l;
                      else {
                        var u = c.return;
                        u === null ? (q = null) : ((q = u), Iu(u));
                      }
                      break b;
                    }
                }
                ((Y = 0), (Bl = null), Fu(e, t, o, 5));
                break;
              case 6:
                ((Y = 0), (Bl = null), Fu(e, t, o, 6));
                break;
              case 8:
                (Su(), (Gl = 6));
                break a;
              default:
                throw Error(i(462));
            }
          }
          Mu();
          break;
        } catch (t) {
          wu(e, t);
        }
      while (1);
      return (
        (ea = $i = null),
        (w.H = r),
        (w.A = a),
        (G = n),
        q === null ? ((K = null), (J = 0), li(), Gl) : 0
      );
    }
    function Mu() {
      for (; q !== null && !Ne();) Nu(q);
    }
    function Nu(e) {
      var t = Fc(e.alternate, e, Wl);
      ((e.memoizedProps = e.pendingProps), t === null ? Iu(e) : (q = t));
    }
    function Pu(e) {
      var t = e,
        n = t.alternate;
      switch (t.tag) {
        case 15:
        case 0:
          t = yc(n, t, t.pendingProps, t.type, void 0, J);
          break;
        case 11:
          t = yc(n, t, t.pendingProps, t.type.render, t.ref, J);
          break;
        case 5:
          No(t);
        default:
          (Uc(n, t), (t = q = bi(t, Wl)), (t = Fc(n, t, Wl)));
      }
      ((e.memoizedProps = e.pendingProps), t === null ? Iu(e) : (q = t));
    }
    function Fu(e, t, n, r) {
      ((ea = $i = null), No(t), (Ra = null), (za = 0));
      var i = t.return;
      try {
        if (ac(e, i, t, n, J)) {
          ((Gl = 1), ec(e, Di(n, e.current)), (q = null));
          return;
        }
      } catch (t) {
        if (i !== null) throw ((q = i), t);
        ((Gl = 1), ec(e, Di(n, e.current)), (q = null));
        return;
      }
      t.flags & 32768
        ? (M || r === 1
            ? (e = !0)
            : Hl || J & 536870912
              ? (e = !1)
              : ((Vl = e = !0),
                (r === 2 || r === 9 || r === 3 || r === 6) &&
                  ((r = co.current), r !== null && r.tag === 13 && (r.flags |= 16384))),
          Lu(t, e))
        : Iu(t);
    }
    function Iu(e) {
      var t = e;
      do {
        if (t.flags & 32768) {
          Lu(t, Vl);
          return;
        }
        e = t.return;
        var n = Vc(t.alternate, t, Wl);
        if (n !== null) {
          q = n;
          return;
        }
        if (((t = t.sibling), t !== null)) {
          q = t;
          return;
        }
        q = t = e;
      } while (t !== null);
      Gl === 0 && (Gl = 5);
    }
    function Lu(e, t) {
      do {
        var n = Hc(e.alternate, e);
        if (n !== null) {
          ((n.flags &= 32767), (q = n));
          return;
        }
        if (
          ((n = e.return),
          n !== null && ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
          !t && ((e = e.sibling), e !== null))
        ) {
          q = e;
          return;
        }
        q = e = n;
      } while (e !== null);
      ((Gl = 6), (q = null));
    }
    function Ru(e, t, n, r, a, o, s, c, l) {
      e.cancelPendingCommit = null;
      do Uu();
      while (au !== 0);
      if (G & 6) throw Error(i(327));
      if (t !== null) {
        if (t === e.current) throw Error(i(177));
        if (
          ((o = t.lanes | t.childLanes),
          (o |= ci),
          st(e, n, o, s, c, l),
          e === K && ((q = K = null), (J = 0)),
          (su = t),
          (ou = e),
          (cu = n),
          (lu = o),
          (uu = a),
          (du = r),
          t.subtreeFlags & 10256 || t.flags & 10256
            ? ((e.callbackNode = null),
              (e.callbackPriority = 0),
              Xu(ze, function () {
                return (Wu(), null);
              }))
            : ((e.callbackNode = null), (e.callbackPriority = 0)),
          (r = !!(t.flags & 13878)),
          t.subtreeFlags & 13878 || r)
        ) {
          ((r = w.T), (w.T = null), (a = T.p), (T.p = 2), (s = G), (G |= 4));
          try {
            ol(e, t, n);
          } finally {
            ((G = s), (T.p = a), (w.T = r));
          }
        }
        ((au = 1), zu(), Bu(), Vu());
      }
    }
    function zu() {
      if (au === 1) {
        au = 0;
        var e = ou,
          t = su,
          n = !!(t.flags & 13878);
        if (t.subtreeFlags & 13878 || n) {
          ((n = w.T), (w.T = null));
          var r = T.p;
          T.p = 2;
          var i = G;
          G |= 4;
          try {
            vl(t, e);
            var a = zd,
              o = Lr(e.containerInfo),
              s = a.focusedElem,
              c = a.selectionRange;
            if (o !== s && s && s.ownerDocument && Ir(s.ownerDocument.documentElement, s)) {
              if (c !== null && Rr(s)) {
                var l = c.start,
                  u = c.end;
                if ((u === void 0 && (u = l), `selectionStart` in s))
                  ((s.selectionStart = l), (s.selectionEnd = Math.min(u, s.value.length)));
                else {
                  var d = s.ownerDocument || document,
                    f = (d && d.defaultView) || window;
                  if (f.getSelection) {
                    var p = f.getSelection(),
                      m = s.textContent.length,
                      h = Math.min(c.start, m),
                      g = c.end === void 0 ? h : Math.min(c.end, m);
                    !p.extend && h > g && ((o = g), (g = h), (h = o));
                    var _ = Fr(s, h),
                      v = Fr(s, g);
                    if (
                      _ &&
                      v &&
                      (p.rangeCount !== 1 ||
                        p.anchorNode !== _.node ||
                        p.anchorOffset !== _.offset ||
                        p.focusNode !== v.node ||
                        p.focusOffset !== v.offset)
                    ) {
                      var y = d.createRange();
                      (y.setStart(_.node, _.offset),
                        p.removeAllRanges(),
                        h > g
                          ? (p.addRange(y), p.extend(v.node, v.offset))
                          : (y.setEnd(v.node, v.offset), p.addRange(y)));
                    }
                  }
                }
              }
              for (d = [], p = s; (p = p.parentNode);)
                p.nodeType === 1 && d.push({ element: p, left: p.scrollLeft, top: p.scrollTop });
              for (typeof s.focus == `function` && s.focus(), s = 0; s < d.length; s++) {
                var b = d[s];
                ((b.element.scrollLeft = b.left), (b.element.scrollTop = b.top));
              }
            }
            ((sp = !!Rd), (zd = Rd = null));
          } finally {
            ((G = i), (T.p = r), (w.T = n));
          }
        }
        ((e.current = t), (au = 2));
      }
    }
    function Bu() {
      if (au === 2) {
        au = 0;
        var e = ou,
          t = su,
          n = !!(t.flags & 8772);
        if (t.subtreeFlags & 8772 || n) {
          ((n = w.T), (w.T = null));
          var r = T.p;
          T.p = 2;
          var i = G;
          G |= 4;
          try {
            sl(e, t.alternate, t);
          } finally {
            ((G = i), (T.p = r), (w.T = n));
          }
        }
        au = 3;
      }
    }
    function Vu() {
      if (au === 4 || au === 3) {
        ((au = 0), Pe());
        var e = ou,
          t = su,
          n = cu,
          r = du;
        t.subtreeFlags & 10256 || t.flags & 10256
          ? (au = 5)
          : ((au = 0), (su = ou = null), Hu(e, e.pendingLanes));
        var i = e.pendingLanes;
        if (
          (i === 0 && (iu = null),
          ft(n),
          (t = t.stateNode),
          Ge && typeof Ge.onCommitFiberRoot == `function`)
        )
          try {
            Ge.onCommitFiberRoot(We, t, void 0, (t.current.flags & 128) == 128);
          } catch {}
        if (r !== null) {
          ((t = w.T), (i = T.p), (T.p = 2), (w.T = null));
          try {
            for (var a = e.onRecoverableError, o = 0; o < r.length; o++) {
              var s = r[o];
              a(s.value, { componentStack: s.stack });
            }
          } finally {
            ((w.T = t), (T.p = i));
          }
        }
        (cu & 3 && Uu(),
          rd(e),
          (i = e.pendingLanes),
          n & 261930 && i & 42 ? (e === pu ? fu++ : ((fu = 0), (pu = e))) : (fu = 0),
          id(0, !1));
      }
    }
    function Hu(e, t) {
      (e.pooledCacheLanes &= t) === 0 &&
        ((t = e.pooledCache), t != null && ((e.pooledCache = null), ha(t)));
    }
    function Uu() {
      return (zu(), Bu(), Vu(), Wu());
    }
    function Wu() {
      if (au !== 5) return !1;
      var e = ou,
        t = lu;
      lu = 0;
      var n = ft(cu),
        r = w.T,
        a = T.p;
      try {
        ((T.p = 32 > n ? 32 : n), (w.T = null), (n = uu), (uu = null));
        var o = ou,
          s = cu;
        if (((au = 0), (su = ou = null), (cu = 0), G & 6)) throw Error(i(331));
        var c = G;
        if (
          ((G |= 4),
          Fl(o.current),
          Dl(o, o.current, s, n),
          (G = c),
          id(0, !1),
          Ge && typeof Ge.onPostCommitFiberRoot == `function`)
        )
          try {
            Ge.onPostCommitFiberRoot(We, o);
          } catch {}
        return !0;
      } finally {
        ((T.p = a), (w.T = r), Hu(e, t));
      }
    }
    function Gu(e, t, n) {
      ((t = Di(n, t)),
        (t = nc(e.stateNode, t, 2)),
        (e = Ya(e, t, 2)),
        e !== null && (ot(e, 2), rd(e)));
    }
    function X(e, t, n) {
      if (e.tag === 3) Gu(e, e, n);
      else
        for (; t !== null;) {
          if (t.tag === 3) {
            Gu(t, e, n);
            break;
          }
          if (t.tag === 1) {
            var r = t.stateNode;
            if (
              typeof t.type.getDerivedStateFromError == `function` ||
              (typeof r.componentDidCatch == `function` && (iu === null || !iu.has(r)))
            ) {
              ((e = Di(n, e)),
                (n = rc(2)),
                (r = Ya(t, n, 2)),
                r !== null && (ic(n, r, t, e), ot(r, 2), rd(r)));
              break;
            }
          }
          t = t.return;
        }
    }
    function Z(e, t, n) {
      var r = e.pingCache;
      if (r === null) {
        r = e.pingCache = new zl();
        var i = new Set();
        r.set(t, i);
      } else ((i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i)));
      i.has(n) || ((Ul = !0), i.add(n), (e = Ku.bind(null, e, t, n)), t.then(e, e));
    }
    function Ku(e, t, n) {
      var r = e.pingCache;
      (r !== null && r.delete(t),
        (e.pingedLanes |= e.suspendedLanes & n),
        (e.warmLanes &= ~n),
        K === e &&
          (J & n) === n &&
          (Gl === 4 || (Gl === 3 && (J & 62914560) === J && 300 > Fe() - eu)
            ? !(G & 2) && Cu(e, 0)
            : (Jl |= n),
          Xl === J && (Xl = 0)),
        rd(e));
    }
    function qu(e, t) {
      (t === 0 && (t = it()), (e = fi(e, t)), e !== null && (ot(e, t), rd(e)));
    }
    function Ju(e) {
      var t = e.memoizedState,
        n = 0;
      (t !== null && (n = t.retryLane), qu(e, n));
    }
    function Yu(e, t) {
      var n = 0;
      switch (e.tag) {
        case 31:
        case 13:
          var r = e.stateNode,
            a = e.memoizedState;
          a !== null && (n = a.retryLane);
          break;
        case 19:
          r = e.stateNode;
          break;
        case 22:
          r = e.stateNode._retryCache;
          break;
        default:
          throw Error(i(314));
      }
      (r !== null && r.delete(t), qu(e, n));
    }
    function Xu(e, t) {
      return je(e, t);
    }
    var Zu = null,
      Qu = null,
      $u = !1,
      ed = !1,
      td = !1,
      nd = 0;
    function rd(e) {
      (e !== Qu && e.next === null && (Qu === null ? (Zu = Qu = e) : (Qu = Qu.next = e)),
        (ed = !0),
        $u || (($u = !0), ud()));
    }
    function id(e, t) {
      if (!td && ed) {
        td = !0;
        do
          for (var n = !1, r = Zu; r !== null;) {
            if (!t)
              if (e !== 0) {
                var i = r.pendingLanes;
                if (i === 0) var a = 0;
                else {
                  var o = r.suspendedLanes,
                    s = r.pingedLanes;
                  ((a = (1 << (31 - qe(42 | e) + 1)) - 1),
                    (a &= i & ~(o & ~s)),
                    (a = a & 201326741 ? (a & 201326741) | 1 : a ? a | 2 : 0));
                }
                a !== 0 && ((n = !0), ld(r, a));
              } else
                ((a = J),
                  (a = tt(
                    r,
                    r === K ? a : 0,
                    r.cancelPendingCommit !== null || r.timeoutHandle !== -1,
                  )),
                  !(a & 3) || nt(r, a) || ((n = !0), ld(r, a)));
            r = r.next;
          }
        while (n);
        td = !1;
      }
    }
    function ad() {
      od();
    }
    function od() {
      ed = $u = !1;
      var e = 0;
      nd !== 0 && Gd() && (e = nd);
      for (var t = Fe(), n = null, r = Zu; r !== null;) {
        var i = r.next,
          a = sd(r, t);
        (a === 0
          ? ((r.next = null), n === null ? (Zu = i) : (n.next = i), i === null && (Qu = n))
          : ((n = r), (e !== 0 || a & 3) && (ed = !0)),
          (r = i));
      }
      ((au !== 0 && au !== 5) || id(e, !1), nd !== 0 && (nd = 0));
    }
    function sd(e, t) {
      for (
        var n = e.suspendedLanes,
          r = e.pingedLanes,
          i = e.expirationTimes,
          a = e.pendingLanes & -62914561;
        0 < a;
      ) {
        var o = 31 - qe(a),
          s = 1 << o,
          c = i[o];
        (c === -1
          ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = rt(s, t))
          : c <= t && (e.expiredLanes |= s),
          (a &= ~s));
      }
      if (
        ((t = K),
        (n = J),
        (n = tt(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
        (r = e.callbackNode),
        n === 0 || (e === t && (Y === 2 || Y === 9)) || e.cancelPendingCommit !== null)
      )
        return (
          r !== null && r !== null && Me(r),
          (e.callbackNode = null),
          (e.callbackPriority = 0)
        );
      if (!(n & 3) || nt(e, n)) {
        if (((t = n & -n), t === e.callbackPriority)) return t;
        switch ((r !== null && Me(r), ft(n))) {
          case 2:
          case 8:
            n = Re;
            break;
          case 32:
            n = ze;
            break;
          case 268435456:
            n = Ve;
            break;
          default:
            n = ze;
        }
        return (
          (r = cd.bind(null, e)),
          (n = je(n, r)),
          (e.callbackPriority = t),
          (e.callbackNode = n),
          t
        );
      }
      return (
        r !== null && r !== null && Me(r),
        (e.callbackPriority = 2),
        (e.callbackNode = null),
        2
      );
    }
    function cd(e, t) {
      if (au !== 0 && au !== 5) return ((e.callbackNode = null), (e.callbackPriority = 0), null);
      var n = e.callbackNode;
      if (Uu() && e.callbackNode !== n) return null;
      var r = J;
      return (
        (r = tt(e, e === K ? r : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
        r === 0
          ? null
          : (_u(e, r, t),
            sd(e, Fe()),
            e.callbackNode != null && e.callbackNode === n ? cd.bind(null, e) : null)
      );
    }
    function ld(e, t) {
      if (Uu()) return null;
      _u(e, t, !0);
    }
    function ud() {
      Yd(function () {
        G & 6 ? je(Le, ad) : od();
      });
    }
    function dd() {
      if (nd === 0) {
        var e = va;
        (e === 0 && ((e = Ze), (Ze <<= 1), !(Ze & 261888) && (Ze = 256)), (nd = e));
      }
      return nd;
    }
    function fd(e) {
      return e == null || typeof e == `symbol` || typeof e == `boolean`
        ? null
        : typeof e == `function`
          ? e
          : O(`` + e);
    }
    function pd(e, t) {
      var n = t.ownerDocument.createElement(`input`);
      return (
        (n.name = t.name),
        (n.value = t.value),
        e.id && n.setAttribute(`form`, e.id),
        t.parentNode.insertBefore(n, t),
        (e = new FormData(e)),
        n.parentNode.removeChild(n),
        e
      );
    }
    function md(e, t, n, r, i) {
      if (t === `submit` && n && n.stateNode === i) {
        var a = fd((i[_t] || null).action),
          o = r.submitter;
        o &&
          ((t = (t = o[_t] || null) ? fd(t.formAction) : o.getAttribute(`formAction`)),
          t !== null && ((a = t), (o = null)));
        var s = new jn(`action`, `action`, null, r, i);
        e.push({
          event: s,
          listeners: [
            {
              instance: null,
              listener: function () {
                if (r.defaultPrevented) {
                  if (nd !== 0) {
                    var e = o ? pd(i, o) : new FormData(i);
                    Os(n, { pending: !0, data: e, method: i.method, action: a }, null, e);
                  }
                } else
                  typeof a == `function` &&
                    (s.preventDefault(),
                    (e = o ? pd(i, o) : new FormData(i)),
                    Os(n, { pending: !0, data: e, method: i.method, action: a }, a, e));
              },
              currentTarget: i,
            },
          ],
        });
      }
    }
    for (var hd = 0; hd < ri.length; hd++) {
      var gd = ri[hd];
      ii(gd.toLowerCase(), `on` + (gd[0].toUpperCase() + gd.slice(1)));
    }
    (ii(Yr, `onAnimationEnd`),
      ii(Xr, `onAnimationIteration`),
      ii(Zr, `onAnimationStart`),
      ii(`dblclick`, `onDoubleClick`),
      ii(`focusin`, `onFocus`),
      ii(`focusout`, `onBlur`),
      ii(Qr, `onTransitionRun`),
      ii($r, `onTransitionStart`),
      ii(ei, `onTransitionCancel`),
      ii(ti, `onTransitionEnd`),
      Pt(`onMouseEnter`, [`mouseout`, `mouseover`]),
      Pt(`onMouseLeave`, [`mouseout`, `mouseover`]),
      Pt(`onPointerEnter`, [`pointerout`, `pointerover`]),
      Pt(`onPointerLeave`, [`pointerout`, `pointerover`]),
      Nt(
        `onChange`,
        `change click focusin focusout input keydown keyup selectionchange`.split(` `),
      ),
      Nt(
        `onSelect`,
        `focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(
          ` `,
        ),
      ),
      Nt(`onBeforeInput`, [`compositionend`, `keypress`, `textInput`, `paste`]),
      Nt(`onCompositionEnd`, `compositionend focusout keydown keypress keyup mousedown`.split(` `)),
      Nt(
        `onCompositionStart`,
        `compositionstart focusout keydown keypress keyup mousedown`.split(` `),
      ),
      Nt(
        `onCompositionUpdate`,
        `compositionupdate focusout keydown keypress keyup mousedown`.split(` `),
      ));
    var _d =
        `abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(
          ` `,
        ),
      vd = new Set(
        `beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d),
      );
    function yd(e, t) {
      t = !!(t & 4);
      for (var n = 0; n < e.length; n++) {
        var r = e[n],
          i = r.event;
        r = r.listeners;
        a: {
          var a = void 0;
          if (t)
            for (var o = r.length - 1; 0 <= o; o--) {
              var s = r[o],
                c = s.instance,
                l = s.currentTarget;
              if (((s = s.listener), c !== a && i.isPropagationStopped())) break a;
              ((a = s), (i.currentTarget = l));
              try {
                a(i);
              } catch (e) {
                ai(e);
              }
              ((i.currentTarget = null), (a = c));
            }
          else
            for (o = 0; o < r.length; o++) {
              if (
                ((s = r[o]),
                (c = s.instance),
                (l = s.currentTarget),
                (s = s.listener),
                c !== a && i.isPropagationStopped())
              )
                break a;
              ((a = s), (i.currentTarget = l));
              try {
                a(i);
              } catch (e) {
                ai(e);
              }
              ((i.currentTarget = null), (a = c));
            }
        }
      }
    }
    function Q(e, t) {
      var n = t[yt];
      n === void 0 && (n = t[yt] = new Set());
      var r = e + `__bubble`;
      n.has(r) || (Cd(t, e, 2, !1), n.add(r));
    }
    function bd(e, t, n) {
      var r = 0;
      (t && (r |= 4), Cd(n, e, r, t));
    }
    var xd = `_reactListening` + Math.random().toString(36).slice(2);
    function Sd(e) {
      if (!e[xd]) {
        ((e[xd] = !0),
          jt.forEach(function (t) {
            t !== `selectionchange` && (vd.has(t) || bd(t, !1, e), bd(t, !0, e));
          }));
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[xd] || ((t[xd] = !0), bd(`selectionchange`, !1, t));
      }
    }
    function Cd(e, t, n, r) {
      switch (mp(t)) {
        case 2:
          var i = cp;
          break;
        case 8:
          i = lp;
          break;
        default:
          i = up;
      }
      ((n = i.bind(null, t, n, e)),
        (i = void 0),
        !bn || (t !== `touchstart` && t !== `touchmove` && t !== `wheel`) || (i = !0),
        r
          ? i === void 0
            ? e.addEventListener(t, n, !0)
            : e.addEventListener(t, n, { capture: !0, passive: i })
          : i === void 0
            ? e.addEventListener(t, n, !1)
            : e.addEventListener(t, n, { passive: i }));
    }
    function wd(e, t, n, r, i) {
      var a = r;
      if (!(t & 1) && !(t & 2) && r !== null)
        a: for (;;) {
          if (r === null) return;
          var s = r.tag;
          if (s === 3 || s === 4) {
            var c = r.stateNode.containerInfo;
            if (c === i) break;
            if (s === 4)
              for (s = r.return; s !== null;) {
                var l = s.tag;
                if ((l === 3 || l === 4) && s.stateNode.containerInfo === i) return;
                s = s.return;
              }
            for (; c !== null;) {
              if (((s = Et(c)), s === null)) return;
              if (((l = s.tag), l === 5 || l === 6 || l === 26 || l === 27)) {
                r = a = s;
                continue a;
              }
              c = c.parentNode;
            }
          }
          r = r.return;
        }
      _n(function () {
        var r = a,
          i = fn(n),
          s = [];
        a: {
          var c = ni.get(e);
          if (c !== void 0) {
            var l = jn,
              u = e;
            switch (e) {
              case `keypress`:
                if (En(n) === 0) break a;
              case `keydown`:
              case `keyup`:
                l = Yn;
                break;
              case `focusin`:
                ((u = `focus`), (l = Bn));
                break;
              case `focusout`:
                ((u = `blur`), (l = Bn));
                break;
              case `beforeblur`:
              case `afterblur`:
                l = Bn;
                break;
              case `click`:
                if (n.button === 2) break a;
              case `auxclick`:
              case `dblclick`:
              case `mousedown`:
              case `mousemove`:
              case `mouseup`:
              case `mouseout`:
              case `mouseover`:
              case `contextmenu`:
                l = Rn;
                break;
              case `drag`:
              case `dragend`:
              case `dragenter`:
              case `dragexit`:
              case `dragleave`:
              case `dragover`:
              case `dragstart`:
              case `drop`:
                l = zn;
                break;
              case `touchcancel`:
              case `touchend`:
              case `touchmove`:
              case `touchstart`:
                l = Zn;
                break;
              case Yr:
              case Xr:
              case Zr:
                l = Vn;
                break;
              case ti:
                l = Qn;
                break;
              case `scroll`:
              case `scrollend`:
                l = Nn;
                break;
              case `wheel`:
                l = $n;
                break;
              case `copy`:
              case `cut`:
              case `paste`:
                l = Hn;
                break;
              case `gotpointercapture`:
              case `lostpointercapture`:
              case `pointercancel`:
              case `pointerdown`:
              case `pointermove`:
              case `pointerout`:
              case `pointerover`:
              case `pointerup`:
                l = Xn;
                break;
              case `toggle`:
              case `beforetoggle`:
                l = er;
            }
            var d = !!(t & 4),
              f = !d && (e === `scroll` || e === `scrollend`),
              p = d ? (c === null ? null : c + `Capture`) : c;
            d = [];
            for (var m = r, h; m !== null;) {
              var g = m;
              if (
                ((h = g.stateNode),
                (g = g.tag),
                (g !== 5 && g !== 26 && g !== 27) ||
                  h === null ||
                  p === null ||
                  ((g = vn(m, p)), g != null && d.push(Td(m, g, h))),
                f)
              )
                break;
              m = m.return;
            }
            0 < d.length && ((c = new l(c, u, null, n, i)), s.push({ event: c, listeners: d }));
          }
        }
        if (!(t & 7)) {
          a: {
            if (
              ((c = e === `mouseover` || e === `pointerover`),
              (l = e === `mouseout` || e === `pointerout`),
              c && n !== dn && (u = n.relatedTarget || n.fromElement) && (Et(u) || u[vt]))
            )
              break a;
            if (
              (l || c) &&
              ((c =
                i.window === i
                  ? i
                  : (c = i.ownerDocument)
                    ? c.defaultView || c.parentWindow
                    : window),
              l
                ? ((u = n.relatedTarget || n.toElement),
                  (l = r),
                  (u = u ? Et(u) : null),
                  u !== null &&
                    ((f = o(u)), (d = u.tag), u !== f || (d !== 5 && d !== 27 && d !== 6)) &&
                    (u = null))
                : ((l = null), (u = r)),
              l !== u)
            ) {
              if (
                ((d = Rn),
                (g = `onMouseLeave`),
                (p = `onMouseEnter`),
                (m = `mouse`),
                (e === `pointerout` || e === `pointerover`) &&
                  ((d = Xn), (g = `onPointerLeave`), (p = `onPointerEnter`), (m = `pointer`)),
                (f = l == null ? c : Ot(l)),
                (h = u == null ? c : Ot(u)),
                (c = new d(g, m + `leave`, l, n, i)),
                (c.target = f),
                (c.relatedTarget = h),
                (g = null),
                Et(i) === r &&
                  ((d = new d(p, m + `enter`, u, n, i)),
                  (d.target = h),
                  (d.relatedTarget = f),
                  (g = d)),
                (f = g),
                l && u)
              )
                b: {
                  for (d = Dd, p = l, m = u, h = 0, g = p; g; g = d(g)) h++;
                  g = 0;
                  for (var _ = m; _; _ = d(_)) g++;
                  for (; 0 < h - g;) ((p = d(p)), h--);
                  for (; 0 < g - h;) ((m = d(m)), g--);
                  for (; h--;) {
                    if (p === m || (m !== null && p === m.alternate)) {
                      d = p;
                      break b;
                    }
                    ((p = d(p)), (m = d(m)));
                  }
                  d = null;
                }
              else d = null;
              (l !== null && Od(s, c, l, d, !1), u !== null && f !== null && Od(s, f, u, d, !0));
            }
          }
          a: {
            if (
              ((c = r ? Ot(r) : window),
              (l = c.nodeName && c.nodeName.toLowerCase()),
              l === `select` || (l === `input` && c.type === `file`))
            )
              var v = br;
            else if (mr(c))
              if (xr) v = Ar;
              else {
                v = Or;
                var y = Dr;
              }
            else
              ((l = c.nodeName),
                !l || l.toLowerCase() !== `input` || (c.type !== `checkbox` && c.type !== `radio`)
                  ? r && sn(r.elementType) && (v = br)
                  : (v = kr));
            if ((v &&= v(e, r))) {
              hr(s, v, n, i);
              break a;
            }
            (y && y(e, c, r),
              e === `focusout` &&
                r &&
                c.type === `number` &&
                r.memoizedProps.value != null &&
                Qt(c, `number`, c.value));
          }
          switch (((y = r ? Ot(r) : window), e)) {
            case `focusin`:
              (mr(y) || y.contentEditable === `true`) && ((Br = y), (Vr = r), (Hr = null));
              break;
            case `focusout`:
              Hr = Vr = Br = null;
              break;
            case `mousedown`:
              k = !0;
              break;
            case `contextmenu`:
            case `mouseup`:
            case `dragend`:
              ((k = !1), Ur(s, n, i));
              break;
            case `selectionchange`:
              if (zr) break;
            case `keydown`:
            case `keyup`:
              Ur(s, n, i);
          }
          var b;
          if (nr)
            b: {
              switch (e) {
                case `compositionstart`:
                  var x = `onCompositionStart`;
                  break b;
                case `compositionend`:
                  x = `onCompositionEnd`;
                  break b;
                case `compositionupdate`:
                  x = `onCompositionUpdate`;
                  break b;
              }
              x = void 0;
            }
          else
            ur
              ? cr(e, n) && (x = `onCompositionEnd`)
              : e === `keydown` && n.keyCode === 229 && (x = `onCompositionStart`);
          (x &&
            (ar &&
              n.locale !== `ko` &&
              (ur || x !== `onCompositionStart`
                ? x === `onCompositionEnd` && ur && (b = Tn())
                : ((Sn = i), (Cn = `value` in Sn ? Sn.value : Sn.textContent), (ur = !0))),
            (y = Ed(r, x)),
            0 < y.length &&
              ((x = new Un(x, e, null, n, i)),
              s.push({ event: x, listeners: y }),
              b ? (x.data = b) : ((b = lr(n)), b !== null && (x.data = b)))),
            (b = ir ? dr(e, n) : fr(e, n)) &&
              ((x = Ed(r, `onBeforeInput`)),
              0 < x.length &&
                ((y = new Un(`onBeforeInput`, `beforeinput`, null, n, i)),
                s.push({ event: y, listeners: x }),
                (y.data = b))),
            md(s, e, r, n, i));
        }
        yd(s, t);
      });
    }
    function Td(e, t, n) {
      return { instance: e, listener: t, currentTarget: n };
    }
    function Ed(e, t) {
      for (var n = t + `Capture`, r = []; e !== null;) {
        var i = e,
          a = i.stateNode;
        if (
          ((i = i.tag),
          (i !== 5 && i !== 26 && i !== 27) ||
            a === null ||
            ((i = vn(e, n)),
            i != null && r.unshift(Td(e, i, a)),
            (i = vn(e, t)),
            i != null && r.push(Td(e, i, a))),
          e.tag === 3)
        )
          return r;
        e = e.return;
      }
      return [];
    }
    function Dd(e) {
      if (e === null) return null;
      do e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function Od(e, t, n, r, i) {
      for (var a = t._reactName, o = []; n !== null && n !== r;) {
        var s = n,
          c = s.alternate,
          l = s.stateNode;
        if (((s = s.tag), c !== null && c === r)) break;
        ((s !== 5 && s !== 26 && s !== 27) ||
          l === null ||
          ((c = l),
          i
            ? ((l = vn(n, a)), l != null && o.unshift(Td(n, l, c)))
            : i || ((l = vn(n, a)), l != null && o.push(Td(n, l, c)))),
          (n = n.return));
      }
      o.length !== 0 && e.push({ event: t, listeners: o });
    }
    var kd = /\r\n?/g,
      Ad = /\u0000|\uFFFD/g;
    function jd(e) {
      return (typeof e == `string` ? e : `` + e)
        .replace(
          kd,
          `
`,
        )
        .replace(Ad, ``);
    }
    function Md(e, t) {
      return ((t = jd(t)), jd(e) === t);
    }
    function $(e, t, n, r, a, o) {
      switch (n) {
        case `children`:
          typeof r == `string`
            ? t === `body` || (t === `textarea` && r === ``) || nn(e, r)
            : (typeof r == `number` || typeof r == `bigint`) && t !== `body` && nn(e, `` + r);
          break;
        case `className`:
          Bt(e, `class`, r);
          break;
        case `tabIndex`:
          Bt(e, `tabindex`, r);
          break;
        case `dir`:
        case `role`:
        case `viewBox`:
        case `width`:
        case `height`:
          Bt(e, n, r);
          break;
        case `style`:
          on(e, r, o);
          break;
        case `data`:
          if (t !== `object`) {
            Bt(e, `data`, r);
            break;
          }
        case `src`:
        case `href`:
          if (r === `` && (t !== `a` || n !== `href`)) {
            e.removeAttribute(n);
            break;
          }
          if (
            r == null ||
            typeof r == `function` ||
            typeof r == `symbol` ||
            typeof r == `boolean`
          ) {
            e.removeAttribute(n);
            break;
          }
          ((r = O(`` + r)), e.setAttribute(n, r));
          break;
        case `action`:
        case `formAction`:
          if (typeof r == `function`) {
            e.setAttribute(
              n,
              `javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`,
            );
            break;
          }
          if (
            (typeof o == `function` &&
              (n === `formAction`
                ? (t !== `input` && $(e, t, `name`, a.name, a, null),
                  $(e, t, `formEncType`, a.formEncType, a, null),
                  $(e, t, `formMethod`, a.formMethod, a, null),
                  $(e, t, `formTarget`, a.formTarget, a, null))
                : ($(e, t, `encType`, a.encType, a, null),
                  $(e, t, `method`, a.method, a, null),
                  $(e, t, `target`, a.target, a, null))),
            r == null || typeof r == `symbol` || typeof r == `boolean`)
          ) {
            e.removeAttribute(n);
            break;
          }
          ((r = O(`` + r)), e.setAttribute(n, r));
          break;
        case `onClick`:
          r != null && (e.onclick = un);
          break;
        case `onScroll`:
          r != null && Q(`scroll`, e);
          break;
        case `onScrollEnd`:
          r != null && Q(`scrollend`, e);
          break;
        case `dangerouslySetInnerHTML`:
          if (r != null) {
            if (typeof r != `object` || !(`__html` in r)) throw Error(i(61));
            if (((n = r.__html), n != null)) {
              if (a.children != null) throw Error(i(60));
              e.innerHTML = n;
            }
          }
          break;
        case `multiple`:
          e.multiple = r && typeof r != `function` && typeof r != `symbol`;
          break;
        case `muted`:
          e.muted = r && typeof r != `function` && typeof r != `symbol`;
          break;
        case `suppressContentEditableWarning`:
        case `suppressHydrationWarning`:
        case `defaultValue`:
        case `defaultChecked`:
        case `innerHTML`:
        case `ref`:
          break;
        case `autoFocus`:
          break;
        case `xlinkHref`:
          if (
            r == null ||
            typeof r == `function` ||
            typeof r == `boolean` ||
            typeof r == `symbol`
          ) {
            e.removeAttribute(`xlink:href`);
            break;
          }
          ((n = O(`` + r)), e.setAttributeNS(`http://www.w3.org/1999/xlink`, `xlink:href`, n));
          break;
        case `contentEditable`:
        case `spellCheck`:
        case `draggable`:
        case `value`:
        case `autoReverse`:
        case `externalResourcesRequired`:
        case `focusable`:
        case `preserveAlpha`:
          r != null && typeof r != `function` && typeof r != `symbol`
            ? e.setAttribute(n, `` + r)
            : e.removeAttribute(n);
          break;
        case `inert`:
        case `allowFullScreen`:
        case `async`:
        case `autoPlay`:
        case `controls`:
        case `default`:
        case `defer`:
        case `disabled`:
        case `disablePictureInPicture`:
        case `disableRemotePlayback`:
        case `formNoValidate`:
        case `hidden`:
        case `loop`:
        case `noModule`:
        case `noValidate`:
        case `open`:
        case `playsInline`:
        case `readOnly`:
        case `required`:
        case `reversed`:
        case `scoped`:
        case `seamless`:
        case `itemScope`:
          r && typeof r != `function` && typeof r != `symbol`
            ? e.setAttribute(n, ``)
            : e.removeAttribute(n);
          break;
        case `capture`:
        case `download`:
          !0 === r
            ? e.setAttribute(n, ``)
            : !1 !== r && r != null && typeof r != `function` && typeof r != `symbol`
              ? e.setAttribute(n, r)
              : e.removeAttribute(n);
          break;
        case `cols`:
        case `rows`:
        case `size`:
        case `span`:
          r != null && typeof r != `function` && typeof r != `symbol` && !isNaN(r) && 1 <= r
            ? e.setAttribute(n, r)
            : e.removeAttribute(n);
          break;
        case `rowSpan`:
        case `start`:
          r == null || typeof r == `function` || typeof r == `symbol` || isNaN(r)
            ? e.removeAttribute(n)
            : e.setAttribute(n, r);
          break;
        case `popover`:
          (Q(`beforetoggle`, e), Q(`toggle`, e), zt(e, `popover`, r));
          break;
        case `xlinkActuate`:
          Vt(e, `http://www.w3.org/1999/xlink`, `xlink:actuate`, r);
          break;
        case `xlinkArcrole`:
          Vt(e, `http://www.w3.org/1999/xlink`, `xlink:arcrole`, r);
          break;
        case `xlinkRole`:
          Vt(e, `http://www.w3.org/1999/xlink`, `xlink:role`, r);
          break;
        case `xlinkShow`:
          Vt(e, `http://www.w3.org/1999/xlink`, `xlink:show`, r);
          break;
        case `xlinkTitle`:
          Vt(e, `http://www.w3.org/1999/xlink`, `xlink:title`, r);
          break;
        case `xlinkType`:
          Vt(e, `http://www.w3.org/1999/xlink`, `xlink:type`, r);
          break;
        case `xmlBase`:
          Vt(e, `http://www.w3.org/XML/1998/namespace`, `xml:base`, r);
          break;
        case `xmlLang`:
          Vt(e, `http://www.w3.org/XML/1998/namespace`, `xml:lang`, r);
          break;
        case `xmlSpace`:
          Vt(e, `http://www.w3.org/XML/1998/namespace`, `xml:space`, r);
          break;
        case `is`:
          zt(e, `is`, r);
          break;
        case `innerText`:
        case `textContent`:
          break;
        default:
          (!(2 < n.length) || (n[0] !== `o` && n[0] !== `O`) || (n[1] !== `n` && n[1] !== `N`)) &&
            ((n = cn.get(n) || n), zt(e, n, r));
      }
    }
    function Nd(e, t, n, r, a, o) {
      switch (n) {
        case `style`:
          on(e, r, o);
          break;
        case `dangerouslySetInnerHTML`:
          if (r != null) {
            if (typeof r != `object` || !(`__html` in r)) throw Error(i(61));
            if (((n = r.__html), n != null)) {
              if (a.children != null) throw Error(i(60));
              e.innerHTML = n;
            }
          }
          break;
        case `children`:
          typeof r == `string`
            ? nn(e, r)
            : (typeof r == `number` || typeof r == `bigint`) && nn(e, `` + r);
          break;
        case `onScroll`:
          r != null && Q(`scroll`, e);
          break;
        case `onScrollEnd`:
          r != null && Q(`scrollend`, e);
          break;
        case `onClick`:
          r != null && (e.onclick = un);
          break;
        case `suppressContentEditableWarning`:
        case `suppressHydrationWarning`:
        case `innerHTML`:
        case `ref`:
          break;
        case `innerText`:
        case `textContent`:
          break;
        default:
          if (!Mt.hasOwnProperty(n))
            a: {
              if (
                n[0] === `o` &&
                n[1] === `n` &&
                ((a = n.endsWith(`Capture`)),
                (t = n.slice(2, a ? n.length - 7 : void 0)),
                (o = e[_t] || null),
                (o = o == null ? null : o[n]),
                typeof o == `function` && e.removeEventListener(t, o, a),
                typeof r == `function`)
              ) {
                (typeof o != `function` &&
                  o !== null &&
                  (n in e ? (e[n] = null) : e.hasAttribute(n) && e.removeAttribute(n)),
                  e.addEventListener(t, r, a));
                break a;
              }
              n in e ? (e[n] = r) : !0 === r ? e.setAttribute(n, ``) : zt(e, n, r);
            }
      }
    }
    function Pd(e, t, n) {
      switch (t) {
        case `div`:
        case `span`:
        case `svg`:
        case `path`:
        case `a`:
        case `g`:
        case `p`:
        case `li`:
          break;
        case `img`:
          (Q(`error`, e), Q(`load`, e));
          var r = !1,
            a = !1,
            o;
          for (o in n)
            if (n.hasOwnProperty(o)) {
              var s = n[o];
              if (s != null)
                switch (o) {
                  case `src`:
                    r = !0;
                    break;
                  case `srcSet`:
                    a = !0;
                    break;
                  case `children`:
                  case `dangerouslySetInnerHTML`:
                    throw Error(i(137, t));
                  default:
                    $(e, t, o, s, n, null);
                }
            }
          (a && $(e, t, `srcSet`, n.srcSet, n, null), r && $(e, t, `src`, n.src, n, null));
          return;
        case `input`:
          Q(`invalid`, e);
          var c = (o = s = a = null),
            l = null,
            u = null;
          for (r in n)
            if (n.hasOwnProperty(r)) {
              var d = n[r];
              if (d != null)
                switch (r) {
                  case `name`:
                    a = d;
                    break;
                  case `type`:
                    s = d;
                    break;
                  case `checked`:
                    l = d;
                    break;
                  case `defaultChecked`:
                    u = d;
                    break;
                  case `value`:
                    o = d;
                    break;
                  case `defaultValue`:
                    c = d;
                    break;
                  case `children`:
                  case `dangerouslySetInnerHTML`:
                    if (d != null) throw Error(i(137, t));
                    break;
                  default:
                    $(e, t, r, d, n, null);
                }
            }
          Zt(e, o, c, l, u, s, a, !1);
          return;
        case `select`:
          for (a in (Q(`invalid`, e), (r = s = o = null), n))
            if (n.hasOwnProperty(a) && ((c = n[a]), c != null))
              switch (a) {
                case `value`:
                  o = c;
                  break;
                case `defaultValue`:
                  s = c;
                  break;
                case `multiple`:
                  r = c;
                default:
                  $(e, t, a, c, n, null);
              }
          ((t = o),
            (n = s),
            (e.multiple = !!r),
            t == null ? n != null && $t(e, !!r, n, !0) : $t(e, !!r, t, !1));
          return;
        case `textarea`:
          for (s in (Q(`invalid`, e), (o = a = r = null), n))
            if (n.hasOwnProperty(s) && ((c = n[s]), c != null))
              switch (s) {
                case `value`:
                  r = c;
                  break;
                case `defaultValue`:
                  a = c;
                  break;
                case `children`:
                  o = c;
                  break;
                case `dangerouslySetInnerHTML`:
                  if (c != null) throw Error(i(91));
                  break;
                default:
                  $(e, t, s, c, n, null);
              }
          tn(e, r, a, o);
          return;
        case `option`:
          for (l in n)
            if (n.hasOwnProperty(l) && ((r = n[l]), r != null))
              switch (l) {
                case `selected`:
                  e.selected = r && typeof r != `function` && typeof r != `symbol`;
                  break;
                default:
                  $(e, t, l, r, n, null);
              }
          return;
        case `dialog`:
          (Q(`beforetoggle`, e), Q(`toggle`, e), Q(`cancel`, e), Q(`close`, e));
          break;
        case `iframe`:
        case `object`:
          Q(`load`, e);
          break;
        case `video`:
        case `audio`:
          for (r = 0; r < _d.length; r++) Q(_d[r], e);
          break;
        case `image`:
          (Q(`error`, e), Q(`load`, e));
          break;
        case `details`:
          Q(`toggle`, e);
          break;
        case `embed`:
        case `source`:
        case `link`:
          (Q(`error`, e), Q(`load`, e));
        case `area`:
        case `base`:
        case `br`:
        case `col`:
        case `hr`:
        case `keygen`:
        case `meta`:
        case `param`:
        case `track`:
        case `wbr`:
        case `menuitem`:
          for (u in n)
            if (n.hasOwnProperty(u) && ((r = n[u]), r != null))
              switch (u) {
                case `children`:
                case `dangerouslySetInnerHTML`:
                  throw Error(i(137, t));
                default:
                  $(e, t, u, r, n, null);
              }
          return;
        default:
          if (sn(t)) {
            for (d in n)
              n.hasOwnProperty(d) && ((r = n[d]), r !== void 0 && Nd(e, t, d, r, n, void 0));
            return;
          }
      }
      for (c in n) n.hasOwnProperty(c) && ((r = n[c]), r != null && $(e, t, c, r, n, null));
    }
    function Fd(e, t, n, r) {
      switch (t) {
        case `div`:
        case `span`:
        case `svg`:
        case `path`:
        case `a`:
        case `g`:
        case `p`:
        case `li`:
          break;
        case `input`:
          var a = null,
            o = null,
            s = null,
            c = null,
            l = null,
            u = null,
            d = null;
          for (m in n) {
            var f = n[m];
            if (n.hasOwnProperty(m) && f != null)
              switch (m) {
                case `checked`:
                  break;
                case `value`:
                  break;
                case `defaultValue`:
                  l = f;
                default:
                  r.hasOwnProperty(m) || $(e, t, m, null, r, f);
              }
          }
          for (var p in r) {
            var m = r[p];
            if (((f = n[p]), r.hasOwnProperty(p) && (m != null || f != null)))
              switch (p) {
                case `type`:
                  o = m;
                  break;
                case `name`:
                  a = m;
                  break;
                case `checked`:
                  u = m;
                  break;
                case `defaultChecked`:
                  d = m;
                  break;
                case `value`:
                  s = m;
                  break;
                case `defaultValue`:
                  c = m;
                  break;
                case `children`:
                case `dangerouslySetInnerHTML`:
                  if (m != null) throw Error(i(137, t));
                  break;
                default:
                  m !== f && $(e, t, p, m, r, f);
              }
          }
          Xt(e, s, c, l, u, d, o, a);
          return;
        case `select`:
          for (o in ((m = s = c = p = null), n))
            if (((l = n[o]), n.hasOwnProperty(o) && l != null))
              switch (o) {
                case `value`:
                  break;
                case `multiple`:
                  m = l;
                default:
                  r.hasOwnProperty(o) || $(e, t, o, null, r, l);
              }
          for (a in r)
            if (((o = r[a]), (l = n[a]), r.hasOwnProperty(a) && (o != null || l != null)))
              switch (a) {
                case `value`:
                  p = o;
                  break;
                case `defaultValue`:
                  c = o;
                  break;
                case `multiple`:
                  s = o;
                default:
                  o !== l && $(e, t, a, o, r, l);
              }
          ((t = c),
            (n = s),
            (r = m),
            p == null
              ? !!r != !!n && (t == null ? $t(e, !!n, n ? [] : ``, !1) : $t(e, !!n, t, !0))
              : $t(e, !!n, p, !1));
          return;
        case `textarea`:
          for (c in ((m = p = null), n))
            if (((a = n[c]), n.hasOwnProperty(c) && a != null && !r.hasOwnProperty(c)))
              switch (c) {
                case `value`:
                  break;
                case `children`:
                  break;
                default:
                  $(e, t, c, null, r, a);
              }
          for (s in r)
            if (((a = r[s]), (o = n[s]), r.hasOwnProperty(s) && (a != null || o != null)))
              switch (s) {
                case `value`:
                  p = a;
                  break;
                case `defaultValue`:
                  m = a;
                  break;
                case `children`:
                  break;
                case `dangerouslySetInnerHTML`:
                  if (a != null) throw Error(i(91));
                  break;
                default:
                  a !== o && $(e, t, s, a, r, o);
              }
          en(e, p, m);
          return;
        case `option`:
          for (var h in n)
            if (((p = n[h]), n.hasOwnProperty(h) && p != null && !r.hasOwnProperty(h)))
              switch (h) {
                case `selected`:
                  e.selected = !1;
                  break;
                default:
                  $(e, t, h, null, r, p);
              }
          for (l in r)
            if (
              ((p = r[l]), (m = n[l]), r.hasOwnProperty(l) && p !== m && (p != null || m != null))
            )
              switch (l) {
                case `selected`:
                  e.selected = p && typeof p != `function` && typeof p != `symbol`;
                  break;
                default:
                  $(e, t, l, p, r, m);
              }
          return;
        case `img`:
        case `link`:
        case `area`:
        case `base`:
        case `br`:
        case `col`:
        case `embed`:
        case `hr`:
        case `keygen`:
        case `meta`:
        case `param`:
        case `source`:
        case `track`:
        case `wbr`:
        case `menuitem`:
          for (var g in n)
            ((p = n[g]),
              n.hasOwnProperty(g) && p != null && !r.hasOwnProperty(g) && $(e, t, g, null, r, p));
          for (u in r)
            if (
              ((p = r[u]), (m = n[u]), r.hasOwnProperty(u) && p !== m && (p != null || m != null))
            )
              switch (u) {
                case `children`:
                case `dangerouslySetInnerHTML`:
                  if (p != null) throw Error(i(137, t));
                  break;
                default:
                  $(e, t, u, p, r, m);
              }
          return;
        default:
          if (sn(t)) {
            for (var _ in n)
              ((p = n[_]),
                n.hasOwnProperty(_) &&
                  p !== void 0 &&
                  !r.hasOwnProperty(_) &&
                  Nd(e, t, _, void 0, r, p));
            for (d in r)
              ((p = r[d]),
                (m = n[d]),
                !r.hasOwnProperty(d) ||
                  p === m ||
                  (p === void 0 && m === void 0) ||
                  Nd(e, t, d, p, r, m));
            return;
          }
      }
      for (var v in n)
        ((p = n[v]),
          n.hasOwnProperty(v) && p != null && !r.hasOwnProperty(v) && $(e, t, v, null, r, p));
      for (f in r)
        ((p = r[f]),
          (m = n[f]),
          !r.hasOwnProperty(f) || p === m || (p == null && m == null) || $(e, t, f, p, r, m));
    }
    function Id(e) {
      switch (e) {
        case `css`:
        case `script`:
        case `font`:
        case `img`:
        case `image`:
        case `input`:
        case `link`:
          return !0;
        default:
          return !1;
      }
    }
    function Ld() {
      if (typeof performance.getEntriesByType == `function`) {
        for (
          var e = 0, t = 0, n = performance.getEntriesByType(`resource`), r = 0;
          r < n.length;
          r++
        ) {
          var i = n[r],
            a = i.transferSize,
            o = i.initiatorType,
            s = i.duration;
          if (a && s && Id(o)) {
            for (o = 0, s = i.responseEnd, r += 1; r < n.length; r++) {
              var c = n[r],
                l = c.startTime;
              if (l > s) break;
              var u = c.transferSize,
                d = c.initiatorType;
              u && Id(d) && ((c = c.responseEnd), (o += u * (c < s ? 1 : (s - l) / (c - l))));
            }
            if ((--r, (t += (8 * (a + o)) / (i.duration / 1e3)), e++, 10 < e)) break;
          }
        }
        if (0 < e) return t / e / 1e6;
      }
      return navigator.connection && ((e = navigator.connection.downlink), typeof e == `number`)
        ? e
        : 5;
    }
    var Rd = null,
      zd = null;
    function Bd(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function Vd(e) {
      switch (e) {
        case `http://www.w3.org/2000/svg`:
          return 1;
        case `http://www.w3.org/1998/Math/MathML`:
          return 2;
        default:
          return 0;
      }
    }
    function Hd(e, t) {
      if (e === 0)
        switch (t) {
          case `svg`:
            return 1;
          case `math`:
            return 2;
          default:
            return 0;
        }
      return e === 1 && t === `foreignObject` ? 0 : e;
    }
    function Ud(e, t) {
      return (
        e === `textarea` ||
        e === `noscript` ||
        typeof t.children == `string` ||
        typeof t.children == `number` ||
        typeof t.children == `bigint` ||
        (typeof t.dangerouslySetInnerHTML == `object` &&
          t.dangerouslySetInnerHTML !== null &&
          t.dangerouslySetInnerHTML.__html != null)
      );
    }
    var Wd = null;
    function Gd() {
      var e = window.event;
      return e && e.type === `popstate` ? e !== Wd && ((Wd = e), !0) : ((Wd = null), !1);
    }
    var Kd = typeof setTimeout == `function` ? setTimeout : void 0,
      qd = typeof clearTimeout == `function` ? clearTimeout : void 0,
      Jd = typeof Promise == `function` ? Promise : void 0,
      Yd =
        typeof queueMicrotask == `function`
          ? queueMicrotask
          : Jd === void 0
            ? Kd
            : function (e) {
                return Jd.resolve(null).then(e).catch(Xd);
              };
    function Xd(e) {
      setTimeout(function () {
        throw e;
      });
    }
    function Zd(e) {
      return e === `head`;
    }
    function Qd(e, t) {
      var n = t,
        r = 0;
      do {
        var i = n.nextSibling;
        if ((e.removeChild(n), i && i.nodeType === 8))
          if (((n = i.data), n === `/$` || n === `/&`)) {
            if (r === 0) {
              (e.removeChild(i), Np(t));
              return;
            }
            r--;
          } else if (n === `$` || n === `$?` || n === `$~` || n === `$!` || n === `&`) r++;
          else if (n === `html`) pf(e.ownerDocument.documentElement);
          else if (n === `head`) {
            ((n = e.ownerDocument.head), pf(n));
            for (var a = n.firstChild; a;) {
              var o = a.nextSibling,
                s = a.nodeName;
              (a[wt] ||
                s === `SCRIPT` ||
                s === `STYLE` ||
                (s === `LINK` && a.rel.toLowerCase() === `stylesheet`) ||
                n.removeChild(a),
                (a = o));
            }
          } else n === `body` && pf(e.ownerDocument.body);
        n = i;
      } while (n);
      Np(t);
    }
    function $d(e, t) {
      var n = e;
      e = 0;
      do {
        var r = n.nextSibling;
        if (
          (n.nodeType === 1
            ? t
              ? ((n._stashedDisplay = n.style.display), (n.style.display = `none`))
              : ((n.style.display = n._stashedDisplay || ``),
                n.getAttribute(`style`) === `` && n.removeAttribute(`style`))
            : n.nodeType === 3 &&
              (t
                ? ((n._stashedText = n.nodeValue), (n.nodeValue = ``))
                : (n.nodeValue = n._stashedText || ``)),
          r && r.nodeType === 8)
        )
          if (((n = r.data), n === `/$`)) {
            if (e === 0) break;
            e--;
          } else (n !== `$` && n !== `$?` && n !== `$~` && n !== `$!`) || e++;
        n = r;
      } while (n);
    }
    function ef(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
        var n = t;
        switch (((t = t.nextSibling), n.nodeName)) {
          case `HTML`:
          case `HEAD`:
          case `BODY`:
            (ef(n), Tt(n));
            continue;
          case `SCRIPT`:
          case `STYLE`:
            continue;
          case `LINK`:
            if (n.rel.toLowerCase() === `stylesheet`) continue;
        }
        e.removeChild(n);
      }
    }
    function tf(e, t, n, r) {
      for (; e.nodeType === 1;) {
        var i = n;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!r && (e.nodeName !== `INPUT` || e.type !== `hidden`)) break;
        } else if (!r)
          if (t === `input` && e.type === `hidden`) {
            var a = i.name == null ? null : `` + i.name;
            if (i.type === `hidden` && e.getAttribute(`name`) === a) return e;
          } else return e;
        else if (!e[wt])
          switch (t) {
            case `meta`:
              if (!e.hasAttribute(`itemprop`)) break;
              return e;
            case `link`:
              if (
                ((a = e.getAttribute(`rel`)),
                (a === `stylesheet` && e.hasAttribute(`data-precedence`)) ||
                  a !== i.rel ||
                  e.getAttribute(`href`) !== (i.href == null || i.href === `` ? null : i.href) ||
                  e.getAttribute(`crossorigin`) !==
                    (i.crossOrigin == null ? null : i.crossOrigin) ||
                  e.getAttribute(`title`) !== (i.title == null ? null : i.title))
              )
                break;
              return e;
            case `style`:
              if (e.hasAttribute(`data-precedence`)) break;
              return e;
            case `script`:
              if (
                ((a = e.getAttribute(`src`)),
                (a !== (i.src == null ? null : i.src) ||
                  e.getAttribute(`type`) !== (i.type == null ? null : i.type) ||
                  e.getAttribute(`crossorigin`) !==
                    (i.crossOrigin == null ? null : i.crossOrigin)) &&
                  a &&
                  e.hasAttribute(`async`) &&
                  !e.hasAttribute(`itemprop`))
              )
                break;
              return e;
            default:
              return e;
          }
        if (((e = cf(e.nextSibling)), e === null)) break;
      }
      return null;
    }
    function nf(e, t, n) {
      if (t === ``) return null;
      for (; e.nodeType !== 3;)
        if (
          ((e.nodeType !== 1 || e.nodeName !== `INPUT` || e.type !== `hidden`) && !n) ||
          ((e = cf(e.nextSibling)), e === null)
        )
          return null;
      return e;
    }
    function rf(e, t) {
      for (; e.nodeType !== 8;)
        if (
          ((e.nodeType !== 1 || e.nodeName !== `INPUT` || e.type !== `hidden`) && !t) ||
          ((e = cf(e.nextSibling)), e === null)
        )
          return null;
      return e;
    }
    function af(e) {
      return e.data === `$?` || e.data === `$~`;
    }
    function of(e) {
      return e.data === `$!` || (e.data === `$?` && e.ownerDocument.readyState !== `loading`);
    }
    function sf(e, t) {
      var n = e.ownerDocument;
      if (e.data === `$~`) e._reactRetry = t;
      else if (e.data !== `$?` || n.readyState !== `loading`) t();
      else {
        var r = function () {
          (t(), n.removeEventListener(`DOMContentLoaded`, r));
        };
        (n.addEventListener(`DOMContentLoaded`, r), (e._reactRetry = r));
      }
    }
    function cf(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (
            ((t = e.data),
            t === `$` ||
              t === `$!` ||
              t === `$?` ||
              t === `$~` ||
              t === `&` ||
              t === `F!` ||
              t === `F`)
          )
            break;
          if (t === `/$` || t === `/&`) return null;
        }
      }
      return e;
    }
    var lf = null;
    function uf(e) {
      e = e.nextSibling;
      for (var t = 0; e;) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === `/$` || n === `/&`) {
            if (t === 0) return cf(e.nextSibling);
            t--;
          } else (n !== `$` && n !== `$!` && n !== `$?` && n !== `$~` && n !== `&`) || t++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function df(e) {
      e = e.previousSibling;
      for (var t = 0; e;) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === `$` || n === `$!` || n === `$?` || n === `$~` || n === `&`) {
            if (t === 0) return e;
            t--;
          } else (n !== `/$` && n !== `/&`) || t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function ff(e, t, n) {
      switch (((t = Bd(n)), e)) {
        case `html`:
          if (((e = t.documentElement), !e)) throw Error(i(452));
          return e;
        case `head`:
          if (((e = t.head), !e)) throw Error(i(453));
          return e;
        case `body`:
          if (((e = t.body), !e)) throw Error(i(454));
          return e;
        default:
          throw Error(i(451));
      }
    }
    function pf(e) {
      for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
      Tt(e);
    }
    var mf = new Map(),
      hf = new Set();
    function gf(e) {
      return typeof e.getRootNode == `function`
        ? e.getRootNode()
        : e.nodeType === 9
          ? e
          : e.ownerDocument;
    }
    var _f = T.d;
    T.d = { f: vf, r: yf, D: Sf, C: Cf, L: wf, m: Tf, X: Df, S: Ef, M: Of };
    function vf() {
      var e = _f.f(),
        t = xu();
      return e || t;
    }
    function yf(e) {
      var t = Dt(e);
      t !== null && t.tag === 5 && t.type === `form` ? As(t) : _f.r(e);
    }
    var bf = typeof document > `u` ? null : document;
    function xf(e, t, n) {
      var r = bf;
      if (r && typeof t == `string` && t) {
        var i = Yt(t);
        ((i = `link[rel="` + e + `"][href="` + i + `"]`),
          typeof n == `string` && (i += `[crossorigin="` + n + `"]`),
          hf.has(i) ||
            (hf.add(i),
            (e = { rel: e, crossOrigin: n, href: t }),
            r.querySelector(i) === null &&
              ((t = r.createElement(`link`)), Pd(t, `link`, e), At(t), r.head.appendChild(t))));
      }
    }
    function Sf(e) {
      (_f.D(e), xf(`dns-prefetch`, e, null));
    }
    function Cf(e, t) {
      (_f.C(e, t), xf(`preconnect`, e, t));
    }
    function wf(e, t, n) {
      _f.L(e, t, n);
      var r = bf;
      if (r && e && t) {
        var i = `link[rel="preload"][as="` + Yt(t) + `"]`;
        t === `image` && n && n.imageSrcSet
          ? ((i += `[imagesrcset="` + Yt(n.imageSrcSet) + `"]`),
            typeof n.imageSizes == `string` && (i += `[imagesizes="` + Yt(n.imageSizes) + `"]`))
          : (i += `[href="` + Yt(e) + `"]`);
        var a = i;
        switch (t) {
          case `style`:
            a = Af(e);
            break;
          case `script`:
            a = Pf(e);
        }
        mf.has(a) ||
          ((e = f(
            { rel: `preload`, href: t === `image` && n && n.imageSrcSet ? void 0 : e, as: t },
            n,
          )),
          mf.set(a, e),
          r.querySelector(i) !== null ||
            (t === `style` && r.querySelector(jf(a))) ||
            (t === `script` && r.querySelector(Ff(a))) ||
            ((t = r.createElement(`link`)), Pd(t, `link`, e), At(t), r.head.appendChild(t)));
      }
    }
    function Tf(e, t) {
      _f.m(e, t);
      var n = bf;
      if (n && e) {
        var r = t && typeof t.as == `string` ? t.as : `script`,
          i = `link[rel="modulepreload"][as="` + Yt(r) + `"][href="` + Yt(e) + `"]`,
          a = i;
        switch (r) {
          case `audioworklet`:
          case `paintworklet`:
          case `serviceworker`:
          case `sharedworker`:
          case `worker`:
          case `script`:
            a = Pf(e);
        }
        if (
          !mf.has(a) &&
          ((e = f({ rel: `modulepreload`, href: e }, t)), mf.set(a, e), n.querySelector(i) === null)
        ) {
          switch (r) {
            case `audioworklet`:
            case `paintworklet`:
            case `serviceworker`:
            case `sharedworker`:
            case `worker`:
            case `script`:
              if (n.querySelector(Ff(a))) return;
          }
          ((r = n.createElement(`link`)), Pd(r, `link`, e), At(r), n.head.appendChild(r));
        }
      }
    }
    function Ef(e, t, n) {
      _f.S(e, t, n);
      var r = bf;
      if (r && e) {
        var i = kt(r).hoistableStyles,
          a = Af(e);
        t ||= `default`;
        var o = i.get(a);
        if (!o) {
          var s = { loading: 0, preload: null };
          if ((o = r.querySelector(jf(a)))) s.loading = 5;
          else {
            ((e = f({ rel: `stylesheet`, href: e, "data-precedence": t }, n)),
              (n = mf.get(a)) && Rf(e, n));
            var c = (o = r.createElement(`link`));
            (At(c),
              Pd(c, `link`, e),
              (c._p = new Promise(function (e, t) {
                ((c.onload = e), (c.onerror = t));
              })),
              c.addEventListener(`load`, function () {
                s.loading |= 1;
              }),
              c.addEventListener(`error`, function () {
                s.loading |= 2;
              }),
              (s.loading |= 4),
              Lf(o, t, r));
          }
          ((o = { type: `stylesheet`, instance: o, count: 1, state: s }), i.set(a, o));
        }
      }
    }
    function Df(e, t) {
      _f.X(e, t);
      var n = bf;
      if (n && e) {
        var r = kt(n).hoistableScripts,
          i = Pf(e),
          a = r.get(i);
        a ||
          ((a = n.querySelector(Ff(i))),
          a ||
            ((e = f({ src: e, async: !0 }, t)),
            (t = mf.get(i)) && zf(e, t),
            (a = n.createElement(`script`)),
            At(a),
            Pd(a, `link`, e),
            n.head.appendChild(a)),
          (a = { type: `script`, instance: a, count: 1, state: null }),
          r.set(i, a));
      }
    }
    function Of(e, t) {
      _f.M(e, t);
      var n = bf;
      if (n && e) {
        var r = kt(n).hoistableScripts,
          i = Pf(e),
          a = r.get(i);
        a ||
          ((a = n.querySelector(Ff(i))),
          a ||
            ((e = f({ src: e, async: !0, type: `module` }, t)),
            (t = mf.get(i)) && zf(e, t),
            (a = n.createElement(`script`)),
            At(a),
            Pd(a, `link`, e),
            n.head.appendChild(a)),
          (a = { type: `script`, instance: a, count: 1, state: null }),
          r.set(i, a));
      }
    }
    function kf(e, t, n, r) {
      var a = (a = _e.current) ? gf(a) : null;
      if (!a) throw Error(i(446));
      switch (e) {
        case `meta`:
        case `title`:
          return null;
        case `style`:
          return typeof n.precedence == `string` && typeof n.href == `string`
            ? ((t = Af(n.href)),
              (n = kt(a).hoistableStyles),
              (r = n.get(t)),
              r || ((r = { type: `style`, instance: null, count: 0, state: null }), n.set(t, r)),
              r)
            : { type: `void`, instance: null, count: 0, state: null };
        case `link`:
          if (
            n.rel === `stylesheet` &&
            typeof n.href == `string` &&
            typeof n.precedence == `string`
          ) {
            e = Af(n.href);
            var o = kt(a).hoistableStyles,
              s = o.get(e);
            if (
              (s ||
                ((a = a.ownerDocument || a),
                (s = {
                  type: `stylesheet`,
                  instance: null,
                  count: 0,
                  state: { loading: 0, preload: null },
                }),
                o.set(e, s),
                (o = a.querySelector(jf(e))) && !o._p && ((s.instance = o), (s.state.loading = 5)),
                mf.has(e) ||
                  ((n = {
                    rel: `preload`,
                    as: `style`,
                    href: n.href,
                    crossOrigin: n.crossOrigin,
                    integrity: n.integrity,
                    media: n.media,
                    hrefLang: n.hrefLang,
                    referrerPolicy: n.referrerPolicy,
                  }),
                  mf.set(e, n),
                  o || Nf(a, e, n, s.state))),
              t && r === null)
            )
              throw Error(i(528, ``));
            return s;
          }
          if (t && r !== null) throw Error(i(529, ``));
          return null;
        case `script`:
          return (
            (t = n.async),
            (n = n.src),
            typeof n == `string` && t && typeof t != `function` && typeof t != `symbol`
              ? ((t = Pf(n)),
                (n = kt(a).hoistableScripts),
                (r = n.get(t)),
                r || ((r = { type: `script`, instance: null, count: 0, state: null }), n.set(t, r)),
                r)
              : { type: `void`, instance: null, count: 0, state: null }
          );
        default:
          throw Error(i(444, e));
      }
    }
    function Af(e) {
      return `href="` + Yt(e) + `"`;
    }
    function jf(e) {
      return `link[rel="stylesheet"][` + e + `]`;
    }
    function Mf(e) {
      return f({}, e, { "data-precedence": e.precedence, precedence: null });
    }
    function Nf(e, t, n, r) {
      e.querySelector(`link[rel="preload"][as="style"][` + t + `]`)
        ? (r.loading = 1)
        : ((t = e.createElement(`link`)),
          (r.preload = t),
          t.addEventListener(`load`, function () {
            return (r.loading |= 1);
          }),
          t.addEventListener(`error`, function () {
            return (r.loading |= 2);
          }),
          Pd(t, `link`, n),
          At(t),
          e.head.appendChild(t));
    }
    function Pf(e) {
      return `[src="` + Yt(e) + `"]`;
    }
    function Ff(e) {
      return `script[async]` + e;
    }
    function If(e, t, n) {
      if ((t.count++, t.instance === null))
        switch (t.type) {
          case `style`:
            var r = e.querySelector(`style[data-href~="` + Yt(n.href) + `"]`);
            if (r) return ((t.instance = r), At(r), r);
            var a = f({}, n, {
              "data-href": n.href,
              "data-precedence": n.precedence,
              href: null,
              precedence: null,
            });
            return (
              (r = (e.ownerDocument || e).createElement(`style`)),
              At(r),
              Pd(r, `style`, a),
              Lf(r, n.precedence, e),
              (t.instance = r)
            );
          case `stylesheet`:
            a = Af(n.href);
            var o = e.querySelector(jf(a));
            if (o) return ((t.state.loading |= 4), (t.instance = o), At(o), o);
            ((r = Mf(n)),
              (a = mf.get(a)) && Rf(r, a),
              (o = (e.ownerDocument || e).createElement(`link`)),
              At(o));
            var s = o;
            return (
              (s._p = new Promise(function (e, t) {
                ((s.onload = e), (s.onerror = t));
              })),
              Pd(o, `link`, r),
              (t.state.loading |= 4),
              Lf(o, n.precedence, e),
              (t.instance = o)
            );
          case `script`:
            return (
              (o = Pf(n.src)),
              (a = e.querySelector(Ff(o)))
                ? ((t.instance = a), At(a), a)
                : ((r = n),
                  (a = mf.get(o)) && ((r = f({}, n)), zf(r, a)),
                  (e = e.ownerDocument || e),
                  (a = e.createElement(`script`)),
                  At(a),
                  Pd(a, `link`, r),
                  e.head.appendChild(a),
                  (t.instance = a))
            );
          case `void`:
            return null;
          default:
            throw Error(i(443, t.type));
        }
      else
        t.type === `stylesheet` &&
          !(t.state.loading & 4) &&
          ((r = t.instance), (t.state.loading |= 4), Lf(r, n.precedence, e));
      return t.instance;
    }
    function Lf(e, t, n) {
      for (
        var r = n.querySelectorAll(
            `link[rel="stylesheet"][data-precedence],style[data-precedence]`,
          ),
          i = r.length ? r[r.length - 1] : null,
          a = i,
          o = 0;
        o < r.length;
        o++
      ) {
        var s = r[o];
        if (s.dataset.precedence === t) a = s;
        else if (a !== i) break;
      }
      a
        ? a.parentNode.insertBefore(e, a.nextSibling)
        : ((t = n.nodeType === 9 ? n.head : n), t.insertBefore(e, t.firstChild));
    }
    function Rf(e, t) {
      ((e.crossOrigin ??= t.crossOrigin),
        (e.referrerPolicy ??= t.referrerPolicy),
        (e.title ??= t.title));
    }
    function zf(e, t) {
      ((e.crossOrigin ??= t.crossOrigin),
        (e.referrerPolicy ??= t.referrerPolicy),
        (e.integrity ??= t.integrity));
    }
    var Bf = null;
    function Vf(e, t, n) {
      if (Bf === null) {
        var r = new Map(),
          i = (Bf = new Map());
        i.set(n, r);
      } else ((i = Bf), (r = i.get(n)), r || ((r = new Map()), i.set(n, r)));
      if (r.has(e)) return r;
      for (r.set(e, null), n = n.getElementsByTagName(e), i = 0; i < n.length; i++) {
        var a = n[i];
        if (
          !(a[wt] || a[gt] || (e === `link` && a.getAttribute(`rel`) === `stylesheet`)) &&
          a.namespaceURI !== `http://www.w3.org/2000/svg`
        ) {
          var o = a.getAttribute(t) || ``;
          o = e + o;
          var s = r.get(o);
          s ? s.push(a) : r.set(o, [a]);
        }
      }
      return r;
    }
    function Hf(e, t, n) {
      ((e = e.ownerDocument || e),
        e.head.insertBefore(n, t === `title` ? e.querySelector(`head > title`) : null));
    }
    function Uf(e, t, n) {
      if (n === 1 || t.itemProp != null) return !1;
      switch (e) {
        case `meta`:
        case `title`:
          return !0;
        case `style`:
          if (typeof t.precedence != `string` || typeof t.href != `string` || t.href === ``) break;
          return !0;
        case `link`:
          if (
            typeof t.rel != `string` ||
            typeof t.href != `string` ||
            t.href === `` ||
            t.onLoad ||
            t.onError
          )
            break;
          switch (t.rel) {
            case `stylesheet`:
              return ((e = t.disabled), typeof t.precedence == `string` && e == null);
            default:
              return !0;
          }
        case `script`:
          if (
            t.async &&
            typeof t.async != `function` &&
            typeof t.async != `symbol` &&
            !t.onLoad &&
            !t.onError &&
            t.src &&
            typeof t.src == `string`
          )
            return !0;
      }
      return !1;
    }
    function Wf(e) {
      return !(e.type === `stylesheet` && !(e.state.loading & 3));
    }
    function Gf(e, t, n, r) {
      if (
        n.type === `stylesheet` &&
        (typeof r.media != `string` || !1 !== matchMedia(r.media).matches) &&
        !(n.state.loading & 4)
      ) {
        if (n.instance === null) {
          var i = Af(r.href),
            a = t.querySelector(jf(i));
          if (a) {
            ((t = a._p),
              typeof t == `object` &&
                t &&
                typeof t.then == `function` &&
                (e.count++, (e = Jf.bind(e)), t.then(e, e)),
              (n.state.loading |= 4),
              (n.instance = a),
              At(a));
            return;
          }
          ((a = t.ownerDocument || t),
            (r = Mf(r)),
            (i = mf.get(i)) && Rf(r, i),
            (a = a.createElement(`link`)),
            At(a));
          var o = a;
          ((o._p = new Promise(function (e, t) {
            ((o.onload = e), (o.onerror = t));
          })),
            Pd(a, `link`, r),
            (n.instance = a));
        }
        (e.stylesheets === null && (e.stylesheets = new Map()),
          e.stylesheets.set(n, t),
          (t = n.state.preload) &&
            !(n.state.loading & 3) &&
            (e.count++,
            (n = Jf.bind(e)),
            t.addEventListener(`load`, n),
            t.addEventListener(`error`, n)));
      }
    }
    var Kf = 0;
    function qf(e, t) {
      return (
        e.stylesheets && e.count === 0 && Xf(e, e.stylesheets),
        0 < e.count || 0 < e.imgCount
          ? function (n) {
              var r = setTimeout(function () {
                if ((e.stylesheets && Xf(e, e.stylesheets), e.unsuspend)) {
                  var t = e.unsuspend;
                  ((e.unsuspend = null), t());
                }
              }, 6e4 + t);
              0 < e.imgBytes && Kf === 0 && (Kf = 62500 * Ld());
              var i = setTimeout(
                function () {
                  if (
                    ((e.waitingForImages = !1),
                    e.count === 0 && (e.stylesheets && Xf(e, e.stylesheets), e.unsuspend))
                  ) {
                    var t = e.unsuspend;
                    ((e.unsuspend = null), t());
                  }
                },
                (e.imgBytes > Kf ? 50 : 800) + t,
              );
              return (
                (e.unsuspend = n),
                function () {
                  ((e.unsuspend = null), clearTimeout(r), clearTimeout(i));
                }
              );
            }
          : null
      );
    }
    function Jf() {
      if ((this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))) {
        if (this.stylesheets) Xf(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          ((this.unsuspend = null), e());
        }
      }
    }
    var Yf = null;
    function Xf(e, t) {
      ((e.stylesheets = null),
        e.unsuspend !== null &&
          (e.count++, (Yf = new Map()), t.forEach(Zf, e), (Yf = null), Jf.call(e)));
    }
    function Zf(e, t) {
      if (!(t.state.loading & 4)) {
        var n = Yf.get(e);
        if (n) var r = n.get(null);
        else {
          ((n = new Map()), Yf.set(e, n));
          for (
            var i = e.querySelectorAll(`link[data-precedence],style[data-precedence]`), a = 0;
            a < i.length;
            a++
          ) {
            var o = i[a];
            (o.nodeName === `LINK` || o.getAttribute(`media`) !== `not all`) &&
              (n.set(o.dataset.precedence, o), (r = o));
          }
          r && n.set(null, r);
        }
        ((i = t.instance),
          (o = i.getAttribute(`data-precedence`)),
          (a = n.get(o) || r),
          a === r && n.set(null, i),
          n.set(o, i),
          this.count++,
          (r = Jf.bind(this)),
          i.addEventListener(`load`, r),
          i.addEventListener(`error`, r),
          a
            ? a.parentNode.insertBefore(i, a.nextSibling)
            : ((e = e.nodeType === 9 ? e.head : e), e.insertBefore(i, e.firstChild)),
          (t.state.loading |= 4));
      }
    }
    var Qf = {
      $$typeof: x,
      Provider: null,
      Consumer: null,
      _currentValue: de,
      _currentValue2: de,
      _threadCount: 0,
    };
    function $f(e, t, n, r, i, a, o, s, c) {
      ((this.tag = 1),
        (this.containerInfo = e),
        (this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode =
          this.next =
          this.pendingContext =
          this.context =
          this.cancelPendingCommit =
            null),
        (this.callbackPriority = 0),
        (this.expirationTimes = at(-1)),
        (this.entangledLanes =
          this.shellSuspendCounter =
          this.errorRecoveryDisabledLanes =
          this.expiredLanes =
          this.warmLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = at(0)),
        (this.hiddenUpdates = at(null)),
        (this.identifierPrefix = r),
        (this.onUncaughtError = i),
        (this.onCaughtError = a),
        (this.onRecoverableError = o),
        (this.pooledCache = null),
        (this.pooledCacheLanes = 0),
        (this.formState = c),
        (this.incompleteTransitions = new Map()));
    }
    function ep(e, t, n, r, i, a, o, s, c, l, u, d) {
      return (
        (e = new $f(e, t, n, o, c, l, u, d, s)),
        (t = 1),
        !0 === a && (t |= 24),
        (a = _i(3, null, null, t)),
        (e.current = a),
        (a.stateNode = e),
        (t = ma()),
        t.refCount++,
        (e.pooledCache = t),
        t.refCount++,
        (a.memoizedState = { element: r, isDehydrated: n, cache: t }),
        Ka(a),
        e
      );
    }
    function tp(e) {
      return e ? ((e = hi), e) : hi;
    }
    function np(e, t, n, r, i, a) {
      ((i = tp(i)),
        r.context === null ? (r.context = i) : (r.pendingContext = i),
        (r = Ja(t)),
        (r.payload = { element: n }),
        (a = a === void 0 ? null : a),
        a !== null && (r.callback = a),
        (n = Ya(e, r, t)),
        n !== null && (gu(n, e, t), Xa(n, e, t)));
    }
    function rp(e, t) {
      if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
      }
    }
    function ip(e, t) {
      (rp(e, t), (e = e.alternate) && rp(e, t));
    }
    function ap(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = fi(e, 67108864);
        (t !== null && gu(t, e, 67108864), ip(e, 67108864));
      }
    }
    function op(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = mu();
        t = dt(t);
        var n = fi(e, t);
        (n !== null && gu(n, e, t), ip(e, t));
      }
    }
    var sp = !0;
    function cp(e, t, n, r) {
      var i = w.T;
      w.T = null;
      var a = T.p;
      try {
        ((T.p = 2), up(e, t, n, r));
      } finally {
        ((T.p = a), (w.T = i));
      }
    }
    function lp(e, t, n, r) {
      var i = w.T;
      w.T = null;
      var a = T.p;
      try {
        ((T.p = 8), up(e, t, n, r));
      } finally {
        ((T.p = a), (w.T = i));
      }
    }
    function up(e, t, n, r) {
      if (sp) {
        var i = dp(r);
        if (i === null) (wd(e, t, r, fp, n), Cp(e, r));
        else if (Tp(i, e, t, n, r)) r.stopPropagation();
        else if ((Cp(e, r), t & 4 && -1 < Sp.indexOf(e))) {
          for (; i !== null;) {
            var a = Dt(i);
            if (a !== null)
              switch (a.tag) {
                case 3:
                  if (((a = a.stateNode), a.current.memoizedState.isDehydrated)) {
                    var o = et(a.pendingLanes);
                    if (o !== 0) {
                      var s = a;
                      for (s.pendingLanes |= 2, s.entangledLanes |= 2; o;) {
                        var c = 1 << (31 - qe(o));
                        ((s.entanglements[1] |= c), (o &= ~c));
                      }
                      (rd(a), !(G & 6) && ((nu = Fe() + 500), id(0, !1)));
                    }
                  }
                  break;
                case 31:
                case 13:
                  ((s = fi(a, 2)), s !== null && gu(s, a, 2), xu(), ip(a, 2));
              }
            if (((a = dp(r)), a === null && wd(e, t, r, fp, n), a === i)) break;
            i = a;
          }
          i !== null && r.stopPropagation();
        } else wd(e, t, r, null, n);
      }
    }
    function dp(e) {
      return ((e = fn(e)), pp(e));
    }
    var fp = null;
    function pp(e) {
      if (((fp = null), (e = Et(e)), e !== null)) {
        var t = o(e);
        if (t === null) e = null;
        else {
          var n = t.tag;
          if (n === 13) {
            if (((e = s(t)), e !== null)) return e;
            e = null;
          } else if (n === 31) {
            if (((e = c(t)), e !== null)) return e;
            e = null;
          } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return ((fp = e), null);
    }
    function mp(e) {
      switch (e) {
        case `beforetoggle`:
        case `cancel`:
        case `click`:
        case `close`:
        case `contextmenu`:
        case `copy`:
        case `cut`:
        case `auxclick`:
        case `dblclick`:
        case `dragend`:
        case `dragstart`:
        case `drop`:
        case `focusin`:
        case `focusout`:
        case `input`:
        case `invalid`:
        case `keydown`:
        case `keypress`:
        case `keyup`:
        case `mousedown`:
        case `mouseup`:
        case `paste`:
        case `pause`:
        case `play`:
        case `pointercancel`:
        case `pointerdown`:
        case `pointerup`:
        case `ratechange`:
        case `reset`:
        case `resize`:
        case `seeked`:
        case `submit`:
        case `toggle`:
        case `touchcancel`:
        case `touchend`:
        case `touchstart`:
        case `volumechange`:
        case `change`:
        case `selectionchange`:
        case `textInput`:
        case `compositionstart`:
        case `compositionend`:
        case `compositionupdate`:
        case `beforeblur`:
        case `afterblur`:
        case `beforeinput`:
        case `blur`:
        case `fullscreenchange`:
        case `focus`:
        case `hashchange`:
        case `popstate`:
        case `select`:
        case `selectstart`:
          return 2;
        case `drag`:
        case `dragenter`:
        case `dragexit`:
        case `dragleave`:
        case `dragover`:
        case `mousemove`:
        case `mouseout`:
        case `mouseover`:
        case `pointermove`:
        case `pointerout`:
        case `pointerover`:
        case `scroll`:
        case `touchmove`:
        case `wheel`:
        case `mouseenter`:
        case `mouseleave`:
        case `pointerenter`:
        case `pointerleave`:
          return 8;
        case `message`:
          switch (Ie()) {
            case Le:
              return 2;
            case Re:
              return 8;
            case ze:
            case Be:
              return 32;
            case Ve:
              return 268435456;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var hp = !1,
      gp = null,
      _p = null,
      vp = null,
      yp = new Map(),
      bp = new Map(),
      xp = [],
      Sp =
        `mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(
          ` `,
        );
    function Cp(e, t) {
      switch (e) {
        case `focusin`:
        case `focusout`:
          gp = null;
          break;
        case `dragenter`:
        case `dragleave`:
          _p = null;
          break;
        case `mouseover`:
        case `mouseout`:
          vp = null;
          break;
        case `pointerover`:
        case `pointerout`:
          yp.delete(t.pointerId);
          break;
        case `gotpointercapture`:
        case `lostpointercapture`:
          bp.delete(t.pointerId);
      }
    }
    function wp(e, t, n, r, i, a) {
      return e === null || e.nativeEvent !== a
        ? ((e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: r,
            nativeEvent: a,
            targetContainers: [i],
          }),
          t !== null && ((t = Dt(t)), t !== null && ap(t)),
          e)
        : ((e.eventSystemFlags |= r),
          (t = e.targetContainers),
          i !== null && t.indexOf(i) === -1 && t.push(i),
          e);
    }
    function Tp(e, t, n, r, i) {
      switch (t) {
        case `focusin`:
          return ((gp = wp(gp, e, t, n, r, i)), !0);
        case `dragenter`:
          return ((_p = wp(_p, e, t, n, r, i)), !0);
        case `mouseover`:
          return ((vp = wp(vp, e, t, n, r, i)), !0);
        case `pointerover`:
          var a = i.pointerId;
          return (yp.set(a, wp(yp.get(a) || null, e, t, n, r, i)), !0);
        case `gotpointercapture`:
          return ((a = i.pointerId), bp.set(a, wp(bp.get(a) || null, e, t, n, r, i)), !0);
      }
      return !1;
    }
    function Ep(e) {
      var t = Et(e.target);
      if (t !== null) {
        var n = o(t);
        if (n !== null) {
          if (((t = n.tag), t === 13)) {
            if (((t = s(n)), t !== null)) {
              ((e.blockedOn = t),
                mt(e.priority, function () {
                  op(n);
                }));
              return;
            }
          } else if (t === 31) {
            if (((t = c(n)), t !== null)) {
              ((e.blockedOn = t),
                mt(e.priority, function () {
                  op(n);
                }));
              return;
            }
          } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
            e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function Dp(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length;) {
        var n = dp(e.nativeEvent);
        if (n === null) {
          n = e.nativeEvent;
          var r = new n.constructor(n.type, n);
          ((dn = r), n.target.dispatchEvent(r), (dn = null));
        } else return ((t = Dt(n)), t !== null && ap(t), (e.blockedOn = n), !1);
        t.shift();
      }
      return !0;
    }
    function Op(e, t, n) {
      Dp(e) && n.delete(t);
    }
    function kp() {
      ((hp = !1),
        gp !== null && Dp(gp) && (gp = null),
        _p !== null && Dp(_p) && (_p = null),
        vp !== null && Dp(vp) && (vp = null),
        yp.forEach(Op),
        bp.forEach(Op));
    }
    function Ap(e, n) {
      e.blockedOn === n &&
        ((e.blockedOn = null),
        hp || ((hp = !0), t.unstable_scheduleCallback(t.unstable_NormalPriority, kp)));
    }
    var jp = null;
    function Mp(e) {
      jp !== e &&
        ((jp = e),
        t.unstable_scheduleCallback(t.unstable_NormalPriority, function () {
          jp === e && (jp = null);
          for (var t = 0; t < e.length; t += 3) {
            var n = e[t],
              r = e[t + 1],
              i = e[t + 2];
            if (typeof r != `function`) {
              if (pp(r || n) === null) continue;
              break;
            }
            var a = Dt(n);
            a !== null &&
              (e.splice(t, 3),
              (t -= 3),
              Os(a, { pending: !0, data: i, method: n.method, action: r }, r, i));
          }
        }));
    }
    function Np(e) {
      function t(t) {
        return Ap(t, e);
      }
      (gp !== null && Ap(gp, e),
        _p !== null && Ap(_p, e),
        vp !== null && Ap(vp, e),
        yp.forEach(t),
        bp.forEach(t));
      for (var n = 0; n < xp.length; n++) {
        var r = xp[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
      for (; 0 < xp.length && ((n = xp[0]), n.blockedOn === null);)
        (Ep(n), n.blockedOn === null && xp.shift());
      if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
        for (r = 0; r < n.length; r += 3) {
          var i = n[r],
            a = n[r + 1],
            o = i[_t] || null;
          if (typeof a == `function`) o || Mp(n);
          else if (o) {
            var s = null;
            if (a && a.hasAttribute(`formAction`)) {
              if (((i = a), (o = a[_t] || null))) s = o.formAction;
              else if (pp(i) !== null) continue;
            } else s = o.action;
            (typeof s == `function` ? (n[r + 1] = s) : (n.splice(r, 3), (r -= 3)), Mp(n));
          }
        }
    }
    function Pp() {
      function e(e) {
        e.canIntercept &&
          e.info === `react-transition` &&
          e.intercept({
            handler: function () {
              return new Promise(function (e) {
                return (i = e);
              });
            },
            focusReset: `manual`,
            scroll: `manual`,
          });
      }
      function t() {
        (i !== null && (i(), (i = null)), r || setTimeout(n, 20));
      }
      function n() {
        if (!r && !navigation.transition) {
          var e = navigation.currentEntry;
          e &&
            e.url != null &&
            navigation.navigate(e.url, {
              state: e.getState(),
              info: `react-transition`,
              history: `replace`,
            });
        }
      }
      if (typeof navigation == `object`) {
        var r = !1,
          i = null;
        return (
          navigation.addEventListener(`navigate`, e),
          navigation.addEventListener(`navigatesuccess`, t),
          navigation.addEventListener(`navigateerror`, t),
          setTimeout(n, 100),
          function () {
            ((r = !0),
              navigation.removeEventListener(`navigate`, e),
              navigation.removeEventListener(`navigatesuccess`, t),
              navigation.removeEventListener(`navigateerror`, t),
              i !== null && (i(), (i = null)));
          }
        );
      }
    }
    function Fp(e) {
      this._internalRoot = e;
    }
    ((Ip.prototype.render = Fp.prototype.render =
      function (e) {
        var t = this._internalRoot;
        if (t === null) throw Error(i(409));
        var n = t.current;
        np(n, mu(), e, t, null, null);
      }),
      (Ip.prototype.unmount = Fp.prototype.unmount =
        function () {
          var e = this._internalRoot;
          if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            (np(e.current, 2, null, e, null, null), xu(), (t[vt] = null));
          }
        }));
    function Ip(e) {
      this._internalRoot = e;
    }
    Ip.prototype.unstable_scheduleHydration = function (e) {
      if (e) {
        var t = pt();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < xp.length && t !== 0 && t < xp[n].priority; n++);
        (xp.splice(n, 0, e), n === 0 && Ep(e));
      }
    };
    var Lp = n.version;
    if (Lp !== `19.2.8`) throw Error(i(527, Lp, `19.2.8`));
    T.findDOMNode = function (e) {
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == `function`
          ? Error(i(188))
          : ((e = Object.keys(e).join(`,`)), Error(i(268, e)));
      return ((e = u(t)), (e = e === null ? null : d(e)), (e = e === null ? null : e.stateNode), e);
    };
    var Rp = {
      bundleType: 0,
      version: `19.2.8`,
      rendererPackageName: `react-dom`,
      currentDispatcherRef: w,
      reconcilerVersion: `19.2.8`,
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u`) {
      var zp = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!zp.isDisabled && zp.supportsFiber)
        try {
          ((We = zp.inject(Rp)), (Ge = zp));
        } catch {}
    }
    e.hydrateRoot = function (e, t, n) {
      if (!a(e)) throw Error(i(299));
      var r = !1,
        o = ``,
        s = Zs,
        c = Qs,
        l = $s,
        u = null;
      return (
        n != null &&
          (!0 === n.unstable_strictMode && (r = !0),
          n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (s = n.onUncaughtError),
          n.onCaughtError !== void 0 && (c = n.onCaughtError),
          n.onRecoverableError !== void 0 && (l = n.onRecoverableError),
          n.formState !== void 0 && (u = n.formState)),
        (t = ep(e, 1, !0, t, n ?? null, r, o, u, s, c, l, Pp)),
        (t.context = tp(null)),
        (n = t.current),
        (r = mu()),
        (r = dt(r)),
        (o = Ja(r)),
        (o.callback = null),
        Ya(n, o, r),
        (n = r),
        (t.current.lanes = n),
        ot(t, n),
        rd(t),
        (e[vt] = t.current),
        Sd(e),
        new Ip(t)
      );
    };
  }),
  St = b((e, t) => {
    function n() {
      if (!(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > `u` ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != `function`
      ))
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
        } catch (e) {
          console.error(e);
        }
    }
    (n(), (t.exports = xt()));
  }),
  Ct = `__TSS_CONTEXT`,
  wt = Symbol.for(`TSS_SERVER_FUNCTION`),
  Tt = `application/x-tss-framed`;
`${Tt}`;
var Et = () => window.__TSS_START_OPTIONS__;
function Dt(e) {
  return e?.isNotFound === !0;
}
function Ot(e) {
  e.statusCode = e.statusCode || e.code || 307;
  let t = new Headers(e.headers);
  e.href && t.get(`Location`) === null && t.set(`Location`, e.href);
  let n = new Response(null, { status: e.statusCode, headers: t });
  if (((n.options = e), e.throw)) throw n;
  return n;
}
function kt(e) {
  if (typeof e == `object` && e && e.isSerializedRedirect) return Ot(e);
}
function At(e) {
  return e
    .replaceAll(`\0`, `/`)
    .replaceAll(`�`, `/`)
    .replace(/~([~0r])/g, (e, t) => (t === `0` ? `\0` : t === `r` ? `�` : t));
}
function jt() {
  throw Error(`Invariant failed`);
}
function Mt(e, t = String) {
  let n;
  for (let r in e) {
    let i = e[r];
    i !== void 0 && (n ||= new URLSearchParams()).set(r, t(i));
  }
  return n ? n.toString() : ``;
}
function Nt(e) {
  return e.findIndex((e) => e.status === `error` || e.status === `notFound` || e._notFound) + 1;
}
Object.freeze({});
function Pt(e, t) {
  return e.options[t]?.preload?.();
}
function Ft(e, t) {
  let n = Pt(e, `component`),
    r = Pt(e, `pendingComponent`);
  return (t && (r ? (r = r.then(t)) : t()), n && r ? Promise.all([n, r]).then(() => {}) : (n ?? r));
}
function It(e, t, n) {
  let r = () => (t === !1 ? void 0 : t ? Pt(e, t) : Ft(e, n)),
    i = e._lazy;
  if (i) return i === !0 ? r() : i.then(r);
  if (!e.lazyFn) return r();
  let a = e.lazyFn().then(
    (t) => {
      {
        let { id: n, ...r } = t.options;
        (Object.assign(e.options, r), (e._lazy = !0));
      }
    },
    (t) => {
      throw ((e._lazy = void 0), t);
    },
  );
  return ((e._lazy = a), a.then(r));
}
function Lt(e, t) {
  return t.aborted
    ? Promise.race([Promise.reject(t), e])
    : new Promise((n, r) => {
        let i = () => r(t);
        (t.addEventListener(`abort`, i, { once: !0 }),
          Promise.resolve(e)
            .then(n, r)
            .then(() => t.removeEventListener(`abort`, i)));
      });
}
function Rt(e, t) {
  return e.routesById[t.routeId];
}
function zt(e, t, n) {
  if (!(!n || --n[2])) {
    if (e._flights?.get(t.id) === n) {
      let n = e._tx;
      if (
        n &&
        !n[0].signal.aborted &&
        !n[3].includes(t) &&
        n[3].some((e) => e.id === t.id) &&
        n[3].some((e) => e.isFetching === `beforeLoad`)
      )
        return;
      e._flights.delete(t.id);
    }
    return n[1];
  }
}
function Bt(e, t) {
  let n = t._flight;
  ((t._flight = void 0), zt(e, t, n)?.abort());
}
function Vt(e, t, n, r) {
  let i = [];
  for (let a of t)
    if (!n?.includes(a)) {
      let t = a._flight;
      if (
        ((a._flight = void 0),
        r && t?.[2] === 1 && e._flights?.get(a.id) === t && n?.some((e) => e.id === a.id))
      )
        t[2] = 0;
      else {
        let n = zt(e, a, t);
        n && i.push(n);
      }
    }
  for (let e of i) e.abort();
}
function Ht(e, t, n) {
  let r = e._cache.get(t.id);
  if (r !== n || e._committed.some((e) => e.id === t.id && e._flight === t._flight)) return;
  let i = { ...t, _notFound: void 0, context: {} };
  (i._flight && i._flight[2]++, e._cache.set(t.id, i), r && Bt(e, r));
}
async function Ut(e, t, n, r = 0, i = t[1].length) {
  let a = t[1];
  for (let t = r; t < i; t++) {
    let r = a[t],
      i = Rt(e, r).options;
    if (i.head || i.scripts)
      try {
        let t = {
            ssr: e.options.ssr,
            matches: a,
            match: r,
            params: r.params,
            loaderData: r.loaderData,
          },
          [o, s] = await Lt(Promise.all([i.head?.(t), i.scripts?.(t)]), n);
        ((r.meta = o?.meta),
          (r.links = o?.links),
          (r.headScripts = o?.scripts),
          (r.styles = o?.styles),
          (r.scripts = s));
      } catch (e) {
        if (e === n && n.aborted) break;
        console.error(e);
      }
    if (r.status !== `success` || r._notFound) break;
  }
  return t;
}
async function Wt(e) {
  let t = window.$_TSR,
    n = e.options.serializationAdapters;
  (n?.length &&
    ((t.t = new Map(n.map((e) => [e.key, e.fromSerializable]))), t.buffer.forEach((e) => e())),
    (t.initialized = !0));
  let r = t.router;
  ((e.ssr = { manifest: r.manifest }),
    (e.options.ssr = { nonce: document.querySelector(`meta[property="csp-nonce"]`)?.content }));
  let i = r.matches,
    a = new AbortController(),
    o = e._preflight;
  ((e._preflight = a), o?.abort());
  let s = () => e._preflight === a,
    c,
    l,
    u,
    d;
  try {
    if ((await Lt(e.options.hydrate?.(r.dehydratedData), a.signal), !s())) return;
    let t = e.history.location;
    ((u = t.href),
      (d = t.state),
      e.updateLatestLocation(),
      (c = e.latestLocation),
      e.stores.location.set(c),
      (l = e.matchRoutes(c, { _controller: a })));
  } catch (t) {
    if ((s() && (e._preflight = void 0), a.abort(t), t !== a.signal)) throw t;
  }
  if (!s()) return;
  let f = [],
    p,
    m = 0,
    h = (t) => {
      m = Math.min(m, t + 1);
      let n = f.splice(t);
      for (let t of n)
        Rt(e, t).options.loader &&
          (t.status === `success` || (!t.invalid && `loaderData` in t)) &&
          Ht(e, { ...t, status: `success`, error: void 0, preload: !0 }, e._cache.get(t.id));
      Vt(e, n);
    },
    g = i.length > l.length ? l.findIndex((e) => e._notFound) + 1 : i.length,
    _ = !1;
  for (let t = 0; t < g; t++) {
    let n = l[t],
      r = i[t];
    if (typeof r.i != `string` || At(r.i) !== n.id) {
      p ??= t;
      break;
    }
    m = t + 1;
    let a = Rt(e, n);
    if (
      ((`l` in r || (r.s === `success` && r.e === void 0 && a.options.loader)) &&
        (n.loaderData = r.l),
      (n.status = r.s),
      (n.ssr = r.ssr),
      (a.options.ssr = n.ssr),
      (n.updatedAt = r.u),
      (n.error = r.e),
      (n._notFound ||= r.g),
      n.status === `error` || n.status === `notFound` || n._notFound)
    ) {
      ((_ = !0), f.push(n), (n.ssr === !1 || n.ssr === `data-only`) && (p ??= t));
      break;
    }
    if (n.status === `pending`) {
      p ??= t;
      break;
    }
    (f.push(n), n.ssr === `data-only` && (p ??= t));
  }
  !_ && f.length === g && g < l.length && (p = g);
  let v = f.map(async (t) => {
      try {
        let n = Rt(e, t);
        return (
          await (t._notFound
            ? Promise.all([It(n), It(n, `notFoundComponent`)])
            : It(
                n,
                t.status === `error`
                  ? `errorComponent`
                  : t.status === `notFound`
                    ? `notFoundComponent`
                    : void 0,
              )),
          !0
        );
      } catch {
        return !1;
      }
    }),
    y = 0;
  try {
    for (; y < v.length && (await Lt(v[y], a.signal));) y++;
  } catch {
    return;
  }
  if (!s()) return;
  y < f.length && h(y);
  let b = Math.max(p === f.length ? f.length + 1 : f.length, y < v.length ? y : m);
  for (let t = 0; t < b; t++) {
    let n = l[t],
      r = Rt(e, n),
      o = l[t - 1]?.context ?? e.options.context ?? {},
      u;
    if (r.options.context) {
      try {
        u = n._ctx =
          r.options.context({
            deps: n.loaderDeps,
            params: n.params,
            context: o,
            location: c,
            navigate: (t) => e.navigate({ ...t, _fromLocation: c }),
            buildLocation: e.buildLocation,
            cause: n.cause,
            abortController: a,
            preload: !1,
            matches: l,
            routeId: r.id,
          }) || {};
      } catch {
        if (!s()) return;
        if (n.status !== `error` && n.status !== `notFound` && !n._notFound) {
          ((p = Math.min(p ?? t, t)), h(t));
          break;
        }
      }
      if (!s()) return;
    }
    n.context = { ...o, ...u, ...(f[t] && i[t].b) };
  }
  if ((await Ut(e, [c, l], a.signal, 0, m), !s())) return;
  let x = p !== void 0 || f.length < g,
    S = _ && f.length === g ? l : f,
    C = x ? l : S,
    ee;
  if (x && p !== void 0) {
    let e = C[p];
    ((ee = e.ssr === `data-only` && m > p + 1 ? m : void 0),
      (C = C.slice()),
      (C[p] = {
        ...e,
        status: `pending`,
        ssr: e.ssr === `data-only` && `data-only`,
        _assetEnd: ee,
      }));
  }
  let te = () => {
      let t = e.history.location;
      return x &&
        !e._tx &&
        t.href === u &&
        t.state === d &&
        e._committed === S &&
        S.length &&
        !a.signal.aborted
        ? a
        : void 0;
    },
    ne = [
      te,
      (t) => {
        if (e._handoff !== ne) return;
        e._handoff = void 0;
        let n = S.length;
        if (!t || !te() || S.some((e, n) => e.id !== t[n]?.id)) {
          a.abort();
          return;
        }
        let r = ee;
        if (r !== void 0) {
          for (let e = n; e < r; e++)
            if (l[e]?.id !== t[e]?.id) {
              r = e > p + 1 ? e : void 0;
              break;
            }
        }
        let i = S.map((e) => ({ ...e }));
        (r !== void 0 && (i[p]._assetEnd = r), Vt(e, t.splice(0, n, ...i)));
        for (let e = n; e < t.length; e++) {
          let n = t[e],
            r = l[e];
          (r?.id === n.id && r._ctx && (n._ctx = r._ctx), (n.abortController = a));
        }
        return n;
      },
    ];
  ((e._committed = S),
    (e._lifecycleEnd = Nt(S)),
    (e._handoff = ne),
    (e._preflight = void 0),
    e.batch(() => {
      (e.stores.setMatches(C),
        e.stores.status.set(`idle`),
        x || e.stores.resolvedLocation.set(e.stores.location.get()));
    }));
}
var Gt = Symbol.asyncIterator,
  Kt = Symbol.hasInstance,
  qt = Symbol.isConcatSpreadable,
  Jt = Symbol.iterator,
  Yt = Symbol.match,
  Xt = Symbol.matchAll,
  Zt = Symbol.replace,
  Qt = Symbol.search,
  $t = Symbol.species,
  en = Symbol.split,
  tn = Symbol.toPrimitive,
  nn = Symbol.toStringTag,
  rn = Symbol.unscopables,
  an = {
    [Gt]: 0,
    [Kt]: 1,
    [qt]: 2,
    [Jt]: 3,
    [Yt]: 4,
    [Xt]: 5,
    [Zt]: 6,
    [Qt]: 7,
    [$t]: 8,
    [en]: 9,
    [tn]: 10,
    [nn]: 11,
    [rn]: 12,
  },
  on = {
    0: Gt,
    1: Kt,
    2: qt,
    3: Jt,
    4: Yt,
    5: Xt,
    6: Zt,
    7: Qt,
    8: $t,
    9: en,
    10: tn,
    11: nn,
    12: rn,
  },
  sn = { 2: !0, 3: !1, 1: void 0, 0: null, 4: -0, 5: 1 / 0, 6: -1 / 0, 7: NaN },
  cn = {
    0: `Error`,
    1: `EvalError`,
    2: `RangeError`,
    3: `ReferenceError`,
    4: `SyntaxError`,
    5: `TypeError`,
    6: `URIError`,
  },
  ln = {
    0: Error,
    1: EvalError,
    2: RangeError,
    3: ReferenceError,
    4: SyntaxError,
    5: TypeError,
    6: URIError,
  };
function O(e, t, n, r, i, a, o, s, c, l, u, d) {
  return { t: e, i: t, s: n, c: r, m: i, p: a, e: o, a: s, f: c, b: l, o: u, l: d };
}
function un(e) {
  return O(2, void 0, e, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0);
}
var dn = un(2),
  fn = un(3),
  pn = un(1),
  mn = un(0),
  hn = un(4),
  gn = un(5),
  _n = un(6),
  vn = un(7),
  yn = 64,
  bn = /[\x00-\x07\x0b\x0e-\x1f<\u2028\u2029\ud800-\udfff]/;
function xn(e) {
  switch (e) {
    case `"`:
      return `\\"`;
    case `\\`:
      return `\\\\`;
    case `
`:
      return `\\n`;
    case `\r`:
      return `\\r`;
    case `\b`:
      return `\\b`;
    case `	`:
      return `\\t`;
    case `\f`:
      return `\\f`;
    case `<`:
      return `\\x3C`;
    case `\u2028`:
      return `\\u2028`;
    case `\u2029`:
      return `\\u2029`;
    default:
      return;
  }
}
function Sn(e) {
  if (e.length >= yn && !bn.test(e)) return JSON.stringify(e).slice(1, -1);
  let t = ``,
    n = 0,
    r;
  for (let i = 0, a = e.length; i < a; i++)
    ((r = xn(e[i])), r && ((t += e.slice(n, i) + r), (n = i + 1)));
  return (n === 0 ? (t = e) : (t += e.slice(n)), t);
}
function Cn(e) {
  switch (e) {
    case `\\\\`:
      return `\\`;
    case `\\"`:
      return `"`;
    case `\\n`:
      return `
`;
    case `\\r`:
      return `\r`;
    case `\\b`:
      return `\b`;
    case `\\t`:
      return `	`;
    case `\\f`:
      return `\f`;
    case `\\x3C`:
      return `<`;
    case `\\u2028`:
      return `\u2028`;
    case `\\u2029`:
      return `\u2029`;
    default:
      return e;
  }
}
function wn(e) {
  return typeof e == `string` && !e.includes(`\\`)
    ? e
    : e.replace(/(\\\\|\\"|\\n|\\r|\\b|\\t|\\f|\\u2028|\\u2029|\\x3C)/g, Cn);
}
var { toString: Tn } = Object.prototype,
  En = { parsing: 1, serialization: 2, deserialization: 3 };
function Dn(e) {
  return `Seroval Error (step: ${En[e]})`;
}
var On = (e, t) => Dn(e),
  kn = class extends Error {
    constructor(e, t) {
      (super(On(e, t)), (this.cause = t));
    }
  },
  An = class extends kn {
    constructor(e) {
      super(`parsing`, e);
    }
  },
  jn = class extends kn {
    constructor(e) {
      super(`deserialization`, e);
    }
  };
function Mn(e) {
  return `Seroval Error (specific: ${e})`;
}
var Nn = class extends Error {
    constructor(e) {
      (super(Mn(1)), (this.value = e));
    }
  },
  Pn = class extends Error {
    constructor(e) {
      super(Mn(2));
    }
  },
  Fn = class extends Error {
    constructor(e) {
      super(Mn(3));
    }
  },
  In = class extends Error {
    constructor(e) {
      super(Mn(4));
    }
  },
  Ln = class extends Error {
    constructor(e) {
      (super(Mn(5)), (this.value = e));
    }
  },
  Rn = class extends Error {
    constructor(e) {
      super(Mn(6));
    }
  },
  zn = class extends Error {
    constructor(e) {
      super(Mn(7));
    }
  },
  Bn = class extends Error {
    constructor(e) {
      super(Mn(8));
    }
  },
  Vn = class extends Error {
    constructor(e) {
      super(Mn(9));
    }
  },
  Hn = `__SEROVAL_REFS__`,
  Un = new Map(),
  Wn = new Map();
function Gn(e) {
  return Un.has(e);
}
function Kn(e) {
  return Wn.has(e);
}
function qn(e) {
  if (Gn(e)) return Un.get(e);
  throw new Ln(e);
}
function Jn(e) {
  if (Kn(e)) return Wn.get(e);
  throw new Rn(e);
}
typeof globalThis < `u`
  ? Object.defineProperty(globalThis, Hn, {
      value: Wn,
      configurable: !0,
      writable: !1,
      enumerable: !1,
    })
  : typeof window < `u`
    ? Object.defineProperty(window, Hn, {
        value: Wn,
        configurable: !0,
        writable: !1,
        enumerable: !1,
      })
    : typeof self < `u`
      ? Object.defineProperty(self, Hn, {
          value: Wn,
          configurable: !0,
          writable: !1,
          enumerable: !1,
        })
      : typeof global < `u` &&
        Object.defineProperty(global, Hn, {
          value: Wn,
          configurable: !0,
          writable: !1,
          enumerable: !1,
        });
function Yn(e) {
  return e instanceof EvalError
    ? 1
    : e instanceof RangeError
      ? 2
      : e instanceof ReferenceError
        ? 3
        : e instanceof SyntaxError
          ? 4
          : e instanceof TypeError
            ? 5
            : e instanceof URIError
              ? 6
              : 0;
}
function Xn(e) {
  let t = cn[Yn(e)];
  return e.name === t
    ? e.constructor.name === t
      ? {}
      : { name: e.constructor.name }
    : { name: e.name };
}
function Zn(e, t) {
  let n = Xn(e),
    r = Object.getOwnPropertyNames(e);
  for (let i = 0, a = r.length, o; i < a; i++)
    ((o = r[i]),
      o !== `name` &&
        o !== `message` &&
        (o === `stack` ? t & 4 && ((n ||= {}), (n[o] = e[o])) : ((n ||= {}), (n[o] = e[o]))));
  return n;
}
function Qn(e) {
  return Object.isFrozen(e) ? 3 : Object.isSealed(e) ? 2 : +!Object.isExtensible(e);
}
function $n(e) {
  switch (e) {
    case 1 / 0:
      return gn;
    case -1 / 0:
      return _n;
  }
  return e === e
    ? Object.is(e, -0)
      ? hn
      : O(0, void 0, e, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0)
    : vn;
}
function er(e) {
  return O(
    1,
    void 0,
    Sn(e),
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
  );
}
function tr(e) {
  return O(
    3,
    void 0,
    `` + e,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
  );
}
function nr(e) {
  return O(4, e, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0);
}
function rr(e, t) {
  let n = t.valueOf();
  return O(
    5,
    e,
    n === n ? t.toISOString() : ``,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
  );
}
function ir(e, t, n) {
  return O(36, e, n.toString(), t, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0);
}
function ar(e, t) {
  return O(
    6,
    e,
    void 0,
    Sn(t.source),
    t.flags,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
  );
}
function or(e, t) {
  return O(17, e, an[t], void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0);
}
function sr(e, t) {
  return O(
    18,
    e,
    Sn(qn(t)),
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
  );
}
function cr(e, t, n) {
  return O(25, e, n, Sn(t), void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0);
}
function lr(e, t, n) {
  return O(9, e, void 0, void 0, void 0, void 0, void 0, n, void 0, void 0, Qn(t), void 0);
}
function ur(e, t) {
  return O(21, e, void 0, void 0, void 0, void 0, void 0, void 0, t, void 0, void 0, void 0);
}
var dr = 1e6;
function fr(e, t, n) {
  if (t.length > dr) throw new Nn(t);
  return O(
    15,
    e,
    void 0,
    t.constructor.name,
    void 0,
    void 0,
    void 0,
    void 0,
    n,
    t.byteOffset,
    void 0,
    t.length,
  );
}
function pr(e, t, n) {
  if (t.length > dr) throw new Nn(t);
  return O(
    16,
    e,
    void 0,
    t.constructor.name,
    void 0,
    void 0,
    void 0,
    void 0,
    n,
    t.byteOffset,
    void 0,
    t.length,
  );
}
function mr(e, t, n) {
  if (t.byteLength > dr) throw new Nn(t);
  return O(
    20,
    e,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    n,
    t.byteOffset,
    void 0,
    t.byteLength,
  );
}
function hr(e, t, n) {
  return O(13, e, Yn(t), void 0, Sn(t.message), n, void 0, void 0, void 0, void 0, void 0, void 0);
}
function gr(e, t, n) {
  return O(14, e, Yn(t), void 0, Sn(t.message), n, void 0, void 0, void 0, void 0, void 0, void 0);
}
function _r(e, t) {
  return O(7, e, void 0, void 0, void 0, void 0, void 0, t, void 0, void 0, void 0, void 0);
}
function vr(e, t) {
  return O(
    28,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    [e, t],
    void 0,
    void 0,
    void 0,
    void 0,
  );
}
function yr(e, t) {
  return O(
    30,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    [e, t],
    void 0,
    void 0,
    void 0,
    void 0,
  );
}
function br(e, t, n) {
  return O(31, e, void 0, void 0, void 0, void 0, void 0, n, t, void 0, void 0, void 0);
}
function xr(e, t) {
  return O(32, e, void 0, void 0, void 0, void 0, void 0, void 0, t, void 0, void 0, void 0);
}
function Sr(e, t) {
  return O(33, e, void 0, void 0, void 0, void 0, void 0, void 0, t, void 0, void 0, void 0);
}
function Cr(e, t) {
  return O(34, e, void 0, void 0, void 0, void 0, void 0, void 0, t, void 0, void 0, void 0);
}
function wr(e, t, n, r) {
  return O(35, e, n, void 0, void 0, void 0, void 0, t, void 0, void 0, void 0, r);
}
var Tr = class {
    constructor(e, t) {
      ((this.value = e), (this.replacement = t));
    }
  },
  Er = () => {
    let e = { p: 0, s: 0, f: 0 };
    return (
      (e.p = new Promise((t, n) => {
        ((e.s = t), (e.f = n));
      })),
      e
    );
  },
  Dr = (e) => (t) => () => {
    let n = 0,
      r = {
        [e]() {
          return r;
        },
        next() {
          if (n > t.d) return { done: !0, value: void 0 };
          let e = n++,
            r = t.v[e];
          if (e === t.t) throw r;
          return { done: e === t.d, value: r };
        },
      };
    return r;
  },
  Or = (e, t) => (n) => () => {
    let r = 0,
      i = -1,
      a = !1,
      o = [],
      s = [],
      c = {
        finalize(e = 0, t = s.length) {
          for (; e < t; e++) s[e].s({ done: !0, value: void 0 });
        },
      };
    n.on({
      next(e) {
        let t = s.shift();
        (t && t.s({ done: !1, value: e }), o.push(e));
      },
      throw(e) {
        let t = s.shift();
        (t && t.f(e), c.finalize(), (i = o.length), (a = !0), o.push(e));
      },
      return(e) {
        let t = s.shift();
        (t && t.s({ done: !0, value: e }), c.finalize(), (i = o.length), o.push(e));
      },
    });
    let l = {
      [e]() {
        return l;
      },
      next() {
        if (i === -1) {
          let e = r++;
          if (e >= o.length) {
            let e = t();
            return (s.push(e), e.p);
          }
          return { done: !1, value: o[e] };
        }
        if (r > i) return { done: !0, value: void 0 };
        let e = r++,
          n = o[e];
        if (e !== i) return { done: !1, value: n };
        if (a) throw n;
        return { done: !0, value: n };
      },
    };
    return l;
  },
  kr = (e) => {
    let t = atob(e),
      n = t.length,
      r = new Uint8Array(n);
    for (let e = 0; e < n; e++) r[e] = t.charCodeAt(e);
    return r.buffer;
  },
  Ar = class {
    constructor(e, t, n) {
      ((this.v = e), (this.t = t), (this.d = n));
    }
  };
function jr(e) {
  return e instanceof Ar;
}
function Mr(e, t, n) {
  return new Ar(e, t, n);
}
function Nr(e) {
  let t = [],
    n = -1,
    r = -1,
    i = e[Jt]();
  for (;;)
    try {
      let e = i.next();
      if ((t.push(e.value), e.done)) {
        r = t.length - 1;
        break;
      }
    } catch (e) {
      ((n = t.length), (r = n), t.push(e));
      break;
    }
  return Mr(t, n, r);
}
var Pr = Dr(Jt);
function Fr(e) {
  return Pr(e);
}
var Ir = {},
  Lr = {},
  Rr = { 0: {}, 1: {}, 2: {}, 3: {}, 4: {}, 5: {} };
function zr(e, t) {
  if (t.has(e)) throw TypeError(`Cannot initialize the same private elements twice on an object`);
}
function Br(e, t) {
  (zr(e, t), t.add(e));
}
function Vr(e, t, n) {
  (zr(e, t), t.set(e, n));
}
function Hr(e, t, n) {
  if (typeof e == `function` ? e === t : e.has(t)) return arguments.length < 3 ? t : n;
  throw TypeError(`Private element is not present on this object`);
}
function k(e, t) {
  return e.get(Hr(e, t));
}
function Ur(e, t, n) {
  return (e.set(Hr(e, t), n), n);
}
var Wr = new WeakMap(),
  Gr = new WeakMap(),
  Kr = new WeakMap(),
  qr = new WeakMap(),
  Jr = new WeakMap(),
  Yr = new WeakSet(),
  Xr = class {
    constructor() {
      (Br(this, Yr),
        Vr(this, Wr, []),
        Vr(this, Gr, []),
        Vr(this, Kr, !0),
        Vr(this, qr, !1),
        Vr(this, Jr, 0));
    }
    on(e) {
      let t = k(Kr, this),
        n = 0;
      if (t) {
        for (; n < k(Jr, this) && k(Gr, this)[n]; n++);
        if (n === k(Jr, this)) {
          var r;
          Ur(Jr, this, ((r = k(Jr, this)), r++, r));
        }
        k(Gr, this)[n] = e;
      }
      return (
        Hr(Yr, this, Qr).call(this, e),
        () => {
          if (k(Kr, this) && t) {
            for (
              t = !1, k(Gr, this)[n] = void 0;
              k(Jr, this) > 0 && !k(Gr, this)[k(Jr, this) - 1];
            ) {
              var e;
              Ur(Jr, this, ((e = k(Jr, this)), e--, e));
            }
            k(Gr, this).length = k(Jr, this);
          }
        }
      );
    }
    next(e) {
      k(Kr, this) && (k(Wr, this).push(e), Hr(Yr, this, Zr).call(this, e, `next`));
    }
    throw(e) {
      k(Kr, this) &&
        (k(Wr, this).push(e),
        Hr(Yr, this, Zr).call(this, e, `throw`),
        Ur(Kr, this, !1),
        Ur(qr, this, !1),
        (k(Gr, this).length = 0));
    }
    return(e) {
      k(Kr, this) &&
        (k(Wr, this).push(e),
        Hr(Yr, this, Zr).call(this, e, `return`),
        Ur(Kr, this, !1),
        Ur(qr, this, !0),
        (k(Gr, this).length = 0));
    }
  };
function Zr(e, t) {
  for (let r = 0; r < k(Jr, this); r++) {
    var n;
    (n = k(Gr, this)[r]) == null || n[t](e);
  }
}
function Qr(e) {
  for (let t = 0, n = k(Wr, this).length; t < n; t++) {
    let r = k(Wr, this)[t];
    !k(Kr, this) && t === n - 1 ? e[k(qr, this) ? `return` : `throw`](r) : e.next(r);
  }
}
function $r(e) {
  return e instanceof Xr;
}
function ei() {
  return new Xr();
}
function ti(e, t) {
  let n = ei(),
    r = e[Gt](),
    i = !1,
    a = !1;
  t?.push(() => {
    a ||
      i ||
      ((i = !0),
      Promise.resolve()
        .then(() => r.return?.call(r))
        .catch(() => {}));
  });
  async function o() {
    try {
      for (; !i;) {
        let e = await r.next();
        if (i) return;
        if (e.done) {
          ((a = !0), n.return(e.value));
          break;
        }
        n.next(e.value);
      }
    } catch (e) {
      ((a = !0), i || n.throw(e));
    }
  }
  return (o().catch(() => {}), n);
}
var ni = Or(Gt, Er);
function ri(e) {
  return ni(e);
}
async function ii(e) {
  try {
    return [1, await e];
  } catch (e) {
    return [0, e];
  }
}
function ai(e, t) {
  return {
    plugins: t.plugins,
    mode: e,
    marked: new Set(),
    features: 127 ^ (t.disabledFeatures || 0),
    refs: t.refs || new Map(),
    depthLimit: t.depthLimit || 1e3,
    compactArrayBufferViews: t.compactArrayBufferViews ?? !1,
  };
}
function oi(e, t) {
  e.marked.add(t);
}
function si(e, t) {
  let n = e.refs.size;
  return (e.refs.set(t, n), n);
}
function ci(e, t) {
  let n = e.refs.get(t);
  return n == null ? { type: 0, value: si(e, t) } : (oi(e, n), { type: 1, value: nr(n) });
}
function li(e, t) {
  let n = ci(e, t);
  return n.type === 1 ? n : Gn(t) ? { type: 2, value: sr(n.value, t) } : n;
}
function ui(e, t) {
  let n = li(e, t);
  if (n.type !== 0) return n.value;
  if (t in an) return or(n.value, t);
  throw new Nn(t);
}
function di(e, t) {
  let n = ci(e, Rr[t]);
  return n.type === 1
    ? n.value
    : O(26, n.value, t, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0);
}
function fi(e) {
  let t = ci(e, Ir);
  return t.type === 1
    ? t.value
    : O(
        27,
        t.value,
        void 0,
        void 0,
        void 0,
        void 0,
        void 0,
        void 0,
        ui(e, Jt),
        void 0,
        void 0,
        void 0,
      );
}
function pi(e) {
  let t = ci(e, Lr);
  return t.type === 1
    ? t.value
    : O(
        29,
        t.value,
        void 0,
        void 0,
        void 0,
        void 0,
        void 0,
        [di(e, 1), ui(e, Gt)],
        void 0,
        void 0,
        void 0,
        void 0,
      );
}
function mi(e, t, n, r) {
  return O(
    n ? 11 : 10,
    e,
    void 0,
    void 0,
    void 0,
    r,
    void 0,
    void 0,
    void 0,
    void 0,
    Qn(t),
    void 0,
  );
}
function hi(e, t, n, r) {
  return O(
    8,
    t,
    void 0,
    void 0,
    void 0,
    void 0,
    { k: n, v: r },
    void 0,
    di(e, 0),
    void 0,
    void 0,
    void 0,
  );
}
function gi(e, t) {
  if (!e.compactArrayBufferViews) return t;
  let n = new Uint8Array(t.buffer, t.byteOffset, t.byteLength).slice().buffer,
    r = t.constructor;
  return new r(n);
}
function _i(e) {
  if (typeof Buffer < `u`) return Buffer.from(e).toString(`base64`);
  let t = new Uint8Array(e);
  if (typeof t.toBase64 == `function`) return t.toBase64();
  let n = ``;
  for (let e = 0, r = t.length; e < r; e++) n += String.fromCharCode(t[e]);
  return btoa(n);
}
function vi(e, t, n) {
  return O(19, t, _i(n), void 0, void 0, void 0, void 0, void 0, di(e, 5), void 0, void 0, void 0);
}
function yi(e, t) {
  return { base: ai(e, t), child: void 0 };
}
var bi = class {
  constructor(e, t) {
    ((this._p = e), (this.depth = t));
  }
  parse(e) {
    return Bi(this._p, this.depth, e);
  }
};
async function xi(e, t, n) {
  let r = [];
  for (let i = 0, a = n.length; i < a; i++) i in n ? (r[i] = await Bi(e, t, n[i])) : (r[i] = 0);
  return r;
}
async function Si(e, t, n, r) {
  return lr(n, r, await xi(e, t, r));
}
async function Ci(e, t, n) {
  let r = Object.entries(n),
    i = [],
    a = [];
  for (let n = 0, o = r.length; n < o; n++) (i.push(Sn(r[n][0])), a.push(await Bi(e, t, r[n][1])));
  return (
    Jt in n && (i.push(ui(e.base, Jt)), a.push(vr(fi(e.base), await Bi(e, t, Nr(n))))),
    Gt in n && (i.push(ui(e.base, Gt)), a.push(yr(pi(e.base), await Bi(e, t, ti(n))))),
    nn in n && (i.push(ui(e.base, nn)), a.push(er(n[nn]))),
    qt in n && (i.push(ui(e.base, qt)), a.push(n[qt] ? dn : fn)),
    { k: i, v: a }
  );
}
async function wi(e, t, n, r, i) {
  return mi(n, r, i, await Ci(e, t, r));
}
async function Ti(e, t, n, r) {
  return ur(n, await Bi(e, t, r.valueOf()));
}
async function Ei(e, t, n, r) {
  return ((r = gi(e.base, r)), fr(n, r, await Bi(e, t, r.buffer)));
}
async function Di(e, t, n, r) {
  return ((r = gi(e.base, r)), pr(n, r, await Bi(e, t, r.buffer)));
}
async function Oi(e, t, n, r) {
  return ((r = gi(e.base, r)), mr(n, r, await Bi(e, t, r.buffer)));
}
async function ki(e, t, n, r) {
  let i = Zn(r, e.base.features);
  return hr(n, r, i ? await Ci(e, t, i) : void 0);
}
async function Ai(e, t, n, r) {
  let i = Zn(r, e.base.features);
  return gr(n, r, i ? await Ci(e, t, i) : void 0);
}
async function ji(e, t, n, r) {
  let i = [],
    a = [];
  for (let [n, o] of r.entries()) (i.push(await Bi(e, t, n)), a.push(await Bi(e, t, o)));
  return hi(e.base, n, i, a);
}
async function Mi(e, t, n, r) {
  let i = [];
  for (let n of r.keys()) i.push(await Bi(e, t, n));
  return _r(n, i);
}
async function Ni(e, t, n, r) {
  let i = e.base.plugins;
  if (i)
    for (let a = 0, o = i.length; a < o; a++) {
      let o = i[a];
      if (o.parse.async && o.test(r))
        return cr(n, o.tag, await o.parse.async(r, new bi(e, t), { id: n }));
    }
}
async function Pi(e, t, n, r) {
  let [i, a] = await ii(r);
  return O(
    12,
    n,
    i,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    await Bi(e, t, a),
    void 0,
    void 0,
    void 0,
  );
}
function Fi(e, t, n, r, i) {
  let a = [],
    o = n.on({
      next: (n) => {
        (oi(this.base, t),
          Bi(this, e, n).then(
            (e) => {
              a.push(xr(t, e));
            },
            (e) => {
              (i(e), o());
            },
          ));
      },
      throw: (n) => {
        (oi(this.base, t),
          Bi(this, e, n).then(
            (e) => {
              (a.push(Sr(t, e)), r(a), o());
            },
            (e) => {
              (i(e), o());
            },
          ));
      },
      return: (n) => {
        (oi(this.base, t),
          Bi(this, e, n).then(
            (e) => {
              (a.push(Cr(t, e)), r(a), o());
            },
            (e) => {
              (i(e), o());
            },
          ));
      },
    });
}
async function Ii(e, t, n, r) {
  return br(n, di(e.base, 4), await new Promise(Fi.bind(e, t, n, r)));
}
async function Li(e, t, n, r) {
  let i = [];
  for (let n = 0, a = r.v.length; n < a; n++) i[n] = await Bi(e, t, r.v[n]);
  return wr(n, i, r.t, r.d);
}
async function Ri(e, t, n, r) {
  if (Array.isArray(r)) return Si(e, t, n, r);
  if ($r(r)) return Ii(e, t, n, r);
  if (jr(r)) return Li(e, t, n, r);
  let i = r.constructor;
  if (i !== void 0 && typeof i != `function`) {
    let e = Object.getPrototypeOf(r);
    i = e === null ? void 0 : e.constructor;
  }
  if (i === Tr) return Bi(e, t, r.replacement);
  let a = await Ni(e, t, n, r);
  if (a) return a;
  switch (i) {
    case Object:
      return wi(e, t, n, r, !1);
    case void 0:
      return wi(e, t, n, r, !0);
    case Date:
      return rr(n, r);
    case Error:
    case EvalError:
    case RangeError:
    case ReferenceError:
    case SyntaxError:
    case TypeError:
    case URIError:
      return ki(e, t, n, r);
    case Number:
    case Boolean:
    case String:
    case BigInt:
      return Ti(e, t, n, r);
    case ArrayBuffer:
      return vi(e.base, n, r);
    case Int8Array:
    case Int16Array:
    case Int32Array:
    case Uint8Array:
    case Uint16Array:
    case Uint32Array:
    case Uint8ClampedArray:
    case Float32Array:
    case Float64Array:
      return Ei(e, t, n, r);
    case DataView:
      return Oi(e, t, n, r);
    case Map:
      return ji(e, t, n, r);
    case Set:
      return Mi(e, t, n, r);
  }
  if (i === Promise || r instanceof Promise) return Pi(e, t, n, r);
  let o = e.base.features;
  if (o & 32 && i === RegExp) return ar(n, r);
  if (o & 16)
    switch (i) {
      case BigInt64Array:
      case BigUint64Array:
        return Di(e, t, n, r);
    }
  if (o & 1 && typeof AggregateError < `u` && (i === AggregateError || r instanceof AggregateError))
    return Ai(e, t, n, r);
  if (o & 64 && typeof Temporal < `u`)
    switch (i) {
      case Temporal.Instant:
        return ir(n, 0, r);
      case Temporal.Duration:
        return ir(n, 1, r);
      case Temporal.PlainDate:
        return ir(n, 2, r);
      case Temporal.PlainDateTime:
        return ir(n, 3, r);
      case Temporal.PlainMonthDay:
        return ir(n, 4, r);
      case Temporal.PlainTime:
        return ir(n, 5, r);
      case Temporal.PlainYearMonth:
        return ir(n, 6, r);
      case Temporal.ZonedDateTime:
        return ir(n, 7, r);
    }
  if (r instanceof Error) return ki(e, t, n, r);
  if (Jt in r || Gt in r) return wi(e, t, n, r, !!i);
  throw new Nn(r);
}
async function zi(e, t, n) {
  let r = li(e.base, n);
  if (r.type !== 0) return r.value;
  let i = await Ni(e, t, r.value, n);
  if (i) return i;
  throw new Nn(n);
}
async function Bi(e, t, n) {
  if (t >= e.base.depthLimit) throw new Vn(e.base.depthLimit);
  switch (typeof n) {
    case `boolean`:
      return n ? dn : fn;
    case `undefined`:
      return pn;
    case `string`:
      return er(n);
    case `number`:
      return $n(n);
    case `bigint`:
      return tr(n);
    case `object`:
      if (n) {
        let r = li(e.base, n);
        return r.type === 0 ? await Ri(e, t + 1, r.value, n) : r.value;
      }
      return mn;
    case `symbol`:
      return ui(e.base, n);
    case `function`:
      return zi(e, t, n);
    default:
      throw new Nn(n);
  }
}
async function Vi(e, t) {
  try {
    return await Bi(e, 0, t);
  } catch (e) {
    throw e instanceof An ? e : new An(e);
  }
}
function A(e) {
  return e;
}
function j(e, t) {
  for (let n = 0, r = t.length; n < r; n++) {
    let r = t[n];
    e.has(r) || (e.add(r), r.extends && j(e, r.extends));
  }
}
function M(e) {
  if (e) {
    let t = new Set();
    return (j(t, e), [...t]);
  }
}
function Hi(e) {
  switch (e) {
    case `Int8Array`:
      return Int8Array;
    case `Int16Array`:
      return Int16Array;
    case `Int32Array`:
      return Int32Array;
    case `Uint8Array`:
      return Uint8Array;
    case `Uint16Array`:
      return Uint16Array;
    case `Uint32Array`:
      return Uint32Array;
    case `Uint8ClampedArray`:
      return Uint8ClampedArray;
    case `Float32Array`:
      return Float32Array;
    case `Float64Array`:
      return Float64Array;
    case `BigInt64Array`:
      return BigInt64Array;
    case `BigUint64Array`:
      return BigUint64Array;
    default:
      throw new zn(e);
  }
}
function Ui(e) {
  switch (e) {
    case `constructor`:
    case `__proto__`:
    case `prototype`:
    case `__defineGetter__`:
    case `__defineSetter__`:
    case `__lookupGetter__`:
    case `__lookupSetter__`:
      return !1;
    default:
      return !0;
  }
}
function Wi(e) {
  switch (e) {
    case Gt:
    case qt:
    case nn:
    case Jt:
      return !0;
    default:
      return !1;
  }
}
var Gi = 1e6,
  Ki = 512,
  qi = 1e4,
  Ji = 2e4;
function Yi(e, t) {
  switch (t) {
    case 3:
      return Object.freeze(e);
    case 1:
      return Object.preventExtensions(e);
    case 2:
      return Object.seal(e);
    default:
      return e;
  }
}
var Xi = 1e3;
function Zi(e, t) {
  let n = t.maxBase64Length ?? Gi;
  if (!Number.isSafeInteger(n) || n < 0)
    throw RangeError(`maxBase64Length must be a non-negative safe integer`);
  let r = t.refs || new Map();
  return (
    `types` in r || Object.assign(r, { types: new Map() }),
    {
      mode: e,
      plugins: t.plugins,
      refs: r,
      features: t.features ?? 127 ^ (t.disabledFeatures || 0),
      depthLimit: t.depthLimit || Xi,
      maxBase64Length: n,
    }
  );
}
function Qi(e) {
  return { mode: 2, base: Zi(2, e), child: void 0 };
}
var $i = class {
  constructor(e, t) {
    ((this._p = e), (this.depth = t));
  }
  deserialize(e) {
    return P(this._p, this.depth, e);
  }
};
function ea(e, t) {
  if (t < 0 || !Number.isFinite(t) || !Number.isInteger(t)) throw new Bn({ t: 4, i: t });
  if (e.refs.has(t)) throw Error(`Conflicted ref id: ` + t);
}
function ta(e) {
  return (
    !!e &&
    (typeof e == `object` || typeof e == `function`) &&
    `then` in e &&
    typeof e.then == `function`
  );
}
function na(e, t, n) {
  return (ea(e.base, t), e.state.marked.has(t) && e.base.refs.set(t, n), n);
}
function ra(e, t, n) {
  return (ea(e.base, t), e.base.refs.set(t, n), n);
}
function N(e, t, n) {
  return e.mode === 1 ? na(e, t, n) : ra(e, t, n);
}
function ia(e, t, n) {
  if (Object.hasOwn(t, n)) return t[n];
  throw new Bn(e);
}
function aa(e, t) {
  return N(e, t.i, Jn(wn(t.s)));
}
function oa(e, t) {
  if (!Array.isArray(t)) throw new Bn(e);
}
function sa(e, t, n) {
  let r = n.a;
  oa(n, r);
  let i = r.length,
    a = N(e, n.i, Array(i));
  for (let n = 0, o; n < i; n++) ((o = r[n]), o && (a[n] = P(e, t, o)));
  return (Yi(a, n.o), a);
}
function ca(e, t, n) {
  Ui(t)
    ? (e[t] = n)
    : Object.defineProperty(e, t, { value: n, configurable: !0, enumerable: !0, writable: !0 });
}
function la(e, t, n, r, i) {
  if (typeof r == `string`) ca(n, wn(r), P(e, t, i));
  else {
    let a = P(e, t, r);
    switch (typeof a) {
      case `string`:
        ca(n, a, P(e, t, i));
        break;
      case `symbol`:
        Wi(a) && (n[a] = P(e, t, i));
        break;
      default:
        throw new Bn(r);
    }
  }
}
function ua(e, t, n) {
  e.base.refs.types.set(t, n);
}
function da(e, t, n, r) {
  if (e.base.refs.types.get(n) !== r) throw new Bn(t);
}
function fa(e, t, n, r) {
  let i = n.k;
  if ((oa(n, i), oa(n, n.v), i.length > 0))
    for (let a = 0, o = n.v, s = i.length; a < s; a++) la(e, t, r, i[a], o[a]);
  return r;
}
function pa(e, t, n) {
  let r = N(e, n.i, n.t === 10 ? {} : Object.create(null));
  return (fa(e, t, n.p, r), Yi(r, n.o), r);
}
function ma(e, t) {
  return N(e, t.i, new Date(t.s));
}
function ha(e, t) {
  if (!(e.base.features & 64)) throw new Pn(t);
  let n;
  switch (t.c) {
    case 0:
      n = Temporal.Instant.from(t.s);
      break;
    case 1:
      n = Temporal.Duration.from(t.s);
      break;
    case 2:
      n = Temporal.PlainDate.from(t.s);
      break;
    case 3:
      n = Temporal.PlainDateTime.from(t.s);
      break;
    case 4:
      n = Temporal.PlainMonthDay.from(t.s);
      break;
    case 5:
      n = Temporal.PlainTime.from(t.s);
      break;
    case 6:
      n = Temporal.PlainYearMonth.from(t.s);
      break;
    case 7:
      n = Temporal.ZonedDateTime.from(t.s);
      break;
    default:
      throw new Bn(t);
  }
  return N(e, t.i, n);
}
function ga(e, t) {
  if (e.base.features & 32) {
    let n = wn(t.c);
    if (n.length > Ji) throw new Bn(t);
    return N(e, t.i, new RegExp(n, t.m));
  }
  throw new Pn(t);
}
function _a(e, t, n) {
  let r = N(e, n.i, new Set());
  oa(n, n.a);
  for (let i = 0, a = n.a, o = a.length; i < o; i++) r.add(P(e, t, a[i]));
  return r;
}
function va(e, t, n) {
  let r = N(e, n.i, new Map());
  (oa(n, n.e.k), oa(n, n.e.v));
  for (let i = 0, a = n.e.k, o = n.e.v, s = a.length; i < s; i++)
    r.set(P(e, t, a[i]), P(e, t, o[i]));
  return r;
}
function ya(e, t) {
  if (typeof t.s != `string`) throw new Bn(t);
  if (t.s.length > e.base.maxBase64Length)
    throw RangeError(`ArrayBuffer exceeds maxBase64Length (` + e.base.maxBase64Length + `)`);
  let n = wn(t.s),
    r;
  if (n.length < Ki || typeof Buffer > `u`) r = kr(n);
  else {
    let e = atob(n);
    ((r = new ArrayBuffer(e.length)), Buffer.from(r).write(e, `latin1`));
  }
  return N(e, t.i, r);
}
function ba(e, t, n) {
  let r = Hi(n.c),
    i = P(e, t, n.f);
  if (!(i instanceof ArrayBuffer)) throw new Bn(n);
  let a = n.b ?? 0;
  if (a < 0 || a > i.byteLength) throw new Bn(n);
  return N(e, n.i, new r(i, a, n.l));
}
function xa(e, t, n) {
  let r = P(e, t, n.f);
  if (!(r instanceof ArrayBuffer)) throw new Bn(n);
  let i = n.b ?? 0;
  if (i < 0 || i > r.byteLength) throw new Bn(n);
  return N(e, n.i, new DataView(r, i, n.l));
}
function Sa(e, t, n, r) {
  if (n.p) {
    let i = fa(e, t, n.p, {});
    Object.defineProperties(r, Object.getOwnPropertyDescriptors(i));
  }
  return r;
}
function Ca(e, t, n) {
  return Sa(e, t, n, N(e, n.i, AggregateError([], wn(n.m))));
}
function wa(e, t, n) {
  let r = ia(n, ln, n.s);
  return Sa(e, t, n, N(e, n.i, new r(wn(n.m))));
}
function Ta(e, t, n) {
  let r = Er(),
    i = N(e, n.i, r.p),
    a = P(e, t, n.f);
  if (ta(a)) throw new Bn(n.f);
  return (n.s ? r.s(a) : r.f(a), i);
}
function Ea(e, t, n) {
  return N(e, n.i, Object(P(e, t, n.f)));
}
function Da(e, t, n) {
  let r = e.base.plugins;
  if (r) {
    let i = wn(n.c);
    for (let a = 0, o = r.length; a < o; a++) {
      let o = r[a];
      if (o.tag === i) return N(e, n.i, o.deserialize(n.s, new $i(e, t), { id: n.i }));
    }
  }
  throw new Fn(n.c);
}
function Oa(e, t) {
  let n = N(e, t.i, N(e, t.s, Er()).p);
  return (ua(e, t.s, 22), n);
}
function ka(e, t, n) {
  let r = e.base.refs.get(n.i);
  if (r) {
    da(e, n, n.i, 22);
    let i = P(e, t, n.a[1]);
    if (ta(i)) throw new Bn(n.a[1]);
    n.t === 23 ? r.s(i) : r.f(i);
    return;
  }
  throw new In(`Promise`);
}
function Aa(e, t, n) {
  P(e, t, n.a[0]);
  let r = P(e, t, n.a[1]);
  if (!jr(r)) throw new Bn(n.a[1]);
  return Fr(r);
}
function ja(e, t, n) {
  P(e, t, n.a[0]);
  let r = P(e, t, n.a[1]);
  if (!$r(r)) throw new Bn(n.a[1]);
  return ri(r);
}
function Ma(e, t, n) {
  let r = N(e, n.i, ei());
  ua(e, n.i, 31);
  let i = n.a;
  oa(n, i);
  let a = i.length;
  if (a) for (let n = 0; n < a; n++) P(e, t, i[n]);
  return r;
}
function Na(e, t, n) {
  let r = e.base.refs.get(n.i);
  if (r) {
    (da(e, n, n.i, 31), r.next(P(e, t, n.f)));
    return;
  }
  throw new In(`Stream`);
}
function Pa(e, t, n) {
  let r = e.base.refs.get(n.i);
  if (r) {
    (da(e, n, n.i, 31), r.throw(P(e, t, n.f)));
    return;
  }
  throw new In(`Stream`);
}
function Fa(e, t, n) {
  let r = e.base.refs.get(n.i);
  if (r) {
    (da(e, n, n.i, 31), r.return(P(e, t, n.f)));
    return;
  }
  throw new In(`Stream`);
}
function Ia(e, t, n) {
  P(e, t, n.f);
}
function La(e, t, n) {
  P(e, t, n.a[1]);
}
function Ra(e, t) {
  return Number.isInteger(e) && e >= -1 && e < t;
}
function za(e, t, n) {
  oa(n, n.a);
  let r = n.a.length;
  if (!(Ra(n.s, r) && Ra(n.l, r))) throw new Bn(n);
  let i = N(e, n.i, Mr([], n.s, n.l));
  for (let a = 0; a < r; a++) i.v[a] = P(e, t, n.a[a]);
  return i;
}
function P(e, t, n) {
  if (t > e.base.depthLimit) throw new Vn(e.base.depthLimit);
  switch (((t += 1), n.t)) {
    case 2:
      return ia(n, sn, n.s);
    case 0:
      return Number(n.s);
    case 1:
      return wn(String(n.s));
    case 3:
      if (String(n.s).length > qi) throw new Bn(n);
      return BigInt(n.s);
    case 4:
      return e.base.refs.get(n.i);
    case 18:
      return aa(e, n);
    case 9:
      return sa(e, t, n);
    case 10:
    case 11:
      return pa(e, t, n);
    case 5:
      return ma(e, n);
    case 6:
      return ga(e, n);
    case 7:
      return _a(e, t, n);
    case 8:
      return va(e, t, n);
    case 19:
      return ya(e, n);
    case 16:
    case 15:
      return ba(e, t, n);
    case 20:
      return xa(e, t, n);
    case 14:
      return Ca(e, t, n);
    case 13:
      return wa(e, t, n);
    case 12:
      return Ta(e, t, n);
    case 17:
      return ia(n, on, n.s);
    case 21:
      return Ea(e, t, n);
    case 25:
      return Da(e, t, n);
    case 22:
      return Oa(e, n);
    case 23:
    case 24:
      return ka(e, t, n);
    case 28:
      return Aa(e, t, n);
    case 30:
      return ja(e, t, n);
    case 31:
      return Ma(e, t, n);
    case 32:
      return Na(e, t, n);
    case 33:
      return Pa(e, t, n);
    case 34:
      return Fa(e, t, n);
    case 27:
      return Ia(e, t, n);
    case 29:
      return La(e, t, n);
    case 35:
      return za(e, t, n);
    case 36:
      return ha(e, n);
    default:
      throw new Pn(n);
  }
}
function Ba(e, t) {
  try {
    return P(e, 0, t);
  } catch (e) {
    throw new jn(e);
  }
}
function Va(e, t) {
  let n = M(t.plugins);
  return Ba(
    Qi({
      maxBase64Length: t.maxBase64Length,
      plugins: n,
      refs: t.refs,
      features: t.features,
      disabledFeatures: t.disabledFeatures,
      depthLimit: t.depthLimit,
    }),
    e,
  );
}
async function Ha(e, t = {}) {
  let n = M(t.plugins),
    r = yi(1, {
      compactArrayBufferViews: t.compactArrayBufferViews,
      plugins: n,
      disabledFeatures: t.disabledFeatures,
    });
  return { t: await Vi(r, e), f: r.base.features, m: Array.from(r.base.marked) };
}
function Ua(e) {
  return A({
    tag: `$TSR/t/` + e.key,
    test: e.test,
    parse: {
      sync(t, n) {
        return { v: n.parse(e.toSerializable(t)) };
      },
      async async(t, n) {
        return { v: await n.parse(e.toSerializable(t)) };
      },
      stream(t, n) {
        return { v: n.parse(e.toSerializable(t)) };
      },
    },
    serialize: void 0,
    deserialize(t, n) {
      return e.fromSerializable(n.deserialize(t.v));
    },
  });
}
var Wa = A({
    tag: `$TSR/Error`,
    test(e) {
      return e instanceof Error;
    },
    parse: {
      sync(e, t) {
        return { message: t.parse(e.message) };
      },
      async async(e, t) {
        return { message: await t.parse(e.message) };
      },
      stream(e, t) {
        return { message: t.parse(e.message) };
      },
    },
    serialize(e, t) {
      return `new Error(` + t.serialize(e.message) + `)`;
    },
    deserialize(e, t) {
      return Error(t.deserialize(e.message));
    },
  }),
  Ga = class {
    constructor(e, t) {
      ((this.stream = e), (this.hint = t?.hint ?? `binary`));
    }
  };
function Ka(e) {
  let t = [];
  for (let n = 0; n < e.length; n += 32768)
    t.push(String.fromCharCode.apply(null, e.subarray(n, n + 32768)));
  return btoa(t.join(``));
}
var qa = new TextDecoder(`utf-8`, { fatal: !0, ignoreBOM: !0 });
function Ja(e) {
  try {
    return `t` + qa.decode(e);
  } catch {
    return `b` + Ka(e);
  }
}
function Ya(e, t, n) {
  n?.throwIfAborted();
  let r = ei(),
    i = e.getReader(),
    a = !0,
    o = () => {
      ((a = !1), n?.removeEventListener(`abort`, c), i.releaseLock());
    },
    s = (e) => (a ? (i.cancel(e).catch(() => {}), o(), !0) : !1),
    c = () => {
      s(n.reason) && r.throw(n.reason);
    };
  return (
    n?.addEventListener(`abort`, c),
    (async () => {
      try {
        for (; a;) {
          let { done: e, value: n } = await i.read();
          if (!a) return;
          if (e) {
            (o(), r.return(void 0));
            return;
          }
          r.next(t(n));
        }
      } catch (e) {
        s(e) && r.throw(e);
      }
    })(),
    [r, s]
  );
}
function Xa(e) {
  return A({
    tag: `tss/RawStream`,
    test: (e) => e instanceof Ga,
    parse: {
      async: async (t, n) => {
        let r = await n.parse(t.hint === `text`),
          [i] = Ya(t.stream, t.hint === `text` ? Ja : Ka, e);
        return { text: r, stream: await n.parse(i) };
      },
    },
    serialize: void 0,
    deserialize: void 0,
  });
}
var Za = Xa(),
  Qa = {},
  $a = (e) =>
    new ReadableStream({
      start(t) {
        e.on({
          next(e) {
            try {
              t.enqueue(e);
            } catch {}
          },
          throw(e) {
            t.error(e);
          },
          return() {
            try {
              t.close();
            } catch {}
          },
        });
      },
    }),
  eo = A({
    tag: `seroval-plugins/web/ReadableStreamFactory`,
    test(e) {
      return e === Qa;
    },
    parse: {
      sync() {
        return Qa;
      },
      async async() {
        return await Promise.resolve(Qa);
      },
      stream() {
        return Qa;
      },
    },
    serialize() {
      return $a.toString();
    },
    deserialize() {
      return Qa;
    },
  });
async function to(e, t) {
  try {
    for (;;) {
      let n = await t.read();
      if (n.done) {
        (e.return(n.value), t.releaseLock());
        break;
      }
      e.next(n.value);
    }
  } catch (n) {
    (t.releaseLock(), e.throw(n));
  }
}
function no(e) {
  (e.cancel().catch(() => {}), e.releaseLock());
}
function ro(e) {
  let t = ei(),
    n = e.getReader(),
    r = no.bind(null, n);
  return (to(t, n).catch(r), [t, r]);
}
var io = A({
  tag: `seroval/plugins/web/ReadableStream`,
  extends: [eo],
  test(e) {
    return typeof ReadableStream > `u` ? !1 : e instanceof ReadableStream;
  },
  parse: {
    sync(e, t) {
      return { factory: t.parse(Qa), stream: t.parse(ei()) };
    },
    async async(e, t) {
      return { factory: await t.parse(Qa), stream: await t.parse(ro(e)[0]) };
    },
    stream(e, t) {
      let [n, r] = ro(e);
      return (t.addCleanup(r), { factory: t.parse(Qa), stream: t.parse(n) });
    },
  },
  serialize(e, t) {
    return `(` + t.serialize(e.factory) + `)(` + t.serialize(e.stream) + `)`;
  },
  deserialize(e, t) {
    let n = t.deserialize(e.stream);
    if (!n || typeof n != `object` || !$r(n)) throw Error(`Expected a stream source.`);
    return $a(n);
  },
});
function ao(e) {
  return [Wa, e ? Xa(e) : Za, io];
}
[...ao()];
function oo(e) {
  return A({
    tag: `tss/RawStream`,
    test: () => !1,
    parse: {},
    serialize: void 0,
    deserialize(t, n) {
      return e(n.deserialize(t.streamId));
    },
  });
}
function so(e) {
  return [...(Et()?.serializationAdapters?.map(Ua) ?? []), ...e];
}
function co(e) {
  return so(ao(e));
}
var lo = new TextDecoder(),
  uo = new Uint8Array(),
  fo = new ByteLengthQueuingStrategy({ highWaterMark: 0 });
function po(e) {
  let t = e.getReader(),
    n = new Map(),
    r = 0,
    i,
    a,
    o = () => {
      (i?.(), (i = void 0));
    },
    s = (e, t) => {
      let n = e[1];
      ((e[1] = !1), n && (t === 1 ? n.close() : n.error(t[0])));
    },
    c = new ReadableStream({
      start(e) {
        a = e;
      },
      pull: o,
      cancel(e) {
        let i = [e === void 0 ? Error(`Framed response cancelled`) : e];
        ((r = i), o(), t.cancel(e).catch(() => {}));
        for (let e of n.values()) s(e, i);
      },
    });
  function l(e) {
    let t = n.get(e);
    if (t) return t;
    if (n.size >= 1024) throw Error(`Too many raw streams`);
    let i,
      a = [
        new ReadableStream(
          {
            start(e) {
              i = e;
            },
            cancel() {
              a[1] !== !1 && (a[1] = null);
            },
          },
          fo,
        ),
        i,
      ];
    return (n.set(e, a), r !== 0 && s(a, r), a);
  }
  function u(e) {
    if (e === 0 || e >>> 0 !== e) throw RangeError(`Invalid raw stream ID`);
    return l(e)[0];
  }
  return (
    (async () => {
      let e = uo,
        o = 0;
      async function c() {
        for (; o === e.byteLength;) {
          ((e = uo), (o = 0));
          let n = await t.read();
          if (r !== 0 || n.done) return !1;
          e = n.value;
        }
        return !0;
      }
      async function u(t, n) {
        if (t === 0) return uo;
        if (!(await c())) {
          if (n) return;
          throw Error(`Incomplete frame`);
        }
        if (e.byteLength - o >= t) {
          let n = e.subarray(o, o + t);
          return ((o += t), o === e.byteLength && ((e = uo), (o = 0)), n);
        }
        let r = new Uint8Array(t),
          i = 0;
        for (; i < t;) {
          if (!(await c())) throw Error(`Incomplete frame`);
          let n = Math.min(t - i, e.byteLength - o);
          (r.set(e.subarray(o, o + n), i), (o += n), (i += n));
        }
        return (o === e.byteLength && ((e = uo), (o = 0)), r);
      }
      try {
        for (; r === 0;) {
          let e = await u(9, !0);
          if (r !== 0) return;
          if (!e) {
            for (let e of n.values()) if (e[1]) throw Error(`Incomplete raw stream`);
            ((r = 1), a.close());
            return;
          }
          let t = e[0],
            o = ((e[1] << 24) | (e[2] << 16) | (e[3] << 8) | e[4]) >>> 0,
            c = ((e[5] << 24) | (e[6] << 16) | (e[7] << 8) | e[8]) >>> 0;
          if (((e = uo), t > 3 || (t === 0) != (o === 0) || c > 16777216 || (t === 2 && c !== 0)))
            throw Error(`Invalid frame`);
          let d = t === 0 ? void 0 : l(o);
          if (d?.[1] === !1) throw Error(`Raw stream already ended`);
          let f = await u(c);
          if (r !== 0) return;
          if (!d) {
            let e = lo.decode(f);
            for (f = uo, a.enqueue(e); r === 0 && a.desiredSize <= 0;)
              await new Promise((e) => {
                i = e;
              });
            continue;
          }
          if (t === 1) {
            let e = d[1];
            if (e) {
              if (-e.desiredSize > 134217728) {
                (e.error(Error(`Raw stream ${o} has too many unread bytes`)),
                  (d[1] = null),
                  (f = uo));
                continue;
              }
              let t = f.byteLength * 4 < f.buffer.byteLength ? f.slice() : f;
              ((f = uo), e.enqueue(t));
            }
          } else s(d, t === 2 ? 1 : [Error(lo.decode(f))]);
        }
      } catch (e) {
        if (r === 0) {
          let i = [e];
          ((r = i), t.cancel(e).catch(() => {}), a.error(e));
          for (let e of n.values()) s(e, i);
        }
      } finally {
        ((e = uo), t.releaseLock());
      }
    })(),
    [c, u]
  );
}
function mo(e) {
  return e;
}
var ho;
function F(e, t, n) {
  try {
    return Va(e, t);
  } catch (e) {
    throw (_o(n), e);
  }
}
async function go(e) {
  e.length > 0 && (await Promise.allSettled(e), (e.length = 0));
}
function _o(e) {
  for (let t of e) t.catch(() => {});
  e.length = 0;
}
var I = Object.prototype.hasOwnProperty;
function L(e) {
  for (let t in e) if (I.call(e, t)) return !0;
  return !1;
}
async function vo(e, t, n) {
  ho ||= co();
  let r = t[0],
    i = r.fetch ?? n,
    a = r.data instanceof FormData,
    o = new Headers(r.headers);
  if (
    (o.set(`x-tsr-serverFn`, `true`),
    a || o.set(`accept`, `${Tt}, application/x-ndjson, application/json`),
    r.method === `GET`)
  ) {
    if (a) throw Error(`FormData is not supported with GET requests`);
    let t = await yo(r);
    if (t !== void 0) {
      let n = Mt({ payload: t });
      e.includes(`?`) ? (e += `&${n}`) : (e += `?${n}`);
    }
  }
  let s;
  return (
    r.method === `POST` &&
      ((s = await xo(r)), typeof s == `string` && o.set(`content-type`, `application/json`)),
    So(() => i(e, { method: r.method, headers: o, signal: r.signal, body: s }))
  );
}
async function yo(e) {
  let t;
  return (
    e.data !== void 0 && (t = { data: e.data }),
    e.context && L(e.context) && ((t ??= {}).context = e.context),
    t ? bo(t, e.signal) : void 0
  );
}
async function bo(e, t) {
  t?.throwIfAborted();
  let n;
  try {
    n = await Ha(e, { plugins: t ? co(t) : ho });
  } finally {
    t?.throwIfAborted();
  }
  return JSON.stringify(n);
}
async function xo(e) {
  if (e.data instanceof FormData) {
    let t;
    return (
      e.context && L(e.context) && (t = await bo(e.context, e.signal)),
      t !== void 0 && e.data.set(Ct, t),
      e.data
    );
  }
  return yo(e);
}
async function So(e) {
  let t;
  try {
    t = await e();
  } catch (e) {
    if (e instanceof Response) t = e;
    else throw e;
  }
  if (t.headers.get(`x-tss-raw`) === `true`) return t;
  let n = t.headers.get(`content-type`);
  if ((n || jt(), t.headers.get(`x-tss-serialized`))) {
    let e;
    if (n.includes(`application/x-tss-framed`)) {
      let r = /;\s*v=(\d+)/.exec(n)?.[1];
      if (r && +r != 1) throw Error(`Unsupported framed protocol version ${r}`);
      if (!t.body) throw Error(`No response body for framed response`);
      let [i, a] = po(t.body);
      e = await Co(i, [oo(a), ...ho]);
    } else if (n.includes(`application/json`)) {
      let n = await t.json(),
        r = [];
      ((e = F(n, { plugins: ho }, r)), await go(r));
    }
    if ((e || jt(), e instanceof Error)) throw e;
    return e;
  }
  if (n.includes(`application/json`)) {
    let e = await t.json(),
      n = kt(e);
    if (n) throw n;
    if (Dt(e)) throw e;
    return e;
  }
  if (!t.ok) throw Error(await t.text());
  return t;
}
async function Co(e, t) {
  let n = e.getReader(),
    r = { refs: new Map(), plugins: t },
    i = (e) => {
      n.cancel(e).catch(() => {});
    },
    a,
    o = [];
  try {
    let e = await n.read();
    if (e.done) throw Error(`Stream ended before first object`);
    a = F(JSON.parse(e.value), r, o);
  } catch (e) {
    throw (i(e), n.releaseLock(), e);
  }
  return (
    (async () => {
      let e = [];
      try {
        for (;;) {
          let t = await n.read();
          if (t.done) return;
          (F(JSON.parse(t.value), r, e), _o(e));
        }
      } catch (e) {
        (i(e), console.error(`Stream processing error:`, e));
      } finally {
        n.releaseLock();
      }
    })(),
    await go(o),
    a
  );
}
function wo(e) {
  let t = `/_serverFn/` + e;
  return Object.assign(
    (...e) => {
      let n = Et()?.serverFns?.fetch;
      return vo(t, e, n ?? fetch);
    },
    { url: t, serverFnMeta: { id: e }, [wt]: !0 },
  );
}
var To = mo({
  key: `$TSS/serverfn`,
  test: (e) => (typeof e != `function` || !(wt in e) ? !1 : !!e[wt]),
  toSerializable: ({ serverFnMeta: e }) => ({ functionId: e.id }),
  fromSerializable: ({ functionId: e }) => wo(e),
});
function R(e) {
  return e?.isNotFound === !0;
}
function Eo() {
  try {
    return sessionStorage;
  } catch {
    return;
  }
}
var Do = `tsr-scroll-restoration-v1_3`,
  Oo = Eo();
function ko() {
  try {
    return JSON.parse(Oo?.getItem(`tsr-scroll-restoration-v1_3`) || `{}`);
  } catch {
    return {};
  }
}
var Ao = ko(),
  jo = `data-scroll-restoration-id`,
  Mo = (e) => e.state.__TSR_key || e.href;
function No(e) {
  let t = e.getAttribute(jo);
  if (t) return `[${jo}="${t}"]`;
  let n = ``,
    r = e,
    i;
  for (; (i = r.parentNode);) {
    let e = 1,
      t = r;
    for (; (t = t.previousElementSibling);) e++;
    let a = `${r.localName}:nth-child(${e})`;
    ((n = n ? `${a} > ${n}` : a), (r = i));
  }
  return n;
}
var Po = !1,
  z = `window`;
function Fo(e) {
  try {
    return typeof e == `function` ? e() : document.querySelector(e);
  } catch {}
}
function Io(e) {
  let t = new Set();
  for (let n of e) {
    if (n === z) continue;
    let e = Fo(n);
    e && t.add(e);
  }
  return t;
}
function Lo(e, t) {
  let n = t ?? e.options.scrollRestoration,
    r = e._scroll;
  n && (r.e = !0);
  let i = e.options.getScrollRestorationKey || Mo,
    a = new Set(),
    o = (e) => {
      let t = (Ao[e] ||= {});
      for (let e of a)
        e === document
          ? (t[z] = { scrollX, scrollY })
          : e.isConnected && (t[No(e)] = { scrollX: e.scrollLeft, scrollY: e.scrollTop });
    };
  (n &&
    !r.s &&
    ((r.s = !0),
    (Po = !1),
    (history.scrollRestoration = `manual`),
    document.addEventListener(
      `scroll`,
      (e) => {
        Po || a.add(e.target);
      },
      !0,
    ),
    e.subscribe(`onBeforeLoad`, (e) => {
      (e.fromLocation && o(i(e.fromLocation)), a.clear());
    }),
    addEventListener(`pagehide`, () => {
      ((history.scrollRestoration = `auto`),
        o(i(e.stores.resolvedLocation.get() ?? e.stores.location.get())));
      try {
        Oo?.setItem(Do, JSON.stringify(Ao));
      } catch {}
    }),
    addEventListener(`pageshow`, (e) => {
      e.persisted && (history.scrollRestoration = `manual`);
    })),
    !r.r &&
      ((r.r = !0),
      e.subscribe(`onRendered`, (t) => {
        let n = e.options.scrollRestorationBehavior,
          o = e.options.scrollToTopSelectors,
          s = r.n,
          c = r.h,
          l;
        if (
          (a.clear(),
          (r.n = !0),
          (r.h = !1),
          typeof e.options.scrollRestoration == `function` &&
            !e.options.scrollRestoration({ location: e.latestLocation }))
        )
          return;
        let u = i(t.toLocation),
          d = t.fromLocation && i(t.fromLocation);
        if (r.e && d && d !== u) {
          let e = Ao[d];
          if (e) {
            let t = Ao[u];
            for (let n in e) {
              if (n === z) {
                if (s) continue;
              } else {
                let e = Fo(n);
                if (!e || (s && o && ((l ??= Io(o)), l.has(e)))) continue;
              }
              ((t ||= Ao[u] = {}), (t[n] ??= e[n]));
            }
          }
        }
        Po = !0;
        try {
          let e = t.toLocation.hash,
            i = t.toLocation.state.__hashScrollIntoViewOptions ?? !0,
            a = !1;
          if (s) {
            !e && o && (l ??= Io(o));
            let t = e && i && c,
              s = r.e ? Ao[u] : void 0;
            if (s)
              for (let e in s) {
                let { scrollX: r, scrollY: i } = s[e];
                if (e === z) {
                  if (t) continue;
                  (scrollTo({ top: i, left: r, behavior: n }), (a = !0));
                } else {
                  let t = Fo(e);
                  t && ((t.scrollLeft = r), (t.scrollTop = i), l?.delete(t));
                }
              }
            if (!e) {
              let e = { top: 0, left: 0, behavior: n };
              if ((a || scrollTo(e), l)) for (let t of l) t.scrollTo(e);
            }
          }
          !a && e && i && document.getElementById(e)?.scrollIntoView(i);
        } finally {
          Po = !1;
        }
      })));
}
function Ro(e, t = String) {
  let n;
  for (let r in e) {
    let i = e[r];
    i !== void 0 && (n ||= new URLSearchParams()).set(r, t(i));
  }
  return n ? n.toString() : ``;
}
function zo(e) {
  return e ? (e === `false` ? !1 : e === `true` ? !0 : e * 0 == 0 && +e + `` === e ? +e : e) : ``;
}
function Bo(e) {
  let t = new URLSearchParams(e),
    n = Object.create(null);
  for (let [e, r] of t.entries()) {
    let t = n[e];
    t == null ? (n[e] = zo(r)) : Array.isArray(t) ? t.push(zo(r)) : (n[e] = [t, zo(r)]);
  }
  return n;
}
var Vo = /^(?:\s|["[{\d-]|fa|nu|tr)/,
  Ho = Wo(JSON.parse),
  Uo = Go(JSON.stringify, JSON.parse);
function Wo(e) {
  let t = e === JSON.parse;
  return (n) => {
    n[0] === `?` && (n = n.substring(1));
    let r = Bo(n);
    for (let n in r) {
      let i = r[n];
      if (typeof i == `string`) {
        if (t && !Vo.test(i)) continue;
        try {
          r[n] = e(i);
        } catch {}
      }
    }
    return r;
  };
}
function Go(e, t) {
  let n = t === JSON.parse;
  function r(r) {
    if (r && typeof r == `object`)
      try {
        return e(r);
      } catch {}
    else if (t && typeof r == `string`) {
      if (n && !Vo.test(r)) return r;
      try {
        return (t(r), e(r));
      } catch {}
    }
    return r;
  }
  return (e) => {
    let t = Ro(e, r);
    return t ? `?${t}` : ``;
  };
}
function Ko(e) {
  let t = new Map(),
    n,
    r;
  return {
    get(e) {
      let n = t.get(e);
      if (n) return ((n.visited = !0), n.value);
    },
    set(i, a) {
      let o = t.get(i);
      if (o) {
        o.value = a;
        return;
      }
      if (t.size >= e) {
        let e = n?.next().value;
        for (; !e || e.visited;) (e ? (e.visited = !1) : (n = t.values()), (e = n.next().value));
        (e === r && (n = void 0), t.delete(e.key));
      }
      let s = { key: i, value: a, visited: !1 };
      ((r = s), t.set(i, s));
    },
    clear() {
      (t.clear(), (n = void 0), (r = void 0));
    },
  };
}
var qo = 4,
  Jo = 5;
function Yo(e) {
  let t = e.names;
  if (t) return t;
  let n = [];
  for (let t of e) typeof t != `string` && n.push(t[1]);
  return (e.names = n);
}
function Xo(e, t, n) {
  let r = e.substring(t, n);
  if (r.charCodeAt(0) === 36)
    return r.length === 1 ? [2, `_splat`, ``, void 0] : [1, r.substring(1), ``, ``];
  let i = r.indexOf(`{`);
  if (i >= 0) {
    let a = r.indexOf(`}`, i),
      o = r.charCodeAt(i + 1) === 45,
      s = i + (o ? 3 : 2);
    if (a >= 0 && r.charCodeAt(s - 1) === 36 && (!o || s < a)) {
      let c = r.substring(s, a);
      return [
        o ? 3 : c ? 1 : 2,
        c || `_splat`,
        r.substring(0, i),
        e.substring(t + a + 1, c ? n : e.length),
      ];
    }
  }
  return r;
}
function Zo(e, t, n, r, i, a) {
  let o = n,
    s = t.fullPath ?? t.from,
    c = t.options,
    l = s.length,
    u = s.endsWith(`/`) ? l - 1 : l,
    d = c?.caseSensitive ?? e,
    f = c?.params?.parse ?? c?.parseParams,
    p,
    m = a ? n - 1 : 0;
  if (!r || s.includes(`$`)) {
    p = a?.slice() ?? [];
    let e = Se(p);
    e &&
      typeof e != `string` &&
      e[0] === 2 &&
      ((p[p.length - 1] = [
        e[0],
        e[1],
        e[2],
        e[3] === void 0 ? void 0 : e[3] + s.substring(n - (s[n - 2] === `/` ? 2 : 1), u),
      ]),
      (m = l));
  }
  for (; o < l;) {
    let e = o,
      t = s.indexOf(`/`, e),
      n = t === -1 ? l : t,
      a = Xo(s, e, n);
    o = n + 1;
    let c;
    if (typeof a == `string`) {
      if (!r) continue;
      let e = a,
        t;
      d
        ? (t = r.static ??= new Map())
        : ((e = a.toLowerCase()), (t = r.staticInsensitive ??= new Map()));
      let n = t.get(e);
      if (n) c = n;
      else {
        let n = $o(r);
        ((c = n), t.set(e, n));
      }
    } else {
      let t = a[0],
        h = a[2],
        g = a[3] ?? ``;
      if (
        (t === 2 && ((n = l), (o = n + 1)),
        p &&
          m < n &&
          (m < e - 1 && p.push(s.substring(m, e - 1)),
          (a[2] = `/` + h),
          t === 2 && a[3] !== void 0 && u < l && (a[3] = g.slice(0, -1)),
          p.push(a),
          (m = n)),
        !r)
      )
        continue;
      let _ = d && !!(h || g);
      d || ((h = h.toLowerCase()), (g = g.toLowerCase()));
      let v = t === 1 ? (r.dynamic ??= []) : t === 3 ? (r.optional ??= []) : (r.wildcard ??= []),
        y =
          t !== 2 &&
          !f &&
          v.find((e) => !e.parse && e.caseSensitive === _ && e.prefix === h && e.suffix === g);
      if (y) c = y;
      else {
        let e = $o(r, t, _, h, g);
        ((c = e), v.push(e), v.length === 2 && i?.push(v));
      }
    }
    r = c;
  }
  p && m < u && p.push(s.substring(m, u));
  let h = p?.slice();
  if (!r) return h;
  if (f && t.children && !t.isRoot && t.id && t.id.charCodeAt(t.id.lastIndexOf(`/`) + 1) === 95) {
    let e = $o(r, Jo);
    ((r.pathless ??= []).push(e), (r = e));
  }
  let g = (t.path || !t.children) && !t.isRoot;
  if (g && u < l) {
    let e = $o(r, qo);
    ((r.index = e), (r = e));
  }
  return (
    (r.parse = f ?? null),
    (r.priority = c?.params?.priority ?? 0),
    r.route || ((r.data = h), g && (r.route = t)),
    [r, o, h]
  );
}
function Qo(e, t) {
  if (e.parse && !t.parse) return -1;
  if (!e.parse && t.parse) return 1;
  if (e.parse && t.parse && (e.priority || t.priority)) return t.priority - e.priority;
  if (e.prefix && t.prefix && e.prefix !== t.prefix) {
    if (e.prefix.startsWith(t.prefix)) return -1;
    if (t.prefix.startsWith(e.prefix)) return 1;
  }
  if (e.suffix && t.suffix && e.suffix !== t.suffix) {
    if (e.suffix.endsWith(t.suffix)) return -1;
    if (t.suffix.endsWith(e.suffix)) return 1;
  }
  return e.prefix && !t.prefix
    ? -1
    : !e.prefix && t.prefix
      ? 1
      : e.suffix && !t.suffix
        ? -1
        : !e.suffix && t.suffix
          ? 1
          : e.caseSensitive && !t.caseSensitive
            ? -1
            : !e.caseSensitive && t.caseSensitive
              ? 1
              : 0;
}
function $o(e, t = 0, n, r, i) {
  return {
    kind: t,
    depth: e ? e.depth + 1 : 0,
    pathless: null,
    index: null,
    static: null,
    staticInsensitive: null,
    dynamic: null,
    optional: null,
    wildcard: null,
    route: null,
    data: void 0,
    parent: e,
    parse: null,
    priority: 0,
    caseSensitive: n,
    prefix: r,
    suffix: i,
  };
}
function es(e, t) {
  let n = $o(),
    r = [];
  function i(e, t, n, a) {
    let [o, s, c] = Zo(!1, e, t, n, r, a);
    if (e.children) for (let t of e.children) i(t, s, o, c);
  }
  for (let t of e) i(t, 1, n);
  for (let e of r) e.sort(Qo);
  ((t.masksTree = n), (t.flatCache = Ko(1e3)));
}
function ts(e, t) {
  e ||= `/`;
  let n = t.flatCache.get(e);
  if (n !== void 0) return n;
  let r = as(e, t.masksTree);
  return (t.flatCache.set(e, r), r);
}
function ns(e, t, n, r, i) {
  ((e ||= `/`), (r ||= `/`));
  let a = t ? `case\0${e}` : e,
    o = i.singleCache.get(a);
  return (o || ((o = $o()), Zo(t, { from: e }, 1, o), i.singleCache.set(a, o)), as(r, o, n));
}
function rs(e, t, n = !1) {
  let r = n ? e : `nofuzz\0${e}`,
    i = t.matchCache.get(r);
  if (i !== void 0) return i;
  e ||= `/`;
  let a;
  try {
    a = as(e, t.segmentTree, n);
  } catch (e) {
    if (e instanceof URIError) a = null;
    else throw e;
  }
  return (a && (a.branch = ss(a.route)), t.matchCache.set(r, a), a);
}
function is(e, t = !1) {
  let n = $o(),
    r = [],
    i = {},
    a = {},
    o = 0;
  function s(e, n, c, l) {
    if ((e.init(o), e.id in i && fe(), (i[e.id] = e), o !== 0 && e.path)) {
      let t = De(e.fullPath);
      (!a[t] || e.fullPath.endsWith(`/`)) && (a[t] = e);
    }
    o++;
    let [u, d, f] = Zo(t, e, n, c, r, l);
    if (((e._interpolation = f), e.children)) for (let t of e.children) s(t, d, u, f);
  }
  s(e, 1, n);
  for (let e of r) e.sort(Qo);
  return {
    processedTree: {
      segmentTree: n,
      singleCache: Ko(1e3),
      matchCache: Ko(1e3),
      flatCache: null,
      masksTree: null,
    },
    routesById: i,
    routesByPath: a,
  };
}
function as(e, t, n = !1) {
  let r = e.split(`/`),
    i = ls(e, r, t, n);
  if (!i) return null;
  let [a] = os(e, r, i);
  return { route: i.node.route, rawParams: a };
}
function os(e, t, n) {
  let r = cs(n.node),
    i = n.node.data && Yo(n.node.data),
    a = Object.create(null),
    o = n.extract?.part ?? 0,
    s = n.extract?.node ?? 0,
    c = n.extract?.path ?? 0,
    l = n.extract?.param ?? 0;
  for (; s < r.length; o++, s++, c++) {
    let u = r[s];
    if (u.kind === qo) break;
    if (u.kind === Jo) {
      (o--, c--);
      continue;
    }
    let d = t[o],
      f = c;
    if ((d && (c += d.length), u.kind === 1 || u.kind === 3)) {
      let e = i[l++];
      if (u.kind === 3 && n.skipped & (1 << s)) {
        (o--, (c = f - 1));
        continue;
      }
      let t = u.suffix || u.prefix ? d.substring(u.prefix.length, d.length - u.suffix.length) : d;
      (t || u.kind === 1) && (a[e] = decodeURIComponent(t));
    } else if (u.kind === 2) {
      let t = u,
        n = e.substring(f + t.prefix.length, e.length - t.suffix.length),
        r = decodeURIComponent(n);
      ((a[`*`] = r), (a._splat = r));
      break;
    }
  }
  return (
    n.rawParams && Object.assign(a, n.rawParams),
    [a, { part: o, node: s, path: c, param: l }]
  );
}
function ss(e) {
  let t = [e];
  for (; e.parentRoute;) ((e = e.parentRoute), t.push(e));
  return (t.reverse(), t);
}
function cs(e) {
  let t = Array(e.depth + 1);
  do ((t[e.depth] = e), (e = e.parent));
  while (e);
  return t;
}
function ls(e, t, n, r) {
  if (e === `/` && n.index) return { node: n.index, skipped: 0 };
  let i = !Se(t),
    a = i && e !== `/`,
    o = t.length - +!!i,
    s = [{ node: n, index: 1, skipped: 0, statics: 0, dynamics: 0, optionals: 0 }],
    c = null,
    l = null;
  for (; s.length;) {
    let n = s.pop(),
      { node: i, index: u, skipped: d, statics: f, dynamics: p, optionals: m } = n,
      { extract: h, rawParams: g } = n;
    if (i.kind === 2 && i.route && !ps(l, n)) continue;
    if (i.parse) {
      if (!fs(e, t, n)) continue;
      ((g = n.rawParams), (h = n.extract));
    }
    r && i.route && i.kind !== qo && ps(c, n) && (c = n);
    let _ = u === o;
    if (
      _ &&
      (i.route && (!a || i.kind === qo || i.kind === 2) && ps(l, n) && (l = n),
      !i.optional && !i.wildcard && !i.index && !i.pathless)
    )
      continue;
    let v = _ ? void 0 : t[u],
      y;
    if (_ && i.index) {
      let n = {
          node: i.index,
          index: u,
          skipped: d,
          statics: f,
          dynamics: p,
          optionals: m,
          extract: h,
          rawParams: g,
        },
        r = !0;
      if ((i.index.parse && (fs(e, t, n) || (r = !1)), r)) {
        if (!p && !m && !d && ds(f, o)) return n;
        ps(l, n) && (l = n);
      }
    }
    if (i.wildcard)
      for (let e = i.wildcard.length - 1; e >= 0; e--) {
        let n = i.wildcard[e],
          { prefix: r, suffix: a } = n;
        if (!(r && (_ || !(n.caseSensitive ? v : (y ??= v.toLowerCase())).startsWith(r)))) {
          if (a) {
            if (_) continue;
            let e = t.slice(u).join(`/`),
              i = e.slice(-a.length);
            if ((n.caseSensitive ? i : i.toLowerCase()) !== a || e.length - a.length < r.length)
              continue;
          }
          s.push({
            node: n,
            index: o,
            skipped: d,
            statics: f,
            dynamics: p,
            optionals: m,
            extract: h,
            rawParams: g,
          });
        }
      }
    if (i.optional) {
      let e = d | (1 << (i.depth + 1));
      for (let t = i.optional.length - 1; t >= 0; t--) {
        let n = i.optional[t];
        s.push({
          node: n,
          index: u,
          skipped: e,
          statics: f,
          dynamics: p,
          optionals: m,
          extract: h,
          rawParams: g,
        });
      }
      if (!_)
        for (let e = i.optional.length - 1; e >= 0; e--) {
          let t = i.optional[e],
            { prefix: n, suffix: r } = t;
          if (n || r) {
            let e = t.caseSensitive ? v : (y ??= v.toLowerCase());
            if ((n && !e.startsWith(n)) || (r && e.indexOf(r, e.length - r.length) < n.length))
              continue;
          }
          s.push({
            node: t,
            index: u + 1,
            skipped: d,
            statics: f,
            dynamics: p,
            optionals: m + us(o, u),
            extract: h,
            rawParams: g,
          });
        }
    }
    if (!_ && i.dynamic && v)
      for (let e = i.dynamic.length - 1; e >= 0; e--) {
        let t = i.dynamic[e],
          { prefix: n, suffix: r } = t;
        if (n || r) {
          let e = t.caseSensitive ? v : (y ??= v.toLowerCase());
          if ((n && !e.startsWith(n)) || (r && e.indexOf(r, e.length - r.length) < n.length))
            continue;
        }
        s.push({
          node: t,
          index: u + 1,
          skipped: d,
          statics: f,
          dynamics: p + us(o, u),
          optionals: m,
          extract: h,
          rawParams: g,
        });
      }
    if (!_ && i.staticInsensitive) {
      let e = i.staticInsensitive.get((y ??= v.toLowerCase()));
      e &&
        s.push({
          node: e,
          index: u + 1,
          skipped: d,
          statics: f + us(o, u),
          dynamics: p,
          optionals: m,
          extract: h,
          rawParams: g,
        });
    }
    if (!_ && i.static) {
      let e = i.static.get(v);
      e &&
        s.push({
          node: e,
          index: u + 1,
          skipped: d,
          statics: f + us(o, u),
          dynamics: p,
          optionals: m,
          extract: h,
          rawParams: g,
        });
    }
    if (i.pathless)
      for (let e = i.pathless.length - 1; e >= 0; e--) {
        let t = i.pathless[e];
        s.push({
          node: t,
          index: u,
          skipped: d,
          statics: f,
          dynamics: p,
          optionals: m,
          extract: h,
          rawParams: g,
        });
      }
  }
  if (l) return l;
  if (r && c) {
    let n = c.index;
    for (let e = 0; e < c.index; e++) n += t[e].length;
    let r = n === e.length ? `/` : e.slice(n);
    return ((c.rawParams ??= Object.create(null)), (c.rawParams[`**`] = decodeURIComponent(r)), c);
  }
  return null;
}
function us(e, t) {
  return 2 ** (e - t - 1);
}
function ds(e, t) {
  return e === 2 ** (t - 1) - 1;
}
function fs(e, t, n) {
  let r, i;
  try {
    [r, i] = os(e, t, n);
  } catch {
    return null;
  }
  if (((n.rawParams = r), (n.extract = i), !n.node.parse)) return !0;
  try {
    if (n.node.parse(r) === !1) return null;
  } catch {}
  return !0;
}
function ps(e, t) {
  return (
    !e ||
    t.statics > e.statics ||
    (t.statics === e.statics &&
      (t.dynamics > e.dynamics ||
        (t.dynamics === e.dynamics &&
          (t.optionals > e.optionals ||
            (t.optionals === e.optionals &&
              ((t.node.kind === qo) > (e.node.kind === qo) ||
                ((t.node.kind === qo) == (e.node.kind === qo) && t.node.depth > e.node.depth)))))))
  );
}
function ms(e, t, n) {
  let r = Me(e),
    i = `/${r}`,
    a = t ? i : i.toLowerCase(),
    o = `${a}/`,
    s = {
      input: ({ url: e }) => {
        let n = t ? e.pathname : e.pathname.toLowerCase();
        return (
          n === a
            ? (e.pathname = `/`)
            : n.startsWith(o) && (e.pathname = e.pathname.slice(i.length)),
          e
        );
      },
      output: ({ url: e }) => ((e.pathname = we(`/${r}${e.pathname}`)), e),
    };
  return n
    ? {
        input: ({ url: e }) => hs(n, s.input({ url: e })),
        output: ({ url: e }) => s.output({ url: gs(n, e) }),
      }
    : s;
}
function hs(e, t) {
  let n = e?.input?.({ url: t });
  if (n) {
    if (typeof n == `string`) return new URL(n);
    if (n instanceof URL) return n;
  }
  return t;
}
function gs(e, t) {
  let n = e?.output?.({ url: t });
  if (n) {
    if (typeof n == `string`) return new URL(n);
    if (n instanceof URL) return n;
  }
  return t;
}
function _s(e, t) {
  let { createMutableStore: n, createReadonlyStore: r, batch: i } = t,
    a = new Map(),
    o = n(`idle`),
    s = n(e),
    c = n(void 0),
    l = n([]),
    u = r(() => l.get().map((e) => a.get(e).get())),
    d = r(() => ({
      status: o.get(),
      isLoading: o.get() === `pending`,
      matches: u.get(),
      location: s.get(),
      resolvedLocation: c.get(),
    }));
  function f(e) {
    let t = a.get(e);
    return (t || ((t = n(void 0)), a.set(e, t)), t);
  }
  let p = {
    status: o,
    location: s,
    resolvedLocation: c,
    ids: l,
    matches: u,
    byRoute: a,
    __store: d,
    getMatchStore: f,
    setMatches: m,
  };
  function m(e) {
    let t = l.get(),
      n = e.map((e) => e.routeId);
    i(() => {
      Ie(t, n) || l.set(n);
      for (let e of t) n.includes(e) || a.get(e).set(() => void 0);
      for (let t of e) {
        let e = f(t.routeId);
        e.get() !== t && e.set(t);
      }
    });
  }
  return p;
}
var vs = `__TSR_index`,
  ys = `popstate`,
  bs = `beforeunload`,
  xs = /^[\x00-\x20]*(?:[\\/][\t\n\r]*){2,}/;
function Ss(e) {
  let t = xs.exec(e);
  return t ? `/` + e.slice(t[0].length) : e;
}
function Cs(e) {
  return (
    /[\x00-\x1f\x7f]/.test(e) &&
      (e = e.replace(/[\x00-\x1f\x7f]/g, (e) =>
        `	
\r`.includes(e)
          ? ``
          : encodeURIComponent(e),
      )),
    Ss(e)
  );
}
function ws(e) {
  let t = e.getLocation(),
    n = new Set(),
    r = (r) => {
      ((t = e.getLocation()), n.forEach((e) => e({ location: t, action: r })));
    },
    i = (n) => {
      (e.notifyOnIndexChange ?? !0) ? r(n) : (t = e.getLocation());
    },
    a = async ({ task: n, navigateOpts: r, ...i }) => {
      if (r?.ignoreBlocker ?? !1) {
        n();
        return;
      }
      let a = e.getBlockers?.() ?? [],
        o = i.type === `PUSH` || i.type === `REPLACE`;
      if (typeof document < `u` && a.length && o)
        for (let n of a) {
          let r = Ds(i.path, i.state);
          if (await n.blockerFn({ currentLocation: t, nextLocation: r, action: i.type })) {
            e.onBlocked?.();
            return;
          }
        }
      n();
    };
  return {
    get location() {
      return t;
    },
    get length() {
      return e.getLength();
    },
    subscribers: n,
    subscribe: (e) => (
      n.add(e),
      () => {
        n.delete(e);
      }
    ),
    push: (n, i, o) => {
      let s = t.state[vs];
      ((i = Ts(s + 1, i)),
        a({
          task: () => {
            (e.pushState(n, i), r({ type: `PUSH` }));
          },
          navigateOpts: o,
          type: `PUSH`,
          path: n,
          state: i,
        }));
    },
    replace: (n, i, o) => {
      let s = t.state[vs];
      ((i = Ts(s, i)),
        a({
          task: () => {
            (e.replaceState(n, i), r({ type: `REPLACE` }));
          },
          navigateOpts: o,
          type: `REPLACE`,
          path: n,
          state: i,
        }));
    },
    go: (t, n) => {
      a({
        task: () => {
          (e.go(t, n?.ignoreBlocker ?? !1), i({ type: `GO`, index: t }));
        },
        navigateOpts: n,
        type: `GO`,
      });
    },
    back: (t) => {
      a({
        task: () => {
          (e.back(t?.ignoreBlocker ?? !1), i({ type: `BACK` }));
        },
        navigateOpts: t,
        type: `BACK`,
      });
    },
    forward: (t) => {
      a({
        task: () => {
          (e.forward(t?.ignoreBlocker ?? !1), i({ type: `FORWARD` }));
        },
        navigateOpts: t,
        type: `FORWARD`,
      });
    },
    canGoBack: () => t.state[vs] !== 0,
    createHref: (t) => e.createHref(t),
    block: (t) => {
      if (!e.setBlockers) return () => {};
      let n = e.getBlockers?.() ?? [];
      return (
        e.setBlockers([...n, t]),
        () => {
          let n = e.getBlockers?.() ?? [];
          e.setBlockers?.(n.filter((e) => e !== t));
        }
      );
    },
    flush: () => e.flush?.(),
    destroy: () => e.destroy?.(),
    notify: r,
    _getBlockers: () => e.getBlockers?.() ?? [],
  };
}
function Ts(e, t) {
  let n = Os();
  return { ...t, key: n, __TSR_key: n, [vs]: e };
}
function Es(e) {
  let t = e?.window ?? (typeof document < `u` ? window : void 0),
    n = t.history.pushState,
    r = t.history.replaceState,
    i = [],
    a = () => i,
    o = (e) => (i = e),
    s = (t) => Cs(e?.createHref ? e.createHref(t) : t),
    c =
      e?.parseLocation ??
      (() => Ds(`${t.location.pathname}${t.location.search}${t.location.hash}`, t.history.state));
  if (!t.history.state?.__TSR_key && !t.history.state?.key) {
    let e = Os();
    t.history.replaceState({ [vs]: 0, key: e, __TSR_key: e }, ``);
  }
  let l = c(),
    u,
    d = !1,
    f = !1,
    p = !1,
    m = !1,
    h = () => l,
    g,
    _ = () => {
      g &&
        ((S._ignoreSubscribers = !0),
        (g[2] ? t.history.pushState : t.history.replaceState)(g[1], ``, g[0]),
        (S._ignoreSubscribers = !1),
        (g = void 0),
        (u = void 0));
    },
    v = (t, n, r) => {
      let i = e?.createHref ? s(n) : void 0,
        a = !!g;
      (a || (u = l),
        (l = Ds(n, r)),
        (g = [i ?? l.href, r, g?.[2] || t]),
        a || queueMicrotask(() => _()));
    },
    y = (e) => {
      ((l = c()), S.notify({ type: e }));
    },
    b = async () => {
      if (((m = !1), f)) {
        f = !1;
        return;
      }
      let e = c(),
        n = e.state[vs] - l.state[vs],
        r = n === 1,
        i = n === -1,
        o = (!r && !i) || d;
      d = !1;
      let s = o ? `GO` : i ? `BACK` : `FORWARD`,
        u = o ? { type: `GO`, index: n } : { type: i ? `BACK` : `FORWARD` };
      if (p) p = !1;
      else {
        let r = a();
        if (typeof document < `u` && r.length) {
          for (let i of r)
            if (await i.blockerFn({ currentLocation: l, nextLocation: e, action: s })) {
              ((f = !0), t.history.go(-n), S.notify(u));
              return;
            }
        }
      }
      ((l = c()), S.notify(u));
    },
    x = (e) => {
      if (m) {
        m = !1;
        return;
      }
      let t = !1,
        n = a();
      if (typeof document < `u` && n.length)
        for (let e of n) {
          let n = e.enableBeforeUnload ?? !0;
          if (n === !0) {
            t = !0;
            break;
          }
          if (typeof n == `function` && n() === !0) {
            t = !0;
            break;
          }
        }
      if (t) return (e.preventDefault(), (e.returnValue = ``));
    },
    S = ws({
      getLocation: h,
      getLength: () => t.history.length,
      pushState: (e, t) => v(!0, e, t),
      replaceState: (e, t) => v(!1, e, t),
      back: (e) => (e && ((p = !0), (m = !0)), t.history.back()),
      forward: (e) => {
        (e && ((p = !0), (m = !0)), t.history.forward());
      },
      go: (e, n) => {
        ((d = !0), n && ((p = !0), (m = !0)), t.history.go(e));
      },
      createHref: (e) => s(e),
      flush: _,
      destroy: () => {
        ((t.history.pushState = n),
          (t.history.replaceState = r),
          t.removeEventListener(bs, x, { capture: !0 }),
          t.removeEventListener(ys, b));
      },
      onBlocked: () => {
        u && l !== u && (l = u);
      },
      getBlockers: a,
      setBlockers: o,
      notifyOnIndexChange: !1,
    });
  return (
    (S._ignoreNextBeforeUnload = (e) => {
      m = !1;
      try {
        ((e = new URL(e, t.document.baseURI).href),
          (m =
            /^https?:/.test(e) &&
            (!e.includes(`#`) || e.split(`#`)[0] !== t.location.href.split(`#`)[0])));
      } catch {}
    }),
    t.addEventListener(bs, x, { capture: !0 }),
    t.addEventListener(ys, b),
    (t.history.pushState = function (...e) {
      let r = n.apply(t.history, e);
      return (S._ignoreSubscribers || y(`PUSH`), r);
    }),
    (t.history.replaceState = function (...e) {
      let n = r.apply(t.history, e);
      return (S._ignoreSubscribers || y(`REPLACE`), n);
    }),
    S
  );
}
function Ds(e, t) {
  let n = Cs(e),
    r = n.indexOf(`#`),
    i = n.indexOf(`?`);
  if (!t) {
    let e = Os();
    t = { [vs]: 0, key: e, __TSR_key: e };
  }
  return {
    href: n,
    pathname: n.substring(0, r > 0 ? (i > 0 ? Math.min(r, i) : r) : i > 0 ? i : n.length),
    hash: r > -1 ? n.substring(r) : ``,
    search: i > -1 ? n.slice(i, r === -1 ? void 0 : r) : ``,
    state: t,
  };
}
function Os() {
  return (Math.random() + 1).toString(36).substring(7);
}
function ks(e, t) {
  return (
    (e.protocol !== `http:` && e.protocol !== `https:`) ||
    e.origin !== t ||
    !!e.username ||
    !!e.password
  );
}
function As(e) {
  return e.pathname + e.search + e.hash;
}
function js(e) {
  return (
    e.options.loader ||
    e.options.beforeLoad ||
    e.lazyFn ||
    e.options.component?.preload ||
    e.options.pendingComponent?.preload
  );
}
function Ms(e) {
  return e instanceof Error ? { name: e.name, message: e.message } : { data: e };
}
function Ns(e, t) {
  return {
    fromLocation: t,
    toLocation: e,
    pathChanged: t?.pathname !== e.pathname,
    hrefChanged: t?.href !== e.href,
    hashChanged: t?.hash !== e.hash,
  };
}
function Ps({ key: e, __TSR_key: t, __TSR_index: n, __hashScrollIntoViewOptions: r, ...i }) {
  return i;
}
function Fs(e) {
  return e.findIndex((e) => e.status === `error` || e.status === `notFound` || e._notFound) + 1;
}
function Is(e, t, n, r, i, a) {
  (r && (t = t.slice(0, r)), i && (n = n.slice(0, i)));
  for (let r of t) {
    if (a && e._tx !== a) return;
    n.some((e) => e.routeId === r.routeId) || e.routesById[r.routeId].options.onLeave?.(r);
  }
  for (let r of n) {
    if (a && e._tx !== a) return;
    e.routesById[r.routeId].options[
      t.some((e) => e.routeId === r.routeId) ? `onStay` : `onEnter`
    ]?.(r);
  }
}
var Ls = class {
  constructor(e, t) {
    ((this.tempLocationKey = `${Math.round(Math.random() * 1e7)}`),
      (this._scroll = { n: !0 }),
      (this.subscribers = new Set()),
      (this._cache = new Map()),
      (this._committed = []),
      (this.startTransition = async (e) => (e(), !1)),
      (this.update = (e) => {
        let t = this.options;
        ((this.options = { ...t, ...e }),
          (this.isServer = this.options.isServer ?? !1 ?? typeof document > `u`),
          (this.staticLocations = new WeakMap()),
          (this.protocolAllowlist = new Set(this.options.protocolAllowlist)),
          (!this.history || (this.options.history && this.options.history !== this.history)) &&
            (this.history = this.options.history ? this.options.history : Es()),
          (this.origin = this.options.origin),
          (this.origin ||=
            window?.origin && window.origin !== `null` ? window.origin : `http://localhost`));
        let n = this.options.basepath ?? `/`,
          r = this.options.rewrite,
          i =
            this.basepath !== n ||
            t?.rewrite !== r ||
            t?.caseSensitive !== this.options.caseSensitive;
        if (
          (i &&
            ((this.basepath = n),
            (this.rewrite = n !== `/` && Me(n) ? ms(n, this.options.caseSensitive, r) : r)),
          this.history && this.updateLatestLocation(),
          this.options.routeTree !== this.routeTree)
        ) {
          this.routeTree = this.options.routeTree;
          let e;
          ((e = this.buildRouteTree()), this.setRoutes(e));
        }
        if (this.stores) i && this.stores.location.set(this.latestLocation);
        else if (this.latestLocation) {
          let e = this.getStoreConfig(this);
          ((this.batch = e.batch), (this.stores = _s(this.latestLocation, e)), Lo(this));
        }
      }),
      (this.updateLatestLocation = () => {
        this.latestLocation = this.parseLocation(this.history.location, this.latestLocation);
      }),
      (this.buildRouteTree = () => {
        let e = is(this.routeTree, this.options.caseSensitive);
        return (
          this.options.routeMasks && es(this.options.routeMasks, e.processedTree),
          { ...e, resolvePathCache: Ko(1e3) }
        );
      }),
      (this.subscribe = (e, t) => {
        let n = { eventType: e, fn: t };
        return (
          this.subscribers.add(n),
          () => {
            this.subscribers.delete(n);
          }
        );
      }),
      (this.emit = (e) => {
        for (let t of this.subscribers)
          if (t.eventType === e.type)
            try {
              t.fn(e);
            } catch (e) {
              console.error(e);
            }
      }),
      (this.parseLocation = (e, t) => {
        let n = ({ pathname: e, search: n, hash: r, href: i }, a) => {
            if (!this.rewrite && !/[ \x00-\x1f\x7f\u0080-\uffff]/.test(e)) {
              let i = this.options.parseSearch(n),
                o = this.options.stringifySearch(i);
              return {
                href: e + o + r,
                publicHref: e + o + r,
                pathname: Ae(e),
                external: !1,
                searchStr: o,
                search: ye(t?.search, i),
                hash: Ae(r.slice(1)),
                state: be(t?.state, a),
              };
            }
            let o = hs(this.rewrite, new URL(i, this.origin)),
              s = this.options.parseSearch(o.search),
              c = this.options.stringifySearch(s);
            return (
              (o.search = c),
              {
                href: o.href.replace(o.origin, ``),
                publicHref: i,
                pathname: Ae(Ss(o.pathname)),
                external: !!this.rewrite && ks(o, this.origin),
                searchStr: c,
                search: ye(t?.search, s),
                hash: Ae(o.hash.slice(1)),
                state: be(t?.state, a),
              }
            );
          },
          r = n(e, e.state),
          { __tempLocation: i, __tempKey: a } = r.state;
        if (i && (!a || a === this.tempLocationKey)) {
          let e = n(i, {
            ...i.state,
            __tempLocation: void 0,
            key: r.state.key,
            __TSR_key: r.state.__TSR_key,
          });
          return ((e.maskedLocation = r), e);
        }
        return r;
      }),
      (this.matchRoutes = (e, t, n) =>
        typeof e == `string`
          ? this.matchRoutesInternal({ pathname: e, search: t }, n)
          : this.matchRoutesInternal(e, t)),
      (this.getMatchedRoutes = (e) => {
        let t = Object.create(null),
          n = rs(De(e), this.processedTree, !0);
        return (
          n && Object.assign(t, n.rawParams),
          [n?.branch || [this.routesById.__root__], t, n?.route]
        );
      }),
      (this.buildLocation = (e) => {
        {
          let t = this.staticLocations.get(e);
          if (t) return t;
        }
        let t = !1,
          n = (n = {}) => {
            if (n.href) {
              let e = Ds(n.href, {});
              n = {
                ...n,
                to: hs(this.rewrite, new URL(e.pathname, this.origin)).pathname,
                search: this.options.parseSearch(e.search),
                hash: e.hash.slice(1),
              };
            }
            let r = n._fromLocation || this._pendingLocation || this.latestLocation,
              i,
              a = () => ((t = !0), r),
              o = () => ((t = !0), (i ??= this.matchRoutesLightweight(r))),
              s = n.to ? `${n.to}` : `.`,
              c = Ee(
                s[0] === `/` ? `` : n.unsafeRelative === `path` ? a().pathname : (n.from ?? o()[1]),
                s,
                this.options.trailingSlash,
                this.resolvePathCache,
              ),
              l = this.routesByPath[De(c)],
              u = c.includes(`$`),
              d;
            if (l) d = l._branch ??= ss(l);
            else if (u) d = [];
            else {
              let [e, t, n] = this.getMatchedRoutes(c);
              ((d = e),
                this.options.notFoundRoute &&
                  (!n || (n.path !== `/` && t[`**`])) &&
                  (d = [...d, this.options.notFoundRoute]));
            }
            let f = u ? (l?._interpolation ?? Zo(!1, { fullPath: c }, 0)) : void 0,
              p;
            for (let e of d) {
              let t = e.options.params?.stringify ?? e.options.stringifyParams;
              if (t) {
                let e = o()[3];
                if (((p ??= Hs(n.params, e)), !Ve(p))) break;
                p === e && (p = Object.assign(Ne(), p));
                try {
                  Object.assign(p, t(p));
                } catch {}
              }
            }
            p ??= Hs(n.params, Us(n.params, f) ? o()[3] : Ws);
            let m = e.leaveParams ? c : Ss(Ae(f ? Re(c, f, p, this.pathParamsDecoder) : c)),
              h = Gs(d, e._includeValidateSearch),
              g = () => {
                let t = o()[2];
                if (e._includeValidateSearch && this.options.search?.strict) {
                  let e = {};
                  (d.forEach((n) => {
                    if (n.options.validateSearch)
                      try {
                        Object.assign(e, Vs(n.options.validateSearch, { ...e, ...t }));
                      } catch {}
                  }),
                    (t = e));
                }
                return t;
              },
              _ = h.length
                ? Ks(h, g(), n)
                : n.search === !0
                  ? g()
                  : typeof n.search == `function`
                    ? n.search(g())
                    : n.search || Ws,
              v = this.options.stringifySearch(_),
              y =
                n.hash === !0
                  ? a().hash
                  : typeof n.hash == `function`
                    ? n.hash(a().hash)
                    : n.hash || void 0,
              b = y ? `#${y}` : ``,
              x = n.state
                ? n.state === !0
                  ? a().state
                  : typeof n.state == `function`
                    ? n.state(a().state)
                    : n.state
                : Ws,
              S = `${m}${v}${b}`,
              C,
              ee,
              te = !1;
            if (this.rewrite) {
              let e = new URL(S, this.origin),
                t = e.origin,
                n = gs(this.rewrite, e);
              ((C = As(e)), ks(n, t) ? ((ee = n.href), (te = !0)) : (ee = Ss(As(n))));
            } else ((C = Ce(S)), (ee = C));
            return {
              publicHref: ee,
              href: C,
              pathname: m,
              search: _,
              searchStr: v,
              state: x,
              hash: y ?? ``,
              external: te,
              unmaskOnReload: n.unmaskOnReload,
            };
          },
          r = n(e);
        if (e.mask) r.maskedLocation = n({ from: e.from, ...e.mask });
        else if (this.options.routeMasks) {
          let t = ts(r.pathname, this.processedTree);
          if (t) {
            let i = Object.assign(Ne(), t.rawParams),
              { from: a, params: o, ...s } = t.route,
              c = Hs(o, i);
            r.maskedLocation = n({ from: e.from, ...s, params: c });
          }
        }
        return (!t && e._fromLocation && !r.maskedLocation && this.staticLocations.set(e, r), r);
      }),
      (this.commitLocation = async ({ viewTransition: e, ignoreBlocker: t, ...n }) => {
        let r = n.maskedLocation ?? n;
        if (r.external) return Rs(this, r.publicHref, { replace: n.replace, ignoreBlocker: t });
        let i,
          a =
            De(this.latestLocation.href) === De(n.href) &&
            ke(Ps(n.state), Ps(this.latestLocation.state)),
          o = this._commitPromise,
          s,
          c = new Promise((e) => {
            s = e;
          });
        if (
          ((c.resolve = () => {
            (s(), o?.resolve());
          }),
          (this._commitPromise = c),
          a)
        )
          this.load();
        else {
          let { maskedLocation: r, hashScrollIntoView: a, ...o } = n;
          (r &&
            ((o = {
              ...r,
              state: {
                ...r.state,
                __tempKey: void 0,
                __tempLocation: {
                  ...o,
                  search: o.searchStr,
                  state: {
                    ...o.state,
                    __tempKey: void 0,
                    __tempLocation: void 0,
                    __TSR_key: void 0,
                    key: void 0,
                  },
                },
              },
            }),
            (o.unmaskOnReload ?? this.options.unmaskOnReload ?? !1) &&
              (o.state.__tempKey = this.tempLocationKey)),
            (o.state = {
              ...o.state,
              __hashScrollIntoViewOptions: a ?? this.options.defaultHashScrollIntoView ?? !0,
            }),
            (this.shouldViewTransition = e),
            (i = n.replace ? `REPLACE` : `PUSH`),
            this.history[i === `REPLACE` ? `replace` : `push`](o.publicHref, o.state, {
              ignoreBlocker: t,
            }),
            this.history.subscribers.size || this.load({ action: { type: i } }));
        }
        return ((this._scroll.n = n.resetScroll ?? !0), this._commitPromise);
      }),
      (this.buildAndCommitLocation = ({
        replace: e,
        resetScroll: t,
        hashScrollIntoView: n,
        viewTransition: r,
        ignoreBlocker: i,
        ...a
      } = {}) => {
        let o = this.buildLocation({ ...a, _includeValidateSearch: !0 });
        this._pendingLocation = o;
        let s = this.commitLocation({
          ...o,
          viewTransition: r,
          replace: e,
          resetScroll: t,
          hashScrollIntoView: n,
          ignoreBlocker: i,
        });
        return (
          queueMicrotask(() => {
            this._pendingLocation === o && (this._pendingLocation = void 0);
          }),
          s
        );
      }),
      (this.navigate = async ({ to: e, reloadDocument: t, href: n, publicHref: r, ...i }) => {
        let a = n ? Te(n) : void 0;
        if (a || t) {
          if (e !== void 0 || !n) {
            let t = this.buildLocation({ to: e, ...i }),
              a = t.maskedLocation ?? t;
            ((n ??= a.publicHref), (r ??= a.publicHref));
          }
          let t = !a && r ? r : n;
          return Rs(this, t, i);
        }
        return this.buildAndCommitLocation({ ...i, href: n, to: e, _isNavigate: !0 });
      }),
      (this.load = async (e) => {
        (this.updateLatestLocation(),
          e?.action && (this._scroll.h = e.action.type === `PUSH` || e.action.type === `REPLACE`),
          await Rc(this, e));
      }),
      (this.startViewTransition = (e) => {
        let t = this.shouldViewTransition ?? this.options.defaultViewTransition;
        if (
          ((this.shouldViewTransition = void 0),
          t && typeof document.startViewTransition == `function`)
        ) {
          let n;
          if (
            typeof t == `object` &&
            window.CSS?.supports?.(`selector(:active-view-transition-type(a))`)
          ) {
            let r = this.latestLocation,
              i = this.stores.resolvedLocation.get(),
              a = typeof t.types == `function` ? t.types(Ns(r, i)) : t.types;
            if (a === !1) return e();
            n = { update: e, types: a };
          } else n = e;
          return document.startViewTransition(n).updateCallbackDone;
        }
        return e();
      }),
      (this.invalidate = (e) => {
        let t = this._committed,
          n = e?.filter,
          r = this._preloads,
          i = new Set(),
          a = (e) => {
            (!n || n(e)) && i.add(e.id);
          };
        (t.forEach(a),
          this._cache.forEach(a),
          r?.forEach((e) => e.forEach(a)),
          this._tx?.[3].forEach(a));
        let o = [];
        for (let [e, t] of r ?? []) t.some((e) => i.has(e.id)) && (r.delete(e), o.push(e));
        let s = (t) => {
          if (i.has(t.id)) {
            let n = this.routesById[t.routeId],
              r = {
                ...t,
                invalid: !0,
                ...((e?.forcePending || t.status === `error` || t.status === `notFound`) && js(n)
                  ? { status: `pending`, error: void 0 }
                  : void 0),
              };
            return ((t._flight = void 0), r);
          }
          return t;
        };
        this._committed = t.map(s);
        for (let [t, n] of this._cache)
          i.has(t) && ((n.invalid = !0), e?.forcePending && (n.status = `pending`));
        for (let e of i) {
          let t = this._flights?.get(e);
          (this._flights?.delete(e), t && !t[2] && o.push(t[1]));
        }
        for (let e of o) e.abort();
        return ((this.shouldViewTransition = !1), this.load({ sync: e?.sync }));
      }),
      (this.resolveRedirect = (e) => {
        let t = e.options,
          n = e.headers.get(`Location`) || t.href;
        if (!n) {
          let e = this.buildLocation(t);
          n = (e.maskedLocation ?? e).publicHref || `/`;
        }
        let r;
        if (ve.test(n) || ((r = Te(n)) && !this.protocolAllowlist.has(r)))
          throw Error(`Redirect blocked: unsafe protocol`);
        if (r === `http:` || r === `https:`) {
          let e = new URL(n);
          e.pathname.startsWith(`//`)
            ? (n = e.href)
            : ks(e, this.origin) || ((n = As(e)), (r = void 0));
        }
        return (r && (t.reloadDocument = !0), (t.href = n), e.headers.set(`Location`, n), e);
      }),
      (this.clearCache = (e) => {
        let t = this._cache,
          n = this._preloads,
          r = e?.filter,
          i = [],
          a = [];
        for (let [e, n] of t) (!r || r(n)) && (a.push(e), i.push(n));
        let o = [];
        for (let [e, t] of n ?? []) (!r || t.some(r)) && (o.push(e), i.push(...t));
        for (let e of a) t.delete(e);
        for (let e of o) n.delete(e);
        for (let e of i) {
          let t = e._flight;
          ((e._flight = void 0),
            t &&
              !--t[2] &&
              (this._flights?.get(e.id) === t && this._flights.delete(e.id), o.push(t[1])));
        }
        for (let e of o) e.abort();
      }),
      (this.loadRouteChunk = Zs),
      (this.preloadRoute = (e) => zc(this, e)),
      (this.matchRoute = (e, t) => {
        let n = {
            ...e,
            to: e.to
              ? Ee(e.from || ``, e.to, this.options.trailingSlash, this.resolvePathCache)
              : void 0,
            params: e.params || {},
            leaveParams: !0,
          },
          r = this.buildLocation(n),
          i = this.stores.status.get() === `pending`;
        if (t?.pending && !i) return !1;
        let a =
            (t?.pending ?? !i)
              ? this.latestLocation
              : this.stores.resolvedLocation.get() || this.stores.location.get(),
          o = ns(
            r.pathname,
            t?.caseSensitive ?? !1,
            t?.fuzzy ?? !1,
            a.pathname,
            this.processedTree,
          );
        return !o || (e.params && !ke(o.rawParams, e.params, !0))
          ? !1
          : (t?.includeSearch ?? !0)
            ? ke(a.search, r.search, !0)
              ? o.rawParams
              : !1
            : o.rawParams;
      }),
      (this.getStoreConfig = t),
      e.pathParamsAllowedCharacters?.length &&
        (this.pathParamsDecoder = Fe(e.pathParamsAllowedCharacters)),
      this.update({
        defaultPreloadDelay: 50,
        defaultPendingMs: 1e3,
        defaultPendingMinMs: 500,
        context: void 0,
        ...e,
        caseSensitive: e.caseSensitive ?? !1,
        notFoundMode: e.notFoundMode ?? `fuzzy`,
        stringifySearch: e.stringifySearch ?? Uo,
        parseSearch: e.parseSearch ?? Ho,
        protocolAllowlist: e.protocolAllowlist ?? Oe,
      }),
      (self.__TSR_ROUTER__ = this));
  }
  isShell() {
    return !!this.options.isShell;
  }
  get state() {
    return this.stores.__store.get();
  }
  setRoutes(e) {
    (Object.assign(this, e),
      (this.lightweightCache = new WeakMap()),
      (this.staticLocations = new WeakMap()));
    let t = this.options.notFoundRoute;
    t &&
      (t.init(99999999999),
      this.routesById[t.id] !== t && (t._interpolation = Zo(!1, t, 0)),
      (this.routesById[t.id] = t));
  }
  matchRoutesInternal(e, t) {
    let [n, r, i] = this.getMatchedRoutes(e.pathname),
      a = n,
      o = !1;
    (i ? i.path !== `/` && r[`**`] : De(e.pathname)) &&
      (this.options.notFoundRoute ? (a = [...a, this.options.notFoundRoute]) : (o = !0));
    let s = o ? qs(this.options.notFoundMode, a) : void 0,
      c = Array(a.length),
      l = this._committed,
      u = (e, t) => {
        let n = l[t];
        return n?.routeId === e.id
          ? n
          : e === this.options.notFoundRoute
            ? l.find((t) => t.routeId === e.id)
            : void 0;
      },
      d;
    for (let n = 0; n < a.length; n++) {
      let i = a[n],
        o = c[n - 1],
        l,
        f,
        p;
      {
        let n = o?.search ?? e.search,
          r = o?._strictSearch ?? void 0;
        try {
          let e = Vs(i.options.validateSearch, { ...n }) ?? void 0;
          ((l = { ...n, ...e }), (f = { ...r, ...e }));
        } catch (e) {
          let r = e;
          if ((e instanceof zs || (r = new zs(e.message, { cause: e })), t?.throwOnError)) throw r;
          ((l = n), (f = {}), (p = r));
        }
      }
      let m = ``,
        h = ``;
      try {
        ((m = i.options.loaderDeps?.({ search: l }) ?? ``), (h = (m && JSON.stringify(m)) || ``));
      } catch (e) {
        if (t?.throwOnError) throw e;
        p ??= e;
      }
      let g = Ne(),
        _ = i._interpolation
          ? Re(i.fullPath, i._interpolation, r, this.pathParamsDecoder, g)
          : i.fullPath,
        v = i.id + _ + h,
        y = u(i, n),
        b = this._cache.get(v) ?? (y?.id === v ? y : void 0);
      d = b?._strictParams ?? Object.assign(g, d);
      let x;
      if (!b)
        try {
          Js(i, d);
        } catch (e) {
          if (((x = R(e) || D(e) ? e : new Bs(e.message, { cause: e })), t?.throwOnError)) throw x;
        }
      let S = y ? `stay` : `enter`,
        C;
      if (b)
        C = {
          ...b,
          cause: S,
          search: ye(y ? y.search : b.search, l),
          _strictSearch: f,
          searchError: p,
        };
      else {
        let e = js(i) ? `pending` : `success`;
        C = {
          id: v,
          ssr: i.options.ssr,
          index: n,
          routeId: i.id,
          params: y?.params ?? d,
          _strictParams: d,
          pathname: _,
          updatedAt: Date.now(),
          search: y ? ye(y.search, l) : l,
          _strictSearch: f,
          searchError: p,
          status: e,
          isFetching: !1,
          error: void 0,
          paramsError: x,
          context: {},
          abortController: t?._controller ?? new AbortController(),
          cause: S,
          loaderDeps: y ? be(y.loaderDeps, m) : m,
          invalid: !1,
          preload: !1,
          staticData: i.options.staticData || {},
          fullPath: i.fullPath,
        };
      }
      let ee = s === i.id;
      (C._notFound && !ee && (C.error = void 0), (C._notFound = ee), (c[n] = C));
    }
    for (let e = 0; e < c.length; e++) {
      let n = c[e];
      ((n.params = n.cause === `stay` ? ye(n.params, d) : d), t?._controller && (n.context = {}));
    }
    return c;
  }
  matchRoutesLightweight(e) {
    let t = Se(this.stores.ids.get()),
      n = t ? this.stores.byRoute.get(t).get() : void 0,
      r = n?.id,
      i = this.lightweightCache.get(e);
    if (i && i[0] === r) return i[1];
    let [a, o] = this.getMatchedRoutes(e.pathname),
      s = Se(a),
      c = { ...e.search };
    for (let e of a)
      try {
        Object.assign(c, Vs(e.options.validateSearch, c));
      } catch {}
    let l = n && n.routeId === s.id && n.pathname === e.pathname,
      u;
    if (l) u = n.params;
    else {
      let e = o;
      for (let t of a)
        try {
          Js(t, e);
        } catch {}
      u = e;
    }
    let d = [a, s.fullPath, c, u];
    return (this.lightweightCache.set(e, [r, d]), d);
  }
};
async function Rs(e, t, { replace: n, ignoreBlocker: r }) {
  if (!_e(t, e.protocolAllowlist)) {
    if (!r) {
      let t = e.history._getBlockers();
      for (let r of t)
        if (
          r?.blockerFn &&
          (await r.blockerFn({
            currentLocation: e.history.location,
            nextLocation: e.history.location,
            action: n ? `REPLACE` : `PUSH`,
          }))
        )
          return;
    }
    (e.history._ignoreNextBeforeUnload?.(t),
      n ? window.location.replace(t) : (window.location.href = t));
  }
}
var zs = class extends Error {},
  Bs = class extends Error {};
function Vs(e, t) {
  if (e == null) return {};
  if (`~standard` in e) {
    let n = e[`~standard`].validate(t);
    if (n instanceof Promise) throw new zs(`Async validation not supported`);
    if (n.issues) throw new zs(JSON.stringify(n.issues, void 0, 2), { cause: n });
    return n.value;
  }
  return `parse` in e ? e.parse(t) : typeof e == `function` ? e(t) : {};
}
function Hs(e, t) {
  if (e === void 0 || e === !0) return t;
  let n = Object.create(null);
  return e === !1 || e === null
    ? n
    : typeof e == `function`
      ? (Object.assign(n, t), Object.assign(n, e(n)))
      : Object.assign(n, t, e);
}
function Us(e, t) {
  return typeof e == `function`
    ? !0
    : !t || e === !1 || e === null
      ? !1
      : e === void 0 || e === !0 || t.some((t) => typeof t != `string` && !xe.call(e, t[1]));
}
var Ws = Object.freeze({});
function Gs(e, t) {
  let n = [];
  for (let r = 0; r < e.length; r++) {
    let i = e[r].options;
    `search` in i
      ? i.search?.middlewares && n.push(...i.search.middlewares)
      : (i.preSearchFilters || i.postSearchFilters) &&
        n.push(({ search: e, next: t }) => {
          let n = t(i.preSearchFilters ? i.preSearchFilters.reduce((e, t) => t(e), e) : e);
          return i.postSearchFilters ? i.postSearchFilters.reduce((e, t) => t(e), n) : n;
        });
    let a = i.validateSearch;
    t &&
      a &&
      n.push(({ search: e, next: t, meta: n }) => {
        let r = t(e);
        try {
          let e = Vs(a, r);
          if (n && e) for (let t in e) t in r || (n.defaulted ||= new Map()).set(t, e[t]);
          return { ...r, ...e };
        } catch {}
        return r;
      });
  }
  return n;
}
function Ks(e, t, n) {
  let r = (t, i, a) => {
    if (t >= e.length) {
      if (!n.search) return {};
      if (n.search === !0) return i;
      let e = He(n.search, i);
      return (a && (a.explicit = e), e);
    }
    return e[t]({
      search: i,
      next: (e, n) => {
        if (n) {
          let n = a || {};
          return { search: r(t + 1, e, n), meta: n };
        }
        return r(t + 1, e, a);
      },
      meta: a,
    });
  };
  return r(0, t);
}
function qs(e, t) {
  if (e !== `root`) {
    let e;
    for (let n = t.length - 1; n >= 0; n--) {
      let r = t[n];
      if (r.options.notFoundComponent) return r.id;
      e ||= r.children && r.id;
    }
    if (e) return e;
  }
  return w;
}
function Js(e, t) {
  let n = e.options.params?.parse ?? e.options.parseParams;
  n && Object.assign(t, n(t));
}
function Ys(e, t) {
  return e.options[t]?.preload?.();
}
function Xs(e, t) {
  let n = Ys(e, `component`),
    r = Ys(e, `pendingComponent`);
  return (t && (r ? (r = r.then(t)) : t()), n && r ? Promise.all([n, r]).then(() => {}) : (n ?? r));
}
function Zs(e, t, n) {
  let r = () => (t === !1 ? void 0 : t ? Ys(e, t) : Xs(e, n)),
    i = e._lazy;
  if (i) return i === !0 ? r() : i.then(r);
  if (!e.lazyFn) return r();
  let a = e.lazyFn().then(
    (t) => {
      {
        let { id: n, ...r } = t.options;
        (Object.assign(e.options, r), (e._lazy = !0));
      }
    },
    (t) => {
      throw ((e._lazy = void 0), t);
    },
  );
  return ((e._lazy = a), a.then(r));
}
function Qs(e) {
  let t = e.findIndex((e) => e.status !== `success` || e._notFound) + 1;
  return t && t < e.length ? e.slice(0, t) : e;
}
function $s(e) {
  let t = e.length;
  for (let n = 0; n < t; n++) {
    let r = e[n];
    if (r._assetEnd !== void 0) {
      t = Math.min(t, Math.max(n + 1, r._assetEnd));
      continue;
    }
    if (r.status !== `success` || r._notFound) {
      t = n + 1;
      break;
    }
  }
  return t < e.length ? e.slice(0, t) : e;
}
var ec = 0,
  tc = 1,
  nc = 2,
  rc = 3,
  ic = [4];
function ac(e) {
  return typeof e[0] == `number`;
}
function oc(e, t) {
  return t.aborted
    ? Promise.race([Promise.reject(t), e])
    : new Promise((n, r) => {
        let i = () => r(t);
        (t.addEventListener(`abort`, i, { once: !0 }),
          Promise.resolve(e)
            .then(n, r)
            .then(() => t.removeEventListener(`abort`, i)));
      });
}
function B(e, t) {
  return e.routesById[t.routeId];
}
function sc(e, t, n) {
  return D(e)
    ? [rc, e]
    : R(e)
      ? ((e.routeId ||= n), [nc, e])
      : t
        ? (typeof e?.then == `function` && (e = Error(`A Promise was thrown`, { cause: e })),
          [tc, e])
        : [ec, e];
}
function cc(e, t) {
  let n = sc(t, !0, e.id);
  if (n[0] !== tc) return n;
  try {
    e.options.onError?.(n[1]);
  } catch (t) {
    n = sc(t, !0, e.id);
  }
  return n;
}
function lc(e, t, n, r, i) {
  return i[0].signal.aborted ? ic : Tc(e, t, n, cc(n, r), i);
}
async function uc(e, t, n, r, i, a) {
  let [o, s] = t,
    c = n[0].signal,
    l = !!n[3];
  for (let i = n[6] ?? 0; i < r; i++) {
    let r = s[i],
      u = B(e, r);
    r.abortController = n[0];
    let d = s[i - 1]?.context ?? e.options.context ?? {},
      f = {
        params: r.params,
        location: o,
        navigate: (t) => e.navigate({ ...t, _fromLocation: o }),
        buildLocation: e.buildLocation,
        cause: l ? `preload` : r.cause,
        abortController: n[0],
        preload: l,
        matches: s,
        routeId: u.id,
      };
    try {
      let e = (r._ctx ||= u.options.context
        ? u.options.context({ ...f, deps: r.loaderDeps, context: d }) || {}
        : void 0);
      r.context = { ...d, ...e };
    } catch (a) {
      return (fc(e, r), [i, lc(e, t, u, a, n)]);
    }
    if (c.aborted) return [i, ic];
    let p = r.paramsError ?? r.searchError;
    if (p !== void 0) return (fc(e, r), [i, lc(e, t, u, p, n)]);
    let m = u.options.beforeLoad;
    if (!m) continue;
    let h = r.status;
    i >= a && ((r.status = `pending`), n[7]?.());
    try {
      hc(e, r, `beforeLoad`, n[0]);
      let a = m({ ...f, search: r.search, context: r.context, ...e.options.additionalContext }),
        o = await (typeof a?.then == `function` ? oc(a, c) : a);
      if (c.aborted) return [i, ic];
      let s = Tc(e, t, u, sc(o, !1, u.id), n);
      if (s[0] !== ec) return (fc(e, r), [i, s]);
      r.context = { ...r.context, ...o };
    } catch (a) {
      return (fc(e, r), [i, lc(e, t, u, a, n)]);
    } finally {
      ((r.status = h), hc(e, r, !1, n[0]));
    }
  }
  i();
}
function dc(e, t, n) {
  if (!(!n || --n[2])) {
    if (e._flights?.get(t.id) === n) {
      let n = e._tx;
      if (
        n &&
        !n[0].signal.aborted &&
        !n[3].includes(t) &&
        n[3].some((e) => e.id === t.id) &&
        n[3].some((e) => e.isFetching === `beforeLoad`)
      )
        return;
      e._flights.delete(t.id);
    }
    return n[1];
  }
}
function fc(e, t) {
  let n = t._flight;
  ((t._flight = void 0), dc(e, t, n)?.abort());
}
function pc(e, t, n, r) {
  let i = [];
  for (let a of t)
    if (!n?.includes(a)) {
      let t = a._flight;
      if (
        ((a._flight = void 0),
        r && t?.[2] === 1 && e._flights?.get(a.id) === t && n?.some((e) => e.id === a.id))
      )
        t[2] = 0;
      else {
        let n = dc(e, a, t);
        n && i.push(n);
      }
    }
  for (let e of i) e.abort();
}
function mc(e) {
  for (let t of e) {
    let e = t._flight;
    e && e[2]++;
  }
}
function hc(e, t, n, r) {
  if (((t.isFetching = n), r && e._tx?.[0] !== r)) return;
  let i = e.stores.byRoute.get(t.routeId),
    a = i?.get();
  a?.id === t.id && i.set({ ...a, isFetching: n });
}
function gc(e, t, n, r, i, a, o) {
  let s = t[0];
  return {
    params: n.params,
    location: s,
    navigate: (t) => e.navigate({ ...t, _fromLocation: s }),
    cause: o ? `preload` : n.cause,
    abortController: i,
    preload: o,
    deps: n.loaderDeps,
    parentMatchPromise: a,
    context: n.context,
    route: r,
    ...e.options.additionalContext,
  };
}
async function _c(e, t, n, r, i, a, o) {
  let s = o[0],
    c = s.signal;
  if (c.aborted) return ic;
  if (!i) return [ec, void 0];
  let l = n._flight;
  hc(e, n, `loader`, s);
  try {
    if (!l) {
      let s = new AbortController();
      ((l = [
        Promise.resolve()
          .then(() => i(gc(e, t, n, r, s, a, !!o[3])))
          .then(
            (e) => sc(e, !1, r.id),
            (e) => sc(e, !0, r.id),
          )
          .then(
            (t) => (
              t[0] !== ec &&
                e._flights?.get(n.id) === l &&
                (e._flights.delete(n.id), l[2] || s.abort()),
              t[0] === tc && l[2] ? cc(r, t[1]) : t
            ),
          ),
        s,
        1,
      ]),
        (e._flights ??= new Map()).set(n.id, l));
    }
    return ((n._flight = l), (n.abortController = l[1]), Tc(e, t, r, await oc(l[0], c), o));
  } catch (t) {
    if (t !== c || !c.aborted) throw t;
    return (fc(e, n), ic);
  } finally {
    hc(e, n, !1, s);
  }
}
function vc(e, t, n) {
  t[0] !== rc &&
    ((e.status = `success`),
    (e.error = void 0),
    t[0] === ec
      ? ((e.loaderData = t[1]), (e.invalid = !1), (e.updatedAt = Date.now()), (e.preload = n))
      : (e.invalid = !0));
}
function yc(e, t, n) {
  let r = e._cache.get(t.id);
  if (r !== n || e._committed.some((e) => e.id === t.id && e._flight === t._flight)) return;
  let i = { ...t, _notFound: void 0, context: {} };
  (i._flight && i._flight[2]++, e._cache.set(t.id, i), r && fc(e, r));
}
function bc(e, t) {
  return t[0] === tc || t[0] === nc
    ? { ...e, status: t[0] === tc ? `error` : `notFound`, error: t[1], _flight: void 0 }
    : e;
}
function xc(e, t, n, r, i, a, o) {
  let s = t[1][n],
    c = B(e, s),
    l = !!a[3],
    u = e._cache.get(s.id),
    d,
    f = !1,
    p;
  try {
    if (
      (s.status === `success` &&
        ((d = c.options.shouldReload),
        typeof d == `function` && (d = d(gc(e, t, s, c, a[0], i, l))),
        a[0].signal.aborted && (p = ic)),
      !p)
    )
      if (s.status !== `success`) f = !0;
      else {
        let t =
          l || s.preload
            ? (c.options.preloadStaleTime ?? e.options.defaultPreloadStaleTime ?? 3e4)
            : (c.options.staleTime ?? e.options.defaultStaleTime ?? 0);
        f = !!(
          s.invalid ||
          d ||
          (d === void 0 &&
            Date.now() - s.updatedAt >= t &&
            (a[5] ||
              s.cause === `enter` ||
              a[2].some((e) => e.routeId === s.routeId && e.id !== s.id)))
        );
      }
  } catch (n) {
    ((s.invalid = !0), fc(e, s), (p = lc(e, t, c, n, a)));
  }
  let m = c.options.loader,
    h = typeof m == `function`,
    g = h ? m : m?.handler,
    _ = !l || c.options.preload !== !1,
    v = _ && m ? e._flights?.get(s.id) : void 0;
  v === s._flight || p
    ? (v = void 0)
    : v && !f && !l && d === void 0
      ? (f = !0)
      : f || (v = void 0);
  let y = !!(
      m &&
      f &&
      s.status === `success` &&
      !l &&
      !a[4] &&
      ((h ? void 0 : m.staleReloadMode) ?? e.options.defaultStaleReloadMode) !== `blocking`
    ),
    b = f && _,
    x = b && !y && (s.status !== `success` || !!m),
    S = n >= o ? a[7] : void 0,
    C = c.lazyFn && c._lazy !== !0 ? S : void 0;
  if ((b && !m && ((s.invalid = !1), (s.updatedAt = Date.now())), v && v[2]++, x)) {
    let t = s._flight;
    ((s._flight = v), dc(e, s, t)?.abort(), n >= o && (s.status = `pending`), S?.());
  }
  b || (s.isFetching = !1);
  let ee =
      !p && x
        ? _c(e, t, s, c, g, i, a).then(
            (t) => (
              vc(s, t, l),
              t[0] === ec &&
                (m && !a[0].signal.aborted && yc(e, s, u), n >= o && (s.status = `pending`)),
              t
            ),
          )
        : Promise.resolve(p ?? [ec, s.loaderData]),
    te = (async () => {
      try {
        let e = Zs(c, void 0, C);
        e && (await oc(e, a[0].signal));
      } catch (r) {
        if (
          !t[1].some(
            (e, t) => t <= n && (e.status === `error` || e.status === `notFound` || e._notFound),
          )
        )
          return [n, lc(e, t, c, r, a)];
      }
      let r = await ee;
      x &&
        r[0] === ec &&
        s.status === `pending` &&
        !a[0].signal.aborted &&
        ((s.status = `success`), S?.());
    })();
  if ((r.push([n, ee, te]), !y)) return ee.then((e) => bc(s, e));
  let ne = { ...s, status: `pending`, preload: !1, _flight: v };
  ((s.invalid = !1), (s.isFetching = `loader`));
  let re = _c(e, t, ne, c, g, i, a).then((e) => ((s.isFetching = !1), vc(ne, e, !1), e));
  return ((t[2] ??= []).push([n, re, te, ne]), re.then((e) => bc(ne, e)));
}
async function Sc(e, t, n, r, i = 0) {
  let a = n?.[1][1],
    o = a?.routeId ? t.findIndex((e) => e.routeId === a.routeId) : (n?.[0] ?? t.length - 1);
  o < 0 && (o = 0);
  for (let n = o; n >= 0; n--) {
    let i = B(e, t[n]);
    try {
      let e = Zs(i, !1);
      e && (await oc(e, r));
    } catch (e) {
      if (e === r && r.aborted) throw e;
    }
    if (i.options.notFoundComponent) return n;
  }
  return a?.routeId ? o : i;
}
function Cc(e, t) {
  t[2] &&=
    (pc(
      e,
      t[2].map((e) => e[3]),
    ),
    void 0);
}
async function wc(e, t, n, r) {
  let i;
  try {
    await Promise.all(
      e.map((e) =>
        e[1].then(async (t) => {
          let a = e[0];
          if (!(r && a >= (await r))) {
            if (t[0] >= rc) throw [a, t];
            !i &&
              t[0] !== ec &&
              ((i = [a, t]),
              await Promise.all(
                (n ?? []).map((e) => {
                  if (!(e[0] <= a))
                    return e[1].then((t) => {
                      if (t[0] === rc) throw [e[0], t];
                    });
                }),
              ));
          }
        }),
      ),
    );
  } catch (e) {
    return e;
  }
  return t ?? i;
}
function Tc(e, t, n, r, i, a) {
  for (; r[0] === rc;) {
    let o = r[1],
      s = o.options;
    try {
      if (
        ((s.href || o.headers.has(`Location`)) && (e.resolveRedirect(o), s.reloadDocument)) ||
        (s.reloadDocument ? i[3] : i[1] >= 20)
      )
        return r;
      let n = e.buildLocation({ ...s, _fromLocation: t[0], _includeValidateSearch: !0 }),
        a = n.maskedLocation ?? n;
      if (a.external) {
        let t = o.clone();
        return (
          (t.options = { ...s }),
          t.headers.set(`Location`, a.publicHref),
          e.resolveRedirect(t),
          i[3] ? [rc, t] : [rc, t, a]
        );
      }
      return [rc, o, n];
    } catch (e) {
      ((r = a ? [tc, e] : cc(n, e)), (a = !0));
    }
  }
  return r;
}
async function Ec(e, t, n, r, i, a) {
  let o = t[1],
    s = await i,
    c = !1,
    l = o.findIndex((e) => e._notFound),
    u = (t) => (t[1][0] === nc ? Sc(e, o, t, r.signal) : t[0]),
    d = l < 0 ? o.length : l;
  if ((s?.[1][0] ?? 0) >= rc) d = 0;
  else if (s) {
    d = s[2] ??= await u(s);
    for (let e of n) {
      if (e[0] >= d) break;
      let t = await e[1];
      if (t[0] !== ec && t[0] < rc && !(`loaderData` in o[e[0]])) {
        ((s = [e[0], t]), (d = s[2] = await u(s)));
        break;
      }
    }
  }
  for (let e of n) {
    if (e[0] >= d) break;
    let t = await e[2];
    if (t) {
      s = t;
      break;
    }
  }
  if ((s?.[1][0] ?? 0) >= rc) {
    let n = s[1];
    if (n[0] !== rc || n[1].options.reloadDocument || n[2]) return (Cc(e, t), n);
    ((c = !0), (s = [0, [tc, Error(`Too many redirects`)]]));
  }
  let f = s ? (s[2] ?? (await u(s))) : l;
  if (f >= 0) {
    let i = s?.[1],
      l = i?.[0],
      u = o[f],
      d = i?.[1],
      p = () => {
        i &&
          ((u._notFound = void 0),
          l === tc
            ? (u.status = `error`)
            : ((d.routeId = u.routeId),
              u.routeId === e.routeTree.id
                ? ((u.status = `success`), (u._notFound = !0))
                : (u.status = `notFound`)),
          (u.error = d),
          (u.isFetching = !1));
      };
    (p(), i || a?.());
    let m = B(e, u);
    try {
      await oc(
        i
          ? Promise.resolve().then(() => Zs(m, l === tc ? `errorComponent` : `notFoundComponent`))
          : Promise.all([Zs(m), Zs(m, `notFoundComponent`)]),
        r.signal,
      );
    } catch (n) {
      if (n === r.signal && r.signal.aborted) return (Cc(e, t), ic);
    }
    i
      ? c &&
        (r.abort(),
        await Promise.all([
          ...n.map((e) => e[1]),
          ...n.map((e) => e[2]),
          ...(t[2] ?? []).map((e) => e[1]),
        ]),
        Cc(e, t),
        pc(e, o),
        p())
      : (u.status = `success`);
  }
  return t;
}
async function Dc(e, t, n, r = 0, i = t[1].length) {
  let a = t[1];
  for (let t = r; t < i; t++) {
    let r = a[t],
      i = B(e, r).options;
    if (i.head || i.scripts)
      try {
        let t = {
            ssr: e.options.ssr,
            matches: a,
            match: r,
            params: r.params,
            loaderData: r.loaderData,
          },
          [o, s] = await oc(Promise.all([i.head?.(t), i.scripts?.(t)]), n);
        ((r.meta = o?.meta),
          (r.links = o?.links),
          (r.headScripts = o?.scripts),
          (r.styles = o?.styles),
          (r.scripts = s));
      } catch (e) {
        if (e === n && n.aborted) break;
        console.error(e);
      }
    if (r.status !== `success` || r._notFound) break;
  }
  return t;
}
async function Oc(e, t, n, r) {
  let i = [t, n],
    a = r[0].signal,
    o;
  try {
    let t = e.stores.matches.get(),
      s = n.findIndex((e) => e._notFound);
    if (e.options.notFoundMode !== `root` && s >= 0) {
      let t = await Sc(e, n, void 0, a, s);
      ((n[s]._notFound = void 0), (n[t]._notFound = !0), (s = t));
    }
    let c = s < 0 ? n.length : s + 1,
      l = 0;
    for (; l < c && l !== s;) {
      let e = n[l],
        i = r[2][l],
        a = t[l];
      if (
        i?.id !== e.id ||
        i.status !== `success` ||
        e.preload ||
        a?.id !== e.id ||
        a.status !== `success` ||
        (l++, i._notFound || a._notFound)
      )
        break;
    }
    let u = [],
      d = r[6] ?? 0,
      f = d ? Promise.resolve(n[d - 1]) : void 0,
      p = () => {
        for (let t = d; t < c && !a.aborted; t++) f = xc(e, i, t, u, f, r, l);
      },
      m = await uc(e, i, r, c, p, l);
    if (m) {
      if (((r[4] = !0), (c = m[0]), m[1][0] === nc)) {
        let t = await Sc(e, n, m, a);
        ((m[2] = t), (c = Math.min(c, t + 1)));
      } else m[1][0] >= rc && (c = 0);
      p();
    }
    if (!a.aborted && !r[3]) {
      let t = [];
      for (let [n, r] of e._flights ?? []) r[2] || (e._flights.delete(n), t.push(r[1]));
      for (let e of t) e.abort();
    }
    let h = Ec(e, i, u, r[0], wc(u, m, i[2]), r[7]);
    (i[2]?.length &&
      (i[3] = wc(
        i[2],
        void 0,
        void 0,
        h.then(
          (e) => (ac(e) ? 0 : Qs(n).length),
          () => 0,
        ),
      )),
      (o = await h));
  } catch (t) {
    if ((Cc(e, i), t === a && a.aborted)) return ic;
    throw t;
  }
  return ac(o) ? o : Dc(e, o, a, r[6] === n.length ? r[6] : 0);
}
function kc(e, t) {
  if (e._tx !== t) return;
  let n = t[3],
    r = e.stores.matches.get(),
    i = e._pending;
  for (let a = 0; a < n.length; a++) {
    let o = n[a],
      s = o.status === `success` && !o._notFound,
      c = r[a]?.id === o.id && r[a]?.status === `pending`;
    if (s && !c) continue;
    let l = B(e, o),
      u = s || o.invalid ? 0 : (l.options.pendingMs ?? e.options.defaultPendingMs),
      d = l.options.pendingComponent ?? e.options.defaultPendingComponent;
    if (!d || typeof u != `number` || u === 1 / 0) {
      i && ((i[0] = t), (i[2] = 0), (i[4] = !0));
      return;
    }
    let f = l.options.pendingMinMs ?? e.options.defaultPendingMinMs ?? 0,
      p = !1;
    if (
      (i?.[1] === o.id
        ? ((p = i[0] !== t), (i[0] = t))
        : (clearTimeout(i?.[3]), (e._pending = i = void 0)),
      i || (e._pending = i = [t, o.id, c ? Date.now() + f : t[4] + u, void 0, c || void 0, d]),
      i[4] && !p && i[5] === d)
    )
      return;
    if (((i[5] = d), !i[4])) {
      clearTimeout(i[3]);
      let n = i[2] - Date.now();
      if (n > 0) {
        i[3] = setTimeout(() => kc(e, t), n);
        return;
      }
      i[2] = 0;
    }
    let m = n.map((e) => ({ ...e, _flight: void 0 }));
    m[a].status = `pending`;
    let h = (i[4] = e
      .startTransition(() => e.stores.setMatches(m), m)
      .then((t) => (t && e._pending === i && i[4] === h && !i[2] && (i[2] = Date.now() + f), t)));
    return;
  }
}
function Ac(e, t) {
  let n = e._pending;
  (e._tx === t || !e._tx?.[3].some((e) => e.id === n?.[1])) &&
    (clearTimeout(n?.[3]), (e._pending = void 0));
}
async function jc(e, t) {
  let n = e._pending;
  if (!n) return;
  clearTimeout(n[3]);
  let r = n[2] - Date.now();
  if (!n[4] || r <= 0 || !Qs(t[3]).some((e) => e.id === n[1])) return;
  let i;
  try {
    await oc(
      new Promise((e) => {
        i = setTimeout(e, r);
      }),
      t[0].signal,
    );
  } catch {}
  clearTimeout(i);
}
function Mc(e, t) {
  ((e._committed = t), e.stores.setMatches(t));
}
function Nc(e, t, n, r) {
  let i = e._committed,
    a = e._lifecycleEnd,
    o = e._cache;
  for (let e of n) ((e.preload = !1), r && (e._assetEnd = void 0));
  let s = Qs(n).length,
    c = new Map();
  {
    let t = Date.now(),
      r = new Set();
    for (let e = 0; e < n.length; e++) {
      let t = n[e];
      (e < s || t.status === `success`) && r.add(t.id);
    }
    for (let n of [...i, ...o.values()]) {
      if (n.status !== `success` || r.has(n.id)) continue;
      let i = B(e, n);
      !i.options.loader ||
        t - n.updatedAt >=
          (n.preload
            ? (i.options.preloadGcTime ?? e.options.defaultPreloadGcTime ?? 3e5)
            : (i.options.gcTime ?? e.options.defaultGcTime ?? 3e5)) ||
        c.set(n.id, o.get(n.id) === n ? n : { ...n, _flight: void 0, isFetching: !1, context: {} });
    }
  }
  ((t[3] = []), (e._cache = c));
  let l = (e._lifecycleEnd = Fs(n));
  (Mc(e, n),
    pc(
      e,
      [...o.values(), ...i].filter((e) => e._flight && c.get(e.id) !== e),
      n,
    ),
    Is(e, i, n, a, l, t));
}
async function Pc(e, t) {
  let n = e._tx;
  for (; n && n !== t;) ((t = n), await n[5], (n = e._tx));
}
function Fc(e, t, n) {
  let r = n[1].options,
    i = n[2];
  if (!i) return e.navigate({ ...r, replace: !0, ignoreBlocker: !0 });
  if (r.reloadDocument)
    return e.navigate({
      href: (i.maskedLocation ?? i).publicHref,
      reloadDocument: !0,
      replace: !0,
      ignoreBlocker: !0,
    });
  ((i._redirects = t[1] + 1), (e._pendingLocation = i));
  let a = e.commitLocation({
    ...i,
    viewTransition: r.viewTransition,
    replace: !0,
    resetScroll: r.resetScroll,
    hashScrollIntoView: r.hashScrollIntoView,
    ignoreBlocker: !0,
  });
  return (
    queueMicrotask(() => {
      e._pendingLocation === i && (e._pendingLocation = void 0);
    }),
    a
  );
}
async function Ic(e, t, n, r, i) {
  let a = n.map((e) => ({ ...e }));
  mc(a);
  for (let t of r) (fc(e, a[t[0]]), (a[t[0]] = t[3]));
  let o = [t[2], a],
    s;
  try {
    s = await Ec(e, o, r, t[0], i);
  } catch (t) {
    throw (pc(e, a), t);
  }
  if (ac(s)) {
    (pc(e, a), s[0] === rc && e._tx === t && e._committed === n && (await Fc(e, t, s)));
    return;
  }
  if ((await Dc(e, s, t[0].signal), e._tx !== t || e._committed !== n)) {
    pc(e, a);
    return;
  }
  for (let t of a) {
    let n = e._cache.get(t.id);
    n?._flight && n._flight === t._flight && (e._cache.delete(t.id), fc(e, n));
  }
  (Mc(e, a), pc(e, n, a));
}
async function Lc(e, t, n, r, i, a) {
  let o = await Oc(e, t[2], t[3], [t[0], t[1], e._committed, void 0, i, n, a, r]);
  if (ac(o)) {
    let n = o[0] === rc && e._tx === t;
    if (((!n || o[1].options.reloadDocument) && Ac(e, t), pc(e, t[3]), (t[3] = []), !n)) return;
    if (e._tx !== t) {
      Ac(e, t);
      return;
    }
    await Fc(e, t, o);
    return;
  }
  let s = o[1];
  if ((e._tx === t && (await jc(e, t)), e._tx !== t)) {
    (Ac(e, t), pc(e, s), Cc(e, o));
    return;
  }
  let c = t[2],
    l = Ns(c, e.stores.resolvedLocation.get()),
    u = o[2];
  await e.startViewTransition(async () => {
    if ((e._tx === t && (await jc(e, t)), e._tx !== t)) {
      (Ac(e, t), pc(e, s), Cc(e, o));
      return;
    }
    let n = await e.startTransition(() => {
      (Ac(e, t),
        Nc(e, t, s, a),
        e._tx === t &&
          (e.emit({ type: `onLoad`, ...l }),
          e._tx === t && e.emit({ type: `onBeforeRouteMount`, ...l })));
    }, s);
    if (e._tx !== t) {
      Cc(e, o);
      return;
    }
    (u?.length && Ic(e, t, s, u, o[3]).catch(console.error),
      e.batch(() => {
        (e.stores.resolvedLocation.set(c),
          e.stores.status.set(`idle`),
          e._tx === t && e.emit({ type: `onResolved`, ...l }),
          n && e._tx === t && e.emit({ type: `onRendered`, ...l }));
      }),
      e._tx === t && (e._commitPromise?.resolve(), (e._commitPromise = void 0)));
  });
}
async function Rc(e, t) {
  let n = e._tx,
    r = e.stores.resolvedLocation.get(),
    i = r ?? e.stores.location.get(),
    a = e.latestLocation,
    o = e._pendingLocation,
    s = o?.href === a.href ? (o._redirects ?? 0) : 0,
    c = e._handoff,
    l = c?.[0](),
    u = new AbortController(),
    d = e._preflight;
  if (((e._preflight = u), l || c?.[1](), d?.abort(), !u.signal.aborted)) {
    let t = Ns(a, r);
    (e.emit({ type: `onBeforeNavigate`, ...t }),
      u.signal.aborted || e.emit({ type: `onBeforeLoad`, ...t }));
  }
  if (u.signal.aborted) {
    await Pc(e, n);
    return;
  }
  let f = i.href === a.href,
    p = u,
    m = e.matchRoutes(a, { _controller: u });
  mc(m);
  let h = l ? c[1](m) : void 0;
  if ((h ? (p = l) : l?.abort(), u.signal.aborted)) {
    (pc(e, m), await Pc(e, n));
    return;
  }
  e._preflight = void 0;
  let g,
    _ = () => Lc(e, y, f, () => kc(e, y), t?.sync, h),
    v = t?.sync ? new Promise((e) => (g = e)) : Promise.resolve().then(_),
    y = [p, s, a, m, Date.now(), v.then(() => Pc(e, y))];
  if (((e._tx = y), n)) {
    for (let t of e.stores.matches.get()) {
      if (e._tx !== y) break;
      t.isFetching && hc(e, t, !1);
    }
    (n[0].abort(), pc(e, n[3], y[3], !0));
  }
  if (e._tx !== y) {
    (pc(e, y[3]), (y[3] = []), g?.(), await Pc(e, y));
    return;
  }
  (e.batch(() => {
    (e.stores.status.set(`pending`), e.stores.location.set(a));
  }),
    (h || (!e._committed.length && m[0]?.status !== `success` && !m.some((e) => e._notFound))) &&
      kc(e, y),
    g?.(_()),
    await y[5]);
}
async function zc(e, t) {
  let n = e.buildLocation(t);
  for (let t = 0; ; t++) {
    let r = e._committed,
      i = new AbortController(),
      a,
      o,
      s;
    try {
      try {
        ((a = e.matchRoutes(n, { _controller: i })),
          mc(a),
          (o = (e._preloads ??= new Map()).set(i, a)),
          (s = await Oc(e, n, a, [i, t, r, !0])));
      } finally {
        (o && ((o = o.delete(i)), pc(e, a)), i.abort());
      }
      if (!ac(s)) return s[1];
      if (!o || s.length < 3) return;
      n = s[2];
    } catch (e) {
      R(e) || console.error(e);
      return;
    }
  }
}
var Bc = Symbol.for(`TSR_DEFERRED_PROMISE`);
function V(e, t) {
  let n = e;
  return n[Bc]
    ? n
    : ((n[Bc] = { status: `pending` }),
      n
        .then((e) => {
          ((n[Bc].status = `success`), (n[Bc].data = e));
        })
        .catch((e) => {
          ((n[Bc].status = `error`),
            (n[Bc].error = { data: (t?.serializeError ?? Ms)(e), __isServerError: !0 }));
        }),
      n);
}
function Vc(e, t) {
  if (e) return typeof e == `string` ? e : e[t];
}
function Hc(e) {
  return e?.scriptFormat ?? `module`;
}
function Uc(e, t, n) {
  let r = Wc(t),
    i = Vc(n, `script`) ?? r.crossOrigin;
  return {
    ...(Hc(e) === `iife` ? { rel: `preload`, as: `script` } : { rel: `modulepreload` }),
    href: r.href,
    ...(i ? { crossOrigin: i } : {}),
  };
}
function Wc(e) {
  return typeof e == `string` ? { href: e, crossOrigin: void 0 } : e;
}
function Gc(e, t) {
  if (t.length === 0) return;
  if (t.length === 1) {
    e.push(t[0]);
    return;
  }
  let n = new Set();
  for (let r of t) {
    let t = JSON.stringify(r);
    n.has(t) || (n.add(t), e.push(r));
  }
}
function Kc(e) {
  return typeof e == `string` ? { href: e, crossOrigin: void 0 } : e;
}
function qc(e, t, n, r) {
  let i = $s(e),
    a = [],
    o = [];
  for (let e of i)
    for (let t of Array.isArray(e.scripts) ? e.scripts : []) {
      if (!t) continue;
      let { children: e, ...i } = t;
      a.push({ tag: `script`, attrs: { ...i, ...r, nonce: n }, children: e });
    }
  if (t)
    for (let e of i)
      for (let r of t.routes[e.routeId]?.scripts ?? [])
        o.push({ tag: `script`, attrs: { ...r.attrs, nonce: n }, children: r.children });
  return [a, o];
}
function Jc([e, t], n) {
  return n ? [...n.before, ...e, ...t, n.boundary] : [...e, ...t];
}
var H = te(v(), 1),
  U = ee();
function Yc({ promise: e }) {
  if (ge) return ge(e);
  let t = V(e);
  if (t[Bc].status === `pending`) throw t;
  if (t[Bc].status === `error`) throw t[Bc].error;
  return t[Bc].data;
}
function Xc(e) {
  let t = (0, U.jsx)(Zc, { ...e });
  return e.fallback ? (0, U.jsx)(H.Suspense, { fallback: e.fallback, children: t }) : t;
}
function Zc(e) {
  let t = Yc(e);
  return e.children(t);
}
var Qc = class extends H.Component {
  constructor(...e) {
    (super(...e),
      (this.state = { error: 0 }),
      (this.reset = () => {
        this.setState({ error: 0 });
      }));
  }
  static getDerivedStateFromProps(e, t) {
    let n = e.getResetKey();
    return t.error && t.resetKey !== n ? { resetKey: n, error: 0 } : { resetKey: n };
  }
  static getDerivedStateFromError(e) {
    return { error: [e] };
  }
  componentDidCatch(e, t) {
    this.props.onCatch?.(e, t);
  }
  render() {
    let e = this.state.error;
    return e
      ? H.createElement(this.props.errorComponent ?? $c, { error: e[0], reset: this.reset })
      : this.props.children;
  }
};
function $c({ error: e }) {
  let [t, n] = H.useState(!1);
  return (0, U.jsxs)(`div`, {
    style: { padding: `.5rem`, maxWidth: `100%` },
    children: [
      (0, U.jsxs)(`div`, {
        style: { display: `flex`, alignItems: `center`, gap: `.5rem` },
        children: [
          (0, U.jsx)(`strong`, { style: { fontSize: `1rem` }, children: `Something went wrong!` }),
          (0, U.jsx)(`button`, {
            style: {
              appearance: `none`,
              fontSize: `.6em`,
              border: `1px solid currentColor`,
              padding: `.1rem .2rem`,
              fontWeight: `bold`,
              borderRadius: `.25rem`,
            },
            onClick: () => n((e) => !e),
            children: t ? `Hide Error` : `Show Error`,
          }),
        ],
      }),
      (0, U.jsx)(`div`, { style: { height: `.25rem` } }),
      t
        ? (0, U.jsx)(`div`, {
            children: (0, U.jsx)(`pre`, {
              style: {
                fontSize: `.7em`,
                border: `1px solid red`,
                borderRadius: `.25rem`,
                padding: `.3rem`,
                color: `red`,
                overflow: `auto`,
              },
              children: e?.message ? (0, U.jsx)(`code`, { children: e.message }) : null,
            }),
          })
        : null,
    ],
  });
}
function el({ update: e, notify: t, unwatched: n }) {
  return { link: r, unlink: i, propagate: a, checkDirty: o, shallowPropagate: s };
  function r(e, t, n) {
    let r = t.depsTail;
    if (r !== void 0 && r.dep === e) return;
    let i = r === void 0 ? t.deps : r.nextDep;
    if (i !== void 0 && i.dep === e) {
      ((i.version = n), (t.depsTail = i));
      return;
    }
    let a = e.subsTail;
    if (a !== void 0 && a.version === n && a.sub === t) return;
    let o =
      (t.depsTail =
      e.subsTail =
        { version: n, dep: e, sub: t, prevDep: r, nextDep: i, prevSub: a, nextSub: void 0 });
    (i !== void 0 && (i.prevDep = o),
      r === void 0 ? (t.deps = o) : (r.nextDep = o),
      a === void 0 ? (e.subs = o) : (a.nextSub = o));
  }
  function i(e, t = e.sub) {
    let r = e.dep,
      i = e.prevDep,
      a = e.nextDep,
      o = e.nextSub,
      s = e.prevSub;
    return (
      a === void 0 ? (t.depsTail = i) : (a.prevDep = i),
      i === void 0 ? (t.deps = a) : (i.nextDep = a),
      o === void 0 ? (r.subsTail = s) : (o.prevSub = s),
      s === void 0 ? (r.subs = o) === void 0 && n(r) : (s.nextSub = o),
      a
    );
  }
  function a(e) {
    let n = e.nextSub,
      r;
    top: do {
      let i = e.sub,
        a = i.flags;
      if (
        (a & 60
          ? a & 12
            ? a & 4
              ? !(a & 48) && c(e, i)
                ? ((i.flags = a | 40), (a &= 1))
                : (a = 0)
              : (i.flags = (a & -9) | 32)
            : (a = 0)
          : (i.flags = a | 32),
        a & 2 && t(i),
        a & 1)
      ) {
        let t = i.subs;
        if (t !== void 0) {
          let i = (e = t).nextSub;
          i !== void 0 && ((r = { value: n, prev: r }), (n = i));
          continue;
        }
      }
      if ((e = n) !== void 0) {
        n = e.nextSub;
        continue;
      }
      for (; r !== void 0;)
        if (((e = r.value), (r = r.prev), e !== void 0)) {
          n = e.nextSub;
          continue top;
        }
      break;
    } while (!0);
  }
  function o(t, n) {
    let r,
      i = 0,
      a = !1;
    top: do {
      let o = t.dep,
        c = o.flags;
      if (n.flags & 16) a = !0;
      else if ((c & 17) == 17) {
        if (e(o)) {
          let e = o.subs;
          (e.nextSub !== void 0 && s(e), (a = !0));
        }
      } else if ((c & 33) == 33) {
        ((t.nextSub !== void 0 || t.prevSub !== void 0) && (r = { value: t, prev: r }),
          (t = o.deps),
          (n = o),
          ++i);
        continue;
      }
      if (!a) {
        let e = t.nextDep;
        if (e !== void 0) {
          t = e;
          continue;
        }
      }
      for (; i--;) {
        let i = n.subs,
          o = i.nextSub !== void 0;
        if ((o ? ((t = r.value), (r = r.prev)) : (t = i), a)) {
          if (e(n)) {
            (o && s(i), (n = t.sub));
            continue;
          }
          a = !1;
        } else n.flags &= -33;
        n = t.sub;
        let c = t.nextDep;
        if (c !== void 0) {
          t = c;
          continue top;
        }
      }
      return a;
    } while (!0);
  }
  function s(e) {
    do {
      let n = e.sub,
        r = n.flags;
      (r & 48) == 32 && ((n.flags = r | 16), (r & 6) == 2 && t(n));
    } while ((e = e.nextSub) !== void 0);
  }
  function c(e, t) {
    let n = t.depsTail;
    for (; n !== void 0;) {
      if (n === e) return !0;
      n = n.prevDep;
    }
    return !1;
  }
}
function tl(e, t, n) {
  let r = typeof e == `object`,
    i = r ? e : void 0;
  return {
    next: (r ? e.next : e)?.bind(i),
    error: (r ? e.error : t)?.bind(i),
    complete: (r ? e.complete : n)?.bind(i),
  };
}
var nl = [],
  rl = 0,
  {
    link: il,
    unlink: al,
    propagate: ol,
    checkDirty: sl,
    shallowPropagate: cl,
  } = el({
    update(e) {
      return e._update();
    },
    notify(e) {
      ((nl[ll++] = e), (e.flags &= -3));
    },
    unwatched(e) {
      e.depsTail !== void 0 && ((e.depsTail = void 0), (e.flags = 17), pl(e));
    },
  }),
  W = 0,
  ll = 0,
  ul,
  dl = 0;
function fl(e) {
  try {
    (++dl, e());
  } finally {
    --dl || ml();
  }
}
function pl(e) {
  let t = e.depsTail,
    n = t === void 0 ? e.deps : t.nextDep;
  for (; n !== void 0;) n = al(n, e);
}
function ml() {
  if (!(dl > 0)) {
    for (; W < ll;) {
      let e = nl[W];
      ((nl[W++] = void 0), e.notify());
    }
    ((W = 0), (ll = 0));
  }
}
function hl(e, t) {
  let n = typeof e == `function`,
    r = e,
    i = {
      _snapshot: n ? void 0 : e,
      subs: void 0,
      subsTail: void 0,
      deps: void 0,
      depsTail: void 0,
      flags: +!n,
      get() {
        return (ul !== void 0 && il(i, ul, rl), i._snapshot);
      },
      subscribe(e) {
        let t = tl(e),
          n = { current: !1 },
          r = gl(() => {
            (i.get(), n.current ? ((ul = void 0), t.next?.(i._snapshot)) : (n.current = !0));
          });
        return {
          unsubscribe: () => {
            r.stop();
          },
        };
      },
      _update(e) {
        let a = ul,
          o = t?.compare ?? Object.is;
        if (n) ((ul = i), ++rl, (i.depsTail = void 0));
        else if (e === void 0) return !1;
        n && (i.flags = 5);
        try {
          let t = i._snapshot,
            a = typeof e == `function` ? e(t) : e === void 0 && n ? r(t) : e;
          return t === void 0 || !o(t, a) ? ((i._snapshot = a), !0) : !1;
        } finally {
          ((ul = a), n && (i.flags &= -5), pl(i));
        }
      },
    };
  return (
    n
      ? ((i.flags = 17),
        (i.get = function () {
          let e = i.flags;
          if (e & 16 || (e & 32 && sl(i.deps, i))) {
            if (i._update()) {
              let e = i.subs;
              e !== void 0 && cl(e);
            }
          } else e & 32 && (i.flags = e & -33);
          return (ul !== void 0 && il(i, ul, rl), i._snapshot);
        }))
      : (i.set = function (e) {
          if (i._update(e)) {
            let e = i.subs;
            e !== void 0 && (ol(e), cl(e), ml());
          }
        }),
    i
  );
}
function gl(e) {
  let t = () => {
      let t = ul;
      ((ul = n), ++rl, (n.depsTail = void 0), (n.flags = 6));
      try {
        return e();
      } finally {
        ((ul = t), (n.flags &= -5), pl(n));
      }
    },
    n = {
      deps: void 0,
      depsTail: void 0,
      subs: void 0,
      subsTail: void 0,
      flags: 6,
      notify() {
        let e = this.flags;
        e & 16 || (e & 32 && sl(this.deps, this)) ? t() : (this.flags = 2);
      },
      stop() {
        ((this.flags = 0), (this.depsTail = void 0), pl(this));
      },
    };
  return (t(), n);
}
function _l(e) {
  let t = We(),
    n = `not-found-${Pe(t.stores.location, (e) => e.pathname)}-${Pe(t.stores.status)}`;
  return (0, U.jsx)(Qc, {
    getResetKey: () => n,
    onCatch: (t, n) => {
      if (R(t)) e.onCatch?.(t, n);
      else throw t;
    },
    errorComponent: ({ error: t }) => {
      if (R(t)) return e.fallback?.(t);
      throw t;
    },
    children: e.children,
  });
}
function vl() {
  return (0, U.jsx)(`p`, { children: `Not Found` });
}
function yl(e, t, n) {
  return t.options.notFoundComponent
    ? (0, U.jsx)(t.options.notFoundComponent, { ...n })
    : e.options.defaultNotFoundComponent
      ? (0, U.jsx)(e.options.defaultNotFoundComponent, { ...n })
      : (0, U.jsx)(vl, {});
}
function bl(e, t) {
  let n = t?.options.pendingComponent ?? e.options.defaultPendingComponent;
  return n ? (0, U.jsx)(n, {}) : null;
}
var xl = (e, t) => e[0] === t[0] && e[1] === t[1],
  Sl = (e, t, n) =>
    !t.isRoot ||
    t.options.shellComponent ||
    t.options.wrapInSuspense ||
    n === !1 ||
    n === `data-only` ||
    !e.ssr,
  Cl = H.memo(function ({ routeId: e }) {
    let t = We();
    return (0, U.jsx)(wl, { router: t, match: Pe(t.stores.getMatchStore(e)) });
  });
function wl({ router: e, match: t }) {
  let n = e.routesById[t.routeId],
    r = bl(e, n),
    i = n.options.errorComponent ?? e.options.defaultErrorComponent,
    a = n.options.onCatch ?? e.options.defaultOnCatch,
    o = n.isRoot
      ? (n.options.notFoundComponent ?? e.options.notFoundRoute?.options.component)
      : n.options.notFoundComponent,
    s = t.ssr === !1 || t.ssr === `data-only`,
    c =
      Sl(e, n, t.ssr) &&
      (n.options.wrapInSuspense ?? r ?? (n.options.errorComponent?.preload || s)),
    l = (0, U.jsx)(Tl, { match: t });
  (s && (l = (0, U.jsx)(Le, { fallback: r, children: l })),
    o &&
      (l = (0, U.jsx)(_l, {
        fallback: (e) => {
          if (((e.routeId ??= t.routeId), e.routeId !== t.routeId)) throw e;
          return H.createElement(o, e);
        },
        children: l,
      })),
    i &&
      (l = (0, U.jsx)(Qc, {
        getResetKey: () => t,
        errorComponent: i,
        onCatch: (e, n) => {
          if (R(e)) throw ((e.routeId ??= t.routeId), e);
          a?.(e, n);
        },
        children: l,
      })),
    c && (l = (0, U.jsx)(H.Suspense, { fallback: r, children: l })));
  let u = n.isRoot ? n.options.shellComponent : void 0;
  return (0, U.jsx)(me.Provider, {
    value: t.routeId,
    children: u
      ? (0, U.jsxs)(u, { children: [l, null] })
      : (0, U.jsxs)(U.Fragment, { children: [l, null] }),
  });
}
var Tl = H.memo(function ({ match: e }) {
    let t = We(),
      n = e.routeId,
      r = t.routesById[n],
      i = H.useMemo(() => {
        let i = (r.options.remountDeps ?? t.options.defaultRemountDeps)?.({
          routeId: n,
          loaderDeps: e.loaderDeps,
          params: e._strictParams,
          search: e._strictSearch,
        });
        return i ? JSON.stringify(i) : void 0;
      }, [
        n,
        e.loaderDeps,
        e._strictParams,
        e._strictSearch,
        r.options.remountDeps,
        t.options.defaultRemountDeps,
      ]),
      a = H.useMemo(() => {
        let e = r.options.component ?? t.options.defaultComponent;
        return e ? (0, U.jsx)(e, {}, i) : (0, U.jsx)(El, {});
      }, [i, r.options.component, t.options.defaultComponent]);
    if (e.status === `pending`) {
      if (t.ssr && !Sl(t, r, e.ssr)) return a;
      if (t._tx) throw t._tx[5];
      return bl(t, r);
    }
    if (e.status === `notFound`) return yl(t, r, e.error);
    if (e.status === `error`) throw e.error;
    return a;
  }),
  El = H.memo(function () {
    let e = We(),
      t = H.useContext(me),
      n,
      r,
      i;
    {
      let a = e.stores.getMatchStore(t);
      (([n, r] = Pe(a, (e) => [!!e._notFound, e.error], { compare: xl })),
        (i = Pe(e.stores.ids, (e) => e[e.indexOf(t) + 1])));
    }
    if (n) return yl(e, e.routesById[t], r);
    if (!i) return null;
    let a = (0, U.jsx)(Cl, { routeId: i });
    return t === `__root__` ? (0, U.jsx)(H.Suspense, { fallback: bl(e), children: a }) : a;
  });
function Dl(e, t) {
  let n = e[1];
  ((e.length = 0), n?.(t));
}
function Ol({ t: e }) {
  let t = We(),
    n = (t._rendered ??= []);
  return (
    (t.startTransition = (r, i) =>
      new Promise((a) => {
        (Dl(n, !1), n.push(i, a), e(t), H.startTransition(r));
      })),
    T(() => {
      let e = t.history.subscribe(t.load);
      t.updateLatestLocation();
      let r = t.latestLocation,
        i = t.buildLocation({
          to: r.pathname,
          search: !0,
          params: !0,
          hash: !0,
          state: !0,
          _includeValidateSearch: !0,
        });
      if (De(r.publicHref) !== De(i.publicHref))
        return (t.commitLocation({ ...i, replace: !0, ignoreBlocker: !0 }), e);
      let a = t.stores.resolvedLocation.get();
      return (
        a?.href === r.href && a.state.__TSR_key === r.state.__TSR_key
          ? n.push(t.stores.matches.get(), (e) => {
              e && t.emit({ type: `onRendered`, ...Ns(a, a) });
            })
          : t._tx || t.load({ sync: !0 }).catch(console.error),
        e
      );
    }, [t, t.history]),
    null
  );
}
function kl() {
  let e = We(),
    t = e.routesById[w],
    n = bl(e, t),
    r = (0, U.jsxs)(U.Fragment, {
      children: [
        (0, U.jsx)(Ol, { t: H.useState()[1] }),
        e.ssr
          ? (0, U.jsx)(Al, {})
          : (0, U.jsx)(H.Suspense, { fallback: n, children: (0, U.jsx)(Al, {}) }),
      ],
    });
  return e.options.InnerWrap ? (0, U.jsx)(e.options.InnerWrap, { children: r }) : r;
}
function Al() {
  let e = We(),
    t = e._rendered,
    n = Pe(e.stores.matches, (e) => t[0] ?? e),
    r = n[0],
    i = r?.routeId;
  T(() => {
    t[0] === n && Dl(t, !0);
  }, [t, n]);
  let a = i ? (0, U.jsx)(Cl, { routeId: i }) : null;
  return e.options.disableGlobalCatchBoundary
    ? a
    : (0, U.jsx)(Qc, { getResetKey: () => r, onCatch: void 0, children: a });
}
var jl = (e) => ({ createMutableStore: hl, createReadonlyStore: hl, batch: fl }),
  Ml = (e) => new Nl(e),
  Nl = class extends Ls {
    constructor(e) {
      super(e, jl);
    }
  };
function Pl({ router: e, children: t, ...n }) {
  Ve(n) && e.update({ ...e.options, ...n, context: { ...e.options.context, ...n.context } });
  let r = (0, U.jsx)(Ue.Provider, { value: e, children: t });
  return e.options.Wrap ? (0, U.jsx)(e.options.Wrap, { children: r }) : r;
}
function Fl({ router: e, ...t }) {
  return (0, U.jsx)(Pl, { router: e, ...t, children: (0, U.jsx)(kl, {}) });
}
function Il(e) {
  let t = We({ warn: e?.router === void 0 }),
    n = e?.router || t;
  return Pe(n.stores.__store, ue(e, n));
}
function Ll(e, t) {
  if (t)
    for (let [n, r] of Object.entries(t))
      n !== `suppressHydrationWarning` &&
        r !== void 0 &&
        r !== !1 &&
        e.setAttribute(n, typeof r == `boolean` ? `` : String(r));
}
function Rl(e) {
  let { attrs: t, children: n, nonce: r, preventScriptHoist: i } = e,
    a = H.useMemo(() => (n === void 0 ? void 0 : { __html: n }), [n]);
  switch (e.tag) {
    case `title`:
      return (0, U.jsx)(`title`, { ...t, suppressHydrationWarning: !0, children: n });
    case `meta`:
      return (0, U.jsx)(`meta`, { ...t, suppressHydrationWarning: !0 });
    case `link`:
      return (0, U.jsx)(`link`, {
        ...t,
        precedence: t?.precedence ?? (t?.rel === `stylesheet` ? `default` : void 0),
        nonce: r,
        suppressHydrationWarning: !0,
      });
    case `style`:
      return (e.inlineCss, (0, U.jsx)(`style`, { ...t, dangerouslySetInnerHTML: a, nonce: r }));
    case `script`:
      return (0, U.jsx)(zl, { attrs: t, preventScriptHoist: i, children: n });
    default:
      return null;
  }
}
function zl({ attrs: e, children: t, preventScriptHoist: n }) {
  We();
  let r = je(),
    i = H.useMemo(() => (t === void 0 ? void 0 : { __html: t }), [t]),
    a =
      typeof e?.type == `string` &&
      e.type !== `` &&
      e.type !== `text/javascript` &&
      e.type !== `module`;
  if (
    (H.useEffect(() => {
      if (!a) {
        if (e?.src) {
          let t = document.createElement(`a`);
          t.href = e.src;
          let n = t.href;
          for (let e of document.scripts) if (e.src === n) return;
          let r = document.createElement(`script`);
          return (Ll(r, e), document.head.appendChild(r), () => r.remove());
        }
        if (typeof t == `string`) {
          let n = typeof e?.type == `string` ? e.type : `text/javascript`,
            r = typeof e?.nonce == `string` ? e.nonce : void 0;
          for (let e of document.scripts) {
            if (e.hasAttribute(`src`)) continue;
            let i = e.getAttribute(`type`) ?? `text/javascript`,
              a = e.getAttribute(`nonce`) ?? void 0;
            if (e.textContent === t && i === n && a === r) return;
          }
          let i = document.createElement(`script`);
          return ((i.textContent = t), Ll(i, e), document.head.appendChild(i), () => i.remove());
        }
      }
    }, [e, t, a]),
    a && typeof t == `string`)
  )
    return (0, U.jsx)(`script`, { ...e, suppressHydrationWarning: !0, dangerouslySetInnerHTML: i });
  if (!r) {
    if (e?.src) return (0, U.jsx)(`script`, { ...e, suppressHydrationWarning: !0 });
    if (typeof t == `string`)
      return (0, U.jsx)(`script`, {
        ...e,
        dangerouslySetInnerHTML: i,
        suppressHydrationWarning: !0,
      });
  }
  return null;
}
function G(e, t, n, r) {
  n = $s(n);
  let i = n.map((e) => e.meta).filter((e) => e !== void 0),
    a = [],
    o = {},
    s;
  for (let e = i.length - 1; e >= 0; e--) {
    let n = i[e];
    for (let e = n.length - 1; e >= 0; e--) {
      let r = n[e];
      if (r)
        if (r.title) s ||= { tag: `title`, children: r.title };
        else if (`script:ld+json` in r)
          try {
            let e = JSON.stringify(r[`script:ld+json`]);
            a.push({ tag: `script`, attrs: { type: `application/ld+json` }, children: Be(e) });
          } catch {}
        else {
          let e = r.name ?? r.property;
          if (e) {
            if (o[e]) continue;
            o[e] = !0;
          }
          a.push({ tag: `meta`, attrs: { ...r, nonce: t } });
        }
    }
  }
  (s && a.push(s),
    t && a.push({ tag: `meta`, attrs: { property: `csp-nonce`, content: t } }),
    a.reverse());
  let c = n
      .flatMap((e) => e.links ?? [])
      .filter((e) => e !== void 0)
      .map((e) => ({ tag: `link`, attrs: { ...e, nonce: t } })),
    l = e.ssr?.manifest,
    u = [];
  l &&
    (n.forEach((e) => {
      l.routes[e.routeId]?.css?.forEach((e) => {
        let n = Kc(e);
        u.push({
          tag: `link`,
          attrs: {
            rel: `stylesheet`,
            ...n,
            crossOrigin: Vc(r, `stylesheet`) ?? n.crossOrigin,
            suppressHydrationWarning: !0,
            nonce: t,
          },
        });
      });
    }),
    l.inlineStyle &&
      u.push({
        tag: `style`,
        attrs: { ...l.inlineStyle.attrs, nonce: t },
        children: l.inlineStyle.children,
        inlineCss: !0,
      }));
  let d = [];
  l &&
    n.forEach((e) => {
      l.routes[e.routeId]?.preloads?.forEach((e) => {
        d.push({ tag: `link`, attrs: { ...Uc(l, e, r), nonce: t } });
      });
    });
  let f = n
      .flatMap((e) => e.styles ?? [])
      .filter((e) => e !== void 0)
      .map(({ children: e, ...n }) => ({ tag: `style`, attrs: { ...n, nonce: t }, children: e })),
    p = n
      .flatMap((e) => e.headScripts ?? [])
      .filter((e) => e !== void 0)
      .map(({ children: e, ...n }) => ({ tag: `script`, attrs: { ...n, nonce: t }, children: e })),
    m = [];
  return (Gc(m, a), m.push(...d), Gc(m, c), m.push(...u), Gc(m, f), Gc(m, p), m);
}
var K = (e) => {
  let t = We(),
    n = t.options.ssr?.nonce,
    r = H.useCallback((r) => G(t, n, r, e), [e, n, t]);
  return Pe(t.stores.matches, r, { compare: ke });
};
function q(e) {
  let t = K(e.assetCrossOrigin),
    n = We().options.ssr?.nonce;
  return (0, U.jsx)(U.Fragment, {
    children: t.map((e) =>
      (0, H.createElement)(Rl, { ...e, key: `tsr-meta-${JSON.stringify(e)}`, nonce: n }),
    ),
  });
}
var J = { suppressHydrationWarning: !0 },
  Y = () => {
    let e = We(),
      t = e.options.ssr?.nonce,
      n = (n) => {
        let r = qc(n, e.ssr?.manifest, t, J);
        for (let e of r[1])
          if (typeof e.attrs?.src == `string`) {
            let t = e;
            t.preventScriptHoist = !0;
          }
        return r;
      };
    return Bl(Pe(e.stores.matches, (e) => Jc(n(e)), { compare: ke }));
  };
function Bl(e) {
  return (0, U.jsx)(U.Fragment, {
    children: e.map((e, t) => (0, H.createElement)(Rl, { ...e, key: `tsr-scripts-${e.tag}-${t}` })),
  });
}
var Vl = (e, t) => {
  let n = { type: `request`, ...(t || e) },
    r = (e) => Vl({}, Object.assign(n, { validator: e, inputValidator: e }));
  return {
    options: n,
    middleware: (e) => Vl({}, Object.assign(n, { middleware: e })),
    validator: r,
    inputValidator: r,
    client: (e) => Vl({}, Object.assign(n, { client: e })),
    server: (e) => Vl({}, Object.assign(n, { server: e })),
  };
};
function Hl(e, t) {
  for (let n = 0, r = t.length; n < r; n++) {
    let r = t[n];
    e.has(r) || (e.add(r), r.extends && Hl(e, r.extends));
  }
}
var Ul = (e) => ({
    getOptions: async () => {
      let t = await e();
      if (t.serializationAdapters) {
        let e = new Set();
        (Hl(e, t.serializationAdapters), (t.serializationAdapters = Array.from(e)));
      }
      return t;
    },
    createMiddleware: Vl,
  }),
  Wl = Vl(),
  Gl = void 0,
  Kl = Ul(() => ({ requestMiddleware: [Wl, Gl] })),
  ql = class extends tt {
    constructor(e = {}) {
      (super(), (this.config = e), (this.#e = new Set()), (this.#t = new Map()), (this.#n = 0));
    }
    #e;
    #t;
    #n;
    build(e, t, n) {
      let r = new lt({
        client: e,
        mutationCache: this,
        mutationId: ++this.#n,
        options: e.defaultMutationOptions(t),
        state: n,
      });
      return (this.add(r), r);
    }
    add(e) {
      this.#e.add(e);
      let t = Jl(e);
      if (typeof t == `string`) {
        let n = this.#t.get(t);
        n ? n.push(e) : this.#t.set(t, [e]);
      }
      this.notify({ type: `added`, mutation: e });
    }
    remove(e) {
      if (this.#e.delete(e)) {
        let t = Jl(e);
        if (typeof t == `string`) {
          let n = this.#t.get(t);
          if (n)
            if (n.length > 1) {
              let t = n.indexOf(e);
              t !== -1 && n.splice(t, 1);
            } else n[0] === e && this.#t.delete(t);
        }
      }
      this.notify({ type: `removed`, mutation: e });
    }
    canRun(e) {
      let t = Jl(e);
      if (typeof t == `string`) {
        let n = this.#t.get(t)?.find((e) => e.state.status === `pending`);
        return !n || n === e;
      }
      return !0;
    }
    runNext(e) {
      let t = Jl(e);
      return typeof t == `string`
        ? (this.#t
            .get(t)
            ?.find((t) => t !== e && t.state.isPaused)
            ?.continue() ?? Promise.resolve())
        : Promise.resolve();
    }
    clear() {
      Ke.batch(() => {
        (this.#e.forEach((e) => {
          this.notify({ type: `removed`, mutation: e });
        }),
          this.#e.clear(),
          this.#t.clear());
      });
    }
    getAll() {
      return Array.from(this.#e);
    }
    find(e) {
      let t = { exact: !0, ...e };
      return this.getAll().find((e) => Ze(t, e));
    }
    findAll(e = {}) {
      return this.getAll().filter((t) => Ze(e, t));
    }
    notify(e) {
      Ke.batch(() => {
        this.listeners.forEach((t) => {
          t(e);
        });
      });
    }
    resumePausedMutations() {
      let e = this.getAll().filter((e) => e.state.isPaused);
      return Ke.batch(() => Promise.all(e.map((e) => e.continue().catch(Ge))));
    }
  };
function Jl(e) {
  return e.options.scope?.id;
}
var Yl = class extends tt {
    constructor(e = {}) {
      (super(), (this.config = e), (this.#e = new Map()));
    }
    #e;
    build(e, t, n) {
      let r = t.queryKey,
        i = t.queryHash ?? Ye(r, t),
        a = this.get(i);
      return (
        a ||
          ((a = new st({
            client: e,
            queryKey: r,
            queryHash: i,
            options: e.defaultQueryOptions(t),
            state: n,
            defaultOptions: e.getQueryDefaults(r),
          })),
          this.add(a)),
        a
      );
    }
    add(e) {
      this.#e.has(e.queryHash) ||
        (this.#e.set(e.queryHash, e), this.notify({ type: `added`, query: e }));
    }
    remove(e) {
      let t = this.#e.get(e.queryHash);
      t &&
        (e.destroy(),
        t === e && this.#e.delete(e.queryHash),
        this.notify({ type: `removed`, query: e }));
    }
    clear() {
      Ke.batch(() => {
        this.getAll().forEach((e) => {
          this.remove(e);
        });
      });
    }
    get(e) {
      return this.#e.get(e);
    }
    getAll() {
      return [...this.#e.values()];
    }
    find(e) {
      let t = { exact: !0, ...e };
      return this.getAll().find((e) => ot(t, e));
    }
    findAll(e = {}) {
      let t = this.getAll();
      return Object.keys(e).length > 0 ? t.filter((t) => ot(e, t)) : t;
    }
    notify(e) {
      Ke.batch(() => {
        this.listeners.forEach((t) => {
          t(e);
        });
      });
    }
    onFocus() {
      Ke.batch(() => {
        this.getAll().forEach((e) => {
          e.onFocus();
        });
      });
    }
    onOnline() {
      Ke.batch(() => {
        this.getAll().forEach((e) => {
          e.onOnline();
        });
      });
    }
  },
  Xl = class {
    #e;
    #t;
    #n;
    #r;
    #i;
    #a;
    #o;
    #s;
    constructor(e = {}) {
      ((this.#e = e.queryCache || new Yl()),
        (this.#t = e.mutationCache || new ql()),
        (this.#n = e.defaultOptions || {}),
        (this.#r = new Map()),
        (this.#i = new Map()),
        (this.#a = 0));
    }
    mount() {
      (this.#a++,
        this.#a === 1 &&
          ((this.#o = et.subscribe(async (e) => {
            e && (await this.resumePausedMutations(), this.#e.onFocus());
          })),
          (this.#s = qe.subscribe(async (e) => {
            e && (await this.resumePausedMutations(), this.#e.onOnline());
          }))));
    }
    unmount() {
      (this.#a--,
        this.#a === 0 && (this.#o?.(), (this.#o = void 0), this.#s?.(), (this.#s = void 0)));
    }
    isFetching(e) {
      return this.#e.findAll({ ...e, fetchStatus: `fetching` }).length;
    }
    isMutating(e) {
      return this.#t.findAll({ ...e, status: `pending` }).length;
    }
    getQueryData(e) {
      let t = this.defaultQueryOptions({ queryKey: e });
      return this.#e.get(t.queryHash)?.state.data;
    }
    ensureQueryData(e) {
      let t = this.defaultQueryOptions(e),
        n = this.#e.build(this, t),
        r = n.state.data;
      return r === void 0
        ? this.fetchQuery(e)
        : (e.revalidateIfStale && n.isStaleByTime($e(t.staleTime, n)) && this.prefetchQuery(t),
          Promise.resolve(r));
    }
    getQueriesData(e) {
      return this.#e.findAll(e).map(({ queryKey: e, state: t }) => [e, t.data]);
    }
    setQueryData(e, t, n) {
      let r = this.defaultQueryOptions({ queryKey: e }),
        i = this.#e.get(r.queryHash)?.state.data,
        a = Xe(t, i);
      if (a !== void 0) return this.#e.build(this, r).setData(a, { ...n, manual: !0 });
    }
    setQueriesData(e, t, n) {
      return Ke.batch(() =>
        this.#e.findAll(e).map(({ queryKey: e }) => [e, this.setQueryData(e, t, n)]),
      );
    }
    getQueryState(e) {
      let t = this.defaultQueryOptions({ queryKey: e });
      return this.#e.get(t.queryHash)?.state;
    }
    removeQueries(e) {
      let t = this.#e;
      Ke.batch(() => {
        t.findAll(e).forEach((e) => {
          t.remove(e);
        });
      });
    }
    resetQueries(e, t) {
      let n = this.#e;
      return Ke.batch(
        () => (
          n.findAll(e).forEach((e) => {
            e.reset();
          }),
          this.refetchQueries({ type: `active`, ...e }, t)
        ),
      );
    }
    cancelQueries(e, t = {}) {
      let n = { revert: !0, ...t },
        r = Ke.batch(() => this.#e.findAll(e).map((e) => e.cancel(n)));
      return Promise.all(r).then(Ge).catch(Ge);
    }
    invalidateQueries(e, t = {}) {
      return Ke.batch(
        () => (
          this.#e.findAll(e).forEach((e) => {
            e.invalidate();
          }),
          e?.refetchType === `none`
            ? Promise.resolve()
            : this.refetchQueries({ ...e, type: e?.refetchType ?? e?.type ?? `active` }, t)
        ),
      );
    }
    refetchQueries(e, t = {}) {
      let n = { ...t, cancelRefetch: t.cancelRefetch ?? !0 },
        r = Ke.batch(() =>
          this.#e
            .findAll(e)
            .filter((e) => !e.isDisabled() && !e.isStatic())
            .map((e) => {
              let t = e.fetch(void 0, n);
              return (
                n.throwOnError || (t = t.catch(Ge)),
                e.state.fetchStatus === `paused` ? Promise.resolve() : t
              );
            }),
        );
      return Promise.all(r).then(Ge);
    }
    fetchQuery(e) {
      let t = this.defaultQueryOptions(e);
      t.retry === void 0 && (t.retry = !1);
      let n = this.#e.build(this, t);
      return n.isStaleByTime($e(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data);
    }
    prefetchQuery(e) {
      return this.fetchQuery(e).then(Ge).catch(Ge);
    }
    fetchInfiniteQuery(e) {
      return ((e._type = `infinite`), this.fetchQuery(e));
    }
    prefetchInfiniteQuery(e) {
      return this.fetchInfiniteQuery(e).then(Ge).catch(Ge);
    }
    ensureInfiniteQueryData(e) {
      return ((e._type = `infinite`), this.ensureQueryData(e));
    }
    resumePausedMutations() {
      return qe.isOnline() ? this.#t.resumePausedMutations() : Promise.resolve();
    }
    getQueryCache() {
      return this.#e;
    }
    getMutationCache() {
      return this.#t;
    }
    getDefaultOptions() {
      return this.#n;
    }
    setDefaultOptions(e) {
      this.#n = e;
    }
    setQueryDefaults(e, t) {
      this.#r.set(Je(e), { queryKey: e, defaultOptions: t });
    }
    getQueryDefaults(e) {
      let t = [...this.#r.values()],
        n = {};
      return (
        t.forEach((t) => {
          Qe(e, t.queryKey) && Object.assign(n, t.defaultOptions);
        }),
        n
      );
    }
    setMutationDefaults(e, t) {
      this.#i.set(Je(e), { mutationKey: e, defaultOptions: t });
    }
    getMutationDefaults(e) {
      let t = [...this.#i.values()],
        n = {};
      return (
        t.forEach((t) => {
          Qe(e, t.mutationKey) && Object.assign(n, t.defaultOptions);
        }),
        n
      );
    }
    defaultQueryOptions(e) {
      if (e._defaulted) return e;
      let t = { ...this.#n.queries, ...this.getQueryDefaults(e.queryKey), ...e, _defaulted: !0 };
      return (
        (t.queryHash ||= Ye(t.queryKey, t)),
        t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== `always`),
        t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
        !t.networkMode && t.persister && (t.networkMode = `offlineFirst`),
        t.queryFn === it && (t.enabled = !1),
        t
      );
    }
    defaultMutationOptions(e) {
      return e?._defaulted
        ? e
        : {
            ...this.#n.mutations,
            ...(e?.mutationKey && this.getMutationDefaults(e.mutationKey)),
            ...e,
            _defaulted: !0,
          };
    }
    clear() {
      (this.#e.clear(), this.#t.clear());
    }
  },
  Zl = `/assets/styles-DXP7SOFz.css`;
function Ql(e, t = {}) {
  if (typeof window > `u`) return;
  window.__lovableEvents?.captureException?.(
    e,
    { source: `react_error_boundary`, route: window.location.pathname, ...t },
    { mechanism: `react_error_boundary`, handled: !1, severity: `error` },
  );
  let n =
      e instanceof Response
        ? `Response ${e.status}${e.url ? ` at ${e.url}` : ``}`
        : e instanceof Error
          ? e.message
          : String(e),
    r = e instanceof Error ? e.stack : void 0;
  window.__lovableReportRuntimeError?.({
    message: n,
    ...(r !== void 0 && { stack: r }),
    filename: window.location.pathname,
  });
}
var $l = _(`activity`, [
    [
      `path`,
      {
        d: `M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2`,
        key: `169zse`,
      },
    ],
  ]),
  eu = _(`bell`, [
    [`path`, { d: `M10.268 21a2 2 0 0 0 3.464 0`, key: `vwvbt9` }],
    [
      `path`,
      {
        d: `M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326`,
        key: `11g9vi`,
      },
    ],
  ]),
  tu = _(`building-2`, [
    [`path`, { d: `M10 12h4`, key: `a56b0p` }],
    [`path`, { d: `M10 8h4`, key: `1sr2af` }],
    [`path`, { d: `M14 21v-3a2 2 0 0 0-4 0v3`, key: `1rgiei` }],
    [
      `path`,
      {
        d: `M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2`,
        key: `secmi2`,
      },
    ],
    [`path`, { d: `M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16`, key: `16ra0t` }],
  ]),
  nu = _(`chart-column`, [
    [`path`, { d: `M3 3v16a2 2 0 0 0 2 2h16`, key: `c24i48` }],
    [`path`, { d: `M18 17V9`, key: `2bz60n` }],
    [`path`, { d: `M13 17V5`, key: `1frdt8` }],
    [`path`, { d: `M8 17v-3`, key: `17ska0` }],
  ]),
  ru = _(`chevron-right`, [[`path`, { d: `m9 18 6-6-6-6`, key: `mthhwq` }]]),
  iu = _(`clipboard-check`, [
    [`rect`, { width: `8`, height: `4`, x: `8`, y: `2`, rx: `1`, ry: `1`, key: `tgr4d6` }],
    [
      `path`,
      {
        d: `M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2`,
        key: `116196`,
      },
    ],
    [`path`, { d: `m9 14 2 2 4-4`, key: `df797q` }],
  ]),
  au = _(`file-exclamation-point`, [
    [
      `path`,
      {
        d: `M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,
        key: `1oefj6`,
      },
    ],
    [`path`, { d: `M12 9v4`, key: `juzpu7` }],
    [`path`, { d: `M12 17h.01`, key: `p32p05` }],
  ]),
  ou = _(`layout-dashboard`, [
    [`rect`, { width: `7`, height: `9`, x: `3`, y: `3`, rx: `1`, key: `10lvy0` }],
    [`rect`, { width: `7`, height: `5`, x: `14`, y: `3`, rx: `1`, key: `16une8` }],
    [`rect`, { width: `7`, height: `9`, x: `14`, y: `12`, rx: `1`, key: `1hutg5` }],
    [`rect`, { width: `7`, height: `5`, x: `3`, y: `16`, rx: `1`, key: `ldoo1y` }],
  ]),
  su = _(`menu`, [
    [`path`, { d: `M4 5h16`, key: `1tepv9` }],
    [`path`, { d: `M4 12h16`, key: `1lakjw` }],
    [`path`, { d: `M4 19h16`, key: `1djgab` }],
  ]),
  cu = _(`route`, [
    [`circle`, { cx: `6`, cy: `19`, r: `3`, key: `1kj8tv` }],
    [`path`, { d: `M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15`, key: `1d8sl` }],
    [`circle`, { cx: `18`, cy: `5`, r: `3`, key: `gq8acd` }],
  ]),
  lu = _(`settings`, [
    [
      `path`,
      {
        d: `M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915`,
        key: `1i5ecw`,
      },
    ],
    [`circle`, { cx: `12`, cy: `12`, r: `3`, key: `1v7zrd` }],
  ]),
  uu = _(`shield-alert`, [
    [
      `path`,
      {
        d: `M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,
        key: `oel41y`,
      },
    ],
    [`path`, { d: `M12 8v4`, key: `1got3b` }],
    [`path`, { d: `M12 16h.01`, key: `1drbdi` }],
  ]),
  du = _(`signal`, [
    [`path`, { d: `M2 20h.01`, key: `4haj6o` }],
    [`path`, { d: `M7 20v-4`, key: `j294jx` }],
    [`path`, { d: `M12 20v-8`, key: `i3yub9` }],
    [`path`, { d: `M17 20V8`, key: `1tkaf5` }],
    [`path`, { d: `M22 4v16`, key: `sih9yq` }],
  ]),
  fu = _(`user-round`, [
    [`circle`, { cx: `12`, cy: `8`, r: `5`, key: `1hypcn` }],
    [`path`, { d: `M20 21a8 8 0 0 0-16 0`, key: `rfgkzh` }],
  ]),
  pu = [
    {
      to: `/`,
      label: `Dashboard`,
      icon: ou,
      title: `Operations Dashboard`,
      subtitle: `Postal address prediction and routing overview`,
    },
    {
      to: `/prediction`,
      label: `Address Prediction`,
      icon: cu,
      title: `Address Prediction`,
      subtitle: `Identify the most probable delivery post office and PIN code`,
    },
    {
      to: `/review`,
      label: `Review Queue`,
      icon: iu,
      title: `Review Queue`,
      subtitle: `Predictions requiring operator verification`,
    },
    {
      to: `/parcels`,
      label: `Parcels`,
      icon: pt,
      title: `Parcel Routing`,
      subtitle: `Track parcels through address analysis, sorting and dispatch`,
    },
    {
      to: `/post-offices`,
      label: `Post Offices`,
      icon: tu,
      title: `Post Offices`,
      subtitle: `Browse postal offices and their associated PIN mappings`,
    },
    {
      to: `/mapping`,
      label: `Pincode Mapping`,
      icon: ft,
      title: `Pincode Mapping`,
      subtitle: `Manage current and historical postal mappings`,
    },
    {
      to: `/analytics`,
      label: `Analytics`,
      icon: nu,
      title: `Analytics & Model Performance`,
      subtitle: `Prediction quality metrics across address conditions and models`,
    },
    {
      to: `/activity`,
      label: `Activity Log`,
      icon: $l,
      title: `Activity Log`,
      subtitle: `Chronological record of system and operator actions`,
    },
  ];
function mu(e) {
  return e.startsWith(`/settings`)
    ? { title: `Operator Profile & Settings`, subtitle: `Workstation preferences` }
    : ([...pu].filter((e) => e.to !== `/`).find((t) => e.startsWith(t.to)) ?? pu[0]);
}
var hu = Object.defineProperty,
  gu = (e, t) => hu(e, `name`, { value: t, configurable: !0 }),
  _u = !1;
function vu() {
  let [e, t] = H.useState(_u);
  return (
    H.useEffect(() => {
      _u || ((_u = !0), t(!0));
    }, []),
    e
  );
}
gu(vu, `useIsHydrated`);
var yu = H.useSyncExternalStore;
function bu() {
  return () => {};
}
gu(bu, `subscribe`);
function xu() {
  return yu(
    bu,
    () => !0,
    () => !1,
  );
}
gu(xu, `useIsHydratedModern`);
var Su = typeof yu == `function` ? xu : vu,
  Cu = Object.defineProperty,
  wu = (e, t) => Cu(e, `name`, { value: t, configurable: !0 }),
  Tu = `rovingFocusGroup.onEntryFocus`,
  Eu = { bubbles: !1, cancelable: !0 },
  Du = `RovingFocusGroup`,
  [Ou, ku, Au] = h(Du),
  [ju, Mu] = ie(Du, [Au]),
  [Nu, Pu] = ju(Du),
  Fu = H.forwardRef(
    wu(function (e, t) {
      return (0, U.jsx)(Ou.Provider, {
        scope: e.__scopeRovingFocusGroup,
        children: (0, U.jsx)(Ou.Slot, {
          scope: e.__scopeRovingFocusGroup,
          children: (0, U.jsx)(Iu, { ...e, ref: t }),
        }),
      });
    }, `RovingFocusGroup`),
  ),
  Iu = H.forwardRef(
    wu(function (e, t) {
      let {
          __scopeRovingFocusGroup: n,
          orientation: r,
          loop: i = !1,
          dir: a,
          currentTabStopId: o,
          defaultCurrentTabStopId: s,
          onCurrentTabStopIdChange: c,
          onEntryFocus: u,
          preventScrollOnEntryFocus: d = !1,
          ...f
        } = e,
        h = H.useRef(null),
        _ = x(t, h),
        v = p(a),
        [y, b] = oe({ prop: o, defaultProp: s ?? null, onChange: c, caller: Du }),
        [S, C] = H.useState(!1),
        ee = m(u),
        te = ku(n),
        ne = H.useRef(!1),
        [re, ie] = H.useState(0);
      return (
        H.useEffect(() => {
          let e = h.current;
          if (e) return (e.addEventListener(Tu, ee), () => e.removeEventListener(Tu, ee));
        }, [ee]),
        (0, U.jsx)(Nu, {
          scope: n,
          orientation: r,
          dir: v,
          loop: i,
          currentTabStopId: y,
          onItemFocus: H.useCallback((e) => b(e), [b]),
          onItemShiftTab: H.useCallback(() => C(!0), []),
          onFocusableItemAdd: H.useCallback(() => ie((e) => e + 1), []),
          onFocusableItemRemove: H.useCallback(() => ie((e) => e - 1), []),
          children: (0, U.jsx)(l.div, {
            tabIndex: S || re === 0 ? -1 : 0,
            "data-orientation": r,
            ...f,
            ref: _,
            style: { outline: `none`, ...e.style },
            onMouseDown: g(e.onMouseDown, () => {
              ne.current = !0;
            }),
            onFocus: g(e.onFocus, (e) => {
              let t = !ne.current;
              if (e.target === e.currentTarget && t && !S) {
                let t = new CustomEvent(Tu, Eu);
                if ((e.currentTarget.dispatchEvent(t), !t.defaultPrevented)) {
                  let e = te().filter((e) => e.focusable);
                  Hu(
                    [e.find((e) => e.active), e.find((e) => e.id === y), ...e]
                      .filter(Boolean)
                      .map((e) => e.ref.current),
                    d,
                  );
                }
              }
              ne.current = !1;
            }),
            onBlur: g(e.onBlur, () => C(!1)),
          }),
        })
      );
    }, `RovingFocusGroupImpl`),
  ),
  Lu = `RovingFocusGroupItem`,
  Ru = H.forwardRef(
    wu(function (e, t) {
      let {
          __scopeRovingFocusGroup: n,
          focusable: r = !0,
          active: i = !1,
          tabStopId: a,
          children: o,
          ...s
        } = e,
        c = f(),
        u = a || c,
        d = Pu(Lu, n),
        p = d.currentTabStopId === u,
        m = ku(n),
        { onFocusableItemAdd: h, onFocusableItemRemove: _, currentTabStopId: v } = d,
        y = Su();
      return (
        ne(() => {
          if (!(!y || !r)) return (h(), () => _());
        }, [y, r, h, _]),
        H.useEffect(() => {
          if (!(y || !r)) return (h(), () => _());
        }, [y, r, h, _]),
        (0, U.jsx)(Ou.ItemSlot, {
          scope: n,
          id: u,
          focusable: r,
          active: i,
          children: (0, U.jsx)(l.span, {
            tabIndex: p ? 0 : -1,
            "data-orientation": d.orientation,
            ...s,
            ref: t,
            onMouseDown: g(e.onMouseDown, (e) => {
              r ? d.onItemFocus(u) : e.preventDefault();
            }),
            onFocus: g(e.onFocus, () => d.onItemFocus(u)),
            onKeyDown: g(e.onKeyDown, (e) => {
              if (e.key === `Tab` && e.shiftKey) {
                d.onItemShiftTab();
                return;
              }
              if (e.target !== e.currentTarget) return;
              let t = Vu(e, d.orientation, d.dir);
              if (t !== void 0) {
                if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
                e.preventDefault();
                let n = m()
                  .filter((e) => e.focusable)
                  .map((e) => e.ref.current);
                if (t === `last`) n.reverse();
                else if (t === `prev` || t === `next`) {
                  t === `prev` && n.reverse();
                  let r = n.indexOf(e.currentTarget);
                  n = d.loop ? Uu(n, r + 1) : n.slice(r + 1);
                }
                setTimeout(() => Hu(n));
              }
            }),
            children:
              typeof o == `function` ? o({ isCurrentTabStop: p, hasTabStop: v != null }) : o,
          }),
        })
      );
    }, `RovingFocusGroupItem`),
  ),
  zu = {
    ArrowLeft: `prev`,
    ArrowUp: `prev`,
    ArrowRight: `next`,
    ArrowDown: `next`,
    PageUp: `first`,
    Home: `first`,
    PageDown: `last`,
    End: `last`,
  };
function Bu(e, t) {
  return t === `rtl`
    ? e === `ArrowLeft`
      ? `ArrowRight`
      : e === `ArrowRight`
        ? `ArrowLeft`
        : e
    : e;
}
wu(Bu, `getDirectionAwareKey`);
function Vu(e, t, n) {
  let r = Bu(e.key, n);
  if (
    !(t === `vertical` && [`ArrowLeft`, `ArrowRight`].includes(r)) &&
    !(t === `horizontal` && [`ArrowUp`, `ArrowDown`].includes(r))
  )
    return zu[r];
}
wu(Vu, `getFocusIntent`);
function Hu(e, t = !1) {
  let n = document.activeElement;
  for (let r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
wu(Hu, `focusFirst`);
function Uu(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
wu(Uu, `wrapArray`);
var Wu = Fu,
  Gu = Ru,
  X = Object.defineProperty,
  Z = (e, t) => X(e, `name`, { value: t, configurable: !0 }),
  Ku = [`Enter`, ` `],
  qu = [`ArrowDown`, `PageUp`, `Home`],
  Ju = [`ArrowUp`, `PageDown`, `End`],
  Yu = [...qu, ...Ju],
  Xu = { ltr: [...Ku, `ArrowRight`], rtl: [...Ku, `ArrowLeft`] },
  Zu = { ltr: [`ArrowLeft`], rtl: [`ArrowRight`] },
  Qu = `Menu`,
  [$u, ed, td] = h(Qu),
  [nd, rd] = ie(Qu, [td, i, Mu]),
  id = i(),
  ad = Mu(),
  [od, sd] = nd(Qu),
  [cd, ld] = nd(Qu),
  ud = Z((e) => {
    let { __scopeMenu: t, open: n = !1, children: r, dir: i, onOpenChange: a, modal: o = !0 } = e,
      s = id(t),
      [c, l] = H.useState(null),
      u = H.useRef(!1),
      f = m(a),
      h = p(i);
    return (
      H.useEffect(() => {
        let e = Z(() => {
            ((u.current = !0),
              document.addEventListener(`pointerdown`, t, { capture: !0, once: !0 }),
              document.addEventListener(`pointermove`, t, { capture: !0, once: !0 }));
          }, `handleKeyDown`),
          t = Z(() => (u.current = !1), `handlePointer`);
        return (
          document.addEventListener(`keydown`, e, { capture: !0 }),
          () => {
            (document.removeEventListener(`keydown`, e, { capture: !0 }),
              document.removeEventListener(`pointerdown`, t, { capture: !0 }),
              document.removeEventListener(`pointermove`, t, { capture: !0 }));
          }
        );
      }, []),
      H.useEffect(() => {
        if (!n) return;
        let e = Z(() => f(!1), `handleBlur`);
        return (window.addEventListener(`blur`, e), () => window.removeEventListener(`blur`, e));
      }, [n, f]),
      (0, U.jsx)(d, {
        ...s,
        children: (0, U.jsx)(od, {
          scope: t,
          open: n,
          onOpenChange: f,
          content: c,
          onContentChange: l,
          children: (0, U.jsx)(cd, {
            scope: t,
            onClose: H.useCallback(() => f(!1), [f]),
            isUsingKeyboardRef: u,
            dir: h,
            modal: o,
            children: r,
          }),
        }),
      })
    );
  }, `Menu`),
  dd = H.forwardRef(
    Z(function (e, t) {
      let { __scopeMenu: n, ...r } = e,
        i = id(n);
      return (0, U.jsx)(le, { ...i, ...r, ref: t });
    }, `MenuAnchor`),
  ),
  fd = `MenuPortal`,
  [pd, md] = nd(fd, { forceMount: void 0 }),
  hd = Z((e) => {
    let { __scopeMenu: t, forceMount: n, children: r, container: i } = e,
      a = sd(fd, t);
    return (0, U.jsx)(pd, {
      scope: t,
      forceMount: n,
      children: (0, U.jsx)(s, {
        present: n || a.open,
        children: (0, U.jsx)(u, { asChild: !0, container: i, children: r }),
      }),
    });
  }, `MenuPortal`),
  gd = `MenuContent`,
  [_d, vd] = nd(gd),
  yd = H.forwardRef(
    Z(function (e, t) {
      let n = md(gd, e.__scopeMenu),
        { forceMount: r = n.forceMount, ...i } = e,
        a = sd(gd, e.__scopeMenu),
        o = ld(gd, e.__scopeMenu);
      return (0, U.jsx)($u.Provider, {
        scope: e.__scopeMenu,
        children: (0, U.jsx)(s, {
          present: r || a.open,
          children: (0, U.jsx)($u.Slot, {
            scope: e.__scopeMenu,
            children: o.modal ? (0, U.jsx)(Q, { ...i, ref: t }) : (0, U.jsx)(bd, { ...i, ref: t }),
          }),
        }),
      });
    }, `MenuContent`),
  ),
  Q = H.forwardRef(
    Z(function (e, t) {
      let n = sd(gd, e.__scopeMenu),
        r = H.useRef(null),
        i = x(t, r);
      return (
        H.useEffect(() => {
          let e = r.current;
          if (e) return a(e);
        }, []),
        (0, U.jsx)(Sd, {
          ...e,
          ref: i,
          trapFocus: n.open,
          disableOutsidePointerEvents: n.open,
          disableOutsideScroll: !0,
          onFocusOutside: g(e.onFocusOutside, (e) => e.preventDefault(), {
            checkForDefaultPrevented: !1,
          }),
          onDismiss: () => n.onOpenChange(!1),
        })
      );
    }, `MenuRootContentModal`),
  ),
  bd = H.forwardRef(
    Z(function (e, t) {
      let n = sd(gd, e.__scopeMenu);
      return (0, U.jsx)(Sd, {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        onDismiss: () => n.onOpenChange(!1),
      });
    }, `MenuRootContentNonModal`),
  ),
  xd = y(`MenuContent.ScrollLock`),
  Sd = H.forwardRef(
    Z(function (e, i) {
      let {
          __scopeMenu: a,
          loop: s = !1,
          trapFocus: c,
          onOpenAutoFocus: l,
          onCloseAutoFocus: u,
          disableOutsidePointerEvents: d,
          onEntryFocus: f,
          onEscapeKeyDown: p,
          onPointerDownOutside: m,
          onFocusOutside: h,
          onInteractOutside: _,
          onDismiss: v,
          disableOutsideScroll: y,
          ...b
        } = e,
        S = sd(gd, a),
        C = ld(gd, a),
        ee = id(a),
        te = ad(a),
        ne = ed(a),
        [ie, ae] = H.useState(null),
        oe = H.useRef(null),
        se = x(i, oe, S.onContentChange),
        ce = H.useRef(0),
        le = H.useRef(``),
        ue = H.useRef(0),
        w = H.useRef(null),
        T = H.useRef(`right`),
        de = H.useRef(0),
        fe = y ? n : H.Fragment,
        pe = y ? { as: xd, allowPinchZoom: !0 } : void 0,
        me = Z((e) => {
          let t = le.current + e,
            n = ne().filter((e) => !e.disabled),
            r = document.activeElement,
            i = n.find((e) => e.ref.current === r)?.textValue,
            a = Jd(
              n.map((e) => e.textValue),
              t,
              i,
            ),
            o = n.find((e) => e.textValue === a)?.ref.current;
          (Z(function e(t) {
            ((le.current = t),
              window.clearTimeout(ce.current),
              t !== `` && (ce.current = window.setTimeout(() => e(``), 1e3)));
          }, `updateSearch`)(t),
            o && setTimeout(() => o.focus()));
        }, `handleTypeaheadSearch`);
      (H.useEffect(() => () => window.clearTimeout(ce.current), []), o());
      let E = H.useCallback((e) => T.current === w.current?.side && Xd(e, w.current?.area), []);
      return (0, U.jsx)(_d, {
        scope: a,
        searchRef: le,
        onItemEnter: H.useCallback(
          (e) => {
            E(e) && e.preventDefault();
          },
          [E],
        ),
        onItemLeave: H.useCallback(
          (e) => {
            E(e) || (oe.current?.focus(), ae(null));
          },
          [E],
        ),
        onTriggerLeave: H.useCallback(
          (e) => {
            E(e) && e.preventDefault();
          },
          [E],
        ),
        pointerGraceTimerRef: ue,
        onPointerGraceIntentChange: H.useCallback((e) => {
          w.current = e;
        }, []),
        children: (0, U.jsx)(fe, {
          ...pe,
          children: (0, U.jsx)(r, {
            asChild: !0,
            trapped: c,
            onMountAutoFocus: g(l, (e) => {
              (e.preventDefault(), oe.current?.focus({ preventScroll: !0 }));
            }),
            onUnmountAutoFocus: u,
            children: (0, U.jsx)(re, {
              asChild: !0,
              disableOutsidePointerEvents: d,
              onEscapeKeyDown: p,
              onPointerDownOutside: m,
              onFocusOutside: h,
              onInteractOutside: _,
              onDismiss: v,
              children: (0, U.jsx)(Wu, {
                asChild: !0,
                ...te,
                dir: C.dir,
                orientation: `vertical`,
                loop: s,
                currentTabStopId: ie,
                onCurrentTabStopIdChange: ae,
                onEntryFocus: g(f, (e) => {
                  C.isUsingKeyboardRef.current || e.preventDefault();
                }),
                preventScrollOnEntryFocus: !0,
                children: (0, U.jsx)(t, {
                  role: `menu`,
                  "aria-orientation": `vertical`,
                  "data-state": Ud(S.open),
                  "data-radix-menu-content": ``,
                  dir: C.dir,
                  ...ee,
                  ...b,
                  ref: se,
                  style: { outline: `none`, ...b.style },
                  onKeyDown: g(b.onKeyDown, (e) => {
                    let t = e.target.closest(`[data-radix-menu-content]`) === e.currentTarget,
                      n = e.ctrlKey || e.altKey || e.metaKey,
                      r = e.key.length === 1;
                    t && (e.key === `Tab` && e.preventDefault(), !n && r && me(e.key));
                    let i = oe.current;
                    if (e.target !== i || !Yu.includes(e.key)) return;
                    e.preventDefault();
                    let a = ne()
                      .filter((e) => !e.disabled)
                      .map((e) => e.ref.current);
                    (Ju.includes(e.key) && a.reverse(), Kd(a));
                  }),
                  onBlur: g(e.onBlur, (e) => {
                    e.currentTarget.contains(e.target) ||
                      (window.clearTimeout(ce.current), (le.current = ``));
                  }),
                  onPointerMove: g(
                    e.onPointerMove,
                    Zd((e) => {
                      let t = e.target,
                        n = de.current !== e.clientX;
                      if (e.currentTarget.contains(t) && n) {
                        let t = e.clientX > de.current ? `right` : `left`;
                        ((T.current = t), (de.current = e.clientX));
                      }
                    }),
                  ),
                }),
              }),
            }),
          }),
        }),
      });
    }, `MenuContentImpl`),
  ),
  Cd = H.forwardRef(
    Z(function (e, t) {
      let { __scopeMenu: n, ...r } = e;
      return (0, U.jsx)(l.div, { ...r, ref: t });
    }, `MenuLabel`),
  ),
  wd = `MenuItem`,
  Td = `menu.itemSelect`,
  Ed = H.forwardRef(
    Z(function (t, n) {
      let { disabled: r = !1, onSelect: i, ...a } = t,
        o = H.useRef(null),
        s = ld(wd, t.__scopeMenu),
        c = vd(wd, t.__scopeMenu),
        l = x(n, o),
        u = H.useRef(!1),
        d = Z(() => {
          let t = o.current;
          if (!r && t) {
            let n = new CustomEvent(Td, { bubbles: !0, cancelable: !0 });
            (t.addEventListener(Td, (e) => i?.(e), { once: !0 }),
              e(t, n),
              n.defaultPrevented ? (u.current = !1) : s.onClose());
          }
        }, `handleSelect`);
      return (0, U.jsx)(Dd, {
        ...a,
        ref: l,
        disabled: r,
        onClick: g(t.onClick, d),
        onPointerDown: (e) => {
          (t.onPointerDown?.(e), (u.current = !0));
        },
        onPointerUp: g(t.onPointerUp, (e) => {
          u.current || e.currentTarget?.click();
        }),
        onKeyDown: g(t.onKeyDown, (e) => {
          r ||
            e.target !== e.currentTarget ||
            ((c.searchRef.current === `` || e.key !== ` `) &&
              Ku.includes(e.key) &&
              (e.currentTarget.click(), e.preventDefault()));
        }),
      });
    }, `MenuItem`),
  ),
  Dd = H.forwardRef(
    Z(function (e, t) {
      let { __scopeMenu: n, disabled: r = !1, textValue: i, ...a } = e,
        o = vd(wd, n),
        s = ad(n),
        c = H.useRef(null),
        u = x(t, c),
        [d, f] = H.useState(!1),
        [p, m] = H.useState(``);
      return (
        H.useEffect(() => {
          let e = c.current;
          e && m((e.textContent ?? ``).trim());
        }, [a.children]),
        (0, U.jsx)($u.ItemSlot, {
          scope: n,
          disabled: r,
          textValue: i ?? p,
          children: (0, U.jsx)(Gu, {
            asChild: !0,
            ...s,
            focusable: !r,
            children: (0, U.jsx)(l.div, {
              role: `menuitem`,
              "data-highlighted": d ? `` : void 0,
              "aria-disabled": r || void 0,
              "data-disabled": r ? `` : void 0,
              ...a,
              ref: u,
              onPointerMove: g(
                e.onPointerMove,
                Zd((e) => {
                  r
                    ? o.onItemLeave(e)
                    : (o.onItemEnter(e),
                      e.defaultPrevented || e.currentTarget.focus({ preventScroll: !0 }));
                }),
              ),
              onPointerLeave: g(
                e.onPointerLeave,
                Zd((e) => o.onItemLeave(e)),
              ),
              onFocus: g(e.onFocus, () => f(!0)),
              onBlur: g(e.onBlur, () => f(!1)),
            }),
          }),
        })
      );
    }, `MenuItemImpl`),
  ),
  Od = H.forwardRef(
    Z(function (e, t) {
      let { checked: n = !1, onCheckedChange: r, ...i } = e;
      return (0, U.jsx)(Nd, {
        scope: e.__scopeMenu,
        checked: n,
        children: (0, U.jsx)(Ed, {
          role: `menuitemcheckbox`,
          "aria-checked": Wd(n) ? `mixed` : n,
          ...i,
          ref: t,
          "data-state": Gd(n),
          onSelect: g(i.onSelect, () => r?.(Wd(n) ? !0 : !n), { checkForDefaultPrevented: !1 }),
        }),
      });
    }, `MenuCheckboxItem`),
  ),
  [kd, Ad] = nd(`MenuRadioGroup`, { value: void 0, onValueChange: Z(() => {}, `onValueChange`) }),
  jd = `MenuRadioItem`,
  Md = H.forwardRef(
    Z(function (e, t) {
      let { value: n, ...r } = e,
        i = Ad(jd, e.__scopeMenu),
        a = n === i.value;
      return (0, U.jsx)(Nd, {
        scope: e.__scopeMenu,
        checked: a,
        children: (0, U.jsx)(Ed, {
          role: `menuitemradio`,
          "aria-checked": a,
          ...r,
          ref: t,
          "data-state": Gd(a),
          onSelect: g(r.onSelect, () => i.onValueChange?.(n), { checkForDefaultPrevented: !1 }),
        }),
      });
    }, `MenuRadioItem`),
  ),
  $ = `MenuItemIndicator`,
  [Nd, Pd] = nd($, { checked: !1 }),
  Fd = H.forwardRef(
    Z(function (e, t) {
      let { __scopeMenu: n, forceMount: r, ...i } = e,
        a = Pd($, n);
      return (0, U.jsx)(s, {
        present: r || Wd(a.checked) || a.checked === !0,
        children: (0, U.jsx)(l.span, { ...i, ref: t, "data-state": Gd(a.checked) }),
      });
    }, `MenuItemIndicator`),
  ),
  Id = H.forwardRef(
    Z(function (e, t) {
      let { __scopeMenu: n, ...r } = e;
      return (0, U.jsx)(l.div, {
        role: `separator`,
        "aria-orientation": `horizontal`,
        ...r,
        ref: t,
      });
    }, `MenuSeparator`),
  ),
  [Ld, Rd] = nd(`MenuSub`),
  zd = `MenuSubTrigger`,
  Bd = H.forwardRef(
    Z(function (e, t) {
      let n = sd(zd, e.__scopeMenu),
        r = ld(zd, e.__scopeMenu),
        i = Rd(zd, e.__scopeMenu),
        a = vd(zd, e.__scopeMenu),
        o = H.useRef(null),
        { pointerGraceTimerRef: s, onPointerGraceIntentChange: c } = a,
        l = { __scopeMenu: e.__scopeMenu },
        u = H.useCallback(() => {
          (o.current && window.clearTimeout(o.current), (o.current = null));
        }, []);
      (H.useEffect(() => u, [u]),
        H.useEffect(() => {
          let e = s.current;
          return () => {
            (window.clearTimeout(e), c(null));
          };
        }, [s, c]));
      let d = x(t, i.onTriggerChange);
      return (0, U.jsx)(dd, {
        asChild: !0,
        ...l,
        children: (0, U.jsx)(Dd, {
          id: i.triggerId,
          "aria-haspopup": `menu`,
          "aria-expanded": n.open,
          "aria-controls": n.open ? i.contentId : void 0,
          "data-state": Ud(n.open),
          ...e,
          ref: d,
          onClick: (t) => {
            (e.onClick?.(t),
              !(e.disabled || t.defaultPrevented) &&
                (t.currentTarget.focus(), n.open || n.onOpenChange(!0)));
          },
          onPointerMove: g(
            e.onPointerMove,
            Zd((t) => {
              (a.onItemEnter(t),
                !t.defaultPrevented &&
                  !e.disabled &&
                  !n.open &&
                  !o.current &&
                  (a.onPointerGraceIntentChange(null),
                  (o.current = window.setTimeout(() => {
                    (n.onOpenChange(!0), u());
                  }, 100))));
            }),
          ),
          onPointerLeave: g(
            e.onPointerLeave,
            Zd((e) => {
              u();
              let t = n.content?.getBoundingClientRect();
              if (t) {
                let r = n.content?.dataset.side,
                  i = r === `right`,
                  o = i ? -5 : 5,
                  c = t[i ? `left` : `right`],
                  l = t[i ? `right` : `left`];
                (a.onPointerGraceIntentChange({
                  area: [
                    { x: e.clientX + o, y: e.clientY },
                    { x: c, y: t.top },
                    { x: l, y: t.top },
                    { x: l, y: t.bottom },
                    { x: c, y: t.bottom },
                  ],
                  side: r,
                }),
                  window.clearTimeout(s.current),
                  (s.current = window.setTimeout(() => a.onPointerGraceIntentChange(null), 300)));
              } else {
                if ((a.onTriggerLeave(e), e.defaultPrevented)) return;
                a.onPointerGraceIntentChange(null);
              }
            }),
          ),
          onKeyDown: g(e.onKeyDown, (t) => {
            e.disabled ||
              t.target !== t.currentTarget ||
              ((a.searchRef.current === `` || t.key !== ` `) &&
                Xu[r.dir].includes(t.key) &&
                (n.onOpenChange(!0), n.content?.focus(), t.preventDefault()));
          }),
        }),
      });
    }, `MenuSubTrigger`),
  ),
  Vd = `MenuSubContent`,
  Hd = H.forwardRef(
    Z(function (e, t) {
      let n = md(gd, e.__scopeMenu),
        { forceMount: r = n.forceMount, align: i = `start`, ...a } = e,
        o = sd(gd, e.__scopeMenu),
        c = ld(gd, e.__scopeMenu),
        l = Rd(Vd, e.__scopeMenu),
        u = H.useRef(null),
        d = x(t, u);
      return (0, U.jsx)($u.Provider, {
        scope: e.__scopeMenu,
        children: (0, U.jsx)(s, {
          present: r || o.open,
          children: (0, U.jsx)($u.Slot, {
            scope: e.__scopeMenu,
            children: (0, U.jsx)(Sd, {
              id: l.contentId,
              "aria-labelledby": l.triggerId,
              ...a,
              ref: d,
              align: i,
              side: c.dir === `rtl` ? `left` : `right`,
              disableOutsidePointerEvents: !1,
              disableOutsideScroll: !1,
              trapFocus: !1,
              onOpenAutoFocus: (e) => {
                (c.isUsingKeyboardRef.current && u.current?.focus(), e.preventDefault());
              },
              onCloseAutoFocus: (e) => e.preventDefault(),
              onFocusOutside: g(e.onFocusOutside, (e) => {
                e.target !== l.trigger && o.onOpenChange(!1);
              }),
              onEscapeKeyDown: g(e.onEscapeKeyDown, (e) => {
                (c.onClose(), e.preventDefault());
              }),
              onKeyDown: g(e.onKeyDown, (e) => {
                let t = e.currentTarget.contains(e.target),
                  n = Zu[c.dir].includes(e.key);
                t && n && (o.onOpenChange(!1), l.trigger?.focus(), e.preventDefault());
              }),
            }),
          }),
        }),
      });
    }, `MenuSubContent`),
  );
function Ud(e) {
  return e ? `open` : `closed`;
}
Z(Ud, `getOpenState`);
function Wd(e) {
  return e === `indeterminate`;
}
Z(Wd, `isIndeterminate`);
function Gd(e) {
  return Wd(e) ? `indeterminate` : e ? `checked` : `unchecked`;
}
Z(Gd, `getCheckedState`);
function Kd(e) {
  let t = document.activeElement;
  for (let n of e) if (n === t || (n.focus(), document.activeElement !== t)) return;
}
Z(Kd, `focusFirst`);
function qd(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
Z(qd, `wrapArray`);
function Jd(e, t, n) {
  let r = t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t,
    i = n ? e.indexOf(n) : -1,
    a = qd(e, Math.max(i, 0));
  r.length === 1 && (a = a.filter((e) => e !== n));
  let o = a.find((e) => e.toLowerCase().startsWith(r.toLowerCase()));
  return o === n ? void 0 : o;
}
Z(Jd, `getNextMatch`);
function Yd(e, t) {
  let { x: n, y: r } = e,
    i = !1;
  for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
    let o = t[e],
      s = t[a],
      c = o.x,
      l = o.y,
      u = s.x,
      d = s.y;
    l > r != d > r && n < ((u - c) * (r - l)) / (d - l) + c && (i = !i);
  }
  return i;
}
Z(Yd, `isPointInPolygon`);
function Xd(e, t) {
  return t ? Yd({ x: e.clientX, y: e.clientY }, t) : !1;
}
Z(Xd, `isPointerInGraceArea`);
function Zd(e) {
  return (t) => (t.pointerType === `mouse` ? e(t) : void 0);
}
Z(Zd, `whenMouse`);
var Qd = ud,
  $d = dd,
  ef = hd,
  tf = yd,
  nf = Cd,
  rf = Ed,
  af = Od,
  of = Md,
  sf = Fd,
  cf = Id,
  lf = Bd,
  uf = Hd,
  df = Object.defineProperty,
  ff = (e, t) => df(e, `name`, { value: t, configurable: !0 }),
  pf = `DropdownMenu`,
  [mf, hf] = ie(pf, [rd]),
  gf = rd(),
  [_f, vf] = mf(pf),
  yf = ff((e) => {
    let {
        __scopeDropdownMenu: t,
        children: n,
        dir: r,
        open: i,
        defaultOpen: a,
        onOpenChange: o,
        modal: s = !0,
      } = e,
      c = gf(t),
      l = H.useRef(null),
      [u, d] = oe({ prop: i, defaultProp: a ?? !1, onChange: o, caller: pf });
    return (0, U.jsx)(_f, {
      scope: t,
      triggerId: f(),
      triggerRef: l,
      contentId: f(),
      open: u,
      onOpenChange: d,
      onOpenToggle: H.useCallback(() => d((e) => !e), [d]),
      modal: s,
      children: (0, U.jsx)(Qd, { ...c, open: u, onOpenChange: d, dir: r, modal: s, children: n }),
    });
  }, `DropdownMenu`),
  bf = `DropdownMenuTrigger`,
  xf = H.forwardRef(
    ff(function (e, t) {
      let { __scopeDropdownMenu: n, disabled: r = !1, ...i } = e,
        a = vf(bf, n),
        o = gf(n),
        s = x(t, a.triggerRef);
      return (0, U.jsx)($d, {
        asChild: !0,
        ...o,
        children: (0, U.jsx)(l.button, {
          type: `button`,
          id: a.triggerId,
          "aria-haspopup": `menu`,
          "aria-expanded": a.open,
          "aria-controls": a.open ? a.contentId : void 0,
          "data-state": a.open ? `open` : `closed`,
          "data-disabled": r ? `` : void 0,
          disabled: r,
          ...i,
          ref: s,
          onPointerDown: g(e.onPointerDown, (e) => {
            !r &&
              e.button === 0 &&
              e.ctrlKey === !1 &&
              (a.onOpenToggle(), a.open || e.preventDefault());
          }),
          onKeyDown: g(e.onKeyDown, (e) => {
            r ||
              ([`Enter`, ` `].includes(e.key) && a.onOpenToggle(),
              e.key === `ArrowDown` && a.onOpenChange(!0),
              [`Enter`, ` `, `ArrowDown`].includes(e.key) && e.preventDefault());
          }),
        }),
      });
    }, `DropdownMenuTrigger`),
  ),
  Sf = ff((e) => {
    let { __scopeDropdownMenu: t, ...n } = e,
      r = gf(t);
    return (0, U.jsx)(ef, { ...r, ...n });
  }, `DropdownMenuPortal`),
  Cf = `DropdownMenuContent`,
  wf = H.forwardRef(
    ff(function (e, t) {
      let { __scopeDropdownMenu: n, ...r } = e,
        i = vf(Cf, n),
        a = gf(n),
        o = H.useRef(!1);
      return (0, U.jsx)(tf, {
        id: i.contentId,
        "aria-labelledby": i.triggerId,
        ...a,
        ...r,
        ref: t,
        onCloseAutoFocus: g(e.onCloseAutoFocus, (e) => {
          (o.current || i.triggerRef.current?.focus(), (o.current = !1), e.preventDefault());
        }),
        onInteractOutside: g(e.onInteractOutside, (e) => {
          let t = e.detail.originalEvent,
            n = t.button === 0 && t.ctrlKey === !0,
            r = t.button === 2 || n;
          (!i.modal || r) && (o.current = !0);
        }),
        style: {
          ...e.style,
          "--radix-dropdown-menu-content-transform-origin": `var(--radix-popper-transform-origin)`,
          "--radix-dropdown-menu-content-available-width": `var(--radix-popper-available-width)`,
          "--radix-dropdown-menu-content-available-height": `var(--radix-popper-available-height)`,
          "--radix-dropdown-menu-trigger-width": `var(--radix-popper-anchor-width)`,
          "--radix-dropdown-menu-trigger-height": `var(--radix-popper-anchor-height)`,
        },
      });
    }, `DropdownMenuContent`),
  ),
  Tf = H.forwardRef(
    ff(function (e, t) {
      let { __scopeDropdownMenu: n, ...r } = e,
        i = gf(n);
      return (0, U.jsx)(nf, { ...i, ...r, ref: t });
    }, `DropdownMenuLabel`),
  ),
  Ef = H.forwardRef(
    ff(function (e, t) {
      let { __scopeDropdownMenu: n, ...r } = e,
        i = gf(n);
      return (0, U.jsx)(rf, { ...i, ...r, ref: t });
    }, `DropdownMenuItem`),
  ),
  Df = H.forwardRef(
    ff(function (e, t) {
      let { __scopeDropdownMenu: n, ...r } = e,
        i = gf(n);
      return (0, U.jsx)(af, { ...i, ...r, ref: t });
    }, `DropdownMenuCheckboxItem`),
  ),
  Of = H.forwardRef(
    ff(function (e, t) {
      let { __scopeDropdownMenu: n, ...r } = e,
        i = gf(n);
      return (0, U.jsx)(of, { ...i, ...r, ref: t });
    }, `DropdownMenuRadioItem`),
  ),
  kf = H.forwardRef(
    ff(function (e, t) {
      let { __scopeDropdownMenu: n, ...r } = e,
        i = gf(n);
      return (0, U.jsx)(sf, { ...i, ...r, ref: t });
    }, `DropdownMenuItemIndicator`),
  ),
  Af = H.forwardRef(
    ff(function (e, t) {
      let { __scopeDropdownMenu: n, ...r } = e,
        i = gf(n);
      return (0, U.jsx)(cf, { ...i, ...r, ref: t });
    }, `DropdownMenuSeparator`),
  ),
  jf = H.forwardRef(
    ff(function (e, t) {
      let { __scopeDropdownMenu: n, ...r } = e,
        i = gf(n);
      return (0, U.jsx)(lf, { ...i, ...r, ref: t });
    }, `DropdownMenuSubTrigger`),
  ),
  Mf = H.forwardRef(
    ff(function (e, t) {
      let { __scopeDropdownMenu: n, ...r } = e,
        i = gf(n);
      return (0, U.jsx)(uf, {
        ...i,
        ...r,
        ref: t,
        style: {
          ...e.style,
          "--radix-dropdown-menu-content-transform-origin": `var(--radix-popper-transform-origin)`,
          "--radix-dropdown-menu-content-available-width": `var(--radix-popper-available-width)`,
          "--radix-dropdown-menu-content-available-height": `var(--radix-popper-available-height)`,
          "--radix-dropdown-menu-trigger-width": `var(--radix-popper-anchor-width)`,
          "--radix-dropdown-menu-trigger-height": `var(--radix-popper-anchor-height)`,
        },
      });
    }, `DropdownMenuSubContent`),
  ),
  Nf = yf,
  Pf = xf,
  Ff = Sf,
  If = wf,
  Lf = Tf,
  Rf = Ef,
  zf = Df,
  Bf = Of,
  Vf = kf,
  Hf = Af,
  Uf = jf,
  Wf = Mf,
  Gf = Nf,
  Kf = Pf,
  qf = H.forwardRef(({ className: e, inset: t, children: n, ...r }, i) =>
    (0, U.jsxs)(Uf, {
      ref: i,
      className: c(
        `flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0`,
        t && `pl-8`,
        e,
      ),
      ...r,
      children: [n, (0, U.jsx)(ru, { className: `ml-auto` })],
    }),
  );
qf.displayName = Uf.displayName;
var Jf = H.forwardRef(({ className: e, ...t }, n) =>
  (0, U.jsx)(Wf, {
    ref: n,
    className: c(
      `z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)`,
      e,
    ),
    ...t,
  }),
);
Jf.displayName = Wf.displayName;
var Yf = H.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) =>
  (0, U.jsx)(Ff, {
    children: (0, U.jsx)(If, {
      ref: r,
      sideOffset: t,
      className: c(
        `z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md`,
        `data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)`,
        e,
      ),
      ...n,
    }),
  }),
);
Yf.displayName = If.displayName;
var Xf = H.forwardRef(({ className: e, inset: t, ...n }, r) =>
  (0, U.jsx)(Rf, {
    ref: r,
    className: c(
      `relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0`,
      t && `pl-8`,
      e,
    ),
    ...n,
  }),
);
Xf.displayName = Rf.displayName;
var Zf = H.forwardRef(({ className: e, children: t, ...n }, r) =>
  (0, U.jsxs)(zf, {
    ref: r,
    className: c(
      `relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50`,
      e,
    ),
    ...n,
    children: [
      (0, U.jsx)(`span`, {
        className: `absolute left-2 flex h-3.5 w-3.5 items-center justify-center`,
        children: (0, U.jsx)(Vf, { children: (0, U.jsx)(ae, { className: `h-4 w-4` }) }),
      }),
      t,
    ],
  }),
);
Zf.displayName = zf.displayName;
var Qf = H.forwardRef(({ className: e, children: t, ...n }, r) =>
  (0, U.jsxs)(Bf, {
    ref: r,
    className: c(
      `relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50`,
      e,
    ),
    ...n,
    children: [
      (0, U.jsx)(`span`, {
        className: `absolute left-2 flex h-3.5 w-3.5 items-center justify-center`,
        children: (0, U.jsx)(Vf, {
          children: (0, U.jsx)(dt, { className: `h-2 w-2 fill-current` }),
        }),
      }),
      t,
    ],
  }),
);
Qf.displayName = Bf.displayName;
var $f = H.forwardRef(({ className: e, inset: t, ...n }, r) =>
  (0, U.jsx)(Lf, {
    ref: r,
    className: c(`px-2 py-1.5 text-sm font-semibold`, t && `pl-8`, e),
    ...n,
  }),
);
$f.displayName = Lf.displayName;
var ep = H.forwardRef(({ className: e, ...t }, n) =>
  (0, U.jsx)(Hf, { ref: n, className: c(`-mx-1 my-1 h-px bg-muted`, e), ...t }),
);
ep.displayName = Hf.displayName;
var tp = (e) => {
  switch (e) {
    case `review`:
      return (0, U.jsx)(au, { className: `size-4 text-warning`, "aria-hidden": !0 });
    case `mapping`:
      return (0, U.jsx)(ft, { className: `size-4 text-primary`, "aria-hidden": !0 });
    case `low_confidence`:
      return (0, U.jsx)(at, { className: `size-4 text-error`, "aria-hidden": !0 });
    case `system`:
      return (0, U.jsx)(uu, { className: `size-4 text-info`, "aria-hidden": !0 });
    default:
      return (0, U.jsx)(ut, { className: `size-4 text-success`, "aria-hidden": !0 });
  }
};
function np() {
  let { data: e = [] } = ct({ queryKey: [`notifications`], queryFn: rt }),
    t = e.filter((e) => e.unread).length;
  return (0, U.jsxs)(Gf, {
    children: [
      (0, U.jsx)(Kf, {
        asChild: !0,
        children: (0, U.jsxs)(S, {
          variant: `ghost`,
          size: `icon`,
          className: `relative`,
          "aria-label": `Notifications, ${t} unread`,
          children: [
            (0, U.jsx)(eu, { className: `size-5`, "aria-hidden": !0 }),
            t > 0 &&
              (0, U.jsx)(`span`, {
                className: `absolute top-1.5 right-1.5 flex size-4 items-center justify-center rounded-full bg-primary text-[10px] font-semibold text-primary-foreground`,
                children: t,
              }),
          ],
        }),
      }),
      (0, U.jsxs)(Yf, {
        align: `end`,
        className: `w-88 p-0`,
        children: [
          (0, U.jsxs)(`div`, {
            className: `flex items-center justify-between border-b border-border px-4 py-3`,
            children: [
              (0, U.jsx)(`p`, { className: `text-sm font-semibold`, children: `Notifications` }),
              (0, U.jsxs)(`span`, {
                className: `text-xs text-muted-foreground`,
                children: [t, ` unread`],
              }),
            ],
          }),
          (0, U.jsx)(`ul`, {
            className: `max-h-96 overflow-y-auto`,
            children: e.map((e) =>
              (0, U.jsxs)(
                `li`,
                {
                  className: c(
                    `flex gap-3 border-b border-border/70 px-4 py-3 last:border-0`,
                    e.unread && `bg-primary-soft/40`,
                  ),
                  children: [
                    (0, U.jsx)(`span`, { className: `mt-0.5`, children: tp(e.type) }),
                    (0, U.jsxs)(`div`, {
                      className: `min-w-0`,
                      children: [
                        (0, U.jsx)(`p`, {
                          className: `text-sm font-medium text-foreground`,
                          children: e.title,
                        }),
                        (0, U.jsx)(`p`, {
                          className: `text-xs text-muted-foreground`,
                          children: e.detail,
                        }),
                        (0, U.jsx)(`p`, {
                          className: `mt-1 text-[11px] text-muted-foreground`,
                          children: e.time,
                        }),
                      ],
                    }),
                  ],
                },
                e.id,
              ),
            ),
          }),
        ],
      }),
    ],
  });
}
function rp({ onNavigate: e }) {
  return (0, U.jsxs)(`div`, {
    className: `flex h-full flex-col bg-sidebar`,
    children: [
      (0, U.jsxs)(`div`, {
        className: `flex flex-col border-b border-sidebar-border`,
        children: [
          (0, U.jsxs)(`div`, {
            className: `flex items-center gap-3 px-5 py-5`,
            children: [
              (0, U.jsx)(`img`, {
                src: `/logo.png`,
                alt: `PostRoute AI Logo`,
                className: `size-12 object-contain drop-shadow-sm`,
              }),
              (0, U.jsxs)(`div`, {
                className: `leading-tight`,
                children: [
                  (0, U.jsx)(`p`, {
                    className: `text-base font-bold text-foreground tracking-tight`,
                    children: `PostRoute AI`,
                  }),
                  (0, U.jsx)(`p`, {
                    className: `text-[10px] font-medium text-muted-foreground uppercase tracking-wider mt-0.5`,
                    children: `Delivery PO ID`,
                  }),
                ],
              }),
            ],
          }),
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
          }.VITE_USE_MOCK !== `false` &&
            (0, U.jsxs)(`div`, {
              className: `bg-amber-100 dark:bg-amber-900/30 px-3 py-2 text-center text-xs font-semibold text-amber-800 dark:text-amber-200 border-t border-amber-200 dark:border-amber-800/50`,
              children: [
                `DEMO MODE`,
                (0, U.jsx)(`div`, {
                  className: `text-[10px] font-normal opacity-80 mt-0.5`,
                  children: `Using static prototype data`,
                }),
              ],
            }),
        ],
      }),
      (0, U.jsx)(`nav`, {
        className: `flex-1 overflow-y-auto px-3 py-4`,
        "aria-label": `Main`,
        children: (0, U.jsx)(`ul`, {
          className: `space-y-1`,
          children: pu.map((t) =>
            (0, U.jsx)(
              `li`,
              {
                children: (0, U.jsxs)(ze, {
                  to: t.to,
                  onClick: e,
                  activeOptions: { exact: t.to === `/` },
                  activeProps: {
                    className: `bg-primary-soft text-primary-dark font-semibold border-l-2 border-l-primary`,
                  },
                  inactiveProps: {
                    className: `text-muted-foreground border-l-2 border-l-transparent`,
                  },
                  className: `flex items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-colors hover:bg-muted hover:text-foreground`,
                  children: [
                    (0, U.jsx)(t.icon, { className: `size-4.5 shrink-0`, "aria-hidden": !0 }),
                    t.label,
                  ],
                }),
              },
              t.to,
            ),
          ),
        }),
      }),
      (0, U.jsxs)(`div`, {
        className: `space-y-2 border-t border-sidebar-border px-3 py-4`,
        children: [
          (0, U.jsxs)(`div`, {
            className: `flex items-center gap-2 rounded-md bg-success-soft px-3 py-2 text-xs text-success`,
            children: [
              (0, U.jsx)(du, { className: `size-4`, "aria-hidden": !0 }),
              (0, U.jsx)(`span`, { className: `font-medium`, children: `System Status:` }),
              ` All services operational`,
            ],
          }),
          (0, U.jsxs)(ze, {
            to: `/settings`,
            onClick: e,
            activeProps: { className: `bg-primary-soft text-primary-dark` },
            className: `flex items-center gap-3 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground`,
            children: [
              (0, U.jsx)(fu, { className: `size-4.5`, "aria-hidden": !0 }),
              (0, U.jsxs)(`span`, {
                className: `min-w-0 truncate`,
                children: [
                  ce.name,
                  (0, U.jsx)(`span`, {
                    className: `block text-[11px] text-muted-foreground`,
                    children: ce.role,
                  }),
                ],
              }),
            ],
          }),
          (0, U.jsxs)(ze, {
            to: `/settings`,
            onClick: e,
            className: `flex items-center gap-3 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground`,
            children: [(0, U.jsx)(lu, { className: `size-4.5`, "aria-hidden": !0 }), `Settings`],
          }),
        ],
      }),
    ],
  });
}
function ip({ children: e }) {
  let t = Il({ select: (e) => e.location.pathname }),
    n = mu(t),
    [r, i] = (0, H.useState)(!1),
    [a, o] = (0, H.useState)(``),
    [s, l] = (0, H.useState)(``);
  return (
    (0, H.useEffect)(() => {
      let e = () =>
        l(
          new Date().toLocaleString(`en-IN`, {
            day: `2-digit`,
            month: `short`,
            hour: `2-digit`,
            minute: `2-digit`,
            hour12: !1,
          }),
        );
      e();
      let t = setInterval(e, 3e4);
      return () => clearInterval(t);
    }, []),
    (0, H.useEffect)(() => {
      i(!1);
    }, [t]),
    (0, U.jsxs)(`div`, {
      className: `min-h-screen bg-background`,
      children: [
        (0, U.jsx)(`a`, {
          href: `#main-content`,
          className: `sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground`,
          children: `Skip to content`,
        }),
        (0, U.jsx)(`aside`, {
          className: `fixed inset-y-0 left-0 z-30 hidden w-64 border-r border-sidebar-border lg:block`,
          children: (0, U.jsx)(rp, {}),
        }),
        r &&
          (0, U.jsxs)(`div`, {
            className: `fixed inset-0 z-40 lg:hidden`,
            children: [
              (0, U.jsx)(`button`, {
                "aria-label": `Close navigation`,
                className: `absolute inset-0 bg-foreground/30`,
                onClick: () => i(!1),
              }),
              (0, U.jsxs)(`div`, {
                className: `absolute inset-y-0 left-0 w-64 border-r border-sidebar-border shadow-raised`,
                children: [
                  (0, U.jsx)(rp, { onNavigate: () => i(!1) }),
                  (0, U.jsx)(S, {
                    variant: `ghost`,
                    size: `icon`,
                    className: `absolute top-3 right-2`,
                    "aria-label": `Close navigation`,
                    onClick: () => i(!1),
                    children: (0, U.jsx)(mt, { className: `size-4`, "aria-hidden": !0 }),
                  }),
                ],
              }),
            ],
          }),
        (0, U.jsxs)(`div`, {
          className: `lg:pl-64`,
          children: [
            (0, U.jsxs)(`header`, {
              className: `sticky top-0 z-20 flex flex-wrap items-center gap-3 border-b border-border bg-surface/95 px-4 py-3 backdrop-blur md:px-6`,
              children: [
                (0, U.jsx)(S, {
                  variant: `ghost`,
                  size: `icon`,
                  className: `lg:hidden`,
                  "aria-label": `Open navigation`,
                  onClick: () => i(!0),
                  children: (0, U.jsx)(su, { className: `size-5`, "aria-hidden": !0 }),
                }),
                (0, U.jsxs)(`div`, {
                  className: `min-w-0 flex-1`,
                  children: [
                    (0, U.jsx)(`p`, {
                      className: `truncate text-sm font-semibold text-foreground`,
                      children: n.title,
                    }),
                    (0, U.jsx)(`p`, {
                      className: `hidden truncate text-xs text-muted-foreground sm:block`,
                      children: n.subtitle,
                    }),
                  ],
                }),
                (0, U.jsx)(`div`, {
                  className: `hidden w-64 xl:block`,
                  children: (0, U.jsx)(C, {
                    label: `Search addresses, PIN codes or parcels`,
                    placeholder: `Search address, PIN, parcel…`,
                    value: a,
                    onChange: o,
                  }),
                }),
                (0, U.jsxs)(`div`, {
                  className: `flex items-center gap-1.5`,
                  children: [
                    (0, U.jsxs)(`span`, {
                      className: `hidden items-center gap-1.5 rounded-md border border-success/25 bg-success-soft px-2.5 py-1 text-xs font-medium text-success md:inline-flex`,
                      children: [
                        (0, U.jsx)($l, { className: `size-3.5`, "aria-hidden": !0 }),
                        `Online`,
                      ],
                    }),
                    (0, U.jsxs)(`span`, {
                      className: `tabular hidden text-xs text-muted-foreground lg:block`,
                      children: [s, ` IST`],
                    }),
                    (0, U.jsx)(np, {}),
                    (0, U.jsxs)(ze, {
                      to: `/settings`,
                      className: `flex items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-muted`,
                      children: [
                        (0, U.jsx)(`span`, {
                          className: `flex size-8 items-center justify-center rounded-full bg-primary-soft text-xs font-semibold text-primary-dark`,
                          children: `TO`,
                        }),
                        (0, U.jsxs)(`span`, {
                          className: `hidden leading-tight sm:block`,
                          children: [
                            (0, U.jsx)(`span`, {
                              className: `block text-xs font-semibold`,
                              children: ce.name,
                            }),
                            (0, U.jsx)(`span`, {
                              className: `block text-[11px] text-muted-foreground`,
                              children: `Operator`,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, U.jsx)(`main`, {
              id: `main-content`,
              className: c(`mx-auto w-full max-w-[1600px] space-y-6 px-4 py-6 md:px-6 md:py-8`),
              children: e,
            }),
          ],
        }),
      ],
    })
  );
}
var ap = ({ ...e }) =>
  (0, U.jsx)(ht, {
    className: `toaster group`,
    toastOptions: {
      classNames: {
        toast: `group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg`,
        description: `group-[.toast]:text-muted-foreground`,
        actionButton: `group-[.toast]:bg-primary group-[.toast]:text-primary-foreground`,
        cancelButton: `group-[.toast]:bg-muted group-[.toast]:text-muted-foreground`,
      },
    },
    ...e,
  });
function op() {
  return (0, U.jsx)(`div`, {
    className: `flex min-h-screen items-center justify-center bg-background px-4`,
    children: (0, U.jsxs)(`div`, {
      className: `max-w-md text-center`,
      children: [
        (0, U.jsx)(`h1`, { className: `text-7xl font-bold text-foreground`, children: `404` }),
        (0, U.jsx)(`h2`, {
          className: `mt-4 text-xl font-semibold text-foreground`,
          children: `Page not found`,
        }),
        (0, U.jsx)(`p`, {
          className: `mt-2 text-sm text-muted-foreground`,
          children: `This screen does not exist in PostRoute AI.`,
        }),
        (0, U.jsx)(`div`, {
          className: `mt-6`,
          children: (0, U.jsx)(ze, {
            to: `/`,
            className: `inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90`,
            children: `Go to dashboard`,
          }),
        }),
      ],
    }),
  });
}
function sp({ error: e, reset: t }) {
  console.error(e);
  let n = We();
  return (
    (0, H.useEffect)(() => {
      Ql(e, { boundary: `tanstack_root_error_component` });
    }, [e]),
    (0, U.jsx)(`div`, {
      className: `flex min-h-screen items-center justify-center bg-background px-4`,
      children: (0, U.jsxs)(`div`, {
        className: `max-w-md text-center`,
        children: [
          (0, U.jsx)(`h1`, {
            className: `text-xl font-semibold tracking-tight text-foreground`,
            children: `This screen didn't load`,
          }),
          (0, U.jsx)(`p`, {
            className: `mt-2 text-sm text-muted-foreground`,
            children: `Something went wrong. You can retry or return to the dashboard.`,
          }),
          (0, U.jsxs)(`div`, {
            className: `mt-6 flex flex-wrap justify-center gap-2`,
            children: [
              (0, U.jsx)(`button`, {
                onClick: () => {
                  (n.invalidate(), t());
                },
                className: `inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90`,
                children: `Try again`,
              }),
              (0, U.jsx)(`a`, {
                href: `/`,
                className: `inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent`,
                children: `Go to dashboard`,
              }),
            ],
          }),
        ],
      }),
    })
  );
}
var cp = de()({
  head: () => ({
    meta: [
      { charSet: `utf-8` },
      { name: `viewport`, content: `width=device-width, initial-scale=1` },
      { title: `PostRoute AI — Delivery Post Office Identification` },
      {
        name: `description`,
        content: `Internal postal operations console for predicting PIN codes and delivery post offices from incomplete addresses.`,
      },
      { property: `og:title`, content: `PostRoute AI` },
      {
        property: `og:description`,
        content: `AI-assisted delivery post office and PIN code identification for postal operations.`,
      },
      { property: `og:type`, content: `website` },
      { name: `twitter:card`, content: `summary_large_image` },
    ],
    links: [
      { rel: `stylesheet`, href: Zl },
      { rel: `icon`, href: `/logo.png`, type: `image/png` },
    ],
  }),
  shellComponent: lp,
  component: up,
  notFoundComponent: op,
  errorComponent: sp,
});
function lp({ children: e }) {
  return (0, U.jsxs)(`html`, {
    lang: `en`,
    children: [
      (0, U.jsx)(`head`, { children: (0, U.jsx)(q, {}) }),
      (0, U.jsxs)(`body`, { children: [e, (0, U.jsx)(Y, {})] }),
    ],
  });
}
function up() {
  let { queryClient: e } = cp.useRouteContext();
  return (0, U.jsxs)(nt, {
    client: e,
    children: [
      (0, U.jsx)(ip, { children: (0, U.jsx)(El, {}) }),
      (0, U.jsx)(ap, { position: `top-right` }),
    ],
  });
}
var dp = E(`/`)({
    head: () => ({
      meta: [
        { title: `Operations Dashboard — PostRoute AI` },
        {
          name: `description`,
          content: `Daily prediction volume, auto-routing rate, review queue load and system health for postal operations.`,
        },
        { property: `og:title`, content: `Operations Dashboard — PostRoute AI` },
        {
          property: `og:description`,
          content: `Postal address prediction and routing overview for post office operators.`,
        },
      ],
    }),
    component: pe(
      () =>
        he(
          () => import(`./routes-BKKUzlYq.js`),
          __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]),
        ),
      `component`,
    ),
  }),
  fp = E(`/activity`)({
    head: () => ({
      meta: [
        { title: `Activity Log — PostRoute AI` },
        {
          name: `description`,
          content: `Chronological record of operator and system actions across predictions, parcels and mappings.`,
        },
        { property: `og:title`, content: `Activity Log — PostRoute AI` },
        { property: `og:description`, content: `System and operator action history.` },
      ],
    }),
    component: pe(
      () => he(() => import(`./activity-98qXQSuO.js`), __vite__mapDeps([14, 1, 4, 5, 9, 10, 11])),
      `component`,
    ),
  }),
  pp = E(`/analytics`)({
    head: () => ({
      meta: [
        { title: `Analytics & Model Performance — PostRoute AI` },
        {
          name: `description`,
          content: `Top-k accuracy, precision, recall, confidence distribution and baseline model comparison for address prediction.`,
        },
        { property: `og:title`, content: `Analytics & Model Performance — PostRoute AI` },
        {
          property: `og:description`,
          content: `Prediction quality metrics across address conditions and models.`,
        },
      ],
    }),
    component: pe(
      () => he(() => import(`./analytics-CB1z37jM.js`), __vite__mapDeps([15, 1, 4, 5, 10])),
      `component`,
    ),
  }),
  mp = E(`/mapping`)({
    head: () => ({
      meta: [
        { title: `Pincode Mapping — PostRoute AI` },
        {
          name: `description`,
          content: `Current and historical PIN code to delivery post office mappings, versions and detected conflicts.`,
        },
        { property: `og:title`, content: `Pincode Mapping — PostRoute AI` },
        { property: `og:description`, content: `Manage current and historical postal mappings.` },
      ],
    }),
    component: pe(
      () =>
        he(() => import(`./mapping-B6ntT9Zc.js`), __vite__mapDeps([16, 1, 4, 5, 6, 17, 9, 10, 11])),
      `component`,
    ),
  }),
  hp = E(`/parcels`)({
    head: () => ({
      meta: [
        { title: `Parcel Routing — PostRoute AI` },
        {
          name: `description`,
          content: `Track parcels from receipt through address analysis, verification, sorting, dispatch and delivery.`,
        },
        { property: `og:title`, content: `Parcel Routing — PostRoute AI` },
        {
          property: `og:description`,
          content: `Parcel routing status across the delivery pipeline.`,
        },
      ],
    }),
    component: pe(
      () =>
        he(() => import(`./parcels-hO2zf-md.js`), __vite__mapDeps([18, 1, 19, 3, 4, 5, 9, 10, 11])),
      `component`,
    ),
  }),
  gp = E(`/post-offices`)({
    head: () => ({
      meta: [
        { title: `Post Offices — PostRoute AI` },
        {
          name: `description`,
          content: `Browse delivery post offices, their PIN codes, divisions and mapping versions.`,
        },
        { property: `og:title`, content: `Post Offices — PostRoute AI` },
        { property: `og:description`, content: `Post office directory with PIN mappings.` },
      ],
    }),
    component: pe(
      () =>
        he(
          () => import(`./post-offices-CNvCwBFW.js`),
          __vite__mapDeps([20, 1, 19, 3, 4, 5, 9, 10, 11]),
        ),
      `component`,
    ),
  }),
  _p = E(`/prediction`)({
    head: () => ({
      meta: [
        { title: `Address Prediction — PostRoute AI` },
        {
          name: `description`,
          content: `Enter an incomplete or noisy postal address and get the most probable delivery post office, PIN code and confidence.`,
        },
        { property: `og:title`, content: `Address Prediction — PostRoute AI` },
        {
          property: `og:description`,
          content: `Identify the most probable delivery post office and PIN code from any address.`,
        },
      ],
    }),
    component: pe(
      () =>
        he(
          () => import(`./prediction-DQUvEmHA.js`),
          __vite__mapDeps([21, 1, 19, 3, 4, 22, 23, 24, 25, 10, 7, 26, 11]),
        ),
      `component`,
    ),
  }),
  vp = E(`/review`)({
    head: () => ({
      meta: [
        { title: `Review Queue — PostRoute AI` },
        {
          name: `description`,
          content: `Predictions requiring operator verification, ranked by priority, confidence and review reason.`,
        },
        { property: `og:title`, content: `Review Queue — PostRoute AI` },
        { property: `og:description`, content: `Predictions requiring operator verification.` },
      ],
    }),
    component: pe(
      () =>
        he(() => import(`./review-S_Lgop7D.js`), __vite__mapDeps([27, 1, 19, 3, 4, 5, 9, 10, 11])),
      `component`,
    ),
  }),
  yp = E(`/settings`)({
    head: () => ({
      meta: [
        { title: `Operator Profile & Settings — PostRoute AI` },
        {
          name: `description`,
          content: `Operator profile, workstation appearance, density, notification and shortcut preferences.`,
        },
        { property: `og:title`, content: `Operator Profile & Settings — PostRoute AI` },
        {
          property: `og:description`,
          content: `Workstation preferences for post office operators.`,
        },
      ],
    }),
    component: pe(
      () => he(() => import(`./settings-QenAtyas.js`), __vite__mapDeps([28, 1, 26, 11])),
      `component`,
    ),
  }),
  bp = {
    IndexRoute: dp.update({ id: `/`, path: `/`, getParentRoute: () => cp }),
    ActivityRoute: fp.update({ id: `/activity`, path: `/activity`, getParentRoute: () => cp }),
    AnalyticsRoute: pp.update({ id: `/analytics`, path: `/analytics`, getParentRoute: () => cp }),
    MappingRoute: mp.update({ id: `/mapping`, path: `/mapping`, getParentRoute: () => cp }),
    ParcelsRoute: hp.update({ id: `/parcels`, path: `/parcels`, getParentRoute: () => cp }),
    PostOfficesRoute: gp.update({
      id: `/post-offices`,
      path: `/post-offices`,
      getParentRoute: () => cp,
    }),
    PredictionRoute: _p.update({
      id: `/prediction`,
      path: `/prediction`,
      getParentRoute: () => cp,
    }),
    ReviewRoute: vp.update({ id: `/review`, path: `/review`, getParentRoute: () => cp }),
    SettingsRoute: yp.update({ id: `/settings`, path: `/settings`, getParentRoute: () => cp }),
    ParcelsParcelIdRoute: gt.update({
      id: `/parcels_/$parcelId`,
      path: `/parcels/$parcelId`,
      getParentRoute: () => cp,
    }),
    PostOfficesOfficeIdRoute: _t.update({
      id: `/post-offices_/$officeId`,
      path: `/post-offices/$officeId`,
      getParentRoute: () => cp,
    }),
    ReviewReviewIdRoute: vt.update({
      id: `/review_/$reviewId`,
      path: `/review/$reviewId`,
      getParentRoute: () => cp,
    }),
  },
  xp = cp._addFileChildren(bp),
  Sp = () =>
    Ml({
      routeTree: xp,
      context: { queryClient: new Xl() },
      scrollRestoration: !0,
      defaultPreloadStaleTime: 0,
    });
async function Cp() {
  let e = await Sp(),
    t;
  if (Kl) {
    let n = await Kl.getOptions();
    ((n.serializationAdapters = n.serializationAdapters ?? []),
      (window.__TSS_START_OPTIONS__ = n),
      (t = n.serializationAdapters),
      (e.options.defaultSsr = n.defaultSsr));
  } else ((t = []), (window.__TSS_START_OPTIONS__ = { serializationAdapters: t }));
  return (
    t.push(To),
    e.options.serializationAdapters && t.push(...e.options.serializationAdapters),
    e.update({ basepath: ``, serializationAdapters: t }),
    e.stores.ids.get().length || (await Wt(e)),
    e
  );
}
var wp = Cp;
function Tp() {
  return wp().finally(() => window.$_TSR?.h());
}
var Ep;
function Dp() {
  return (
    (Ep ||= Tp()),
    (0, U.jsx)(Xc, { promise: Ep, children: (e) => (0, U.jsx)(Fl, { router: e }) })
  );
}
var Op = St();
(0, H.startTransition)(() => {
  (0, Op.hydrateRoot)(document, (0, U.jsx)(H.StrictMode, { children: (0, U.jsx)(Dp, {}) }));
});
