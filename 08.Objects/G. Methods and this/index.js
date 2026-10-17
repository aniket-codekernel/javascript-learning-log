//G. Methods and this
const user = {
  name: "Aniket",
  greet() {                          // shorthand method syntax
    console.log("Hi, I am " + this.name);
  }
};

user.greet(); // "Hi, I am Aniket"
//this means the object that is calling the method. Here it is user.

//Arrow functions as methods are a trap:
const user1 = {
  name: "Aniket",
  greet: () => console.log(this.name)  // arrow has no own this
};
user1.greet(); // undefined
//Use regular functions or method shorthand for object methods.
