//G. Quick check
//What does this print, and why?
var x = 1;

function test() {
  console.log(x);   //undefined
  var x = 2;
}

test();

var x = 1;

function test() {
  console.log(x);  // 1 -> no local x, so it walks the scope chain to global
}
test();