function findMissingNumber(nums: number[]): number {
    const n = nums.length; // Length of the array
    let expectedSum = 0;
    let actualSum = 0;

    // Calculate the expected sum of numbers from 0 to n
    for (let i = 0; i <= n; i++) {
        expectedSum += i; // Sum from 0 to n
    }

    // Calculate the actual sum of the numbers in the array
    for (let i = 0; i < n; i++) {
        actualSum += nums[i]; // Sum of the given numbers
    }

    return expectedSum - actualSum; // The missing number
}

// Example usage
const array = [0, 1, 2, 4, 5]; // Missing number is 3
console.log('Missing number:', findMissingNumber(array)); // Output: 3
