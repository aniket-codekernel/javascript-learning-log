// E. Lexical Scope (Static Map)

/*
Lexical scope means scope is determined by where the code
is written, not by where a function is called.
*/

let who = "global";

function outer() {
    let who = "outer";

    function inner() {
        console.log("Hi", who); // Looks at where inner was written
    }

    inner();
}

function other() {
    let who = "anik";

    outer(); // Calling from here changes nothing
}

other(); // Hi outer

/*
inner was written inside outer, so it can access outer's
variables through lexical scope.

It does not matter that outer() was called by other().
The lexical scope is determined by the code's structure.
*/