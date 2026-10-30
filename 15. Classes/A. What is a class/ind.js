/*
A. What is a class
 * A class is a blueprint for creating objects. The objects have the same properties and methods.
 * Classes were added in ES6 (2015).
 * A class is syntactic sugar over constructor functions and prototypes. It is a cleaner way to write what you already learned.
 * Under the hood, typeof a class gives "function".
*/
class Person12 {}
console.log(typeof Person12); // "function"

//B. Basic syntax
class Person{
    constructor(username,age){   // runs automatically when you use `new`
        this.username=username   // property on each object
        this.age=age
    }

    method(){
        console.log(`This is my name ${this.username} and this is my age ${this.age}`)
    }
}

const p1 = new Person("Aniket","20")
console.log(p1)          //Person { username: 'Aniket', age: '20' }
console.log(p1.method())  //This is my name Aniket and this is my age 20

/*
 * class is the keyword, and the name starts with a capital letter by convention.
 * Methods are written without the function keyword.
 * There are no commas between methods. This is a common mistake.
*/