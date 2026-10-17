//C. Accessing elements and length
const fruits = ["apple", "banana", "cherry"];

console.log(fruits.length) //3 it will 3 but start from a 0
console.log(fruits[0]); // apple 
console.log(fruits[1]); // banana
console.log(fruits[2]); // cherry
console.log(fruits[3]); // undefined
console.log(fruits[fruits.length - 1]) //cherry (last element, old way)
console.log(fruits.at(-1));//// "cherry" (modern way, supports negatives)
console.log(fruits.at(-2));//"banana"

/*
length facts:

.It is always highest index + 1.
.You can change it, and that changes the array:
*/

const array=[1,2,3,4];
console.log(array);   //[ 1, 2, 3, 4 ]
console.log(array.length=2)  //2
console.log(array)    //[ 1, 2 ] (data is lost!)
console.log(array.length=0); //0
console.log(array); //[] empties the array
const aray=[1,2,3,4,5]
console.log(aray)  //[ 1, 2, 3, 4, 5 ]
console.log(aray[2]="x")  //x
console.log(aray)   //[ 1, 2, 'x', 4, 5,] it will remove that value and put new one