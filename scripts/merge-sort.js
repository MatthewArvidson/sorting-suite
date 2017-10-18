
function mergeSort(array){
    //base case
    if (array.length <=1) {
      // debugger
        return array;
    }
    const midPoint = Math.floor(array.lenght /2);
    //midpoint exclusive
    const a = array.slice(0, midPoint);
    const b = array.slice(midpoint, array.length);
    console.log(a);
    console.log(b);
    return merge(mergeSort(a), mergeSort(b));
}
function merge(a, b){
    let result=[];
    console.log('merge happening')
    while (a.length && b.length) {
      if (a[0] <= b[0]) {
        result.push (a.shift())
      } else {
        result.push (b.shift)
      }
    }
    while (a.length) {
      result.push (a.shift())
    }
    while (b.length) {
      result.push (b.shift())
    }
    return result;
}
module.exports = mergeSort;
