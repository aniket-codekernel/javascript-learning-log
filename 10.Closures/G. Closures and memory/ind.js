//G.Closures and memory
/*
 *A closure keeps variables alive, so they are not garbage collected while the function exists.
 *This is normal and useful.
 *But if you create closures carelessly (for example, thousands of them holding large data), they can cause memory leaks.
*/

//Tips:
/*
 *Don’t keep big objects in a closure if you don’t need them.
 *Set the reference to null when you are done.
 *Remove event listeners you no longer need.
*/