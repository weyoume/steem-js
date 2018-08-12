var ezira = require('../lib');

ezira.api.getAccountCount(function(err, result) {
	console.log(err, result);
});

ezira.api.getAccounts(['dan'], function(err, result) {
	console.log(err, result);
	var reputation = ezira.formatter.reputation(result[0].reputation);
	console.log(reputation);
});

ezira.api.getState('trending/ezira', function(err, result) {
	console.log(err, result);
});

ezira.api.getFollowing('ned', 0, 'blog', 10, function(err, result) {
	console.log(err, result);
});

ezira.api.getFollowers('dan', 0, 'blog', 10, function(err, result) {
	console.log(err, result);
});

ezira.api.streamOperations(function(err, result) {
	console.log(err, result);
});

ezira.api.getDiscussionsByActive({
  limit: 10,
  start_author: 'thecastle',
  start_permlink: 'this-week-in-level-design-1-22-2017'
}, function(err, result) {
	console.log(err, result);
});
