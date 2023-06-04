// 1. Basic Methods for arrays
const favorites = ["javascript", "html", "css"];

// remove the first element
favorites.shift();
console.log(favorites); // console output => [ "html", "css" ]

// remove the last element
favorites.pop();
console.log(favorites); // console output => [ "html" ]

// add 'react' to the beginning of the array
favorites.unshift("react");
console.log(favorites); // console output => [ "react", "html" ]

// add 'node' to the end of the array
favorites.push("node");
console.log(favorites); // console output => [ "react", "html", "node" ]

// remove element in the position 2 and add 'express'
favorites.splice(1, 1, "express");
console.log(favorites); // console output => [ "react", "express", "node" ]

// remove elements in the positions 2 and 3 and add 'mongodb'
favorites.splice(1, 2, "mongodb");
console.log(favorites); // console output => [ "react", "mongodb" ]

// 2. Iterate over arrays

const fruits = ["apple", "plum", "strawberries"];

for (let fruit of fruits) {
  console.log(fruit);
}

fruits.forEach((fruit, index) => {
  console.log(`${index}. ${fruit}`);
});
