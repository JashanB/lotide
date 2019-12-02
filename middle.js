const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');
const middle = function(array) {
  let newArray = [];
  let middleIndex = Math.round(array.length / 2);
  if (array.length > 2) {
    if (array.length % 2 === 0) {
      newArray.push(array[middleIndex - 1], array[middleIndex]);
    } else {
      newArray.push(array[middleIndex - 1]);
    }
    return newArray;
  } else {
    return [];
  }
};
module.exports = middle;
