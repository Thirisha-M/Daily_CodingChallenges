
/*2. Input a string which contains some palindrome substrings.
Find out the position of palindrome substrings if exist and replace it by */


const inputString = "mom and dad are my world"; 
function Palindrome(str: string): any
{
    return str=== str.split('').reverse().join('');
}
function replacePalindromes(input: string): string {
    const words = input.split(' ');
    return words
        .map(word => {
            if (Palindrome(word) && word.length > 1) {

                let asterisks = '';
                for (let i = 0; i < word.length; i++) {
                    asterisks += '*';
                }
                return asterisks;
            }
            return word;
        })
        .join(' '); 
}
const result = replacePalindromes(inputString);
console.log(result);
