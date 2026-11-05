//                     //1. Asynchronous  and Synchronous JavaScript

// //1. Synchronous JavaScript

// //The next line will wait until the current line has finished executing
// //Synchronous JavaScript means code executes one line at a time, in order.
// console.log("1");
// console.log("2");
// console.log("3");
// /*
// How does it work?
//  * JavaScript executes console.log("1").
//  * After completing it, JavaScript executes console.log("2").
//  * Finally, JavaScript executes console.log("3").
// */

// //Another example
// console.log("Start");
// function hello() {
//     console.log("Hello World");
// }

// hello();
// console.log("End");

// //Asynchronous JavaScript allows certain operations to happen without blocking the execution of the remaining code.
// //JavaScript can continue executing other code while waiting for an operation to complete.

// /*
// For example:

//  * Fetching data from an API.
//  * Reading files (in Node.js).
//  * Using timers.
//  * Database operations.
//  * Network requests.
// */

// console.log("Start");
// setTimeout(() => {
//     console.log("Hello World");
// }, 2000);
// console.log("End");

// /*
// How does it work?

//  * JavaScript executes console.log("Start").
//  * JavaScript encounters setTimeout().
//  * The timer is handled by the runtime environment (browser or Node.js).
//  * JavaScript continues executing the next statement.
//  * console.log("End") executes.
//  * After approximately 2 seconds, the callback becomes eligible to run.
//  * The callback executes when the call stack is available.
// */

// //3. Difference Between Synchronous and Asynchronous JavaScript
// /*
// ================================================================================================
//                  Synchronous JavaScript vs Asynchronous JavaScript
// ================================================================================================

// | Synchronous JavaScript                                       | Asynchronous JavaScript                                                         |
// |--------------------------------------------------------------|---------------------------------------------------------------------------------|
// | Executes code sequentially.                                  | Allows operations to complete later.                                            |
// | Blocks subsequent code until the current operation finishes. | Non-blocking operations allow other code to execute.                            |
// | Follows a straightforward execution flow.                    | Uses callbacks, promises, and async/await.                                      |
// | Can block the main thread.                                   | Helps avoid blocking the main thread while waiting for asynchronous operations. |
// | Suitable for simple calculations.                            | Suitable for API calls, timers, and network requests.                           |

// ================================================================================================
// */


//============================================================================================================================================================================================================================================
//                     //2. What is a Asynchronous JavaScript
// console.log("Hi this is a first Asynchronous js");

// console.log("Hi this is a sec Asynchronous js");

// setTimeout(()=>{
//     console.log("This is a in settimeout it will work for 2s")
// },2000)

// console.log("Hi this is a third Asynchronous js");

//=======================================================================================================================================================================]
//                        //JS is not Asynchronous
// console.log("This is a first code in javascript")
// setTimeout(()=>{
//     console.log("This is a settimeout but there is 0 sec present")
// },0)
// console.log("This si a sec code retrn after a settimeout")



//===================================================================================================================================================================================================
                         //Asynchronous JavaScript in background 
//Chect the given image


//=============================================================================================================================================================================================================
                           //Single threading and multi Threading
////Js is a single thread language that done only one task at a time or switch in task but it cant do two stack at a time

//==============================================================================================================================================================================================================
//                              //Callback
// //Callback is always a function it will run only when the code is a Async code complete ho jay 
// var ans=fetch(`https://www.facbook.com`)
// console.log("Hi this is fetch",ans)
// //callback is a function that passes in another function as a argument that a call back 

// //to run the Async code
// /*
//  * fetch
//  * XMLHttpRequest
//  *  axios
//  *  Promises
//  *  settimout
//  *  setinterval
// */


// //to run the answer of that async code
// /*
//  * callback
//  * then catch
//  * async await
// */

// //Callback
// //1. What is a Callback Function?
// //A callback function is a function that is passed as an argument to another function and is executed later.

// //In simple words:
// //One function gives another function the responsibility to execute a task.
// function greet(name, callback) {
//   console.log("Hello " + name);
//   callback();
// }

// greet("Aniket", () => console.log("Callback executed"));

// setTimeout(() => console.log("Runs after 1 second"), 1000);

// //Callback Hell: When you have many async operations that depend on each other, you nest callbacks inside callbacks. The code grows sideways into a “pyramid of doom.”
// getUser(1, (user) => {
//   getOrders(user.id, (orders) => {
//     getOrderDetails(orders[0], (details) => {
//       getPayment(details.id, (payment) => {
//         console.log(payment);
//       });
//     });
//   });
// });

// /*
// Why it’s a problem:
//  * Hard to read and understand
//  * Hard to debug and maintain
//  * Error handling must be repeated at every level
//  * Adding or changing a step means restructuring the nesting
// */


// //How to fix it:
// /*
//  1. Promises (chain with .then):
//  getUser(1)
//   .then(user => getOrders(user.id))
//   .then(orders => getOrderDetails(orders[0]))
//   .then(details => getPayment(details.id))
//   .then(payment => console.log(payment))
//   .catch(err => console.error(err));
// */

// /*
// 2. async/await (best, reads like normal code):
// async function run() {
//   try {
//     const user = await getUser(1);
//     const orders = await getOrders(user.id);
//     const details = await getOrderDetails(orders[0]);
//     const payment = await getPayment(details.id);
//     console.log(payment);
//   } catch (err) {
//     console.error(err);
//   }
// }
// run();

// */

//============================================================================================================================================================================================================================================================
                             //Promises
//See the Promises is thing when we run a promises there are 2 state is a resole means done and second is reject means error or undefind ,Promise will take a function
//When the promises is resole we use .then , .then will take a function
//When the Promises is reject we use .catch, .catch will take a function

////console.log(ans)     //new UnhandledPromiseRejection(reason);

// let ans = new Promise((anit,ani)=>{
//     if (true) {
//         anit()
//         return
//     } else {
//         ani()
//         return
//     }
// });

// ans
// .then(()=>{
//     console.log("Promise is true")
// })
// .catch(()=>{
//     console.log("Promise is false")
// })
 

// let ans1 = new Promise((ani,anit)=>{
//     if (true) {
//         anit()
//         return
//     } else {
//         ani()
//         return
//     }
// });

// ans1
// .then(()=>{
//     console.log("Promise is true")
// })
// .catch(()=>{
//     console.log("Promise is false")
// })
//Great experiment! You found something important: the order of the parameters is what matters, not their names.
//When you create a Promise, JavaScript always passes two functions to your callback:
/*
1st parameter is always resolve (success, triggers .then)
2nd parameter is always reject (failure, triggers .catch)
*/
//You can name them anything. The names anit and ani mean nothing to JavaScript.
/*
First promise: (anit, ani)

anit = 1st = resolve
ani = 2nd = reject
if (true) runs anit(), which calls resolve, so .then runs.
Output: Promise is true
*/
/*
Second promise: (ani, anit)

ani = 1st = resolve
anit = 2nd = reject
if (true) still runs anit(), but now anit is the reject function, so .catch runs.
Output: Promise is false
*/

/*
Why it matters even if you understand:

Memory fades. You understand it today. After 2 months, or in a big project, you may forget which of ani / anit was which.
Other people read your code. A teammate sees anit() and has to figure it out. They don’t know your private naming.
Your own example shows it. You deliberately swapped them, and your own comment says you only changed the order. The meaning of anit() flipped, but the line itself looks identical. That is the confusion in action: same text, different behavior.

Think of it like labeling boxes:

Box labeled “Sugar” that has sugar: no confusion.
Box labeled “Box 2” where you must remember Box 2 is sugar: works if you remember, confusing if you forget or someone else uses it.
*/

//User will ask for a number betn 0 to 9 and if no. is below 5 reslove other vise rehect


// let ans = new Promise((anit,ani)=>{
//     if (true) {
//         anit()
//         return
//     } else {
//         ani()
//         return
//     }
// });

// ans
// .then(()=>{
//     console.log("Promise is true")
// })
// .catch(()=>{
//     console.log("Promise is false")
// })
 

// let ans1 = new Promise((ani,anit)=>{
//     if (true) {
//         anit()
//         return
//     } else {
//         ani()
//         return
//     }
// });

// ans1
// .then(()=>{
//     console.log("Promise is true")
// })
// .catch(()=>{
//     console.log("Promise is false")
// })


// let num = 4 ;
// let pr = new Promise((res,rej)=>{
//     if (num<5) {
//         res()
//         return
//     } else {
//         rej()
//         return
//     }
// })
// pr
// .then(()=>{
//     console.log("Number is below 5")
// })
// .catch(()=>{
//     console.log("Number is not below 5")
// })
/*
Promise is true
Number is below 5
Promise is false
*/
/*
Why: .then and .catch handlers don’t run immediately. They go into a microtask queue, and a rejected promise takes one extra step to reach .catch.

 * ans is resolved, so its .then handler is queued right away and prints Promise is true.
 * ans1 is rejected, but you wrote .then(...).catch(...). The .then has no rejection handler, so the rejection first passes through .then to a new promise, and only then does .catch get queued. This costs one extra step.
 * pr is resolved, so its .then handler is queued right away, before ans1’s .catch is ready.

Queue order:

 * ans .then runs, printing Promise is true
 * ans1’s rejection passes through .then (nothing printed), which queues the .catch
 * pr .then runs, printing Number is below 5
 * ans1 .catch runs, printing Promise is false
*/
//Its all happened because JS Synchronous 
 
               //Callback vs promise
/*
 * Sabse pahle ghar par aao
 * gate kholo aur gate lagao
 * incongito mode chalo
 * sojao kyuki tum thak gaye ho
*/

                  //Callback
// function pa1() {
//     console.log("Sabse pahle ghar par aao")
//     pa2()
// }
// pa1()

// function pa2() {
//     console.log("gate kholo aur gate lagao")
//     pa3()
// }

// function pa3() {
//     console.log("incongito mode chalo")
//     pa4()
// }

// function pa4() {
//     console.log("sojao kyuki tum thak gaye ho")
// }
/*
Sabse pahle ghar par aao
gate kholo aur gate lagao
incongito mode chalo
sojao kyuki tum thak gaye ho
*/
//This is so comfusion to its not redably 
                 //Promise
/*
 * Sabse pahle ghar par aao
 * gate kholo aur gate lagao
 * incongito mode chalo
 * sojao kyuki tum thak gaye ho
*/
     

// var a1 = new Promise((res,rej)=>{
//     res()
//     return
// })


// var a2 = a1.then(()=>{
//     console.log("Sabse pahle ghar par aao")
//     new Promise((res,rej)=>{
//         res()
//         return
//     })
// })

// var a3 = a2.then(()=>{
//     console.log("gate kholo aur gate lagao")
//     new Promise((res,rej)=>{
//         res()
//     })
// })

// var a4 = a3.then(()=>{
//     console.log("incongito mode chalo")
//     new Promise((res,rej)=>{
//         res()
//     })
// })

// a4.then(()=>{
//     console.log("sojao kyuki tum thak gaye ho")
// })
/*
Sabse pahle ghar par aao
gate kholo aur gate lagao
incongito mode chalo
sojao kyuki tum thak gaye ho
*/

//===========================================================================================================================================================================================================================