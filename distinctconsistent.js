function countConsistentStrings(allowed, words) {
    var allowedSet = new Set(allowed);
    var count = 0;
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var word = words_1[_i];
        var isConsistent = true;
        for (var _a = 0, word_1 = word; _a < word_1.length; _a++) {
            var char = word_1[_a];
            if (!allowedSet.has(char)) {
                isConsistent = false;
                break;
            }
        }
        if (isConsistent) {
            count++;
        }
    }
    return count;
}
var allowed1 = "ab";
var words1 = ["ad", "bd", "aaab", "baa", "badab"];
console.log(countConsistentStrings(allowed1, words1));
var allowed2 = "abc";
var words2 = ["a", "b", "c", "ab", "ac", "bc", "abc"];
console.log(countConsistentStrings(allowed2, words2));
var allowed3 = "cad";
var words3 = ["cc", "acd", "b", "ba", "bac", "bad", "ac", "d"];
console.log(countConsistentStrings(allowed3, words3));
