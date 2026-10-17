// Q6. What does this print?
let count = 1;
{
  let count = 2;
  console.log(count);  //2
}
console.log(count); //1