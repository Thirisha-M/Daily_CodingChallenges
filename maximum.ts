function maximum(arr:number[]):any{
    let value=arr.sort();
    let max=arr[value.length-1];
    return max;

}
console.log(maximum([23,56,78,99,35]));

