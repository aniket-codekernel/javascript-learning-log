//1. What "first-class" means
//In JavaScript, a function is treated just like any other value — a number, a string, an object. This means a function can be:
/*
.stored in a variable
.stored inside an object or array
.passed into another function as an argument
.returned out of another function
 */
//This is called being a first-class citizen. JavaScript doesn't treat functions specially — it treats them like data.

//2. Stored in a variable
const greet = function () {
  console.log("Hi!");
};

greet(); // "Hi!"
//You're already doing this constantly — this is exactly what a function expression is.

//3. Stored inside an object or array
const obj = {
  sayHi: function () { console.log("Hi!"); }
};
obj.sayHi(); // "Hi!"

const funcList = [
  function () { console.log("one"); },
  function () { console.log("two"); }
];
funcList[0](); // "one"
funcList[1](); // "two"
//A function sitting in an array slot is just a value in that slot, same as a number would be.

//4. Passed into another function as an argument
function callTwice(fn) {
  fn();
  fn();
}

function sayHello() {
  console.log("Hello!");
}

callTwice(sayHello);
// Hello!
// Hello!

//5. Returned out of another function
function makeMultiplier(factor) {
  return function (n) {
    return n * factor;
  };
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);

double(5); // 10
triple(5); // 15

//=====================================================================================================================================
//E. First-Class Functions (Functions as Values)
//1. What "first-class" means
/*
In JavaScript, a function is treated just like any other value — a number, a string, an object. This means a function can be:

stored in a variable
stored inside an object or array
passed into another function as an argument
returned out of another function

This is called being a first-class citizen. JavaScript doesn't treat functions specially — it treats them like data.
*/

//2. Stored in a variable
const greet15 = function () {
  console.log("Hi!");
};

greet15(); // "Hi!"
//You're already doing this constantly — this is exactly what a function expression is.

//3. Stored inside an object or array
const obj15 = {
  sayHi: function () { console.log("Hi!"); }
};
obj.sayHi(); // "Hi!"

const funcList12 = [
  function () { console.log("one"); },
  function () { console.log("two"); }
];
funcList[0](); // "one"
funcList[1](); // "two"
//A function sitting in an array slot is just a value in that slot, same as a number would be

//4. Passed into another function as an argument
function callTwice(fn) {
  fn();
  fn();
}

function sayHello() {
  console.log("Hello!");
}

callTwice(sayHello);
// Hello!
// Hello!
//Important detail: notice sayHello is passed without parentheses — callTwice(sayHello), not callTwice(sayHello()).

//6. Why this matters — it enables two big patterns
/*
===============================================================
             Higher-Order Functions vs Callbacks
===============================================================

| Pattern                    | What it means                                           | Covered in |
|----------------------------|---------------------------------------------------------|------------|
| Higher-order functions     | A function that takes another function as an argument,  | Section F  |
|                            | or returns one                                         |            |
| Callbacks                  | A function passed into another function, to be run      | Section J  |
|                            | later                                                   |            |

===============================================================
*/
//7. Quick contrast with other languages
//Not every language works this way. In many older/lower-level languages, functions are a separate category from data and can't be passed around freely. JavaScript (along with Python, and others) chose to make functions first-class, which is why patterns like callbacks and higher-order functions are so natural in JS.

/*
Summary
Functions in JS are values, not a special separate thing.
They can be: stored in variables, stored in data structures, passed as arguments, returned from functions.
Passing a function ≠ calling a function. fn is the function itself; fn() runs it.
This property is the foundation for higher-order functions and callbacks — the next two sections.
*/