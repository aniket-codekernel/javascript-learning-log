// C. var vs let vs const

/*
| Feature                         | var                       | let             | const           |
|---------------------------------|---------------------------|-----------------|-----------------|
| Scope                           | Function/global           | Block           | Block           |
| Redeclare in same scope         | Yes                       | No              | No              |
| Reassign                        | Yes                       | Yes             | No              |
| Hoisted                         | Yes (initialized as       | Yes (TDZ)       | Yes (TDZ)       |
|                                 | undefined)                |                 |                 |
| Becomes window property         | Usually yes for top-level | No              | No              |
| in a browser classic script     | var                       |                 |                 |

Note: Top-level declarations in ES modules behave differently
from top-level declarations in classic browser scripts.
*/

// Classic bug with var in loops:

for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}

// Prints: 3, 3, 3
// One shared variable i is used by all three callbacks.

for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log(j), 100);
}

// Prints: 0, 1, 2
// let creates a separate binding for each loop iteration.

/*
Important:

The two loops run independently.

The var loop shares one variable.
The let loop creates a separate binding for each iteration.
*/