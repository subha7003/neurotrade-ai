import { r as reactExports, j as jsxRuntimeExports, L as Link } from "./index-DZ-iRrHU.js";
import { f as useUserStats, g as usePredictionHistoryAll, h as useWatchlist, i as useAddToWatchlist, j as useRemoveFromWatchlist, B as Badge } from "./useBackend-D_3ybxTn.js";
import { B as Button, I as Input } from "./input-BHo9b8MF.js";
import { c as createLucideIcon, u as useAuth, T as TrendingUp, m as motion, B as Brain, A as AnimatePresence, Z as Zap, X } from "./Header-eVOqwmYY.js";
import { T as TrendingDown } from "./trending-down-BRKGhd1Y.js";
import { C as ChartNoAxesColumn } from "./chart-no-axes-column-B4-WNcb2.js";
import { A as Activity } from "./activity-CT8NSU8b.js";
import { S as Star } from "./star-QLtOo_xu.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M12 7v14", key: "1akyts" }],
  [
    "path",
    {
      d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
      key: "ruj8y"
    }
  ]
];
const BookOpen = createLucideIcon("book-open", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
];
const Plus = createLucideIcon("plus", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
];
const Target = createLucideIcon("target", __iconNode);
const DIR_STYLE = {
  UP: "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
  DOWN: "text-rose-400 bg-rose-400/10 border-rose-400/30",
  SIDEWAYS: "text-amber-400 bg-amber-400/10 border-amber-400/30"
};
const DIR_ICON = {
  UP: TrendingUp,
  DOWN: TrendingDown,
  SIDEWAYS: Activity
};
function formatTime(ts) {
  const diff = Date.now() - ts;
  if (diff < 6e4) return "just now";
  if (diff < 36e5) return `${Math.floor(diff / 6e4)}m ago`;
  if (diff < 864e5) return `${Math.floor(diff / 36e5)}h ago`;
  return `${Math.floor(diff / 864e5)}d ago`;
}
const MOCK_HISTORY_PLACEHOLDER = [
  {
    id: "m1",
    ticker: "NVDA",
    direction: "UP",
    confidence: 0.87,
    volatility: 0.24,
    timestamp: Date.now() - 36e5
  },
  {
    id: "m2",
    ticker: "AAPL",
    direction: "SIDEWAYS",
    confidence: 0.72,
    volatility: 0.15,
    timestamp: Date.now() - 144e5
  },
  {
    id: "m3",
    ticker: "TSLA",
    direction: "DOWN",
    confidence: 0.81,
    volatility: 0.38,
    timestamp: Date.now() - 864e5
  }
];
const MOCK_WATCHLIST_PLACEHOLDER = ["NVDA", "AAPL", "META"];
const MOCK_STATS_PLACEHOLDER = {
  totalPredictions: 0,
  accuracyRate: 0,
  wins: 0,
  losses: 0
};
function StatCard({
  label,
  value,
  icon: Icon,
  accent,
  index
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20, scale: 0.95 },
      animate: { opacity: 1, y: 0, scale: 1 },
      transition: { delay: index * 0.07, duration: 0.4, ease: "easeOut" },
      "data-ocid": `portfolio.stat.item.${index + 1}`,
      className: "relative overflow-hidden glass-card p-5 border border-white/5 group",
      style: {
        boxShadow: `0 0 30px -10px var(--${accent}-glow, transparent)`
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500",
            style: {
              background: "linear-gradient(135deg, oklch(0.6 0.25 250 / 0.12), oklch(0.65 0.24 310 / 0.08) 50%, oklch(0.65 0.21 200 / 0.12))"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-muted-foreground uppercase tracking-wider", children: label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "p-1.5 rounded-lg",
              style: { background: "oklch(0.6 0.25 250 / 0.12)" },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-3.5 h-3.5 text-primary" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-2xl font-bold font-display ${accent}`, children: value })
      ]
    }
  );
}
function AuthBanner({ onLogin }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: -10 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.4 },
      "data-ocid": "portfolio.auth_banner",
      className: "glass-card p-5 mb-8 border border-primary/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",
      style: {
        background: "linear-gradient(135deg, oklch(0.11 0.02 250 / 0.8), oklch(0.11 0.02 310 / 0.8))"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "p-2 rounded-lg",
              style: { background: "oklch(0.6 0.25 250 / 0.15)" },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "w-5 h-5 text-primary" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: "Sign in to save your predictions and watchlist" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "Your data is shown as a preview. Log in to persist it across sessions." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            type: "button",
            size: "sm",
            onClick: onLogin,
            "data-ocid": "portfolio.auth_login_button",
            className: "shrink-0 bg-primary text-primary-foreground hover:bg-primary/90",
            children: "Sign In"
          }
        )
      ]
    }
  );
}
function PortfolioContent() {
  const { isAuthenticated, login } = useAuth();
  const { data: statsData } = useUserStats();
  const { data: historyData = [] } = usePredictionHistoryAll();
  const { data: watchlistData = [] } = useWatchlist();
  const addMutation = useAddToWatchlist();
  const removeMutation = useRemoveFromWatchlist();
  const [tickerInput, setTickerInput] = reactExports.useState("");
  const stats = isAuthenticated ? {
    totalPredictions: (statsData == null ? void 0 : statsData.totalPredictions) ?? 0,
    accuracyRate: (statsData == null ? void 0 : statsData.accuracyRate) ?? 0,
    wins: Math.round(
      ((statsData == null ? void 0 : statsData.winRate) ?? 0) * ((statsData == null ? void 0 : statsData.totalPredictions) ?? 0)
    ),
    losses: Math.round(
      (1 - ((statsData == null ? void 0 : statsData.winRate) ?? 0)) * ((statsData == null ? void 0 : statsData.totalPredictions) ?? 0)
    )
  } : MOCK_STATS_PLACEHOLDER;
  const history = isAuthenticated ? historyData : MOCK_HISTORY_PLACEHOLDER;
  const watchlistTickers = isAuthenticated ? watchlistData.map((e) => e.ticker) : MOCK_WATCHLIST_PLACEHOLDER;
  const accPct = stats.accuracyRate * 100;
  const accColor = accPct >= 70 ? "text-emerald-400" : accPct >= 50 ? "text-amber-400" : "text-rose-400";
  const statCards = [
    {
      label: "Total Predictions",
      value: String(stats.totalPredictions),
      icon: BookOpen,
      accent: "text-primary"
    },
    {
      label: "Accuracy Rate",
      value: `${accPct.toFixed(1)}%`,
      icon: Target,
      accent: accColor
    },
    {
      label: "Winning Predictions",
      value: String(stats.wins),
      icon: TrendingUp,
      accent: "text-emerald-400"
    },
    {
      label: "Losing Predictions",
      value: String(stats.losses),
      icon: TrendingDown,
      accent: "text-rose-400"
    }
  ];
  function handleAddTicker() {
    const t = tickerInput.trim().toUpperCase();
    if (!t) return;
    addMutation.mutate(t);
    setTickerInput("");
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-background pt-20 pb-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: -16 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.4 },
        className: "mb-8",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h1",
            {
              className: "text-3xl sm:text-4xl font-bold font-display",
              style: {
                background: "linear-gradient(135deg, oklch(0.7 0.25 250), oklch(0.72 0.24 310))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              },
              children: "My Portfolio"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-1.5 text-sm", children: "Your AI prediction history, watchlist, and performance stats." })
        ]
      }
    ),
    !isAuthenticated && /* @__PURE__ */ jsxRuntimeExports.jsx(AuthBanner, { onLogin: login }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8", children: statCards.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      StatCard,
      {
        label: s.label,
        value: s.value,
        icon: s.icon,
        accent: s.accent,
        index: i
      },
      s.label
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.3, duration: 0.4 },
        className: "glass-card p-6 mb-6 border border-white/5",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-base font-semibold flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChartNoAxesColumn, { className: "w-4 h-4 text-primary" }),
              "Prediction History"
            ] }),
            !isAuthenticated && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground italic", children: "Preview — sign in to see your real history" })
          ] }),
          history.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              "data-ocid": "portfolio.history.empty_state",
              className: "flex flex-col items-center justify-center py-12 gap-3 text-center",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "w-10 h-10 text-muted-foreground/40" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "No predictions yet — start predicting!" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/predict", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    type: "button",
                    size: "sm",
                    variant: "outline",
                    className: "border-primary/30 text-primary hover:bg-primary/10",
                    children: "Run your first prediction"
                  }
                ) })
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              "data-ocid": "portfolio.history_table",
              className: "overflow-x-auto",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-5 gap-2 px-3 py-2 text-xs font-medium text-muted-foreground uppercase tracking-wider border-b border-white/5 mb-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Ticker" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Trend" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-right", children: "Confidence" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-right", children: "Volatility" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-right", children: "Time" })
                ] }),
                history.map((entry, i) => {
                  const DirIcon = DIR_ICON[entry.direction];
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.div,
                    {
                      initial: { opacity: 0, x: -12 },
                      animate: { opacity: 1, x: 0 },
                      transition: { delay: 0.35 + i * 0.05 },
                      "data-ocid": `portfolio.history.item.${i + 1}`,
                      className: "grid grid-cols-5 gap-2 px-3 py-3.5 text-sm border-b border-white/5 last:border-0 hover:bg-white/3 rounded-lg transition-colors items-center",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold font-mono text-xs tracking-wider", children: entry.ticker }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          Badge,
                          {
                            className: `text-[10px] border gap-1 ${DIR_STYLE[entry.direction]}`,
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(DirIcon, { className: "w-2.5 h-2.5" }),
                              entry.direction
                            ]
                          }
                        ) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-right font-semibold tabular-nums", children: [
                          (entry.confidence * 100).toFixed(1),
                          "%"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-right text-muted-foreground tabular-nums", children: [
                          (entry.volatility * 100).toFixed(1),
                          "%"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-right text-xs text-muted-foreground", children: formatTime(entry.timestamp) })
                      ]
                    },
                    entry.id
                  );
                })
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.45, duration: 0.4 },
        className: "glass-card p-6 border border-white/5",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-base font-semibold flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-4 h-4 text-amber-400" }),
              "Watchlist"
            ] }),
            !isAuthenticated && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground italic", children: "Preview" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mb-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                value: tickerInput,
                onChange: (e) => setTickerInput(e.target.value.toUpperCase()),
                onKeyDown: (e) => {
                  if (e.key === "Enter") handleAddTicker();
                },
                placeholder: "Add ticker (e.g. GOOGL)",
                maxLength: 6,
                className: "font-mono uppercase tracking-wider text-sm h-9 bg-white/5 border-white/10 focus:border-primary/50",
                "data-ocid": "portfolio.watchlist.input"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "button",
                size: "sm",
                onClick: handleAddTicker,
                disabled: addMutation.isPending || !tickerInput.trim(),
                "data-ocid": "portfolio.watchlist.add_button",
                className: "h-9 px-3 bg-primary/80 hover:bg-primary text-primary-foreground",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" })
              }
            )
          ] }),
          watchlistTickers.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              "data-ocid": "portfolio.watchlist.empty_state",
              className: "flex flex-col items-center py-8 gap-2 text-center",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-8 h-8 text-muted-foreground/30" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Your watchlist is empty. Add tickers above." })
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "flex flex-wrap gap-2",
              "data-ocid": "portfolio.watchlist_pills",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: watchlistTickers.map((ticker, i) => {
                const entry = watchlistData.find((e) => e.ticker === ticker);
                const positive = ((entry == null ? void 0 : entry.change24h) ?? 0) >= 0;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, scale: 0.8 },
                    animate: { opacity: 1, scale: 1 },
                    exit: { opacity: 0, scale: 0.7 },
                    transition: { delay: i * 0.04 },
                    "data-ocid": `portfolio.watchlist.item.${i + 1}`,
                    className: "flex items-center gap-1 pl-3 pr-1 py-1.5 rounded-full text-xs font-mono font-bold border transition-all group",
                    style: {
                      background: "oklch(0.15 0.02 250 / 0.8)",
                      borderColor: "oklch(0.6 0.25 250 / 0.25)"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tracking-wider", children: ticker }),
                      entry && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "span",
                        {
                          className: `text-[10px] ml-1 ${positive ? "text-emerald-400" : "text-rose-400"}`,
                          children: [
                            positive ? "+" : "",
                            entry.change24h.toFixed(2),
                            "%"
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/predict", search: { ticker }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          "data-ocid": `portfolio.watchlist.predict_button.${i + 1}`,
                          className: "ml-1 p-1 rounded-full hover:bg-primary/20 transition-colors",
                          title: `Predict ${ticker}`,
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-2.5 h-2.5 text-primary" })
                        }
                      ) }),
                      isAuthenticated && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          "data-ocid": `portfolio.watchlist.remove_button.${i + 1}`,
                          onClick: () => removeMutation.mutate(ticker),
                          className: "p-1 rounded-full hover:bg-rose-500/20 transition-colors",
                          title: `Remove ${ticker}`,
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-2.5 h-2.5 text-muted-foreground hover:text-rose-400" })
                        }
                      )
                    ]
                  },
                  `ticker-${ticker}`
                );
              }) })
            }
          )
        ]
      }
    )
  ] }) });
}
export {
  PortfolioContent as default
};
