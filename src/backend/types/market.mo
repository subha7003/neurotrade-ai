import Types "common";

module {
  // OHLC candlestick record
  public type OHLC = {
    ticker : Types.Ticker;
    open : Float;
    high : Float;
    low : Float;
    close : Float;
    volume : Nat;
    timestamp : Types.Timestamp;
  };

  // Trading signal direction
  public type SignalDirection = { #buy; #sell; #hold };

  // Trading signal for a ticker
  public type TradingSignal = {
    ticker : Types.Ticker;
    direction : SignalDirection;
    strength : Float; // 0.0 - 1.0
    timestamp : Types.Timestamp;
  };

  // Market alert severity
  public type AlertSeverity = { #info; #warning; #critical };

  // Market alert record
  public type MarketAlert = {
    ticker : Types.Ticker;
    message : Text;
    severity : AlertSeverity;
    timestamp : Types.Timestamp;
  };

  // Top-moving stock record
  public type TopMover = {
    ticker : Text;
    changePercent : Float;
    price : Float;
    volume : Nat;
  };

  // Market summary record
  public type MarketSummary = {
    topMovers : [TopMover];
    sentimentScore : Nat;
    marketBreadth : Float;
    lastUpdated : Int;
  };
};
