//Write a program that reads an array of ints and outputs the lehgth of the longest sequence in strictly
// ascending ondragover.print the elements of longest ascending sequence in an array elements ofthe sequence
// must go one after another.A single number is assumed to be an ordered sequence with length=1
// output
// enter the number of elements
// 5
// enter 5 numbers in any order to find the longest ascending order
// 40
// 45
// 0
// 39
// 10
// the value in ascending order is 2
// 0 39
function ascendingSequence(arr: number[]): void
{
    let maxLen = 1;
    let currentLen = 1;  
    let startIndex = 0;  
    let maxStartIndex = 0;  
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            currentLen++;
        } else {
            if (currentLen > maxLen) {
                maxLen = currentLen; 
                maxStartIndex = startIndex; cd 
            }
            currentLen = 1;  
            startIndex = i;  
        }
    }
    if (currentLen > maxLen) {
        maxLen = currentLen; 
        maxStartIndex = startIndex;
    }
    console.log(`The length of the longest ascending sequence is: ${maxLen}`);
    const longestSequence = arr.slice(maxStartIndex, maxStartIndex + maxLen);
    console.log("The longest ascending sequence is: ", longestSequence.join(" "));
}
const arr: number[] = [45,40,0,39,10];
ascendingSequence(arr);
