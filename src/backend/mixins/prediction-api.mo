import Time "mo:core/Time";
import PredTypes "../types/prediction";
import PredLib "../lib/prediction";
import UserLib "../lib/user";
import Map "mo:core/Map";
import List "mo:core/List";
import Principal "mo:core/Principal";

mixin (
  history : UserLib.UserHistory,
  watchlists : UserLib.Watchlists,
) {
  /// Run AI prediction for a ticker; automatically saves to caller's history.
  public shared ({ caller }) func predict(ticker : Text) : async PredTypes.Prediction {
    let prediction = PredLib.predict(ticker, Time.now());
    let entry : PredTypes.PredictionEntry = {
      ticker = prediction.ticker;
      confidence = prediction.confidence;
      trend = prediction.trend;
      volatility = prediction.volatility;
      projection = prediction.projection;
      timestamp = prediction.timestamp;
      supportLevel = prediction.supportLevel;
      resistanceLevel = prediction.resistanceLevel;
      signalStrength = prediction.signalStrength;
    };
    UserLib.savePrediction(history, caller, entry);
    prediction;
  };
};
