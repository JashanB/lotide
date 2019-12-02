const eqObjects = require('./eqObjects');
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertation Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑Assertation Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};
module.exports = assertObjectsEqual; 
const obj1 = {
  name: 'brad',
  age: 25
};
const obj2 = {
  name: 'chad',
  age: 25
};

assertObjectsEqual(obj1, obj2)