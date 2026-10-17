// B. Types of Scope

/*
JavaScript has four commonly discussed types of scope.

| # | Type     | Where it is created                         | Who can access it                         |
|---|----------|---------------------------------------------|-------------------------------------------|
| 1 | Global   | Outside every function and block            | Throughout the accessible global scope    |
| 2 | Function | Inside a function                            | Within that function                      |
| 3 | Block    | Inside {} (if, for, while, plain block)      | Within that block for let/const           |
| 4 | Module   | Inside a JavaScript module                   | Within that module unless exported        |
*/


// B1. Global Scope

let name = "Aniket"; // Global scope

function hello() {
    console.log(name); // Can read the global variable
}

hello(); // Aniket

/*
In a browser classic script, top-level var declarations and
function declarations generally become properties of window.

Top-level let and const declarations do not become window properties.

JavaScript modules have their own scope and do not add their
top-level declarations to the global object.

Too many global variables can cause name clashes and bugs,
so keep global variables to a minimum.
*/


// B2. Function Scope

function test() {
    var x = 1;
    let y = 2;
    const z = 3;

    console.log(x, y, z); // 1 2 3
}

test();

// console.log(x); // ReferenceError: x is not defined
// console.log(y); // ReferenceError: y is not defined
// console.log(z); // ReferenceError: z is not defined

// All three declarations stay inside the function test().


// B3. Block Scope

// A block is a statement or group of statements inside { }.

if (true) {
    var d = 1;   // var ignores ordinary block scope
    let f = 2;   // let respects block scope
    const g = 3; // const respects block scope
}

console.log(d); // 1: var is accessible outside the block

// console.log(f); // ReferenceError: f is not defined
// console.log(g); // ReferenceError: g is not defined

/*
Key rule:

var   = function-scoped (or global-scoped when declared globally)
let   = block-scoped
const = block-scoped
*/


// B4. Module Scope

// File: math.js
// Load this file using <script type="module" src="math.js"></script>

const secret = 42;      // Available only inside this module
export const pi = 3.14; // Can be imported by another module

/*
Variables declared at the top level of a JavaScript module
do not become global variables.

Another module can import pi, but it cannot directly access
secret unless secret is exported.
*/