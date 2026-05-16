import Map "mo:core/Map";
import List "mo:core/List";
import Principal "mo:core/Principal";

module {
  // Old types (inline copy from .old/src/backend/types/prediction.mo)
  type OldTrendDirection = { #bullish; #bearish; #neutral };

  type OldPredictionEntry = {
    ticker : Text;
    confidence : Nat;
    trend : OldTrendDirection;
    volatility : Float;
    projection : [Float];
    timestamp : Int;
  };

  // New types (matching current types/prediction.mo)
  type NewTrendDirection = { #bullish; #bearish; #neutral };

  type NewPredictionEntry = {
    ticker : Text;
    confidence : Nat;
    trend : NewTrendDirection;
    volatility : Float;
    projection : [Float];
    timestamp : Int;
    supportLevel : Float;
    resistanceLevel : Float;
    signalStrength : Nat;
  };

  type OldActor = {
    history : Map.Map<Principal, List.List<OldPredictionEntry>>;
    watchlists : Map.Map<Principal, List.List<Text>>;
  };

  type NewActor = {
    history : Map.Map<Principal, List.List<NewPredictionEntry>>;
    watchlists : Map.Map<Principal, List.List<Text>>;
  };

  public func run(old : OldActor) : NewActor {
    let newHistory = old.history.map<Principal, List.List<OldPredictionEntry>, List.List<NewPredictionEntry>>(
      func(_principal, oldList) {
        oldList.map<OldPredictionEntry, NewPredictionEntry>(
          func(e) {
            {
              e with
              supportLevel = 0.0;
              resistanceLevel = 0.0;
              signalStrength = 0;
            }
          }
        )
      }
    );
    {
      history = newHistory;
      watchlists = old.watchlists;
    };
  };
};
