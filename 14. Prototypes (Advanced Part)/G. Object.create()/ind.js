//G. Object.create()
//What it does: creates a new object and lets you choose its prototype directly. No constructor function is needed.
const animal = {
  eats: true,
  speak() { console.log("Some sound"); }
};

const dog = Object.create(animal);   // dog's prototype = animal
dog.barks = true;

console.log(dog.eats);  // true  (inherited)
dog.speak();            // Some sound (inherited)
console.log(Object.getPrototypeOf(dog) === animal); // true