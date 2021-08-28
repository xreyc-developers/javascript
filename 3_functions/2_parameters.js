/*
  PARAMETERS
*/

// DEFAULT PARAMTERS
function function1(x,y){
  if(x === undefined) { x = 1 }
  if(y === undefined) { y = 1 }
}
// ES5
function function2(x = 1,y = 1) {}

// ARGUMENTS
function sumAll() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
console.log(sumAll(1, 123, 500, 115, 44, 88)); // 871
