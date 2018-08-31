import get from "lodash/get";
import { key_utils } from "./auth/ecc";

module.exports = api => {
  function numberWithCommas(x) {
    return x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function ESCORvalueInECO(account, gprops) {
    const accountESCOR = parseFloat(account.ESCOR.split(" ")[0]);
    const totalESCOR = parseFloat(gprops.totalESCOR.split(" ")[0]);
    const totalESCORvalueInECO = parseFloat(
      gprops.totalECOfundForESCOR.split(" ")[0]
    );
    const ESCORvalueInECO = totalESCORvalueInECO * (accountESCOR / totalESCOR);
    return ESCORvalueInECO;
  }

  function processOrders(open_orders, assetPrecision) {
    const EUSDorders = !open_orders
      ? 0
      : open_orders.reduce((o, order) => {
          if (order.sell_price.base.indexOf("EUSD") !== -1) {
            o += order.for_sale;
          }
          return o;
        }, 0) / assetPrecision;

    const ordersECO = !open_orders
      ? 0
      : open_orders.reduce((o, order) => {
          if (order.sell_price.base.indexOf("ECO") !== -1) {
            o += order.for_sale;
          }
          return o;
        }, 0) / assetPrecision;

    return { ordersECO, EUSDorders };
  }

  function calculateSaving(savings_withdraws) {
    let ECOsavingsPending = 0;
    let EUSDpendingSavings = 0;
    savings_withdraws.forEach(withdraw => {
      const [amount, asset] = withdraw.amount.split(" ");
      if (asset === "ECO") ECOsavingsPending += parseFloat(amount);
      else {
        if (asset === "EUSD") EUSDpendingSavings += parseFloat(amount);
      }
    });
    return { ECOsavingsPending, EUSDpendingSavings };
  }

  function estimateAccountValue(
    account,
    { gprops, feed_price, open_orders, savings_withdraws, ESCORvalueInECO } = {}
  ) {
    const promises = [];
    const username = account.name;
    const assetPrecision = 1000;
    let orders, savings;

    if (!ESCORvalueInECO || !feed_price) {
      if (!gprops || !feed_price) {
        promises.push(
          api.getStateAsync(`/@{username}`).then(data => {
            gprops = data.props;
            feed_price = data.feed_price;
            ESCORvalueInECO = ESCORvalueInECO(account, gprops);
          })
        );
      } else {
        ESCORvalueInECO = ESCORvalueInECO(account, gprops);
      }
    }

    if (!open_orders) {
      promises.push(
        api.getOpenOrdersAsync(username).then(open_orders => {
          orders = processOrders(open_orders, assetPrecision);
        })
      );
    } else {
      orders = processOrders(open_orders, assetPrecision);
    }

    if (!savings_withdraws) {
      promises.push(
        api
          .getSavingsWithdrawFromAsync(username)
          .then(savings_withdraws => {
            savings = calculateSaving(savings_withdraws);
          })
      );
    } else {
      savings = calculateSaving(savings_withdraws);
    }

    return Promise.all(promises).then(() => {
      let ECOtoEUSDprice = undefined;
      const { base, quote } = feed_price;
      if (/ EUSD$/.test(base) && / ECO$/.test(quote))
        ECOtoEUSDprice = parseFloat(base.split(" ")[0]);
      const ECOsavingsBalance = account.ECOsavingsBalance;
      const EUSDsavingsBalance = account.EUSDsavingsBalance;
      const balanceECO_Parsed = parseFloat(account.balance.split(" ")[0]);
      const ECOsavingsBalance_Parsed = parseFloat(ECOsavingsBalance.split(" ")[0]);
      const EUSDbalance = parseFloat(account.EUSDbalance);
      const EUSDsavingsBalance_Parsed = parseFloat(EUSDsavingsBalance.split(" ")[0]);

      let conversionValue = 0;
      const currentTime = new Date().getTime();
      (account.other_history || []).reduce((out, item) => {
        if (get(item, [1, "op", 0], "") !== "convert") return out;

        const timestamp = new Date(get(item, [1, "timestamp"])).getTime();
        const finishTime = timestamp + 86400000 * 3.5; // add 3.5day conversion delay
        if (finishTime < currentTime) return out;

        const amount = parseFloat(
          get(item, [1, "op", 1, "amount"]).replace(" EUSD", "")
        );
        conversionValue += amount;
      }, []);

      const EUSDtotal =
        EUSDbalance +
        EUSDsavingsBalance_Parsed +
        savings.EUSDpendingSavings +
        orders.EUSDorders +
        conversionValue;

      const totalECO =
        ESCORvalueInECO +
        balanceECO_Parsed +
        ECOsavingsBalance_Parsed +
        savings.ECOsavingsPending +
        orders.ordersECO;

      return (totalECO * ECOtoEUSDprice + EUSDtotal).toFixed(2);
    });
  }

  function createSuggestedPassword() {
    const PASSWORD_LENGTH = 32;
    const privateKey = key_utils.get_random_key();
    return privateKey.toWif().substring(3, 3 + PASSWORD_LENGTH);
  }

  return {
    reputation: function(reputation) {
      if (reputation == null) return reputation;
      reputation = parseInt(reputation);
      let rep = String(reputation);
      const neg = rep.charAt(0) === "-";
      rep = neg ? rep.substring(1) : rep;
      const str = rep;
      const leadingDigits = parseInt(str.substring(0, 4));
      const log = Math.log(leadingDigits) / Math.log(10);
      const n = str.length - 1;
      let out = n + (log - parseInt(log));
      if (isNaN(out)) out = 0;
      out = Math.max(out - 9, 0);
      out = (neg ? -1 : 1) * out;
      out = out * 9 + 25;
      out = parseInt(out);
      return out;
    },

    ESCORinECOvalue: function(
      ESCOR,
      totalESCOR,
      ESCORbackingECOfundBalance
    ) {
      return (
        parseFloat(ESCORbackingECOfundBalance) *
        (parseFloat(ESCOR) / parseFloat(totalESCOR))
      );
    },

    commentPermlink: function(parentAuthor, parentPermlink) {
      const timeStr = new Date()
        .toISOString()
        .replace(/[^a-zA-Z0-9]+/g, "")
        .toLowerCase();
      parentPermlink = parentPermlink.replace(/(-\d{8}t\d{9}z)/g, "");
      return "re-" + parentAuthor + "-" + parentPermlink + "-" + timeStr;
    },

    amount: function(amount, asset) {
      return amount.toFixed(3) + " " + asset;
    },
    numberWithCommas,
    ESCORvalueInECO,
    estimateAccountValue,
    createSuggestedPassword
  };
};
