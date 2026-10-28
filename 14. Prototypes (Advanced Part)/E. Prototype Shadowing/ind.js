//E. Prototype Shadowing
//Meaning: if an object has a property with the same name as one on its prototype, the object’s own property is found first. It “hides” (shadows) the prototype’s version.
function Person() {}
Person.prototype.greet = function () { console.log("Hello from prototype"); };

const p1 = new Person();
p1.greet(); // Hello from prototype

p1.greet = function () { console.log("Hello from p1 itself"); };
p1.greet(); // Hello from p1 itself  ← shadows the prototype's greet

const p2 = new Person();
p2.greet(); // Hello from prototype  ← p2 is unaffected
 
/*
Key points:

 1.The prototype’s method is not deleted or changed. It is only hidden for p1.
 2.Other objects are not affected.
 3.Lookup stops at the first match going up the chain, so the closest one wins.
  4.delete p1.greet removes the shadow, and the prototype version works again.
*/