//I. Looping Over Objects
//Objects are not iterable with for...of directly. Use these:
const marks ={math:35,sci:35,eng:89}
console.log(marks)  //{ math: 35, sci: 35, eng: 89 }

//1. for...in loops over keys
for (const a in marks) {
    console.log(a)   //math sci eng
    console.log(a,marks[a])  //math 35  sci 35  eng 89
} 

// 2. Object.keys() returns an array of keys
console.log(Object.keys(marks))   //[ 'math', 'sci', 'eng' ]
console.log(Object.values(marks))    //[ 35, 35, 89 ]
console.log(Object.entries(marks))   //[ [ 'math', 35 ], [ 'sci', 35 ], [ 'eng', 89 ] ]

//// Best combo: for...of with entries and destructuring
for (const [subject, score] of Object.entries(marks)) {
  console.log(`${subject}: ${score}`);
}
/*
math: 35
sci: 35
eng: 89
*/
//for...in also loops over inherited properties, so Object.keys/entries is usually safer.

