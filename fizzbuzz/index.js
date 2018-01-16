const assert = require("assert");

/* Rules creator */
const createModuleRule = (n, value) => number =>
  number % n === 0 ? value : number;

const createEqualityRule = (n, value) => number =>
  n === number ? value : number;

/* Rules */
const fizzRule = createModuleRule(3, "fizz");
const buzzRule = createModuleRule(5, "buzz");
const fizzBuzz = createModuleRule(15, "fizzbuzz");
const buzzFizz = createEqualityRule(21, "buzzfizz");

/* Application */
const reducer = (state, rule) => rule(state);
const fizzbuzz = rules =>
  Array(50)
    .fill(null)
    .map((_, index) => rules.reduce(reducer, index + 1));

const rules = [buzzFizz, fizzBuzz, buzzRule, fizzRule];

/* Tests */
assert.equal(fizzbuzz(rules)[0], 1);
assert.equal(fizzbuzz(rules)[2], "fizz");
assert.equal(fizzbuzz(rules)[4], "buzz");
assert.equal(fizzbuzz(rules)[5], "fizz");
assert.equal(fizzbuzz(rules)[9], "buzz");
assert.equal(fizzbuzz(rules)[14], "fizzbuzz");
assert.equal(fizzbuzz(rules)[20], "buzzfizz");
assert.equal(fizzbuzz(rules)[10], 11);

console.log("Fizzbuzz du feu :D");
