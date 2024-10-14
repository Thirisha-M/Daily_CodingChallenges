/*Create variables with type annotations for a string, a number, and a boolean, and assign values to them.
output
Name: Thirisha
Age: 21
Is Student: true*/
var typeAnnotation;
typeAnnotation = {
    Name: 'Thirisha',
    Age: 21,
    IsStudent: true
};
console.log(typeAnnotation); //using object annotation
/*Write a function that accepts a string and a number, then returns a string describing how old the person is
output
"Thirisha is 21 years old."
*/
var describe;
describe = function (name, age) {
    return ("".concat(name, " is ").concat(age, " years old."));
};
console.log(describe('Thirisha', 21)); //Function
/*Create an array of numbers and return the sum of the elements in the array.
output
The sum is: 100*/
var numbers = [10, 20, 30, 40];
var sum = 0;
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var num = numbers_1[_i];
    sum = sum + num;
}
console.log("The sum is:".concat(sum));
/*Define an object with properties name, age, and isStudent, and create a function to display a summary of the object.
output
"Thirisha is 21 years old. Student status: true"*/
var details;
details = {
    name: 'Thirisha',
    age: 21,
    isStudent: true
};
function displaySummary(details) {
    return "".concat(details.name, " is ").concat(details.age, " years old. Student status: ").concat(details.isStudent);
}
console.log(displaySummary(details));
/*Create a Person class with properties name and age. Add a method that returns a greeting from the person.
ouput
"Hello, my name is Alex and I am 21 years old."*/
var personDetails = /** @class */ (function () {
    function personDetails() {
        this.name = "Thirisha";
        this.age = 21;
    }
    personDetails.prototype.return = function () {
        console.log("Hello,my name is ".concat(this.name, " and I am ").concat(this.age, " years old"));
    };
    return personDetails;
}());
var PersonDeatils = new personDetails;
PersonDeatils.return();
