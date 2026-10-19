//B. The 3 types

/*
================================================================================================
                         Types of Execution Contexts in JavaScript
================================================================================================

| Type            | When created                         | How many       |
|-----------------|--------------------------------------|----------------|
| Global EC       | When the script starts               | Exactly 1      |
| Function EC     | Every time a function is called      | One per call   |
| Eval EC         | Inside eval() (rarely used)           | Ignore for now |

================================================================================================
*/
//Note that a function EC is created per call, not per definition. Calling a function 3 times creates 3 separate contexts.

