const expect = require('chai').expect;
const assert = require('chai').assert;
const bubbleSort = require('../bubbleSort');

describe('bubble sort', function () {
  it('can sort an array', function () {
    assert.deepEqual(bubbleSort([5,1,3,7,12]), [1,3,5,7,12])
  })
})