const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');
const without = function(source, remove) {
  let newArray = [...source];
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < remove.length; j++) {
      if (source[i] === remove[j]) {
        newArray.splice(i,1);
      }
    }
  }
  return console.log(newArray);
};
module.exports = without; 
without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
without(["for", "four", "five", "faure"], [1, 2, "3", 4, "five", "six"]); // => ["1", "2"]
// const words = ["hello", "world", "lighthouse"];
// without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);