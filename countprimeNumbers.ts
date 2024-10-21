function countPrimes(n: number): number {
    if (n < 2) return 0;

    const isPrime = new Array(n).fill(true);
    isPrime[0] = isPrime[1] = false; // 0 and 1 are not prime numbers

    for (let i = 2; i * i < n; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j < n; j += i) {
                isPrime[j] = false; // Mark multiples as non-prime
            }
        }
    }

    return isPrime.filter(Boolean).length; // Count prime numbers
}

// Example usage
const n = 10;
console.log(countPrimes(n)); // Output: 4 (2, 3, 5, 7)
