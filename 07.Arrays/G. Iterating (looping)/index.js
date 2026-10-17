//G. Iterating (looping)
const arr = ["a", "b", "c"];

// Classic for: full control, can break/continue
for (let i = 0; i < arr.length; i++) {
    console.log(i, arr[i])
}

//// for...of: values, can break/continu
for (const v of arr) {
    console.log(v)
}

// for...of with index
for (const [i,v] of arr.entries()) {
    console.log(i,v)
}

// forEach: no break, no return value
arr.forEach((v, i, whole) => (
    console.log(i, v))
);

//// for...in: AVOID for arrays (gives string keys, includes inherited ones)
for (const k in arr) {
   console.log(k)
}

/*
===============================================================
              JavaScript Loop Comparison
===============================================================

| Loop       | `break`? | Works with `await` inside? | Notes                 |
|------------|----------|----------------------------|-----------------------|
| `for`      | ✅       | ✅                         | Most control          |
| `for...of` | ✅       | ✅                         | Cleanest for values   |
| `forEach`  | ❌       | ❌ (doesn't wait)          | Skips holes           |
| `for...in` | ✅       | ✅                         | Don't use for arrays  |

===============================================================
*/