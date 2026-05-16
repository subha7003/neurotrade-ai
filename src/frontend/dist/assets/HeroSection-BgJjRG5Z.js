import { j as jsxRuntimeExports } from "./index-DZ-iRrHU.js";
import { G as GlassCard } from "./GlassCard-DyUzIlVr.js";
import { N as NeonButton } from "./NeonButton-DgfY8YkA.js";
import { c as createLucideIcon, m as motion, Z as Zap, T as TrendingUp } from "./Header-eVOqwmYY.js";
import { A as ArrowRight } from "./arrow-right-DaPqzJnW.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }]];
const Play = createLucideIcon("play", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ]
];
const Shield = createLucideIcon("shield", __iconNode);
const stats = [
  {
    label: "Prediction Accuracy",
    value: "94.7%",
    icon: TrendingUp,
    color: "text-primary"
  },
  {
    label: "AI Models Active",
    value: "12",
    icon: Zap,
    color: "text-secondary"
  },
  {
    label: "Assets Monitored",
    value: "50K+",
    icon: Shield,
    color: "text-accent"
  }
];
function HeroSection() {
  const scrollTo = (id) => {
    var _a;
    (_a = document.querySelector(id)) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "hero",
      "data-ocid": "hero.section",
      className: "relative min-h-screen flex flex-col items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 z-0",
            style: {
              backgroundImage: "url(/assets/generated/hero-dashboard.dim_1200x700.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center top",
              opacity: 0.15
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 z-0 bg-gradient-to-b from-transparent via-background/50 to-background" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-5xl mx-auto text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: -20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5 },
              className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border-neon-blue glow-blue mb-8",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-primary animate-pulse-glow" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-primary tracking-wider uppercase", children: "Live AI Intelligence Platform" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.h1,
            {
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.7, delay: 0.1 },
              className: "text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "AI-Powered" }),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", { className: "hidden sm:block" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-full", children: "Real-Time Financial" }),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", { className: "hidden sm:block" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "Intelligence." })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.p,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.7, delay: 0.2 },
              className: "text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed",
              children: "Unlock predictive insights, analyze market sentiment, and trade with the edge of advanced machine learning. Experience the future of finance — powered by multi-modal deep learning and transformer-based forecasting."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6, delay: 0.35 },
              className: "flex flex-col sm:flex-row items-center justify-center gap-4 mb-16",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  NeonButton,
                  {
                    variant: "primary",
                    size: "lg",
                    "data-ocid": "hero.start_predicting_button",
                    onClick: () => scrollTo("#dashboard"),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-5 h-5" }),
                      "Start Predicting",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  NeonButton,
                  {
                    variant: "ghost",
                    size: "lg",
                    "data-ocid": "hero.view_dashboard_button",
                    onClick: () => scrollTo("#dashboard"),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "w-4 h-4" }),
                      "View Dashboard"
                    ]
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.7, delay: 0.5 },
              className: "grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto",
              children: stats.map((stat, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { opacity: 0, scale: 0.9 },
                  animate: { opacity: 1, scale: 1 },
                  transition: { delay: 0.6 + i * 0.1 },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    GlassCard,
                    {
                      hover: true,
                      padding: "p-4",
                      className: "text-center",
                      "data-ocid": `hero.stat.${i + 1}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(stat.icon, { className: `w-5 h-5 ${stat.color} mx-auto mb-1.5` }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-2xl font-bold ${stat.color}`, children: stat.value }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-0.5", children: stat.label })
                      ]
                    }
                  )
                },
                stat.label
              ))
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 1.2 },
            className: "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-[1px] h-12 bg-gradient-to-b from-primary/60 to-transparent animate-float" })
          }
        )
      ]
    }
  );
}
export {
  HeroSection as default
};
