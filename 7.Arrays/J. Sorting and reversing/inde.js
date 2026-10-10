//J. Sorting and reversing
const a=[1,2,3,4]
console.log(a)
console.log(a.reverse());   //[4,3,2,1]
console.log(a)      //Its a muted its change a original array 

//// DEFAULT sort converts to STRINGS: the biggest gotcha in arrays
//A gotcha is a tricky behavior that catches you by surprise. The code looks like it should do one thing, but it does something else, so you make a mistake without realizing 
console.log([10, 9, 1, 100].sort());   //[ 1, 10, 100, 9 ]  its a problem we thik a [1,9,10,100] but its not

// Correct numeric sort: pass a compare function
console.log([10, 9, 1, 100].sort((a, b) => a - b))  //[ 1, 9, 10, 100 ]ascending
console.log([10, 9, 1, 100].sort((a, b) => b - a))  //[ 100, 10, 9, 1 ] decinding
console.log([10, 9, 1, 100].sort((a, b) => b + a))  //[ 10, 9, 1, 100 ] its a gotcha

//// Sort objects by a property
//What is people.sort((a, b) => a.age - b.age)?
//It sorts an array of objects by their age, from youngest to oldest.

//A. The data
//people is an array where each item is an object with a name and an age:
const people = [
  { name: "Ravi", age: 30 },
  { name: "Aman", age: 20 },
  { name: "Neha", age: 25 }
];
//You can't just call people.sort() here, because JavaScript doesn't know whether to sort by name or by age. So we tell it how to compare.

//B. The compare function
(a, b) => a.age - b.age

/*
.a and b are two items from the array that sort is comparing at that moment.
.a.age is the age of the first item, and b.age is the age of the second.
.The function returns a number, and sort uses it to decide the order.
*/

/*
===============================================================
              Array sort() Comparator
===============================================================

| Result of `a.age - b.age`           | Meaning              |
|-------------------------------------|----------------------|
| **negative** (e.g. `20 - 30 = -10`)| `a` goes **before** `b` |
| **positive** (e.g. `30 - 20 = 10`) | `b` goes **before** `a` |
| **0**                               | keep their order     |

===============================================================
*/

//C. Tracing one comparison
/*
a = { name: "Ravi", age: 30 }
b = { name: "Aman", age: 20 }

a.age - b.age = 30 - 20 = 10   -> positive -> b (Aman) goes first
*/

//D. The result
people.sort((a, b) => a.age - b.age);

console.log(people);
// [
//   { name: "Aman", age: 20 },
//   { name: "Neha", age: 25 },
//   { name: "Ravi", age: 30 }
// ]

//E. Oldest first (descending)
//Swap a and b:
people.sort((a, b) => b.age - a.age);   // Ravi (30), Neha (25), Aman (20)

