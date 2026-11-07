//C bind()
// call() and apply() run the function right now. But sometimes you want to fix this now and run the function later. The classic case is a method passed as a callback:
const user = {
  name: "Aniket",
  greet() {
    console.log("Hi, I'm " + this.name);
  }
};

user.greet();              // Hi, I'm Aniket

const fn = user.greet;     // detach the method
fn();                      // Hi, I'm undefined (this is lost)

setTimeout(user.greet, 1000); // same problem: this is lost
//When you detach a method, the object before the dot disappears, so this is no longer user.

//The solution: bind()
const boundGreet = user.greet.bind(user);

boundGreet();                  // Hi, I'm Aniket
setTimeout(boundGreet, 1000);  // Hi, I'm Aniket

//Analogy: call() and apply() are like making a phone call right now. bind() is like saving a contact: the number is fixed, and you can dial any time later.
