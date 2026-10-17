//Function Basic Syntac
function functionname() {
    //Code to execute
}
//functionname()

/*
Here
  .function=> Keywords used to create a function
  .functionname=>Function name
  .()=>Parameters go here
  .{}=>Contains the function's code
  .functionname()=>calls/exects the function
*/


//A.Function declarations vs expressions vs arrow function
//.Function declarations
function fundec() {
    return a + b
}
//fundec()

//.Function expressions    //we can use a all 3 variable var,let,const
const funexp = function (a, b) {
    return a + b;
};

//.Arror Functions 
const add = (a, b) => {
    return a + b;
};
//add();
// Implicit return (single expression, no braces needed)
const add1 = (a, b) => a + b;


/*
3. Key difference — Hoisting
Feature                  Declaration                 Expression
Hoisted?                 Yes — fully, can            No — only the variable is
                         call before definition      hoisted (if var), not the function                             

Can call before          Yes                         No — TypeError or ReferenceError
line in code?                      
*/

sayHi(); // works
function sayHi() { console.log("hi"); }

sayBye(); // ❌ TypeError: sayBye is not a function
var sayBye = function() { console.log("bye"); };

/*
This connects back to what you already know about var/let/const hoisting from Ch. 2 — a function expression assigned with const would even throw a TDZ error, not just "undefined."
 */

/*
===============================================================
                 COMPARISON TABLE
===============================================================

| Feature                              | Declaration                      | Expression                              | Arrow Function                                                 |
|--------------------------------------|----------------------------------|-----------------------------------------|----------------------------------------------------------------|
| Syntax                               | function name() {}              | const x = function() {}                | const x = () => {}                                            |
| Hoisted?                             | Yes (fully)                      | No (only variable, if var)             | No                                                             |
| Has its own this?                    | Yes                              | Yes                                     | No — inherits this from enclosing scope (lexical this)        |
| Has arguments object?                | Yes                              | Yes                                     | No                                                             |
| Can be used as constructor (new)?    | Yes                              | Yes                                     | No — throws error                                              |
| Can be a method with dynamic this?   | Yes                              | Yes                                     | No — bad for object methods                                    |
| Best for                             | Named, hoisted utility functions | Conditional/dynamic function assignment | Short callbacks, preserving outer this                        |

===============================================================
*/

//The two big arrow function differences worth internalizing
//a) No own this
const obj = {
  name: "Aniket",
  regularFn: function() {
    console.log(this.name); // "Aniket" — `this` = obj
  },
  arrowFn: () => {
    console.log(this.name); // undefined — `this` = outer scope, NOT obj
  }
};

//b) No arguments object
function regular() {
  console.log(arguments); // works — array-like object of all args
}

const arrow = () => {
  console.log(arguments); // ❌ ReferenceError
};
//Arrow functions use rest parameters (...args) instead if you need this — that's Section B, coming up.

