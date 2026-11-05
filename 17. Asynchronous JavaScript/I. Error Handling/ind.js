//I. Error Handling
//With promises → .catch()
fetchData().catch((err) => console.log(err));

//With async/await → try...catch
async function load() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  } finally {
    console.log("Always runs");
  }
}

//Important points:
/*
 * A rejected promise that is awaited throws an error, so try/catch catches it.
 * An unhandled rejection gives an UnhandledPromiseRejection warning (and can crash Node).
 * Throwing inside .then() makes the next promise reject, and .catch() catches it.
*/

