//J. Getters and setters
//They let you use a method like a property.

class Circle {
  constructor(radius) {
    this._radius = radius;
  }

  get diameter() {          // called when you READ it
    return this._radius * 2;
  }

  set radius(value) {       // called when you ASSIGN it
    if (value <= 0) throw new Error("Must be positive");
    this._radius = value;
  }
}

const c = new Circle(-5);
console.log(c.diameter); // 10 (no parentheses!)
console.log(c.radius)

//L. Private fields and methods (#)
class BankAccount {
  #balance = 0;                 // private field

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }

  #log() {                      // private method
    console.log("secret");
  }
}

const acc = new BankAccount();
acc.deposit(100);
console.log(acc.getBalance()); // 100
console.log(acc.#balance);     // SyntaxError