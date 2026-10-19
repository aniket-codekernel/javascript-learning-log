//E. The Call Stack
// The call stack is where JavaScript tracks which context is currently running. It is LIFO (last in, first out).
function first()  { second(); console.log("first done"); }
function second() { third();  console.log("second done"); }
function third()  { console.log("third done"); }

 first();


function firsty()  { console.log("first done");secondy(); }
function secondy() {  console.log("second done"); thirdy();}
function thirdy()  { console.log("third done"); }
firsty()

/*
Stack trace, step by step:

 1.Global EC is pushed.
 2.first() is called, so first EC is pushed.
 3.second() is called, so second EC is pushed.
 4.third() is called, so third EC is pushed.
 5.third finishes and is popped, printing “third done”.
 6.second is popped, printing “second done”.
 7.first is popped, printing “first done”.
 8.Only Global EC remains.

Output: third done, second done, first done.
*/
