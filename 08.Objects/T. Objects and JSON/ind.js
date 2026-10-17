//T. Objects and JSON
// JSON is a text format that looks like an object. It is used to send data between server and browser.
const user = { name: "Aniket", age: 20 };

const text = JSON.stringify(user);   // object → string
console.log(text);                   // '{"name":"Aniket","age":20}'

const back = JSON.parse(text);       // string → object
console.log(back.name);              // "Aniket"
