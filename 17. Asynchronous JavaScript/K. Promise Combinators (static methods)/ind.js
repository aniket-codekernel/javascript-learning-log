//K. Promise Combinators (static methods)
/*
================================================================================================
                         Promise.all() vs allSettled() vs race() vs any()
================================================================================================

| Method                      | Resolves when                        | Rejects when                         | Result                            |
|-----------------------------|--------------------------------------|--------------------------------------|-----------------------------------|
| Promise.all([...])          | All succeed                          | Any one fails (fail-fast)            | Array of values                   |
| Promise.allSettled([...])   | All finish (success or fail)         | Never rejects                        | Array of {status, value/reason}   |
| Promise.race([...])         | First to settle (success or fail)    | If the first to settle is a failure  | That one result                   |
| Promise.any([...])          | First to succeed                     | All fail (AggregateError)            | First success value               |

------------------------------------------------------------------------------------------------
QUICK REVISION:

1. Promise.all()        -> Waits for all promises; rejects if any one fails.
2. Promise.allSettled() -> Waits for all promises to finish, regardless of outcome.
3. Promise.race()       -> Returns the result of the first settled promise.
4. Promise.any()        -> Returns the first successful promise.

================================================================================================
*/