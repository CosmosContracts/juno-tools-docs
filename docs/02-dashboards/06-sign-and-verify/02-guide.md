---
sidebar_position: 2
---

# Guide

In this guide, we'll go over how to sign messages and confirm the messages other addresses have signed.

## Sign

First of all, you should decide on what to sign. It can be either a number, a character, or a mixture of both.

The message you input will be signed with your private key and it will be verifiable through your public key in case someone has to verify.

![](/img/sign-and-verify/sign-message.png)

:::info
You will be prompted a request from Keplr.

Notice that this isn't a transaction, so you are not paying any fee. You are just signing a message with your private key.

<img src="/img/sign-and-verify/sign-keplr.png" width="300" />
:::

After you sign the message, you will be prompted with the signature.

![](/img/sign-and-verify/signed-message.png)

You can publish the signature so anyone can verify the message you signed.

## Verify

To verify a message, you need three pieces of information: **address that signed the message**, **signed message**, **signature of the message**.

After you acquire the necessary information, you can verify it by inputting them into JunoTools.

A correct verification will prompt you with a success message.

![](/img/sign-and-verify/verified-message.png)

In case the signed message, address, and signature does not match you will be notified by an error message.

![](/img/sign-and-verify/wrong-message.png)

Congrats! You have successfully learned how to sign a message and verify it.
