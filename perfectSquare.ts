function isPerfectSquare(num: number): boolean {
    if (num < 0) return false; // Negative numbers cannot be perfect squares

    let i = 0;
    while (i * i <= num) {
        if (i * i === num) {
            return true; // Found the perfect square
        }
        i++;
    }
    return false; // Not a perfect square
}

// Example usage
const numberToCheck = 16;
console.log(isPerfectSquare(numberToCheck));  // Output: true
