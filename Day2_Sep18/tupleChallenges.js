/*Create a tuple that holds a string (representing a person's name) and a number (representing their age).
output:
["John Doe", 30]*/
var user;
user = ["John Doe", 30];
console.log(user);
/*Define a tuple that holds a boolean and a string, then print the second value from the tuple.
input:true,john
output:john*/
var employee;
employee = [true, "john"];
console.log(employee[1]);
/*Define a tuple that holds a string, a number, and an optional boolean.
Create two instances: one with all values, and one without the optional value.
output:
["User1", 25, true]
["User2", 30]*/
var Data;
var instance1 = ["User1", 25, true];
var instance2 = ["User2", 30];
console.log(instance1);
console.log(instance2);
/*Define a tuple where the first element is either a string or a number, and the second element is a boolean.
 Create an example with both types for the first element.
 output:
 [42, true]
 ["Answer", false]*/
var mixedTuple;
mixedTuple = ["Thirisha", true];
console.log(mixedTuple);
mixedTuple = [36, false];
console.log(mixedTuple);
/*Create an array of tuples where each tuple contains a string and a number.
Iterate over the array and print the elements.
output:
Item: Apples, Quantity: 5
Item: Bananas, Quantity: 10
Item: Oranges, Quantity: 8*/
var items = [["Banana", 5], ["apple", 10], ["grapes", 15], ["strawberry", 20]];
items.forEach(function (item) {
    console.log("Item: ".concat(item[0], ", Quantity: ").concat(item[1]));
});
