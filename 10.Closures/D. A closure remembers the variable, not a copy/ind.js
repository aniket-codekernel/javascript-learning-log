//D.A closure remembers the variable, not a copy
function makeCounter() {
  let n = 0;
  return () => ++n;
}

const c = makeCounter();
c(); // 1
c(); // 2
//The closure holds a live reference to n. When n changes, the closure sees the new value. It does not take a snapshot.

//Each call creates a new, separate closure
const a = makeCounter();
const b = makeCounter();

a(); // 1
a(); // 2
b(); // 1  ← b has its OWN n
//Every time makeCounter() runs, it creates a new n and a new backpack. The two counters never affect each other.

