const takeUntil = function(array, callback) {
  let result = [];
  for (let val of array) {
    if (callback(val)) {
      return result;
    } else {
      result.push(val);
    }
  }
  return result;
};
module.exports = takeUntil;
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

const data3 = [1, 2, 3, 4, 5, 6];
const results3 = takeUntil(data3, x => x > 4);

const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');
assertArraysEqual(results3, [1, 2, 3, 4])