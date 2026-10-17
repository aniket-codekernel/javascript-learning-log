//O. const and Freezing
//const stops you from reassigning the variable, not from changing the object’s insides
const user = { name: "A" };
user.name = "B";       // allowed
// user = {};             TypeError: Assignment to constant variable.

//To really lock an object:
/*
===============================================================
       Object.preventExtensions() vs seal() vs freeze()
===============================================================

| Method                          | Add | Delete | Change |
|---------------------------------|-----|--------|--------|
| `Object.preventExtensions(obj)` | No  | Yes    | Yes    |
| `Object.seal(obj)`              | No  | No     | Yes    |
| `Object.freeze(obj)`            | No  | No     | No     |

===============================================================
*/
                          //Object.preventExtensions(obj)`
const a ={name:"anik",skills:"AI/ML"}
console.log(a)    //{ name: 'anik',skills:"AI/ML"}
Object.preventExtensions(a)   
a.syu="sajkb"
console.log(a)    //{ name: 'anik',skills:"AI/ML" }   //its did not give permession to add a new value

delete a.skills
console.log(a)         //{ name: 'anik' }  its has a permssion to delete

a.name="opiu"
console.log(a)    //{ name: 'opiu' } //its has a permssion to change a value

                        //Object.seal(obj)
const b ={what:"ajsbab",sad:"ccascn"}
console.log(b)   //{ what: 'ajsbab', sad: 'ccascn' }

Object.seal(b)

b.dcas="asssas"
console.log(b)    //{ what: 'ajsbab', sad: 'ccascn' }  its did not give any permission to change a value

delete b.sad
console.log(b)   //{ what: 'ajsbab', sad: 'ccascn' }  //its did not give any permission to delete a value

b.sad="rtyui"
console.log(b)    //{ what: 'ajsbab', sad: 'rtyui' }  //its will chages a value has a premssion

                       //Object.freeze(obj)
const c ={scdc:"sdasds",sdsadf:"Asfsafasf"}
console.log(c)
Object.freeze(c)
//its did not have any permssion to change it

