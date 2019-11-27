const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertation Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(object, input) {
  let output = '';
  let newArr = Object.values(object);
  let keys = Object.keys(object)
  for (let i = 0; i < newArr.length; i++) {
    if (input === newArr[i]) {
      output = keys[i];
    }
  }
  if (output !== '') {
    return output;
  } else {
    return undefined;
  }
};
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);