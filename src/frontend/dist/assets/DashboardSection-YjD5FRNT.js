import { j as jsxRuntimeExports } from "./index-DZ-iRrHU.js";
import { G as GlassCard } from "./GlassCard-DyUzIlVr.js";
import { m as motion, T as TrendingUp } from "./Header-eVOqwmYY.js";
import { R as ResponsiveContainer, A as AreaChart, C as CartesianGrid, X as XAxis, Y as YAxis, T as Tooltip, a as Area } from "./AreaChart-BF6iXp9r.js";
import { A as Activity } from "./activity-CT8NSU8b.js";
import { T as TrendingDown } from "./trending-down-BRKGhd1Y.js";
import { C as ChartNoAxesColumn } from "./chart-no-axes-column-B4-WNcb2.js";
const priceData = [
  { time: "Jan", nvda: 480, tsla: 220, aapl: 185 },
  { time: "Feb", nvda: 520, tsla: 195, aapl: 190 },
  { time: "Mar", nvda: 610, tsla: 210, aapl: 175 },
  { time: "Apr", nvda: 580, tsla: 230, aapl: 182 },
  { time: "May", nvda: 720, tsla: 245, aapl: 195 },
  { time: "Jun", nvda: 810, tsla: 260, aapl: 210 },
  { time: "Jul", nvda: 780, tsla: 240, aapl: 225 },
  { time: "Aug", nvda: 870, tsla: 255, aapl: 218 },
  { time: "Sep", nvda: 920, tsla: 270, aapl: 230 },
  { time: "Oct", nvda: 990, tsla: 285, aapl: 238 }
];
const signals = [
  { ticker: "NVDA", signal: "BUY", confidence: 94, change: "+2.4%", up: true },
  { ticker: "TSLA", signal: "HOLD", confidence: 71, change: "+0.3%", up: true },
  { ticker: "AAPL", signal: "BUY", confidence: 88, change: "+1.1%", up: true },
  {
    ticker: "MSFT",
    signal: "HOLD",
    confidence: 65,
    change: "-0.4%",
    up: false
  },
  {
    ticker: "META",
    signal: "SELL",
    confidence: 82,
    change: "-1.8%",
    up: false
  }
];
const signalColors = {
  BUY: "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
  HOLD: "text-yellow-400 bg-yellow-400/10 border-yellow-400/30",
  SELL: "text-red-400 bg-red-400/10 border-red-400/30"
};
const CustomTooltip = ({
  active,
  payload,
  label
}) => {
  if (!active || !(payload == null ? void 0 : payload.length)) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-3 text-xs border-white/10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-1", children: label }),
    payload.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { color: p.color }, children: [
      p.name.toUpperCase(),
      ": $",
      p.value
    ] }, p.name))
  ] });
};
function DashboardSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      id: "dashboard",
      "data-ocid": "dashboard.section",
      className: "relative py-24 px-4 sm:px-6 lg:px-8",
      style: {
        background: "linear-gradient(180deg, transparent 0%, oklch(0.06 0.01 250 / 0.4) 50%, transparent 100%)"
      },
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
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block text-xs font-semibold text-accent uppercase tracking-widest mb-3", children: "Live Analytics Dashboard" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl sm:text-5xl font-bold mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-cyan-blue", children: "Institutional-Grade" }),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "Intelligence" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground max-w-xl mx-auto", children: "Real-time signals, portfolio analytics, and AI-driven insights in one unified view." })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, x: -30 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              transition: { duration: 0.6 },
              className: "lg:col-span-2",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                GlassCard,
                {
                  glowColor: "blue",
                  padding: "p-5",
                  "data-ocid": "dashboard.chart_card",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground", children: "Portfolio Performance" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "AI-tracked positions YTD" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 text-xs", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-primary" }),
                          "NVDA"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-secondary" }),
                          "TSLA"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-accent" }),
                          "AAPL"
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 260, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AreaChart, { data: priceData, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "blueGrad", x1: "0", y1: "0", x2: "0", y2: "1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "stop",
                            {
                              offset: "0%",
                              stopColor: "oklch(0.6 0.25 250)",
                              stopOpacity: 0.3
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "stop",
                            {
                              offset: "100%",
                              stopColor: "oklch(0.6 0.25 250)",
                              stopOpacity: 0
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "purpleGrad", x1: "0", y1: "0", x2: "0", y2: "1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "stop",
                            {
                              offset: "0%",
                              stopColor: "oklch(0.65 0.24 310)",
                              stopOpacity: 0.25
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "stop",
                            {
                              offset: "100%",
                              stopColor: "oklch(0.65 0.24 310)",
                              stopOpacity: 0
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "cyanGrad", x1: "0", y1: "0", x2: "0", y2: "1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "stop",
                            {
                              offset: "0%",
                              stopColor: "oklch(0.65 0.21 200)",
                              stopOpacity: 0.25
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "stop",
                            {
                              offset: "100%",
                              stopColor: "oklch(0.65 0.21 200)",
                              stopOpacity: 0
                            }
                          )
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        CartesianGrid,
                        {
                          strokeDasharray: "3 3",
                          stroke: "rgba(255,255,255,0.05)"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        XAxis,
                        {
                          dataKey: "time",
                          tick: { fill: "oklch(0.55 0.03 250)", fontSize: 11 },
                          axisLine: false,
                          tickLine: false
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        YAxis,
                        {
                          tick: { fill: "oklch(0.55 0.03 250)", fontSize: 11 },
                          axisLine: false,
                          tickLine: false
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { content: /* @__PURE__ */ jsxRuntimeExports.jsx(CustomTooltip, {}) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Area,
                        {
                          type: "monotone",
                          dataKey: "nvda",
                          stroke: "oklch(0.6 0.25 250)",
                          strokeWidth: 2,
                          fill: "url(#blueGrad)"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Area,
                        {
                          type: "monotone",
                          dataKey: "tsla",
                          stroke: "oklch(0.65 0.24 310)",
                          strokeWidth: 2,
                          fill: "url(#purpleGrad)"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Area,
                        {
                          type: "monotone",
                          dataKey: "aapl",
                          stroke: "oklch(0.65 0.21 200)",
                          strokeWidth: 2,
                          fill: "url(#cyanGrad)"
                        }
                      )
                    ] }) })
                  ]
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, x: 30 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              transition: { duration: 0.6, delay: 0.1 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                GlassCard,
                {
                  glowColor: "purple",
                  padding: "p-5",
                  className: "h-full",
                  "data-ocid": "dashboard.signals_card",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-4 h-4 text-secondary" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground", children: "AI Signals" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto text-xs text-muted-foreground", children: "Live" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-emerald-400 animate-pulse" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-3", children: signals.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        "data-ocid": `dashboard.signal.${i + 1}`,
                        className: "flex items-center justify-between p-3 rounded-lg bg-white/3 border border-white/5 hover:border-white/10 transition-smooth",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center", children: s.up ? /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-3.5 h-3.5 text-primary" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingDown, { className: "w-3.5 h-3.5 text-red-400" }) }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: s.ticker }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "p",
                                {
                                  className: `text-xs ${s.up ? "text-emerald-400" : "text-red-400"}`,
                                  children: s.change
                                }
                              )
                            ] })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-end gap-1", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "span",
                              {
                                className: `text-xs font-bold px-2 py-0.5 rounded border ${signalColors[s.signal]}`,
                                children: s.signal
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
                              s.confidence,
                              "%"
                            ] })
                          ] })
                        ]
                      },
                      s.ticker
                    )) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 pt-4 border-t border-white/5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs mb-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground flex items-center gap-1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(ChartNoAxesColumn, { className: "w-3 h-3" }),
                          " Avg. Confidence"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-semibold", children: "80%" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 rounded-full bg-white/5 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        motion.div,
                        {
                          className: "h-full rounded-full bg-gradient-to-r from-primary to-secondary",
                          initial: { width: 0 },
                          whileInView: { width: "80%" },
                          viewport: { once: true },
                          transition: { duration: 1.2, delay: 0.5, ease: "easeOut" }
                        }
                      ) })
                    ] })
                  ]
                }
              )
            }
          )
        ] })
      ] })
    }
  );
}
export {
  DashboardSection as default
};
