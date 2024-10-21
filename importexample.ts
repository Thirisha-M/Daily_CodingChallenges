let user=require('prompt-sync')()
var a=user("Enter firststring ")
var b=user("Enter secondstring")
function anagram(a, b) {
    var c = a.toLowerCase().split('');
    var d = b.toLowerCase().split('');
    var firstjoinedArray = c.sort().join('');
    var secondjoinedArray = d.sort().join('');
    if (firstjoinedArray == secondjoinedArray) {
        console.log("Anagram");
    }
    else {
        console.log("Not a Anagram");
    }
}
anagram(a,b);