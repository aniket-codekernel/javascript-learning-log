//G. Classes are NOT hoisted like functions
const x = new Dog(); // ReferenceError
class Dog {}

/*
 * Classes are hoisted but stay in the Temporal Dead Zone (like let and const).
 * You must define the class before you use it.
 * Function declarations, by contrast, can be called before they are defined.
*/

/*
H. Other class rules
 * The class body always runs in strict mode automatically.
 * You cannot call a class without new:
 Person("A"); // TypeError: Class constructor cannot be invoked without 'new'
 * A regular constructor function would silently misbehave here. A class gives a clear error.
 * Class methods are non-enumerable, so they don’t show up in for...in loops.
*/
