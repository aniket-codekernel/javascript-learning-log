//A. What is a Prototype? (The big idea)
//Simple definition: Every JavaScript object has a hidden link to another object. That other object is its prototype. If you ask an object for a property it doesn’t have, JavaScript looks in its prototype.
//Analogy: You ask a student a question and they don’t know the answer. They ask their teacher. If the teacher doesn’t know, the teacher asks the principal. The prototype is “the person you ask next.”

const animal = { eats: true };
const dog = { barks: true };

Object.setPrototypeOf(dog, animal); // link dog → animal

console.log(dog.barks); // true  (dog has it itself)
console.log(dog.eats);  // true  (dog doesn't have it, found in animal)

