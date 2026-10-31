//A. What is an error, and why handle it
//An error is something going wrong while the program runs. If you don’t handle it, the script stops right there and nothing after it runs.

console.log("Start");
//null.name;               // TypeError - crashes here
console.log("End");      // never runs

//Error handling lets you catch the problem, respond, and keep the program alive.

//B. Built-in error types



//Every error is an object with useful properties:
try {
  abc;
} catch (err) {
  console.log(err.name);     // "ReferenceError"
  console.log(err.message);  // "abc is not defined"
  console.log(err.stack);    // where it happened (call stack trace)
}