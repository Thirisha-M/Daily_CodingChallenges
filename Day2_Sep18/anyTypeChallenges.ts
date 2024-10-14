/*Create a variable with the any type and assign a string to it. 
Then, change the value to a number and log both values.
output:
Hello World
42*/

var result: any;
result = "Helloworld"
console.log(result);
result = 42
console.log(result);

/*Write a function called logValue that takes a parameter of type any and logs it to the console. 
Test it with a string, a number, and an array.
output:
Hello
100
[1, 2, 3]*/

function logValue(value: any): void {
    console.log(value);
}
logValue("Hello");
logValue(100);
logValue([1, 2, 3]);

/*Create an array that holds elements of different types using the any type. 
Add a string, a number, and a boolean to the array, and log the array.
output:
["Apple", 10, true]*/

var mixedType: any[] = ["Apple", 10, true]
console.log(mixedType);

/*Create an object with any type properties.
 Assign a string to one property and a boolean to another, and then log the object.
 output:
 { name: "Alice", isActive: true }*/


var User: {
    name: string,
    isActive: boolean
}
User = {
    name: "Alice",
    isActive: true
}
console.log(User)

/*Create a variable of type any and assign it a string. 
Use type assertion to cast it to a number and log the result (you can use a typecast even if it’s wrong)
output:
Error: Cannot convert string to number*/

let value: any = "Hello";
let numValue: number = value as unknown as number;
if (isNaN(numValue)) {
    console.error("Error: Cannot convert string to number");
} else {
    console.log(numValue);
}






