const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertation Failed: ${actual} !== ${expected}`);
  }
};

// const findKey = function(object, callback) {
//   let key = 0;
//   console.log(Object.keys(object))
//   for (let val of object) {
//     if (callback(val.stars)) {
//       key = object.val.stars;
//     }
//   }
//   if (key !== 0) {
//     return key;
//   } else {
//     return undefined;
//   }
// };


const findKey = function(object, callback) {
  for (let key of Object.keys(object)) {
    if (callback(object[key])) {
      return key;
    }
  }
};

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 3))

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 3), 'elBulli')