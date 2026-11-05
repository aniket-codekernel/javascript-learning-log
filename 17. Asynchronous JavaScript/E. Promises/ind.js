//E. Promises
// A Promise is an object that represents a value that will be available in the future.
//Analogy: A token at a coffee shop. It isn’t the coffee yet, but it’s a promise you’ll get coffee (or be told it ran out).
/*
The 3 states
/*
================================================================================================
                              Promise States in JavaScript
================================================================================================

| State       | Meaning                      |
|-------------|------------------------------|
| Pending     | Still waiting, no result yet |
| Fulfilled   | Succeeded and has a value    |
| Rejected    | Failed and has an error      |

------------------------------------------------------------------------------------------------
                              PROMISE STATE FLOW
------------------------------------------------------------------------------------------------

                    ┌─────────────┐
                    │   PENDING   │
                    └──────┬──────┘
                           |
                    ┌──────┴──────┐
                    |             |
                    v             v
             ┌───────────┐  ┌───────────┐
             │ FULFILLED │  │ REJECTED  │
             │  SUCCESS  │  │  FAILURE  │
             └───────────┘  └───────────┘

------------------------------------------------------------------------------------------------
IMPORTANT:
1. Every Promise starts in the Pending state.
2. Pending can become Fulfilled or Rejected.
3. Fulfilled and Rejected are final states.
4. A settled Promise cannot change its state again.

================================================================================================
*/
const promise = new Promise((resolve, reject) => {
  // runs immediately (synchronously)
  const success = true;

  setTimeout(() => {
    if (success) resolve("Data received"); // → fulfilled
    else reject("Something went wrong");   // → rejected
  }, 1000);
});

/*
 * resolve(value) marks it successful.
 * reject(error) marks it failed.
 * The function you give to new Promise (the executor) runs immediately.
*/

//Using a promise
promise
  .then((data) => console.log(data))      // runs if fulfilled
  .catch((err) => console.log(err))       // runs if rejected
  .finally(() => console.log("Done"));    // runs always

/*
.then() handles success.
.catch() handles errors.
.finally() runs either way. It is good for cleanup such as hiding a loader.
*/



