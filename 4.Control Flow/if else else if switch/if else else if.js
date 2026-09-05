//if else
if (true) {
    console.log("Given Statment is a true")
} else {
    console.log("Given Stataement is a false")
}


if (false) {
    console.log("Given Statment is a true")
} else {
    console.log("Given Stataement is a false")
}


//If else else if
let value = 50
if (value > 35) {
    console.log("D");
} else if (value > 50) {
    console.log("C");
} else if (value > 75) {
    console.log("B");
} else if (value > 95) {
    console.log("A");
}



//ADVANCED
//Block scoping trap: let/const declared inside an if block are not visible outside it — but this differs from var, which leaks to the function/global scope.
if (true) {
    let a = 20;
    var b = 30;
}
//console.log(a); ReferenceError: a is not defined
console.log(b);

//Dangling else problem: JS resolves an else to the nearest unmatched if, not the outer one — always use braces to avoid ambiguity.
/*if (a)
   if (b)
    console.log("both true");
   else
  console.log("a is false?"); // <-- looks like it belongs to the outer if */

let a = 10;
let b = 20;
if (a==10) {
    if (b==20) {
        console.log("both true");
    } else {
        console.log("a is false?"); // actually pairs with if (b)!
    }
}

