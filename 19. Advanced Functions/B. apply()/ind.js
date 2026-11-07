//B apply()
// apply() does exactly what call() does: it runs a function immediately with a chosen this. The only difference is how you pass the arguments.
func.call(thisArg, arg1, arg2, arg3)    // arguments separated by commas
func.apply(thisArg, [arg1, arg2, arg3]) // arguments in ONE array
/*
Memory trick:

Call = Commas
Apply = Array
*/

const person = { name: "Aniket" };

function introduce(city, role) {
  console.log(`${this.name} from ${city}, ${role}`);
}

introduce.call(person, "Nagpur", "Developer");
introduce.apply(person, ["Nagpur", "Developer"]);
// Both print: Aniket from Nagpur, Developer

//apply() unpacks the array and passes each item as a separate argument. introduce receives "Nagpur" as city and "Developer" as role, not one array.

//When is apply() useful?
//When your arguments are already in an array.
const numbers = [5, 12, 8, 21, 3];

// Math.max wants separate arguments: Math.max(5, 12, 8, ...)
console.log(Math.max.apply(null, numbers)); // 21

//Method borrowing with arrays
function demo() {
  const arr = Array.prototype.slice.apply(arguments);
  console.log(arr); // [1, 2, 3], a real array now
}

demo(1, 2, 3);

