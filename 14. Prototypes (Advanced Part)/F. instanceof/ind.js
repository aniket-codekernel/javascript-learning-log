//F. instanceof
//What it does: checks whether a constructor’s prototype appears anywhere in the object’s prototype chain.
function Person() {}
const p1 = new Person();

console.log(p1 instanceof Person); // true
console.log(p1 instanceof Object); // true  (Object.prototype is in the chain)
console.log([] instanceof Array);   // true
console.log([] instanceof Object);  // true
console.log(p1 instanceof Array);   // false

//How it works internally (simple version):
// p1 instanceof Person  really means:
Person.prototype.isPrototypeOf(p1)
// "Is Person.prototype somewhere up p1's chain?"

