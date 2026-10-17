//Part 1: What is this and why does it exist?
/*1. What is this?
this is a special word in JavaScript. It doesn't hold a fixed value like a normal variable. Instead, its value is decided automatically every time a function is called.*/
/*2. Why does JavaScript need this at all?
Because the same function is often reused by different objects. Instead of writing separate functions for each object, JavaScript lets one function figure out "who is using me right now" — and that "who" is this.*/

//===================================================================================================================================================================================================================================================
//C. Arrow Functions vs Regular Functions — Syntax + this Behavior
/*

//1. Syntax recap
//Regular function
function multiply(a,b){
  return a * b;
}

//Arrow function
const multiply=(a,b) => a*b;

//Arrow function - single param doesn't need parentheses
const square =  n*n;

//Arrow function- no params needs empty parentheses
const sayHi = () => console.log("hi");

//Arrow function — multi-line body needs braces + explicit return
const multiine = (a,b) => {
  const result = a*b;
  return result
}

*/


//Part 1: What is this and why does it exist?
/*
// 1. What is this?
//this is a special word in JavaScript. It doesn't hold a fixed value like a normal variable. Instead, its value is decided automatically every time a function is called.
*/

//2. Why does JavaScript need this at all?
//Because the same function is often reused by different objects. Instead of writing separate functions for each object, JavaScript lets one function figure out "who is using me right now" — and that "who" is this.

const person12 = {
  name: "Aniket",
  greet: function() {
    console.log("Hi, I am Aniket");   // name typed by hand
  }
};

const person11 = {
  name: "Rahul",
  greet: function() {
    console.log("Hi, I am Rahul");    // another copy, name typed by hand
  }
};
//Every new person needs a new copy of the function. With 100 people, you'd write 100 copies.

// Now the solution: one function, using this
// ONE function, written only once
function greet() {
  console.log("Hi, I am " + this.name);
}

const person13 = { name: "Aniket", greet: greet };
const person14 = { name: "Rahul",  greet: greet };

person1.greet();  // "Hi, I am Aniket"
person2.greet();  // "Hi, I am Rahul"

//We write that greet:greet to know a function which object should i use value=function name value can be any thing but function name should be same
function greet() {
  console.log("Hi, I am " + this.name);
}

const p11 = { name: "Aniket", greet: greet };     // key: greet
const p22 = { name: "Rahul",  hello: greet };     // key: hello
const p33 = { name: "Sam",    banana: greet };    // key: banana

p1.greet();   // "Hi, I am Aniket"
p2.hello();   // "Hi, I am Rahul"
p3.banana();  // "Hi, I am Sam"


//2. There are 3 ways to put a function in an object
//Way 1: use an existing function (what we did so far)
const p = { name: "Aniket", greet: greet };

//Way 2: write the function directly inside (key: function)
const p12 = {
  name: "Aniket",
  greet: function() {
    console.log("Hi, I am " + this.name);
  }
};

//Way 3: shorthand method (most common in real code)
const p36 = {
  name: "Aniket",
  greet() {
    console.log("Hi, I am " + this.name);
  }
};

//BUT WHY FOR decide .this at the time of a call
//In JavaScript, a function is just a value, like a number or a string. It can be stored in many places at once.
function greet() {
  console.log("Hi, I am " + this.name);
}

const p19 = { name: "Aniket", greet: greet };
const p28 = { name: "Rahul",  greet: greet };
/*
Here greet is stored in both p1 and p2. It is the same function, and it has no single owner.

Now think from the function's side

When JavaScript reads greet, it can't decide this at that moment, because:

p1 might use it
p2 might use it
some object created next week might use it

At the time it's written, the function doesn't know who will use it. So the only time JavaScript can know is

Analogy
A phone doesn't belong to one caller. Anyone can pick it up and say "I am calling." The phone doesn't know who will use it until someone actually does.
*/

/*
//3.Who decides what this is?
//Not you, directly. The way you call the function decides it. Same function, called differently → this can be different.

//Remember the analogy: "I" means different people depending on who's speaking. this means different objects depending on who's calling.
*/



//Part 2: Regular Functions — this is dynamic (decided at call time)
//4. The rule for regular functions
//this = whatever is written immediately before the dot when the function is called.

//5. Example — same function, two different calls
const person52 = {
  name: "Aniket",
  ani: function() {
    console.log(this.name);
  }
};

person52.ani();

//6. Now watch what happens if we detach it
const detached12 = person.greet;
detached12();
//Now there's nothing before the dot — it's just detached(). Nobody is "speaking." So this becomes the global object (or undefined in strict mode). Output: undefined.

//7. The key insight
//It's the exact same function in both cases. Only the way it was called changed. That's what "dynamic this" means — it's decided fresh, every single time, at the call site.


//Part 3: Arrow Functions — this is lexical (decided at write time)
//8. The rule for arrow functions
//Arrow functions don't get their own this at all. Instead, they borrow this from wherever they were physically written in the code — not from how they're called.

//9. Why?
//Arrow functions were designed this way on purpose — to fix the exact confusion regular functions cause (which we'll see in Part 4).

//10 
// Step 1: The borrowing rule
//An arrow function looks at the code around it, moving outward, until it finds a regular function. It borrows that function's this. If it finds no function at all, it borrows the top-level this.
//Important: an object { } does not count. Only functions count.

//Step 2: Point 10 with this rule
const person98 = {
  name: "Aniket",
  gr7eet: () => {
    console.log(this.name);
  }
};

person98.gr7eet();
/*
The arrow function looks outward:

Outside the arrow is the object { }. Objects don't have a this to lend, so skip it.
Outside the object is the top level of the file. There is no function here.
So it borrows the top-level this, which is not person.

Result: undefined.
*/

//Step 3: Compare with an arrow inside a function
const person87 = {
  name: "Aniket",
  start: function() {          // regular function, has its own this
    const inner = () => {
      console.log(this.name);
    };
    inner();
  }
};

person87.start();  // "Aniket"
/*
The arrow function looks outward:

Outside the arrow is start, which is a regular function. Found one.
start was called as person.start(), so its this = person.
The arrow borrows that, so this = person.

Result: "Aniket".
*/

//11. Example
const person56 = {
  name: "Aniket",
  greet: () => {
    console.log(this.name);
  }
};

person56.greet(); //undefined

//12. The key insight
const detachedArrow = person.greet;
detachedArrow(); // still undefined — same result either way



//Part 4: Why this actually matters — the real problem it solves
//12. The problem with regular functions inside other functions
const timer = {
  seconds: 0,
  start: function() {
    setTimeout(function() {
      this.seconds++; 
    }, 1000);
  }
};
timer.start();
//Walk through the "who's before the dot" rule for the inner function passed to setTimeout. Nobody calls it as timer.something() — JavaScript itself calls it internally, alone, after 1 second. So this = global object, not timer. this.seconds++ fails to do what we want.

//13.The fix
const timer15 = {
  seconds: 0,
  start: function() {
    setTimeout(() => {
      this.seconds++;
    }, 1000);
  }
};
timer15.start();
//Now the inner function is an arrow function. It has no this of its own — it looks outward to where it was written, which is inside start. And start's this is timer, because we called timer.start(). So the arrow function borrows that: this = timer. This works correctly.



//Part 5: The one-line summary to remember
/*
===============================================================
             Regular Function vs Arrow Function
===============================================================

|                         | Regular function                    | Arrow function                                      |
|-------------------------|------------------------------------|-----------------------------------------------------|
| Who decides `this`?     | The call site (how it's called)    | The write site (where it's written)                 |
| Can change?             | Yes, every call                    | No, fixed forever once written                      |
| Analogy                 | "I" — depends who's speaking       | A recording of someone else's voice — always says   |
|                         |                                    | the same name no matter who plays it                |

===============================================================
*/