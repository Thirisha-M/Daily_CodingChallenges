//compare two numbers

//without using function
let a1:any=5;
let b1:any= '5';
if(a1==b1){
    console.log("Both are equal");
}
else{
    console.log("Both are not equal");
}   

//using function

let compare2:(c:any,d:any)=>any;
compare2=function(c:any,d:any)
{
if(c===d){
    return true;
}
else{
    return false;
}
}
console.log(compare2('20',20));
console.log(compare2(12,12));
