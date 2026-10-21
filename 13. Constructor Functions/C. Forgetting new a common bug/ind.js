//C. Forgetting new a common bug
function Person(name, age) {
  this.name = name;   // "this" = the new object being built
  this.age = age;
}

const a = new Person("Aniket", 20);
const b = new Person("Riya", 22);
console.log(a.name); // "Aniket"
console.log(b)
const c = Person("Sam", 30); // no "new"!

console.log(c);       // undefined (function returns nothing)
//console.log(window.name); // "Sam" (in sloppy mode, "this" = global object)  //we can use global this because node.js
console.log(globalThis.name)  //// "Sam" (in sloppy mode, "this" = global object)

//// "Sam" (in sloppy mode, "this" = global object)
function Person(name) {
  if (!new.target) return new Person(name); // new.target is undefined without "new"
  this.name = name;
}





                         //1. What is window?
//In a browser, window is the global object, the biggest object that holds everything global (console, document, setTimeout, and so on).

//2. What is window.name?
//name is a property that already exists on window. It is a string holding the name of the browser tab/window. By default it is empty:
console.log(window.name); // "" (empty string)

//3. Why did it become “Sam” in my example?
//Trace the buggy code:
function erson(name) {
  this.name = name;
}

erson("Sam"); // called WITHOUT new
// 1. No "new", so no fresh object is created
// 2. In a normal (sloppy mode) function call, this = window
// 3. So this.name = name   becomes   window.name = "Sam"
//The constructor meant to set a property on a new object, but it wrote onto the global window object instead. That is why the bug is dangerous: it silently changes a global.

//4. Where does this work?
/*
================================================================================================
                      Global Object in Different JavaScript Environments
================================================================================================

| Environment         | Global object                | Result                                            |
|---------------------|------------------------------|---------------------------------------------------|
| Browser console     | window                       | window.name becomes "Sam"                         |
| Node.js             | globalThis (no window)       | window is not defined, so use globalThis.name    |
| Strict mode / class | none (this is undefined)     | TypeError instead                                |

================================================================================================
*/




                           //Sloppy Mode
//A. What is it?
//Sloppy mode is the default, forgiving way JavaScript runs your code. It ignores many mistakes or quietly “fixes” them instead of throwing errors. Its opposite is strict mode.

//B. How to turn on strict mode
//Write "use strict"; at the top of a file or function:
/*
"use strict";

x = 10; // ReferenceError: x is not defined

//Without it, you are in sloppy mode:
x = 10; // no error, silently creates a global variable
console.log(x); // 10
*/

//C. Sloppy vs strict, side by side
/*
================================================================================================
                            Sloppy Mode vs Strict Mode
================================================================================================

| Situation                                    | Sloppy mode              | Strict mode      |
|----------------------------------------------|--------------------------|------------------|
| Assigning to an undeclared variable          | Creates a global         | ReferenceError   |
| this in a plain function call                | window (global object)   | undefined        |
| Duplicate parameter names: function f(a, a)  | Allowed                  | SyntaxError      |
| Writing to a read-only property              | Fails silently           | TypeError        |

================================================================================================
*/