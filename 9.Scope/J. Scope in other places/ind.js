//J. Scope in other places
/*

*Function parameters act like variables inside the function.
*catch (err) makes err visible only inside the catch block.
*for (let i...) makes i visible only inside the loop.
*Arrow functions have the same scope rules as normal functions (they differ only in this).
*IIFE (function(){ ... })() creates a private function scope. It was used a lot before let and modules existed.
*/




// Q1
var a = 1;
{
  var a = 2;
}
console.log(a);  //2

// Q2
let b = 1;
{
  let b = 2;
}
console.log(b);  //1

// Q3
function f() {
  console.log(typeof v);   //undefined
  var v = 1;
}
f();

// Q4
function make() {
  let n = 0;
  return () => ++n;
}
const x = make();
const y = make();
x(); x();
console.log(y());  //1