//1.What a higher-order	function is
//A higher-order function is any function that does at least one of these:
/*
.takes another function as an argument, or
.returns a function
 */
//This is only possible because of what you just learned in Section E — functions are first-class values, so they can be passed around like any other value
function higherOreder(fn){  //Tkes a function as argument
    fn()
}
function factory() {
    return function () { }  //returns a function
}

//2. The function passed in/out is called a "regular" function
//To avoid confusion: a function that does not take or return another function is just called a regular (first-order) function.
function add(a,b) {
    return a + b;
}

//3. Type 1 — Takes a function as an argument
function greetUser(name,formatter){
    console.log(formatter(name));
}

function uppercase(str) {
    return str.toUppercase();
}

greetUser("Aniket",uppercase); //"Aniket"

function lowerCase(str) {
  return str.toLowerCase();
}

greetUser("Aniket", lowerCase); // "aniket"

//4. Type 2 — Returns a function
function makeGreeter(greeting) {
  return function (name) {
    console.log(`${greeting}, ${name}`);
  };
}

const sayHello56 = makeGreeter("Hello");
const sayHi89 = makeGreeter("Hi");

sayHello56("Aniket"); // "Hello, Aniket"
sayHi89("Rahul");     // "Hi, Rahul"

//================================================================================================================================================================
//F. Higher-order functions (functions that take/return functions)
/*
A higher-order function is any function that does at least one of these:

takes another function as an argument, or
returns a function
*/

//This is only possible because of what you just learned in Section E — functions are first-class values, so they can be passed around like any other value.
function higherOrder(fn) {   // takes a function as argument
  fn();
}

function factory() {
  return function () { };    // returns a function
}
//Both higherOrder and factory are higher-order functions.

//2. The function passed in/out is called a "regular" function
//To avoid confusion: a function that does not take or return another function is just called a regular (first-order) function.
function add(a, b) {
  return a + b;   // returns a NUMBER, not a function — not higher-order
}

//3. Type 1 — Takes a function as an argument
function greetUser(name, formatter) {
  console.log(formatter(name));
}

function upperCase(str) {
  return str.toUpperCase();
}

greetUser("Aniket", upperCase); // "ANIKET"

function lowerCase(str) {
  return str.toLowerCase();
}

greetUser("Aniket", lowerCase); // "aniket"

//4. Type 2 — Returns a function
function makeGreeter(greeting) {
  return function (name) {
    console.log(`${greeting}, ${name}`);
  };
}

const sayHello = makeGreeter("Hello");
const sayHi = makeGreeter("Hi");

sayHello("Aniket"); // "Hello, Aniket"
sayHi("Rahul");     // "Hi, Rahul"

//6. Why higher-order functions matter
/*
===============================================================
             Benefits of Higher-Order Functions
===============================================================

| Benefit                              | Explanation                                      |
|--------------------------------------|--------------------------------------------------|
| Reusability                          | One function (`greetUser`, `.map()`) can work    |
|                                      | with many different behaviors, just by swapping |
|                                      | the function passed in                            |
| Avoids repeating code                | Instead of writing a near-identical loop for     |
|                                      | every transformation, you write one loop and     |
|                                      | pass in different logic                           |
| Composability                        | Small functions can be combined/wrapped to build |
|                                      | bigger behavior (as in point 5)                  |
| Foundation of functional programming| Most array methods, async code, and modern JS    |
| style                                | patterns rely on this                            |

===============================================================
*/

//7. Built-in higher-order functions you already use (or will soon)
array.map(fn)      // transforms each element
array.filter(fn)   // keeps elements that pass a test
array.forEach(fn)  // runs fn on each element
array.reduce(fn)   // combines elements into one value
setTimeout(fn, ms) // runs fn later

/*
.Higher-order function = a function that takes a function as an argument, returns a function, or both.
.This only works because functions are first-class values (Section E).
.Two shapes: "takes a function in" (e.g. .map(), greetUser(name, formatter)) and "returns a function out" (e.g. makeGreeter).
.It's how JavaScript avoids rewriting similar logic repeatedly — swap the function passed in instead of rewriting the whole thing.
.Nearly all array methods and async functions (setTimeout, event listeners) are higher-order functions.
*/


