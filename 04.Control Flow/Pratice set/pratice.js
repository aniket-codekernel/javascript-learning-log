//Q1. Positive, Negative, or Zero
let a = -10;
if(a>0){
    console.log("Number is a positive",a)
}
else if(a<0){
    console.log("Number is a negative",a)
}
else{
    console.log("Number is zero",a)
}

//Q2. Even or Odd
let b = 10;
if(b/2==0){
    console.log("Number is a even:",b)
}
else if(b/2!=0){
    console.log("Number is a odd:",b)
}
else{
    console.log("Number is zero:",b)
}

//Q3. Voting Eligibility
let age=18;
if(age>=18){
    console.log("Eligible to vote")
}
else if(age<18){
    console.log("Not eligible to vote")
}
else {
    console.log("Number is not valiud")
}

//Q4. Largest of Two Numbers
let firstnum=10;
let secnum=20;
if (firstnum>secnum) {
    console.log("Biggest number is a firstnum:",firstnum)
}
else if(secnum>firstnum){
    console.log("Biggest number is a secnum:",secnum)
}
else if(secnum==firstnum){
    console.log("Number is a equal:",secnum,firstnum)
}
else{
    console.log("Given number is not valud")
}

//Q5. Day Using switch
let day;
switch (1) {
  case 1: {
     day = "Sunday";   // needs its own block
    break;
  }
  case 2: {
     day = "Monday";   // without braces, this throws SyntaxError
    break;
  }
  case 3:{
    day="Tuesday"
    break;
  }
  case 4:{
    day="wensday"
    break;
  }
  
  case 5:{
    day="Thursday"
    break;
  }
  case 6:{
    day="Friday"
    break;
  }
  case 7:{
    day = "Starday"
    break;
  }

}
console.log(day)

//Q6. Ternary Practice
const scor = 75;
const grad = scor <= 75 ? "Yes you can take a discout" : "No you can take a discout";

console.log(grad); 

//Q8. Largest of Three Numbers
let x = 58;
let y =60 ;
let z = 89;
let bigg;

if (x>y) {
    if(z>y){
        console.log("Y was on a third place:",y)
    }
} 
if (x>z) {
    console.log("X is the bigger number:",x)
}else if(z>x){
    console.log("Z is the bigger number:",z)
}


//Q18. ATM Withdrawal System
let card = "Valid";
let pin=859;
let balance=5000;
let userbal=250;

function process (){
  if(card=="Valid"){
    console.log("Card is not valid")
    if(pin==859){
        console.log("Pin is correct")
      if(userbal<balance){
        console.log("Withdrawal Suceffuly")
      }
    }
  }
}
process()


//Q20 Mini Control-Flow Challenge
let agew = 20;
let marks = 78;
let entranceScore = 82;
let interviewPassed = true;

function adm (){
  if(agem>=20){
    console.log("Your age is perfect")
    if(marks>=50){
        console.log("Marks are also good")
      if(entranceScore>=75){
        console.log("EntranceScore is also good")
        if (interviewPassed == true) {
          console.log("Admission Approved")
        }
      }
    }
  }
}
adm()
