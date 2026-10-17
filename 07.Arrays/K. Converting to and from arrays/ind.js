//K. Converting to and from arrays
const a = ["a","n","i","k","e","t"]
console.log(a)
console.log(a.join("-"))  //a-n-i-k-e-t
console.log(a)   //It will not change a original array
//console.log(a.join(abx))   //ReferenceError: abx is not defined
console.log(a.join("abx"))  //aabxnabxiabxkabxeabxt
console.log(a.join("2345")) //a2345n2345i2345k2345e2345t

//What the error in this 
/*
const b =[1-2-3-4]
console.log(b)
console.log(b.split("-"))  
*/

//1. [1-2-3-4] is an array with a calculation
//JavaScript evaluates 1 - 2 - 3 - 4 first:
//1 - 2 - 3 - 4
// -8

const b = [1-2-3-4];
console.log(b);  //[-8]

//2. .split("-") doesn't work on an array
//split() is a string method, not an array method.
//b.split("-")

const c = "1-2-3-4";
console.log(c);
console.log(c.split("-"));  //["1", "2", "3", "4"]

/*
===============================================================
                 Array vs String — split()
===============================================================

| Code                      | Meaning                     |
|---------------------------|-----------------------------|
| `[1, 2, 3, 4]`            | Array                       |
| `"1-2-3-4"`               | String                      |
| `"1-2-3-4".split("-")`    | Splits string into an array |
| `[1, 2, 3, 4].split("-")` | ❌ Error                    |

===============================================================
*/


//tostring
const d =[1,2,3,4,5]
console.log(d)   //[ 1, 2, 3, 4, 5 ]
console.log(typeof d)  //object
let e=console.log(d.toString());  //1,2,3,4,5
console.log(typeof e)  //undefined


//form
let f ="Aniket"
console.log(f)   //Aniket
console.log(typeof f) //string
let g = Array.from(f)  //[ 'A', 'n', 'i', 'k', 'e', 't' ]
console.log(g) 
console.log(typeof g) //object

//remove duplicates
let h = [1,2,1,3,6,3]
console.log(h)   //[ 1, 2, 1, 3, 6, 3 ]
console.log(Array.from(new Set(h)))  //[ 1, 2, 3, 6 ]

//
console.log([...new Set([1, 1, 2])])  //[ 1, 2 ]  new method for that

