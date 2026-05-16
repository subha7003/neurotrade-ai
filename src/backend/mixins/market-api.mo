import Array "mo:core/Array";
import Time "mo:core/Time";
import MarketTypes "../types/market";
import MarketLib "../lib/market";

mixin (marketState : { var lastFetchTime : ?Int }) {
  /// Get simulated current OHLC price for a ticker.
  public query func getCurrentPrice(ticker : Text) : async MarketTypes.OHLC {
    MarketLib.getCurrentPrice(ticker, Time.now());
  };

  /// Get candlestick history (last 60 bars).
  public query func getCandlestickHistory(ticker : Text) : async [MarketTypes.OHLC] {
    MarketLib.getCandlestickHistory(ticker, Time.now(), 60);
  };

  /// Get current trading signal for a ticker.
  public query func getTradingSignal(ticker : Text) : async MarketTypes.TradingSignal {
    MarketLib.getTradingSignal(ticker, Time.now());
  };

  /// Get recent market alerts.
  public query func getRecentAlerts() : async [MarketTypes.MarketAlert] {
    MarketLib.getRecentAlerts(Time.now());
  };

  /// Get the last time live prices were fetched.
  public query func getLastFetchTime() : async ?Int {
    marketState.lastFetchTime;
  };

  /// Get current prices for multiple tickers.
  public query func getMultiplePrices(tickers : [Text]) : async [(Text, Float)] {
    tickers.map<Text, (Text, Float)>(func(t) { (t, MarketLib.getCurrentPrice(t, Time.now()).close) });
  };

  /// Get market summary for a list of tickers.
  public query func getMarketSummary(tickers : [Text]) : async MarketTypes.MarketSummary {
    MarketLib.getMarketSummary(tickers);
  };
};
