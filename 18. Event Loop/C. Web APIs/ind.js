//C. Web APIs
//These are not part of JavaScript. They are features provided by the environment:
/*
Environment	Examples
Browser	setTimeout, setInterval, fetch, DOM events, XMLHttpRequest, geolocation
Node.js	fs (file system), http, timers (C++ / libuv)
*/

//What happens when you call setTimeout:
setTimeout(() => console.log("done"), 2000);
/*
 1.setTimeout is pushed onto the stack and runs.
 2.It hands the timer and the callback to the Web API, then pops off immediately.
 3.The Web API counts 2 seconds in the background.
 4.After 2 seconds, the callback moves into a queue (section D).
*/
//JS didn’t wait. The waiting happened outside the engine.

