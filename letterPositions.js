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
console.log(letterPositions('based butter'));

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
assertArraysEqual(letterPositions('hello').e, [1]);