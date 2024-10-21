function vowels(str:string):any{
    var count=0;
    var letter=str.toLowerCase();
    for(var letters of letter)
    if(letters==='a'||letters==='e'||letters==='i'||letters==='o'||letters==='u')
    {
        count++;
    }
    return count;
    
}
console.log(vowels("divya"))