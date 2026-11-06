//F. The Event Loop itself
//It is a simple, endless loop:
/*
while (true) {
  1. Run the current task until the call stack is empty
  2. Run ALL microtasks (until the microtask queue is empty)
  3. (Browser) Render/update the screen if needed
  4. Take ONE macrotask from the callback queue
  5. Go back to step 1
}
*/