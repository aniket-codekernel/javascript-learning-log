//A. What is this
//this is a special keyword that points to an object. Which object it points to depends on how the function is called.
//Remember this one line: this is decided at call time, not at the time you write the function. (Arrow functions are the only exception. See section I.)

//Analogy: The word “I” in English. If you say “I am hungry”, “I” means you. If your friend says the same sentence, “I” means your friend. The sentence is the same, but “I” depends on who is speaking. In the same way, this depends on who is calling the function
function sayName() {
  console.log(this.name);
}

const a = { name: "Aniket", sayName };
const b = { name: "Rahul",  sayName };

a.sayName(); // "Aniket"  → called by a
b.sayName(); // "Rahul"   → called by b

//It’s the same function, but this is different each time because the caller is different.
