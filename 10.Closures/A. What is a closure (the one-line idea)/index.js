//A. What is a closure (the one-line idea)

//A closure is a function that remembers the variables from the place where it was created, even after that place has finished running.
//Analogy: Think of a function as a person leaving home with a backpack. The backpack holds the variables from the home they were born in. Wherever the person goes, they can still open the backpack and use those variables.

//The simplest example
function outer() {
  let count = 0;            // variable of outer

  function inner() {        // inner is created INSIDE outer
    count++;                // uses outer's variable
    console.log(count);
  }

  return inner;             // send inner out
}

const counter = outer();    // outer() is finished now
counter(); // 1
counter(); // 2
counter(); // 3

/*
Step by step:

 1.outer() runs and creates count = 0.
 2.inner is created inside it and remembers count.
 3.outer() returns inner and finishes.
 4.Normally, count should disappear after outer finishes.
 5.But inner still holds it, so count stays alive. That is the closure.
*/


//C. Why does it work? (lexical scope)
//JavaScript decides which variables a function can use by where the function is written in the code, not where it is called. This is called lexical scope.



