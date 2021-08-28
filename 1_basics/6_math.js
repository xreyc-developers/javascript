/*
  MATH
*/

// CONSTANTS
console.log('[CONSTANTS]');
console.log(Math.E);        // 2.718281828459045 (Euler's number)
console.log(Math.PI);       // 3.141592653589793 (PI)
console.log(Math.SQRT2);    // 1.4142135623730951 (square root of 2)
console.log(Math.SQRT1_2);  // 0.7071067811865476 (square root of 1/2)
console.log(Math.LN2);      // 0.6931471805599453 (natural logarithm of 2)
console.log(Math.LN10);     // 2.302585092994046 (natural logarithm of 10)
console.log(Math.LOG2E);    // 1.4426950408889634 (base 2 logarithm of E)
console.log(Math.LOG10E);   // 0.4342944819032518 (base 10 logarithm of E)

// METHODS
console.log('[METHODS]');
console.log(Math.round(4.3));	// 4 (rounded to its nearest integer)
console.log(Math.ceil(4.3));	// 5 (rounded up to its nearest integer)
console.log(Math.floor(4.3));	// 4 (rounded down to its nearest integer)
console.log(Math.trunc(4.3)); // 4 (returns the integer part of x (new in ES6))
console.log(Math.pow(3,2)); // 9 (3 power of 2)
console.log(Math.sqrt(64)); // 8
console.log(Math.abs(-4.7)); // 4.7
console.log(Math.random()); // 0.8690270004656264

// TRIGONOMETRY
console.log('[TRIGONOMETRY]');
console.log(Math.sin(80 * Math.PI / 180)); // 0.984807753012208
console.log(Math.cos(80 * Math.PI / 180)); // 0.17364817766693041

// MIN AND MAX
console.log('[MIN AND MAX]');
console.log(Math.min(0, 150, 30, 20, -8, -200)); // -200
console.log(Math.max(0, 150, 30, 20, -8, -200)); // 150

// LOGARITHMS
console.log('[LOGARITHMS]');
console.log(Math.log2(8)); // 3
console.log(Math.log10(1000)); // 3

/*
COMPLETE LIST
abs(x) 	Returns the absolute value of x
acos(x) 	Returns the arccosine of x, in radians
acosh(x) 	Returns the hyperbolic arccosine of x
asin(x) 	Returns the arcsine of x, in radians
asinh(x) 	Returns the hyperbolic arcsine of x
atan(x) 	Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
atan2(y, x) 	Returns the arctangent of the quotient of its arguments
atanh(x) 	Returns the hyperbolic arctangent of x
cbrt(x) 	Returns the cubic root of x
ceil(x) 	Returns x, rounded upwards to the nearest integer
cos(x) 	Returns the cosine of x (x is in radians)
cosh(x) 	Returns the hyperbolic cosine of x
exp(x) 	Returns the value of Ex
floor(x) 	Returns x, rounded downwards to the nearest integer
log(x) 	Returns the natural logarithm (base E) of x
max(x, y, z, ..., n) 	Returns the number with the highest value
min(x, y, z, ..., n) 	Returns the number with the lowest value
pow(x, y) 	Returns the value of x to the power of y
random() 	Returns a random number between 0 and 1
round(x) 	Rounds x to the nearest integer
sign(x) 	Returns if x is negative, null or positive (-1, 0, 1)
sin(x) 	Returns the sine of x (x is in radians)
sinh(x) 	Returns the hyperbolic sine of x
sqrt(x) 	Returns the square root of x
tan(x) 	Returns the tangent of an angle
tanh(x) 	Returns the hyperbolic tangent of a number
trunc(x) 	Returns the integer part of a number (x)
*/
