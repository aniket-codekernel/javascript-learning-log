//M. Reference vs Value (Very Important)
//Primitives (numbers, strings) are copied by value. Objects are copied by reference (the address).
const a ={score:10};
console.log(a)      //{ score: 10 }

const b =a;         //b points to the SAME object
b.score=99;

console.log(a.score)   // 99 (a changed to)


//Shallow vs Deep Copy
                   //Shallow
const original = {name:"A",address:{city:"nagpur"}}
console.log(original)    //{ name: 'A', address: { city: 'nagpur' } }

const Shallow ={...original};
console.log(Shallow)      //{ name: 'A', address: { city: 'nagpur' } }

Shallow.address.city="pune"
console.log(Shallow)     //{ name: 'A', address: { city: 'pune' } }  shallow change a value from nagpur to pune
console.log(original)     //{ name: 'A', address: { city: 'pune' } }   see we chage in a shallow object and also become change in a original object

                      //Deep copy
const deep ={laptop:"slim 3",skill:{lang:"js"}}
console.log(deep)    //{ laptop: 'slim 3', skill: { lang: 'js' } }

const deep1 = structuredClone(deep)    //full independent copy
console.log(deep1);    //{ laptop: 'slim 3', skill: { lang: 'js' } }
deep1.skill.lang="AI/ML"
console.log(deep)       //{ laptop: 'slim 3', skill: { lang: 'js' } }      //see there is a no chage i value that called a deep copy
console.log(deep1)     //{ laptop: 'slim 3', skill: { lang: 'AI/ML' } }    

/*
===============================================================
                 Shallow Copy vs Deep Copy
===============================================================

| Copy type                | What it copies | Nested objects          |
|--------------------------|----------------|-------------------------|
| Shallow (`{...obj}`)     | Top level only | Shared (same reference) |
| Deep (`structuredClone`) | Everything     | Fully separate          |

===============================================================
*/
//JSON.parse(JSON.stringify(obj)) also deep-copies but loses functions, undefined, and Dates.

