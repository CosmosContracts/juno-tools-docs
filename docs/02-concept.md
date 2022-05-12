---
sidebar_position: 2
---

# Tools Concept

## The Birth of JunoTools

JunoTools started its journey as JunoDrop, as an idea to generalize cheap airdrops and make them accessible to everyone that's required to spin a project or a DAO.

The change to the concept of a more generalized tool started when our team realized that JunoDrop became a website that wraps cosmos messages and passes them to Keplr for you to sign. Actually, that's what a dApp is, easy and shiny UIs to wrap transactions for you to sign.

This realization quickly revolved our ideas and raised the following question:

### What if we approach smart contracts UIs like protocols?

Be it CW-20, CW-721, CW-1, or CW-DAO, all of these are protocol specifications. These protocols define what to expect as input messages and specify the methods you can execute on them. 

For example, CW-20 on Juno and Osmosis expect the same inputs and are capable of doing the same actions given they use the same CW-20 version. 

Thanks to the protocol specifications, we can have a generalization here.

**RAW** is a CW-20, **SSCRT** is a CW-20, **sLuna** is a CW-20. They accept the same inputs, so then why not have a generalized contract UI standard across different networks so that the overhead of learning and using a new UX vanishes.

JunoTools, OsmosisTools, StargazeTools, or xTools. You can interact with CosmWasm chains through a common UX with just different chain-based UI themes.

### Smart Contract Dashboard

Smart contracts dashboards are intentionally named CW-1 and CW-20, not Token or Mint. 

That's because interacting with a CW-20 token is like operating a car. The car is engineered and built to run, you don't need to know every detail of the machine to drive it but you need to read the manual shipped alongside the car. The interface is the steering wheel and the **dashboard**.

Smart contract dashboards are just HTML data input forms for you to build the pieces together and start the execution.

## Use Cases

Let's explore the idea with a use case example.

Your organization structure runs on a blockchain using smart contracts.

You have a sub-team of a DAO, with the rights to execute the payments.

You want to make a [streaming payment](https://github.com/CosmWasm/cw-tokens/tree/main/contracts/cw20-streams) from the DAO treasury to a third party. Since the treasury owner is the DAO, you need to form a JSON formatted smart contract message and put it into the proposal. In case the proposal passes, the transaction will be executed.

Either the DAO app can handle the CosmJS integration to the payment contract, but this UX design is not scalable.

Creating and operating a smart contract process includes several steps and its complexity is best handled by an external tool.

With such a tool, you can open up a category called CW-20 and select **Streaming Payment** from a drop-down then fill in the inputs you want to execute through the contract. At the end you will be given an option to copy the transaction without broadcasting, you will simply pass the copied transaction to the DAO app and open a proposal.

The process above executes a single message, with further development there could be a Transaction Builder sidebar where you drag and drop to be executed messages to a sidebar to run batches operations.

## Roadmap

Our team started as a couple of skilled young devs as Juno being our first experience of becoming a validator and spin a software development house startup meanwhile the network is experiencing an unseen type of chaos. 

This has been a hell of a ride for us.

The possibilities we see for the tool's future are the following:
- Move web2 infrastructure to Akash
- Support Snapshots
- Implement a UI kit for easily launching the same tools experience for other Cosmos chains. Currently, we are exploring the idea of a port to stargaze or more chains.
- Explore the setting up of a standard for chain-wide pinned code governance.
- Transaction Builder, a simplified and no-code transaction builder based on drag and drop boxes.
- JunoTools DAO, as we don't want to be the gate holders to what contract dashboards must be on the UI. The community, through the DAO, should be included. The DAO voting could be a token distribution or technical lead teams of the network.

## Collaboration

Junotools is an open-source project, you are welcome to any kind of contribution. Be it a small bug fix, a typo, or a completely new contract to the dashboard. Your contributions will grow the project and the whole ecosystem.

If you need help, you can get support at the JunoTools channel on [Juno Discord.](https://discord.com/invite/juno)

Feedback can also be done through the discord channel and GitHub issues.

If your chain needs tools, contact us through the discord or DMs. Since the code is open-source, feel free to fork, use and contribute.

Back to building.
