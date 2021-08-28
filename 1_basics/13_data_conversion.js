/*
  DATA CONVERSION
*/

// STRING TO NUMBER
console.log(Number("3.4")); // 3.4 (All)
console.log(parseFloat("3.666")); // 3.666 (Decimal)
console.log(parseInt("3.666")); // 3 (Integer)
console.log(parseInt("06312")); // 6312 (Integer)
// Unary + Operator
let a1 = "5";
let b1 = + a1;
console.log(typeof b1); // number

// NUMBER TO STRING
console.log(String(123)); // 123 (string)
console.log(String(10 + 10)); // 20 (string)
// Number Method
console.log((123).toString()); // 123 (string)

// AUTOMATIC CONVERSION
console.log(5 + null); // 5
console.log("5" + null); // 5null
console.log("5" + 2); // 52
console.log("5" - 2); // 3
console.log("5" * 2); // 10
