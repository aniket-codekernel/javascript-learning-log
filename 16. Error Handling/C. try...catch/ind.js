//C. try...catch

try {
  // code that MIGHT fail
  let data = JSON.parse("{ bad json }");
  console.log("This line is skipped");
} catch (err) {
  // runs ONLY if something in try threw an error
  console.log("Caught:", err.message);
}
console.log("Program continues");

/*
How it flows:

 * JS runs the try block line by line.
 * If an error occurs, it jumps immediately to catch. The rest of try is skipped.
 * If no error occurs, catch is skipped entirely.
 * The program continues after the block.
*/

/*
Important rules:

 * catch (err) — err is just a variable name; you can choose any name.
 * Optional catch binding, when you don’t need the error object: catch { ... }
 * try...catch only works for runtime errors. A SyntaxError in the code itself can’t be caught, because the code never starts running.
 * It works synchronously. It does not catch errors inside setTimeout callbacks:
*/
try {
  setTimeout(() => { throw new Error("Oops"); }, 1000);
} catch (e) {
  console.log("Never caught");   // the error happens later, outside try
}
//(The fix for this comes in Chapter 17, Async Error Handling.)

