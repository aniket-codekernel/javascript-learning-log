// Q8. Same as Q7, but with let instead. What's the output, and why is it different?
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}  //0 1 2 