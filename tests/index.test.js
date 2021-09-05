const { spamScore, isSpam } = require("..");

it("spam", async () => {
  const safe1 = [
    "ina living the dream",
    "not only is she drawing cute anime girls",
    "she personally knows them",
    "and is getting paid to do it",
  ];
  const safe2 = [
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
  const safe3 = ["ina living the dream"];
  const spam1 = [
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
  const spam2 = [
    "くそくそくそくそくそくそくそくそくそくそ",
    "くそくそくそくそくそくそくそくそくそくそ",
    "くそくそくそくそくそくそくそくそくそくそ",
    "くそくそくそくそくそくそくそくそくそくそ",
    "くそくそくそくそくそくそくそくそくそくそ",
    "くそくそくそくそくそくそくそくそくそくそ",
    "くそくそくそくそくそくそくそくそくそくそ",
    "くそくそくそくそくそくそくそくそくそくそ",
    "くそくそくそくそくそくそくそくそくそくそ",
    "くそくそくそくそくそくそくそくそくそくそ",
  ];
  const spam3 = ["konpeko konpeko konpeko", "konpeko", "konpeko konpeko"];

  expect(isSpam(safe1)).toBe(false);
  expect(isSpam(safe2)).toBe(false);
  expect(isSpam(safe3)).toBe(false);
  expect(isSpam(spam1)).toBe(true);
  expect(isSpam(spam2)).toBe(true);
  expect(isSpam(spam3)).toBe(true);

  expect(spamScore("")).toBe(0);
  expect(spamScore(" ")).toBe(1);
  expect(spamScore("😞")).toBe(1);
});
