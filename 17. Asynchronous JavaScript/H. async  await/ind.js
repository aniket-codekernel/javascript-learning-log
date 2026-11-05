//H. async  await
//This is syntactic sugar over promises. It lets async code look like normal synchronous code.

/*
async keyword
 * Put it before a function.
 * That function always returns a promise.
*/
async function hello() {
  return "Hi";
}
hello().then(console.log); // "Hi" (the string was wrapped in a promise)

//await keyword
/*
 * Works only inside an async function. (Top-level await also works in ES modules.)
 * It pauses that function until the promise settles, then gives you the value.
 * It does not block the whole program, only that function. Other code keeps running.
*/

async function showData() {
  const user = await getUser(1);          // wait here
  const posts = await getPosts(user.id);  // then wait here
  console.log(posts);
}
//Same logic, compared
// Promise chain
getUser(1)
  .then((u) => getPosts(u.id))
  .then((p) => console.log(p));

// async/await (cleaner)
async function run() {
  const u = await getUser(1);
  const p = await getPosts(u.id);
  console.log(p);
}

/*
What happens behind the scenes
When JS hits await, the function pauses and control returns to the caller.
The rest of the function becomes a microtask, which resumes once the promise settles.
*/
async function test() {
  console.log("1");
  await null;
  console.log("3"); // goes to microtask queue
}
test();
console.log("2");
// Output: 1, 2, 3


