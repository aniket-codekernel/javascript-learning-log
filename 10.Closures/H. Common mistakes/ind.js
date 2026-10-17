//H.Common mistakes
/*
================================================================================================
                              Common Mistakes About Closures
================================================================================================

| Mistake                                        | Explanation                                            |
|------------------------------------------------|--------------------------------------------------------|
| Thinking closures copy values                  | They hold a reference, not a copy                      |
| Using var in loops with callbacks              | All callbacks share one variable                       |
| Thinking only returned functions are closures  | Every function is a closure, even if it isn't returned |
| Forgetting each call makes a new closure       | Separate calls have separate variables                |

================================================================================================
*/
