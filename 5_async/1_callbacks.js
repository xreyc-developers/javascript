/*
  CALLBACKS
  - a functions that runs after the another/current function is finished.
*/

////////////////// FUNCTION SEQUENCE //////////////////
// javascript are executed in the sequence they are called
function function1 () {
  console.log('Function1');
}
function function2 () {
  console.log('Function2');
}
function2(); // Function2
function1(); // Function3

// COMMON PROBLEMS (REASONS TO USE CALLBACK)
// SAMPLE 1 (you have to call two separate functions instead of 1)
function function3 (result) {
  console.log(result);
}
function function4 (a,b) {
  return a * b;
}
let function4Result = function4(5,10); // (call 1)
function3(function4Result); // 50 (call 2)
// SAMPLE 2 (you cannot prevent function5 from displaying the result)
// while the calculation is running, the function5 will not wait for the result
// before executing its logic
function function5 (result) {
  console.log(result);
}
function function6 (a,b) {
  let result =  a * b;
  function5(result);
}
function6(3,3); // 9 (call 2)

////////////////// JAVASCRIPT CALLBACK //////////////////
// callback works after the calculation is finished.
function functionA(result) {
  console.log(result);
}
function functionA1(num1,num2,callbackFn) {
  let sum = num1 + num2;
  callbackFn(sum); // runs after the calculation is finished
}
functionA1(4,4,functionA); // 8
