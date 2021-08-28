/*
  FUNCTIONS - DEFINITIONS
  - functions are all object methods
*/

/*
  FUNCTION DECLARATION
  function functionName(parameters) {
    code
  }
*/
function multiply(a,b) {
  return a * b;
}
console.log(multiply(4,4)); // 16

// FUNCTION EXPRESSION
const x = function(a,b) {
  return a * b;
}
console.log(x(2,2)); // 4

// FUNCTION CONSTRUCTOR
const x1 = new Function("a", "b", "return a * b");
console.log(x1(2,2)); // 4

// FUNCTION HOISTING
console.log(a1(4,3)); // 7
function a1(a,b){
  return a + b;
}

/*
  SELF-INVOKING FUNCTION
  - function expression will execute automatically if the expression if followed by ()
  - you cannot self-invoke a function declaration
  - add parenthesis around the function to indicate that it is a function expression
*/
(function () {
  console.log('I am self-invoked');
})(); // I am self-invoked

// it is equivalent to
const fnexpression = function () {
  console.log('I am self-invoked');
}
fnexpression(); // I am self-invoked

// FUNCTIONS CAN BE USED AS VALUES
const b1 = multiply(2,2);
console.log(b1); // 4

// SELF INVOKED - FUNCTION WITHIN THE FUNCTION
(function a1(text1) {
  this.function1 = function() {
    console.log('Test1: ' + text1);
  };
  this.function2 = function() {
    console.log('Test2: ' + text1);
  }
  this.function1(); // Test1: Hello
  this.function2(); // Test2: Hello
})('Hello');

/*
  FUNCTIONS ARE OBJECTS
  - typeof returns 'function' for function but it can be best described as objects
  - functions have both properties and methods
*/
function myFunction(a, b) {
  return a * b;
}
console.log(myFunction.toString());
/* Result
function myFunction(a, b) {
  return a * b;
}
*/

// ARROW FUNCTIONS
// ES5
var a2 = function (x,y) {
  return x + y;
}
console.log(a2(2,5)); // 7
// ES6
const b2 = (x,y) => {
  return x + y;
}
console.log(b2(5,2)); // 7
