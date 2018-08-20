var ezhelp.js = require('../lib');

ezhelp.js.api.getAccountCount(function(err, result) {
	console.log(err, result);
});

ezhelp.js.api.getAccounts(['dan'], function(err, result) {
	console.log(err, result);
	var reputation = ezhelp.js.formatter.reputation(result[0].reputation);
	console.log(reputation);
});

ezhelp.js.api.getState('trending/ezira', function(err, result) {
	console.log(err, result);
});

ezhelp.js.api.getFollowing('ned', 0, 'blog', 10, function(err, result) {
	console.log(err, result);
});

ezhelp.js.api.getFollowers('dan', 0, 'blog', 10, function(err, result) {
	console.log(err, result);
});

ezhelp.js.api.streamOperations(function(err, result) {
	console.log(err, result);
});

ezhelp.js.api.getDiscussionsByActive({
  limit: 10,
  start_author: 'thecastle',
  start_permlink: 'this-week-in-level-design-1-22-2017'
}, function(err, result) {
	console.log(err, result);
});
