// D. Hoisting and TDZ
// How scope behaves before the declaration line runs.

/*
During preparation for execution, JavaScript establishes
bindings for declarations in their respective scopes.

This behavior is commonly described as hoisting.
*/

console.log(y); // undefined

var y = 10;

// console.log(t);
// ReferenceError: Cannot access 't' before initialization

let t = 5;

/*
TDZ = Temporal Dead Zone.

The TDZ is the period from the start of a lexical scope
until the let or const declaration is initialized.

The binding exists, but accessing it before initialization
causes a ReferenceError.
*/

{
    // TDZ for x starts here.

    // console.log(x);
    // ReferenceError: Cannot access 'x' before initialization

    let x = 10; // TDZ ends after initialization

    console.log(x); // 10
}

/*
Function declarations are fully hoisted,
so you can call them before their declaration.
*/

sayHi(); // Works: Hi

function sayHi() {
    console.log("Hi");
}

/*
Function expressions behave differently.
The variable declaration is hoisted, but the function
expression is not assigned until its line executes.
*/

// sayBye(); // TypeError: sayBye is not a function

var sayBye = function () {
    console.log("Bye");
};