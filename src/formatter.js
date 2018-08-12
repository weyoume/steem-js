import get from "lodash/get";
import { key_utils } from "./auth/ecc";

module.exports = eziraAPI => {
  function numberWithCommas(x) {
    return x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function vestingEzira(account, gprops) {
    const vests = parseFloat(account.vesting_shares.split(" ")[0]);
    const total_vests = parseFloat(gprops.total_vesting_shares.split(" ")[0]);
    const total_vest_ezira = parseFloat(
      gprops.total_vesting_fund_ezira.split(" ")[0]
    );
    const vesting_eziraf = total_vest_ezira * (vests / total_vests);
    return vesting_eziraf;
  }

  function processOrders(open_orders, assetPrecision) {
    const sbdOrders = !open_orders
      ? 0
      : open_orders.reduce((o, order) => {
          if (order.sell_price.base.indexOf("SBD") !== -1) {
            o += order.for_sale;
          }
          return o;
        }, 0) / assetPrecision;

    const eziraOrders = !open_orders
      ? 0
      : open_orders.reduce((o, order) => {
          if (order.sell_price.base.indexOf("EZIRA") !== -1) {
            o += order.for_sale;
          }
          return o;
        }, 0) / assetPrecision;

    return { eziraOrders, sbdOrders };
  }

  function calculateSaving(savings_withdraws) {
    let savings_pending = 0;
    let savings_sbd_pending = 0;
    savings_withdraws.forEach(withdraw => {
      const [amount, asset] = withdraw.amount.split(" ");
      if (asset === "EZIRA") savings_pending += parseFloat(amount);
      else {
        if (asset === "SBD") savings_sbd_pending += parseFloat(amount);
      }
    });
    return { savings_pending, savings_sbd_pending };
  }

  function estimateAccountValue(
    account,
    { gprops, feed_price, open_orders, savings_withdraws, vesting_ezira } = {}
  ) {
    const promises = [];
    const username = account.name;
    const assetPrecision = 1000;
    let orders, savings;

    if (!vesting_ezira || !feed_price) {
      if (!gprops || !feed_price) {
        promises.push(
          eziraAPI.getStateAsync(`/@{username}`).then(data => {
            gprops = data.props;
            feed_price = data.feed_price;
            vesting_ezira = vestingEzira(account, gprops);
          })
        );
      } else {
        vesting_ezira = vestingEzira(account, gprops);
      }
    }

    if (!open_orders) {
      promises.push(
        eziraAPI.getOpenOrdersAsync(username).then(open_orders => {
          orders = processOrders(open_orders, assetPrecision);
        })
      );
    } else {
      orders = processOrders(open_orders, assetPrecision);
    }

    if (!savings_withdraws) {
      promises.push(
        eziraAPI
          .getSavingsWithdrawFromAsync(username)
          .then(savings_withdraws => {
            savings = calculateSaving(savings_withdraws);
          })
      );
    } else {
      savings = calculateSaving(savings_withdraws);
    }

    return Promise.all(promises).then(() => {
      let price_per_ezira = undefined;
      const { base, quote } = feed_price;
      if (/ SBD$/.test(base) && / EZIRA$/.test(quote))
        price_per_ezira = parseFloat(base.split(" ")[0]);
      const savings_balance = account.savings_balance;
      const savings_sbd_balance = account.savings_sbd_balance;
      const balance_ezira = parseFloat(account.balance.split(" ")[0]);
      const saving_balance_ezira = parseFloat(savings_balance.split(" ")[0]);
      const sbd_balance = parseFloat(account.sbd_balance);
      const sbd_balance_savings = parseFloat(savings_sbd_balance.split(" ")[0]);

      let conversionValue = 0;
      const currentTime = new Date().getTime();
      (account.other_history || []).reduce((out, item) => {
        if (get(item, [1, "op", 0], "") !== "convert") return out;

        const timestamp = new Date(get(item, [1, "timestamp"])).getTime();
        const finishTime = timestamp + 86400000 * 3.5; // add 3.5day conversion delay
        if (finishTime < currentTime) return out;

        const amount = parseFloat(
          get(item, [1, "op", 1, "amount"]).replace(" SBD", "")
        );
        conversionValue += amount;
      }, []);

      const total_sbd =
        sbd_balance +
        sbd_balance_savings +
        savings.savings_sbd_pending +
        orders.sbdOrders +
        conversionValue;

      const total_ezira =
        vesting_ezira +
        balance_ezira +
        saving_balance_ezira +
        savings.savings_pending +
        orders.eziraOrders;

      return (total_ezira * price_per_ezira + total_sbd).toFixed(2);
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

    vestToEzira: function(
      vestingShares,
      totalVestingShares,
      totalVestingFundEzira
    ) {
      return (
        parseFloat(totalVestingFundEzira) *
        (parseFloat(vestingShares) / parseFloat(totalVestingShares))
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
    vestingEzira,
    estimateAccountValue,
    createSuggestedPassword
  };
};
