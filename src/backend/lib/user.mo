import Map "mo:core/Map";
import Principal "mo:core/Principal";
import List "mo:core/List";
import PredTypes "../types/prediction";
import UserTypes "../types/user";
import CommonTypes "../types/common";
import Time "mo:core/Time";
import Nat "mo:core/Nat";
import Nat32 "mo:core/Nat32";
import Char "mo:core/Char";
import Float "mo:core/Float";
import Array "mo:core/Array";

module {
  public type PredEntry = PredTypes.PredictionEntry;
  public type UserHistory = Map.Map<Principal, List.List<PredTypes.PredictionEntry>>;
  public type Watchlists = Map.Map<Principal, List.List<Text>>;

  /// Save a prediction to caller's history.
  public func savePrediction(
    history : UserHistory,
    caller : Principal,
    entry : PredTypes.PredictionEntry,
  ) : () {
    let list = switch (history.get(caller)) {
      case (?l) { l };
      case null {
        let l = List.empty<PredTypes.PredictionEntry>();
        history.add(caller, l);
        l;
      };
    };
    list.add(entry);
  };

  /// Get caller's prediction history.
  public func getPredictionHistory(
    history : UserHistory,
    caller : Principal,
  ) : [PredTypes.PredictionEntry] {
    switch (history.get(caller)) {
      case (?list) { list.reverse().toArray() };
      case null { [] };
    };
  };

  /// Add a ticker to caller's watchlist.
  public func addToWatchlist(
    watchlists : Watchlists,
    caller : Principal,
    ticker : CommonTypes.Ticker,
  ) : () {
    let list = switch (watchlists.get(caller)) {
      case (?l) { l };
      case null {
        let l = List.empty<Text>();
        watchlists.add(caller, l);
        l;
      };
    };
    if (list.size() >= 20) { return };
    let alreadyPresent = list.find(func(t : Text) : Bool { t == ticker }) != null;
    if (not alreadyPresent) {
      list.add(ticker);
    };
  };

  /// Remove a ticker from caller's watchlist.
  public func removeFromWatchlist(
    watchlists : Watchlists,
    caller : Principal,
    ticker : CommonTypes.Ticker,
  ) : () {
    switch (watchlists.get(caller)) {
      case (?list) {
        let filtered = list.filter(func(t : Text) : Bool { t != ticker });
        list.clear();
        list.addAll(filtered.values());
      };
      case null {};
    };
  };

  /// Get caller's watchlist.
  public func getWatchlist(
    watchlists : Watchlists,
    caller : Principal,
  ) : [Text] {
    switch (watchlists.get(caller)) {
      case (?list) { list.toArray() };
      case null { [] };
    };
  };

  /// Get mock user stats.
  public func getUserStats(
    history : UserHistory,
    caller : Principal,
  ) : UserTypes.UserStats {
    let total : Nat = switch (history.get(caller)) {
      case (?list) { list.size() };
      case null { 0 };
    };
    // deterministic mock accuracy using caller principal hash
    let callerText = caller.toText();
    let chars = callerText.toArray();
    var h : Nat = 0;
    for (c in chars.values()) {
      h := (h * 31 + c.toNat32().toNat()) % 1_000_003;
    };
    let accuracyPct : Float = 65.0 + (Nat.rem(h, 15).toInt()).toFloat();
    let accuracyRate : Float = accuracyPct / 100.0;
    let wins : Nat = total * 65 / 100;
    let losses : Nat = total - wins;
    { totalPredictions = total; accuracyRate; wins; losses };
  };
};
