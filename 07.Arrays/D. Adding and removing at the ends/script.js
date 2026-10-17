//D. Adding and removing at the ends
/*
===============================================================
                 Array Add / Remove Methods
===============================================================

| Method       | Where  | Action | Returns      | Mutates? |
|--------------|--------|--------|--------------|----------|
| `push(x)`    | end    | add    | new length   | ✅       |
| `pop()`      | end    | remove | removed item | ✅       |
| `unshift(x)` | start  | add    | new length   | ✅       |
| `shift()`    | start  | remove | removed item | ✅       |

===============================================================
*/

const a =[1,2,3]
console.log(a);  //[ 1, 2, 3 ]
console.log(a.push(4)); //4
console.log(a); //[ 1, 2, 3, 4 ]
console.log(a.pop()); //4
console.log(a) //[ 1, 2, 3 ]
console.log(a.pop()); 

//Can we pass a value into pop() and shift()?
//No. pop() and shift() take no arguments. If you pass one, JavaScript silently ignores it, with no error.

//A. What happens if you try
const arr = [10, 20, 30, 40];
console.log(arr.pop(99));  // 99 is ignored -> still removes the LAST item (40)
console.log(arr); // [10, 20, 30]

console.log(arr.shift(99)); // 99 is ignored -> still removes the FIRST item (10)
console.log(arr); //[20,30]

//They only remove from a fixed position:
/*
===========================================================
                 pop() vs shift()
===========================================================

| Method    | Always removes    |
|-----------|-------------------|
| `pop()`   | the **last** item |
| `shift()` | the **first** item|

===========================================================
*/

//B. Common confusion: push and unshift vs pop and shift
/*
===============================================================
              Array Methods — Arguments
===============================================================

| Method       | Takes a value? | Why                           |
|--------------|----------------|-------------------------------|
| `push(x)`    | ✅ yes         | you're adding something       |
| `unshift(x)` | ✅ yes         | you're adding something       |
| `pop()`      | ❌ no          | it just removes the last item |
| `shift()`    | ❌ no          | it just removes the first item|

===============================================================
*/

//C. What if you want to remove a specific value or position?
//Putting a specific value with splice
//You already understand the first two parts. The value goes in as the third argument.
const arr1=[10,20,30,40,50]                  //[0, 1, 2, 3, 4]
arr1.splice(2, 1);                          //[10,20,30,40,50]
//         ^  ^                            //2 means start from 2 index and remove 1 value
//         |  how many to remove
//         where to start (index)
console.log(arr1)

//A. Step 1: Insert a value (remove nothing)
const arr2 = [10, 20, 30, 40,50];
console.log(arr2);   [10,20,30,40,50]

arr2.splice(2, 0, 99);
//         ^  ^  ^
//         |  |  value to put
//         |  remove 0 items
//         start at index 2
console.log(arr2);   //[10,20,99,30,40,50]

//B. Step 2: Replace a value (remove 1, put 1)
const arr3 = [10, 20, 30, 40];
arr3.splice(2, 1, 99);
//         ^  ^  ^
//         |  |  put 99
//         |  remove 1 item (the 30)
//         start at index 2
console.log(arr3);  //[10,20,99,40]

//D. The pattern in one table
/*
===============================================================
                    splice() Methods
===============================================================

| Goal    | Code               | Result on `[10, 20, 30, 40]` |
|---------|--------------------|-------------------------------|
| Remove  | `splice(2, 1)`     | `[10, 20, 40]`                 |
| Insert  | `splice(2, 0, 99)` | `[10, 20, 99, 30, 40]`         |
| Replace | `splice(2, 1, 99)` | `[10, 20, 99, 40]`             |

===============================================================
*/
