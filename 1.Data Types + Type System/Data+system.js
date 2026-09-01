//Primitive Types  1.String 2.Boolean 3.Undefined 4.Null 5.Symbole 6.Bigint
//Reference Types  1.Object 2.Array 3.Function 4.Data 

//NaN ("Not a Number")
console.log(typeof NaN);
console.log(typeof 0/0);
console.log(NaN === NaN);
console.log(Number.isNaN(NaN));

//Truthy vs Falsy
//falsy values (only 8 in js) 1.false 2.0 3.-0 4."" 5.null 6.undefined 7.NaN 8.n(Bignit)
//Truthy values  all other are truthy values

console.log(Boolean(false))  
console.log(Boolean(0))
console.log(Boolean(-0))
console.log(Boolean(" "))   // This is a Truthy value because there is an a space
console.log(Boolean(""))   // This is a falsw value because there is an no space
console.log(Boolean(null))
console.log(Boolean(undefined))
console.log(Boolean(NaN))
console.log(Boolean(8655n))  //This is a Truthy value because there is an no 0 present
console.log(Boolean(7540n))  //This is a Truthy value because there is an 0 present in starting

Boolean("hello");     // true
Boolean(1);            // true
Boolean([]);           // true ⚠️ empty array is truthy
Boolean({});            // true ⚠️ empty object is truthy


//Primitive Vs Reference
let a = 10;
let b = a;
b = 20;
console.log(a); // 10 — unaffected (primitive)  //Stack
console.log(b)

let arr1 = [1, 2];
let arr2 = arr1;
arr2.push(3);
console.log(arr1); // [1,2,3] — affected (reference) //Heap
console.log(arr2)


//Object keys Becoming String
 //.Object keys are always converted to strings (except Symbols).
 let obj = {};
obj[1] = "one";
obj[true] = "yes";
console.log(Object.keys(obj)); // ["1", "true"] — both became strings


//Symbol Uniqueness
//Every Symbol() is guaranteed unique, even with the same description.
let s1 = Symbol("id");
let s2 = Symbol("id");
console.log(s1 === s2); // false — always unique

//Object.is() (Special Cases Only)
//Similar to === but fixes two edge cases:
Object.is(NaN, NaN);   // true  (unlike NaN === NaN → false)
Object.is(0, -0);      // false (unlike 0 === -0 → true)
Object.is(5, 5);       // true (behaves like === otherwise)


// Wrapper Objects
let s = "hello";
console.log(s.toUpperCase()); // "HELLO"
// JS secretly does: new String(s).toUpperCase(), then discards the wrapper


//Type Coerction 
//Concept Jisem aapka ek type automatically convert hojaeya
var a = 1;
var b = "1";
console.log(a+b)  //"11" Because + have two mode one for add and secn for to number so its no of string

var c =1;
var d = 1;
console.log(c-d)   //0 because - have only 1 mode is subtsaction

console.log("1"+2+2) //123
console.log(1+2+"2")//32
