//F. The famous interview bug: var in loops
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Output: 3 3 3   (not 0 1 2)

///Why?
/*
  1. var has one i shared by the whole loop.
  2. All three callbacks close over that same i.
  3. By the time they run, the loop is finished and i = 3.
*/

//Fix 1: use let (a new i for each loop round)
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Output: 0 1 2

//Fix 2: use an IIFE (the old way)
for (var i = 0; i < 3; i++) {
  (function (j) {
    setTimeout(() => console.log(j), 100);
  })(i);                         // j is a fresh copy each time
}
// Output: 0 1 2

