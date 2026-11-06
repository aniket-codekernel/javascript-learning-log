//G. Execution order, traced step by step
//Example 1
console.log("1");                              // sync
setTimeout(() => console.log("2"), 0);         // macrotask
Promise.resolve().then(() => console.log("3")); // microtask
console.log("4");                              // sync
//Output: 1, 4, 3, 2

/*
Step	What happens
1	"1" prints (sync)
2	setTimeout goes to Web API, then its callback goes to the callback queue
3	The promise .then callback goes to the microtask queue
4	"4" prints (sync). The stack is now empty
5	Microtasks run first, so "3" prints
6	Then the macrotask runs, so "2" prints
*/

//Example 2: microtask inside a microtask
setTimeout(() => console.log("timeout"), 0);

Promise.resolve().then(() => {
  console.log("p1");
  Promise.resolve().then(() => console.log("p2"));
});

console.log("sync");
//Output: sync, p1, p2, timeout
//p2 is added while the microtask queue is draining, so it runs before the timeout.

//H. Microtask vs Macrotask
/*
	                        Microtask	                          Macrotask (Callback Queue)
Examples	            Promises, await, queueMicrotask	          setTimeout, events, setInterval
Priority	            Higher	                                  Lower
When they run	        Queue fully drained after each task	      One per loop cycle
Can starve the other?	Yes, can block macrotasks and rendering	  No
*/