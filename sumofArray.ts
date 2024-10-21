function sumofArray(add:number[]):any{
    var  sum=0;
    for(var i=0;i<add.length;i++){
        sum=sum+add[i];
       
    }
    return sum;
}
console.log(sumofArray([1,2,3,4,5]));

