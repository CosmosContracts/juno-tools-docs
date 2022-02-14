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

### Example Files

To create an airdrop, you must provide a JSON file in the following format with the parameters explained above.

We have provided example JSON files below to ease the process. In newer versions, all the actions will be handled through the UI with the exception of an expected CSV file upload to read addresses and amounts.

#### Timestamp

Every block has a timestamp according to the time it's proposed. You can use the timestamp as an indicator for the airdrop start and expiration times.

:::tip
When start and expiration fields are taken as timestamps, they should be UNIX timestamps in seconds. So Monday, February 14, 2022, 9:00:00 AM becomes 1644829200. This is what the user needs to put in the JSON file. Unix timestamp in seconds can be obtained using an [epoch converter](https://www.epochconverter.com/)
:::

To create an airdrop starting at **February 14, 2022, 9:00:00 AM** and ending at **February 15, 2022, 9:00:00 AM**, the example file look like the following:

```json
{
"name": "Tension",
"accounts": [
  {
    "address": "juno1qhcrmfmgdt6e550a544lzup5htv0svnk2uxagl",
    "amount": 100
  },
  {
    "address": "juno1d90w4s4pcup6qceyrvckj35zwwy2j4u2pwfnax",
    "amount": 100
  }
],
"cw20TokenAddress": "juno15q5gxnj6lxk4t08cllajcq3wvlwelzus3hz4tfz9uphpa6rjrwpq7uplvd",
"start": "1644829200",
"startType": "timestamp",
"expiration": "1644915600",
"expirationType": "timestamp",
"totalAmount": "200"
}
```

#### Height

As of the 14th of February, the current block height in Juno is 1890000. The average block time in Juno is around 6.3 seconds. Following this piece of information, you can estimate the block time you want the airdrop to expire.

For example, if you want your airdrop to last for a day then you'll need to add **60 \* 60 \* 24 / 6.3 = ~13714** to your block height.

```json
{
"name": "Tension",
"accounts": [
  {
    "address": "juno1qhcrmfmgdt6e550a544lzup5htv0svnk2uxagl",
    "amount": 100
  },
  {
    "address": "juno1d90w4s4pcup6qceyrvckj35zwwy2j4u2pwfnax",
    "amount": 100
  }
],
"cw20TokenAddress": "juno15q5gxnj6lxk4t08cllajcq3wvlwelzus3hz4tfz9uphpa6rjrwpq7uplvd",
"start": "1890000",
"startType": "height",
"expiration": "1903714",
"expirationType": "height",
"totalAmount": "200"
}
```

#### Null type

If you want your airdrop to start immediately after the initialization and funding processes you can set the `startType` to `null`.

On the other hand, for if you don't want your airdrops to expire until every drop is claimed you can set `expirationType` to null.

```json
{
"name": "Tension",
"accounts": [
  {
    "address": "juno1qhcrmfmgdt6e550a544lzup5htv0svnk2uxagl",
    "amount": 100
  },
  {
    "address": "juno1d90w4s4pcup6qceyrvckj35zwwy2j4u2pwfnax",
    "amount": 100
  }
],
"cw20TokenAddress": "juno15q5gxnj6lxk4t08cllajcq3wvlwelzus3hz4tfz9uphpa6rjrwpq7uplvd",
"start": "null",
"startType": "null",
"expiration": "null",
"expirationType": "null",
"totalAmount": "200"
}

```
:::tip
It's possible to mix the types to start the airdrop at a certain timestamp but also keep the airdrop alive until every drop is claimed. It can be achieved by setting the `start` to a UNIX timestamp, `startType` to `timestamp`, and `expirationType` to `null`
:::

### File Upload

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
