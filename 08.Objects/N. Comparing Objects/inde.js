//N. Comparing Objects
const a = {a:1}
console.log("This is a",a)

const b ={a:1}
console.log(b)

console.log(a===b)   //false because its as a differnce addresses

const c ={a:1}
console.log(c)
const d = c
console.log(d)

console.log(c === d)    //true because its has a same addresses 

//=== on objects compares where they live in memory, not what is inside. To compare contents, compare property by property, or use JSON.stringify for simple cases

//============================================================================================================================================================================
                             //structuredClone(original)
const z = {a:1}
console.log(z)
const x =structuredClone(z)
console.log(x)

console.log("structuredClone(original)",z === x)     //its give false because its a deep copy

                               //shallow copy
const f = {a:2}
console.log(f)
const g = {...f}
console.log(g)

console.log("This is a shallow copy",f === g)  //its give us also false b=because its did share a addresses


//Your doubt is a good one, and the answer is one small detail: a shallow copy is two different objects, but the objects inside them are shared. The two “changes” you are comparing are not the same kind of change.
//A. const y = x (same object)
const h = { name: "A" };
const y = h;

console.log(x === h);   // true  (one object, two names)
y.name = "B";
console.log(h.name);    // "B"   (same object, so x sees it)

/*
x ──┐
    ├──→ { name: "A" }   ← ONE object
y ──┘
*/

//B. Shallow copy { ...x } (two different objects)
const u = { name: "A", address: { city: "Nagpur" } };
const v = { ...u };

console.log(u === v);   // false  (two different objects)

//Shallow Copy, Slowly
//Forget === for now. We’ll learn one small idea first, then the doubt solves itself.

//Step 1: What is stored inside an object?
const op = {name:"A",address:{city:"nagpur"}}
console.log(op)

// op has two properties, but they are different kinds:
/*
===============================================================
              Object Properties and References
===============================================================

| Property  | What is stored inside `x`                                  |
|-----------|-------------------------------------------------------------|
| `name`    | The actual text `"A"`                                       |
| `address` | Not the object itself, only a note with its location        |
|           | (an address/reference)                                      |

===============================================================
*/

// Think of op as a notebook with two lines:
/*
Line 1:  name    → "A"
Line 2:  address → "Go to Shelf 7"
*/

//Step 2: What does a shallow copy do?
const y ={...op}
console.log(y)

//A shallow copy makes a new notebook and copies line by line, exactly as written.
/*
x (old notebook)              y (new notebook)
Line 1: name    → "A"         Line 1: name    → "A"
Line 2: address → Shelf 7     Line 2: address → Shelf 7
*/
/*
Now look at what happened:

Line 1: the text "A" was copied. y has its own “A”.
Line 2: the note “Shelf 7” was copied. It did not build a new shelf. Both notebooks now point to the same Shelf 7.
*/

/*
So after copying we have:

 *2 notebooks (x and y are different objects)
 *1 shelf (the inner object is shared)
*/

//Step 3: What does === check?
console.log(x === y);   // false
/*
=== asks one question: “Are these the same notebook?”

x and y are 2 different notebooks, so the answer is false.
It does not open the notebooks and look at Shelf 7.
*/

//Compare with the plain assignment:
const y = x;   // no new notebook, just a second name for the same one
x === y;       // true (same notebook)

//Step 4: Change something on y (two cases)
//Case 1: change the name
y.name = "B";

// This changes Line 1 of y’s own notebook.
/*
x: name → "A"      (unchanged)
y: name → "B"      (changed)
*/
// Result: x.name is still "A". They are separate notebooks, so x is safe.

//Case 2: change the city
y.address.city = "Pune";
//Read it as steps:
/*
 *Open y’s notebook, go to the address line. It says “Shelf 7”.
 *Go to Shelf 7 and change city to “Pune”.
*/
console.log(op.address.city);   // "Pune"

//Step 5: Your doubt, answered
//You asked: “It changes the value, but === gives false. How?”
//=== only answers the first question. The city changed because of the second.

//So both facts are true together:
/*
*x === y is false (different notebooks)
*changing y.address.city also changes x (shared shelf)
*/

//Step 6: Where deep copy is different
//A deep copy builds a new shelf too:
const yt = structuredClone(op);
/*
x: address → Shelf 7
z: address → Shelf 12   (a brand new shelf with a copy of the city)
*/
//Now z.address.city = "Delhi" changes only Shelf 12, so x is safe.

/*
===============================================================
                       Summary Table
===============================================================

|              | Notebooks | Shelf (inner object) | `x === y` | Nested change affects x? |
|--------------|-----------|----------------------|-----------|--------------------------|
| `y = x`      | 1         | 1                    | `true`    | Yes                      |
| Shallow copy | 2         | 1 (shared)            | `false`  | Yes                      |
| Deep copy    | 2         | 2                    | `false`   | No                       |

===============================================================
*/
const po = { score: 10, tags: ["a", "b"] };
const y = { ...po };

y.score = 99;
y.tags.push("c");
//value change of tags because its not a specific object its a give a same address to another object
