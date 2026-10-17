//Increment/Decrement    pre vs post (frequnyt lested)
let x=5;
console.log(x++); //return old values , then increment
console.log(x); //now its return 6

let y =5;
console.log(++y);//when its call its return


//A. FOR Loop
for(let i=0 ; i<5; i++){
    console.log("This is a For loop:",i);
}
/* 
  .Kaha se jaana hai -> kaha tak jaana hai ->kaise jaana hai 
   ex:1 to 40 for, 20 to 30 for, 30 to 40 for

               STEPS
    1. check the value i=0;
    2.check the conditon i<5; if its true the go on a next condtion
    3.Then its excuted a code writen in it 
    4.the do incremment and its a increment its increase value after calling it
 */

/*
             Steps
i = 0 → check 0 < 5 (true) → print 0 → i becomes 1
i = 1 → check 1 < 5 (true) → print 1 → i becomes 2
i = 2 → check 2 < 5 (true) → print 2 → i becomes 3
i = 3 → check 3 < 5 (true) → print 3 → i becomes 4
i = 4 → check 4 < 5 (true) → print 4 → i becomes 5
i = 5 → check 5 < 5 (false) → loop stops
*/

//We use a for loop when we know exact no. iteratons 


//B..While loop
let a = 0;
while (a < 5) {
  console.log("This is a While loop:",a);
  a++;
}

/*
                    STEPS
1.check a value a=0;
2.check a condition if true go forward and if false stops
3.the code will run inside it {}
4.update the value
5.repeat from 2 steps
*/

/*
i = 0 → check 0 < 5 (true) → print 0 → i becomes 1
i = 1 → check 1 < 5 (true) → print 1 → i becomes 2
i = 2 → check 2 < 5 (true) → print 2 → i becomes 3
i = 3 → check 3 < 5 (true) → print 3 → i becomes 4
i = 4 → check 4 < 5 (true) → print 4 → i becomes 5
i = 5 → check 5 < 5 (false) → loop stops
 */
//We use for when we did not know who much no. of iteratons it will take

//C.Break
for (let c = 0; c < 10; c++) {
    if(c==5){
        console.log("This is done about by break")
        break
    }
    console.log("This is about a break:",c)
}
let C= 0;
while (C < 5) {
    if(C==2){
        console.log("This is a break done in a while loop")
        break
    }
  console.log("This is a While loop:",a);
  C++;
}


//D:Continue
//Skip the rest of the current iterations and jump to the next one (re-cheks the condition/rund the update)
for (let D = 0; D < 10; D++) {
    if(D%2===0){
        console.log("Even:",D);
        continue; //Skips the line below for even number
    }
    console.log("This only runs for odd number:",D); //This line get skipped when cotinue fires
}

let D=0;
while (D<10) {
        if(D%2===0){
        console.log("Even:",D);
        D++
        continue; //Skips the line below for even number
    }
    console.log("This only runs for odd number:",D);
    D++
}



//E.Nested loops
for (let E = 0; E < 10; E++) {
    for (let E1 = 10; E1 < 20; E1++) {
        console.log(E)
        console.log(E1)
    }
}

//F.Infinite loop
// for (let F = 0; ; F++) {
//     console.log(F);
// };

// let F=5;
// while (F<0) {
//     console.log(F)
// };



//H. for..in
//for...in is used to loop through the keys (property names) of an object — not arrays directly (though it can work on arrays, it's not recommended for them).
const student = {
  name: "Aniket",
  age: 20,
  course: "Full-Stack Web Dev"
};

for (let key in student) {
  console.log(key, ":", student[key]);
}


//I. For of
//for...of is used to loop through the values directly of iterable things — arrays, strings, Maps, Sets. It's the most common loop for working with array data because you get the actual value, not an index.
const fruits = ["apple", "banana", "mango"];

for (let fruit of fruits) {
  console.log(fruit);
}


//J.Do while loop
//A do...while loop is almost identical to a while loop, with one key difference: it runs the body first, and then checks the condition. This means a do...while loop always executes at least once — even if the condition is false from the start.
let J = 0;
do {
  console.log("Value:", J);
  i++;
} while (i < -5);


/*
        STEPS
1.It will print a value or run the code it {}
2.Then it will increase value
3.Then it will check a condition
*/

/*
i = 0 → run body → print 0 → i becomes 1 → check 1 < 5 (true) → repeat
i = 1 → run body → print 1 → i becomes 2 → check 2 < 5 (true) → repeat
i = 2 → run body → print 2 → i becomes 3 → check 3 < 5 (true) → repeat
i = 3 → run body → print 3 → i becomes 4 → check 4 < 5 (true) → repeat
i = 4 → run body → print 4 → i becomes 5 → check 5 < 5 (false) → stop
 */
//It will runs at list on time


//K.Labeled Statement
/*Outer*/
for (let K = 0; K < 5; K++) {
/*Inner */
    for (let K1 = 0; K1 < 10; K1++) {
        if (K==3) {
            console.log("This is a continue outer", K);
            continue 
        }
        if (K1==4) {
            console.log("This is a break outer", K1);
            break 
        }
    }
}






//All loops difference and use
/*
==============================================================================
                        JAVASCRIPT LOOPS - COMPARISON TABLE
==============================================================================

| Loop        | Syntax                          | Condition Checked      | Runs At Least Once? | Best Used On                          | Gives You                         | Real-Life Example                        |
|-------------|----------------------------------|-------------------------|----------------------|----------------------------------------|-------------------------------------|--------------------------------------------|
| for         | for(init; condition; update)    | Before each iteration   | No                   | Known number of iterations / fixed range | Manual index (access value yourself) | Doing 20 push-ups (fixed count)          |
| while       | while(condition)                | Before each iteration   | No                   | Unknown iterations, condition-driven     | Nothing automatic (manual update)   | Filling a bottle until full (unknown time)|
| do...while  | do {...} while(condition)       | After each iteration    | Yes, always          | Task that must run once before checking  | Nothing automatic (body runs first) | Showing a menu once before asking "exit?" |
| for...in    | for(key in object)              | Iterates object keys    | No (skips if empty)  | Objects (looping property names)         | Keys ("name","age" or "0","1")     | Reading labels on a filing cabinet drawer |
| for...of    | for(value of iterable)          | Iterates values         | No (skips if empty)  | Arrays, strings, Maps, Sets              | Values directly (10, "apple", "A") | Reading items straight from a shopping list|

------------------------------------------------------------------------------
                              QUICK DECISION GUIDE
------------------------------------------------------------------------------
- Exact number of times to repeat                          -> for
- Repeat until something happens, unknown when              -> while
- Must run at least once no matter what (menu, first input) -> do...while
- Looping an OBJECT, need property names                    -> for...in
- Looping an ARRAY/STRING, need actual values                -> for...of

==============================================================================
*/