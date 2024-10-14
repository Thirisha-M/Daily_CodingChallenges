/*2. Input a string which contains some palindrome substrings.
Find out the position of palindrome substrings if exist and replace it by */
var inputString = "mom and dad are my world";
function Palindrome(str) {
    return str === str.split('').reverse().join('');
}
function replacePalindromes(input) {
    var words = input.split(' ');
    return words
        .map(function (word) {
        if (Palindrome(word) && word.length > 1) {
            var asterisks = '';
            for (var i = 0; i < word.length; i++) {
                asterisks += '*';
            }
            return asterisks;
        }
        return word;
    })
        .join(' ');
}
var result = replacePalindromes(inputString);
console.log(result);
