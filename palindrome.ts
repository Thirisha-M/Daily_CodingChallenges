function isPalindrome(str: string): boolean {
    const len = str.length;
  
    for (let i = 0; i < len / 2; i++) {
      if (str[i] !== str[len - 1 - i]) {
        return false;
      }
    }
  
    return true;
  }
  
  // Example usage
  const word = "radar";
  console.log(`${word} is a palindrome: ${isPalindrome(word)}`);
  