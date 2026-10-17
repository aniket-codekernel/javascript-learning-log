//E. Adding, removing and slicing in the middle
//splice(start, deleteCount, ...items) (mutates)
//its a mutates its change a original one 
const a = [1, 2, 3, 4, 5];
console.log(a.splice(1, 2)); //[2,3];
console.log(a);  //[1,4,5];
console.log(a.splice(1, 0, "x", "y"));  //[x,y];
console.log(a);  //[1,x,y,4,5]
console.log(a.splice(1, 1, "Z"));  //x it will give a value that will replace value
console.log(a);  //[1,z,y,4,5]

//slice(start, end) (does NOT mutate)

//What does "mutate" mean?
// Mutate = change the original.
//so slice(start,end); its does mutate
//end is excluded.                         //In that case of slice we put start index value and end index value

const a1 = [10, 20, 30, 40, 50];

console.log(a1);  //[10,20,30,40,50]
console.log(a1.slice(1, 3));   //[20,30,40]     
console.log(a1.slice(2));   //[30,40,50]    //If we did not give a end index value it will goes toword and end value
console.log(a1);  //[10,20]
console.log(a1.slice(-2));    //[40,50]
console.log(a1)
console.log(a1.slice());   //[10,20,30,40,50]    //if we did not give a start and end value its select all array
console.log(a1);     //[10,20,30,40,50]

//concat
const b =[10,20]
const c =[30,40]
const d =[50,60]
let e = b.concat(c,d) //[ 10, 20, 30, 40, 50, 60 ]
let f = b.concat(c,[d])  //[ 10, 20, [ 30, 40 ], 50, 60 ]
let h = b.concat([c],[d]) //[ 10, 20, [ 30, 40 ], [ 50, 60 ] ]
let i = [b].concat([c],[d])  //[ [ 10, 20 ], [ 30, 40 ], [ 50, 60 ] ]
console.log(e)
console.log(f)
console.log(h)
console.log(i)

//Memory trick: slice = "safe", it leaves the original alone. splice = "surgery", it changes the original.