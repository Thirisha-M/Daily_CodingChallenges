//rightangle triangle

function rightAngledTriangle(rows: number): void {
    for (let i = 1; i <= rows; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += '* '; // Build the row with stars
        }
        console.log(row); // Print the row
    }
}
rightAngledTriangle(5);


//inverted right triangle

function invertedRightAngledTriangle(rows: number): void {
    for (let i = rows; i >= 1; i--) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += '* '; // Build the row with stars
        }
        console.log(row); // Print the row
    }
}
invertedRightAngledTriangle(5);

//pyramidstar pattern

function pyramid(rows: number): void {
    for (let i = 1; i <= rows; i++) {
        let row = '';

        // Add spaces before stars
        for (let j = 1; j <= rows - i; j++) {
            row += ' '; // Build the leading spaces
        }

        // Add stars
        for (let j = 1; j <= (2 * i - 1); j++) {
            row += '*'; // Build the row with stars
        }

        console.log(row); // Print the row
    }
}
pyramid(5);

//Diamond pattern

function diamond(rows: number): void {
    // Upper part of the diamond
    for (let i = 1; i <= rows; i++) {
        let row = '';

        // Add spaces before stars
        for (let j = 1; j <= rows - i; j++) {
            row += ' '; // Build the leading spaces
        }

        // Add stars
        for (let j = 1; j <= (2 * i - 1); j++) {
            row += '*'; // Build the row with stars
        }

        console.log(row); // Print the row
    }

    // Lower part of the diamond
    for (let i = rows - 1; i >= 1; i--) {
        let row = '';

        // Add spaces before stars
        for (let j = 1; j <= rows - i; j++) {
            row += ' '; // Build the leading spaces
        }

        // Add stars
        for (let j = 1; j <= (2 * i - 1); j++) {
            row += '*'; // Build the row with stars
        }

        console.log(row); // Print the row
    }
}
diamond(5);
