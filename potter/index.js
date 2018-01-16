const { packDiscountCalculator, preparePacks } = require("./pack");

const createPrice = packCalculator => books =>
  packCalculator(preparePacks(books));

const price = createPrice(packDiscountCalculator);

module.exports = price;
