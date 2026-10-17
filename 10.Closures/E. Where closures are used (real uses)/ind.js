//E. Where closures are used (real uses)
//1. Data privacy (hiding variables)

function bankAccount() {
  let balance = 0;               // private, nobody can touch it directly

  return {
    deposit(x) { balance += x; },
    getBalance() { return balance; }
  };
}

const acc = bankAccount();
acc.deposit(500);
console.log(acc.getBalance()); // 500
console.log(acc.balance);      // undefined, it's hidden
acc.deposit(100)
console.log(acc.getBalance()) //600
//console.log(balance)  //ReferenceError: balance is not defined


//2. Function factories (making custom functions)
function multiplyBy(x) {
  return (y) => x * y;           // remembers x
}

const double = multiplyBy(2);
const triple = multiplyBy(3);

double(5); // 10
triple(5); // 15

//3. Remembering state (counters, toggles)
function once(fn) {
  let done = false;
  return function (...args) {
    if (!done) {
      done = true;
      return fn(...args);
    }
  };
}

//4. Callbacks and event handlers
function setup(button) {
  let clicks = 0;
  button.addEventListener("click", () => {
    clicks++;                    // remembers clicks
    console.log(clicks);
  });
}

//5. setTimeout and async code
function wait(msg) {
  setTimeout(() => console.log(msg), 1000);  // remembers msg
}
wait("Hello"); // prints after 1 second

//6. Other places you will see them
/*
 *Currying: add(1)(2)(3)
 *Memoization (caching results)
 *Debounce and throttle
 *Module pattern (before ES modules)
 *React hooks such as useState
*/


