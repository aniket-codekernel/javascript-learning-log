//This keywors special keyword hai , kyuki jause ki baaki saare keyword ki value ya unka nature same rehta hai this ki value ya nature badak jaata hai is baat se ki aap usey kaha youse kar raha ho
  

//global scope
console.log(this)  //Windows
// windows is a suprean leader

//function
function ab() {
    console.log(this)
}
ab()
//funcrion give windows

//method
let obj={
    name:"anuk",
    age:98,
    anike:function() {
        console.log(this)      //in a method it will become object
        console.log(this.name)   //anuk
    }
}
obj.anike()    
//the simple function present inside a object called as method


//Arror function and inside a method function new function

let opi = {
    skills:"AI/ML",
    pakage:"5cr",
    up: function() {
        console.log(this);
        console.log(this.skills) 
    }
};
opi.up()
//We can add a this normal function but we can not add arrow function in this because arrow function did not have .this method

/*
let rti = {
    ddds:"A/=L",
    pae:" sddr",
    up: ()=> {
        console.log(this);
        console.log(this.skills) 
    }
};
rti.up()
*/
//It will give undefined beccause arrow function did not have this method it can borow it but there is not present any standard function


let uij={
    name:"asiuuyuk",
    agdfdf:sfffds,
    anike:function() {
        function samole(){
            console.log(this.name)
            console.log(globalThis)
        }
        anike()
    }
}
uij.anike()   

//Why can you put a standard function inside another standard function?
//JavaScript allows you to define a function inside another function. This is called a nested function.

//For example:
function outer() {
    function inner() {
        console.log("I am the inner function");
    }

    inner();
}

outer();
//I am the inner function

/*
The execution happens in this order:

 1.outer() is called.
 2.JavaScript enters the outer function.
 3.inner() is defined.
 4.inner() is called.
 5.The message is printed.
*/
//Important: Defining a function does not execute it. You must call it separately.

//3. Why does this.name return undefined?
// There are two different function calls here.
//Function 1: uij.anike()
//uij.anike();
//Because you call anike() through the uij object, this refers to uij inside anike().

//Therefore:
//this.name
//asiuuyuk

//Function 2: samole()
//samole();
//Here, you call samole() as a regular function, not as a method of uij.
/*
In a regular function call:

In a normal browser script, this generally refers to globalThis when the function is non-strict.
In strict mode, this is undefined.

Therefore, samole() does not automatically inherit the this value from anike().

Remember: A regular nested function does not inherit its parent's this value.
*/



//4. How can you access uij.name inside the nested function?
//Method 1: Use an arrow function
let ui = {
    name: "asiuuyuk",

    anike: function () {
        let samole = () => {
            console.log(this.name);
        };

        samole();
    }
};

ui.anike();
/*
Why does this work?

Arrow functions do not have their own this. Instead, they inherit this from their surrounding scope.

Here, the surrounding anike() function has this === uij.

Therefore, the arrow function also accesses uij through this.
*/

/*
global= windows
function = windows
method with es5 func = object
method with es6 arroe = winodws
es5 inside es5 methos = windows
arrow inside es5 methods - object
event handelr = object
*/







//manual binding:bind,call,apply

//function ko call karte waqt qqp set kr skte ho ki uski this ki value kya hogi

//call
let odsj ={
    name:"aniket"
}

function ipii() {
    console.log(this)
}
ipii.call(odsj)

//

function ipii(a,b,c) {
    console.log(this, a,b,c)
}
ipii.call(odsj, 1,5,6)


//apply  //only 2 parementrs
function ipii(a,b,c) {
    console.log(this, a,b,c)
}
ipii.apply(odsj, [1,5,6])


//bind   //its create a new function that sore in it assccssc 
function ipii(a,b,c) {
    console.log(this, a,b,c)
}
let assccsc= ipii.bind(odsj, 1,5,6)
