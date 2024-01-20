# Independent Learning Project - Merge Sort

## Introduction

Merge Sort is an Intermediate Sorting Algorithm invented by John von Neumann in 1945, a Hungarian-American mathematician, physicist, and computer scientist, who worked on the Manhattan Project and was a pioneer in building the mathematical framework of quantum physics, functional analysis, game theory, the universal constructor, and the digital computer.

Merge Sort uses a Divide and Conquer Recursive Methodology, which breaks down a problem into two or more sub-problems of the same or related type until these become simple enough to be solved directly. The solutions to the sub-problems are then combined to give a solution to the original problem.

Merge Sort works by dividing an array into smaller subarrays (two halves) until it cannot be further divided, i.e. each subarray has only one element left (an array with one element is always sorted). The process involves sorting each subarray and then merging the sorted subarrays back together to form the final sorted array using a merge helper function. This process is repeated until the entire array is sorted.

Attributes:

Out-of-place - Requires extra data structures, which is "opposite to in-place sorting algorithms, where the input is simply overwritten"

Stable - Elements that are equal will stay in the same order in the sorted output array as they were in the unsorted input array.

Comparison-type - Only uses a single abstract comparison operation, such as "less-than" or "equal-to" to decide what element out of two will come first in the final sorted output array.

Uses a Binary Heap---a complete Binary Tree which is used to store data efficiently to get the max or min element based on its structure.

Subarrays of 0 or 1 item are always sorted.

Contains a Recursive algorithm that continuously splits the array in half by having the mergeSort function call itself until subarrays with only 1 index each are reached. A recursive function calls itself until a base conditin is reach (in this case reaching subarrays with only 1 element in each---considered sorted by default), which allows it to exit out of the recursive function call loop.


## Algorithm Description

1. Initialization: The entire list is considered unsorted initially.

"Split the given list into two halves (roughly equal halves in case of a list with an odd number of elements)."

```js
const array = [5, 2, 4, 1, 3];
```

2. Two functions are used to sort the array. The first is the main mergeSort function used to slice the input array in half recursively by calling itself until the array is broken up into subarrays with only 1 element in them (which is considered sorted by default). This mergeSort function returns each subarray (a left and right array) and passes them through the mergeSortedArrays helper function that is used to build them back up into 1 sorted array by sorting and combining each presorted array passing through it.

"Continue dividing the subarrays in the same manner until you are left with only single element arrays."

```js
  function mergeSort(arr) {
    // Base Condition - the condition used to stop the function from calling itself. Stops recursion because an array of 1 or 0 is considered sorted by default.
    if (arr.length <= 1) {
        return arr;
    }

    let middleIndex = Math.floor(arr.length / 2); // Allows Merge Sort to break the array in half---into the leftArr and rightArr respectively.

    // Recursive calls - used by mergeSort to call itself as a function within itself.
    let leftArr = mergeSort(arr.slice(0, middleIndex)); // Continues to slice the array in half into multiple smaller arrays. This breaks it up on the left side.
    let rightArr = mergeSort(arr.slice(middleIndex)); // Continues to slice the array in half into multiple smaller arrays. This breaks it up on the right side.

    return mergeSortedArrays(leftArr, rightArr); // Calls the helper function mergeSortedArrays in order to build the single index arrays back into 1 sorted array.

  }
```

3. The mergeSortedArrays helper function takes the leftArr and rightArr as parameters from the mergeSort function, compares the first element of each, evaluates which is less, and adds the lowest value to the sortedArr.

"Starting with the single element arrays, merge the subarrays so that each merged subarray is sorted."

```js
function mergeSortedArrays (leftArr, rightArr) { // Merge Sort helper function that allows Merge Sort to sort already sorted arrays with each other.
    let sortedArr = []; // the sorted items will go here
    
    while (leftArr.length && rightArr.length) { // Insert the smallest item into sortedArr by checking if there is anything in the leftArr and rightArr.
      if (leftArr[0] < rightArr[0]) { // Finds which initial index in each array is smaller.
        sortedArr.push(leftArr.shift()); //Push leftArr index 0 value into sortedArr if it is smaller.
      } else {
        sortedArr.push(rightArr.shift()); //Push rightArr index 0 value into sortedArr if it is smaller.
      }
    }
    // Use spread operators to create a new array, combining the three arrays. Will be in order once mergeSortedArrays helper function completes.
    return [...sortedArr, ...leftArr, ...rightArr];
  }
```


4. Repeat: "Repeat step 3 until you end up with a single sorted array."

![Merge Sort Animation](https://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif)

## Big O Evaluation

### Time Complexity

"Complexity Analysis of Merge Sort Time Complexity: O(N log(N)),  Merge Sort is a recursive algorithm and time complexity can be expressed as following recurrence relation. T(n) = 2T(n/2) + θ(n)
	
The above recurrence can be solved either using the Recurrence Tree method or the Master method. It falls in case II of the Master Method and the solution of the recurrence is θ(Nlog(N)). The time complexity of Merge Sort isθ(Nlog(N)) in all 3 cases (worst, average, and best) as merge sort always divides the array into two halves and takes linear time to merge two halves."

"
T(k) = time taken to sort k elements
M(k) = time taken to merge k elements

T(N) = 2 * T(N/2) + M(N)
= 2 * T(N/2) + constant * N

These N/2 elements are further divided into two halves. So,
T(N) = 2 * [2 * T(N/4) + constant * N/2] + constant * N
= 4 * T(N/4) + 2 * N * constant
. . .
= 2k * T(N/2k) + k * N * constant

It can be divided maximum until there is one element left. So, then N/2k = 1. k = log2N
T(N) = N * T(1) + N * log2N * constant
= N + N * log2N

Therefore the time complexity is O(N * log2N).

So in the best case, the worst case and the average case the time complexity is the same."

### Space Complexity

"Auxiliary Space: O(N), In merge sort all elements are copied into an auxiliary array. So N auxiliary space is required for merge sort."

## Use Cases

"a. Applications of Merge Sort: Sorting large datasets: Merge sort is particularly well-suited for sorting large datasets due to its guaranteed worst-case time complexity of O(n log n). External sorting: Merge sort is commonly used in external sorting, where the data to be sorted is too large to fit into memory. Custom sorting: Merge sort can be adapted to handle different input distributions, such as partially sorted, nearly sorted, or completely unsorted data. Inversion Count Problem

b. Advantages of Merge Sort: Stability: Merge sort is a stable sorting algorithm, which means it maintains the relative order of equal elements in the input array. Guaranteed worst-case performance: Merge sort has a worst-case time complexity of O(N logN), which means it performs well even on large datasets. Parallelizable: Merge sort is a naturally parallelizable algorithm, which means it can be easily parallelized to take advantage of multiple processors or threads."

"Inversion Count for an array indicates – how far (or close) the array is from being sorted. If the array is already sorted, then the inversion count is 0, but if the array is sorted in reverse order, the inversion count is the maximum.   Given an array arr[]. The task is to find the inversion count of arr[]. Where two elements arr[i] and arr[j] form an inversion if a[i] > a[j] and i < j."

## Edge Cases and Concerns

"Drawbacks of Merge Sort: Space complexity: Merge sort requires additional memory to store the merged sub-arrays during the sorting process.  Not in-place: Merge sort is not an in-place sorting algorithm, which means it requires additional memory to store the sorted data. This can be a disadvantage in applications where memory usage is a concern. Not always optimal for small datasets: For small datasets, Merge sort has a higher time complexity than some other sorting algorithms, such as insertion sort. This can result in slower performance for very small datasets.""

## Citations

[Doable Danny - Merge Sort - JavaScript](https://www.doabledanny.com/merge-sort-javascript)

[Doable Danny - Important Algorithm Concepts | Algorithm Stability, In-place Algorithms, and Comparison Algorithms](https://www.doabledanny.com/algorithm-concepts)

[Justin Kim - Javascript Freecodecamp Algorithm #34: Implement Merge Sort](https://www.youtube.com/watch?v=x_Z9FcAPmbk)

[GeeksforGeeks - Binary Heap](https://www.geeksforgeeks.org/binary-heap/)

[Programiz - JavaScript Recursion](https://www.programiz.com/javascript/recursion)

[Codewars - MergeSort "merge" function](https://www.codewars.com/kata/52336a4436e0b095d8000093)

[GeeksforGeeks - Merge Sort – Data Structure and Algorithms Tutorials](https://www.geeksforgeeks.org/merge-sort/)

[GeeksforGeeks - Inversion count in Array using Merge Sort](https://www.geeksforgeeks.org/inversion-count-in-array-using-merge-sort/)

[Tutorialspoint - How to implement merge sort in JavaScript?](https://www.tutorialspoint.com/how-to-implement-merge-sort-in-javascript)

[Stack Abuse - Merge Sort in JavaScript](https://stackabuse.com/merge-sort-in-javascript/)

[Wikipedia - Merge sort](https://en.wikipedia.org/wiki/Merge_sort)

[Wikipedia - John von Neumann](https://en.wikipedia.org/wiki/John_von_Neumann)

[Wikipedia - Divide-and-conquer algorithm](https://en.wikipedia.org/wiki/Divide-and-conquer_algorithm)

[Wikipedia - an example of merge sort.](https://en.wikipedia.org/wiki/Merge_sort#/media/File:Merge-sort-example-300px.gif)
