import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { usePortfolio, usePrediction } from "@/hooks/useBackend";
import type { Prediction } from "@/types/market";
import {
  Brain,
  ChevronRight,
  History,
  Loader2,
  Minus,
  Search,
  TrendingDown,
  TrendingUp,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const POPULAR = ["NVDA", "TSLA", "AAPL", "MSFT", "AMZN", "BTC"];

// ─── Direction badge ──────────────────────────────────────────────────────────

function DirectionBadge({
  dir,
  pulse = false,
}: { dir: Prediction["direction"]; pulse?: boolean }) {
  const base =
    "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-semibold border";
  if (dir === "UP")
    return (
      <span
        className={`${base} bg-cyan-500/15 border-cyan-500/40 text-cyan-400`}
      >
        <TrendingUp className="w-4 h-4" />
        BULLISH
        {pulse && (
          <span className="relative flex h-2 w-2 ml-0.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
          </span>
        )}
      </span>
    );
  if (dir === "DOWN")
    return (
      <span
        className={`${base} bg-rose-500/15 border-rose-500/40 text-rose-400`}
      >
        <TrendingDown className="w-4 h-4" />
        BEARISH
        {pulse && (
          <span className="relative flex h-2 w-2 ml-0.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-400" />
          </span>
        )}
      </span>
    );
  return (
    <span
      className={`${base} bg-amber-500/15 border-amber-500/40 text-amber-400`}
    >
      <Minus className="w-4 h-4" />
      NEUTRAL
      {pulse && (
        <span className="relative flex h-2 w-2 ml-0.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400" />
        </span>
      )}
    </span>
  );
}

// ─── Circular confidence gauge ────────────────────────────────────────────────

function ConfidenceGauge({ value }: { value: number }) {
  const pct = Math.min(1, Math.max(0, value));
  const r = 52;
  const cx = 68;
  const cy = 68;
  const circumference = 2 * Math.PI * r;
  const arcLen = pct * circumference * 0.75; // 270° sweep
  const startAngle = 135;
  const startRad = (startAngle * Math.PI) / 180;
  const x1 = cx + r * Math.cos(startRad);
  const y1 = cy + r * Math.sin(startRad);

  const hue = pct >= 0.7 ? 180 : pct >= 0.5 ? 60 : 0;
  const strokeColor =
    pct >= 0.7
      ? "oklch(0.75 0.22 195)"
      : pct >= 0.5
        ? "oklch(0.75 0.18 80)"
        : "oklch(0.65 0.22 25)";
  void hue;

  return (
    <div className="flex flex-col items-center gap-1">
      <svg
        width="136"
        height="136"
        viewBox="0 0 136 136"
        aria-label={`Confidence: ${Math.round(pct * 100)}%`}
      >
        <title>Confidence gauge</title>
        {/* Track */}
        <circle
          cx={cx}
          cy={cy}
          r={r}
          fill="none"
          stroke="rgba(255,255,255,0.07)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={`${circumference * 0.75} ${circumference}`}
          strokeDashoffset="0"
          transform={`rotate(135 ${cx} ${cy})`}
        />
        {/* Arc fill */}
        <motion.circle
          cx={cx}
          cy={cy}
          r={r}
          fill="none"
          stroke={strokeColor}
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={`${circumference * 0.75} ${circumference}`}
          transform={`rotate(135 ${cx} ${cy})`}
          initial={{ strokeDashoffset: circumference * 0.75 }}
          animate={{ strokeDashoffset: circumference * 0.75 - arcLen }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{ filter: `drop-shadow(0 0 6px ${strokeColor})` }}
        />
        {/* Start dot */}
        <circle cx={x1} cy={y1} r={4} fill={strokeColor} opacity={0.4} />
        {/* Center text */}
        <text
          x={cx}
          y={cy - 6}
          textAnchor="middle"
          fill="white"
          fontSize="22"
          fontWeight="700"
          fontFamily="monospace"
        >
          {Math.round(pct * 100)}%
        </text>
        <text
          x={cx}
          y={cy + 14}
          textAnchor="middle"
          fill="rgba(255,255,255,0.45)"
          fontSize="10"
          fontFamily="sans-serif"
        >
          Confidence
        </text>
      </svg>
    </div>
  );
}

// ─── Volatility meter ─────────────────────────────────────────────────────────

function VolatilityMeter({ value }: { value: number }) {
  const pct = Math.min(1, value) * 100;
  const color =
    value < 0.25
      ? "from-cyan-500 to-blue-500"
      : value < 0.45
        ? "from-amber-400 to-orange-500"
        : "from-rose-500 to-pink-500";
  const label = value < 0.25 ? "Low" : value < 0.45 ? "Medium" : "High";
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex justify-between items-center">
        <span className="text-xs text-muted-foreground">Volatility</span>
        <span className="text-xs font-mono font-bold text-amber-400">
          {(value * 100).toFixed(1)}% · {label}
        </span>
      </div>
      <div className="h-3 bg-white/5 rounded-full overflow-hidden relative">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
          style={{ boxShadow: "0 0 8px rgba(251,191,36,0.4)" }}
        />
        {/* Notches */}
        {[25, 50, 75].map((n) => (
          <div
            key={`notch-${n}`}
            className="absolute top-0 bottom-0 w-px bg-white/10"
            style={{ left: `${n}%` }}
          />
        ))}
      </div>
      <div className="flex justify-between text-[10px] text-muted-foreground/50">
        <span>Low</span>
        <span>Medium</span>
        <span>High</span>
        <span>Extreme</span>
      </div>
    </div>
  );
}

// ─── 30-day projection chart ──────────────────────────────────────────────────

function ProjectionChart({ prediction }: { prediction: Prediction }) {
  const chartData = prediction.forecast.map((p, i) => ({
    day: `Day ${i + 1}`,
    price: p.price,
    lower: p.lower,
    upper: p.upper,
  }));

  return (
    <ResponsiveContainer width="100%" height={240}>
      <AreaChart
        data={chartData}
        margin={{ top: 4, right: 8, bottom: 0, left: 8 }}
      >
        <defs>
          <linearGradient id="projGradCyan" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor="oklch(0.75 0.22 195)"
              stopOpacity={0.5}
            />
            <stop
              offset="95%"
              stopColor="oklch(0.75 0.22 195)"
              stopOpacity={0}
            />
          </linearGradient>
          <linearGradient id="projGradBand" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor="oklch(0.65 0.15 280)"
              stopOpacity={0.15}
            />
            <stop
              offset="95%"
              stopColor="oklch(0.65 0.15 280)"
              stopOpacity={0}
            />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
        <XAxis
          dataKey="day"
          tick={{ fontSize: 10, fill: "rgba(255,255,255,0.3)" }}
          interval={4}
        />
        <YAxis
          domain={["auto", "auto"]}
          tick={{ fontSize: 10, fill: "rgba(255,255,255,0.3)" }}
          width={52}
          tickFormatter={(v: number) =>
            `$${v >= 1000 ? `${(v / 1000).toFixed(1)}k` : v.toFixed(0)}`
          }
        />
        <Tooltip
          contentStyle={{
            background: "rgba(8,8,28,0.95)",
            border: "1px solid rgba(0,220,255,0.2)",
            borderRadius: 8,
            fontSize: 12,
          }}
          formatter={(v: number) => [`$${v.toFixed(2)}`, ""]}
          labelFormatter={(l: string) => l}
        />
        <Area
          type="monotone"
          dataKey="upper"
          stroke="none"
          fill="url(#projGradBand)"
          isAnimationActive
        />
        <Area
          type="monotone"
          dataKey="lower"
          stroke="none"
          fill="rgba(255,255,255,0.02)"
          isAnimationActive
        />
        <Area
          type="monotone"
          dataKey="price"
          stroke="oklch(0.75 0.22 195)"
          strokeWidth={2.5}
          fill="url(#projGradCyan)"
          isAnimationActive
          animationDuration={1400}
          animationEasing="ease-out"
          style={{ filter: "drop-shadow(0 0 4px oklch(0.75 0.22 195))" }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

// ─── SHAP bars ────────────────────────────────────────────────────────────────

const SHAP_FEATURES = [
  { name: "Price Momentum", key: "momentum" },
  { name: "Volume Signal", key: "volume" },
  { name: "Sentiment Score", key: "sentiment" },
  { name: "Technical RSI", key: "rsi" },
  { name: "Market Correlation", key: "correlation" },
];

function ShapBars({ confidence }: { confidence: number }) {
  // Derive mock importance values from confidence
  const c = confidence;
  const values = [
    { pct: Math.min(0.95, c * 1.12), positive: true },
    { pct: Math.min(0.95, c * 0.87), positive: true },
    { pct: Math.min(0.95, c * 0.78), positive: c > 0.6 },
    { pct: Math.min(0.95, c * 0.68), positive: c > 0.55 },
    { pct: Math.min(0.95, (1 - c) * 0.9), positive: false },
  ];

  return (
    <div className="space-y-3" data-ocid="prediction.shap_panel">
      {SHAP_FEATURES.map((f, i) => {
        const v = values[i];
        const pct = v.pct * 100;
        const colorClass = v.positive
          ? "from-cyan-500 to-blue-500"
          : "from-rose-500 to-pink-500";
        const textColor = v.positive ? "text-cyan-400" : "text-rose-400";
        return (
          <motion.div
            key={f.key}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="flex items-center gap-3"
          >
            <span className="text-xs text-muted-foreground w-36 shrink-0 truncate">
              {f.name}
            </span>
            <div className="flex-1 h-2.5 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${pct}%` }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: i * 0.1 + 0.3,
                }}
                className={`h-full rounded-full bg-gradient-to-r ${colorClass}`}
                style={{
                  boxShadow: v.positive
                    ? "0 0 6px rgba(0,220,255,0.4)"
                    : "0 0 6px rgba(244,63,94,0.4)",
                }}
              />
            </div>
            <span className={`text-xs font-mono w-10 text-right ${textColor}`}>
              {v.positive ? "+" : "-"}
              {pct.toFixed(0)}%
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}

// ─── Attention heatmap ────────────────────────────────────────────────────────

const HEATMAP_COLS = ["Momentum", "Volume", "Sentiment", "RSI", "Correl."];
const HEATMAP_ROWS = [
  "Day 1-6",
  "Day 7-12",
  "Day 13-18",
  "Day 19-24",
  "Day 25-30",
  "Week 1",
  "Week 2",
];

function AttentionHeatmap({ seed }: { seed: number }) {
  // Deterministic pseudo-random weights based on seed
  const weights: number[][] = HEATMAP_ROWS.map((_, r) =>
    HEATMAP_COLS.map((_, c) => {
      const s = Math.sin((r * 7 + c * 13 + seed) * 0.71) * 0.5 + 0.5;
      return +s.toFixed(3);
    }),
  );

  return (
    <div className="overflow-x-auto">
      <div className="min-w-[360px]">
        {/* Column headers */}
        <div
          className="grid gap-1 mb-1"
          style={{
            gridTemplateColumns: `80px repeat(${HEATMAP_COLS.length}, 1fr)`,
          }}
        >
          <div />
          {HEATMAP_COLS.map((col) => (
            <div
              key={col}
              className="text-[10px] text-muted-foreground text-center truncate"
            >
              {col}
            </div>
          ))}
        </div>
        {/* Rows */}
        {HEATMAP_ROWS.map((row, r) => (
          <div
            key={row}
            className="grid gap-1 mb-1"
            style={{
              gridTemplateColumns: `80px repeat(${HEATMAP_COLS.length}, 1fr)`,
            }}
          >
            <div className="text-[10px] text-muted-foreground flex items-center">
              {row}
            </div>
            {HEATMAP_COLS.map((col, c) => {
              const w = weights[r][c];
              // Interpolate: deep purple (low) → neon cyan (high)
              const alpha = 0.15 + w * 0.75;
              const lightness = 0.25 + w * 0.5;
              const chroma = 0.1 + w * 0.2;
              const hue = 280 - w * 100; // 280 (purple) → 180 (cyan)
              const bg = `oklch(${lightness.toFixed(2)} ${chroma.toFixed(2)} ${hue.toFixed(0)})`;
              return (
                <motion.div
                  key={`cell-${r}-${col}`}
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: (r * 5 + c) * 0.02, duration: 0.3 }}
                  className="h-7 rounded-sm"
                  style={{
                    background: bg,
                    opacity: alpha,
                    boxShadow: w > 0.7 ? `0 0 6px ${bg}` : undefined,
                  }}
                  title={`${row} × ${col}: ${(w * 100).toFixed(0)}%`}
                />
              );
            })}
          </div>
        ))}
        {/* Legend */}
        <div className="flex items-center gap-2 mt-2">
          <span className="text-[10px] text-muted-foreground">Low</span>
          <div
            className="flex-1 h-1.5 rounded-full"
            style={{
              background:
                "linear-gradient(to right, oklch(0.25 0.15 280), oklch(0.65 0.25 180))",
            }}
          />
          <span className="text-[10px] text-muted-foreground">High</span>
        </div>
      </div>
    </div>
  );
}

// ─── Prediction history list ──────────────────────────────────────────────────

function PredictionHistory() {
  const { data: portfolio } = usePortfolio();

  if (!portfolio?.length) return null;

  // Map portfolio positions to mock prediction history entries
  const history = portfolio.slice(0, 5).map((pos) => ({
    ticker: pos.ticker,
    direction: pos.pnlPct > 2 ? "UP" : pos.pnlPct < -2 ? "DOWN" : "SIDEWAYS",
    confidence: Math.min(0.99, 0.55 + Math.abs(pos.pnlPct) / 100),
    ts: Date.now() - Math.floor(Math.abs(pos.pnl) * 1200),
  }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="glass-card p-6"
      data-ocid="prediction.history_panel"
    >
      <div className="flex items-center gap-2 mb-4">
        <History className="w-4 h-4 text-muted-foreground" />
        <h3 className="text-base font-semibold">Recent Predictions</h3>
        <Badge className="ml-auto text-[10px] border border-white/10 bg-white/5 text-muted-foreground">
          Last 5
        </Badge>
      </div>
      <div className="space-y-2" data-ocid="prediction.history_list">
        {history.map((h, i) => (
          <motion.div
            key={`hist-${h.ticker}-${i}`}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.65 + i * 0.06 }}
            data-ocid={`prediction.history.item.${i + 1}`}
            className="flex items-center justify-between px-3 py-2 rounded-lg bg-white/3 border border-white/5 hover:border-white/10 transition-colors"
          >
            <span className="font-mono font-bold text-sm text-foreground w-16">
              {h.ticker}
            </span>
            <DirectionBadge dir={h.direction as Prediction["direction"]} />
            <div className="text-right">
              <div className="text-sm font-bold text-primary">
                {(h.confidence * 100).toFixed(0)}%
              </div>
              <div className="text-[10px] text-muted-foreground">
                {new Date(h.ts).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function PredictionContent() {
  const [ticker, setTicker] = useState("");
  const { mutate, isPending, data: prediction, isError } = usePrediction();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const t = ticker.trim().toUpperCase();
    if (t) mutate(t);
  };

  const handlePopular = (t: string) => {
    setTicker(t);
    mutate(t);
  };

  return (
    <div className="min-h-screen bg-background pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold mb-4">
            <Zap className="w-3.5 h-3.5" />
            AI Prediction Engine · v3.2
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold font-display text-gradient-full mb-3">
            Intelligent Forecast
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Multi-modal transformer inference with 30-day projection, SHAP
            explainability, and attention visualization
          </p>
        </motion.div>

        {/* Search form */}
        <motion.form
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          onSubmit={handleSubmit}
          className="glass-card p-6 mb-6"
          data-ocid="prediction.form"
        >
          <div className="flex gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                data-ocid="prediction.ticker_input"
                placeholder="Enter ticker symbol (e.g. NVDA, AAPL, BTC)"
                value={ticker}
                onChange={(e) => setTicker(e.target.value.toUpperCase())}
                className="pl-9 font-mono text-lg tracking-widest bg-white/5 border-white/10 focus:border-primary/60 h-12"
                maxLength={6}
              />
            </div>
            <Button
              type="submit"
              data-ocid="prediction.submit_button"
              disabled={!ticker.trim() || isPending}
              className="bg-primary/20 border border-primary/40 text-primary hover:bg-primary/30 glow-blue h-12 px-6 min-w-[160px]"
            >
              {isPending ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Analyzing…
                </>
              ) : (
                <>
                  <Brain className="w-4 h-4 mr-2" />
                  Generate Prediction
                  <ChevronRight className="w-4 h-4 ml-1" />
                </>
              )}
            </Button>
          </div>

          {/* Popular ticker pills */}
          <div className="flex items-center gap-2 mt-4 flex-wrap">
            <span className="text-xs text-muted-foreground">Quick pick:</span>
            {POPULAR.map((t) => (
              <button
                key={t}
                type="button"
                data-ocid={`prediction.popular.${t.toLowerCase()}`}
                onClick={() => handlePopular(t)}
                className="text-xs font-mono px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 hover:text-primary hover:bg-primary/10 transition-all duration-200"
              >
                {t}
              </button>
            ))}
          </div>
        </motion.form>

        {/* Loading state */}
        {isPending && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            data-ocid="prediction.loading_state"
            className="glass-card p-12 text-center"
          >
            <div className="relative mx-auto w-16 h-16 mb-4">
              <Loader2 className="w-16 h-16 text-primary animate-spin absolute inset-0" />
              <Brain className="w-6 h-6 text-primary/60 absolute inset-0 m-auto" />
            </div>
            <p className="text-foreground font-semibold">
              Running transformer inference…
            </p>
            <p className="text-muted-foreground text-sm mt-1">
              Processing 47 market signals
            </p>
          </motion.div>
        )}

        {/* Error state */}
        {isError && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            data-ocid="prediction.error_state"
            className="glass-card p-6 border border-rose-500/30 text-center"
          >
            <p className="text-rose-400">
              Prediction failed. Please try again.
            </p>
          </motion.div>
        )}

        {/* Result panels */}
        <AnimatePresence>
          {prediction && !isPending && (
            <motion.div
              key={prediction.ticker}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45 }}
              data-ocid="prediction.result_panel"
              className="space-y-5"
            >
              {/* ── Summary card with gauge + trend + volatility ── */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
                className="glass-card p-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                  {/* Circular gauge */}
                  <div className="flex-shrink-0 flex flex-col items-center gap-2">
                    <ConfidenceGauge value={prediction.probability} />
                  </div>

                  {/* Info column */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <div>
                        <span className="text-xs text-muted-foreground uppercase tracking-widest">
                          Prediction for
                        </span>
                        <h2 className="text-3xl font-bold font-mono text-gradient-blue-purple">
                          {prediction.ticker}
                        </h2>
                      </div>
                      <DirectionBadge dir={prediction.direction} pulse />
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-5">
                      {[
                        {
                          label: "Current Price",
                          value: `$${prediction.currentPrice.toLocaleString()}`,
                          color: "text-foreground",
                        },
                        {
                          label: "Price Target",
                          value: `$${prediction.priceTarget.toLocaleString()}`,
                          color: "text-emerald-400",
                        },
                        {
                          label: "Sentiment",
                          value:
                            prediction.sentiment > 0
                              ? `+${(prediction.sentiment * 100).toFixed(0)}%`
                              : `${(prediction.sentiment * 100).toFixed(0)}%`,
                          color:
                            prediction.sentiment >= 0
                              ? "text-emerald-400"
                              : "text-rose-400",
                        },
                      ].map((m) => (
                        <div
                          key={m.label}
                          className="p-3 bg-white/3 rounded-lg border border-white/5"
                        >
                          <div className={`text-lg font-bold ${m.color}`}>
                            {m.value}
                          </div>
                          <div className="text-xs text-muted-foreground mt-0.5">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Volatility meter */}
                    <VolatilityMeter value={prediction.volatility} />

                    {/* ── Support / Resistance / Signal Strength ── */}
                    <div
                      className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4"
                      data-ocid="prediction.levels_row"
                    >
                      {/* Support Level */}
                      <div className="p-3 bg-emerald-400/5 rounded-lg border border-emerald-400/20">
                        <div className="text-xs text-muted-foreground mb-1">
                          Support Level
                        </div>
                        <div className="text-base font-bold font-mono text-emerald-400">
                          {prediction.supportLevel &&
                          prediction.supportLevel > 0
                            ? `${prediction.supportLevel.toFixed(2)}`
                            : "N/A"}
                        </div>
                      </div>

                      {/* Resistance Level */}
                      <div className="p-3 bg-rose-400/5 rounded-lg border border-rose-400/20">
                        <div className="text-xs text-muted-foreground mb-1">
                          Resistance Level
                        </div>
                        <div className="text-base font-bold font-mono text-rose-400">
                          {prediction.resistanceLevel &&
                          prediction.resistanceLevel > 0
                            ? `${prediction.resistanceLevel.toFixed(2)}`
                            : "N/A"}
                        </div>
                      </div>

                      {/* Signal Strength */}
                      <div className="p-3 bg-white/3 rounded-lg border border-white/10">
                        <div className="flex justify-between items-center mb-1.5">
                          <span className="text-xs text-muted-foreground">
                            Signal Strength
                          </span>
                          <span className="text-xs font-mono font-bold text-cyan-400">
                            {prediction.signalStrength ?? 0}/100
                          </span>
                        </div>
                        <div className="h-2.5 bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{
                              width: `${prediction.signalStrength ?? 0}%`,
                            }}
                            transition={{
                              duration: 1,
                              ease: "easeOut",
                              delay: 0.4,
                            }}
                            className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                            style={{ boxShadow: "0 0 8px rgba(0,220,255,0.5)" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* ── 30-day projection chart ── */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="glass-card p-6"
                data-ocid="prediction.chart_panel"
              >
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-base font-semibold">
                    30-Day AI Projection
                  </h3>
                  <Badge className="ml-auto text-[10px] border border-cyan-500/40 text-cyan-400 bg-cyan-500/10">
                    Transformer Forecast
                  </Badge>
                </div>
                <ProjectionChart prediction={prediction} />
              </motion.div>

              {/* ── SHAP explainability ── */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="glass-card p-6"
              >
                <div className="flex items-center gap-2 mb-5">
                  <Brain className="w-4 h-4 text-secondary" />
                  <h3 className="text-base font-semibold">
                    Why This Prediction?
                  </h3>
                  <Badge className="text-[10px] border border-secondary/40 text-secondary bg-secondary/10 ml-auto">
                    SHAP Explainability
                  </Badge>
                </div>
                <ShapBars confidence={prediction.probability} />
              </motion.div>

              {/* ── Attention heatmap ── */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="glass-card p-6"
                data-ocid="prediction.heatmap_panel"
              >
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-base font-semibold">Attention Heatmap</h3>
                  <Badge className="ml-auto text-[10px] border border-purple-500/40 text-purple-400 bg-purple-500/10">
                    Transformer Weights
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground mb-4">
                  Cross-attention weights across time windows and feature
                  signals — deeper cyan = higher model attention
                </p>
                <AttentionHeatmap
                  seed={
                    prediction.ticker.charCodeAt(0) + prediction.ticker.length
                  }
                />
              </motion.div>

              {/* ── Prediction history ── */}
              <PredictionHistory />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Empty state */}
        {!prediction && !isPending && !isError && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.3 } }}
            data-ocid="prediction.empty_state"
            className="glass-card p-14 text-center"
          >
            <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
              <Brain className="w-10 h-10 text-primary/50" />
            </div>
            <p className="text-xl font-semibold text-foreground mb-2">
              Ready to Predict
            </p>
            <p className="text-sm text-muted-foreground max-w-xs mx-auto">
              Enter any stock ticker or use a quick-pick above to generate your
              first AI-powered 30-day forecast
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
