const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertation Failed: ${actual} !== ${expected}`);
  }
};
const tail = function(words) {
  let clone = [...words]
  clone.shift();
  console.log(clone);
  return clone;
};
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!