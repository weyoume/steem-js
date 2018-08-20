const api = require("./api");
const auth = require("./auth");
const broadcast = require("./broadcast");
const config = require("./config");
const formatter = require("./ezformatter")(api);
const utils = require("./utils");

const ezhelp.js = {
  api,
  auth,
  broadcast,
  config,
  formatter,
  utils
};

if (typeof window !== "undefined") {
  window.ezhelp.js = ezhelp.js;
}

if (typeof global !== "undefined") {
  global.ezhelp.js = ezhelp.js;
}

exports = module.exports = ezhelp.js;
