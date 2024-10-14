/*Create variables with type annotations for a string, a number, and a boolean, and assign values to them.
output
Name: Thirisha
Age: 21
Is Student: true*/

var typeAnnotation:{
    Name:string
    Age:number,
    IsStudent:Boolean,
}
typeAnnotation={
    Name:'Thirisha',
    Age:21,
    IsStudent:true

}
console.log(typeAnnotation)//using object annotation


/*Write a function that accepts a string and a number, then returns a string describing how old the person is
output
"Thirisha is 21 years old."
*/

var describe:(name:string,age:number)=>void
describe=function(name:string,age:number)
{
    return(`${name} is ${age} years old.`)
}
console.log(describe('Thirisha',21))//Function

/*Create an array of numbers and return the sum of the elements in the array.
output
The sum is: 100*/

var numbers:number[]=[10,20,30,40];
var sum:number=0
for(var num of numbers)
{
    sum=sum+num
}
console.log(`The sum is:${sum}`);

/*Define an object with properties name, age, and isStudent, and create a function to display a summary of the object.
output
"Thirisha is 21 years old. Student status: true"*/

var details:{
    name:string,
    age:number,
    isStudent:boolean
}
details={
    name:'Thirisha',
    age:21,
    isStudent:true
}
function displaySummary(details: { name: string; age: number; isStudent: boolean }): string 
{
    return `${details.name} is ${details.age} years old. Student status: ${details.isStudent}`;
}
console.log(displaySummary(details))

/*Create a Person class with properties name and age. Add a method that returns a greeting from the person.
ouput
"Hello, my name is Alex and I am 21 years old."*/

class personDetails{
    name:string="Thirisha"
    age:number=21

    return(){
        console.log( `Hello,my name is ${this.name} and I am ${this.age} years old.`)
    }
}
const PersonDeatils=new personDetails
PersonDeatils.return()







