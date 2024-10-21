function isHappyNumber(num: number): boolean {
    const seen = {}; // Object to keep track of seen numbers

    while (num !== 1 && !seen[num]) {
        seen[num] = true; // Mark the current number as seen
        num = sumOfSquares(num); // Update num to the sum of squares of its digits
    }

    return num === 1; // If we reached 1, it's a happy number
}

function sumOfSquares(n: number): number {
    let sum = 0;

    while (n > 0) {
        const digit = n % 10; // Get the last digit
        sum += digit * digit; // Add the square of the digit to sum
        n = Math.floor(n / 10); // Remove the last digit
    }

    return sum; // Return the sum of squares
}

// Example usage
const numberToCheck = 19;
console.log(isHappyNumber(numberToCheck)); // Output: true
