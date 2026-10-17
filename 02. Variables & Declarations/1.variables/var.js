// 1. What it is
var name = "Aniket";

// 2.Function-Scoped (not block-scoped)
function test() {
    if (true) {
        var a = "hello";
    }
    console.log(a); // "hello" — accessible outside the if block
}
// console.log(a)  //ReferenceError: a is not defined
test();


if (true) {
    var b = "leaked";
}
console.log("Outside", b); // "leaked" — accessible globally too

if (true) {
    console.log("Inside", b);
}


//3. Hoisting Behavior
console.log(x); // undefined (not an error!)
var x = 10;
console.log(x); // 10

    //Behind the scenes, JS treats it like this:
    var x;          // hoisted to top, initialized as undefined
    console.log(x); // undefined
    x = 10;
    console.log(x); // 10


// 4.No Temporal Dead Zone (TDZ)
console.log(x); // undefined — allowed
var x = 5;

// console.log(y); // ❌ ReferenceError — TDZ
let y = 5;   


//5. Redeclaration Allowed
var name = "Aniket";
var name = "Kumar"; // no error, totally fine
console.log(name); // "Kumar"

//6. Reassignment Allowed
var count = 1;
count = 2;
count = 3; // all fine

// Loop Behaviors (classic gotcha)
for(var i=0; i<3; i++){
    setTimeout(()=>console.log(i),100)
} //output:3,3,3

//var is function scopped it doesnot create a new biniding per loop iteration