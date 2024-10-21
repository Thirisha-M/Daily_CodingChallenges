function lengthOfLongestSubstring(s: string): number {
    const charMap: { [key: string]: number } = {}; // Map to store the last index of characters
    let left = 0; // Start of the window
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        if (s[right] in charMap) {
            left = Math.max(charMap[s[right]] + 1, left); // Move the left pointer
        }
        charMap[s[right]] = right; // Update the last index of the character
        maxLength = Math.max(maxLength, right - left + 1); // Calculate max length
    }

    return maxLength; // Return the length of the longest substring
}

// Example usage
const inputString = "abcabcbb";
console.log(lengthOfLongestSubstring(inputString)); // Output: 3
