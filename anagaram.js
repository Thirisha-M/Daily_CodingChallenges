// const users=require('prompt-sync')();
// var as:string=users ("Enter firststring");
// var bs:string=users("Enter secondstring");
// function anagaram(as,bs):any{
//     let val1=as.toLowerCase();
//     let val2=bs.toLowerCase();
//     val1=as.split('').sort().join('');
//     val2=bs.split('').sort().join('');
//     if(val1==val2)
//     {
//         return "anagram";
//     }
//     else{
//     return  "Not";
//     }
// }
// console.log(anagaram(as,bs));
function duplica(arr) {
    var num = [new Set(arr)]; // Convert Set back to an array using spread operator
    return num;
}
console.log(duplica([1, 2, 1]));
