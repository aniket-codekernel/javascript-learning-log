//G. Closures and Lexical Scoping
//1. First, a quick recap: lexical scoping
/*
You already covered this in an earlier chapter, but it's the foundation closures are built on, so a quick refresher:

Lexical scoping means a function's access to variables is decided by where the function is physically written in the code, not where/how it's called.
*/
const outerVar = "I'm outside";

function inner() {
  console.log(outerVar); // can access it, because inner is written inside the same file scope
}

inner(); // "I'm outside"
//A function can always "see" variables from the scope it was written in. This is the static map you learned before (as opposed to the scope chain being a live runtime walk).

//2. What a closure actually is
//A closure is when a function remembers the variables from the scope it was created in — even after that outer scope has finished running.
//That's the whole definition. The function doesn't just have access to the outer variables while running inside them — it keeps that access permanently, like a backpack it carries around.
function outer() {
  const secret = "I am hidden";

  return function inner() {
    console.log(secret);
  };
}

const myFunc = outer();
myFunc(); // "I am hidden"

/*
Walk through it:

.outer() runs, creates secret, creates inner, and returns inner.
.outer() finishes — normally, its local variables (secret) would be thrown away.
.But inner was created inside outer, so it kept a reference to secret in its "backpack."
.When we call myFunc() later (which is really inner), secret is still there, even though outer is long gone. 
*/
//This is the closure: inner "closed over" the variable secret.

//3. Why doesn't secret get deleted?
//Normally, JavaScript cleans up a function's local variables once it finishes running (garbage collection). But if any inner function still references those variables, JavaScript keeps them alive — just for that inner function. This is the entire mechanism that makes closures work.

//4. The classic example: a counter
function makeCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter1 = makeCounter();
console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter1()); // 3

//Summary
/*
.A closure happens when a function remembers variables from its outer (enclosing) scope, even after that outer function has finished running.
.This works because of lexical scoping — a function always has access to the scope it was written in.
.Each call to an outer function creates a new, separate closure — variables aren't shared between them.
.Closures are how you get private variables in JavaScript (module pattern).
.The classic var loop bug happens because var doesn't create a new variable per iteration — let does.
*/