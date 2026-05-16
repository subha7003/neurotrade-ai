import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type Timestamp = bigint;
export interface Prediction {
    trend: TrendDirection;
    ticker: Ticker;
    volatility: number;
    signalStrength: bigint;
    resistanceLevel: number;
    supportLevel: number;
    timestamp: Timestamp;
    projection: Array<number>;
    confidence: bigint;
}
export interface OHLC {
    low: number;
    ticker: Ticker;
    high: number;
    close: number;
    open: number;
    volume: bigint;
    timestamp: Timestamp;
}
export interface MarketSummary {
    sentimentScore: bigint;
    marketBreadth: number;
    lastUpdated: bigint;
    topMovers: Array<TopMover>;
}
export type Ticker = string;
export interface TradingSignal {
    direction: SignalDirection;
    ticker: Ticker;
    strength: number;
    timestamp: Timestamp;
}
export interface TopMover {
    ticker: string;
    volume: bigint;
    price: number;
    changePercent: number;
}
export interface PredictionEntry {
    trend: TrendDirection;
    ticker: Ticker;
    volatility: number;
    signalStrength: bigint;
    resistanceLevel: number;
    supportLevel: number;
    timestamp: Timestamp;
    projection: Array<number>;
    confidence: bigint;
}
export interface MarketAlert {
    ticker: Ticker;
    message: string;
    timestamp: Timestamp;
    severity: AlertSeverity;
}
export interface UserStats {
    accuracyRate: number;
    wins: bigint;
    losses: bigint;
    totalPredictions: bigint;
}
export enum AlertSeverity {
    warning = "warning",
    info = "info",
    critical = "critical"
}
export enum SignalDirection {
    buy = "buy",
    hold = "hold",
    sell = "sell"
}
export enum TrendDirection {
    bullish = "bullish",
    bearish = "bearish",
    neutral = "neutral"
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    addToWatchlist(ticker: string): Promise<void>;
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    getCallerUserRole(): Promise<UserRole>;
    getCandlestickHistory(ticker: string): Promise<Array<OHLC>>;
    getCurrentPrice(ticker: string): Promise<OHLC>;
    getLastFetchTime(): Promise<bigint | null>;
    getMarketSummary(tickers: Array<string>): Promise<MarketSummary>;
    getMultiplePrices(tickers: Array<string>): Promise<Array<[string, number]>>;
    getPredictionHistory(): Promise<Array<PredictionEntry>>;
    getRecentAlerts(): Promise<Array<MarketAlert>>;
    getTradingSignal(ticker: string): Promise<TradingSignal>;
    getUserStats(): Promise<UserStats>;
    getWatchlist(): Promise<Array<string>>;
    isCallerAdmin(): Promise<boolean>;
    predict(ticker: string): Promise<Prediction>;
    refreshMarketData(): Promise<void>;
    removeFromWatchlist(ticker: string): Promise<void>;
}
