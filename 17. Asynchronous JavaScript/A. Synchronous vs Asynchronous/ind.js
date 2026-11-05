//A. Synchronous vs Asynchronous
//Synchronous means code runs line by line. Each line waits for the one before it to finish.
//Asynchronous means a slow task is started, JavaScript moves on, and the result is handled later when it’s ready.
// Synchronous
console.log("1");
console.log("2");
console.log("3"); // prints 1, 2, 3

// Asynchronous
console.log("1");
setTimeout(() => console.log("2"), 1000); // started, but not waited for
console.log("3");                          // prints 1, 3, 2

//Analogy: You order food at a restaurant. A synchronous waiter stands at the kitchen door until your food is ready and serves nobody else. An asynchronous waiter takes your order, serves other tables, and brings your food when the kitchen calls.
//Why we need it: Slow tasks include network requests, reading files, database calls, and timers. If JS waited for them, the page would freeze.

