// Insert an item in a subarray at specified subarray index. Create it if it doesn't exist
const subArrayInsert = (array, index, value) =>
  array[index]
    ? [
        ...array.slice(0, index),
        [...array[index], value],
        ...array.slice(index + 1)
      ]
    : [...array, [value]];

module.exports = { subArrayInsert };
