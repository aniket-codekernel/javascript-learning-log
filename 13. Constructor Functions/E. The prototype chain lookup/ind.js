//E. The prototype chain lookup
//When you write a.greet():

// 1. Does "a" itself have greet?       → No
// 2. Does a.__proto__ (Person.prototype) have it? → Yes, use it
// 3. (If not) check Object.prototype, then null → undefined

//Useful checks:
a.__proto__ === Person.prototype;   // true
a.constructor === Person;           // true
a instanceof Person;                // true
a.hasOwnProperty("name");           // true (own property)
a.hasOwnProperty("greet");          // false (inherited)

