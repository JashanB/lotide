const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');
describe('#assertArraysEqual', () => {
  it('returns false for ([1,2,3], [1,2,2])', () => {
    assert.deepEqual(assertArraysEqual([1,2,3], [1,2,2]));
  });
  it('returns true for ([1,2,3], [1,2,3])', () => {
    assert.deepEqual(assertArraysEqual([1,2,3], [1,2,3]));
  });
});