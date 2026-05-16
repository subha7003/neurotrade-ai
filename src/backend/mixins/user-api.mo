import Map "mo:core/Map";
import List "mo:core/List";
import Principal "mo:core/Principal";
import AccessControl "mo:caffeineai-authorization/access-control";
import PredTypes "../types/prediction";
import UserTypes "../types/user";
import UserLib "../lib/user";

mixin (
  accessControlState : AccessControl.AccessControlState,
  history : UserLib.UserHistory,
  watchlists : UserLib.Watchlists,
) {
  /// Get caller's prediction history.
  public query ({ caller }) func getPredictionHistory() : async [PredTypes.PredictionEntry] {
    UserLib.getPredictionHistory(history, caller);
  };

  /// Add ticker to caller's watchlist.
  public shared ({ caller }) func addToWatchlist(ticker : Text) : async () {
    UserLib.addToWatchlist(watchlists, caller, ticker);
  };

  /// Remove ticker from caller's watchlist.
  public shared ({ caller }) func removeFromWatchlist(ticker : Text) : async () {
    UserLib.removeFromWatchlist(watchlists, caller, ticker);
  };

  /// Get caller's watchlist.
  public query ({ caller }) func getWatchlist() : async [Text] {
    UserLib.getWatchlist(watchlists, caller);
  };

  /// Get mock user stats.
  public query ({ caller }) func getUserStats() : async UserTypes.UserStats {
    UserLib.getUserStats(history, caller);
  };
};
