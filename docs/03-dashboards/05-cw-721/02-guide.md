---
sidebar_position: 2
---

# Guide

In this guide, we'll go over how to instantiate, query, and execute CW721 methods seen below.

![](/img/cw-721/cw-721-options.png)

## Instantiate

In order to create a CW721 contract, which can be an NFT collection or a single NFT, it must be instantiated first.

Thanks to the JunoTools dashboard, you can easily instantiate a CW721 contract.

The only thing you need to decide is the **Minter Address**, which will be the only authority to mint new tokens inside the CW721 contract.

![](/img/cw-721/cw721-instantiate.png)

## Query
Querying a CW721 token means gathering information related to that token directly from the blockchain.

Using the dashboard, it is possible to query any CW721 token for

<img src="/img/cw-721/queries.png" width="400" />

However, each query requires at least 1 input which is the CW721 contract address. 

**Number of Tokens**, **Contract Info**, **All Tokens**, and **Minter** queries do not require additional parameters other than the CW721 contract address. Required parameters for other queries are shown below.

- **Owner Of**: Outputs the owner of a token inside the contract
  - Token ID
- **Approval**: The permissions an address has over a token.
  - Owner Address
  - Token ID
- **Approvals**: The list of all approvals given by the owner of the token.
  - Token ID
- **All Operators**: explanation will be added shortly.
  - Owner Address
- **NFT Info**: Contains token URI and extension informations.
  - Token ID
- **All NFT Info**: More comprehensive information related to the NFT such as owner address and all the approvals.
  - Token ID
- **Tokens**: All the tokens an address owns.
  - Owner Address

## Execute
A CW721 Contract contains a set of methods to control and interact with the tokens it contains. JunoTools lets you easily execute those methods as you wish with just a click.

![](/img/cw-721/execute.png)

All the messages that can be executed and their parameters are given below.

- **Transfer NFT**: Transfer an NFT to another address.
  - Recipient Address
  - Token ID
- **Send NFT**: Transfer an NFT to another address then execute a message.
  - Recipient Address
  - Token ID
  - Message to Execute
- **Approve**: Allow another address to transfer/send a token from the owner's address.
  - Recipient Address
  - Token ID
- **Revoke**: Remove the transfer/send permissions of an address over a token.
  - Recipient Address
  - Token ID
- **Approve All**: Allow another address to transfer/send **all the tokens** from the owner's address.
  - Recipient Address
- **Revoke All**: Remove the transfer/send permissions of an address over **all of the tokens**.
  - Recipient Address
- **Mint**: Mint a new token to an address.
  - Recipient Address
  - Token ID
- **Burn**: Burn a token you have access to.
  - Token ID

After each execution, the corresponding transaction hash will be prompted for your information.

<img src="/img/cw-721/tx-hash.png" width="400" />

Congrats! You have successfully learned how to create a CW721 contract and interact with it.
