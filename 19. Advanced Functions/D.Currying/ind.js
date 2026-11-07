// //D Currying
// //Currying turns a function that takes multiple arguments at once into a chain of functions that each take one argument.
// // f(a, b, c)   →   f(a)(b)(c)

// //Step 1: Normal function
// function add(a, b, c) {
//   return a + b + c;
// }

// console.log(add(1, 2, 3)); // 6

// //Step 2: Curried version
// function curriedAdd(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

// console.log(curriedAdd(1)(2)(3)); // 6
// /*
// Trace it one call at a time:

//  * curriedAdd(1) returns a function that remembers a = 1.
//  * (2) calls that function. It returns another function that remembers a = 1 and b = 2.
//  * (3) calls the last function, which adds 1 + 2 + 3 and returns 6.
// */

//It will need all the given variable  if anyone variable is missing it will not print
function curriedAdd1(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(curriedAdd1(1)(2))  //[Function (anonymous)]

//Step 3: Arrow function version
//Arrow functions make the shape very clear:
const curriedAdd = a => b => c => a + b + c;
console.log(curriedAdd(1)(2)(3)); // 6
//Read it as: “a function that takes a, returns a function that takes b, returns a function that takes c, returns the sum.”


//Step 4: Why is this useful?
//You can stop partway and reuse the result:
const multiply = a => b => a * b;

const double = multiply(2);   // a = 2 is locked in
const triple = multiply(3);   // a = 3 is locked in

console.log(double(5));  // 10
console.log(triple(5));  // 15
console.log(double(10)); // 20

/*
Key facts
 * Currying changes how a function is called, not what it computes.
 * It relies on closures to remember earlier arguments.
 * fn.length counts parameters before the first default or rest parameter, so curry() doesn’t work well with those.
 * Currying and partial application look similar, but they aren’t the same. Section E explains the difference.
*/













