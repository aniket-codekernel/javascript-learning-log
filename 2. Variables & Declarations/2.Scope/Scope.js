//a) Global Scope
var g1 = "global var";
let g2 = "global let";

function test() {
  console.log(g1); // accessible
  console.log(g2); // accessible
}

//b) Function Scope
function test() {
  var local = "inside function";
  console.log(local); //works
}
test();
console.log(local); // ❌ ReferenceError — not accessible outside

//c) Block Scope
{
  let blockVar = "inside block";
  console.log(blockVar); // ✅ works
}
console.log(blockVar); // ❌ ReferenceError — block scope, not visible outside

//4. Lexical Scope (new concept)
function outer() {
  let outerVar = "I'm from outer";

  function inner() {
    console.log(outerVar); // ✅ accessible — inner is "lexically" inside outer
  }

  inner();
}
outer();



function grandparent() {
  let a = "grandparent";
  function parent() {
    let b = "parent";
    function child() {
      let c = "child";
      console.log(a, b, c); // ✅ all accessible — child can see everything outer
    }
    child();
    // console.log(c); // ❌ parent CANNOT see child's variable
  }
  parent();
}
grandparent();

//5. Scope Chain
let value = "outer";
{
  let value = "inner"; // shadows the outer 'value'
  console.log(value); // "inner"
}
console.log(value); // "outer" — untouched, back to normal once block ends