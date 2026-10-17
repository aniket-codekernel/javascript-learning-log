//F. Searching
const nums = [5, 12, 8, 130, 44];
console.log(nums)
console.log(nums.indexOf(8))  //2 means 0,1,2
console.log(nums.indexOf())    //-1 if its a empty it will give a -1 value
console.log(nums.indexOf(89))  //-1 if the value is not present it will give a -1
console.log(nums.includes(130))  //true its check a value is present or not

const arr2=[10,12,6,130,20]
console.log(arr2)

console.log(arr2.find(n => n < 13))  //It will shows first match or undefined
console.log(arr2.find(n => n > 13))  //It will shows first match or undefined
console.log(arr2.find(n => n > 1389))  //It will shows first match or undefined

console.log(arr2.findIndex(n => n < 13));   //It will find index number or give -1
console.log(arr2.findIndex(n => n > 13));  //It will find index number or give -1
console.log(arr2.findIndex(n => n > 1389));   //It will find index number or give -1

console.log(arr2.findLast(n => n < 13));    //It shows from last value match or undefined
console.log(arr2.findLast(n => n > 13));    //It shows from last value match or undefined
console.log(arr2.findLast(n => n > 1389));  //It shows from last value match or undefined


console.log(arr2.findLastIndex(n => n < 13))   //It will show a last index value or undefined
console.log(arr2.findLastIndex(n => n > 13))   //It will show a last index value or undefined
console.log(arr2.findLastIndex(n => n > 1389))   //It will show a last index value or undefined

/*
===============================================================
              Array Search Methods
===============================================================

| Need                            | Use          |
|---------------------------------|--------------|
| Is this exact value present?    | `includes`   |
| Where is this exact value?      | `indexOf`    |
| First item matching a condition | `find`       |
| Position of first match         | `findIndex`  |

===============================================================
*/