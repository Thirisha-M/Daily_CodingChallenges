function isPrime(num: number): boolean {
    if (num <= 1) return false;
    if (num <= 3) return true;

    // Check for factors from 2 to the square root of num
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false; // Found a factor, not prime
    }
    
    return true; // No factors found, it is prime
}

// Example usage
const numberToCheck = 29;
console.log(`Is ${numberToCheck} a prime number?`, isPrime(numberToCheck)); // Output: true
