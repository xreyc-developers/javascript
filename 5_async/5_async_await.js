/*
  ASYNC/AWAIT
  - makes promises easier to write

  async - makes a function return a promise
  await - makes a function wait for a promise
*/

// ASYNC
// enable you to return a value if a function has
// asynchronous operation inside
// IF ASYNC FUNCTION DOES NOT HAVE ASYNC OPERATION INSIDE
async function function1() { return "SAMPLE1"; }
let a = function1();
console.log(a); // Promise { 'SAMPLE1' } (UNUSABLE) - returns the promise object (use the then methods)
a.then(
  function(value) { console.log(value); },
  function(error) { console.log(error); }
)
// Result: SAMPLE1 // value is returned

// IF ASYNC FUNCTION CONTAINS A PROMISE OR OTHER ASYNCHRONOUS FUNCTION INSIDE
async function function2() { return Promise.resolve("SAMPLE2") }
let b = function2();
console.log(b); // Promise { <pending> } (UNUSABLE)
b.then(
  function(value) { console.log(value); },
  function(error) { console.log(error); }
)
// Result: SAMPLE2 // value is returned

// USING FUNCTION WITHOUT ASYNC
// the problem with this is that you cant use await inside the function
// await enables you to get the result of an specific promise
function function3() { return Promise.resolve("SAMPLE4") }
let c = function3();
console.log(c); // Promise { 'SAMPLE4' } (UNUSABLE)
c.then(
  function(value) { console.log(value);}
)
// Result: SAMPLE4

// PROMISE
// ON A PROMISE WE CAN ONLY USE THE VALUE OF A PROMISE USING A THEN METHOD
// HERE IS WHERE ASYNC AND AWAITS COMES IN
let d = new Promise((resolve, reject) => {
  setTimeout(function() {
    resolve('SAMPLE5')
  }, 1000)
})
d.then(
  (value) => {
    console.log(value);
  }
)
// RESULT: SAMPLE5

// AWAIT - WORKS ONLY INSIDE AN ASYNC FUNCTION
// MAKES A FUNCTION WAIT FOR A PROMISE
// ASYNCHRONOUS ACTIONS INSIDE A FUNCTION SOMETIMES DOES NOT RETURN EMEDIATE
// RESULT AND WE NEED A RESULT FOR A SPECIFIC CALCULATIONS.
// AWAIT MAKES IT POSIBLE WITHOUT USING THE THEN() METHOD
async function function4() {
  let e = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('SAMPLE6')
    },3000)
  });
  console.log(e); // pending
  let d = await e;
  console.log(d); // SAMPLE6
}
function4()
