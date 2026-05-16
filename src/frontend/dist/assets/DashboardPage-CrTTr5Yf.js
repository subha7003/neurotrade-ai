const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DashboardContent-RHwdgNt_.js","assets/index-DZ-iRrHU.js","assets/index-kLJ4W6Uv.css","assets/useBackend-D_3ybxTn.js","assets/Header-eVOqwmYY.js","assets/activity-CT8NSU8b.js","assets/chart-no-axes-column-B4-WNcb2.js","assets/AreaChart-BF6iXp9r.js","assets/triangle-alert-BO8nQRBq.js","assets/trending-down-BRKGhd1Y.js","assets/minus-BfnZUKYt.js"])))=>i.map(i=>d[i]);
import { j as jsxRuntimeExports, r as reactExports, S as Skeleton, _ as __vitePreload } from "./index-DZ-iRrHU.js";
import { H as Header } from "./Header-eVOqwmYY.js";
const DashboardContent = reactExports.lazy(
  () => __vitePreload(() => import("./DashboardContent-RHwdgNt_.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]) : void 0)
);
function DashboardPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      reactExports.Suspense,
      {
        fallback: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen pt-20 px-4 space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-10 w-64" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-28" }, "dash-sk-pnl"),
            ",",
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-28" }, "dash-sk-accuracy"),
            ",",
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-28" }, "dash-sk-signals"),
            ",",
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-28" }, "dash-sk-alerts"),
            ","
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-80" })
        ] }),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardContent, {})
      }
    )
  ] });
}
export {
  DashboardPage as default
};
