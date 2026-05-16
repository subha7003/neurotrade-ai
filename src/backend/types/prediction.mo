import Types "common";

module {
  // Trend direction for predictions
  public type TrendDirection = { #bullish; #bearish; #neutral };

  // Full prediction result
  public type Prediction = {
    ticker : Types.Ticker;
    confidence : Nat;       // 0-100
    trend : TrendDirection;
    volatility : Float;
    projection : [Float];   // 30-day price projection
    timestamp : Types.Timestamp;
    supportLevel : Float;
    resistanceLevel : Float;
    signalStrength : Nat;
  };

  // Stored prediction history entry (same shape, for user history)
  public type PredictionEntry = {
    ticker : Types.Ticker;
    confidence : Nat;
    trend : TrendDirection;
    volatility : Float;
    projection : [Float];
    timestamp : Types.Timestamp;
    supportLevel : Float;
    resistanceLevel : Float;
    signalStrength : Nat;
  };
};
