import { assert } from 'chai';
const insertionSort = require('../scripts/insertion-sort.js');

describe('insertion sort functionality', () => {
  it.skip('should be a function', () => {
    assert.isFunction(insertionSort);
  })

  it.skip('should sort small array', () => {
    const array = [5, 3, 8, 23, 9, 34, 2]
    assert.deepEqual( insertionSort(array), [2, 3, 5, 8, 9, 23, 34]);
  })

  it.skip('should sort negative numbers', () => {
    const array = [-5, -3, -8, -23, -9, -34, -2]
    assert.deepEqual( insertionSort(array), [-34, -23, -9, -8, -5, -3, -2]);
  })

  it.skip('should sort an odd array of charaters', () => {
    const array = ['p', 'g', 'e', 'a']
    assert.deepEqual( insertionSort(array), ['a', 'e', 'g', 'p']);
  })

  it.skip('should sort an array of 5,000 numbers', () => {
    let array = [];
    for (let i = 0; i < 5000; i++) {
      let randNum = Math.floor(Math.random() * 10000);
      array.push(randNum);
    }
    let sortedArray = insertionSort(array);
    for (let i = 0; i < sortedArray.length - 1; i++) {
      assert.equal(sortedArray[i] <= sortedArray[i+1], true)
    }
  })

  it.skip('should sort an array of 10,000 numbers', () => {
    let array = [];
    for (let i = 0; i < 10000; i++) {
      let randNum = Math.floor(Math.random() * 100000);
      array.push(randNum);
    }
    let sortedArray = insertionSort(array);
    for (let i = 0; i < sortedArray.length - 1; i++) {
      assert.equal(sortedArray[i] <= sortedArray[i+1], true)
    }
  })
  
  it.skip('should sort an array of 19,500 numbers', () => {
    let array = [];
    for (let i = 0; i < 19500; i++) {
      let randNum = Math.floor(Math.random() * 10000);
      array.push(randNum);
    }
    let sortedArray = insertionSort(array);
    for (let i = 0; i < sortedArray.length - 1; i++) {
      assert.equal(sortedArray[i] <= sortedArray[i+1], true)
    }
  })
})
