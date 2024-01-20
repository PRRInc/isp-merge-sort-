function mergeSortedArrays (leftArr, rightArr) {
    let sortedArr = [];
    
    while(leftArr.length && rightArr.length) {
      if(leftArr[0] < rightArr[0]) {
        sortedArr.push(leftArr.shift());
      } else {
        sortedArr.push(righArr.shift());
      }
    }
    return [...sortedArr, ...leftArr, ...rightArr];
  }