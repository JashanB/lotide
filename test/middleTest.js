const assert = require('chai').assert;
const middle = require('../middle');
describe('#middle', () => {
  it('returns 5, 6 for [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [5, 6]);
  });
  it('returns 3 for [1, 2, 3, 4, 5]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  })
});