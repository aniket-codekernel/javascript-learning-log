let a = prompt("Enter a first number")
console.log(a)

let b = prompt("Enter a sec number")
console.log(b)

if (isNaN(a) || isNaN(b) ) {
    throw SyntaxError("This is not allowed")
}

let sum = Number(a) + Number(b);
console.log("This is a sum:",sum)

let c = 56

function fina() {
try {
    console.log(Number(a) + Number(c))
    return
} catch (error) {
    console.log("There is some problem")
    return

}finally{      //That finally runs all in a case if there is error also no error also then its use in function
    console.log("Hi i am finally")     
}
}

fina()


