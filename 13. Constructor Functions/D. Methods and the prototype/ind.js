//D. Methods and the prototype

//Bad: a method inside the constructor. Every object gets its own copy:
function Person(name) {
  this.name = name;
  this.greet = function () {        // new function created per object
    return "Hi, " + this.name;
  };
}

//Good: a method on the prototype. All objects share one copy:
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  return "Hi, " + this.name;
};

const a = new Person("Aniket");
const b = new Person("Riya");
console.log(a.greet === b.greet); // true (same function, saved memory)

/*
================================================================================================
                  Method Inside Constructor vs Method on Prototype
================================================================================================

|                  | Method inside constructor     | Method on prototype |
|------------------|-------------------------------|---------------------|
| Copies in memory | One per object                | One total           |
| Memory use       | Higher                        | Lower               |
| Use when         | Needs private data (closures) | Default choice      |

================================================================================================
*/
