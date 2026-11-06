//E. Microtask Queue
//A second queue with higher priority than the callback queue.
/*
What goes here (microtasks):

.then(), .catch(), .finally() callbacks of promises
Code after await in an async function
queueMicrotask()
MutationObserver
process.nextTick (Node, which is even higher than promises)

*/
/*
The rule that matters most:

After each task, the event loop runs ALL microtasks until the microtask queue is empty. Only then does it take the next macrotask.
*/
//If a microtask adds another microtask, that one also runs in the same drain, before any macrotask.

