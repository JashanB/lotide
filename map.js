const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
module.exports = map;
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');
const results1 = map(words, word => word[0]);
const results2 = map(words, word => word[0].toUpperCase())
const results3 = map(words, word => word[1]);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't'])
assertArraysEqual(results2, ['G', 'C', 'T', 'M', 'T'])
assertArraysEqual(results3, ['r', 'o', 'o', 'a', 'o'])