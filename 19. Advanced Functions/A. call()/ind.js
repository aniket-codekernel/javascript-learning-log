/*
================================================================================================
                         JavaScript Function Concepts
================================================================================================

| Section | Topic                | Core idea                                      |
|---------|----------------------|------------------------------------------------|
| A       | call()               | Run a function with a chosen this              |
| B       | apply()              | Same as call(), but arguments go in an array   |
| C       | bind()               | Make a new function with this locked in        |
| D       | Currying             | Turn f(a, b, c) into f(a)(b)(c)                |
| E       | Partial Application  | Pre-fill some arguments                        |
| F       | Memoization          | Cache results using closures                   |
| G       | Function Composition | Chain small functions into one                 |

------------------------------------------------------------------------------------------------
QUICK REVISION:

A. call()               -> Invokes a function immediately.
B. apply()              -> Invokes a function with arguments in an array.
C. bind()               -> Returns a new function with a fixed this value.
D. Currying             -> Converts multiple arguments into nested functions.
E. Partial Application  -> Pre-fills some function arguments.
F. Memoization          -> Stores previously calculated results.
G. Function Composition -> Combines functions to create a new function.

================================================================================================
*/

//A–C build directly on this, and D–G build on closures. You already have both.

//Section A: call()
//From the this chapter, you know that this depends on how a function is called. So what if you want to borrow a function and decide for yourself what this should be?
const person1 = { name: "Aniket" };
const person2 = { name: "Rahul" };

function greet() {
  console.log("Hi, I'm " + this.name);
}

greet(); // `this` is undefined or window, so you get a wrong result

//.call(thisValue) means: “Run this function now, and treat thisValue as this.”
greet.call(person1); // Hi, I'm Aniket
greet.call(person2); // Hi, I'm Rahul
//.call(thisValue) means: “Run this function now, and treat thisValue as this.”

//First argument: what this should be
//Remaining arguments: normal arguments, separated by commas
// func.call(thisArg, arg1, arg2,...)

//Method borrowing
// call() lets an object use another object’s method without copying it:
const car = {
  brand: "Mahindra",
  describe() {
    console.log("This is a " + this.brand);
  }
};

const bike = { brand: "Royal Enfield" };

car.describe();            // This is a Mahindra
car.describe.call(bike);   // This is a Royal Enfield

/*
Key facts to remember
 * call() runs the function immediately.
 * It doesn’t change the original function. It only sets this for that one run.
 * Arrow functions ignore call() for this, because they use lexical this (Ch. 6, Section C).
 * In non-strict mode, passing null or undefined as thisArg falls back to the global object. In strict mode, this stays null or undefined.
*/

