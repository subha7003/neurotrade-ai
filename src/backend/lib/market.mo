import Array "mo:core/Array";
import Float "mo:core/Float";
import Char "mo:core/Char";
import Nat32 "mo:core/Nat32";
import MarketTypes "../types/market";
import CommonTypes "../types/common";
import Time "mo:core/Time";
module {
  /// Deterministic hash of a ticker string using char codes.
  func tickerHash(ticker : CommonTypes.Ticker) : Nat {
    let chars = ticker.toArray();
    var h : Nat = 0;
    for (c in chars.values()) {
      h := (h * 31 + c.toNat32().toNat()) % 1_000_003;
    };
    h;
  };

  /// Get simulated current OHLC + volume for a ticker.
  public func getCurrentPrice(ticker : CommonTypes.Ticker, timestamp : CommonTypes.Timestamp) : MarketTypes.OHLC {
    let seed = tickerHash(ticker);
    let basePrice = 50.0 + (seed % 950).toFloat();
    let open = basePrice + (seed % 20).toFloat() - 10.0;
    let close = open + ((seed * 7 + 3) % 30).toFloat() - 15.0;
    let high = Float.max(open, close) + ((seed * 3) % 15).toFloat();
    let low = Float.min(open, close) - ((seed * 5 + 1) % 12).toFloat();
    let volume = (seed * 1000 + 50000) % 5000000;
    {
      ticker;
      open;
      high;
      low;
      close;
      volume;
      timestamp;
    };
  };

  /// Get candlestick history (array of OHLC records).
  public func getCandlestickHistory(
    ticker : CommonTypes.Ticker,
    timestamp : CommonTypes.Timestamp,
    bars : Nat,
  ) : [MarketTypes.OHLC] {
    let seed = tickerHash(ticker);
    let basePrice = 50.0 + (seed % 950).toFloat();
    let hourNs : Int = 3_600_000_000_000;
    Array.tabulate<MarketTypes.OHLC>(
      bars,
      func(i) {
        let barSeed = (seed + i * 31 + i * i * 7) % 10000;
        let drift = (barSeed % 40).toFloat() - 20.0;
        let open = basePrice + drift;
        let close = open + ((barSeed * 13 + 5) % 30).toFloat() - 15.0;
        let high = Float.max(open, close) + ((barSeed * 3) % 15).toFloat();
        let low = Float.min(open, close) - ((barSeed * 5 + 1) % 12).toFloat();
        let volume = (barSeed * 1000 + 50000) % 5000000;
        let barTs : Int = timestamp - (bars - i - 1 : Int) * hourNs;
        {
          ticker;
          open;
          high;
          low;
          close;
          volume;
          timestamp = barTs;
        };
      },
    );
  };

  /// Get trading signal (buy/sell/hold + strength) for a ticker.
  public func getTradingSignal(
    ticker : CommonTypes.Ticker,
    timestamp : CommonTypes.Timestamp,
  ) : MarketTypes.TradingSignal {
    let seed = tickerHash(ticker);
    // RSI-like: use seed to simulate over/under-bought levels
    let rsi = (seed % 100).toFloat();
    let direction : MarketTypes.SignalDirection =
      if (rsi < 30.0) { #buy }
      else if (rsi > 70.0) { #sell }
      else { #hold };
    let strength = if (rsi < 30.0) {
      (30.0 - rsi) / 30.0;
    } else if (rsi > 70.0) {
      (rsi - 70.0) / 30.0;
    } else {
      0.5;
    };
    { ticker; direction; strength; timestamp };
  };

  /// Get recent market alerts.
  public func getRecentAlerts(timestamp : CommonTypes.Timestamp) : [MarketTypes.MarketAlert] {
    let tickers = ["AAPL", "TSLA", "NVDA", "MSFT", "AMZN"];
    let messages = [
      "Unusual volume spike detected",
      "Momentum breakout signal triggered",
      "Bearish divergence on RSI observed",
      "Support level breach detected",
      "AI confidence threshold exceeded",
    ];
    let severities : [MarketTypes.AlertSeverity] = [#info, #warning, #critical, #info, #warning];
    let hourNs : Int = 3_600_000_000_000;
    Array.tabulate<MarketTypes.MarketAlert>(
      5,
      func(i) {
        {
          ticker = tickers[i];
          message = messages[i];
          severity = severities[i];
          timestamp = timestamp - i * hourNs;
        };
      },
    );
  };
  public func fetchLivePrice(state : { var lastFetchTime : ?Int }, ticker : CommonTypes.Ticker) : async Float {
    state.lastFetchTime := ?Time.now();
    let ohlc = getCurrentPrice(ticker, Time.now());
    ohlc.close;
  };

  public func getMarketSummary(tickers : [CommonTypes.Ticker]) : MarketTypes.MarketSummary {
    let topMovers = Array.tabulate(
      tickers.size(),
      func(i) {
        let ticker = tickers[i];
        let ohlc = getCurrentPrice(ticker, Time.now());
        let changePercent = if (ohlc.open != 0.0) {
          ((ohlc.close - ohlc.open) / ohlc.open) * 100.0;
        } else { 0.0 };
        { ticker; price = ohlc.close; changePercent; volume = ohlc.volume };
      },
    );
    {
      topMovers;
      sentimentScore = 65;
      marketBreadth = 0.3;
      lastUpdated = Time.now();
    };
  };
};
