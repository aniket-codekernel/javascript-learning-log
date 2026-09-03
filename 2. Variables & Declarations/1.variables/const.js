//1. What it is
const name = "Aniket";

//2. Must Be Initialized at Declaration
const x = 10; //  fine

const y; // SyntaxError: Missing initializer in const declaration

//3. Block-Scoped (same as let)
if (true) {
  const a = "hello";
  console.log(a); // "hello"
}
console.log(a); //  ReferenceError: a is not defined

//4. Hoisting Behavior — Same as let
console.log(z); //  ReferenceError
const z = 5;

//5. Temporal Dead Zone (TDZ) — Same as let
{
  console.log(price); //  ReferenceError: Cannot access 'price' before initialization
  const price = 100;
}

//6. No Reassignment (the defining feature)
const age = 25;
age = 26; //  TypeError: Assignment to constant variable.

//7. No Redeclaration (same scope) — Same as let
const city = "Mumbai";
const city = "Delhi"; // SyntaxError: Identifier 'city' has already been declared
     //But like let, it CAN be redeclared in a different nested scope:
        const city = "Mumbai";
       {
         const city = "Delhi"; //  fine — separate block-scoped variable
         console.log(city); // "Delhi"
       }
       console.log(city); // "Mumbai"


//8. Critical Nuance: const Prevents Reassignment, NOT Mutation
const person = { name: "Aniket", age: 25 };

person.age = 26;        //  allowed — mutating a property, not reassigning
person.city = "Mumbai"; //  allowed — adding a new property

console.log(person); // { name: "Aniket", age: 26, city: "Mumbai" }

// person = { name: "New" }; //  TypeError — this WOULD be reassignment
     //for array
     const arr = [1, 2, 3];

arr.push(4);     //  allowed — mutating the array
arr[0] = 100;    //  allowed — mutating an element

console.log(arr); // [100, 2, 3, 4]

// arr = [9, 9, 9]; //  TypeError — reassignment not allowed


//9. To Make an Object Actually Immutable
const person = Object.freeze({ name: "Aniket" });
person.name = "Changed"; // silently fails (or throws in strict mode)
console.log(person.name); // still "Aniket"

//10. Does NOT Attach to window — Same as let
const country = "India";
console.log(window.country); // undefined