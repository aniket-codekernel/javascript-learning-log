//E. The “Lost this” Problem (the most common bug)
//This is the most important section, and the one that causes the most bugs and interview questions.
//Case 1: Taking the method out of the object
const user = {
  name: "Aniket",
  greet() { console.log(this.name); }
};

const fn = user.greet; // we only COPIED the function
fn();                  // undefined (in strict mode, an error)
//Why? When we call fn(), there is no dot before it. It’s a plain call, so Rule 1 (default binding) applies, not Rule 2. The function remembers nothing about user.

//Case 2: Passing a method as a callback
setTimeout(user.greet, 1000); // this is lost!

//Here setTimeout receives only the function, with no object attached. It calls it later as a plain function, so this is lost.


//Case 3: Callback inside a method
const team = {
  name: "Dev Team",
  members: ["A", "B"],
  show() {
    this.members.forEach(function (m) {
      console.log(this.name + " - " + m); // this is NOT team here
    });
  }
};
team.show();


//Rule 3: Explicit Binding (call, apply, bind)
//JavaScript lets you choose what this should be, using three methods that exist on every function.
function intro(city, country) {
  console.log(this.name + " from " + city + ", " + country);
}

const person = { name: "Aniket" };

//1. call runs the function immediately. Arguments are passed one by one.
intro.call(person, "Nagpur", "India");
// "Aniket from Nagpur, India"

//2. apply runs the function immediately. Arguments are passed as an array.
intro.apply(person, ["Nagpur", "India"]);

//3. bind does not run the function. It returns a new function with this locked in permanently.
const boundIntro = intro.bind(person);
boundIntro("Nagpur", "India"); // works any time later

/*
================================================================================================
                         call() vs apply() vs bind()
================================================================================================

| Method  | Runs immediately? | Arguments                      | Returns           |
|---------|-------------------|--------------------------------|-------------------|
| call()  | Yes               | One by one                     | Function's result |
| apply() | Yes               | In an array                    | Function's result |
| bind()  | No                | One by one (can pre-fill some) | A new function    |

================================================================================================
*/



//. Rule 4: new Binding (constructors)
//When you call a function with new, JavaScript does 4 things:
/*
 1.Creates a brand new empty object {}
 2.Links that object to the function’s prototype
 3.Runs the function with this = that new object
 4.Returns the new object automatically
*/

function Person(name, age) {
  this.name = name; // this = the new empty object
  this.age = age;
}

const p1 = new Person("Aniket", 20);
console.log(p1); // { name: "Aniket", age: 20 }

//What if you forget new?
const p2 = Person("Rahul", 21); // no new → plain call
// this = window (or undefined in strict mode → error)

