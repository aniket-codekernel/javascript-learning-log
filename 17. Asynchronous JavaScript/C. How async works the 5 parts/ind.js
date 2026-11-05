//C. How async works the 5 parts


/*
================================================================================================
                    JavaScript Event Loop - Main Components
================================================================================================

| Part                                     | What it does                                                                  |
|------------------------------------------|-------------------------------------------------------------------------------|
| Call Stack                               | Runs your code, one function at a time                                      |
| Web APIs (browser) / C++ APIs (Node)     | Handle slow work such as timers, fetch and DOM events, outside JS            |
| Callback Queue (Macrotask Queue)         | Holds finished callbacks from timers and events                              |
| Microtask Queue                          | Holds finished callbacks from Promises. It has higher priority               |
| Event Loop                               | Checks: "Is the stack empty? If yes, push the next waiting callback"          |

------------------------------------------------------------------------------------------------
                              EXECUTION PRIORITY
------------------------------------------------------------------------------------------------

1. Synchronous Code       -> Call Stack
2. Microtasks             -> Microtask Queue (Promises)
3. Macrotasks             -> Callback Queue (setTimeout, events)

------------------------------------------------------------------------------------------------
                              EXECUTION FLOW
------------------------------------------------------------------------------------------------

             ┌───────────────────┐
             │     Call Stack    │
             │  Synchronous Code │
             └─────────┬─────────┘
                       |
                       v
             ┌───────────────────┐
             │     Web APIs      │
             │ setTimeout / fetch│
             └─────────┬─────────┘
                       |
             ┌─────────┴─────────┐
             |                   |
             v                   v
    ┌─────────────────┐  ┌─────────────────┐
    │ Microtask Queue │  │ Callback Queue  │
    │    Promises     │  │   Macrotasks    │
    └────────┬────────┘  └────────┬────────┘
             |                   |
             └─────────┬─────────┘
                       v
             ┌───────────────────┐
             │    Event Loop     │
             └─────────┬─────────┘
                       |
                       v
             ┌───────────────────┐
             │     Call Stack    │
             └───────────────────┘

------------------------------------------------------------------------------------------------
IMPORTANT POINTS:
------------------------------------------------------------------------------------------------

1. Synchronous code executes first.
2. After the stack becomes empty, microtasks execute.
3. Microtasks have priority over macrotasks.
4. The Event Loop coordinates task execution.
5. The browser normally processes microtasks before the next task.
6. Promise callbacks (.then, .catch, .finally) are microtasks.
7. setTimeout callbacks are macrotasks.

NOTE:
Microtasks are generally drained completely before the next macrotask begins.
================================================================================================
*/
console.log("A");

setTimeout(() => console.log("B"), 0);

console.log("C");
/*
Output: A, C, B, even with a delay of 0.
Key rule: Async callbacks run only after all the current synchronous code has finished.
*/