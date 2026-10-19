//D. The 2 phases (the most important part)
//Every context goes through two phases.

//Phase 1: Creation (memory setup)
/*
 *var variables are stored and set to undefined.
 *Function declarations are stored completely.
 *let/const are stored but left uninitialized, which is the TDZ.
 *this is decided.
 *The outer scope link is set.
*/

//Phase 2: Execution (line by line)
/*
 *Values are assigned.
 *Code runs.
 *Functions are called, and each call creates a new context.
*/

console.log(a);   // undefined  -> var was set up in creation phase
console.log(b);   // ReferenceError -> let is in TDZ
console.log(sayHi()); // works -> function declaration fully stored

var a = 10;
let b = 20;
function sayHi() { return "hi"; }
//This is hoisting explained. Nothing physically moves. Creation phase simply happens before execution.

