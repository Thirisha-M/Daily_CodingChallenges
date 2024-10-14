//sum of two numbers

//without using function
let a: number=5;
let b: number=10;
let sum: number=a+b;
console.log(sum);

//sum of two numbers using function
let add:(a:number,b:number)=>number;
add=function(a:number,b:number){
    return(a+b);
}
console.log(add(15,15));   


