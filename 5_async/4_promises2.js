/*
  PROMISES
  - Promise object represents the eventual completion (or failure) of assychronous operation
  and its resulting value

  PROMISE STATES
  - Pending (initial state)
  - Fulfilled (Successful)
  - Rejected (Failed)

  PROMISE METHODS
  * Promise.then(resolveCallback,rejectCallback)
    - has two arguments
      1. callback for the resolve case
      2. callback for the rejected case
  - Promise.catch()
  - Promise.finally()
*/

// CHAINED PROMISES
// then(successCallback, errorCallback)
// each then() returns newly generated promise object to the next then()
// which is optional
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 1 Success');
  }, 300);
});
promise1
  .then(// LEVEL 1 PROMISE HANDLER
    (value) => {
      console.log(value);
      return 'Pass to Level 2'
    },
    (error) => {
      console.log(error);
    }
  )
  .then(// LEVEL 2 PROMISE HANDLER
    (value) => {
      console.log(value);
    },
    (error) => {
      console.log(error);
    }
  )
  .then(// LEVEL 3 PROMISE HANDLER
    () => {
      console.log('Level 3 Success');
    },
    (error) => {
      console.log('Level 3 Error');
    }
  )
/* RESULT:
Promise 1 Success
Level 2 Success
Level 3 Success
*/

// catch()
// catch() is just a then without a slot for success callback
// there are disadvantage on then() method, you must maintain all the error
// down the chain of then method.
// Putting catch() will make the things a lot easier.
/* Best syntax
Promise
  .then(resolvedHandlerA)
  .then(resolvedHandlerB)
  .then(resolvedHandlerC)
  .catch(allRejectionHandler)
*/
promise1
  .then(value => {
    console.log(value + '[THEN1]');
    return value + '[THEN1]';
  })
  .then(value => {
    console.log(value + '[THEN2]');
    return value + '[THEN2]';
  })
  .then(value => {
    console.log(value + '[THEN3]');
  })
  .catch(error => { // HANDLE THE ERROR HERE
    console.log(error);
  })
// RESULT: Promise 1 Success[THEN1][THEN2][THEN3]

// finally()
// is called whether the promise is settled with resolved or rejected
promise1
  .then((value) => {
    console.log(value + 'A');
    return value + 'A';
  })
  .then((value) => {
    console.log(value + 'B');
    return value + 'B';
  })
  .then((value) => {
    console.log(value + 'C');
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log('Finally is called');
  })
/* RESULT:
Promise 1 SuccessABC
Finally is called
*/
