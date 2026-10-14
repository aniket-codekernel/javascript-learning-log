//H. Modern Shorthand
const name = "aniket";
const age = 20;
console.log(name) //aniket
console.log(age) //20

//// 1. Property shorthand: same name for key and variable
const user ={name,age}
console.log(user) //{ name: 'aniket', age: 20 }

//// 2. Method shorthand
const obj = {sayhi() {console.log("hi")}}
console.log(obj)   //{ sayhi: [Function: sayhi] }

// 3. Computed property names: key made from an expression
const field = "email"
const user2 ={[field]:"aa.com",["id_"+1]:101}
console.log(user2) //{ email: 'aa.com', id_1: 101 }
