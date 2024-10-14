/*Write a function that checks if a number is even.
output
isEven(4);  // Expected output: true
isEven(7);  // Expected output: false*/

var addOrEven:(a:number)=>boolean
addOrEven=function(a:number)
{
    if(a%2==0)
    {
        return true
    }
    else{
        return false
    }
}
console.log(addOrEven(4));
console.log(addOrEven(7));


/*Write a function that checks if two strings are equal.
output
areStringsEqual("hello", "hello");  // Expected output: true
areStringsEqual("hello", "world");  // Expected output: false*/

var stringsEqual:(str1:string,str2:string)=>boolean
stringsEqual=function(str1:string,str2:string)
{
if( str1 == str2)
{
    return true
}
else
{
    return false
}
}
console.log(stringsEqual("hello","hello"))
console.log(stringsEqual("hello","world"));




/*Write a function that checks if a number is positive.
output
isPositive(10);   // Expected output: true
isPositive(-5);   // Expected output: false*/

var positiveOrNegative:(a:number)=>boolean
positiveOrNegative=function(a:number)
{
    if(a<0)
    {
        return false
    }
        return true
}
console.log(positiveOrNegative(10))
console.log(positiveOrNegative(-5));


