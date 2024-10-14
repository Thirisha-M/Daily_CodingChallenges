//compare two numbers
//without using function
var a1 = 5;
var b1 = '5';
if (a1 == b1) {
    console.log("Both are equal");
}
else {
    console.log("Both are not equal");
}
//using function
var compare2;
compare2 = function (c, d) {
    if (c === d) {
        return true;
    }
    else {
        return false;
    }
};
console.log(compare2('20', 20));
console.log(compare2(12, 12));
