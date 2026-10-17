//S. Useful Built-in Object Methods
/*
================================================================================================================
                                         Object Methods
================================================================================================================

| Method                          | What it does                                   |
|---------------------------------|------------------------------------------------|
| Object.keys(obj)                | Array of keys                                  |
| Object.values(obj)              | Array of values                                |
| Object.entries(obj)             | Array of [key, value] pairs                    |
| Object.fromEntries(arr)          | Turns [key, value] pairs back into an object   |
| Object.assign(target, ...src)   | Copies properties into target (mutates it)     |
| Object.hasOwn(obj, key)         | Checks own property                            |
| Object.freeze() / Object.seal() | Locks the object                               |
| Object.create(proto)            | New object with the given prototype            |
| Object.getPrototypeOf(obj)      | Gets the prototype                             |

================================================================================================================
*/

const a={name:"aniket",id:"123456",tyu:"sdfghu"};
const b=[1,2,3,4,5,6,7,89]
console.log(a)   //{ name: 'aniket', id: '123456', tyu: 'sdfghu' }   //
console.log(Object.keys(a))  //[ 'name', 'id', 'tyu' ]
console.log(Object.values(a))  //[ 'aniket', '123456', 'sdfghu' ]
console.log(Object.entries(a))  //[ [ 'name', 'aniket' ], [ 'id', '123456' ], [ 'tyu', 'sdfghu' ] ]
const obj = {
    a: 10,
    b: 20,
    c: 30
};

const c = Object.entries(obj);
console.log(c);    //[ [ 'a', 10 ], [ 'b', 20 ], [ 'c', 30 ] ]


console.log(Object.assign(target, ...src))