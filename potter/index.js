const assert = require("assert");
const { rules } = require("./discount");

const preparePacks = books => {
  let previousBook = -1;
  let currentPack = 0;
  const packs = [];

  books.forEach(book => {
    if (book === previousBook) {
      currentPack++;
    } else {
      currentPack = 0;
    }

    if (!packs[currentPack]) {
      packs[currentPack] = [];
    }

    previousBook = book;
    packs[currentPack].push(book);
  });

  return packs;
};
const priceForPack = ruleId => rules[ruleId]();
const priceForPacks = packs =>
  packs.reduce((acc, pack) => acc + priceForPack(pack.length), 0);

const createPrice = packCalculator => books =>
  packCalculator(preparePacks(books));

const price = createPrice(priceForPacks);

// simple cases
assert.equal(price([0]), 8);
assert.equal(price([0, 0]), 16);
assert.equal(price([0, 0, 0]), 24);

// simple discounts
assert.equal(price([0, 1]), 16 * 0.95);
assert.equal(price([0, 1, 2]), 24 * 0.9);
assert.equal(price([0, 1, 2, 3]), 32 * 0.8);
assert.equal(price([0, 1, 2, 3, 4]), 40 * 0.75);
