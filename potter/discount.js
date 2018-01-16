const BOOK_PRICE = 8;
const DISCOUNTS = [0, 1, 0.95, 0.9, 0.8, 0.75];
const INITIAL_DISCOUNT_DICTIONARY = {};

const createDiscount = (rate, bookNumber) => () =>
  bookNumber * BOOK_PRICE * rate;

const discountReducer = (discountsDictionary, rate, bookNumber) => ({
  ...discountsDictionary,
  [bookNumber]: createDiscount(rate, bookNumber)
});

const discounts = DISCOUNTS.reduce(
  discountReducer,
  INITIAL_DISCOUNT_DICTIONARY
);

const applyDiscount = bookNumber => discounts[bookNumber]();

module.exports = { discounts, applyDiscount };
