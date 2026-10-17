//H. IIFEs (Immediately Invoked Function Expressions)

//1. What an IIFE is
//An IIFE is a function that runs immediately, the moment it's defined — you don't call it separately on a later line. "Immediately Invoked" literally means "called right away."
(function () {
  console.log("I ran immediately!");
})();
//This prints "I ran immediately!" the instant this code executes — there's no separate functionName() call anywhere else.

//2. Breaking down the syntax
(function () {
  console.log("hi");
})();

/*
===============================================================
                  IIFE — How It Works
===============================================================

| Part                  | What it does                                  |
|-----------------------|-----------------------------------------------|
| `function () { ... }` | A normal anonymous function                  |
|                       |                                               |
| `(function () { ... })`| Wrapping it in parentheses turns it into an   |
|                       | expression (a value), not a declaration       |
|                       |                                               |
| `(...)()`             | The trailing `()` immediately calls that      |
|                       | expression                                    |

===============================================================
*/

//Why the wrapping parentheses are needed:
/*
function () {       // ❌ SyntaxError
  console.log("hi");
}();
*/

/*
.JavaScript sees function at the very start of a statement and assumes you're writing a function declaration — but declarations require a name. It doesn't realize you meant to create-and-call a value, so it throws a syntax error.

.Wrapping it in ( ) tells JavaScript: "this is an expression, not a declaration" — the exact same rule you learned in Section A for identifying declarations vs expressions.
*/

//3. Arrow function IIFE
(() => {
  console.log("arrow IIFE ran!");
})();
//Same idea, just with arrow syntax instead of function.


//4. Two common parenthesis styles (both valid, same result)
(function () {
  console.log("style 1");
})();

(function () {
  console.log("style 2");
}());
//The only difference is whether the final () sits inside or outside the wrapping parentheses. Style 1 is more common.

//5. Why does an IIFE exist? The problem it solves
// Problem: variables leaking into the outer/global scope
var count = 0;
// ...hundreds of lines of code later, maybe in another file...
var count = 100; // oops, accidentally overwrote it, no warning
// If every variable you declare sits directly in the global scope, different parts of a large codebase (or different <script> files, in old-school browser JS) can accidentally collide and overwrite each other

//Solution: wrap code in an IIFE to create a private scope
(function () {
  var count = 0;
  count++;
  console.log(count); // 1
})();

console.log(count); // ReferenceError: count is not defined
//count only exists inside the IIFE. Nothing outside can see it or accidentally collide with it. The IIFE runs once, does its job, and its internal variables disappear afterward (unless captured by a closure — see point 7).

/*
Summary
.An IIFE is a function wrapped in ( ) to make it an expression, then immediately called with ().
.It solves the problem of variables leaking into the global scope.
.It runs exactly once, right when it's defined — never called again by name.
.Combined with closures, an IIFE can set up private state once and hand back functions that still remember it.
.Less essential today (thanks to let/const/modules), but still common in older code and some specific patterns.
*/



