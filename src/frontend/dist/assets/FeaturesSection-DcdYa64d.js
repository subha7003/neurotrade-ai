import { j as jsxRuntimeExports } from "./index-DZ-iRrHU.js";
import { G as GlassCard } from "./GlassCard-DyUzIlVr.js";
import { c as createLucideIcon, m as motion, T as TrendingUp, B as Brain, Z as Zap } from "./Header-eVOqwmYY.js";
import { T as TriangleAlert } from "./triangle-alert-BO8nQRBq.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
];
const Eye = createLucideIcon("eye", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  [
    "path",
    {
      d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
      key: "zw3jo"
    }
  ],
  [
    "path",
    {
      d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
      key: "1wduqc"
    }
  ],
  [
    "path",
    {
      d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
      key: "kqbvx6"
    }
  ]
];
const Layers = createLucideIcon("layers", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["rect", { x: "16", y: "16", width: "6", height: "6", rx: "1", key: "4q2zg0" }],
  ["rect", { x: "2", y: "16", width: "6", height: "6", rx: "1", key: "8cvhb9" }],
  ["rect", { x: "9", y: "2", width: "6", height: "6", rx: "1", key: "1egb70" }],
  ["path", { d: "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3", key: "1jsf9p" }],
  ["path", { d: "M12 12V8", key: "2874zd" }]
];
const Network = createLucideIcon("network", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
];
const RotateCcw = createLucideIcon("rotate-ccw", __iconNode);
const features = [
  {
    icon: TrendingUp,
    title: "Real-Time Market Prediction",
    description: "Transformer-based models analyze thousands of signals per second for live price forecasting.",
    color: "text-primary",
    glow: "blue"
  },
  {
    icon: Brain,
    title: "AI Sentiment Analysis",
    description: "Multi-modal NLP processes news, social feeds, and earnings calls to quantify market emotion.",
    color: "text-secondary",
    glow: "purple"
  },
  {
    icon: Layers,
    title: "Multi-Source Data Fusion",
    description: "Combines price action, fundamental data, and alternative datasets into a unified intelligence layer.",
    color: "text-accent",
    glow: "cyan"
  },
  {
    icon: Zap,
    title: "Smart Trading Signals",
    description: "Adaptive reinforcement learning generates high-confidence Buy, Sell, and Hold signals in milliseconds.",
    color: "text-primary",
    glow: "blue"
  },
  {
    icon: Network,
    title: "Graph Market Intelligence",
    description: "Dynamic knowledge graphs map sector relationships, revealing hidden correlations and contagion risks.",
    color: "text-secondary",
    glow: "purple"
  },
  {
    icon: Eye,
    title: "Explainable Predictions",
    description: "SHAP-based attribution and attention maps surface the exact factors driving every AI decision.",
    color: "text-accent",
    glow: "cyan"
  },
  {
    icon: RotateCcw,
    title: "Adaptive Learning Engine",
    description: "Continuously self-corrects by incorporating new market regimes, ensuring predictions stay current.",
    color: "text-primary",
    glow: "blue"
  },
  {
    icon: TriangleAlert,
    title: "Risk Analytics",
    description: "Portfolio-level VaR, drawdown simulation, and tail-risk assessment powered by Monte Carlo AI.",
    color: "text-secondary",
    glow: "purple"
  }
];
function FeaturesSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      id: "features",
      "data-ocid": "features.section",
      className: "relative py-24 px-4 sm:px-6 lg:px-8",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.6 },
            className: "text-center mb-16",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-3", children: "Platform Capabilities" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl sm:text-5xl font-bold mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "Intelligence Built for" }),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-blue-purple", children: "Modern Trading" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-2xl mx-auto", children: "Eight core AI modules working in concert to deliver an unfair informational advantage." })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5", children: features.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.5, delay: i * 0.07 },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              GlassCard,
              {
                hover: true,
                padding: "p-6",
                "data-ocid": `features.card.${i + 1}`,
                className: "h-full group",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 transition-smooth group-hover:scale-110 group-hover:border-white/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(f.icon, { className: `w-5 h-5 ${f.color}` }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-semibold text-foreground mb-2", children: f.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: f.description })
                ]
              }
            )
          },
          f.title
        )) })
      ] })
    }
  );
}
export {
  FeaturesSection as default
};
