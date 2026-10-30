//Q. Checking types
console.log(d instanceof Dog);     // true
console.log(d instanceof Animal);  // true (the chain includes Animal)
console.log(d instanceof Object);  // true
console.log(Object.getPrototypeOf(d) === Dog.prototype); // true

//R. The this problem in classes
//Class methods lose this when you pull them out of the object.

class Person {
  constructor(name) { this.name = name; }
  greet() { return this.name; }
}

const p = new Person("Aniket");
const fn = p.greet;
fn(); // TypeError: this is undefined (class code is strict mode)

//Fix 1: bind
const fn12 = p.greet.bind(p);

// Fix 2: arrow function as a class field (very common in React)
class Person {
  constructor(name) { this.name = name; }
  greet = () => this.name;   // `this` is locked to the object
}
