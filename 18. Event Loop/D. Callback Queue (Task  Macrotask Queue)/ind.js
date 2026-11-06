//D. Callback Queue (Task  Macrotask Queue)
//A FIFO queue (First In, First Out) that holds callbacks that are ready to run.

//What goes here (macrotasks):
/*
 * setTimeout / setInterval callbacks
 * DOM event handlers (click, keypress)
 * setImmediate (Node)
 * I/O callbacks
*/
/*
Important rules:

A callback in this queue cannot jump onto the stack by itself.
It waits until the call stack is completely empty.
Only then does the event loop move it onto the stack.
*/