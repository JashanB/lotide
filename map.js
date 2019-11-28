const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
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
const results1 = map(words, word => word[0]);
const results2 = map(words, word => word[0].toUpperCase())
const results3 = map(words, word => word[1]);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't'])
assertArraysEqual(results2, ['G', 'C', 'T', 'M', 'T'])
assertArraysEqual(results3, ['r', 'o', 'o', 'a', 'o'])