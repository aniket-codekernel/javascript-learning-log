//C. Method Sharing (why prototypes matter)
//This builds on Chapter 13 (Constructor Functions).
//The problem: if you put a method inside the constructor, every object gets its own copy.
function Person(name) {
  this.name = name;
  this.sayHi = function () {          // ❌ new function created every time
    console.log("Hi " + this.name);
  };
}

const a = new Person("A");
const b = new Person("B");
console.log(a.sayHi === b.sayHi); // false → two separate copies in memory
//1,000 objects means 1,000 copies of the same function. That wastes memory.
//The solution: put the method on the prototype. All objects then share one copy.

function Person(name) {
  this.name = name;           // data is unique per object
}

Person.prototype.sayHi = function () {   // ✅ one shared copy
  console.log("Hi " + this.name);
};

const a1 = new Person("A");
const b1 = new Person("B");

console.log(a1.sayHi === b1.sayHi); // true → same function, shared
a1.sayHi(); // Hi A
b1.sayHi(); // Hi B

