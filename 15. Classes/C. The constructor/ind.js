/*
C. The constructor
 * It is a special method that runs once when you create an object with new.
 * Its job is to set up the initial properties of the object.
 * A class can have only one constructor. Two constructors give a SyntaxError.
 * If you don’t write one, JavaScript adds an empty one for you.
 * You don’t need to return anything. new returns the new object automatically.
*/


/*
D. What new does (4 steps)
 *1 Creates a new empty object.
 *2 Links that object’s __proto__ to ClassName.prototype.
 *3 Runs the constructor with this pointing to the new object.
 *4 Returns the object.
 This is the same process as constructor functions.
*/

