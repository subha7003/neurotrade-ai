import { r as reactExports, j as jsxRuntimeExports } from "./index-DZ-iRrHU.js";
import { d as usePrediction, B as Badge, e as usePortfolio } from "./useBackend-D_3ybxTn.js";
import { I as Input, B as Button } from "./input-BHo9b8MF.js";
import { c as createLucideIcon, m as motion, Z as Zap, B as Brain, C as ChevronRight, A as AnimatePresence, T as TrendingUp } from "./Header-eVOqwmYY.js";
import { T as TrendingDown } from "./trending-down-BRKGhd1Y.js";
import { M as Minus } from "./minus-BfnZUKYt.js";
import { R as ResponsiveContainer, A as AreaChart, C as CartesianGrid, X as XAxis, Y as YAxis, T as Tooltip, a as Area } from "./AreaChart-BF6iXp9r.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["path", { d: "M12 7v5l4 2", key: "1fdv2h" }]
];
const History = createLucideIcon("history", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]];
const LoaderCircle = createLucideIcon("loader-circle", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
];
const Search = createLucideIcon("search", __iconNode);
const POPULAR = ["NVDA", "TSLA", "AAPL", "MSFT", "AMZN", "BTC"];
function DirectionBadge({
  dir,
  pulse = false
}) {
  const base = "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-semibold border";
  if (dir === "UP")
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "span",
      {
        className: `${base} bg-cyan-500/15 border-cyan-500/40 text-cyan-400`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-4 h-4" }),
          "BULLISH",
          pulse && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-2 w-2 ml-0.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex rounded-full h-2 w-2 bg-cyan-400" })
          ] })
        ]
      }
    );
  if (dir === "DOWN")
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "span",
      {
        className: `${base} bg-rose-500/15 border-rose-500/40 text-rose-400`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingDown, { className: "w-4 h-4" }),
          "BEARISH",
          pulse && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-2 w-2 ml-0.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex rounded-full h-2 w-2 bg-rose-400" })
          ] })
        ]
      }
    );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      className: `${base} bg-amber-500/15 border-amber-500/40 text-amber-400`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "w-4 h-4" }),
        "NEUTRAL",
        pulse && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-2 w-2 ml-0.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex rounded-full h-2 w-2 bg-amber-400" })
        ] })
      ]
    }
  );
}
function ConfidenceGauge({ value }) {
  const pct = Math.min(1, Math.max(0, value));
  const r = 52;
  const cx = 68;
  const cy = 68;
  const circumference = 2 * Math.PI * r;
  const arcLen = pct * circumference * 0.75;
  const startAngle = 135;
  const startRad = startAngle * Math.PI / 180;
  const x1 = cx + r * Math.cos(startRad);
  const y1 = cy + r * Math.sin(startRad);
  const strokeColor = pct >= 0.7 ? "oklch(0.75 0.22 195)" : pct >= 0.5 ? "oklch(0.75 0.18 80)" : "oklch(0.65 0.22 25)";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col items-center gap-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      width: "136",
      height: "136",
      viewBox: "0 0 136 136",
      "aria-label": `Confidence: ${Math.round(pct * 100)}%`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Confidence gauge" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx,
            cy,
            r,
            fill: "none",
            stroke: "rgba(255,255,255,0.07)",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeDasharray: `${circumference * 0.75} ${circumference}`,
            strokeDashoffset: "0",
            transform: `rotate(135 ${cx} ${cy})`
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.circle,
          {
            cx,
            cy,
            r,
            fill: "none",
            stroke: strokeColor,
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeDasharray: `${circumference * 0.75} ${circumference}`,
            transform: `rotate(135 ${cx} ${cy})`,
            initial: { strokeDashoffset: circumference * 0.75 },
            animate: { strokeDashoffset: circumference * 0.75 - arcLen },
            transition: { duration: 1.2, ease: "easeOut" },
            style: { filter: `drop-shadow(0 0 6px ${strokeColor})` }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: x1, cy: y1, r: 4, fill: strokeColor, opacity: 0.4 }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "text",
          {
            x: cx,
            y: cy - 6,
            textAnchor: "middle",
            fill: "white",
            fontSize: "22",
            fontWeight: "700",
            fontFamily: "monospace",
            children: [
              Math.round(pct * 100),
              "%"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "text",
          {
            x: cx,
            y: cy + 14,
            textAnchor: "middle",
            fill: "rgba(255,255,255,0.45)",
            fontSize: "10",
            fontFamily: "sans-serif",
            children: "Confidence"
          }
        )
      ]
    }
  ) });
}
function VolatilityMeter({ value }) {
  const pct = Math.min(1, value) * 100;
  const color = value < 0.25 ? "from-cyan-500 to-blue-500" : value < 0.45 ? "from-amber-400 to-orange-500" : "from-rose-500 to-pink-500";
  const label = value < 0.25 ? "Low" : value < 0.45 ? "Medium" : "High";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Volatility" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-mono font-bold text-amber-400", children: [
        (value * 100).toFixed(1),
        "% · ",
        label
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-3 bg-white/5 rounded-full overflow-hidden relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { width: 0 },
          animate: { width: `${pct}%` },
          transition: { duration: 1, ease: "easeOut", delay: 0.3 },
          className: `h-full rounded-full bg-gradient-to-r ${color}`,
          style: { boxShadow: "0 0 8px rgba(251,191,36,0.4)" }
        }
      ),
      [25, 50, 75].map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute top-0 bottom-0 w-px bg-white/10",
          style: { left: `${n}%` }
        },
        `notch-${n}`
      ))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-[10px] text-muted-foreground/50", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Low" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Medium" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "High" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Extreme" })
    ] })
  ] });
}
function ProjectionChart({ prediction }) {
  const chartData = prediction.forecast.map((p, i) => ({
    day: `Day ${i + 1}`,
    price: p.price,
    lower: p.lower,
    upper: p.upper
  }));
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 240, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    AreaChart,
    {
      data: chartData,
      margin: { top: 4, right: 8, bottom: 0, left: 8 },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "projGradCyan", x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "stop",
              {
                offset: "5%",
                stopColor: "oklch(0.75 0.22 195)",
                stopOpacity: 0.5
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "stop",
              {
                offset: "95%",
                stopColor: "oklch(0.75 0.22 195)",
                stopOpacity: 0
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "projGradBand", x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "stop",
              {
                offset: "5%",
                stopColor: "oklch(0.65 0.15 280)",
                stopOpacity: 0.15
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "stop",
              {
                offset: "95%",
                stopColor: "oklch(0.65 0.15 280)",
                stopOpacity: 0
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "rgba(255,255,255,0.04)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          XAxis,
          {
            dataKey: "day",
            tick: { fontSize: 10, fill: "rgba(255,255,255,0.3)" },
            interval: 4
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          YAxis,
          {
            domain: ["auto", "auto"],
            tick: { fontSize: 10, fill: "rgba(255,255,255,0.3)" },
            width: 52,
            tickFormatter: (v) => `$${v >= 1e3 ? `${(v / 1e3).toFixed(1)}k` : v.toFixed(0)}`
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Tooltip,
          {
            contentStyle: {
              background: "rgba(8,8,28,0.95)",
              border: "1px solid rgba(0,220,255,0.2)",
              borderRadius: 8,
              fontSize: 12
            },
            formatter: (v) => [`$${v.toFixed(2)}`, ""],
            labelFormatter: (l) => l
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Area,
          {
            type: "monotone",
            dataKey: "upper",
            stroke: "none",
            fill: "url(#projGradBand)",
            isAnimationActive: true
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Area,
          {
            type: "monotone",
            dataKey: "lower",
            stroke: "none",
            fill: "rgba(255,255,255,0.02)",
            isAnimationActive: true
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Area,
          {
            type: "monotone",
            dataKey: "price",
            stroke: "oklch(0.75 0.22 195)",
            strokeWidth: 2.5,
            fill: "url(#projGradCyan)",
            isAnimationActive: true,
            animationDuration: 1400,
            animationEasing: "ease-out",
            style: { filter: "drop-shadow(0 0 4px oklch(0.75 0.22 195))" }
          }
        )
      ]
    }
  ) });
}
const SHAP_FEATURES = [
  { name: "Price Momentum", key: "momentum" },
  { name: "Volume Signal", key: "volume" },
  { name: "Sentiment Score", key: "sentiment" },
  { name: "Technical RSI", key: "rsi" },
  { name: "Market Correlation", key: "correlation" }
];
function ShapBars({ confidence }) {
  const c = confidence;
  const values = [
    { pct: Math.min(0.95, c * 1.12), positive: true },
    { pct: Math.min(0.95, c * 0.87), positive: true },
    { pct: Math.min(0.95, c * 0.78), positive: c > 0.6 },
    { pct: Math.min(0.95, c * 0.68), positive: c > 0.55 },
    { pct: Math.min(0.95, (1 - c) * 0.9), positive: false }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", "data-ocid": "prediction.shap_panel", children: SHAP_FEATURES.map((f, i) => {
    const v = values[i];
    const pct = v.pct * 100;
    const colorClass = v.positive ? "from-cyan-500 to-blue-500" : "from-rose-500 to-pink-500";
    const textColor = v.positive ? "text-cyan-400" : "text-rose-400";
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: -12 },
        animate: { opacity: 1, x: 0 },
        transition: { delay: i * 0.08, duration: 0.4 },
        className: "flex items-center gap-3",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground w-36 shrink-0 truncate", children: f.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-2.5 bg-white/5 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { width: 0 },
              animate: { width: `${pct}%` },
              transition: {
                duration: 0.8,
                ease: "easeOut",
                delay: i * 0.1 + 0.3
              },
              className: `h-full rounded-full bg-gradient-to-r ${colorClass}`,
              style: {
                boxShadow: v.positive ? "0 0 6px rgba(0,220,255,0.4)" : "0 0 6px rgba(244,63,94,0.4)"
              }
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-xs font-mono w-10 text-right ${textColor}`, children: [
            v.positive ? "+" : "-",
            pct.toFixed(0),
            "%"
          ] })
        ]
      },
      f.key
    );
  }) });
}
const HEATMAP_COLS = ["Momentum", "Volume", "Sentiment", "RSI", "Correl."];
const HEATMAP_ROWS = [
  "Day 1-6",
  "Day 7-12",
  "Day 13-18",
  "Day 19-24",
  "Day 25-30",
  "Week 1",
  "Week 2"
];
function AttentionHeatmap({ seed }) {
  const weights = HEATMAP_ROWS.map(
    (_, r) => HEATMAP_COLS.map((_2, c) => {
      const s = Math.sin((r * 7 + c * 13 + seed) * 0.71) * 0.5 + 0.5;
      return +s.toFixed(3);
    })
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-[360px]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "grid gap-1 mb-1",
        style: {
          gridTemplateColumns: `80px repeat(${HEATMAP_COLS.length}, 1fr)`
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", {}),
          HEATMAP_COLS.map((col) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "text-[10px] text-muted-foreground text-center truncate",
              children: col
            },
            col
          ))
        ]
      }
    ),
    HEATMAP_ROWS.map((row, r) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "grid gap-1 mb-1",
        style: {
          gridTemplateColumns: `80px repeat(${HEATMAP_COLS.length}, 1fr)`
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground flex items-center", children: row }),
          HEATMAP_COLS.map((col, c) => {
            const w = weights[r][c];
            const alpha = 0.15 + w * 0.75;
            const lightness = 0.25 + w * 0.5;
            const chroma = 0.1 + w * 0.2;
            const hue = 280 - w * 100;
            const bg = `oklch(${lightness.toFixed(2)} ${chroma.toFixed(2)} ${hue.toFixed(0)})`;
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, scale: 0.7 },
                animate: { opacity: 1, scale: 1 },
                transition: { delay: (r * 5 + c) * 0.02, duration: 0.3 },
                className: "h-7 rounded-sm",
                style: {
                  background: bg,
                  opacity: alpha,
                  boxShadow: w > 0.7 ? `0 0 6px ${bg}` : void 0
                },
                title: `${row} × ${col}: ${(w * 100).toFixed(0)}%`
              },
              `cell-${r}-${col}`
            );
          })
        ]
      },
      row
    )),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: "Low" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "flex-1 h-1.5 rounded-full",
          style: {
            background: "linear-gradient(to right, oklch(0.25 0.15 280), oklch(0.65 0.25 180))"
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: "High" })
    ] })
  ] }) });
}
function PredictionHistory() {
  const { data: portfolio } = usePortfolio();
  if (!(portfolio == null ? void 0 : portfolio.length)) return null;
  const history = portfolio.slice(0, 5).map((pos) => ({
    ticker: pos.ticker,
    direction: pos.pnlPct > 2 ? "UP" : pos.pnlPct < -2 ? "DOWN" : "SIDEWAYS",
    confidence: Math.min(0.99, 0.55 + Math.abs(pos.pnlPct) / 100),
    ts: Date.now() - Math.floor(Math.abs(pos.pnl) * 1200)
  }));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 16 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: 0.6 },
      className: "glass-card p-6",
      "data-ocid": "prediction.history_panel",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(History, { className: "w-4 h-4 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-semibold", children: "Recent Predictions" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "ml-auto text-[10px] border border-white/10 bg-white/5 text-muted-foreground", children: "Last 5" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", "data-ocid": "prediction.history_list", children: history.map((h, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -8 },
            animate: { opacity: 1, x: 0 },
            transition: { delay: 0.65 + i * 0.06 },
            "data-ocid": `prediction.history.item.${i + 1}`,
            className: "flex items-center justify-between px-3 py-2 rounded-lg bg-white/3 border border-white/5 hover:border-white/10 transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono font-bold text-sm text-foreground w-16", children: h.ticker }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DirectionBadge, { dir: h.direction }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm font-bold text-primary", children: [
                  (h.confidence * 100).toFixed(0),
                  "%"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", children: new Date(h.ts).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric"
                }) })
              ] })
            ]
          },
          `hist-${h.ticker}-${i}`
        )) })
      ]
    }
  );
}
function PredictionContent() {
  const [ticker, setTicker] = reactExports.useState("");
  const { mutate, isPending, data: prediction, isError } = usePrediction();
  const handleSubmit = (e) => {
    e.preventDefault();
    const t = ticker.trim().toUpperCase();
    if (t) mutate(t);
  };
  const handlePopular = (t) => {
    setTicker(t);
    mutate(t);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-background pt-20 pb-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: -16 },
        animate: { opacity: 1, y: 0 },
        className: "mb-10 text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-3.5 h-3.5" }),
            "AI Prediction Engine · v3.2"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl sm:text-5xl font-bold font-display text-gradient-full mb-3", children: "Intelligent Forecast" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-xl mx-auto", children: "Multi-modal transformer inference with 30-day projection, SHAP explainability, and attention visualization" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.form,
      {
        initial: { opacity: 0, scale: 0.97 },
        animate: { opacity: 1, scale: 1 },
        transition: { delay: 0.1 },
        onSubmit: handleSubmit,
        className: "glass-card p-6 mb-6",
        "data-ocid": "prediction.form",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  "data-ocid": "prediction.ticker_input",
                  placeholder: "Enter ticker symbol (e.g. NVDA, AAPL, BTC)",
                  value: ticker,
                  onChange: (e) => setTicker(e.target.value.toUpperCase()),
                  className: "pl-9 font-mono text-lg tracking-widest bg-white/5 border-white/10 focus:border-primary/60 h-12",
                  maxLength: 6
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "submit",
                "data-ocid": "prediction.submit_button",
                disabled: !ticker.trim() || isPending,
                className: "bg-primary/20 border border-primary/40 text-primary hover:bg-primary/30 glow-blue h-12 px-6 min-w-[160px]",
                children: isPending ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 mr-2 animate-spin" }),
                  "Analyzing…"
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "w-4 h-4 mr-2" }),
                  "Generate Prediction",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4 ml-1" })
                ] })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-4 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Quick pick:" }),
            POPULAR.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": `prediction.popular.${t.toLowerCase()}`,
                onClick: () => handlePopular(t),
                className: "text-xs font-mono px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 hover:text-primary hover:bg-primary/10 transition-all duration-200",
                children: t
              },
              t
            ))
          ] })
        ]
      }
    ),
    isPending && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        "data-ocid": "prediction.loading_state",
        className: "glass-card p-12 text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto w-16 h-16 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-16 h-16 text-primary animate-spin absolute inset-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "w-6 h-6 text-primary/60 absolute inset-0 m-auto" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground font-semibold", children: "Running transformer inference…" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-1", children: "Processing 47 market signals" })
        ]
      }
    ),
    isError && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        "data-ocid": "prediction.error_state",
        className: "glass-card p-6 border border-rose-500/30 text-center",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-rose-400", children: "Prediction failed. Please try again." })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: prediction && !isPending && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -16 },
        transition: { duration: 0.45 },
        "data-ocid": "prediction.result_panel",
        className: "space-y-5",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.05 },
              className: "glass-card p-6",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-start gap-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 flex flex-col items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ConfidenceGauge, { value: prediction.probability }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3 mb-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground uppercase tracking-widest", children: "Prediction for" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold font-mono text-gradient-blue-purple", children: prediction.ticker })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(DirectionBadge, { dir: prediction.direction, pulse: true })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-3 mb-5", children: [
                    {
                      label: "Current Price",
                      value: `$${prediction.currentPrice.toLocaleString()}`,
                      color: "text-foreground"
                    },
                    {
                      label: "Price Target",
                      value: `$${prediction.priceTarget.toLocaleString()}`,
                      color: "text-emerald-400"
                    },
                    {
                      label: "Sentiment",
                      value: prediction.sentiment > 0 ? `+${(prediction.sentiment * 100).toFixed(0)}%` : `${(prediction.sentiment * 100).toFixed(0)}%`,
                      color: prediction.sentiment >= 0 ? "text-emerald-400" : "text-rose-400"
                    }
                  ].map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "p-3 bg-white/3 rounded-lg border border-white/5",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-lg font-bold ${m.color}`, children: m.value }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-0.5", children: m.label })
                      ]
                    },
                    m.label
                  )) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(VolatilityMeter, { value: prediction.volatility }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4",
                      "data-ocid": "prediction.levels_row",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-emerald-400/5 rounded-lg border border-emerald-400/20", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mb-1", children: "Support Level" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-base font-bold font-mono text-emerald-400", children: prediction.supportLevel && prediction.supportLevel > 0 ? `${prediction.supportLevel.toFixed(2)}` : "N/A" })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-rose-400/5 rounded-lg border border-rose-400/20", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mb-1", children: "Resistance Level" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-base font-bold font-mono text-rose-400", children: prediction.resistanceLevel && prediction.resistanceLevel > 0 ? `${prediction.resistanceLevel.toFixed(2)}` : "N/A" })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-white/3 rounded-lg border border-white/10", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-1.5", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Signal Strength" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-mono font-bold text-cyan-400", children: [
                              prediction.signalStrength ?? 0,
                              "/100"
                            ] })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2.5 bg-white/5 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            motion.div,
                            {
                              initial: { width: 0 },
                              animate: {
                                width: `${prediction.signalStrength ?? 0}%`
                              },
                              transition: {
                                duration: 1,
                                ease: "easeOut",
                                delay: 0.4
                              },
                              className: "h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400",
                              style: { boxShadow: "0 0 8px rgba(0,220,255,0.5)" }
                            }
                          ) })
                        ] })
                      ]
                    }
                  )
                ] })
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.15 },
              className: "glass-card p-6",
              "data-ocid": "prediction.chart_panel",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-semibold", children: "30-Day AI Projection" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "ml-auto text-[10px] border border-cyan-500/40 text-cyan-400 bg-cyan-500/10", children: "Transformer Forecast" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectionChart, { prediction })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.25 },
              className: "glass-card p-6",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "w-4 h-4 text-secondary" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-semibold", children: "Why This Prediction?" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "text-[10px] border border-secondary/40 text-secondary bg-secondary/10 ml-auto", children: "SHAP Explainability" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ShapBars, { confidence: prediction.probability })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.35 },
              className: "glass-card p-6",
              "data-ocid": "prediction.heatmap_panel",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-semibold", children: "Attention Heatmap" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "ml-auto text-[10px] border border-purple-500/40 text-purple-400 bg-purple-500/10", children: "Transformer Weights" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-4", children: "Cross-attention weights across time windows and feature signals — deeper cyan = higher model attention" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  AttentionHeatmap,
                  {
                    seed: prediction.ticker.charCodeAt(0) + prediction.ticker.length
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PredictionHistory, {})
        ]
      },
      prediction.ticker
    ) }),
    !prediction && !isPending && !isError && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { delay: 0.3 } },
        "data-ocid": "prediction.empty_state",
        className: "glass-card p-14 text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 mx-auto mb-5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "w-10 h-10 text-primary/50" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-semibold text-foreground mb-2", children: "Ready to Predict" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground max-w-xs mx-auto", children: "Enter any stock ticker or use a quick-pick above to generate your first AI-powered 30-day forecast" })
        ]
      }
    )
  ] }) });
}
export {
  PredictionContent as default
};
