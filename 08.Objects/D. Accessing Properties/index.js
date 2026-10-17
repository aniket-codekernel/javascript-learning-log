//D. Accessing Properties
/*
===============================================================
               Dot Notation vs Bracket Notation
===============================================================

| Way              | Syntax        | When to use                                       |
|-------------------|---------------|---------------------------------------------------|
| Dot notation     | `obj.name`    | Key is a simple name (most common)                |
| Bracket notation | `obj["name"]` | Key has spaces/dashes, or is stored in a variable |

===============================================================
*/

const user = {name:"aniket","fav language":"js"}

console.log(user);
console.log(user.name)  //aniket
console.log(user["fav language"])  //js
//console.log(user.fav language)  //SyntaxError: missing ) after argument list

