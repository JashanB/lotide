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

const middle = function(array) {
  let newArray = [];
  let compareArray = [];
  let middleIndex = Math.round(array.length / 2);
  if (array.length > 2) {
    if (array.length % 2 === 0) {
      newArray.push(array[middleIndex - 1], array[middleIndex]);
      compareArray = array.slice((middleIndex - 1), (middleIndex + 1));
    } else {
      newArray.push(array[middleIndex]);
      compareArray = array.slice(middleIndex, (middleIndex + 1));
    }
    assertArraysEqual(newArray, compareArray);
  } else {
    return [];
  }
};
middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);