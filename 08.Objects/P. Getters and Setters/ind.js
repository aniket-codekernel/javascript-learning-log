//p.Getters and Setters, Step by Step
//Step 1: How a normal property works
const user ={first:"Aniket",last:"k"}
console.log(user)                     //{ first: 'Aniket', last: 'k' }
console.log(user.first)               //// reading: you get "Aniket"
user.first="asd"                      // writing: you change it

//A normal property is a plain box. Reading takes the value out, and writing puts a value in. No extra code runs in between.
//Step 2: The problem
//Problem 1: you want the full name, so you must join the parts yourself every time:
console.log(user.first,"space",user.last)  //asd space k

//Problem 2: you want to stop wrong values:
user.age = -50;   // nothing stops this
console.log(user)  //{ first: 'asd', last: 'k', age: -50 }

//Step 3: The idea
//What if reading or writing a property could run a small function automatically? That is what getters and setters do.
/*
===============================================================
                    Getter vs Setter
===============================================================

| Name       | Runs when you...          | Job                                           |
|------------|---------------------------|-----------------------------------------------|
| Getter     | Read the property         | Gives back a value                            |
| Setter     | Write to the property     | Receives the new value and decides what to do |

===============================================================
*/
//They look like normal properties from outside, but inside there is a function.

//Step 4: Getter (reading)
const user = {
  first: "Aniket",
  last: "K",

  get fullName() {
    return this.first + " " + this.last;
  }
};

console.log(user.fullName);   // "Aniket K"

/*
Points to notice:

 *You write the word get before the function name.
 *The getter must return something.
 *You read it without brackets: user.fullName, not user.fullName().
 *fullName is not stored anywhere. It is calculated fresh every time.
*/
user.first = "Ravi";
console.log(user.fullName);   // "Ravi K" (updated automatically)

//Step 5: Setter (writing)
//Setter, Very Slowly
//We’ll build it from something you already know: a normal function. Then I’ll show you how a setter is the same thing with a different way of calling it.

//Step 1: A normal function that saves a value
const user = {
  name: "Aniket",

  changeName(newName) {
    this.name = newName;
  }
};

user.changeName("Ravi");   // we CALL the function with brackets
console.log(user.name);    // "Ravi"
/*
changeName is a function.
newName is the value you hand to it ("Ravi").
Inside, it saves that value into this.name.
*/

//Step 2: The same job, but written as a setter
const user = {
  name: "Aniket",

  set changeName(newName) {
    this.name = newName;
  }
};

user.changeName = "Ravi";   // NO brackets, it looks like normal assignment
console.log(user.name);     // "Ravi"

//The only differences from Step 1:
/*
===============================================================
             Normal Function vs Setter
===============================================================

|                | Step 1 (normal function)    | Step 2 (setter)                 |
|----------------|-----------------------------|---------------------------------|
| Definition     | changeName(newName) {...}   | set changeName(newName) {...}   |
| How you use it | user.changeName("Ravi")     | user.changeName = "Ravi"        |

===============================================================
*/
//The inside of the function is exactly the same. The word set just changes how you trigger it.



