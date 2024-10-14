/*Write a function that takes two numbers as input and returns their sum.
output
sumOfTwoNumbers(5, 10);  // Expected output: 15
sumOfTwoNumbers(3, 7);   // Expected output: 10*/

var sumOfTwoNumbers:(a:number,b:number) => number
sumOfTwoNumbers=function(a:number,b:number)
{
    let c=a+b
    return(c)
}
console.log(sumOfTwoNumbers(5,10))

/*Write a function that takes three numbers and returns the largest number
output
findLargestNumber(10, 5, 8);  // Expected output: 10
findLargestNumber(1, 2, 3);   // Expected output: 3*/

var findLargestNumber:(a:number,b:number,c:number) => number
findLargestNumber=function(a:number,b:number,c:number)
{
    if(a>b && a>c)
    {
        return(a)
    }
    else if(b>a && b>c)
    {
        return(b)
    }
    else{
        return(c)
    }
}
console.log(findLargestNumber(10,5,8))

/*Write a function that converts Celsius to Fahrenheit.
formula: 𝐹=𝐶×95+32
output
celsiusToFahrenheit(0);   // Expected output: 32
celsiusToFahrenheit(100); // Expected output: 212*/

var celsiusToFahrenheit:(C:number)=>any
celsiusToFahrenheit=function(C:number)
{
    const F=C*95+32
        return(F)
}
console.log(celsiusToFahrenheit(0))



