//K. Destructuring
const user = { name: "Aniket", age: 20, city: "Nagpur" };

const { name, age } = user;                // name = "Aniket", age = 20
const { name: userName } = user;           // rename: userName = "Aniket"
const { country = "India" } = user;        // default value if missing
const { address: { pin } = {} } = user;    // nested, with safe default

// Very common in function parameters
function show({ name, age }) {
  console.log(name, age);
}
show(user);

const ani={jon:"ani",country:"ind",address:{state:"mah",cdcd:"aiket"}};
console.log(ani)
/*
{
  jon: 'ani',
  country: 'ind',
  address: { state: 'mah', cdcd: 'aiket' }
}
*/

function anik(jon,address,country){
    console.log(jon,address,country);
}
anik(ani);
