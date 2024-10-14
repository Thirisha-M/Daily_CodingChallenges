function isPerfectNumber(num: number): void {
    let sum = 0;
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sum=sum+i;
        }
    }
    if (sum === num && num !== 0) {
        console.log(`${num} is a Perfect Number.`);
    } else {
        console.log(`${num} is not a Perfect Number.`);
    }
}
console.log(isPerfectNumber(6))//1 3 2

