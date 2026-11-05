//Sequential (one after another)
async function slow() {
  const a = await task1(); // 2 sec
  const b = await task2(); // 2 sec
  // total: 4 seconds
}

//Parallel (all together)
async function fast() {
  const [a, b] = await Promise.all([task1(), task2()]);
  // total: 2 seconds
}
/*
Rule of thumb:

 * If task 2 needs the result of task 1, use sequential.
 * If the tasks are independent, use parallel. This is a very common performance mistake.
*/

