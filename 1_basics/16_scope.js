/*
  SCOPE

  TYPE OF SCOPE
  - Block (const and let)
  - Function
  - Global (var)

  GLOBAL ON HTML
  - window object is the global on HTML
*/

// BLOCK SCOPE (let and const)
// variables declared inside {} cannot be accessed outside
{
  let a1 = "A1"
  console.log(a1); // A1
}
// console.log(a1); // not defined

// NON BLOCK SCOPE
{
  var b1 = "B1";
  console.log(b1); // B1
}
console.log(b1); // B1

// LOCAL SCOPE
// variable declared inside a function becomes local to that function
// variables are created during start of a function and destroyed at end of execution
function function1(){
  let c1 = "C1";
  var d1 = "D1";
  console.log(c1); // C1
  console.log(d1); // D1
}
function1();
//console.log(c1); // ERROR
//console.log(d1); // ERROR

// GLOBAL SCOPE
let a2 = "A2";
function function2(){
  console.log(a2);
}
function2(); // A2

// AUTOMATIC GLOBAL
// if a value assigned to an undeclared variable it will automatically become global
// DECLARED ON A FUNCTION
function3();
console.log(b2); // B2
function function3(){
  b2 = "B2";
}
// DECLARED ON GLOBAL
// console.log(c2); // Error
c2 = "C2"
console.log(c2); // C2
