/*
  PROMISES

  PROMISE CALLBACKS
  - resolve(result, value); // SUCCESS
  - reject(error object); // ERROR

  PROMISE OBJECTS
  - Pending (working)
  - Fullfiled (result is ready)
  - Rejected (error object)
  PROMISE OBJECTS SUPPORT 2 PROPERTIES
  - state
  - result
  (you cannot access promise state and result)
  (use Promise method to handle promises)

*/

// PROMISE OBJECT
let promise1 = new Promise(function(myResolve,myReject) {
  myResolve(); // SUCCESSFUL
  myReject(); // ERROR
});
promise1.then(
  function(value) { console.log('PROMISE1 SUCCESS'); },
  function(error) { console.log('PROMISE1 ERROR'); }
);
// Result: PROMISE1 SUCCESS

/*
# HOW TO USE PROMISE
myPromise.then(
  function(value) { SUCCESS CODES }
  function(error) { ERROR CODES }
);

# Promise.then() takes two optional arguments
- value
- error
*/

// DEFIRRENCE BETWEEN A CALLBACK AND A PROMISE
// USING A CALLBACK
setTimeout(function() {
  function1('CALLBACK1 RUNS');
},2000);
function function1 (value) {
  console.log(value)
}
// RESULT: CALLBACK1 RUNS

// USING A PROMISE
let promise2 = new Promise(function(xResolve,xReject) {
  setTimeout(function() {
    xResolve("XRESOLVE RUNS")
  }, 1000);
});
promise2.then(function(value) {
  console.log(value);
});
// RESULT: XRESOLVE RUNS

// WATING FOR A FILE
// CALLBACK
const fs = require('fs');
function functionA1 (data) {
  console.log(data);
}
function functionA2 (myCallback){
  setTimeout(function () {
    let rawdata = fs.readFileSync('data.json');
    let student = JSON.parse(rawdata);
    myCallback(student)
  }, 2000);
}
functionA2(functionA1);
/* RESULT:
[
  { name: 'Reyco', age: 24 },
  { name: 'Kezeah', age: 23 },
  { name: 'Reniel', age: 22 },
  { name: 'John Rey', age: 18 }
]
*/

// PROMISE
let promise3 = new Promise(function (xResolve,xReject) {
  setTimeout(function () {
    let rawdata = fs.readFileSync('data.json');
    let student = JSON.parse(rawdata);
    if(student.length > 0) {
      xResolve(student);
    } else {
      xReject("No data available");
    }
  }, 2000);
});
promise3.then(
  function (value) { console.log(value); },
  function (error) { console.log(error); }
);
/* RESULT:
[
  { name: 'Reyco', age: 24 },
  { name: 'Kezeah', age: 23 },
  { name: 'Reniel', age: 22 },
  { name: 'John Rey', age: 18 }
]
*/
