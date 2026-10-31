//E. throw
//So far JS threw the errors. With throw, you create an error on purpose when something is invalid for your logic.

let a = 5 ;
let b = 0;

function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

try {
  console.log(divide(a, b));
} catch (err) {
  console.log(err.message);   // "Cannot divide by zero"
}
/*
Key points:

 * throw stops the current function immediately, like return, but the error travels up the call stack until some catch handles it.
 * You can throw anything (a string, a number, an object), but always throw Error objects. Only they carry a stack trace.
*/

throw "bad";               // ❌ works, but no stack trace
throw new Error("bad");    // ✅ correct

//Error propagation (bubbling):
function c() { throw new Error("Problem in c"); }
function b() { c(); }
function a() { b(); }

try {
  a();                     // error travels c -> b -> a -> catch
} catch (err) {
  console.log(err.message);
}






