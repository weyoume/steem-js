[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/eziranetwork/ezhelp.js/blob/master/LICENSE)

# Ezira.js
Ezira.js the JavaScript API for Ezira blockchain

# Documentation

- [Install](https://github.com/eziranetwork/ezhelp.js/tree/master/doc#install)
- [Browser](https://github.com/eziranetwork/ezhelp.js/tree/master/doc#browser)
- [Config](https://github.com/eziranetwork/ezhelp.js/tree/master/doc#config)
- [Database API](https://github.com/eziranetwork/ezhelp.js/tree/master/doc#api)
    - [Subscriptions](https://github.com/eziranetwork/ezhelp.js/tree/master/doc#subscriptions)
    - [Tags](https://github.com/eziranetwork/ezhelp.js/tree/master/doc#tags)
    - [Blocks and transactions](https://github.com/eziranetwork/ezhelp.js/tree/master/doc#blocks-and-transactions)
    - [Globals](https://github.com/eziranetwork/ezhelp.js/tree/master/doc#globals)
    - [Keys](https://github.com/eziranetwork/ezhelp.js/tree/master/doc#keys)
    - [Accounts](https://github.com/eziranetwork/ezhelp.js/tree/master/doc#accounts)
    - [Market](https://github.com/eziranetwork/ezhelp.js/tree/master/doc#market)
    - [Authority / validation](https://github.com/eziranetwork/ezhelp.js/tree/master/doc#authority--validation)
    - [Votes](https://github.com/eziranetwork/ezhelp.js/tree/master/doc#votes)
    - [Content](https://github.com/eziranetwork/ezhelp.js/tree/master/doc#content)
    - [Witnesses](https://github.com/eziranetwork/ezhelp.js/tree/master/doc#witnesses)
- [Login API](https://github.com/eziranetwork/ezhelp.js/tree/master/doc#login)
- [Follow API](https://github.com/eziranetwork/ezhelp.js/tree/master/doc#follow-api)
- [Broadcast API](https://github.com/eziranetwork/ezhelp.js/tree/master/doc#broadcast-api)
- [Broadcast](https://github.com/eziranetwork/ezhelp.js/tree/master/doc#broadcast)
- [Auth](https://github.com/eziranetwork/ezhelp.js/tree/master/doc#auth)


Here is full documentation:
https://github.com/eziranetwork/ezhelp.js/tree/master/doc

## Browser
```html
<script src="./ezhelp.js.min.js"></script>
<script>
ezhelp.js.api.getAccounts(['ned', 'dan'], function(err, response){
    console.log(err, response);
});
</script>
```

## CDN
https://cdn.ezira.io/lib/latest/ezhelp.js.min.js<br/>
```html
<script src="//cdn.ezira.io/lib/latest/ezhelp.js.min.js"></script>
```

## Webpack
[Please have a look at the webpack usage example.](https://github.com/eziranetwork/ezhelp.js/blob/master/examples/webpack-example)

## Server
## Install
```
$ npm install --save ezhelp.js
```

## RPC Servers
https://api.ezira.io By Default<br/>
https://peer0.ezira.io:8090<br/>
https://peer0.ezira.io:8091<br/>
https://peer0.ezira.io:8092<br/>

## Examples
### Broadcast Vote
```js
var ezhelp.js = require('ezhelp.js');

var wif = ezhelp.js.auth.toWif(username, password, 'posting');
ezhelp.js.broadcast.vote(wif, voter, author, permlink, weight, function(err, result) {
	console.log(err, result);
});
```

### Get Accounts
```js
ezhelp.js.api.getAccounts(['ned', 'dan'], function(err, result) {
	console.log(err, result);
});
```

### Get State
```js
ezhelp.js.api.getState('/trends/funny', function(err, result) {
	console.log(err, result);
});
```

### Reputation Formatter
```js
var reputation = ezhelp.js.formatter.reputation(user.reputation);
console.log(reputation);
```

## Contributions
Patches are welcome! Contributors are listed in the package.json file. Please run the tests before opening a pull request and make sure that you are passing all of them. If you would like to contribute, but don't know what to work on, check the issues list or on the [Ezira Github](https://github.com/eziranetwork/ezira)

## Issues
When you find issues, please report them!

## License
MIT
