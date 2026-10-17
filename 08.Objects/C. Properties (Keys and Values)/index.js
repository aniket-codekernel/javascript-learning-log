//C. Properties (Keys and Values)
/*
 *A key is almost always a string. JS converts it automatically (or it can be a Symbol).
 *A value can be anything: number, string, array, function, another object.
 *Keys with spaces or dashes need quotes. "" ''
*/

const user={
    name:"Aniket",
    "favorite-language":"Javascript",  //// quotes needed because of the dash
    skills: ["python","js"],
    address: {city:"Nagpur"}
};
console.log(user)


//Symbol as an Object Key
// A. What is a Symbol?
// A Symbol is a special value that is always unique. No two Symbols are ever equal, even if they look the same.
const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 === id2);   // false (every Symbol is one of a kind)

const id3 = Symbol("id");
console.log("This is a id3:",id3)   ////This is a id3: Symbol(id)
const id4 = id3
console.log(id3 == id4);  //true

//The text inside Symbol("id") is only a label to help you read it while debugging. It does not make the Symbol the same as another one.
//Note that you write Symbol(...) without new.

//B. How to use a Symbol as a key
// Put the Symbol variable inside square brackets [ ]:

const id = Symbol()  
console.log(id)  //Symbol()

const user1={
    name:"aniket",
    [id]:101       //// Symbol as key (brackets needed)
}
console.log(user1);   //{ name: 'aniket', Symbol(): 101 }
//Without the brackets, JS treats id as the plain text "id" and not as your Symbol:
const wrong = { id: 101 };   // key is the string "id", NOT the Symbol
console.log(wrong);          //{ id: 101 }

//You can also add one after creating the object:
user[id] = 202;   // brackets again

//C. How to read it
//Use brackets only. Dot notation does not work:
console.log(user[id]);    // 101 ✅
console.log(user.id);     // undefined ❌ (this looks for the string "id")
//You need the same variable (id) to get the value. If you lose the variable, it is hard to reach the key. That is the point of Symbols.

//D. Symbol keys are hidden from loops
const id89 = Symbol("id");
const user = { name: "Aniket", [id]: 101 };

console.log(Object.keys(user));      // ["name"] (no symbol)
console.log(JSON.stringify(user));   // '{"name":"Aniket"}' (no symbol)

for (const key in user) {
  console.log(key);                  // only "name"
}
//Object.keys, for...in, and JSON.stringify all skip Symbol keys.
//To see them on purpose:
console.log(Object.getOwnPropertySymbols(user));  // [Symbol(id)]

//E. Why would anyone use this?
/*
===============================================================
                    Why Use Symbols?
===============================================================

| Reason                        | Example                                      |
|-------------------------------|----------------------------------------------|
| No name clash                 | Two parts of a program can each add their    |
|                               | own `Symbol("id")` to the same object, and   |
|                               | they never overwrite each other              |
| Hidden data                   | Store extra info that won't show up in       |
|                               | loops or JSON                                 |
| Special built-in features     | JS itself uses Symbols like                  |
|                               | `Symbol.iterator`, which is what makes       |
|                               | `for...of` work on arrays                     |

===============================================================
*/
const idA = Symbol("id");   // made by one library
const idB = Symbol("id");   // made by another library

const obj = { [idA]: "from A", [idB]: "from B" };
console.log(obj[idA]);      // "from A"
console.log(obj[idB]);      // "from B" (no clash, even with the same label)
//With plain string keys, both would be "id", and the second would overwrite the first.

/*
Quick Summary

 *Create: const id = Symbol("label")
 *Use as a key: { [id]: value } or obj[id] = value
 *Read: obj[id] (never obj.id)
 *Hidden from Object.keys, for...in, and JSON.stringify
 *Always unique, so no accidental overwriting
*/
//For now, this is a small topic. You will rarely write Symbol keys yourself as a beginner, but you should know what they are for interviews.


