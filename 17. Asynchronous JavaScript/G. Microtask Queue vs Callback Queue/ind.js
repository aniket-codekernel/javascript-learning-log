//G. Microtask Queue vs Callback Queue
//This is a very common interview topic.
/*
/*
================================================================================================
                       Microtask Queue vs Macrotask Queue
================================================================================================

|              | Microtask Queue                                                       | Callback (Macrotask) Queue                   |
|--------------|-----------------------------------------------------------------------|----------------------------------------------|
| Holds        | Promise .then() / .catch() / .finally(), queueMicrotask(),           | setTimeout(), setInterval(), DOM events, I/O |
|              | MutationObserver                                                      |                                              |
| Priority     | Higher                                                                | Lower                                        |

------------------------------------------------------------------------------------------------
IMPORTANT POINTS:

1. Microtasks have higher priority than macrotasks.
2. Promise callbacks execute in the Microtask Queue.
3. setTimeout() callbacks execute in the Macrotask Queue.
4. Microtasks are processed before the next macrotask.
5. The Event Loop checks the queues when the Call Stack is empty.

------------------------------------------------------------------------------------------------
EXECUTION PRIORITY:

   1. Synchronous Code
   2. Microtask Queue
   3. Macrotask Queue

================================================================================================
*/

/*
Run all synchronous code.
Run ALL microtasks, until the microtask queue is empty.
Then take ONE macrotask.
Run all microtasks again, and repeat.
*/

console.log("1");

setTimeout(() => console.log("2"), 0);       // macrotask

Promise.resolve().then(() => console.log("3")); // microtask

console.log("4");
//Output: 1, 4, 3, 2
/*
1 and 4 are synchronous.
3 is a microtask, so it runs next.
2 is a macrotask, so it runs last.
*/