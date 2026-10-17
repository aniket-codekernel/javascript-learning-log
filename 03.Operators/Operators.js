//  EXPRESSIONS=An expressions is any valid sets of literals,variables,opertors and funcations that evalutes to a value 
// Opercations in JS 
// 1.Arithmetic Opertors
console.log("1.Arithmetic Opertors");
//   . (+)Addition
console.log("(+)Addition");
let a = 5;
let b = 5;
console.log(a + b); //10

//  . (-)Subtraction
console.log("(-)Subtraction");
let c = 9;
let d = 5;
console.log(c - d);  // 4

//  . (*)Multiplaction
console.log("(*)Multiplaction");
let e = 5;
let f = 5;
console.log(e * f);  //25


//   . (**)Exponentiation
console.log("(**)Exponentiation");
let g = 2;
let h = 3;
console.log(h ** g);   //9

//   . (/)Division
console.log("(/)Division");
let i = 5;
let j = 5;
console.log(i / j); //1

//   . (%)Modules 
console.log("(%)Modules ");
let k = 15;
let l = 4;
console.log(k % l); //3

//    . (++)Increment
console.log("(v++)Increment");
let v = 8;
console.log(v++); //8
console.log(v);  //9
console.log("(++v)Increment");
let w = 10;
console.log(++w); //11
console.log(w); //11

//    . (--)Decrement
console.log("(x--)Decrement");
let x = 6;
console.log(x--); //6
console.log(x);  //5
console.log("(--x)Decrement");
let y = 5;
console.log(--y);  //4
console.log(y);     //4


//Advanced points of Arithmetic operators
//+ is special — if either operand is a string, JS converts the other to a string and concatenates:
console.log(5 + "5");        // "55"  (number → string)
console.log(5 + 3 + "5");    //"85" (left to right: 5+3=8, then 8+"5"="85")
console.log("5" + 3 + 5);    //"535" (left to right, string wins immediately)

//All other arithmetic operators (-, *, /, %) force numeric coercion, even on strings:
console.log("6" - 2)     // 4  (string "6" becomes number 6)
console.log("6" * "2")   // 12
console.log("10" / "2"); //5


//% works with negative numbers using the sign of the dividend (left operand):
console.log(-7 % 3);     // -1  (not 2!)
console.log(7 % -3);   //  1

//** is right-associative (unlike most operators):
console.log(2 ** 3 ** 2);  //// 512, NOT 64
                           // evaluated as 2 ** (3 ** 2) = 2 ** 9 = 512 

//Dividing by zero doesn't throw it returns infinity,-infinity or NaN
console.log(5/0)  //infinity
console.log(-5/0) //-infinity
console.log(0/0) //NaN                           



// 2.Assignment  Operators
console.log("2.Assignment  Operators");
//   . (=) Equal
console.log("(=) Equal");
let m = 5;
console.log(m); //5
m = 99;
console.log(m);  //99

//   . (+=)pluse equal
console.log("(+=)pluse equal");
let n = 36;
n += 4;
console.log(n); //40 


//   . (-=)SubtractionsEqualTo 
console.log("(-=)SubtractionsEqualTo");
let o = 88;
o -= 8;
console.log(o); //80

//   . (*=)MulticationEqual
console.log("(*=)MulticationEqual");
let p = 9;
p *= 9;
console.log(p); //81

//    . (/=)DivisonEqual
console.log("(/=)DivisonEqual");
let q = 7;
q /= 2;
console.log(q); //3.5

//   . (%=)ModoulsEqual
console.log("(/=)DivisonEqual");
let r = 7;
r %= 9;
console.log(r); //7

//   . (**=)ExponentiationEqual
console.log("(**=)ExponentiationEqual");
let s = 5;
s **= 5;
console.log(s); //3125


//Advanced Assiginment Operstors
//  ||=     "If the current value is falsy (empty, zero, null, etc.), replace it. Otherwise, leave it alone."

 let count = 0;
 count ||= 10;
 console.log(count); // 10 — because 0 is falsy, so it got replaced

//  ??=    "If the current value is null or undefined ONLY, replace it. Anything else (even 0 or empty string) stays untouched." 
let user = null;
user ??= "Guest";
console.log(user); // "Guest" — was null, so got replaced

//  &&=    "If the current value is truthy, replace it. If it's falsy, leave it alone."
let ani = 1;
ani &&= "Aniket"
console.log(ani);   //"Aniket" - only truthy value get change 







// 3.Comparison Operators 
console.log("3.Comparison Operators");
//   . (==)EqualTo
console.log("(==)EqualTo");
console.log(2 == 3); //false

//   . (!=)NotEqualTo
console.log("(!=)NotEqualTo");
console.log(3 != 3);    //false
console.log("10" == 10);    //true
console.log(true == 1);    //true
console.log(null == 0);   //false

//   . (===)EqualTO AND TypeAlso
console.log("(===)EqualTO AND TypeAlso");
console.log("55" === true); //false
console.log(55 === 55);  //true 

//    . (!==)NotEqualValue OR NotEqualType 
console.log("(!==)NotEqualValue OR NotEqualType");
console.log(66 !== 55);  //true
console.log("anik" !== 88);//true

//   . (>)GreaterThan 
console.log("(>)GreaterThan ");
console.log(2 > 3);  //false
console.log(3 > 2); //true

//   . (<)LessThan
console.log("(<)LessThan");
console.log(9 < 10); //true
console.log(10 < 9);   //false

//   . (>=)GreaterThanEqualTo
console.log(">=)GreaterThanEqualTo");
console.log(9 >= 8); //true
console.log(8 >= 9); //false
console.log(8 >= 8); //true

//   . (<=)LessThanEqualTo
console.log("(<=)LessThanEqualTo");
console.log(9 <= 8);  //true
console.log(7 <= 8);  //false
console.log(10 <= 10);   //true 



//Advanced Comparsion Operatiors
//=== Checks types AND Value
//== Check only value
null == undefined   // true  (special case, only true with each other)
null === undefined  // false

NaN == NaN           // false (NaN never equals anything, even itself)
0 == "0"             // true  (string → number)
0 == ""               // true  (empty string → 0)
0 == []               // true  ([] → "" → 0)
"" == []              // true
false == "0"          // true
false == []           // true
false == "false"      // FALSE! ("false" → NaN, false → 0, 0 !== NaN)

"10" > "9"   // false! Compared as STRINGS lexicographically ("1" < "9")
10 > "9"     // true — one operand is a number, so both become numbers

//Abstract Equality Comparison Algorithm

//1. Same type → identical behavior
//If both operands are already the same type (both numbers, both strings, both booleans, etc.), == and === behave exactly the same. No coercion happens at all
5 == 5      // true — same type, direct comparison
5 === 5     // true — same result
"a" == "a"  // true
"a" === "a" // true

//2.Different types → == tries to coerce
//Only when the types differ does == step in and convert one or both values before comparing.
5 == "5"    // true — string coerced to number, then compared
5 === "5"   // false — different types, no coercion, straight false

//3. === never coerces, period
//If types differ, === returns false immediately — it doesn't even try to convert anything.
0 === false  // false — number vs boolean, no coercion attempted
null === undefined // false — different types

//4. So the "coercion" only exists as a bridge between mismatched types
//Think of == as: "Are these the same type? If yes, compare directly (like ===). If no, convert one side to match the other's type, then compare."

//5. Common coercion pairs to know
number == string //→ string converted to number
boolean == anything// → boolean converted to number first (true → 1, false → 0)
null == undefined //→ true (special case, they only equal each other and nothing else)
object == primitive// → object converted via toString()/valueOf()





// 4.Logical Operators 
console.log("4.Logical Operators");
//   . (&&)LogicalAnd 
console.log("(&&)LogicalAnd");
let t = 6;
console.log(t < 7 && t == 6); //true 

//   . (||)LogicalOr
console.log("(||)LogicalOr");
let u = 5;
console.log(u > 4 || u > 6);  //true

//    . (!)LogicalNot 
console.log("(!)LogicalNot");
console.log(!true); //false
console.log(!false); //true



//4. Logical Operators
console.log(0 && "hello");     // 0        (stops at first falsy)
console.log(1 && "hello");     // "hello"  (both truthy, returns last)
console.log(null || "default"); // "default"
console.log("first" || "second"); // "first" (stops at first truthy)
console.log(!!"hello"); 



//  .Comments in JavaScript
//Comments are notes written in your code that are ignored by JavaScript when the code runs.           
console.log("1. Single-Line Comment");
//Use // for one-line comments.

console.log("2. Multi-Line Comment");
//Use /* ... */ for longer or multi-line comments.
