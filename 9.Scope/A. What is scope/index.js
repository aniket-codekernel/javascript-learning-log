
// A. What is Scope

/*
Scope = the area of your code where a variable can be seen and used.

Think of a house:

- Things in the living room (global) can be used by everyone in the house.
- Things inside your bedroom (function/block) can only be used in that room.
- You can walk out of your bedroom to use the living room,
  but a guest in the living room cannot see inside your bedroom.
*/

let a = 10; // Living room: everyone can access it

function show() {
    let b = 20; // Bedroom: only inside show()

    console.log(a, b); // Works: 10 20
}

show();

console.log(a); // Works: 10

// console.log(b); // ReferenceError: b is not defined


