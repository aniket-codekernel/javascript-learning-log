// // //Classes in ES6

// // class ani{
// //     constructor(username,email,password){
// //         this.username=username
// //         this.email=email
// //         this.password=password
// //     }
// // }
// // console.log(ani)            //[class ani]
// // console.log(typeof ani)     //Function

// // const check = new ani("Aniket","dhokaniket049@gmail.com","321")
// // console.log(check)
// // /*
// // ani {
// //   username: 'Aniket',
// //   email: 'dhokaniket049@gmail.com',
// //   password: '321'
// // }
// // */
// // console.log(typeof check)   //object

// // const missingone = new ani("Aniket","Dhokaniket049@gmail.com")
// // console.log(missingone)
// // /*
// // ani {
// //   username: 'Aniket',
// //   email: 'Dhokaniket049@gmail.com',
// //   password: undefined
// // }
// // */

// // const empty = new ani("Aniket","Dhokaniket049@gmail.com","")
// // console.log(empty)
// // /*
// // ani {
// //   username: 'Aniket',
// //   email: 'Dhokaniket049@gmail.com',
// //   password: ''
// // }
// // */






// // class meth{
// //     constructor(name,skills,pakage){
// //         this.na=name
// //         this.ski=skills
// //         this.pak=pakage
// //     }

// //     method(){
// //         return `${this.pak}1579`
// //     }
// //     upper(){
// //         return `${this.na.toUpperCase()}`
// //     }
// // }
// // const sec= new meth("Aniket","AI/ML","1.5CR")
// // console.log(sec) //meth { na: 'Aniket', ski: 'AI/ML', pak: '1.5CR' }
// // console.log(sec.method())   //1.5CR1579
// // console.log(sec.upper())    //ANIKET
                            


// //==============================================================================================================================================================================================================================



// class change{
//     constructor(username){
//         this.username=username
//     }

//     method(){
//         console.log(`This is a name:${this.username}`)
//     }
// }

// const theo=new change("Aniket");
// console.log(theo)   //change { name: 'Aniket' }
// console.log(theo.method())


// // class SDE extends change{

// // }
// // const th = new SDE("Sanjay")
// // console.log(th)     //SDE { name: 'Sanjay' }


// // console.log(change === SDE)   //false
// // //Extends is like a __proto__ its like function its linke a function to function 

// /*
// const a ={
//     name:"Aniket",
//     role:"SDE"
// }

// const b = {
//     __proto__: a
// }
// console.log(a === b)   //false
// //console.log(b instanceof a)   // But a is an ordinary object, not a constructor function.


// console.log(Object.getPrototypeOf(b) === a)  //true
// */


// class AIML extends change{
//     constructor(username,email,password){
//         super(username)   //What does the super() world do its check which function is link its link change and after that it will go in change after that it will take name
//         this.email=email 
//         this.password=password
//     }

//     pakage(){
//         console.log(`New pakage of AI/ML: ${this.username}`)
//     }
// }

// const rtds = new AIML("ssaacaskjdkas","dhokaniket049@gmail.com","12456789")
// console.log(rtds.pakage()) //New pakage of AI/ML: ssaacaskjdkas
// console.log(rtds.method()) //ssaacaskjdkas












// class Parent {
//     constructor(name) {
//         this.name = name;
//     }

//     show() {
//         console.log("Hi this is inside a Parent:",this.name);
//     }
// }

// class Child extends Parent {
//     constructor(name, age) {
//         super(name);
//         this.age = age;
//     }
// }

// const user = new Child("Aniket", 21);

// console.log(user.name);
// console.log(user.age);
// user.show();


//====================================================================================================================================================================================================



class namet{
    constructor(username){
        this.username=username
    }

    logme(){
        console.log(`Username:${this.username}`)
    }

    createid(){    //static will not give access because some thing is privite
        return `123${this.username}`
    }

    static bu(){
        return `89784551212`
    }
}

const uyt = new namet("aniket")
// console.log(uyt.createid())
//console.log(uyt.hbyujbbu())  //TypeError: uyt.hbyujbbu is not a function


class teacher extends namet{
    constructor(username,email){
        super(username)
        this.email=email
    }
}

const andr = new teacher("sadfsfrdc","dhokaniket049@gmail.com")
console.log(andr.createid())
//console.log(andr.bu())  //TypeError: andr.bu is not a function because of stasic















































