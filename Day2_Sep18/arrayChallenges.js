/* Create an array of five fruit names. Write a function that prints each fruit in uppercase.
output
APPLE
BANANA
MANGO
ORANGE
GRAPE*/
var fruitNames = ["apple", "banana", "mango", "orange", "grape"]; //array declaration
var printFruitsInUppercase;
printFruitsInUppercase = function (fruitsNames) {
    return fruitNames.forEach(function (printFruitsInUppercase) { return console.log(printFruitsInUppercase.toUpperCase()); });
};
printFruitsInUppercase(fruitNames);
/*Create an array of five numbers. Write a function that returns the sum of all the numbers.
output
The sum is: 45*/
var numbers = [10, 10, 10, 10, 5];
var sumOfNumbers;
sumOfNumbers = function (numbers) {
    var sum = 0;
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var num = numbers_1[_i];
        sum += num;
    }
    return sum;
};
console.log("The sum is:", sumOfNumbers(numbers));
/*Write a function that takes an array of numbers and returns the largest number.
output
findMax([3, 5, 1, 9, 2])
Output: 9*/
function findMax(arr) {
    var max = arr[0];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var num = arr_1[_i];
        if (num > max) {
            max = num;
        }
    }
    return max;
}
console.log(findMax([3, 5, 1, 9, 2])); // Output: 9
/*2. Reverse an Array
Question:
Write a function that takes an array and returns the reversed version of that array.

Expected Output:
reverseArray([1, 2, 3, 4, 5])
Output: [5, 4, 3, 2, 1]*/
function revnum(arr) {
    return arr.reverse();
}
console.log(revnum([1, 2, 3, 4, 5]));
