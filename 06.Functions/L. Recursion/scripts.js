//L. Recursion
//1. What recursion is
//Recursion is when a function calls itself to solve a problem, by breaking it down into smaller versions of the same problem.

function countdown(n) {
  console.log(n);
  if (n === 0) return;
  countdown(n - 1);   // the function calls ITSELF
}

countdown(3);
// 3
// 2
// 1
// 0

//2. Every recursive function needs two parts
/*
===============================================================
                 Parts of Recursion
===============================================================

| Part               | What it does                                  | Without it...                         |
|--------------------|-----------------------------------------------|---------------------------------------|
| Base case          | The condition that stops the recursion        | Infinite recursion → stack overflow  |
|                    |                                               | crash                                 |
| Recursive case     | Where the function calls itself, moving      | No progress → never reaches the base  |
|                    | closer to the base case                       | case                                  |

===============================================================
*/

function countdown(n) {
  if (n === 0) return;        // BASE CASE — stops here
  console.log(n);
  countdown(n - 1);           // RECURSIVE CASE — moves closer to 0
}
//Every single recursive function you write must have both. Missing the base case is the #1 recursion bug.


// 3. What happens without a base case
function brokenCountdown(n) {
  console.log(n);
  brokenCountdown(n - 1);   // never stops — no base case
}

brokenCountdown(3);
// 3, 2, 1, 0, -1, -2, -3... forever
// RangeError: Maximum call stack size exceeded

// JavaScript keeps calling the function deeper and deeper until it runs out of memory for tracking all those calls (the "call stack" — more on this below), and crashes with a stack overflow error.
/*
Summary
.Recursion = a function calling itself to solve smaller versions of the same problem.
.Every recursive function needs a base case (stops it) and a recursive case (moves toward the base case).
.Each call pauses on the call stack until its inner call resolves, then "unwinds" back up, completing leftover work.
.Missing or wrong base case → stack overflow.
.Recursion is especially natural for nested/tree-like data; loops are usually simpler for flat repetition.
*/
