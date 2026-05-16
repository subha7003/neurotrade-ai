const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/PredictionContent-CLX6ct8l.js","assets/index-DZ-iRrHU.js","assets/index-kLJ4W6Uv.css","assets/useBackend-D_3ybxTn.js","assets/input-BHo9b8MF.js","assets/Header-eVOqwmYY.js","assets/trending-down-BRKGhd1Y.js","assets/minus-BfnZUKYt.js","assets/AreaChart-BF6iXp9r.js"])))=>i.map(i=>d[i]);
import { j as jsxRuntimeExports, r as reactExports, S as Skeleton, _ as __vitePreload } from "./index-DZ-iRrHU.js";
import { H as Header } from "./Header-eVOqwmYY.js";
const PredictionContent = reactExports.lazy(
  () => __vitePreload(() => import("./PredictionContent-CLX6ct8l.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8]) : void 0)
);
function PredictionPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      reactExports.Suspense,
      {
        fallback: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen pt-20 px-4 space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-10 w-48" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-16 w-full max-w-xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-96" })
        ] }),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(PredictionContent, {})
      }
    )
  ] });
}
export {
  PredictionPage as default
};
