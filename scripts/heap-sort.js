const arr = [];
var lastIndex = arr.length - 1;

const buildHeap = (arr, i) => {
  let leftChild = 2 * i + 1;
  let rightChild = 2 * i + 2; 
  let parent = i;

  if (leftChild < lastIndex && // is leftChild aka 1 less than lastIndex aka 5 = true
     arr[leftChild] > arr[parent]){ // is value of arrayIndex of leftChild aka 9 greater than parent aka 3 = true
      parent = leftChild; // both conditions are satisfied so now parent is reassigned to leftChild aka index 0 swaps with index 1
  }
  if (rightChild < lastIndex && // is rightChild aka 
     arr[rightChild] > arr[parent]){
      parent = rightChild;
  }
    
  if (parent != i) {
    let temp = arr[i];

    arr[i] = arr[parent];
    arr[parent] = temp;
    buildHeap(arr, parent);
  }
}

const heapSort = (arr, i) => {
  lastIndex = arr.length;

  for(let i = Math.floor(lastIndex / 2); i >= 0; i--){
    buildHeap(arr, i);
  }
  
  for(let i = arr.length - 1; i > 0; i--){

    let temp = arr[0];
      arr[0] = arr[i];
      arr[i] = temp;
      
      lastIndex--;
      buildHeap(arr, 0);
    }
    return arr;
}

heapSort(arr);

module.exports = heapSort;