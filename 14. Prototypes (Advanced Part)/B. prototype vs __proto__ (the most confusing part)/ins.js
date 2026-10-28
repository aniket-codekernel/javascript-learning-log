//B. prototype vs __proto__ (the most confusing part)
//These are two different things with similar names.
/*
================================================================================================
                         prototype vs __proto__ in JavaScript
================================================================================================

| prototype     | __proto__                                           |                                                 |
|---------------|-----------------------------------------------------|-------------------------------------------------|
| Who has it?   | Only functions                                    | Every object                                    |
| What is it?   | A box of things you want to give to future objects | The actual link from an object to its prototype |
| Purpose       | "What will objects made by this constructor inherit?" | "Who is my prototype right now?"              |

================================================================================================
*/

function Person(name) {
  this.name = name;
}

const p1 = new Person("Aniket");

// The key rule:
console.log(p1.__proto__ === Person.prototype); // true

/*
Remember it like this:

 * Person.prototype is the blueprint box that belongs to the constructor.
 * p1.__proto__ is the pointer that links the object to that box.
*/


