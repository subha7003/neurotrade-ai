import { createActor } from "@/backend";
import type {
  AlertSeverity,
  MarketAlert as BackendMarketAlert,
  OHLC as BackendOHLC,
  Prediction as BackendPrediction,
  PredictionEntry as BackendPredictionEntry,
  TradingSignal as BackendTradingSignal,
  UserStats as BackendUserStats,
  MarketSummary,
  SignalDirection,
  TrendDirection,
} from "@/backend.d.ts";
import type {
  MarketAlert,
  MarketOverview,
  OHLC,
  PortfolioPosition,
  Prediction,
  PredictionEntry,
  ShapFeature,
  TradingSignal,
  UserStats,
  WatchlistEntry,
} from "@/types/market";
import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// ─── Type bridges ──────────────────────────────────────────────────────────────

function mapTrend(trend: TrendDirection): "UP" | "DOWN" | "SIDEWAYS" {
  if (trend === "bullish") return "UP";
  if (trend === "bearish") return "DOWN";
  return "SIDEWAYS";
}

function mapSignalDirection(
  direction: SignalDirection,
): "BUY" | "SELL" | "HOLD" {
  if (direction === "buy") return "BUY";
  if (direction === "sell") return "SELL";
  return "HOLD";
}

function mapAlertSeverity(
  severity: AlertSeverity,
): "low" | "medium" | "high" | "critical" {
  if (severity === "critical") return "critical";
  if (severity === "warning") return "high";
  return "low";
}

function mapBackendOHLC(o: BackendOHLC): OHLC {
  return {
    ticker: o.ticker,
    open: o.open,
    high: o.high,
    low: o.low,
    close: o.close,
    volume: Number(o.volume),
    timestamp: Number(o.timestamp),
  };
}

function mapBackendPrediction(
  p: BackendPrediction,
  ticker: string,
): Prediction {
  const direction = mapTrend(p.trend);
  const confidence = Number(p.confidence) / 100;
  const now = Number(p.timestamp) || Date.now();

  const forecast = p.projection.map(
    (val, i): PredictionEntry => ({
      timestamp: now + i * 86_400_000,
      price: +val.toFixed(2),
      lower: +(val * 0.97).toFixed(2),
      upper: +(val * 1.03).toFixed(2),
    }),
  );

  const defaultShap: ShapFeature[] = [
    {
      name: "Momentum (14d)",
      value: 0.82,
      importance: 0.28,
      direction: "positive",
    },
    {
      name: "Volume Trend",
      value: 0.61,
      importance: 0.21,
      direction: "positive",
    },
    {
      name: "Transformer Signal",
      value: 0.74,
      importance: 0.19,
      direction: "positive",
    },
    {
      name: "Sentiment Score",
      value: 0.55,
      importance: 0.14,
      direction: "positive",
    },
    {
      name: "Macro Correlation",
      value: -0.33,
      importance: 0.1,
      direction: "negative",
    },
    {
      name: "Sector Rotation",
      value: -0.21,
      importance: 0.08,
      direction: "negative",
    },
  ];

  const basePrice = forecast[0]?.price ?? p.supportLevel;
  const priceTarget =
    direction === "UP"
      ? +(basePrice * 1.07).toFixed(2)
      : direction === "DOWN"
        ? +(basePrice * 0.94).toFixed(2)
        : +(basePrice * 1.01).toFixed(2);

  return {
    ticker: ticker.toUpperCase(),
    currentPrice: basePrice,
    direction,
    probability: +confidence.toFixed(3),
    priceTarget,
    horizon: "1W",
    volatility: +p.volatility.toFixed(3),
    sentiment: +(confidence * 2 - 1).toFixed(3),
    forecast,
    shapFeatures: defaultShap,
    generatedAt: now,
    supportLevel: p.supportLevel ?? 0,
    resistanceLevel: p.resistanceLevel ?? 0,
    signalStrength: Number(p.signalStrength ?? 0n),
  };
}

function mapMarketSummaryToOverview(summary: MarketSummary): MarketOverview[] {
  return summary.topMovers.map((m) => ({
    ticker: m.ticker,
    price: m.price,
    change: +(m.price * (m.changePercent / 100)).toFixed(2),
    changePct: m.changePercent,
    volume: Number(m.volume),
    marketCap: 0,
    sector: "Technology",
  }));
}

function mapBackendAlert(
  alert: BackendMarketAlert,
  index: number,
): MarketAlert {
  return {
    id: `alert-${index}`,
    ticker: alert.ticker,
    type: "SIGNAL_CHANGE",
    message: alert.message,
    severity: mapAlertSeverity(alert.severity),
    timestamp: Number(alert.timestamp),
  };
}

function mapBackendTradingSignal(
  signal: BackendTradingSignal,
  price = 0,
): TradingSignal {
  return {
    ticker: signal.ticker,
    signal: mapSignalDirection(signal.direction),
    confidence: +signal.strength.toFixed(3),
    price,
    targetPrice: +(price * 1.05).toFixed(2),
    stopLoss: +(price * 0.95).toFixed(2),
    timestamp: Number(signal.timestamp),
  };
}

function mapBackendUserStats(stats: BackendUserStats): UserStats {
  const total = Number(stats.totalPredictions);
  const wins = Number(stats.wins);
  return {
    totalPredictions: total,
    accuracyRate: +stats.accuracyRate.toFixed(3),
    bestTicker: "NVDA",
    totalPnl: 0,
    winRate: total > 0 ? +(wins / total).toFixed(3) : 0,
    streakDays: 0,
  };
}

export type PredictionHistoryEntry = {
  id: string;
  ticker: string;
  direction: "UP" | "DOWN" | "SIDEWAYS";
  confidence: number;
  volatility: number;
  timestamp: number;
};

const DEFAULT_TICKERS = [
  "AAPL",
  "MSFT",
  "GOOGL",
  "AMZN",
  "TSLA",
  "NVDA",
  "META",
  "SPY",
];

// ─── Mock fallbacks for portfolio (no backend equivalent) ─────────────────────

const MOCK_PORTFOLIO: PortfolioPosition[] = [
  {
    ticker: "NVDA",
    quantity: 15,
    avgCost: 742.0,
    currentPrice: 892.14,
    pnl: 2252.1,
    pnlPct: 20.2,
  },
  {
    ticker: "AAPL",
    quantity: 50,
    avgCost: 165.0,
    currentPrice: 189.42,
    pnl: 1221.0,
    pnlPct: 14.8,
  },
  {
    ticker: "TSLA",
    quantity: 20,
    avgCost: 248.0,
    currentPrice: 218.73,
    pnl: -585.4,
    pnlPct: -11.8,
  },
  {
    ticker: "META",
    quantity: 10,
    avgCost: 480.0,
    currentPrice: 521.05,
    pnl: 410.5,
    pnlPct: 8.6,
  },
  {
    ticker: "MSFT",
    quantity: 25,
    avgCost: 385.0,
    currentPrice: 415.28,
    pnl: 757.0,
    pnlPct: 7.9,
  },
];

// ─── Hooks ────────────────────────────────────────────────────────────────────

export function usePrediction() {
  const { actor, isFetching } = useActor(createActor);
  const queryClient = useQueryClient();
  return useMutation<Prediction, Error, string>({
    mutationFn: async (ticker: string) => {
      if (!actor || isFetching) throw new Error("Actor not ready");
      const result = await actor.predict(ticker.toUpperCase());
      return mapBackendPrediction(result, ticker);
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["prediction", data.ticker], data);
    },
  });
}

export function useMarketData(ticker: string) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<OHLC[]>({
    queryKey: ["market-data", ticker],
    queryFn: async () => {
      if (!actor) return [];
      const [current, history] = await Promise.all([
        actor.getCurrentPrice(ticker.toUpperCase()),
        actor.getCandlestickHistory(ticker.toUpperCase()),
      ]);
      const mapped = history.map(mapBackendOHLC);
      // Ensure most-recent candle is up-to-date
      const latest = mapBackendOHLC(current);
      if (
        mapped.length === 0 ||
        mapped[mapped.length - 1].timestamp < latest.timestamp
      ) {
        mapped.push(latest);
      }
      return mapped;
    },
    enabled: !!actor && !isFetching && ticker.length > 0,
    refetchInterval: 5_000,
    staleTime: 4_500,
  });
}

export function useMarketOverview(tickers?: string[]) {
  const { actor, isFetching } = useActor(createActor);
  const resolvedTickers = tickers ?? DEFAULT_TICKERS;
  return useQuery<MarketOverview[]>({
    queryKey: ["market-overview", resolvedTickers.join(",")],
    queryFn: async () => {
      if (!actor) return [];
      const summary = await actor.getMarketSummary(resolvedTickers);
      return mapMarketSummaryToOverview(summary);
    },
    enabled: !!actor && !isFetching,
    refetchInterval: 10_000,
    staleTime: 9_000,
  });
}

export function useSignals(ticker?: string) {
  const { actor, isFetching } = useActor(createActor);
  const t = ticker?.toUpperCase() ?? DEFAULT_TICKERS[0];
  return useQuery<TradingSignal[]>({
    queryKey: ["signals", ticker ?? "all"],
    queryFn: async () => {
      if (!actor) return [];
      if (ticker) {
        const [signal, ohlc] = await Promise.all([
          actor.getTradingSignal(t),
          actor.getCurrentPrice(t).catch(() => null),
        ]);
        const price = ohlc ? ohlc.close : 0;
        return [mapBackendTradingSignal(signal, price)];
      }
      // Fetch signals for multiple tickers in parallel
      const results = await Promise.allSettled(
        DEFAULT_TICKERS.slice(0, 5).map(async (sym) => {
          const [sig, ohlc] = await Promise.all([
            actor.getTradingSignal(sym),
            actor.getCurrentPrice(sym).catch(() => null),
          ]);
          return mapBackendTradingSignal(sig, ohlc ? ohlc.close : 0);
        }),
      );
      return results
        .filter(
          (r): r is PromiseFulfilledResult<TradingSignal> =>
            r.status === "fulfilled",
        )
        .map((r) => r.value);
    },
    enabled: !!actor && !isFetching,
    refetchInterval: 8_000,
    staleTime: 7_500,
  });
}

export function useAlerts() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<MarketAlert[]>({
    queryKey: ["alerts"],
    queryFn: async () => {
      if (!actor) return [];
      const alerts = await actor.getRecentAlerts();
      return alerts.map(mapBackendAlert);
    },
    enabled: !!actor && !isFetching,
    refetchInterval: 5_000,
    staleTime: 4_500,
  });
}

export function usePredictionHistory(ticker: string) {
  return useQuery<Prediction | null>({
    queryKey: ["prediction", ticker],
    queryFn: async () => null,
    enabled: ticker.length > 0,
  });
}

export function usePredictionHistoryAll() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<PredictionHistoryEntry[]>({
    queryKey: ["prediction-history-all"],
    queryFn: async () => {
      if (!actor) return [];
      const history = await actor.getPredictionHistory();
      return history.map(
        (entry: BackendPredictionEntry, i: number): PredictionHistoryEntry => ({
          id: `ph${i + 1}`,
          ticker: entry.ticker,
          direction: mapTrend(entry.trend),
          confidence: Number(entry.confidence) / 100,
          volatility: entry.volatility,
          timestamp: Number(entry.timestamp),
        }),
      );
    },
    enabled: !!actor && !isFetching,
    refetchInterval: 15_000,
    staleTime: 14_000,
  });
}

export function usePortfolio() {
  return useQuery<PortfolioPosition[]>({
    queryKey: ["portfolio"],
    queryFn: async () => MOCK_PORTFOLIO,
    staleTime: 30_000,
  });
}

export function useWatchlist() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<WatchlistEntry[]>({
    queryKey: ["watchlist"],
    queryFn: async () => {
      if (!actor) return [];
      const tickers = await actor.getWatchlist();
      if (tickers.length === 0) return [];
      const prices = await actor.getMultiplePrices(tickers);
      const priceMap = new Map<string, number>(prices);
      return tickers.map(
        (t): WatchlistEntry => ({
          ticker: t,
          addedAt: Date.now(),
          currentPrice: priceMap.get(t) ?? 0,
          change24h: 0,
          signal: "HOLD",
        }),
      );
    },
    enabled: !!actor && !isFetching,
    refetchInterval: 10_000,
    staleTime: 9_000,
  });
}

export function useAddToWatchlist() {
  const { actor, isFetching } = useActor(createActor);
  const queryClient = useQueryClient();
  return useMutation<void, Error, string>({
    mutationFn: async (ticker: string) => {
      if (!actor || isFetching) throw new Error("Actor not ready");
      await actor.addToWatchlist(ticker.toUpperCase());
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["watchlist"] });
    },
  });
}

export function useRemoveFromWatchlist() {
  const { actor, isFetching } = useActor(createActor);
  const queryClient = useQueryClient();
  return useMutation<void, Error, string>({
    mutationFn: async (ticker: string) => {
      if (!actor || isFetching) throw new Error("Actor not ready");
      await actor.removeFromWatchlist(ticker.toUpperCase());
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["watchlist"] });
    },
  });
}

export function useUserStats() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<UserStats>({
    queryKey: ["user-stats"],
    queryFn: async () => {
      if (!actor)
        return {
          totalPredictions: 0,
          accuracyRate: 0,
          bestTicker: "N/A",
          totalPnl: 0,
          winRate: 0,
          streakDays: 0,
        };
      const stats = await actor.getUserStats();
      return mapBackendUserStats(stats);
    },
    enabled: !!actor && !isFetching,
    refetchInterval: 30_000,
    staleTime: 29_000,
  });
}
