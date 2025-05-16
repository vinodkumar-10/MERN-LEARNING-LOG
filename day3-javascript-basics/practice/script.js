var name = "Vinod";
let age = 20;
var isStudent = true;


console.log(`My name is ${name}, I am ${age} years old, and it is ${isStudent} that I am a student.`);




// Problem 2: Area of a Rectangle
// Declare length and width
let length = 10;
let width = 5;

// Calculate area
let area = length * width;

// Print the result
console.log(`The area of the rectangle is ${area}.`);



// Problem 3: Type Checker
// Declare variables of different types
let number = 42;
let name = "Alice";
var isStudent = true;
let city;
let value = null;

// Check and print their data types
console.log(`number => ${typeof number}`);
console.log(`name => ${typeof name}`);
console.log(`isStudent => ${typeof isStudent}`);
console.log(`city => ${typeof city}`);
console.log(`value => ${typeof value}`);  // Note: typeof null returns "object"





// Problem 4: Swap Two Variables

// Initial values
let a = 5;
let b = 10;

console.log(`Before swap: a = ${a}, b = ${b}`);

// Swapping using a temporary variable
let temp = a;
a = b;
b = temp;

console.log(`After swap: a = ${a}, b = ${b}`);




//  Problem 5: Simple Calculator

// Declare number variables
let num1 = 12;
let num2 = 4;

// Perform calculations
let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;

// Print the results
console.log(`Sum: ${sum}`);
console.log(`Difference: ${difference}`);
console.log(`Product: ${product}`);
console.log(`Quotient: ${quotient}`);
