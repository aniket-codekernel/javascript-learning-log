//I. Testing: some, every
const ages = [18, 25, 40];
console.log(ages)
console.log(ages.some(a => a > 28)); //True at list one passes
console.log(ages.some(a => a>85));   //false
console.log(ages.some(a => a>=18));   //True

console.log(ages.every(a => a > 28)); //false every value should be passes
console.log(ages.every(a => a>85));   //false  its a fasle nothing is true
console.log(ages.every(a => a>=18));   //True

