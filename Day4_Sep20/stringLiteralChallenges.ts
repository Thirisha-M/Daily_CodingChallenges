/*Define a union of string literals for different colors.
 Write a function that takes one of these colors and returns a corresponding HEX code.
 output:
 #FF0000
 #00FF00*/

type Color = "red" | "green" | "blue";

function getColorHex(color: Color): string {
    switch (color) {
        case "red":
            return "#FF0000";
        case "green":
            return "#00FF00";
        case "blue":
            return "#0000FF";
        default:
            return "#000000"; // This case should never occur
    }
}

// Test the function
console.log(getColorHex("red"));   // "#FF0000"
console.log(getColorHex("green")); // "#00FF00"
console.log(getColorHex("blue")); // Error: Argument of type '"yellow"' is not assignable to parameter of type 'Color'.

