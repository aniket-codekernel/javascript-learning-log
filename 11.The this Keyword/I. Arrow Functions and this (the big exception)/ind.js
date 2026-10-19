//I. Arrow Functions and this (the big exception)

/*
Regular functions create their own this every time they are called.

Arrow functions do NOT have their own this. They borrow this from the surrounding code where they were written. This is called lexical this.

Analogy: A regular function is like a person who introduces themselves each time. An arrow function is like a person with no identity of their own, who always uses the identity of the room they were born in.
*/

const team = {
  name: "Dev Team",
  members: ["A", "B"],
  show() {
    this.members.forEach((m) => {
      console.log(this.name + " - " + m); // works!
    });
  }
};
team.show();
// "Dev Team - A"
// "Dev Team - B"