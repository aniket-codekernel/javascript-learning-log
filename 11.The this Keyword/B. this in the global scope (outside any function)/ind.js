//B. this in the global scope (outside any function)
/*
================================================================================================
                         Value of `this` at the Top Level
================================================================================================

| Environment                 | Value of `this` at top level             |
|-----------------------------|------------------------------------------|
| Browser (normal script)     | window                                   |
| Node.js (file/module)       | {} (an empty object, module.exports)     |
| ES Module (type="module")   | undefined                                |

================================================================================================
*/
console.log(this); // browser → window object
//You will rarely use this case. It’s good to know, but the real action is inside functions.

