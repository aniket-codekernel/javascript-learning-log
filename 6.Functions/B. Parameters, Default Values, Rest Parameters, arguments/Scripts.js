//B. Parameters, Default Values, Rest Parameters, arguments
//1. Parameters (basic)
function greet(name, greeting) {
    console.log(`${greeting}, ${name}`);
}

greet("Aniket",); // "undefined, Aniket" — missing arg becomes undefined
greet("Dhok", "Aniket"); // Dhok aniket => If the value is not present it will give us undefined

// function noone(){
//     return `${greeting}, "HI I AM ANIKET"`;
// };
// noone("NOARGUMENT");          //ReferenceError: greeting is not defined

function nooe(){
    console.log("Hi i am aniket")
};
nooe("NOARGUMENT");   //It will just ingoner that argument

//2. Default Parameters
function greet(name, greeting = "Hello") {
    console.log(`${name}, ${greeting}`);
}

greet("Aniket");           // "Hello, Aniket"
greet("Aniket", "Hey");    // Aniket, Hey"
greet("Aniket", undefined);// "Aniket, undefined" — undefined triggers the default
greet("Aniket", null);     // "Aniket, null"  — null does NOT trigger default
greet();

function calcTotal(price, tax = price + 1) {
    console.log(price + tax);
}
calcTotal(1) //3
calcTotal(1, 2) //3    //It we dont give a tax it will do it addition of a price + 1

//3. Rest Parameters (...)
function sum(...numbers) {
    console.log(numbers)
}

sum(1, 2, 3, 4); 


function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

sum(1, 2, 3, 4); //10

function example(first, ...rest) {
  console.log(first); // first value
  console.log(rest);  // array of everything else
}
example(1, 2, 3, 4); // 1, [2, 3, 4]

//4. The arguments Object
function example() {
  console.log(arguments); // Arguments(3) [1, 2, 3]
}
example(1, 2, 3);

// Array-like, not a real array — has .length and indices, but no .map(), .filter(), .reduce() directly (you'd need Array.from(arguments) or spread [...arguments] first).


/*
===========================================================
            arguments vs Rest Parameters
===========================================================

|                                   | arguments              | Rest params (...args)              |
|-----------------------------------|------------------------|------------------------------------|
| Type                              | Array-like object      | Real array                         |
| Works in arrow functions?         | No                     | Yes                                |
| Array methods available directly? | No                     | Yes                                |
| Captures ALL args or just extras? | All args always        | Only the "rest" after named params |

===========================================================
*/






