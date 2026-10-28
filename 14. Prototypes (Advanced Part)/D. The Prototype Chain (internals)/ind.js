//D. The Prototype Chain (internals)
//How property lookup works. When you write obj.something, JavaScript follows these steps:
/*
 1.Does obj itself have something? If yes, use it.
 2.If not, look at obj.__proto__.
 3.If not there, look at that object’s __proto__.
 4.Keep going until you reach null (the end). If still not found, the result is undefined.
*/
function Person(name) { this.name = name; }
Person.prototype.sayHi = function () { console.log("Hi"); };

const p1 = new Person("Aniket");

p1.sayHi();      // found on Person.prototype
p1.toString();   // found on Object.prototype (higher up)
p1.fly;          // not found anywhere → undefined

//Useful check: own property vs inherited property
p1.hasOwnProperty("name");   // true  (belongs to p1 itself)
p1.hasOwnProperty("sayHi");  // false (inherited from prototype)
"sayHi" in p1;               // true  (`in` checks the whole chain)

