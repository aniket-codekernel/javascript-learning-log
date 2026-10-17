//Arrays in JavaScript
//I've split this into labeled sections (A, B, C...) so you can take it one piece at a time. Tell me when a section clicks, or name the one that confuses you, and we'll slow down there.

//A. What is an array?
/*
An array is an ordered list of values, each stored at a numbred position called an index.
.Indexes start at 0, not 1.
.It can hold any type: numbers, strings, objects, other arrays, functions, or a mix.
.It grows and shrinks automatically, so you don't declare a size.
.Under the hood, an array is a special kind of object. typeof [] === "object".
*/

const mixed = [10, "hello", true, null, { a: 1 }, [1, 2]];
console.log(typeof mixed);          // "object" (not "array"!)
console.log(Array.isArray(mixed));  // true  <- the correct check

