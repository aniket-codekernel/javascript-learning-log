//1.
console.log(5 + "5");  //55
console.log(2+3+"8");  //58
console.log("8"+3+2);  //832
console.log(2-8);   //-6
console.log(2 ** 2 ** 4); // evaluate 8**(2**4)=8**16= 65536
console.log(6+2*(5-3)**2);  //14 =>steps:1.(6+2*(2)**2) 2.(6+2*4) 3.(6+8) 4.(14)
console.log(0/0) //NaN
console.log(-8/0); //-infinite

//2.
// ||=     "If the current value is falsy (empty, zero, null, etc.), replace it. Otherwise, leave it alone."
let ain = undefined;
ain ||= "Aniket";
console.log(ain)

console.log("" || "Guest");

//??=    "If the current value is null or undefined ONLY, replace it. Anything else (even 0 or empty string) stays untouched."
let ani = undefined;
ani ??="Dhok"
console.log(ani)

// &&=    "If the current value is truthy, replace it. If it's falsy, leave it alone."
let dho="ani";
dho &&="1235"
console.log(dho)


//3
console.log(null == undefined);  //true because null is false value and undefined false value then its become true
console.log(0=="");   //true ""=>0
console.log(NaN == NaN) //false its never come true

//4
console.log(null && 0);  //null //Stops at a first false , null is a fist value is false
console.log(21 && "Aniket"); //Aniket  //first value is a true and second value if false so its print Aniket

console.log(0 || "Dhok"); //Dhok  //Stop at first truth value   first value is a false and decond value is true
console.log(21 || "Aniket"); //21 first value is a trith

console.log(!true); //false //! Its change a value false
console.log(!!false); //false //! Its change true but its change again !false



 