# 💀 Spamreaper

PoC of BWT-RLE based sentence complexity score. Specifically made for handling multiple chats in live streams.

Spamreaper will be included in [Komet](https://github.com/holodata/komet) as one of the filter engines.

## Use

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

- [ ] Test with a more diverse set of examples.
