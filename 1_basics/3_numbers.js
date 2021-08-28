/*
  NUMBERS
  - default on base10
*/

let a = 3;
let b = 3.14;
let c = 123e5; // 12300000
let d = 123e-5; // 0.00123

// PRECISION
let e = 999999999999999;   // 999999999999999 (9 count <= 15)
let f = 9999999999999999;  // 10000000000000000 (9 count > 15)

// FLOATING POINT
let g = 0.2 + 0.1; // 0.30000000000000004 (this is not accurate)
let h = (0.2 * 10 + 0.1 * 10) / 10; // 0.3 (solution)

// ADDITION AND CONCATENATION
let i = 20 + 20; // 40
let j = "20" + 20; // 2020
let k = 20 + "20"; // 2020
let l = "20" + 20 + 20; // 202020
let m = 20 + 20 + "20"; // 4020

// SUBTRACTION, MULTIPLICATION AND DIVISION
let n = 50 - 10; // 40
let o = "50" - "10"; // 40
let p = 10 * 10; // 100
let q = "10" * "10"; // 100
let r = 100 / 10; // 10
let s = "100" / "10"; // 10

// NaN - Not a Number
let t = 100 / "Reyco"; // NaN
let u = isNaN(t); // true
let v = NaN; // NaN
let w = 100 + v; // NaN

// INFINITY
let x = Infinity;
let y = 2 / 0; // Infinity

// HEXADECIMAL
let z = 0xFF; // 255

// NUMBERS CAN BE OBJECT
let a1 = 123; // Primitive
let b1 = new Number(123);
// this complicates things
// this will have some problem on ===  because type is different


/*
  NUMBER METHODS
*/

// toString()
// - returns a number as string
// - coverts number to string (base2 to base36)
let a2 = 32;
//a2.toString(10); 32
//a2.toString(32); 10
//a2.toString(16); 20
//a2.toString(8); 40
//a2.toString(2); 100000

// toExponential()
let b2 = 9.656;
//b2.toExponential(2); 9.66e+0
//b2.toExponential(4); 9.6560e+0
//b2.toExponential(6); 9.656000e+0

// toFixed() - set decimal points
let c2 = 9.656;
// c2.toFixed(0); 10
// c2.toFixed(5); 0.65600

// toPrecision()
let d2 = 9.656;
// d2.toPrecision(2); 9.7

// Number()
Number(true);          // returns 1
Number(false);         // returns 0
Number("10");          // returns 10
Number("  10");        // returns 10
Number("10  ");        // returns 10
Number(" 10  ");       // returns 10
Number("10.33");       // returns 10.33
Number("10,33");       // returns NaN
Number("10 33");       // returns NaN
Number("John");        // returns NaN

// parseInt()
parseInt("-10");        // returns -10
parseInt("-10.33");     // returns -10
parseInt("10");         // returns 10
parseInt("10.33");      // returns 10
parseInt("10 20 30");   // returns 10
parseInt("10 years");   // returns 10
parseInt("years 10");   // returns NaN

// parseFloat()
parseFloat("10");        // returns 10
parseFloat("10.33");     // returns 10.33
parseFloat("10 20 30");  // returns 10
parseFloat("10 years");  // returns 10
parseFloat("years 10");  // returns NaN

/* NUMBER PROPERTIES
    MAX_VALUE 	         Returns the largest number possible in JavaScript
    MIN_VALUE 	         Returns the smallest number possible in JavaScript
    POSITIVE_INFINITY 	 Represents infinity (returned on overflow)
    NEGATIVE_INFINITY 	 Represents negative infinity (returned on overflow)
    NaN 	               Represents a "Not-a-Number" value
*/

// MAX_VALUE
let a3 = Number.MAX_VALUE;
console.log(a3); // 1.7976931348623157e+308

// MIN_VALUE
let b3 = Number.MIN_VALUE;
console.log(b3); // 5e-324

// POSITIVE_INFINITY
let c3 = Number.POSITIVE_INFINITY;
console.log(c3); // Infinity

// NEGATIVE_INFINITY
let d3 = Number.NEGATIVE_INFINITY;
console.log(d3); // -Infinity

// NaN
let e3 = Number.NaN;
console.log(e3); // NaN
