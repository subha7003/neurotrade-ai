const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HeroSection-BgJjRG5Z.js","assets/index-DZ-iRrHU.js","assets/index-kLJ4W6Uv.css","assets/GlassCard-DyUzIlVr.js","assets/NeonButton-DgfY8YkA.js","assets/Header-eVOqwmYY.js","assets/arrow-right-DaPqzJnW.js","assets/FeaturesSection-DcdYa64d.js","assets/triangle-alert-BO8nQRBq.js","assets/DashboardSection-YjD5FRNT.js","assets/AreaChart-BF6iXp9r.js","assets/activity-CT8NSU8b.js","assets/trending-down-BRKGhd1Y.js","assets/chart-no-axes-column-B4-WNcb2.js","assets/ExplainableAISection-D7brRcfy.js","assets/PricingSection-Bf3v2akw.js","assets/star-QLtOo_xu.js","assets/FooterSection-BzAZrb2w.js"])))=>i.map(i=>d[i]);
import { r as reactExports, j as jsxRuntimeExports, _ as __vitePreload } from "./index-DZ-iRrHU.js";
import { m as motion, H as Header } from "./Header-eVOqwmYY.js";
const COLORS = [
  "rgba(56,139,255,0.6)",
  "rgba(168,85,247,0.6)",
  "rgba(34,211,238,0.6)",
  "rgba(56,139,255,0.4)",
  "rgba(168,85,247,0.4)"
];
function seededRandom(seed) {
  const x = Math.sin(seed + 1) * 1e4;
  return x - Math.floor(x);
}
function ParticleBackground() {
  const particles = reactExports.useMemo(() => {
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: seededRandom(i * 7) * 100,
      y: seededRandom(i * 13) * 100,
      size: 1 + seededRandom(i * 3) * 3,
      duration: 6 + seededRandom(i * 5) * 8,
      delay: seededRandom(i * 11) * 6,
      opacity: 0.2 + seededRandom(i * 17) * 0.5,
      color: COLORS[Math.floor(seededRandom(i * 19) * COLORS.length)]
    }));
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "aria-hidden": "true",
      className: "fixed inset-0 pointer-events-none overflow-hidden z-0",
      children: particles.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          className: "absolute rounded-full",
          style: {
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: p.color,
            opacity: p.opacity
          },
          animate: {
            y: [0, -30 - seededRandom(p.id * 23) * 40, 0],
            x: [0, (seededRandom(p.id * 29) - 0.5) * 20, 0],
            opacity: [p.opacity, p.opacity * 0.4, p.opacity]
          },
          transition: {
            duration: p.duration,
            delay: p.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut"
          }
        },
        p.id
      ))
    }
  );
}
const HeroSection = reactExports.lazy(() => __vitePreload(() => import("./HeroSection-BgJjRG5Z.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6]) : void 0));
const FeaturesSection = reactExports.lazy(
  () => __vitePreload(() => import("./FeaturesSection-DcdYa64d.js"), true ? __vite__mapDeps([7,1,2,3,5,8]) : void 0)
);
const DashboardSection = reactExports.lazy(
  () => __vitePreload(() => import("./DashboardSection-YjD5FRNT.js"), true ? __vite__mapDeps([9,1,2,3,5,10,11,12,13]) : void 0)
);
const ExplainableAISection = reactExports.lazy(
  () => __vitePreload(() => import("./ExplainableAISection-D7brRcfy.js"), true ? __vite__mapDeps([14,1,2,3,5,13]) : void 0)
);
const PricingSection = reactExports.lazy(
  () => __vitePreload(() => import("./PricingSection-Bf3v2akw.js"), true ? __vite__mapDeps([15,1,2,3,4,5,16]) : void 0)
);
const FooterSection = reactExports.lazy(() => __vitePreload(() => import("./FooterSection-BzAZrb2w.js"), true ? __vite__mapDeps([17,1,2,4,5,6]) : void 0));
function SectionFallback() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-[200px] flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-full border-2 border-primary/40 border-t-primary animate-spin" }) });
}
function LandingPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen bg-background overflow-x-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": "true",
        className: "fixed top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full pointer-events-none",
        style: {
          background: "radial-gradient(circle, oklch(0.6 0.25 250 / 0.08) 0%, transparent 65%)"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": "true",
        className: "fixed top-[10%] right-[-15%] w-[50vw] h-[50vw] rounded-full pointer-events-none",
        style: {
          background: "radial-gradient(circle, oklch(0.65 0.24 310 / 0.07) 0%, transparent 65%)"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": "true",
        className: "fixed bottom-[-10%] left-[20%] w-[40vw] h-[40vw] rounded-full pointer-events-none",
        style: {
          background: "radial-gradient(circle, oklch(0.65 0.21 200 / 0.06) 0%, transparent 65%)"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ParticleBackground, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { id: "main-content", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionFallback, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeroSection, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionFallback, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(FeaturesSection, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionFallback, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardSection, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionFallback, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(ExplainableAISection, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionFallback, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(PricingSection, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionFallback, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(FooterSection, {}) })
    ] })
  ] });
}
export {
  LandingPage as default
};
