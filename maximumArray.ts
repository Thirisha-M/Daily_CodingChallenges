let a: number[] = [20, 209, 90, 30];
let s = a.sort((x, y) => x - y);
let max= a[s.length-1]   //90
console.log(max)

// modified code for max array
// because sort () is not used when 3 digit input given