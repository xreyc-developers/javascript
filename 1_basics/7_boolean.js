/*
  BOOLEAN
*/

console.log(Boolean(10>4)); // true
console.log(10 > 4); // true

// EVERYTHING WITH VALUE IS TRUE
console.log(Boolean(100)); // true
console.log(Boolean(3.14)); // true
console.log(Boolean("Hello")); // true
console.log(Boolean("false")); // true

// BOOLEAN CAN BE OBJECTS
let a1 = new Boolean(true);
console.log(typeof a1); // object
console.log(typeof Boolean); // function
console.log(typeof Boolean()); // boolean
