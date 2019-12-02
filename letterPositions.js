const letterPositions = function(input) {
  let newObj = {};
  let newArr = input.split('');
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] !== ' ') {
      if (newObj.hasOwnProperty(newArr[i]) === false) {
        newObj[newArr[i]] = [];
        newObj[newArr[i]].push(i);
      } else {
        newObj[newArr[i]].push(i);
    }
  }
  }
  return newObj;
};
module.exports = letterPositions;
console.log(letterPositions('based butter'));

const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');
assertArraysEqual(letterPositions('hello').e, [1]);