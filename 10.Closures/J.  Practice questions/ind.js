/*
Basic

What is a closure, in one sentence?
Does a closure store a copy of a variable or a reference to it?
What does this print?
js
function a() {
  let x = 10;
  return () => x;
}
console.log(a()());

Intermediate
4. What is the output, and why?

js
function make() {
  let n = 0;
  return () => ++n;
}
const p = make();
const q = make();
p(); p();
console.log(p(), q());
Why does this print 3 3 3, and how do you fix it?
js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
How can you use a closure to make a private variable that outside code can’t change directly?
What does this print?
js
let x = "global";
function show() { console.log(x); }
function test() {
  let x = "local";
  show();
}
test();
*/