const ezhelp.js = require('../lib');

/* Generate private active WIF */
const username = process.env.EZNODE_USERNAME;
const password = process.env.EZNODE_PASSWORD;
const privActiveWif = ezhelp.js.auth.toWif(username, password, 'active');

/** Add posting key auth */
ezhelp.js.broadcast.addKeyAuth({
    signingKey: privActiveWif,
    username,
    authorizedKey: 'EZT88CPfhCmeEzCnvC1Cjc3DNd1DTjkMcmihih8SSxmm4LBqRq5Y9',
    role: 'posting',
  },
  (err, result) => {
    console.log(err, result);
  }
);
