const expect = require('chai').expect;
const assert = require('chai').assert;
const insertionSort = require('../insertionSort')

describe('insertion sort', function() {
  it('can sort an array', function() {
    assert.deepEqual(insertionSort([2,3,4,5,1]), [1,2,3,4,5])
  })
})