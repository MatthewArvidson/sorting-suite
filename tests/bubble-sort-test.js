import { assert } from 'chai';
const bubbleSort = require('../scripts/bubble-sort.js');

describe('bubble sort functionality', () => {
  it('should be a function', () => {
    assert.isFunction(bubbleSort);
  })
  it('should sort small array', () => {
    const array = [5, 3, 8, 23, 9, 34, 2]
    assert.deepEqual( bubbleSort(array), [2, 3, 5, 8, 9, 23, 34]);
  })
  it('should sort negative numbers', () => {
    const array = [-5, -3, -8, -23, -9, -34, -2]
    assert.deepEqual( bubbleSort(array), [-34, -23, -9, -8, -5, -3, -2]);
  })
  it('should sort an odd array of charaters', () => {
    const array = ['p', 'g', 'e', 'a']
    assert.deepEqual( bubbleSort(array), ['a', 'e', 'g', 'p']);
  })
  it('should sort an array of 1,000 numbers', () => {
    let array = [];
    for (let i = 0; i < 1000; i++) {
      let randNum = Math.floor(Math.random() * 10000);
      array.push(randNum);
    }
    let sortedArray = bubbleSort(array);
    for (let i = 0; i < sortedArray.length - 1; i++) {
      assert.equal(sortedArray[i] <= sortedArray[i+1], true)
    }
  })
  it('should sort an array of 5,000 numbers', () => {
    let array = [];
    for (let i = 0; i < 5000; i++) {
      let randNum = Math.floor(Math.random() * 10000);
      array.push(randNum);
    }
    let sortedArray = bubbleSort(array);
    for (let i = 0; i < sortedArray.length - 1; i++) {
      assert.equal(sortedArray[i] <= sortedArray[i+1], true)
    }
  })
  it('should sort an array of 10,000 numbers', () => {
    let array = [];
    for (let i = 0; i < 10000; i++) {
      let randNum = Math.floor(Math.random() * 100000);
      array.push(randNum);
    }
    let sortedArray = bubbleSort(array);
    for (let i = 0; i < sortedArray.length - 1; i++) {
      assert.equal(sortedArray[i] <= sortedArray[i+1], true)
    }
  })
})
