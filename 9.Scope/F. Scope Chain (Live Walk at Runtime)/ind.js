// F. Scope Chain (Live Walk at Runtime)

/*
When JavaScript encounters a variable name, it searches:

1. Look in the current scope.
2. If not found, look in the parent scope.
3. Keep going up through the outer scopes.
4. If no accessible binding is found, throw a ReferenceError.
*/

let h = "global";

function one() {
    let b = "one";

    function two() {
        let c = "two";

        console.log(c); // Found in two: "two"
        console.log(b); // Found in one: "one"
        console.log(h); // Found globally: "global"

        // console.log(p);
        // ReferenceError: p is not defined
    }

    two();
}

one();

/*
Lexical scope = the map (who is inside whom).
Scope chain = the walk (going up that map to find a name).

The search moves through the current and outer scopes.
It does not search down into child scopes.
*/
