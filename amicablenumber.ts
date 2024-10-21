function sumOfDivisors(num: number): number {
    let sum = 0;

    // Find proper divisors by iterating up to num/2
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sum += i; // Add the divisor to the sum
        }
    }
    
    return sum; // Return the sum of divisors
}

function areAmicableNumbers(num1: number, num2: number): boolean {
    // Calculate the sum of divisors for both numbers
    const sum1 = sumOfDivisors(num1);
    const sum2 = sumOfDivisors(num2);

    // Check if the numbers are amicable
    return (sum1 === num2 && sum2 === num1);
}

// Example usage
const number1 = 220;
const number2 = 284;

console.log(areAmicableNumbers(number1, number2)); // Output: true
