//L. Spread (...) and Rest
const a={x:1,y:2};
console.log(a)  //{ x: 1, y: 2 }

const b = a      //its change a original object
b.z=3;
console.log(b);   //{ x: 1, y: 2, z: 3 }
console.log(a);    //{ x: 1, y: 2, z: 3 }

// Spread: copy / merge
const c = {name:"aniket",stare:"add"}
console.log(c)    //{ name: 'aniket', stare: 'add' }

const d ={...c}
console.log(d)     //{ name: 'aniket', stare: 'add' }
d.skills="AI/ML"
console.log(d)   //{ name: 'aniket', stare: 'add', skills: 'AI/ML' }
console.log(c)   //{ name: 'aniket', stare: 'add' }  see this object did not change


//// Rest: collect the leftovers
const z = {name:"aniket",state:"mah",sur:"youit"}
console.log(z)   //{ name: 'aniket', state: 'mah', sur: 'youit' }

const {state,...other}=z
console.log(other)   // name: 'aniket', sur: 'youit' }

/*const x ={...other}=z
console.log(x)         //TypeError: Assignment to constant variable. */

// const {sur,...other}=z
// console.log(x)    //


