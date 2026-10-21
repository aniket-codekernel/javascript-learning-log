//A. What is a constructor function?
//A constructor function is a normal function used as a blueprint to create many similar objects. By convention its name starts with a capital letter.
function Person(name, age) {
  this.name = name;   // "this" = the new object being built
  this.age = age;
}

const a = new Person("Aniket", 20);
const b = new Person("Riya", 22);
console.log(a.name); // "Aniket"
console.log(a)
//Think of it as a cookie cutter: one cutter, many cookies.

