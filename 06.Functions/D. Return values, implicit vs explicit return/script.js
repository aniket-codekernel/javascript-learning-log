// 1. What return does
//return sends a value out of a function, back to wherever the function was called. Once return runs, the function stops immediately — nothing after it runs.
function add(a, b) {
  return a + b;
  console.log("this never runs"); // unreachable
}

const result = add(2, 3);
console.log(result); // 5

// 2. No return = undefined
function greet(name) {
  console.log(`Hi, ${name}`);
  // no return
}
const result1 = greet("Aniket"); // prints "Hi, Aniket"
console.log(result1);            // undefined
//console.log prints to the screen — it does not send anything back. Without return, the function still runs, but whatever called it gets undefined.

//3. Explicit return (regular functions and arrow functions with braces)
function square(n) {
  return n * n;
}

const square2 = (n) => {
  return n * n;
};
//You write the word return yourself. Required whenever the function body uses { }.

//4. Implicit return (arrow functions only, no braces)
const square = n => n * n;
/*
 No { }, no return keyword — the single expression's value is automatically returned.

Rule: implicit return only works when:

there are no curly braces, and
the function body is a single expression
 */
const double = n => n * 2;        // ✅ implicit return, works

const double2 = n => { n * 2; };  // ❌ braces used, but no "return" → undefined

//6. Returning early
//A function can have multiple return statements — only one runs, whichever is hit first.
function checkAge(age) {
  if (age < 0) return "Invalid age";
  if (age < 18) return "Minor";
  return "Adult";
}

checkAge(15); // "Minor" — stops here, never checks further

//7. return with nothing
function logIfPositive(n) {
  if (n < 0) return; // exits early, returns undefined
  console.log(n);
}
//return; alone (no value) just stops the function and gives back undefined. Common for early exits / guard clauses.

// 5. Returning an object with implicit return — the parentheses trap
const makeUser = (name) => { name: name };
makeUser("Aniket"); // ❌ undefined, or a syntax error
//JavaScript sees { name: name } right after => and reads the { } as a function body block, not an object. Inside that "block," name: name looks like a label, not a key-value pair.

// Fix: wrap the object in parentheses
const makeUser1 = (name) => ({ name: name });
makeUser1("Aniket"); // { name: "Aniket" }
// The ( ) tells JavaScript "this is an expression (an object), not a function body."








//====================================================================================================================================================================================
//D. Return Values — Implicit vs Explicit Return
//1. What return does
//return sends a value out of a function, back to wherever the function was called. Once return runs, the function stops immediately — nothing after it runs.
function add(a, b) {
  return a + b;
  console.log("this never runs"); // unreachable
}

const result11 = add(2, 3);
console.log(result11); // 5

//2. No return = undefined
function greet(name) {
  console.log(`Hi, ${name}`);
  // no return
}

const result12 = greet("Aniket"); // prints "Hi, Aniket"
console.log(result12);            // undefined
//console.log prints to the screen — it does not send anything back. Without return, the function still runs, but whatever called it gets undefined.

//3. Explicit return (regular functions and arrow functions with braces)
function square(n) {
  return n * n;
}

const square22 = (n) => {
  return n * n;
};
//You write the word return yourself. Required whenever the function body uses { }.

//4. Implicit return (arrow functions only, no braces)
const square = n => n * n;
//No { }, no return keyword — the single expression's value is automatically returned.

/*
Rule: implicit return only works when:

there are no curly braces, and
the function body is a single expression
*/
const double25 = n => n * 2;        // ✅ implicit return, works

const double24 = n => { n * 2; };  // ❌ braces used, but no "return" → undefined
//The second one is a common bug — adding braces silently disables implicit return.

//5. Returning an object with implicit return — the parentheses trap
const makeUser89 = (name) => { name: name };
makeUser89("Aniket"); // ❌ undefined, or a syntax error
//JavaScript sees { name: name } right after => and reads the { } as a function body block, not an object. Inside that "block," name: name looks like a label, not a key-value pair.

//Fix: wrap the object in parentheses
const makeUser98 = (name) => ({ name: name });
makeUser98("Aniket"); // { name: "Aniket" }
//The ( ) tells JavaScript "this is an expression (an object), not a function body."

//6. Returning early
//A function can have multiple return statements — only one runs, whichever is hit first.
function checkAge(age) {
  if (age < 0) return "Invalid age";
  if (age < 18) return "Minor";
  return "Adult";
}

checkAge(15); // "Minor" — stops here, never checks further

//7. return with nothing
function logIfPositive(n) {
  if (n < 0) return; // exits early, returns undefined
  console.log(n);
}
//return; alone (no value) just stops the function and gives back undefined. Common for early exits / guard clauses.

/*
===============================================================
          Explicit Return vs Implicit Return
===============================================================

|                              | Explicit return              | Implicit return                              |
|------------------------------|------------------------------|----------------------------------------------|
| Keyword `return` needed?     | Yes                          | No                                           |
| Braces `{ }` needed?         | Yes                          | No                                           |
| Works in regular functions?  | Yes                          | No — regular functions always need explicit   |
|                              |                              | return                                       |
| Works in arrow functions?    | Yes                          | Yes, only without braces                     |
| Returning an object directly | `return { a: 1 };`           | `({ a: 1 })` — needs wrapping parentheses    |

===============================================================
*/


