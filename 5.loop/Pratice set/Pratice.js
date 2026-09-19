// //Q1. Print numbers from 1 to 10 using a for loop.
// for (let a = 1; a < 11; a++) {
//     console.log(a)
// }

// //Q2. Print all even numbers between 1 and 20.
// for (let b = 1; b < 21; b++) {
//     if (b%2 == 0) {
//         console.log(b);
//     }
// }

// //Q3. Given const arr = [5, 10, 15, 20], print each value using a for loop (with index).
// const c = [5, 10, 15, 20];

// for (let i = 0; i < c.length; i++) {
//     console.log(c[i]);
// }

// //Q4. Print numbers from 10 down to 1 using a while loop.
// let d = 10;
// while (d >= 1) {
//   console.log("This is a While loop:",d);
//   d--;
// }

// // Q5. Keep dividing a number by 2 (starting from 100) until it's less than 1. Print each step.
// let x=100;
// let y;
// while (x>1) {
//     y=x/2
//     console.log("This is a Y after X divide by 2:",y)
//     x=y
//     console.log("This is a x",x)
// }

// //Q6. Write a do...while loop that asks (simulate with a variable) for a number and keeps printing "Try again" until the number equals 7 — but make sure it runs at least once even if the starting value is already 7
// let a;
// do {
//     a = Number(prompt("Enter a value:"));
// } while (a!=7);

//Q7. Predict the output without running it:
// let x = 5;                     //x=5              //x=4             //x=3             //x=2
// do {                           //console.log(5);  //console.log(4)  //console.log(3)  //console.log(2)
//   console.log(x);              //x--=4            //x--=3           //x--=2            //x--=1
//   x--;                         //4>10 (true)      //3>10 (true)     //2>10            //1>10  //AND GOESON IT 
// } while (x > 10);                                                                             //Its A INFITE
                                                                                               //LOOP

  
// //Q8. Given this object, print each key and value:
// const car = { brand: "Tata", model: "Nexon", year: 2024 };
// for (let key in car) {
//   console.log(key, ":", car[key]);
// }

// //Q9. Predict the output:
// const arr = ["a", "b", "c"];
// for (let i in arr) {
//   console.log(typeof i);     //String String String
// }


// //Q10. Given const str = "Aniket", print every character using for...of
// const str = "Aniket"
// for (let char of str) {
//   console.log(char);
// }


// //Q11. Given const arr = [1, 2, 3, 4, 5], use for...of to calculate and print the sum of all elements.
// const arr = [1,2,3,4,5]
// let sum=0;
// let num;
// for (const no of arr) {
//     console.log(no)
//     num=no
//     sum=sum+num
// }
// console.log(sum)


// //Q12. Find and fix the bug (infinite loop):
// let n = 0;                     //n=0
// while (n < 5) {                //0<5 (true)
//   console.log(n);              //console.log(0);
//                               //There is no increamet so its a infitr loop
// }     



// //Q13. This should print only odd numbers 1–10, but it's wrong. Fix it:
// for (let i = 1; i <= 10; i++) {
//     if (i%2!=0) {
//         console.log("This is a even no.:",i)
//     }
// }



//Q14. Write a loop (your choice of type, but justify why you picked it) that keeps generating random numbers between 1–10 until it generates a 10.
// let num = 0;

// while (num !== 10) {
//     num = Math.floor(Math.random() * 10) + 1;
//     console.log(num);
// }



// //Q15. Given an object of student marks: Print only the subjects where the mark is above 80. Which loop type fits best here, and why?
// const marks = {
//     Math: 85,
//     Physics: 72,
//     Chemistry: 91,
//     English: 78,
//     Computer: 88
// };

// for (let subject in marks) {
//     if (marks[subject] > 80) {
//         console.log(subject);
//     }
// }  