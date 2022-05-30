---
sidebar_position: 2
---

# Guide

In this guide, we'll go over how to upload a smart contract.

## Generate a WASM File
When a smart contract is going to be deployed on Juno network, a WASM file must be generated first. 

That's because the code will be interpreted by different machines and there is a need for a common understanding of a code, like a protocol.

## Generate a WASM File
To generate a WASM file, you must have an access to the smart contract code. 

It can be either a code you wrote or a code you cloned/forked from someone else.

The folder structure of a smart contract should look similar to this:

```bash
cw-contract/
├── .cargo/
│   └── config 
├── .circleci/
│   └── config.yml 
├── .github/workflows/
│   └── Basic.yml 
├── examples/
│   └── schema.rs 
├── schema/ 
├── src/ 
│   ├── state.rs 
│   ├── contract.rs  
│   ├── lib.rs  
│   ├── msg.rs  
│   └── error.rs 
└── target/ 
```

There are few ways to generate a WASM file. 
- Unoptimised: 
  ```bash
  cargo wasm
  ```
- Optimized (Docker must be installed):
  ```bash
  docker run --rm -v "$(pwd)":/code \
  --mount type=volume,source="$(basename "$(pwd)")_cache",target=/code/target \
  --mount type=volume,source=registry_cache,target=/usr/local/cargo/registry \
  cosmwasm/rust-optimizer:0.12.6
  ```

Be sure to execute the generation code at the root of the folder.

:::warning
Unoptimised WASM files might get too big for JunoTools to deploy thus fail or request more gas fees than usual.

Try to build an optimised WASM file when possible.
:::

![](/img/upload-contract/upload-contract.png)

When the file is generated, simply head to the [Contract Upload page](juno.tools/contracts/upload/), choose the WASM file and press upload contract.

![](/img/upload-contract/uploaded-contract.png)

Congrats! You have successfully learned how to upload a contract to the Juno network!
