---
sidebar_position: 2
---

# Guide

In this guide, we'll go over how to instantiate, query, and execute CW-20 methods.

## Instantiate

In order to create a CW-20 token, a CW-20 contract must be instantiated. 

Thanks to JunoTools dashboard, you can easily instantiate a CW-20 contract.

Before creating a CW-20 token, you must decide on the following information. However, some of them are optional.

### Token Details
- **Name** is the full name of your token.
- **Symbol** is the shortening of your CW-20 token name.
- **Decimals** denote how much divisible your token is. If your token has 6 decimals, it means addresses can have as little as 0.000001 your token.
- **Initial Balance** is the amount of existing tokens at the creation block.

### Mint
- **Minter Address** is the address that has access to mint new tokens.
- **Cap** is the maximumum amount of tokens that exist.

### Marketing
- **Project** is the name shown on marketing details
- **Description** is where you can store detailed project information about your token.
- **Wallet Address** will be shown as the marketing address of your token.
- **Logo URL** is any URL that contains an image, your token will have that URL information for marketing and branding purposes.

## Query
Querying a CW-20 token means gathering information related to that token directly from blockchain.

Using this dashboard, it is possible to query any CW-20 token for
- **Balance** of a specific account,
- **Allowance** which is an amount allowed by some address to another address for spending.
- **All Allowance** is the list of all allowances an address has provided.
- **All Accounts** that have the token.
- **Minter** of the token.
- **Marketing** information provided by the token.

## Execute