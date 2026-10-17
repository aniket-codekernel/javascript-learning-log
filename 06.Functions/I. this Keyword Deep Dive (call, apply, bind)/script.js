//I. this Keyword Deep Dive (call, apply, bind)

//1. Why would you need to control this manually?
//Sometimes you want to run a function with a specific object as this, even though the function isn't naturally attached to that object (via object.method()).
function introduce() {
  console.log(`Hi, I am ${this.name}`);
}

const person = { name: "Aniket" };

introduce(); // this is NOT person, so this.name is undefined
//introduce is a standalone function, not stored inside person. Normally, there's no way to connect them — unless you manually tell JavaScript "use person as this for this call." That's exactly what call, apply, and bind do.

//2. .call() — run it now, pass arguments one by one
introduce.call(person); // "Hi, I am Aniket"
//Syntax:
//functionName.call(thisValue, arg1, arg2, ...)

/*
.First argument: what this should be.
.Remaining arguments: passed to the function individually, comma-separated.
*/

function introduce(city, hobby) {
  console.log(`Hi, I am ${this.name} from ${city}, I like ${hobby}`);
}

const person15 = { name: "Aniket" };

introduce.call(person15, "Nagpur", "coding");
// "Hi, I am Aniket from Nagpur, I like coding"
//.call() runs the function immediately, with this forced to person.

//3. .apply() — same as call, but arguments go in an array
introduce.apply(person, ["Nagpur", "coding"]);
// "Hi, I am Aniket from Nagpur, I like coding"
//Syntax:
// functionName.apply(thisValue, [arg1, arg2, ...])

/*
===============================================================
                    .call() vs .apply()
===============================================================

|            | Extra arguments                              |
|------------|----------------------------------------------|
| `.call()`  | Listed individually: `call(thisVal, a, b, c)` |
| `.apply()` | Bundled in an array: `apply(thisVal, [a, b, c])` |

===============================================================
*/

//Memory trick: "Apply takes an Array."
//When .apply() is genuinely useful: when you already have your arguments sitting in an array, instead of as separate variables.
function sum(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];

sum.apply(null, numbers); // 6
// vs. sum.call(null, numbers[0], numbers[1], numbers[2]) — more awkward

//Step 1: What does .bind() actually do, in one sentence?
//.bind() takes a function and makes a copy of it, where this is permanently glued to whatever you choose. That copy is a new function — calling .bind() does not run anything yet.

//Step 2: An analogy
//Think of a function like a remote control that needs a battery (this) to work. Normally, you insert the battery each time you press the button (each time you call it) — different battery, different result.

//.bind() is like gluing one specific battery permanently inside the remote, then giving you a new remote. From then on, that remote always uses that one glued-in battery — no matter who presses the button later, or where.

//Step 3: The simplest possible example
function sayName() {
  console.log(this.name);
}

const person89 = { name: "Aniket" };
//Calling sayName() alone gives nothing useful — no battery is inserted, so this isn't person.
sayName(); // undefined

//Step 4: Now use .bind()
const boundSayName = sayName.bind(person89);
/*
What happened on this line?

. .bind(person) did not print anything, did not run sayName.
.It created a brand new function and stored it in boundSayName.
.That new function is a copy of sayName, but with this permanently glued to person.
*/

//Step 5: Now call the new function
boundSayName(); // "Aniket"
//This is the first time anything actually runs. And it prints "Aniket", because the battery (this = person) is already glued in — it doesn't matter that we called it plainly, with nothing before the dot.

