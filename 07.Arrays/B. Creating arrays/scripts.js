//B. Creating arrays
//1.Array literal (use this 99% of the time);
const a=[1,2,3];
console.log(a)   //[1,2,3]

//2.Array constructor
const b = new Array(1,2,3)
console.log(b)  //[1,2,3]
const c = new Array(3);
console.log(c); //[ <3 empty items> ]
const d = new Array(3,7)
console.log(d); //[ 3, 7 ]

// 3. Array.of: always makes an array from its arguments
const e = Array.of(3,8);
console.log(e)

// 4. Array.from: from array-likes or iterables
const f = Array.from("abc"); 
console.log(f) //[ 'a', 'b', 'c' ]
// const g = Array.form("abc","def") //TypeError: Array.form is not a function

// 5. Spread
const g = [..."hi"]; 
console.log(g); // ["h", "i"]

//6. fill
const h = new Array(3).fill(0);
console.log(h);  //[ 0, 0, 0 ]
const i = new Array(2).fill();
console.log(i); //[ undefined, undefined ]
const j = new Array(3).fill("aniket");
console.log(j);  //[ 'aniket', 'aniket', 'aniket' ]


//Array.from() vs Spread [...]
// A. The part that is the same
//For iterables (arrays, strings, Sets, Maps), both give the same result:
Array.from("hi");        // ["h", "i"]
[..."hi"];               // ["h", "i"]

Array.from(new Set([1, 1, 2]));  // [1, 2]
[...new Set([1, 1, 2])];         // [1, 2]
//Both make a new, shallow-copied array.

//B. Difference 1: array-likes (the biggest one)
//An array-like is an object that has a length and numbered keys, but isn't iterable.
const arrayLike = { 0: "a", 1: "b", length: 2 };

Array.from(arrayLike);   // ["a", "b"]   works
[...arrayLike];          // TypeError: not iterable

/*
===========================================================
              Array.from() vs Spread (...)
===========================================================

| Input type                         | Array.from | Spread   |
|------------------------------------|------------|----------|
| Iterable (array, string, Set, Map) | ✅         | ✅       |
| Array-like (`{length: 2, 0: "a"}`) | ✅         | ❌ error |

===========================================================
*/
//(Note that NodeList and arguments are iterable in modern browsers, so spread works on them. A plain object with length is the clear-cut case.)

//C. Difference 2: built-in map function
//Array.from takes an optional second argument, a function applied to each item as the array is built.
Array.from([1, 2, 3], n => n * 2);   // [2, 4, 6]

// Spread needs a separate step
[...[1, 2, 3]].map(n => n * 2);      // [2, 4, 6]

//This is most useful for generating arrays from nothing:
Array.from({ length: 5 }, (_, i) => i + 1);  // [1, 2, 3, 4, 5]
//Spread can't do this, because {length: 5} isn't iterable.

//Quick comparison
/*
===============================================================
              Array.from() vs Spread (...)
===============================================================

| Feature                         | `Array.from()` | Spread `[...x]` |
|---------------------------------|----------------|-----------------|
| Works on iterables              | ✅             | ✅              |
| Works on array-likes            | ✅             | ❌              |
| Built-in map function            | ✅             | ❌              |
| Create from `{length: n}`       | ✅             | ❌              |
| Combine multiple sources inline | ❌             | ✅              |
| Use in function calls and       | ❌             | ✅              |
| objects                         |                |                 |
| Shallow copy                    | ✅             | ✅              |

===============================================================
*/