import PredTypes "../types/prediction";
import CommonTypes "../types/common";
import Nat "mo:core/Nat";
import Nat32 "mo:core/Nat32";
import Char "mo:core/Char";
import Float "mo:core/Float";
import Array "mo:core/Array";
import Text "mo:core/Text";

module {
  /// Generate a deterministic prediction for a ticker using multi-factor scoring.
  public func predict(
    ticker : CommonTypes.Ticker,
    timestamp : CommonTypes.Timestamp,
  ) : PredTypes.Prediction {
    // (1) Compute charSum = sum of all Nat32 char values
    let chars = ticker.toArray();
    var charSum : Nat = 0;
    for (c in chars.values()) {
      charSum := charSum + c.toNat32().toNat();
    };
    // Also compute deterministic hash for trend/volatility
    var h : Nat = 0;
    for (c in chars.values()) {
      h := (h * 31 + c.toNat32().toNat()) % 1_000_003;
    };
    // (2) Length-based market cap weight
    let stabilityFactor : Float =
      if (ticker.size() <= 4) { 0.9 } else { 1.3 };
    // (3) Final confidence = min 98 of (60 + charSum % 35)
    let rawConfidence : Nat = 60 + Nat.rem(charSum, 35);
    let confidence : Nat = if (rawConfidence > 98) { 98 } else { rawConfidence };
    // (4) signalStrength = confidence * (if stabilityFactor < 1.0 then 80 else 100) / 100
    let signalMultiplier : Nat = if (stabilityFactor < 1.0) { 80 } else { 100 };
    let signalStrength : Nat = confidence * signalMultiplier / 100;
    // (5) currentPrice simulation (same as existing logic)
    let currentPrice : Float = 50.0 + (h % 950).toFloat();
    let supportLevel : Float = currentPrice * 0.92;
    let resistanceLevel : Float = currentPrice * 1.12;
    let trendRem = Nat.rem(h, 3);
    let trend : PredTypes.TrendDirection =
      if (trendRem == 0) { #bullish }
      else if (trendRem == 1) { #bearish }
      else { #neutral };
    let volatility : Float = (Nat.rem(h, 50)).toFloat() / 100.0;
    let projection : [Float] = Array.tabulate<Float>(
      30,
      func(i) {
        let sinApprox : Float = Float.sin(((h % 1000).toFloat() + (i * 3).toFloat()) * 0.1);
        currentPrice + sinApprox * (currentPrice * 0.05) + i.toFloat() * 0.3;
      },
    );
    { ticker; confidence; trend; volatility; projection; timestamp; supportLevel; resistanceLevel; signalStrength };
  };
};
