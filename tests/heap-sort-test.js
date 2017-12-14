import { assert } from 'chai';
const heapSort = require('../scripts/heap-sort.js');

describe('heap sort functionality', () => {
  
  it('should be a function', () => {
    assert.isFunction(heapSort);
  })

  it('should sort small array', () => {
    const array = [5, 3, 8, 23, 9, 34, 2]
    assert.deepEqual( heapSort(array), [2, 3, 5, 8, 9, 23, 34]);
  })

  it('should sort negative numbers', () => {
    const array = [-5, -3, -8, -23, -9, -34, -2]
    assert.deepEqual( heapSort(array), [-34, -23, -9, -8, -5, -3, -2]);
  })

  it('should sort an odd array of charaters', () => {
    const array = ['p', 'g', 'e', 'a']
    assert.deepEqual( heapSort(array), ['a', 'e', 'g', 'p']);
  })

  it('should sort an array of 50,000 numbers', () => {
    let array = [];
    for (let i = 0; i < 1000000; i++) {
      let randNum = Math.floor(Math.random() * 100000);
      array.push(randNum);
    }
    let sortedArray = heapSort(array);
    for (let i = 0; i < sortedArray.length - 1; i++) {
      assert.equal(sortedArray[i] <= sortedArray[i+1], true)
    }
  })

  it('should sort an array of 500,000 numbers', () => {
    let array = [];
    for (let i = 0; i < 1000000; i++) {
      let randNum = Math.floor(Math.random() * 1000000);
      array.push(randNum);
    }
    let sortedArray = heapSort(array);
    for (let i = 0; i < sortedArray.length - 1; i++) {
      assert.equal(sortedArray[i] <= sortedArray[i+1], true)
    }
  })
  
  it('should sort an array of 1,000,000 numbers', () => {
    let array = [];
    for (let i = 0; i < 1000000; i++) {
      let randNum = Math.floor(Math.random() * 10000000);
      array.push(randNum);
    }
    let sortedArray = heapSort(array);
    for (let i = 0; i < sortedArray.length - 1; i++) {
      assert.equal(sortedArray[i] <= sortedArray[i+1], true)
    }
  })

  it('should sort an array of 2,000,000 numbers', () => {
    let array = [];
    for (let i = 0; i < 1000000; i++) {
      let randNum = Math.floor(Math.random() * 20000000);
      array.push(randNum);
    }
    let sortedArray = heapSort(array);
    for (let i = 0; i < sortedArray.length - 1; i++) {
      assert.equal(sortedArray[i] <= sortedArray[i+1], true)
    }
  })

  it('should sort an array of 3,000,000 numbers', () => {
    let array = [];
    for (let i = 0; i < 1000000; i++) {
      let randNum = Math.floor(Math.random() * 30000000);
      array.push(randNum);
    }
    let sortedArray = heapSort(array);
    for (let i = 0; i < sortedArray.length - 1; i++) {
      assert.equal(sortedArray[i] <= sortedArray[i+1], true)
    }
  })

  it('should sort an array of 4,000,000 numbers', () => {
    let array = [];
    for (let i = 0; i < 1000000; i++) {
      let randNum = Math.floor(Math.random() * 40000000);
      array.push(randNum);
    }
    let sortedArray = heapSort(array);
    for (let i = 0; i < sortedArray.length - 1; i++) {
      assert.equal(sortedArray[i] <= sortedArray[i+1], true)
    }
  })

  it('should sort an array of 5,000,000 numbers', () => {
    let array = [];
    for (let i = 0; i < 1000000; i++) {
      let randNum = Math.floor(Math.random() * 50000000);
      array.push(randNum);
    }
    let sortedArray = heapSort(array);
    for (let i = 0; i < sortedArray.length - 1; i++) {
      assert.equal(sortedArray[i] <= sortedArray[i+1], true)
    }
  })

  it('should sort an array of 10,000,000 numbers', () => {
    let array = [];
    for (let i = 0; i < 1000000; i++) {
      let randNum = Math.floor(Math.random() * 100000000);
      array.push(randNum);
    }
    let sortedArray = heapSort(array);
    for (let i = 0; i < sortedArray.length - 1; i++) {
      assert.equal(sortedArray[i] <= sortedArray[i+1], true)
    }
  })

  it('should sort an array of 15,000,000 numbers', () => {
    let array = [];
    for (let i = 0; i < 1000000; i++) {
      let randNum = Math.floor(Math.random() * 150000000);
      array.push(randNum);
    }
    let sortedArray = heapSort(array);
    for (let i = 0; i < sortedArray.length - 1; i++) {
      assert.equal(sortedArray[i] <= sortedArray[i+1], true)
    }
  })

  it('should sort an array of 20,000,000 numbers', () => {
    let array = [];
    for (let i = 0; i < 1000000; i++) {
      let randNum = Math.floor(Math.random() * 200000000);
      array.push(randNum);
    }
    let sortedArray = heapSort(array);
    for (let i = 0; i < sortedArray.length - 1; i++) {
      assert.equal(sortedArray[i] <= sortedArray[i+1], true)
    }
  })

  it('should sort an array of 30,000,000 numbers', () => {
    let array = [];
    for (let i = 0; i < 1000000; i++) {
      let randNum = Math.floor(Math.random() * 300000000);
      array.push(randNum);
    }
    let sortedArray = heapSort(array);
    for (let i = 0; i < sortedArray.length - 1; i++) {
      assert.equal(sortedArray[i] <= sortedArray[i+1], true)
    }
  })

  it('should sort an array of 40,000,000 numbers', () => {
    let array = [];
    for (let i = 0; i < 1000000; i++) {
      let randNum = Math.floor(Math.random() * 400000000);
      array.push(randNum);
    }
    let sortedArray = heapSort(array);
    for (let i = 0; i < sortedArray.length - 1; i++) {
      assert.equal(sortedArray[i] <= sortedArray[i+1], true)
    }
  })

  it('should sort an array of 50,000,000 numbers', () => {
    let array = [];
    for (let i = 0; i < 1000000; i++) {
      let randNum = Math.floor(Math.random() * 500000000);
      array.push(randNum);
    }
    let sortedArray = heapSort(array);
    for (let i = 0; i < sortedArray.length - 1; i++) {
      assert.equal(sortedArray[i] <= sortedArray[i+1], true)
    }
  })

  it('should sort an array of 100,000,000 numbers', () => {
    let array = [];
    for (let i = 0; i < 1000000; i++) {
      let randNum = Math.floor(Math.random() * 1000000000);
      array.push(randNum);
    }
    let sortedArray = heapSort(array);
    for (let i = 0; i < sortedArray.length - 1; i++) {
      assert.equal(sortedArray[i] <= sortedArray[i+1], true)
    }
  })

  it('should sort an array of 200,000,000 numbers', () => {
    let array = [];
    for (let i = 0; i < 1000000; i++) {
      let randNum = Math.floor(Math.random() * 2000000000);
      array.push(randNum);
    }
    let sortedArray = heapSort(array);
    for (let i = 0; i < sortedArray.length - 1; i++) {
      assert.equal(sortedArray[i] <= sortedArray[i+1], true)
    }
  })

  it('should sort an array of 500,000,000 numbers', () => {
    let array = [];
    for (let i = 0; i < 1000000; i++) {
      let randNum = Math.floor(Math.random() * 5000000000);
      array.push(randNum);
    }
    let sortedArray = heapSort(array);
    for (let i = 0; i < sortedArray.length - 1; i++) {
      assert.equal(sortedArray[i] <= sortedArray[i+1], true)
    }
  })
})
