
// This file is merge updated from node's js_operation_serializer program.
/*

./js_operation_serializer |
sed 's/void/future_extensions/g'|
sed 's/node_protocol:://g'|
sed 's/14static_variantIJNS_12fixed_stringINSt3__14pairIyyEEEEEEE/string/g'|
sed 's/node_future_extensions/future_extensions/g'|
sed 's/node_protocol_//g' > tmp.coffee

*/
// coffee tmp.coffee # fix errors until you see: `ChainTypes is not defined`

/*

   remove these 7 lines from tmp.coffee:

static_variant [
    pow2
    equihash_pow
] = static_variant [
    pow2
    equihash_pow
]

*/

// npm i -g decaffeinate
// decaffeinate tmp.coffee

// Merge tmp.js - See "Generated code follows" below

import types from "./types"
import SerializerImpl from "./serializer"

const {
    //id_type,
    //varint32, uint8, int64, fixed_array, object_id_type, vote_id, address,
    uint16, uint32, int16, uint64,
    string, string_binary, bytes, bool, array,
    // protocol_id_type,
    static_variant, map, set,
    public_key,
    time_point_sec,
    optional,
    asset,
} = types

const future_extensions = types.void
const hardfork_version_vote = types.void
const version = types.void

// Place-holder, their are dependencies on "operation" .. The final list of
// operations is not avialble until the very end of the generated code.
// See: operation.st_operations = ...
const operation = static_variant();
module.exports.operation = operation;

// For module.exports
const Serializer=function(operation_name, serilization_types_object){
    const s = new SerializerImpl(operation_name, serilization_types_object);
    return module.exports[operation_name] = s;
}

const beneficiaries = new Serializer("beneficiaries", {
  account: string,
  weight: uint16
});

const comment_payout_beneficiaries = new Serializer(0, {
  beneficiaries: set(beneficiaries)
});

// Custom-types after Generated code

// ##  Generated code follows
// -------------------------------
/*
When updating generated code (fix closing notation)
Replace:  var operation = static_variant([
with:     operation.st_operations = [

Delete (these are custom types instead):
let public_key = new Serializer( 
    "public_key",
    {key_data: bytes(33)}
);

let asset = new Serializer( 
    "asset",
    {amount: int64,
    symbol: uint64}
);

Replace: authority.prototype.account_authority_map
With: map((string), (uint16))
*/
let signed_transaction = new Serializer( 
    "signed_transaction", {
    ref_block_num: uint16,
    ref_block_prefix: uint32,
    expiration: time_point_sec,
    operations: array(operation),
    extensions: set(future_extensions),
    signatures: array(bytes(65))
}
);

let signed_block = new Serializer( 
    "signed_block", {
    previous: bytes(20),
    timestamp: time_point_sec,
    witness: string,
    transaction_merkle_root: bytes(20),
    extensions: set(static_variant([
        future_extensions,    
        version,    
        hardfork_version_vote
    ])),
    witness_signature: bytes(65),
    transactions: array(signed_transaction)
}
);

let block_header = new Serializer( 
    "block_header", {
    previous: bytes(20),
    timestamp: time_point_sec,
    witness: string,
    transaction_merkle_root: bytes(20),
    extensions: set(static_variant([
        future_extensions,    
        version,    
        hardfork_version_vote
    ]))
}
);

let signed_block_header = new Serializer( 
    "signed_block_header", {
    previous: bytes(20),
    timestamp: time_point_sec,
    witness: string,
    transaction_merkle_root: bytes(20),
    extensions: set(static_variant([
        future_extensions,    
        version,    
        hardfork_version_vote
    ])),
    witness_signature: bytes(65)
}
);

let vote = new Serializer( 
    "vote", {
    voter: string,
    author: string,
    permlink: string,
    weight: int16
}
);

let comment = new Serializer( 
    "comment", {
    parent_author: string,
    parent_permlink: string,
    author: string,
    permlink: string,
    title: string,
    body: string,
    json: string
}
);

let transfer = new Serializer( 
    "transfer", {
    from: string,
    to: string,
    amount: asset,
    memo: string
}
);

let transferTMEtoSCOREfund = new Serializer( 
    "transferTMEtoSCOREfund", {
    from: string,
    to: string,
    amount: asset
}
);

let withdrawSCORE = new Serializer( 
    "withdrawSCORE", {
    account: string,
    SCORE: asset
}
);

let limit_order_create = new Serializer( 
    "limit_order_create", {
    owner: string,
    orderid: uint32,
    amount_to_sell: asset,
    min_to_receive: asset,
    fill_or_kill: bool,
    expiration: time_point_sec
}
);

let limit_order_cancel = new Serializer( 
    "limit_order_cancel", {
    owner: string,
    orderid: uint32
}
);

let price = new Serializer( 
    "price", {
    base: asset,
    quote: asset
}
);

let feed_publish = new Serializer( 
    "feed_publish", {
    publisher: string,
    exchange_rate: price
}
);

let convert = new Serializer( 
    "convert", {
    owner: string,
    requestid: uint32,
    amount: asset
}
);

var authority = new Serializer( 
    "authority", {
    weight_threshold: uint32,
    account_auths: map((string), (uint16)),
    key_auths: map((public_key), (uint16))
}
);

let accountCreate = new Serializer( 
    "accountCreate", {
    fee: asset,
    creator: string,
    newAccountName: string,
    owner: authority,
    active: authority,
    posting: authority,
    memoKey: public_key,
    json: string
}
);

let accountUpdate = new Serializer( 
    "accountUpdate", {
    account: string,
    owner: optional(authority),
    active: optional(authority),
    posting: optional(authority),
    memoKey: public_key,
    json: string
}
);

let chain_properties = new Serializer( 
    "chain_properties", {
    account_creation_fee: asset,
    maximum_block_size: uint32,
    TSD_interest_rate: uint16
}
);

let witness_update = new Serializer( 
    "witness_update", {
    owner: string,
    url: string,
    block_signing_key: public_key,
    props: chain_properties,
    fee: asset
}
);

let accountWitnessVote = new Serializer( 
    "accountWitnessVote", {
    account: string,
    witness: string,
    approve: bool
}
);

let account_witness_proxy = new Serializer( 
    "account_witness_proxy", {
    account: string,
    proxy: string
}
);

let pow = new Serializer( 
    "pow", {
    worker: public_key,
    input: bytes(32),
    signature: bytes(65),
    work: bytes(32)
}
);

let custom = new Serializer( 
    "custom", {
    required_auths: set(string),
    id: uint16,
    data: bytes()
}
);

let report_over_production = new Serializer( 
    "report_over_production", {
    reporter: string,
    first_block: signed_block_header,
    second_block: signed_block_header
}
);

let deleteComment = new Serializer( 
    "deleteComment", {
    author: string,
    permlink: string
}
);

let customJson = new Serializer( 
    "customJson", {
    required_auths: set(string),
    required_posting_auths: set(string),
    id: string,
    json: string
}
);

let comment_options = new Serializer( 
    "comment_options", {
    author: string,
    permlink: string,
    max_accepted_payout: asset,
    percent_TSD: uint16,
    allow_votes: bool,
    allow_curationRewards: bool,
    extensions: set(static_variant([
        comment_payout_beneficiaries
    ]))
}
);

let setWithdrawSCOREasTMEroute = new Serializer( 
    "setWithdrawSCOREasTMEroute", {
    from_account: string,
    to_account: string,
    percent: uint16,
    autoSCORE: bool
}
);

let limit_order_create2 = new Serializer( 
    "limit_order_create2", {
    owner: string,
    orderid: uint32,
    amount_to_sell: asset,
    exchange_rate: price,
    fill_or_kill: bool,
    expiration: time_point_sec
}
);

let challenge_authority = new Serializer( 
    "challenge_authority", {
    challenger: string,
    challenged: string,
    require_owner: bool
}
);

let prove_authority = new Serializer( 
    "prove_authority", {
    challenged: string,
    require_owner: bool
}
);

let request_account_recovery = new Serializer( 
    "request_account_recovery", {
    recoveryAccount: string,
    accountToRecover: string,
    new_owner_authority: authority,
    extensions: set(future_extensions)
}
);

let recover_account = new Serializer(
    "recover_account", {
    accountToRecover: string,
    new_owner_authority: authority,
    recent_owner_authority: authority,
    extensions: set(future_extensions)
}
);

let change_recoveryAccount = new Serializer( 
    "change_recoveryAccount", {
    accountToRecover: string,
    new_recoveryAccount: string,
    extensions: set(future_extensions)
}
);

let escrow_transfer = new Serializer( 
    "escrow_transfer", {
    from: string,
    to: string,
    TSDamount: asset,
    TMEamount: asset,
    escrow_id: uint32,
    agent: string,
    fee: asset,
    json: string,
    ratification_deadline: time_point_sec,
    escrow_expiration: time_point_sec
}
);

let escrow_dispute = new Serializer( 
    "escrow_dispute", {
    from: string,
    to: string,
    agent: string,
    who: string,
    escrow_id: uint32
}
);

let escrow_release = new Serializer( 
    "escrow_release", {
    from: string,
    to: string,
    agent: string,
    who: string,
    receiver: string,
    escrow_id: uint32,
    TSDamount: asset,
    TMEamount: asset
}
);

let pow2_input = new Serializer( 
    "pow2_input", {
    worker_account: string,
    prev_block: bytes(20),
    nonce: uint64
}
);

let pow2 = new Serializer( 
    "pow2", {
    input: pow2_input,
    pow_summary: uint32
}
);

let equihash_proof = new Serializer( 
    "equihash_proof", {
    n: uint32,
    k: uint32,
    seed: bytes(32),
    inputs: array(uint32)
}
);

let equihash_pow = new Serializer( 
    "equihash_pow", {
    input: pow2_input,
    proof: equihash_proof,
    prev_block: bytes(20),
    pow_summary: uint32
}
);

let escrow_approve = new Serializer( 
    "escrow_approve", {
    from: string,
    to: string,
    agent: string,
    who: string,
    escrow_id: uint32,
    approve: bool
}
);

let transferToSavings = new Serializer( 
    "transferToSavings", {
    from: string,
    to: string,
    amount: asset,
    memo: string
}
);

let transferFromSavings = new Serializer( 
    "transferFromSavings", {
    from: string,
    request_id: uint32,
    to: string,
    amount: asset,
    memo: string
}
);

let cancelTransferFromSavings = new Serializer( 
    "cancelTransferFromSavings", {
    from: string,
    request_id: uint32
}
);

let custom_binary = new Serializer( 
    "custom_binary", {
    required_owner_auths: set(string),
    required_active_auths: set(string),
    required_posting_auths: set(string),
    required_auths: array(authority),
    id: string,
    data: bytes()
}
);

let decline_voting_rights = new Serializer( 
    "decline_voting_rights", {
    account: string,
    decline: bool
}
);

let reset_account = new Serializer( 
    "reset_account", {
    reset_account: string,
    account_to_reset: string,
    new_owner_authority: authority
}
);

let set_reset_account = new Serializer( 
    "set_reset_account", {
    account: string,
    current_reset_account: string,
    reset_account: string
}
);

let claimRewardBalance = new Serializer( 
    "claimRewardBalance", {
    account: string,
    TMEreward: asset,
    TSDreward: asset,
    SCOREreward: asset
}
);

let delegateSCORE = new Serializer( 
    "delegateSCORE", {
    delegator: string,
    delegatee: string,
    SCORE: asset
}
);

let accountCreateWithDelegation = new Serializer( 
    "accountCreateWithDelegation", {
    fee: asset,
    delegation: asset,
    creator: string,
    newAccountName: string,
    owner: authority,
    active: authority,
    posting: authority,
    memoKey: public_key,
    json: string,
    extensions: set(future_extensions)
}
);

let fill_convert_request = new Serializer( 
    "fill_convert_request", {
    owner: string,
    requestid: uint32,
    amount_in: asset,
    amount_out: asset
}
);

let authorReward = new Serializer( 
    "authorReward", {
    author: string,
    permlink: string,
    TSDpayout: asset,
    TMEpayout: asset,
    SCOREpayout: asset
}
);

let curationReward = new Serializer( 
    "curationReward", {
    curator: string,
    reward: asset,
    comment_author: string,
    comment_permlink: string
}
);

let comment_reward = new Serializer( 
    "comment_reward", {
    author: string,
    permlink: string,
    payout: asset
}
);

let liquidity_reward = new Serializer( 
    "liquidity_reward", {
    owner: string,
    payout: asset
}
);

let interest = new Serializer( 
    "interest", {
    owner: string,
    interest: asset
}
);

let fillSCOREWithdraw = new Serializer( 
    "fillSCOREWithdraw", {
    from_account: string,
    to_account: string,
    withdrawn: asset,
    deposited: asset
}
);

let fill_order = new Serializer( 
    "fill_order", {
    current_owner: string,
    current_orderid: uint32,
    current_pays: asset,
    open_owner: string,
    open_orderid: uint32,
    open_pays: asset
}
);

let shutdown_witness = new Serializer( 
    "shutdown_witness",
    {owner: string}
);

let fill_transferFromSavings = new Serializer( 
    "fill_transferFromSavings", {
    from: string,
    to: string,
    amount: asset,
    request_id: uint32,
    memo: string
}
);

let hardfork = new Serializer( 
    "hardfork",
    {hardfork_id: uint32}
);

let comment_payout_update = new Serializer( 
    "comment_payout_update", {
    author: string,
    permlink: string
}
);

let return_SCORE_delegation = new Serializer( 
    "return_SCORE_delegation", {
    account: string,
    SCORE: asset
}
);

let comment_benefactor_reward = new Serializer( 
    "comment_benefactor_reward", {
    benefactor: string,
    author: string,
    permlink: string,
    reward: asset
}
);

operation.st_operations = [
    vote,    
    comment,    
    transfer,    
    transferTMEtoSCOREfund,    
    withdrawSCORE,    
    limit_order_create,    
    limit_order_cancel,    
    feed_publish,    
    convert,    
    accountCreate,    
    accountUpdate,    
    witness_update,    
    accountWitnessVote,    
    account_witness_proxy,    
    pow,    
    custom,    
    report_over_production,    
    deleteComment,    
    customJson,    
    comment_options,    
    setWithdrawSCOREasTMEroute,    
    limit_order_create2,    
    challenge_authority,    
    prove_authority,    
    request_account_recovery,    
    recover_account,    
    change_recoveryAccount,    
    escrow_transfer,    
    escrow_dispute,    
    escrow_release,    
    pow2,    
    escrow_approve,    
    transferToSavings,    
    transferFromSavings,    
    cancelTransferFromSavings,    
    custom_binary,    
    decline_voting_rights,    
    reset_account,    
    set_reset_account,    
    claimRewardBalance,    
    delegateSCORE,    
    accountCreateWithDelegation,    
    fill_convert_request,    
    authorReward,    
    curationReward,    
    comment_reward,    
    liquidity_reward,    
    interest,    
    fillSCOREWithdraw,    
    fill_order,    
    shutdown_witness,    
    fill_transferFromSavings,    
    hardfork,    
    comment_payout_update,    
    return_SCORE_delegation,    
    comment_benefactor_reward
];

let transaction = new Serializer( 
    "transaction", {
    ref_block_num: uint16,
    ref_block_prefix: uint32,
    expiration: time_point_sec,
    operations: array(operation),
    extensions: set(future_extensions)
}
);

//# -------------------------------
//#  Generated code end  S T O P
//# -------------------------------

// Custom Types (do not over-write)

const encrypted_memo = new Serializer(
    "encrypted_memo",
    {from: public_key,
    to: public_key,
    nonce: uint64,
    check: uint32,
    encrypted: string_binary}
);
/*

// Make sure all tests pass

npm test

*/
