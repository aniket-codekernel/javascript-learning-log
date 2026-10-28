//                               /*Prototypes */
// //Every object is born from prototypes
// const a =[];
// a.push("a")
// a.pop("c")
// //*we use that push and pop and many thing like that  its inside a prototype

// //*Every function has a key called a prototype and every function link to prototype to all object

// //*Constructor is like to tell a which object make that function

// /*
//                   const obj = {}
//     object                                Object Prototypes                       Obj
//     A built in function The parent         The shared box of thing              
//     -prototypes                            things every plan object get            own key =no                    
// */
// //*Where did that all of shared option present in it its present in [[prototype]]

// //__proto__ in JavaScript
// //Every JavaScript object has a hidden link to another object called its prototype. When you access a property that the object doesn’t have, JavaScript looks up that link, and keeps going up the chain until it finds the property or reaches null. __proto__ is a property that lets you read or change that hidden link.
// const animal = {eats:true};
// const dog ={barks:true};

// dog.__proto__ = animal;
// console.log(dog.barks);     //true (own property)
// console.log(dog.eats);      //true  (found via prototype)

//    function Person() {}
//    const p = new Person();
//    console.log(p.__proto__ === Person.prototype); // true

//       class Car {}
//    const c = new Car();
//    console.log(c.__proto__ === Car.prototype); // true

//    //Why __proto__ is discouraged
//    //*It was a non-standard browser feature for years. It was only added to the spec later for compatibility, in a legacy section (Annex B).
//    //*Changing a prototype after creation is slow. It breaks engine optimizations.
//    //*Security risk: prototype pollution. If user input can set __proto__, an attacker can inject properties into every object:

//    /*
// ================================================================================================
//                               The Modern Way in JavaScript
// ================================================================================================

// | Old way                     | Modern replacement              |
// |-----------------------------|---------------------------------|
// | obj.__proto__ (read)        | Object.getPrototypeOf(obj)      |
// | obj.__proto__ = x (write)   | Object.setPrototypeOf(obj, x)   |
// | Setting it at creation      | Object.create(proto)            |
// | Constructor functions       | class with extends              |

// ================================================================================================
// */

// const animalt={eats:true}
// const bird = {fly:true}

// const wolf = Object.create(bird)
// wolf.barks=true;


// console.log(Object.getPrototypeOf(wolf) === animalt); //false

//                     //Phase 2:Sharing
// //Sharing in c++ java pyton it did not link to create object but in javascript  its connect all time that is a protype and also we can link object to another object
// const animal1 = {eats:true};
// const dog1 ={barks:true};

// dog1.__proto__ = animal1;
// console.log(dog1.barks);     //true (own property)
// console.log(dog1.eats);      //true  (found via prototype)

//    function Person() {}
//    const o = new Person();
//    console.log(o.__proto__ === Person.prototype); // true

//       class Car {}
//    const g = new Car();
//    console.log(g.__proto__ === Car.prototype); // true



//             //phase 3 accesing the properties

//===================================================================================================================================================================================================================================================================================================================            
// In JS everything is an object

const p1 = {
    fname:"aniket",
    lname:"dhok",
    insidep1(){
        console.log(this.fname)
        return
    }
}
// console.log(p1)        //We can call p1
// console.log(p1.fname)  //We can call p1.fname
// console.log(p1.lname)  //We can call p1.lname
// console.log(p1.insidep1())   //We can call inside a p1 inside function

const p2 = Object.create(p1)
console.log(p2)    //{} its a empty object
console.log(p2.fname)  //aniket
console.log(p2.lname)  //Dhok
console.log(p2.insidep1)  //[Function: insidep1]
//BUT HOW CAN WE ACCEAS IN P2 THERE IS NO VALUE PRESENT IN P2 BUT WE CAN ACCEAS IT THAT BECAUSE OF PROTOTYPE
                                         //Prototpes
/*

p1={

fname:"Aniket",
lname:"dhok",
function(){
 consile.log("///////")
}
 __proto__:{}  //No proto value is given
}

p2={
__proto__:p1
}


IN P2 WE GIVE A PROTO OF P1 WHEN WE ASK A COBSILE.LOG(P2.FNAME) WHAT IT WILL CHECK FIRST 
 *FIRST IT WILL CHECK IN A P2 DOES IN P2 VALUE PRESENT IF YES GIVE IT OR CHECK __PROTO__
 *IN __PROTO__ WE GIVE P1 IT WILL CHECK P1 
 *IN P1 DOES VALUE PRESENT IF PRESENT GIVE IT OR GIVE NULL
*/                                         

console.log("THIS IS BEFORE:",p2.fname)   //THIS IS BEFORE: aniket
p2.__proto__.fname="hack"

console.log("This is a after:",p2.fname)    //This is a after: hack

                                //Wrapper Classes in JavaScript
/*
What it is

A wrapper object is a temporary object JavaScript creates around a primitive value (string, number, boolean, etc.) so you can use properties and methods on it.
Primitives are not objects, so they have no methods of their own. Yet this works:

const name = "aniket";
console.log(name.toUpperCase()); // "ANIKET"

It works because JavaScript quietly wraps the primitive in a String object for a moment.

Point by point
1.Primitives have no methods. "hello", 42, true are plain values, not objects.
2.JavaScript has wrapper constructors for them:

================================================
       JavaScript Primitives and Wrappers
================================================

| Primitive | Wrapper |
|-----------|---------|
| string    | String  |
| number    | Number  |
| boolean   | Boolean |
| symbol    | Symbol  |
| bigint    | BigInt  |

================================================

3.Auto-boxing happens behind the scenes. When you access a property on a primitive,
  JavaScript:
  * Creates a temporary wrapper object
  * Looks up the property/method on it
  * Returns the result
  * Throws the wrapper away
*/     


//================================================================================================================================================================================================================================================================================
                                //Wrapper Classes in JavaScript
//In JavaScript, there are two kinds of things:
/*
 *Primitives: plain values like "hello", 42, true. They are just data. They have no buttons or tools attached.
 *Objects: things that carry tools (methods) with them, like .toUpperCase() or .toFixed().
*/
//But you can do this with a plain string:
"hello".toUpperCase(); // "HELLO"

//That seems strange, because a plain value has no tools. So how does it work?

//The trick: a temporary costume
//JavaScript puts a temporary costume (wrapper) on the value for a split second, so it can use the tools. Then it removes the costume.

let name = "aniket";
name.toUpperCase();
//What happens inside, step by step:
/*
 *1.name is just plain text "aniket"
 *2.You write .toUpperCase()
 *3.JavaScript secretly creates new String("aniket") (the costume)
 *4.It runs toUpperCase() on that costume and gets "ANIKET"
 *5.It throws the costume away
 *6.name is again just plain text

 You never see steps 3 and 5. They happen automatically.
*/

/*
 Real-life comparison
 Think of a plain phone number written on paper.The paper can’t call anyone.But when you put it inside a phone app,it can call, message, and save.The phone app is the wrapper.The number is still the same, you just got extra abilities for a moment.

*/

/*
What you actually need to remember
 * 1. A wrapper is a temporary object around a plain value.
 * 2. JavaScript does it automatically, so you do not need to write it yourself.
 * 3. That is why "hello".length and "hello".toUpperCase() work.
 * 4. Do not write new String("hi") yourself. Just write "hi".
*/

let s = "hello";
s.age = 20;        // costume put on, age added to costume, costume thrown away
console.log(s.age); // undefined because its not a object its a string so that did not have this function
console.log(s)


const o1 ={
    op1:"This is inside a o1"
}

const o2 ={
    op2:"This is inside a o2",
    __proto__:o1
}

const o3 ={
    op3:"This is inside a o3",
    __proto__:o2
}

console.log(o3.op1) 
/*
 * How its work when we put o3.op1 he check in a o3 first doest it have a op1 if have give other wise check
 * __proto__ is o2 does o2 have a op1 if have it giveit otherwise check __proto__
 * __proto__ is o1 does o1 have a op1 if have give it otherwise checj __proto__
 * __proto__ is object and object is null
*/
//WE WILL NOT USE THESE __PROTO__ BECAUSE IT WILL GIVE BUGS SO WE USE A OBJECT.CREATE()


                                    //Who does every this is a object in js
let c1 = "string"
console.log(c1.__proto__)   //string
console.log(c1.__proto__.__proto__)   //object
console.log(c1.__proto__.__proto__.__proto__) //null

let c2 = 123
console.log(c2.__proto__)   //number
console.log(c2.__proto__.__proto__)   //object
console.log(c2.__proto__.__proto__.__proto__) //null

let c3 = true
console.log(c3.__proto__)   //Bollean
console.log(c3.__proto__.__proto__)   //object
console.log(c3.__proto__.__proto__.__proto__) //null
//IT DID NOT WORK ON A NULL AND UNDEFINED VARIABLE IT WILL WORKS ON ALL THE PRIMITIVE VALUES

                            //new keyword
//The new Keyword in JavaScript
//The simple idea
//new is the keyword that builds a new object from a constructor function or class. Think of the constructor as a blueprint and new as the action of building a house from it.
function Person8(name) {
  this.name = name;
}

const p11 = new Person8("Aniket");
console.log(p11.name); // "Aniket"
/*
What new does, step by step

 * 1. Creates an empty object: {}
 * 2. Links its prototype: sets that object’s __proto__ to Person.prototype
 * 3. Runs the function with this pointing to the new object, so this.name = name adds name to it
 * 4. Returns the object automatically
*/
//You can imagine new doing this behind the scenes:



//The new keyword, in simple words.
//The idea
//new means: “make me a fresh object from this blueprint.”
//Think of a cookie cutter. The cutter is the blueprint. Each time you press it into dough, you get a new cookie. new is the pressing.
//Without new: you repeat yourself
//Say you want 3 students. You could write each one by hand:
const s1 = { name: "Aniket", age: 20 };
const s2 = { name: "Rahul", age: 21 };
const s3 = { name: "Priya", age: 19 };
//This works, but it is repetitive. If you want 100 students, it is painful

//With new: write the blueprint once
function Student89(name, age) {
  this.name = name;
  this.age = age;
}

const s891 = new Student89("Aniket", 20);
const s892 = new Student89("Rahul", 21);
const s893 = new Student89("Priya", 19);


                                      //__proto__ vs prototype
//The one-line difference
/*
 * prototype belongs to functions/classes (the blueprint). It is the shared toolbox that future objects will use.
 * __proto__ belongs to objects (the things you build). It is the link that points to that toolbox.

*/
//Simple picture
/*
Think of Student as a cookie cutter and s1 as a cookie.
 * Student.prototype = the recipe book kept with the cutter
 * s1.__proto__ = a note on the cookie saying “my recipe book is over there”
*/
// Both point to the same book.
function Student(name) {
  this.name = name;
}

Student.prototype.greet = function () {
  return "Hi, I'm " + this.name;
};

const s1 = new Student("Aniket");

console.log(s1.__proto__ === Student.prototype); // true

/*
================================================================================================
                         prototype vs __proto__ in JavaScript
================================================================================================

|            | prototype                                   | __proto__                            |
|------------|---------------------------------------------|--------------------------------------|
| Belongs to | Functions and classes                       | Every object                         |
| Purpose    | Holds shared methods for future objects     | Links an object to its shared methods |
| Set by     | You (e.g., Student.prototype.greet = ...)   | new sets it automatically            |
| Direction  | "Objects made from me will use this"        | "I get my methods from here"          |

================================================================================================
*/

































































