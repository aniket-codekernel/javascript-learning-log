//N. Common Mistakes
//1. await inside forEach (doesn’t wait)
// ❌ forEach ignores the promises
arr.forEach(async (item) => {
  await process(item);
});
console.log("Done"); // prints BEFORE the processing finishes

// ✅ Sequential
for (const item of arr) {
  await process(item);
}

// ✅ Parallel
await Promise.all(arr.map((item) => process(item)));

//2. Forgetting await
const data1 = fetchData();       // data is a Promise, not the value
const data1sa = await fetchData(); // the actual value

//3. Forgetting return in .then()
.then((x) => { x * 2 })        // returns undefined
.then((x) => x * 2)            // returns the value


//