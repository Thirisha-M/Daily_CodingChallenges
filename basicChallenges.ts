/* 1.Write a TypeScript program that declares a variable `name` and assigns it a string value. 
Also declare a variable `age` and assign it a number value. 
 Finally print the values of name and age.*/

let Name: string = "Divya"
let age: number = 21
console.log(Name, age);
"-------------------------------------------------------------------------------------------------------------------------------------------------------------------------"

/*Write a TypeScript program that declares variables using let, const, and var.
 Then, describe how each declaration type behaves with respect to scoping and mutability*/

// Using let (Block-scoped, mutable)

let myVariable1: number = 5;
if (true) {
    let myVariable1: number = 10; // This is a different variable within the block scope.
}
console.log(myVariable1); // Output: 5 (the outer variable)

// Using const (Block-scoped, immutable)

const myVariable2: string = "Hello";
//myVariable2 = "World"; // Error: Cannot reassign a const variable

// Using var (Function-scoped, mutable)

function exampleFunction() {
    var myVariable3: boolean = true;
    if (myVariable3) {
        var myVariable3: boolean = false; // This redeclares the same variable within the function scope.
    }
    console.log(myVariable3); 
}
exampleFunction();

"-------------------------------------------------------------------------------------------------------------------------------------------------------------------------"

/*3. Write a TypeScript program that declares variables of the 
following data types: number, string, boolean, and undefined.
 Assign values to them and perform basic operations.*/

let n1: number = 100;
let strVariable: string = "Divya";
let boolVariable: boolean = false;
let undefinedVariable: void = undefined;


//basic operation

const n2: number = 10;

//Addition

const sum: number = n1 + n2
console.log("sum:", sum)

//string Concatenation

const concatendatedString: string = strVariable + "How Are You?";
console.log("concatendatedString:", concatendatedString);

//Logical Operation

const isTrue: boolean = boolVariable && true;
console.log("Logical AND", isTrue);

//check if undefined
if (undefinedVariable === undefined)
     {
    console.log("undefinedVariable is defined");
     }
    else 
    {
        console.log("undefinedVariable is defined");
    }

"-------------------------------------------------------------------------------------------------------------------------------------------------------------------------"

/* 4.Write a TypeScript program that declares a variable as a number 
and then tries to assign a string to it to see type checking in action.*/

let n: number = 10;
console.log("n= ", n);

"-------------------------------------------------------------------------------------------------------------------------------------------------------------------------"

/*5.Write a TypeScript program that declares a variable without specifying
 its type and shows how TypeScript infers the type based on the assigned value.*/


let names="Divya";
console.log("Type of names:",typeof names)
let ages=20
console.log("Type of ages:",typeof ages);

"-------------------------------------------------------------------------------------------------------------------------------------------------------------------------"

/*6.Write a TypeScript program that converts a variable of one type 
to another using type assertions and type conversion functions like parseInt().*/

//string to number

let  str_num:string="100";
let numberFromAssertion:number=parseInt(str_num);
console.log("number from assertion:",numberFromAssertion);


//number to string

let numberValue:number=200;
let stringFromAssertion:string=numberValue.toString();
console.log("String from assertion:",stringFromAssertion);
"-------------------------------------------------------------------------------------------------------------------------------------------------------------------------"
/*8.Write a TypeScript program that declares an array of a specific data type.
 It will demonstrates common array operations like adding elements, removing elements, 
 and iterating through the array.*/

 let color:string[]=["green","yellow","voilet","black","pink"]
 color.push("White");//Adding to the end
 color.unshift("babypink");//Adding to the beginning
 console.log(color);
 color.pop();//Removes the last element
 color.shift()//Removes the first element

 "------------------------------------------------------------------------------------------------------------------------------------------------------------------------"
 /*9.Write a TypeScript program that defines an enumeration 'Color' with values 'Red', 'Green', 
 'White' and Blue. Create a variable 'selectedColor' of type 'Color' and assign it one of the enumeration values.*/

 // Define an enumeration 'Color'

 enum Color {
    Red = "Red",
    Green = "Green",
    White = "White",
    Blue = "Blue"
}

// Create a variable 'selectedColor' of type 'Color' and assign it a value
let selectedColor: Color = Color.Green;

console.log("Selected Color is:", selectedColor);

"------------------------------------------------------------------------------------------------------------------------------------------------------------------------"
/*10.Write a TypeScript program that declares a variable 'isNull' and assigns it null.
 You should also declare a variable called 'isUndefined' and assign it an undefined value.*/

// Declare a variable 'isNull' and assign it null
let isNull: null = null;

// Declare a variable 'isUndefined' and assign it undefined
let isUndefined: undefined = undefined;

// Print the values of the variables
console.log("isNull:", isNull);
console.log("isUndefined:", isUndefined);
"------------------------------------------------------------------------------------------------------------------------------------------------------------------------"
