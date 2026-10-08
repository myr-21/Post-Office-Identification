import { dt as e, mt as t } from "./primitives-BCHLNZiF.js";
import { t as n } from "./useRouter-CDYUVTqa.js";
var r = t(e(), 1);
function i(e) {
  let t = n();
  return r.useCallback((n) => t.navigate({ ...n, from: n.from ?? e?.from }), [e?.from, t]);
}
export { i as t };
