const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertation Failed: ${actual} !== ${expected}`);
  }
};
const countLetters = function(input) {
  let newArr = input.split('');
  let newObj = {};
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] !== ' ') {
      if (newObj.hasOwnProperty(newArr[i]) === false) {
        newObj[newArr[i]] = 0;
        newObj[newArr[i]] += 1;
      } else {
        newObj[newArr[i]] += 1;
      }
    }
  }
  return newObj;
}
console.log(countLetters('based butter'))