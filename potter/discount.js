const BOOK_PRICE = 8;
const DISCOUNTS = [0, 1, 0.95, 0.9, 0.8, 0.75];

const createDiscount = (discount, bookNumber) => () =>
  bookNumber * BOOK_PRICE * discount;

const addRule = (discountRate, bookNumber, ruleSet = {}) => ({
  ...ruleSet,
  [bookNumber]: createDiscount(discountRate, bookNumber)
});

const rules = DISCOUNTS.reduce(
  (acc, amount, bookNumber) => ({
    ...acc,
    [bookNumber]: createDiscount(amount, bookNumber)
  }),
  {}
);

module.exports = { rules };
