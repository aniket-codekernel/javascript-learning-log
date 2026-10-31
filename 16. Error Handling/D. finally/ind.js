//D. finally
//The finally block runs always, whether there was an error or not.

function test() {
  try {
    console.log("Trying");
    return "from try";
  } catch (err) {
    console.log("Caught");
  } finally {
    console.log("Cleanup");     // STILL runs, even after return
  }
}

console.log(test());
// Trying
// Cleanup
// from try


//Use it for cleanup work: closing a file or connection, hiding a loading spinner, resetting a flag.
showSpinner();
try {
  loadData();
} catch (err) {
  showError(err.message);
} finally {
  hideSpinner();   // spinner hides in both success and failure
}

//Valid combinations:
/*
===============================================================
                  JavaScript try...catch Forms
===============================================================

| Form                    | Allowed?                                       |
|-------------------------|------------------------------------------------|
| try...catch             | Yes                                            |
| try...finally           | Yes (error still propagates after finally runs)|
| try...catch...finally   | Yes                                            |
| try alone               | No                                             |

===============================================================
*/