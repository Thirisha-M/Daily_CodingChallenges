/*Create a union type Status that can be "success", "error", or "loading".
 Write a function that takes a status and returns a message based on the input.
 output:
 Operation was successful!
 An error occurred.
 Loading, please wait...*/
function getStatusMessage(status) {
    if (status === "success") {
        return "Operation was successful!";
    }
    else if (status === "error") {
        return "An error occurred.";
    }
    else {
        return "Loading, please wait...";
    }
}
console.log(getStatusMessage("success"));
console.log(getStatusMessage("error"));
console.log(getStatusMessage("loading"));
/*Write a function that takes a parameter that can be either a number or a string.
 If it’s a number, return the square of the number. If it’s a string, return the length of the string
 output:
 25
 5*/
function processValue(value) {
    if (typeof value === "number") {
        return value * value;
    }
    else {
        return value.length;
    }
}
console.log(processValue(5));
console.log(processValue("Hello"));
