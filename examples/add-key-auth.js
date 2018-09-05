const wehelpjs = require('../lib');

/* Generate private active WIF */
const username = process.env.NODE_USERNAME;
const password = process.env.NODE_PASSWORD;
const privActiveWif = wehelpjs.auth.toWif(username, password, 'active');

/** Add posting key auth */
wehelpjs.broadcast.addKeyAuth({
    signingKey: privActiveWif,
    username,
    authorizedKey: 'TME88CPfhCmeEzCnvC1Cjc3DNd1DTjkMcmihih8SSxmm4LBqRq5Y9',
    role: 'posting',
  },
  (err, result) => {
    console.log(err, result);
  }
);
