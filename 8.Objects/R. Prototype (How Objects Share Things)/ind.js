//R. Prototype (How Objects Share Things)
// Every object has a hidden link to another object, its prototype. If a property isn’t found on the object, JS looks in its prototype, then that one’s prototype, and so on. This is the prototype chain.
const animal = { eats: true };
const dog = Object.create(animal);   // dog's prototype is animal
dog.barks = true;

console.log(dog.barks);  // true (own property)
console.log(dog.eats);   // true (found via prototype)
console.log(Object.hasOwn(dog, "eats")); // false (not its own)
