//H. Closure (scope that is remembered)
//A function remembers the scope where it was created, even after that outer function has finished.
function counter() {
  let count = 0;           // lives in counter's scope
  return function () {
    count++;
    return count;
  };
}

const c1 = counter();
console.log(c1());  // 1
console.log(c1());  // 2
console.log(c1());  // 3