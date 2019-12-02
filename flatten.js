const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');
const flatten = function(input) {
  let newArray = [];
  let simple = [];
  for (let i = 0; i < input.length; i++) {
    if (Array.isArray(input[i]) === true) {
      simple = input[i];
      for (let j = 0; j < simple.length; j++) {
        newArray.push(simple[j]);
      }
    } else {
      newArray.push(input[i]);
    }
  }
  return console.log(newArray);
};
module.exports = flatten;
flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]