function mergeSortedArrays (leftArr, rightArr) {
    let sortedArr = [];
    
    while (leftArr.length && rightArr.length) {
      if (leftArr[0] < rightArr[0]) {
        sortedArr.push(leftArr.shift());
      } else {
        sortedArr.push(righArr.shift());
      }
    }
    return [...sortedArr, ...leftArr, ...rightArr];
  }

  function mergeSort(arr) {
    // Base Condition - the condition used to stop the function from calling itself. Stops recursion.
    if (arr.length <= 1) {
        return arr;
    }

    let middleIndex = Math.floor(arr.length / 2);

    // Recursive calls - used by mergeSort to call itself as a function within itself.
    let leftArr = mergeSort(arr.slice(0, middleIndex));
    let rightArr = mergeSort(arr.slice(middleIndex));

    return merge(leftArr, rightArr);

  }