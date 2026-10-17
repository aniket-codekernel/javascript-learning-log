// G. Shadowing

let x = "outer";

function tes() {
    let x = "inner"; // Shadows the outer x

    console.log(x); // inner
}

tes();

console.log(x); // outer (unchanged)

/*
Shadowing occurs when a variable declared in an inner scope
has the same name as a variable in an outer scope.

The inner variable takes precedence inside its scope.
The outer variable remains unchanged.
*/


// G1. Illegal Shadowing

/*
A var declaration cannot conflict with a let or const
declaration in the same scope.

Example of illegal shadowing:
*/

// let value = 10;

// {
//     var value = 20;
// }

// SyntaxError: Identifier 'value' has already been declared

/*
Why?

var is not limited to the ordinary block scope.
Its declaration conflicts with the outer let declaration.

However, shadowing let with var inside a separate function
is allowed because the var belongs to a different function scope.
*/

var number = 10;

function example() {
    var number = 20; // Allowed: separate function scope

    console.log(number); // 20
}

example();

console.log(number); // 10