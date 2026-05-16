import Map "mo:core/Map";
import List "mo:core/List";
import Principal "mo:core/Principal";
import AccessControl "mo:caffeineai-authorization/access-control";
import MixinAuthorization "mo:caffeineai-authorization/MixinAuthorization";
import MarketApi "mixins/market-api";
import MarketLib "lib/market";
import PredictionApi "mixins/prediction-api";
import UserApi "mixins/user-api";
import UserLib "lib/user";
import Migration "migration";

(with migration = Migration.run)
actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  let history : UserLib.UserHistory = Map.empty<Principal, List.List<UserLib.PredEntry>>();
  let watchlists : UserLib.Watchlists = Map.empty<Principal, List.List<Text>>();

  let marketState = { var lastFetchTime : ?Int = null };
  include MarketApi(marketState);
  include PredictionApi(history, watchlists);
  include UserApi(accessControlState, history, watchlists);

  private func refreshTickers() : async () {
    let tickers = ["AAPL", "MSFT", "GOOGL", "AMZN", "TSLA", "NVDA", "META"];
    for (ticker in tickers.vals()) {
      ignore(await MarketLib.fetchLivePrice(marketState, ticker));
    };
  };

  system func timer(setGlobalTimer : Nat64 -> ()) : async () {
    setGlobalTimer(300_000_000_000);
    await refreshTickers();
  };

  public shared ({ caller }) func refreshMarketData() : async () {
    assert (AccessControl.isAdmin(accessControlState, caller));
    ignore(await refreshTickers());
  };
};
