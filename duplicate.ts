function duplicate(num:number[]):any{
var arr:number[]=[];
for(const i of num){
if(num.indexOf(i)===num.lastIndexOf(i)){
    arr.push(i);
}
}
return arr;
}
console.log(duplicate([1,2,3,1]))