/*Write a function called printMessage that takes a string parameter and logs it to the console.
 The function should have a return type of void.
 output:
 Hello, World!*/
function printMessage(message) {
    console.log(message);
}
printMessage("Hello,World!*");
/*Create a function called executeCallback that takes a callback function as a parameter.
The callback should return void. Call the callback inside the function.
output:
Callback executed!*/
function executeCallback(callback) {
    callback();
}
var myCallback = function () {
    console.log("Callback executed!");
};
executeCallback(myCallback);
/*Create a function called handleClick that takes no parameters and returns void.
 Log a message when the function is called. Simulate calling this function as if it's an event handler.
 output:
 Button clicked!*/
function handleClick() {
    console.log("Button clicked!*");
}
handleClick();
/*Write a function called reset that resets a variable to its initial state and returns void.
Call the function and demonstrate that it does not return a value.
output:
Resetting the variable...*/
var counter = 10;
function reset() {
    counter = 0;
    console.log("Resetting the variable...");
}
reset();
console.log("Current count value ".concat(counter));
/*Create a function called fetchData that returns a Promise that resolves to void.
 Use the function and log a message upon resolution.
 Expected Output:
 Data fetched successfully!*/
function fetchData() {
    return new Promise(function (resolve) {
        resolve(); // Resolve the promise immediately
    });
}
// Use the function and log a message upon resolution
fetchData().then(function () {
    console.log("Data fetched successfully!");
});
