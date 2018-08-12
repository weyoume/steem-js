[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/eziranetwork/ezjs/blob/master/LICENSE)
[![Ezira.js channel on steemit.chat](https://img.shields.io/badge/chat-steemit.chat-1c56a4.svg)](https://steemit.chat/channel/steemjs)

# Ezira.js
Ezira.js the JavaScript API for Ezira blockchain

# Documentation

- [Install](https://github.com/eziranetwork/ezjs/tree/master/doc#install)
- [Browser](https://github.com/eziranetwork/ezjs/tree/master/doc#browser)
- [Config](https://github.com/eziranetwork/ezjs/tree/master/doc#config)
- [Database API](https://github.com/eziranetwork/ezjs/tree/master/doc#api)
    - [Subscriptions](https://github.com/eziranetwork/ezjs/tree/master/doc#subscriptions)
    - [Tags](https://github.com/eziranetwork/ezjs/tree/master/doc#tags)
    - [Blocks and transactions](https://github.com/eziranetwork/ezjs/tree/master/doc#blocks-and-transactions)
    - [Globals](https://github.com/eziranetwork/ezjs/tree/master/doc#globals)
    - [Keys](https://github.com/eziranetwork/ezjs/tree/master/doc#keys)
    - [Accounts](https://github.com/eziranetwork/ezjs/tree/master/doc#accounts)
    - [Market](https://github.com/eziranetwork/ezjs/tree/master/doc#market)
    - [Authority / validation](https://github.com/eziranetwork/ezjs/tree/master/doc#authority--validation)
    - [Votes](https://github.com/eziranetwork/ezjs/tree/master/doc#votes)
    - [Content](https://github.com/eziranetwork/ezjs/tree/master/doc#content)
    - [Witnesses](https://github.com/eziranetwork/ezjs/tree/master/doc#witnesses)
- [Login API](https://github.com/eziranetwork/ezjs/tree/master/doc#login)
- [Follow API](https://github.com/eziranetwork/ezjs/tree/master/doc#follow-api)
- [Broadcast API](https://github.com/eziranetwork/ezjs/tree/master/doc#broadcast-api)
- [Broadcast](https://github.com/eziranetwork/ezjs/tree/master/doc#broadcast)
- [Auth](https://github.com/eziranetwork/ezjs/tree/master/doc#auth)


Here is full documentation:
https://github.com/eziranetwork/ezjs/tree/master/doc

## Browser
```html
<script src="./ezira.min.js"></script>
<script>
ezira.api.getAccounts(['ned', 'dan'], function(err, response){
    console.log(err, response);
});
</script>
```

## CDN
https://cdn.ezira.io/lib/latest/ezira.min.js<br/>
```html
<script src="//cdn.ezira.io/lib/latest/ezira.min.js"></script>
```

## Webpack
[Please have a look at the webpack usage example.](https://github.com/eziranetwork/ezjs/blob/master/examples/webpack-example)

## Server
## Install
```
$ npm install ezira --save
```

## RPC Servers
https://api.ezira.io By Default<br/>
https://peer0.ezira.io:8090<br/>
https://peer0.ezira.io:8091<br/>
https://peer0.ezira.io:8092<br/>

## Examples
### Broadcast Vote
```js
var ezira = require('ezira');

var wif = ezira.auth.toWif(username, password, 'posting');
ezira.broadcast.vote(wif, voter, author, permlink, weight, function(err, result) {
	console.log(err, result);
});
```

### Get Accounts
```js
ezira.api.getAccounts(['ned', 'dan'], function(err, result) {
	console.log(err, result);
});
```

### Get State
```js
ezira.api.getState('/trends/funny', function(err, result) {
	console.log(err, result);
});
```

### Reputation Formatter
```js
var reputation = ezira.formatter.reputation(user.reputation);
console.log(reputation);
```

## Contributions
Patches are welcome! Contributors are listed in the package.json file. Please run the tests before opening a pull request and make sure that you are passing all of them. If you would like to contribute, but don't know what to work on, check the issues list or on Ezira Chat channel #ezjs https://steemit.chat/channel/steemjs.

## Issues
When you find issues, please report them!

## License
MIT
