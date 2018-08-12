const ezira = require('../lib');

/* Generate private active WIF */
const username = process.env.EZIRA_USERNAME;
const password = process.env.EZIRA_PASSWORD;
const privActiveWif = ezira.auth.toWif(username, password, 'active');

/** Add posting key auth */
ezira.broadcast.addKeyAuth({
    signingKey: privActiveWif,
    username,
    authorizedKey: 'EZT88CPfhCmeEzCnvC1Cjc3DNd1DTjkMcmihih8SSxmm4LBqRq5Y9',
    role: 'posting',
  },
  (err, result) => {
    console.log(err, result);
  }
);
