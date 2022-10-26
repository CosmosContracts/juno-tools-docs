---
sidebar_position: 4
---

# Configure

In this guide, we'll go over the steps of airdropping tokens.

Creating an airdrop is separated into 5 main parts: **Configure**, **Escrow**, **Register**, **Fund**, and **Manage**. Each step will be explained and explored throughout this guide.

## Connect your wallet
To start airdropping your tokens, head to [juno.tools](https://test.juno.tools) and connect
your [Keplr wallet](https://wallet.keplr.app/).

:::tip Don't have a crypto wallet for interacting with Juno? Get Keplr!
Keplr is a web wallet for interacting with web3 applications in the interchain. You can install the Keplr extension from [here](https://www.keplr.app/) if you don't have it already.
:::

:::danger Get some $JUNO!
To interact with Junotools and airdrop Native or CW-20 tokens, you'll need $JUNO. You can pick some up on [Osmosis](https://osmosis.zone/).
:::

## Configure

Before creating an airdrop, you need to decide on a few things

* **Name**, which will be shown on the [available airdrops page](https://juno.tools/airdrops/list/).
* **CW20 Address** is the address of the cw20 token that will be airdropped.
* **Start and Expiration time** specifies the starting and ending time of the airdrop. It can either depend on block height, block timestamp, or none of them (immediately). Each of them will be explained in the next section
* **Accounts File** is a CSV (Comma-Separated Values) file that will contain the addresses and their allocated amount.

![](/img/airdrop/airdrop-parameters.png)

Now, let's explore the customizable Start and Expiration types

#### Block Height

As of the 14th of February, the current block height in Juno is 1890000. The average block time in Juno is around 6.3 seconds. Following this piece of information, you can estimate the block time you want the airdrop to expire.

For example, if you want your airdrop to last for a day then you'll need to add **60 \* 60 \* 24 / 6.3 = ~13714** to your block height.

![](/img/airdrop/block-height.png)

#### Timestamp

Every block has a timestamp according to the time it's proposed. You can use the timestamp as an indicator for the airdrop start and expiration times.

Our team has prepared a very simple date-choosing interface for a smoother experience.

![](/img/airdrop/timestamp.png)

Finally, your chosen date will look like the following.

![](/img/airdrop/timestamp-2.png)

#### Immediately

If you want your airdrop to start right after the initialization and funding processes you can set the **Start Type** to **Immediately**.

On the other hand, if you don't want your airdrops to expire until every drop is claimed then you can set **Expiration Type** to **Immediately**.

:::tip
It's possible to mix the types to start the airdrop at a certain timestamp but also keep the airdrop alive until every drop is claimed. It can be achieved by setting the **Start Type** to **Timestamp**, and **Expiration Type** to **Immediately**.

![](/img/airdrop/hybrid-time.png)

:::

#### File Examples

To create an airdrop, you must provide a CSV file with addresses and their respective amounts.

A CSV file is a data table where the columns and values are separated with `,` as the delimiter. Most spreadsheet software such as Excel, LibreOffice Calc, and, Google Spreadsheets lets you export your sheet as a CSV file.

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

:::warning
Make sure you enter the amounts in the correct decimal form. You must multiply the amount according to the decimal value.
For example: if you want to airdrop 1 token and your token has 6 decimals, it must be written as 1000000 in the CSV file.
:::


#### File Upload

When everything is ready, upload the CSV file.

Uploaded CSV will be prompted to the screen in JSON format, make sure that you uploaded the correct file.

![](/img/airdrop/csv-example.png)

When you are done, you can press the **Create Airdrop** button to deploy the contract.

:::info
Depending on the size of the airdrop, It could take time for your airdrop to process and build a Merkle tree.
The next version will include an optimized Merkle tree build.
:::