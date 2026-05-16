const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/PortfolioContent-6T4H3_uh.js","assets/index-DZ-iRrHU.js","assets/index-kLJ4W6Uv.css","assets/useBackend-D_3ybxTn.js","assets/input-BHo9b8MF.js","assets/Header-eVOqwmYY.js","assets/trending-down-BRKGhd1Y.js","assets/chart-no-axes-column-B4-WNcb2.js","assets/activity-CT8NSU8b.js","assets/star-QLtOo_xu.js"])))=>i.map(i=>d[i]);
import { j as jsxRuntimeExports, r as reactExports, S as Skeleton, _ as __vitePreload } from "./index-DZ-iRrHU.js";
import { H as Header } from "./Header-eVOqwmYY.js";
const PortfolioContent = reactExports.lazy(
  () => __vitePreload(() => import("./PortfolioContent-6T4H3_uh.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9]) : void 0)
);
function PortfolioPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      reactExports.Suspense,
      {
        fallback: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen pt-20 px-4 space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-10 w-48" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-28" }, "port-sk-1"),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-28" }, "port-sk-2"),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-28" }, "port-sk-3"),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-28" }, "port-sk-4")
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-80" })
        ] }),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(PortfolioContent, {})
      }
    )
  ] });
}
export {
  PortfolioPage as default
};
