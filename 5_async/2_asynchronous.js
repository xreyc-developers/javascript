/*
  ASYNCHRONOUS
  - a function running in parallel with other functions.
  - in real world, callbacks are most often used with asynchronous functions.
*/

// ASYNCHRONOUS OBJECTS
// SAMPLE 1 (SET TIMEOUT)
// (function1 runs after 1 seconds)
setTimeout(function1, 1000);
function function1 () {
  console.log('SAMPLE 1 RUNS');
}

// SAMPLE 2 (CALLBACK WITHIN A CALLBACK)
// (function2 runs after 1 seconds)
setTimeout(function () {
  function2();
},1000);
function function2 () {
  console.log('SAMPLE 2 RUNS');
}

// SAMPLE 3 (ASSYNCHONOUS)
function function3A () { console.log('SAMPLE 3A RUNS'); }
function function3B () { console.log('SAMPLE 3B RUNS'); }
// these two runs in parallel
setTimeout(function3A,2000);
setTimeout(function3B,1000);
// SAMPLE 3B RUNS
// SAMPLE 3A RUNS

// SAMPLE 4
//setInterval(function4,1000);
function function4 () {
  console.log('SAMPLE 4 RUNS');
}
// SAMPLE 4 (after 1 second)
// SAMPLE 4 (after 2 seconds)
// SAMPLE 4 (after 3 seconds)

// SAMPLE 5
const fs = require('fs');
function function5A (data) {
  console.log(data);
}
setTimeout(function () {
  let rawdata = fs.readFileSync('data.json');
  let student = JSON.parse(rawdata);
  function5A(student)
}, 4000);
/* Result
[
  { name: 'Reyco', age: 24 },
  { name: 'Kezeah', age: 23 },
  { name: 'Reniel', age: 22 },
  { name: 'John Rey', age: 18 }
]
*/
