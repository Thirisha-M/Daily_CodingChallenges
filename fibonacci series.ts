function fibonacci(n: number): number {
    if (n <= 0) return 0;
    if (n === 1) return 1;

    let a = 0, b = 1, temp;

    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }

    return b; // Return the nth Fibonacci number
}

// Example usage
const n = 10;
console.log(fibonacci(n)); // Output: 55
