# Documentation

- [Install](#install)
- [Browser](#browser)
- [Config](#config)
- [JSON-RPC](#jsonrpc)
- [Database API](#api)
    - [Subscriptions](#subscriptions)
    - [Tags](#tags)
    - [Blocks and transactions](#blocks-and-transactions)
    - [Globals](#globals)
    - [Keys](#keys)
    - [Accounts](#accounts)
    - [Market](#market)
    - [Authority / validation](#authority--validation)
    - [Votes](#votes)
    - [Content](#content)
    - [Witnesses](#witnesses)
- [Login API](#login)
- [Follow API](#follow-api)
- [Broadcast API](#broadcast-api)
- [Broadcast](#broadcast)
- [Auth](#auth)
- [Formatter](#formatter)

# Install
```
$ npm install ezira --save
```

# Browser 
```html 
<script src="./ezira.min.js"></script>
<script>
ezira.api.getAccounts(['ned', 'dan'], function(err, response){
    console.log(err, response);
});
</script>
```

## Config
Default config should work with ezira. however you can change it to work with golos
as 
```js
ezira.api.setOptions({ url: 'wss://ws.golos.io' }); // assuming websocket is work at ws.golos.io
ezira.config.set('address_prefix','GLS');
ezira.config.set('chain_id','782a3039b478c839e4cb0c941ff4eaeb7df40bdd68bd441afd444b9da763de12');
```
### set
```
ezira.config.set('address_prefix','EZT');
```
### get
```
ezira.config.get('chain_id');
```

## JSON-RPC
Here is how to activate JSON-RPC transport:
```js
ezira.api.setOptions({ url: 'https://api.ezira.io' });
```

# API

## Subscriptions

### Set Subscribe Callback
```
ezira.api.setSubscribeCallback(callback, clearFilter, function(err, result) {
  console.log(err, result);
});
```
### Set Pending Transaction Callback
```
ezira.api.setPendingTransactionCallback(cb, function(err, result) {
  console.log(err, result);
});
```
### Set Block Applied Callback
```
ezira.api.setBlockAppliedCallback(cb, function(err, result) {
  console.log(err, result);
});
```
### Cancel All Subscriptions
```
ezira.api.cancelAllSubscriptions(function(err, result) {
  console.log(err, result);
});
```

## Tags

### Get Trending Tags
```
ezira.api.getTrendingTags(afterTag, limit, function(err, result) {
  console.log(err, result);
});
```
### Get Discussions By Trending
```
ezira.api.getDiscussionsByTrending(query, function(err, result) {
  console.log(err, result);
});
```
### Get Discussions By Created
```
ezira.api.getDiscussionsByCreated(query, function(err, result) {
  console.log(err, result);
});
```
### Get Discussions By Active
```
ezira.api.getDiscussionsByActive(query, function(err, result) {
  console.log(err, result);
});
```
### Get Discussions By Cashout
```
ezira.api.getDiscussionsByCashout(query, function(err, result) {
  console.log(err, result);
});
```
### Get Discussions By Payout
```
ezira.api.getDiscussionsByPayout(query, function(err, result) {
  console.log(err, result);
});
```
### Get Discussions By Votes
```
ezira.api.getDiscussionsByVotes(query, function(err, result) {
  console.log(err, result);
});
```
### Get Discussions By Children
```
ezira.api.getDiscussionsByChildren(query, function(err, result) {
  console.log(err, result);
});
```
### Get Discussions By Hot
```
ezira.api.getDiscussionsByHot(query, function(err, result) {
  console.log(err, result);
});
```
### Get Discussions By Feed
```
ezira.api.getDiscussionsByFeed(query, function(err, result) {
  console.log(err, result);
});
```
### Get Discussions By Blog
```
ezira.api.getDiscussionsByBlog(query, function(err, result) {
  console.log(err, result);
});
```
### Get Discussions By Comments
```
ezira.api.getDiscussionsByComments(query, function(err, result) {
  console.log(err, result);
});
```

## Blocks and transactions

### Get Block Header
```
ezira.api.getBlockHeader(blockNum, function(err, result) {
  console.log(err, result);
});
```
### Get Block
```
ezira.api.getBlock(blockNum, function(err, result) {
  console.log(err, result);
});
```
### Get State
```
ezira.api.getState(path, function(err, result) {
  console.log(err, result);
});
```
### Get Trending Categories
```
ezira.api.getTrendingCategories(after, limit, function(err, result) {
  console.log(err, result);
});
```
### Get Best Categories
```
ezira.api.getBestCategories(after, limit, function(err, result) {
  console.log(err, result);
});
```
### Get Active Categories
```
ezira.api.getActiveCategories(after, limit, function(err, result) {
  console.log(err, result);
});
```
### Get Recent Categories
```
ezira.api.getRecentCategories(after, limit, function(err, result) {
  console.log(err, result);
});
```

## Globals

### Get Config
```
ezira.api.getConfig(function(err, result) {
  console.log(err, result);
});
```
### Get Dynamic Global Properties
```
ezira.api.getDynamicGlobalProperties(function(err, result) {
  console.log(err, result);
});
```
### Get Chain Properties
```
ezira.api.getChainProperties(function(err, result) {
  console.log(err, result);
});
```
### Get Feed History
```
ezira.api.getFeedHistory(function(err, result) {
  console.log(err, result);
});
```
### Get Current Median History Price
```
ezira.api.getCurrentMedianHistoryPrice(function(err, result) {
  console.log(err, result);
});
```
### Get Hardfork Version
```
ezira.api.getHardforkVersion(function(err, result) {
  console.log(err, result);
});
```
### Get Next Scheduled Hardfork
```
ezira.api.getNextScheduledHardfork(function(err, result) {
  console.log(err, result);
});
```
### Get Reward Fund
```
ezira.api.getRewardFund(name, function(err, result) {
  console.log(err, result);
});
```
### Get Vesting Delegations
```
ezira.api.getVestingDelegations(account, from, limit, function(err, result) {
  console.log(err, result);
});
```

## Keys

### Get Key References
```
ezira.api.getKeyReferences(key, function(err, result) {
  console.log(err, result);
});
```

## Accounts

### Get Accounts
```
ezira.api.getAccounts(names, function(err, result) {
  console.log(err, result);
});
```
### Get Account References
```
ezira.api.getAccountReferences(accountId, function(err, result) {
  console.log(err, result);
});
```
### Lookup Account Names
```
ezira.api.lookupAccountNames(accountNames, function(err, result) {
  console.log(err, result);
});
```
### Lookup Accounts
```
ezira.api.lookupAccounts(lowerBoundName, limit, function(err, result) {
  console.log(err, result);
});
```
### Get Account Count
```
ezira.api.getAccountCount(function(err, result) {
  console.log(err, result);
});
```
### Get Conversion Requests
```
ezira.api.getConversionRequests(accountName, function(err, result) {
  console.log(err, result);
});
```
### Get Account History
```
ezira.api.getAccountHistory(account, from, limit, function(err, result) {
  console.log(err, result);
});
```
### Get Owner History
```
ezira.api.getOwnerHistory(account, function(err, result) {
  console.log(err, result);
});
```
### Get Recovery Request
```
ezira.api.getRecoveryRequest(account, function(err, result) {
  console.log(err, result);
});
```

## Market

### Get Order Book
```
ezira.api.getOrderBook(limit, function(err, result) {
  console.log(err, result);
});
```
### Get Open Orders
```
ezira.api.getOpenOrders(owner, function(err, result) {
  console.log(err, result);
});
```
### Get Liquidity Queue
```
ezira.api.getLiquidityQueue(startAccount, limit, function(err, result) {
  console.log(err, result);
});
```

## Authority / validation

### Get Transaction Hex
```
ezira.api.getTransactionHex(trx, function(err, result) {
  console.log(err, result);
});
```
### Get Transaction
```
ezira.api.getTransaction(trxId, function(err, result) {
  console.log(err, result);
});
```
### Get Required Signatures
```
ezira.api.getRequiredSignatures(trx, availableKeys, function(err, result) {
  console.log(err, result);
});
```
### Get Potential Signatures
```
ezira.api.getPotentialSignatures(trx, function(err, result) {
  console.log(err, result);
});
```
### Verify Authority
```
ezira.api.verifyAuthority(trx, function(err, result) {
  console.log(err, result);
});
```
### Verify Account Authority
```
ezira.api.verifyAccountAuthority(nameOrId, signers, function(err, result) {
  console.log(err, result);
});
```

## Votes

### Get Active Votes
```
ezira.api.getActiveVotes(author, permlink, function(err, result) {
  console.log(err, result);
});
```
### Get Account Votes
```
ezira.api.getAccountVotes(voter, function(err, result) {
  console.log(err, result);
});
```

## Content


### Get Content
```
ezira.api.getContent(author, permlink, function(err, result) {
  console.log(err, result);
});
```
### Get Content Replies
```
ezira.api.getContentReplies(author, permlink, function(err, result) {
  console.log(err, result);
});
```
### Get Discussions By Author Before Date
```
ezira.api.getDiscussionsByAuthorBeforeDate(author, startPermlink, beforeDate, limit, function(err, result) {
  console.log(err, result);
});
```
### Get Replies By Last Update
```
ezira.api.getRepliesByLastUpdate(startAuthor, startPermlink, limit, function(err, result) {
  console.log(err, result);
});
```

## Witnesses


### Get Witnesses
```
ezira.api.getWitnesses(witnessIds, function(err, result) {
  console.log(err, result);
});
```
### Get Witness By Account
```
ezira.api.getWitnessByAccount(accountName, function(err, result) {
  console.log(err, result);
});
```
### Get Witnesses By Vote
```
ezira.api.getWitnessesByVote(from, limit, function(err, result) {
  console.log(err, result);
});
```
### Lookup Witness Accounts
```
ezira.api.lookupWitnessAccounts(lowerBoundName, limit, function(err, result) {
  console.log(err, result);
});
```
### Get Witness Count
```
ezira.api.getWitnessCount(function(err, result) {
  console.log(err, result);
});
```
### Get Active Witnesses
```
ezira.api.getActiveWitnesses(function(err, result) {
  console.log(err, result);
});
```
### Get Miner Queue
```
ezira.api.getMinerQueue(function(err, result) {
  console.log(err, result);
});
```

## Login API

### Login

/!\ It's **not safe** to use this method with your username and password. This method always return `true` and is only used in intern with empty values to enable broadcast.

```
ezira.api.login('', '', function(err, result) {
  console.log(err, result);
});
```

### Get Api By Name
```
ezira.api.getApiByName(apiName, function(err, result) {
  console.log(err, result);
});
```

## Follow API

### Get Followers
```
ezira.api.getFollowers(following, startFollower, followType, limit, function(err, result) {
  console.log(err, result);
});
```
### Get Following
```
ezira.api.getFollowing(follower, startFollowing, followType, limit, function(err, result) {
  console.log(err, result);
});
```
### Get Follow Count
```
ezira.api.getFollowCount(account, function(err, result) {
  console.log(err, result);
});
```

## Broadcast API

### Broadcast Transaction Synchronous
```
ezira.api.broadcastTransactionSynchronous(trx, function(err, result) {
  console.log(err, result);
});
```
### Broadcast Block
```
ezira.api.broadcastBlock(b, function(err, result) {
  console.log(err, result);
});
```

# Broadcast

### Account Create
```
ezira.broadcast.accountCreate(wif, fee, creator, newAccountName, owner, active, posting, memoKey, jsonMetadata, function(err, result) {
  console.log(err, result);
});
```
### Account Create With Delegation
```
ezira.broadcast.accountCreateWithDelegation(wif, fee, delegation, creator, newAccountName, owner, active, posting, memoKey, jsonMetadata, extensions, function(err, result) {
  console.log(err, result);
});
```
### Delegate Vesting Shares
```
ezira.broadcast.delegateVestingShares(wif, delegator, delegatee, vesting_shares, function(err, result) {
  console.log(err, result);
});
```
### Account Update
```
ezira.broadcast.accountUpdate(wif, account, owner, active, posting, memoKey, jsonMetadata, function(err, result) {
  console.log(err, result);
});
```
### Account Witness Proxy
```
ezira.broadcast.accountWitnessProxy(wif, account, proxy, function(err, result) {
  console.log(err, result);
});
```
### Account Witness Vote
```
ezira.broadcast.accountWitnessVote(wif, account, witness, approve, function(err, result) {
  console.log(err, result);
});
```
### Challenge Authority
```
ezira.broadcast.challengeAuthority(wif, challenger, challenged, requireOwner, function(err, result) {
  console.log(err, result);
});
```
### Change Recovery Account
```
ezira.broadcast.changeRecoveryAccount(wif, accountToRecover, newRecoveryAccount, extensions, function(err, result) {
  console.log(err, result);
});
```
### Comment
```
ezira.broadcast.comment(wif, parentAuthor, parentPermlink, author, permlink, title, body, jsonMetadata, function(err, result) {
  console.log(err, result);
});
```
### Comment Options
```
ezira.broadcast.commentOptions(wif, author, permlink, maxAcceptedPayout, percentEziraDollars, allowVotes, allowCurationRewards, extensions, function(err, result) {
  console.log(err, result);
});
```
### Comment Payout
```
ezira.broadcast.commentPayout(wif, author, permlink, payout, function(err, result) {
  console.log(err, result);
});
```
### Comment Reward
```
ezira.broadcast.commentReward(wif, author, permlink, sbdPayout, vestingPayout, function(err, result) {
  console.log(err, result);
});
```
### Convert
```
ezira.broadcast.convert(wif, owner, requestid, amount, function(err, result) {
  console.log(err, result);
});
```
### Curate Reward
```
ezira.broadcast.curateReward(wif, curator, reward, commentAuthor, commentPermlink, function(err, result) {
  console.log(err, result);
});
```
### Custom
```
ezira.broadcast.custom(wif, requiredAuths, id, data, function(err, result) {
  console.log(err, result);
});
```
### Custom Binary
```
ezira.broadcast.customBinary(wif, id, data, function(err, result) {
  console.log(err, result);
});
```
### Custom Json
```
ezira.broadcast.customJson(wif, requiredAuths, requiredPostingAuths, id, json, function(err, result) {
  console.log(err, result);
});
```
### Delete Comment
```
ezira.broadcast.deleteComment(wif, author, permlink, function(err, result) {
  console.log(err, result);
});
```
### Escrow Dispute
```
ezira.broadcast.escrowDispute(wif, from, to, agent, who, escrowId, function(err, result) {
  console.log(err, result);
});
```
### Escrow Release
```
ezira.broadcast.escrowRelease(wif, from, to, agent, who, receiver, escrowId, sbdAmount, eziraAmount, function(err, result) {
  console.log(err, result);
});
```
### Escrow Transfer
```
ezira.broadcast.escrowTransfer(wif, from, to, agent, escrowId, sbdAmount, eziraAmount, fee, ratificationDeadline, escrowExpiration, jsonMeta, function(err, result) {
  console.log(err, result);
});
```
### Feed Publish
```
ezira.broadcast.feedPublish(wif, publisher, exchangeRate, function(err, result) {
  console.log(err, result);
});
```
### Pow2
```
ezira.broadcast.pow2(wif, work, newOwnerKey, props, function(err, result) {
  console.log(err, result);
});
```
### Fill Convert Request
```
ezira.broadcast.fillConvertRequest(wif, owner, requestid, amountIn, amountOut, function(err, result) {
  console.log(err, result);
});
```
### Fill Order
```
ezira.broadcast.fillOrder(wif, currentOwner, currentOrderid, currentPays, openOwner, openOrderid, openPays, function(err, result) {
  console.log(err, result);
});
```
### Fill Vesting Withdraw
```
ezira.broadcast.fillVestingWithdraw(wif, fromAccount, toAccount, withdrawn, deposited, function(err, result) {
  console.log(err, result);
});
```
### Interest
```
ezira.broadcast.interest(wif, owner, interest, function(err, result) {
  console.log(err, result);
});
```
### Limit Order Cancel
```
ezira.broadcast.limitOrderCancel(wif, owner, orderid, function(err, result) {
  console.log(err, result);
});
```
### Limit Order Create
```
ezira.broadcast.limitOrderCreate(wif, owner, orderid, amountToSell, minToReceive, fillOrKill, expiration, function(err, result) {
  console.log(err, result);
});
```
### Limit Order Create2
```
ezira.broadcast.limitOrderCreate2(wif, owner, orderid, amountToSell, exchangeRate, fillOrKill, expiration, function(err, result) {
  console.log(err, result);
});
```
### Liquidity Reward
```
ezira.broadcast.liquidityReward(wif, owner, payout, function(err, result) {
  console.log(err, result);
});
```
### Pow
```
ezira.broadcast.pow(wif, worker, input, signature, work, function(err, result) {
  console.log(err, result);
});
```
### Prove Authority
```
ezira.broadcast.proveAuthority(wif, challenged, requireOwner, function(err, result) {
  console.log(err, result);
});
```
### Recover Account
```
ezira.broadcast.recoverAccount(wif, accountToRecover, newOwnerAuthority, recentOwnerAuthority, extensions, function(err, result) {
  console.log(err, result);
});
```
### Report Over Production
```
ezira.broadcast.reportOverProduction(wif, reporter, firstBlock, secondBlock, function(err, result) {
  console.log(err, result);
});
```
### Request Account Recovery
```
ezira.broadcast.requestAccountRecovery(wif, recoveryAccount, accountToRecover, newOwnerAuthority, extensions, function(err, result) {
  console.log(err, result);
});
```
### Escrow Approve
```
ezira.broadcast.escrowApprove(wif, from, to, agent, who, escrowId, approve, function(err, result) {
  console.log(err, result);
});
```
### Set Withdraw Vesting Route
```
ezira.broadcast.setWithdrawVestingRoute(wif, fromAccount, toAccount, percent, autoVest, function(err, result) {
  console.log(err, result);
});
```
### Transfer
```
ezira.broadcast.transfer(wif, from, to, amount, memo, function(err, result) {
  console.log(err, result);
});
```
### Transfer To Vesting
```
ezira.broadcast.transferToVesting(wif, from, to, amount, function(err, result) {
  console.log(err, result);
});
```
### Vote
```
ezira.broadcast.vote(wif, voter, author, permlink, weight, function(err, result) {
  console.log(err, result);
});
```
### Withdraw Vesting
```
ezira.broadcast.withdrawVesting(wif, account, vestingShares, function(err, result) {
  console.log(err, result);
});
```
### Witness Update
```
ezira.broadcast.witnessUpdate(wif, owner, url, blockSigningKey, props, fee, function(err, result) {
  console.log(err, result);
});
```
### Fill Vesting Withdraw
```
ezira.broadcast.fillVestingWithdraw(wif, fromAccount, toAccount, withdrawn, deposited, function(err, result) {
  console.log(err, result);
});
```
### Fill Order
```
ezira.broadcast.fillOrder(wif, currentOwner, currentOrderid, currentPays, openOwner, openOrderid, openPays, function(err, result) {
  console.log(err, result);
});
```
### Fill Transfer From Savings
```
ezira.broadcast.fillTransferFromSavings(wif, from, to, amount, requestId, memo, function(err, result) {
  console.log(err, result);
});
```
### Comment Payout
```
ezira.broadcast.commentPayout(wif, author, permlink, payout, function(err, result) {
  console.log(err, result);
});
```
### Transfer To Savings
```
ezira.broadcast.transferToSavings(wif, from, to, amount, memo, function(err, result) {
  console.log(err, result);
});
```
### Transfer From Savings
```
ezira.broadcast.transferFromSavings(wif, from, requestId, to, amount, memo, function(err, result) {
  console.log(err, result);
});
```
### Cancel Transfer From Savings
```
ezira.broadcast.cancelTransferFromSavings(wif, from, requestId, function(err, result) {
  console.log(err, result);
});
```

### Multisig
You can use multisignature to broadcast an operation.
```
ezira.broadcast.send({
  extensions: [],
  operations: [
    ['vote', {
      voter: 'guest123',
      author: 'fabien',
      permlink: 'test',
      weight: 1000
    }]
  ]}, [privPostingWif1, privPostingWif2], (err, result) => {
  console.log(err, result);
});
```

# Auth

### Verify
```
ezira.auth.verify(name, password, auths);
```

### Generate Keys
```
ezira.auth.generateKeys(name, password, roles);
```

### Get Private Keys
```
ezira.auth.getPrivateKeys(name, password, roles);
```

### Is Wif
```
ezira.auth.isWif(privWif);
```

### To Wif
```
ezira.auth.toWif(name, password, role);
```

### Wif Is Valid
```
ezira.auth.wifIsValid(privWif, pubWif);
```

### Wif To Public
```
ezira.auth.wifToPublic(privWif);
```

### Sign Transaction
```
ezira.auth.signTransaction(trx, keys);
```

# Formatter

### Create Suggested Password
```
var password = ezira.formatter.createSuggestedPassword();
console.log(password);
// => 'GAz3GYFvvQvgm7t2fQmwMDuXEzDqTzn9'
```

### Comment Permlink
```
var parentAuthor = 'ned';
var parentPermlink = 'a-selfie';
var commentPermlink = ezira.formatter.commentPermlink(parentAuthor, parentPermlink);
console.log(commentPermlink);
// => 're-ned-a-selfie-20170621t080403765z'
```

### Estimate Account Value
```
var eziraPower = ezira.formatter.estimateAccountValue(account);
```

### Reputation
```
var reputation = ezira.formatter.reputation(3512485230915);
console.log(reputation);
// => 56
```

### Vest To Ezira
```
var eziraPower = ezira.formatter.vestToEzira(vestingShares, totalVestingShares, totalVestingFundEzira);
console.log(eziraPower);
```

# Utils

### Validate Username
```
var isValidUsername = ezira.utils.validateAccountName('test1234');
console.log(isValidUsername);
// => 'null'

var isValidUsername = ezira.utils.validateAccountName('a1');
console.log(isValidUsername);
// => 'Account name should be longer.'
```
