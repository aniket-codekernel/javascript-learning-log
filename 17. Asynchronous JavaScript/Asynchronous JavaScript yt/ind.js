//Asynchronous JavaScript and Synchronous JavaScript

//1. Synchronous JavaScript
//
//The next line will wait until the current line has finished executing
//Synchronous JavaScript means code executes one line at a time, in order.
console.log("1");
console.log("2");
console.log("3");

/*
How does it work?
 * JavaScript executes console.log("1").
 * After completing it, JavaScript executes console.log("2").
 * Finally, JavaScript executes console.log("3").
*/

//Another example
console.log("Start");
function hello() {
    console.log("Hello World");
}

hello();
console.log("End");


//2. Asynchronous JavaScript
//Asynchronous JavaScript allows certain operations to happen without blocking the execution of the remaining code.
//JavaScript can continue executing other code while waiting for an operation to complete.
/*
For example:

 * Fetching data from an API.
 * Reading files (in Node.js).
 * Using timers.
 * Database operations.
 * Network requests.
*/

console.log("Start");
setTimeout(() => {
    console.log("Hello World");
}, 2000);
console.log("End");

/*
How does it work?

 * JavaScript executes console.log("Start").
 * JavaScript encounters setTimeout().
 * The timer is handled by the runtime environment (browser or Node.js).
 * JavaScript continues executing the next statement.
 * console.log("End") executes.
 * After approximately 2 seconds, the callback becomes eligible to run.
 * The callback executes when the call stack is available.
*/


//3. Difference Between Synchronous and Asynchronous JavaScript
/*
================================================================================================
                 Synchronous JavaScript vs Asynchronous JavaScript
================================================================================================

| Synchronous JavaScript                                       | Asynchronous JavaScript                                                         |
|--------------------------------------------------------------|---------------------------------------------------------------------------------|
| Executes code sequentially.                                  | Allows operations to complete later.                                            |
| Blocks subsequent code until the current operation finishes. | Non-blocking operations allow other code to execute.                            |
| Follows a straightforward execution flow.                    | Uses callbacks, promises, and async/await.                                      |
| Can block the main thread.                                   | Helps avoid blocking the main thread while waiting for asynchronous operations. |
| Suitable for simple calculations.                            | Suitable for API calls, timers, and network requests.                           |

================================================================================================
*/

//=============================================================================================================================================================
                                    //Callback
//To pass a function as a argument as in a function
function ani2() {
    console.log("This is a second function pass is first function");
    ani3()
}
function ani1() {
    console.log("This is a first function")
    ani2()
}
function ani3() {
    console.log("This is a Third function pass is second function")
}
ani1()


a1()


//=====================================================================================
               //Promis for call back hell