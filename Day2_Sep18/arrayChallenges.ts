/* Create an array of five fruit names. Write a function that prints each fruit in uppercase.
output
APPLE
BANANA
MANGO
ORANGE
GRAPE*/

var fruitNames:string[]=["apple","banana","mango","orange","grape"]//array declaration
var printFruitsInUppercase:(fruitsNames:string[])=>any
printFruitsInUppercase=function(fruitsNames:string[])
{
    return fruitNames.forEach(printFruitsInUppercase=>console.log(printFruitsInUppercase.toUpperCase()))
}
printFruitsInUppercase(fruitNames);


/*Create an array of five numbers. Write a function that returns the sum of all the numbers.
output
The sum is: 45*/
var numbers:number[]=[10,10,10,10,5]
var sumOfNumbers:(numbers:number[])=>any
    sumOfNumbers=function(numbers:number[]){
    var sum=0
    for(var num of numbers)
        {
        sum += num
        }
return sum
}
console.log("The sum is:",sumOfNumbers(numbers))

/*Write a function that takes an array of numbers and returns the largest number.
output
findMax([3, 5, 1, 9, 2])
Output: 9*/


function findMax(arr: number[]): number {
    let max = arr[0]; 
    for (let num of arr) {
        if (num > max) {
            max = num; 
        }
    }
    return max;
}

console.log(findMax([3, 5, 1, 9, 2])); // Output: 9

/* Reverse an Array
Question:
Write a function that takes an array and returns the reversed version of that array.

Expected Output:
reverseArray([1, 2, 3, 4, 5])
Output: [5, 4, 3, 2, 1]*/

function revnum(arr:any[]):any[]{
    return arr.reverse()
}
console.log(revnum([1,2,3,4,5]))

// // elemen in array or not

function elementExists(arr: number[], target: number): boolean {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return true;
        }
    }
    return false;
  }
  const numberr = [1, 2, 3, 4, 5];
  const target = 3;
  
  const exists = elementExists(numberr, target);
  console.log(exists);
  


