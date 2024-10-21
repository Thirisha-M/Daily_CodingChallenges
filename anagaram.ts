
function anagaram(as:string,bs:string):any{
    let val1=as.toLowerCase();
    let val2=bs.toLowerCase();
    val1=as.split('').sort().join('');
    val2=bs.split('').sort().join('');
    if(val1==val2)
    {
        return "anagram";
    }
    else{
    return  "Not";
    }

}
console.log(anagram("listen","silent"))
