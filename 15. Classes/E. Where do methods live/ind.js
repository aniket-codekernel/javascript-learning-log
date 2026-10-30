//E. Where do methods live?
// This connects to your prototype chapter.
class person{
    constructor(name){
        this.name
    }

    method(){
        return "hi"
    }
}
const a = new person("A");
const b = new person("B");

console.log(a.greet === b.greet); //true (same function, shared)
console.log(a.hasOwnProperty("greet"))  //false 
console.log(person.prototype.hasOwnProperty("greet")) //true
/*
 * Methods go on Person.prototype, not on each object.
 * This saves memory, because one copy is shared by all objects.
 * Properties set with this.x = ... in the constructor live on each object.
*/

//F. Class declaration vs class expression
// Declaration
class A {}

// Expression (anonymous)
const B = class {};

// Expression (named)
const C = class Inner {};

















