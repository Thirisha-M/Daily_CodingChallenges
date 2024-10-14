/*Input a string of alphabets.find out the number of occurence of all alphabets
in that string.find out the alphabet in that string.find out the alphabet with Maximum occurence*/
function alphabetOccurrence(input) {
    var Occurrences = {};
    var maxOccurrence = 0;
    var maxAlphabet = '';
    for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
        var char = input_1[_i];
        if (Occurrences[char]) {
            Occurrences[char]++;
        }
        else {
            Occurrences[char] = 1;
        }
        if (Occurrences[char] > maxOccurrence) {
            maxOccurrence = Occurrences[char];
            maxAlphabet = char;
        }
    }
    console.log('Alphabet occurences:', Occurrences);
    console.log("The Alphabet with maximum occurrence is'".concat(maxAlphabet, "'with ").concat(maxOccurrence, "occurrences."));
}
alphabetOccurrence('Trisaa');
