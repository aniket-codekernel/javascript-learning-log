//N. Mutating vs non-mutating (must-memorize table)
/*
===============================================================
          Mutating vs Non-Mutating Array Methods
===============================================================

| Mutates the original ⚠️       | Returns new / does not mutate ✅ |
|-------------------------------|----------------------------------|
| `push`, `pop`, `shift`,       | `slice`, `concat`                |
| `unshift`                     |                                  |
| `splice`                      | `map`, `filter`, `reduce`        |
| `sort`, `reverse`             | `flat`, `flatMap`                |
| `fill`, `copyWithin`          | `toSorted`, `toReversed`,       |
|                               | `toSpliced`, `with`              |
| assigning to `length`         | `find`, `indexOf`, `includes`,   |
|                               | `join`                           |

===============================================================
*/