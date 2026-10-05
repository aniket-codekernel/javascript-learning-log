//J. Callback Functions
//1. What a callback function is
//A callback is a function you pass into another function, to be called later — either immediately after some work finishes, or after some delay/event occurs. You already met this idea in Sections E and F; this section gives it its proper name and goes deeper.
function greet(name) {
  console.log(`Hi, ${name}`);
}

function processUser(name, callback) {
  callback(name); // "calling back" the function we were given
}

processUser("Aniket", greet); // "Hi, Aniket"
//greet is the callback. processUser doesn't know what greet does — it just knows "call whatever function I was given, when the time is right."

//2. Why "callback"? Breaking down the name
//You hand a function over, and the other function "calls back" to you by running it — usually once its own job is done. That's the entire naming logic.

//3. Two types of callbacks: synchronous vs asynchronous
//This is the most important distinction in this section.

//Synchronous callback — runs immediately, in order
[1, 2, 3].forEach(function (n) {
  console.log(n);
});
console.log("done");

// Output:
// 1
// 2
// 3
// done

//Asynchronous callback — runs later, after something else finishes
console.log("start");

setTimeout(function () {
  console.log("callback ran");
}, 1000);

console.log("end");

// Output:
// start
// end
// callback ran   <- prints ~1 second later

/*
Summary
.A callback is a function passed into another function to be run later.
.Synchronous callbacks (.forEach, .map) run immediately, in order.
.Asynchronous callbacks (setTimeout, event listeners) run later, after a delay or event — JS doesn't wait for them.
.Callbacks can be named or written inline (anonymous/arrow), and may receive extra arguments like (value, index, array).
.Deep nesting of async callbacks causes "callback hell" — the motivation for Promises, coming later in your roadmap.
*/