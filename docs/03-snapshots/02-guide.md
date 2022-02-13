---
sidebar_position: 2
---

# Guide

In this guide, we'll go over the steps of juno blockhain restoring a snapshot process.


:::danger Backup your data!
Before proceeding with next steps please do a config directory `~/.juno/config` backup to mitigate the risks of loosing validator's consensus key.
:::


## Stop junod service

Before creating an airdrop, you need to decide on a few things

```bash
sudo systemctl stop junod.service
```

## Remove old data in directory

```bash
rm -rf ~/.juno/data; \
mkdir -p ~/.juno/data; \
cd ~/.juno/data
```

## Download snapshot

:::tip
Full blockhain database's size is more than 500GB, it may take a while to download the archive.
:::

```bash
wget -O - https://snapshots.stakecraft.com/juno-1_latest.tar | tar xf -
```

## Start junod service

```bash
sudo systemctl start junod.service
```

## Check service logs 

```bash
sudo journalctl -u junod -f
```


Congrats! You have successfully learned how to restore a juno blockhain's snapshot on your node.
