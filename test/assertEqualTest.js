const assert = require('chai').assert;
const assertEqual = require('../assertEqual')
describe('#assertEqual', () => {
  it('returns false for Lighthouse Labs and Bootcamp', () => {
    assert.strictEqual(assertEqual("Lighthouse Labs", "Bootcamp"), '🛑🛑🛑Assertation Failed: \'Lighthouse Labs\' !== \'Bootcamp\'');
  });
  it('returns true for 5 and 5', () => {
    assert.strictEqual(assertEqual(5, 5), '✅✅✅ Assertation Passed: 5 === 5');
  });
  it('returns true for sad and sad', () => {
    assert.strictEqual(assertEqual('sad', 'sad'), '✅✅✅ Assertation Passed: \'sad\' === \'sad\'');
  });
});
