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
console.log(anagaram("Dad","dad"))
var Input = require('prompt-sync')();
var age1 = Input("Enter age ");
var Age = Number(age1);
var sex = Input("Enter the Sex ");
var materialStatus = Input("Enter the MaterialStatus ");
function employeeDetails(Age, sex, materialStatus) {
    if (sex == "F") {
        return "She will work only in urban areas";
    }
    else if (sex == "M") {
        if (Age >= 20 && Age <= 40) {
            return "he may work in anywhere";
        }
        else if (Age >= 40 && Age <= 60) {
            return "he will work in urban areas only";
        }
    }
    return "ERROR";
}
console.log(employeeDetails(Age, sex, materialStatus));
