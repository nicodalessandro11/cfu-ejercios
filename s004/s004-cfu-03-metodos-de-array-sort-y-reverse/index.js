const arrOfStrings = ["cat", "wolf", "is", "animal"];

// 1. Crea una copia del arreglo arrOfStrings y nómbrala strings1.
const strings1 = arrOfStrings;
// 2. Ordena el arreglo strings1 desde la cadena más corta hasta la más larga.
console.log(
  strings1.sort((a, b) => {
    a - b;
  })
);
// 3. Crea otra copia del arreglo arrOfStrings y nómbrala strings2.
const strings2 = arrOfStrings;
// 4. Ordena el arreglo strings2 alfabéticamente.
console.log(strings2.reverse());

// --------------------
const name = "ivan";

const reversedString = name.split("").reverse().join("");

console.log(reversedString); // => navi

console.log(name); // => ivan


// --------------------
const numbers = [3, 5, 6, 2];
 
const reversed = numbers.slice().reverse();

console.log(reversed); // => [ 2, 6, 5, 3 ]
console.log(numbers); // => [ 3, 5, 6, 2 ]

 
const sortedAndReversed = numbers.slice().sort().reverse();

console.log(sortedAndReversed); // => [ 6, 5, 3, 2 ]
console.log(numbers); // => [ 3, 5, 6, 2 ]
