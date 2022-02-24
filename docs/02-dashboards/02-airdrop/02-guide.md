---
sidebar_position: 3
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

![](/img/airdrop/airdrop-parameters-2.png)

* **Project Name**, which will be shown on the [available airdrops page](https://test.juno.tools/airdrops/list/).
* **CW20 Token Address** is the address of the cw20 token that will be airdropped.
* **Start and Expiration Types** specifies how the starting and ending time of the airdrop will be calculated. It can either depend on block height, block timestamp, or none of them. Each of them will be explained in the next section
* **Accounts File** is a CSV (Comma-Separated Values) file that will contain the addresses and their allocated amount.

### Example Cases

To create an airdrop, you must provide a CSV file with addresses and their respective amounts.

Basically, a CSV file is a data table where the columns and values are separated with `,` as the delimiter. Most of the spreadsheet software such as Excel, LibreOffice Calc, and, Google Spreadsheets lets you export your sheet as a CSV file.

The first row of a CSV file, called the header, should contain the column names. In our case, they will be `address` and `amount`

:::tip
In case you don't have any of the mentioned software, it is possible to manually create a CSV file in a text editor by putting `,` between each column and the element.
:::

An example CSV file looks like the following when opened in a text editor.

```
address,amount
juno13h87a326acl7aezjseu9eja8e3uh4c9h66fgyd,1000
juno1ed5skh36xhtsa6v998kq6ewcysg3aeundztue4,1000
```

#### Block Height

As of the 14th of February, the current block height in Juno is 1890000. The average block time in Juno is around 6.3 seconds. Following this piece of information, you can estimate the block time you want the airdrop to expire.

For example, if you want your airdrop to last for a day then you'll need to add **60 \* 60 \* 24 / 6.3 = ~13714** to your block height.

![](/img/airdrop/block-height.png)

#### Timestamp

Every block has a timestamp according to the time it's proposed. You can use the timestamp as an indicator for the airdrop start and expiration times.

Our team has prepared a very simple date choosing interface for a smoother experience.

![](/img/airdrop/timestamp-2.png)

Finally, your chosen date will look like the following.

![](/img/airdrop/timestamp.png)

#### None type

If you want your airdrop to start immediately after the initialization and funding processes you can set the **Start Type** to **None**.

On the other hand, if you don't want your airdrops to expire until every drop is claimed then you can set **Expiration Type** to **None**.
![](/img/airdrop/none-type.png)

:::tip
It's possible to mix the types to start the airdrop at a certain timestamp but also keep the airdrop alive until every drop is claimed. It can be achieved by setting the **Start Type** to **Timestamp**, and **Expiration Type** to **None**,
:::

### File Upload

When everything is ready, upload the CSV file.

Uploaded CSV will be prompted to the screen in JSON format, make sure that you uploaded the correct file.

![](/img/airdrop/json-file.png)

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

### Escrow

Before registering the airdrop, you need to deposit some Juno to the Escrow contract. This mechanism is implemented to prevent spam attacks. Your funds will be returned shortly.

![](/img/airdrop/escrow.png)

After the deposit, you will see all the details about the process of your airdrop.

You can proceed by pressing the **Register your airdrop** button.

![](/img/airdrop/register-airdrop.png)

## Fund

There are 2 ways to fund an airdrop

* **Fund with Transfer**: Anyone with the airdrop address can fund it if they have the balance.
* **Fund with Mint**: Only the creator and the minter of the token can fund the airdrop directly from minting.
 After the airdrop is funded and the specified start time has passed, the airdrop will be claimable.

![](/img/airdrop/fund-airdrop.png)

## Claim

Now that you successfully started the airdrop, it will be shown on the [Available Airdrops page.](https://test.juno.tools/airdrops/list)



![](/img/airdrop/available-airdrops.png)

:::tip
You can search for an airdrop by its name or contract address.
:::


You can see the airdrop you have allocated to by checking out **Your Allocation** row.

To claim an airdrop, press the **Claim** button on the same row, followed by pressing **Claim Drop** on the directed page.

![](/img/airdrop/claim-airdrop.png)

Congrats! You have successfully learned how to create your own airdrop and claim it.
