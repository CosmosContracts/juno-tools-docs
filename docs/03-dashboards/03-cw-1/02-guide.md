---
sidebar_position: 2
---

# Guide

In this guide, we'll go over how to instantiate, query, and execute CW1 methods seen below.

![](/img/cw-1/methods.png)

## Instantiate

Instantiating a CW1 contract is simple with only 1 thing to decide, which is whether you want the contract admin to be changeable or not.

![](/img/cw-1/cw-1-instantiate.png)

In case you choose **Not Changeable**, you will have to create a new contract in case you want a new admin address.

:::info
You can add multiple admin addresses by clicking the **+** sign.
:::

## Query
Querying a CW1 token means gathering information related to that contract directly from the blockchain.

Using the dashboard, it is possible to query any CW1 contract for

<img src="/img/cw-1/queries.png" width="400" />

However, each query requires at least 1 input which is the CW1 contract address. 

Checking the **Admins**, **All Permissions**, and **All Allowances** queries do not require additional parameters other than CW1 contract address. Required parameters for other queries are shown below.

- **Allowance** which is an amount allowed by the admin to another address for sending, transferring, delegating, redelegating and undelegating.
  - Spender address
- **All Allowance** is the list of all allowances the admin has provided.
- **Permissions** is the permissions an address have provided by the admin.
  - Address to check permissions
- **All Permissions** is the list of all addresses and their assigned permissions.
- **Can Execute** explanation will be added shortly.

## Execute
A CW1 Contract contains a set of methods to control and interact with the token it contains. JunoTools let's you easily execute those methods as you wish with just a click.

![](/img/cw-1/execute.png)

All the messages that can be executed are explained below.

- **Execute**: To execute a message, an admin has to give permission to an address. The address can execute the messages they have the permission which are as follows
  - **Send**: explanation will be added shortly.
  - **Delegate**: explanation will be added shortly.
  - **Undelegate**: explanation will be added shortly.
  - **Redelegate**: explanation will be added shortly.
  - **Withdraw**: explanation will be added shortly.
- **Freeze***: If the contract is initially set as **Changeable**, an admin can freeze the contract and stopping anyone from adding a new admin.
- **Update Admins**: Add a set of new admins to replace the older ones. This is possible if the contract is not frozen and is changeable.
- **Increase Allowance**: Increase the allowance of an address based on the contracts balance
- **Decrease Allowance**: Decrease the allowance of an address based on the contracts balance.
- **Set Permissions***: Set new permissions for an address.

*: admin only

After each execution, the corresponding transaction hash will be prompted for your information.

<img src="/img/cw-1/tx-hash.png" width="400" />

Congrats! You have successfully learned how to create a CW1 contract and interact with it.