//D. Callbacks
//A callback is a function you pass to another function, to be called later.
function getUser(id, callback) {
  setTimeout(() => {
    callback({ id: id, name: "Aniket" }); // call it when "data arrives"
  }, 1000);
}

getUser(1, (user) => {
  console.log(user.name); // runs after 1 second
});

//Callbacks are not always async. arr.map(fn) uses a callback synchronously. A callback is simply a function passed in.
/*

Problem: Callback Hell

When one async task depends on the previous one, callbacks nest deeper and deeper:
*/
getUser(1, (user) => {
  getPosts(user.id, (posts) => {
    getComments(posts[0].id, (comments) => {
      console.log(comments); // pyramid of doom
    });
  });
});
/*
Problems:

Hard to read (shape like an arrow >)
Hard to handle errors, since each level needs its own check
Hard to maintain
Inversion of control: you trust another function to call your callback correctly, once, and at the right time

Promises fixed this.
*/

