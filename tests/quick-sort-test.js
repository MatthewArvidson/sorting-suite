import { assert } from 'chai';
const quickSort = require('../scripts/quick-sort.js');

describe('quick sort functionality', () => {
  it('should sort small array', () => {
    const array = [5, 3, 8, 23, 9, 34, 2]
    assert.deepEqual( quickSort(array), [2, 3, 5, 8, 9, 23, 34]);
  })
  it.skip('should sort negative numbers', () => {
    //repeat for negative #'s'
  })
  // it.skip('should sort positive numbers', () => {
  //
  //   assert(true).to.equal(true);
  // })
  it('should sort an odd array of charaters', () => {
    const array = ['p', 'g', 'e', 'a']
    assert.deepEqual( quickSort(array), ['a', 'e', 'g', 'p']);
  })
  it('should sort an array of 50,000 numbers', () => {
    let array = [];
    for (let i = 0; i < 50000; i++) {
      let randNum = Math.floor(Math.random() * 100000);
    }
    let sortedArray = quickSort(array);
    for (let i = 0; i < sortedArray.length - 1; i++) {
      assert.equal(sortedArray[i] <= sortedArray[i+1], true)
    }
  })
})


//negative numbers
//positive numbers
//odd array of mixed characters
//sort large numbers
// 50,000
// 500,000
// 1,000,000
