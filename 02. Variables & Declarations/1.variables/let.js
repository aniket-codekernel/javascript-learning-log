//1. What it is  
let name = "Aniket";

//2. Block-Scoped (the big difference from var)
if (true) {
  let a = "hello";
  console.log(a); // "hello" — works, inside the block
}
// console.log(a); // ReferenceError: a is not defined — doesn't leak out

function test() {
    if (true) {
        let a = "hello";
    }
    console.log(a); // "hello" — accessible outside the if block
}
//console.log(a)  //ReferenceError: a is not defined
test();

//3. Hoisting Behavior
console.log(x); //ReferenceError
let x = 10;

//4. Temporal Dead Zone (TDZ)
{
  // TDZ starts here for 'msg'
  console.log(msg); //  ReferenceError: Cannot access 'msg' before initialization
  let msg = "hi";    // TDZ ends here, msg is now usable
  console.log(msg);  // "hi" — works fine now
}


//5. No Redeclaration (in the same scope)
let count = 1;
let count = 2; // SyntaxError: Identifier 'count' has already been declared
    //But you can redeclare it in a different (nested) scope — because it's a completely separate variable there:
     let count = 1;
{
  let count = 2; //  fine, this is a NEW count, block-scoped to this {}
  console.log(count); // 2
}
console.log(count); // 1 — outer count untouched

//6. Reassignment Allowed
let score = 10;
score = 20; //  fine
score = score + 5; //  fine, now 25

//7. Does NOT Attach to the Global Object (window)
let country = "India";
console.log(window.country); // undefined — not attached, unlike var

//8. Fixes the Classic Loop/Closure Bug
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Output: 0, 1, 2 (each callback has its OWN separate i)
     

//9. Must Be Declared Before Use (enforced strictly)
function test() {
  console.log(temp); //  ReferenceError (TDZ)
  let temp = 5;
}
