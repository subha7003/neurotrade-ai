import { Badge } from "@/components/ui/badge";
import {
  useAlerts,
  useMarketData,
  useMarketOverview,
  useSignals,
} from "@/hooks/useBackend";
import type {
  MarketAlert,
  MarketOverview,
  SignalType,
  TradingSignal,
} from "@/types/market";
import {
  Activity,
  AlertTriangle,
  BarChart2,
  Bell,
  BrainCircuit,
  ChevronRight,
  Clock,
  Cpu,
  Minus,
  RadioTower,
  TrendingDown,
  TrendingUp,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// ─── Constants ────────────────────────────────────────────────────────────────

const TICKERS = ["NVDA", "TSLA", "AAPL", "MSFT", "AMZN", "GOOGL"] as const;
type Ticker = (typeof TICKERS)[number];

const SIGNAL_GLOW: Record<SignalType, string> = {
  BUY: "shadow-[0_0_12px_rgba(52,211,153,0.5)] border-emerald-400/40",
  SELL: "shadow-[0_0_12px_rgba(248,113,113,0.5)] border-rose-400/40",
  HOLD: "shadow-[0_0_12px_rgba(251,191,36,0.5)] border-amber-400/40",
};

const SIGNAL_TEXT: Record<SignalType, string> = {
  BUY: "text-emerald-400 bg-emerald-400/10",
  SELL: "text-rose-400 bg-rose-400/10",
  HOLD: "text-amber-400 bg-amber-400/10",
};

const SIGNAL_BAR: Record<SignalType, string> = {
  BUY: "bg-emerald-400",
  SELL: "bg-rose-400",
  HOLD: "bg-amber-400",
};

const SEVERITY_CONFIG: Record<
  MarketAlert["severity"],
  { text: string; badge: string; glow: string; icon: string }
> = {
  critical: {
    text: "text-rose-300",
    badge: "text-rose-300 bg-rose-400/15 border-rose-400/40",
    glow: "border-rose-400/30 shadow-[0_0_16px_rgba(248,113,113,0.2)]",
    icon: "text-rose-300",
  },
  high: {
    text: "text-rose-400",
    badge: "text-rose-400 bg-rose-400/10 border-rose-400/30",
    glow: "border-rose-400/20",
    icon: "text-rose-400",
  },
  medium: {
    text: "text-amber-400",
    badge: "text-amber-400 bg-amber-400/10 border-amber-400/30",
    glow: "border-amber-400/20",
    icon: "text-amber-400",
  },
  low: {
    text: "text-sky-400",
    badge: "text-sky-400 bg-sky-400/10 border-sky-400/30",
    glow: "border-sky-400/20",
    icon: "text-sky-400",
  },
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function SignalIcon({ signal }: { signal: SignalType }) {
  if (signal === "BUY") return <TrendingUp className="w-3 h-3" />;
  if (signal === "SELL") return <TrendingDown className="w-3 h-3" />;
  return <Minus className="w-3 h-3" />;
}

function PulseDot({ signal }: { signal: SignalType }) {
  const color =
    signal === "BUY"
      ? "bg-emerald-400"
      : signal === "SELL"
        ? "bg-rose-400"
        : "bg-amber-400";
  return (
    <span className="relative flex h-2.5 w-2.5">
      <span
        className={`animate-ping absolute inline-flex h-full w-full rounded-full ${color} opacity-60`}
      />
      <span
        className={`relative inline-flex rounded-full h-2.5 w-2.5 ${color}`}
      />
    </span>
  );
}

function MarketCard({ item, index }: { item: MarketOverview; index: number }) {
  const positive = item.change >= 0;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      data-ocid={`dashboard.market_card.item.${index + 1}`}
      className="glass-card-hover p-4 cursor-default"
    >
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-xs font-bold font-mono tracking-widest text-foreground">
          {item.ticker}
        </span>
        <span
          className={`text-[11px] font-semibold ${
            positive ? "text-emerald-400" : "text-rose-400"
          }`}
        >
          {positive ? "+" : ""}
          {item.changePct.toFixed(2)}%
        </span>
      </div>
      <div className="text-lg font-bold text-foreground">
        ${item.price.toLocaleString()}
      </div>
      <div className="text-[10px] text-muted-foreground mt-1">
        {item.sector}
      </div>
    </motion.div>
  );
}

function SignalCard({
  sig,
  index,
}: {
  sig: TradingSignal;
  index: number;
}) {
  const strengthPct = Math.round(sig.confidence * 100);
  return (
    <motion.div
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.08 }}
      data-ocid={`dashboard.signal.item.${index + 1}`}
      className={`glass-card p-4 border ${
        SIGNAL_GLOW[sig.signal]
      } transition-smooth`}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2.5">
          <PulseDot signal={sig.signal} />
          <span className="font-mono font-bold text-sm tracking-widest">
            {sig.ticker}
          </span>
        </div>
        <Badge
          className={`text-[10px] font-bold border flex items-center gap-1 ${
            SIGNAL_TEXT[sig.signal]
          } border-current/30`}
        >
          <SignalIcon signal={sig.signal} />
          {sig.signal}
        </Badge>
      </div>

      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground">Strength</span>
          <span
            className={`font-semibold ${
              sig.signal === "BUY"
                ? "text-emerald-400"
                : sig.signal === "SELL"
                  ? "text-rose-400"
                  : "text-amber-400"
            }`}
          >
            {strengthPct}%
          </span>
        </div>
        <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${strengthPct}%` }}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
            className={`h-full rounded-full ${SIGNAL_BAR[sig.signal]}`}
          />
        </div>
      </div>

      <div className="flex items-center justify-between mt-3 text-[11px] text-muted-foreground">
        <span>
          ${sig.price.toLocaleString()}{" "}
          <ChevronRight className="inline w-2.5 h-2.5" />
          <span className="text-foreground/70">
            ${sig.targetPrice.toLocaleString()}
          </span>
        </span>
        <span>SL ${sig.stopLoss.toLocaleString()}</span>
      </div>
    </motion.div>
  );
}

function AlertCard({
  alert,
  index,
}: {
  alert: MarketAlert;
  index: number;
}) {
  const cfg = SEVERITY_CONFIG[alert.severity];
  const relativeTime = (() => {
    const diff = Date.now() - alert.timestamp;
    if (diff < 60_000) return `${Math.round(diff / 1000)}s ago`;
    if (diff < 3_600_000) return `${Math.round(diff / 60_000)}m ago`;
    return `${Math.round(diff / 3_600_000)}h ago`;
  })();

  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 24 }}
      transition={{ delay: index * 0.07 }}
      data-ocid={`dashboard.alert.item.${index + 1}`}
      className={`glass-card p-4 border ${
        cfg.glow
      } flex items-start gap-3 transition-smooth`}
    >
      <AlertTriangle
        className={`w-4 h-4 mt-0.5 shrink-0 ${cfg.icon} ${
          alert.severity === "critical" ? "animate-pulse" : ""
        }`}
      />
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-mono font-bold text-xs">{alert.ticker}</span>
          <Badge className={`text-[10px] border ${cfg.badge}`}>
            {alert.severity}
          </Badge>
          <span className="text-[10px] text-muted-foreground ml-auto">
            {relativeTime}
          </span>
        </div>
        <p className={`text-xs ${cfg.text} leading-relaxed`}>{alert.message}</p>
      </div>
    </motion.div>
  );
}

function LiveChart({ ticker }: { ticker: string }) {
  const { data, isLoading } = useMarketData(ticker);
  const chartData = (data ?? [])
    .slice(-40)
    .map((d, i) => ({ t: i, v: d.close, h: d.high, l: d.low }));

  const minVal = Math.min(...chartData.map((d) => d.v)) * 0.999;
  const maxVal = Math.max(...chartData.map((d) => d.v)) * 1.001;

  if (isLoading) {
    return (
      <div
        className="h-56 flex items-center justify-center"
        data-ocid="dashboard.chart.loading_state"
      >
        <span className="text-muted-foreground text-sm">Loading chart…</span>
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={224}>
      <AreaChart
        data={chartData}
        margin={{ top: 4, right: 4, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor="oklch(0.6 0.25 250)"
              stopOpacity={0.45}
            />
            <stop
              offset="95%"
              stopColor="oklch(0.6 0.25 250)"
              stopOpacity={0.0}
            />
          </linearGradient>
        </defs>
        <CartesianGrid
          strokeDasharray="3 3"
          stroke="rgba(255,255,255,0.04)"
          vertical={false}
        />
        <XAxis dataKey="t" hide />
        <YAxis domain={[minVal, maxVal]} hide width={0} />
        <Tooltip
          contentStyle={{
            background: "rgba(8,8,24,0.92)",
            border: "1px solid rgba(100,130,255,0.25)",
            borderRadius: 8,
            fontSize: 12,
          }}
          formatter={(v: number) => [`$${v.toFixed(2)}`, "Price"]}
          labelFormatter={() => ""}
          cursor={{ stroke: "rgba(100,130,255,0.3)", strokeWidth: 1 }}
        />
        <Area
          type="monotoneX"
          dataKey="v"
          stroke="oklch(0.6 0.25 250)"
          strokeWidth={2}
          fill="url(#areaGrad)"
          isAnimationActive
          animationDuration={600}
          dot={false}
          activeDot={{
            r: 4,
            fill: "oklch(0.6 0.25 250)",
            stroke: "rgba(255,255,255,0.5)",
            strokeWidth: 1.5,
          }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function DashboardContent() {
  const [selectedTicker, setSelectedTicker] = useState<Ticker>("NVDA");
  const [secondsAgo, setSecondsAgo] = useState(0);
  const lastUpdateRef = useRef(Date.now());

  const { data: market = [] } = useMarketOverview();
  const { data: signals = [] } = useSignals(selectedTicker);
  const { data: alerts = [] } = useAlerts();

  // "Last updated" counter — reset whenever market or signals data refreshes
  // biome-ignore lint/correctness/useExhaustiveDependencies: lastUpdateRef and setSecondsAgo are stable; market/signals trigger the reset
  useEffect(() => {
    lastUpdateRef.current = Date.now();
    setSecondsAgo(0);
  }, [market, signals]);

  useEffect(() => {
    const id = setInterval(() => {
      setSecondsAgo(Math.round((Date.now() - lastUpdateRef.current) / 1000));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  // KPI stats
  const kpiStats = [
    {
      label: "Active Models",
      value: "47",
      sub: "Running inference",
      icon: BrainCircuit,
      gradient: "from-primary/20 to-primary/5",
      border: "border-primary/30",
      glow: "shadow-[0_0_20px_rgba(56,139,255,0.15)]",
      color: "text-primary",
    },
    {
      label: "Accuracy Rate",
      value: "82.4%",
      sub: "Last 30 days",
      icon: Activity,
      gradient: "from-emerald-400/20 to-emerald-400/5",
      border: "border-emerald-400/30",
      glow: "shadow-[0_0_20px_rgba(52,211,153,0.15)]",
      color: "text-emerald-400",
    },
    {
      label: "Markets Monitored",
      value: "127",
      sub: "Global coverage",
      icon: RadioTower,
      gradient: "from-accent/20 to-accent/5",
      border: "border-accent/30",
      glow: "shadow-[0_0_20px_rgba(34,211,238,0.15)]",
      color: "text-accent",
    },
    {
      label: "Predictions Today",
      value: "1,284",
      sub: "Last 24 hrs",
      icon: Zap,
      gradient: "from-secondary/20 to-secondary/5",
      border: "border-secondary/30",
      glow: "shadow-[0_0_20px_rgba(168,85,247,0.15)]",
      color: "text-secondary",
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Page header ── */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex items-start justify-between flex-wrap gap-4"
          data-ocid="dashboard.header"
        >
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h1 className="text-3xl font-bold font-display text-gradient-blue-purple">
                Live Dashboard
              </h1>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-400/10 border border-emerald-400/30 text-emerald-400 text-xs font-bold tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse inline-block" />
                LIVE
              </span>
            </div>
            <p className="text-muted-foreground mt-0.5 text-sm flex items-center gap-1.5">
              Real-time AI-powered market intelligence
              <span className="inline-flex items-center gap-1 text-xs text-muted-foreground/60 border-l border-white/10 pl-1.5 ml-0.5">
                <Clock className="w-3 h-3" />
                Auto-refreshing
              </span>
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground glass-card px-3 py-2">
            <Clock className="w-3.5 h-3.5" />
            <span>
              Updated{" "}
              <span className="text-foreground font-medium">
                {secondsAgo}s ago
              </span>
            </span>
            <span className="relative flex h-2 w-2 ml-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
          </div>
        </motion.div>

        {/* ── KPI stat cards ── */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
          data-ocid="dashboard.kpi_row"
        >
          {kpiStats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.08 }}
              data-ocid={`dashboard.stat.item.${i + 1}`}
              className={`relative overflow-hidden glass-card border ${
                s.border
              } ${s.glow} p-5`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${
                  s.gradient
                } pointer-events-none`}
              />
              <div className="relative">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-muted-foreground font-medium">
                    {s.label}
                  </span>
                  <s.icon className={`w-4 h-4 ${s.color}`} />
                </div>
                <div className={`text-2xl font-bold font-display ${s.color}`}>
                  {s.value}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {s.sub}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Market overview grid ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
          data-ocid="dashboard.market_overview"
        >
          <h2 className="text-sm font-semibold uppercase tracking-wider mb-3 flex items-center gap-2 text-muted-foreground">
            <BarChart2 className="w-4 h-4 text-primary" />
            Market Overview
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {market.map((item, i) => (
              <MarketCard key={item.ticker} item={item} index={i} />
            ))}
          </div>
        </motion.div>

        {/* ── Ticker selector + chart ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28 }}
          className="glass-card p-6 mb-6"
          data-ocid="dashboard.chart_panel"
        >
          {/* Ticker pills */}
          <div className="flex items-center justify-between flex-wrap gap-3 mb-5">
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-primary" />
              <h2 className="text-base font-semibold">
                {selectedTicker} Live Chart
              </h2>
              <Badge className="text-[10px] border border-primary/40 text-primary bg-primary/10 ml-1 animate-pulse">
                LIVE
              </Badge>
            </div>
            <fieldset
              className="flex items-center gap-1.5 flex-wrap border-0 p-0 m-0"
              data-ocid="dashboard.ticker_selector"
              aria-label="Select ticker"
            >
              {TICKERS.map((t) => (
                <button
                  key={`ticker-${t}`}
                  type="button"
                  data-ocid={`dashboard.ticker.${t.toLowerCase()}_button`}
                  onClick={() => setSelectedTicker(t)}
                  className={`px-3 py-1 rounded-full text-xs font-mono font-bold transition-smooth border ${
                    selectedTicker === t
                      ? "bg-primary text-primary-foreground border-primary shadow-[0_0_10px_rgba(56,139,255,0.5)]"
                      : "bg-white/5 text-muted-foreground border-white/10 hover:border-primary/40 hover:text-foreground"
                  }`}
                >
                  {t}
                </button>
              ))}
            </fieldset>
          </div>
          <LiveChart ticker={selectedTicker} />
        </motion.div>

        {/* ── Signals + Alerts panels ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* AI Signals */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35 }}
            data-ocid="dashboard.signals_panel"
          >
            <h2 className="text-sm font-semibold uppercase tracking-wider mb-3 flex items-center gap-2 text-muted-foreground">
              <Activity className="w-4 h-4 text-primary" />
              AI Signals
              <Badge className="ml-auto text-[10px] border border-white/10 text-muted-foreground bg-white/5">
                {selectedTicker}
              </Badge>
            </h2>
            <div className="space-y-3" data-ocid="dashboard.signals_list">
              <AnimatePresence mode="popLayout">
                {signals.slice(0, 3).map((sig, i) => (
                  <SignalCard
                    key={`signal-${sig.ticker}-${sig.timestamp}`}
                    sig={sig}
                    index={i}
                  />
                ))}
              </AnimatePresence>
              {signals.length === 0 && (
                <div
                  className="glass-card p-6 text-center text-muted-foreground text-sm"
                  data-ocid="dashboard.signals.empty_state"
                >
                  No signals for {selectedTicker}
                </div>
              )}
            </div>
          </motion.div>

          {/* Alerts */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            data-ocid="dashboard.alerts_panel"
          >
            <h2 className="text-sm font-semibold uppercase tracking-wider mb-3 flex items-center gap-2 text-muted-foreground">
              <Bell className="w-4 h-4 text-amber-400" />
              Market Alerts
              {alerts.filter((a) => a.severity === "critical").length > 0 && (
                <Badge className="text-[10px] border border-rose-400/40 text-rose-300 bg-rose-400/10 animate-pulse ml-1">
                  {alerts.filter((a) => a.severity === "critical").length}{" "}
                  CRITICAL
                </Badge>
              )}
            </h2>
            <div className="space-y-3" data-ocid="dashboard.alerts_list">
              <AnimatePresence mode="popLayout">
                {alerts.map((alert, i) => (
                  <AlertCard
                    key={`alert-${alert.id}`}
                    alert={alert}
                    index={i}
                  />
                ))}
              </AnimatePresence>
              {alerts.length === 0 && (
                <div
                  className="glass-card p-6 text-center text-muted-foreground text-sm"
                  data-ocid="dashboard.alerts.empty_state"
                >
                  No active alerts
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
