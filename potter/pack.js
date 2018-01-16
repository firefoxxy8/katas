const { subArrayInsert } = require("./utils");
const { applyDiscount } = require("./discount");
const INITIAL_STATE = { currentPack: 0, packs: [], previous: -1 };
const INITIAL_PACK_PRICE = 0;

// structure
const PackAccumulator = (currentPack, book, packs) => ({
  previous: book,
  currentPack,
  packs: subArrayInsert(packs, currentPack, book)
});

// Compute the packs
const packDiscountReducer = (price, { length: bookNumber }) =>
  price + applyDiscount(bookNumber);

const packDiscountCalculator = packs =>
  packs.reduce(packDiscountReducer, INITIAL_PACK_PRICE);

// Prepare the packs
const preparePackReducer = ({ previous, currentPack, packs }, book) =>
  PackAccumulator(book == previous ? currentPack + 1 : 0, book, packs);

const preparePacks = books =>
  books.reduce(preparePackReducer, INITIAL_STATE).packs;

module.exports = { packDiscountCalculator, preparePacks };
