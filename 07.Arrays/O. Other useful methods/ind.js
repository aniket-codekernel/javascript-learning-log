//O. Other useful methods
let a=[1,2,3]
console.log(a)  //[ 1, 2, 3 ]
console.log(a.fill(7))  //[ 7, 7, 7 ]

//What is copyWithin(0, 3)?
//copyWithin copies a part of the array and pastes it onto another part of the same array. It's a rarely used method, so don't worry if it feels strange.
//[1, 2, 3, 4, 5].copyWithin(0, 3);   // [4, 5, 3, 4, 5]

//A. The two numbers
// array.copyWithin(target, start)

//B. Step by step
/*
index:   0   1   2   3   4
       [ 1,  2,  3,  4,  5 ]
        */
       /**
        Step 1: Copy. Start at index 3 and copy to the end. That copies 4, 5.

        Step 2: Paste. Put 4, 5 starting at index 0, overwriting what's there.
        index:   0   1   2   3   4
        [ 4,  5,  3,  4,  5 ]
         ^   ^
         pasted over 1 and 2
        */

         //The result is [4, 5, 3, 4, 5]. The 1 and 2 were overwritten, and the 3 was untouched because only 2 items were copied.

         //C. Three things to remember
         /**
          * It mutates the original array (you learned this word earlier).
          * The length never changes. It only overwrites, and it never adds or removes items.
          * It's copy-paste, not cut-paste. The original 4, 5 are still at the end.
        */

//Array.isArray([])
console.log(Array.isArray([])) //arrays

console.log([1, 2, 3].keys());
//What is [1, 2, 3].keys()?
//keys() gives you the indexes of the array (0, 1, 2), not the values. It does not return a normal array. It returns an iterator, which is like a "stream" of items you can loop over one at a time.

let e = [1,2,3,4]
console.log(e)
console.log(e.keys())

// B. Way 1: Loop with for...of
for (const i of e.keys()) {
  console.log(i);
}
//0
//1
//2
//3

for (const i of e.values()) {
  console.log(i);
}
//1
//2
//3
//4


