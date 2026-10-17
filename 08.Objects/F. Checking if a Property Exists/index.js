//F. Checking if a Property Exists
const user = {name:"Aniket", score:undefined};
console.log(user)  //{ name: 'Aniket', score: undefined }

console.log("name" in user);  //true name in user is present 
console.log("na" in user);  // false
console.log("aniket" in user)  //false its only give us a values

console.log(user.hasOwnProperty("name"))  //true  only the object own properties

const car = Object.create(user)
console.log(car.hasOwnProperty("name"))   //false

console.log(Object.hasOwn(user, "name"));  //true  //modern way to check
console.log(Object.hasOwn(car, "name"));   //false //modern way to check

console.log("name" in car)   //Its does not check a has own or not its check only value

console.log(user.score !== undefined);  //false //score exixt but it is in a undefined

const b = {name:"asgcyuabg0", score:"sacasc" }
console.log(b.score !== undefined);      //true  //now it will check a value because its not a undefined

console.log("score" in user)     //true best way to check a valye
console.log("score" in b)          //true

