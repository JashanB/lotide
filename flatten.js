const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertation Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑Assertation Failed: ${array1} !== ${array2}`);
  }
};

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
flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]