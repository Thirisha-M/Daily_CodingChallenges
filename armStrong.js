function isArmstrongNumber(num) {
    var sum = 0;
    var temp = num;
    var numDigits = num.toString().length;
    while (temp > 0) {
        var digit = temp % 10;
        sum += Math.pow(digit, numDigits);
        temp = Math.floor(temp / 10);
    }
    if (sum === num) {
        console.log("".concat(num, " is an Armstrong number."));
    }
    else {
        console.log("".concat(num, " is not an Armstrong number."));
    }
}
console.log(isArmstrongNumber(153));
