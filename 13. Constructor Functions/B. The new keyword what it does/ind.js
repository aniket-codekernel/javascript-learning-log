//B. The new keyword: what it does
//When you call new Person("Aniket", 20), JavaScript runs 4 steps:
// 1. Creates an empty object        → {}
// 2. Links its prototype            → obj.__proto__ = Person.prototype
// 3. Runs the function with this=obj → this.name = ...; this.age = ...
// 4. Returns obj automatically      (unless you return another object)

//Here is what new does behind the scenes, written by hand:
function myNew(Constructor, ...args) {
  const obj = Object.create(Constructor.prototype); // steps 1 + 2
  const result = Constructor.apply(obj, args);      // step 3
  return result instanceof Object ? result : obj;   // step 4
}

