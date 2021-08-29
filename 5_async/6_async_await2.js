/*
  ASYNC/AWAIT
*/

// CONVERTING PROMISES INTO ASYNC AWAIT
let a = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('SAMPLE1');
  },300);
});

// PROMISE WAY
a.then(
  (value) => {
    console.log(value);
  }
)
.catch(
  (error) => {
    console.log(error);
  }
); // Result: SAMPLE2

// ASYNC AWAIT WAY
async function function1() {
  let b = await a;
  console.log(b); // SAMPLE1
}
function1();

// ERROR HANDLING
// PROMISE CATCH METHOD
async function function2() {
  throw("ERROR HANDLING 1"); //RETURNS AN ERROR
  return await a;
}
function2().catch(
  (errors) => {
    console.log(errors);
  }
); // Result: ERROR HANDLING 1

// TRY CATCH METHOD
async function function3() {
  try {
    throw("ERROR HANDLING 2")
    return await a;
  } catch(e) {
    console.log(e);
  }
}
function3(); // ERROR HANDLING 2
