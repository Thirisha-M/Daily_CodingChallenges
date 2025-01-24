// You are tasked with implementing a utility function mergeArrays that takes two sorted arrays of numbers and merges them into a single sorted array without duplicates.
// Write a function mergeArrays with the following signature:
// typescript
// Copy code
// function mergeArrays(arr1: number[], arr2: number[]): number[];
// Requirements:
// Both input arrays are sorted in ascending order.
// The output array should also be sorted in ascending order.
// The output array should not contain any duplicates.
// Do not use the Set object to handle duplicates.
// Example Input:
// const array1 = [1, 3, 5, 7];
// const array2 = [2, 3, 6, 8, 9];
// const result = mergeArrays(array1, array2);
// Expected Output:
// [1, 2, 3, 5, 6, 7, 8, 9]
function mergeArrays(arr1, arr2) {
    var i = 0, j = 0;
    var result = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            if (result[result.length - 1] !== arr1[i]) {
                result.push(arr1[i]);
            }
            i++;
        }
        else if (arr1[i] > arr2[j]) {
            if (result[result.length - 1] !== arr2[j]) {
                result.push(arr2[j]);
            }
            j++;
        }
        else {
            if (result[result.length - 1] !== arr1[i]) {
                result.push(arr1[i]);
            }
            i++;
            j++;
        }
    }
    while (i < arr1.length) {
        if (result[result.length - 1] !== arr1[i]) {
            result.push(arr1[i]);
        }
        i++;
    }
    while (j < arr2.length) {
        if (result[result.length - 1] !== arr2[j]) {
            result.push(arr2[j]);
        }
        j++;
    }
    return result;
}
var array1 = [1, 2, 3, 4, 5];
var array2 = [3, 4, 5, 6, 7, 8];
var result = mergeArrays(array1, array2);
console.log(result);
