const wehelpjs = require('../lib');

const username = 'guest123';
const wif = '5JRaypasxMx1L97ZUX7YuC5Psb5EAbF821kkAGtBj7xCJFQcbLg';

wehelpjs
  .broadcast
  .vote(
    wif,
    username,
    'yamadapc',
    'test-post-bop-1-2-3-4-5-6',
    1,
    function(err, result) {
      console.log(err, result);
    }
  );
