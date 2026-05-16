// Market data types — mirrors backend Motoko types (all numeric fields use number)

export interface OHLC {
  ticker: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  timestamp: number;
}

export type SignalType = "BUY" | "SELL" | "HOLD";

export interface TradingSignal {
  ticker: string;
  signal: SignalType;
  confidence: number; // 0–1
  price: number;
  targetPrice: number;
  stopLoss: number;
  timestamp: number;
}

export interface MarketAlert {
  id: string;
  ticker: string;
  type: "PRICE_SPIKE" | "VOLUME_SURGE" | "SIGNAL_CHANGE" | "VOLATILITY";
  message: string;
  severity: "low" | "medium" | "high" | "critical";
  timestamp: number;
}

export interface PredictionEntry {
  timestamp: number;
  price: number;
  lower: number;
  upper: number;
}

export interface Prediction {
  ticker: string;
  currentPrice: number;
  direction: "UP" | "DOWN" | "SIDEWAYS";
  probability: number; // 0–1
  priceTarget: number;
  horizon: "1D" | "1W" | "1M";
  volatility: number;
  sentiment: number; // -1 to 1
  forecast: PredictionEntry[];
  shapFeatures: ShapFeature[];
  generatedAt: number;
  supportLevel?: number;
  resistanceLevel?: number;
  signalStrength?: number;
}

export interface ShapFeature {
  name: string;
  value: number;
  importance: number;
  direction: "positive" | "negative";
}

export interface WatchlistEntry {
  ticker: string;
  addedAt: number;
  currentPrice: number;
  change24h: number;
  signal: SignalType;
}

export interface PortfolioPosition {
  ticker: string;
  quantity: number;
  avgCost: number;
  currentPrice: number;
  pnl: number;
  pnlPct: number;
}

export interface UserStats {
  totalPredictions: number;
  accuracyRate: number;
  bestTicker: string;
  totalPnl: number;
  winRate: number;
  streakDays: number;
}

export interface MarketOverview {
  ticker: string;
  price: number;
  change: number;
  changePct: number;
  volume: number;
  marketCap: number;
  sector: string;
}
