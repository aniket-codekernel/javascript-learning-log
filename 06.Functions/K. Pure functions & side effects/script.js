//K. Pure Functions & Side Effects
//1. What a "side effect" is
/*
A side effect is anything a function does that reaches outside its own scope — any change to the world beyond "take input, give output." Examples:

.changing a variable outside the function
.modifying an object or array passed into it
.console.log() (printing is a side effect — it affects something outside the function, the screen)
.changing the DOM
.making a network request
.changing this on some object
*/

let total = 0;

function addToTotal(n) {
  total += n;   // reaches OUTSIDE the function, modifies external state
}

//2. What a "pure function" is
/*
A function is pure if it follows two rules:
1.Same input → always the same output. No randomness, no outside dependency that can change the result.
2.No side effects. It doesn't touch anything outside itself — no modifying outer variables, no modifying its arguments, no logging, no network calls.
*/

function add(a, b) {
  return a + b;
}
/*
Give it 2, 3 → always 5, no matter when, where, or how many times you call it.
Doesn't touch anything outside itself. Purely: input in, output out.
*/

//3. Example: impure because of rule 1 (depends on outside state)
let taxRate = 0.18;

function calculateTax(amount) {
  return amount * taxRate;  // depends on an outside variable
}
//Same input (amount) can give different outputs if taxRate changes elsewhere in the code. The function's result isn't determined purely by its own arguments — it secretly depends on something external. Impure.
function calculateTax(amount, rate) {
  return amount * rate;   // everything it needs comes in as a parameter
}
//Now the output is fully determined by the inputs you give it, every time.

//4. Example: impure because of rule 2 (has a side effect)
function addItem(cart, item) {
  cart.push(item);   // MUTATES (changes) the original array
  return cart;
}

const myCart = ["apple"];
addItem(myCart, "banana");
console.log(myCart); // ["apple", "banana"] — the original was changed!

/*
Summary
.A pure function: same input → same output, always; and no side effects (doesn't touch anything outside itself).
.Side effect = anything that reaches outside the function's own scope: modifying outer variables, mutating arguments, logging, network calls, DOM changes.
.Two ways a function becomes impure: depending on outside state, or mutating something it was given.
.Prefer returning new data over mutating existing data — this is the core pure-function habit.
.Pure functions are predictable, testable, and safe to reuse — foundational for clean code and for understanding React/Redux later.
*/
