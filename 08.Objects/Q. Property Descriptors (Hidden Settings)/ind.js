//Q. Property Descriptors (Hidden Settings)
//Every property has hidden flags:

/*
===============================================================
             Object Property Flags
===============================================================

| Flag           | Meaning                                 |
|----------------|-----------------------------------------|
| writable       | Can the value be changed?               |
| enumerable     | Does it show in loops/keys?             |
| configurable   | Can it be deleted or its flags changed? |

===============================================================
*/
const obj = {name:"anike",skills:"AI/ML"};
Object.defineProperty(obj, "id", {
  value: 101,
  writable: false,     // cannot change
  enumerable: false    // hidden from loops
});

console.log(obj)    //{ name: 'anike', skills: 'AI/ML' }
obj.id=5896;
console.log(obj)        //can not change a value
console.log(obj.id)      //101