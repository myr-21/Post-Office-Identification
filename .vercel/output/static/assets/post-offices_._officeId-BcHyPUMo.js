const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/post-offices_._officeId-wjMR9bNB.js",
      "assets/primitives-BCHLNZiF.js",
      "assets/link-BI1tahbv.js",
      "assets/useRouter-CDYUVTqa.js",
      "assets/postroute-C-bfl2si.js",
      "assets/useQuery-kLumsi1Z.js",
      "assets/arrow-left-BNSLnK9L.js",
      "assets/states-CAGmlWJM.js",
      "assets/map-pin-CEoWcCSG.js",
      "assets/data-table-CdyL5UA9.js",
      "assets/badges-BR-XpxyQ.js",
    ]),
) => i.map((i) => d[i]);
import { n as e, r as t, t as n } from "./preload-helper-DCw9-y5V.js";
var r = t(`/post-offices_/$officeId`)({
  head: () => ({
    meta: [
      { title: `Post Office Detail — PostRoute AI` },
      {
        name: `description`,
        content: `Location, PIN mapping history and recent predictions for a delivery post office.`,
      },
      { property: `og:title`, content: `Post Office Detail — PostRoute AI` },
      {
        property: `og:description`,
        content: `Mapping history and prediction activity per office.`,
      },
    ],
  }),
  component: e(
    () =>
      n(
        () => import(`./post-offices_._officeId-wjMR9bNB.js`),
        __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
      ),
    `component`,
  ),
});
export { r as t };
