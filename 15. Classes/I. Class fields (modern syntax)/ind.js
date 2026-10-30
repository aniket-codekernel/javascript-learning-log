//I. Class fields (modern syntax)
//You can declare properties directly inside the class body.
class Counter {
  count = 0;            // public field
  step = 1;

  increment() {
    this.count += this.step;
  }
}

/*
 * Fields are created on each object, like this.count = 0 in the constructor.
 * This is shorter and easier to read.
*/

