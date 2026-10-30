//M. Inheritance with extends
//A child class gets all the features of a parent class.
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return `${this.name} makes a sound`;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);          // calls the parent constructor
    this.breed = breed;
  }
  bark() {
    return "Woof!";
  }
}

const d = new Dog("Tommy", "Lab");
console.log(d.speak()); // inherited from Animal
console.log(d.bark());  // own method

/*
 * Dog is the child (subclass), and Animal is the parent (superclass).
 * It uses the prototype chain underneath: d → Dog.prototype → Animal.prototype → Object.prototype.
*/




//N. super in detail
//super has two uses.
/*
 1. super(...) calls the parent constructor.
  * In a child constructor, you must call super() before using this.
  * Otherwise you get a ReferenceError.
  * If the child has no constructor, JavaScript automatically calls super(...args).
*/
class Dog extends Animal {
  constructor(name) {
    //this.x = 1;   // ReferenceError
    super(name);
  }
}

//2. super.method() calls a parent’s method.
class Dog extends Animal {
  speak() {
    return super.speak() + " (woof!)";   // reuse the parent's version
  }
}

