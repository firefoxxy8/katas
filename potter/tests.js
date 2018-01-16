const assert = require("assert");
const price = require("./index");

//simple cases
assert.equal(price([0]), 8);
assert.equal(price([0, 0]), 16);
assert.equal(price([0, 0, 0]), 24);

// simple discounts
assert.equal(price([0, 1]), 16 * 0.95);
assert.equal(price([0, 1, 2]), 24 * 0.9);
assert.equal(price([0, 1, 2, 3]), 32 * 0.8);
assert.equal(price([0, 1, 2, 3, 4]), 40 * 0.75);

// // complex cases
assert.equal(price([0, 0, 1]), 8 + 8 * 2 * 0.95);
assert.equal(price([0, 0, 1, 1]), 2 * (8 * 2 * 0.95));
assert.equal(price([0, 0, 1, 2, 2, 3]), 8 * 4 * 0.8 + 8 * 2 * 0.95);
assert.equal(price([0, 1, 1, 2, 3, 4]), 8 + 8 * 5 * 0.75);

console.log("All tests passed");
