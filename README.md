# 💀 Spamreaper

PoC of BWT based spam score function. Specifically made for handling a string of chats in live streams.

Spamreaper is included in [Komet](https://github.com/holodata/komet) as one of the filter engines.

## Use

You'll need Rust to build a native module.

```bash
npm install spamreaper
```

```js
import { isSpam } from "spamreaper";

const safe = [
  "oh",
  "nice!",
  "lol",
  "looool",
  "kusa",
  "lol",
  "lol",
  "lol",
  "lol",
  "lol",
];

const spam = [
  "kapan nyanyi lagi?",
  "kapan nyanyi lagi?",
  "kapan nyanyi lagi?",
  "kapan nyanyi lagi?",
  "kapan nyanyi lagi?",
  "kapan nyanyi lagi?",
  "kapan nyanyi lagi?",
  "kapan nyanyi lagi?",
  "kapan nyanyi lagi?",
];

isSpam(safe); // => false
isSpam(spam); // => true
```

## Roadmap

- [x] Rewritten in Rust
- [ ] Test with a more diverse set of examples.
