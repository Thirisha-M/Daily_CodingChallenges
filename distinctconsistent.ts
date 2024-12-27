function countConsistentStrings(allowed: string, words: string[]): number {
    const allowedSet = new Set(allowed);
    let count = 0;
    for (const word of words) {
        let isConsistent = true;


        for (const char of word) {
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
const allowed1 = "ab";
const words1 = ["ad", "bd", "aaab", "baa", "badab"];
console.log(countConsistentStrings(allowed1, words1));

const allowed2 = "abc";
const words2 = ["a", "b", "c", "ab", "ac", "bc", "abc"];
console.log(countConsistentStrings(allowed2, words2));

const allowed3 = "cad";
const words3 = ["cc", "acd", "b", "ba", "bac", "bad", "ac", "d"];
console.log(countConsistentStrings(allowed3, words3)); 
