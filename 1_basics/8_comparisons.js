/*
  COMPARISONS
*/

// COMPARISON OPERATORS
const a1 = 5;
console.log(a1 == 5); // true
console.log(a1 == 8); // false
console.log(a1 == "5"); // true

console.log(a1 === 5); // true
console.log(a1 === "5"); // false

console.log(a1 != 8); // true (value)
console.log(a1 !== 8); // true (value and type)

console.log(a1 > 8); // false
console.log(a1 < 8); // true
console.log(a1 >= 8); // false
console.log(a1 <= 8); // true

// LOGICAL OPERATORS
// &&(AND), ||(OR), !(NOT)
const b1 = 6;
const c1 = 3;
console.log(b1 < 10 && c1 > 1); // true
console.log(b1 === 5 || c1 === 5); // false
console.log(!(b1 === c1)); // true

/*
2 < 12 	    true 	
2 < "12" 	  true
2 < "John" 	false
2 > "John" 	false
2 == "John" false
"2" < "12" 	false
"2" > "12" 	true
"2" == "12" false
*/
