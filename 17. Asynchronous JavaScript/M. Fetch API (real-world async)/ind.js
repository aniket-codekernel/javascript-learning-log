//M. Fetch API (real-world async)
async function getData() {
  try {
    const response = await fetch("https://api.example.com/users"); // step 1
    
    if (!response.ok) {                         // HTTP errors (404, 500)
      throw new Error("HTTP error " + response.status);
    }

    const data = await response.json();         // step 2: parse body (also a promise)
    console.log(data);
  } catch (err) {
    console.log("Failed:", err.message);
  }
}
/*
fetch does not reject on 404 or 500. It rejects only on network failure. You must check response.ok.
There are two awaits: one for the response, one for the body (.json())
*/