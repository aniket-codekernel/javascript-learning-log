//M. Destructuring, spread and rest
const a =[10,20]
const b =[30,40]
console.log(a)
console.log(b)
console.log( [first, second] = [a,b]) //[ [ 10, 20 ], [ 30, 40 ] ]
console.log(first)
console.log(second)


const c =[50,60]
console.log(c)
console.log([first, second] = [a,b,c])  //[ [ 10, 20 ], [ 30, 40 ], [ 50, 60 ] ]
console.log(first)
console.log(second)
//console.log(third)  //ReferenceError: third is not defined


//Skip value
console.log([first, ,second] = [a,b,c])  //[ [ 10, 20 ], [ 30, 40 ], [ 50, 60 ] ]
console.log(first)  //[ 10, 20 ]
console.log(second) //[ 50, 60 ]      //
//It will gei ignore


//...rest
console.log([first, ...rest] = [a,b,c])
console.log(first)  //[ 10, 20 ]
console.log(rest)  //[ [ 30, 40 ], [ 50, 60 ] ]


//Default value
console.log([first=89, ,second] = [a,b,c])  //[ [ 10, 20 ], [ 30, 40 ], [ 50, 60 ] ]
console.log(first)  //[ 10, 20 ]
console.log(second)  //[ 50, 60 ]

console.log([first=89, ,second=569] = [c])  //[ [ 50, 60 ] ]
console.log(first)  //[ 50, 60 ]
console.log(second)  //569

console.log([first=89, ,second] = [c])  //[ [ 50, 60 ] ]
console.log(first)  //[ 50, 60 ]
console.log(second)  //undefined



// Swap without a temp variable
let p = 1, q = 2;
console.log([p, q] = [q, p]);

//// Spread
const t=[89,98]
const u=[65,85]
const merged = [...t, ...u];    
console.log(merged) //[ 89, 98, 65, 85 ]



//Math.max
//What is Math.max(...[3, 9, 2])?
//Math.max is a built-in JavaScript function that returns the largest number from the numbers you give it. This line has two parts, so I'll take them one at a time.
//A. Step 1: Math.max on its own
//You give it numbers separated by commas, and it returns the biggest one.
Math.max(3, 9, 2);      // 9
Math.max(10, 5);        // 10
Math.max(-1, -5, -3);   // -1

//(There's also Math.min, which returns the smallest number.)

//B. Step 2: The problem with arrays
//Math.max does not accept an array directly.
Math.max([3, 9, 2]);    // NaN  (it can't read the array as numbers)
//It wants 3, 9, 2 as separate values, not one array holding them.

//C. Step 3: Spread fixes it
// The spread operator ... unpacks the array into separate values.
Math.max(...[3, 9, 2]);
//becomes, behind the scenes:
Math.max(3, 9, 2);      // 9
//[3, 9, 2]   --- ... --->   3, 9, 2   --->   Math.max picks 9

//D. Real-life use
//You'll usually have the array in a variable:
const marks = [45, 88, 62, 91, 70];

Math.max(...marks);   // 91  (highest mark)
Math.min(...marks);   // 45  (lowest mark)

//E. Quick table
/*
===============================================================
                  Math.max() vs Spread
===============================================================

| Code                     | Result | Why                    |
|--------------------------|--------|------------------------|
| `Math.max(3, 9, 2)`      | `9`    | separate values        |
| `Math.max([3, 9, 2])`    | `NaN`  | array not unpacked     |
| `Math.max(...[3, 9, 2])` | `9`    | spread unpacks array   |

===============================================================
*/
