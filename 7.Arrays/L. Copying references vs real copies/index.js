// L. Copying: references vs real copies
//Arrays are reference types. Assignment copies the address, not the data.
const a = [1, 2, 3];
const b = a;        // NOT a copy, same array
b.push(4);
console.log(a);     // [1, 2, 3, 4]  <- a changed too!

//Shallow copies (top level only):
//What is a shallow copy?
/*
A. Analogy
Imagine a folder with papers and a link to a shared Google Doc.
.A shallow copy photocopies the folder. You get new papers, but the link still points to the same Google Doc.
.If you edit the Google Doc through the copy, the original folder sees the change too.
*/

//B. Step 1: Simple array (no problem)
//When the array holds only simple values (numbers, strings), a shallow copy works perfectly.
const c = [1, 2, 3];
console.log(c)  //[ 1, 2, 3 ]
const d =[...c]
console.log(d)  //[ 1, 2, 3 ]
console.log(c)  //[ 1, 2, 3 ]
d.push(4)
console.log(c)  //[ 1, 2, 3 ]   //Original copy remain unchaged
console.log(d)   //[ 1, 2, 3, 4 ]


const e = [1, 2, 3,4,8];
console.log(e)  //[ 1, 2, 3, 4, 8 ]
const f =e
console.log(e)  //[ 1, 2, 3, 4, 8 ]
console.log(f)  //[ 1, 2, 3, 4, 8 ]
f.push(100)
console.log(e)  //[ 1, 2, 3, 4, 8, 100 ]   //Its changed original to
console.log(f)   //[ 1, 2, 3, 4, 8, 100 ]

//C. Step 2: Nested array (the problem)
//Now each item is itself an array:
const g = [[1], [2]];
const h = [...g];     // shallow copy
//h is a new outer array, but the inner arrays [1] and [2] are the same ones that a has.
/*
a  ->  [ ●----, ●---- ]
          |       |
b  ->  [ ●----, ●---- ]   <- b's slots point to the SAME inner arrays
          |       |
        [1]     [2]
*/

//D. Step 3: What goes wrong
h[0].push(99);    // change an inner array through b

console.log(g);   // [[1, 99], [2]]
console.log(h);   // [[1, 99], [2]]  <- a changed too!
//You only touched b, but a changed, because they share the inner array.

//E. Shallow vs deep
/*
===============================================================
                Shallow Copy vs Deep Copy
===============================================================

| Type                                   | Copies              | Inner arrays and objects |
|----------------------------------------|---------------------|--------------------------|
| **Shallow copy** (`[...a]`, `slice()`) | top level only      | shared                   |
| **Deep copy** (`structuredClone(a)`)   | everything, all     | separate                 |
|                                        | levels              |                          |

===============================================================
*/
//The fix is a deep copy:
const i =[[1],[2]]
const j = structuredClone(i);
j[0].push(99);

console.log(i);  // [[1], [2]]       <- safe 
console.log(j);  // [[1, 99], [2]]
