const { use } = require("react");

switch ("pear") {
  case "apple":
  case "pear":        // fall-through intentionally grouping cases
    console.log("Pome fruit");
    break;
  default:
    console.log("Unknown");
}

let score = 90;
let grade;
switch (true) {
  case score >= 90: grade = "A"; break;
  case score >= 75: grade = "B"; break;
  default: grade = "F";
}
console.log(grade)

let val;
switch (1) {
  case 1: {
     val = "one";   // needs its own block
    break;
  }
  case 2: {
     val = "two";   // without braces, this throws SyntaxError
    break;
  }
}
console.log(val)


//c.Nested conditions
//Neseted bad
function process (user){
  if(user){
    if(User.Activation){
      if(user.haspermission){
        return "allowed"
      }
    }
  }
}

//Guard clause (preperaend)
function process (user){
  if (! user) return "no user";
  if (! user.isActive) return "inactive";
  if(!user.haspermission) return "nopermission"
  return "allowed"
}

//D.Ternary operator
const scor = 75;
const grad = scor >= 90 ? "A" : scor >= 75 ? "B" : "F";

console.log(grad); // "B"


//F 
for(let i=0; i<3;i++){
  for(let j=0; j<3; j++){
    if(j===i) {
      console.log(i,j)
    }

  }
}