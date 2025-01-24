function maxScore(s) {
    var leftZeros = 0;
    var rightOnes = 0;
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var char = s_1[_i];
        if (char === '1') {
            rightOnes++;
        }
    }
    var maxScore = 0;
    for (var i = 0; i < s.length - 1; i++) {
        if (s[i] === '0') {
            leftZeros++;
        }
        else {
            rightOnes--;
        }
        var score = leftZeros + rightOnes;
    }
    return maxScore;
}
console.log(maxScore("011101"));
console.log(maxScore("00111"));
console.log(maxScore("1111"));
