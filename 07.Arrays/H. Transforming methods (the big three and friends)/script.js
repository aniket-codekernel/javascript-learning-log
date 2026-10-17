//H. Transforming methods (the "big three" and friends)
//All of these return new values and do not mutate the original.

//map: transform every item (same length out)
const a = [2,3,4,5];
console.log(a);
console.log(a.map(a=>a+1));   //To do a mathimatical operation
console.log(a.map(a=>a>3))    //[ false, false, true, true ]
console.log(a.map(b=> b%2==0)) //[ true, false, true, false ]

//filter: keep items that pass a test
console.log(a.filter(b=> b%2==0))  //[ 2, 4 ]
console.log(a.filter(a=>a>3))       //[4,5]

//reduce: boil everything down to ONE value
console.log(a.reduce((ac,v)=>ac + v,0))  //14
console.log(a.reduce((ac,v)=>ac+v,3))  //14+3

const b=["A","B","C"]
console.log(b)
console.log(b.reduce((ac,v)=>ac + v,0))  //0ABC

const c = [1,"a",2,3,"b","c"]
console.log(c)
console.log(c.reduce((ac,v)=>ac + v,0)) //1a23bc

//flat and flatMap
const d =[2,3,4]
const e =[7,8,9]
const f =["a","b","c"]
console.log(d)
console.log(e)
console.log(f)

console.log([[d],[e],[f]].flat())  //[ [ 2, 3, 4 ], [ 7, 8, 9 ], [ 'a', 'b', 'c' ] ]
console.log([[d],[e,[f]]].flat())   //[ [ 2, 3, 4 ], [ 7, 8, 9 ], [ [ 'a', 'b', 'c' ] ] ]
console.log(d,e,f.flat())          //[ 2, 3, 4 ] [ 7, 8, 9 ] [ 'a', 'b', 'c' ]
console.log([d],[[e]],[f].flat())
console.log([d],[e,[f]].flat(Infinity))   //[ [ 2, 3, 4 ] ] [ 7, 8, 9, 'a', 'b', 'c' ]
console.log([d,[e,[f]]].flat(Infinity))  /*[
                                             2, 3,   4,   7,   8,
                                             9, 'a', 'b', 'c'
                                            ]*/

//Chaining
const total = [1, 2, 3, 4, 5]
console.log(total.filter(n => n % 2 === 1))  //[ 1, 3, 5 ]
console.log(total.map(n => n * 10))    //[ 10, 20, 30, 40, 50 ]
console.log(total.reduce((a, n) => a + n, 0))  //15