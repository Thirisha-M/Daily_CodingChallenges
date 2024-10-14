/*Create a type alias Person that represents an object with a name (string) and age (number).
Write a function that takes a Person and returns a greeting message with their name and age.
output:
Hello, Alice. You are 25 years old.
Hello, Bob. You are 30 years old.*/
function greet(person) {
    return "hello,".concat(person.name, ".You are ").concat(person.age, " years old");
}
console.log(greet({ name: "Alice", age: 25 }));
console.log(greet({ name: "Bob", age: 30 }));
function describeShape(shape) {
    return "You have a ".concat(shape);
}
console.log(describeShape("circle"));
console.log(describeShape("square"));
