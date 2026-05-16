import { j as jsxRuntimeExports } from "./index-DZ-iRrHU.js";
import { G as GlassCard } from "./GlassCard-DyUzIlVr.js";
import { c as createLucideIcon, m as motion } from "./Header-eVOqwmYY.js";
import { C as ChartNoAxesColumn } from "./chart-no-axes-column-B4-WNcb2.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
const Info = createLucideIcon("info", __iconNode$1);
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
      d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
      key: "1gvzjb"
    }
  ],
  ["path", { d: "M9 18h6", key: "x1upvd" }],
  ["path", { d: "M10 22h4", key: "ceow96" }]
];
const Lightbulb = createLucideIcon("lightbulb", __iconNode);
const features = [
  { label: "Volume Surge", value: 0.87, color: "from-primary to-primary/40" },
  {
    label: "Sentiment Score",
    value: 0.73,
    color: "from-secondary to-secondary/40"
  },
  { label: "Price Momentum", value: 0.65, color: "from-accent to-accent/40" },
  { label: "RSI Divergence", value: 0.54, color: "from-primary to-primary/40" },
  {
    label: "News Velocity",
    value: 0.48,
    color: "from-secondary to-secondary/40"
  },
  { label: "Sector Rotation", value: 0.38, color: "from-accent to-accent/40" }
];
const attentionCells = Array.from({ length: 64 }, (_, i) => {
  const row = Math.floor(i / 8);
  const col = i % 8;
  const intensity = Math.max(
    0,
    1 - (Math.abs(row - 3) + Math.abs(col - 4)) * 0.15
  );
  return { id: `cell-r${row}-c${col}`, intensity };
});
function ExplainableAISection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      id: "explainability",
      "data-ocid": "explainability.section",
      className: "relative py-24 px-4 sm:px-6 lg:px-8",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.6 },
            className: "text-center mb-14",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block text-xs font-semibold text-secondary uppercase tracking-widest mb-3", children: "Explainable AI" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl sm:text-5xl font-bold mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "Understand" }),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-blue-purple", children: "Every Decision" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-2xl mx-auto", children: "Full transparency into the AI's reasoning — SHAP feature importance and attention heatmaps reveal exactly why a prediction was made." })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, x: -30 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              transition: { duration: 0.6 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                GlassCard,
                {
                  glowColor: "purple",
                  padding: "p-6",
                  "data-ocid": "explainability.shap_card",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ChartNoAxesColumn, { className: "w-4 h-4 text-secondary" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children: "Feature Importance (SHAP)" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto text-xs px-2 py-0.5 rounded bg-secondary/10 border border-secondary/30 text-secondary", children: "NVDA — BUY" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-3", children: features.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        "data-ocid": `explainability.feature.${i + 1}`,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs mb-1.5", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: f.label }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-foreground", children: [
                              (f.value * 100).toFixed(0),
                              "%"
                            ] })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 rounded-full bg-white/5 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            motion.div,
                            {
                              className: `h-full rounded-full bg-gradient-to-r ${f.color}`,
                              initial: { width: 0 },
                              whileInView: { width: `${f.value * 100}%` },
                              viewport: { once: true },
                              transition: {
                                duration: 1,
                                delay: i * 0.1,
                                ease: "easeOut"
                              }
                            }
                          ) })
                        ]
                      },
                      f.label
                    )) })
                  ]
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, x: 30 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true },
                transition: { duration: 0.6 },
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  GlassCard,
                  {
                    glowColor: "cyan",
                    padding: "p-6",
                    "data-ocid": "explainability.heatmap_card",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "w-4 h-4 text-accent" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children: "Attention Heatmap" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto text-xs text-muted-foreground", children: "Transformer layer 6" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "grid gap-0.5",
                          style: { gridTemplateColumns: "repeat(8, 1fr)" },
                          children: attentionCells.map((cell, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                            motion.div,
                            {
                              className: "aspect-square rounded-sm",
                              style: {
                                background: `oklch(${0.4 + cell.intensity * 0.25} ${cell.intensity * 0.25} 250 / ${cell.intensity})`
                              },
                              initial: { opacity: 0 },
                              whileInView: { opacity: 1 },
                              viewport: { once: true },
                              transition: { delay: i * 5e-3 }
                            },
                            cell.id
                          ))
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-3 text-xs text-muted-foreground", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Low attention" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 w-24 rounded-full bg-gradient-to-r from-white/5 to-primary" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "High attention" })
                      ] })
                    ]
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.6, delay: 0.15 },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  GlassCard,
                  {
                    glowColor: "blue",
                    padding: "p-5",
                    "data-ocid": "explainability.why_panel",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Lightbulb, { className: "w-4 h-4 text-primary" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-sm mb-1", children: "Why this prediction?" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: "Strong volume surge (+87%) combined with bullish sentiment from 3,400 analyzed articles drove the BUY signal. Price momentum and RSI divergence from the 20-day baseline confirmed the breakout pattern." }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mt-3", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs px-2 py-0.5 rounded bg-primary/10 border border-primary/20 text-primary", children: "Volume +87%" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs px-2 py-0.5 rounded bg-accent/10 border border-accent/20 text-accent", children: "Sentiment 73%" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs px-2 py-0.5 rounded bg-secondary/10 border border-secondary/20 text-secondary", children: "RSI Cross" })
                        ] })
                      ] })
                    ] })
                  }
                )
              }
            )
          ] })
        ] })
      ] })
    }
  );
}
export {
  ExplainableAISection as default
};
