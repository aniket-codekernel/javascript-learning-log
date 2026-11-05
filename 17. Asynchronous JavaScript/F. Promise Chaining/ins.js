//F. Promise Chaining
//Every .then() returns a new promise. This lets us chain steps flat instead of nesting them.
getUser(1)
  .then((user) => getPosts(user.id))       // return a promise → next then waits for it
  .then((posts) => getComments(posts[0].id))
  .then((comments) => console.log(comments))
  .catch((err) => console.log("Error:", err));

/*
Rules of chaining:

 * Whatever you return from .then() is passed to the next .then().
 * If you return a promise, the chain waits for it.
 * If you return a plain value, it is wrapped in a resolved promise.
 * If you forget to return, the next step gets undefined.
 * One .catch() at the end catches an error from any step above it.
*/
