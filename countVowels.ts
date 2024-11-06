import { count } from "console"

function countVowels(words:string):any{
let count=0;
var letter=words.toLowerCase();
for(var letters of letter  )
    if(letters=="a"||letters=="e"||letters=="i"||letters=="o"||letters=="u")
    {
        count++;
    }
    return count;
}
console.log(countVowels("asvikaiiaa"))