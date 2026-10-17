//I. Accidental globals (a common mistake)
function bad() {
  oops = 5;      // no let/const/var, so it becomes global
}
bad();
console.log(oops);  // 5
//In strict mode ("use strict") this throws a ReferenceError, which is safer. Modules and classes are strict by default.
