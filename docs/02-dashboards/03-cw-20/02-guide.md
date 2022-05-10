---
sidebar_position: 2
---

# Guide

In this guide, we'll go over how to instantiate, query, and execute CW-20 methods seen below.

![](/img/cw-20/cw-20-options.png)

## Instantiate

In order to create a CW-20 token, a CW-20 contract must be instantiated.

Thanks to JunoTools dashboard, you can easily instantiate a CW-20 contract.

Before creating a CW-20 token, you must decide on the following information. However, some of them are optional.

### Token Details

![](/img/cw-20/token-details.png)

- **Name** is the full name of your token.
- **Symbol** is the shortening of your CW-20 token name.
- **Decimals** denote how much divisible your token is. If your token has 6 decimals, it means addresses can have as little as 0.000001 of your token.
- **Initial Balance** is the number of existing tokens at the creative block.

### Mint
![](/img/cw-20/mint.png)
- **Minter Address** is the address that has access to mint new tokens.
- **Cap** is the maximum amount of tokens that exist.

### Marketing
![](/img/cw-20/marketing.png)
- **Project** is the name shown on marketing details
- **Description** is where you can store detailed project information about your token.
- **Wallet Address** will be shown as the marketing address of your token.
- **Logo URL** is any URL that contains an image, your token will have that URL information for marketing and branding purposes.

## Query
Querying a CW-20 token means gathering information related to that token directly from the blockchain.

Using the dashboard, it is possible to query any CW-20 token for

<img src="/img/cw-20/queries.png" width="400" />

However, each query requires at least 1 input which is the CW-20 contract address. 

**All Accounts**, **Minter**, and **Marketing** queries do not require additional parameters other than CW-20 contract address. Required parameters for other queries are shown below.

- **Balance** of a specific address
  - Owner Adress
- **Allowance** which is an amount allowed by some address to another address for spending or burning.
  - Allower address
  - Spender address
- **All Allowance** is the list of all allowances an address has provided.
  - Allower Address
- **All Accounts** that have the token.
- **Minter** address the token contract.
- **Marketing** information provided by the token.

## Execute
A CW-20 Contract contains a set of methods to control and interact with the token it contains. JunoTools let's you easily execute those methods as you wish with just a click.

![](/img/cw-20/execute.png)

All the messages that can be executed are explained below.

- **Burn**: Remove some amount of tokens from **your** balance and reduce total token supply by the same amount.
- **Burn From**: Make use of an allowance and remove some amount of tokens from the balance of **another** address.
- **Increase Allowance**: Increase the allowance of an address based on your balance.
- **Decrease Allowance**: Decrease the allowance of an address based on your balance.
- **Transfer**: Move some amount of tokens from one address to another address.
- **Transfer From**: Make use of an allowance and move some amount of tokens from one address to another address. Your address must be given allowance from another address to use this.
- **Send**: Move some amount of tokens from one address to another address and execute a message in the end.
- **Send From**: Make use of an allowance and move some amount of tokens from one address to another address and execute a message in the end.
- **Update Marketing**: Update marketing information related to your token contract.
- **Update Logo**: Update token logo URL.

After each execution, the corresponding transaction hash will be prompted for your information.

<img src="/img/cw-20/tx-hash.png" width="400" />

Congrats! You have successfully learned how to create a CW-20 token and interact with it.