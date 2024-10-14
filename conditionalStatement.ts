//Write a  program to accept two integers and check whether they are equal or not.

function checkEqual(x:number,y:number):void{
    if(x==y){
        console.log(`${x}and${y} are equal.`);
    }
    else{
         console.log(`${x}and${y} are not equal.`)
    }

}
console.log(checkEqual(10,10));

//Write a  program to check whether a given number is even or odd.

function checkOddorEven(x:number):void{
    if(x%2==0){
        console.log(`${x} is a even number`)
    }
    else{
        console.log(`${x} is a odd number`)
    }
}
console.log(checkOddorEven(12));

//Write a program to check whether a given number is positive or negative.
function CheckPosOrNeg(x:number):void{
    if(x>0){
        console.log(`${x} is a positive number`)
    }
    else{
        console.log(`${x} is a Negative number`)
    }
}
console.log(CheckPosOrNeg(-6))

//Write a program to find whether a given year is a leap year or not

function checkLeap(year:number):void{
    if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
        console.log(`${year}is a leap year`)
    }
    else{
        console.log(`${year}is a not leap year`)
    }
}
console.log(checkLeap(2018))
console.log(checkLeap(2016))

