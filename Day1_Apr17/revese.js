// Reverse the string
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("hello"));
//Reverse the string without using built-in functions
function reversedString(str) {
    var reversed = "";
    for (var i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log(reversedString("hello"));
