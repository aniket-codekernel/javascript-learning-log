//E Partial Application

function add(a,b,c) {
    return a + b + c;
}
console.log(add(10,20,30))

function addpartial(x,y,z) {
    return x+y+z
}
const Partial = addpartial.bind(null,2)
console.log(Partial(4,6))  //12


function format(prefix, name, suffix) {
  return prefix + name + suffix;
}

const greet = format.bind(format, "Mr. ");

console.log(greet("Sharma", "!")); //Mr. Sharma!
console.log(greet("Verma"));   //Mr. Vermaundefined
 
