//H. Priority Order (when multiple rules fight)
//What if more than one rule applies? JavaScript follows this order, from strongest to weakest:
/*
================================================================================================
                           this Binding Rules Priority
================================================================================================

| Priority      | Rule               | Example                   |
|---------------|--------------------|---------------------------|
| 1 (strongest) | new binding        | new Foo()                 |
| 2             | Explicit binding   | call() / apply() / bind() |
| 3             | Implicit binding   | obj.method()              |
| 4 (weakest)   | Default binding    | fn()                      |

================================================================================================
*/
//Arrow functions are outside this list. They ignore all four rules (next section).

