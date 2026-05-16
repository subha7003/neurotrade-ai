import PredTypes "prediction";

module {
  // User stats
  public type UserStats = {
    totalPredictions : Nat;
    accuracyRate : Float;   // 0.0 - 1.0 (mock)
    wins : Nat;
    losses : Nat;
  };

  // User profile with history and watchlist
  public type UserProfile = {
    history : [PredTypes.PredictionEntry];
    watchlist : [Text];
  };
};
