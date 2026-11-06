//B. The Call Stack
//A LIFO structure (Last In, First Out) that tracks which function is running.
function a() { b(); }
function b() { c(); }
function c() { console.log("hi"); }
a();

//Stack over time:
/*
 1. [global]
 2. [global, a]
 3. [global, a, b]
 4. [global, a, b, c]   ← console.log runs here
 5. c finishes → pops
 6. b pops, then a pops → [global] 
*/

/*
Key points:

Every function call pushes a frame, and every return pops it.
Synchronous code runs top to bottom on the stack.
If the stack is busy, nothing else can run.
Infinite recursion causes a stack overflow (RangeError: Maximum call stack size exceeded).
*/