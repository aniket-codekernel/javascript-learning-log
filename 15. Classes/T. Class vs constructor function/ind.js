//T. Class vs constructor function
/*
================================================================================================
                     Constructor Function vs Class in JavaScript
================================================================================================

| Feature              | Constructor function                  | Class                   |
|----------------------|----------------------------------------|-------------------------|
| Syntax               | function Person() {}                  | class Person {}         |
| Hoisting             | Yes (declaration)                      | No (TDZ)                |
| Call without new     | Works silently (bug risk)              | TypeError               |
| Strict mode          | Only if you add it                    | Always                  |
| Methods              | Added to Person.prototype manually    | Added in the class body |
| Methods enumerable?  | Yes                                    | No                      |
| Inheritance          | Manual prototype linking               | extends and super       |
| Private members      | Not built-in                           | #private                |
| Underlying mechanism | Prototypes                              | Same prototypes         |

================================================================================================
*/

//U. Common mistakes
/*
Putting commas between methods.
Forgetting new.
Using this before super() in a child constructor.
Using a class before it is defined.
Calling a static method on an object.
Losing this when passing a method as a callback.
Thinking _name is private. Only #name is truly private.
*/