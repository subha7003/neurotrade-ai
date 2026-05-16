import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/hooks/useAuth";
import {
  useAddToWatchlist,
  usePredictionHistoryAll,
  useRemoveFromWatchlist,
  useUserStats,
  useWatchlist,
} from "@/hooks/useBackend";
import type { SignalType } from "@/types/market";
import { Link } from "@tanstack/react-router";
import {
  Activity,
  BarChart2,
  BookOpen,
  Brain,
  Plus,
  Star,
  Target,
  TrendingDown,
  TrendingUp,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

// ─── Helpers ─────────────────────────────────────────────────────────────────

const _SIGNAL_STYLE: Record<SignalType, string> = {
  BUY: "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
  SELL: "text-rose-400 bg-rose-400/10 border-rose-400/30",
  HOLD: "text-amber-400 bg-amber-400/10 border-amber-400/30",
};

const DIR_STYLE: Record<"UP" | "DOWN" | "SIDEWAYS", string> = {
  UP: "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
  DOWN: "text-rose-400 bg-rose-400/10 border-rose-400/30",
  SIDEWAYS: "text-amber-400 bg-amber-400/10 border-amber-400/30",
};

const DIR_ICON: Record<"UP" | "DOWN" | "SIDEWAYS", typeof TrendingUp> = {
  UP: TrendingUp,
  DOWN: TrendingDown,
  SIDEWAYS: Activity,
};

function formatTime(ts: number): string {
  const diff = Date.now() - ts;
  if (diff < 60_000) return "just now";
  if (diff < 3_600_000) return `${Math.floor(diff / 60_000)}m ago`;
  if (diff < 86_400_000) return `${Math.floor(diff / 3_600_000)}h ago`;
  return `${Math.floor(diff / 86_400_000)}d ago`;
}

// ─── Mock placeholder data shown when not authenticated ───────────────────────

const MOCK_HISTORY_PLACEHOLDER = [
  {
    id: "m1",
    ticker: "NVDA",
    direction: "UP" as const,
    confidence: 0.87,
    volatility: 0.24,
    timestamp: Date.now() - 3_600_000,
  },
  {
    id: "m2",
    ticker: "AAPL",
    direction: "SIDEWAYS" as const,
    confidence: 0.72,
    volatility: 0.15,
    timestamp: Date.now() - 14_400_000,
  },
  {
    id: "m3",
    ticker: "TSLA",
    direction: "DOWN" as const,
    confidence: 0.81,
    volatility: 0.38,
    timestamp: Date.now() - 86_400_000,
  },
];

const MOCK_WATCHLIST_PLACEHOLDER = ["NVDA", "AAPL", "META"];

const MOCK_STATS_PLACEHOLDER = {
  totalPredictions: 0,
  accuracyRate: 0,
  wins: 0,
  losses: 0,
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function StatCard({
  label,
  value,
  icon: Icon,
  accent,
  index,
}: {
  label: string;
  value: string;
  icon: typeof Target;
  accent: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: index * 0.07, duration: 0.4, ease: "easeOut" }}
      data-ocid={`portfolio.stat.item.${index + 1}`}
      className="relative overflow-hidden glass-card p-5 border border-white/5 group"
      style={{
        boxShadow: `0 0 30px -10px var(--${accent}-glow, transparent)`,
      }}
    >
      {/* Gradient border shimmer */}
      <div
        className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.6 0.25 250 / 0.12), oklch(0.65 0.24 310 / 0.08) 50%, oklch(0.65 0.21 200 / 0.12))",
        }}
      />
      <div className="flex items-start justify-between mb-3">
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
          {label}
        </span>
        <div
          className="p-1.5 rounded-lg"
          style={{ background: "oklch(0.6 0.25 250 / 0.12)" }}
        >
          <Icon className="w-3.5 h-3.5 text-primary" />
        </div>
      </div>
      <div className={`text-2xl font-bold font-display ${accent}`}>{value}</div>
    </motion.div>
  );
}

function AuthBanner({ onLogin }: { onLogin: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      data-ocid="portfolio.auth_banner"
      className="glass-card p-5 mb-8 border border-primary/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.11 0.02 250 / 0.8), oklch(0.11 0.02 310 / 0.8))",
      }}
    >
      <div className="flex items-center gap-3">
        <div
          className="p-2 rounded-lg"
          style={{ background: "oklch(0.6 0.25 250 / 0.15)" }}
        >
          <Brain className="w-5 h-5 text-primary" />
        </div>
        <div>
          <p className="text-sm font-semibold">
            Sign in to save your predictions and watchlist
          </p>
          <p className="text-xs text-muted-foreground mt-0.5">
            Your data is shown as a preview. Log in to persist it across
            sessions.
          </p>
        </div>
      </div>
      <Button
        type="button"
        size="sm"
        onClick={onLogin}
        data-ocid="portfolio.auth_login_button"
        className="shrink-0 bg-primary text-primary-foreground hover:bg-primary/90"
      >
        Sign In
      </Button>
    </motion.div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function PortfolioContent() {
  const { isAuthenticated, login } = useAuth();
  const { data: statsData } = useUserStats();
  const { data: historyData = [] } = usePredictionHistoryAll();
  const { data: watchlistData = [] } = useWatchlist();
  const addMutation = useAddToWatchlist();
  const removeMutation = useRemoveFromWatchlist();

  const [tickerInput, setTickerInput] = useState("");

  // Use real data if authed, mock placeholders otherwise
  const stats = isAuthenticated
    ? {
        totalPredictions: statsData?.totalPredictions ?? 0,
        accuracyRate: statsData?.accuracyRate ?? 0,
        wins: Math.round(
          (statsData?.winRate ?? 0) * (statsData?.totalPredictions ?? 0),
        ),
        losses: Math.round(
          (1 - (statsData?.winRate ?? 0)) * (statsData?.totalPredictions ?? 0),
        ),
      }
    : MOCK_STATS_PLACEHOLDER;

  const history = isAuthenticated ? historyData : MOCK_HISTORY_PLACEHOLDER;
  const watchlistTickers: string[] = isAuthenticated
    ? watchlistData.map((e) => e.ticker)
    : MOCK_WATCHLIST_PLACEHOLDER;

  // Accuracy color
  const accPct = stats.accuracyRate * 100;
  const accColor =
    accPct >= 70
      ? "text-emerald-400"
      : accPct >= 50
        ? "text-amber-400"
        : "text-rose-400";

  const statCards = [
    {
      label: "Total Predictions",
      value: String(stats.totalPredictions),
      icon: BookOpen,
      accent: "text-primary",
    },
    {
      label: "Accuracy Rate",
      value: `${accPct.toFixed(1)}%`,
      icon: Target,
      accent: accColor,
    },
    {
      label: "Winning Predictions",
      value: String(stats.wins),
      icon: TrendingUp,
      accent: "text-emerald-400",
    },
    {
      label: "Losing Predictions",
      value: String(stats.losses),
      icon: TrendingDown,
      accent: "text-rose-400",
    },
  ];

  function handleAddTicker() {
    const t = tickerInput.trim().toUpperCase();
    if (!t) return;
    addMutation.mutate(t);
    setTickerInput("");
  }

  return (
    <div className="min-h-screen bg-background pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <h1
            className="text-3xl sm:text-4xl font-bold font-display"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.7 0.25 250), oklch(0.72 0.24 310))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            My Portfolio
          </h1>
          <p className="text-muted-foreground mt-1.5 text-sm">
            Your AI prediction history, watchlist, and performance stats.
          </p>
        </motion.div>

        {/* Auth banner */}
        {!isAuthenticated && <AuthBanner onLogin={login} />}

        {/* ── Stats row ───────────────────────────────────────────────────── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {statCards.map((s, i) => (
            <StatCard
              key={s.label}
              label={s.label}
              value={s.value}
              icon={s.icon}
              accent={s.accent}
              index={i}
            />
          ))}
        </div>

        {/* ── Prediction history table ─────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="glass-card p-6 mb-6 border border-white/5"
        >
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-base font-semibold flex items-center gap-2">
              <BarChart2 className="w-4 h-4 text-primary" />
              Prediction History
            </h2>
            {!isAuthenticated && (
              <span className="text-xs text-muted-foreground italic">
                Preview — sign in to see your real history
              </span>
            )}
          </div>

          {history.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              data-ocid="portfolio.history.empty_state"
              className="flex flex-col items-center justify-center py-12 gap-3 text-center"
            >
              <Brain className="w-10 h-10 text-muted-foreground/40" />
              <p className="text-muted-foreground text-sm">
                No predictions yet — start predicting!
              </p>
              <Link to="/predict">
                <Button
                  type="button"
                  size="sm"
                  variant="outline"
                  className="border-primary/30 text-primary hover:bg-primary/10"
                >
                  Run your first prediction
                </Button>
              </Link>
            </motion.div>
          ) : (
            <div
              data-ocid="portfolio.history_table"
              className="overflow-x-auto"
            >
              {/* Table header */}
              <div className="grid grid-cols-5 gap-2 px-3 py-2 text-xs font-medium text-muted-foreground uppercase tracking-wider border-b border-white/5 mb-1">
                <span>Ticker</span>
                <span>Trend</span>
                <span className="text-right">Confidence</span>
                <span className="text-right">Volatility</span>
                <span className="text-right">Time</span>
              </div>
              {history.map((entry, i) => {
                const DirIcon = DIR_ICON[entry.direction];
                return (
                  <motion.div
                    key={entry.id}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.35 + i * 0.05 }}
                    data-ocid={`portfolio.history.item.${i + 1}`}
                    className="grid grid-cols-5 gap-2 px-3 py-3.5 text-sm border-b border-white/5 last:border-0 hover:bg-white/3 rounded-lg transition-colors items-center"
                  >
                    <span className="font-bold font-mono text-xs tracking-wider">
                      {entry.ticker}
                    </span>
                    <div>
                      <Badge
                        className={`text-[10px] border gap-1 ${DIR_STYLE[entry.direction]}`}
                      >
                        <DirIcon className="w-2.5 h-2.5" />
                        {entry.direction}
                      </Badge>
                    </div>
                    <span className="text-right font-semibold tabular-nums">
                      {(entry.confidence * 100).toFixed(1)}%
                    </span>
                    <span className="text-right text-muted-foreground tabular-nums">
                      {(entry.volatility * 100).toFixed(1)}%
                    </span>
                    <span className="text-right text-xs text-muted-foreground">
                      {formatTime(entry.timestamp)}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          )}
        </motion.div>

        {/* ── Watchlist ─────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.4 }}
          className="glass-card p-6 border border-white/5"
        >
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-base font-semibold flex items-center gap-2">
              <Star className="w-4 h-4 text-amber-400" />
              Watchlist
            </h2>
            {!isAuthenticated && (
              <span className="text-xs text-muted-foreground italic">
                Preview
              </span>
            )}
          </div>

          {/* Add ticker input */}
          <div className="flex gap-2 mb-5">
            <Input
              value={tickerInput}
              onChange={(e) => setTickerInput(e.target.value.toUpperCase())}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleAddTicker();
              }}
              placeholder="Add ticker (e.g. GOOGL)"
              maxLength={6}
              className="font-mono uppercase tracking-wider text-sm h-9 bg-white/5 border-white/10 focus:border-primary/50"
              data-ocid="portfolio.watchlist.input"
            />
            <Button
              type="button"
              size="sm"
              onClick={handleAddTicker}
              disabled={addMutation.isPending || !tickerInput.trim()}
              data-ocid="portfolio.watchlist.add_button"
              className="h-9 px-3 bg-primary/80 hover:bg-primary text-primary-foreground"
            >
              <Plus className="w-4 h-4" />
            </Button>
          </div>

          {/* Ticker pills */}
          {watchlistTickers.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              data-ocid="portfolio.watchlist.empty_state"
              className="flex flex-col items-center py-8 gap-2 text-center"
            >
              <Star className="w-8 h-8 text-muted-foreground/30" />
              <p className="text-muted-foreground text-sm">
                Your watchlist is empty. Add tickers above.
              </p>
            </motion.div>
          ) : (
            <div
              className="flex flex-wrap gap-2"
              data-ocid="portfolio.watchlist_pills"
            >
              <AnimatePresence>
                {watchlistTickers.map((ticker, i) => {
                  const entry = watchlistData.find((e) => e.ticker === ticker);
                  const positive = (entry?.change24h ?? 0) >= 0;
                  return (
                    <motion.div
                      key={`ticker-${ticker}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.7 }}
                      transition={{ delay: i * 0.04 }}
                      data-ocid={`portfolio.watchlist.item.${i + 1}`}
                      className="flex items-center gap-1 pl-3 pr-1 py-1.5 rounded-full text-xs font-mono font-bold border transition-all group"
                      style={{
                        background: "oklch(0.15 0.02 250 / 0.8)",
                        borderColor: "oklch(0.6 0.25 250 / 0.25)",
                      }}
                    >
                      <span className="tracking-wider">{ticker}</span>
                      {entry && (
                        <span
                          className={`text-[10px] ml-1 ${positive ? "text-emerald-400" : "text-rose-400"}`}
                        >
                          {positive ? "+" : ""}
                          {entry.change24h.toFixed(2)}%
                        </span>
                      )}
                      {/* Quick predict */}
                      <Link to="/predict" search={{ ticker }}>
                        <button
                          type="button"
                          data-ocid={`portfolio.watchlist.predict_button.${i + 1}`}
                          className="ml-1 p-1 rounded-full hover:bg-primary/20 transition-colors"
                          title={`Predict ${ticker}`}
                        >
                          <Zap className="w-2.5 h-2.5 text-primary" />
                        </button>
                      </Link>
                      {/* Remove */}
                      {isAuthenticated && (
                        <button
                          type="button"
                          data-ocid={`portfolio.watchlist.remove_button.${i + 1}`}
                          onClick={() => removeMutation.mutate(ticker)}
                          className="p-1 rounded-full hover:bg-rose-500/20 transition-colors"
                          title={`Remove ${ticker}`}
                        >
                          <X className="w-2.5 h-2.5 text-muted-foreground hover:text-rose-400" />
                        </button>
                      )}
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
