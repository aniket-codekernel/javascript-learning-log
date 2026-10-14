//B. Ways to Create an Object
//// 1. Object literal (use this 95% of the time)
const car = { brand: "Mahindra", model: "Thar" };
console.log(car)   //{ brand: 'Mahindra', model: 'Thar' }
const car1 = {
    brand:"aniket",
    model:"thar"
}
console.log(car1)  //{ brand: 'aniket', model: 'thar' }

// 2. new Object() (rarely used)
const car2 = new Object();
console.log(car2)  //{}
car2.brand="Tata";
car2.name="sieera"
console.log(car2)  //{ brand: 'Tata', name: 'sieera' }

const car3 ={
    name:1234
}
console.log(car3)  //{ name: 1234 }
car3.age=25;
console.log(car3)   //{ name: 1234, age: 25 }

//// 3. Constructor function (older way to make many similar objects)
function car8(brand,model){
    this.brand=brand;
    this.model1=model;
}
const car9= new car8("Toyota", "Hilux")
console.log(car9) //car8 { brand: 'Toyota', model1: 'Hilux' }
const car10= new car8("Toyota", "Hilux","definder")
console.log(car10)  //ingore it

/*
function car11(brand,model){    //there is argument missing it will give ReferenceError: company is not defined
    this.brand=brand;
    this.model1=model;
    this.new=company;
}
const car12=new car11("bmw m5","911","maybach","lord alto")
console.log(car12)*/


function car11(brand,model,company){    //here we pass the argument as a company
    this.brand=brand;
    this.model1=model;
    this.new=company;
}
const car12=new car11("bmw m5","911","maybach","lord alto")
console.log(car12) //car11 { brand: 'bmw m5', model1: '911', new: 'maybach' }


/*
//what if we change a value of a brand and model
function car13(brand1,model1){ //ReferenceError: brand is not defined in this argument we will pases a value not keys
    this.brand1=brand; 
    this.model1=model;
}
const car14= new car13("Toyota", "Hilux")
console.log(car9) 
const car15= new car13("Toyota", "Hilux","definder")
console.log(car10)  
*/


//// 4. Object.create() (make an object with a chosen prototype)
const car4 = Object.create(car);
console.log(car4)  //{}

car4.car="adascasc"
console.log(car4)   //{ car: 'adascasc' }
car4.car="ascfsdgfd"
car4.be="asfdsgdsg"
console.log(car4)



//// 5. Class (modern way to make many similar objects)
class Bike {
  constructor(brand) {
    this.brand = brand;
  }
}
const bike = new Bike("Royal Enfield");
console.log(bike)    //Bike { brand: 'Royal Enfield' }

class phone {
    constructor(company,model){    //IN that arrgument we pass a value not a key  
        this.brand = company
        this.other = model 
    }
}
const a789 = new phone("x200fe")
console.log(a789) //phone { brand: 'x200fe' }
const a896=new phone("x200fe","blue")
console.log(a896)


//Part 1: Difference between 1 and 2
const car89  = { brand: "Mahindra", model: "Thar" };   // 1. literal

const car2 = new Object();                           // 2. new Object()
car2.brand = "Mahindra";
car2.model = "Thar";

//The final object is exactly the same. Both give a normal object. The difference is only in how you write it.
/*
===============================================================
              Object Literal vs new Object()
===============================================================

|                   | 1. Literal `{}`          | 2. `new Object()`          |
|-------------------|--------------------------|----------------------------|
| Length            | Short                    | Longer                     |
| Add properties    | Right inside the braces  | One by one, after creating |
| Readability       | Easy to read              | More typing                |
| Used in real code | Almost always             | Almost never               |

===============================================================
*/
//So the rule is simple: always use {}. You only need to know about new Object() because you may see it in old code or interviews.

//Part 2: What is a Prototype?
//Think of it like this. You ask your friend, “Do you have a pen?”

/*
*If he has one, he gives it to you.
*If not, he says, “Ask my brother.” His brother checks.
*If the brother doesn’t have one either, he points to another person, and so on, until someone has it or the chain ends.
*/
//A prototype is that “brother”. Every object has a hidden link to another object. When you ask for a property and the object doesn’t have it, JavaScript follows the link and looks there.

//Let’s see it with a real example:
const user = { name: "Aniket" };

console.log(user.name);       // "Aniket" (found on user itself)
console.log(user.toString()); // "[object Object]"
//Wait: we never wrote toString inside user. So where did it come from?

console.log(user.hasOwnProperty("toString")); // false (not on user)
console.log(Object.getPrototypeOf(user));     // the built-in Object.prototype
//user doesn’t have toString, so JS followed the hidden link to Object.prototype, and found it there. That built-in object is the prototype of every {} you create.

//The search looks like this:
// user  →  Object.prototype  →  null (end of chain)
//This chain is called the prototype chain. If the property is not found anywhere, you get undefined.

//In one line: a prototype is the backup object that JavaScript checks when your object doesn’t have the property you asked for.


//Part 3: What is Object.create()?
//Now that you know prototypes, this is easy.
//When you write {}, JS automatically sets the prototype to Object.prototype. With Object.create(something), you choose the prototype yourself.
const car86 = { brand: "Mahindra", model: "Thar" };

const car4 = Object.create(car);   // new EMPTY object, whose prototype is car

console.log(car4);          // {} (nothing inside it)
console.log(car4.brand);    // "Mahindra" (not found on car4, so JS checked car)
//The chain for car4 is:
//car4  →  car  →  Object.prototype  →  null
//car4 is empty, but it can use everything that car has through the link.





                            //Prototype: Step by Step, From Zero
//I will use one example the whole way, so you only have to learn one picture.

//A. The problem first (why prototype exists)
//Suppose you make 3 dogs, and each dog can bark:
const dog1 = { name: "Tommy", bark() { console.log("woof"); } };
const dog2 = { name: "Bruno", bark() { console.log("woof"); } };
const dog3 = { name: "Rocky", bark() { console.log("woof"); } };

//Problem: the bark function is written 3 times. For 1000 dogs, it would be written 1000 times. That wastes memory and is hard to update.
//Wish: write bark once and let all dogs use it.
//Prototype is the solution to this wish.

//B. What is a prototype? (one sentence)
//A prototype is a normal object that holds shared things (methods and properties), and other objects can borrow from it.

//There is nothing magical about it. It is just an ordinary object that plays the role of “the shared place”.
const dogShared = {
  bark() { console.log("woof"); }   // written ONCE
};
//dogShared is our prototype, the shared toolbox.

//C. Every object has a hidden link
//Every object in JavaScript has a hidden connection to another object. This connection is called its [[Prototype]].
/*
*You can’t see it inside { }.
*But it exists.
*It points to the object we call the prototype.
*/

//We connect our dogs to the shared toolbox like this:
const dogShared69 = {
  bark() { console.log("woof"); }
};

const dog11 = Object.create(dogShared69);  // link dog1 → dogShared
dog1.name = "Tommy";

const dog22 = Object.create(dogShared69);  // link dog2 → dogShared
dog2.name = "Bruno";

//Picture it:
/*
dog1 ──┐
       ├──→ dogShared  (has bark, written once)
dog2 ──┘
*/
//dog1 and dog2 only store their own name. The bark lives in one place.

//D. The lookup rule (the most important point)
/*
When you write dog1.bark(), JavaScript does 3 steps:

*Look in dog1 itself. Is bark here? No.
*Follow the hidden link to dogShared. Is bark here? Yes.
*Use it.
*/
dog1.bark();   // "woof"
dog2.bark();   // "woof"
// This is the entire idea of a prototype. If it is not on me, I look at my prototype.

//E. Own property vs inherited property
/*
===============================================================
                Own vs Inherited Properties
===============================================================

| Type          | Meaning                                      | Example          |
|---------------|----------------------------------------------|------------------|
| Own           | Stored directly inside the object            | `name` in `dog1` |
| Inherited     | Not inside the object, found through the link | `bark` for `dog1` |

===============================================================
*/

console.log(Object.hasOwn(dog1, "name")); // true  (own)
console.log(Object.hasOwn(dog1, "bark")); // false (inherited)
console.log(dog1.bark);                   // still works, found via the link

//F. You already use this every day
//You never wrote map inside your arrays, yet this works:
const arr = [1, 2, 3];
arr.map(x => x * 2);
//Why? Because JavaScript automatically links every array to a shared toolbox called Array.prototype. That toolbox holds map, filter, push, and more.

/*
arr1 ──┐
arr2 ──┼──→ Array.prototype  (map, filter, push... stored once)
arr3 ──┘
*/
//Same for strings:
"hello".toUpperCase();
//toUpperCase is not inside "hello". It is found in String.prototype, the shared toolbox for all strings. This is the answer to the pending question from earlier.

//G. Why the word “chain”?
//The toolbox can also have its own link to another toolbox. JavaScript keeps following links until it finds the property or reaches the end.
const animal = { eats: true };
const dog = Object.create(animal);
const puppy = Object.create(dog);

console.log(puppy.eats);  // true
//Search order:
// puppy → dog → animal → Object.prototype → null (end)
//It checks puppy, then dog, then animal and finds eats. If it reaches null without finding it, the answer is undefined.

//H. Short memory sheet
/*
===============================================================
                  JavaScript Prototypes
===============================================================

| Word                | Simple meaning                                  |
|---------------------|-------------------------------------------------|
| Prototype           | The shared object that other objects borrow from |
| Hidden link         | The connection from an object to its prototype   |
| Own property        | Stored on the object itself                     |
| Inherited property  | Found by following the link                      |
| Prototype chain     | The path JS follows, one link after another      |

===============================================================
*/

/*
Whole idea in 3 lines:

 *Write shared things once, in one object.
 *Link other objects to it.
 *When a property is missing, JS follows the link and finds it there.
*/




                               //Prototype: Very Slow, Step by Step
//Forget the word “prototype” for now. We will build the idea from something you already know, and only name it at the end.
//Step 1: What you already know
const box1 = { color: "red" };
console.log(box1.color);   // "red"   (found)
console.log(box1.size);    // undefined   (not found)

//When you ask an object for a property it doesn’t have, JavaScript says undefined. It gives up.

//Step 2: A new idea
//What if, before giving up, JavaScript could say:
//“I don’t have size. Let me check one other object that I’m connected to.”
//That one other object is the fallback. If the fallback has it, JS uses it. If not, then undefined.

//This fallback idea is the whole of prototypes. The fallback object is what JavaScript calls the prototype.

//Step 3: Build it in code
const box112 = { color: "red", size: "big" };
const box2 = Object.create(box112);

/*
Read the second line slowly:

 *Object.create(box1) means “make a new empty object, and set its fallback to box1”.
 *box2 is that new object.
*/
//Now we have two objects:

/*
===============================================================
              Object Properties and Fallback
===============================================================

| Object | Own properties  | Fallback                               |
|--------|-----------------|----------------------------------------|
| `box1` | `color`, `size` | (the built-in default, ignore for now) |
| `box2` | nothing         | `box1`                                 |

===============================================================
*/

console.log(box2);        // {}  (nothing of its own)
console.log(box2.color);  // "red"
console.log(box2.size);   // "big"

//Step 4: What JavaScript does for box2.color
//JavaScript asks questions in order:

/*
===============================================================
              Prototype Lookup — box2.color
===============================================================

| Question                             | Answer       |
|--------------------------------------|--------------|
| 1. Does `box2` have its own `color`? | No           |
| 2. Who is `box2`'s fallback?         | `box1`       |
| 3. Does `box1` have `color`?         | Yes, "red"   |
| 4. Result                            | "red"        |

===============================================================
*/
//Nothing is copied. box2 is still empty. It just looks inside box1 each time you ask.
//Proof:
box1.color = "blue";       // change the fallback
console.log(box2.color);   // "blue"  (box2 looks at box1 again, live)

//Step 5: What if a property is in neither?
console.log(box2.weight);  // undefined
/*
===============================================================
              Prototype Lookup — box2.weight
===============================================================

| Question                              | Answer                       |
|---------------------------------------|------------------------------|
| 1. Does `box2` have `weight`?         | No                           |
| 2. Does its fallback `box1` have it?  | No                           |
| 3. Does `box1`'s fallback have it?     | No (at the end of the chain) |
| 4. Result                             | `undefined`                  |

===============================================================
*/
// Step 6: What if the object has its own value?
box2.color = "green";

console.log(box2.color);   // "green"   (box2's own value found first)
console.log(box1.color);   // "blue"    (box1 is NOT changed)

/**
 Rules:

 *JS always checks the object itself first. If it finds the property there, it stops.
 *Writing to box2 only changes box2. It never touches the fallback.
*/

//Step 7: Why is this useful? (the real reason)
//Here is the problem it solves. We want 3 dogs, each with a bark method:

//Without a fallback, we copy bark into every dog:
const dog1 = { name: "Tommy", bark() { console.log(this.name + " says woof"); } };
const dog2 = { name: "Bruno", bark() { console.log(this.name + " says woof"); } };
const dog33 = { name: "Rocky", bark() { console.log(this.name + " says woof"); } };
//bark is written 3 times. For 1000 dogs, 1000 times.

//With a fallback, we write it once:
const dogShared96 = {
  bark() { console.log(this.name + " says woof"); }
};

const dog1 = Object.create(dogShared96);
dog1.name = "Tommy";

const dog2 = Object.create(dogShared96);
dog2.name = "Bruno";

dog1.bark();   // "Tommy says woof"
dog2.bark();   // "Bruno says woof"
/*
Each dog stores only its own name. The bark function is stored once, in dogShared.

You may wonder how bark prints the right name for each dog. this means the object that called the method. When you write dog1.bark(), this is dog1, so it prints Tommy. When you write dog2.bark(), this is dog2, so it prints Bruno. The same function is used, but this changes.
 */


//Step 8: You already use this every day
//You never wrote map inside your array:

const arr9 = [1, 2, 3];
arr9.map(x => x * 2);

//JavaScript automatically gave arr a fallback object called Array.prototype. It holds map, filter, push, and more. Every array shares that one object.
//Same idea for text:
"hello".toUpperCase();

/*
toUpperCase lives in String.prototype, the fallback for all strings.

So you never set the fallback yourself for built-in things. JS does it for you.
 */

//Step 9: Fallback of a fallback (the “chain”)
//A fallback object can have its own fallback.
const animall = { eats: true };
const dogg = Object.create(animal);    // dog's fallback is animal
const puppyy = Object.create(dog);     // puppy's fallback is dog

console.log(puppy.eats);              // true

/*
JavaScript asks:

*puppy has eats? No. Go to its fallback.
*dog has eats? No. Go to its fallback.
*animal has eats? Yes. Use it.
*/

//puppy → dog → animal → (built-in default) → null
//This path of links is the prototype chain. A chain is just “fallback of fallback of fallback”.

//Step 10: Now the names
/*
===============================================================
          Everyday Words vs JavaScript Terminology
===============================================================

| Everyday word (used above)  | JavaScript word     |
|-----------------------------|---------------------|
| Fallback object             | Prototype           |
| The hidden connection to it | `[[Prototype]]`     |
| The path of fallbacks       | Prototype chain     |

===============================================================
*/

//Do this: answer these 3 questions in your own words, without running the code
//Question 1
const toolbox = { hello() { console.log("hi"); } };
const obj = Object.create(toolbox);
obj.hello();
//Does obj have its own hello? Where does JS find it?

//Question 2
const a = { color: "red" };
const b = Object.create(a);
b.color = "blue";
console.log(a.color);
//What prints, and why?

//Question 3
const arr89 = [1, 2, 3];
arr89.map(x => x * 2);
//map is not written inside arr. Where does JS find it?
