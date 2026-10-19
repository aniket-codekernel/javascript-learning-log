
// //C. Rule
// //Rule 1: Default Binding (plain function call)
// //When you call a function normally, with nothing before the dot, this falls back to the default.
// /*
// function show() {
//   console.log(this);
// }


// show(); // plain call
// */
// /*
// ================================================================================================
//                          Value of `this` Inside a Function
// ================================================================================================

// | Mode                         | `this` inside the function              |
// |------------------------------|------------------------------------------|
// | Normal (sloppy) mode         | Global object (window / globalThis)     |
// | Strict mode ("use strict")   | undefined                                |

// ================================================================================================
// */
// "use strict";
// function show() {
//   console.log(this); // undefined
// }
// show();
// //Why strict mode does this: Pointing this at the global object by accident is dangerous, because you could change global variables without meaning to. Strict mode makes it undefined instead, so you get an error and notice the mistake.

// //Note: Classes and ES modules are always strict automatically.

// //Rule 2: Implicit Binding (method call)
// // When a function is called as a method of an object (object.method()), this is the object to the left of the dot.
// //Trick to remember: Look at the call line, not the function definition. Whatever is left of the dot at the call is this.
// const user = {
//   name: "Aniket",
//   greet() {
//     console.log("Hi, I am " + this.name);
//   }
// };

// user.greet(); // "Hi, I am Aniket"
// //   ↑ left of the dot = user, so this = user


// //Trick to remember: Look at the call line, not the function definition. Whatever is left of the dot at the call is this.
// //With nested objects, only the last object before the dot counts:

// const usera = {
//   name: "Aniket",
//   greet() {
//     name:"Dhok"
//     console.log("Hi, I am " + this.name);
//   }
// };

// usera.greet(); // "Hi, I am Aniket"
// //   ↑ left of the dot = user, so this = user

// const company = {
//   name: "TechCorp",
//   boss: {
//     name: "Ravi",
//     say() { console.log(this.name); }
//   }
// };

// company.boss.say(); // "Ravi" (the closest object to the dot is boss)

// const atui ={
//     skills:"webdev",
//     skills(){
//         skills:"DSA"
//         //console.log("This is a inside of a standard func plane skills",skills)    //ReferenceError: skills is not defined
//         console.log("This is a inside of a standard func .this skills",this.skills)
//         let skills=()=>{
//             skills:"AI/ML"
//             console.log("This is inside a arrow func plane skills",skills)
//             console.log("This is inside a arrow func .this skills",this.skills)
//         }
//         skills()
//     }
// }
// atui.skills()





let ui = {
    name: "aniket",

    anike: function () {
        name:"jukik"
        //console.log(name)   //ReferenceError: name is not defined
        console.log(this.name)
        let samole = () => {
            nme:"dhok"
            name:"fdgd"
            //console.log(name)   ////ReferenceError: name is not defined
            console.log(this.nme);  //undefened
            console.log(this.name)
        };

        samole();
    }
};
ui.anike()



//Your main confusion is about three different things in JavaScript:
/*
 1.Variable declaration — let, const, and var.
 2.Object properties — name, nme, etc.
 3.The this keyword — how JavaScript determines which object this refers to.
*/

//Let's understand each one using your code.

//1. First, understand your code
let uit = {
    name: "aniket",

    anike: function () {

        name: "jukik";

        // console.log(name); // ReferenceError
        console.log(this.name);

        let samole = () => {

            nme: "dhok";
            name: "fdgd";

            // console.log(name); // ReferenceError
            console.log(this.nme);
            console.log(this.name);
        };

        samole();
    }
};

uit.anike();

//Output:
/*
aniket
undefined
aniket
*/

//2. Why does console.log(name) give a ReferenceError?
//Consider this statement inside your method:
/*aniket: function () {
    name: "jukik";

    console.log(name);
}
*/
//You might think that name: "jukik" creates a variable named name.
//But it doesn't!
//A. name: "jukik" is not a variable declaration
//To declare a variable, you need to use let, const, or var.
let name = "jukik";

console.log(name); // jukik

//However:
name: "jukik";

console.log(name); // ReferenceError (if no binding for name exists)
