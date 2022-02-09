---
sidebar_position: 2
---

# Guide

In this guide, we'll go over the steps of airdropping tokens.

## Connect your wallet
To start airdropping your tokens, head to [juno.tools](https://test.juno.tools) and connect
your [Keplr wallet](https://wallet.keplr.app/).

:::tip Don't have a crypto wallet for interacting with Juno? Get Keplr!
Keplr is a web wallet for interacting with web3 applications in the interchain. You can install the keplr extension from [here](https://www.keplr.app/) if you don't have it already.
:::

:::danger Get some $JUNO!
To interact with Junotools and airdrop your CW-20 tokens, you'll need $JUNO. You can pick some up on [Osmosis](https://osmosis.zone/).
:::

## Create

Before creating an airdrop, you need to decide on a few things

* `name` which will be shown on the [available airdrops page](https://test.juno.tools/airdrops/list/).
* `accounts` holds all the `addresses` and their respective claimable `amount`.
* `cw20TokenAddress` address of the cw20 token that will be airdropped.
* `start` refers to the block number or the block timestamp, depending on the `startType`, that airdrop will become claimable. Setting it to `null` will make the airdrop claimable at the next block.
* `startType` can be set to either block number (height), block timestamp (timestamp), or null if the `start` is also null.
* `expiration` refers to the block number or the block timestamp, depending on the `expirationType`, that airdrop will expire. Setting it to `null` will keep the airdrop alive until every drop is claimed
* `expirationType` can be set to either block number (height), block timestamp (timestamp), or null if the `expiration` is also null.
* `totalAmount` is the number of tokens to be airdropped.

:::tip
When start and expiration fields are taken as timestamps, they should be UNIX timestamps in seconds. So Wednesday, February 9, 2022, 8:09:32 AM becomes 1644394172. This is what the user needs to put in the JSON file. Unix timestamp in seconds can be obtained using an [epoch converter](https://www.epochconverter.com/)
:::

### File

To create an airdrop, you must provide a JSON file in the following format with the parameters explained above.

```json
{
 "name": "<project-name>",
 "accounts": [
   {
     "address": "junoxxx",
     "amount": 1234
   },
   {
     "address": "junoyyy",
     "amount": 1234
   }
 ],
 "cw20TokenAddress": "<token-contract-address>",
 "start": "<airdrop-start-block-number> OR <unix-timestamp-in-seconds> OR null",
 "startType": "<height OR timestamp> OR null",
 "expiration": "<airdrop-end-block-number> OR <unix-timestamp-in-seconds> OR null",
 "expirationType": "<height OR timestamp> OR null",
 "totalAmount": "<total-airdropped-token-amount>"
}
```

When the JSON file is ready, head to the [Create Airdrop page](https://test.juno.tools/airdrops/create) and upload the JSON file.

![](/img/airdrop/create-airdrop-1.png)

Uploaded JSON will be prompted to the screen, make sure that you uploaded the correct file.

![](/img/airdrop/create-airdrop-2.png)

When you are done, you can press the **Create Airdrop** button to deploy the contract.

:::info
Depending on the size of the airdrop, It could take time for your airdrop to process and build a Merkle tree.
The next version will include an optimized Merkle tree build.
:::

## Register

Now that the contract is deployed, it can be registered to the JunoTools. You will be directed to the airdrop register page automatically.

:::tip
It's always a good idea to save the contract address manually in case a browser-related issue occurs, so you won't have to deploy the contract again. This way you can manually register and fund your airdrops.
:::

![](/img/airdrop/register-airdrop.png)

## Fund

There are 2 ways to fund an airdrop

* **Fund with Transfer**: Anyone with the airdrop address can fund it if they have the balance.
* **Fund with Mint**: Only the creator and the minter of the token can fund the airdrop directly from minting.
 After the airdrop is funded and the `start` time/block has passed, the airdrop will be claimable.

![](/img/airdrop/fund-airdrop.png)

## Claim

Now that you successfully started the airdrop, it will be shown on the [Available Airdrops page.](https://test.juno.tools/airdrops/list)

![](/img/airdrop/available-airdrops.png)

You can see the airdrop you have allocated to by checking out **Your Allocation** row.

To claim an airdrop, press the **Claim** button on the same row, followed by pressing **Claim Drop** on the directed page.

![](/img/airdrop/claim-airdrop.png)

Congrats! You have successfully learned how to create your own airdrop and claim it.
