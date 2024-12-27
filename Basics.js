// function addition(num1:number,num2:number){
//    return num1+num2;
// }
// console.log(addition(7,3))
// function evenOrOdd(num:number){
//   if(num%2==0){
//     return "even"
//   }
//   else{
//     return "odd"
//   }
// }
// console.log(evenOrOdd(7))
// function largestNumber(num1: number, num2: number, num3: number): number {
//     if (num1 > num2 && num1 > num3) {
//         return num1; 
//     }
//     else if (num2 > num1 && num2 > num3) {
//         return num2;
//     }
//     else {
//         return num3;
//     }
// }
// console.log(largestNumber(1, 3, 2));
// console.log(largestNumber(10, 20, 15)); 
// function revString(str:string):string{
//     return str.split('').reverse().join('')
// }
// console.log(revString("Thirisha"));
function countVowels(str) {
    var count = 0;
    str = str.toLowerCase();
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            count++;
        }
    }
    return count;
}
console.log(countVowels("Thirisha"));
