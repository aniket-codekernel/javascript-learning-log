//C. Why does it work (lexical scope)
// JavaScript decides which variables a function can use by where the function is written in the code, not where it is called. This is called lexical scope.
let name = "Aniket";

function show() {
  console.log(name);  // show was WRITTEN where name is visible
}

function run() {
  let name = "Someone else";
  show();             // called here, but still prints "Aniket"
}

run(); // Aniket
//So a function always carries a link to the scope where it was born. That link is the closure
