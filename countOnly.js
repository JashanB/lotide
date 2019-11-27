const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertation Failed: ${actual} !== ${expected}`);
  }
};
const countOnly = function(allItems, itemsToCount) {
  let countArr = Object.keys(itemsToCount);
  let newObj = {};
  for (let i = 0; i < allItems.length; i++) {
    for (let j = 0; j < countArr.length; j++) {
      if (itemsToCount[countArr[j]] === true && countArr[j] === allItems[i]) { 
        if (newObj.hasOwnProperty(countArr[j]) === false) {
          newObj[countArr[j]] = 0;
          newObj[countArr[j]] += 1;
        } else {
        newObj[countArr[j]] += 1;
      }
      }
    }
  }
  return newObj;
};
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
  'Joe'
];
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);