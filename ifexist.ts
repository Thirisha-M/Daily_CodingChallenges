function Ifexist(num:number[]):boolean{
    const seen=new Set<number>();
    
   for(let n of num){
    if(seen.has(n*2)|| (n%2==0 && seen.has(n/2))){
        return true
    }
    seen.add(n);
   } 
   return false
}
console.log(Ifexist([10,5,2,3])); //true
console.log(Ifexist([3,1,7,11]));//true