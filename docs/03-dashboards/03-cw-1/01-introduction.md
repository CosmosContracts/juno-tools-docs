---
sidebar_position: 1
---

# Introduction

## What's a CW-1 Subkeys Contract?

CW1 is a specification for proxy contracts based on CosmWasm. It is a very simple, but flexible interface designed for the case where one contract is meant to hold assets (or rights) on behalf of other contracts.

A use case would be sharing and utilizing an account between few addresses. Such as depositing an asset and giving some other addresses, called sub-accounts, allowances which gives them control to execute some messages over those assets such as
- send,
- withdraw
- delegate,
- undelegate,
- and redelegate.

An admin has full control over the contract and is able to
- increase/decrease allowances,
- set executable message permission of an address,
- add/remove/freeze admins, this is possible only if contract is instantiated as changeable

This also lets you to transfer non-transferable assets (eg. staked tokens, voting power, etc).

You can imagine more complex examples, such as a "1 of N" multisig, or conditional approval, where "sub-accounts" have the right to spend a limited amount of funds from this account, with a "admin account" retaining full control.

## JunoTools and CW-1

JunoToools provides an easy to use interface for creating and interacting with CW-1 contracts.

Using JunoTools you can:
- instantiate,
- query,
- and execute CW-1 contract methods. 

All without paying any **extra** fees.
