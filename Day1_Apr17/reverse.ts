// Reverse the string

function reverse(str:string):string{
    return str.split('').reverse().join('');
}
console.log(reverse("hello"));


//Reverse the string without using built-in functions


function reverseStringWithoutBuiltIn(str:string):string{
    let reversed = "";
    for(let i = str.length - 1; i >= 0; i--){
        reversed += str[i];
    }
    return reversed;
}
console.log(reverseStringWithoutBuiltIn("hello"));


//Reverse the number

function reverseNumber(num:number):number{
    const reverseNumber=num.toString().split('').reverse().join('');
    return parseInt(reverseNumber);
}
console.log(reverseNumber(12345));


//Reverse the number without using built-in functions


function reverseNumberWithoutBuiltIn(num:number):number{
    let reversed = 0;
    while(num > 0){
        reversed = (reversed * 10) + (num % 10);
        num = Math.floor(num / 10);
    }
    return reversed;
}
console.log(reverseNumberWithoutBuiltIn(12345));