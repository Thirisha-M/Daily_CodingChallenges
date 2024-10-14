/*Create a type alias Person that represents an object with a name (string) and age (number). 
Write a function that takes a Person and returns a greeting message with their name and age.
output:
Hello, Alice. You are 25 years old.
Hello, Bob. You are 30 years old.*/

type Person={
    name:string
    age:number
}
function greet(person:Person):any{
   return `hello,${person.name}.You are ${person.age} years old`
}
console.log(greet({name:"Alice",age:25}));
console.log(greet({name:"Bob",age:30}));

/*Create a type alias Shape that can be "circle" or "square". 
Write a function that takes a Shape and returns a message about what shape it is.
output:
You have a circle.
You have a square.*/

type Shape="circle"|"square"
function describeShape(shape:Shape):string{
    return `You have a ${shape}`
}
console.log(describeShape("circle"))
console.log(describeShape("square"))
