//A. Why the Event Loop exists
//JavaScript is single-threaded. It has one call stack, so it can run only one thing at a time.
//Without help, a slow operation like a network request or a timer would freeze everything. The runtime (browser or Node.js) solves this by handling slow work outside the JS engine. The Event Loop is the mechanism that brings the results back.

//Analogy: a restaurant with one chef (the call stack). The chef doesn’t stand and wait for the oven. He puts the dish in the oven (Web APIs), and when the timer rings, the waiter (event loop) tells him the dish is ready, but only when he’s free.
/*
        ┌──────────────┐
        │  Call Stack  │ ← runs JS, one thing at a time
        └──────┬───────┘
               │ async call (setTimeout, fetch, DOM event)
               ▼
        ┌──────────────┐
        │   Web APIs   │ ← browser/Node handles the waiting
        └──────┬───────┘
               │ when ready
               ▼
   ┌─────────────────────┐   ┌──────────────────┐
   │ Microtask Queue     │   │ Callback Queue   │
   │ (promises)          │   │ (timers, events) │
   └──────────┬──────────┘   └────────┬─────────┘
              └───────► EVENT LOOP ◄──┘
              (moves callbacks onto the stack when it's empty)
*/