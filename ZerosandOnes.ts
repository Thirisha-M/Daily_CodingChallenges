function maxScore(s: string): number {
    let leftZeros = 0;
    let rightOnes = 0;

    for (let char of s) {
        if (char === '1') {
            rightOnes++;
        }
    }
    
    let maxScore = 0;
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === '0') {
            leftZeros++;
        }
        else {
            rightOnes--;
        }
        const score = leftZeros + rightOnes;
        maxScore = Math.max(maxScore, score);
    }

    return maxScore;
}
console.log(maxScore("011101"));
console.log(maxScore("00111"));
console.log(maxScore("1111"));

