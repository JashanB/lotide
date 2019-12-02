const assertEqual = require('./assertEqual');
const tail = function(words) {
  let clone = [...words];
  clone.shift();
  if (clone.length < 2) {
    return [];
  } else {
    return clone;
  }
};
module.exports = tail;