const api = require("./api");
const auth = require("./auth");
const broadcast = require("./broadcast");
const config = require("./config");
const formatter = require("./formatter")(api);
const utils = require("./utils");

const ezira = {
  api,
  auth,
  broadcast,
  config,
  formatter,
  utils
};

if (typeof window !== "undefined") {
  window.ezira = ezira;
}

if (typeof global !== "undefined") {
  global.ezira = ezira;
}

exports = module.exports = ezira;
