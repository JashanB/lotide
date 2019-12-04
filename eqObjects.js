const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (key of Object.keys(object1)) {
    if (Array.isArray(object1[key])) {
      if (eqArrays(object1[key], object2[key]) === false) {
        return false;
      }
    } else if (typeof object1[key] === 'object') {
      eqObjects(object1[key], object2[key]);
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};
module.exports = eqObjects;

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba) === true);  

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc) === false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc) === true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2) === false); 

const cd3 = { c: "1", d: { e: "2"} };
const dc3 = { c: "1", d: { e: "2"} };
// // const dc3 = { d: { e: "2", f: 3}, c: "1" };
console.log(eqObjects(cd3, dc3) === true); // => true